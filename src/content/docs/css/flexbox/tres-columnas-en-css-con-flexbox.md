---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWC5CHQQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9YHogZKqtTd9c6D6F1Le82KJOW%2BdE%2FbKurbeURSsqoAiAYjFpJ98WMLbE1Bd%2BpDmzDDfYpUS2bpeB0nWdlafVQgCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMKNlYtEyM5a%2BVzpZsKtwDdepJCy5A2ZltOaUpFmmZjgO5OSdMeo1c8jlBkEqkhDxvrU5d8VtZqRSz2VYFWmvoF7rZjjWJ1ddBthL1d25xEECv%2BY7XatAP%2BSv6IUgnViFZjTDmkT5pyZiis11YYl%2FrKf8zPOwUO5eb0oUmzQ%2FDv8FzNQIkA2FL335ktDNdc8aNwZusEorf0mZWzejf2jjwED6BmWyntLeAUj6Y5Cylf%2BLGuiAdmw8kWxnSEAXEeD5xuof%2FS1xTKrcEZ9%2BT4twSA1ehiMf91t7NZBLAKika6061jIh5lvM9%2BnhrtRjO%2BJzYD7CFzqX%2FihnveMZ7j45wFZNsgPGl%2BEz%2BuxZvR%2FVYiTsBMXfO2%2BhfXLdJyNoEqkHGdvF2NsPbR7vRMxRvqAZ8wOqyzTKxfkw%2Fgnn5UoYE%2FU53sDujzAh%2BBxp%2BPrOPSOGgmolhUG7ujJJP7gL8YP%2FIH3Fm%2FrU6Brfeggh6KASjG7AxacEaHckH4wYWeB152xWQt%2B5Es7YiMNNrvNEsUSPAiPKw7IsYrQDPPOoNkAtgD3aBStN6sI5CfbULjyZE1XS1GHbDkIJES%2BMYtAAme%2B4thTyU4nBUT%2FYGG1W11s%2FcsoL4OeCvH8NPbvhdsBMWuLjeZ3bX5CcYY0zuplgw9bzPyQY6pgG56CWPO2P1aW3wWjWqXPh8fuSXiTrLsmCb5R8yQwzE3CeMXI%2BAq1E0e2if9hhmuuF3hniswyiCLsiDGndhdtrN0jnSUmyZd%2BBMK%2BtLfAFu4y2g9jNpIS3XU1B1yFuAD3mrXJO1Q4Tci0rRGl6vZWE4W7zZfvLQXHdvqzyDvbVwdnVmJM9nRyN3Ie6pJaiWDW9ZItP4lm5P2atvVrT%2F%2FWN5Ub9XYIbx&X-Amz-Signature=64b8f91cd0af4dcbfdb1acf3e7218b32167a831fd4430c7f53fd31828a4af286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWC5CHQQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9YHogZKqtTd9c6D6F1Le82KJOW%2BdE%2FbKurbeURSsqoAiAYjFpJ98WMLbE1Bd%2BpDmzDDfYpUS2bpeB0nWdlafVQgCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMKNlYtEyM5a%2BVzpZsKtwDdepJCy5A2ZltOaUpFmmZjgO5OSdMeo1c8jlBkEqkhDxvrU5d8VtZqRSz2VYFWmvoF7rZjjWJ1ddBthL1d25xEECv%2BY7XatAP%2BSv6IUgnViFZjTDmkT5pyZiis11YYl%2FrKf8zPOwUO5eb0oUmzQ%2FDv8FzNQIkA2FL335ktDNdc8aNwZusEorf0mZWzejf2jjwED6BmWyntLeAUj6Y5Cylf%2BLGuiAdmw8kWxnSEAXEeD5xuof%2FS1xTKrcEZ9%2BT4twSA1ehiMf91t7NZBLAKika6061jIh5lvM9%2BnhrtRjO%2BJzYD7CFzqX%2FihnveMZ7j45wFZNsgPGl%2BEz%2BuxZvR%2FVYiTsBMXfO2%2BhfXLdJyNoEqkHGdvF2NsPbR7vRMxRvqAZ8wOqyzTKxfkw%2Fgnn5UoYE%2FU53sDujzAh%2BBxp%2BPrOPSOGgmolhUG7ujJJP7gL8YP%2FIH3Fm%2FrU6Brfeggh6KASjG7AxacEaHckH4wYWeB152xWQt%2B5Es7YiMNNrvNEsUSPAiPKw7IsYrQDPPOoNkAtgD3aBStN6sI5CfbULjyZE1XS1GHbDkIJES%2BMYtAAme%2B4thTyU4nBUT%2FYGG1W11s%2FcsoL4OeCvH8NPbvhdsBMWuLjeZ3bX5CcYY0zuplgw9bzPyQY6pgG56CWPO2P1aW3wWjWqXPh8fuSXiTrLsmCb5R8yQwzE3CeMXI%2BAq1E0e2if9hhmuuF3hniswyiCLsiDGndhdtrN0jnSUmyZd%2BBMK%2BtLfAFu4y2g9jNpIS3XU1B1yFuAD3mrXJO1Q4Tci0rRGl6vZWE4W7zZfvLQXHdvqzyDvbVwdnVmJM9nRyN3Ie6pJaiWDW9ZItP4lm5P2atvVrT%2F%2FWN5Ub9XYIbx&X-Amz-Signature=28bcd3c2dd0cb9dc93a19adafc169d7040ca1d93aa33737be124d68aeb35184f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

