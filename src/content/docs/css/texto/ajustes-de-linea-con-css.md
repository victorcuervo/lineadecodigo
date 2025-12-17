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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYG7Q7RP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYRmPL8Wtm3YIQIiMisc13R7uvslTQ3UKRhYWByc9GlAiEA6VCYi6kgV6rPfONBto3P%2FJ%2FT9FwBZn1NUAtmMHs5IzMq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDN9F2utku0atwau1KSrcA7Z9GifXSqxMfJksayi3MttdsgdjB8aykOHiCERNntVUchsOTda6WlrQ2sGQToL9BeVpWyRcAorDqaJevqvJzWCpFdlsrNtpmH9DbaDHxkRnpGdbG%2FKmapwVs8N1FlrGMn7IazPAfT3yKBndr3lWdcSkl6eVXTCmWUv%2Bfa3utwjpPxanNnGLN1goYg4VqZ7q%2FtqvKxJSXer5XVIH6St8EUh6A2fX0TZg2zDhZ4diQHopbocy9iEByLuAHADfkxXky%2BVTnrfXUpNunj1QFDfGWG%2FkOWI5sDOpiOY%2FYuI9uZfRIoYyJ0KUH%2FGwJLEWu7aCfZrHv8Uyq07SD3lVS1wtnMygTvrss%2F8rUGFtuzjtcoNRev6%2Bt%2FlfU6NcnPGgZwGOsvj3pUYFe9XfWuPZtZvoVwykrEKqpqKWn41r8SI0cZWk2voIBWzL18VL8V7hyoDkkTb%2Fwv4VeE7d%2FObPON6m6ofcV5Q4DmpNyqYU2xUX0lG5w21JbPO39NZiUhTvBAcXwjE4knLBkDi93yWAi%2BrCUJj0fQy6vdo62W%2BGQJhAgn08aDySrafVeX5xsSMz0f5CuFUp7mpfsmhzoXprhDb61TPd5Jn0AZCgEKBsTlW9b3JdgKM05%2BAEMD8Ei5L6MLrGisoGOqUB2Qj%2FsLvZc5oDVsL9JgjII1q13N%2B5nkNY6oduC7%2BVPg51UnIehOHUG2bmic9kX2JnXo0VyrdTg1PYew1Jjw%2BY4m%2FoUzvtgfqIFeZSvXcy%2BSfIFR6qWgyaeaIG73T9OpvJG9RhaVeht%2B%2BBdklO2MihNTPlvSmAiWeRcnl8sxTYP%2FZas4kFBOOAX4PY7mJunL2og%2Fl6R18bG1%2BH9vqtA8s01nXfvCCJ&X-Amz-Signature=412ea564cb1293750e098ef00d50eb5e9e3c7f47ec60f0697d8197669d8ce1e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYG7Q7RP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYRmPL8Wtm3YIQIiMisc13R7uvslTQ3UKRhYWByc9GlAiEA6VCYi6kgV6rPfONBto3P%2FJ%2FT9FwBZn1NUAtmMHs5IzMq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDN9F2utku0atwau1KSrcA7Z9GifXSqxMfJksayi3MttdsgdjB8aykOHiCERNntVUchsOTda6WlrQ2sGQToL9BeVpWyRcAorDqaJevqvJzWCpFdlsrNtpmH9DbaDHxkRnpGdbG%2FKmapwVs8N1FlrGMn7IazPAfT3yKBndr3lWdcSkl6eVXTCmWUv%2Bfa3utwjpPxanNnGLN1goYg4VqZ7q%2FtqvKxJSXer5XVIH6St8EUh6A2fX0TZg2zDhZ4diQHopbocy9iEByLuAHADfkxXky%2BVTnrfXUpNunj1QFDfGWG%2FkOWI5sDOpiOY%2FYuI9uZfRIoYyJ0KUH%2FGwJLEWu7aCfZrHv8Uyq07SD3lVS1wtnMygTvrss%2F8rUGFtuzjtcoNRev6%2Bt%2FlfU6NcnPGgZwGOsvj3pUYFe9XfWuPZtZvoVwykrEKqpqKWn41r8SI0cZWk2voIBWzL18VL8V7hyoDkkTb%2Fwv4VeE7d%2FObPON6m6ofcV5Q4DmpNyqYU2xUX0lG5w21JbPO39NZiUhTvBAcXwjE4knLBkDi93yWAi%2BrCUJj0fQy6vdo62W%2BGQJhAgn08aDySrafVeX5xsSMz0f5CuFUp7mpfsmhzoXprhDb61TPd5Jn0AZCgEKBsTlW9b3JdgKM05%2BAEMD8Ei5L6MLrGisoGOqUB2Qj%2FsLvZc5oDVsL9JgjII1q13N%2B5nkNY6oduC7%2BVPg51UnIehOHUG2bmic9kX2JnXo0VyrdTg1PYew1Jjw%2BY4m%2FoUzvtgfqIFeZSvXcy%2BSfIFR6qWgyaeaIG73T9OpvJG9RhaVeht%2B%2BBdklO2MihNTPlvSmAiWeRcnl8sxTYP%2FZas4kFBOOAX4PY7mJunL2og%2Fl6R18bG1%2BH9vqtA8s01nXfvCCJ&X-Amz-Signature=45c59d1b6d93dcd99c99717082a64441f779722a3fe0cb7d5d1e5ba3f346a8d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

