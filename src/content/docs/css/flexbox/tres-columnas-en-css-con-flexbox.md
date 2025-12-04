---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THQJYUDX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3NUnlqk5fV78VeZxnAWkOFfZEM7rIhOGO7g7NdKjkywIgFBPYEj48Bn2sx%2Fy6kNKr9Je3f74EVrztoedc11d9NT4q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDKMcM3yxjjmiv7wByyrcA2dljm%2FIsRQ3n2jLEzQquTkN2GeRHcrv0c69tghfWNb8HlQCsZqYHnZtIVKHfNSAvk4sdImGIwOHCXN85waXdPMLB%2FqdE%2BWy%2B5EeyZHVJj0mNWKr8Oeg6KCBPb4s1IdBy0PMhnGuBnYaIW1z9cojX2gPxinO1bHz61bHMM9E2uJrdVMCoZAhPFWqZiOzNinsvLAA9%2FvSLfdBapakKibG%2BiwHPtl615Ssh7ji1%2Bg2axigMl5OvlzjAtrKN4qyL%2BNtoJnhlAFmi23d5fKCdk%2F%2FTPQKzi6nXFymMiFcUsd27gH4gY9RBwCIYQKf%2BNHQzFu1fZMfYW0ZOB91YUs4duMpTOJZWtWduqNYF47kmYGRK7PavCxVYORhrWTBeAmv0amvHvvPYZxX97cZ4Tvet5%2BjDtfF%2Bec%2BomeR%2B1TcYippo4AYvRI6fq2%2B7bvGb%2BlL%2Bn4NJPJXDr4YS3oq%2FzW3NLES11wjYc3pR63zNE7aU1utohj%2B7v7OwmR0zFX2HQBwg4rKAeSxOAjZQCFSoo7jsnbXez%2Fjch%2F7LzsfmLpGw7pEexV5ABaYnxfqCjh6EFrgD7sbBH7aaIplN9jRnvGof5vvyGFPGo5R%2FsZiI0ZfmLYaQIJ%2FE%2B17w2wIQwz2DfQMMIvcxskGOqUBs2OvyJ9iWClO5e6UYwX2ioQMM539%2FJRxn8jELo0afo2MYZT2mp%2BsXc%2BqOuvAZdMU2%2BtfjJBefsQb8AqNp5DjkPi9x6dimchS5jQ8s%2FQgleMCqTr1%2FCZsatd7dClMzJXlf4Mf5lT%2FV2OPytO7QUKpkhEx4OWuS6ch9M20BosoyrIzxTkDhpZZW7VG5D0%2FjPHwMnePLt7nyIw%2FNs6WBOO83YlLKHLo&X-Amz-Signature=6180b27a043930b4b6d05db5568781dc6a09abc8f18835f5cb073b067441defc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THQJYUDX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3NUnlqk5fV78VeZxnAWkOFfZEM7rIhOGO7g7NdKjkywIgFBPYEj48Bn2sx%2Fy6kNKr9Je3f74EVrztoedc11d9NT4q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDKMcM3yxjjmiv7wByyrcA2dljm%2FIsRQ3n2jLEzQquTkN2GeRHcrv0c69tghfWNb8HlQCsZqYHnZtIVKHfNSAvk4sdImGIwOHCXN85waXdPMLB%2FqdE%2BWy%2B5EeyZHVJj0mNWKr8Oeg6KCBPb4s1IdBy0PMhnGuBnYaIW1z9cojX2gPxinO1bHz61bHMM9E2uJrdVMCoZAhPFWqZiOzNinsvLAA9%2FvSLfdBapakKibG%2BiwHPtl615Ssh7ji1%2Bg2axigMl5OvlzjAtrKN4qyL%2BNtoJnhlAFmi23d5fKCdk%2F%2FTPQKzi6nXFymMiFcUsd27gH4gY9RBwCIYQKf%2BNHQzFu1fZMfYW0ZOB91YUs4duMpTOJZWtWduqNYF47kmYGRK7PavCxVYORhrWTBeAmv0amvHvvPYZxX97cZ4Tvet5%2BjDtfF%2Bec%2BomeR%2B1TcYippo4AYvRI6fq2%2B7bvGb%2BlL%2Bn4NJPJXDr4YS3oq%2FzW3NLES11wjYc3pR63zNE7aU1utohj%2B7v7OwmR0zFX2HQBwg4rKAeSxOAjZQCFSoo7jsnbXez%2Fjch%2F7LzsfmLpGw7pEexV5ABaYnxfqCjh6EFrgD7sbBH7aaIplN9jRnvGof5vvyGFPGo5R%2FsZiI0ZfmLYaQIJ%2FE%2B17w2wIQwz2DfQMMIvcxskGOqUBs2OvyJ9iWClO5e6UYwX2ioQMM539%2FJRxn8jELo0afo2MYZT2mp%2BsXc%2BqOuvAZdMU2%2BtfjJBefsQb8AqNp5DjkPi9x6dimchS5jQ8s%2FQgleMCqTr1%2FCZsatd7dClMzJXlf4Mf5lT%2FV2OPytO7QUKpkhEx4OWuS6ch9M20BosoyrIzxTkDhpZZW7VG5D0%2FjPHwMnePLt7nyIw%2FNs6WBOO83YlLKHLo&X-Amz-Signature=b84c2b1801bb6708ece27c164355bd69335a01d909dffb74527a87c72b89b4da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

