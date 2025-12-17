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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VFESGZF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArhdsFy4%2BjlsXu6mP6ZkcC1Iy2Qo8mpkJFJg7bzXzh6AiB5z7M1X3y%2BigIKdK54%2Buam5MmvNLk4Sb8sdF7O3bJgMyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMdoYdLVtyg02m4HMjKtwDlPR0VfPovau9kUlNDz8KZJ7utGlS2jCVPKBeprRSDhNm6jxDujHxupegSFURUwEx4W%2BWmjbfQJ83bpaSaJtQ5XdfB%2FgMPlEJVyuUNoRkfMuX8oTBwO5Ec3R%2FHak7Bw2wSiV334Q%2Fef0WxHlmbosbd16EJbFtoOvpwWZvE4D16R1ct1W8S97pn1Pe50h8nQQ8PXJD8vpcQA6E%2FPnowYH8KQTPKZF4miUl1TjlhN1EW87IC6g5qm%2BIwia3PHCFBM99siJ25ePj9E3lxNJR7hb7HTsLfL%2BMJVMuLeaIb8T3A0Y5DSh81y5Udnwx51xtD71YnO8GaCp%2BVNjbTzoif867VEST%2BZPh%2BDiU3%2F%2FkLTSoFgulD71BlQlBihdwXTEfas2hohOyZJgMw1lNrLHNgHxFjm7KIEb5FyaR%2BO6EDwpfrz2HSigS1ayGZZ93uRXB1sIOaW0RSpv2X85ahfeeIyR0hF6j%2FyaFE7DS34QaSBIgApoHQA4kCPQnHvtLWU4EPuWcpEX8Mi1NIaiQQoiAOR5vVRA8w56FuPOehU8L1EGlXnSZClt%2FYzq5c549tfXkB6WzyVezMGO1LY1yXKziuBUgqmSW1eTISIVBozHK6AAsRpBB0NL6nj42Su7DdVUw4umIygY6pgHheCjUmeglj0CnGYm8xIezqQMpCrPiW1o1IvYmpQ%2F%2Bc6i0xSLUxHolUO3Ohc4q87ZS99yzkWgcY%2FQ8kddAVDyiYtfMB8kOgaTedfEoUW3t%2BfKjG6%2BY9ZdoLsz1qCYbgcYwyCPya2AChSOjz%2FZ%2BqtPF0an0mFLvJegfwFe4P3kqLjgh%2F5C6PB3FujYlXJga1EKhXRqEcaSHQpmyRhkn0NezlGYJYhxC&X-Amz-Signature=cb8d930e5e3a3e93b07df82e4c1c452f3c3de9fe6ec37c644c164fffb7294936&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VFESGZF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArhdsFy4%2BjlsXu6mP6ZkcC1Iy2Qo8mpkJFJg7bzXzh6AiB5z7M1X3y%2BigIKdK54%2Buam5MmvNLk4Sb8sdF7O3bJgMyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMdoYdLVtyg02m4HMjKtwDlPR0VfPovau9kUlNDz8KZJ7utGlS2jCVPKBeprRSDhNm6jxDujHxupegSFURUwEx4W%2BWmjbfQJ83bpaSaJtQ5XdfB%2FgMPlEJVyuUNoRkfMuX8oTBwO5Ec3R%2FHak7Bw2wSiV334Q%2Fef0WxHlmbosbd16EJbFtoOvpwWZvE4D16R1ct1W8S97pn1Pe50h8nQQ8PXJD8vpcQA6E%2FPnowYH8KQTPKZF4miUl1TjlhN1EW87IC6g5qm%2BIwia3PHCFBM99siJ25ePj9E3lxNJR7hb7HTsLfL%2BMJVMuLeaIb8T3A0Y5DSh81y5Udnwx51xtD71YnO8GaCp%2BVNjbTzoif867VEST%2BZPh%2BDiU3%2F%2FkLTSoFgulD71BlQlBihdwXTEfas2hohOyZJgMw1lNrLHNgHxFjm7KIEb5FyaR%2BO6EDwpfrz2HSigS1ayGZZ93uRXB1sIOaW0RSpv2X85ahfeeIyR0hF6j%2FyaFE7DS34QaSBIgApoHQA4kCPQnHvtLWU4EPuWcpEX8Mi1NIaiQQoiAOR5vVRA8w56FuPOehU8L1EGlXnSZClt%2FYzq5c549tfXkB6WzyVezMGO1LY1yXKziuBUgqmSW1eTISIVBozHK6AAsRpBB0NL6nj42Su7DdVUw4umIygY6pgHheCjUmeglj0CnGYm8xIezqQMpCrPiW1o1IvYmpQ%2F%2Bc6i0xSLUxHolUO3Ohc4q87ZS99yzkWgcY%2FQ8kddAVDyiYtfMB8kOgaTedfEoUW3t%2BfKjG6%2BY9ZdoLsz1qCYbgcYwyCPya2AChSOjz%2FZ%2BqtPF0an0mFLvJegfwFe4P3kqLjgh%2F5C6PB3FujYlXJga1EKhXRqEcaSHQpmyRhkn0NezlGYJYhxC&X-Amz-Signature=34f3683921453c8f51788c2ccf7ac38229b53de9a9fb79a8519140c9be01be18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

