---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PDC2EEQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T062252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPR42xY1gCQnSy88Kyh%2BmI1kmNGdeOEULFFrvAl99XfAiARPNNQT9JlcFpMsCJcsYb61A6xXpBFB4d5ffqWWD31jiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCvz66CZ3z%2FtxbQH1KtwDfVLaUHJjXuFDuoqYHXCwjLFUOPPEVZFb16CFTdaZDhy1Uo4bKkowWVvxXYSVYbrgxlO01JwJbXfHc7qKt108luQd0kM3SIBiL8uNvclqbAlgB0eicQquRPNI4M7carXz8LQXEQqfKKUiVk2%2F9oQZ1tf2Wv1L3onvk8FS2wtKva1jHDj63Ngp0nHHZ0nwL0A8qUQ5i4m4ocWAqCePOCt6tBF971oeCgHh3HwiXIIt2YEYzcKPPqRw9ueHxun1R4qz3LjvsUiW3%2BA6nF0dCzIklsE8ShgwuNEHbf9qhgULhojRj%2Ba5zM0bC9M%2BIuhYkf0W5HL6lV49itCDsw%2F8HFs5CrgHC%2Bmm4HRoQ9ZHhuu4S1w%2FFaUV09HuAEuto6UzttTWHlJ7ONF4N68iqj71TJTtfmdwyO3TKGF2zn5cjoQX4hTlvWttH%2FJzh6DPz2LSvk92ACVE7ZfqlCFgA1sr0Y4QURtlvYRya0tDGk%2FBPrbLJ8f3MjaowruqiHc137xX2nF8RnbKvFP9rJwfMnojY%2FAirzALBE0NgJCeGT1k13apygbiZy%2FEDOSMVS9M%2Fx%2B3fM8CI6w2AU%2BgQTGJzzFZOTjPYIVUY0G1mGXUCNmdOUGz5v8HR507ud%2FTH1Spuk8w9qPUyQY6pgHkmVzefjBUCBz2OvPgF2HIsp6Y4FbeQUbrYaY%2FW7Ro9AsnYiX3ltGJgQeEByixZqADoLwaopj2FcgaL5aEAu75OHfi7BMW0Kv48tFNrbvnb5doKZuoV6Hej%2F2t1LEbz4mNUAXUqebhF1H%2Bb5H4nonlRqC35fZPnPv%2BabGMdltUdi1dPer6uPldrgZq0TkCQ%2F9O4%2B%2FmBdb3Aga1nyoc5KY%2BWZCBqSaw&X-Amz-Signature=8aea6bdf441bd3633fd07bb5d17cdc76e90178c7ea4cc0571e30553bfd293f03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PDC2EEQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T062252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPR42xY1gCQnSy88Kyh%2BmI1kmNGdeOEULFFrvAl99XfAiARPNNQT9JlcFpMsCJcsYb61A6xXpBFB4d5ffqWWD31jiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCvz66CZ3z%2FtxbQH1KtwDfVLaUHJjXuFDuoqYHXCwjLFUOPPEVZFb16CFTdaZDhy1Uo4bKkowWVvxXYSVYbrgxlO01JwJbXfHc7qKt108luQd0kM3SIBiL8uNvclqbAlgB0eicQquRPNI4M7carXz8LQXEQqfKKUiVk2%2F9oQZ1tf2Wv1L3onvk8FS2wtKva1jHDj63Ngp0nHHZ0nwL0A8qUQ5i4m4ocWAqCePOCt6tBF971oeCgHh3HwiXIIt2YEYzcKPPqRw9ueHxun1R4qz3LjvsUiW3%2BA6nF0dCzIklsE8ShgwuNEHbf9qhgULhojRj%2Ba5zM0bC9M%2BIuhYkf0W5HL6lV49itCDsw%2F8HFs5CrgHC%2Bmm4HRoQ9ZHhuu4S1w%2FFaUV09HuAEuto6UzttTWHlJ7ONF4N68iqj71TJTtfmdwyO3TKGF2zn5cjoQX4hTlvWttH%2FJzh6DPz2LSvk92ACVE7ZfqlCFgA1sr0Y4QURtlvYRya0tDGk%2FBPrbLJ8f3MjaowruqiHc137xX2nF8RnbKvFP9rJwfMnojY%2FAirzALBE0NgJCeGT1k13apygbiZy%2FEDOSMVS9M%2Fx%2B3fM8CI6w2AU%2BgQTGJzzFZOTjPYIVUY0G1mGXUCNmdOUGz5v8HR507ud%2FTH1Spuk8w9qPUyQY6pgHkmVzefjBUCBz2OvPgF2HIsp6Y4FbeQUbrYaY%2FW7Ro9AsnYiX3ltGJgQeEByixZqADoLwaopj2FcgaL5aEAu75OHfi7BMW0Kv48tFNrbvnb5doKZuoV6Hej%2F2t1LEbz4mNUAXUqebhF1H%2Bb5H4nonlRqC35fZPnPv%2BabGMdltUdi1dPer6uPldrgZq0TkCQ%2F9O4%2B%2FmBdb3Aga1nyoc5KY%2BWZCBqSaw&X-Amz-Signature=56485a76ffcc1e6e3dcbb6e17c26ae0c752e8a97ba6ba74c21b71a701644908c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

