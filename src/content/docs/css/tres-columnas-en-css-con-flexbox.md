---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQT6XWLD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCQZflHtAACld3P1vxBLqeD7hDsEkJD6gis%2FuKQ%2BzUIxgIgT8vk87sNsUvtvhGBLxEEIoTwcXvAbAfrb4y7VGMgJDcq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDOZdxqAY0yTENc97LCrcAw4gc7G17Bt72kM0qsEr2c%2Bpe34owvXKuReUIqCH1TTUGQGTnPnS%2Bx%2B1qt1tOr1bTdkvBWXY7ohYnH4AAzWKxkrefLyS7CLHEIO7z2GEjutI21iiNRUVKG5OTzMYXHxKGhqyZAkhO8u6msZJOZpUOcgRVK2rYfrHe35NYlGXrV3xiqetHV7B%2FXkZITGa5tCLr3kWcQhsl77CLbiZ5Z%2FLZEvIYLVUJkJL7OjIGd31%2B4UR6%2FDGODtfTCjrE1plyAEt%2F6ts6bi6jEes7EwbRsNuNLqHQ1cReJlPM%2FviEfOFn33S8Vokg3CPlX7LGgS%2BGgldxMWua3PZjgwFpHFVxHYNyZta3o4o%2BZ9x4WxN9iqD2a4JWK6Az0BrrX66FJTvFv3wwkDIIARIG4EVjsX4syKnYCAMsKJVSm7xfA1mVLx%2FzAKNplGghDtUst6tFbxvU9J%2BwF%2BM6gKKixqDIVGZn9BEi4VLbtXlr3uCxJRIl6aVmWmvfwDgYXnQMxMgYPqeYtaZpqGanF%2FMtn%2BdRvu1cT6sRoCCrXF%2B0uKeWPxk%2BuVWTBsBcYQu0ypnsYXTzB%2BMG%2BFBTTbM4BQF1fkjwQ7OV4L9fSQtzj8KHR6hzUJ3zipWzXPft80CaaLHCbbMQPNPMOW9wskGOqUBKJjDCfWBTs8HsdnzbM82COZs3CrcONcFhHsmNRbIDOxyKw5wFMDo%2FHRp3oAalRLB84HlbIA38hm4RmB4DmwZR3DC05HlOXaMZd%2BrjLhp1eTGBWfCM8AUIod5sJkZ8Sxtwi79h9o%2FFyrglO%2Fw8TFQo3GZRDwWTclTUytj5XUpCimuIdZnHo3BGFGQlp0%2BHjiPK1q8nZpaglAWBpMSyryuxpgb2Ws0&X-Amz-Signature=6f9e1a602f925b43df3c7946450fa222c474c92ebb8ec6fc728f797e0aba8029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQT6XWLD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCQZflHtAACld3P1vxBLqeD7hDsEkJD6gis%2FuKQ%2BzUIxgIgT8vk87sNsUvtvhGBLxEEIoTwcXvAbAfrb4y7VGMgJDcq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDOZdxqAY0yTENc97LCrcAw4gc7G17Bt72kM0qsEr2c%2Bpe34owvXKuReUIqCH1TTUGQGTnPnS%2Bx%2B1qt1tOr1bTdkvBWXY7ohYnH4AAzWKxkrefLyS7CLHEIO7z2GEjutI21iiNRUVKG5OTzMYXHxKGhqyZAkhO8u6msZJOZpUOcgRVK2rYfrHe35NYlGXrV3xiqetHV7B%2FXkZITGa5tCLr3kWcQhsl77CLbiZ5Z%2FLZEvIYLVUJkJL7OjIGd31%2B4UR6%2FDGODtfTCjrE1plyAEt%2F6ts6bi6jEes7EwbRsNuNLqHQ1cReJlPM%2FviEfOFn33S8Vokg3CPlX7LGgS%2BGgldxMWua3PZjgwFpHFVxHYNyZta3o4o%2BZ9x4WxN9iqD2a4JWK6Az0BrrX66FJTvFv3wwkDIIARIG4EVjsX4syKnYCAMsKJVSm7xfA1mVLx%2FzAKNplGghDtUst6tFbxvU9J%2BwF%2BM6gKKixqDIVGZn9BEi4VLbtXlr3uCxJRIl6aVmWmvfwDgYXnQMxMgYPqeYtaZpqGanF%2FMtn%2BdRvu1cT6sRoCCrXF%2B0uKeWPxk%2BuVWTBsBcYQu0ypnsYXTzB%2BMG%2BFBTTbM4BQF1fkjwQ7OV4L9fSQtzj8KHR6hzUJ3zipWzXPft80CaaLHCbbMQPNPMOW9wskGOqUBKJjDCfWBTs8HsdnzbM82COZs3CrcONcFhHsmNRbIDOxyKw5wFMDo%2FHRp3oAalRLB84HlbIA38hm4RmB4DmwZR3DC05HlOXaMZd%2BrjLhp1eTGBWfCM8AUIod5sJkZ8Sxtwi79h9o%2FFyrglO%2Fw8TFQo3GZRDwWTclTUytj5XUpCimuIdZnHo3BGFGQlp0%2BHjiPK1q8nZpaglAWBpMSyryuxpgb2Ws0&X-Amz-Signature=aed3d769e7936d1f4b9a2b2c606b30339e7c66233aed7b2908d3e202e433680b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

