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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGGK7RLJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkNFuOTt%2BcmJjtU0WfQsRm5qRGRn%2F%2Fu1CRSCiSJb0SBgIgIlLxcmNIfDnL3KqYnKJXTs1JL%2FgRVi14XZ4G%2Ff5ndhMq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJuIFFPl7F9pXd42ByrcA%2FmLfJNjUsW8aFit93d9khXqChwhaXv4gHy803MwXySry2GAgmsaogU6sl0xYeGVjG7iHGV8cxqSR41nvAb7M7LmrzcTjM61M81n%2FNKuz7LuO614ZWajDzitB2hT8Tamzq2u0%2BExWqDvVjniS1nV0JBLr%2Bba72SgDZ5iRKAqdHv29eHLJYVddz0Jjn%2Fq3l%2FFmiayyQ8ZHaCzPmhE6KtiKimU2FbwD%2FZF6DHtrtdy5IrQQrVY0cSeqyPehnlFSX71EZKeqRczpcaQ5WgHUtmWP8w%2FJ4gzaNh5DtTj0QDEuzPM9cJbmVmg6wdeZKepLKgk7hYMFPI1kx8nTIJoNFeGZVgBVCW%2FLKNaiTeVum35ncBVnrMTkIdThMidwiSvvOw8rTpXEWh%2FJ0lzOQHAkF5MwmWUERGtAzfUCKZ%2Bd677X71uFFxmOQUwBxyvGDq%2Bp0fp1MHUeekIJocb8VU7h%2FTTu1pzz7ksiKc7PDHpwO7zmaishMtxphgxltdSpBbAd8X%2FF3piAlBnUMhj1V7j3SA451Uuw1JO1ZhIqccUddRP8jsseMy22MmbkMFSm8Jp8%2BxoWiL95w6xGsMrHywqiJp%2BB2SAtdY84uVRNtDL2%2BmDktGKGRWk%2Bs4hF0t01BL1MOjRicoGOqUBYhjHL0w%2FBOQPYP92gyblbs5Fcz%2BM3X%2BEJ9RzbFBKrT2Ed5lfDD2bfnL%2F4DZWZ%2BB94F1ZB%2B%2FNRwtJkdGr0RGuJRrz2n5OQc%2BB%2FDLXAa8DrWRAINsbLFgdLzfBBfqNLEvct3pDIDWRtja8Waf6CmO9o1RDw57KO1yvsAsxfglckDN3codmUYSgYHDkMQor9uhv95y6XLhtSsSQTpDDaRLOPJth7k%2Bz&X-Amz-Signature=bb1dfe8e5147b5b725ba941339f533867e14a66dbdc097279870b54affbca5be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGGK7RLJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkNFuOTt%2BcmJjtU0WfQsRm5qRGRn%2F%2Fu1CRSCiSJb0SBgIgIlLxcmNIfDnL3KqYnKJXTs1JL%2FgRVi14XZ4G%2Ff5ndhMq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJuIFFPl7F9pXd42ByrcA%2FmLfJNjUsW8aFit93d9khXqChwhaXv4gHy803MwXySry2GAgmsaogU6sl0xYeGVjG7iHGV8cxqSR41nvAb7M7LmrzcTjM61M81n%2FNKuz7LuO614ZWajDzitB2hT8Tamzq2u0%2BExWqDvVjniS1nV0JBLr%2Bba72SgDZ5iRKAqdHv29eHLJYVddz0Jjn%2Fq3l%2FFmiayyQ8ZHaCzPmhE6KtiKimU2FbwD%2FZF6DHtrtdy5IrQQrVY0cSeqyPehnlFSX71EZKeqRczpcaQ5WgHUtmWP8w%2FJ4gzaNh5DtTj0QDEuzPM9cJbmVmg6wdeZKepLKgk7hYMFPI1kx8nTIJoNFeGZVgBVCW%2FLKNaiTeVum35ncBVnrMTkIdThMidwiSvvOw8rTpXEWh%2FJ0lzOQHAkF5MwmWUERGtAzfUCKZ%2Bd677X71uFFxmOQUwBxyvGDq%2Bp0fp1MHUeekIJocb8VU7h%2FTTu1pzz7ksiKc7PDHpwO7zmaishMtxphgxltdSpBbAd8X%2FF3piAlBnUMhj1V7j3SA451Uuw1JO1ZhIqccUddRP8jsseMy22MmbkMFSm8Jp8%2BxoWiL95w6xGsMrHywqiJp%2BB2SAtdY84uVRNtDL2%2BmDktGKGRWk%2Bs4hF0t01BL1MOjRicoGOqUBYhjHL0w%2FBOQPYP92gyblbs5Fcz%2BM3X%2BEJ9RzbFBKrT2Ed5lfDD2bfnL%2F4DZWZ%2BB94F1ZB%2B%2FNRwtJkdGr0RGuJRrz2n5OQc%2BB%2FDLXAa8DrWRAINsbLFgdLzfBBfqNLEvct3pDIDWRtja8Waf6CmO9o1RDw57KO1yvsAsxfglckDN3codmUYSgYHDkMQor9uhv95y6XLhtSsSQTpDDaRLOPJth7k%2Bz&X-Amz-Signature=89be9aeced3bbd8a7b7dd91dcf27e0329a40c9bc016a4279be425df11b8a6249&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

