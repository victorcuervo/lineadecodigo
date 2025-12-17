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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR7FK7FK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgJDpzw1PPSgSwLc1epOifn80QH%2FAnzVQLsRjUK7IUHAIhAMg3SMFyUkthPMJsgWTA00KZYPX0CabMYgZYqDFnoEBWKv8DCHQQABoMNjM3NDIzMTgzODA1IgyJ6bwA7BzvjA3yi6kq3AM2sQkp4mOkjHl3g7YT6VdQ%2BWhlhNeRZrOIonaEK70l60hTcLpvXRWcT4dFZEidja4weDlmEh8gjE4YTthq6rTJTk6f0hknkWeMu09pNly93s%2FtU7bxaNvbiBeDlLdkhTdixnvY6B%2Fpt6A70l2Ot0xQip%2Bd1yAHcBOzKbsOdDnWjZ9vY9DngVxxmzPjOtb0gyNGhMmhTiEdvZdGhzculh9XQ1G8uP9LBo172rkyNrgoTNPl5JaDmYkABeyubwpjBpZSCYTW9shmJAqo%2FFRB3rVbRMmuyjKcqmzxp55JMGOJwiyup61DjBY8LBFjV8j897qMgs%2FFA26FL4HsUQQCflTRf4UIHoox7QkYbRqKB5%2FN5MaCGjPayAWXm3qhnnAb%2Bya3Qs6Hn8dxlY%2FNWU%2FTJ5oy0qFOEo2lIZX7bIvA%2BQ8LbX0czYr8BxMSbqcrxW9zjzwN0cYh8LfBT8kpRlcHHTy1NTi%2BxlMu8wbLFQu59Mh%2FHB%2BDgZxCyL%2Bn2LcWAHX0McHtMhluxha9jGsly2zJRs29S%2F1y9y0ilRGqzFBFtrLMds43ZwPmADPls3EKmiD2Mo0Kb0guPVIx7uKmN2zWLgvaDRdVoxbN6ok1ezyBnW%2FYYwuYG%2FmM8fDkoEDDRjDKsYjKBjqkAcE9gMxpwR%2FtoPBLKGkluIgQOe46csfyJvfae1enM1HxT1W7sQhfwNTUar%2FVY7DFl1Wym5dqIkK5P5j7uafkiMD%2FE0u3BeP96%2BRHF0DdGHAN5zEEsQ5KCW3vP2S5DzNYDLwgNfbvVzYkRc5S19JE2ycmopnrLnApfFNn0ZbbCa%2BwyZYcNFB7QvXqq4XfxnFRSEg5kvWhr8Ujn40OSo77vjwi1ppH&X-Amz-Signature=6ad092f29724aaf1b646de67ba4eea992daabf56e49c39ce1ec586aa8a707d05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR7FK7FK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgJDpzw1PPSgSwLc1epOifn80QH%2FAnzVQLsRjUK7IUHAIhAMg3SMFyUkthPMJsgWTA00KZYPX0CabMYgZYqDFnoEBWKv8DCHQQABoMNjM3NDIzMTgzODA1IgyJ6bwA7BzvjA3yi6kq3AM2sQkp4mOkjHl3g7YT6VdQ%2BWhlhNeRZrOIonaEK70l60hTcLpvXRWcT4dFZEidja4weDlmEh8gjE4YTthq6rTJTk6f0hknkWeMu09pNly93s%2FtU7bxaNvbiBeDlLdkhTdixnvY6B%2Fpt6A70l2Ot0xQip%2Bd1yAHcBOzKbsOdDnWjZ9vY9DngVxxmzPjOtb0gyNGhMmhTiEdvZdGhzculh9XQ1G8uP9LBo172rkyNrgoTNPl5JaDmYkABeyubwpjBpZSCYTW9shmJAqo%2FFRB3rVbRMmuyjKcqmzxp55JMGOJwiyup61DjBY8LBFjV8j897qMgs%2FFA26FL4HsUQQCflTRf4UIHoox7QkYbRqKB5%2FN5MaCGjPayAWXm3qhnnAb%2Bya3Qs6Hn8dxlY%2FNWU%2FTJ5oy0qFOEo2lIZX7bIvA%2BQ8LbX0czYr8BxMSbqcrxW9zjzwN0cYh8LfBT8kpRlcHHTy1NTi%2BxlMu8wbLFQu59Mh%2FHB%2BDgZxCyL%2Bn2LcWAHX0McHtMhluxha9jGsly2zJRs29S%2F1y9y0ilRGqzFBFtrLMds43ZwPmADPls3EKmiD2Mo0Kb0guPVIx7uKmN2zWLgvaDRdVoxbN6ok1ezyBnW%2FYYwuYG%2FmM8fDkoEDDRjDKsYjKBjqkAcE9gMxpwR%2FtoPBLKGkluIgQOe46csfyJvfae1enM1HxT1W7sQhfwNTUar%2FVY7DFl1Wym5dqIkK5P5j7uafkiMD%2FE0u3BeP96%2BRHF0DdGHAN5zEEsQ5KCW3vP2S5DzNYDLwgNfbvVzYkRc5S19JE2ycmopnrLnApfFNn0ZbbCa%2BwyZYcNFB7QvXqq4XfxnFRSEg5kvWhr8Ujn40OSo77vjwi1ppH&X-Amz-Signature=455257ef912558c5fff83ecef5e7b5faf937b5f2e0a8f82fa84a80c8afd6047e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

