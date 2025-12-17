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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6TOMGKW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxKxasKwngJbmbVVwVOkfPkR48CT1UvWfxTAkj35NUoAIhAIxjHfivD31EzkhDTA%2FzjNHWldEKEbxFRNUZh27JV79LKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igye7%2FahaLypy5WkrNkq3APr0FO5bTD8R7YX7c8ys68Cqh%2BHXsaY5nYjjMeNNjdSTF0Gmvt%2BoxpZ3CNntW%2Fuvki91uS4uyI%2FCPX4iTzOLmf0aGgPxBcmTqmTxOeLPGEcpNXp7pL6GoCYrjaPu1HmFWuwqB7cmCRfOLdTd0zowX4hpu4onquON2q9nbVPHKNnGmsXec3MmnLR9OQ0ISQFCc3SJ8thvAy1jKvLrBP4fFu3JdJN27uAS7viUGIsRNRWjcgTTyUy4NBuaZMniO6o50EHeKOxHr8gLRdQZQgOF6s21rv1dzUpQezwBuV4%2Fa5VHv6a7kkFazM%2FHONUi2EW8kdWOFt%2FQExP3SoV0jkOq60Z0%2BQ7fND%2FHqgvXpTPOgvWZxysnMreeU%2B%2BOwzwuRQN3l%2FQBsYTYKMfX2BxoPcokkn10mUopyH538O6tgBT%2F%2B9bEvog3UKzt234jouoGMF5G0jWEnOodIa3iUhcJC7j3ZCl81RyRzdMOhzy2WQF4eCqKrLaxrgEn%2BhVnXODzTW98ZgriP1aa8RKXgrt2fwKGDyyKs0ulJhVt6aAThrgcdTBA5oxQWcl9EOD230JHr3rNfiszfTtTJmBU1ek7rLXPUSh6y43cVlxqaZDQoXO9PBfp65ReRZAIKkmFkv8eDCYn4vKBjqkAQBO8McX0PeVkZa45aMF5svJp2Gq21qayzhm9igiX3BTK5OxG86%2BdKaasdW7QdbryAYnR8Zhw8dKhjZK2CD1brbHKtQIIBZanoVv%2B%2Fow%2BuagIMyfcobmOPhasXxo7VPRJg4CV4ol9Pgv7YUp2%2Fi7W%2Bl9MgAwhEkrkDohawgZ5XVQda1NPES%2BbKTEAnhBwXFlKMsrwRT0RfTK9KiPyzi6QlnzTnDv&X-Amz-Signature=8c51579dd568f64cfc13e76acc0916a7709e496a3c200d8dfe5641b62c2a600c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6TOMGKW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxKxasKwngJbmbVVwVOkfPkR48CT1UvWfxTAkj35NUoAIhAIxjHfivD31EzkhDTA%2FzjNHWldEKEbxFRNUZh27JV79LKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igye7%2FahaLypy5WkrNkq3APr0FO5bTD8R7YX7c8ys68Cqh%2BHXsaY5nYjjMeNNjdSTF0Gmvt%2BoxpZ3CNntW%2Fuvki91uS4uyI%2FCPX4iTzOLmf0aGgPxBcmTqmTxOeLPGEcpNXp7pL6GoCYrjaPu1HmFWuwqB7cmCRfOLdTd0zowX4hpu4onquON2q9nbVPHKNnGmsXec3MmnLR9OQ0ISQFCc3SJ8thvAy1jKvLrBP4fFu3JdJN27uAS7viUGIsRNRWjcgTTyUy4NBuaZMniO6o50EHeKOxHr8gLRdQZQgOF6s21rv1dzUpQezwBuV4%2Fa5VHv6a7kkFazM%2FHONUi2EW8kdWOFt%2FQExP3SoV0jkOq60Z0%2BQ7fND%2FHqgvXpTPOgvWZxysnMreeU%2B%2BOwzwuRQN3l%2FQBsYTYKMfX2BxoPcokkn10mUopyH538O6tgBT%2F%2B9bEvog3UKzt234jouoGMF5G0jWEnOodIa3iUhcJC7j3ZCl81RyRzdMOhzy2WQF4eCqKrLaxrgEn%2BhVnXODzTW98ZgriP1aa8RKXgrt2fwKGDyyKs0ulJhVt6aAThrgcdTBA5oxQWcl9EOD230JHr3rNfiszfTtTJmBU1ek7rLXPUSh6y43cVlxqaZDQoXO9PBfp65ReRZAIKkmFkv8eDCYn4vKBjqkAQBO8McX0PeVkZa45aMF5svJp2Gq21qayzhm9igiX3BTK5OxG86%2BdKaasdW7QdbryAYnR8Zhw8dKhjZK2CD1brbHKtQIIBZanoVv%2B%2Fow%2BuagIMyfcobmOPhasXxo7VPRJg4CV4ol9Pgv7YUp2%2Fi7W%2Bl9MgAwhEkrkDohawgZ5XVQda1NPES%2BbKTEAnhBwXFlKMsrwRT0RfTK9KiPyzi6QlnzTnDv&X-Amz-Signature=0a30f2817cf33939fce0c45ae322818818dcf9763a4360ce5fb1d8471425a8d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

