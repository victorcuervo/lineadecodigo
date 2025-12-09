---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466225NSX6P%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T041847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsuNEjTrFSOf9p9Al%2FeOaVQVy%2BFjdCbBZqJ7%2Bwc%2BpIjQIhAOxoA1fXXxq%2BQONWh9lTr2oPdLBta%2BHuJZyjkIJIGj5xKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhC9pzdfoK8y9eZdwq3ANN3TJWzP4BRS7f%2BivNrSMN1UWLQjBw8NZC9S4bVJTqUVl9KgneK%2FjpSl4uI%2Bqy1of4%2FxkE4yf9SODAvxmt6IhxL9V9z%2FlzUrTmdrrcQNMvTSPUuRLPdgYYW3UkRMJCFMTMPwLPvTjAfdQJlFpmKSmUYSstDvfJc9rZ58hbmApugOiwbcNSbDFtilyCuYRUQGYbveTbXu9iw%2Bnd%2BIc%2FMqHl%2FBbxSdqZZqu13VIzBAZx1Hs9s7VEKt1DFZllBYzorobQXA2fNjOFAgoOv7YTdsGtFyJCRZwoxcd9tOk86C4KkLSGsM6qbqG1Zq2zWnI1DUBoZ1STjyLPERn1dbPPBDYT4i8puzaf5u3FrUrJnS7KSv%2FshASmFzUUTSFOIqd8wu7amy0%2B9A9qdhUqPXd%2FqVKXioTbwLxVcXIMHqPB04HJN1j9TyHPWY0cwSEyY8n7mFLlmjEsfeQqHXRHfuoUH%2FsY6qqv6MT049%2B6XruOZgAPNRYkqfUKUknKE24iXBJnxa9ma%2FU0sNo7Iwv4HInwYaHzFFnjxPLQocDabVf6F%2FoIJzXETXaAJXe4oFmYuzRm7CsB9Ivua6tKIYtdr6jeHEX3fwtYyIc2ss9Myi02hGIULFUdVNla1VY1m%2FELeTCYrt7JBjqkAbGc9BybJ4aK2Bsj0ygKGggndaJcB8aarHk97357dNUu1zNZmPAOPgLqQ2yL7TAc8naFgf8QTfrCnBHVBBmIVc9sLPe5WJQw3h1IPoIRFHDRq8MdsxQ0f5vEzOzqHzpwAgYZfGFxhebyZDbcGh%2FZB%2BdnVCwRiAyJE0wcLcHVXqVms96diB%2BLpCHPy8nHfQDnSMocU6Swl%2FaaoSJQRx32ysT0Fnz%2F&X-Amz-Signature=6a9a9ab9a1ff7d5fb90fabffd303ef40badae9f1d967e4cc77a48b76703889ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466225NSX6P%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T041847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsuNEjTrFSOf9p9Al%2FeOaVQVy%2BFjdCbBZqJ7%2Bwc%2BpIjQIhAOxoA1fXXxq%2BQONWh9lTr2oPdLBta%2BHuJZyjkIJIGj5xKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhC9pzdfoK8y9eZdwq3ANN3TJWzP4BRS7f%2BivNrSMN1UWLQjBw8NZC9S4bVJTqUVl9KgneK%2FjpSl4uI%2Bqy1of4%2FxkE4yf9SODAvxmt6IhxL9V9z%2FlzUrTmdrrcQNMvTSPUuRLPdgYYW3UkRMJCFMTMPwLPvTjAfdQJlFpmKSmUYSstDvfJc9rZ58hbmApugOiwbcNSbDFtilyCuYRUQGYbveTbXu9iw%2Bnd%2BIc%2FMqHl%2FBbxSdqZZqu13VIzBAZx1Hs9s7VEKt1DFZllBYzorobQXA2fNjOFAgoOv7YTdsGtFyJCRZwoxcd9tOk86C4KkLSGsM6qbqG1Zq2zWnI1DUBoZ1STjyLPERn1dbPPBDYT4i8puzaf5u3FrUrJnS7KSv%2FshASmFzUUTSFOIqd8wu7amy0%2B9A9qdhUqPXd%2FqVKXioTbwLxVcXIMHqPB04HJN1j9TyHPWY0cwSEyY8n7mFLlmjEsfeQqHXRHfuoUH%2FsY6qqv6MT049%2B6XruOZgAPNRYkqfUKUknKE24iXBJnxa9ma%2FU0sNo7Iwv4HInwYaHzFFnjxPLQocDabVf6F%2FoIJzXETXaAJXe4oFmYuzRm7CsB9Ivua6tKIYtdr6jeHEX3fwtYyIc2ss9Myi02hGIULFUdVNla1VY1m%2FELeTCYrt7JBjqkAbGc9BybJ4aK2Bsj0ygKGggndaJcB8aarHk97357dNUu1zNZmPAOPgLqQ2yL7TAc8naFgf8QTfrCnBHVBBmIVc9sLPe5WJQw3h1IPoIRFHDRq8MdsxQ0f5vEzOzqHzpwAgYZfGFxhebyZDbcGh%2FZB%2BdnVCwRiAyJE0wcLcHVXqVms96diB%2BLpCHPy8nHfQDnSMocU6Swl%2FaaoSJQRx32ysT0Fnz%2F&X-Amz-Signature=97f520c6bebfa8935f6c736c4dc9b298930394d2b0e98db473a3ddc5f36ac1c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

