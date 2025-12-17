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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W6LUTX2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBTQVZO98%2BDuzsAPEhEe9oamMfaBwAbrAQIiZHDfbecgIhANaKwBOiHnNQtl1G0rBY2riEECBcFXckyFuVY1p77r6gKv8DCHQQABoMNjM3NDIzMTgzODA1Igxrr0YcZpz8mUFZpwAq3ANEqwa5o6F1S1DSPtXPOn6YX17bIvA0LLpRZD9rhoRfHw8Av1%2FXS1mi4ba4est2JI9LW54WPvYazJbR76isioexfQ3AtZXXThVWCU8pgwM5B6WfYeTx95El%2BvTeiPfvviOTltBMFQZ1ktWc4FfcQrTVPgCg3VUC0IjK%2B7HJSpOORx4%2Fl%2FTeL9G3fO%2BDmyoDBLryGmjmZU3rRQT6ERTuVuqVWFooqtdxKyYkJPwTINPJKt%2FOtaOfNjfaUeHuLr167DhmNXiMh%2BxW1W0yqjOKrZR5EYiIZml06GULIUFIdGT1clLqaXnSc2fJ0u9zdLa3bz5t15DI6wc0kBRmUjE1jUIf6xsYUn1BIcI3hAQBuggUrt6F6O7Vucw4D7EiywYaCzv57c6hhiGoyWoqz5oSwqmRj%2F%2FfBOGfJm%2BvEf7Sqdv62NavZYqGLe54%2FS3iXyKYhS2wmADkCJTj1vwUUk79rWM3XizHYNbXO3fOtpCnQ9bB8JKjklsg7NjLuGh4%2Bvdmj%2BhYm40dBn4UeSK%2FvLE41lHc%2Fn68NEKBhjpO79xNj2U5r2sKiiehhIDkTD7%2BtLQtjlkh2iZHKTobnsttBz7FUjPjxUAY4iLzuLHhouNBfUgwEnMiTq7yvhYj3POS7DDks4jKBjqkAeQmAtUf7HIJUOoxkPoDge2C6VTZYU6fSZ8oYcHTCYuAoFK9wQu08QZKttsO7FuoHs0Bj%2FkhNJApUgw3TOdJpn62LYmEBoUnL1G0NB9P3Z1q8xGZxYjD6A%2BNgoRD6QDqbd05NQBytYQSoomwLGIdLrCwSU2dJmn0drDvgmrSFFCwJxt14MAeEj5PTJg%2BCPtN%2B36m7iregyJPWyjSZZZ4m7Z9nl4%2F&X-Amz-Signature=745ca235713b27996212a4fb16c730467e13765e285ce27136c4c6782b64b9ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W6LUTX2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBTQVZO98%2BDuzsAPEhEe9oamMfaBwAbrAQIiZHDfbecgIhANaKwBOiHnNQtl1G0rBY2riEECBcFXckyFuVY1p77r6gKv8DCHQQABoMNjM3NDIzMTgzODA1Igxrr0YcZpz8mUFZpwAq3ANEqwa5o6F1S1DSPtXPOn6YX17bIvA0LLpRZD9rhoRfHw8Av1%2FXS1mi4ba4est2JI9LW54WPvYazJbR76isioexfQ3AtZXXThVWCU8pgwM5B6WfYeTx95El%2BvTeiPfvviOTltBMFQZ1ktWc4FfcQrTVPgCg3VUC0IjK%2B7HJSpOORx4%2Fl%2FTeL9G3fO%2BDmyoDBLryGmjmZU3rRQT6ERTuVuqVWFooqtdxKyYkJPwTINPJKt%2FOtaOfNjfaUeHuLr167DhmNXiMh%2BxW1W0yqjOKrZR5EYiIZml06GULIUFIdGT1clLqaXnSc2fJ0u9zdLa3bz5t15DI6wc0kBRmUjE1jUIf6xsYUn1BIcI3hAQBuggUrt6F6O7Vucw4D7EiywYaCzv57c6hhiGoyWoqz5oSwqmRj%2F%2FfBOGfJm%2BvEf7Sqdv62NavZYqGLe54%2FS3iXyKYhS2wmADkCJTj1vwUUk79rWM3XizHYNbXO3fOtpCnQ9bB8JKjklsg7NjLuGh4%2Bvdmj%2BhYm40dBn4UeSK%2FvLE41lHc%2Fn68NEKBhjpO79xNj2U5r2sKiiehhIDkTD7%2BtLQtjlkh2iZHKTobnsttBz7FUjPjxUAY4iLzuLHhouNBfUgwEnMiTq7yvhYj3POS7DDks4jKBjqkAeQmAtUf7HIJUOoxkPoDge2C6VTZYU6fSZ8oYcHTCYuAoFK9wQu08QZKttsO7FuoHs0Bj%2FkhNJApUgw3TOdJpn62LYmEBoUnL1G0NB9P3Z1q8xGZxYjD6A%2BNgoRD6QDqbd05NQBytYQSoomwLGIdLrCwSU2dJmn0drDvgmrSFFCwJxt14MAeEj5PTJg%2BCPtN%2B36m7iregyJPWyjSZZZ4m7Z9nl4%2F&X-Amz-Signature=1708d5521965f54fd4c5d44fcd3b17fea7c0a090a84361b56257aef67594d433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

