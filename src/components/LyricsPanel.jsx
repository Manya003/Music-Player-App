const LyricsPanel = ({ lyrics }) => {
    return (
      <div className="absolute inset-0 bg-black/40 backdrop-blur-lg rounded-3xl p-4 overflow-y-auto text-sm">
        <h3 className="text-center mb-3 font-semibold">Lyrics</h3>
        <pre className="whitespace-pre-wrap">{lyrics}</pre>
      </div>
    );
  };
  
  export default LyricsPanel;