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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CBP4W6L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwltw0hFeMcAmc4T8itab3WYW4Ogn4wblc%2FldVcodghAIgP1%2BbnBJdWDaWBBPDXluzo8EsPjub2MonQaH23kT5Nusq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDBuSXZYVF1H8AVv8IyrcAyaliHYKKbADt3Pc%2FjB%2Fhp56m4yCf0ir96VK%2B0iYLOcrslUrlWnh9dzmTOXrkvBtvhzzpvw4xv%2FPupxgoJdJ0EboyIEVUloS%2FDi9Oh8Qt3Pr3cDu2u0%2BjaTmzpmXeJlkGF90InaEqiTlfGAKek3HhU5Gvygp3hqvIQ%2FQYKgm4D1s25jOBckmIMJ4KgU46OdaNcnUCNO%2BrkRwPqBrwSZkMXJnkzSPenHNnHNW8rH%2BKzuT7sjv00CHK8%2Fl4uKl3RuPGxUmR5DMw16A7Nh%2B5jWrM9fiVckbDbLgHqP%2Fh9EDrCgmzDVE8OaaQ03CU6kBPSWl9gNRJemApg7iCn9W%2FTnaIKXQ48Vg8QiJxuMMSrsL0KZ%2FwxhesUn3CcRngC9P3J49EsJgGSgtwWNDfj%2F4ujLiucR8ut%2BqAetfIFCFPZcpIe%2BSfH%2FIDwuuCuCeAbuo5by0jYpxu31Beffaaj%2BSD2ie5WvzTuHGZBATzlDKp3GvJ1K%2Bpo6ld9nZQYL8ZLVzlmPAZTqUC%2F7uMUXjRPLP%2BCXsaZXv73ad8VpTk9jdrATVyP0X4%2FZuW%2FxK%2BzfU%2F5u%2BlZ3vrNzpq131DbSzgu5dYeftEJixzmDjDyF03%2Fb8b14GMc7R4bVGlAugYrAKo6%2BMMKrpiMoGOqUBtm5YRdudfc5REtQqw2UQxgzHSeTr0%2BVtE4thp%2BSuIErARubWa16lSQRjeCkJSgMY051dqET%2FkSU0PY4IYM28NUxwffK5IKXzRu22QCpz5d%2B1bkMIHmCnPBqQATu0W0hEnrciV05MdmuwJY3UMnIQE7g6glcCzTq8JOQeUcAeWFrFTpbSwcRl6tI%2FFusabY3ZJ3AVyYWdy9PYssyRBy%2B%2BtCt8RLZF&X-Amz-Signature=147ef085b1b58610a61a0fa3f6d634cc7568ec24a94374c5bec9dac220b3ddf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CBP4W6L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwltw0hFeMcAmc4T8itab3WYW4Ogn4wblc%2FldVcodghAIgP1%2BbnBJdWDaWBBPDXluzo8EsPjub2MonQaH23kT5Nusq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDBuSXZYVF1H8AVv8IyrcAyaliHYKKbADt3Pc%2FjB%2Fhp56m4yCf0ir96VK%2B0iYLOcrslUrlWnh9dzmTOXrkvBtvhzzpvw4xv%2FPupxgoJdJ0EboyIEVUloS%2FDi9Oh8Qt3Pr3cDu2u0%2BjaTmzpmXeJlkGF90InaEqiTlfGAKek3HhU5Gvygp3hqvIQ%2FQYKgm4D1s25jOBckmIMJ4KgU46OdaNcnUCNO%2BrkRwPqBrwSZkMXJnkzSPenHNnHNW8rH%2BKzuT7sjv00CHK8%2Fl4uKl3RuPGxUmR5DMw16A7Nh%2B5jWrM9fiVckbDbLgHqP%2Fh9EDrCgmzDVE8OaaQ03CU6kBPSWl9gNRJemApg7iCn9W%2FTnaIKXQ48Vg8QiJxuMMSrsL0KZ%2FwxhesUn3CcRngC9P3J49EsJgGSgtwWNDfj%2F4ujLiucR8ut%2BqAetfIFCFPZcpIe%2BSfH%2FIDwuuCuCeAbuo5by0jYpxu31Beffaaj%2BSD2ie5WvzTuHGZBATzlDKp3GvJ1K%2Bpo6ld9nZQYL8ZLVzlmPAZTqUC%2F7uMUXjRPLP%2BCXsaZXv73ad8VpTk9jdrATVyP0X4%2FZuW%2FxK%2BzfU%2F5u%2BlZ3vrNzpq131DbSzgu5dYeftEJixzmDjDyF03%2Fb8b14GMc7R4bVGlAugYrAKo6%2BMMKrpiMoGOqUBtm5YRdudfc5REtQqw2UQxgzHSeTr0%2BVtE4thp%2BSuIErARubWa16lSQRjeCkJSgMY051dqET%2FkSU0PY4IYM28NUxwffK5IKXzRu22QCpz5d%2B1bkMIHmCnPBqQATu0W0hEnrciV05MdmuwJY3UMnIQE7g6glcCzTq8JOQeUcAeWFrFTpbSwcRl6tI%2FFusabY3ZJ3AVyYWdy9PYssyRBy%2B%2BtCt8RLZF&X-Amz-Signature=59e02b2bd3ba22afbcbdf58ab10ca925c66cac3afb7dc241f9197f79609ff5a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

