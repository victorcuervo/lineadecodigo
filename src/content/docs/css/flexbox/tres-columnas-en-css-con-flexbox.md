---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N77OSNN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T223611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYwZCOgbhbKumODFtmoj4BVcJBnXX24FlS0oA2WYJQfAiBQYzCpdtc54Bxl9g7VzFuK1yekilI8Q%2F%2Fm7Wlh7m3UQSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F4O9R%2FX7eOmARhplKtwD6IbexxM81NytJkxYwjTSYjZL6bLTpLUa7uoJ3VCl3a6pnCVdFadi6hQNgM8hCzgZPLauHYil%2FooaQe9kjMyq85Ih7Gx3eyycVvC78hTdPsdN4taF%2FZBdGKrw%2F3Yt7%2B7ZmKxmjM0B%2F5C6o%2Bg2iHTSLccvH852zrMZujrFc6lzN8pYg8QfT9rggbeN3nDoby6BBEP3yrYXgQsiU8ICQIvYR26XCzido9oXtcCZ3s7ULEJUEFGuQVDLMxLKUNsQ%2BZhDUrhmpY4f1oDkSe3aJNuJv8gPIAwy1NOXb7jCXWjmfE2voCDqusxnwceppBIQF33dfpbHRYoNwdBxsQe5j%2FfqkRuJDaJEvBbwCtg%2Fq6PEAibTkC%2FpQ7N90AcnBp2rgGKFtTpWzXUPNnEdjzFtqJyRapqkI%2FN1Ckrx8HfXyxh6%2BbSaBsj5D4O4%2Bwtgrw5UW24XZg1WDluuBF2%2FrVHZctRULIQEWwSuHMhigdYOvmgHmyggDgNIX14HUrofSLcNLmIGxU9t3trLxYkyDuBglsuyepm3Bmk8iSMTjrZJz5gZytOoWYgH42EKizhEgLlKZb359KgvSGNVKyNtGPXTT1DY%2FSn%2BsGXKvcfhILfBXHXNyMbboBd2B5TF3U2umTowlcfXyQY6pgE%2FnelxDYVhMc%2FsKbWyss5ZXAjBd8kYVvMyXv8j3BdknjXiEM4DoyxfCnWLfve0bwOWotOxc85ssep02HmoYvNTrBVYK9LuSdGheejtxe%2BDQ9zMxe80enuyGPkA2CN6JJnvo4e8etI4wr3f3PQXxB6FwRs6x0HkzyKXf0JP9IcCWYQRWM9xBumrJICJRdP4FORLborLy6%2FFQgFTlYVoxgdQ88rPBmQw&X-Amz-Signature=207695606c682c0cc9d7e3047adbc1173c456e5d270eb8f9dd954aa537a13b3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N77OSNN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T223611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYwZCOgbhbKumODFtmoj4BVcJBnXX24FlS0oA2WYJQfAiBQYzCpdtc54Bxl9g7VzFuK1yekilI8Q%2F%2Fm7Wlh7m3UQSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F4O9R%2FX7eOmARhplKtwD6IbexxM81NytJkxYwjTSYjZL6bLTpLUa7uoJ3VCl3a6pnCVdFadi6hQNgM8hCzgZPLauHYil%2FooaQe9kjMyq85Ih7Gx3eyycVvC78hTdPsdN4taF%2FZBdGKrw%2F3Yt7%2B7ZmKxmjM0B%2F5C6o%2Bg2iHTSLccvH852zrMZujrFc6lzN8pYg8QfT9rggbeN3nDoby6BBEP3yrYXgQsiU8ICQIvYR26XCzido9oXtcCZ3s7ULEJUEFGuQVDLMxLKUNsQ%2BZhDUrhmpY4f1oDkSe3aJNuJv8gPIAwy1NOXb7jCXWjmfE2voCDqusxnwceppBIQF33dfpbHRYoNwdBxsQe5j%2FfqkRuJDaJEvBbwCtg%2Fq6PEAibTkC%2FpQ7N90AcnBp2rgGKFtTpWzXUPNnEdjzFtqJyRapqkI%2FN1Ckrx8HfXyxh6%2BbSaBsj5D4O4%2Bwtgrw5UW24XZg1WDluuBF2%2FrVHZctRULIQEWwSuHMhigdYOvmgHmyggDgNIX14HUrofSLcNLmIGxU9t3trLxYkyDuBglsuyepm3Bmk8iSMTjrZJz5gZytOoWYgH42EKizhEgLlKZb359KgvSGNVKyNtGPXTT1DY%2FSn%2BsGXKvcfhILfBXHXNyMbboBd2B5TF3U2umTowlcfXyQY6pgE%2FnelxDYVhMc%2FsKbWyss5ZXAjBd8kYVvMyXv8j3BdknjXiEM4DoyxfCnWLfve0bwOWotOxc85ssep02HmoYvNTrBVYK9LuSdGheejtxe%2BDQ9zMxe80enuyGPkA2CN6JJnvo4e8etI4wr3f3PQXxB6FwRs6x0HkzyKXf0JP9IcCWYQRWM9xBumrJICJRdP4FORLborLy6%2FFQgFTlYVoxgdQ88rPBmQw&X-Amz-Signature=34f0040b5d3d1037466f64042a7c5ccd5b32e2c97c337ee8d57cc4b8efb79569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

