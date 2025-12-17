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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB54UDW3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAR%2BqtBHvf6VbC%2BPa5m%2BdWFmJ0hYtXAt9fsQ%2FHWjIgDUAiEA%2FERy%2Fn8qEXsaP1QnF183AAHgEDetjPUre%2FDL90gws7Mq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDP9EeJp6ieAd7i6FiSrcA0IlaMZlWl7Thng5Z7RCG3mkRGXo06cTYJRWRK%2FYFdc3evdbobocD0bs62qLHHjKZGMdmFxUW8ilu75i1DTZ3YM0W8x1t%2BUjIOADCqTUjvexWN%2B6u90qRvnCCH%2B9ecHozipSVpm77h8Ja1hc8OjcLa%2FB84xyw0WChGnD02IMd%2FmatEACBAtGeJ1h0WyBmr9PbQkBgzQ9VVe50dj%2B2mri7cxaMN5SVH5kGop3T7jCk6Uc2bYMPeH7K7bTnyqyoEbKCrne8M9vVh5H4po5ghgcc1gB8OX47eBi7c9HjYg3W7pFs%2F7MUHaE28dtf%2B3IXGgSj8T3E5mflnIos%2BhUOrvRC0TfiAJ8JyL8WtZjAh8lzDEiUGtIQK9PYleh2fIg7V1sd7IUOT05dsY%2BQUVx3nmRO%2F9Vo68Rb6BoVQYPR%2BQKYQrmk0cXYhQjSC6vEUm%2BPf6mK%2FGjg%2BjV25M2dB%2B2Vc6DI98HZMaCQABa0ywYAZgAa1zQArW9NeXqnPztLpj660xQNt%2B8KD%2FAI1rBqOF2H0mPBmZp866DGzT4aqREOXILBm8n0i6fuCNXdxVCXT7%2FteEz7QIb1%2Fbi9gA8M1igPVqodDPRrVG14kryjqTEIwF9NtWcxsJYCzL3LbrZh8tHMO3SicoGOqUBopgLYGHzUuWwDqQsOwQHypTWdwQPdX1VdwEu7X1vESrmP903HHvgMAyU5JOGSA7%2B5pJS7RsKHYvSCmiA8NG6O8VxoB%2BCh1r1aO72ysAeOjfD1sbv%2F1ZRxBVswjyAMqSVnSnhnEy1EZP8tQQmo7QzYV%2BvBGlMbi90cJ2wwfL0rMeavkSffoIxZOVt69IOacEVwCDaUwK3LLzS2s4PGkq3llubW8c2&X-Amz-Signature=e589b0c976f0e3cb20f7b87c30a3df3f3dbaeb7cfc54fa02db0dd65f8b8939d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB54UDW3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAR%2BqtBHvf6VbC%2BPa5m%2BdWFmJ0hYtXAt9fsQ%2FHWjIgDUAiEA%2FERy%2Fn8qEXsaP1QnF183AAHgEDetjPUre%2FDL90gws7Mq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDP9EeJp6ieAd7i6FiSrcA0IlaMZlWl7Thng5Z7RCG3mkRGXo06cTYJRWRK%2FYFdc3evdbobocD0bs62qLHHjKZGMdmFxUW8ilu75i1DTZ3YM0W8x1t%2BUjIOADCqTUjvexWN%2B6u90qRvnCCH%2B9ecHozipSVpm77h8Ja1hc8OjcLa%2FB84xyw0WChGnD02IMd%2FmatEACBAtGeJ1h0WyBmr9PbQkBgzQ9VVe50dj%2B2mri7cxaMN5SVH5kGop3T7jCk6Uc2bYMPeH7K7bTnyqyoEbKCrne8M9vVh5H4po5ghgcc1gB8OX47eBi7c9HjYg3W7pFs%2F7MUHaE28dtf%2B3IXGgSj8T3E5mflnIos%2BhUOrvRC0TfiAJ8JyL8WtZjAh8lzDEiUGtIQK9PYleh2fIg7V1sd7IUOT05dsY%2BQUVx3nmRO%2F9Vo68Rb6BoVQYPR%2BQKYQrmk0cXYhQjSC6vEUm%2BPf6mK%2FGjg%2BjV25M2dB%2B2Vc6DI98HZMaCQABa0ywYAZgAa1zQArW9NeXqnPztLpj660xQNt%2B8KD%2FAI1rBqOF2H0mPBmZp866DGzT4aqREOXILBm8n0i6fuCNXdxVCXT7%2FteEz7QIb1%2Fbi9gA8M1igPVqodDPRrVG14kryjqTEIwF9NtWcxsJYCzL3LbrZh8tHMO3SicoGOqUBopgLYGHzUuWwDqQsOwQHypTWdwQPdX1VdwEu7X1vESrmP903HHvgMAyU5JOGSA7%2B5pJS7RsKHYvSCmiA8NG6O8VxoB%2BCh1r1aO72ysAeOjfD1sbv%2F1ZRxBVswjyAMqSVnSnhnEy1EZP8tQQmo7QzYV%2BvBGlMbi90cJ2wwfL0rMeavkSffoIxZOVt69IOacEVwCDaUwK3LLzS2s4PGkq3llubW8c2&X-Amz-Signature=2cd49a15c5efa6cc6ab936f79f7792312eb8639e8112a1299ec82124db209f9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

