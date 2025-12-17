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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAFJB6GC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmzFI6Cp9KQ6JUcwQ3laXpTQsZIGAhDJkyZw51vaXt3AiA4HbqYEAkGygI9cTEnjDzYOKbI6Dniu%2Foj9i8RKfiIriqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDPDPH244ONX7kxczKtwDsCidw6JFKiJM7JPsY7wjd9RW%2BLrSh0VbqsZI79bFl%2F1W%2B1pHC7DV9XlzqqyXt8FRRTcLZ3fkM33ys3ajFIgEoM7gcz1Mmv37fXB5BxCT7StIMu0%2Bdr6hmS9C4jha5%2BSMxq2498lzD246AW3T8MiE3%2FELd5XhPy1KNZqfkSq0QtDk%2FkG3qVMiYtpFUvLkRqkerLL5cRzfxhaI2q0RC7%2FOwAVTlYovhqm9L3M0PqBdBSdQMv3n3mkfUdlja824BvF1iqKEwRKlRKec4HOyvF2g4aVIAV5boN%2FAfVNZs%2BG2TOMKmEPymGdWZVqd72re3pajXu1VpajdV5zhkPiAiFENtFSnSBx9D4x9miKJyK%2FcQ57eyw86RjDq63KNx8wprWPewFpBO91TUced8I06iPitYo8MrSvXmKZmlVGneE82iP1hUDqSm87jdyBUqQYv3mj0XThpOLZaKyArkjIDNHCB4sBjrMNM2%2Bwz3i9LWoZHnTMouZZwXDlSU2AJVxPBY%2BIbqLW5uXL3gLgMFZFDZhaoMvFQunBXwtqDtmVei9g8wumzK1FxXlyBuv3O%2FI%2FOqwYEQ4gDJQl416zwZHSXIjge4gNyN7HnkTEi1ic17PrrThr0pAv%2B7HyCKC7Hz6Aw0p6LygY6pgGDyQZAAWQiNvO20SN1okFYyKlXmUlVz3YpgxfxoQN9%2B3lWqY0sl2PkjjvacTakeGLx5RXdmFhuF9Ej7pIrvhWwpsumXGaTVWMhDtaGLzoA3xfugusnLPM7yYkAPFmbjbyo75kj5knMwycjN3IlJz9Q8J%2BDKPIWg8vEOH79BkGsFpfgjY%2FirAz6RuYMomy8lljKOQ%2BTuVfrO7%2BPjiSo1XWGVIuw3YTo&X-Amz-Signature=fe3de337921859cd1fd184ab0824d0ef0670e104ce61c1dfecfd1267f4fb1240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAFJB6GC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmzFI6Cp9KQ6JUcwQ3laXpTQsZIGAhDJkyZw51vaXt3AiA4HbqYEAkGygI9cTEnjDzYOKbI6Dniu%2Foj9i8RKfiIriqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDPDPH244ONX7kxczKtwDsCidw6JFKiJM7JPsY7wjd9RW%2BLrSh0VbqsZI79bFl%2F1W%2B1pHC7DV9XlzqqyXt8FRRTcLZ3fkM33ys3ajFIgEoM7gcz1Mmv37fXB5BxCT7StIMu0%2Bdr6hmS9C4jha5%2BSMxq2498lzD246AW3T8MiE3%2FELd5XhPy1KNZqfkSq0QtDk%2FkG3qVMiYtpFUvLkRqkerLL5cRzfxhaI2q0RC7%2FOwAVTlYovhqm9L3M0PqBdBSdQMv3n3mkfUdlja824BvF1iqKEwRKlRKec4HOyvF2g4aVIAV5boN%2FAfVNZs%2BG2TOMKmEPymGdWZVqd72re3pajXu1VpajdV5zhkPiAiFENtFSnSBx9D4x9miKJyK%2FcQ57eyw86RjDq63KNx8wprWPewFpBO91TUced8I06iPitYo8MrSvXmKZmlVGneE82iP1hUDqSm87jdyBUqQYv3mj0XThpOLZaKyArkjIDNHCB4sBjrMNM2%2Bwz3i9LWoZHnTMouZZwXDlSU2AJVxPBY%2BIbqLW5uXL3gLgMFZFDZhaoMvFQunBXwtqDtmVei9g8wumzK1FxXlyBuv3O%2FI%2FOqwYEQ4gDJQl416zwZHSXIjge4gNyN7HnkTEi1ic17PrrThr0pAv%2B7HyCKC7Hz6Aw0p6LygY6pgGDyQZAAWQiNvO20SN1okFYyKlXmUlVz3YpgxfxoQN9%2B3lWqY0sl2PkjjvacTakeGLx5RXdmFhuF9Ej7pIrvhWwpsumXGaTVWMhDtaGLzoA3xfugusnLPM7yYkAPFmbjbyo75kj5knMwycjN3IlJz9Q8J%2BDKPIWg8vEOH79BkGsFpfgjY%2FirAz6RuYMomy8lljKOQ%2BTuVfrO7%2BPjiSo1XWGVIuw3YTo&X-Amz-Signature=dcfa9f66b62038a6241be73477521af15fca4908b64608cc1885206f1d24566c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

