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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNVCOMEG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9nPAc6IuQSD51EMfGlPVlhtb1Kao%2BaBr0ASnhmuBzWQIgZdCO8DeB2%2BbUWaA%2BW6g00j%2FfQrzQgJE%2BAm53S%2BA4WIEq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIq7mEKxz604ZuyvgSrcA8mTT0UdHNmGFeohcFqvK1mmOf%2BdOJQJ3nEbwCVulS%2FShv7%2Fm%2FGiuGz0Jx4WRCMcJ9GQxUGXSmlrj8Q7cLIJHCGsEVXU244yoAD3hHzXP%2FgpTfr4SSdEB6PaNWz%2F1nHsM%2Fn3NE04w5kGS3zHXv5r5SYFFTVLSVyctJCy2KnmTA6dedglPdpgbIFuzMxjMSn%2BkbKX%2Bjx3NJEHygdkpaHU%2Fccg1mHdZYnabT%2Fqe2ajHd%2F8K6hzj1upX1TXgq6YqsR%2FOGqYJxm%2FIw%2B3cot%2BtOT%2FeblGuv1rksPdHOCkcU6NhhDynWKeh9zIlJZMGZ9qAfVqJ0b0FiNq4pi0SU0oInAexSklJhETCk6ABCFm26bdscGFFu4VWXV%2FT2q2zOJJMfkC5CUVjaIwWQsxkcwvo%2Fy6k5Fa5HCHWWB8nyCqt3MMnMDN2EHfhxqBmGuptKriylaSXHNkMS9I4nMplw0PKD0NoHHyo5%2FU8WIkPkDtqYjxvIwpcH2VPV%2BP0Bkv66yCdiIS0Ggw2c4cH3%2BiECocHRjaePeQRRKvni3w5MDfAqNgZnsc1NXOBm68mlIn8x9CL0VrXIj%2BWICo59B2x5%2BfQux0wJQXsbkNUTgQ%2BEBC5PLBUqlv0rkkmGVAdBv%2BpmY%2FMJG4icoGOqUBKX1lb9v9fiSWhQhxEeTR7KfokZoumpfTYPBHpnMRnho%2FeFmK35WEfDSfxBM35R4HZV%2BCfgM0wCsrjm25ZENsAYf4dxWNdiv2MaysN9bJdObhw1Z0pqO8FbAYEAIbn9wf9J%2Bv91wg%2BeX704oRYVqrrAkmSUuQGITGokfSVbhDSexM8TrxMKG9de5CN3%2FfbAxnJGaNoWnZWeb2UVYKgDnINriRjI%2FT&X-Amz-Signature=1ce09625ef81b42e81f66b14b7b90124d712d68ef7f8f1f8af1e4c8fa3b3b6a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNVCOMEG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9nPAc6IuQSD51EMfGlPVlhtb1Kao%2BaBr0ASnhmuBzWQIgZdCO8DeB2%2BbUWaA%2BW6g00j%2FfQrzQgJE%2BAm53S%2BA4WIEq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIq7mEKxz604ZuyvgSrcA8mTT0UdHNmGFeohcFqvK1mmOf%2BdOJQJ3nEbwCVulS%2FShv7%2Fm%2FGiuGz0Jx4WRCMcJ9GQxUGXSmlrj8Q7cLIJHCGsEVXU244yoAD3hHzXP%2FgpTfr4SSdEB6PaNWz%2F1nHsM%2Fn3NE04w5kGS3zHXv5r5SYFFTVLSVyctJCy2KnmTA6dedglPdpgbIFuzMxjMSn%2BkbKX%2Bjx3NJEHygdkpaHU%2Fccg1mHdZYnabT%2Fqe2ajHd%2F8K6hzj1upX1TXgq6YqsR%2FOGqYJxm%2FIw%2B3cot%2BtOT%2FeblGuv1rksPdHOCkcU6NhhDynWKeh9zIlJZMGZ9qAfVqJ0b0FiNq4pi0SU0oInAexSklJhETCk6ABCFm26bdscGFFu4VWXV%2FT2q2zOJJMfkC5CUVjaIwWQsxkcwvo%2Fy6k5Fa5HCHWWB8nyCqt3MMnMDN2EHfhxqBmGuptKriylaSXHNkMS9I4nMplw0PKD0NoHHyo5%2FU8WIkPkDtqYjxvIwpcH2VPV%2BP0Bkv66yCdiIS0Ggw2c4cH3%2BiECocHRjaePeQRRKvni3w5MDfAqNgZnsc1NXOBm68mlIn8x9CL0VrXIj%2BWICo59B2x5%2BfQux0wJQXsbkNUTgQ%2BEBC5PLBUqlv0rkkmGVAdBv%2BpmY%2FMJG4icoGOqUBKX1lb9v9fiSWhQhxEeTR7KfokZoumpfTYPBHpnMRnho%2FeFmK35WEfDSfxBM35R4HZV%2BCfgM0wCsrjm25ZENsAYf4dxWNdiv2MaysN9bJdObhw1Z0pqO8FbAYEAIbn9wf9J%2Bv91wg%2BeX704oRYVqrrAkmSUuQGITGokfSVbhDSexM8TrxMKG9de5CN3%2FfbAxnJGaNoWnZWeb2UVYKgDnINriRjI%2FT&X-Amz-Signature=91067478340bae1d9f8085014968a6b0acd7638747d96ba74572f1fab1af8b56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

