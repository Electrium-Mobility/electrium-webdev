import Image from "next/image";

export default function Img(data:{
    dark: string,
    light: string,
    alt: string,
    id: string
}) {
    return (
        <>
        <Image src={data.light} alt={data.alt} fill id={data.id}
      onLoad={() => { if (window != undefined && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        (document.getElementById(data.id)!).setAttribute("src", data.dark);
        (document.getElementById(data.id)!).setAttribute("srcset", data.dark);
      } else {
        (document.getElementById(data.id)!).setAttribute("src", data.light);
        (document.getElementById(data.id)!).setAttribute("srcset", data.light);
      }}}></Image>  
        </>
    )
}