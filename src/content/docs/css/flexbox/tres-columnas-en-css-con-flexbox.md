---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKXCF6AV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T005514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWAILWTU0UtYT7CGC8woPmcoUd%2BhZB29NKM8loOIAVmAiBnyLxADnrc66E%2Blqd7w4wA74alZxgqhbb4H5UjTjmggCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FGP20RR8jX9mGwcRKtwD%2F3XmhDWA7bAfzqw%2FgtvtXmGpgsR42yVLEO4spuau5qXdIMdJOXbe%2FzS3RcWNhwNwmGgMtY7se77FHZx8NMvE4eWAw4NeBVvZ0D7i4qFgujSwgja%2Fwhkfr4tUDe6UV959uw%2F21ENn3tZPPicvJGei1e1I4dSyf%2Fv%2FZJ8VDj4Z4JUyUBGgLjS7tLPx0ZvUBfuhLXxT4y%2FaygiZyLOrzpYjF4nuiqePx5EEssWcInmd6m6nOhxD4uagfYcR03tR0WQf2qdWoeQYz0gtnPiYSV%2FnrjpNOfaWa6HzQmQzibjNOWMfFZwRxYtHR1d2zqJDa73YxawqOf%2BOpe0ZsOZFrX%2FZmh%2BDkZHYRc3GjL%2Bt0z%2F9FmxQ46rGxVKL%2FPcOZvft%2FWzo%2Fyn7g7AT1YHqlbeXE0GaVpURNI9NU9toIC5fcOjmTMkOvPL%2B00k%2FdUEywNYK%2BwG4f%2BWmD8v8vt7tul6ROf3xf1OwyikZGwFh1qpxQKpHC3%2Fd77m5USMnGM2AFTGdOL%2BrWvoyAr5R%2F4cJI%2BhgXuRbB0ZxjzH5W%2FMhRQiKq3Pn3iRokx5vfTbBPRUq16YUcGQIa2rBZl0eW6q%2BsRVwrRhbYkVo08FaH%2BKBvjMAn31%2FlaFJ5JG3iEPat%2FgJJ78wg6LYyQY6pgF5XWNakwjCGTZAY5YuKyZZWvJntMD5RIpUYcDARLUSeYLnnssrh3XSObyvoVl7yKsQldFKgrmhW7sWC%2Fk10A6HxGcBt%2B4%2BzB77fkXzDEsl7icDTMPt49%2Brsl%2ByUJ9ipjYAIBt8rjEo0M8ojJXdVJHsHBtWPj3551OmhRJKxj0NvWzD8IU8%2FhBJMFDsxMSWb0iGLZUFI1JZyDqGyNoRUxYD%2Bbd5Bjhu&X-Amz-Signature=6809f9a10d17456533839f11b273d683ac251c9872522c215ff170f9510c435a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKXCF6AV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T005514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWAILWTU0UtYT7CGC8woPmcoUd%2BhZB29NKM8loOIAVmAiBnyLxADnrc66E%2Blqd7w4wA74alZxgqhbb4H5UjTjmggCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FGP20RR8jX9mGwcRKtwD%2F3XmhDWA7bAfzqw%2FgtvtXmGpgsR42yVLEO4spuau5qXdIMdJOXbe%2FzS3RcWNhwNwmGgMtY7se77FHZx8NMvE4eWAw4NeBVvZ0D7i4qFgujSwgja%2Fwhkfr4tUDe6UV959uw%2F21ENn3tZPPicvJGei1e1I4dSyf%2Fv%2FZJ8VDj4Z4JUyUBGgLjS7tLPx0ZvUBfuhLXxT4y%2FaygiZyLOrzpYjF4nuiqePx5EEssWcInmd6m6nOhxD4uagfYcR03tR0WQf2qdWoeQYz0gtnPiYSV%2FnrjpNOfaWa6HzQmQzibjNOWMfFZwRxYtHR1d2zqJDa73YxawqOf%2BOpe0ZsOZFrX%2FZmh%2BDkZHYRc3GjL%2Bt0z%2F9FmxQ46rGxVKL%2FPcOZvft%2FWzo%2Fyn7g7AT1YHqlbeXE0GaVpURNI9NU9toIC5fcOjmTMkOvPL%2B00k%2FdUEywNYK%2BwG4f%2BWmD8v8vt7tul6ROf3xf1OwyikZGwFh1qpxQKpHC3%2Fd77m5USMnGM2AFTGdOL%2BrWvoyAr5R%2F4cJI%2BhgXuRbB0ZxjzH5W%2FMhRQiKq3Pn3iRokx5vfTbBPRUq16YUcGQIa2rBZl0eW6q%2BsRVwrRhbYkVo08FaH%2BKBvjMAn31%2FlaFJ5JG3iEPat%2FgJJ78wg6LYyQY6pgF5XWNakwjCGTZAY5YuKyZZWvJntMD5RIpUYcDARLUSeYLnnssrh3XSObyvoVl7yKsQldFKgrmhW7sWC%2Fk10A6HxGcBt%2B4%2BzB77fkXzDEsl7icDTMPt49%2Brsl%2ByUJ9ipjYAIBt8rjEo0M8ojJXdVJHsHBtWPj3551OmhRJKxj0NvWzD8IU8%2FhBJMFDsxMSWb0iGLZUFI1JZyDqGyNoRUxYD%2Bbd5Bjhu&X-Amz-Signature=ab9da30a0854d1933500dcc25d9fdcb0c8cb30d80324197222868b2d9326cdd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

