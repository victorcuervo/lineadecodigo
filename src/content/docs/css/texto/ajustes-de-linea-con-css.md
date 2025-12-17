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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCDAA5Q4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe8HbvGsEX0WVCFxZMQMMiFnl7xow%2BScPRiD9iaH7ASAIhAK3pgEPZpCLNOD%2B6tWjKViNhkfUemZUFi86ZUC6QgwTKKv8DCHQQABoMNjM3NDIzMTgzODA1IgxunXCs1A9OoL1s8lAq3AMO00%2Bq4UVbwrNM1Ncxd6zDFbKdZPs%2FoTvFKB9IKXyDa9qly3Xs5tjOw51TkoEv18sr1I%2BYrHe2Pj9SX0rfMhZWsf9gVLZtI%2BApyrzu47615xn9O3YLeQbK4UOdPxjoF2UOwZTrgoFmSH%2FK3dCrPMdGD0rQ4WowVwMIiSW3L0wgwY7MnIYKqFnGMEyZ7V9IcVAH7g%2FhVtRJ%2FwpJJjLCLloytSyUdx%2FXqvlSdIDzZPK9%2FbkDv%2F%2BQvrDCqU%2FJ%2F3oMmBvC6c5qR23qDl%2F3NhsOVtcV0dl59RvHWovOWYKiFqvJsCzmc1lFU74HPOR7bY3cbk4cmYBaM%2BROeUX8NIGRfJUQX9cI1%2BXEDqsq%2B4sWVFgieyt4jn5OC507WgEW7ce4bkQw754jnigwpr4RV%2FAktmHs9jRnFBiMhkxS%2FBXnuex90l2ILLWy3rSIRlU%2BZWHSkQLVLg0SPr%2F7l%2F3nuVVYgdJtmZS%2BPD1pD8UdtNdCm7%2BnrIBr1SnLhfyo5RZvLSmBbG8oSYXcUJCSvxQKeizwVqiTj0ez4oack1lTRuWEG%2BBVHjNRC0ZqbGxsmzm5W3BrvM6IqeNeSz0VESMcYznf8nty%2Bonf33GyZRh13n%2BaLNY6jAUFqmtRI0uo%2FFy84TDDsYjKBjqkAe9UH1kiKvyXBST0xF0U6bIw67PasgQeB16bIgA0%2BKTjCcfffHX9N%2Bth1CExT967QxpJIsNyJjc%2FLkSgh3oXXt8bCDua51cUQ7qe24iaf5n9JwivtYQip3RMFfgSpuoaGXw9gxbfgX2eCOUIBq9bnagL5JLuxmXhhgghcxeYpijQaNZKlFMfVDUCZRSoHKT5eLcrXu%2BvLDwvPHbZ4qj7aCGaWSjT&X-Amz-Signature=f6056955b63c15a4dd267d7be313f219488ff7e838e3d3a8a480ef5e7abf042d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCDAA5Q4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe8HbvGsEX0WVCFxZMQMMiFnl7xow%2BScPRiD9iaH7ASAIhAK3pgEPZpCLNOD%2B6tWjKViNhkfUemZUFi86ZUC6QgwTKKv8DCHQQABoMNjM3NDIzMTgzODA1IgxunXCs1A9OoL1s8lAq3AMO00%2Bq4UVbwrNM1Ncxd6zDFbKdZPs%2FoTvFKB9IKXyDa9qly3Xs5tjOw51TkoEv18sr1I%2BYrHe2Pj9SX0rfMhZWsf9gVLZtI%2BApyrzu47615xn9O3YLeQbK4UOdPxjoF2UOwZTrgoFmSH%2FK3dCrPMdGD0rQ4WowVwMIiSW3L0wgwY7MnIYKqFnGMEyZ7V9IcVAH7g%2FhVtRJ%2FwpJJjLCLloytSyUdx%2FXqvlSdIDzZPK9%2FbkDv%2F%2BQvrDCqU%2FJ%2F3oMmBvC6c5qR23qDl%2F3NhsOVtcV0dl59RvHWovOWYKiFqvJsCzmc1lFU74HPOR7bY3cbk4cmYBaM%2BROeUX8NIGRfJUQX9cI1%2BXEDqsq%2B4sWVFgieyt4jn5OC507WgEW7ce4bkQw754jnigwpr4RV%2FAktmHs9jRnFBiMhkxS%2FBXnuex90l2ILLWy3rSIRlU%2BZWHSkQLVLg0SPr%2F7l%2F3nuVVYgdJtmZS%2BPD1pD8UdtNdCm7%2BnrIBr1SnLhfyo5RZvLSmBbG8oSYXcUJCSvxQKeizwVqiTj0ez4oack1lTRuWEG%2BBVHjNRC0ZqbGxsmzm5W3BrvM6IqeNeSz0VESMcYznf8nty%2Bonf33GyZRh13n%2BaLNY6jAUFqmtRI0uo%2FFy84TDDsYjKBjqkAe9UH1kiKvyXBST0xF0U6bIw67PasgQeB16bIgA0%2BKTjCcfffHX9N%2Bth1CExT967QxpJIsNyJjc%2FLkSgh3oXXt8bCDua51cUQ7qe24iaf5n9JwivtYQip3RMFfgSpuoaGXw9gxbfgX2eCOUIBq9bnagL5JLuxmXhhgghcxeYpijQaNZKlFMfVDUCZRSoHKT5eLcrXu%2BvLDwvPHbZ4qj7aCGaWSjT&X-Amz-Signature=9c5efece8f79c9d945d58c6d371ab99d52d2d7d86b9003059741f98f180234eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

