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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY6MG24V%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T141400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDTDMIMFvW5y%2BXWM4OJTPqbzZAa8Q4AP2RbGMNFkVmZZAiBpI%2FYg8c7kjXyUTZlBZIKdWMaEkO1W%2By8QyRuKVeM6eSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMADy8t0tDQelao2J2KtwDHVEd7kkSzbk3gMXuORCFcLGmUd4epxPvdCTw3TrP2gPtpMMvIVfF0kBHPKkyb5nA4FH5E5jeHReOrhdWzAaupheR2%2F%2FnXjBsP8p%2BNG76u%2BV7RWzIXCqLNDceC3q3lztWv%2FmHP2u1OVNBjYno2eE6PcV1PJ8klcNFXIauNc3ucagmaHC7IKWFsu2vnKILXCSPkSBg5GMb4bh2EuYviohJXlZRG880v7Flary2kbMRoYoZIWfFiOBGyELkT4bbCnxGebU08yb5gDH9ujS3vR%2Fp0Imd5MMsvYhwobtEAnfAcOTTp3S7qgvFsA03UpEs3tHrwrPfnnNTt7%2FgTCmrhFU06nSw%2BQMhNBBCEYfboMmevvnqcKkCygARLZXVhOqh2FW1wXh6sGa45f9o6PPLAwTdt1MbKocJ3x05VTrS0qA7ZlxZ4rkdflneBCzJtT1WsLSdn6HEITk5dG904d4ia0FSvpqOoFbb1bwg08nAvAjarVuzbiJ33k1LyudKvkfUwhSzC2Xb0E98LU9LCaIiGvjwj2yzvzms9RhaOmpBVMFO2aa8ucM5w%2BC8bY3%2FArf7tPDu0X9bqVYeQ%2F8aml1rsPXIBXscMW%2BRgTRCk1TvF4mQWvzafh%2FsirEE3%2Bbjv5QwnIjByQY6pgGOyJnoZ3W%2FFAkzmvd9oZyyMA4j9stiV3VY9FfkxRqU9T4VNV3XWoX6OMe%2FGfaBmFkQFL2rXcZlzzILQj3me0f156duuhEup6uAJSkgxymnFYtHxOxpVA1NyiaJoOSm1oH9hEd%2BpDZ8P%2FT%2BXaB%2BmysDPue4ElfpWaXbM1X%2FqfjaFcbGhwVf%2FAjX4AJSvOdUi9tZFQLZjLCEUBaqr48XNhpFy%2FC%2BsWq0&X-Amz-Signature=04518f30149f1546f23329913f2d157019254dd12f6504d1fb3557ce05b6ce0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY6MG24V%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T141400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDTDMIMFvW5y%2BXWM4OJTPqbzZAa8Q4AP2RbGMNFkVmZZAiBpI%2FYg8c7kjXyUTZlBZIKdWMaEkO1W%2By8QyRuKVeM6eSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMADy8t0tDQelao2J2KtwDHVEd7kkSzbk3gMXuORCFcLGmUd4epxPvdCTw3TrP2gPtpMMvIVfF0kBHPKkyb5nA4FH5E5jeHReOrhdWzAaupheR2%2F%2FnXjBsP8p%2BNG76u%2BV7RWzIXCqLNDceC3q3lztWv%2FmHP2u1OVNBjYno2eE6PcV1PJ8klcNFXIauNc3ucagmaHC7IKWFsu2vnKILXCSPkSBg5GMb4bh2EuYviohJXlZRG880v7Flary2kbMRoYoZIWfFiOBGyELkT4bbCnxGebU08yb5gDH9ujS3vR%2Fp0Imd5MMsvYhwobtEAnfAcOTTp3S7qgvFsA03UpEs3tHrwrPfnnNTt7%2FgTCmrhFU06nSw%2BQMhNBBCEYfboMmevvnqcKkCygARLZXVhOqh2FW1wXh6sGa45f9o6PPLAwTdt1MbKocJ3x05VTrS0qA7ZlxZ4rkdflneBCzJtT1WsLSdn6HEITk5dG904d4ia0FSvpqOoFbb1bwg08nAvAjarVuzbiJ33k1LyudKvkfUwhSzC2Xb0E98LU9LCaIiGvjwj2yzvzms9RhaOmpBVMFO2aa8ucM5w%2BC8bY3%2FArf7tPDu0X9bqVYeQ%2F8aml1rsPXIBXscMW%2BRgTRCk1TvF4mQWvzafh%2FsirEE3%2Bbjv5QwnIjByQY6pgGOyJnoZ3W%2FFAkzmvd9oZyyMA4j9stiV3VY9FfkxRqU9T4VNV3XWoX6OMe%2FGfaBmFkQFL2rXcZlzzILQj3me0f156duuhEup6uAJSkgxymnFYtHxOxpVA1NyiaJoOSm1oH9hEd%2BpDZ8P%2FT%2BXaB%2BmysDPue4ElfpWaXbM1X%2FqfjaFcbGhwVf%2FAjX4AJSvOdUi9tZFQLZjLCEUBaqr48XNhpFy%2FC%2BsWq0&X-Amz-Signature=1303f69928d412ee781ea93d57b0728651351fd1f08655b34a1401cad6b63ad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

