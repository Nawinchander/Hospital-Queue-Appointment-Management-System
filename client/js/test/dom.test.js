describe(
'DOM Test',

() => {

  test(
    'Should create button',

    () => {

      document.body.innerHTML =
      `
        <button id="btn">
          Submit
        </button>
      `;

      const btn =
        document.getElementById(
          'btn'
        );

      expect(btn)
      .not.toBeNull();
    }
  );
});


