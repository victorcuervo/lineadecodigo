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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W2QXDDL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T040456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIARkDHhg%2FqAUliYvsinvFt%2B3CJyeHo9icIX%2F5qRyE9QiAiB%2FkCLO7QBFGXGpZfESrqwEZxYXH9ezrfA8CWcN23ukVCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMNgiKR%2FWJ2UVeqeY7KtwDXWNI8dXu%2Bwd0qpgksiX0Fl42mjnzn2fXcOd%2B5nB%2BdBbfAJ%2FHaASUYRKP58qlsMoScEaWfsOnM6fyz2vt%2B1H6J%2Bo7qMBL0M0TWSlkqnWvdFvGUWnwgGnKhIOH5P9nQnIXqSJoReanQIsdoTeZzkye%2FbxzVfnj9w2kQvjhNH9XhREdhTXB1tsDY9ag213qJJnyjsiV4%2FPA6QlmGZvtKBsVIAxSf2z34JX5RUqH4ZkndIP09EWCLAPb8yg97e2HmJaaSzXDDwPZLxto1wsetOb6AKTOTq1rX%2Fe9sgYS7FPYxw7TnbAAhgvBFrHeSPaxnM2%2FqVA3bgagnl7sYUeu2%2ByBREXkuH%2BxBb2kpBufIts4BlRNL2fCt48bcS5QAYdr72%2BKMvTNeE%2FRUTJqowzD8DoKOL8T1EHcb1ltm3M4psZxRGbHXmsDgY72r3vw%2F64DWnXQTsHfjTGwp8V9GrP14iwvVeg30LtTbb3m2mQfUZ9pnQz64vCHIFNLx8Dri%2FxO0JAdK0W%2FuX6p8eqRW0BjPZCGI%2Bx0gA4Ue9Z4I2EyPuoV9keO9RLjQ4lxbMymYqp38j%2B75ojoWQ0KYfChiUGGXi45Z1hiV%2F2X4JeDZDr3GuuI3UMClKOBN2YDmGT2qYUwzZa%2ByQY6pgGDguRFGOk8itEzFbwGUf0d5Su7caIISW4sX0kdofNS8yIm3LdO%2B%2Fe9Sjx4ilD6WQ7IUosYfW6mVNaF%2BCEyExgfjp21aFJ4z8%2BOCXFM5aQWTbofwybB0hHWMUTLN3%2FhmRi%2BlKtPAVcZcpSPo9pC2nv%2FYs%2FvQXkRiiCIv62O9vIWol7SQyvoKFkSX4cYJYi%2F2eAH4ARQ8xCkiUuMm4liT4QmxEJ3Jg06&X-Amz-Signature=50d104d6fbdee43914d908023f4924950d3aa9b11746e61c45f0804e5951b5b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W2QXDDL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T040456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIARkDHhg%2FqAUliYvsinvFt%2B3CJyeHo9icIX%2F5qRyE9QiAiB%2FkCLO7QBFGXGpZfESrqwEZxYXH9ezrfA8CWcN23ukVCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMNgiKR%2FWJ2UVeqeY7KtwDXWNI8dXu%2Bwd0qpgksiX0Fl42mjnzn2fXcOd%2B5nB%2BdBbfAJ%2FHaASUYRKP58qlsMoScEaWfsOnM6fyz2vt%2B1H6J%2Bo7qMBL0M0TWSlkqnWvdFvGUWnwgGnKhIOH5P9nQnIXqSJoReanQIsdoTeZzkye%2FbxzVfnj9w2kQvjhNH9XhREdhTXB1tsDY9ag213qJJnyjsiV4%2FPA6QlmGZvtKBsVIAxSf2z34JX5RUqH4ZkndIP09EWCLAPb8yg97e2HmJaaSzXDDwPZLxto1wsetOb6AKTOTq1rX%2Fe9sgYS7FPYxw7TnbAAhgvBFrHeSPaxnM2%2FqVA3bgagnl7sYUeu2%2ByBREXkuH%2BxBb2kpBufIts4BlRNL2fCt48bcS5QAYdr72%2BKMvTNeE%2FRUTJqowzD8DoKOL8T1EHcb1ltm3M4psZxRGbHXmsDgY72r3vw%2F64DWnXQTsHfjTGwp8V9GrP14iwvVeg30LtTbb3m2mQfUZ9pnQz64vCHIFNLx8Dri%2FxO0JAdK0W%2FuX6p8eqRW0BjPZCGI%2Bx0gA4Ue9Z4I2EyPuoV9keO9RLjQ4lxbMymYqp38j%2B75ojoWQ0KYfChiUGGXi45Z1hiV%2F2X4JeDZDr3GuuI3UMClKOBN2YDmGT2qYUwzZa%2ByQY6pgGDguRFGOk8itEzFbwGUf0d5Su7caIISW4sX0kdofNS8yIm3LdO%2B%2Fe9Sjx4ilD6WQ7IUosYfW6mVNaF%2BCEyExgfjp21aFJ4z8%2BOCXFM5aQWTbofwybB0hHWMUTLN3%2FhmRi%2BlKtPAVcZcpSPo9pC2nv%2FYs%2FvQXkRiiCIv62O9vIWol7SQyvoKFkSX4cYJYi%2F2eAH4ARQ8xCkiUuMm4liT4QmxEJ3Jg06&X-Amz-Signature=817eeab02d94bba72758b0b583dfcbe749e43b6f6acc8f81c3e0557d1f42f4c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

