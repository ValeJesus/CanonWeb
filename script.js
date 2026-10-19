document.addEventListener('DOMContentLoaded', () => {
  /* ---------- Modal de PDF ---------- */
  const modal = document.getElementById('pdfModal');
  const iframe = document.getElementById('pdfViewer');
  const title = document.getElementById('pdfTitle');
  const closeButton = document.getElementById('closePdfModal');

  if (modal && iframe && title && closeButton) {
    const openPdf = (pdfPath, pdfTitle) => {
      iframe.src = pdfPath;
      title.textContent = pdfTitle;
      modal.classList.add('open');
    };

    const closePdf = () => {
      modal.classList.remove('open');
      iframe.src = '';
    };

    document.querySelectorAll('.pdf-button').forEach((button) => {
      button.addEventListener('click', () => {
        openPdf(
          button.dataset.pdf || './arquivos/logotipo.pdf',
          button.dataset.title || 'Visualização do PDF'
        );
      });
    });

    closeButton.addEventListener('click', closePdf);
    modal.addEventListener('click', (event) => {
      if (event.target === modal) closePdf();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && modal.classList.contains('open')) closePdf();
    });
  }

  /* ---------- Abas da seção Susumu ---------- */
  const tabButtons = document.querySelectorAll('.tabs__btn');
  const panels = document.querySelectorAll('.tabpanel');

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.tab;

      tabButtons.forEach((b) => {
        const active = b === button;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-selected', String(active));
      });

      panels.forEach((panel) => {
        const active = panel.dataset.panel === target;
        panel.classList.toggle('is-active', active);
        panel.hidden = !active;
      });
    });
  });
});
