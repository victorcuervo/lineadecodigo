---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEYBJYHC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T094121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIEPp%2BxG3po6xamAtYY8Pyh6JUSftaUgU2TZwLR0czpJOAiEArJQQ2aI6ijmROQmky28annbQ4ff8QmItDD%2F8ew%2Byw5kq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDP4zI3LxjOF9hYQeFCrcA0Xmqp9ExgvxhMI3vC94LHOlDmAxh6tNJRFQgsoR2cUYzgU4tbmDWhEDCi8bE3kgqi4sNMW2SxlBWrYr%2F9EIga87MBFByC7YElu2NpA2Y1AAgDH9Y5H2gIng1%2Fw1k1Jz9qLLgfcIBiGOepWACDg9tt%2FiGPF0BbYGZqypmQUYnTMDbcsB1t9Bloa6kgGKGXr6raVlEGT6s6U7zgaSk1Q0skachccxP496QdBGeC5FWSSgSygVNWiYoGtr%2BfxDV8mfVi7mvh3u5hRe4mttsqAorDhlVuO9VtT1rya%2F9JzwiO0kntuitvaXjiJsoKZOggi7MA7ZgVfikfOp1NM12xz26Tfv23pTSJ71SA9qwoSutV4R07c7M0N0Kb7zuMmsNWOyZeLLAY6OS%2BRgywbFGdcwR1cDCHKC%2Bo9m4dkqXxf7RrX04iL2JDEEdpwnOipQ48LxVDPkPFajWABRFnKXFSgkAqjWHwIejrRxesS0H9qGP5e3Sfj%2FRs%2FiR%2BxbJbIqP%2F8wzUbffOSmnqmG%2FjY0xutSXZPSFOa5GYuohCWanmBh7t96nrEWPpxNA%2B9qUjgwVWM5zqZsNbXqbl0IBSToI4xAUymiQOdzU%2F2Nfu8%2FPmme%2BMvNSvR%2B1bpEuSpPAHdoMMj2v8kGOqUBjsjZcidAS27%2FVVfm%2Bju1qzDgSNMMgjXcTZMph5dU62nRzzuECs1ar0v2rFPUaxpkaHELdE4IMt9Tjks6GxdF8Augj7IzLdSC0BkgpJoJeUpeMfQttLwsxkhgklGIjDsqhqUpmFcBkd4581F7NpxeulqAlcw7DVbhfEco22ip5vCoelKtYf27Wfy7x1tIULv90z%2BX99T9Rs4DjwpTVD4MuQfIguhA&X-Amz-Signature=c42d3b5e493566721deba357d8ff805e91cb03eff9f4d52e8b8b461a5e74efde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEYBJYHC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T094121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIEPp%2BxG3po6xamAtYY8Pyh6JUSftaUgU2TZwLR0czpJOAiEArJQQ2aI6ijmROQmky28annbQ4ff8QmItDD%2F8ew%2Byw5kq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDP4zI3LxjOF9hYQeFCrcA0Xmqp9ExgvxhMI3vC94LHOlDmAxh6tNJRFQgsoR2cUYzgU4tbmDWhEDCi8bE3kgqi4sNMW2SxlBWrYr%2F9EIga87MBFByC7YElu2NpA2Y1AAgDH9Y5H2gIng1%2Fw1k1Jz9qLLgfcIBiGOepWACDg9tt%2FiGPF0BbYGZqypmQUYnTMDbcsB1t9Bloa6kgGKGXr6raVlEGT6s6U7zgaSk1Q0skachccxP496QdBGeC5FWSSgSygVNWiYoGtr%2BfxDV8mfVi7mvh3u5hRe4mttsqAorDhlVuO9VtT1rya%2F9JzwiO0kntuitvaXjiJsoKZOggi7MA7ZgVfikfOp1NM12xz26Tfv23pTSJ71SA9qwoSutV4R07c7M0N0Kb7zuMmsNWOyZeLLAY6OS%2BRgywbFGdcwR1cDCHKC%2Bo9m4dkqXxf7RrX04iL2JDEEdpwnOipQ48LxVDPkPFajWABRFnKXFSgkAqjWHwIejrRxesS0H9qGP5e3Sfj%2FRs%2FiR%2BxbJbIqP%2F8wzUbffOSmnqmG%2FjY0xutSXZPSFOa5GYuohCWanmBh7t96nrEWPpxNA%2B9qUjgwVWM5zqZsNbXqbl0IBSToI4xAUymiQOdzU%2F2Nfu8%2FPmme%2BMvNSvR%2B1bpEuSpPAHdoMMj2v8kGOqUBjsjZcidAS27%2FVVfm%2Bju1qzDgSNMMgjXcTZMph5dU62nRzzuECs1ar0v2rFPUaxpkaHELdE4IMt9Tjks6GxdF8Augj7IzLdSC0BkgpJoJeUpeMfQttLwsxkhgklGIjDsqhqUpmFcBkd4581F7NpxeulqAlcw7DVbhfEco22ip5vCoelKtYf27Wfy7x1tIULv90z%2BX99T9Rs4DjwpTVD4MuQfIguhA&X-Amz-Signature=a4040fe63c4c64399de86138d9b21c9081b151a09de4db99367816562d34f8a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

