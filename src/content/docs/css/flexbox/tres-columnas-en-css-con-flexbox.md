---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKVJ2Y2H%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIALQaG%2FX2J4hwzS0aJc1tsLlmeuumaI7omsxVRF8KUGzAiEAu7wUtuirdtZQW3pfM0dXKGs5Q%2Fx3xwVin9r5q8isHAoq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDPWVm4O9m5SVab%2FsVyrcA0xqM2d5QaDz7z9WMusLJbanD7WZM43VK5lWC7lFRTnOyvHS1Fj%2B4FK6EdHzXNNLKnr%2FoxX58naPLPo74zbyBVC8AVicGWrlsumvJfd%2BRSqUiFAbKikydUoSTxgMbF%2F%2Fscd%2FcqtBqXvMMwDYaBdouriy4z%2BPZ8lL19gYxWj%2BiNv%2BET8edFWWdoZevCx2BimQu6L8DQajpcLh%2B3O8vQHKjjtbbJoLUVJfP%2Fg58PSOQvkzBmV7EkciOvDSdJizrPKHKG6tHZBjgVANxqTMOOXNBzlmEL03j1z6GZckMWn6b1BGDk5hYS8usb%2FRTdwlTfHzvh2EUvmY5MysB0uJbxGhqLaY770lCwclcEKB4hPCS4P1aRr7G2b687x9L2wHVlqCtiXPVTawhLSxrHCHQhiXvMj8pTAX7uXRteSRal8IZ3NqOvcUO2%2Ft9B7XOSUFAqaFvRvJK1yyq9ZKJmn691zpndVtjxip%2FCNeNvx6XIHruA%2FObD0xkb9hBBVxc5kOC5utvzxMbUTUP0wRWhmxez7uJ16YP65%2FPfUHP147zdQvMlnQ0V9qaMq0jSiJCT1%2FaGS3l0d0DClRmODzY6mQl9i%2FoIK1Z4pg9c7sy7fimrIVnaZCE8gyXymk7BEfmKMgMID4wskGOqUBMtU1nIKukAccPY1XZBDQPbFf0akmsREQ5lljSpL5QhHsqkgroNdBJznO7hkTcN9SFxUDS3HFGZkof9Qgt3ywXQIC0llqZvDyjomcLucHJyaVrdvhQGOaJhtz4BNvLwEC1oGKkAUX8Dp1JmyhPsfx4jXDIEfLiDivGlPws%2BFDePBv0q6OdxXrvHhn4SIvYJjsSt3UKkyKhE2tbwsjmIWxU3yNVafc&X-Amz-Signature=50fc03d3368789288a8383612752ea13ad73b929f5ed85d0c3ca7e50a1383835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKVJ2Y2H%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIALQaG%2FX2J4hwzS0aJc1tsLlmeuumaI7omsxVRF8KUGzAiEAu7wUtuirdtZQW3pfM0dXKGs5Q%2Fx3xwVin9r5q8isHAoq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDPWVm4O9m5SVab%2FsVyrcA0xqM2d5QaDz7z9WMusLJbanD7WZM43VK5lWC7lFRTnOyvHS1Fj%2B4FK6EdHzXNNLKnr%2FoxX58naPLPo74zbyBVC8AVicGWrlsumvJfd%2BRSqUiFAbKikydUoSTxgMbF%2F%2Fscd%2FcqtBqXvMMwDYaBdouriy4z%2BPZ8lL19gYxWj%2BiNv%2BET8edFWWdoZevCx2BimQu6L8DQajpcLh%2B3O8vQHKjjtbbJoLUVJfP%2Fg58PSOQvkzBmV7EkciOvDSdJizrPKHKG6tHZBjgVANxqTMOOXNBzlmEL03j1z6GZckMWn6b1BGDk5hYS8usb%2FRTdwlTfHzvh2EUvmY5MysB0uJbxGhqLaY770lCwclcEKB4hPCS4P1aRr7G2b687x9L2wHVlqCtiXPVTawhLSxrHCHQhiXvMj8pTAX7uXRteSRal8IZ3NqOvcUO2%2Ft9B7XOSUFAqaFvRvJK1yyq9ZKJmn691zpndVtjxip%2FCNeNvx6XIHruA%2FObD0xkb9hBBVxc5kOC5utvzxMbUTUP0wRWhmxez7uJ16YP65%2FPfUHP147zdQvMlnQ0V9qaMq0jSiJCT1%2FaGS3l0d0DClRmODzY6mQl9i%2FoIK1Z4pg9c7sy7fimrIVnaZCE8gyXymk7BEfmKMgMID4wskGOqUBMtU1nIKukAccPY1XZBDQPbFf0akmsREQ5lljSpL5QhHsqkgroNdBJznO7hkTcN9SFxUDS3HFGZkof9Qgt3ywXQIC0llqZvDyjomcLucHJyaVrdvhQGOaJhtz4BNvLwEC1oGKkAUX8Dp1JmyhPsfx4jXDIEfLiDivGlPws%2BFDePBv0q6OdxXrvHhn4SIvYJjsSt3UKkyKhE2tbwsjmIWxU3yNVafc&X-Amz-Signature=d0bf7013e4161cd22cbe8e6ea04162b7eb6ad2c9b7f32b2467a11007807e9f7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

