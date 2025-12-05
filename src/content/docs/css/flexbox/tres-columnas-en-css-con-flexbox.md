---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6USXFGC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T215004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI6k8VCSjKwMynZ7lsNOI8dcAeBdzvJoAfEJQVgqSkigIgTYlxIZtJqS1TZJElde5vwZoD1TyvjEYhgh5yczGkI4Eq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAOJah1bbp6uprAKmircA3P%2FQdLgC8cvth8H%2FrJJVuIjwea%2FR0wdLe7xhKLn2hTeBvQqKqNw0jNCU2X4jSCxnhyAQtCJJLocSset7KgbRkS5%2Fyw9xqbOl11fZsW%2Bu0ph%2F0YP%2FJ3MeogStkmgGA9XxPhbJY7I9%2FCFp20QfKSSJYE5W%2BK6t9UjsD6KPVJMys%2FO27%2FAf1dus12mmDUbLoAjteZ3nIuLPru5tG7lwhTgsDY7xVW80i98t0A6RlWfem%2BppnLKaQZfplp2VVaj1gFYFcx0rxCejPKbt2riX1%2Fza2wNqieExhly2yKTolzKRwr8tnSqtetoaKu87QUnspxlpzoAABJQOP7gWBRYFIDq7KOsLyg8MAbbIyk4MJfO5RQgUDC5zHD822NhOSpxm5DucXA3monJWgVfBtd083OXiQ8k2j5QZp9lMiNNQ%2FpsTZeA9rleR1YstHPfTJ2%2B4s9egcBKsCwY7sQFnLSNIn7%2BAnPr0BObQ%2BHCwpryDVEnsCuDtnQGFU7rTy0aipa1yzZbzq9DhP8rQruorI4owV4nXTLLRJTe83KULlnSYD0HQ6plSw8H62jv70TeQuxjWAE%2Fid48xttqbIwm4kLPx%2BceaNAxMZN9C1DpHBhHXYPe1faLPjQrt4zgoLLn1lenMMaTzckGOqUBdCTuXoD2vYa4qgdaN1ZKky1ib1h7T6u5nTJcjIXyRgvPiokbvw6L7T6vl2ufup7M6EsUFWVpyiRbuWsrUOi1XI8RztpFnrdGhp44EPNqjxkPjLBDkLfNDMj8Vkwgeagsu5bKl3IWNCFWPjMIfFj7Ml9kT3BGTu0PwdDEUv%2BxprbTmP24%2FHbN%2B1y9i6tAzm97bYLZF2%2FXM9Mf7%2F92KbCiFdDAcsmI&X-Amz-Signature=9fc72e45bcc4de25511c1079fb568c83eedbc28411fea1aa076aeef6490321d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6USXFGC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T215004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI6k8VCSjKwMynZ7lsNOI8dcAeBdzvJoAfEJQVgqSkigIgTYlxIZtJqS1TZJElde5vwZoD1TyvjEYhgh5yczGkI4Eq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAOJah1bbp6uprAKmircA3P%2FQdLgC8cvth8H%2FrJJVuIjwea%2FR0wdLe7xhKLn2hTeBvQqKqNw0jNCU2X4jSCxnhyAQtCJJLocSset7KgbRkS5%2Fyw9xqbOl11fZsW%2Bu0ph%2F0YP%2FJ3MeogStkmgGA9XxPhbJY7I9%2FCFp20QfKSSJYE5W%2BK6t9UjsD6KPVJMys%2FO27%2FAf1dus12mmDUbLoAjteZ3nIuLPru5tG7lwhTgsDY7xVW80i98t0A6RlWfem%2BppnLKaQZfplp2VVaj1gFYFcx0rxCejPKbt2riX1%2Fza2wNqieExhly2yKTolzKRwr8tnSqtetoaKu87QUnspxlpzoAABJQOP7gWBRYFIDq7KOsLyg8MAbbIyk4MJfO5RQgUDC5zHD822NhOSpxm5DucXA3monJWgVfBtd083OXiQ8k2j5QZp9lMiNNQ%2FpsTZeA9rleR1YstHPfTJ2%2B4s9egcBKsCwY7sQFnLSNIn7%2BAnPr0BObQ%2BHCwpryDVEnsCuDtnQGFU7rTy0aipa1yzZbzq9DhP8rQruorI4owV4nXTLLRJTe83KULlnSYD0HQ6plSw8H62jv70TeQuxjWAE%2Fid48xttqbIwm4kLPx%2BceaNAxMZN9C1DpHBhHXYPe1faLPjQrt4zgoLLn1lenMMaTzckGOqUBdCTuXoD2vYa4qgdaN1ZKky1ib1h7T6u5nTJcjIXyRgvPiokbvw6L7T6vl2ufup7M6EsUFWVpyiRbuWsrUOi1XI8RztpFnrdGhp44EPNqjxkPjLBDkLfNDMj8Vkwgeagsu5bKl3IWNCFWPjMIfFj7Ml9kT3BGTu0PwdDEUv%2BxprbTmP24%2FHbN%2B1y9i6tAzm97bYLZF2%2FXM9Mf7%2F92KbCiFdDAcsmI&X-Amz-Signature=171a45c1394213d869585750d26229ca8e008d0b63e1d210022ab09c82a2de8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

