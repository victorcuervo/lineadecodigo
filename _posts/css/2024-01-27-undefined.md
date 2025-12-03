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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBWPPXSG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T173204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCZOawIGB2OWFUcTv036GRAySDNg7JLeEpPPtKTjDJVqwIgNT5IRwZhqIlBBOnZDXGMSxBlB8NHOdbdftPMG9W1XTQq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDK4gio9XfYOaRyULfyrcA31nu%2Bn5c1AtTcpByHzGxeoyO7w%2F%2BygDPhHAcpIoTYXuTNFc8JSgvJvR0T2L0fAR7e%2FjZBA0l8XGHQgBQqvseRyFtauuw4fxwakm0UIuTv1vWb7FsM5DFGdeK0nfabCkG9Lt%2Bjk4fzVrOUgsqxHZqhvSuxi%2FhT7auB8ZRzIO9mRj6IbW9aDcRT1toyJ8yy3%2FBZTeccRz0FqhyI01CWWbGqZ84sX7hBryHf%2FFvmpqNTVOk3CewCDTcflliJbABug5RRtxq%2F3PWE14EFXG0YthKk86plGafzvN7hbF9nAEpaKVSb4uGFCIb3Nd%2FVI3pUvc2QnnujdCKYGygHI1DNNCa9l0HKrP8eQrixaoHY6rHeApcaOjdU4lSTmGXhYu3jF2kGksitz7Fa0q3EHaIjMbp79q%2Bd4fkyfMlN%2BDoCaOQrfkC4gOooJD4hCd4D2Zf02zitL6YOxdJNJWLpTPNke6PRtOVcSKtG1sHoploBCc%2BqDEdJSb4H9eIAMtgIP9zhRU3lvRaUj6qplmxPr%2BoFJqyoJdfKIYvZlUK3hJkhR9Ru1J0w7vOq6mkfm8EcwMm3K22sQTiLI%2BkPwAIX83JLMTH%2FZ7xFoL0MktqXo6AySRViZHSgBpIbEq2AY6e4vjMM3bwckGOqUB3GbEm%2FKdKIfj%2B7gc3K0o4cyZFrus3EwkJpizGO90U8o4AvgLd0pj%2FAa%2BIWR86d8e3oCJqzHBJgqtBWfVZ9ZCNADz1TEM75UUPQAamMlUBZtr%2Ft%2BbI8c%2BiOd4497foJnXFq8frOZXi624YiWohE9OnRc3Lrq6SvMz%2BIYJqHoYmV%2BkaMg6rfgXnLib7JxtEsbUKAyycVPJtNfWVLAWIZDqzP%2FzUat%2B&X-Amz-Signature=268ba7f27a8710c612c32fe0bfc5acf0e202ff40627c8e44cbc8f946ebd84a8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBWPPXSG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T173204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCZOawIGB2OWFUcTv036GRAySDNg7JLeEpPPtKTjDJVqwIgNT5IRwZhqIlBBOnZDXGMSxBlB8NHOdbdftPMG9W1XTQq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDK4gio9XfYOaRyULfyrcA31nu%2Bn5c1AtTcpByHzGxeoyO7w%2F%2BygDPhHAcpIoTYXuTNFc8JSgvJvR0T2L0fAR7e%2FjZBA0l8XGHQgBQqvseRyFtauuw4fxwakm0UIuTv1vWb7FsM5DFGdeK0nfabCkG9Lt%2Bjk4fzVrOUgsqxHZqhvSuxi%2FhT7auB8ZRzIO9mRj6IbW9aDcRT1toyJ8yy3%2FBZTeccRz0FqhyI01CWWbGqZ84sX7hBryHf%2FFvmpqNTVOk3CewCDTcflliJbABug5RRtxq%2F3PWE14EFXG0YthKk86plGafzvN7hbF9nAEpaKVSb4uGFCIb3Nd%2FVI3pUvc2QnnujdCKYGygHI1DNNCa9l0HKrP8eQrixaoHY6rHeApcaOjdU4lSTmGXhYu3jF2kGksitz7Fa0q3EHaIjMbp79q%2Bd4fkyfMlN%2BDoCaOQrfkC4gOooJD4hCd4D2Zf02zitL6YOxdJNJWLpTPNke6PRtOVcSKtG1sHoploBCc%2BqDEdJSb4H9eIAMtgIP9zhRU3lvRaUj6qplmxPr%2BoFJqyoJdfKIYvZlUK3hJkhR9Ru1J0w7vOq6mkfm8EcwMm3K22sQTiLI%2BkPwAIX83JLMTH%2FZ7xFoL0MktqXo6AySRViZHSgBpIbEq2AY6e4vjMM3bwckGOqUB3GbEm%2FKdKIfj%2B7gc3K0o4cyZFrus3EwkJpizGO90U8o4AvgLd0pj%2FAa%2BIWR86d8e3oCJqzHBJgqtBWfVZ9ZCNADz1TEM75UUPQAamMlUBZtr%2Ft%2BbI8c%2BiOd4497foJnXFq8frOZXi624YiWohE9OnRc3Lrq6SvMz%2BIYJqHoYmV%2BkaMg6rfgXnLib7JxtEsbUKAyycVPJtNfWVLAWIZDqzP%2FzUat%2B&X-Amz-Signature=2f7dc712617c0f50beccf0836766e8c324ceb65c2ffd578e5269920af54697c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

