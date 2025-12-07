---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OIXASGK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T100242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDA6y7h9sJM9buRLhe94pNBUGEQ4hh54Gj%2BfK52rvDdAiAv%2Biozqwf71ojXwX%2Fid6x%2BvuSHUwFgZ0Dc%2BlLlIqrAZiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnoqswpJB3FMMpesfKtwDNuUPk%2BovrSJ9M6pm4XrADJjV2YIfiuxEDdC0i4F3Y%2B7tZ%2FXY125Jp1a7qZmjrg7KdqtI7miu2gvSfRUseQsy%2FANv8JkfP3eSiTDK0qmBIiUZ6Bl3AV3NxGZuqbRxCiRwI3NoHt43Oz720kzjdMKYBjfKU8vA%2FRgK%2B%2FxXKySamxY647CrOrUa4Z%2BQctXCBcgU6EgGcPlRy62gFWO%2FzHM53zTO8bca3wVl63x0lGpPNb3%2FvSpEYuT7JQ16YbuYLhj0FSi50eVBA9fRwdAbpI88v8QdrixdnKMoDDVFGEJiL7SCrT4f67FZyFUcWGNedqVmJyCjgJs6ATmFmDKEqm9CUV3XS0AVtMiBvBgu6syQbDhvQCwIChRuGRIVVH9KCOQ5pO%2FlMmp4bLfDvyG62%2BikA4aQcQxPx5uBOS3xK1yb%2B6OSUP3uM8mGFH5QaqOIUQ24gK4Cf4TDCrC3I1NBHialJ5FFtcseatKC7W2wV%2Bm2K7hr5uwLJx2QUdMlm%2Buq5buDJsOJchZOvtEFu7P43K%2FajpMicYk7uSimgB5yPaTepxwvPH6gzRF%2BpEGVghV5eeNw27o95NAVGPKH4QgD%2BRBWukftjzktR%2FIArW0Wq8vkAbPCXbELyH8SU8yhjxQwyZnVyQY6pgHuLns6d9bRRXCsa42KZHRxMw50YOItZPUF0MGxp6szpdFjKiw0w8xJtcgqaPc5UNVBemphj00uD4D019SM9gYHeo8Y6R4%2F2WkG6c1VppTk8RAqfDKo8aSHztQ4T1hkOaqQGtvuFcS34yQ1sknDREBj82l3JQzOtVIDV%2BEmnijaAcwzlPmXurFDgSRAIr852ScHvqSNhKvRsgX4b3tWfIlR0MLTTS%2Bv&X-Amz-Signature=949d8352c9ccf143c46369f3fc57145b9c43c9b21171e37a6abbad4cdbeda4d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OIXASGK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T100242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDA6y7h9sJM9buRLhe94pNBUGEQ4hh54Gj%2BfK52rvDdAiAv%2Biozqwf71ojXwX%2Fid6x%2BvuSHUwFgZ0Dc%2BlLlIqrAZiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnoqswpJB3FMMpesfKtwDNuUPk%2BovrSJ9M6pm4XrADJjV2YIfiuxEDdC0i4F3Y%2B7tZ%2FXY125Jp1a7qZmjrg7KdqtI7miu2gvSfRUseQsy%2FANv8JkfP3eSiTDK0qmBIiUZ6Bl3AV3NxGZuqbRxCiRwI3NoHt43Oz720kzjdMKYBjfKU8vA%2FRgK%2B%2FxXKySamxY647CrOrUa4Z%2BQctXCBcgU6EgGcPlRy62gFWO%2FzHM53zTO8bca3wVl63x0lGpPNb3%2FvSpEYuT7JQ16YbuYLhj0FSi50eVBA9fRwdAbpI88v8QdrixdnKMoDDVFGEJiL7SCrT4f67FZyFUcWGNedqVmJyCjgJs6ATmFmDKEqm9CUV3XS0AVtMiBvBgu6syQbDhvQCwIChRuGRIVVH9KCOQ5pO%2FlMmp4bLfDvyG62%2BikA4aQcQxPx5uBOS3xK1yb%2B6OSUP3uM8mGFH5QaqOIUQ24gK4Cf4TDCrC3I1NBHialJ5FFtcseatKC7W2wV%2Bm2K7hr5uwLJx2QUdMlm%2Buq5buDJsOJchZOvtEFu7P43K%2FajpMicYk7uSimgB5yPaTepxwvPH6gzRF%2BpEGVghV5eeNw27o95NAVGPKH4QgD%2BRBWukftjzktR%2FIArW0Wq8vkAbPCXbELyH8SU8yhjxQwyZnVyQY6pgHuLns6d9bRRXCsa42KZHRxMw50YOItZPUF0MGxp6szpdFjKiw0w8xJtcgqaPc5UNVBemphj00uD4D019SM9gYHeo8Y6R4%2F2WkG6c1VppTk8RAqfDKo8aSHztQ4T1hkOaqQGtvuFcS34yQ1sknDREBj82l3JQzOtVIDV%2BEmnijaAcwzlPmXurFDgSRAIr852ScHvqSNhKvRsgX4b3tWfIlR0MLTTS%2Bv&X-Amz-Signature=e4b544598901265e5a630f4f65d648d94724edeba5ffcc3daaba9821ebea134b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

