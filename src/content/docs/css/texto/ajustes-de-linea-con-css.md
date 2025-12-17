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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYAFX5FF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACtm6BB1ErLUsvwJuWrN7KUtpduTojc5Gss%2Fgtu41XfAiEA35bmIv3KjwxAjfacHCRrVwwYAcaek%2BbWzSKJ1D5aeiUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGqKao8DkIwa9RURCrcA6PHOZKOgNv9hX6BGeYuVDrqyDlFqUbdiiU1yLYdspuG0yC%2BaHnA8FBb7u1CnJ2TUqksH3tLex6ETOUj9uSssSM%2BEBHPWD4qVCBz6DOH2DgrGUHrI4EB5JgHvUT8mRjjfaWrLH3wiwV20hefIwD9yUQ%2Bz5uGMHbsAQaDQDKzYPEsBRpc9XWUOu3tQfZxRJn%2F%2BsV7ORVdBtGDREbqF9tpXYlRCzAvg959nw1A76PtYk0K8QFmouBkOT4kbHuvqZJqCc%2FE%2Bbo3ug%2FCC%2FzpN5AXZ0%2B20JqJmtJETy%2FtiWcMYwxtYhHeYbnsEsyW7xCHX6F%2BOM996fzoTG9T%2Bm1loJB%2FjDUvxtxU9gUqxB15xnlLX1WqCwdw7gxTmqOuS8Vj7as0%2FvS7Ikg0wXplLvl4OGluaY5Iwr5HUkyQaWX7EYmR2BUNpVgB2%2BnNWNQyhH%2Fl4a2J8Ggzs0%2Fi663sJDBK4krfvRIpiqzfo%2B2DQ7QuJV77dAnTorzQILGJEeryqh6CcA8pd71MQUz2%2BXoVuAeltssDwozyK9DsE8wHNYpBHPl3Zo9%2BV7DPeANEaydiSReoxjfGGTLN%2B%2BTI8cAy5qwirZupRzeT5yulu6oSC%2BY91bL0YU4a5zw%2FnNk53cN9B7I1MPuKjMoGOqUB4QElJN%2B5lwowZkdE%2Br8Dj2HiBB4c8fNRAHNEisEXqhyJMzpnyBGzIWN9MPZF8PHaRrpPm%2FRPZrHmjMfR7oV0ffmLf2fhUiWWqdF2PUFjctLOKia0ms58G5V5ztwnqqG6gH0g%2FZblP0cXP5pytDmK4z%2FWFuohUZc2AwofkBPqh911IVgKWlx%2Fvdb7QRu2gAyDtIvU4%2FusyjGeqrYt1%2FC2GNiTQ%2BHd&X-Amz-Signature=086135b2d28d22828f0dac62c0df94c9b353ac8d6913280c88c4a2b25d688a49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYAFX5FF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACtm6BB1ErLUsvwJuWrN7KUtpduTojc5Gss%2Fgtu41XfAiEA35bmIv3KjwxAjfacHCRrVwwYAcaek%2BbWzSKJ1D5aeiUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGqKao8DkIwa9RURCrcA6PHOZKOgNv9hX6BGeYuVDrqyDlFqUbdiiU1yLYdspuG0yC%2BaHnA8FBb7u1CnJ2TUqksH3tLex6ETOUj9uSssSM%2BEBHPWD4qVCBz6DOH2DgrGUHrI4EB5JgHvUT8mRjjfaWrLH3wiwV20hefIwD9yUQ%2Bz5uGMHbsAQaDQDKzYPEsBRpc9XWUOu3tQfZxRJn%2F%2BsV7ORVdBtGDREbqF9tpXYlRCzAvg959nw1A76PtYk0K8QFmouBkOT4kbHuvqZJqCc%2FE%2Bbo3ug%2FCC%2FzpN5AXZ0%2B20JqJmtJETy%2FtiWcMYwxtYhHeYbnsEsyW7xCHX6F%2BOM996fzoTG9T%2Bm1loJB%2FjDUvxtxU9gUqxB15xnlLX1WqCwdw7gxTmqOuS8Vj7as0%2FvS7Ikg0wXplLvl4OGluaY5Iwr5HUkyQaWX7EYmR2BUNpVgB2%2BnNWNQyhH%2Fl4a2J8Ggzs0%2Fi663sJDBK4krfvRIpiqzfo%2B2DQ7QuJV77dAnTorzQILGJEeryqh6CcA8pd71MQUz2%2BXoVuAeltssDwozyK9DsE8wHNYpBHPl3Zo9%2BV7DPeANEaydiSReoxjfGGTLN%2B%2BTI8cAy5qwirZupRzeT5yulu6oSC%2BY91bL0YU4a5zw%2FnNk53cN9B7I1MPuKjMoGOqUB4QElJN%2B5lwowZkdE%2Br8Dj2HiBB4c8fNRAHNEisEXqhyJMzpnyBGzIWN9MPZF8PHaRrpPm%2FRPZrHmjMfR7oV0ffmLf2fhUiWWqdF2PUFjctLOKia0ms58G5V5ztwnqqG6gH0g%2FZblP0cXP5pytDmK4z%2FWFuohUZc2AwofkBPqh911IVgKWlx%2Fvdb7QRu2gAyDtIvU4%2FusyjGeqrYt1%2FC2GNiTQ%2BHd&X-Amz-Signature=2e90aa2c394ad16f045b89371836ee612c25bf8f0bb798ee7dfe7e2d199b90bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

