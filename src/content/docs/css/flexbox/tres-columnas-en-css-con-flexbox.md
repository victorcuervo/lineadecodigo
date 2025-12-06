---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBTEFRE2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T153500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoqKBVKA23Xqk%2FOwwoMVgCckSTH5bxhp0WzIcsH0gLTQIgYgnALnc506480VOvNTTmiaTPwFF6dCcsijP2NH0GQ98q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLbbUQmLVY3sYAKumSrcA3d0va%2F4hr2nGeHyyARsNrENJ8ubvbuyOnAQFrqx6SCfCnPnyZc9LAYmD9e5kR80YvhuHXCYbiIdgHmRLULcigBQkHmy%2B1E6qOU04Jhnrb2SiTsxe0heZArHQ2nr1Vd9uaNl8C0YOU9iOeemnJIanWyguEOosEE6jpYQnPvsjrC5pgQNEBz8U4J3PA9q0hXcnfZvNxIxGyCQYrM5dR6obyJr%2Fh5sSYjR7rDHSBFpdk24bL9dC2Qs3iQmeBbC2RlXAuNIeW7uWng2z22LOAYlATNZCYiu%2FAhv%2BcV58uJeKnLzywAIkV9qgfRlxHR%2BlgjKdQviqQ4s%2BXCN9AY4AZ06AOYgzwV1L6dzeXw%2B2UETCxfr44k86pVA%2BAfdtEyn1N3%2B8P23FgjGNp%2BtPAJTO%2B5dUoJKKFMuvQG2QUB264Or1cPIqBOJXJGblI3T2LOH9n23Mb89nLbkV8%2BiVsXuvgI%2Bv2MHImDNhpF6yzoFa9YTVGflZ4ynzW28ZRMGX7Fyfl4d%2FCuJQJYZF34yVXoOrkqyNYfyp732s3CYESFk9D86KcuF2FFrwqYH5an9VBYAv44V47eFRuXDTyxAgzHhk7B6fAti3V1B0ffPqrHL39wxIDKV%2F3UU1DcweYrNkfP4MKWm0MkGOqUB0TXZt6mV7sxQzBkaZU3BdJckM49Apbilsw%2FYBU3lVD3zECBq9%2FQibi2YauNjUV6Usl1aUApVBfnmxCMALKJbmPgKDY49Sd%2BmTuOlZSAsEFXaBmXLwGrcfowEAXyju%2FPHpYyGa3fwczo%2Fzy4yas91UDYRWXjWt2aIG2iIaizXFyGm0WNPHC62vYBnBTfrAUGmOjFf89JDEA4YRbVJWJQ0a3gc1jVa&X-Amz-Signature=4db6055f84c7c0f2416a7b653a8b25aec427cd872d9a5cabc431cdc24d172170&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBTEFRE2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T153500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoqKBVKA23Xqk%2FOwwoMVgCckSTH5bxhp0WzIcsH0gLTQIgYgnALnc506480VOvNTTmiaTPwFF6dCcsijP2NH0GQ98q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLbbUQmLVY3sYAKumSrcA3d0va%2F4hr2nGeHyyARsNrENJ8ubvbuyOnAQFrqx6SCfCnPnyZc9LAYmD9e5kR80YvhuHXCYbiIdgHmRLULcigBQkHmy%2B1E6qOU04Jhnrb2SiTsxe0heZArHQ2nr1Vd9uaNl8C0YOU9iOeemnJIanWyguEOosEE6jpYQnPvsjrC5pgQNEBz8U4J3PA9q0hXcnfZvNxIxGyCQYrM5dR6obyJr%2Fh5sSYjR7rDHSBFpdk24bL9dC2Qs3iQmeBbC2RlXAuNIeW7uWng2z22LOAYlATNZCYiu%2FAhv%2BcV58uJeKnLzywAIkV9qgfRlxHR%2BlgjKdQviqQ4s%2BXCN9AY4AZ06AOYgzwV1L6dzeXw%2B2UETCxfr44k86pVA%2BAfdtEyn1N3%2B8P23FgjGNp%2BtPAJTO%2B5dUoJKKFMuvQG2QUB264Or1cPIqBOJXJGblI3T2LOH9n23Mb89nLbkV8%2BiVsXuvgI%2Bv2MHImDNhpF6yzoFa9YTVGflZ4ynzW28ZRMGX7Fyfl4d%2FCuJQJYZF34yVXoOrkqyNYfyp732s3CYESFk9D86KcuF2FFrwqYH5an9VBYAv44V47eFRuXDTyxAgzHhk7B6fAti3V1B0ffPqrHL39wxIDKV%2F3UU1DcweYrNkfP4MKWm0MkGOqUB0TXZt6mV7sxQzBkaZU3BdJckM49Apbilsw%2FYBU3lVD3zECBq9%2FQibi2YauNjUV6Usl1aUApVBfnmxCMALKJbmPgKDY49Sd%2BmTuOlZSAsEFXaBmXLwGrcfowEAXyju%2FPHpYyGa3fwczo%2Fzy4yas91UDYRWXjWt2aIG2iIaizXFyGm0WNPHC62vYBnBTfrAUGmOjFf89JDEA4YRbVJWJQ0a3gc1jVa&X-Amz-Signature=6fbe1716195c42c20249f9b48245584c16fd3d120e50a17307e3d93a959498a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

