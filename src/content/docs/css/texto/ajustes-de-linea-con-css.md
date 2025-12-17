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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDKUMH4T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHxustmH6%2BwUvrdJjtre1aT8qKxNvPv85WwsafgTVjW%2BAiB3w%2FDy1N8Bgh%2F6gXBduVE7svfEcbh2b%2Bn6VwUDKcOd5Sr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMQX2UtOmAwAiE4mHCKtwDJVfxvR1AHgQmANde4N%2BeaeL7av86JyRoTe2NyEXIJWOFwP1Pc1vuduTO9g8DK1KqmfV50xS2MDw23disI%2FhiioZWCo7WhBqpetFfE05jp4PFGxCVKZDvpj6O0rxHQq9g5G6PFLdXt3O7zvzPjkytGjmGZQhNGSyQTmCd42hcqrIKP%2B0HPF3WgmYBjEGRRaISVrt5hPXEW98N%2Bb383Var9ihp6NOq2bY0SgqDjJ6hzEirJyqzVpzuyM6eAusGW22T8DkgquTRklV1Hk6vjafTbM52Z9yYz%2FFahQ6082%2FL%2Bhtu7lc0nM%2B3m%2BMKLTfXEbZhjUuzj8A%2Byfuq%2FmiZgJWoPqx0jKwK%2Fh7KtPG0VWTr1HQo8zTkE79Flc%2Bjk86XwNjlkcamXaGEhXmlJXV202%2F9K2Fvb%2B9%2FznVI6EtMMdc1n7S8nuuikbnIworuzcst8eEKLJ4IOsxCrY69NdJG2gzY1ZU4E9XT%2BKpDy1NWfVVPGV7P%2FPoJUbqwqSAlxwqn7af5vzIj0GaitFn1F8K2qgP%2BG%2BTsiwTvXMKNg0bw9LQPsEhgkI2ZNiILx7sv4CkZf%2FxumGSBoCd%2FC8jo2DmRw9UKhAfV0hQ%2BTv4CQ96Dzwmb1ltt9OAgO0IH%2FAVjSmcw07KIygY6pgEzENtjRrTFNFfOobWFoTS4Lo4ryX%2BqL59RUjyCEplyFwhPGhQI1BM3x2gmP8j1ilKQrVec14RWczg4a2ESO8btZjLb45DuYg4UZyG1F3yurDwW8OBBPlC1hyEy6HiaQafjpdJiEjZriQFjgVV6vfowmJw17%2BPv8ikoZsVTiJHZVF7HYq6tKKQiLyjx1YndDoaE%2FB5drsqlMbxkLM2vvuVmlFzlSHo6&X-Amz-Signature=25a4ace7af3cbc1ae541c34a9bb160d9bb7793f12f02a61dff7c4d6c2413d0b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDKUMH4T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHxustmH6%2BwUvrdJjtre1aT8qKxNvPv85WwsafgTVjW%2BAiB3w%2FDy1N8Bgh%2F6gXBduVE7svfEcbh2b%2Bn6VwUDKcOd5Sr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMQX2UtOmAwAiE4mHCKtwDJVfxvR1AHgQmANde4N%2BeaeL7av86JyRoTe2NyEXIJWOFwP1Pc1vuduTO9g8DK1KqmfV50xS2MDw23disI%2FhiioZWCo7WhBqpetFfE05jp4PFGxCVKZDvpj6O0rxHQq9g5G6PFLdXt3O7zvzPjkytGjmGZQhNGSyQTmCd42hcqrIKP%2B0HPF3WgmYBjEGRRaISVrt5hPXEW98N%2Bb383Var9ihp6NOq2bY0SgqDjJ6hzEirJyqzVpzuyM6eAusGW22T8DkgquTRklV1Hk6vjafTbM52Z9yYz%2FFahQ6082%2FL%2Bhtu7lc0nM%2B3m%2BMKLTfXEbZhjUuzj8A%2Byfuq%2FmiZgJWoPqx0jKwK%2Fh7KtPG0VWTr1HQo8zTkE79Flc%2Bjk86XwNjlkcamXaGEhXmlJXV202%2F9K2Fvb%2B9%2FznVI6EtMMdc1n7S8nuuikbnIworuzcst8eEKLJ4IOsxCrY69NdJG2gzY1ZU4E9XT%2BKpDy1NWfVVPGV7P%2FPoJUbqwqSAlxwqn7af5vzIj0GaitFn1F8K2qgP%2BG%2BTsiwTvXMKNg0bw9LQPsEhgkI2ZNiILx7sv4CkZf%2FxumGSBoCd%2FC8jo2DmRw9UKhAfV0hQ%2BTv4CQ96Dzwmb1ltt9OAgO0IH%2FAVjSmcw07KIygY6pgEzENtjRrTFNFfOobWFoTS4Lo4ryX%2BqL59RUjyCEplyFwhPGhQI1BM3x2gmP8j1ilKQrVec14RWczg4a2ESO8btZjLb45DuYg4UZyG1F3yurDwW8OBBPlC1hyEy6HiaQafjpdJiEjZriQFjgVV6vfowmJw17%2BPv8ikoZsVTiJHZVF7HYq6tKKQiLyjx1YndDoaE%2FB5drsqlMbxkLM2vvuVmlFzlSHo6&X-Amz-Signature=0a2add58037e89fb7252baabee49d5f2c31a4ee712e32bedaf78d489f632e1fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

