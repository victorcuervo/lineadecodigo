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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653ZOVPT3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDEwoMYZkGn5sO6R1qeZB66ynARD4TbTx7ByjZ3AAiKwIgeMXmDv%2Ff7WLYQieEwjqwDvJv0AvajCHl7BPxKQgJDYIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxPbVX%2F72sJMvDVLircAw8C1uY5a8E%2FsEcmiWsHMjSjUnQvnULvf2Uu3CLJyBVTKBtfhAZ4rmLS3fuCTaFF7YO3IPXbk8%2BCrE22VPvePATflLoys8vM6gcYxN9oBZbCnfYngRwFIMsbYsHiHiHyfKHwA0SbeETTp8zF0F74KP0GJDJx7Rh%2FWSQRtqTiv8UQJHcTAwjouGWj7jDutj8IWxcF4psF6Q2%2BBktIJS5fyLP4BC%2FTnLGer77jyFEdXTowPt8ghRBm84%2FM6a7prwxoDYykyagu%2FtmCryM%2F05ILtIsTUCPT57yux%2B9zRxLN1MXwoFQqPsRx7dtep6ibQmJGxdKoNVmPixezJmz02Fv0tTtf4PiJ30OL7ueQKPr8%2BexmNG%2F%2BRJLPjIvzI0QdEIyAZ3tDBvQiZesb4IrpdDM3A0YHxaYLTv7RDU2fECUE1M5UCRSTGIH9zNnNrLppCLaKt%2Fy%2FyOrfIRCcUBQwOkpxQzeVgB9LI%2F5lpfVzEkXCfcmWeZSHpY7pHI11WuNdN2PvhIdDcw%2FhiuWXzEBPnenRxLevn1%2Bck4%2BWKEdr4xH5OuDpCHV7z1Rp28mqxRaCZITnmklznrwxnUOsqgCcWd%2BXSJ7v%2Fe1hBeV1Eo4NCY9zvV%2BG48EhOwn0WLbGZYfUMKegi8oGOqUBmqJCmyNSocKiw5D3P3pogUehpVrLMsTJhVXA6tdry2pSWnAuYz7EMjNWWljTUomM8bcm4Csgyr5upusL7n8hjxNc9z1SXtJmNb0%2B6p9rLIS5HFQco5xNTZZ8SodKeHEFmA69sGZMNPQDDBKqheyZRkLEAZQ%2BTh%2B75ijB1%2BHlXwFRc%2Fb2ZLpzsIx5fvOTq7mKcB0E3D4gwLHvrw0tMIgSlbcXpgvg&X-Amz-Signature=b49315e43a660cdf83dc751e5872b61a376bb93ace9734fd64f4bdf7f477259b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653ZOVPT3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDEwoMYZkGn5sO6R1qeZB66ynARD4TbTx7ByjZ3AAiKwIgeMXmDv%2Ff7WLYQieEwjqwDvJv0AvajCHl7BPxKQgJDYIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxPbVX%2F72sJMvDVLircAw8C1uY5a8E%2FsEcmiWsHMjSjUnQvnULvf2Uu3CLJyBVTKBtfhAZ4rmLS3fuCTaFF7YO3IPXbk8%2BCrE22VPvePATflLoys8vM6gcYxN9oBZbCnfYngRwFIMsbYsHiHiHyfKHwA0SbeETTp8zF0F74KP0GJDJx7Rh%2FWSQRtqTiv8UQJHcTAwjouGWj7jDutj8IWxcF4psF6Q2%2BBktIJS5fyLP4BC%2FTnLGer77jyFEdXTowPt8ghRBm84%2FM6a7prwxoDYykyagu%2FtmCryM%2F05ILtIsTUCPT57yux%2B9zRxLN1MXwoFQqPsRx7dtep6ibQmJGxdKoNVmPixezJmz02Fv0tTtf4PiJ30OL7ueQKPr8%2BexmNG%2F%2BRJLPjIvzI0QdEIyAZ3tDBvQiZesb4IrpdDM3A0YHxaYLTv7RDU2fECUE1M5UCRSTGIH9zNnNrLppCLaKt%2Fy%2FyOrfIRCcUBQwOkpxQzeVgB9LI%2F5lpfVzEkXCfcmWeZSHpY7pHI11WuNdN2PvhIdDcw%2FhiuWXzEBPnenRxLevn1%2Bck4%2BWKEdr4xH5OuDpCHV7z1Rp28mqxRaCZITnmklznrwxnUOsqgCcWd%2BXSJ7v%2Fe1hBeV1Eo4NCY9zvV%2BG48EhOwn0WLbGZYfUMKegi8oGOqUBmqJCmyNSocKiw5D3P3pogUehpVrLMsTJhVXA6tdry2pSWnAuYz7EMjNWWljTUomM8bcm4Csgyr5upusL7n8hjxNc9z1SXtJmNb0%2B6p9rLIS5HFQco5xNTZZ8SodKeHEFmA69sGZMNPQDDBKqheyZRkLEAZQ%2BTh%2B75ijB1%2BHlXwFRc%2Fb2ZLpzsIx5fvOTq7mKcB0E3D4gwLHvrw0tMIgSlbcXpgvg&X-Amz-Signature=311cdd42afeef6994e6ee9e43361c398ce9e350d1b04bae0b1cab62cbb21c4cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

