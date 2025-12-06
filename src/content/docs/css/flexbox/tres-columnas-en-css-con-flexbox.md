---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BBHK525%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T063940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpKuRNUvUH9BQAQbASzT%2FA88kAWQMvJC4Nh1HUarKJFQIhAPyCMM9OMF4hofxbTaNFIZnQpiCuhj36mqMM%2BmEX%2F4pxKv8DCG8QABoMNjM3NDIzMTgzODA1IgwQmToF59wM7rPpG0oq3AO55FotZESZImMJPQ%2BB324o4F2uOBthspGozBB1RGem1EcBP%2FKFYPS6ENlp9OEBDb5aICqn4MuOS0zuDJRYmnl%2B4mowklxDha22cd723FT7s1k8WAlyWfDftCHjk7VJyPJhXMbKMq8pXSu4FZagT09YRud6%2FtFtmDhVE54infMznZSdEZhDdPDMR0TNyQUmx22RbcJKc%2Bu%2FeSMPeEVXmx8njZpoQOYnMJwMhEME6QeclJaFmKIFzPWuOtx8RQM3U1jmMs7Eo9P7p2mF%2BUsWhIFEZHl16prcza73BhDVJ6Vi44astS3c5IocP4ejJZmOPsSHf6dNWzCCIRVV%2FojMMk6PlktcglmtG82ebsIAte3Sjt23BlzM5Hb6ZeUbssNdkMIuz1o1Q9s0k5dwlIwb8xL1piZMBWUMRU7cqQni0oIbxmxFLioTFHnggjljYsFUHtroPVXtnrlQSnOfMV%2F4rxTofagp3ns9BjnHsLfhTAWqF7QL6Tr9hShAeIhcMk5hsKnonjQRCsYE7aW3imVBxvLn8KbPVkUpcSkie644ycwt1Vhs%2FhlllATg4%2BTl5hX9UbN975oSfE1gq58dMT5J5BsSu6k9g1%2BBW26nAVDr%2FnqnMv%2FcJhXpywBccbrgzTCo%2Fc7JBjqkASSPChRc4ZqBCUhNIKtyXbrlcW0%2FRGdLyPfPIu1tocyD7lHxRiiiYyIyTDCgbEih5iWYX1GbB122VoJ7ialg7RjeuQKfwgSU4SScRZLIdyNI3DbZa03tfAMd0v0KCvFR6TGldsiQym6A8h2W%2B22YM7uKBpxhEca2o2DYoC3TZttKmXbMmSIrgHoT7njhCkEYN4pyu3KuaMbhFLqC1gHElbwo%2FZ3B&X-Amz-Signature=b3e3905a47628be1ceef19b3744efff618c850b32e23b0ce31e01378bf0b6a50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BBHK525%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T063940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpKuRNUvUH9BQAQbASzT%2FA88kAWQMvJC4Nh1HUarKJFQIhAPyCMM9OMF4hofxbTaNFIZnQpiCuhj36mqMM%2BmEX%2F4pxKv8DCG8QABoMNjM3NDIzMTgzODA1IgwQmToF59wM7rPpG0oq3AO55FotZESZImMJPQ%2BB324o4F2uOBthspGozBB1RGem1EcBP%2FKFYPS6ENlp9OEBDb5aICqn4MuOS0zuDJRYmnl%2B4mowklxDha22cd723FT7s1k8WAlyWfDftCHjk7VJyPJhXMbKMq8pXSu4FZagT09YRud6%2FtFtmDhVE54infMznZSdEZhDdPDMR0TNyQUmx22RbcJKc%2Bu%2FeSMPeEVXmx8njZpoQOYnMJwMhEME6QeclJaFmKIFzPWuOtx8RQM3U1jmMs7Eo9P7p2mF%2BUsWhIFEZHl16prcza73BhDVJ6Vi44astS3c5IocP4ejJZmOPsSHf6dNWzCCIRVV%2FojMMk6PlktcglmtG82ebsIAte3Sjt23BlzM5Hb6ZeUbssNdkMIuz1o1Q9s0k5dwlIwb8xL1piZMBWUMRU7cqQni0oIbxmxFLioTFHnggjljYsFUHtroPVXtnrlQSnOfMV%2F4rxTofagp3ns9BjnHsLfhTAWqF7QL6Tr9hShAeIhcMk5hsKnonjQRCsYE7aW3imVBxvLn8KbPVkUpcSkie644ycwt1Vhs%2FhlllATg4%2BTl5hX9UbN975oSfE1gq58dMT5J5BsSu6k9g1%2BBW26nAVDr%2FnqnMv%2FcJhXpywBccbrgzTCo%2Fc7JBjqkASSPChRc4ZqBCUhNIKtyXbrlcW0%2FRGdLyPfPIu1tocyD7lHxRiiiYyIyTDCgbEih5iWYX1GbB122VoJ7ialg7RjeuQKfwgSU4SScRZLIdyNI3DbZa03tfAMd0v0KCvFR6TGldsiQym6A8h2W%2B22YM7uKBpxhEca2o2DYoC3TZttKmXbMmSIrgHoT7njhCkEYN4pyu3KuaMbhFLqC1gHElbwo%2FZ3B&X-Amz-Signature=683b4a51e1660fa9126931a49a09671f71295dc24af1af3e4b15661558c939ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

