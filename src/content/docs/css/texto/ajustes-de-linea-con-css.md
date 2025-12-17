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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTBSNIEW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBj8npUdycd4EGBTJS%2Bchd6P5hs21Caa1CC3ccCx%2Bs9kAiBwFR4%2BVfkIBWaQrSi%2Bjhuhw3MbenLdJGjoECLV6b5MCir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMgJ0bc3r8KynvHqLYKtwDp95jB%2FLhRtvWpm8T20qHQnkZrOQlErzyoXDcjPrf5aRLWeyIEp6pZlo1YD7n8CUZ0203kLSCbPXpvu0WBxXECDx8JEgqVyNkRK%2FoHdCjvD9c6nE1HZnWm2H3gVuYISsqJHfXjF9Rl8OcBDeY1Ni5WTg3InNkKQzznUdbJEabiFVYgmTtTy11Ybhp%2FOipI9Va%2Bc%2BqeUQeahRayHAH41zpGgEOFhwxenvah6aNccn9tNKwxFHowIAJBI0nhbtocCco3i6y4REF0ECIFq1Cfs3IwsC17EzqCVPUC3ZTS%2BeiexcC%2FucIYXqTU2lc9BXQvD3VWv6WQpIqvvMQoxs8BegL4i2CSFkS4%2F0MbUHstY%2FE4AF53QsbcbhTs3be6CLBpXEXFDfqJphDVtHJQSrMtcIVSPavlDeKKIpYErxltPok9pRMg0FPae%2Fv9PqA7Bqm%2BZP95T3tkWwip1xxUEq6K3JLVsnZCASU9wxfCJ7GrxCR%2BQRhNHwdPQxO4OV%2Fv%2F%2FJ7votYb0eDM3qIHU5Uu5AC5C%2FVTNUqdcTD%2FkShu6uWhhpNhLC6jLGE2COpQpRracUW9qHxpsh8uIJ7RwcUL8r4%2FBzU6EeYEU7ofWuY%2BoKd9AMZb5csA4ILWhRbynC4pcw7%2FuHygY6pgF9asUBQrlvz2n8wQqblFxcbUiBbD0ohqMw%2FzLe%2BZIGNnb%2FeUgHhz8I%2FFY%2BxrsxI6cXYPylrXuwory6UOSeY9TgH6Sp36mY%2B%2BCZfKv2EKyz5yipX0RYBOyjMfMWH3Ktca8aSfefUTIbDUMelrrFbDXkNfgP2L%2F0y9D0SfDQIPZ3ME4AY3M5ZjXJn4SHdXWtN%2Fdg7sJgcyFFoqZ37YzpjHhdW%2BvQ7YEy&X-Amz-Signature=1c58446f232c5abfd731df39cf7d1f18846bcf9e0813f00800f6e735d5acc9e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTBSNIEW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBj8npUdycd4EGBTJS%2Bchd6P5hs21Caa1CC3ccCx%2Bs9kAiBwFR4%2BVfkIBWaQrSi%2Bjhuhw3MbenLdJGjoECLV6b5MCir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMgJ0bc3r8KynvHqLYKtwDp95jB%2FLhRtvWpm8T20qHQnkZrOQlErzyoXDcjPrf5aRLWeyIEp6pZlo1YD7n8CUZ0203kLSCbPXpvu0WBxXECDx8JEgqVyNkRK%2FoHdCjvD9c6nE1HZnWm2H3gVuYISsqJHfXjF9Rl8OcBDeY1Ni5WTg3InNkKQzznUdbJEabiFVYgmTtTy11Ybhp%2FOipI9Va%2Bc%2BqeUQeahRayHAH41zpGgEOFhwxenvah6aNccn9tNKwxFHowIAJBI0nhbtocCco3i6y4REF0ECIFq1Cfs3IwsC17EzqCVPUC3ZTS%2BeiexcC%2FucIYXqTU2lc9BXQvD3VWv6WQpIqvvMQoxs8BegL4i2CSFkS4%2F0MbUHstY%2FE4AF53QsbcbhTs3be6CLBpXEXFDfqJphDVtHJQSrMtcIVSPavlDeKKIpYErxltPok9pRMg0FPae%2Fv9PqA7Bqm%2BZP95T3tkWwip1xxUEq6K3JLVsnZCASU9wxfCJ7GrxCR%2BQRhNHwdPQxO4OV%2Fv%2F%2FJ7votYb0eDM3qIHU5Uu5AC5C%2FVTNUqdcTD%2FkShu6uWhhpNhLC6jLGE2COpQpRracUW9qHxpsh8uIJ7RwcUL8r4%2FBzU6EeYEU7ofWuY%2BoKd9AMZb5csA4ILWhRbynC4pcw7%2FuHygY6pgF9asUBQrlvz2n8wQqblFxcbUiBbD0ohqMw%2FzLe%2BZIGNnb%2FeUgHhz8I%2FFY%2BxrsxI6cXYPylrXuwory6UOSeY9TgH6Sp36mY%2B%2BCZfKv2EKyz5yipX0RYBOyjMfMWH3Ktca8aSfefUTIbDUMelrrFbDXkNfgP2L%2F0y9D0SfDQIPZ3ME4AY3M5ZjXJn4SHdXWtN%2Fdg7sJgcyFFoqZ37YzpjHhdW%2BvQ7YEy&X-Amz-Signature=c154ad7007cde7c3cf2edbca9b4061bdf429b7db794aa0b328d7544c420bdd91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

