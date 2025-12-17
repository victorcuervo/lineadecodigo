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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EPZU7EW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyHKvOcMQgxSp60Ch4lirzhTj6j1%2FZukx5vCie1SlyMAiEAyBB4fom1xgm%2By5kg%2Fhe866L%2BI0NEbQgGuLb6dhclyxYqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEE01WayB965kveZCCrcA2iIBiyWj0uAWbnfiFADajMSmgHJWoDjEWGUUel0VYOBaWwVgpjTeiS9SLJZ9pd14oRaVDRgE1aIB0uFM2KqRSW4a8j%2Fk%2F2w%2Bt4ikjzPWkUiGWlkwFBuMnTBfWbLXkd5UIsBvWRxDH7TJAuRoXBuxhVqtky9AB9FC3tgCq%2BM8Lkv1JPbYF4Xs9b6yEorEUMwL7sKwh4Abbyqa1qj8ft%2FbAYYsr0ZZQHnPSzZ%2FRMQMWwLBqYMpC7h7jn15C4fTQrEAQXMFrozMYjw7OCaIkZZKXu5XV6rGzK95JInaHrlenh4%2BUQm%2BOAIHIDu0EhSKFDsUL3Sy5Z7y47NJ1wuv8h4mlrm1PbDDjI1i3Zs3Bc59cuV%2B0Sm3vv%2FLGNikqQdCEUJJBp441hWAyT27aWds16xZPw3fNjAZ6Hs629JYhcKz%2BZlQoxj9X6FCnyrIRctrmr5av%2BUoWPwKP%2BjKKlVArJYalEf%2BGCOtdYS40RYD%2B751OMUm%2BkcLy%2BSRJdSPDdJr76laLF0eumwGpnX4CjHNlyAkjvxDJsEMgX%2BJ38ZrzA9SZxjpQq7cJ3hbAEcNhsuD%2FvtMwx0PKNpHarfMFc4yuXTQqGROYdwsOyZls61kOOuDxVoQhjPlqnANyWusdQeMNT%2FisoGOqUB%2BFV1oS4hIGLfa1Wr8Zuyq90IraPWu5MOXdA7BMqRSAvFDJEmmjP6YvdUMwrN4Yei4x8gOxutPRCHvaLNncUN5y8l848uvl%2B%2F1XJ1yRdWXcUV8WOLVmc8tnMbT1DTOsNm3q6ItOjlEtXtj98iDrwyfvZd8zeTa5Yc4k9y7P1TZ%2FBgJSTKtFvaZg4D6%2FNVmTeqcv2SbMlsYpC0nBhWs6r3anWSHHLV&X-Amz-Signature=a1218578d5023e52ece720c2cb044f523f46b68b390b1c22b8af28eebb6fffc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EPZU7EW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyHKvOcMQgxSp60Ch4lirzhTj6j1%2FZukx5vCie1SlyMAiEAyBB4fom1xgm%2By5kg%2Fhe866L%2BI0NEbQgGuLb6dhclyxYqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEE01WayB965kveZCCrcA2iIBiyWj0uAWbnfiFADajMSmgHJWoDjEWGUUel0VYOBaWwVgpjTeiS9SLJZ9pd14oRaVDRgE1aIB0uFM2KqRSW4a8j%2Fk%2F2w%2Bt4ikjzPWkUiGWlkwFBuMnTBfWbLXkd5UIsBvWRxDH7TJAuRoXBuxhVqtky9AB9FC3tgCq%2BM8Lkv1JPbYF4Xs9b6yEorEUMwL7sKwh4Abbyqa1qj8ft%2FbAYYsr0ZZQHnPSzZ%2FRMQMWwLBqYMpC7h7jn15C4fTQrEAQXMFrozMYjw7OCaIkZZKXu5XV6rGzK95JInaHrlenh4%2BUQm%2BOAIHIDu0EhSKFDsUL3Sy5Z7y47NJ1wuv8h4mlrm1PbDDjI1i3Zs3Bc59cuV%2B0Sm3vv%2FLGNikqQdCEUJJBp441hWAyT27aWds16xZPw3fNjAZ6Hs629JYhcKz%2BZlQoxj9X6FCnyrIRctrmr5av%2BUoWPwKP%2BjKKlVArJYalEf%2BGCOtdYS40RYD%2B751OMUm%2BkcLy%2BSRJdSPDdJr76laLF0eumwGpnX4CjHNlyAkjvxDJsEMgX%2BJ38ZrzA9SZxjpQq7cJ3hbAEcNhsuD%2FvtMwx0PKNpHarfMFc4yuXTQqGROYdwsOyZls61kOOuDxVoQhjPlqnANyWusdQeMNT%2FisoGOqUB%2BFV1oS4hIGLfa1Wr8Zuyq90IraPWu5MOXdA7BMqRSAvFDJEmmjP6YvdUMwrN4Yei4x8gOxutPRCHvaLNncUN5y8l848uvl%2B%2F1XJ1yRdWXcUV8WOLVmc8tnMbT1DTOsNm3q6ItOjlEtXtj98iDrwyfvZd8zeTa5Yc4k9y7P1TZ%2FBgJSTKtFvaZg4D6%2FNVmTeqcv2SbMlsYpC0nBhWs6r3anWSHHLV&X-Amz-Signature=6da38b2e4be23c74ce75abdce396db20cfeddede9ac4cf6b76f8d50a5cc10bc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

