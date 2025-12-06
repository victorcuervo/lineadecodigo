---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TIHRIFO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Bvb5pr2UGvKP%2F6x5Zl4Ckro5bAAe%2FdDXiVWv8W0%2FvxQIhAJegaAtNby%2By7%2BkQBq6KAoUzBWomamtd41V44igiI1buKv8DCHoQABoMNjM3NDIzMTgzODA1IgxVEnpY70GY3Ms0Mikq3ANs9xbBhPIVAFPTJpzW4SXc%2BEAUuo%2FZkTfdEQ67LZ%2B7UyayVmiwkBtwfe5AT1CSmLwBj4DCdgKQ6P%2FnL9VBKGfGuyBNqOarNFvDaXeHH3spirAVQxmeZkKy3rq1Jw4iqM5K9c%2B875C4KM5MtTlIiT64fn2toSmWSoP0OFg8jQfwpTTvqpKIiVGzFKSrSJlKUsL%2Bd9B7z9Ov8dbY3C5spKzwjr595o0isFebpMSmxSP%2FtleKkD2M8boQzSkuzq8IfkO4O%2BpAypg8Vt2hDZK8R681Hfxt4sPGS5Ryd9fsSyTPxEMtzZHtY3yQOWzTUI3wFn0t4CuEyL7HF2puZulmH4f%2B8BlI3gZLqgmUkVJzv%2F4z7YJySmi%2BRU3uZtt5NqPO%2Bc4VtYe8yNs0h31KWCtOWo6%2F%2F%2BMBWvXOdJEjNNp2jn%2BR7BXl6IfNi6gtm6Q5zUy9ZyGuNFyTn77U%2F0nemU7QVWaCvxbskQyLvmn3lAp%2Fcwxa38GdqAyJ%2BQoVBqVKPIi4gk%2Fo8piL%2FBc%2FdJRU61KKBRLlYL%2BkkdW7c3unS6MKfB7VshgPOuRh9h9%2BYZDfHcljvyMKDavqt0NewbHjjWqYrWgshKj0QFJeVRyIg5H7eEul1ZMsPVDPUOMWUi3oLTDVy9HJBjqkAZ%2Bjk9h45MA0snBDIvzhkjii5Q%2F4F5JfBBKLqPxOl%2F5PxP8OSPV3GJzbACir%2BYsEOaQBrTCd5mpL5Y46%2F4VrDpa4fbclnHWbEE88c55MCNR8wTKPDd9JLRZJpKAMzMudnStQov4LG0HnYBZbyhrAK9EFdfi34TIL8L%2FZ6Dp%2BCWb2HCbwQp1Rlb%2FvqmqoRwNmXPjlMBzEr64rCcPWiD9o3YPfmaoI&X-Amz-Signature=b36ccf0e29a33783d2e3e40ad39b3468ccd10570de1f1e91e779f97598a4e1a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TIHRIFO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Bvb5pr2UGvKP%2F6x5Zl4Ckro5bAAe%2FdDXiVWv8W0%2FvxQIhAJegaAtNby%2By7%2BkQBq6KAoUzBWomamtd41V44igiI1buKv8DCHoQABoMNjM3NDIzMTgzODA1IgxVEnpY70GY3Ms0Mikq3ANs9xbBhPIVAFPTJpzW4SXc%2BEAUuo%2FZkTfdEQ67LZ%2B7UyayVmiwkBtwfe5AT1CSmLwBj4DCdgKQ6P%2FnL9VBKGfGuyBNqOarNFvDaXeHH3spirAVQxmeZkKy3rq1Jw4iqM5K9c%2B875C4KM5MtTlIiT64fn2toSmWSoP0OFg8jQfwpTTvqpKIiVGzFKSrSJlKUsL%2Bd9B7z9Ov8dbY3C5spKzwjr595o0isFebpMSmxSP%2FtleKkD2M8boQzSkuzq8IfkO4O%2BpAypg8Vt2hDZK8R681Hfxt4sPGS5Ryd9fsSyTPxEMtzZHtY3yQOWzTUI3wFn0t4CuEyL7HF2puZulmH4f%2B8BlI3gZLqgmUkVJzv%2F4z7YJySmi%2BRU3uZtt5NqPO%2Bc4VtYe8yNs0h31KWCtOWo6%2F%2F%2BMBWvXOdJEjNNp2jn%2BR7BXl6IfNi6gtm6Q5zUy9ZyGuNFyTn77U%2F0nemU7QVWaCvxbskQyLvmn3lAp%2Fcwxa38GdqAyJ%2BQoVBqVKPIi4gk%2Fo8piL%2FBc%2FdJRU61KKBRLlYL%2BkkdW7c3unS6MKfB7VshgPOuRh9h9%2BYZDfHcljvyMKDavqt0NewbHjjWqYrWgshKj0QFJeVRyIg5H7eEul1ZMsPVDPUOMWUi3oLTDVy9HJBjqkAZ%2Bjk9h45MA0snBDIvzhkjii5Q%2F4F5JfBBKLqPxOl%2F5PxP8OSPV3GJzbACir%2BYsEOaQBrTCd5mpL5Y46%2F4VrDpa4fbclnHWbEE88c55MCNR8wTKPDd9JLRZJpKAMzMudnStQov4LG0HnYBZbyhrAK9EFdfi34TIL8L%2FZ6Dp%2BCWb2HCbwQp1Rlb%2FvqmqoRwNmXPjlMBzEr64rCcPWiD9o3YPfmaoI&X-Amz-Signature=0ead0309c1a3ff3c964082e68a78386ff30b3afad811189db8c1d22344938759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

