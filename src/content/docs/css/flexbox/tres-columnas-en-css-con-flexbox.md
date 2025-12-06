---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYU3AGZ3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T041342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaSBz0mg%2BBwiHojk7I138krn59pYnq2KAsOdIjkZfgSAIhAJMrAAUt6I4FfJprYa%2FXdT5tKHRvGOrNqSMqlBnTS4FnKv8DCGwQABoMNjM3NDIzMTgzODA1IgwlIYotK00ZxbBmSZMq3ANmqDFI%2FP6WYnK8FKXi73MVug02phM%2BzuWUypnO%2FpHQEoiJqZLgPJr7P0cd0B3wQ70Dq3XEg%2BknjqQzHSZXpsf03IH%2FUfItjiNCw3VtFsHVZP9J8az8ibQXqJ9BvhkpU5LkyMUpI92aRbgiYMgFUDlTqiaBkLT0Bxx8R%2Bg8SKvJe%2BUD5xFnb%2BJPLTqTzGXfN70LgvJZpc7%2FMIrwLBZKjLv6kYH6v7HDFoBM7ww4MG7rrMyzij2%2FJGvF9JvZd2uqmk5WCLFwMnSue3O4x2FMhlZLyT7ZvfehFoayPTdku2im1LgGKWVaOiB2dN%2B2FR%2Bb0dSIEJeyACGJirHjDB%2BplQkgrAQKaid0ZV579v99UwTqSmyeLu1nwRpWLIAKL1hj2fOkBd9KyqRvJsVURkQWnzgqt%2BB6mjFULZfkTjxFZh8ixJBvzVuRiDUZEjd9k%2BCrdlTNsBl1bA4A3C%2FX%2BR57gT8f6RYXzoWl1HOeeQg875%2FPkWOekeQFbu6nNNXIv4koKWhYbsV%2BIHpv8SifUtudAsgqOXN21NF6kXaQEyu%2FK3xH9HDjNQMRwtQimVrHh3u6yJDESAly8tIxHpEzC6LyVi8vjOSOtI6RyYdBNKo8EhKVcIP9hFFfushTzBqmWDCfw87JBjqkAfK4%2Fe%2FNxO85u4fGbbqNu%2BRE2YD1kfXZ5rGWIP4%2Bulf%2Fzn%2BPtSgaQ5CQaVKIfsigsg1iAgYq0VhU2Sq3TmG2%2B1I4DzIdMY59O2HdLI4lNDeqZjubMZrwtHVI0rBhVLqMtEjhKT4EsoA4MdtWD%2FOv%2Fmz0MI9jxlRFT4JTcc5f%2B73objuUAAI%2Fy6qw4xhb38BpfzouxzVPtRuFA%2FBu1U8hF1ttph7Y&X-Amz-Signature=81f80381681daf1ec3b333a308760dcef9daa46a012612e3201296ea6256d6f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYU3AGZ3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T041342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaSBz0mg%2BBwiHojk7I138krn59pYnq2KAsOdIjkZfgSAIhAJMrAAUt6I4FfJprYa%2FXdT5tKHRvGOrNqSMqlBnTS4FnKv8DCGwQABoMNjM3NDIzMTgzODA1IgwlIYotK00ZxbBmSZMq3ANmqDFI%2FP6WYnK8FKXi73MVug02phM%2BzuWUypnO%2FpHQEoiJqZLgPJr7P0cd0B3wQ70Dq3XEg%2BknjqQzHSZXpsf03IH%2FUfItjiNCw3VtFsHVZP9J8az8ibQXqJ9BvhkpU5LkyMUpI92aRbgiYMgFUDlTqiaBkLT0Bxx8R%2Bg8SKvJe%2BUD5xFnb%2BJPLTqTzGXfN70LgvJZpc7%2FMIrwLBZKjLv6kYH6v7HDFoBM7ww4MG7rrMyzij2%2FJGvF9JvZd2uqmk5WCLFwMnSue3O4x2FMhlZLyT7ZvfehFoayPTdku2im1LgGKWVaOiB2dN%2B2FR%2Bb0dSIEJeyACGJirHjDB%2BplQkgrAQKaid0ZV579v99UwTqSmyeLu1nwRpWLIAKL1hj2fOkBd9KyqRvJsVURkQWnzgqt%2BB6mjFULZfkTjxFZh8ixJBvzVuRiDUZEjd9k%2BCrdlTNsBl1bA4A3C%2FX%2BR57gT8f6RYXzoWl1HOeeQg875%2FPkWOekeQFbu6nNNXIv4koKWhYbsV%2BIHpv8SifUtudAsgqOXN21NF6kXaQEyu%2FK3xH9HDjNQMRwtQimVrHh3u6yJDESAly8tIxHpEzC6LyVi8vjOSOtI6RyYdBNKo8EhKVcIP9hFFfushTzBqmWDCfw87JBjqkAfK4%2Fe%2FNxO85u4fGbbqNu%2BRE2YD1kfXZ5rGWIP4%2Bulf%2Fzn%2BPtSgaQ5CQaVKIfsigsg1iAgYq0VhU2Sq3TmG2%2B1I4DzIdMY59O2HdLI4lNDeqZjubMZrwtHVI0rBhVLqMtEjhKT4EsoA4MdtWD%2FOv%2Fmz0MI9jxlRFT4JTcc5f%2B73objuUAAI%2Fy6qw4xhb38BpfzouxzVPtRuFA%2FBu1U8hF1ttph7Y&X-Amz-Signature=6dff6cdfa79d9f5368c986581f8559754dc85c4fcdc3802cd5ba38a48bbf0b99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

