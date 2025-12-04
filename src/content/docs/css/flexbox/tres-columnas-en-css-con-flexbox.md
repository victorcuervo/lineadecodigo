---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X22NXPPF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCw6BpXjXEX8f%2FWLp0l39J2KXhWpsNWto%2F2FzzY%2Ff%2FfBQIhAOUmoydLuG%2B4ydI%2B0gCS0dZ5xf11ZuNIq7oqlo3W%2FQFdKv8DCDkQABoMNjM3NDIzMTgzODA1IgwjQyktUjZ1xo0lG8Mq3ANPj%2F3vqW2rmXyWGMZf2h0oB0Kwg%2F0qWoZj3IcJ8ZBq51Qf9iIoulnONk8vLcmcQuP3X7AhKB%2BlXYb7avnW9AS4anzSB0EApcV5RDmsTBWvEvDlPMftQ7ZWRx1f9J72Nrb3hEtjb%2FJLzGAyU0RoHbgfsxkty%2BkQCLc1rC62YeM53lQSo3eamDmIsdT3qP6sYDe8UaaXmUnpzXtVLylCuhC1strrZ9f7J8Eo3Ajqj0ArotxMmE54QJ5OvBM28PTS%2FYsJkfbSiB9BgXfwZSHQ1c4KvixT71W35OtqiLLDh7Chaq3n7fDnAUEGyjCAUu%2BN3bHu9TZXhmG1PhsCBHFvMdzoXvGNZd7fI3o7isbStl2SjOKIl07%2BcxYn%2Byw8jd4qM5sl8aFGbyH6P%2FCgd%2BTveemrIwhh1IEmZ%2F607WAc1QQ8%2F2coKkilxr0WLaAOl8YUt4iFBqHtRH6yUpNe0GxcJ1GmeF9%2FZNdO%2BHk9a91KRZojgpECkJJAJBppZcV59Y8VZL9bDvxhQA6Wvjhm5lLz8gVwcQYFOTcFavAuk1947zXOONTHFUvyvDsjV1m4egnIUvc4VRET8%2BX%2BWUkTn%2F2HhLWz5Ypx7Na7jkEV0Tc9DuB7pVN8Thht7wxCdmh7fjCTlcPJBjqkAX3FG0%2FHgfR36S5tGN2kXlJTsfjY5U2WUFtg4fF6ISVv%2F%2FhyUlh3FTvZzsjFsW96OevEGedyy7K%2Fnv1Qb7%2BKTf5Y3QXvG8uRd3aZiQ2ZtETSnkAYJFukBzzmfbAv1GiMUabKtuybzzFWX1mmD6HrfcttKR3KwtBD5bRKPD70X1sZIreRnYA3e0HA0L02qHHNGajL6BIG8WVrNUX%2B2GcUSgX%2B%2B%2FrF&X-Amz-Signature=7f38ccc57fd437e0457515f837dee2a3ceb62c5e82ac795ac8c05c3d2ffd8b0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X22NXPPF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCw6BpXjXEX8f%2FWLp0l39J2KXhWpsNWto%2F2FzzY%2Ff%2FfBQIhAOUmoydLuG%2B4ydI%2B0gCS0dZ5xf11ZuNIq7oqlo3W%2FQFdKv8DCDkQABoMNjM3NDIzMTgzODA1IgwjQyktUjZ1xo0lG8Mq3ANPj%2F3vqW2rmXyWGMZf2h0oB0Kwg%2F0qWoZj3IcJ8ZBq51Qf9iIoulnONk8vLcmcQuP3X7AhKB%2BlXYb7avnW9AS4anzSB0EApcV5RDmsTBWvEvDlPMftQ7ZWRx1f9J72Nrb3hEtjb%2FJLzGAyU0RoHbgfsxkty%2BkQCLc1rC62YeM53lQSo3eamDmIsdT3qP6sYDe8UaaXmUnpzXtVLylCuhC1strrZ9f7J8Eo3Ajqj0ArotxMmE54QJ5OvBM28PTS%2FYsJkfbSiB9BgXfwZSHQ1c4KvixT71W35OtqiLLDh7Chaq3n7fDnAUEGyjCAUu%2BN3bHu9TZXhmG1PhsCBHFvMdzoXvGNZd7fI3o7isbStl2SjOKIl07%2BcxYn%2Byw8jd4qM5sl8aFGbyH6P%2FCgd%2BTveemrIwhh1IEmZ%2F607WAc1QQ8%2F2coKkilxr0WLaAOl8YUt4iFBqHtRH6yUpNe0GxcJ1GmeF9%2FZNdO%2BHk9a91KRZojgpECkJJAJBppZcV59Y8VZL9bDvxhQA6Wvjhm5lLz8gVwcQYFOTcFavAuk1947zXOONTHFUvyvDsjV1m4egnIUvc4VRET8%2BX%2BWUkTn%2F2HhLWz5Ypx7Na7jkEV0Tc9DuB7pVN8Thht7wxCdmh7fjCTlcPJBjqkAX3FG0%2FHgfR36S5tGN2kXlJTsfjY5U2WUFtg4fF6ISVv%2F%2FhyUlh3FTvZzsjFsW96OevEGedyy7K%2Fnv1Qb7%2BKTf5Y3QXvG8uRd3aZiQ2ZtETSnkAYJFukBzzmfbAv1GiMUabKtuybzzFWX1mmD6HrfcttKR3KwtBD5bRKPD70X1sZIreRnYA3e0HA0L02qHHNGajL6BIG8WVrNUX%2B2GcUSgX%2B%2B%2FrF&X-Amz-Signature=9e58383dc961039bc387cb428d0d2b5778e0819cdbd22a80a8c6ce0353ea81e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

