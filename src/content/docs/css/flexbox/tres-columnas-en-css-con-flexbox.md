---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EREMB7P%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T000153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtK0u0gzd0EVH5UGYbGD0n7LYRyG%2FE5LKX91rXbfHNsgIhAOCKvfRgXY%2Fjm2GKYQxH%2BT5Wy10kANmbKTUUzP2xvwRZKv8DCGgQABoMNjM3NDIzMTgzODA1IgzDxj4kVKKJV%2FhQ%2FyEq3AMvq3rgbWUfyxtWH0kyIy57bl3scxm9%2FyqWv3vKXk7lcRSGLBCG3s%2Fu5pRUyZ%2BGJ2OrMjkWmTzsqlVEFXYJblyxyEcs5UJ2L%2FLHX%2BCH6bZYTQqQmIJeNr2c8Csw%2BY30kRiiTKEEge1BqCy4HfqNqN9UAndbTLgGodTcfi4ISoftEg%2Fa5D82sucHifptq0Gml8O%2BrigdHxMDhxzmAcbP9OZN4oYDijukq363Zfoj53gFvs%2FG5sSTDmMDhHenj%2FC1zWVZnvfJ7y9JDucpOtphCCOVqetXzpWQQpj7iji7zhUpkk3j%2B16e7qTKrQvNRjnUcMNGFDgfZxxZWjI7u4Ahg0mpkCdIOwTPkOdaRDAGjRyNL8eHI5ejBxBEjdXUv9P6MObm1Zt8Unii9uq1fpEbKTGuuVFL6LfGdGTsBUPRvFqVWtBnMtf8s7XDSeotcmnOwqSg0VvFvjwzGqKHwL%2FxZeqMsG%2BvPTyu2Apskd1Bj9G9UR%2FB3gQ1E64exBtQxb%2FHQmxdQLFDAwMMdWtEUUWRdPcVO0TAvA6iqw1xxLD1k5zc1R7Qh1%2BWQGuXU6Zfd%2FR02Weul1F0NfO26jsuFSH%2FENFj1TclLFGZu6WuEhXnz02j9E0rysxkcyTCV2dXejC0xs3JBjqkAcHyjYwJT7NHUcNyEvt%2B0bIfnZjbCrOrR1Sa%2BfUBR8PRfedvwoqESd7jAVhvGI6l1RuMU8uKh7wmsUXPsY6jPdco1ErOAz2wWVWYy11n%2BOfAoqeOT%2FqqiE4yfIB6N1l0Mf0tpSdnQllUjGt%2FKMpNg4r619znt4eYW7CLsWti2y2lyidM1KjWPBfpGXqU3XyNdD%2BwOQHgA6zIRQW8UGXrH2frUMZT&X-Amz-Signature=b016f0264e51197e65bc85047a69a961ef3d0939ab684b890e2a09f28ef218ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EREMB7P%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T000153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtK0u0gzd0EVH5UGYbGD0n7LYRyG%2FE5LKX91rXbfHNsgIhAOCKvfRgXY%2Fjm2GKYQxH%2BT5Wy10kANmbKTUUzP2xvwRZKv8DCGgQABoMNjM3NDIzMTgzODA1IgzDxj4kVKKJV%2FhQ%2FyEq3AMvq3rgbWUfyxtWH0kyIy57bl3scxm9%2FyqWv3vKXk7lcRSGLBCG3s%2Fu5pRUyZ%2BGJ2OrMjkWmTzsqlVEFXYJblyxyEcs5UJ2L%2FLHX%2BCH6bZYTQqQmIJeNr2c8Csw%2BY30kRiiTKEEge1BqCy4HfqNqN9UAndbTLgGodTcfi4ISoftEg%2Fa5D82sucHifptq0Gml8O%2BrigdHxMDhxzmAcbP9OZN4oYDijukq363Zfoj53gFvs%2FG5sSTDmMDhHenj%2FC1zWVZnvfJ7y9JDucpOtphCCOVqetXzpWQQpj7iji7zhUpkk3j%2B16e7qTKrQvNRjnUcMNGFDgfZxxZWjI7u4Ahg0mpkCdIOwTPkOdaRDAGjRyNL8eHI5ejBxBEjdXUv9P6MObm1Zt8Unii9uq1fpEbKTGuuVFL6LfGdGTsBUPRvFqVWtBnMtf8s7XDSeotcmnOwqSg0VvFvjwzGqKHwL%2FxZeqMsG%2BvPTyu2Apskd1Bj9G9UR%2FB3gQ1E64exBtQxb%2FHQmxdQLFDAwMMdWtEUUWRdPcVO0TAvA6iqw1xxLD1k5zc1R7Qh1%2BWQGuXU6Zfd%2FR02Weul1F0NfO26jsuFSH%2FENFj1TclLFGZu6WuEhXnz02j9E0rysxkcyTCV2dXejC0xs3JBjqkAcHyjYwJT7NHUcNyEvt%2B0bIfnZjbCrOrR1Sa%2BfUBR8PRfedvwoqESd7jAVhvGI6l1RuMU8uKh7wmsUXPsY6jPdco1ErOAz2wWVWYy11n%2BOfAoqeOT%2FqqiE4yfIB6N1l0Mf0tpSdnQllUjGt%2FKMpNg4r619znt4eYW7CLsWti2y2lyidM1KjWPBfpGXqU3XyNdD%2BwOQHgA6zIRQW8UGXrH2frUMZT&X-Amz-Signature=111a091a1e73aaf8d04c7e4654eabba5f1876b0fc5da7a613a0595725d8024f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

