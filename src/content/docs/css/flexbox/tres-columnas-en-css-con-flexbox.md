---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IOSRONH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCID9vuk%2BdjTNXfDuWpXWIW6K5f5qHGGGuj1eTzobAWdcYAiEAwRB9NHYy4gnnAEbv61%2Fzmfs0%2F%2FO1erzNTowNT0Qcqvsq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDJzT9kguwdf0CDE7sircA4I5H5cECepOt3Lx7u%2FHAuj7hJcleAzriIX4I2kgJG6KPKNN00OPGeK6StAyBFHG3krQRg%2BNoDY3v5BUQNwMZioncJ09YkPO4Btgbuac0H53jFBPHr1CqZ17BnrmXre%2FUORG4DW%2Bg2TR5q9k9Eu1kCWZSw00BbBlmJSUf9enx0KQvI96S6WNFkS2GGOdYsD4XQn8Ztk%2Bgw4%2FgPO%2Bm6wSg3hm79yodkgmasLLIrbDdVDa2fSMOdFqK7CCGJ2iHiWvG7oUURmG%2B29uOPZ56mbaP0MddJ%2B6wewn4UBHAtRGaVquwLn8CTS%2BosIqlKXXOowCfIsOu1j3CcspT9wR0kXF1DcjtK01WnOVqSZs0ckW95oP0WUPJjBFHA4aOQwmYaDqLdhnTUQu1VWGx1QzaLMam8DP9dMVytBtAjGgOS77nYAMDrCLhAy8TN4C17plwxvmXxG5aysswJS00%2Ftko7PpHI4fGYUBQDI3s53WVDlvccpTdVwmC8jA8ycJSp0zcNDfHtqHIuyfo2pqtUeWzAoDtyo4KmfaoOIl0k17v%2Bjq6Bqf6rhzz9QyIPve6w6iMOEfUE4Ouya5gnMhFPOgsf8Ff2B9u%2BSpkVyemM9CZTMrFpSQlai6SsKIH2hyh45sMOLyw8kGOqUBrPdc0%2Ftd3n%2BXpbqdOyj8%2FhLJMpeu8%2BWKU1o91SxiUQvve0ZOTyx8MDtLmrqG39dXYdDGT3Pt6SWj5pBhvJrgiAtuaaASepy7jUT8%2FVOoRfq4O8l0Ns5aXuQdEy0Q8iN0hX3Ft2iTFfXH4DmF2JwjUurBPjuGhA38ZTqpX5do9QbLyHxUx%2BQ7FXR0eckZF0PLWRqZa5fKb2v0g8AJ4%2F8Nxo210t0E&X-Amz-Signature=780f66ee0b185961a1095ec1e47ea34b0680fb41e2e568e1cc78baaea305bc18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IOSRONH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCID9vuk%2BdjTNXfDuWpXWIW6K5f5qHGGGuj1eTzobAWdcYAiEAwRB9NHYy4gnnAEbv61%2Fzmfs0%2F%2FO1erzNTowNT0Qcqvsq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDJzT9kguwdf0CDE7sircA4I5H5cECepOt3Lx7u%2FHAuj7hJcleAzriIX4I2kgJG6KPKNN00OPGeK6StAyBFHG3krQRg%2BNoDY3v5BUQNwMZioncJ09YkPO4Btgbuac0H53jFBPHr1CqZ17BnrmXre%2FUORG4DW%2Bg2TR5q9k9Eu1kCWZSw00BbBlmJSUf9enx0KQvI96S6WNFkS2GGOdYsD4XQn8Ztk%2Bgw4%2FgPO%2Bm6wSg3hm79yodkgmasLLIrbDdVDa2fSMOdFqK7CCGJ2iHiWvG7oUURmG%2B29uOPZ56mbaP0MddJ%2B6wewn4UBHAtRGaVquwLn8CTS%2BosIqlKXXOowCfIsOu1j3CcspT9wR0kXF1DcjtK01WnOVqSZs0ckW95oP0WUPJjBFHA4aOQwmYaDqLdhnTUQu1VWGx1QzaLMam8DP9dMVytBtAjGgOS77nYAMDrCLhAy8TN4C17plwxvmXxG5aysswJS00%2Ftko7PpHI4fGYUBQDI3s53WVDlvccpTdVwmC8jA8ycJSp0zcNDfHtqHIuyfo2pqtUeWzAoDtyo4KmfaoOIl0k17v%2Bjq6Bqf6rhzz9QyIPve6w6iMOEfUE4Ouya5gnMhFPOgsf8Ff2B9u%2BSpkVyemM9CZTMrFpSQlai6SsKIH2hyh45sMOLyw8kGOqUBrPdc0%2Ftd3n%2BXpbqdOyj8%2FhLJMpeu8%2BWKU1o91SxiUQvve0ZOTyx8MDtLmrqG39dXYdDGT3Pt6SWj5pBhvJrgiAtuaaASepy7jUT8%2FVOoRfq4O8l0Ns5aXuQdEy0Q8iN0hX3Ft2iTFfXH4DmF2JwjUurBPjuGhA38ZTqpX5do9QbLyHxUx%2BQ7FXR0eckZF0PLWRqZa5fKb2v0g8AJ4%2F8Nxo210t0E&X-Amz-Signature=f0d1e8f3a78d3072e1083a14bc94e8c2987a752a8a29a13470212092cbabe4db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

