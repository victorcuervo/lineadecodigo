---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XHJZHI2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T193444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHxOZeHmIQ4gR2aR9z3VzElmQJGIA6oNnS4twn5rh1MoAiEAnbG3YOIk4vEObJXlJ7z3GvqnVZLdx9eYUAWtOxAL%2BlAq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDCf8YjKX2d2iS1rP7ircA%2FKqws9KuztKsVOHAi7HU7rJayE3JGFQ%2BOatkv7oEUdMkCMHhOfvnSoHy0y%2BZPtTQwS%2FVrp8ZYmUuRfl1NBxzzudEwkkm58lqqVTgMs56ozX8asUzt7ysOg5xKx%2BvIWf0nfKZVttoC0%2BR8XSysHw%2BGhiwxZIVv%2BtCyKn7El%2FTYtLl6ZsxFPPMft4Fp33sRMRmZH9Fb4h3pjBqSW9PcWShI3sZJUyGf7Q5NbhnZOlCjBY7Bo9uoQ6hBFXwBdJqvSyLvjELUI4gxezXPx4S2mKk1j3uK8iAz%2BUkslbKvXlWlOItEurIM%2BPHMJbsw%2Buvrbx%2B0bKd%2FSOyrbaaT3Q0QwkceWFzEd1KYgVnBsqn1zSVHt3hftmX6eh4diqIP1SbS4xrRGfdkvyqqWoi%2FAq0vONIkmAH69J9v6YdKdpXYIaJQkToGJPegLy9J13k0HLCgQUOJtNFHn8MAVrDzeOAJQzjoK7sUCn7krxfrcY%2FqvumcG3lmbGnht7Wxv6qYcgl%2FPTEY%2BBRzGq3zs8krsNKiLbkpM48XyYr6XcI4sZCgLlRFbz0KedmxWuQkcc2gKdwGNGlNtYLEIANeOTNNqIJOqYIIAQUy8wqKMmFzFFU6dYDs6Y1LwDvbprF2UjRdraMLvty8kGOqUBonC3wGD3B6KAqGMe%2BxRPcGbL65gvYoiMMl%2BVpJ0J4mndpN3VOgdtnScgJdKZ2ezMDNWga7JG%2BTVE6LSAl7Xoyye%2BvuFh4IGh%2FYhZjxPw929cP5SxJ2Zp8rCgY%2FI9GWV7%2BqwfeDSsX%2BVuzIAqwiu9GhXD6QFtsNTpgvYcGWoJmVQf2Fa6UylzrJtPMUBHgFDjdkpPV1zR7glOEz0XUzQicQJ5q7EF&X-Amz-Signature=c70770b1f86b315d4fcd772959157bc82a67b5a9f3275b22bd5cc685c6bc7e7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XHJZHI2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T193444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHxOZeHmIQ4gR2aR9z3VzElmQJGIA6oNnS4twn5rh1MoAiEAnbG3YOIk4vEObJXlJ7z3GvqnVZLdx9eYUAWtOxAL%2BlAq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDCf8YjKX2d2iS1rP7ircA%2FKqws9KuztKsVOHAi7HU7rJayE3JGFQ%2BOatkv7oEUdMkCMHhOfvnSoHy0y%2BZPtTQwS%2FVrp8ZYmUuRfl1NBxzzudEwkkm58lqqVTgMs56ozX8asUzt7ysOg5xKx%2BvIWf0nfKZVttoC0%2BR8XSysHw%2BGhiwxZIVv%2BtCyKn7El%2FTYtLl6ZsxFPPMft4Fp33sRMRmZH9Fb4h3pjBqSW9PcWShI3sZJUyGf7Q5NbhnZOlCjBY7Bo9uoQ6hBFXwBdJqvSyLvjELUI4gxezXPx4S2mKk1j3uK8iAz%2BUkslbKvXlWlOItEurIM%2BPHMJbsw%2Buvrbx%2B0bKd%2FSOyrbaaT3Q0QwkceWFzEd1KYgVnBsqn1zSVHt3hftmX6eh4diqIP1SbS4xrRGfdkvyqqWoi%2FAq0vONIkmAH69J9v6YdKdpXYIaJQkToGJPegLy9J13k0HLCgQUOJtNFHn8MAVrDzeOAJQzjoK7sUCn7krxfrcY%2FqvumcG3lmbGnht7Wxv6qYcgl%2FPTEY%2BBRzGq3zs8krsNKiLbkpM48XyYr6XcI4sZCgLlRFbz0KedmxWuQkcc2gKdwGNGlNtYLEIANeOTNNqIJOqYIIAQUy8wqKMmFzFFU6dYDs6Y1LwDvbprF2UjRdraMLvty8kGOqUBonC3wGD3B6KAqGMe%2BxRPcGbL65gvYoiMMl%2BVpJ0J4mndpN3VOgdtnScgJdKZ2ezMDNWga7JG%2BTVE6LSAl7Xoyye%2BvuFh4IGh%2FYhZjxPw929cP5SxJ2Zp8rCgY%2FI9GWV7%2BqwfeDSsX%2BVuzIAqwiu9GhXD6QFtsNTpgvYcGWoJmVQf2Fa6UylzrJtPMUBHgFDjdkpPV1zR7glOEz0XUzQicQJ5q7EF&X-Amz-Signature=ae438762ca6d19e5cdaf9b6a83a134234156b5d37cddc96b410acefbb4a5cc74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

