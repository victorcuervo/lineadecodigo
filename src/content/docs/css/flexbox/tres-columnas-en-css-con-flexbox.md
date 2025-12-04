---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF6Q3JRZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIGUWwWq6ggzcZDR3MhLbVzDYuNKgBGJYL7FuIoO3DKSlAiAXEGSjoECewC542NIuRzhzWX%2FWf4Hi7VBo60SlTKpZYSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMgqWq2i95P2%2FcadMNKtwDFK%2F4RCs2p6XE9eOwIppSdBYndnqci5k6V3R1F5CsShgQ7QHtFX4ghon2liaIrJc5O82nWN4B0k0byI6VZvsRW3W%2BWdx%2FFxNko7JAidbzrJ%2FHSeRKpl3Ug41DLMNxEa6hxFHgmAPA%2B0dHaOUVmunueIue6y0EduEK5kmpJ7cnhJ3czkemhJWxFnCF6BL9VOwmWSLCb39kyvDTqx43Tq1GAta55x2OwHKz4vs%2F2hy%2FGSKCjDyYhbIrA7ugqUXpfciLBlUM4b7AJdLLsRW%2Fziw3TWEfMFvLtaRa8y8VjkfSXOEzO9eV%2B5W0NiP3v8utY6wIDDzkwGMMHVZgak%2FzV8ex0xhP1ojdeviwWWLeCS2AazwF20%2BObsNt7e%2BVGMxm8SWCRx6JfUc0rPrp9mHSE%2Bm%2B5y5ixFLe38hho5zmRY%2FiykFwhwf2h929jxSzGLx81iFjhX%2BlDXkXIYdTo56rWAghDJn6xyKRCkDPxz9HOZeN06WjxMdpc77Phd0A6q%2BzJeeaNSRhpWKnYtC83gPIABcpuEVDHqukpbPuvxMT5p6UaTHddmGWgETUV12NkLpLlv9P2c5YpN3XupUV36CnTCJkJm8vu3XEyRPfGdF3VBSOw85s4dBWGNzT6VdbEcYworXDyQY6pgGFF7fdlT4YHb3ftSs5PJ7MoOSIukNtowDmOiUYs56oDR642EinwQoAXO9TMoozvaoDfTCTA65hxwLCds4QfrMU0FZxfYzCql6kgwmUnvM%2B1i52hnXNRqBefunOL3a4cIkFgQpDkeALG1ZhTOEKPqabE2f3BpZ9wONjYK4F5VB1QnFCNYQwJa8gb7Rd7kC2O6%2F9dj9hSH2yDxSthOzDKA3XVNPY07Ja&X-Amz-Signature=2faf8bc02ad5da9aef97907ca4fe2f640e9d675fdffebc6c584c4590c9d97197&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF6Q3JRZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIGUWwWq6ggzcZDR3MhLbVzDYuNKgBGJYL7FuIoO3DKSlAiAXEGSjoECewC542NIuRzhzWX%2FWf4Hi7VBo60SlTKpZYSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMgqWq2i95P2%2FcadMNKtwDFK%2F4RCs2p6XE9eOwIppSdBYndnqci5k6V3R1F5CsShgQ7QHtFX4ghon2liaIrJc5O82nWN4B0k0byI6VZvsRW3W%2BWdx%2FFxNko7JAidbzrJ%2FHSeRKpl3Ug41DLMNxEa6hxFHgmAPA%2B0dHaOUVmunueIue6y0EduEK5kmpJ7cnhJ3czkemhJWxFnCF6BL9VOwmWSLCb39kyvDTqx43Tq1GAta55x2OwHKz4vs%2F2hy%2FGSKCjDyYhbIrA7ugqUXpfciLBlUM4b7AJdLLsRW%2Fziw3TWEfMFvLtaRa8y8VjkfSXOEzO9eV%2B5W0NiP3v8utY6wIDDzkwGMMHVZgak%2FzV8ex0xhP1ojdeviwWWLeCS2AazwF20%2BObsNt7e%2BVGMxm8SWCRx6JfUc0rPrp9mHSE%2Bm%2B5y5ixFLe38hho5zmRY%2FiykFwhwf2h929jxSzGLx81iFjhX%2BlDXkXIYdTo56rWAghDJn6xyKRCkDPxz9HOZeN06WjxMdpc77Phd0A6q%2BzJeeaNSRhpWKnYtC83gPIABcpuEVDHqukpbPuvxMT5p6UaTHddmGWgETUV12NkLpLlv9P2c5YpN3XupUV36CnTCJkJm8vu3XEyRPfGdF3VBSOw85s4dBWGNzT6VdbEcYworXDyQY6pgGFF7fdlT4YHb3ftSs5PJ7MoOSIukNtowDmOiUYs56oDR642EinwQoAXO9TMoozvaoDfTCTA65hxwLCds4QfrMU0FZxfYzCql6kgwmUnvM%2B1i52hnXNRqBefunOL3a4cIkFgQpDkeALG1ZhTOEKPqabE2f3BpZ9wONjYK4F5VB1QnFCNYQwJa8gb7Rd7kC2O6%2F9dj9hSH2yDxSthOzDKA3XVNPY07Ja&X-Amz-Signature=c46bf3230a58dac9cdc7ef75f5d777884987d22a67dbdc0cf548886ea4dbaefe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

