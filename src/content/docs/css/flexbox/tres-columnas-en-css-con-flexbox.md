---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIHBSCAJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T043741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBt5RUKKe1fJiSwko1F%2FW%2B4oeLNtV79w6gZUP3F9VqVQIhAP6VH5rQWqmXiU6a7PjM1cqe0leMglHU%2BdfXV14zNEn4KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTvaGfazOqwHlRZXMq3AP214mDEwlf3dt%2FfjaLepfRwWlbUgfNY06qQ%2Fnb7kylimJ43nYOAVA%2BoX2HUmFT4qN8DC%2BbOqU%2FTzqf4VdAqxe6DixQs6nYt6I7C9U1ns7d9AncEOMMp5%2FbQLmL90noyAORLjjNa6%2FN7HOsH0pL8UlWRlA3hxNKa%2BChBvAxxbEZ8m%2BWH9a8bqWvjvXROoUFx5mhmOGtPjMUQtrXixMh5U8IxUxCFyIyJ8WwNgb18Q9lp8mNw80HZ5FfRLXJtsopdOf9Cq%2FAgyrIv6SV28%2FbS0oAf5AhGsH6Ky6bJlLvjWSiDzsULvyzUca%2B2oLbSwLcqsWFwwXNR5z%2Fz3cnX3tDS5ZjpJimx2PRB3I8srF7ZfWmA9klPDWnxuNuZG9iMBrUwvqgSY1pbWBdaAdE%2Fi2jJuRuiNq6LdLUQq46MJK8UHB%2FKJsvNIuUuEa%2FAQ5%2BE2sZ3QU7QGkV7WbVajx2Q95MnLyOr%2FBkvJe8z2rdOUhkAagK4CZ7DOH%2BfsIlGEK9Qb5xo%2BBukn5c%2FQ8%2FoiayeOZyqP8XrsnTIfUFZ2k%2FctYi9Ge3m4BVc%2FL1YB3nfYOmdcAAFj7Ij%2F1VBDNlDR3aDfxlzGutO7obC6GM%2Fwf3AIaRsHthrYAo%2BXWkuSw%2BVq17PTCQ%2FdLJBjqkAe6ftaC1ZW9xBM0HsUvacjkxs0Betg8m5zIEI15rmvCMXA1RK8C5xmsmhvZ6%2BB6hLlBsTM8yVUV%2BvgJDdnWBA1kFuWu2MdMrbeDDBzgk8FN3e4c45K1wUhBMxk%2FnycI9SrrPZQGhLxhhLbK8PD6RAfPh5GJPZVwwSPlordH5TSHFfBJhXqEaZUvDPr2hBcFsbIYn%2BJ7NrGu%2BUiuIWwrhNrYaz6pm&X-Amz-Signature=f3c418b81223b6aef7184358eeac9ad1ebe302ace788f8a668fdbe913b096b6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIHBSCAJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T043741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBt5RUKKe1fJiSwko1F%2FW%2B4oeLNtV79w6gZUP3F9VqVQIhAP6VH5rQWqmXiU6a7PjM1cqe0leMglHU%2BdfXV14zNEn4KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTvaGfazOqwHlRZXMq3AP214mDEwlf3dt%2FfjaLepfRwWlbUgfNY06qQ%2Fnb7kylimJ43nYOAVA%2BoX2HUmFT4qN8DC%2BbOqU%2FTzqf4VdAqxe6DixQs6nYt6I7C9U1ns7d9AncEOMMp5%2FbQLmL90noyAORLjjNa6%2FN7HOsH0pL8UlWRlA3hxNKa%2BChBvAxxbEZ8m%2BWH9a8bqWvjvXROoUFx5mhmOGtPjMUQtrXixMh5U8IxUxCFyIyJ8WwNgb18Q9lp8mNw80HZ5FfRLXJtsopdOf9Cq%2FAgyrIv6SV28%2FbS0oAf5AhGsH6Ky6bJlLvjWSiDzsULvyzUca%2B2oLbSwLcqsWFwwXNR5z%2Fz3cnX3tDS5ZjpJimx2PRB3I8srF7ZfWmA9klPDWnxuNuZG9iMBrUwvqgSY1pbWBdaAdE%2Fi2jJuRuiNq6LdLUQq46MJK8UHB%2FKJsvNIuUuEa%2FAQ5%2BE2sZ3QU7QGkV7WbVajx2Q95MnLyOr%2FBkvJe8z2rdOUhkAagK4CZ7DOH%2BfsIlGEK9Qb5xo%2BBukn5c%2FQ8%2FoiayeOZyqP8XrsnTIfUFZ2k%2FctYi9Ge3m4BVc%2FL1YB3nfYOmdcAAFj7Ij%2F1VBDNlDR3aDfxlzGutO7obC6GM%2Fwf3AIaRsHthrYAo%2BXWkuSw%2BVq17PTCQ%2FdLJBjqkAe6ftaC1ZW9xBM0HsUvacjkxs0Betg8m5zIEI15rmvCMXA1RK8C5xmsmhvZ6%2BB6hLlBsTM8yVUV%2BvgJDdnWBA1kFuWu2MdMrbeDDBzgk8FN3e4c45K1wUhBMxk%2FnycI9SrrPZQGhLxhhLbK8PD6RAfPh5GJPZVwwSPlordH5TSHFfBJhXqEaZUvDPr2hBcFsbIYn%2BJ7NrGu%2BUiuIWwrhNrYaz6pm&X-Amz-Signature=1ec0937aaf493e5e51e1a66784ff7f2c215952d85f27360172277c35f6a2d33b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

