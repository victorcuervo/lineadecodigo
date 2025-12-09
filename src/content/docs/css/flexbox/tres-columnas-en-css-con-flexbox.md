---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DTQSMJA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T034634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWMNvUzQoBAmJNIEt%2F5rdZ4weLCdOiYot7Gu0jeZ4pTQIhAMY3%2B%2F%2FOGB1e5QddcTJA7UnV80315xK8yGeUWS0vHFnaKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyls107knmZAKdFSnAq3ANU6Jr0iVHEjXXqh6eDP1a1IJStqp1L%2BsVwqqLWrFxJi5gt0KSnNPOCpWyCH2%2FWHqvsKKo3%2BStRfx4XrjlQdhIHkArHAF41gkDWcGea%2BCg2BvwQpupmDjXvDQyQEtZIJCX7W8eD%2FVuxVkbgZhGH8VIRmYkVolc2zJ2%2BOtxWe1Qlq04G%2FDBr5YlsO9nO7g5IdOR2CsFymERAVShj0GQp6Xc5C2MinYNnBdZvx1WTuZ5QlqXhQByQUW9rskrjVebVAKGx18EYOOzpYWgQgbYpVp%2F16Thg8xCcQo%2BrRlCSvN2IVXWfoZK99BvXyFsWqoZdO89z3AV8Y0CwWL1KQ%2FiIoV%2BiacuJuc2pzK7WUcSoA2xXRdk8rmuV03rssSNCK5DcUF39od29xdlYBQWX%2FVhqLPFcHiZpKgZd7Hs0cgIsrvN7RM7i1FkyzDHd51KxMET9DBCHVLR6KpQVS2rb2akOYkYQP2KhWeF8s2irk1UOAlDOfPhZDgjoRccvkRt5IohDOiRhaa2MRxbNXHrwS5KWAprsrtwr5OUJfjP%2BYaFoIgVmD4F50c%2FZDE3KeSuFE%2B8o1IhQz8Rq4QZED6KpS3j%2F64PLp4f%2FnnClgdUZAAq5rIxBcQAOIw3Old9mi1cDxTDgrd7JBjqkAcNQFCFJ796jlsFDkvWtXoJO8wFewbq4XDD77%2BD8Q8vlkQPvZ9CT1Wb2JaTXhxZ6%2Bo%2FMfd3gezND1iVVh8hqwicXNt1NUZ5CAoS7ykackinWMAyrU8zvbU5ARdRJGTHMIVG%2BChuHpaEohWBCntvbPzX1J2tA7PoYgyeEEHn8jNpCiuNcl9wQfANCv7Gzbh%2Fzi%2BE2ArqFDyZio8sJfEmZSLJ6pxbL&X-Amz-Signature=692bdfd4efb10adb8fe3643ce0f47c460bb839c1822f0d9c3b85c43efa767b4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DTQSMJA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T034634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWMNvUzQoBAmJNIEt%2F5rdZ4weLCdOiYot7Gu0jeZ4pTQIhAMY3%2B%2F%2FOGB1e5QddcTJA7UnV80315xK8yGeUWS0vHFnaKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyls107knmZAKdFSnAq3ANU6Jr0iVHEjXXqh6eDP1a1IJStqp1L%2BsVwqqLWrFxJi5gt0KSnNPOCpWyCH2%2FWHqvsKKo3%2BStRfx4XrjlQdhIHkArHAF41gkDWcGea%2BCg2BvwQpupmDjXvDQyQEtZIJCX7W8eD%2FVuxVkbgZhGH8VIRmYkVolc2zJ2%2BOtxWe1Qlq04G%2FDBr5YlsO9nO7g5IdOR2CsFymERAVShj0GQp6Xc5C2MinYNnBdZvx1WTuZ5QlqXhQByQUW9rskrjVebVAKGx18EYOOzpYWgQgbYpVp%2F16Thg8xCcQo%2BrRlCSvN2IVXWfoZK99BvXyFsWqoZdO89z3AV8Y0CwWL1KQ%2FiIoV%2BiacuJuc2pzK7WUcSoA2xXRdk8rmuV03rssSNCK5DcUF39od29xdlYBQWX%2FVhqLPFcHiZpKgZd7Hs0cgIsrvN7RM7i1FkyzDHd51KxMET9DBCHVLR6KpQVS2rb2akOYkYQP2KhWeF8s2irk1UOAlDOfPhZDgjoRccvkRt5IohDOiRhaa2MRxbNXHrwS5KWAprsrtwr5OUJfjP%2BYaFoIgVmD4F50c%2FZDE3KeSuFE%2B8o1IhQz8Rq4QZED6KpS3j%2F64PLp4f%2FnnClgdUZAAq5rIxBcQAOIw3Old9mi1cDxTDgrd7JBjqkAcNQFCFJ796jlsFDkvWtXoJO8wFewbq4XDD77%2BD8Q8vlkQPvZ9CT1Wb2JaTXhxZ6%2Bo%2FMfd3gezND1iVVh8hqwicXNt1NUZ5CAoS7ykackinWMAyrU8zvbU5ARdRJGTHMIVG%2BChuHpaEohWBCntvbPzX1J2tA7PoYgyeEEHn8jNpCiuNcl9wQfANCv7Gzbh%2Fzi%2BE2ArqFDyZio8sJfEmZSLJ6pxbL&X-Amz-Signature=ce2b30bb6b0e20352833d8d27528107556cd07d2ff98e1f1ae46844856796fd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

