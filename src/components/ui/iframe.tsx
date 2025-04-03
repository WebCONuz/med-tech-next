const Iframe = ({ url, title }: { url: string; title: string }) => {
  return (
    <div className="rounded-md overflow-hidden">
      <iframe
        src={url}
        width="100%"
        height="300"
        style={{ border: "none", opacity: 1 }}
        title={title}
        className="w-full h-[300px]"
      />
    </div>
  );
};

export default Iframe;
