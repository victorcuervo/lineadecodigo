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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRE576SP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoKDrnvPd9Jv45E3hhr8IGGZW02LayczNAdbU9RGQVRgIhAJgiA0tV4XCqbR3iFpPYsw9jrmXRQwobQUY6yRYSLZeyKv8DCHsQABoMNjM3NDIzMTgzODA1IgxLB%2BEjXBZH8hgmWKgq3ANIr4OgLeD6knmXlm2UIeOGRWJYNyHztxA%2Bw%2Fagtf1LucRufig3unaG2zqUnMtBMPBK8cJJYzvJ49Tu7orQ8dF90a3yfWSy7YrHF3qbsVWlR3vG8Z%2FOiY%2BBS0RQnK8MsyDEwkyqYlSssXREDiMN0ZfeCDJ9mm2Ebix1N7urr5OCyqVRK41DVnKDaLNLQdldt4i8zTyiXcuq%2B05ONaR0X%2Bi0rYu68Sz7m2prG%2Bum0rbzfeBiFs%2BIUvVOfOyJfbii%2FJbgks6yRlTa3dM5BSF7qGKt9gf8JcY8pTeJzOevLDRMvEhCe9Hea%2FwNmuOiOftq8UPX0mm3sPqMmiTgCe18wDf3fm2Izhx6GXW4c%2FExKvZDoFHr3TADf1mnnx%2FITBBD1kiRthM%2FFt3umenDJvzgiz7NNTgcDCdJrXUd0TW%2Bf3Q7k9BnHJdItYDieEG%2BEDlaQEfq%2ByHK5bsYDYTTqo4d7FWozzro5%2B3k%2FbQuJbWzJ5ldCz3i8BPwQ1g1AvsUHbGhwHp8mO2rr50%2Byy8mxw7QBUQEjr31uWSKWc2VRGq%2FYPv5RokdceBZaUb1K5lJ2utjKVCvnYzvw8wATs8jdsg%2BJGkUVtUeZczkOlAv%2FZbBuUa9lbKOaLrRegeyEKlVbDC%2B74nKBjqkAeJsReL7MEFpjX0hvxrsPY8FLBhGUjGskUlDRCk%2BmtzlT%2BS1U7WqMO0c41Nj%2FmWp%2BNHNxhoA42ERFugyD3seSjZRSuKm%2BMS68QRD3ju3bAiENu0zocWNy%2FPL3o%2FKoF437qh5JZBPJ18h%2BxmouIguX6CcN2VRp5V7jyNbBJ3PV5aTDOuaw937IMNOBV%2FDK1PfGUUU1%2BLOEAeEN6FTb5iAGzyrDJAK&X-Amz-Signature=2177d5343bcd2dd5eb499fe96eecf6facf893d21b609283a7fef0d527e56caa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRE576SP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoKDrnvPd9Jv45E3hhr8IGGZW02LayczNAdbU9RGQVRgIhAJgiA0tV4XCqbR3iFpPYsw9jrmXRQwobQUY6yRYSLZeyKv8DCHsQABoMNjM3NDIzMTgzODA1IgxLB%2BEjXBZH8hgmWKgq3ANIr4OgLeD6knmXlm2UIeOGRWJYNyHztxA%2Bw%2Fagtf1LucRufig3unaG2zqUnMtBMPBK8cJJYzvJ49Tu7orQ8dF90a3yfWSy7YrHF3qbsVWlR3vG8Z%2FOiY%2BBS0RQnK8MsyDEwkyqYlSssXREDiMN0ZfeCDJ9mm2Ebix1N7urr5OCyqVRK41DVnKDaLNLQdldt4i8zTyiXcuq%2B05ONaR0X%2Bi0rYu68Sz7m2prG%2Bum0rbzfeBiFs%2BIUvVOfOyJfbii%2FJbgks6yRlTa3dM5BSF7qGKt9gf8JcY8pTeJzOevLDRMvEhCe9Hea%2FwNmuOiOftq8UPX0mm3sPqMmiTgCe18wDf3fm2Izhx6GXW4c%2FExKvZDoFHr3TADf1mnnx%2FITBBD1kiRthM%2FFt3umenDJvzgiz7NNTgcDCdJrXUd0TW%2Bf3Q7k9BnHJdItYDieEG%2BEDlaQEfq%2ByHK5bsYDYTTqo4d7FWozzro5%2B3k%2FbQuJbWzJ5ldCz3i8BPwQ1g1AvsUHbGhwHp8mO2rr50%2Byy8mxw7QBUQEjr31uWSKWc2VRGq%2FYPv5RokdceBZaUb1K5lJ2utjKVCvnYzvw8wATs8jdsg%2BJGkUVtUeZczkOlAv%2FZbBuUa9lbKOaLrRegeyEKlVbDC%2B74nKBjqkAeJsReL7MEFpjX0hvxrsPY8FLBhGUjGskUlDRCk%2BmtzlT%2BS1U7WqMO0c41Nj%2FmWp%2BNHNxhoA42ERFugyD3seSjZRSuKm%2BMS68QRD3ju3bAiENu0zocWNy%2FPL3o%2FKoF437qh5JZBPJ18h%2BxmouIguX6CcN2VRp5V7jyNbBJ3PV5aTDOuaw937IMNOBV%2FDK1PfGUUU1%2BLOEAeEN6FTb5iAGzyrDJAK&X-Amz-Signature=5875cd62b2c73b731e0c22e4e93426d963a2c2380472bbdb8c680118cc936391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

