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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2S6DIVD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T114905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIGFtOllxkT%2BXn%2Fv0B2pZyYMxu9B3RwaudV9G7B4ni%2F0rAiB3PI5AAmt%2FoqheHAiFEGMRZF0iYFVCniwNiRTT%2B4JaESr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMkdTsZa8R1kXmUqmnKtwDAEiaZaF6%2B18KlzR541HQWaycyROOORDoj5a0ehtDL0SheAebQrWUw79zUocIHviPdM5OteBztvWt%2FgwjkUQOIrssgPFYI1CV%2BHWgVfsjoN2oHRKHZCYRX0VFfyPMwMXQ%2F2QBflRwBcmrjfweAtKkDjJ%2FheoGs34eGi0NCkRRRbESU4pPC%2BBevNdCjWjhBYZk27nEd62FIV32BK2YndmSRN90ngwvoXpjHzlGSuGZor4ok39TPY34NUAwBGzgClfkk%2BZbHqupaPTZ4%2BsQcX5AB8rJaLYv0LKoSZGf%2FHQnn7Z9gl2AWJlMYDddAnno5LW0nLJqLpWNUk7dgIuYwS1f6kUNPJ4dij34KfcLyJXFiw5hgkQ5ocnmpgIcYJzDRgJk8fGYzi0a4rwzWvaNuzl1C8POFKAnpEIcnHpaD7nL14LCZZYi%2FN7sJ7GgNN8kd9rUGwVDQ4KmOj8ha2QpXbZPlvU%2B7r1LCRSlbQ%2BahHLob%2B3S7iIPYlMB%2B8axXk%2Bv%2FZJMp2k8kVgFvHYjTZ3EmGFpZnQ6Zf%2B5x2M4zg0yzIz64lsTTNXrGffwZM0aASYggVwd404DqDgipqHhdbO0DQiNVMJbvOildMLFg52FqQLrORAZOH1NFDPxEChNAIsw4q7AyQY6pgFGKjGmZvkU3%2BZ9ng6Qk8wif9KmkVQ84%2FOHBpqnbbn9Tt0KDpQsI5KYHkw5VQNhtiwPBZAwaSaa3QNm6J1UZFf8vX3uUGLX5TFuh6M73IEhX2lHlNV7X4naO7eQetuqgNo2wc6%2B3ThXIyw%2BP%2B8swyos8Omw69FvRWAgRyMYyN234CcrF7%2FkXhvf59oIhWKHClhRLIA%2BVht0bwE5u9115jM6t18Ys%2F8c&X-Amz-Signature=4b120dbb748a213400994d4225714a20cec69a17951ccbb50be6adff8bf1b925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2S6DIVD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T114905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIGFtOllxkT%2BXn%2Fv0B2pZyYMxu9B3RwaudV9G7B4ni%2F0rAiB3PI5AAmt%2FoqheHAiFEGMRZF0iYFVCniwNiRTT%2B4JaESr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMkdTsZa8R1kXmUqmnKtwDAEiaZaF6%2B18KlzR541HQWaycyROOORDoj5a0ehtDL0SheAebQrWUw79zUocIHviPdM5OteBztvWt%2FgwjkUQOIrssgPFYI1CV%2BHWgVfsjoN2oHRKHZCYRX0VFfyPMwMXQ%2F2QBflRwBcmrjfweAtKkDjJ%2FheoGs34eGi0NCkRRRbESU4pPC%2BBevNdCjWjhBYZk27nEd62FIV32BK2YndmSRN90ngwvoXpjHzlGSuGZor4ok39TPY34NUAwBGzgClfkk%2BZbHqupaPTZ4%2BsQcX5AB8rJaLYv0LKoSZGf%2FHQnn7Z9gl2AWJlMYDddAnno5LW0nLJqLpWNUk7dgIuYwS1f6kUNPJ4dij34KfcLyJXFiw5hgkQ5ocnmpgIcYJzDRgJk8fGYzi0a4rwzWvaNuzl1C8POFKAnpEIcnHpaD7nL14LCZZYi%2FN7sJ7GgNN8kd9rUGwVDQ4KmOj8ha2QpXbZPlvU%2B7r1LCRSlbQ%2BahHLob%2B3S7iIPYlMB%2B8axXk%2Bv%2FZJMp2k8kVgFvHYjTZ3EmGFpZnQ6Zf%2B5x2M4zg0yzIz64lsTTNXrGffwZM0aASYggVwd404DqDgipqHhdbO0DQiNVMJbvOildMLFg52FqQLrORAZOH1NFDPxEChNAIsw4q7AyQY6pgFGKjGmZvkU3%2BZ9ng6Qk8wif9KmkVQ84%2FOHBpqnbbn9Tt0KDpQsI5KYHkw5VQNhtiwPBZAwaSaa3QNm6J1UZFf8vX3uUGLX5TFuh6M73IEhX2lHlNV7X4naO7eQetuqgNo2wc6%2B3ThXIyw%2BP%2B8swyos8Omw69FvRWAgRyMYyN234CcrF7%2FkXhvf59oIhWKHClhRLIA%2BVht0bwE5u9115jM6t18Ys%2F8c&X-Amz-Signature=1bdd4116e7c35ba57a578b32bdfdb7820445abc95986d967f5b9baec92ff11ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

