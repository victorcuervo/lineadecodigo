---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647D6RIDP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T031151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJzCdX7jjmkq0PWFtGIH6NP3MrbVd6dmbWZiUKJbxClgIhAPjeEiKVcYcuekS0VqI%2BfUkgNcIROtKs5RtrEzFVGw3LKv8DCGwQABoMNjM3NDIzMTgzODA1IgzYhpY%2FlFQa95rIFxoq3AP21j2U5wCTL%2BWcAXmtBKLiWO1tV9jYCLvoxoGMXiYTfIAYc9LZ5b71U4nQqAFoqTLuuatEoV2UVA1oGRfiSJ%2FRqlx35jMK23cHqAivHBQZogYeeDA0OI3gntfCZnZis%2FOZzi0UbP7vwfHcqvZXXE93wdBXmeQxIGoyEYMKDGT%2BXO7xln74JVsvpJUdZI4mJ4vHYuoQMIh%2B3PDE7G4zcocx5YIV2wgMhXrKujKhUTwid9JPFhsKcQasf3iVXQOBSom%2FId85J8HDVBrgo9T0hFPQjay13WRrB0YAcs%2BaTgiIuHeo8h2VtUxGmbAEKci5P0A0fZ8BbfkA1mJ4fGSbxeqnoa9G4QAnmPnQ09BB1KBiG8nYqjrTAg9HUZx0cugoyT0ztn1OkVTuK6tRvsprYApoib2eob%2Ft3ktllTW5O52qRr7XEIF2KI1vZfYZ4WpTSi%2BvKFRmahszus%2B6lGWtjuYQKPPacGee33gaR%2BqnK1D2ChzhUe5NAJrCrtTgIbO4%2FpJT581IidH5F21hpwsm44znaWNBdbRmPtehZLiZ%2F9pcOXdH159ZJng1KIQPfdlmyBasvaZdS5MEpYBU0D0mCmu%2FVaFa6mgZcI4dz0mH4xwuDEXMeOq2w0LtE1w6yzDpp87JBjqkActwVYrvTGVt%2F9UQc9Cft5F287ffQf0gRRTRsmgAOy1tfKkW%2F6if8DIZIwdGt1sBpJnOdF7wJWgVNlOdsa5mXiLHciUHHDZ%2BD%2F2Hp%2Fk0q4URBQ4hKgWQf%2FpRVrQ2bHtVxoQZNrx3v7G7UI2EEDhkcOIACLveyH4DUXP3ZCqj97Q5waY5j1trYtp50twJV7A%2BlnWfCk323XaybDbS%2FiNTyXawXzMj&X-Amz-Signature=c53c3941ad992c676675186f47da735fbb41b2eef3f8d36117b926f22f67d32c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647D6RIDP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T031151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJzCdX7jjmkq0PWFtGIH6NP3MrbVd6dmbWZiUKJbxClgIhAPjeEiKVcYcuekS0VqI%2BfUkgNcIROtKs5RtrEzFVGw3LKv8DCGwQABoMNjM3NDIzMTgzODA1IgzYhpY%2FlFQa95rIFxoq3AP21j2U5wCTL%2BWcAXmtBKLiWO1tV9jYCLvoxoGMXiYTfIAYc9LZ5b71U4nQqAFoqTLuuatEoV2UVA1oGRfiSJ%2FRqlx35jMK23cHqAivHBQZogYeeDA0OI3gntfCZnZis%2FOZzi0UbP7vwfHcqvZXXE93wdBXmeQxIGoyEYMKDGT%2BXO7xln74JVsvpJUdZI4mJ4vHYuoQMIh%2B3PDE7G4zcocx5YIV2wgMhXrKujKhUTwid9JPFhsKcQasf3iVXQOBSom%2FId85J8HDVBrgo9T0hFPQjay13WRrB0YAcs%2BaTgiIuHeo8h2VtUxGmbAEKci5P0A0fZ8BbfkA1mJ4fGSbxeqnoa9G4QAnmPnQ09BB1KBiG8nYqjrTAg9HUZx0cugoyT0ztn1OkVTuK6tRvsprYApoib2eob%2Ft3ktllTW5O52qRr7XEIF2KI1vZfYZ4WpTSi%2BvKFRmahszus%2B6lGWtjuYQKPPacGee33gaR%2BqnK1D2ChzhUe5NAJrCrtTgIbO4%2FpJT581IidH5F21hpwsm44znaWNBdbRmPtehZLiZ%2F9pcOXdH159ZJng1KIQPfdlmyBasvaZdS5MEpYBU0D0mCmu%2FVaFa6mgZcI4dz0mH4xwuDEXMeOq2w0LtE1w6yzDpp87JBjqkActwVYrvTGVt%2F9UQc9Cft5F287ffQf0gRRTRsmgAOy1tfKkW%2F6if8DIZIwdGt1sBpJnOdF7wJWgVNlOdsa5mXiLHciUHHDZ%2BD%2F2Hp%2Fk0q4URBQ4hKgWQf%2FpRVrQ2bHtVxoQZNrx3v7G7UI2EEDhkcOIACLveyH4DUXP3ZCqj97Q5waY5j1trYtp50twJV7A%2BlnWfCk323XaybDbS%2FiNTyXawXzMj&X-Amz-Signature=ab457048fbaed51f26db0ddf8d734698f136ff7bbaae14a5be8b1917d9385933&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

