export default function addScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.type = "text/javascript";
    script.async = true;

    script.onload = () => {
      resolve(); // Script başarıyla yüklendiğinde Promise'i çöz
    };

    script.onerror = (error) => {
      reject(error); // Script yüklenirken bir hata oluştuğunda Promise'i reddet
    };

    document.body.appendChild(script);
  });
}
