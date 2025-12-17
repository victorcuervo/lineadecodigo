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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664YHF56U%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA3McYYj6wIhBywD4kJdp8YyAVpcznaKUSsZpgfelLgAIhAMuH7oxxFwA27Yrqpcy6scmAMn09d3SScnMoGf4ttinhKv8DCHEQABoMNjM3NDIzMTgzODA1IgxcmhOzVI4UlWOkP0Aq3AP3dDPbwkTsoTPN6G%2BWNgEUm7dTtW%2Bes45XXVQicXtkYVDH95VWLoF0fphThgO0f%2ByR4jMsyrw%2F7xF2ZhgVX9fAWAziDvoI9EI0PGDtg1ChT6JVZHUH%2Fz6BUFn6vLGs3sV8ccdONaLg6MKCdRbscc2VaDYL9G97ucz2HM0AGsjDS0Sc5acUCDP7nXlwZ0NcWKssoNxBOf4o3Po9pxIlCuBpkYLcZsjLgKFpHfi0C0%2FnGUiBB%2BKwtDVAYhD4zb9RFJtJ20UnJEUQnuC7lzzwQtN24S5G14nxLddTkRI5t6OLO2YSuPi8x7SYUojcxxuWH4EcXvFzGmTgkbtUDSBcqhkMi5LrT2nIABjfWuTNZ7q91H%2BpDYXgtQZKZMnfGQHu67EJ6lVlL8dfkYdwsfGHsMzPp5OLqibLhDFXJVNorWysG%2BpNgUBCYYInzMgLBGp4lIj9KfLXra2xtfRs9nHmmwbDHsPBQ0fYN2w9x9uzXp55Tcf9GCpm%2BrbvSHZfJ1xY6mBF2bEaci%2B0zD2aWUuyEhbitJnTyCmF7Epui9liUVqon8%2BP%2BubzLLq6JoN1dbaf4XQqb0zQPXEGo35A8qKMXlDZwkZmWRrqvUDqvE7T2dDEb9AQV5yXzFSpixBv1TC%2B3ofKBjqkAafPl5ATJ0ceSxIOGBb6Ri3Jb9Ji4BTj1m4kzgAgEtk3xqSS4pvoAGL0hQW7EOarlnLOrpwiVuJAnRBjCXaXOFixy%2Be5nFTg%2BJGzebm2tdFTLXoVb5hvQKlOt6Of0BK3ADL1a4YJuTqv558xTsFPsiM36tGlsLe%2F5SwktEsfcYfMjfzp2dklvPrz3DXZSOAOFh61%2BbF%2FpFWR22dUNdoRy9EhshYz&X-Amz-Signature=0908c68f83538ca6119cff758f80c05758cad7b13cb4ccd05e8fd6bf70265493&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664YHF56U%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA3McYYj6wIhBywD4kJdp8YyAVpcznaKUSsZpgfelLgAIhAMuH7oxxFwA27Yrqpcy6scmAMn09d3SScnMoGf4ttinhKv8DCHEQABoMNjM3NDIzMTgzODA1IgxcmhOzVI4UlWOkP0Aq3AP3dDPbwkTsoTPN6G%2BWNgEUm7dTtW%2Bes45XXVQicXtkYVDH95VWLoF0fphThgO0f%2ByR4jMsyrw%2F7xF2ZhgVX9fAWAziDvoI9EI0PGDtg1ChT6JVZHUH%2Fz6BUFn6vLGs3sV8ccdONaLg6MKCdRbscc2VaDYL9G97ucz2HM0AGsjDS0Sc5acUCDP7nXlwZ0NcWKssoNxBOf4o3Po9pxIlCuBpkYLcZsjLgKFpHfi0C0%2FnGUiBB%2BKwtDVAYhD4zb9RFJtJ20UnJEUQnuC7lzzwQtN24S5G14nxLddTkRI5t6OLO2YSuPi8x7SYUojcxxuWH4EcXvFzGmTgkbtUDSBcqhkMi5LrT2nIABjfWuTNZ7q91H%2BpDYXgtQZKZMnfGQHu67EJ6lVlL8dfkYdwsfGHsMzPp5OLqibLhDFXJVNorWysG%2BpNgUBCYYInzMgLBGp4lIj9KfLXra2xtfRs9nHmmwbDHsPBQ0fYN2w9x9uzXp55Tcf9GCpm%2BrbvSHZfJ1xY6mBF2bEaci%2B0zD2aWUuyEhbitJnTyCmF7Epui9liUVqon8%2BP%2BubzLLq6JoN1dbaf4XQqb0zQPXEGo35A8qKMXlDZwkZmWRrqvUDqvE7T2dDEb9AQV5yXzFSpixBv1TC%2B3ofKBjqkAafPl5ATJ0ceSxIOGBb6Ri3Jb9Ji4BTj1m4kzgAgEtk3xqSS4pvoAGL0hQW7EOarlnLOrpwiVuJAnRBjCXaXOFixy%2Be5nFTg%2BJGzebm2tdFTLXoVb5hvQKlOt6Of0BK3ADL1a4YJuTqv558xTsFPsiM36tGlsLe%2F5SwktEsfcYfMjfzp2dklvPrz3DXZSOAOFh61%2BbF%2FpFWR22dUNdoRy9EhshYz&X-Amz-Signature=d6e6cfda13bd2b418a673298343ad45840a3fef7b45621823e3f7fbf24c66b51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

