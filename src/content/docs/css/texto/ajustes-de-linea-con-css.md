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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLICRAU2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkPODmnD%2BLvkUkFmpxSuBgYxewfZIavq0d%2B%2Bhne%2BEseAiEA0kMAM1Ng%2F%2FZ2xtHNVaSR0W1iXL17M6pkKx67BCOjsT8q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDH5wQVOhApVR2PMg6yrcA5ZVY%2BElto5WFLSeBaFxFZ7u%2FZYcWrq5PFq0ieb8a2lp1bf0HaXWzC4TQwLpx%2FhK%2FmQY2c89a6KsFK5RfKHY24LAUAkc%2Bn%2FDVIqW1%2FRKncmvrqFcS2SNiBEdUHLlcDQHjP1YLvWJgkfaq5RS0TUhuFKDmEXmwN6jeccns8qdpmEVQrtO%2BMWjWD3%2BJeOgfQ5IN7%2FS9jFOCHXjMuKCXoFnPWPIiqcMcw9R1mJiLqBGZBh1eJcUgoGfc4TTLF9oIJ9BQNFyIUP07qyuTR6eK6VCcVqhQO7gu7DtPBFJGPJIofOkY9WyHrCFk7P4%2FvGayowixMUHEgitP0PpTs8iHyxkZxR08zucscNbmwP5HoQMi7x3Z7e0WN617uNhomlOzhRGQMDtruD5bOnjiYjNv7dE3cj6m4tPfRIQYh3PaekoLbAu8eMtVf4k80Xmf7oOC%2BBE89cvoZrdItC37xbM%2FghoyvtOLu7ffEQKHhwRfnd4r7HWW%2BCuVx5ZpFJkYQRt0fMHItREgzsWXCisyBRM7I0TCyDyPEYd1QXbTm4SQcgqBM%2BhejYSeTvJeQTOUriUwhfc9VIVUuNfmMmifbL3HpDaSGlKg5fihLTAyFaQCDzlZFJI%2FrzBGDNMIk%2F%2BZ7oCMIfqiMoGOqUBdzOF1AwWS1LcdQzyB37ESOF0MpwOMKmrc7k3vKOZNlx0YWx7lz0CMS%2FeptPAD0HCa9abO%2F5EyYB%2Bbe381dPR5EPyaUzDGKtaHclKNY8o3A5FOqea4K%2FSeizm5KkpgtKrsWoI9dzgnYa3us042s%2FU5sOdgzo0kWWLlqWE3huxlaw4YhG2VQuvVHgsuDpkEQZ84hq%2Fidbwk1YK6yHvESwT4Uv%2FLk0R&X-Amz-Signature=24ec3d46911918be8eee6fb32b83150394f7dc6264827e264e553fce8c7f4988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLICRAU2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkPODmnD%2BLvkUkFmpxSuBgYxewfZIavq0d%2B%2Bhne%2BEseAiEA0kMAM1Ng%2F%2FZ2xtHNVaSR0W1iXL17M6pkKx67BCOjsT8q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDH5wQVOhApVR2PMg6yrcA5ZVY%2BElto5WFLSeBaFxFZ7u%2FZYcWrq5PFq0ieb8a2lp1bf0HaXWzC4TQwLpx%2FhK%2FmQY2c89a6KsFK5RfKHY24LAUAkc%2Bn%2FDVIqW1%2FRKncmvrqFcS2SNiBEdUHLlcDQHjP1YLvWJgkfaq5RS0TUhuFKDmEXmwN6jeccns8qdpmEVQrtO%2BMWjWD3%2BJeOgfQ5IN7%2FS9jFOCHXjMuKCXoFnPWPIiqcMcw9R1mJiLqBGZBh1eJcUgoGfc4TTLF9oIJ9BQNFyIUP07qyuTR6eK6VCcVqhQO7gu7DtPBFJGPJIofOkY9WyHrCFk7P4%2FvGayowixMUHEgitP0PpTs8iHyxkZxR08zucscNbmwP5HoQMi7x3Z7e0WN617uNhomlOzhRGQMDtruD5bOnjiYjNv7dE3cj6m4tPfRIQYh3PaekoLbAu8eMtVf4k80Xmf7oOC%2BBE89cvoZrdItC37xbM%2FghoyvtOLu7ffEQKHhwRfnd4r7HWW%2BCuVx5ZpFJkYQRt0fMHItREgzsWXCisyBRM7I0TCyDyPEYd1QXbTm4SQcgqBM%2BhejYSeTvJeQTOUriUwhfc9VIVUuNfmMmifbL3HpDaSGlKg5fihLTAyFaQCDzlZFJI%2FrzBGDNMIk%2F%2BZ7oCMIfqiMoGOqUBdzOF1AwWS1LcdQzyB37ESOF0MpwOMKmrc7k3vKOZNlx0YWx7lz0CMS%2FeptPAD0HCa9abO%2F5EyYB%2Bbe381dPR5EPyaUzDGKtaHclKNY8o3A5FOqea4K%2FSeizm5KkpgtKrsWoI9dzgnYa3us042s%2FU5sOdgzo0kWWLlqWE3huxlaw4YhG2VQuvVHgsuDpkEQZ84hq%2Fidbwk1YK6yHvESwT4Uv%2FLk0R&X-Amz-Signature=d93899fe9363843dde7b18137e26ba875d4f6ffff6f9b7aa32228ddbc9de07c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

