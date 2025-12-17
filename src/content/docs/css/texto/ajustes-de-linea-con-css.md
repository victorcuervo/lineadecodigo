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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NHU64FZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvzwDuU4ny810KutSOSPKLe%2BuwXMyIep4K0kMFYoRqSAiB8qcv85MAbp5MYgSS%2BODawVqVOOnX%2BRZdaWto6HI4MZir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMzgufWmRFUjYQE2grKtwDkh2Ia7CfQ0AnG%2FsEe2BPV25NQrf26Sw%2FWB%2B6S%2BRXS5fvuyB9LnO8kKSkWatoeg2gaGQzuTqdsqkMhIIkhkllnQxVvA2Ygi8Zd5vfm%2BqlvvchnNXcNRAVgytuqlt9mKIS%2B9qKegCrnfpLrH8xP6q4IuLc%2B%2BP0233juNw%2FQPpDVOkkOtIv0gojjRu0uQh1RdilEBPT4Y3nlIrWoUlHgMw6MXy8FA1Oxbcg2IKo8kEw2Y8NgdsxcrrRZaB0gSgPcvtlHsXAts2QcX%2B1klHdeNJGdnKw4RkVXzmDT3c5R2mXn%2FGdUPwN%2F3nnmAnClXCn4ohWwhtnQx6xh1qWfsacuTk4MEGjGJk3NXl6NxO%2BIo9W5muuF5vC%2FzbC3h7kXyRkygyKZ1eMp4UdP7t9%2BgH5tu2fad79Jkd9JsDRrFKEoOJfrcUgC4RApdU%2B4EvL3MngBGQwHOQcm7qy8%2BvFonXVwhB6Oaa098H2pQF42%2F4NkfQh7S9szUb7L6dUh9lRcxZdYr%2FEBi2Oy0wq5kKJOJAgRgH8qoucZFARCaKF7MSfwUpDG8cCFysY15Z8x%2B0ORUAh7tj8wcZbvPhMauWM0EppZ1VkmweIx9oP68%2BBJQ4M%2FYPuylSDvGKyQb7b%2FFlRqiEw8PCJygY6pgFh8D9BBFGHeZ%2F4klkLTx%2Bg%2Bgx9WdsNkoRIPtNpCwSoi%2FNhV2o%2FciOR66pFEDlOsUSoL1ojwHGIVNFxq2Jlk5Uf0RsWVZq%2FcOxAdNpwXUpxfc3QcWFiTpwU0cdaznDJJHi6HbaznwxQLCjsk8zs7mzk4q1IiO534eL4%2FORtE%2FEgt7vKifAhdrR5mExa2m4CdWHgFxFp1ivapLVQIZAbkYDx4uyk4OmF&X-Amz-Signature=f6b344cd0736eae3335037b03c5427373721dfb4bb763f61ff5bf307c46066b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NHU64FZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvzwDuU4ny810KutSOSPKLe%2BuwXMyIep4K0kMFYoRqSAiB8qcv85MAbp5MYgSS%2BODawVqVOOnX%2BRZdaWto6HI4MZir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMzgufWmRFUjYQE2grKtwDkh2Ia7CfQ0AnG%2FsEe2BPV25NQrf26Sw%2FWB%2B6S%2BRXS5fvuyB9LnO8kKSkWatoeg2gaGQzuTqdsqkMhIIkhkllnQxVvA2Ygi8Zd5vfm%2BqlvvchnNXcNRAVgytuqlt9mKIS%2B9qKegCrnfpLrH8xP6q4IuLc%2B%2BP0233juNw%2FQPpDVOkkOtIv0gojjRu0uQh1RdilEBPT4Y3nlIrWoUlHgMw6MXy8FA1Oxbcg2IKo8kEw2Y8NgdsxcrrRZaB0gSgPcvtlHsXAts2QcX%2B1klHdeNJGdnKw4RkVXzmDT3c5R2mXn%2FGdUPwN%2F3nnmAnClXCn4ohWwhtnQx6xh1qWfsacuTk4MEGjGJk3NXl6NxO%2BIo9W5muuF5vC%2FzbC3h7kXyRkygyKZ1eMp4UdP7t9%2BgH5tu2fad79Jkd9JsDRrFKEoOJfrcUgC4RApdU%2B4EvL3MngBGQwHOQcm7qy8%2BvFonXVwhB6Oaa098H2pQF42%2F4NkfQh7S9szUb7L6dUh9lRcxZdYr%2FEBi2Oy0wq5kKJOJAgRgH8qoucZFARCaKF7MSfwUpDG8cCFysY15Z8x%2B0ORUAh7tj8wcZbvPhMauWM0EppZ1VkmweIx9oP68%2BBJQ4M%2FYPuylSDvGKyQb7b%2FFlRqiEw8PCJygY6pgFh8D9BBFGHeZ%2F4klkLTx%2Bg%2Bgx9WdsNkoRIPtNpCwSoi%2FNhV2o%2FciOR66pFEDlOsUSoL1ojwHGIVNFxq2Jlk5Uf0RsWVZq%2FcOxAdNpwXUpxfc3QcWFiTpwU0cdaznDJJHi6HbaznwxQLCjsk8zs7mzk4q1IiO534eL4%2FORtE%2FEgt7vKifAhdrR5mExa2m4CdWHgFxFp1ivapLVQIZAbkYDx4uyk4OmF&X-Amz-Signature=08e633c8aba6161de4b1a9b4891ef1d3f13d6ce39ffb9c221e2483d4596aa1e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

