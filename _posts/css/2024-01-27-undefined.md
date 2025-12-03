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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF27JJQ4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T095215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIGEIjisB2RtwDv6HgnYykmcePbE%2Fi3%2FGYXABHMJSGP5RAiEA6xBISLlLjunQ9SZKTgNqwYn6V2M6DslNnp3zNHQqkSMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDI9cY8QPl%2FNpVLr9hSrcA%2BVpuTbr%2FiOQz8Vi5PNGtlJqMD6dcNDV92npCnhjT%2FK7PbVBsIF8DspfMekiJevlpVURF6qKtZtSsfIs5HGA2Xe8GZYDVGoUo%2F%2FgoVZKZuMvQars%2FBp0A102WsP%2BEFAm3YNZQxLJv1RodBHXKKHs7pmtWfURZ8xXCUJyeDTCEMZ3FbbxAD%2F%2BQJ97jFRnTZCfUEXo0rGYxoR0ZEDtl5ht9Ipr7sacFi%2FLkH%2FJPSY%2BfayDdjfAs107QnXr9TIs3Hrsipxqhp0oEI09xjQeeFFKWDR%2B%2FAIDNECFMNZWd3R2DEqRYzVII2Lc8ozOYbHZ70q0Qrlz63qCehxeE9Oby%2Fc%2BCBj4F1Yyr3auUcsh39tkzXZSktXCOBDvXmwdT6B4Ha%2Bw3EYHyzUS87p0BGohL%2F5RE5N8P466x9H6oT8ZvDdH52nqE2nTUPGpTR4FOt23Qa4RyIqmRnf7%2BzJF4TXGHCoUEUSScDKHO7%2BgUZX4C4Hs5JHPNAIMNAT4HM8qY3q38mrwdFPoRWn%2Fhfd8Ub9OOurp5xR4L7v%2Fxzs4BOeYeE68XLTiuIdhevp1cOZNgNrGVqOpCVFaqExWVtzt2FSTYoL6CLWCVDa4FGgSkgB6IM%2B%2Fop7CT%2FXht83WTcQZoOv1MOf2v8kGOqUBS12eONXy4lBkinBI8HNF4HC4q96qBYHV6JyyJtM89g7V%2F1wJgfi%2B16F3OuOe7JO8NDVJvOKlB82eRe5s7ZfloipfgTyVapNK61he9BQYlUO57%2B%2BYYs6AInmynS487Uy8pd6gmV6w5QVDbmEdVA9PmEGs%2FBqhh6viqHpBaPCYskL4aBjO17JfNWs1505xB0H%2Bs4Y26N82inPdYLT9UyFuxKxiPzBz&X-Amz-Signature=1651e5bdd702cd1d0bdf83adec01d21b2ddca88bb4c4207ba541fdb16c4a9691&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF27JJQ4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T095215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIGEIjisB2RtwDv6HgnYykmcePbE%2Fi3%2FGYXABHMJSGP5RAiEA6xBISLlLjunQ9SZKTgNqwYn6V2M6DslNnp3zNHQqkSMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDI9cY8QPl%2FNpVLr9hSrcA%2BVpuTbr%2FiOQz8Vi5PNGtlJqMD6dcNDV92npCnhjT%2FK7PbVBsIF8DspfMekiJevlpVURF6qKtZtSsfIs5HGA2Xe8GZYDVGoUo%2F%2FgoVZKZuMvQars%2FBp0A102WsP%2BEFAm3YNZQxLJv1RodBHXKKHs7pmtWfURZ8xXCUJyeDTCEMZ3FbbxAD%2F%2BQJ97jFRnTZCfUEXo0rGYxoR0ZEDtl5ht9Ipr7sacFi%2FLkH%2FJPSY%2BfayDdjfAs107QnXr9TIs3Hrsipxqhp0oEI09xjQeeFFKWDR%2B%2FAIDNECFMNZWd3R2DEqRYzVII2Lc8ozOYbHZ70q0Qrlz63qCehxeE9Oby%2Fc%2BCBj4F1Yyr3auUcsh39tkzXZSktXCOBDvXmwdT6B4Ha%2Bw3EYHyzUS87p0BGohL%2F5RE5N8P466x9H6oT8ZvDdH52nqE2nTUPGpTR4FOt23Qa4RyIqmRnf7%2BzJF4TXGHCoUEUSScDKHO7%2BgUZX4C4Hs5JHPNAIMNAT4HM8qY3q38mrwdFPoRWn%2Fhfd8Ub9OOurp5xR4L7v%2Fxzs4BOeYeE68XLTiuIdhevp1cOZNgNrGVqOpCVFaqExWVtzt2FSTYoL6CLWCVDa4FGgSkgB6IM%2B%2Fop7CT%2FXht83WTcQZoOv1MOf2v8kGOqUBS12eONXy4lBkinBI8HNF4HC4q96qBYHV6JyyJtM89g7V%2F1wJgfi%2B16F3OuOe7JO8NDVJvOKlB82eRe5s7ZfloipfgTyVapNK61he9BQYlUO57%2B%2BYYs6AInmynS487Uy8pd6gmV6w5QVDbmEdVA9PmEGs%2FBqhh6viqHpBaPCYskL4aBjO17JfNWs1505xB0H%2Bs4Y26N82inPdYLT9UyFuxKxiPzBz&X-Amz-Signature=bda39b7d03702913f9870843be79f0844ca0f97981279ef9858e69d19fc4d748&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

