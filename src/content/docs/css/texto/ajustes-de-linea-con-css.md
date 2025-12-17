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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEGF6NRQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB0uLu1dchYhUwpaSrso6ndroHYPHURcuYQmIJY0fF2AIhAJbPU2r6s9HwsB5oyrsmObmA6VBhcCx1jpeEJPPdtQVeKv8DCH4QABoMNjM3NDIzMTgzODA1Igz4e6LArEDTVUe9mzQq3AMd%2BECuxq5FlURrH7XLSnpEY9ndKY76hq00bf%2FfnJXYhIXBgYHEFg%2FeEDiQcybiGtjX6RKxVWau7M50lDHoJsxf2qv96qknXHFS%2B1evLEk94Dv2qANXY7V8OpWBaDO8FHPZu1FgbrOnFSUMtt26PKnlM76%2BokOiKoooo8Hn0BwVi87lWSpYdvKgmrJsqVpLtJy0LobKrPKpCWmpNpTt6emXn1LRNMC%2BL%2FNcZihGLCbzrqOH4eLrTapAiAYE8MW1WHvwade1cK1b3Lq9PrreiJ%2BmEk0MJ%2FqrGNa7oOvbjQr9BfmQwougvWCcicCSin5BbFluvii44%2FqqT%2B0UHWMtPNxE9yL%2B7cEBCluCSqyq%2Br2Y%2BRONuzcWn2rfxQ%2F8VJzmmRNeitx0dYj0Z%2FcCJuBJQ8Uz28lr3Hnll0O2MLq0t707pAEk4pRjA5Su7Ev1IXdi7K2vxrEku%2BG7NdsL306OOsQjHFrGzjQb5WPx9gw6Pam7NfQ65Op%2BxqPMxyO2lQO2sevL8af%2Bnh93hdkaruHm79eJpLAkjqxJYysYqFbzM8RDKAstS0iKS2UULmFxMAN71XCkIMROk7%2FqHqvFMePdcAkR8C5WHyhfOOInekGeuybxJdVrKrfrf8JnAuycZjDoxYrKBjqkAbwbBtp%2BgBZipkOZ2ngrQNRVYJWckjDaJkSBFj1wxK4zfNnHG18sywf1rTwUHqNWPj%2FT%2BaHV7DTdbpcCoIrSaMpJUu9pI9MNHyGbuDwWHVxxUSHF3%2F1XdmFNcFEPLD%2BKz7tLTRPau55Y6nmvF61Rpck79qlxsekHsIX5RONmAs0qH1HYzvsCgpru5t7aobiQBfBBJsQJycH15o317BA0j5MqkfUr&X-Amz-Signature=f1ced4d46096afcc8237bfc8ae0464c81597c340d14b14e17eb73cc096dd7cc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEGF6NRQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB0uLu1dchYhUwpaSrso6ndroHYPHURcuYQmIJY0fF2AIhAJbPU2r6s9HwsB5oyrsmObmA6VBhcCx1jpeEJPPdtQVeKv8DCH4QABoMNjM3NDIzMTgzODA1Igz4e6LArEDTVUe9mzQq3AMd%2BECuxq5FlURrH7XLSnpEY9ndKY76hq00bf%2FfnJXYhIXBgYHEFg%2FeEDiQcybiGtjX6RKxVWau7M50lDHoJsxf2qv96qknXHFS%2B1evLEk94Dv2qANXY7V8OpWBaDO8FHPZu1FgbrOnFSUMtt26PKnlM76%2BokOiKoooo8Hn0BwVi87lWSpYdvKgmrJsqVpLtJy0LobKrPKpCWmpNpTt6emXn1LRNMC%2BL%2FNcZihGLCbzrqOH4eLrTapAiAYE8MW1WHvwade1cK1b3Lq9PrreiJ%2BmEk0MJ%2FqrGNa7oOvbjQr9BfmQwougvWCcicCSin5BbFluvii44%2FqqT%2B0UHWMtPNxE9yL%2B7cEBCluCSqyq%2Br2Y%2BRONuzcWn2rfxQ%2F8VJzmmRNeitx0dYj0Z%2FcCJuBJQ8Uz28lr3Hnll0O2MLq0t707pAEk4pRjA5Su7Ev1IXdi7K2vxrEku%2BG7NdsL306OOsQjHFrGzjQb5WPx9gw6Pam7NfQ65Op%2BxqPMxyO2lQO2sevL8af%2Bnh93hdkaruHm79eJpLAkjqxJYysYqFbzM8RDKAstS0iKS2UULmFxMAN71XCkIMROk7%2FqHqvFMePdcAkR8C5WHyhfOOInekGeuybxJdVrKrfrf8JnAuycZjDoxYrKBjqkAbwbBtp%2BgBZipkOZ2ngrQNRVYJWckjDaJkSBFj1wxK4zfNnHG18sywf1rTwUHqNWPj%2FT%2BaHV7DTdbpcCoIrSaMpJUu9pI9MNHyGbuDwWHVxxUSHF3%2F1XdmFNcFEPLD%2BKz7tLTRPau55Y6nmvF61Rpck79qlxsekHsIX5RONmAs0qH1HYzvsCgpru5t7aobiQBfBBJsQJycH15o317BA0j5MqkfUr&X-Amz-Signature=65f94d24a6a2c2cb050056ef5f71567f2e239cb053c5bb9115966a9dea1b722b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

