---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W7VHPV4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T161703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIDjerOYyr5%2BCASvTOycXfo6WZ96x7KkNl0RoQawgGb8eAiAIHYjKnGj4xQTmrjNo2uPfs16LbvGQewSyBksUXEtO1Sr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM90pIrAHpDX40tbxlKtwDHvUZ25%2BuZzHCRQzVP2w%2BiaH%2BD%2FDzZX0UggaIy30WY%2FP0TSmPI0PsPm3PJlaI3RLgCoN1Y6Yuw3rGEoX01EhyhFikZ3gzAx4aue3EyKQ%2FtaSOcytNhQLxKjrwKuN2Bud5RvEpkTDJbC6NV6ZNcrYO6jfsJsk3nJIrFLPMVuodDdmY%2Bhmup4jMsmwXZ6wFoZuuwwuVBSg7VclEWn95bog49J4oTjuSxC9oEylE0Xmb%2BNgkVwRN2s7FOuLF9EyzfFHjbg7HBhAkRaVltUO8Bv2foR4qzsP7g0Io4nWK8W4%2FDyt6%2Fme8vMU2ttA3aa5gRkeBgpUVXd%2BrJzISHaup6nhj9RZo3pcj2aQigxHWfQL0l7JFucE%2BCOl%2BuGOj%2ByPESegyh%2BWz6%2BTlfdnLjeorDdce4C36tTnIWndJnGNie4SP9pqqLwhKtwg8JB%2FnLIXZ0WGxJjaMs2P0VS%2B2r9HOcMxTIkAj0Zir30tq22i24iG0oiv9d4Y%2BjlcndSiYSVxvdmxvBySTzYu1oDqPIdbQ4dY5Nivf%2F9UqoDdALlbJwl27r2qBmAxWfpXNCYHqxsDBFTjx8YdI%2FO2QlIttm3aI2C%2FJ1XFt%2FzfGE%2BETxOBwAYZUdsp6GxFATump5d94YhwwpcHByQY6pgHuRWyINhZ6Gp1zo%2BsOLcwmETHBqJPQNU1ZcP1B0HEHVIDQrd3gEFR7d59XQvKH5MSw8jU54veSoYhJ4IPWbY2FRg%2FfZCEsNw8T3FKe12kXLVozOIPdEcN9fuh7Ev%2BYk7my87K946LZkWx6qHwoS2B1%2BgdScCxTdSTuFm7DgNOkP06vPsqMN9yZq0hH9cdmdOW0fT%2FfOGSZSsEWKwVH9VFNjPAV3Yr%2F&X-Amz-Signature=2317d713f96a87dc9665eb846914947843b73761446e58bce7e8f37485d30591&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W7VHPV4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T161703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIDjerOYyr5%2BCASvTOycXfo6WZ96x7KkNl0RoQawgGb8eAiAIHYjKnGj4xQTmrjNo2uPfs16LbvGQewSyBksUXEtO1Sr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM90pIrAHpDX40tbxlKtwDHvUZ25%2BuZzHCRQzVP2w%2BiaH%2BD%2FDzZX0UggaIy30WY%2FP0TSmPI0PsPm3PJlaI3RLgCoN1Y6Yuw3rGEoX01EhyhFikZ3gzAx4aue3EyKQ%2FtaSOcytNhQLxKjrwKuN2Bud5RvEpkTDJbC6NV6ZNcrYO6jfsJsk3nJIrFLPMVuodDdmY%2Bhmup4jMsmwXZ6wFoZuuwwuVBSg7VclEWn95bog49J4oTjuSxC9oEylE0Xmb%2BNgkVwRN2s7FOuLF9EyzfFHjbg7HBhAkRaVltUO8Bv2foR4qzsP7g0Io4nWK8W4%2FDyt6%2Fme8vMU2ttA3aa5gRkeBgpUVXd%2BrJzISHaup6nhj9RZo3pcj2aQigxHWfQL0l7JFucE%2BCOl%2BuGOj%2ByPESegyh%2BWz6%2BTlfdnLjeorDdce4C36tTnIWndJnGNie4SP9pqqLwhKtwg8JB%2FnLIXZ0WGxJjaMs2P0VS%2B2r9HOcMxTIkAj0Zir30tq22i24iG0oiv9d4Y%2BjlcndSiYSVxvdmxvBySTzYu1oDqPIdbQ4dY5Nivf%2F9UqoDdALlbJwl27r2qBmAxWfpXNCYHqxsDBFTjx8YdI%2FO2QlIttm3aI2C%2FJ1XFt%2FzfGE%2BETxOBwAYZUdsp6GxFATump5d94YhwwpcHByQY6pgHuRWyINhZ6Gp1zo%2BsOLcwmETHBqJPQNU1ZcP1B0HEHVIDQrd3gEFR7d59XQvKH5MSw8jU54veSoYhJ4IPWbY2FRg%2FfZCEsNw8T3FKe12kXLVozOIPdEcN9fuh7Ev%2BYk7my87K946LZkWx6qHwoS2B1%2BgdScCxTdSTuFm7DgNOkP06vPsqMN9yZq0hH9cdmdOW0fT%2FfOGSZSsEWKwVH9VFNjPAV3Yr%2F&X-Amz-Signature=6c6221411aba9ba3a1db31400898082fb598e28c9c6cabb3b2317e239fdb67be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

