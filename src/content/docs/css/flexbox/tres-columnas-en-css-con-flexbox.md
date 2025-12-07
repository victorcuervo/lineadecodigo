---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DTKWSIT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T060154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdO6xJeFGy1zqaDFmZe6h9ZVmVnXr72Ttr8tVa3kypnwIgZDPV4GhAzLogpMqwrmteKQCiBCEm6trOBkvhwgukYOgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYMx2Kr0gtuciLFQCrcA%2BJrwpKl3xJe2s32kODL%2FGCwtshiOntA8o9H%2Bl44HAyx%2B6P94Hkp6UUwObVOcOq0nmR%2FmyhZEmugPsBt0qdWYwOHEmWVZrB1MtBGqhTgw%2FNqn1mZ%2FAAVJj08xtxmTeL3GEiYlLmAhyYfXXf2r57aMPGg11C%2BzbY73iwI5RwBObXO%2Fu6fMei%2Bo659Q96zGMHeOz6Nhiwrf8OpsG6TfGPU6dGTVtvGnFd1mXLDL3xtyv8T9HnM7Ta%2BCMkGN7xe4lFGSjYPQ9muhOY%2B7N5p3ru1c4vc2HW0%2FE32mYpGiztPtEZ3IzJxTkzrQduLrNSzjQGbwcL%2Bw0OV06mU6zbOYPxZcXj5oYAtFvT8THbRQUh8qUJKPhsphFbKzeKElIS5MJjbdDefq7l8MohDXdx0QAAHsI67y%2FQaUboLRFVxFbiOBiEcPHmMDvB6v4FYWG5oyUeWimHyaVyGNObwWhAOfA8T6Pxc1SzdT2jngcNK53Va%2Fi7zXE09BD34s5OR6Kl3WHswGLNzwMcL815k1WKy0tKXj45EUtCqb26g4hkR5IEHHYEHTqAmNPu4Lr0xk5hFDjBTcW8bBVNk3JZ%2FeY%2FnMKQwKaH00sImdPt7CfyrdKUGJezFyYVtfJLlEYfkj5knMMqY1MkGOqUBYB5MhCIyubjs%2FNiz4GLUkSLndzj6o1qjtLFj3078Cb%2B7SJpsNIUQDK%2B7K29Bi2xo6NK9YfHdeIGjYgPyYR7HLlaURMMWE5ij7Zry09Ad2KGKkt2lIkPSCWCa1h6%2BP%2BhluYtVvUfiPeISMJHxPN9EwK6QA7NDxc1NDUlHXag33gU4GLcyzVTB0k4xJ0gkDQW9e6wmsyMhWqLS%2F3p%2FQs7IX71%2FcnQH&X-Amz-Signature=9df25e6cee64a7bf38480b9372cd88cb2a30da830fc568628b5b29866d97bb67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DTKWSIT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T060154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdO6xJeFGy1zqaDFmZe6h9ZVmVnXr72Ttr8tVa3kypnwIgZDPV4GhAzLogpMqwrmteKQCiBCEm6trOBkvhwgukYOgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYMx2Kr0gtuciLFQCrcA%2BJrwpKl3xJe2s32kODL%2FGCwtshiOntA8o9H%2Bl44HAyx%2B6P94Hkp6UUwObVOcOq0nmR%2FmyhZEmugPsBt0qdWYwOHEmWVZrB1MtBGqhTgw%2FNqn1mZ%2FAAVJj08xtxmTeL3GEiYlLmAhyYfXXf2r57aMPGg11C%2BzbY73iwI5RwBObXO%2Fu6fMei%2Bo659Q96zGMHeOz6Nhiwrf8OpsG6TfGPU6dGTVtvGnFd1mXLDL3xtyv8T9HnM7Ta%2BCMkGN7xe4lFGSjYPQ9muhOY%2B7N5p3ru1c4vc2HW0%2FE32mYpGiztPtEZ3IzJxTkzrQduLrNSzjQGbwcL%2Bw0OV06mU6zbOYPxZcXj5oYAtFvT8THbRQUh8qUJKPhsphFbKzeKElIS5MJjbdDefq7l8MohDXdx0QAAHsI67y%2FQaUboLRFVxFbiOBiEcPHmMDvB6v4FYWG5oyUeWimHyaVyGNObwWhAOfA8T6Pxc1SzdT2jngcNK53Va%2Fi7zXE09BD34s5OR6Kl3WHswGLNzwMcL815k1WKy0tKXj45EUtCqb26g4hkR5IEHHYEHTqAmNPu4Lr0xk5hFDjBTcW8bBVNk3JZ%2FeY%2FnMKQwKaH00sImdPt7CfyrdKUGJezFyYVtfJLlEYfkj5knMMqY1MkGOqUBYB5MhCIyubjs%2FNiz4GLUkSLndzj6o1qjtLFj3078Cb%2B7SJpsNIUQDK%2B7K29Bi2xo6NK9YfHdeIGjYgPyYR7HLlaURMMWE5ij7Zry09Ad2KGKkt2lIkPSCWCa1h6%2BP%2BhluYtVvUfiPeISMJHxPN9EwK6QA7NDxc1NDUlHXag33gU4GLcyzVTB0k4xJ0gkDQW9e6wmsyMhWqLS%2F3p%2FQs7IX71%2FcnQH&X-Amz-Signature=f4c9811cc78631999fed67190dcd0c97f92a40c4fa5c7b36f4d4af1a26b667b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

