---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643KQDRL2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDpNIh75xLZ0%2F1TrtveP2YsY33GCewvvbSI9PWZ3QXJWQIhAKGT0W7y1JcT9Z5FZqGzJ2u7LnlUD54DT5Vi419v%2BPhOKv8DCDYQABoMNjM3NDIzMTgzODA1IgxLVTrT9VcfhK5XGRYq3ANnc8x48uIxnEUodZ2hx6V%2B3LFdeN2wOukd%2FKVQFKiFXD8FEnx0TyfQLIOiXbKNYMwBVUzPCycHuh3BF5hlLm6FRhTc33Y9mhtuCCzTihBWEGhqloIUe1LUaMavMtyqOXG2o46J11GS89Ma%2FU3%2BZ6IjWFbkkexi4FsQPle54BZQSMVJ3tRQChkRpFqsqoEp3yJCgEYiCu1ZEHWEMnXQGalUdk6ov%2FkLOE1Ul9nFkrGGj8MbvajakcLvlVyK%2FBwuJYpz9JAKTIUCuV2S3TFXOb8TVn7qalN9xcpgMv9XNKV1LiRsQ5I03OK5UKPa1cgnNncSNeutOyi4y3e8IXNZgUJ66WvIoZoEDPTXu6k4mBH9OCLuItFXR08TEDVas9vdNZPk8tLlgGEbET8qFEVEOCGY5z46erRKsMAIUt4VuXqrMcsW%2Bi1dstxHM83MdR5tTc38QBeYvHKzYhBs6BzxoUo2RUZLLyjDGaK%2Fg7swt74yEvFlGvxPHVUxOrzoE9G6c4hp%2BLooqlFbjWtg0J0JkuNGFylhHMzM9pppJTb0vWGdrxmokVzW4sLblRfGbi1baaytSTl324Jw2FmdRBAqR8l6XBKM2NRRPFbDQ4RaUuHlEAJKUBFVbBvTqZZLpDCyvcLJBjqkAVDQNG0S15j2h3Z%2B4TSpiXeLKm9NNd0QqZOSlMAFQi9c4N9Yty%2FoJovVmgvjdEC3Curr8CA4wIASLwDBhHAx3dOjFjSISKlKRFwONEvjKFk9vb3Uhw6er%2BLkHFOMU1qxrGV%2FbV%2BDE8U%2FFREWpJnhuzLSxIm8jG2JNRMy9w7TfkDAifeGqH9YF1ssBLhO%2FKkREkILUEwm0ZUmxTthcp1mnc18SIvz&X-Amz-Signature=d3a8f4d61e07b6d1bf33d1e0ee192a7e7af1f84c367a28f4e1a8c7f4d00f3ae3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643KQDRL2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDpNIh75xLZ0%2F1TrtveP2YsY33GCewvvbSI9PWZ3QXJWQIhAKGT0W7y1JcT9Z5FZqGzJ2u7LnlUD54DT5Vi419v%2BPhOKv8DCDYQABoMNjM3NDIzMTgzODA1IgxLVTrT9VcfhK5XGRYq3ANnc8x48uIxnEUodZ2hx6V%2B3LFdeN2wOukd%2FKVQFKiFXD8FEnx0TyfQLIOiXbKNYMwBVUzPCycHuh3BF5hlLm6FRhTc33Y9mhtuCCzTihBWEGhqloIUe1LUaMavMtyqOXG2o46J11GS89Ma%2FU3%2BZ6IjWFbkkexi4FsQPle54BZQSMVJ3tRQChkRpFqsqoEp3yJCgEYiCu1ZEHWEMnXQGalUdk6ov%2FkLOE1Ul9nFkrGGj8MbvajakcLvlVyK%2FBwuJYpz9JAKTIUCuV2S3TFXOb8TVn7qalN9xcpgMv9XNKV1LiRsQ5I03OK5UKPa1cgnNncSNeutOyi4y3e8IXNZgUJ66WvIoZoEDPTXu6k4mBH9OCLuItFXR08TEDVas9vdNZPk8tLlgGEbET8qFEVEOCGY5z46erRKsMAIUt4VuXqrMcsW%2Bi1dstxHM83MdR5tTc38QBeYvHKzYhBs6BzxoUo2RUZLLyjDGaK%2Fg7swt74yEvFlGvxPHVUxOrzoE9G6c4hp%2BLooqlFbjWtg0J0JkuNGFylhHMzM9pppJTb0vWGdrxmokVzW4sLblRfGbi1baaytSTl324Jw2FmdRBAqR8l6XBKM2NRRPFbDQ4RaUuHlEAJKUBFVbBvTqZZLpDCyvcLJBjqkAVDQNG0S15j2h3Z%2B4TSpiXeLKm9NNd0QqZOSlMAFQi9c4N9Yty%2FoJovVmgvjdEC3Curr8CA4wIASLwDBhHAx3dOjFjSISKlKRFwONEvjKFk9vb3Uhw6er%2BLkHFOMU1qxrGV%2FbV%2BDE8U%2FFREWpJnhuzLSxIm8jG2JNRMy9w7TfkDAifeGqH9YF1ssBLhO%2FKkREkILUEwm0ZUmxTthcp1mnc18SIvz&X-Amz-Signature=8b30f0b1b03f6c472144c1b2d390486193a3d1359580fc0a490eeb61599ba6d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

