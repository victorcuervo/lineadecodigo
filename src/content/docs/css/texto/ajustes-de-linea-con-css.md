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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGIU63L4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCClbGKC4EN18GvkOseIG5yF3PRBElpLVdd9jOE36ySxwIgJdeivglK8fP7yfaT0ujdwCpNk8I%2B7zbWYvedvwn0HOUq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDCKr4c9gIRVniZUqISrcA4lAcybVXzFAl%2F87DpMh17O%2F2Ht14zTDviPR4ZrqXCxlewxLgD4snPUpDV8Lefx%2FNZ%2B0EySHWWkNpblz08Wf0i9W1FmOczPijvXhXPe6C%2FtMtAwI72vJW9lkc1TS5lNW8D%2B8SWp1MpqR8OLE2ibR1OOrYCt9%2FZ1OC0xFgkzHxchbiO5GX6sy67gJN5uW1AW2Juv72nfbA6ZeS8m29BG5sfUy449v49orl92uWxxvHF5E5KYf9kRJqNyZjX%2B2oip%2Fir33YO%2Fzs%2F1rsLTzuwWGTLpPDS5M0aSd8lMrxXxP1eel3hyhtCHsEDxi1vhfukxNPgIpaeB0DhDRz5aFElXy19P6KqoRY7m%2FfWZ71zbkdqBuuCIBp8IsvsyskY0JfOLfJ4GuC5uPKW%2F79okoQOQpD6PadPt1L7WKdkslG308QGBGTI1DQuiqHsVrH2BUstNQ5Rtx2nD7%2FikXqs3MbaTmzwEQwOQoEu1XwepoOs1wo1eHbG1jPeXoeySLAex58c4xBwlDNXcFFGEKsT6%2B3SatTaAOwosbrcrCS98dC5KLTgdxAl3lFb91fEMoCKIyp8H%2B4C1fKukDphiUAOp1NctKyBiWibgS8hxHcD%2Fzq8MhxbUOmGjG%2BXzUIAUqYm7wMLKDicoGOqUBTfq9NdACceQRz3iFKCxNa7UQ61xGVuL0G4CdNyaNPhXg0DLxx0SHPyNJ1CyrU%2Fiktz%2BbO3CcUnmPOs2aXsguLiXJRUP6KJ8V8JuDyIYx7kAA%2Fr1tg0ABPRbIoAJX5BC6lU8vgJU4aS%2BOIJVg4Z031%2BKtek0onDlUeciHURwE0nwDLA1t4fNJ9wG6Lh7a7ihmOKXFKrk8koJP7zZfc7UyIXEJ0r44&X-Amz-Signature=e059cbc51108749123de23f7c83dded426e8e7e47d0bb6efe5e88513352aba80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGIU63L4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCClbGKC4EN18GvkOseIG5yF3PRBElpLVdd9jOE36ySxwIgJdeivglK8fP7yfaT0ujdwCpNk8I%2B7zbWYvedvwn0HOUq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDCKr4c9gIRVniZUqISrcA4lAcybVXzFAl%2F87DpMh17O%2F2Ht14zTDviPR4ZrqXCxlewxLgD4snPUpDV8Lefx%2FNZ%2B0EySHWWkNpblz08Wf0i9W1FmOczPijvXhXPe6C%2FtMtAwI72vJW9lkc1TS5lNW8D%2B8SWp1MpqR8OLE2ibR1OOrYCt9%2FZ1OC0xFgkzHxchbiO5GX6sy67gJN5uW1AW2Juv72nfbA6ZeS8m29BG5sfUy449v49orl92uWxxvHF5E5KYf9kRJqNyZjX%2B2oip%2Fir33YO%2Fzs%2F1rsLTzuwWGTLpPDS5M0aSd8lMrxXxP1eel3hyhtCHsEDxi1vhfukxNPgIpaeB0DhDRz5aFElXy19P6KqoRY7m%2FfWZ71zbkdqBuuCIBp8IsvsyskY0JfOLfJ4GuC5uPKW%2F79okoQOQpD6PadPt1L7WKdkslG308QGBGTI1DQuiqHsVrH2BUstNQ5Rtx2nD7%2FikXqs3MbaTmzwEQwOQoEu1XwepoOs1wo1eHbG1jPeXoeySLAex58c4xBwlDNXcFFGEKsT6%2B3SatTaAOwosbrcrCS98dC5KLTgdxAl3lFb91fEMoCKIyp8H%2B4C1fKukDphiUAOp1NctKyBiWibgS8hxHcD%2Fzq8MhxbUOmGjG%2BXzUIAUqYm7wMLKDicoGOqUBTfq9NdACceQRz3iFKCxNa7UQ61xGVuL0G4CdNyaNPhXg0DLxx0SHPyNJ1CyrU%2Fiktz%2BbO3CcUnmPOs2aXsguLiXJRUP6KJ8V8JuDyIYx7kAA%2Fr1tg0ABPRbIoAJX5BC6lU8vgJU4aS%2BOIJVg4Z031%2BKtek0onDlUeciHURwE0nwDLA1t4fNJ9wG6Lh7a7ihmOKXFKrk8koJP7zZfc7UyIXEJ0r44&X-Amz-Signature=0303c39fd04e80ed8c176133cc6475c8df5dae86d75ae986c2fdec52d1d98be0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

