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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TPTS76S%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdwGtlRIP%2Fys%2FNaqfqSf4WQCj4TlSLjGuiq32aRAiugAiEAzyYCuJvBTfjZi70iMwaFpquYTavyISWxFNLCuA%2BZWSMqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPThcr6kDZBGpwZCkCrcA5MlTDbzHm%2F6iNUHjdf9O7R1gMj29qi%2FkIsTZn53DFxyoFi3mo%2Bi0bmIyKgII2tAw9OJHRKSnBAiAOQ6kJR%2FaT3HET2UddStaPH5yfLVQGrLfi%2F6aamxrKMk%2FRYCvvwVGDIgYCZyQcb6uZcJSBvSG8czO7zd3Q0DmkDq7RbGpw72DfeEfocWQ2NYZi3iBm52wEmQEtYg8HIgVP0YvXuR9kYHomsrlPvZuhrjMN7WVVcpZWUYrQXJgaEOMsuxh1hKaX2NxZNB4QbmlZOAmEdA6%2Bw20ecOEtJ6M%2BaNjL9T33w%2BHw17RKe278RcaJOwt%2FOnwzx7NH0rpeCVTt2pjcNAyMqZoYAqP%2Bg5CMYnhMtNtwj3z%2BD5Vux7fJ%2BxCSTOOs6WGFur8EfQPzFj2bgU3VYfoG2dIluLpkIiD7mSl8%2Bk1F%2F%2FAWkOCocg3Tubjos23GZk4ZsAFr7ca91XWgf%2B6ykE65%2FwhEQSCbOWW1aJgMLRVMO3eiBz8y7JVXj8YYE75ryvHERF33gwYX1EAOEpxlzUF8IvQFH46TCvXI6JtKegf3auh29rb%2BJ6whq1lXt%2BdJFFrn8Ny%2FMv2abLaniwfca5ZmbH32tmHOL9zD3Ia9FVyGcBQz7k%2BZ1MrJjVhsC3MPP%2FisoGOqUBbbqfeAX67VRKNUomLsU51%2FAFrqKWBkIzkHMXh0eGG5IaEqkHi8ldPnjvBwODrVFamjmp1PihEfgh5xKacBaZt%2FmZ6CkBlwcw9QiLRzS%2FPL8kZh4Ga3tK0dVLt7cIo3J623xsDf9VhB1Hvb88Xacf6pzG6VPiqdnhYUUFZ3NzFTZ9JvkhMVl8Blw1ukiN%2BZWuq3XPZzcRsbwpuuEUhJbM2vmy4mk1&X-Amz-Signature=81620343d7f66aa6d658707014cf4bd8d40db7da4979f983a1d39cda19f31ba1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TPTS76S%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdwGtlRIP%2Fys%2FNaqfqSf4WQCj4TlSLjGuiq32aRAiugAiEAzyYCuJvBTfjZi70iMwaFpquYTavyISWxFNLCuA%2BZWSMqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPThcr6kDZBGpwZCkCrcA5MlTDbzHm%2F6iNUHjdf9O7R1gMj29qi%2FkIsTZn53DFxyoFi3mo%2Bi0bmIyKgII2tAw9OJHRKSnBAiAOQ6kJR%2FaT3HET2UddStaPH5yfLVQGrLfi%2F6aamxrKMk%2FRYCvvwVGDIgYCZyQcb6uZcJSBvSG8czO7zd3Q0DmkDq7RbGpw72DfeEfocWQ2NYZi3iBm52wEmQEtYg8HIgVP0YvXuR9kYHomsrlPvZuhrjMN7WVVcpZWUYrQXJgaEOMsuxh1hKaX2NxZNB4QbmlZOAmEdA6%2Bw20ecOEtJ6M%2BaNjL9T33w%2BHw17RKe278RcaJOwt%2FOnwzx7NH0rpeCVTt2pjcNAyMqZoYAqP%2Bg5CMYnhMtNtwj3z%2BD5Vux7fJ%2BxCSTOOs6WGFur8EfQPzFj2bgU3VYfoG2dIluLpkIiD7mSl8%2Bk1F%2F%2FAWkOCocg3Tubjos23GZk4ZsAFr7ca91XWgf%2B6ykE65%2FwhEQSCbOWW1aJgMLRVMO3eiBz8y7JVXj8YYE75ryvHERF33gwYX1EAOEpxlzUF8IvQFH46TCvXI6JtKegf3auh29rb%2BJ6whq1lXt%2BdJFFrn8Ny%2FMv2abLaniwfca5ZmbH32tmHOL9zD3Ia9FVyGcBQz7k%2BZ1MrJjVhsC3MPP%2FisoGOqUBbbqfeAX67VRKNUomLsU51%2FAFrqKWBkIzkHMXh0eGG5IaEqkHi8ldPnjvBwODrVFamjmp1PihEfgh5xKacBaZt%2FmZ6CkBlwcw9QiLRzS%2FPL8kZh4Ga3tK0dVLt7cIo3J623xsDf9VhB1Hvb88Xacf6pzG6VPiqdnhYUUFZ3NzFTZ9JvkhMVl8Blw1ukiN%2BZWuq3XPZzcRsbwpuuEUhJbM2vmy4mk1&X-Amz-Signature=20274fc8455d3f7bfae83b0148cb77c0892d9e460207b3641af6f44a3cc004e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

