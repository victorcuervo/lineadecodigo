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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXOIO3IB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC422s%2FBxsS27W%2FduQuDU3tyXQPqFCyCzfxLog%2BlDocdgIhAKcRG5cCc4jB22aGqbDf0hbemh8K1%2FfqsRgzBp7vRgK%2BKv8DCHYQABoMNjM3NDIzMTgzODA1IgwAlnIJNY8Uui5f0U0q3ANIlPG%2BgLZGI%2FfAGBqWqbZBrn%2Bt6NVkDtb9Va87nQW0BMRHl%2Fq%2FboftRJeutz6SWAkk7gOsaXF9XpnNdjcJ4sbWjS5jYQLEqhiVFTwrlBMwX4Lh7Ep4KQUX2AKbHpfJEV21bnjDy%2B629%2Bf9NiV%2F8nyrLWeRm317h4DXIq2JYRlLBdbxQMZwqzSmFTuZX%2BCI9EcLwJuhsrcCIOT62z%2Bxsu%2BrhN%2Br4rt%2BI7WQG8tEx7e3jUA9C2FOWAJyMPYXlvyLVATcJ56EA%2BMnFvylKKmHuV6J7ibl0MncVhnj8RQty2BsKWBlhK5YOapiHZDbvsS%2FAKMHVgo4CA%2FaADX%2BZKV2Bh8MVxChs8Y%2BxRqLnz%2By7g36Ma921DQx0iczknjY%2BpaI5tP8mUd62TxLn%2BeJznlSqPiyE66foqn7pBfQ6Qmn8JFgvIMP0VUNb2QWHnWHXtniBf5YvvVLujXGKxzKXL66g7mQqSS5NitK8UXRRVQr9%2BlU3AiHnHrA6%2FdYrCGR%2BICLGp3YuWRg%2FZkpcMr%2BYF4Gm6WrZ9tCzNglV4z9VfXMWLJ9ylmOVKl24MeofqGvRJyktACK4No%2FKn0AtRVY5vRqru2pBnK%2Fz12yx7%2FAfiWCCPCtKvLcJrHGsKnGsJhGXDCU6YjKBjqkAbv29qe1RpC53QF7VOvKTNhK1C2K9jYego7sDJDmaTjoI8wbAtmJA4g2PlhNia9lKqqc7lSqVe0vXvQhtYTihd752cteh6C9i8oHj7xWYJJUGFalSmTzAH8xsaoChUtSyXqjNBa8vbLd2FcnYJLqiF6onLwTNEBfDbtp6pQwFZdnQukCaYePTM1grNFxoTK3c50rimVdaO3dQzsZLEzrr4tW%2B9dV&X-Amz-Signature=ff11e3291135f9ee9df0d2d69af1744abb5fa1d965b7986645b27d99e8d67433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXOIO3IB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC422s%2FBxsS27W%2FduQuDU3tyXQPqFCyCzfxLog%2BlDocdgIhAKcRG5cCc4jB22aGqbDf0hbemh8K1%2FfqsRgzBp7vRgK%2BKv8DCHYQABoMNjM3NDIzMTgzODA1IgwAlnIJNY8Uui5f0U0q3ANIlPG%2BgLZGI%2FfAGBqWqbZBrn%2Bt6NVkDtb9Va87nQW0BMRHl%2Fq%2FboftRJeutz6SWAkk7gOsaXF9XpnNdjcJ4sbWjS5jYQLEqhiVFTwrlBMwX4Lh7Ep4KQUX2AKbHpfJEV21bnjDy%2B629%2Bf9NiV%2F8nyrLWeRm317h4DXIq2JYRlLBdbxQMZwqzSmFTuZX%2BCI9EcLwJuhsrcCIOT62z%2Bxsu%2BrhN%2Br4rt%2BI7WQG8tEx7e3jUA9C2FOWAJyMPYXlvyLVATcJ56EA%2BMnFvylKKmHuV6J7ibl0MncVhnj8RQty2BsKWBlhK5YOapiHZDbvsS%2FAKMHVgo4CA%2FaADX%2BZKV2Bh8MVxChs8Y%2BxRqLnz%2By7g36Ma921DQx0iczknjY%2BpaI5tP8mUd62TxLn%2BeJznlSqPiyE66foqn7pBfQ6Qmn8JFgvIMP0VUNb2QWHnWHXtniBf5YvvVLujXGKxzKXL66g7mQqSS5NitK8UXRRVQr9%2BlU3AiHnHrA6%2FdYrCGR%2BICLGp3YuWRg%2FZkpcMr%2BYF4Gm6WrZ9tCzNglV4z9VfXMWLJ9ylmOVKl24MeofqGvRJyktACK4No%2FKn0AtRVY5vRqru2pBnK%2Fz12yx7%2FAfiWCCPCtKvLcJrHGsKnGsJhGXDCU6YjKBjqkAbv29qe1RpC53QF7VOvKTNhK1C2K9jYego7sDJDmaTjoI8wbAtmJA4g2PlhNia9lKqqc7lSqVe0vXvQhtYTihd752cteh6C9i8oHj7xWYJJUGFalSmTzAH8xsaoChUtSyXqjNBa8vbLd2FcnYJLqiF6onLwTNEBfDbtp6pQwFZdnQukCaYePTM1grNFxoTK3c50rimVdaO3dQzsZLEzrr4tW%2B9dV&X-Amz-Signature=0bcc6e6554ce8f2082d9c14cebffa8be047b94977ae5e0fac2d5e2ce7b1cc55a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

