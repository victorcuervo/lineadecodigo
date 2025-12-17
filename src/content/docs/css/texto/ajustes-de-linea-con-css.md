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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6YNNLTR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLl3T%2BRredKY1evdxnDxoIFTxtW5RtWFYOA4AGYPRE4AiBE3Bc4cPSo9sg%2B4vSHgXOPmzp4IhtBmZ0%2F3%2FjQvBvqQSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNTh58sZOLyhP%2FV4HKtwD2dA4LA%2BngJsnA8z6eLgD7po5qnJxx%2Bn7dxWvR0%2Be9RXZg6FbuZVGdBTdKgYxwjctyRaI1mDY3JnZ2%2BxNinrekAcrAqJzEQYpw7YohJLz1hivqkA4WthqnpqdZxafETMhpRuG5ECupWIxRR0h0oiezW%2FgE%2FCE%2BThUi1Bdj8pOZvWPXEBxFBLsVDF7D5VL4OY8e4qQ0ptznkWxG2GCm2s7V7qfBDEV%2BSJa7P3w43QV6DjyeRBkqh6iX7hWfEgqTXmstcLe%2BgXOcISAftN27aeSgtPQXLPX1s9xMVDRBC6RUYamcXT0tR%2F%2B99xGKYws9oUKM889IZzWr0AVBPlc2IGKWZM03n0ifVBUTiwhL1oTqfZb5ya6SeJn4Xfgcmh0raiGfgLQ1rmaQbB8BuAxkxdHslrYbVHJeeC5%2Fk0RPaIj6taKMYKY2emqKLAV1ZAbQgX1MjhhU7edQNU%2BMtEWKuuKO%2Foi6Ut%2FpeoNhCeFjGhHcKnljFjb%2FzYPvkNHC5tby6glizrHclI5ma%2FYWzBwVtsuGAI%2FpX73D7SFjzRyX2lL6h3xcWWiRjHuEfslPbRsu6DLN3UKnejlWuh4wyNOwWVMyfcId40LskKivEP3m8dtzMLBr8MsuO%2BaPjtQWWUw0YGLygY6pgErrDBaZbKnyTYA3lCaxr27TayusmC8ygtreT12sjP4i1nPz%2FSXUzP9FYhgJU7PqtyKF221LqJi%2BtruR9eqYln4tJ1Cb6wvGG%2FNIWjx21oUrQBplIHO4Z1rhEDRiGzJA8PiuWMuDFxF3OciyOErT7CeiiaQMTko2CTBfuwTwAbeUSvU8pHIGoc%2BQuS1M2P6e9CXwc4jkQ7qao2EykYnRJlZTQLPX9DL&X-Amz-Signature=a96b56f2eb69f69a428e2ed80475b9f6f8327cfaff87f6ced9af01c1ad0565c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6YNNLTR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLl3T%2BRredKY1evdxnDxoIFTxtW5RtWFYOA4AGYPRE4AiBE3Bc4cPSo9sg%2B4vSHgXOPmzp4IhtBmZ0%2F3%2FjQvBvqQSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNTh58sZOLyhP%2FV4HKtwD2dA4LA%2BngJsnA8z6eLgD7po5qnJxx%2Bn7dxWvR0%2Be9RXZg6FbuZVGdBTdKgYxwjctyRaI1mDY3JnZ2%2BxNinrekAcrAqJzEQYpw7YohJLz1hivqkA4WthqnpqdZxafETMhpRuG5ECupWIxRR0h0oiezW%2FgE%2FCE%2BThUi1Bdj8pOZvWPXEBxFBLsVDF7D5VL4OY8e4qQ0ptznkWxG2GCm2s7V7qfBDEV%2BSJa7P3w43QV6DjyeRBkqh6iX7hWfEgqTXmstcLe%2BgXOcISAftN27aeSgtPQXLPX1s9xMVDRBC6RUYamcXT0tR%2F%2B99xGKYws9oUKM889IZzWr0AVBPlc2IGKWZM03n0ifVBUTiwhL1oTqfZb5ya6SeJn4Xfgcmh0raiGfgLQ1rmaQbB8BuAxkxdHslrYbVHJeeC5%2Fk0RPaIj6taKMYKY2emqKLAV1ZAbQgX1MjhhU7edQNU%2BMtEWKuuKO%2Foi6Ut%2FpeoNhCeFjGhHcKnljFjb%2FzYPvkNHC5tby6glizrHclI5ma%2FYWzBwVtsuGAI%2FpX73D7SFjzRyX2lL6h3xcWWiRjHuEfslPbRsu6DLN3UKnejlWuh4wyNOwWVMyfcId40LskKivEP3m8dtzMLBr8MsuO%2BaPjtQWWUw0YGLygY6pgErrDBaZbKnyTYA3lCaxr27TayusmC8ygtreT12sjP4i1nPz%2FSXUzP9FYhgJU7PqtyKF221LqJi%2BtruR9eqYln4tJ1Cb6wvGG%2FNIWjx21oUrQBplIHO4Z1rhEDRiGzJA8PiuWMuDFxF3OciyOErT7CeiiaQMTko2CTBfuwTwAbeUSvU8pHIGoc%2BQuS1M2P6e9CXwc4jkQ7qao2EykYnRJlZTQLPX9DL&X-Amz-Signature=4d95a004e1b844026b942d0f65615398056930b3ae33d1bdd3b8979cc15b1707&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

