---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2B4KUWJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T061300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC78qNwtLsJcccNBvfrMdMbJpJy0kaxQpNJdDGksNTfyQIhALCHrcclT%2BdsWZ5tHPrfwKCPf34OitAlmSP5OVEPKZEbKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7kHvFSzokJk1AHOIq3ANEEFQI2UokBo5FeUsuK9dD0QrpaHAqrSzsttEm4TYCNvgDEnaZmtzVGsrBzTcqkv5KqX2j8BRqwjTW8G9ex8uw7mXg41gXupXrLU39zS2mFXT3ff2%2B8cfiOmKKD8aUm3DC8AISJg65snam3%2BFrU0FrqtoSGR764iPcFI0hEV%2FsORAVbdA1w8FttDRCc1KV2wcTCusnkFfpvFNWexeI297wX9Pn6vmEWEjy8x05zpo59%2FzYtzfdti1m90EK6%2Bu1DuLCgS7Gw0FmyGaB1fy9R7UnJJqGFANd9HfHPtwZqQX%2BmsPlatTiygZ42XrPUZySyVICWFLl27MI3QeLNAAFl7%2FCyFXUZElzOTfvtOklyjmI1zFCNxfl9q%2F3VZekBAwvcntQNKYWIrrBjxu1Hrv3dAbyDyJlZRUEU2h87YOgQoHTwQIwN4CR7X9YLSKBzFQY981g%2FlYPj%2FJWhnQ1GeP1%2B2FeELCmPDH%2Fu9Khb3gdl4%2FwExUuCRMdXCWYmDxIgZ%2BM5Ix1mQKzSmGpHXCbjw19yZ0bbWyIgZSvLVudLFFLOZW3Y%2FyAQBAUOLzoPla6EFjKqgn7uS1RNMsXVtbFWC9m40D1Pv0x%2BBSFcJTUVce5XvNAg9esbnepGX5OJEUOljCX0NnJBjqkActLK%2BIKDhdDxG0wP65gRx%2FEzewdO5QERW1kYKPtfD0CaK53crP6g1Bx6NnNmV4fd03xh%2BbPiKrrJyPyIwx8P2fbvCEwtkN5LUAoiCI2I5gu9yN9eVZAg6TS6VvSCDMiZLoDLlAtZ5i7YRndfcUkFaR2eIBNQEcBoXqxsGjfFlZVyzfHr80AlF923OAt2191LZAkPRlaBl3moPxYT7kFN%2FK8rsAq&X-Amz-Signature=f2c5c11623d3b7fc86313181464f515af869f94a8b3b7746516ffc66dc06ec64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2B4KUWJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T061300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC78qNwtLsJcccNBvfrMdMbJpJy0kaxQpNJdDGksNTfyQIhALCHrcclT%2BdsWZ5tHPrfwKCPf34OitAlmSP5OVEPKZEbKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7kHvFSzokJk1AHOIq3ANEEFQI2UokBo5FeUsuK9dD0QrpaHAqrSzsttEm4TYCNvgDEnaZmtzVGsrBzTcqkv5KqX2j8BRqwjTW8G9ex8uw7mXg41gXupXrLU39zS2mFXT3ff2%2B8cfiOmKKD8aUm3DC8AISJg65snam3%2BFrU0FrqtoSGR764iPcFI0hEV%2FsORAVbdA1w8FttDRCc1KV2wcTCusnkFfpvFNWexeI297wX9Pn6vmEWEjy8x05zpo59%2FzYtzfdti1m90EK6%2Bu1DuLCgS7Gw0FmyGaB1fy9R7UnJJqGFANd9HfHPtwZqQX%2BmsPlatTiygZ42XrPUZySyVICWFLl27MI3QeLNAAFl7%2FCyFXUZElzOTfvtOklyjmI1zFCNxfl9q%2F3VZekBAwvcntQNKYWIrrBjxu1Hrv3dAbyDyJlZRUEU2h87YOgQoHTwQIwN4CR7X9YLSKBzFQY981g%2FlYPj%2FJWhnQ1GeP1%2B2FeELCmPDH%2Fu9Khb3gdl4%2FwExUuCRMdXCWYmDxIgZ%2BM5Ix1mQKzSmGpHXCbjw19yZ0bbWyIgZSvLVudLFFLOZW3Y%2FyAQBAUOLzoPla6EFjKqgn7uS1RNMsXVtbFWC9m40D1Pv0x%2BBSFcJTUVce5XvNAg9esbnepGX5OJEUOljCX0NnJBjqkActLK%2BIKDhdDxG0wP65gRx%2FEzewdO5QERW1kYKPtfD0CaK53crP6g1Bx6NnNmV4fd03xh%2BbPiKrrJyPyIwx8P2fbvCEwtkN5LUAoiCI2I5gu9yN9eVZAg6TS6VvSCDMiZLoDLlAtZ5i7YRndfcUkFaR2eIBNQEcBoXqxsGjfFlZVyzfHr80AlF923OAt2191LZAkPRlaBl3moPxYT7kFN%2FK8rsAq&X-Amz-Signature=c4e4eb1b9df838a652265e0f81eb58a1d9fd03164ab00767274a7024206f339f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

