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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P6ACIO3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbr6SRGl9J5lpfWC6g5Nh8Y97dkV2YJXr%2BvFV3P7HafAiB%2Bi8dtHjO1L67ka3k%2Bj4OFgJQvF0PENa5pv5i6BVTVxCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMfNLFxoERVv5uzjn%2FKtwDnvld3WBlp8%2FcdQTWJuCgrpI3LDfNnA9GeIPdB8Jrg9njnt6z8q%2FAsKAYXFEKUenr4KGCRCHma0yQrekTuRbmIgQRGBBcNwdA4W8wcU2sp04KwKwsfMpD4pKD8pGxBuaCcXUUsQA%2Fwvo%2FLaZg3aVKVHSnQh58Zx4g%2F6g5HD8c2V7wnwGT6ab7RPgxNIbSeNw5ZIngq1qg91dSZeIFEmN1Dd0TXpPWX2MUj2oKAOnjiFu46pxORbHtBewYw9UUOvvgobfAo2t4aRT6NHStuMa2WiUtJiufnbpSnEVR%2FLMPXub8ymz6NZbREa%2BOAle%2BPK1P5QAbb%2FNT6aaXb8YLDKSmATc3%2FdwIBXEMsBsvlvBRznaEbyllPX%2BNE7iWBELKD80N88%2FKasFGQVXW2AIjv3kYGlNoVPXowStW3iMP6YRn823gbJhn3FcRBdXz25oaY%2BQb97YKwJSOuC%2BpOTBTMujep07ByuhNzCv2bvi42HQN%2Fm41vRK3ModaF449zqoKrItyUPMnF0H5YXhg2F7cx5tFm2j%2BR0CIjz%2FskVGyZ2Zl3aCebmEvUmtMyisml6gdg6s%2F5eRL1ZBhmjpVR%2BuToAYn0BywqYRT3lFrYKHeCb2eG9hBha5gsGI8cW97vp0w67KIygY6pgFySEn%2Fp7KyyEgmh29s%2BLHyiT9ZXJZ%2Fw6%2BykJi%2BLxsrQNHXLekZsQyaCF4o%2FgL%2B1pwBy7QAY7c%2BT1VHiM9nTdXf1xvS7m6Sh3WqJc73mY4Hs2SGS4xSiAMNpgyUz2rAHZ%2Fx%2Bwz%2Faf8oJmKJoDx9PU3CtyX2p8u%2BmkUl8jRvVTwXi%2Bktgr1pTMw9kCYTUKhOA1yq20djqXjdTmh6lfjdkryiYK7EHdp9&X-Amz-Signature=97be2f67fc787fe06beb82bcdaf290a263c18d5be9063466d4e9c7f1c0ccd2bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P6ACIO3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbr6SRGl9J5lpfWC6g5Nh8Y97dkV2YJXr%2BvFV3P7HafAiB%2Bi8dtHjO1L67ka3k%2Bj4OFgJQvF0PENa5pv5i6BVTVxCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMfNLFxoERVv5uzjn%2FKtwDnvld3WBlp8%2FcdQTWJuCgrpI3LDfNnA9GeIPdB8Jrg9njnt6z8q%2FAsKAYXFEKUenr4KGCRCHma0yQrekTuRbmIgQRGBBcNwdA4W8wcU2sp04KwKwsfMpD4pKD8pGxBuaCcXUUsQA%2Fwvo%2FLaZg3aVKVHSnQh58Zx4g%2F6g5HD8c2V7wnwGT6ab7RPgxNIbSeNw5ZIngq1qg91dSZeIFEmN1Dd0TXpPWX2MUj2oKAOnjiFu46pxORbHtBewYw9UUOvvgobfAo2t4aRT6NHStuMa2WiUtJiufnbpSnEVR%2FLMPXub8ymz6NZbREa%2BOAle%2BPK1P5QAbb%2FNT6aaXb8YLDKSmATc3%2FdwIBXEMsBsvlvBRznaEbyllPX%2BNE7iWBELKD80N88%2FKasFGQVXW2AIjv3kYGlNoVPXowStW3iMP6YRn823gbJhn3FcRBdXz25oaY%2BQb97YKwJSOuC%2BpOTBTMujep07ByuhNzCv2bvi42HQN%2Fm41vRK3ModaF449zqoKrItyUPMnF0H5YXhg2F7cx5tFm2j%2BR0CIjz%2FskVGyZ2Zl3aCebmEvUmtMyisml6gdg6s%2F5eRL1ZBhmjpVR%2BuToAYn0BywqYRT3lFrYKHeCb2eG9hBha5gsGI8cW97vp0w67KIygY6pgFySEn%2Fp7KyyEgmh29s%2BLHyiT9ZXJZ%2Fw6%2BykJi%2BLxsrQNHXLekZsQyaCF4o%2FgL%2B1pwBy7QAY7c%2BT1VHiM9nTdXf1xvS7m6Sh3WqJc73mY4Hs2SGS4xSiAMNpgyUz2rAHZ%2Fx%2Bwz%2Faf8oJmKJoDx9PU3CtyX2p8u%2BmkUl8jRvVTwXi%2Bktgr1pTMw9kCYTUKhOA1yq20djqXjdTmh6lfjdkryiYK7EHdp9&X-Amz-Signature=9c255e8cb62505270879a01aa52e05e4d3d02c14b5bca674cc410e83d7512cbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

