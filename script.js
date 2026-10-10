document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('pdfModal');
  const iframe = document.getElementById('pdfViewer');
  const title = document.getElementById('pdfTitle');
  const closeButton = document.getElementById('closePdfModal');

  if (!modal || !iframe || !title || !closeButton) {
    return;
  }

  const openPdf = (pdfPath, pdfTitle) => {
    iframe.src = pdfPath;
    title.textContent = pdfTitle;
    modal.classList.add('open');
  };

  document.querySelectorAll('.pdf-button').forEach((button) => {
    button.addEventListener('click', () => {
      const pdfPath = button.dataset.pdf || './arquivos/logotipo.pdf';
      const pdfTitle = button.dataset.title || 'Visualização do PDF';
      openPdf(pdfPath, pdfTitle);
    });
  });

  closeButton.addEventListener('click', () => {
    modal.classList.remove('open');
    iframe.src = '';
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeButton.click();
    }
  });
});
