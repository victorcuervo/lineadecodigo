---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPUGFMSY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T150310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAcFO8jpRN4OcLXdLGKzgndmBMR0gpfQArqpeYiB4d4AIgc34k9iNn%2FCsaPwg%2BGAKwgvhvR3NOAmaNQzAFTZWqLeIqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7F4HpybIH3bjPCaSrcA3JTXY4JP4ubgzoTCcsQBcHadRRvIKPMG0lyG1iKnBd04Anpim5tIoCqmN3MKI61aLg23lVrwfju3s0kHfANuxqQelnKo%2FZ%2Fr%2BuD697%2BW2LIdnUss4UXaqvQdnsLHn0uM2n0NAmVt4%2Br6LDWl3YWcp2mE%2Fmgb%2FENAPEGnTWNbdzgx7Fl09%2BcmBZ9XwhSIFRz6lm%2F0sdGdSEdAEpbWLg0wDN18BpAIeDF7hGlBu0iruUomzIHmossbe%2BAZLyZ%2Bp%2BCT9sBn0h1NohAqewxcRd9Jc4%2Bm1wPzk9h4Wx4KMrwFmqitVpNbkICvVfiU2C8RAxDXlx%2FAWGxHrkLnxzwst03wsoEkCzYv1vm%2Bhl5wcO7OStxyP1irbNZQcUc%2FMgn0JMoDqznnOxwx01I16mw2kIY73wmAvVghtGkQaxIN%2FTfjxJ%2FqlRBLwYghWQbvn%2BEGzryGRoUAgIvXw%2FZ%2BR4n9NYD%2FdAX3YILu22yU7Gz8DtgJwFamFC8v1X%2FRkHkNU0J0Ycryi6wexMPzYYjKCYWIGbq%2F2xp0BrtvS8BdaRd1f6Xka54sFqHm214ai%2BF9dRh%2B5mX8ig0DlCQRgyJatB6erwSCUXMzUNlLTourCX34ZEOtrdMZzha4osL8%2BDawCZ1MODD28kGOqUBs%2BkrcFHenAU3Yqx26Km6KY0mFhKGGYgOclaXKNLt57pinX%2FeWx81MtRRz9hocP42ehfiVqcTnwyUjBuy20F3sHmbrI6N6K3D5JrX0IqRSglgO6kk2ZVPxSSTIo8qkiz2Ofi4Xis40CxP7Aqx7Lcye6JSFfwvAnlT0sHy%2Fct8mK65w%2B1X%2Bc2AUkbxU72SXetEZ5Bc%2F7nRjHeoqpgvT79IWgPuDY0n&X-Amz-Signature=0c50b6a030bbd9bf6a8d09acf74dc90785dfabc14491312771978f7e62c8ef1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPUGFMSY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T150310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAcFO8jpRN4OcLXdLGKzgndmBMR0gpfQArqpeYiB4d4AIgc34k9iNn%2FCsaPwg%2BGAKwgvhvR3NOAmaNQzAFTZWqLeIqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7F4HpybIH3bjPCaSrcA3JTXY4JP4ubgzoTCcsQBcHadRRvIKPMG0lyG1iKnBd04Anpim5tIoCqmN3MKI61aLg23lVrwfju3s0kHfANuxqQelnKo%2FZ%2Fr%2BuD697%2BW2LIdnUss4UXaqvQdnsLHn0uM2n0NAmVt4%2Br6LDWl3YWcp2mE%2Fmgb%2FENAPEGnTWNbdzgx7Fl09%2BcmBZ9XwhSIFRz6lm%2F0sdGdSEdAEpbWLg0wDN18BpAIeDF7hGlBu0iruUomzIHmossbe%2BAZLyZ%2Bp%2BCT9sBn0h1NohAqewxcRd9Jc4%2Bm1wPzk9h4Wx4KMrwFmqitVpNbkICvVfiU2C8RAxDXlx%2FAWGxHrkLnxzwst03wsoEkCzYv1vm%2Bhl5wcO7OStxyP1irbNZQcUc%2FMgn0JMoDqznnOxwx01I16mw2kIY73wmAvVghtGkQaxIN%2FTfjxJ%2FqlRBLwYghWQbvn%2BEGzryGRoUAgIvXw%2FZ%2BR4n9NYD%2FdAX3YILu22yU7Gz8DtgJwFamFC8v1X%2FRkHkNU0J0Ycryi6wexMPzYYjKCYWIGbq%2F2xp0BrtvS8BdaRd1f6Xka54sFqHm214ai%2BF9dRh%2B5mX8ig0DlCQRgyJatB6erwSCUXMzUNlLTourCX34ZEOtrdMZzha4osL8%2BDawCZ1MODD28kGOqUBs%2BkrcFHenAU3Yqx26Km6KY0mFhKGGYgOclaXKNLt57pinX%2FeWx81MtRRz9hocP42ehfiVqcTnwyUjBuy20F3sHmbrI6N6K3D5JrX0IqRSglgO6kk2ZVPxSSTIo8qkiz2Ofi4Xis40CxP7Aqx7Lcye6JSFfwvAnlT0sHy%2Fct8mK65w%2B1X%2Bc2AUkbxU72SXetEZ5Bc%2F7nRjHeoqpgvT79IWgPuDY0n&X-Amz-Signature=9990d6b8ed10de71933f9ff794003e6d383a6934e8d410a873be765be888bdf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

