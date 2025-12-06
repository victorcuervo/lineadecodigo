---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RMWXDRS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T205457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFddWTtqQeuyxC0nOgnaZdCPPreoIN81Z6e1LjSJuIABAiBnfGQOmYeJ5UpAH%2F%2FtC5ylmw3aS49Z8R5w2gT689r1tCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMFWQKIjlCXT3zkiW9KtwD%2BGpVqSgZjcBeUnhm%2FFW7PSlTAzSW0%2FcgJBv8lWHAQtEPPgHDC47o5ImLQeFI06YQ8owowZd6RrOOnU3dXaUZ96mutkWfcHPSHxLXzaiqk0o3PK0rSfQHQuckMhbZhZCB%2FxeZKxPY1tqtN3DeA%2BQ8JcgMIF8T92WjpHc%2BCwIwnj2xhkVFG%2FC5sPWvLlI1JjN8TiO567vSu4dbKoxsGhj296IKrx043OuPq%2BBdJYcmJi9T4kxck%2FI%2FO1ncl2zN45pvxAZ8L54oHQiesF4xI5Z6TGcvL%2F5jIiCAFDd7Z7zCJGyOWBkigefeCy4oJC3PVoy6ikqhU2oeLpL7dhH8s4MYCX4ppBKXR5FPj%2Byyvw%2FgpyXWw3E7fMT28hoTEZLwfC3%2Fmjw%2Fe49aGOL0573q58fOM1AVpRGLbWQlocePZiudeqjiO7rlKZ289fjQgp19IKVcZc9evdDoL3XDZb5KmT14vVmeISgLOmDOLWILl2jth2baQlK4jfQeaOblgY8Is6oxkc%2BSec1Ah7iRvWXNcfZqccDz3017jJDUhUr9wjosAp9Y1NQEalLZ7Fp9tN12tGL%2Bug3Wz2iEOrjilR0ZCq1%2F7rd835vwyA7MyByK9ZermACikMoM7toq3pJAoxkwisrRyQY6pgHLwJSc6Z0gJoVYjIbI6JWb3JNVAdk42ipXzZ9wMcUwAuIjgeDsqx%2F36GSuklWO4UDlhI%2FUTLIxT%2Bq3iwGr0KjhbXwuFXA9iS3UWLF9Q0sipzS2EpIEfWaD5HwMYLXJrBngbMqPqUbiL7XOHxNJz%2BzUt%2F%2BZokDg6OLgCDRcvMkMYdyao%2FxrF8BJsGKaXcvIWEub58GRgphfuxh%2BWx5h8v84meRHPPdm&X-Amz-Signature=7c8efaacc3767b8483465a39a7bfd3dbc4c8a2ab789d445b34125b5ca1c09d01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RMWXDRS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T205457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFddWTtqQeuyxC0nOgnaZdCPPreoIN81Z6e1LjSJuIABAiBnfGQOmYeJ5UpAH%2F%2FtC5ylmw3aS49Z8R5w2gT689r1tCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMFWQKIjlCXT3zkiW9KtwD%2BGpVqSgZjcBeUnhm%2FFW7PSlTAzSW0%2FcgJBv8lWHAQtEPPgHDC47o5ImLQeFI06YQ8owowZd6RrOOnU3dXaUZ96mutkWfcHPSHxLXzaiqk0o3PK0rSfQHQuckMhbZhZCB%2FxeZKxPY1tqtN3DeA%2BQ8JcgMIF8T92WjpHc%2BCwIwnj2xhkVFG%2FC5sPWvLlI1JjN8TiO567vSu4dbKoxsGhj296IKrx043OuPq%2BBdJYcmJi9T4kxck%2FI%2FO1ncl2zN45pvxAZ8L54oHQiesF4xI5Z6TGcvL%2F5jIiCAFDd7Z7zCJGyOWBkigefeCy4oJC3PVoy6ikqhU2oeLpL7dhH8s4MYCX4ppBKXR5FPj%2Byyvw%2FgpyXWw3E7fMT28hoTEZLwfC3%2Fmjw%2Fe49aGOL0573q58fOM1AVpRGLbWQlocePZiudeqjiO7rlKZ289fjQgp19IKVcZc9evdDoL3XDZb5KmT14vVmeISgLOmDOLWILl2jth2baQlK4jfQeaOblgY8Is6oxkc%2BSec1Ah7iRvWXNcfZqccDz3017jJDUhUr9wjosAp9Y1NQEalLZ7Fp9tN12tGL%2Bug3Wz2iEOrjilR0ZCq1%2F7rd835vwyA7MyByK9ZermACikMoM7toq3pJAoxkwisrRyQY6pgHLwJSc6Z0gJoVYjIbI6JWb3JNVAdk42ipXzZ9wMcUwAuIjgeDsqx%2F36GSuklWO4UDlhI%2FUTLIxT%2Bq3iwGr0KjhbXwuFXA9iS3UWLF9Q0sipzS2EpIEfWaD5HwMYLXJrBngbMqPqUbiL7XOHxNJz%2BzUt%2F%2BZokDg6OLgCDRcvMkMYdyao%2FxrF8BJsGKaXcvIWEub58GRgphfuxh%2BWx5h8v84meRHPPdm&X-Amz-Signature=4c790f28316946aeae5339ecd70a4a8a21d2bac0addde509e48c4360a8b1cd51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

