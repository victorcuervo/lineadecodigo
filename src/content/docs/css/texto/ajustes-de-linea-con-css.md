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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PGUKU4W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPo%2F5JX4Ky5DbT29gITgMctiKTDi2GU2oaSO%2BZU5JkjAIhAI0ksuRqDylMgn077JLQswfswxgC9NHE570IxZMurbjQKv8DCH4QABoMNjM3NDIzMTgzODA1IgxpDWAJ2OY0Uf8WY6Eq3AN7UoaeNfUUPviLmNr%2Fwn5Wi3NGD2RSpR8DjbyrKo9X312P6JIqUv9yw5OmFuNhT%2B7xJFYt3n6wIYsNPJwwJ77t0IJqlvX4HTwdA%2FbaeKtb%2Bj8Z%2FC77SjwaTKTxS0oztWu5fDWn96ekLBWe8hjXKidMzkjt81lrQTR5mV8vpTJp9tKs6cRo8n087jTa6b4MMkJESy%2Bt8eRSmaVbn43rt0gykzki3YFhDbphJE6Em%2F%2BQHNTFyJE%2B6WLH5xSS3tol7%2BSFvKmcU8e1EhHrFRhDNcAOrxdaqSGP0MrQis413ZSbUr2gx7ulGihnOMB%2FEwCI6VIszxACt04BltFOc8EvSOypnCxfmx75JpvlnoPaHplqp3CbqEq4JVeKvKIatv1KdnoczXfll09DQkf2898X4VWafciKiAKqeYxcrRb%2B2bqympDMTlylTgR73eaMh933CsghliFwSQ34pC8sKiT6r2ucLpWhRXCkIDdUhpLPvbyZ2xKutR7%2BOfYrK4aBg6VtMQJRZOiD8HvSEr%2B8aJ8dTIAVH8mzOs%2FZwg21XQgdGfBHTMV%2B3e9W4dD9hmwKOmkJ6xMIe3mOVAEkqv2Ht8%2BFJ6I5BgaHaRvxD1cCSHqq0QJGB5%2BCtwkpFQ2yaN%2FWPDDwxYrKBjqkAbbHpcOdEidmiivlXii2u6kxkpLIW23iddDe6qnNKfMcV207wSWybplfm6qql8OF4Dvzb9Nz7LrGZ%2FQGWeUGAdun3xbJIK9VPgGnyEYtwdBoUMIwOeX1VZoemQ5sDu1gNmkP3mgeLcQ%2BlyVEFdadErE3RDJ2%2BLFF7jppGRKX0TRCFcw7hw8ePbpmlL04QSXH%2F4xN34oeosgf809D%2B5EjU7eZHqWS&X-Amz-Signature=4c91a37013d1941db5a96f25e635155427e45326b92560bb31776df930523079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PGUKU4W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPo%2F5JX4Ky5DbT29gITgMctiKTDi2GU2oaSO%2BZU5JkjAIhAI0ksuRqDylMgn077JLQswfswxgC9NHE570IxZMurbjQKv8DCH4QABoMNjM3NDIzMTgzODA1IgxpDWAJ2OY0Uf8WY6Eq3AN7UoaeNfUUPviLmNr%2Fwn5Wi3NGD2RSpR8DjbyrKo9X312P6JIqUv9yw5OmFuNhT%2B7xJFYt3n6wIYsNPJwwJ77t0IJqlvX4HTwdA%2FbaeKtb%2Bj8Z%2FC77SjwaTKTxS0oztWu5fDWn96ekLBWe8hjXKidMzkjt81lrQTR5mV8vpTJp9tKs6cRo8n087jTa6b4MMkJESy%2Bt8eRSmaVbn43rt0gykzki3YFhDbphJE6Em%2F%2BQHNTFyJE%2B6WLH5xSS3tol7%2BSFvKmcU8e1EhHrFRhDNcAOrxdaqSGP0MrQis413ZSbUr2gx7ulGihnOMB%2FEwCI6VIszxACt04BltFOc8EvSOypnCxfmx75JpvlnoPaHplqp3CbqEq4JVeKvKIatv1KdnoczXfll09DQkf2898X4VWafciKiAKqeYxcrRb%2B2bqympDMTlylTgR73eaMh933CsghliFwSQ34pC8sKiT6r2ucLpWhRXCkIDdUhpLPvbyZ2xKutR7%2BOfYrK4aBg6VtMQJRZOiD8HvSEr%2B8aJ8dTIAVH8mzOs%2FZwg21XQgdGfBHTMV%2B3e9W4dD9hmwKOmkJ6xMIe3mOVAEkqv2Ht8%2BFJ6I5BgaHaRvxD1cCSHqq0QJGB5%2BCtwkpFQ2yaN%2FWPDDwxYrKBjqkAbbHpcOdEidmiivlXii2u6kxkpLIW23iddDe6qnNKfMcV207wSWybplfm6qql8OF4Dvzb9Nz7LrGZ%2FQGWeUGAdun3xbJIK9VPgGnyEYtwdBoUMIwOeX1VZoemQ5sDu1gNmkP3mgeLcQ%2BlyVEFdadErE3RDJ2%2BLFF7jppGRKX0TRCFcw7hw8ePbpmlL04QSXH%2F4xN34oeosgf809D%2B5EjU7eZHqWS&X-Amz-Signature=dbc12326f3929cb1d1a6d2374b90a9a38cebdc8c312bfedb9ec07bbb0f355876&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

