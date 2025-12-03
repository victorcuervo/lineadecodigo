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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXZE7JOB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T163622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCwOb0Lml0hPvUbM2lYclJOx%2BCXrjR5h9IlMXW%2BqXK4UgIhAO0IHzsjr%2BfYMDREGtsIgqHjEbT3rC2uvFlC0JN4SQz%2BKv8DCDEQABoMNjM3NDIzMTgzODA1Igx4VAjdssXXuPra334q3ANUijnfV52GnJ2drfvs%2Ba8OgLViIcbDJfpcH26sRYIC6%2FuqJZNaS1NVZ9OsR%2BjMajyjW9%2FuwM8Zaxvc7Oayi%2FzPijZFMSo%2FsZcrJJuZ2KuTMeykUXndw0cjLqs3K2ju3PUqUG2M9noHvwFPgszkY4jGiv1GeceMWBwQ%2FwFVUXDwt8ZkgT4xyWM3%2F%2Fytng7%2FBsdeDSXOuBxPSln7oDqG6sgpi3dH3M6R0mTzSdQYPjptCXdHfG0DaDNzsTmQo8gUG3fFCqMDgsEXIIf6svs8mK0R7KLWOSQ6VdAJjNuXvCxPHkbGDEevGywXKGROHQ48X3UqZ%2FvSk4D0EuJdxodQXMQ1blxRyXx98nW%2Fog0GI3rFXMqJyoB%2B7ZHIuUnyXOAJWmj9GrTAKhSPczQ%2BdCFssPYoMUcWjXrb7nCQ9gjeJ2TDXukh1AFWAZE%2F94blHthbstG38ZP%2FcbFQA0TkElI%2FO8AECKDnnkWcoB5JbDrKYelvgwEDIXrf0GNESNAZX3YvRF9lvzRRv%2FwxVmfKXGfgbkoca90bNKe6E8BapsRvuQhBquP0CS%2FWeJ0u8jfQonjRDjH%2BesVn2w%2FkD1fX6sPcI8e8pKVx2Y47MnIR5GljpAxmkZoQXwm9oVuT4mNR8zCEwcHJBjqkAd%2BcsYnR9caS4gkrXVA%2F7yyI6tzuqTiq0M9HZhZC8vgBj5RwnpDqt2v6IqjjnVnuCRPXwKuJiwOcFiqcEj60LMy0Aj%2BCEW4v2cMuiYnof8%2FXb%2FMYDTBdEMsLBl0UIUuN8%2F42YwPJ2n0kDoZeS4xz8oG65E75hdPm%2Fpgi00cIpRMhHN2kXIHhQbRJgFY70YReMUDZlIBrQNHWnALqeJshxOYo4R%2FM&X-Amz-Signature=88b58a32dcbf9fd15f486aff0e2238ae2d37b945f712120643276f2c5e9bce03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXZE7JOB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T163622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCwOb0Lml0hPvUbM2lYclJOx%2BCXrjR5h9IlMXW%2BqXK4UgIhAO0IHzsjr%2BfYMDREGtsIgqHjEbT3rC2uvFlC0JN4SQz%2BKv8DCDEQABoMNjM3NDIzMTgzODA1Igx4VAjdssXXuPra334q3ANUijnfV52GnJ2drfvs%2Ba8OgLViIcbDJfpcH26sRYIC6%2FuqJZNaS1NVZ9OsR%2BjMajyjW9%2FuwM8Zaxvc7Oayi%2FzPijZFMSo%2FsZcrJJuZ2KuTMeykUXndw0cjLqs3K2ju3PUqUG2M9noHvwFPgszkY4jGiv1GeceMWBwQ%2FwFVUXDwt8ZkgT4xyWM3%2F%2Fytng7%2FBsdeDSXOuBxPSln7oDqG6sgpi3dH3M6R0mTzSdQYPjptCXdHfG0DaDNzsTmQo8gUG3fFCqMDgsEXIIf6svs8mK0R7KLWOSQ6VdAJjNuXvCxPHkbGDEevGywXKGROHQ48X3UqZ%2FvSk4D0EuJdxodQXMQ1blxRyXx98nW%2Fog0GI3rFXMqJyoB%2B7ZHIuUnyXOAJWmj9GrTAKhSPczQ%2BdCFssPYoMUcWjXrb7nCQ9gjeJ2TDXukh1AFWAZE%2F94blHthbstG38ZP%2FcbFQA0TkElI%2FO8AECKDnnkWcoB5JbDrKYelvgwEDIXrf0GNESNAZX3YvRF9lvzRRv%2FwxVmfKXGfgbkoca90bNKe6E8BapsRvuQhBquP0CS%2FWeJ0u8jfQonjRDjH%2BesVn2w%2FkD1fX6sPcI8e8pKVx2Y47MnIR5GljpAxmkZoQXwm9oVuT4mNR8zCEwcHJBjqkAd%2BcsYnR9caS4gkrXVA%2F7yyI6tzuqTiq0M9HZhZC8vgBj5RwnpDqt2v6IqjjnVnuCRPXwKuJiwOcFiqcEj60LMy0Aj%2BCEW4v2cMuiYnof8%2FXb%2FMYDTBdEMsLBl0UIUuN8%2F42YwPJ2n0kDoZeS4xz8oG65E75hdPm%2Fpgi00cIpRMhHN2kXIHhQbRJgFY70YReMUDZlIBrQNHWnALqeJshxOYo4R%2FM&X-Amz-Signature=890f2499d28398c274b184689617f2c0aea62f41a1bac58f2ba81a5f4616ed2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

