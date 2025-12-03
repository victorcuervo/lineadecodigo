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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7KT57W2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDEr8814bLYVLSgpVBRvjGnVJoPytOUgeDJVUQM9nqD%2FQIgCQRK4lN6Xyiu%2BbRd4njhluydB9PdHzNZywzG6O24JZAq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEJ%2BBrmclZ9JDwD5rSrcA9XB5SZCfjitJgxfZuzrODRQ3%2B7hNFIb1wfDEjpgTRuBg1VI5NzEiskcyRgcrkyF8KUYfIpKbrff3h66%2FNdZN%2FWqSd6tNHel6n0IMj2aADSj6%2FkAQah8PvAEztxytVW4TbhuKxryKacVdpED6Tugg01cJtdk909JYOctgiHfJCvp93waeLiEGi%2FArE6LKqHH0OyRgyFS9x5tSm7koU4mXu6uMkIVvZxejPQYaUnDeMB5qTAsEVsCUKqJJJibdIkDyUx2uJC1aoVC2no3QyKQYmqXASgtQzuTuEYYge%2FQYKznMWNTRwqMLQHJdePR2yIUk1hpvwyH%2BhsDCiOwJIQ%2Fq0bO6p2YYaOKUzU4lFm6ioDyTADswD%2FUe9cyBvK65hqsinePjwIcaL7Rxt%2BdEj%2FVTkWGOErlvpU3JhBRQsxUePbVjjJfKzxtRJLxfAa89hNUAwNxESFl7iCCxE7ODdeeA5W4ILZHgnUH%2BBJDpvrGMNWT3KRThQ8UQ0aH7dEKaU4jIbKW8qjzaBTIu8KN43mmzxyQvFDaanbM61BoR4jwdHNoR0onwypthIULVC2MiXrUR2h%2FfCVeV1luUpP%2FUKyztftc4vKBRx6jcNy%2BxoFbnP8F8aYoHgqLSJExMjv0MNySwMkGOqUB3kJ6NqCAtChxJg26Fh1YVkeTxJcdefvmVLo6TmdmwDwQdSU%2FTtOALT6TvcOLAVwN%2BvI17SwPa5Hm2Sr1YCuvwbPB3Ga%2FppH8JbB5WIi88PO9UWjXNs7kJsGisDKgU5DNysNa6guyDuuBCss4kuY6h5OTpA6GIIEsIE5CQRrO9KAJomWw6REqs9si24IG6AvKHP9muxlKSUwxo9S9RIubz5kc2egQ&X-Amz-Signature=db80f335d52dfd383a3a15867efee9ae37289985358d8a6c501364d18d77c95b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7KT57W2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDEr8814bLYVLSgpVBRvjGnVJoPytOUgeDJVUQM9nqD%2FQIgCQRK4lN6Xyiu%2BbRd4njhluydB9PdHzNZywzG6O24JZAq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEJ%2BBrmclZ9JDwD5rSrcA9XB5SZCfjitJgxfZuzrODRQ3%2B7hNFIb1wfDEjpgTRuBg1VI5NzEiskcyRgcrkyF8KUYfIpKbrff3h66%2FNdZN%2FWqSd6tNHel6n0IMj2aADSj6%2FkAQah8PvAEztxytVW4TbhuKxryKacVdpED6Tugg01cJtdk909JYOctgiHfJCvp93waeLiEGi%2FArE6LKqHH0OyRgyFS9x5tSm7koU4mXu6uMkIVvZxejPQYaUnDeMB5qTAsEVsCUKqJJJibdIkDyUx2uJC1aoVC2no3QyKQYmqXASgtQzuTuEYYge%2FQYKznMWNTRwqMLQHJdePR2yIUk1hpvwyH%2BhsDCiOwJIQ%2Fq0bO6p2YYaOKUzU4lFm6ioDyTADswD%2FUe9cyBvK65hqsinePjwIcaL7Rxt%2BdEj%2FVTkWGOErlvpU3JhBRQsxUePbVjjJfKzxtRJLxfAa89hNUAwNxESFl7iCCxE7ODdeeA5W4ILZHgnUH%2BBJDpvrGMNWT3KRThQ8UQ0aH7dEKaU4jIbKW8qjzaBTIu8KN43mmzxyQvFDaanbM61BoR4jwdHNoR0onwypthIULVC2MiXrUR2h%2FfCVeV1luUpP%2FUKyztftc4vKBRx6jcNy%2BxoFbnP8F8aYoHgqLSJExMjv0MNySwMkGOqUB3kJ6NqCAtChxJg26Fh1YVkeTxJcdefvmVLo6TmdmwDwQdSU%2FTtOALT6TvcOLAVwN%2BvI17SwPa5Hm2Sr1YCuvwbPB3Ga%2FppH8JbB5WIi88PO9UWjXNs7kJsGisDKgU5DNysNa6guyDuuBCss4kuY6h5OTpA6GIIEsIE5CQRrO9KAJomWw6REqs9si24IG6AvKHP9muxlKSUwxo9S9RIubz5kc2egQ&X-Amz-Signature=049c8b6e9f86736320f4f6609ab44a7b85950cd5bf610166d233d3c6c154a4dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

