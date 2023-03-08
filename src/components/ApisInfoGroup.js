
import React from "react";

const PokemonInfoLazy = React.lazy(() => import("./PokemonInfo"));
const StarwarsInfoLazy = React.lazy(() => import("./StarWarsInfo"));

const ApisInfoGroup = () => {

  const [showComponents, setShowComponents] = React.useState(false);


  const myRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((element) => {
        if (element.isIntersecting) {
          setShowComponents(true);
        }
      });
    });

    observer.observe(myRef.current);
  }, []);

  return <>

    <div ref={myRef} style={{ 'borderTop': '1px solid red' }}></div>

    {
      showComponents ?
        <React.Suspense fallback={<p>Cargando...</p>}>
          <PokemonInfoLazy></PokemonInfoLazy>
          <StarwarsInfoLazy></StarwarsInfoLazy>
        </React.Suspense> :
        <p>Componentes ocultos</p>
    }

  </>
}

export default ApisInfoGroup;