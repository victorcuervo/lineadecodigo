---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP4WGHXI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHhVoWRy7372j4Dj8b7Zkff13goDes4ENRfoH%2BMfzth%2BAiEA3hdbqDZjm5OYaaT9rLWF5Lez4nexcfKHGzrZq44p%2FuQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDJArRDcfy16zjF2dOircA4bCQ4MmHdTY8EDx%2FNHZZfR0wRKvTwie04eYLKVTg0E0OvdgpcQmfn9BMm4iuemuGqR1vGVoLCKbshGgEfZULlI%2FlhPW1PQTmgpPRaMY6IMo6KATkdPwUp8ypjidPZRTDkMyxlA9M5tOt%2FMkjgy9nh1gpIieAXK%2BI%2FZfnymFODktRLFKUeQNhEnOETk8QC7navxcMjWqrOimhjjis9h3a7nN77LRy98kYtVLlcU0Wu59m8TQOZyxcQOE%2FH37D65vdOyZr05SLEi64nQKEXRhXAPYVkSbsgLEZS5Q%2FfkDe8qFZkaKwJmjwzbig4KYKWGsGZ%2BqOclMyobngCW%2BP%2FZa%2F1cnzUVzs5UNBkQWVaSjOAE30KD4b1ZTh16xJ4UhlokdLHj3xXqJdhY4VcaMi%2Fjnl2jBNP%2F83BOpw7xWzmQ7plTAid7pbT8G4WXYGWcS8PX%2B80iUoaubCBvwXPeJQY%2FY%2FHMvRILdYd%2BKfHkesrh%2FasmnFtDUbhFk67r2TT7DxMBvUZOdeCBOwlFC7Kr%2BvZQ0yhmFjRfifuRJPizLbK0ws6S%2B8%2B4bZhSyg6l%2Bgz1QfUTknoU5lP0lSE2pV%2FncT8crFegutKTm6UjGgZi7nE0lZjH%2FWq7Qai7mCmwWwS5IMLjzw8kGOqUBF354XA0Lgy1T7lKiq7TvVjJVoVf%2BJqE0qBpK7mhqzkpv2OIrOEvW4zxL0O0%2FELRftKw3YPLyMRkKC6rTK2ZiVlhgDV098%2Bi5%2BkwMIijpg4bWl6zEUlJAvS9qg%2BeEDugTNNtLPXmKSw7IXy%2FTZ%2FVfCgQJIuNg0J859t6AOeWo2m%2Fno03hn3SGjXdaOgXAU2IsEsRZfL9txX19CuvD3RRYEfNUE55J&X-Amz-Signature=a6b7760bae4a87a81b9d6e0b698591d92b9da307f3a6f2f8215c5cadc945fc39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP4WGHXI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHhVoWRy7372j4Dj8b7Zkff13goDes4ENRfoH%2BMfzth%2BAiEA3hdbqDZjm5OYaaT9rLWF5Lez4nexcfKHGzrZq44p%2FuQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDJArRDcfy16zjF2dOircA4bCQ4MmHdTY8EDx%2FNHZZfR0wRKvTwie04eYLKVTg0E0OvdgpcQmfn9BMm4iuemuGqR1vGVoLCKbshGgEfZULlI%2FlhPW1PQTmgpPRaMY6IMo6KATkdPwUp8ypjidPZRTDkMyxlA9M5tOt%2FMkjgy9nh1gpIieAXK%2BI%2FZfnymFODktRLFKUeQNhEnOETk8QC7navxcMjWqrOimhjjis9h3a7nN77LRy98kYtVLlcU0Wu59m8TQOZyxcQOE%2FH37D65vdOyZr05SLEi64nQKEXRhXAPYVkSbsgLEZS5Q%2FfkDe8qFZkaKwJmjwzbig4KYKWGsGZ%2BqOclMyobngCW%2BP%2FZa%2F1cnzUVzs5UNBkQWVaSjOAE30KD4b1ZTh16xJ4UhlokdLHj3xXqJdhY4VcaMi%2Fjnl2jBNP%2F83BOpw7xWzmQ7plTAid7pbT8G4WXYGWcS8PX%2B80iUoaubCBvwXPeJQY%2FY%2FHMvRILdYd%2BKfHkesrh%2FasmnFtDUbhFk67r2TT7DxMBvUZOdeCBOwlFC7Kr%2BvZQ0yhmFjRfifuRJPizLbK0ws6S%2B8%2B4bZhSyg6l%2Bgz1QfUTknoU5lP0lSE2pV%2FncT8crFegutKTm6UjGgZi7nE0lZjH%2FWq7Qai7mCmwWwS5IMLjzw8kGOqUBF354XA0Lgy1T7lKiq7TvVjJVoVf%2BJqE0qBpK7mhqzkpv2OIrOEvW4zxL0O0%2FELRftKw3YPLyMRkKC6rTK2ZiVlhgDV098%2Bi5%2BkwMIijpg4bWl6zEUlJAvS9qg%2BeEDugTNNtLPXmKSw7IXy%2FTZ%2FVfCgQJIuNg0J859t6AOeWo2m%2Fno03hn3SGjXdaOgXAU2IsEsRZfL9txX19CuvD3RRYEfNUE55J&X-Amz-Signature=dcf24bdb62a2c9dbb67fc5cd8083bb155faf3b72ded6dba00bb162ef99940fe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

