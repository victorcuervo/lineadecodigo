---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYMESUHO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T011653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcpwRQCuCDQ%2F8NVs6lN3MribDkBH6jmzqx%2F1kPlekcrwIhAO6u2eMyD8pvfnSy2hzQvRODFmAw%2Bs3eonXfTp6gJbBUKv8DCE8QABoMNjM3NDIzMTgzODA1IgxoKYp5v34z3oe3BMgq3AN%2FCmAmZq0I%2FBAcHMm45yWRNKp%2BWeUdbNY5y9ciKzcsc%2FhD5gjSpOyJoFb1chPgyd9oF9oUv0lO0pkVkOwwunxsLqV32NrFoYUEuvB4KovRTlH%2BJmnbHVvuOd6DrrctUq4ZP3M9P80SyriTV4nvlN5YGc4AgLEf4iOxsR9wxE7CwVnboTtHl2dLcepykw1txHe6mS%2BBwCMGEg1jb%2BnJN82jM%2FTPYmSKhjJbH093w88PHMyhUkkLWvj5hYgE2BltKpCD7e2wp7y%2BPTxtGHGAnsNb340Tko8ZfPPYqUtYQL5ZC4Sn6QZdMMz0DbiaT%2BLmSKzT7pyW4I7VpG69u%2BbDFeu8HS4XIKzEzlayTCPtxGfO4ctd1Mr%2FI1UPdoUFEOQU0hmp0w4bO8H8XqdGwSua398qHF%2FbCFQc7hhxiX6Ma2d0wNrreZ3MUED1nVzbQ6op7dPwHAwfG0EyBBQMGqSbTbmICMW%2FfaTF9%2BOP3FnQZjvqtn7ut3OCYpCm5WRwxcVbw88ggQ%2B6wu5pOMCr9%2B6ItGd7rJa3Lx5aR4BzFqOPZJMxwJE%2Bwp5Iwk%2FerBY7ihjNNQLJ6qjDNv7AhrTMvtkjdgpJaU5FYNNry2MiidAWbTscldYkRfWl8b3yQbEjTzDKjMjJBjqkAfk%2BvSzRv2e5ScwJmdWpayTVLNUA6DGtE3OFKepCsawN5OHIATRwQh7xv9XbvH5aUxhAvY5snE2Zl0j7%2BK6qnl%2BApU7pJjGHWKi6OJnQF8k6uGgd50EgQYKfI%2FPjYXdmbEZG8Rek248HulrGN%2FNcGsAbNCE%2Fd0FH9zbw3V%2FJyAOxyhDCKl%2B5uv%2FWeVImrmnLj3oquzQ4mtbuTQyxk9Kr4nJQmVxx&X-Amz-Signature=98879a8eefe16ca7860cabfb13ea494e20cd47d9302f2dea6360c7744f0f925a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYMESUHO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T011653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcpwRQCuCDQ%2F8NVs6lN3MribDkBH6jmzqx%2F1kPlekcrwIhAO6u2eMyD8pvfnSy2hzQvRODFmAw%2Bs3eonXfTp6gJbBUKv8DCE8QABoMNjM3NDIzMTgzODA1IgxoKYp5v34z3oe3BMgq3AN%2FCmAmZq0I%2FBAcHMm45yWRNKp%2BWeUdbNY5y9ciKzcsc%2FhD5gjSpOyJoFb1chPgyd9oF9oUv0lO0pkVkOwwunxsLqV32NrFoYUEuvB4KovRTlH%2BJmnbHVvuOd6DrrctUq4ZP3M9P80SyriTV4nvlN5YGc4AgLEf4iOxsR9wxE7CwVnboTtHl2dLcepykw1txHe6mS%2BBwCMGEg1jb%2BnJN82jM%2FTPYmSKhjJbH093w88PHMyhUkkLWvj5hYgE2BltKpCD7e2wp7y%2BPTxtGHGAnsNb340Tko8ZfPPYqUtYQL5ZC4Sn6QZdMMz0DbiaT%2BLmSKzT7pyW4I7VpG69u%2BbDFeu8HS4XIKzEzlayTCPtxGfO4ctd1Mr%2FI1UPdoUFEOQU0hmp0w4bO8H8XqdGwSua398qHF%2FbCFQc7hhxiX6Ma2d0wNrreZ3MUED1nVzbQ6op7dPwHAwfG0EyBBQMGqSbTbmICMW%2FfaTF9%2BOP3FnQZjvqtn7ut3OCYpCm5WRwxcVbw88ggQ%2B6wu5pOMCr9%2B6ItGd7rJa3Lx5aR4BzFqOPZJMxwJE%2Bwp5Iwk%2FerBY7ihjNNQLJ6qjDNv7AhrTMvtkjdgpJaU5FYNNry2MiidAWbTscldYkRfWl8b3yQbEjTzDKjMjJBjqkAfk%2BvSzRv2e5ScwJmdWpayTVLNUA6DGtE3OFKepCsawN5OHIATRwQh7xv9XbvH5aUxhAvY5snE2Zl0j7%2BK6qnl%2BApU7pJjGHWKi6OJnQF8k6uGgd50EgQYKfI%2FPjYXdmbEZG8Rek248HulrGN%2FNcGsAbNCE%2Fd0FH9zbw3V%2FJyAOxyhDCKl%2B5uv%2FWeVImrmnLj3oquzQ4mtbuTQyxk9Kr4nJQmVxx&X-Amz-Signature=8c295539ceb679db165312d3225c03a79f4e749abdfd1045fe8ecbd97af1f2e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

