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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFT4GK2B%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T000606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGpoT7OWNUPnwF9zWav%2FMpW6wlXQTtByAXzadI8elvfAiEAreRLIVSYmVdg3cteMyJ0A9S4IvRdWeCDenfSKLoj9QUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDagHEtX1L5Nu9hgUircA7KHArl%2B43H%2BAv0gqlDdFfsWaSck92ABt8w8EiXr93XOk4Hn%2Bg3bFDA7io4anaBjHMq6szSvuPq6kr2H%2BhgL7g7KseFtrnL4n3awLKRsYxnCawu%2F8UkNxO%2Bjbsrg84tki8hXYkrm18lxpcx0ym23dV8Ut55JTdUS14uR%2F6WkACMdgpmq4V5AcR3kwgprIqOsIerflOELEnKWk%2Fmba7LCJ363QGvCSNfbn5PKlnTyd7UaYswyuGjnw%2BKfP0cFgLvscNKXZJQHlv1tKeQ18g0zgJpw2U%2Fw4iO3YwoCLw8meO7x8EuWxbOkBtG8QufZ7ukvwYUbjpWj%2F5STWxAPDrrKKDY4xgoc7ViCe%2FRdh5AQaoeh8mfopYi66rSP7R5B%2FJ8U1lmkIestTwa43AXDd1r44irJ8G30fXObVWwLIQs2QEw3l428FLOKgF6dkXCu5NjT5Coh1mz61iquVutR8wDRyaq8DGfkpAIiZRcr5EQ3ey3XlyxwhNeewwHpgaJWu6Ic6Lc3jjw%2FGJs6eKTknKAipcD3gm7rFS47h%2B6Q8zM0xUvBkHq%2BSiM9135Up1Y8lyKsnmK%2BtrLUOFE1HEHG7pGqMVOz1mVmRhYS%2BjbIQ1NPfXDrnuVrmOfiVhGfeMyJMKLfh8oGOqUBUM%2B%2FfjzYOEN5nePFdk%2FSFuy7dSZDGyjczzN%2F7gMZC6x5dp3%2FsbqcW%2FVQqQDR8HmQ9%2FzmoJh9%2B%2BpQa9iAIXhKUvEogxP0jms3G9fbhIAvkOUA12hRikcoqPYgn02HlF9%2FQlAkICxOGXHrv7AwbfLkoOX8GF2ixNM%2F834McGbC3qtuX4NZ05C4cKi59yBYd1SJHgc4uEvaMjVqngqgc0wvc4hBTdJu&X-Amz-Signature=193314e162c5fcbec619281711c5cfeafa76ace5f9d2b1c6bb87cde784be4a78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFT4GK2B%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T000606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGpoT7OWNUPnwF9zWav%2FMpW6wlXQTtByAXzadI8elvfAiEAreRLIVSYmVdg3cteMyJ0A9S4IvRdWeCDenfSKLoj9QUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDagHEtX1L5Nu9hgUircA7KHArl%2B43H%2BAv0gqlDdFfsWaSck92ABt8w8EiXr93XOk4Hn%2Bg3bFDA7io4anaBjHMq6szSvuPq6kr2H%2BhgL7g7KseFtrnL4n3awLKRsYxnCawu%2F8UkNxO%2Bjbsrg84tki8hXYkrm18lxpcx0ym23dV8Ut55JTdUS14uR%2F6WkACMdgpmq4V5AcR3kwgprIqOsIerflOELEnKWk%2Fmba7LCJ363QGvCSNfbn5PKlnTyd7UaYswyuGjnw%2BKfP0cFgLvscNKXZJQHlv1tKeQ18g0zgJpw2U%2Fw4iO3YwoCLw8meO7x8EuWxbOkBtG8QufZ7ukvwYUbjpWj%2F5STWxAPDrrKKDY4xgoc7ViCe%2FRdh5AQaoeh8mfopYi66rSP7R5B%2FJ8U1lmkIestTwa43AXDd1r44irJ8G30fXObVWwLIQs2QEw3l428FLOKgF6dkXCu5NjT5Coh1mz61iquVutR8wDRyaq8DGfkpAIiZRcr5EQ3ey3XlyxwhNeewwHpgaJWu6Ic6Lc3jjw%2FGJs6eKTknKAipcD3gm7rFS47h%2B6Q8zM0xUvBkHq%2BSiM9135Up1Y8lyKsnmK%2BtrLUOFE1HEHG7pGqMVOz1mVmRhYS%2BjbIQ1NPfXDrnuVrmOfiVhGfeMyJMKLfh8oGOqUBUM%2B%2FfjzYOEN5nePFdk%2FSFuy7dSZDGyjczzN%2F7gMZC6x5dp3%2FsbqcW%2FVQqQDR8HmQ9%2FzmoJh9%2B%2BpQa9iAIXhKUvEogxP0jms3G9fbhIAvkOUA12hRikcoqPYgn02HlF9%2FQlAkICxOGXHrv7AwbfLkoOX8GF2ixNM%2F834McGbC3qtuX4NZ05C4cKi59yBYd1SJHgc4uEvaMjVqngqgc0wvc4hBTdJu&X-Amz-Signature=8c0a35acb8f97e8cb48f73f930d1964fb47683169de2cf6f684b4652fef5da4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

