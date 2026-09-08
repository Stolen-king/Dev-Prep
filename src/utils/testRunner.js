export async function runTests(html, css, js, testCases) {
  return new Promise((resolve) => {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    let runtimeError = null;

    const doc = iframe.contentDocument || iframe.contentWindow.document;

    iframe.contentWindow.onerror = function(msg, url, line, col, error) {
      console.error("Runtime error in student code:", msg);
      runtimeError = msg.toString();
    };

    // Load content
    // Write student's full HTML
    doc.open();
    doc.write(html);
    doc.close();

    // Inject CSS into <head>
    if (css) {
      const styleEl = doc.createElement('style');
      styleEl.textContent = css;
      const head = doc.querySelector('head') || doc.documentElement;
      head.appendChild(styleEl);
    }

    // Inject jQuery
    const jqScript = doc.createElement('script');
    jqScript.src = "https://code.jquery.com/jquery-3.6.0.min.js";
    const head = doc.querySelector('head') || doc.documentElement;
    head.appendChild(jqScript);

    // Inject JS into <body>
    if (js) {
      const scriptEl = doc.createElement('script');
      scriptEl.textContent = `
        try {
          ${js}
        } catch (e) {
          window.onerror(e.message);
        }
      `;
      const body = doc.querySelector('body') || doc.documentElement;
      body.appendChild(scriptEl);
    }

    const maxWait = setTimeout(() => {
      executeTests();
    }, 2000); // 2 second safety timeout

    let loaded = false;
    iframe.onload = async () => {
      if (!loaded) {
        loaded = true;
        clearTimeout(maxWait);
        setTimeout(() => {
          executeTests();
        }, 50); // slight delay to ensure scripts have parsed
      }
    };

    async function executeTests() {
      const results = [];
      let passedTests = 0;
      const totalTests = testCases.length;

      console.log(`=================================`);
      console.log(`Running ${totalTests} Tests`);
      console.log(`=================================`);

      for (let i = 0; i < testCases.length; i++) {
        const testCase = testCases[i];
        let result = {
          id: testCase.id || `test-${i}`,
          name: testCase.name,
          passed: false,
          message: "Test could not be completed."
        };

        try {
          const testRes = await testCase.test(iframe.contentDocument, iframe.contentWindow);
          result.passed = !!testRes.passed;
          result.message = testRes.message || (result.passed ? "Passed" : "Failed");
          
          if (runtimeError && !result.passed) {
             result.message += ` (Note: A runtime error occurred in your code: ${runtimeError})`;
          }
        } catch (e) {
          result.passed = false;
          result.message = `Test could not be completed because the submitted code caused an error: ${e.message}`;
        }

        console.log(`Running test: ${testCase.name}`);
        console.log(`Result:`, result);

        if (result.passed) passedTests++;
        results.push(result);
      }

      document.body.removeChild(iframe);

      const allPassed = totalTests > 0 && passedTests === totalTests;

      resolve({
        results,
        passedTests,
        totalTests,
        allPassed
      });
    }
  });
}