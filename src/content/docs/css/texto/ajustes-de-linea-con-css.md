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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLECIP7W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApzZaqkxGTlHTVEOHEZODDoSdGYAoaLYKLY9S4S6oQcAiEAytndZYgyf0BQvKgHM4OpN0%2FMV%2FNyDgW4CwKm1ytsJEgq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBKhmz0rKc0DK9seQyrcA3opc1QYKBk%2BA2G70ArjXhOM2GWIecyz5KbxtPTMDa4FTDsdYXLR0Trta3TMrP3a6N4fUp1iI1AwAORyzNaITTOKbEqEehsVZ1xbnbNBuYI0%2BoQG72%2B1fY8atnIMdCQWMeOyKTT%2Bo%2BCklrJPFBluZowM8C%2FHd4AlrVXhTHZkFI1U%2F1mr21qq4wDuPGqelB%2BOvFAhpctv74%2BwjyZ2dkaxrgD8v%2F8Yb1A75N2u0%2Bf05VYiRE6UOnuatlGfikbleCXeCvvP9sS5dUQaHRGGzIXlJfSxxxJ8Imlnlk7JlzYFOGXhGHHKqOWQ6uc8lcc0YmGDDyAx0dQqE2EiCSFhW40G4RxnBR21sHicHKBoJN7PSjht%2FS55b4oWvqQa%2FomgtcZYyRj2t4cQLm6xsGKq5lAk0xD5RytSXnVXSDEsYYZ3KcwKeG8x37firIALwB1oNbKhVlIN8TCh1TSFm87gHjPP2txAe%2ByunTOOWlAlpQHAcUx%2FnwbTsQi5CFL2Cxw2nwXulFTLz1u2zoCzx4SnfBVCJ1Nue0IdWr8%2FGWIEda8U8GNxw%2Bm8EMUk5SAfR7ISGMVi98X3kQH1JW1yV1ZvtJ%2Frwsogoy%2FTIvMwL8TnQO5t9Gy7wHFMxrpILOeYRk6LMJqcicoGOqUBGshew0V9ww9koQWnWmldRPZMXxvHGBsge6hicInT8sEUsnfEicxSx9NNex1yRot78O0D4Dh7KticwOiWwgZ8RwCxySsQpFyQKeXmTts3nDHpoSlmYYcxTrW6T1ZLkSeJ4AwoGWwhiJvKj4v8kbIhjapzQPdjvXOhq4ivpx8aIUYLPIRbv7VYT12%2BTDEhp%2Bj00%2FsdVzqSO0vX2BHj8F0InVDZCQoW&X-Amz-Signature=5c266dbdedc0c9447ac4e0047a8188e936b90a60a7184a431591f9ebc61451be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLECIP7W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApzZaqkxGTlHTVEOHEZODDoSdGYAoaLYKLY9S4S6oQcAiEAytndZYgyf0BQvKgHM4OpN0%2FMV%2FNyDgW4CwKm1ytsJEgq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBKhmz0rKc0DK9seQyrcA3opc1QYKBk%2BA2G70ArjXhOM2GWIecyz5KbxtPTMDa4FTDsdYXLR0Trta3TMrP3a6N4fUp1iI1AwAORyzNaITTOKbEqEehsVZ1xbnbNBuYI0%2BoQG72%2B1fY8atnIMdCQWMeOyKTT%2Bo%2BCklrJPFBluZowM8C%2FHd4AlrVXhTHZkFI1U%2F1mr21qq4wDuPGqelB%2BOvFAhpctv74%2BwjyZ2dkaxrgD8v%2F8Yb1A75N2u0%2Bf05VYiRE6UOnuatlGfikbleCXeCvvP9sS5dUQaHRGGzIXlJfSxxxJ8Imlnlk7JlzYFOGXhGHHKqOWQ6uc8lcc0YmGDDyAx0dQqE2EiCSFhW40G4RxnBR21sHicHKBoJN7PSjht%2FS55b4oWvqQa%2FomgtcZYyRj2t4cQLm6xsGKq5lAk0xD5RytSXnVXSDEsYYZ3KcwKeG8x37firIALwB1oNbKhVlIN8TCh1TSFm87gHjPP2txAe%2ByunTOOWlAlpQHAcUx%2FnwbTsQi5CFL2Cxw2nwXulFTLz1u2zoCzx4SnfBVCJ1Nue0IdWr8%2FGWIEda8U8GNxw%2Bm8EMUk5SAfR7ISGMVi98X3kQH1JW1yV1ZvtJ%2Frwsogoy%2FTIvMwL8TnQO5t9Gy7wHFMxrpILOeYRk6LMJqcicoGOqUBGshew0V9ww9koQWnWmldRPZMXxvHGBsge6hicInT8sEUsnfEicxSx9NNex1yRot78O0D4Dh7KticwOiWwgZ8RwCxySsQpFyQKeXmTts3nDHpoSlmYYcxTrW6T1ZLkSeJ4AwoGWwhiJvKj4v8kbIhjapzQPdjvXOhq4ivpx8aIUYLPIRbv7VYT12%2BTDEhp%2Bj00%2FsdVzqSO0vX2BHj8F0InVDZCQoW&X-Amz-Signature=5b1615b84a71c27462d25d209f4e9b4633f5900066b2a0c8f23728ebd892a64e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

