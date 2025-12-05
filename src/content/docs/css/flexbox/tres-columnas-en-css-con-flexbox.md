---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUIZZ27W%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T144453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvsIhVanHrY3yyQTCYhOfck1YxA9ZdutiQu%2Bj%2FZhmQPAiAqwt6mON7WSAWxfQdShXcM2p5%2BaFOPaAiZJ4am3O%2Fauyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM47M8oBZEEHa0igKXKtwDLRcqzqU7UgbG7LLey7ARTqCR0rN2Mm3pZjAohlmSWmM6R11zgtVwCOK2MIIdH%2FQ9eFw8htlrSwOws9bd1k%2BOUme1%2BW2EBEdwdkxXnsHufOGLPgx8iSBpMhsYPDgTYjRbW7gk08CF3Ve5enCgnWh2ancBEdHN2eKPTdU5tm3WeNb7HvBU1%2F0X2ts3BVIS1968Pt98%2BQtoXwp31pJcZnIZjYbMHgafW7k4wYfQvmWd3noN5jv1ShXl7VLxYiIaI3IBd7kyJUrTnUPUENWwmIpdMMJfVshRz7%2Bg%2BIWtNnw9qD9P%2Bd42%2FNJsmRQyiiufhnBKqmO%2FE43W7uQg9h6IhN8Vd8tbt5lTLQMIVO%2BUc6OUmRhX%2Bj7xz%2BOR2f8BdXc7KoAIdKk57ONTJbMQmtBWR2XTly0%2BfFYnSbbQtyyJGRdEV5x8wNerY9PUYFni47DEt1OePE1SntNtf08%2F%2FyGh8kvfv2cp3uWcJHWLD756gc7jYxeFo7cYzHun%2FdyKZbfsYJKc73hPEEZOvXHzKhiYmVbRWSQ0bmPjNeSQsq2xT2HuW4WyLsCnuwowTbG%2FAl8JIBAOr8EkGnbjJPjJoymH3BKgbCTbgr%2Fm3t59b%2F7hylbEnNBD0BMdmnM7skByDKkwi8rLyQY6pgHDmE8aujLfzG%2ByNacAxixwHyEmLb8IScvicm7SGwuzGlt3Us42EOGQJzhDotPoXUZ%2Bnl%2FsPPa5wat8UgKG9cP2SyIgHRbBgyQxdxdhObJKOwf4p7M9uVMPB6iSUjux01yX4QJ4v7gJ8vMFSZD5Ud52ZxICYXlBzmAuMrBksJjCFbgAsEY%2BpeBysMy6rSgjUanyQiQSpsI97H%2Fy57ZfeLtbFtLyBLiG&X-Amz-Signature=2627b33cd572eb1656e8d8cc18818891c0bd3a95daf3f390f84bb66354e3f522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUIZZ27W%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T144453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvsIhVanHrY3yyQTCYhOfck1YxA9ZdutiQu%2Bj%2FZhmQPAiAqwt6mON7WSAWxfQdShXcM2p5%2BaFOPaAiZJ4am3O%2Fauyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM47M8oBZEEHa0igKXKtwDLRcqzqU7UgbG7LLey7ARTqCR0rN2Mm3pZjAohlmSWmM6R11zgtVwCOK2MIIdH%2FQ9eFw8htlrSwOws9bd1k%2BOUme1%2BW2EBEdwdkxXnsHufOGLPgx8iSBpMhsYPDgTYjRbW7gk08CF3Ve5enCgnWh2ancBEdHN2eKPTdU5tm3WeNb7HvBU1%2F0X2ts3BVIS1968Pt98%2BQtoXwp31pJcZnIZjYbMHgafW7k4wYfQvmWd3noN5jv1ShXl7VLxYiIaI3IBd7kyJUrTnUPUENWwmIpdMMJfVshRz7%2Bg%2BIWtNnw9qD9P%2Bd42%2FNJsmRQyiiufhnBKqmO%2FE43W7uQg9h6IhN8Vd8tbt5lTLQMIVO%2BUc6OUmRhX%2Bj7xz%2BOR2f8BdXc7KoAIdKk57ONTJbMQmtBWR2XTly0%2BfFYnSbbQtyyJGRdEV5x8wNerY9PUYFni47DEt1OePE1SntNtf08%2F%2FyGh8kvfv2cp3uWcJHWLD756gc7jYxeFo7cYzHun%2FdyKZbfsYJKc73hPEEZOvXHzKhiYmVbRWSQ0bmPjNeSQsq2xT2HuW4WyLsCnuwowTbG%2FAl8JIBAOr8EkGnbjJPjJoymH3BKgbCTbgr%2Fm3t59b%2F7hylbEnNBD0BMdmnM7skByDKkwi8rLyQY6pgHDmE8aujLfzG%2ByNacAxixwHyEmLb8IScvicm7SGwuzGlt3Us42EOGQJzhDotPoXUZ%2Bnl%2FsPPa5wat8UgKG9cP2SyIgHRbBgyQxdxdhObJKOwf4p7M9uVMPB6iSUjux01yX4QJ4v7gJ8vMFSZD5Ud52ZxICYXlBzmAuMrBksJjCFbgAsEY%2BpeBysMy6rSgjUanyQiQSpsI97H%2Fy57ZfeLtbFtLyBLiG&X-Amz-Signature=81e1aed80bd171b2653e5b8e72c2ec97508c333ef8d813ba5a7d7ba2e26598b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

