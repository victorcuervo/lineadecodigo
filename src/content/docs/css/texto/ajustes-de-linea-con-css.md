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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIXL4NHV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuA9dH%2FHYVDvF%2BPa73OxQZFiClcgQ6snOaAbkFnmQEkQIhALAMCFvjsVj9DaMK7bM%2B%2BRRX4bowQT9btt8o%2F1VGj0ztKv8DCHQQABoMNjM3NDIzMTgzODA1Igy6fhRdzksn3%2FOqt9Qq3APkTaBJUjQvduXEiVAfy7q4SVRuuXbJczAvZHZDCcXnAiNDIxlAdM%2FnY5%2FsICKreL3nTmno%2BudZhN%2FXt8uBouYXrqKB3cgo5Uor%2BV8kU9zbmDfcPWkCA1V6597EN5GPU3zSkPtf4F5hqasw40pWUE%2FDfXnkKsgO5xlFHYDdr1EcebP%2BN%2B4GLHYR1Lw1kOpibmhHoSaimxZIdvftLVSJry2iRdsvHITJVcLJjM5xPhTuttj%2FBzIpiFgFzewzHQZZIxfPh%2FVF1xYLXmXIoMhg%2FS4fU3cEIfddSdDqHlBpoU0MbqyixYQtEcE30omafzeVKNTM29NqjcNIU2Z%2F8VbHo3SkQgsQ2%2BmDqiNbYtbw03hb6v5qd34I74Ykj9uaRIS7ylr2I3HbPuYDst7Zf7CwiclFUyMGX%2B4ea4ZYdCaCsvNZGB%2FwERKg3qcH93%2FP0dLSZO2WVRJx%2FZyy74kPC42%2BKTwDxGOzM0vZH9Wayie3yPZAGOFxzt%2B6e%2F4Eiq5ALNn%2B2bP4SXAWgUQd0O16mmAbdzanka%2BTIkjb7uoZF%2FUTe3MgkSUV5cBPLE2vK19c7UEbtTmesjYI6bA0hGeLTftjHeMprkZ59fTRbzh9k%2FO76GKQ6eUp6b75yncsWW7jGjDLsYjKBjqkAf4PSYEKSH13SGmLqA2mAKRG9R3FoUzfqZ0FJLVwCcRC8f330SkWAIXjCfnUm61hImn2peBwdy5u5DSJoZ%2BSWRliz5OeE05ngXWeV06UsdJWDuIcU1HNSQaJ92R4S1RZxv3JP3a8QrASVhtSXj1WJDjfVK9TKrctC1dKy7ngTauEs8sgncNiT49sR2CNHAHeJtnL63qJcJcZXZ2SKK9C5%2FbbFf0%2B&X-Amz-Signature=f8ff7c8bbe406e840051784d3092cd564d8b1492f80a5f03a70ce343a55412c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIXL4NHV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuA9dH%2FHYVDvF%2BPa73OxQZFiClcgQ6snOaAbkFnmQEkQIhALAMCFvjsVj9DaMK7bM%2B%2BRRX4bowQT9btt8o%2F1VGj0ztKv8DCHQQABoMNjM3NDIzMTgzODA1Igy6fhRdzksn3%2FOqt9Qq3APkTaBJUjQvduXEiVAfy7q4SVRuuXbJczAvZHZDCcXnAiNDIxlAdM%2FnY5%2FsICKreL3nTmno%2BudZhN%2FXt8uBouYXrqKB3cgo5Uor%2BV8kU9zbmDfcPWkCA1V6597EN5GPU3zSkPtf4F5hqasw40pWUE%2FDfXnkKsgO5xlFHYDdr1EcebP%2BN%2B4GLHYR1Lw1kOpibmhHoSaimxZIdvftLVSJry2iRdsvHITJVcLJjM5xPhTuttj%2FBzIpiFgFzewzHQZZIxfPh%2FVF1xYLXmXIoMhg%2FS4fU3cEIfddSdDqHlBpoU0MbqyixYQtEcE30omafzeVKNTM29NqjcNIU2Z%2F8VbHo3SkQgsQ2%2BmDqiNbYtbw03hb6v5qd34I74Ykj9uaRIS7ylr2I3HbPuYDst7Zf7CwiclFUyMGX%2B4ea4ZYdCaCsvNZGB%2FwERKg3qcH93%2FP0dLSZO2WVRJx%2FZyy74kPC42%2BKTwDxGOzM0vZH9Wayie3yPZAGOFxzt%2B6e%2F4Eiq5ALNn%2B2bP4SXAWgUQd0O16mmAbdzanka%2BTIkjb7uoZF%2FUTe3MgkSUV5cBPLE2vK19c7UEbtTmesjYI6bA0hGeLTftjHeMprkZ59fTRbzh9k%2FO76GKQ6eUp6b75yncsWW7jGjDLsYjKBjqkAf4PSYEKSH13SGmLqA2mAKRG9R3FoUzfqZ0FJLVwCcRC8f330SkWAIXjCfnUm61hImn2peBwdy5u5DSJoZ%2BSWRliz5OeE05ngXWeV06UsdJWDuIcU1HNSQaJ92R4S1RZxv3JP3a8QrASVhtSXj1WJDjfVK9TKrctC1dKy7ngTauEs8sgncNiT49sR2CNHAHeJtnL63qJcJcZXZ2SKK9C5%2FbbFf0%2B&X-Amz-Signature=52914c233318014378901e6bba8065c2a6f87b163910c497e9ce6f08b9b8849c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

