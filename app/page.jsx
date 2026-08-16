import flashcardsHtml from '../flashcards_tailandes_actualizado(2).html?raw';

export default function Page() {
  return (
    <iframe
      title="Flashcards Tailandes Pro"
      srcDoc={flashcardsHtml}
      style={{
        border: 0,
        display: 'block',
        height: '100vh',
        width: '100vw'
      }}
    />
  );
}
