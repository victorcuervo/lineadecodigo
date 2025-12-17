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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IS6XKWF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpdtawirh%2B8fujRsu2B%2BaMA9tADVxF8pPy8aBYw0fOxAiAzddkV5iS8oyUlMRGCR%2FbK5d%2B9u3PcgVOKp4EWeoi4jyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM9m1cj%2FKg9E%2F44%2BbqKtwDosr6Lh6hW4x9gJP2vMZ2XvNBiVxRbmi6TLv1sJPGtyjKP%2BNsqbuZVG4TvSCc68RtMociFWLR%2BmVbIxBAGuqu88I2x9Ss8YOtSQjNGvTSebSP0BfDuQEBtrzmq38FkvvrA2UoyGf1ckkzeYiFne9tuRpn%2BIhUWCKv%2BIXAachQXl99uGJHyLEnu6G0%2Fhs6zGM2O3MnJpQyjIBmwFhLeepQOJejyenV4lsJO3I1L1z5BrsEdXvpQD%2FFVKGiCNSBe0E2TPR5aKLbfPQzqDMrF8G74HvEqm%2BQgMYQysw9BbLIK2PyHF28j212%2FVM%2Fmn6b2RrNHJkfCz7CldUfaifSYLdr6zzDFCYMWgC3CrGJabJC1pJFEqhrJEef9RCMZB66b5ZorPV%2BMoSPrLGR%2B%2BcWILYFknCuhaWH%2BWw9gzXxfftbO9RqpljCC3CmH516klkn%2BB%2Ft5y3e3gC11Q%2BZfN%2BGbcbk5euV64M28vXY1TW1DLY8777gq4%2F0Qki5iX9Elchwdi0WkyAugU6nZtTu3vnkMT9RWIIRbwlcaEW%2FkX1pDdNM4BRuucJdiyhiJ7piDyPqX99QSkCaG7xHQq8C3GosFMrWL%2FFnXWsLwaM7BGSBo88RII1l5kG3xcGc%2Fb1UQC4w6p2JygY6pgGOnXQDHgw61MMTUjzLe8q5HKBfSs0oqKBHm%2BLCclR0%2Bf8atRRjBadQZS8CtVDW%2B5t8ZlUFfESvbn31MrrkxXt9JOL6Z2VfDo5%2FO2rZ7KZshv5WVYhMgHBYdv%2BRPwSIWxDW9ev%2B8UzjU74%2F%2F%2BaqQRzU%2FeBXpV8c5nY2TcSPe7vuJgyShgjIogDsQQzz4x5CkqCOHk3B8feKI0H%2FcdVsvX2UCUrqiltb&X-Amz-Signature=6b668b9e40c9653c18dd498d338113f4104c5a5465781067e54faeecda69692c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IS6XKWF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpdtawirh%2B8fujRsu2B%2BaMA9tADVxF8pPy8aBYw0fOxAiAzddkV5iS8oyUlMRGCR%2FbK5d%2B9u3PcgVOKp4EWeoi4jyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM9m1cj%2FKg9E%2F44%2BbqKtwDosr6Lh6hW4x9gJP2vMZ2XvNBiVxRbmi6TLv1sJPGtyjKP%2BNsqbuZVG4TvSCc68RtMociFWLR%2BmVbIxBAGuqu88I2x9Ss8YOtSQjNGvTSebSP0BfDuQEBtrzmq38FkvvrA2UoyGf1ckkzeYiFne9tuRpn%2BIhUWCKv%2BIXAachQXl99uGJHyLEnu6G0%2Fhs6zGM2O3MnJpQyjIBmwFhLeepQOJejyenV4lsJO3I1L1z5BrsEdXvpQD%2FFVKGiCNSBe0E2TPR5aKLbfPQzqDMrF8G74HvEqm%2BQgMYQysw9BbLIK2PyHF28j212%2FVM%2Fmn6b2RrNHJkfCz7CldUfaifSYLdr6zzDFCYMWgC3CrGJabJC1pJFEqhrJEef9RCMZB66b5ZorPV%2BMoSPrLGR%2B%2BcWILYFknCuhaWH%2BWw9gzXxfftbO9RqpljCC3CmH516klkn%2BB%2Ft5y3e3gC11Q%2BZfN%2BGbcbk5euV64M28vXY1TW1DLY8777gq4%2F0Qki5iX9Elchwdi0WkyAugU6nZtTu3vnkMT9RWIIRbwlcaEW%2FkX1pDdNM4BRuucJdiyhiJ7piDyPqX99QSkCaG7xHQq8C3GosFMrWL%2FFnXWsLwaM7BGSBo88RII1l5kG3xcGc%2Fb1UQC4w6p2JygY6pgGOnXQDHgw61MMTUjzLe8q5HKBfSs0oqKBHm%2BLCclR0%2Bf8atRRjBadQZS8CtVDW%2B5t8ZlUFfESvbn31MrrkxXt9JOL6Z2VfDo5%2FO2rZ7KZshv5WVYhMgHBYdv%2BRPwSIWxDW9ev%2B8UzjU74%2F%2F%2BaqQRzU%2FeBXpV8c5nY2TcSPe7vuJgyShgjIogDsQQzz4x5CkqCOHk3B8feKI0H%2FcdVsvX2UCUrqiltb&X-Amz-Signature=bff1e12b52eb77bdfebbb30a035be8df7c75daa6cc99cda8cc4aa6ed2bcfb462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

