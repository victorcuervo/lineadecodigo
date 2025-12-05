---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LOAK2RO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T160036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4OwQb6uv4THNQxKn2hk9elzSzRZrISXYvgUOyIIvrmQIhAJpyPc%2BQ%2BpEOJsIYJUUIhy4eUX9MHFW6IC%2Bz%2FMaG8zGeKv8DCGAQABoMNjM3NDIzMTgzODA1Igw9RRADz6OEiDFOi5Eq3AMZZUFLX9enkE%2BwHBMt22GWsfY4CqqryQS5JPz1iAmBsVyrwPQhU54J5plbxnvwlF9E8c3lxN6g5ChthbdhVd1r0czs9C41oNFZZh2f%2FDt%2FYYGuuP%2BSbU201Er5VcM0oxpbwL3ys8C9wzg7u1JrZ0%2F7%2Fd1GR2BzqgL11AkC8cd%2FcvtPm%2B3Yqm%2Fux1ukWchbNmQ2aH4ioXAf9VAJble5rY5MSPqwtHT6MHJFNaju3Z5oAJDQSDLoRT3%2FSvVCgvm7PgYqoXDFHGGWVe%2BkzeiMXvmA22Sy12SgTILQUocQaHI7Lh%2FVgcdURkKvm1m8HCEZKx%2Fx2wTf6QfcRIFAHYRhTd0xOpHQ6KRKs0THjYkjWGch77TBRQ5x6DLNw5o2wrWpAVEs%2Fq%2B1VQGXHYwM4q0blZWOj%2Fny8ldnOk2cejH6eXBa2IR6gqB3%2FMp6lITd14wmMzw%2BEMOZmhvBIks0NPSWtdNILjsZLnXrOJeLM%2BkuJfkAHIvKhNW41VGkJIZJN0fyadj9M2yc0BCzQio43s%2FgcBlTJgeCcSnsS%2BNTLK9z77RyArJi%2BbjeX%2BHuLo0NHvwNxA7fljoLcIrpordh829gU7OAiu31G9PYZ7CtOxBRUhMk8KbJGHYB3mNAE6rENDCm7cvJBjqkAUhPIq8IQOtTEUGHSItHZVj9rGYzNaGZXRLyntwhl%2FgvUCg0uwvS8G9a5EyB%2FMUXe6pYqOBcl2mbujqI9tBlqSF%2FKL8y7SoTLT%2FsgDyJDEI%2BMng6X0hrWoM24yFztHM1fyxirpJJ9wfU8y8veatPUZyS5ogZni%2BYS04uNQFmexs5PESIUFdOfZ9C3Qy4C%2BfEdpwqI%2FSb4KfqTkvDjrAoL9IeHZVi&X-Amz-Signature=95d49a7b501ca0c116ebc8f2ffe8d20d6ebc05c87d5fac7b4ff0d038a693b4e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LOAK2RO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T160036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4OwQb6uv4THNQxKn2hk9elzSzRZrISXYvgUOyIIvrmQIhAJpyPc%2BQ%2BpEOJsIYJUUIhy4eUX9MHFW6IC%2Bz%2FMaG8zGeKv8DCGAQABoMNjM3NDIzMTgzODA1Igw9RRADz6OEiDFOi5Eq3AMZZUFLX9enkE%2BwHBMt22GWsfY4CqqryQS5JPz1iAmBsVyrwPQhU54J5plbxnvwlF9E8c3lxN6g5ChthbdhVd1r0czs9C41oNFZZh2f%2FDt%2FYYGuuP%2BSbU201Er5VcM0oxpbwL3ys8C9wzg7u1JrZ0%2F7%2Fd1GR2BzqgL11AkC8cd%2FcvtPm%2B3Yqm%2Fux1ukWchbNmQ2aH4ioXAf9VAJble5rY5MSPqwtHT6MHJFNaju3Z5oAJDQSDLoRT3%2FSvVCgvm7PgYqoXDFHGGWVe%2BkzeiMXvmA22Sy12SgTILQUocQaHI7Lh%2FVgcdURkKvm1m8HCEZKx%2Fx2wTf6QfcRIFAHYRhTd0xOpHQ6KRKs0THjYkjWGch77TBRQ5x6DLNw5o2wrWpAVEs%2Fq%2B1VQGXHYwM4q0blZWOj%2Fny8ldnOk2cejH6eXBa2IR6gqB3%2FMp6lITd14wmMzw%2BEMOZmhvBIks0NPSWtdNILjsZLnXrOJeLM%2BkuJfkAHIvKhNW41VGkJIZJN0fyadj9M2yc0BCzQio43s%2FgcBlTJgeCcSnsS%2BNTLK9z77RyArJi%2BbjeX%2BHuLo0NHvwNxA7fljoLcIrpordh829gU7OAiu31G9PYZ7CtOxBRUhMk8KbJGHYB3mNAE6rENDCm7cvJBjqkAUhPIq8IQOtTEUGHSItHZVj9rGYzNaGZXRLyntwhl%2FgvUCg0uwvS8G9a5EyB%2FMUXe6pYqOBcl2mbujqI9tBlqSF%2FKL8y7SoTLT%2FsgDyJDEI%2BMng6X0hrWoM24yFztHM1fyxirpJJ9wfU8y8veatPUZyS5ogZni%2BYS04uNQFmexs5PESIUFdOfZ9C3Qy4C%2BfEdpwqI%2FSb4KfqTkvDjrAoL9IeHZVi&X-Amz-Signature=9c56e8738ac9c7512f2ec3e1960bec40579cad4ced9568f089890f8b4a0c7989&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

