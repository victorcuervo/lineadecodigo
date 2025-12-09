---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IQLHLIB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T001829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvq34VP%2F63kWF%2BcI8qm2RTSWAf%2BuqYjLVsPXOZ5M1MAAiEA651YQ4uc1HyIA9BAH5ERB0vi3K8e968cc5L%2B4RqemdoqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEFOh8R9EM%2Bh1R0nSrcAzrzWMUcOO5PRg%2B5UA5xDuSu2KqLtEioKCofivH8m%2FkCqG8MZanIWEzHWKpeVg5etTrWssyKakoyUwqA8P3Ue0CouDDIEcSjMpDKKxQQu0nbbdUuwKj1a1WLeI8FeYSSw0pLW1zbrqX%2BO3TIJpGEbVGC72zndrTPk7yfYFLSA4j8GkR06MIg%2F5OaJgHoIkUPh%2BZVFnKGn%2Bx7CllAwrh2r%2Bu11o7KigNNOcJoDqlEs0rMNqzEbt0xJCh87Q2hJOgTRzYymo%2BrzysVEsADgp%2FTrN0Uzqx3rApLy3rDz8jHsE1nd%2FAARhQS7wPggOmo0KUydicyO1ald%2FaqFBktZc0514l4BsqAGifEefHM7EW8u5yaXXgIlt6MGHkMfypp%2FdJc1sbVOIJggnkggPHCRRRMYFXeh3Zx1MprZsSl7OFfy4j3Up%2Be5o2l3n5oKu%2BatUvvbDC0bfCjswBn%2FTHLHmyuJGw%2BIT95aDTeINO2hcUqN9wSC9yrZsW%2FClqwpHwe9Ghu5iKbzjDf2JmvXCnIYYG6uAhvO8MZUz5Dz3bc8AooL%2B7lRWtKdmv3okoVU8UMfQLv8RHog5fSAGuREyUtoYfuenZ7MC1ezJxKUhLJERazaBxuNHRtEq3IQXUHEFRBMM3C3ckGOqUBmfVUhEWxUmy9yL3lR05YotAFS1eNVkeIp%2BLqiuVsUu10y5FQvr9I6KycrtI42pQYWekF4DR0MXIciTdiCGbwSLzqkLh1j51S9iDa9Wu0MRVs0Zal9GkOQcb6E67%2Bd%2F4Y70iE9vmGpjzlckh78E6NygF%2Fktu9EPrbw8Nw8bkqQch8eTZgqVLTzqQZTg%2BlYMF1an8Eiy3Y5uI40MjhoT9L9tNrXFUJ&X-Amz-Signature=1c700f84ed015d02f0703f51480df3bdad3539b8f7e3d0193f89e88a70ea2c46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IQLHLIB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T001829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvq34VP%2F63kWF%2BcI8qm2RTSWAf%2BuqYjLVsPXOZ5M1MAAiEA651YQ4uc1HyIA9BAH5ERB0vi3K8e968cc5L%2B4RqemdoqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEFOh8R9EM%2Bh1R0nSrcAzrzWMUcOO5PRg%2B5UA5xDuSu2KqLtEioKCofivH8m%2FkCqG8MZanIWEzHWKpeVg5etTrWssyKakoyUwqA8P3Ue0CouDDIEcSjMpDKKxQQu0nbbdUuwKj1a1WLeI8FeYSSw0pLW1zbrqX%2BO3TIJpGEbVGC72zndrTPk7yfYFLSA4j8GkR06MIg%2F5OaJgHoIkUPh%2BZVFnKGn%2Bx7CllAwrh2r%2Bu11o7KigNNOcJoDqlEs0rMNqzEbt0xJCh87Q2hJOgTRzYymo%2BrzysVEsADgp%2FTrN0Uzqx3rApLy3rDz8jHsE1nd%2FAARhQS7wPggOmo0KUydicyO1ald%2FaqFBktZc0514l4BsqAGifEefHM7EW8u5yaXXgIlt6MGHkMfypp%2FdJc1sbVOIJggnkggPHCRRRMYFXeh3Zx1MprZsSl7OFfy4j3Up%2Be5o2l3n5oKu%2BatUvvbDC0bfCjswBn%2FTHLHmyuJGw%2BIT95aDTeINO2hcUqN9wSC9yrZsW%2FClqwpHwe9Ghu5iKbzjDf2JmvXCnIYYG6uAhvO8MZUz5Dz3bc8AooL%2B7lRWtKdmv3okoVU8UMfQLv8RHog5fSAGuREyUtoYfuenZ7MC1ezJxKUhLJERazaBxuNHRtEq3IQXUHEFRBMM3C3ckGOqUBmfVUhEWxUmy9yL3lR05YotAFS1eNVkeIp%2BLqiuVsUu10y5FQvr9I6KycrtI42pQYWekF4DR0MXIciTdiCGbwSLzqkLh1j51S9iDa9Wu0MRVs0Zal9GkOQcb6E67%2Bd%2F4Y70iE9vmGpjzlckh78E6NygF%2Fktu9EPrbw8Nw8bkqQch8eTZgqVLTzqQZTg%2BlYMF1an8Eiy3Y5uI40MjhoT9L9tNrXFUJ&X-Amz-Signature=ec56effbe527f10618025095f5ab7d27c1772656c7e30741968d0adb32c6d7ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

