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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2X6PX45%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T160150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5jtYDlwizKu4RKGZEuNwNpV58HynUyuilkqva4T4WHQIhAMPD975XrVX4mXugHJZWxtbONMwfzoukFrTRv%2BKv%2BB%2B%2BKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdkJBlMRQ2opDP4zAq3AO%2BG40V88N2vZKld4NL0sRxJhe8FTyF1uaSTpNHj4QiJU0CvIPM1%2FVDAHpJOjt2SvEQaxFdVYQ4mJ7D7GYQGDKPYT0JH7ICuOQpz82HIRQ9h%2FTi8G2kNh3%2FZzOp8d7BNhMTAWs6k1d3YP2HxcAUAHkTO2zNWakO3AZ4%2BvAd0qqggSQZWioWccQT%2BLrVFZ3l0dm9EwuuPc5FbvpnaieP7tbFuq1omad09o04mcBAoiajdt5p%2FfGIEZktBne8DUhCYjCrYYJ2PMOFRuzMfAW6FkRLhixp6oDIrNl825tbdBtm2RLLvHhxHjzV6CwFLoLhnDr1eOzQK%2B%2BMVV4U1ItPsqavwqZLM57dHjjuNuvsC5wvZlMmErNjAnhC6Y4nt2A1nwepNS8S7KPnwuCJVwBWuRg%2F3Rsc8QRUlVQg2uoPQueZwYvDHH65126hcgoNlDFIS7ZWW%2Bz8PNF41SdopXTOP3c7jcmnV2DgZVB%2Bct7sMPlBvuu9F3o%2F%2B3tlg5SfIOoHj4Ha7o5z6aFP677KGJCQiYdg49aM1kpLdUcXKjhHyOpyTqNmExu1hVLopAbUSyFfTctCLyiL7%2FNWAtVl%2B3DNUVObtdfvY48hRh49xf0YlATCfVtHT6fptD9pyWb6mzCZn4vKBjqkAS3dvJd4XX4hXKMeBp9t5MLQgALABKb%2FmAN0FkEOWRQou0o046RmuZ%2BIFlEcEMp8J4ugfgYxsmiR6zUmnccLxk27bCvISL1Bqhnqq5K31B%2FVhAFnGPbIbXFJllHMj%2FHso9W44WkMKxINpiTSLr0jDDVXYDdU2BHyGpKOQ3uuecpdQ3Wq%2B6ZXVE1z7fnC5KfrSAljmLUG%2BsU9gpScoVSd90blOcBB&X-Amz-Signature=281c4caf319138c000c670782fa4bef63a278f19754d8bc2250e6488812245e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2X6PX45%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T160150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5jtYDlwizKu4RKGZEuNwNpV58HynUyuilkqva4T4WHQIhAMPD975XrVX4mXugHJZWxtbONMwfzoukFrTRv%2BKv%2BB%2B%2BKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdkJBlMRQ2opDP4zAq3AO%2BG40V88N2vZKld4NL0sRxJhe8FTyF1uaSTpNHj4QiJU0CvIPM1%2FVDAHpJOjt2SvEQaxFdVYQ4mJ7D7GYQGDKPYT0JH7ICuOQpz82HIRQ9h%2FTi8G2kNh3%2FZzOp8d7BNhMTAWs6k1d3YP2HxcAUAHkTO2zNWakO3AZ4%2BvAd0qqggSQZWioWccQT%2BLrVFZ3l0dm9EwuuPc5FbvpnaieP7tbFuq1omad09o04mcBAoiajdt5p%2FfGIEZktBne8DUhCYjCrYYJ2PMOFRuzMfAW6FkRLhixp6oDIrNl825tbdBtm2RLLvHhxHjzV6CwFLoLhnDr1eOzQK%2B%2BMVV4U1ItPsqavwqZLM57dHjjuNuvsC5wvZlMmErNjAnhC6Y4nt2A1nwepNS8S7KPnwuCJVwBWuRg%2F3Rsc8QRUlVQg2uoPQueZwYvDHH65126hcgoNlDFIS7ZWW%2Bz8PNF41SdopXTOP3c7jcmnV2DgZVB%2Bct7sMPlBvuu9F3o%2F%2B3tlg5SfIOoHj4Ha7o5z6aFP677KGJCQiYdg49aM1kpLdUcXKjhHyOpyTqNmExu1hVLopAbUSyFfTctCLyiL7%2FNWAtVl%2B3DNUVObtdfvY48hRh49xf0YlATCfVtHT6fptD9pyWb6mzCZn4vKBjqkAS3dvJd4XX4hXKMeBp9t5MLQgALABKb%2FmAN0FkEOWRQou0o046RmuZ%2BIFlEcEMp8J4ugfgYxsmiR6zUmnccLxk27bCvISL1Bqhnqq5K31B%2FVhAFnGPbIbXFJllHMj%2FHso9W44WkMKxINpiTSLr0jDDVXYDdU2BHyGpKOQ3uuecpdQ3Wq%2B6ZXVE1z7fnC5KfrSAljmLUG%2BsU9gpScoVSd90blOcBB&X-Amz-Signature=c7e0e1fa489410b88bc706a7249b69f9271c99e7d87dc91a913b229b74a08a91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

