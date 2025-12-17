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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNIKW2DB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVo52OW5tHuasYATOGu2Fg2x%2FXEpF7bYCB3oS2qYlSywIhAKB%2Buw%2BIRRGZab9ZkovPNAlzo3tAaRcVLf%2F9MRbf8j3yKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz62Yz7z55j0%2Bu2ROAq3ANsTvTaDm7%2FkoOR8Vl3AsvDnGaiKEYMXbmOvmvm7k95iUTm3bFnr6xjvBeICzRN9dTx9jiHLuV0B0D6tB1Afwj2yxVBrvnGr6NUiokAvtxekrUeBPE3LSTAIIxVgxGHHNpNgjpKfvtcM3ieN%2B5U5%2B0wnrc5%2BW%2BlBa2Qo%2BBhiZVt%2F7kuAs4DDsgiOBYb7MPLjbGtmDuViXsek6WerxmfcWCYWUzcJoi1otvbmoKxkMwo4d5U8VsaYO92ShU%2B61OL2LRL0QnMRkh02Jlr5XhoAkFAsg99h0LRRTpIripht85ADWf8kjpavLpVdCeO6tCj3x2m9zQiojdTDMDToNPAJoyFXKr4%2B6%2BbU6W5MZ6u5dQeMGmD%2BwI8fPvZx8moEvBkfpGYBImgDc9IZMfDF%2BS9x2WqK7g6Sys2o2UIJs9q04r7pSYZIPRIzb2QDlADUJTiOh%2BejU11%2B7ezkwFbuThZdPNbOc8vbQY3PkO3XNisJHfz1E6gNruIAZw%2FWP5YOxLI5xTCuMg4ZASCT9hRfNGYsd0VvU5LMUm9hx0x2FzuB08DGRWipxvU1sjqHFFOq%2BQQscvE0CptBJSD8ayBoYS0zRvuIkHVUHh1uGRsJKbpzP2ZosS1an2hSzApWxOdfDDYrozKBjqkAWQ2dmxbVB3Hb5wFrl8oiG4Vd6nfB8q6z2eJbsscq%2BCVXTqgGLxt%2BwDz4WnIv%2FLjvhhX%2FKMWiZ4k56wnEuWv0yjbUBztOHKrANVTPRxGfALqxsQf22%2Bl3AnI9%2B8RTvRRK5QZgrFfVIAqWy%2FGSslRh2of2%2Fl3%2FvbezjzFhB92zElk3u%2Bo7cJ3n1j6eQjE3wfZfegcgP0%2B9ITjsXWoit%2FAMEndJr58&X-Amz-Signature=4a127ddf0ac75766602cd61551ad8c7bf170e4671d1dd384e9f2bb97556af50a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNIKW2DB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVo52OW5tHuasYATOGu2Fg2x%2FXEpF7bYCB3oS2qYlSywIhAKB%2Buw%2BIRRGZab9ZkovPNAlzo3tAaRcVLf%2F9MRbf8j3yKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz62Yz7z55j0%2Bu2ROAq3ANsTvTaDm7%2FkoOR8Vl3AsvDnGaiKEYMXbmOvmvm7k95iUTm3bFnr6xjvBeICzRN9dTx9jiHLuV0B0D6tB1Afwj2yxVBrvnGr6NUiokAvtxekrUeBPE3LSTAIIxVgxGHHNpNgjpKfvtcM3ieN%2B5U5%2B0wnrc5%2BW%2BlBa2Qo%2BBhiZVt%2F7kuAs4DDsgiOBYb7MPLjbGtmDuViXsek6WerxmfcWCYWUzcJoi1otvbmoKxkMwo4d5U8VsaYO92ShU%2B61OL2LRL0QnMRkh02Jlr5XhoAkFAsg99h0LRRTpIripht85ADWf8kjpavLpVdCeO6tCj3x2m9zQiojdTDMDToNPAJoyFXKr4%2B6%2BbU6W5MZ6u5dQeMGmD%2BwI8fPvZx8moEvBkfpGYBImgDc9IZMfDF%2BS9x2WqK7g6Sys2o2UIJs9q04r7pSYZIPRIzb2QDlADUJTiOh%2BejU11%2B7ezkwFbuThZdPNbOc8vbQY3PkO3XNisJHfz1E6gNruIAZw%2FWP5YOxLI5xTCuMg4ZASCT9hRfNGYsd0VvU5LMUm9hx0x2FzuB08DGRWipxvU1sjqHFFOq%2BQQscvE0CptBJSD8ayBoYS0zRvuIkHVUHh1uGRsJKbpzP2ZosS1an2hSzApWxOdfDDYrozKBjqkAWQ2dmxbVB3Hb5wFrl8oiG4Vd6nfB8q6z2eJbsscq%2BCVXTqgGLxt%2BwDz4WnIv%2FLjvhhX%2FKMWiZ4k56wnEuWv0yjbUBztOHKrANVTPRxGfALqxsQf22%2Bl3AnI9%2B8RTvRRK5QZgrFfVIAqWy%2FGSslRh2of2%2Fl3%2FvbezjzFhB92zElk3u%2Bo7cJ3n1j6eQjE3wfZfegcgP0%2B9ITjsXWoit%2FAMEndJr58&X-Amz-Signature=392786820c3185f922308df4db2cdd026ddfdb319626e5410c33a61c5b380545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

