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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW2MNJOD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BWvDmrPSdD0x34H98udGHbp1y9%2FXDC3%2BJ47edfW%2BtSgIgCSIAoKV3mcBZBWa5624obAKMCwSB5rduVuyOaNncavcq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDHIEq%2BJtllXJR%2Byu6SrcAxzsiXGYIv1ljqzaJZImFoBDah2hx4krlAh6sqX33HGq4Ywbx4vG2ppIwnLC0Ohjj%2BUVeWlnQR7TYKe%2FVF2xIeX22Kno5i71sIn%2FZUGU0JGAbpnojrqMq3FEjh2gGMc66ZWf8NZHjH%2F2NnEZQk4QzRoK6vjQ0b8c%2FL8K6TwwQNYYNL6bX05eAtLDI8zkoqCh%2B6FTjK%2FrrVPBNy6vYdZKHPpjE%2Bq2tgDL%2B15w2%2FWf%2F4nHt5NqvqPEabD30BQTRIX3GtlRPlpx9ziMXIxo1Tjwqwbq28SA9dotr8ec400O%2FEAMMxliDaDUvZR0uFmwx3pTdx5yHiYl6byBjcsGmG2hBZzH6YfnoU7ljHoqmVBt%2BmIQ9%2FbmPuzbvXHxIt2jixkXlqQgp0Mp1DNZicKrjgKQOSu7tZVMaeRuSy2UaY9OqqT3L6UPL7caDulvFq1lYYzBLnuuPsXpTT%2F5%2Bmob6aiPJwd2wjyPYmuI4YtgOM8hgZ2WU9RV9y4ooEXLTpIUkv4YUro4q8GK7n%2BCrw%2FxcJvGwtj69fmgJKETMLr2vVkV7M4cWrNdCjr8mQBeQmnYPbxZJ54HKBn5sLN%2FczwYR%2BhAeISAg08eWjqDS4ICdhcHQ%2FJnVZPW27fwtbkKRN0bMISWiMoGOqUBih4TD3KWlVkRRmiRDVTGZBaS0AtotTD0kXgyG7nZpOnZvA0HxpvmcBO7fsy0nrRrtF6xkFbeC%2BFntyGZjwrMy%2FQLojy5O%2BcVwDYBk0upBNMjFcmQWMnYq0LqQg%2FiwpuRFtKNHhZYlNScbiNI9Ge80kZr%2BeX5RPlcYewwA%2BZ0Dmw8PLfGajSjpo9Hav3YBQVcKI%2Bi1RzpCsP5Qs74jjklfzh1K%2FVO&X-Amz-Signature=73235183a0afe846dad7dd24199ee77c8d21883be1545229295e26db5dfcf96e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW2MNJOD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BWvDmrPSdD0x34H98udGHbp1y9%2FXDC3%2BJ47edfW%2BtSgIgCSIAoKV3mcBZBWa5624obAKMCwSB5rduVuyOaNncavcq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDHIEq%2BJtllXJR%2Byu6SrcAxzsiXGYIv1ljqzaJZImFoBDah2hx4krlAh6sqX33HGq4Ywbx4vG2ppIwnLC0Ohjj%2BUVeWlnQR7TYKe%2FVF2xIeX22Kno5i71sIn%2FZUGU0JGAbpnojrqMq3FEjh2gGMc66ZWf8NZHjH%2F2NnEZQk4QzRoK6vjQ0b8c%2FL8K6TwwQNYYNL6bX05eAtLDI8zkoqCh%2B6FTjK%2FrrVPBNy6vYdZKHPpjE%2Bq2tgDL%2B15w2%2FWf%2F4nHt5NqvqPEabD30BQTRIX3GtlRPlpx9ziMXIxo1Tjwqwbq28SA9dotr8ec400O%2FEAMMxliDaDUvZR0uFmwx3pTdx5yHiYl6byBjcsGmG2hBZzH6YfnoU7ljHoqmVBt%2BmIQ9%2FbmPuzbvXHxIt2jixkXlqQgp0Mp1DNZicKrjgKQOSu7tZVMaeRuSy2UaY9OqqT3L6UPL7caDulvFq1lYYzBLnuuPsXpTT%2F5%2Bmob6aiPJwd2wjyPYmuI4YtgOM8hgZ2WU9RV9y4ooEXLTpIUkv4YUro4q8GK7n%2BCrw%2FxcJvGwtj69fmgJKETMLr2vVkV7M4cWrNdCjr8mQBeQmnYPbxZJ54HKBn5sLN%2FczwYR%2BhAeISAg08eWjqDS4ICdhcHQ%2FJnVZPW27fwtbkKRN0bMISWiMoGOqUBih4TD3KWlVkRRmiRDVTGZBaS0AtotTD0kXgyG7nZpOnZvA0HxpvmcBO7fsy0nrRrtF6xkFbeC%2BFntyGZjwrMy%2FQLojy5O%2BcVwDYBk0upBNMjFcmQWMnYq0LqQg%2FiwpuRFtKNHhZYlNScbiNI9Ge80kZr%2BeX5RPlcYewwA%2BZ0Dmw8PLfGajSjpo9Hav3YBQVcKI%2Bi1RzpCsP5Qs74jjklfzh1K%2FVO&X-Amz-Signature=585ecd28001f5879d87b2dffb5e577e6420ddb3f66e8c51fcafb0845ef1a0671&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

