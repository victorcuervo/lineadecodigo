---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REU7E2JZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T223552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0s2G5B40sKbfqdDaUd4xHkGrWTZw2iq2ytAuuujWiKAiARbnJAnsn6zwJmeMwbMSjWV%2FHCSWw2SsUMJ1BB6IGA9Sr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMvzh4rDzVuji0SndFKtwDJeiCz0z1Qqd7U8%2FCgNQ4qjaHn%2FQYTz7xr2Tznyek3UkuNfL2bWYZmUDVli1b%2F9bJyEi6y2Ycc9890pPv2McD%2FBDL8rc7TqujbhcJBCmqOo2aj5HczHGH2o8A2b1LBTzVzWmoYP8aBNY6wraEHvP1Jcso6MRyXKAR8TJuST%2FIuU1kbhBSfkJq%2FxNDzmmTQ923b7LcpnPiz2Kk%2FFS7oatQVI%2F3xrFoWBvwyvyqw6KfvUa1NwQvXfjdiZ6tEGVP3uAII8JWXWTcH7f2gdpbvfsphyx7LoyIyndvClnJaif9kYpU6pme9JfAplQke7QjZ1z5HAEIpmsHHE6SpJxhl83Bf3RJqIWNIGNX5Y2OjlThMy%2FLOIODkp4SmgQEwSow6p9lDPgkaqPzd09K3KkG0iCraWP5j96fcQl3o8myp4vEYp64tcHnG3Ri01bXzRwNzdpWeU4gmiC%2BepUntWk7599007ngdWUuuQhT0xQLypq2U4mU%2Fykj%2Fp6cA72NqK%2BxNQ8sOr1HBZVxWaw%2FjLuP%2BnB5IoNWTf70Ld76doaWEWwHIfvQkJRQpZpnbgaLCXY7iVqFqH4ZJhGg%2BRcRmuakNtJJ%2FNbr%2B1FniGzO0%2BV1AoP7Uqzm9ZelPx0hWp9v8pcwqtTSyQY6pgHCXI3o7%2FeLZBTaXgc7Ra2IUMov1%2B0b9zG3ZgYXvAFo3KjdcxsWOo2CslGEDHGXiIg9DitfeOI1SvepG3FyQThjb6T3zid2Jd4McIA38vbuEJUyS3tAzdhxHAKibJ1zxK4DwewyjIgr72mmjl0GEAweqnqfK3A75hMfgy66Rb4G5zHIA0C7LpTQgBYylRNeOUQX4rSfKoTChsdSk3Pyn71XV9g2HSdL&X-Amz-Signature=3704bc332d80fa8412abd191e401bcef6bb6e2081b4485109f6606dd0bee0b37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REU7E2JZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T223552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0s2G5B40sKbfqdDaUd4xHkGrWTZw2iq2ytAuuujWiKAiARbnJAnsn6zwJmeMwbMSjWV%2FHCSWw2SsUMJ1BB6IGA9Sr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMvzh4rDzVuji0SndFKtwDJeiCz0z1Qqd7U8%2FCgNQ4qjaHn%2FQYTz7xr2Tznyek3UkuNfL2bWYZmUDVli1b%2F9bJyEi6y2Ycc9890pPv2McD%2FBDL8rc7TqujbhcJBCmqOo2aj5HczHGH2o8A2b1LBTzVzWmoYP8aBNY6wraEHvP1Jcso6MRyXKAR8TJuST%2FIuU1kbhBSfkJq%2FxNDzmmTQ923b7LcpnPiz2Kk%2FFS7oatQVI%2F3xrFoWBvwyvyqw6KfvUa1NwQvXfjdiZ6tEGVP3uAII8JWXWTcH7f2gdpbvfsphyx7LoyIyndvClnJaif9kYpU6pme9JfAplQke7QjZ1z5HAEIpmsHHE6SpJxhl83Bf3RJqIWNIGNX5Y2OjlThMy%2FLOIODkp4SmgQEwSow6p9lDPgkaqPzd09K3KkG0iCraWP5j96fcQl3o8myp4vEYp64tcHnG3Ri01bXzRwNzdpWeU4gmiC%2BepUntWk7599007ngdWUuuQhT0xQLypq2U4mU%2Fykj%2Fp6cA72NqK%2BxNQ8sOr1HBZVxWaw%2FjLuP%2BnB5IoNWTf70Ld76doaWEWwHIfvQkJRQpZpnbgaLCXY7iVqFqH4ZJhGg%2BRcRmuakNtJJ%2FNbr%2B1FniGzO0%2BV1AoP7Uqzm9ZelPx0hWp9v8pcwqtTSyQY6pgHCXI3o7%2FeLZBTaXgc7Ra2IUMov1%2B0b9zG3ZgYXvAFo3KjdcxsWOo2CslGEDHGXiIg9DitfeOI1SvepG3FyQThjb6T3zid2Jd4McIA38vbuEJUyS3tAzdhxHAKibJ1zxK4DwewyjIgr72mmjl0GEAweqnqfK3A75hMfgy66Rb4G5zHIA0C7LpTQgBYylRNeOUQX4rSfKoTChsdSk3Pyn71XV9g2HSdL&X-Amz-Signature=650bb240ba287ed5e3b3269e0b4bb92ad6a5c102e9fa7323e9bcca5b78ed62aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

