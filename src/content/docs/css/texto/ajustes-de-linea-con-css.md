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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5GOXBSB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQcpOZatmSJ2fTUZXuUVMAieI11J4y0KzdjOiV%2Fgb2IAiBz%2BYeEiAYb1zKxP3Bx%2Bfl4B3%2Bei5mul3aSEHt2LLr65Sr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMV2q3R6iyxDcKq4BDKtwDnc1F6GBka48Va3%2BjvLFv3C%2FKr1U1cQoyIWUfe%2Fhfafbdvhdct2V%2BAyFAETr%2BwMAG7XKAaeEatAOU0nSgIRe5be3gwW0xvolTW4RijgprbPXuGe9z6%2FseNe2b1vhcI2jw80sy1ej384yz%2FB19MFaltqzmkQlam8mTYyZbcynf9Wmy85zpIZgsNPf2BxPc3B7LLsVYHeJd32yn332QmAOxLg4q139KLOGlhQeLfBLLisFra0TX8BSvJXNaRrn2yIg%2F%2BUR2AEaZFy57BLJ9mjC2zXx8ad9IAtWogbVomZAFZPejlLZ%2B0GLxWkI27XmP0iIh3cCNNRz%2FtTEjiCXIg8%2Bl2u1rPDN4hQjv6R3oQ4C7zVB5R3SwBQxJJ45v%2FhYANcY4HgdDzeBCkyaOpo9ZHq%2BXRxhcG4C1eLir3wKdSAzeU%2F9qfn%2FfBY1TB47MsVNchJJBAkz6ULnhV0qizRYQA8zAv9UQGiHwUJ%2BGL08AFrDOjFpX9cOeJLspcv83IRpj4T348ZAqZ007zpWy6XFv2y66TVBzsqocem1fbBqeVwvs2S2BgTldszqMBZ7AVgsiF4Sy98UNuNaD0T4Ri1GHbwUv%2F%2B4UzlXqcFnPqXXQ2Qt0KWSt8%2BEg5jtUlB0Q9fswn%2BqIygY6pgGY5y1kefwsgMxBXR9aDZCVBRfUQRkccHqnNuSTyJiCHNh0jDLf3quij09AhOYSahHUa%2FQaYtTVPGUpWXSTAtmyZrEhAD0Zr9F1hCcIFUp3nus%2F4q1SR7Nnhas8eaRzl9aYFXUJH1RjPSKcuYv3xoBbhK%2FQ8kQGnKlsjPj2PYB9Dmaqvj6KIE%2FAYiJCrcaka5LPaj%2FY7YUH6hzDeTiaxJ98Vjy1vjXn&X-Amz-Signature=4b10017536bf44b3ab9acfc4df15f6c41f5503d1387b693195873d6df13e5e78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5GOXBSB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQcpOZatmSJ2fTUZXuUVMAieI11J4y0KzdjOiV%2Fgb2IAiBz%2BYeEiAYb1zKxP3Bx%2Bfl4B3%2Bei5mul3aSEHt2LLr65Sr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMV2q3R6iyxDcKq4BDKtwDnc1F6GBka48Va3%2BjvLFv3C%2FKr1U1cQoyIWUfe%2Fhfafbdvhdct2V%2BAyFAETr%2BwMAG7XKAaeEatAOU0nSgIRe5be3gwW0xvolTW4RijgprbPXuGe9z6%2FseNe2b1vhcI2jw80sy1ej384yz%2FB19MFaltqzmkQlam8mTYyZbcynf9Wmy85zpIZgsNPf2BxPc3B7LLsVYHeJd32yn332QmAOxLg4q139KLOGlhQeLfBLLisFra0TX8BSvJXNaRrn2yIg%2F%2BUR2AEaZFy57BLJ9mjC2zXx8ad9IAtWogbVomZAFZPejlLZ%2B0GLxWkI27XmP0iIh3cCNNRz%2FtTEjiCXIg8%2Bl2u1rPDN4hQjv6R3oQ4C7zVB5R3SwBQxJJ45v%2FhYANcY4HgdDzeBCkyaOpo9ZHq%2BXRxhcG4C1eLir3wKdSAzeU%2F9qfn%2FfBY1TB47MsVNchJJBAkz6ULnhV0qizRYQA8zAv9UQGiHwUJ%2BGL08AFrDOjFpX9cOeJLspcv83IRpj4T348ZAqZ007zpWy6XFv2y66TVBzsqocem1fbBqeVwvs2S2BgTldszqMBZ7AVgsiF4Sy98UNuNaD0T4Ri1GHbwUv%2F%2B4UzlXqcFnPqXXQ2Qt0KWSt8%2BEg5jtUlB0Q9fswn%2BqIygY6pgGY5y1kefwsgMxBXR9aDZCVBRfUQRkccHqnNuSTyJiCHNh0jDLf3quij09AhOYSahHUa%2FQaYtTVPGUpWXSTAtmyZrEhAD0Zr9F1hCcIFUp3nus%2F4q1SR7Nnhas8eaRzl9aYFXUJH1RjPSKcuYv3xoBbhK%2FQ8kQGnKlsjPj2PYB9Dmaqvj6KIE%2FAYiJCrcaka5LPaj%2FY7YUH6hzDeTiaxJ98Vjy1vjXn&X-Amz-Signature=1e6eba03ef3a7f3151554af06d440bdd4c3086f3aad1a3564a23660474b42967&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

