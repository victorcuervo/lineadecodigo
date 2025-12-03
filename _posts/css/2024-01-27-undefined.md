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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZN7AJHY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T084734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIE%2Bq5pDwamhIQ3rMuyFHUAHUmUvVmORA8wa8C36d%2B14iAiEAy%2F5LETtzOxvvndXx%2FxT9ECWTH9Y7mTt5yW3kYOa3cqcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEZqT1KiIGxo8uimHircA1IW%2BCB6cyhRNp%2FGojqVDPthHL4eQZgStSD1i5HUZ45FdSUGTaUqpBm78IoQo0lp5X8MWOlf0Hqzuc3njpVvg%2B4qoMmC%2BP9UlNj6POD8iDoxcc76dQSm25%2BdUHLObW9Yatme8W7nPPc92J7UIDEd33G%2BcFWI3gq%2BwtNgeUvUNqwp98ZCfDOTEphGfjQY2bzwo1%2Fg9%2FRCKmzTa7P0bSlGIt1BdASKtkvjHuQTTcon664Tmh2icms7TiG59a4RM%2B7MARzN2Rn%2BduQ3gj8tO9AvvmeNFf0EUuTBo6QyOOqfulw0OS4Fmfd2svm7g71D50HhBPUOrFyuzNnHf8cy3pzW0EeKulllecdvKIp0c%2F92HnPXs5AQWa0sZw8qn8PALQ%2Bwfr%2F%2BZhTH%2F2lQsnghX236PGHWms%2B6LJ7gA7u5G0NHbxFnUxwTTA8k%2BWgqVBHQ4canqaYEOrT0PWz4alN%2BeiaBB4spJ5IoWZUi2mQQn3lyh224%2Bd7qY7%2FW3BrbqucKCyWq2UtVKHZ29%2FQgcYtBa8G1vr6u6CgBuaQMKnxH%2FqiS%2B6s7ieHSAFlsPlDmFJRatJlwMxclWjStyckKQEWQo0uJhfH66TcmhfmhasKO4HAJmsafBSHh6Q1BxNIfS0ESMKXWv8kGOqUBLjymU%2FHhc7Gn4t%2BHt8Q9794aJmHU1A41aVyUWh8%2FsAjwbVWTmFMExOxfBGcu1o6388lL0NqlwIWNJwcTID%2FoDzE5B2LwXj6YKi9xSWm4TawK95cTkIqtPSknJJp4BhdrqE9QmJFehIogy1ccq4HcPpfelqQi2jsK%2FNXL%2Bqadj49zApv74bKa%2FlXB4Qv5r6kzSh7YOv8mqrZ9HBc7JlTuHAIIkLjO&X-Amz-Signature=a1b315863f5f4c47cfcc5ba053b1f0da7cd8a02514ed3e025ba69dd99a8a09c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZN7AJHY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T084734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIE%2Bq5pDwamhIQ3rMuyFHUAHUmUvVmORA8wa8C36d%2B14iAiEAy%2F5LETtzOxvvndXx%2FxT9ECWTH9Y7mTt5yW3kYOa3cqcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEZqT1KiIGxo8uimHircA1IW%2BCB6cyhRNp%2FGojqVDPthHL4eQZgStSD1i5HUZ45FdSUGTaUqpBm78IoQo0lp5X8MWOlf0Hqzuc3njpVvg%2B4qoMmC%2BP9UlNj6POD8iDoxcc76dQSm25%2BdUHLObW9Yatme8W7nPPc92J7UIDEd33G%2BcFWI3gq%2BwtNgeUvUNqwp98ZCfDOTEphGfjQY2bzwo1%2Fg9%2FRCKmzTa7P0bSlGIt1BdASKtkvjHuQTTcon664Tmh2icms7TiG59a4RM%2B7MARzN2Rn%2BduQ3gj8tO9AvvmeNFf0EUuTBo6QyOOqfulw0OS4Fmfd2svm7g71D50HhBPUOrFyuzNnHf8cy3pzW0EeKulllecdvKIp0c%2F92HnPXs5AQWa0sZw8qn8PALQ%2Bwfr%2F%2BZhTH%2F2lQsnghX236PGHWms%2B6LJ7gA7u5G0NHbxFnUxwTTA8k%2BWgqVBHQ4canqaYEOrT0PWz4alN%2BeiaBB4spJ5IoWZUi2mQQn3lyh224%2Bd7qY7%2FW3BrbqucKCyWq2UtVKHZ29%2FQgcYtBa8G1vr6u6CgBuaQMKnxH%2FqiS%2B6s7ieHSAFlsPlDmFJRatJlwMxclWjStyckKQEWQo0uJhfH66TcmhfmhasKO4HAJmsafBSHh6Q1BxNIfS0ESMKXWv8kGOqUBLjymU%2FHhc7Gn4t%2BHt8Q9794aJmHU1A41aVyUWh8%2FsAjwbVWTmFMExOxfBGcu1o6388lL0NqlwIWNJwcTID%2FoDzE5B2LwXj6YKi9xSWm4TawK95cTkIqtPSknJJp4BhdrqE9QmJFehIogy1ccq4HcPpfelqQi2jsK%2FNXL%2Bqadj49zApv74bKa%2FlXB4Qv5r6kzSh7YOv8mqrZ9HBc7JlTuHAIIkLjO&X-Amz-Signature=8c0b11efeec3589da62fae9b9aff9a865214bf4db714b7d34f9377553d57a9f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

