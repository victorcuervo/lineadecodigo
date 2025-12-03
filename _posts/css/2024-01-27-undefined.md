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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW3RPW4A%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T171852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIEt6ZaW3qzC3%2FHZoQUMbuTtWQk4zEYupjRsWoKOS%2FnC2AiAutWPJdyaYacV%2FU7nLR8KDDrTytoRdhjkRkRCTSiMc3yr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMtdFQ6XgYDMv3S%2BkaKtwDXHjZB5BqD4B%2FeQ6SXPlugKOnymlC0aEQmIeF79Q1QaLLap268KXnZu8IicktXBKzrLMLZRbnSOcJbrO88ubABSbUgZGLaXKVrokf5xYy1%2FLOBM0j%2BOpvf%2FVra6lcToWjDS8NgzppYJwYoR3GXNAtCjpp6FM2goKwmq0H%2BLxe1%2BYhfcwQJrxKZn7RdLqhHezFe5VaK5FP%2BYDW0qhzZ4cyN%2F9JdND0jkRoSQW93TU36OecRUZa3EhgV5Q8khUOJRaQPA4yGCRZ2p%2B5uveFg3uf37nT01%2Bw7MXVf3P9OHsxjcgHmS6xANO530olRobnMTaW%2BqCWUluY%2FD5UvY0bAlA07uU3ay0D9VuGCptA1Dsm9TU2WG%2B0gJG%2BVKQ%2B9Z%2BQ2GK9JCjeIFX2jhPbvAVucwOGHrEbWdLVmln19n1W9kwYWZ4mhiYNkyor1FZh8K65VFinZJ%2BRTjNdngAgpWXowu%2FvGk5JBFtRsULgIwjSczRM2b3U0HF61ZatyJBiV3lRqezEerfptf8ui7JqjXDLOXAPQu8KL8nVjpTeKiNRR%2FBlvJT53fZduE5YPFqu8NjIEwTeetr5twH999A%2Bmjw0knXdHRTasL3tUfr5u7CqIArSAqQ6xKpeVOqsDtBREYgwydrByQY6pgHg1lnK0S1jFwuL3wmTVmZqTf6EqoU%2BVUH%2BXNeq6Yf7im7oJUPm1NABKylgBwC9pxQpZT3Iutmo6WdHSnWSYU8ZYzfzq2KCG2y8RundnZS06gmf1%2F3ZO5ftB5Fio8WC12PKP3PGCATlI%2B2bEh72txP0Z74FTOCSZNyDNfvZNmLQMBO975qAq%2FI2eIjTflFQZh0EU3MMeqyqu6ZJUYV6syHHGJLeJ8rB&X-Amz-Signature=6028c91239891fad04175620c84fd9720a8250e5c9e02480e14ff4431d107a10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW3RPW4A%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T171852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIEt6ZaW3qzC3%2FHZoQUMbuTtWQk4zEYupjRsWoKOS%2FnC2AiAutWPJdyaYacV%2FU7nLR8KDDrTytoRdhjkRkRCTSiMc3yr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMtdFQ6XgYDMv3S%2BkaKtwDXHjZB5BqD4B%2FeQ6SXPlugKOnymlC0aEQmIeF79Q1QaLLap268KXnZu8IicktXBKzrLMLZRbnSOcJbrO88ubABSbUgZGLaXKVrokf5xYy1%2FLOBM0j%2BOpvf%2FVra6lcToWjDS8NgzppYJwYoR3GXNAtCjpp6FM2goKwmq0H%2BLxe1%2BYhfcwQJrxKZn7RdLqhHezFe5VaK5FP%2BYDW0qhzZ4cyN%2F9JdND0jkRoSQW93TU36OecRUZa3EhgV5Q8khUOJRaQPA4yGCRZ2p%2B5uveFg3uf37nT01%2Bw7MXVf3P9OHsxjcgHmS6xANO530olRobnMTaW%2BqCWUluY%2FD5UvY0bAlA07uU3ay0D9VuGCptA1Dsm9TU2WG%2B0gJG%2BVKQ%2B9Z%2BQ2GK9JCjeIFX2jhPbvAVucwOGHrEbWdLVmln19n1W9kwYWZ4mhiYNkyor1FZh8K65VFinZJ%2BRTjNdngAgpWXowu%2FvGk5JBFtRsULgIwjSczRM2b3U0HF61ZatyJBiV3lRqezEerfptf8ui7JqjXDLOXAPQu8KL8nVjpTeKiNRR%2FBlvJT53fZduE5YPFqu8NjIEwTeetr5twH999A%2Bmjw0knXdHRTasL3tUfr5u7CqIArSAqQ6xKpeVOqsDtBREYgwydrByQY6pgHg1lnK0S1jFwuL3wmTVmZqTf6EqoU%2BVUH%2BXNeq6Yf7im7oJUPm1NABKylgBwC9pxQpZT3Iutmo6WdHSnWSYU8ZYzfzq2KCG2y8RundnZS06gmf1%2F3ZO5ftB5Fio8WC12PKP3PGCATlI%2B2bEh72txP0Z74FTOCSZNyDNfvZNmLQMBO975qAq%2FI2eIjTflFQZh0EU3MMeqyqu6ZJUYV6syHHGJLeJ8rB&X-Amz-Signature=15a739e371fac26fe1626b77e44952e778c64e6e7abd2fae9c22c7821e289503&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

