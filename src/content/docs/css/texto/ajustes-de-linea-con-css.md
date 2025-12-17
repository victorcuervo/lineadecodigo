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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQSFMTOA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBY92elIRr21aQ8ePSucklBTdTVmHW73ye%2FHkVd94JOpAiEA3hyClGMsenlfrfqOHJ%2BczdRq1GhrSJ%2BiPJWHo5FT9mEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLDlP4bXT%2F1K36dFHCrcA2897YqqBE5R6w3CqNL8a6fB3S%2Fp6XwCBxomTAgaqHAzptIt9dyJPVWQIdqIUz4cv44rZrl8NabtI2L5OH1tKbwEu7nLKw63YGkSS0NHqIN%2BgFr%2BE5xfoTTEIq87EWWPGjm5e9UOz4QMQiVeX7vqULRLZloow7%2B1TdgttjeRHHrNor5G34jtgYjflbPECg0UnTm3Q9jos%2Fzxy3caf5lCitQ3A69NaciQNrDgQHbKUe2x3QbwkEYcd9%2FBBB2H%2F7njRVzEs%2F9Ny0OZXOS6j76LiYmxVCzjZBZiq82OeWJ7349FgEOwLe%2Fv7vTgSz5%2Bz5st86rRZFKwbcTSFljwsB9K1NT3d%2B26xUYj0u63nEy4kp00aL2UMnO3rjRfjm7L%2FYpWB0MRYwWTHQHvWiMCx9JwOzhN41r%2BhMJ%2BXXk9YKjRiFdx9%2FetVC5dgTo7bPVmxZ6KDYBnQG4ojsxuyfnVvNtVwKisb%2BqiGrhHMGJUtGAyqSD0zeX0dUO2KlA821czFuliiH2p0vi2U0qpqxifJKfn52shmvJ9rmA36LERkvS20I7x3tA2TmNP3wu2%2FCcO614lQstkPQdz8nBN4xCu7MqbT3gbiWMmUD%2BWZLpD2ZKCH6nz5LENlOdIRToMDAHuMNSCicoGOqUBgsxTDRJP2J54veJRr%2Fctf0IJVr1TnxtzGKqh5ahj%2Bxa2Ar%2FM5uGETeoj3vEOxi9rzUTZrN8MPxCiKMbfvW7Zll5j9e1ANv5JWiq3MIVhtFkfb34wmnxZknQ3fEr%2FmcYQ%2BoJSTCPe2YPwyv%2FrY4sbeSektQlWhqQ0UDgMP6Q%2BrxnmGlW%2FMOuNrGe1fWbPLFVTDwyDLPcaWISYXUQkva7SiOxiHkfP&X-Amz-Signature=dbd7e7b0ab22aff54cf03a5d36067031da932df02433f36914bbaff36eec8eb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQSFMTOA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBY92elIRr21aQ8ePSucklBTdTVmHW73ye%2FHkVd94JOpAiEA3hyClGMsenlfrfqOHJ%2BczdRq1GhrSJ%2BiPJWHo5FT9mEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLDlP4bXT%2F1K36dFHCrcA2897YqqBE5R6w3CqNL8a6fB3S%2Fp6XwCBxomTAgaqHAzptIt9dyJPVWQIdqIUz4cv44rZrl8NabtI2L5OH1tKbwEu7nLKw63YGkSS0NHqIN%2BgFr%2BE5xfoTTEIq87EWWPGjm5e9UOz4QMQiVeX7vqULRLZloow7%2B1TdgttjeRHHrNor5G34jtgYjflbPECg0UnTm3Q9jos%2Fzxy3caf5lCitQ3A69NaciQNrDgQHbKUe2x3QbwkEYcd9%2FBBB2H%2F7njRVzEs%2F9Ny0OZXOS6j76LiYmxVCzjZBZiq82OeWJ7349FgEOwLe%2Fv7vTgSz5%2Bz5st86rRZFKwbcTSFljwsB9K1NT3d%2B26xUYj0u63nEy4kp00aL2UMnO3rjRfjm7L%2FYpWB0MRYwWTHQHvWiMCx9JwOzhN41r%2BhMJ%2BXXk9YKjRiFdx9%2FetVC5dgTo7bPVmxZ6KDYBnQG4ojsxuyfnVvNtVwKisb%2BqiGrhHMGJUtGAyqSD0zeX0dUO2KlA821czFuliiH2p0vi2U0qpqxifJKfn52shmvJ9rmA36LERkvS20I7x3tA2TmNP3wu2%2FCcO614lQstkPQdz8nBN4xCu7MqbT3gbiWMmUD%2BWZLpD2ZKCH6nz5LENlOdIRToMDAHuMNSCicoGOqUBgsxTDRJP2J54veJRr%2Fctf0IJVr1TnxtzGKqh5ahj%2Bxa2Ar%2FM5uGETeoj3vEOxi9rzUTZrN8MPxCiKMbfvW7Zll5j9e1ANv5JWiq3MIVhtFkfb34wmnxZknQ3fEr%2FmcYQ%2BoJSTCPe2YPwyv%2FrY4sbeSektQlWhqQ0UDgMP6Q%2BrxnmGlW%2FMOuNrGe1fWbPLFVTDwyDLPcaWISYXUQkva7SiOxiHkfP&X-Amz-Signature=104dcadd5757300ccca1f607706cae88dece99a7d821066b58b3ec57db17b0ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

