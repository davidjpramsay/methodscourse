import React, { useEffect, useRef } from 'react';

let counter = 0;

const GeoGebra = ({ id }) => {
  const ref = useRef(null);

  useEffect(() => {
    const checkGGB = setInterval(() => {
      if (window.GGBApplet) {
        clearInterval(checkGGB);
        const params = {
          "appName": "geogebra", 
          "width": ref.current.offsetWidth, 
          "height": ref.current.offsetHeight, 
          "showToolBar": false, 
          "showAlgebraInput": false, 
          "showMenuBar": false,
          "showFullscreenButton": true,
          "material_id": id,
        };
        const ggbApplet = new window.GGBApplet(params, true);
        ggbApplet.inject(ref.current.id);
      }
    }, 100);
  }, [id]);

  counter += 1;
  const divId = `ggb-element-${counter}`;

  return (
    <div style={{ width: "100%", paddingBottom: "75%", position: "relative" }}>
      <div id={divId} ref={ref} style={{ position: "absolute", width: "100%", height: "100%" }}></div>
    </div>
  );
};

export default GeoGebra;
