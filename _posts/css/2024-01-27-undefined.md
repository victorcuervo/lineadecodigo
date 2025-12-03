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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDHAD5WT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T132838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQC2KEmnadd7rPnnfPLmA8oSbDwpZWmqjPv2VfWYktIlAQIhANSgXVoiELbB6VqYfRTiaCvmct8pDMt487%2BKe6vOPsfdKv8DCC4QABoMNjM3NDIzMTgzODA1Igz1zh8RBnyre%2BsX4BUq3AMO0KhzTZha9rv%2FiAj9Buk0Cqj0xjVVN%2FRa4xDq5UME40VwwGn2NTEDKwAm0Yl%2FKyURDtouvXBEsQdJeeJYP1NpoX2Rn858G1pJ2duGQXEbyekGZ2oxFgUyVfHFPgtWzRXii%2Fy6keW%2BZnBsJQCTJfKijGx9g8UR1N1QsylYj3r5qZueUR2XvQfhc3XI7ybf6jZ3is5d2T7W5pFpGML4W%2BKoctrc1%2Bfk%2B6cg%2FGxAqctzUSNLF6GC5EXTaVy0kxtdra1SfMTYKjDda%2BlnRmS5uv0LyoPScbD4EfCQn9aN0m9nhP5Vts2rUyuzQe48lB%2FWOol9yXgiyTrgQXaA3tbxUqy%2FOsvq4NkmJpO7k34H6KzOngo2xqpVm1BnsixEzgcPpWsBntMDzGUyJqCodWQQrc07zhLTmk2CyTm6goQmnQDxMZ1EHbZiQpvA31V58Im3biJDXot03YzvgwkhefyOstI4InxhZMvKexFm29iLbMsnOg5HokVSiRFCOfWk2Lod6hoLYMVrCioo91oEej%2BOndgtTCSMNHyWQYOuGFtLFBpXwqSVhuluJxIb2dY9wuvPbqylIEOPR%2FTvTwtDWs61Rl5j7wf7vessW%2FdmO1AjRjtzvDZTxuvBQe6b8viPbDDZ6cDJBjqkAQXcxJZoTBcW8EsRAMhHoUWJcD6ZXX1ghnvJOv2ognvRRBJ7ihLz1oI5ik5uzoSrqEKl8YMhg6By6YQEeVLpFCHuY5ec%2FDthwd1ICJ6TGgJcf0HbGYmBjvyJkiWEI%2Fon2LMZksY3EK%2BvDbLS5h758XLMZ2kW9c5VSnd7bRt7E2ZIH1i7t%2BN1JSQbV7bSmk2%2BBvx0Nd3z5HOgc3w5URtXtQAItZmS&X-Amz-Signature=60a70c48a35024aba4c2c63df3b2b6841944ea3f197347d6b4fe1c18ea647995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDHAD5WT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T132838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQC2KEmnadd7rPnnfPLmA8oSbDwpZWmqjPv2VfWYktIlAQIhANSgXVoiELbB6VqYfRTiaCvmct8pDMt487%2BKe6vOPsfdKv8DCC4QABoMNjM3NDIzMTgzODA1Igz1zh8RBnyre%2BsX4BUq3AMO0KhzTZha9rv%2FiAj9Buk0Cqj0xjVVN%2FRa4xDq5UME40VwwGn2NTEDKwAm0Yl%2FKyURDtouvXBEsQdJeeJYP1NpoX2Rn858G1pJ2duGQXEbyekGZ2oxFgUyVfHFPgtWzRXii%2Fy6keW%2BZnBsJQCTJfKijGx9g8UR1N1QsylYj3r5qZueUR2XvQfhc3XI7ybf6jZ3is5d2T7W5pFpGML4W%2BKoctrc1%2Bfk%2B6cg%2FGxAqctzUSNLF6GC5EXTaVy0kxtdra1SfMTYKjDda%2BlnRmS5uv0LyoPScbD4EfCQn9aN0m9nhP5Vts2rUyuzQe48lB%2FWOol9yXgiyTrgQXaA3tbxUqy%2FOsvq4NkmJpO7k34H6KzOngo2xqpVm1BnsixEzgcPpWsBntMDzGUyJqCodWQQrc07zhLTmk2CyTm6goQmnQDxMZ1EHbZiQpvA31V58Im3biJDXot03YzvgwkhefyOstI4InxhZMvKexFm29iLbMsnOg5HokVSiRFCOfWk2Lod6hoLYMVrCioo91oEej%2BOndgtTCSMNHyWQYOuGFtLFBpXwqSVhuluJxIb2dY9wuvPbqylIEOPR%2FTvTwtDWs61Rl5j7wf7vessW%2FdmO1AjRjtzvDZTxuvBQe6b8viPbDDZ6cDJBjqkAQXcxJZoTBcW8EsRAMhHoUWJcD6ZXX1ghnvJOv2ognvRRBJ7ihLz1oI5ik5uzoSrqEKl8YMhg6By6YQEeVLpFCHuY5ec%2FDthwd1ICJ6TGgJcf0HbGYmBjvyJkiWEI%2Fon2LMZksY3EK%2BvDbLS5h758XLMZ2kW9c5VSnd7bRt7E2ZIH1i7t%2BN1JSQbV7bSmk2%2BBvx0Nd3z5HOgc3w5URtXtQAItZmS&X-Amz-Signature=7113cee07380434cb4bd574038f1026c19b0edb0ecd4e11a6cc06b1e1aa8fcb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

