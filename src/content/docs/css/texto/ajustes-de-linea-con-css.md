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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCXUQM2D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkQYFPJq5wBrAVxNhwtmxGV8mAkTAvUQlrr3%2FQT9mXvAIgXjOTQD4uSbWFeUmajcA55JMWD7i0wCsDdJ3%2FPyKbNxkq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDC%2Fc4AcJbtCzmRQK1SrcA6o7YvJqPpkShrshilCyaEt2ABQfQwmWvVwaUDL6VXfXhw5OH2Qs9NB2N4xoqSwz5W4ust7qrd9r7x5xgesR31lpF3WqgbQ3AnuvU7l9Gp8Yp5n14IelU2LFSBfU3x4dV8VRyAAGjEz9E1GW8%2Bdd%2BJsdDkJqsUx0JY1ZjIYwPGtlXp8xK83NdYnC96rBUyjiUyFFlSAWq4SPDLdByLTQY2uohKn84vYyfTUrrBoeAiu%2FCu1%2BTOerxNsTA0aSHo5PWwkbCBGo%2F7HRKURjgtVzEyrGaeLVHpAiuuaO2vofaiLc15VwIDanto00dWorhG1yCjtT7ohJ4eCAGCI7i2YBfoW19Nh4D3t2ltR6um6UIlvTpMU%2FP9NTp4Duus0qkJaqA4NzG35YAY1j%2FywUhNEeYkhYknVIcWa5j0gbt%2BaT9QZf6xrP%2F%2F2DHCrOHRrDf4CTTFu%2F1hIO0H8vyJsgBEu5uVAxYL0ANBwHsAAVzKdncOIHT3pGB2sdbCfrDRhQ5zvho8TN%2FnzHD1y8TIq1Lnt%2Boo2lxKfSlKb66rnLoXJam7jhmumtIdYevFKgrXBLyn%2BuR4Un2S1yO1EYU6e62RGtQvvsSz5rVsHQMd7fokQUgl8T3%2FP1VGWppK3585RCMLadicoGOqUBX7yVXtMXbPIOVUdjcJcJ2GJZK3tG5TiPQNyQeMHrW9m5Xt0UVqX4cOKoDD%2BS2NCWgw3cdLxQZyPCgRU%2BqVYd%2B82u7T7KW4tUZLruXv6zTSBksEiuw3a80OCwHW25D%2Bc8d7aOiiq%2Bb4NbmJ7LmL53t7BToVTD6iWJvvXoThLSF7P82KO1MFI%2FOUNGR5geQJB1HlXNewTjpEYjMy%2Bgpfm58nEQcA6I&X-Amz-Signature=6a494c93f660211dbeeb9871d227d0efe009c4fa1b6cf028cec7a83e4b4dc823&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCXUQM2D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkQYFPJq5wBrAVxNhwtmxGV8mAkTAvUQlrr3%2FQT9mXvAIgXjOTQD4uSbWFeUmajcA55JMWD7i0wCsDdJ3%2FPyKbNxkq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDC%2Fc4AcJbtCzmRQK1SrcA6o7YvJqPpkShrshilCyaEt2ABQfQwmWvVwaUDL6VXfXhw5OH2Qs9NB2N4xoqSwz5W4ust7qrd9r7x5xgesR31lpF3WqgbQ3AnuvU7l9Gp8Yp5n14IelU2LFSBfU3x4dV8VRyAAGjEz9E1GW8%2Bdd%2BJsdDkJqsUx0JY1ZjIYwPGtlXp8xK83NdYnC96rBUyjiUyFFlSAWq4SPDLdByLTQY2uohKn84vYyfTUrrBoeAiu%2FCu1%2BTOerxNsTA0aSHo5PWwkbCBGo%2F7HRKURjgtVzEyrGaeLVHpAiuuaO2vofaiLc15VwIDanto00dWorhG1yCjtT7ohJ4eCAGCI7i2YBfoW19Nh4D3t2ltR6um6UIlvTpMU%2FP9NTp4Duus0qkJaqA4NzG35YAY1j%2FywUhNEeYkhYknVIcWa5j0gbt%2BaT9QZf6xrP%2F%2F2DHCrOHRrDf4CTTFu%2F1hIO0H8vyJsgBEu5uVAxYL0ANBwHsAAVzKdncOIHT3pGB2sdbCfrDRhQ5zvho8TN%2FnzHD1y8TIq1Lnt%2Boo2lxKfSlKb66rnLoXJam7jhmumtIdYevFKgrXBLyn%2BuR4Un2S1yO1EYU6e62RGtQvvsSz5rVsHQMd7fokQUgl8T3%2FP1VGWppK3585RCMLadicoGOqUBX7yVXtMXbPIOVUdjcJcJ2GJZK3tG5TiPQNyQeMHrW9m5Xt0UVqX4cOKoDD%2BS2NCWgw3cdLxQZyPCgRU%2BqVYd%2B82u7T7KW4tUZLruXv6zTSBksEiuw3a80OCwHW25D%2Bc8d7aOiiq%2Bb4NbmJ7LmL53t7BToVTD6iWJvvXoThLSF7P82KO1MFI%2FOUNGR5geQJB1HlXNewTjpEYjMy%2Bgpfm58nEQcA6I&X-Amz-Signature=643e9396c521641fc9eb2642efe4a3939e8d799bd0591baa768e667615fd09f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

