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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5FJEDWS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4bk7Msl%2BcNjgrlFY%2FcsRESZtac79Sirzz1P4I2cBBTAiAy4OCUJISX6R2xhgFfjoH9f2kIabMBImLzMJxD%2FI4ZRCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMa3Vl1%2FhJNOFbrbDYKtwDZo9AUQuQKtqBew9yIomT6kq9lTuHcvCezc7Nc2n37NUiE71uYe9FriTJRjb5ea5QfTqjk4S27th0RihvqOG7w2aBrbJXgWKIRFoaDNKGKaAG0buO98e4tzFfT9ytNkHKmrYR1lQ4mB3ByeA1ADNrtlK%2B2z84W8kQ9gk2neNokhIX6N7ULKRLjlp3V7uGIy3V4l6uVK1jp0VaNjaCMGn5la%2FNZqcV%2FGJ3Fr%2BgZP%2BuJMjjYbWbBuI01AMOqrwzjTb3YmBMBzP%2B1SWagaYynxqnyGFyrUJynPbhn2H2sM71cajQ1e%2FD6edt0jZgq0WPsr4COge9V1vaMg3MWONRjB4qKq0V2cpKeYaNh%2FXbRzdJUJAv9%2F4ja4RhAWumS0aSdzXgsjt3aIjSVRmYXpYrUEYBvMt8uUZitSPkS1pWts241Wo28gX28UrI4r6CutjWlsvhEf1MJuMHbt%2Fb5dpWMwfjrig320yNfWEQvIVgvN62xYFybCkRPgxY0fA0VC9Si1wOmwZ5Fq%2FjQLSgGx7fDJHuN%2Bng%2F8mwSR8AduEjr5xW6%2BwTPfDrLQg4cJrtRBIdm4C5KdGoVQ1LRlI85eujUujhECrg9%2BoaIgw92y2jxBGFbmTeXROX0zCLhebP22Mw%2Fo6KygY6pgFLifdYeXApRf0touFntJEWcntmWYKHhEP8ZivLSdUgf7%2FgC9texLMXEXAgTHY8AwoIfdI9mPqzpnJvfFTRmcEzMWuBdJ5qSDWgXHmsgbGSXh%2FEC%2FDMok%2F%2FbtVIRlfSuXnZkYCmM6KiCwDCQ%2BNSoB5TIkaJ9nlUedlE%2FIE9yyq%2BZ3XAWeXVbcK5y5KzMpn7wieIr4LZZFWEtDblwMm%2F%2BkHuOUsJ0QsH&X-Amz-Signature=5caa6b32f2e614a6a58f0b1b57284eae175371a8d560d6c0504dec4f61360a39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5FJEDWS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4bk7Msl%2BcNjgrlFY%2FcsRESZtac79Sirzz1P4I2cBBTAiAy4OCUJISX6R2xhgFfjoH9f2kIabMBImLzMJxD%2FI4ZRCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMa3Vl1%2FhJNOFbrbDYKtwDZo9AUQuQKtqBew9yIomT6kq9lTuHcvCezc7Nc2n37NUiE71uYe9FriTJRjb5ea5QfTqjk4S27th0RihvqOG7w2aBrbJXgWKIRFoaDNKGKaAG0buO98e4tzFfT9ytNkHKmrYR1lQ4mB3ByeA1ADNrtlK%2B2z84W8kQ9gk2neNokhIX6N7ULKRLjlp3V7uGIy3V4l6uVK1jp0VaNjaCMGn5la%2FNZqcV%2FGJ3Fr%2BgZP%2BuJMjjYbWbBuI01AMOqrwzjTb3YmBMBzP%2B1SWagaYynxqnyGFyrUJynPbhn2H2sM71cajQ1e%2FD6edt0jZgq0WPsr4COge9V1vaMg3MWONRjB4qKq0V2cpKeYaNh%2FXbRzdJUJAv9%2F4ja4RhAWumS0aSdzXgsjt3aIjSVRmYXpYrUEYBvMt8uUZitSPkS1pWts241Wo28gX28UrI4r6CutjWlsvhEf1MJuMHbt%2Fb5dpWMwfjrig320yNfWEQvIVgvN62xYFybCkRPgxY0fA0VC9Si1wOmwZ5Fq%2FjQLSgGx7fDJHuN%2Bng%2F8mwSR8AduEjr5xW6%2BwTPfDrLQg4cJrtRBIdm4C5KdGoVQ1LRlI85eujUujhECrg9%2BoaIgw92y2jxBGFbmTeXROX0zCLhebP22Mw%2Fo6KygY6pgFLifdYeXApRf0touFntJEWcntmWYKHhEP8ZivLSdUgf7%2FgC9texLMXEXAgTHY8AwoIfdI9mPqzpnJvfFTRmcEzMWuBdJ5qSDWgXHmsgbGSXh%2FEC%2FDMok%2F%2FbtVIRlfSuXnZkYCmM6KiCwDCQ%2BNSoB5TIkaJ9nlUedlE%2FIE9yyq%2BZ3XAWeXVbcK5y5KzMpn7wieIr4LZZFWEtDblwMm%2F%2BkHuOUsJ0QsH&X-Amz-Signature=9b43ce2cd2ff7edf7c2bb3c8f717cf524693aceab960085b1c63931db07c9f07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

