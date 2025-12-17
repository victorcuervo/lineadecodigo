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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QQVSKSP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRTFSJXrS5UXCOqE6SmbtMa7E2JLeqYzH2Gsm14pHhPwIhANmZA4sH6zQjiZrqXesxeJnfFcC8tNtAE8FCRN4bkNaoKv8DCHMQABoMNjM3NDIzMTgzODA1Igy9pTR2I2P%2FuOyLjU4q3AMhl9etPG77%2FyN5wY0i15eFxd2v3sQtkPDCHt5ozKCGf57vykZJzlRLlT9sd%2FHe5d%2FTKutAUfAMcnZAIyCRAv1OE4sHLTsC5GpCrvbHWVYgf35KDiDgsqI48CEMIHJXqYoJVbeS2YcXlBfLWXcsv4bfFFLhyEZ5OaEHNRuQpVclefZPSwD16%2FPNdAW%2FQMcVy%2FA2S%2FTHXWhtcJQuzomaBolWgG0TEmQ6OOVZqeupCoMU4i0jCLN9nPgP4VvlzCnMrD7HF3zEERErKTVUrQ%2B9eNpkgewD97PiUjabGFbb7nfbduFUG%2FpKzAZPLRN5Hauwb1zXsCg2H%2BhtSL%2B6oSclhz7IHP%2B6ZuvcPf8TwT1m%2FRZed3RvsszL%2FfvsYMwGI2Qvj4PojGXsYg7FJ0U4SczRHL1frkQpV0lDhi2MxUrNn%2BJZbyRGpzRDFLkGc6I71EffuRDF9wjlUm%2FPU6nIyrcPXiNqYuzAngkW5xz7p6DaDota11HsEeq7hKwwWjHzzb%2BqrpOGYzFa1V0%2F1lt6gxj8CfNv8mxR8gG4wJCOWqNZJYBdXUcvX3F8vwAj9d8UoLkiEu8%2BUzSclHdkiNi%2FySssCDkWeOgUJ5pxd1QEb0sojzlZ9rE52zR4qXqGomaQcDDdlojKBjqkAWkF%2BQPvDVQNqt9lp0nfklyQohoIQamZd4Yj%2BwINGUT%2BEnX1zjR6%2FFpZptzTb%2BSjhpMtHYEiPgw7fd2d9dOzWD3n5b2mVNNJ%2FuFN5Qz2ne10x%2F5a%2BvPGMQKkN%2FoUgSF%2BxUEATu%2B6yHXKWg0lYPn5lMrtMq2MndVqdsNtzU%2Bo2Zggjs0GXlGU5tDvz%2B%2FSM3c%2FuwQHsl6uw2RW692KHxdkynLSwn%2Bm&X-Amz-Signature=6cb9d345c0dd8fab24fdaee9ec56c73d06eb1b053815aef75f874d948528a22d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QQVSKSP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRTFSJXrS5UXCOqE6SmbtMa7E2JLeqYzH2Gsm14pHhPwIhANmZA4sH6zQjiZrqXesxeJnfFcC8tNtAE8FCRN4bkNaoKv8DCHMQABoMNjM3NDIzMTgzODA1Igy9pTR2I2P%2FuOyLjU4q3AMhl9etPG77%2FyN5wY0i15eFxd2v3sQtkPDCHt5ozKCGf57vykZJzlRLlT9sd%2FHe5d%2FTKutAUfAMcnZAIyCRAv1OE4sHLTsC5GpCrvbHWVYgf35KDiDgsqI48CEMIHJXqYoJVbeS2YcXlBfLWXcsv4bfFFLhyEZ5OaEHNRuQpVclefZPSwD16%2FPNdAW%2FQMcVy%2FA2S%2FTHXWhtcJQuzomaBolWgG0TEmQ6OOVZqeupCoMU4i0jCLN9nPgP4VvlzCnMrD7HF3zEERErKTVUrQ%2B9eNpkgewD97PiUjabGFbb7nfbduFUG%2FpKzAZPLRN5Hauwb1zXsCg2H%2BhtSL%2B6oSclhz7IHP%2B6ZuvcPf8TwT1m%2FRZed3RvsszL%2FfvsYMwGI2Qvj4PojGXsYg7FJ0U4SczRHL1frkQpV0lDhi2MxUrNn%2BJZbyRGpzRDFLkGc6I71EffuRDF9wjlUm%2FPU6nIyrcPXiNqYuzAngkW5xz7p6DaDota11HsEeq7hKwwWjHzzb%2BqrpOGYzFa1V0%2F1lt6gxj8CfNv8mxR8gG4wJCOWqNZJYBdXUcvX3F8vwAj9d8UoLkiEu8%2BUzSclHdkiNi%2FySssCDkWeOgUJ5pxd1QEb0sojzlZ9rE52zR4qXqGomaQcDDdlojKBjqkAWkF%2BQPvDVQNqt9lp0nfklyQohoIQamZd4Yj%2BwINGUT%2BEnX1zjR6%2FFpZptzTb%2BSjhpMtHYEiPgw7fd2d9dOzWD3n5b2mVNNJ%2FuFN5Qz2ne10x%2F5a%2BvPGMQKkN%2FoUgSF%2BxUEATu%2B6yHXKWg0lYPn5lMrtMq2MndVqdsNtzU%2Bo2Zggjs0GXlGU5tDvz%2B%2FSM3c%2FuwQHsl6uw2RW692KHxdkynLSwn%2Bm&X-Amz-Signature=23bfcb72c3191a522ea63fe95f820ca087b15ae75f2f2fa1bbc41747e5d4936d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

