---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JSFVKQ6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDedGzfndGIhJuAhJLXbkCYktpKfqiyfi95bZVIXnwQoQIhAOwj0Gjo%2Fv1D7O4RaYG6GMXpv3gV88%2FTz5lk4Tj2lzY%2BKv8DCD8QABoMNjM3NDIzMTgzODA1Igxke34cpILHJOkBQ48q3APQ5aRtfDMvp59sNnoYCKUlpfVf8dtYfNMGduvGDd88MwdohybKAU%2FLBSbZ%2F4kzyj5iysvuj2E1xBS1I6fkpv2uHUK7zQLczt1qfEUQUdkkKUTuTkLMTQuISj1qU1GtZHIHl65W3MXfgMvR2X45ImRae1pI4iqnNwCYK0R%2FEm%2Bpvi0mthZh3rOOcyOFH9fawsuS%2B%2FIdg4b64NyrLU0DuQ%2FyqsWvBKI6N2sDroK81P7Q3BDL43C2X8t4tMR6vgIWNKuwtdwhz8uCw6oHCaHWWlbEmWGyci8DVQaDxh32i9b242F5mN4pOunOL1T8ji9Pv0Jeo454Wp5mApvpr0WbcxYORQsLerUFoyV5jJkgAmyt483HSZQD0EAmPvUaEyDI1abnn7qqOS3ccqc38vduEcb3aEKe1RL%2BWFZKAZdsUW07Q7BdV6v0qPQBa5Y1JIAeYhyK6CDghSSgArX3PGH8aqNIj0g84lFNXRHElAcp8dU6wVKYCPXuV6LEsrx%2F0yf2MshctAB4%2FSKZFuPagVahtlirYIE0dxqcVU5r5WXPAHMCCZxvboxxihouJvkH6776YuRJkC5z02ZZ8wwiPn2cKOWivuNYMFzQIxJ1%2BX1eD9TYeBQ7Z0lKKUhqk6L6kTCWy8TJBjqkAfGAs0Sk%2FGGb4eyY41veGxmE6S0iPEXn2G%2FvZZEfdEsFjJyH2MJIpeq8SVlFWMyheuNOKo67S1HUqrQHw3UeKeMom6qUj62FzaqbP6CjUkTHpFD76VPgLbKnO5EPGccRrf6HPwlU2BXcM6uJ%2FFzIWxEv3rdWt7%2Bg%2FbV%2BQazAvLUMO7dt1irNxtajtFLjHHGzX7KbqBwqRHKZCVrrwfS6GDm5Fn3F&X-Amz-Signature=d2e1792b66dff9bcfc971f991475b70e4a74c312a8b237597dd9b4d7cc390bea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JSFVKQ6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDedGzfndGIhJuAhJLXbkCYktpKfqiyfi95bZVIXnwQoQIhAOwj0Gjo%2Fv1D7O4RaYG6GMXpv3gV88%2FTz5lk4Tj2lzY%2BKv8DCD8QABoMNjM3NDIzMTgzODA1Igxke34cpILHJOkBQ48q3APQ5aRtfDMvp59sNnoYCKUlpfVf8dtYfNMGduvGDd88MwdohybKAU%2FLBSbZ%2F4kzyj5iysvuj2E1xBS1I6fkpv2uHUK7zQLczt1qfEUQUdkkKUTuTkLMTQuISj1qU1GtZHIHl65W3MXfgMvR2X45ImRae1pI4iqnNwCYK0R%2FEm%2Bpvi0mthZh3rOOcyOFH9fawsuS%2B%2FIdg4b64NyrLU0DuQ%2FyqsWvBKI6N2sDroK81P7Q3BDL43C2X8t4tMR6vgIWNKuwtdwhz8uCw6oHCaHWWlbEmWGyci8DVQaDxh32i9b242F5mN4pOunOL1T8ji9Pv0Jeo454Wp5mApvpr0WbcxYORQsLerUFoyV5jJkgAmyt483HSZQD0EAmPvUaEyDI1abnn7qqOS3ccqc38vduEcb3aEKe1RL%2BWFZKAZdsUW07Q7BdV6v0qPQBa5Y1JIAeYhyK6CDghSSgArX3PGH8aqNIj0g84lFNXRHElAcp8dU6wVKYCPXuV6LEsrx%2F0yf2MshctAB4%2FSKZFuPagVahtlirYIE0dxqcVU5r5WXPAHMCCZxvboxxihouJvkH6776YuRJkC5z02ZZ8wwiPn2cKOWivuNYMFzQIxJ1%2BX1eD9TYeBQ7Z0lKKUhqk6L6kTCWy8TJBjqkAfGAs0Sk%2FGGb4eyY41veGxmE6S0iPEXn2G%2FvZZEfdEsFjJyH2MJIpeq8SVlFWMyheuNOKo67S1HUqrQHw3UeKeMom6qUj62FzaqbP6CjUkTHpFD76VPgLbKnO5EPGccRrf6HPwlU2BXcM6uJ%2FFzIWxEv3rdWt7%2Bg%2FbV%2BQazAvLUMO7dt1irNxtajtFLjHHGzX7KbqBwqRHKZCVrrwfS6GDm5Fn3F&X-Amz-Signature=654aa1b6a61c15606bca689bad4a22b445930940e1f142fdc3a6b2aa52b5da7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

