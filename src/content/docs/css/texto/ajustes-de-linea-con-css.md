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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR5ERWEK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGjc5jDaIhOB3LgsNHIBK9CsS4KI5cobDMWOOGWpcY1IAiAK3fBAvWvclL%2FzmxtzIIUM0w%2FfX23QUXJ8NWTXNpmT9yqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYBWeX5o05GQcxdduKtwDk212Ep8am%2BNgVWfmxiY0bvjysaExSjwSj%2B6ejLoB0ZA6OXKmnKnrpNwflWzEsRyx2bMibtD9dUjp4HLywlRx9csckQE%2FoVUl3g%2B%2BZ1XfYv2ohzAmwNaRDkdX9BmswQ661R%2Bm%2F8CIXRLmK5XxNhI9cbQqtO0Eb%2BWFNH90ZKKVJv71%2BV7kHqZwI%2FKybXDCqHWcLgxF1r3qfpq8GQInlaL7gSYbX%2BqJFj1GjO%2FfxeLAoZqgPOWtaPRFNJVJk5eBUwihr3VPm759%2FBmAl%2BNsWixsW9%2BpcP8PeHOW5AecIgR0yyOTfiCUkIziTen9zBuaA%2FtmEkXlaPSGnnEGEq0ugaphJh%2F9UBbaxzi8ABtD1UA%2FeRIOy9qeEmMYp8pF6gk5Jd6Cmusdu43Dm19ybFxfnM%2FKITvkZ%2Bn6Wc8X0qYXr%2BTNk61j19IfK3u8lNSIxqlFPwHTbA9QwwoUEN1F4hUKmmB81pU8UBi15xVx71WgIg7TKRjS42GT%2FK3aM9LvYwhsfM3PveOljVoU4H6Hq50ZccuvcRoGexQxefJ6n%2F%2BW1FlY9NXys4OnL5iNNnv9EGQy3N5jbRXMtQAsZtx9RYCBW7iJiqpq7N8QPfZd3vQKqWKfdPhVgwjY0fSmHOaYktYwgICLygY6pgES%2FYFbYD4a6hqyPD%2F8u8YN8Povo8LKJVoO03C7UHFZ9FlszudNp9sgm4jPJI4BOAYD5sh3tNdCVesv%2BmBT1AzR%2FP%2BlJsm92cpGKeWKzkyMQNmX%2BjAnaYoXghMaMROpH2S20LHdAc8Qj0KcX%2F4wdf%2Botwu1odD2w7i5%2Fw8TSLF4EHBsSR7dsNFfwJCNo1RQShhQfyObujLqULYf4I2tKlcQ2qXEkfDC&X-Amz-Signature=fa6f44c0c6bad05c8ae4b09377a6588b46185b0da3bf823c2c539b1ebad0dd5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR5ERWEK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGjc5jDaIhOB3LgsNHIBK9CsS4KI5cobDMWOOGWpcY1IAiAK3fBAvWvclL%2FzmxtzIIUM0w%2FfX23QUXJ8NWTXNpmT9yqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYBWeX5o05GQcxdduKtwDk212Ep8am%2BNgVWfmxiY0bvjysaExSjwSj%2B6ejLoB0ZA6OXKmnKnrpNwflWzEsRyx2bMibtD9dUjp4HLywlRx9csckQE%2FoVUl3g%2B%2BZ1XfYv2ohzAmwNaRDkdX9BmswQ661R%2Bm%2F8CIXRLmK5XxNhI9cbQqtO0Eb%2BWFNH90ZKKVJv71%2BV7kHqZwI%2FKybXDCqHWcLgxF1r3qfpq8GQInlaL7gSYbX%2BqJFj1GjO%2FfxeLAoZqgPOWtaPRFNJVJk5eBUwihr3VPm759%2FBmAl%2BNsWixsW9%2BpcP8PeHOW5AecIgR0yyOTfiCUkIziTen9zBuaA%2FtmEkXlaPSGnnEGEq0ugaphJh%2F9UBbaxzi8ABtD1UA%2FeRIOy9qeEmMYp8pF6gk5Jd6Cmusdu43Dm19ybFxfnM%2FKITvkZ%2Bn6Wc8X0qYXr%2BTNk61j19IfK3u8lNSIxqlFPwHTbA9QwwoUEN1F4hUKmmB81pU8UBi15xVx71WgIg7TKRjS42GT%2FK3aM9LvYwhsfM3PveOljVoU4H6Hq50ZccuvcRoGexQxefJ6n%2F%2BW1FlY9NXys4OnL5iNNnv9EGQy3N5jbRXMtQAsZtx9RYCBW7iJiqpq7N8QPfZd3vQKqWKfdPhVgwjY0fSmHOaYktYwgICLygY6pgES%2FYFbYD4a6hqyPD%2F8u8YN8Povo8LKJVoO03C7UHFZ9FlszudNp9sgm4jPJI4BOAYD5sh3tNdCVesv%2BmBT1AzR%2FP%2BlJsm92cpGKeWKzkyMQNmX%2BjAnaYoXghMaMROpH2S20LHdAc8Qj0KcX%2F4wdf%2Botwu1odD2w7i5%2Fw8TSLF4EHBsSR7dsNFfwJCNo1RQShhQfyObujLqULYf4I2tKlcQ2qXEkfDC&X-Amz-Signature=a03117dbd74bf4351afe6176a000df6a21db05336bcf55baa95b8cc9705d3a68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

