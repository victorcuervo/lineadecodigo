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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF4V32NJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHUOSO6ypPlSKeychmw4uFTAJiSsHvU0urVkAIcXLkpwIhAOrN%2BF2oc3UksfEQmLjrGS68%2BE%2Fv0T2SJH01ErqzLwE4Kv8DCHMQABoMNjM3NDIzMTgzODA1IgyScdIXI57Bq%2FebPh4q3AO0Yw%2BQJqgvedBG3TGeuCFdWfiB2a9Z1GT6zX%2Ft%2B6PfCfk3tjQLO3oJ3pBhuP5F6eeO%2FD1J335GTntL%2BWBJT6bpOmLP033kfvRWPMewkZ%2BviCDsUvyliD6atq6GNiOoEJfjFRCqe6uldpkzWjaisJn78U5MNcRRalYx3hztIYliRDEM2V6sQzdbOXtaoxirP35VQK19SPuz%2Bi0S8Xatdi7JJZIDzbZGRU2YU7PSpLDOS3u%2FzctzZij7KbD%2BbzeE9r2g1Y1TZV1qCFa75EVxNb1coTId5xd7bC1eo05pNtAIHy%2FVEs%2FwYyJ1ZIduWT7aeVz%2BqUHBPP7c29wdNbi1rEqtGgTAzxkTkVUZl0aVFZhc5Sp6v3gm11P6naCLfuou11gJ91gIfBrIME04liH%2FHIDwBLOvfy0%2BzZ8bB3X4vTYm5Yyi3rgmT3CXBiDt3A9hFuOc1ZTxJ%2BQNQAlSFusUDaY6ChXEcbY7pOU0AoFxcx6i1xgl0HptGWm5fqU%2ByIEu5BoXWqgR%2FKl5OROb5rjeoxGEmMDpa8S2X6ZENZK54li6CFF5Vl%2B1gar7zYU9fvYskrChnFPJR77eCYAlU1am3zLPxQJ0t9K2sZH9vvqQoDwIyAewSm1l9c4vht%2BgiDD4lojKBjqkARlCkVWU%2FygIh2Mw60TmoWoxj0iO9uGcPuFc6VpC1ZSuGdQzLtJSQDLsAMCweg4F6cfVgWAoeNGnEYa%2F22oellomXBCUfCvVnvdlpLh6dSP1U9a3fXcKgkgS9Gqk7X%2BwgR9sw2%2Bwn4GU%2FEIFe1o4yKqtTHpTHwWv%2F7hpuuEkbZjc1YJ8b%2BDl2Lane1C%2B1JuVE%2BK6cFuF0RJZgn8wH%2BkXsDGEbwna&X-Amz-Signature=6ee693a5cff321a49841d3f68bc03abd220dddec0841cac032c26f700c32feef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF4V32NJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHUOSO6ypPlSKeychmw4uFTAJiSsHvU0urVkAIcXLkpwIhAOrN%2BF2oc3UksfEQmLjrGS68%2BE%2Fv0T2SJH01ErqzLwE4Kv8DCHMQABoMNjM3NDIzMTgzODA1IgyScdIXI57Bq%2FebPh4q3AO0Yw%2BQJqgvedBG3TGeuCFdWfiB2a9Z1GT6zX%2Ft%2B6PfCfk3tjQLO3oJ3pBhuP5F6eeO%2FD1J335GTntL%2BWBJT6bpOmLP033kfvRWPMewkZ%2BviCDsUvyliD6atq6GNiOoEJfjFRCqe6uldpkzWjaisJn78U5MNcRRalYx3hztIYliRDEM2V6sQzdbOXtaoxirP35VQK19SPuz%2Bi0S8Xatdi7JJZIDzbZGRU2YU7PSpLDOS3u%2FzctzZij7KbD%2BbzeE9r2g1Y1TZV1qCFa75EVxNb1coTId5xd7bC1eo05pNtAIHy%2FVEs%2FwYyJ1ZIduWT7aeVz%2BqUHBPP7c29wdNbi1rEqtGgTAzxkTkVUZl0aVFZhc5Sp6v3gm11P6naCLfuou11gJ91gIfBrIME04liH%2FHIDwBLOvfy0%2BzZ8bB3X4vTYm5Yyi3rgmT3CXBiDt3A9hFuOc1ZTxJ%2BQNQAlSFusUDaY6ChXEcbY7pOU0AoFxcx6i1xgl0HptGWm5fqU%2ByIEu5BoXWqgR%2FKl5OROb5rjeoxGEmMDpa8S2X6ZENZK54li6CFF5Vl%2B1gar7zYU9fvYskrChnFPJR77eCYAlU1am3zLPxQJ0t9K2sZH9vvqQoDwIyAewSm1l9c4vht%2BgiDD4lojKBjqkARlCkVWU%2FygIh2Mw60TmoWoxj0iO9uGcPuFc6VpC1ZSuGdQzLtJSQDLsAMCweg4F6cfVgWAoeNGnEYa%2F22oellomXBCUfCvVnvdlpLh6dSP1U9a3fXcKgkgS9Gqk7X%2BwgR9sw2%2Bwn4GU%2FEIFe1o4yKqtTHpTHwWv%2F7hpuuEkbZjc1YJ8b%2BDl2Lane1C%2B1JuVE%2BK6cFuF0RJZgn8wH%2BkXsDGEbwna&X-Amz-Signature=48f53d6eddcd5d4c45b8ad5cc427916e0e4af7c832bbaf1fff3d2a3e02c6bf10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

