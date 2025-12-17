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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJLU7Y62%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxxHpQv%2FxEC64BBNRxpbBFEnlf9wYAILSd%2BIJkCGtKkAiAgK6EOcydmYiuf6ommwwnlssp9OYqx5mMM5vmLoBZwYyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMdu%2FIBMLSouoPF3gGKtwDTCGiDjhzeLuzsje%2FGKVe%2BG37m7SpDLqE9VDANQHEbTy9GX5cBjPiJsO%2BFO5GegqGwsPdymWae%2B%2BY9f%2FlPchIq7PmiWEVD5FkEN9AER3qaDUQZCTNmZo2ptMU9a%2FGfZ4ZoUgKNSbC92xcaRW88wBo0bqsS48EsXriGgZNwY8iqsL5rlKSgvImIaEXuuHZukhz%2FMSdOet6GOr3LGwRWZ%2B%2Bs%2FqJoVsKAkhteRxX2Xqz50CfkfgfuUdCIc6BBWbwyHy%2Femx704vblu42FDmiN9zNu%2FIhMlnZDZxIaYmp65m0OW3AFJEbf2KJiYBacHOOCoKyjl8LLCO3a4tsMoWndsDVLgJrN6uHxWwLh1t977PAjJiaZfc3a6zFD6NZLcObMXgulmPIhcY%2B4fPmu4DdcrH5xetPQASCHfEx3XLEfYxYbA%2BuYTFDj7vqlzy2HnKfFBMiTmqmSQiVojWllqnlLT%2Bvei5fRU1kNWMm4icMviAlRGpqwjcdRkX5xOJHRNUzuWsaV6LUgf4LHxF7Yig5ZXNQiIZy11pxmY%2FoTODV4cWu4hbvFDKVGMEvHpgkMd7t%2FfDy47%2B83tot8R3oVV8kTEI%2FZ4DLaD1AZZeumH2R5qNBtVORxSQ4d2RZS3pa%2B6Iw3paIygY6pgFWu5OFlBXX34JDGk38KUHhB0GSFsoHpycNeT%2F1EXG%2FMy0H2mNvbJnKlE2juYc39TQGLmE5A1PWBMFEHNcdQgb8lhXp2nu8RpUptRi8yZkBQlPiNuel60H3x1XFpPe3uXPtpuAvLAZfa%2B%2Ffvcy4c7HsPFipHo4hz0yucI5xck%2B%2B6VyiPVNtJKuRRJuMPGlEJQetqsG8gCsxPgC%2FVeM54R%2FgRL8UcyIR&X-Amz-Signature=df32df66e639a88596006689ed1229a067852144812e84e097def2d2450ba443&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJLU7Y62%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxxHpQv%2FxEC64BBNRxpbBFEnlf9wYAILSd%2BIJkCGtKkAiAgK6EOcydmYiuf6ommwwnlssp9OYqx5mMM5vmLoBZwYyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMdu%2FIBMLSouoPF3gGKtwDTCGiDjhzeLuzsje%2FGKVe%2BG37m7SpDLqE9VDANQHEbTy9GX5cBjPiJsO%2BFO5GegqGwsPdymWae%2B%2BY9f%2FlPchIq7PmiWEVD5FkEN9AER3qaDUQZCTNmZo2ptMU9a%2FGfZ4ZoUgKNSbC92xcaRW88wBo0bqsS48EsXriGgZNwY8iqsL5rlKSgvImIaEXuuHZukhz%2FMSdOet6GOr3LGwRWZ%2B%2Bs%2FqJoVsKAkhteRxX2Xqz50CfkfgfuUdCIc6BBWbwyHy%2Femx704vblu42FDmiN9zNu%2FIhMlnZDZxIaYmp65m0OW3AFJEbf2KJiYBacHOOCoKyjl8LLCO3a4tsMoWndsDVLgJrN6uHxWwLh1t977PAjJiaZfc3a6zFD6NZLcObMXgulmPIhcY%2B4fPmu4DdcrH5xetPQASCHfEx3XLEfYxYbA%2BuYTFDj7vqlzy2HnKfFBMiTmqmSQiVojWllqnlLT%2Bvei5fRU1kNWMm4icMviAlRGpqwjcdRkX5xOJHRNUzuWsaV6LUgf4LHxF7Yig5ZXNQiIZy11pxmY%2FoTODV4cWu4hbvFDKVGMEvHpgkMd7t%2FfDy47%2B83tot8R3oVV8kTEI%2FZ4DLaD1AZZeumH2R5qNBtVORxSQ4d2RZS3pa%2B6Iw3paIygY6pgFWu5OFlBXX34JDGk38KUHhB0GSFsoHpycNeT%2F1EXG%2FMy0H2mNvbJnKlE2juYc39TQGLmE5A1PWBMFEHNcdQgb8lhXp2nu8RpUptRi8yZkBQlPiNuel60H3x1XFpPe3uXPtpuAvLAZfa%2B%2Ffvcy4c7HsPFipHo4hz0yucI5xck%2B%2B6VyiPVNtJKuRRJuMPGlEJQetqsG8gCsxPgC%2FVeM54R%2FgRL8UcyIR&X-Amz-Signature=d64b581b9b9061ce5c6f5b8499a61f1258e1cbad1df607f522f95de664e661a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

