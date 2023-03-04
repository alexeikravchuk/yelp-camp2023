(function () {
  'use strict';

  const img = document.getElementById('image');

  img &&
    (img.onchange = () => {
      const list = new DataTransfer();
      [].forEach.call(img.files, (file, i) => {
        if (file.size > 1_048_576 * 2) {
          return alert('Max image size is 2Mb');
        }
        if (i == 4) {
          return alert('Allowed Max 4 images');
        }

        list.items.add(file);
      });

      img.files = list.files;
    });

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.validated-form');

  // Loop over them and prevent submission
  Array.from(forms).forEach(function (form) {
    form.addEventListener(
      'submit',
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
})();
