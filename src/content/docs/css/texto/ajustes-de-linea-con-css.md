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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4FYQBER%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDGdEyueQx%2BZFWeK19RH62PivqMkuEJRW1EdxA3zaPaOAiEAqJVlM9B7bXr6xxodlSUwCd%2B8cb7hp%2FzAaxoOfbxbwg8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7%2Fsb56cEvQkK9QpircAxwYAmU9KaAPc5waNIp1p7Fg8gtLjo9aPoQg%2F9hZbqfk7HfqaELKDza9DLvcNXfuwvHVnQzKnS5u%2F3amW9wNsYn7eT9G99md49eK2VAPhGhAesS6PKnc1j%2Bf651pwTqA50fn5FtjJ%2FKrvTRzHj%2ByAFAfaBS5R2Y0dVGtY%2BFHOv%2B4JtaXKNf4HeMY2B6SwL9E9jmZ0jaIc3dUYk1qEcYAC9FsFwpSqEoskkBMONJEK1PVqbIhXn1ycB4al5H6TketkfeGXfRjtc7yt4T%2B0BBtt65DNwMgjlQkqmnB%2FnI4ueUJDDs93e9TzrvVkN24LfZuX9v%2BwospxjWIZP0Jgsup0Kzc%2FR%2FkXrJ8kGFCNWfE3%2BT0xRUFDCMNp8pFT6KM6BBI1rUxVfjgP%2Bx1MxbXRm7LpAVRQVMGyFcMes%2BHQ9TNBuCrIFBpcbrjW5%2BgrRvk5WnGllbCY6Gp1dfk1nDHOPp4ysmP%2Fs03lwnt0p88fHdxQbLaQBQKyuQ37SONcsWj70lO%2FJd5%2BTC8lVuJIX8Mhalejx4coIeZ1bQH%2F1PI0VQ0COOUxR9sDQ5QAAU2FYdgy9XPfXkE8X9cGXANQN2RjPYn%2FJTyHwHC2SVPchi46RaSeggUlWxM4LBDmQH8JbGTMOygi8oGOqUBiIJfBCN8ZVesoJd9UBdOeffvhnSs%2FJNTJyH%2FGddjmWOnjy1Xg%2FMQzBCQadQg9eU%2BpEgH%2Bltg6FOpokMK5pSh9gkAV%2FJL0OItU4oa1Khs1t2fS2eQV755Z9n1Q2scfWOzfw3ovD364OkkmYNeKOLW8yk0IuCk2u%2F2kJMbuf649ynGDzhxcq7ODlbGOKTy%2FoDzvXWRXkl58tMpWTRAIgB%2B%2Fis9lmrD&X-Amz-Signature=4f9d6fa30079b1a14530cacc025955cc9338d8d134336c76d3b9b6b23906babb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4FYQBER%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDGdEyueQx%2BZFWeK19RH62PivqMkuEJRW1EdxA3zaPaOAiEAqJVlM9B7bXr6xxodlSUwCd%2B8cb7hp%2FzAaxoOfbxbwg8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7%2Fsb56cEvQkK9QpircAxwYAmU9KaAPc5waNIp1p7Fg8gtLjo9aPoQg%2F9hZbqfk7HfqaELKDza9DLvcNXfuwvHVnQzKnS5u%2F3amW9wNsYn7eT9G99md49eK2VAPhGhAesS6PKnc1j%2Bf651pwTqA50fn5FtjJ%2FKrvTRzHj%2ByAFAfaBS5R2Y0dVGtY%2BFHOv%2B4JtaXKNf4HeMY2B6SwL9E9jmZ0jaIc3dUYk1qEcYAC9FsFwpSqEoskkBMONJEK1PVqbIhXn1ycB4al5H6TketkfeGXfRjtc7yt4T%2B0BBtt65DNwMgjlQkqmnB%2FnI4ueUJDDs93e9TzrvVkN24LfZuX9v%2BwospxjWIZP0Jgsup0Kzc%2FR%2FkXrJ8kGFCNWfE3%2BT0xRUFDCMNp8pFT6KM6BBI1rUxVfjgP%2Bx1MxbXRm7LpAVRQVMGyFcMes%2BHQ9TNBuCrIFBpcbrjW5%2BgrRvk5WnGllbCY6Gp1dfk1nDHOPp4ysmP%2Fs03lwnt0p88fHdxQbLaQBQKyuQ37SONcsWj70lO%2FJd5%2BTC8lVuJIX8Mhalejx4coIeZ1bQH%2F1PI0VQ0COOUxR9sDQ5QAAU2FYdgy9XPfXkE8X9cGXANQN2RjPYn%2FJTyHwHC2SVPchi46RaSeggUlWxM4LBDmQH8JbGTMOygi8oGOqUBiIJfBCN8ZVesoJd9UBdOeffvhnSs%2FJNTJyH%2FGddjmWOnjy1Xg%2FMQzBCQadQg9eU%2BpEgH%2Bltg6FOpokMK5pSh9gkAV%2FJL0OItU4oa1Khs1t2fS2eQV755Z9n1Q2scfWOzfw3ovD364OkkmYNeKOLW8yk0IuCk2u%2F2kJMbuf649ynGDzhxcq7ODlbGOKTy%2FoDzvXWRXkl58tMpWTRAIgB%2B%2Fis9lmrD&X-Amz-Signature=1907cf42669a2724b2cecda222f1b3d03a52f893ca7094bb1673154b535b741c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

