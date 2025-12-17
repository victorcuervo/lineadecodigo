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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673I5Z2RX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHA86mJgfkUgXa96xA%2FdYFTJ7Nqa7xSPl2pqBlwWLp28AiAURQHg6OQX5xPwYGmD9AX%2BEyW8L%2B8vS0hs%2F4lM%2BqhaYSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMnB8VuB2Ip1sivGVgKtwDCu0PORrhzm6s1xu%2BF7mSVdAiShtuqpOAaA%2Bt936GpUr23DmTKDjsJdwYTmZHKIrP%2F1ptldeWsgpIm0Kkyk7nZm8NKxR6%2BbAJWESLwyG9NHQtrrjWusO1ai0%2BcCimnrkeqRUaoOHz0BnA0p%2FD7UcsmiuIqu4aisSS8aX3TM1qGjL%2BZOh7w%2FFPulCdCATrqYA%2B9X5EChTd8SzWrFK0FVbWkTSrTVtJxkaBUqCqSwMIh63edpF7M%2F5HcJNXWS11POVo69%2Bq9CM3i6P40B2GX%2BjlGoHDIt92cagmzuJzvb9tsSTs6wvdKF3OHae%2B9PbFh50CIyH3cBOU6RDNumhD1B8bgZRQEZuA0X3nb7IB5kQpKGkyK1U%2FH%2B%2FkbgBrfQXpLw7TESUR4wZuqoJ7%2BXTAV%2BaNQgdU%2BxWuGHsqb8THLWIVZAjlBULF6butZQ3rL%2B%2FJtLPBsPwaB7cqr4q0cyXwq56FbXxlk8Bd7o1wRjg%2Bj7kpTsXsCZv9IJKAPafnLE%2BaKEP0kQdviXVqZ6eBZM%2BV%2BY0HBGXZK4kM4hDWy89PMbSimGml65Eo5ebkTydtcSyk1jn1bQsqY0SXn0oq%2BsqFRDz%2FE4obcJsufLhVSQHsIHcSX91iqSt6p42RmDkBj9ownriJygY6pgHDMv%2BDaVKuuQvzfp1vMXAdLS%2BbGRq9Tewskza9TQRLn5ePedwklFD0TynDkEsfzGLMvkAiNoYCK6wjfNmUbWSWlXLSDHMG5JyYT7AmPnKhJ8q2p%2FRkheDiMv794E8R92D7E5WNrH3dgKnBgHn8mC2ZCue0Hwx9BE5YA6wRSxBs%2FgvGJX7mgfVCg7PLy%2B3nvsFeTRrJCrlpXF15IK%2BbLfustQnWXl2K&X-Amz-Signature=f3242aca86b1acbe26d79c0ac364134735f698fc89301d959d2213eb5ba2ed1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673I5Z2RX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHA86mJgfkUgXa96xA%2FdYFTJ7Nqa7xSPl2pqBlwWLp28AiAURQHg6OQX5xPwYGmD9AX%2BEyW8L%2B8vS0hs%2F4lM%2BqhaYSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMnB8VuB2Ip1sivGVgKtwDCu0PORrhzm6s1xu%2BF7mSVdAiShtuqpOAaA%2Bt936GpUr23DmTKDjsJdwYTmZHKIrP%2F1ptldeWsgpIm0Kkyk7nZm8NKxR6%2BbAJWESLwyG9NHQtrrjWusO1ai0%2BcCimnrkeqRUaoOHz0BnA0p%2FD7UcsmiuIqu4aisSS8aX3TM1qGjL%2BZOh7w%2FFPulCdCATrqYA%2B9X5EChTd8SzWrFK0FVbWkTSrTVtJxkaBUqCqSwMIh63edpF7M%2F5HcJNXWS11POVo69%2Bq9CM3i6P40B2GX%2BjlGoHDIt92cagmzuJzvb9tsSTs6wvdKF3OHae%2B9PbFh50CIyH3cBOU6RDNumhD1B8bgZRQEZuA0X3nb7IB5kQpKGkyK1U%2FH%2B%2FkbgBrfQXpLw7TESUR4wZuqoJ7%2BXTAV%2BaNQgdU%2BxWuGHsqb8THLWIVZAjlBULF6butZQ3rL%2B%2FJtLPBsPwaB7cqr4q0cyXwq56FbXxlk8Bd7o1wRjg%2Bj7kpTsXsCZv9IJKAPafnLE%2BaKEP0kQdviXVqZ6eBZM%2BV%2BY0HBGXZK4kM4hDWy89PMbSimGml65Eo5ebkTydtcSyk1jn1bQsqY0SXn0oq%2BsqFRDz%2FE4obcJsufLhVSQHsIHcSX91iqSt6p42RmDkBj9ownriJygY6pgHDMv%2BDaVKuuQvzfp1vMXAdLS%2BbGRq9Tewskza9TQRLn5ePedwklFD0TynDkEsfzGLMvkAiNoYCK6wjfNmUbWSWlXLSDHMG5JyYT7AmPnKhJ8q2p%2FRkheDiMv794E8R92D7E5WNrH3dgKnBgHn8mC2ZCue0Hwx9BE5YA6wRSxBs%2FgvGJX7mgfVCg7PLy%2B3nvsFeTRrJCrlpXF15IK%2BbLfustQnWXl2K&X-Amz-Signature=f0520a7db7ef2deda01ad9fc7f424c34341e361eb1bfc5ac0cdeeb429bc1d72c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

