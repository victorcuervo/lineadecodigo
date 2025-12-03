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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXN5AJA2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T023458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFnBBhcRE8a2lwm1Clsdg62Cd69snWNBzU7D6VO%2BCnXLAiBU1zTgrbUBOgaJqzRjfcY8TPPDe0If0eoDGMNcDUHyYCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMLRuJALK9n%2BUWrMrEKtwD9t%2FpmmiyGPHLcRK9FzMFS8cKh2TFzitNYTbraREPc0Ir7tPvMYZXQbAqJLRCq2V6QhsCLh6dtI3mh%2FYC7FJYPwyM4PCCWEPNqarZxNq2dQOfSTiucfnH7MApC9sqov25pa7ymAyPm0jKJG7YaBTgeSQPboW%2BqV8yG1nqYnncoxDuXxHh6nC2Ex9RGLquYTWKbGzPT5rp2xiPtraydc5RfL%2Bql5Snh6bqtUYJcjlBUKxYv5XlgMvbfIu8VzCfiMwUA8B8UFNLDwk6QPVWVLLJHdsf5u4EbfN%2FOK6YOgWXYyAb%2FUg8XxqjojTcgD8nLdZ4Zj8C5CrLBhcwcPaswMweC2Zz0WifLmlr7kFS%2FWMWodyJDqKKs7ykRwNCEZN5m56pMiUp0CgVDVVdBzNqXRTyBndjaN3I36ottImdQoeqbt5cxjYRpd69Nkn86fyIU3FySxFmH%2FAn06O%2FxwXJO265GhuUhxjg577MLvPlovpnfwMxLbdjXctCXLZZajGnSkmESXBUV%2Fr%2B%2B5tP8GCJShMek4M1ZDm6fDihixG1AdbEyLcFQG%2Frc8af37NM%2BqCvo%2FbgsUjfR4uKjUB7JrN2hppRwP02i1xWwn0WppWA4u6mWXc9eVHkIubwrnsamb4w0JS%2ByQY6pgEItZtKCQ64p%2B3Yl49fQUbAGExAx9ceOI%2B%2FEcdvCyZdTbwPOVcGV8T5lbwKw0CKW2R6EFwj%2BfeQDc%2Bw43HBlN9eo9EjP7rBpwiEXgFUm0HQr1MzgA0RNkTmt9KHYWexckqB%2BvA%2BPY%2FftSVevzBToVvfsykE0Z8VhOaQBR8Y8q2JpebICBsA38pMc5tdYO6gBYWYX%2BBejVXb56bxRMqsVhpTsIwAbnGw&X-Amz-Signature=e103f4da99183c5a8cfb114f94a28c12895899b86749d7b61f679a029bfdb812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXN5AJA2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T023458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFnBBhcRE8a2lwm1Clsdg62Cd69snWNBzU7D6VO%2BCnXLAiBU1zTgrbUBOgaJqzRjfcY8TPPDe0If0eoDGMNcDUHyYCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMLRuJALK9n%2BUWrMrEKtwD9t%2FpmmiyGPHLcRK9FzMFS8cKh2TFzitNYTbraREPc0Ir7tPvMYZXQbAqJLRCq2V6QhsCLh6dtI3mh%2FYC7FJYPwyM4PCCWEPNqarZxNq2dQOfSTiucfnH7MApC9sqov25pa7ymAyPm0jKJG7YaBTgeSQPboW%2BqV8yG1nqYnncoxDuXxHh6nC2Ex9RGLquYTWKbGzPT5rp2xiPtraydc5RfL%2Bql5Snh6bqtUYJcjlBUKxYv5XlgMvbfIu8VzCfiMwUA8B8UFNLDwk6QPVWVLLJHdsf5u4EbfN%2FOK6YOgWXYyAb%2FUg8XxqjojTcgD8nLdZ4Zj8C5CrLBhcwcPaswMweC2Zz0WifLmlr7kFS%2FWMWodyJDqKKs7ykRwNCEZN5m56pMiUp0CgVDVVdBzNqXRTyBndjaN3I36ottImdQoeqbt5cxjYRpd69Nkn86fyIU3FySxFmH%2FAn06O%2FxwXJO265GhuUhxjg577MLvPlovpnfwMxLbdjXctCXLZZajGnSkmESXBUV%2Fr%2B%2B5tP8GCJShMek4M1ZDm6fDihixG1AdbEyLcFQG%2Frc8af37NM%2BqCvo%2FbgsUjfR4uKjUB7JrN2hppRwP02i1xWwn0WppWA4u6mWXc9eVHkIubwrnsamb4w0JS%2ByQY6pgEItZtKCQ64p%2B3Yl49fQUbAGExAx9ceOI%2B%2FEcdvCyZdTbwPOVcGV8T5lbwKw0CKW2R6EFwj%2BfeQDc%2Bw43HBlN9eo9EjP7rBpwiEXgFUm0HQr1MzgA0RNkTmt9KHYWexckqB%2BvA%2BPY%2FftSVevzBToVvfsykE0Z8VhOaQBR8Y8q2JpebICBsA38pMc5tdYO6gBYWYX%2BBejVXb56bxRMqsVhpTsIwAbnGw&X-Amz-Signature=b456b1cdd49ab3060b7824ba826839c17bf6dcaf9e2dc164e1cd132131bbd0a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

