---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CVYA5K2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T212346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHE1ncwxtSD%2BHD76ofpFchdU1Wr9kgwhpx3UgGHq862CAiEA%2FJYrgyRnOANq6vLN8HZ3%2FRXM1dB0feYaOPLaYqhcpYwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDF7%2BKxncdOqJ1wpQFSrcA6Kvp%2B6eKQCOmkSw0TDjWVYDCadIWAsVBTr%2FfSb1DjmMwplDWqu%2BMPeXUYjxnLwZT4d0%2FgknVNOObuZlrrMOQm3jbwJrpIRiLIbNpwMfCGMWrYF2ERq3m8NIB3HRniFfSjGdmKdD6uI4hj7o9HMPQXoODAqwo8alUFbNvLjANQL1t7a%2FTiZAubU%2B0ZPR3gH3ALE1AAoKQetn71DYLmBhE7Sq9Wi%2F1qhgM11HFNs5N36SBUTpncTwzZ%2Bm3Hf00LDZi9Gsz97H%2Bl2vQrFJeOOAV18fHIvQcHnCjJChAkkx5yB0o8atA75f%2FiV8mpaL%2B8yTmN%2B26fRRpClnQoLOgPhCCrExrEIl3N4SYIjnOX%2B8hFCB4EWtd8soV2fWjk8m7f1IQUmk1za%2FYWgPFsp7iWfrkPCtKqS5e37CCMeec7sWeZ0cQcmoEtzWDgiUEre5FvIC35JhTBSqnEjeqJ92FkDkvgEKAs3uBmQcM6rM4AiyEDzMw1wPNYH%2FkYKm17dUe4rNdjXjmJT5rlD1zwZRB5Mir84h8QrN3ZMPbGNGVGBwlck6tSZYAuomSKs7mEw41xeur3dgBIEusBqeCa2ATRtpSTlgDdoMgcT6Ux5crk5vqV5QzMvaqtIeqJ%2BPPUFEMNHL0ckGOqUBbCLiTg2rJUA0auHc7oB7As9yNTvjQatTa6FbzZ3SDTjno1cGYlRWho9WFEar6RQikEujZ9TiwWcLu7mXcRWMsqdkWA7F2%2BVZ2t%2FdHdHTpSc72FbrnbI1wT87%2BROIqDERO1i3Vr6mwbgLghI9qWX02g%2FeUi4rraqm1IvbUVwoZA8dhSKwjEx8pdJL1Wt61cACxxQpCg2CG5YRAL14%2FvsW3kX27zMC&X-Amz-Signature=e930eff76caa7f121e148d0b3faded83fb7ff6b60066c4573a07aec9ca137ac0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CVYA5K2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T212346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHE1ncwxtSD%2BHD76ofpFchdU1Wr9kgwhpx3UgGHq862CAiEA%2FJYrgyRnOANq6vLN8HZ3%2FRXM1dB0feYaOPLaYqhcpYwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDF7%2BKxncdOqJ1wpQFSrcA6Kvp%2B6eKQCOmkSw0TDjWVYDCadIWAsVBTr%2FfSb1DjmMwplDWqu%2BMPeXUYjxnLwZT4d0%2FgknVNOObuZlrrMOQm3jbwJrpIRiLIbNpwMfCGMWrYF2ERq3m8NIB3HRniFfSjGdmKdD6uI4hj7o9HMPQXoODAqwo8alUFbNvLjANQL1t7a%2FTiZAubU%2B0ZPR3gH3ALE1AAoKQetn71DYLmBhE7Sq9Wi%2F1qhgM11HFNs5N36SBUTpncTwzZ%2Bm3Hf00LDZi9Gsz97H%2Bl2vQrFJeOOAV18fHIvQcHnCjJChAkkx5yB0o8atA75f%2FiV8mpaL%2B8yTmN%2B26fRRpClnQoLOgPhCCrExrEIl3N4SYIjnOX%2B8hFCB4EWtd8soV2fWjk8m7f1IQUmk1za%2FYWgPFsp7iWfrkPCtKqS5e37CCMeec7sWeZ0cQcmoEtzWDgiUEre5FvIC35JhTBSqnEjeqJ92FkDkvgEKAs3uBmQcM6rM4AiyEDzMw1wPNYH%2FkYKm17dUe4rNdjXjmJT5rlD1zwZRB5Mir84h8QrN3ZMPbGNGVGBwlck6tSZYAuomSKs7mEw41xeur3dgBIEusBqeCa2ATRtpSTlgDdoMgcT6Ux5crk5vqV5QzMvaqtIeqJ%2BPPUFEMNHL0ckGOqUBbCLiTg2rJUA0auHc7oB7As9yNTvjQatTa6FbzZ3SDTjno1cGYlRWho9WFEar6RQikEujZ9TiwWcLu7mXcRWMsqdkWA7F2%2BVZ2t%2FdHdHTpSc72FbrnbI1wT87%2BROIqDERO1i3Vr6mwbgLghI9qWX02g%2FeUi4rraqm1IvbUVwoZA8dhSKwjEx8pdJL1Wt61cACxxQpCg2CG5YRAL14%2FvsW3kX27zMC&X-Amz-Signature=65530026ab1fcdb4fc877ea3a4402a103e2ac5e7348691d3796c9c6114e17eae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

