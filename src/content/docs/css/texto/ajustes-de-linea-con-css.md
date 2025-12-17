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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CSFTN2B%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJ1NJq4MRI61OewHDZ%2BGM34gN0HWQNvz3imCJCBAU7%2FAiAtHebBoMnt%2F6Nj9rNvoB16DfNhnpbFQlLo0FLvaorAHiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNIsnkrdJNgMbtLDjKtwDzvi9UYWBUfpV7CTrk43BYdNz4U2Hfa2TfRABCyX8kpKe5QW%2FJ5APfJXtdctHrYy6D5F8nVRdT%2FVwDX7MICftnjkWaOHTnmWvmtl3KvgbS98Wyl%2FEU4tXNllcKcsB4rG8phF%2BWovZ%2Fe7GaxUuyGw1rQ1bIg3meyE0TGqeHyTXdSkIczt3nwD8QZ%2BxGXuzwUxDDwY%2FVkDDMSP4OGM6yPjO70gjzUt7T%2FLgt3mO%2BMZD%2FY0dzO6AZi7zNADxUNYP5WLryd089EYWKPMQgJjY%2FG4pAhIpQukxK%2F%2FhWw7JZUTNiH8Jq%2BnHnIEJyO8ZI8TGCYjcAHQENsSS8Xw6CcFxA%2BNcrxKrHKg71aUienwjcikn4S6qAaREkZuqgXro6vcIl3VUVJZE79oOTX4gVljLmALiwflaLPGH3v5AC1oSU1rZIpiJ2CqAsmw0aLJ54ez99Thqwuw8coGAfmPQTr9vr4IF1Os1PM2qwaI1IhATBU3fPGQ5CMen%2FFaXIqRdBe4Kqdppu2dwGC5ds4jHmsU%2BnmFk6NJGm692ERIvCX5GlfrjUp3iFeVeKduRZrXD1e8Q0sW5wMd%2FY4sI%2BljPO1INP90AOfgMHnwu2JydJUlmp8hr0D4vdqRlbO7WE14Htm8wvZ%2BLygY6pgGKQRcrQfMOr%2BF2Mow9BOq7ekkRdX1dWIkQPWtKHx2K9E9lhLsSgZXBXP5CKDLn%2FUqvn6ihZSNH2EarIL6lVrCROath9ZVaMjNPTmMZSmrF0HbeB0Bp%2FXS87bF4cBc4hLWqIBQ3C5yCcr2dHriL%2FnlY5z8krtIVYXDMZ%2FI1kkmsgbHQGjlXeJZJb9gB%2FqFDBu3ECNYxqEJTLBkIZyucmn64WVd3PHk3&X-Amz-Signature=37d3aff6e6f04513e6d78344e3ee061c233bdcec19171bde2894745e4e14a2bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CSFTN2B%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJ1NJq4MRI61OewHDZ%2BGM34gN0HWQNvz3imCJCBAU7%2FAiAtHebBoMnt%2F6Nj9rNvoB16DfNhnpbFQlLo0FLvaorAHiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNIsnkrdJNgMbtLDjKtwDzvi9UYWBUfpV7CTrk43BYdNz4U2Hfa2TfRABCyX8kpKe5QW%2FJ5APfJXtdctHrYy6D5F8nVRdT%2FVwDX7MICftnjkWaOHTnmWvmtl3KvgbS98Wyl%2FEU4tXNllcKcsB4rG8phF%2BWovZ%2Fe7GaxUuyGw1rQ1bIg3meyE0TGqeHyTXdSkIczt3nwD8QZ%2BxGXuzwUxDDwY%2FVkDDMSP4OGM6yPjO70gjzUt7T%2FLgt3mO%2BMZD%2FY0dzO6AZi7zNADxUNYP5WLryd089EYWKPMQgJjY%2FG4pAhIpQukxK%2F%2FhWw7JZUTNiH8Jq%2BnHnIEJyO8ZI8TGCYjcAHQENsSS8Xw6CcFxA%2BNcrxKrHKg71aUienwjcikn4S6qAaREkZuqgXro6vcIl3VUVJZE79oOTX4gVljLmALiwflaLPGH3v5AC1oSU1rZIpiJ2CqAsmw0aLJ54ez99Thqwuw8coGAfmPQTr9vr4IF1Os1PM2qwaI1IhATBU3fPGQ5CMen%2FFaXIqRdBe4Kqdppu2dwGC5ds4jHmsU%2BnmFk6NJGm692ERIvCX5GlfrjUp3iFeVeKduRZrXD1e8Q0sW5wMd%2FY4sI%2BljPO1INP90AOfgMHnwu2JydJUlmp8hr0D4vdqRlbO7WE14Htm8wvZ%2BLygY6pgGKQRcrQfMOr%2BF2Mow9BOq7ekkRdX1dWIkQPWtKHx2K9E9lhLsSgZXBXP5CKDLn%2FUqvn6ihZSNH2EarIL6lVrCROath9ZVaMjNPTmMZSmrF0HbeB0Bp%2FXS87bF4cBc4hLWqIBQ3C5yCcr2dHriL%2FnlY5z8krtIVYXDMZ%2FI1kkmsgbHQGjlXeJZJb9gB%2FqFDBu3ECNYxqEJTLBkIZyucmn64WVd3PHk3&X-Amz-Signature=26bf290d2bc1b190d70e77bf16a465a64a20dcfb297717abcbf1fde12a020899&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

