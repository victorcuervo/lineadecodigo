---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XQ4UM3V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAeYme6GErOBIvRSDPJA%2FnXm1%2F5%2FD6G2bG9Tr5H8e97%2FAiBFJKn8zTnJMVYsgQ12VJ3s1XjKrpyjAJEdMrYj7yZ5iiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM91f2cq3fywlTlOpNKtwDEjjSlFB08Y4Ve4MqC8%2BFVIfVQ5f3ifjk1Oof2kZy5tCMr%2B2iGfMcVO3DwhESpB8zFSbMfvDWRo0bNI0OLqKaAkfoeOzOngWXnX6VBiT49%2BsYzuTOS6lFSk4gVQpiVX4XtLlOEKNRzRlvdBDj13EZ1Ojpa9%2Bj4rnoo%2BFhKF9lKUM86bgs9RNLbc9whulXiTUQq7RYCGx2fxKo1OGZOfuf7NxALtlDcFTUvGV%2BBPpq5ZqvLI93asASbgnfi7grDJN%2BGVwD%2BbUV%2FH%2FudMlnxk%2FPKVPo3Ap0nRulT9OZdWC%2FxT7hUknnfeF3YW2nB0t2s7rcdXvceYj1bUENogQbjUKja1YfTfuPKCFD%2FJ0NXc8nZsAXBEg4PuDOhjz6w6LkUyCzE%2Bki0Nc5tnoUOhlnzY%2B2hDdIubOqWzAYZtSUA%2FzuXrMCXWhCdjLrZpYUkI2JWm7cFJhi5s7%2BmKYatatYP6pnPJVkfUxRlpN2pZjTngTr4CJh0Lq5%2BCMEvQZku4dhrVXTdK9TTyWB5uAohZ57RzaBd7fppAVHt0xHqT5%2BLfU8%2BFBW1tpKQqMzjjDviLaJluTTrvdcSYJKhvKsKwcRJ7fV0NQdrVPYicQbGA9VIJdYitCwql8q7hop1I4Af90wpp%2BLygY6pgFHSJCX6f2Pa7fk%2BIt4n90kIwK0tY0alP2IBfU6YKf9FcbS9rMFUoCbDLEBWyad0xx6cBkTkb%2F4suFUS9K%2Fr46gkk%2F6BulYkZ39jkv8yIhEOk3e6NJ0VwXGWkiNASnMJHA74NbH5J60PksarSSl9tACZPwH4oKAN947g63FUE8Pxwn7dCn%2FTpoGs8EUMAk%2BXLUivPqf9p09FQKBoSgjyCBCWskh1ODP&X-Amz-Signature=a78a1bc5d260a50903b9336aaca68df5686a2800c88f8bd769a858f358807e6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XQ4UM3V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAeYme6GErOBIvRSDPJA%2FnXm1%2F5%2FD6G2bG9Tr5H8e97%2FAiBFJKn8zTnJMVYsgQ12VJ3s1XjKrpyjAJEdMrYj7yZ5iiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM91f2cq3fywlTlOpNKtwDEjjSlFB08Y4Ve4MqC8%2BFVIfVQ5f3ifjk1Oof2kZy5tCMr%2B2iGfMcVO3DwhESpB8zFSbMfvDWRo0bNI0OLqKaAkfoeOzOngWXnX6VBiT49%2BsYzuTOS6lFSk4gVQpiVX4XtLlOEKNRzRlvdBDj13EZ1Ojpa9%2Bj4rnoo%2BFhKF9lKUM86bgs9RNLbc9whulXiTUQq7RYCGx2fxKo1OGZOfuf7NxALtlDcFTUvGV%2BBPpq5ZqvLI93asASbgnfi7grDJN%2BGVwD%2BbUV%2FH%2FudMlnxk%2FPKVPo3Ap0nRulT9OZdWC%2FxT7hUknnfeF3YW2nB0t2s7rcdXvceYj1bUENogQbjUKja1YfTfuPKCFD%2FJ0NXc8nZsAXBEg4PuDOhjz6w6LkUyCzE%2Bki0Nc5tnoUOhlnzY%2B2hDdIubOqWzAYZtSUA%2FzuXrMCXWhCdjLrZpYUkI2JWm7cFJhi5s7%2BmKYatatYP6pnPJVkfUxRlpN2pZjTngTr4CJh0Lq5%2BCMEvQZku4dhrVXTdK9TTyWB5uAohZ57RzaBd7fppAVHt0xHqT5%2BLfU8%2BFBW1tpKQqMzjjDviLaJluTTrvdcSYJKhvKsKwcRJ7fV0NQdrVPYicQbGA9VIJdYitCwql8q7hop1I4Af90wpp%2BLygY6pgFHSJCX6f2Pa7fk%2BIt4n90kIwK0tY0alP2IBfU6YKf9FcbS9rMFUoCbDLEBWyad0xx6cBkTkb%2F4suFUS9K%2Fr46gkk%2F6BulYkZ39jkv8yIhEOk3e6NJ0VwXGWkiNASnMJHA74NbH5J60PksarSSl9tACZPwH4oKAN947g63FUE8Pxwn7dCn%2FTpoGs8EUMAk%2BXLUivPqf9p09FQKBoSgjyCBCWskh1ODP&X-Amz-Signature=c9f766354477dca55a2d71a8bdaf8c353338e1aef3d29052939ff28964193985&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

