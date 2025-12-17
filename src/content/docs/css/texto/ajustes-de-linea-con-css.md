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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PEWAXMV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF10JX6bsQr1ON75L5Ces66LyA9RWUwV5AklYkZxjq1eAiEA3f%2Fa%2BS0N%2BvmtAfWuVChkecuW5BVUMFns6wrUBUzbO94q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDERVX0VgWaF3l%2FfDpyrcA080StwEG400qZeyl18FFF9Os6XRlrGvYU6cm1mxIbVyMrEZa04Il23sDznpYJKpCkm%2BcXPtakwkYq9wIgsAOpA4j9ncC5IonpUS5eDpi8ucRvwRHrmHa0V%2B6bmBg1n80UV6FlfmVlguokMw7i3ifd%2FZksGl2itNAtAufczhZDi17TvylgkiYt33nOXjyA67Pyq%2BhCRdzAcBrLwFgSqav9BvU0KRY8YB4%2BIp5BBpXBB9tbEKPWPGWcC5DR3%2FfIL1YNT4Lxoxq5vToia4WpAeJjWPJ%2Bdw0nukqHiTj55HKrSvra12m0xayqsvmiw%2BEd4P6Kb%2BKrD5jn%2FmVS26MhdlubZL3ZWJOl5IHLwyhlrTtozXIXSqzo24UL%2FlsNSo1Sp9FlLB5Wdb939TXcS65atZyHBV2TGnt%2FukS%2B9lS8Ent9g9FlraoJ82H2ku2Lz6rTk9724wVA6R6ooIJPf7H26qyd%2FJAXvAXio33aYVTTO4tkpGVAxFxibqz7iRpHxfPlfw3xf9idz%2B0%2BnJ9p2faUY0sbl%2FqaWJWtfAs6MqV2Mq4qyftXGSfebNCPuSFZCvckNyAE1ACqyw0kSeUGPaP3a6eAqzAwU3MTtkr40aHLa%2BHi%2BlqTU%2FzMszark9r3fAMKmPisoGOqUBIDPqYKQwOwePftnSSJkqMLadaZw5qDLuyKKjtaG%2B8XCBpFdyq0lJ%2FITLtCd2%2BiMDdfXSeNLL07pSq9HlsDQi7WFJrJnY7gGPCs%2Fd9ZjD3jtEF75WY%2FVG7XYH7jjc%2BbvvfHiSpKvpU8F4fdCQY4PqG9fpI5L5bRRaumCaBr5dYHIMjrfge9JS5khjkLkuml6A25Z%2BkhHj70DxCEu9cLM16pYq3Lo3&X-Amz-Signature=315f26cc5534e0b06a92e3ee6b9f976c99ab0028b8c8a7a3f3acf9ad4d148187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PEWAXMV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF10JX6bsQr1ON75L5Ces66LyA9RWUwV5AklYkZxjq1eAiEA3f%2Fa%2BS0N%2BvmtAfWuVChkecuW5BVUMFns6wrUBUzbO94q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDERVX0VgWaF3l%2FfDpyrcA080StwEG400qZeyl18FFF9Os6XRlrGvYU6cm1mxIbVyMrEZa04Il23sDznpYJKpCkm%2BcXPtakwkYq9wIgsAOpA4j9ncC5IonpUS5eDpi8ucRvwRHrmHa0V%2B6bmBg1n80UV6FlfmVlguokMw7i3ifd%2FZksGl2itNAtAufczhZDi17TvylgkiYt33nOXjyA67Pyq%2BhCRdzAcBrLwFgSqav9BvU0KRY8YB4%2BIp5BBpXBB9tbEKPWPGWcC5DR3%2FfIL1YNT4Lxoxq5vToia4WpAeJjWPJ%2Bdw0nukqHiTj55HKrSvra12m0xayqsvmiw%2BEd4P6Kb%2BKrD5jn%2FmVS26MhdlubZL3ZWJOl5IHLwyhlrTtozXIXSqzo24UL%2FlsNSo1Sp9FlLB5Wdb939TXcS65atZyHBV2TGnt%2FukS%2B9lS8Ent9g9FlraoJ82H2ku2Lz6rTk9724wVA6R6ooIJPf7H26qyd%2FJAXvAXio33aYVTTO4tkpGVAxFxibqz7iRpHxfPlfw3xf9idz%2B0%2BnJ9p2faUY0sbl%2FqaWJWtfAs6MqV2Mq4qyftXGSfebNCPuSFZCvckNyAE1ACqyw0kSeUGPaP3a6eAqzAwU3MTtkr40aHLa%2BHi%2BlqTU%2FzMszark9r3fAMKmPisoGOqUBIDPqYKQwOwePftnSSJkqMLadaZw5qDLuyKKjtaG%2B8XCBpFdyq0lJ%2FITLtCd2%2BiMDdfXSeNLL07pSq9HlsDQi7WFJrJnY7gGPCs%2Fd9ZjD3jtEF75WY%2FVG7XYH7jjc%2BbvvfHiSpKvpU8F4fdCQY4PqG9fpI5L5bRRaumCaBr5dYHIMjrfge9JS5khjkLkuml6A25Z%2BkhHj70DxCEu9cLM16pYq3Lo3&X-Amz-Signature=007ccadd917f9a1022f656fd48db7182e09474b30e57aa559d63064154dd8f15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

