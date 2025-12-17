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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URDG2QHP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgxZTLKcuab6S9zLZtD2ecV%2FkQKn%2BRUk8Bh44AFFUVmwIhAILuwEtEoEbt35TqhPNrbga6FGurq%2FF%2BNbNcqF5yMcWGKv8DCHUQABoMNjM3NDIzMTgzODA1Igz8KZwk5qrtFgu%2FYjYq3AOar5LQXbjrwbatsumZMFqBWqlg45gDcI23V54M4uUi66XUhkh%2FiU3xtDUqSAfuT4nSQfXYBLAkMjLM%2F5AonG3u6eRqPRlVsWdfrfmYLvsUeG47gHHFoohz5AeSvg5XXu9IPOOfr4EE5J5yXgNPmy09YtlvqY%2FVlAn0b5l9k4cLMRE0UAuI5n12UXE1dvKFgZH%2Bsi3iNvJ649clPlDnPFapvPocpYFU1bE2MQ8kFQX65i0%2F1BKRwkKv9i%2BkOgJo4m9ts9XYXhG6x4lRSfxI86ul6shCAF8shRGdOkbfdrNoKXDXmWuF0XiiA0mD5J9PRCqLaVdoFe5Sk3Eo7QKgjwWwHeJ9gejmAVoJeoQoA5BkYIdSVsA%2FTJbPXKvN%2B2g9o36dt6eJK699hy9KPJQLURR1T5cXjo6wx%2Bh8TJUAg14f3hhtpZLzj6UT5YHx7HvasYMtq%2BW%2FnH6cPm%2BPi4hWEEszILofsbzydUQU0%2BK3Jgcy%2FTTy3ez5uFLZr6Kb1OEojRVwA3tNqYjXGUXLURpqmvjhUprFitLAM0uY0BGQPYRIBmTPenVAbWcEkGVDJowap9ISQ6Kn1h7%2FbpJUysg8BGXskFEtRyffwgq%2FMI0G7zbsq6dy0PWfVGmPs9jbhDCFzojKBjqkAQFgKX5leSYCLEP7FxzRF5ylJTyc4jeBSqpbqNB%2BK8cOI4HifSjsuga6fwpvBPFl4v88v7EUt4Qev7mD7XTWQAvppyMwKEy1SkflxRr7yG5mnQabi9S44XkQIYRZUBgEYY2YoJ97WoLl%2FVVyPZ0YKVcxSyLleKMReeudddtJANc3OnaSik4%2F%2F7MIBZt%2F6o9fY2BLyGnHAlDLneokvVpFj%2B1NrWDH&X-Amz-Signature=aa23d69a0c9d12542cd965d0389ce23967bef05641c740afc8335832634dd818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URDG2QHP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgxZTLKcuab6S9zLZtD2ecV%2FkQKn%2BRUk8Bh44AFFUVmwIhAILuwEtEoEbt35TqhPNrbga6FGurq%2FF%2BNbNcqF5yMcWGKv8DCHUQABoMNjM3NDIzMTgzODA1Igz8KZwk5qrtFgu%2FYjYq3AOar5LQXbjrwbatsumZMFqBWqlg45gDcI23V54M4uUi66XUhkh%2FiU3xtDUqSAfuT4nSQfXYBLAkMjLM%2F5AonG3u6eRqPRlVsWdfrfmYLvsUeG47gHHFoohz5AeSvg5XXu9IPOOfr4EE5J5yXgNPmy09YtlvqY%2FVlAn0b5l9k4cLMRE0UAuI5n12UXE1dvKFgZH%2Bsi3iNvJ649clPlDnPFapvPocpYFU1bE2MQ8kFQX65i0%2F1BKRwkKv9i%2BkOgJo4m9ts9XYXhG6x4lRSfxI86ul6shCAF8shRGdOkbfdrNoKXDXmWuF0XiiA0mD5J9PRCqLaVdoFe5Sk3Eo7QKgjwWwHeJ9gejmAVoJeoQoA5BkYIdSVsA%2FTJbPXKvN%2B2g9o36dt6eJK699hy9KPJQLURR1T5cXjo6wx%2Bh8TJUAg14f3hhtpZLzj6UT5YHx7HvasYMtq%2BW%2FnH6cPm%2BPi4hWEEszILofsbzydUQU0%2BK3Jgcy%2FTTy3ez5uFLZr6Kb1OEojRVwA3tNqYjXGUXLURpqmvjhUprFitLAM0uY0BGQPYRIBmTPenVAbWcEkGVDJowap9ISQ6Kn1h7%2FbpJUysg8BGXskFEtRyffwgq%2FMI0G7zbsq6dy0PWfVGmPs9jbhDCFzojKBjqkAQFgKX5leSYCLEP7FxzRF5ylJTyc4jeBSqpbqNB%2BK8cOI4HifSjsuga6fwpvBPFl4v88v7EUt4Qev7mD7XTWQAvppyMwKEy1SkflxRr7yG5mnQabi9S44XkQIYRZUBgEYY2YoJ97WoLl%2FVVyPZ0YKVcxSyLleKMReeudddtJANc3OnaSik4%2F%2F7MIBZt%2F6o9fY2BLyGnHAlDLneokvVpFj%2B1NrWDH&X-Amz-Signature=5a09060c8e6f7da4f22113cc046ee3862ea8d0e0d5a1c334c2ff43c61ae49b3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

