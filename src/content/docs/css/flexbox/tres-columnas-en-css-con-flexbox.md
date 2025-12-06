---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7TFGDJE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T072733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpo487eBpPBazrW0IZSC5Y9UflX2urAamT1AMx8stlmgIhAPSvtCPM0scfh8S90cfsfok76BMxwI4SI7kFyh826FkjKv8DCHAQABoMNjM3NDIzMTgzODA1IgyoK4%2B7inlmCJMuqn4q3AMtEj1KYXwo0hiEKwVUibwG7bfAWO9M4QoGLuZ10jedjNKmeprHtMMdRziFRSBbrBzBwEqG7Kb9sOz0A4KcjcQbBvEBVrOqT%2F1TyPZjZD76oOC5jbfYPpKpZD0OwqQsZfGhptmazO6AqZb86G5yHnSSMp5I6mChR48VlhyG0jFRSIzijUiiB4cyBZZR54zFBs83btm5YwnHn%2BLaBJFaNzTgUc7Phgb7n3FIwVLlFRI6d76O6DuNIBKR%2Bznb7mmndUlNx8JX6dkACcbgh2790YKbo%2Fo4G7mTTAR9myIlHUghMdZ3R442kKjDvTcom0hmbUlOmNl84Pa3%2FxQwwDBjuAMkmaQHpTb1L7ImK2IaBjt6DbD8OzPNGEadg68f5Pgy8zRWPQwSGvhetL4VO37EYfnYl%2BafOW%2BT%2Fulx8UN8Po%2BOny3yYumxG0sUpIlaoJxyBkUFD5CiyKqxcwhW0Qm11%2F3g7O7%2Fx6oxvlFuc8eVMm4oPdKepEjXIGkuuF%2B6F4bbywSd1FFXwD3QvSnh2azUcUFcbRjGq07DoWsRI1rt1xuC8YDy5y1eSsKG%2BYM91zEbQIxJk6dObrNrPM8tFLhiOoma69V7Tx6pm9t53mh3FkSDsiIOHO%2B4n7LxF3PI%2BzDjns%2FJBjqkAbdggGRijyFLbkS%2FjhxM3P3T24rtKsO6UVPYw1uHN556zIZ1%2B1wM%2F6%2Fpuiq5CdfPbSk9fl7RJmrvr3dyfRcylCIGCdWBWtugtC9oYLW0dgXvdLKNQT6IM6Una8KCJjqKk%2FrTu%2B%2BT%2Fjf8u9DBtgvTxDJi44ZDhnuPus0lysZD3f1j8YpUGNzB3LDa5BUUq2Sp6Cs%2FbZmjP%2B9hJ7FTj3e8TefhU8jI&X-Amz-Signature=8f8ddc71913b4ec3ab83c7f4898d8b69f7906ecca24ee0958b940662ae925e69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7TFGDJE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T072733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpo487eBpPBazrW0IZSC5Y9UflX2urAamT1AMx8stlmgIhAPSvtCPM0scfh8S90cfsfok76BMxwI4SI7kFyh826FkjKv8DCHAQABoMNjM3NDIzMTgzODA1IgyoK4%2B7inlmCJMuqn4q3AMtEj1KYXwo0hiEKwVUibwG7bfAWO9M4QoGLuZ10jedjNKmeprHtMMdRziFRSBbrBzBwEqG7Kb9sOz0A4KcjcQbBvEBVrOqT%2F1TyPZjZD76oOC5jbfYPpKpZD0OwqQsZfGhptmazO6AqZb86G5yHnSSMp5I6mChR48VlhyG0jFRSIzijUiiB4cyBZZR54zFBs83btm5YwnHn%2BLaBJFaNzTgUc7Phgb7n3FIwVLlFRI6d76O6DuNIBKR%2Bznb7mmndUlNx8JX6dkACcbgh2790YKbo%2Fo4G7mTTAR9myIlHUghMdZ3R442kKjDvTcom0hmbUlOmNl84Pa3%2FxQwwDBjuAMkmaQHpTb1L7ImK2IaBjt6DbD8OzPNGEadg68f5Pgy8zRWPQwSGvhetL4VO37EYfnYl%2BafOW%2BT%2Fulx8UN8Po%2BOny3yYumxG0sUpIlaoJxyBkUFD5CiyKqxcwhW0Qm11%2F3g7O7%2Fx6oxvlFuc8eVMm4oPdKepEjXIGkuuF%2B6F4bbywSd1FFXwD3QvSnh2azUcUFcbRjGq07DoWsRI1rt1xuC8YDy5y1eSsKG%2BYM91zEbQIxJk6dObrNrPM8tFLhiOoma69V7Tx6pm9t53mh3FkSDsiIOHO%2B4n7LxF3PI%2BzDjns%2FJBjqkAbdggGRijyFLbkS%2FjhxM3P3T24rtKsO6UVPYw1uHN556zIZ1%2B1wM%2F6%2Fpuiq5CdfPbSk9fl7RJmrvr3dyfRcylCIGCdWBWtugtC9oYLW0dgXvdLKNQT6IM6Una8KCJjqKk%2FrTu%2B%2BT%2Fjf8u9DBtgvTxDJi44ZDhnuPus0lysZD3f1j8YpUGNzB3LDa5BUUq2Sp6Cs%2FbZmjP%2B9hJ7FTj3e8TefhU8jI&X-Amz-Signature=036235ff2df3a5f65acbda183a662500b79847ca5f209b93dfc0d2ecb1bc5e29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

