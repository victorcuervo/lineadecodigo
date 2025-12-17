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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6SD5VAZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSS2nMfxVTlFGM5cnHFYucxp5ym6SuIt3kMwzkH13qMAiEAxypHnpqlZtBhrpVS2RGyIThr6e7VApm0%2FdmgVJrr86sq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIi3iJUdRrbWL6neEyrcAwcJe6zVzPiGpahrYxwPmG4p%2BhKOseQkvm%2F4KuIjuUWgf786GnJIG0k%2FBUNPBiUOYntoW1CQtUuo6VPa8vdo9szAryOgsYu9dqgFQq94rj%2FShcxcDeBSSyWAcCg7ZCeQT%2FTh9OO2%2BF59yJ3LNIUZ5Tk%2B6hYerRCcsbSy8efVI3kP%2BiUlzKAQ76cMXxpvDjiP6J8NhfmcA59qKcKtCXWH%2FuNVhq9ScXPdX%2BSJWhY4X9O%2B33m1y2laa9SAzijOXl3ezHjbWfAjxyt4hRPgoCLrtO1hQCsoJp7qO7EppgL%2Bq7hovddcHOywmZoqkFRfZFU1jxl%2BQjUTjknhHXefAQBACObSvgJOsLD86TMofKt0kI0tzebDGoNx%2FcbzhvjZakBUiLNOUbmtl1C1DyVv%2FFBp0knGbTVCyrclUpEmjMXyxTmUV%2BszoaTW3S6%2FAKpqfjP6NLgOgYP%2F%2B09AnovBmcXIsvu1RJkjWjbC7wGRCDp%2FRNV1WwERv0YPFUdL6n2JXLx0aBW5FTrgK%2Fv%2Bk2CS4rXWsvjfNqYqId8cK9%2BKQbbR3VCgp2EgTtT3ft8N7hA4vE2TJH8Kb77iXQ0r63XC%2BhN8jORYxoCPsXPclEVKM%2Fr%2BUy1iVPlO2tvyz6W6Kz1DMJODicoGOqUBJ4M%2BqADsfmrpkS8MRWEoeC%2FvlyP%2Fl59j46obNeGj9Dld0vt31VbdI2idobnP2%2BPpqoLK6UWu4tnQkIkPbCRys%2FNOhLP0R4x5SH0G3uowo7pVWZeXdaFzfeCGjyfeLZhu%2B5SoEu%2Bo7ahYQo5%2BGbyzu0UgUcmVgsYGZr857%2B7SmICFmipJgYh4JzWohCjNZXcaZrFapHi2q9PL4X32oXN8ltCxZlJz&X-Amz-Signature=5354f18ef95a56d8e209b88a1f3cf57e2d3f490197314a0f5f7d02a8f4e23bcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6SD5VAZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSS2nMfxVTlFGM5cnHFYucxp5ym6SuIt3kMwzkH13qMAiEAxypHnpqlZtBhrpVS2RGyIThr6e7VApm0%2FdmgVJrr86sq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIi3iJUdRrbWL6neEyrcAwcJe6zVzPiGpahrYxwPmG4p%2BhKOseQkvm%2F4KuIjuUWgf786GnJIG0k%2FBUNPBiUOYntoW1CQtUuo6VPa8vdo9szAryOgsYu9dqgFQq94rj%2FShcxcDeBSSyWAcCg7ZCeQT%2FTh9OO2%2BF59yJ3LNIUZ5Tk%2B6hYerRCcsbSy8efVI3kP%2BiUlzKAQ76cMXxpvDjiP6J8NhfmcA59qKcKtCXWH%2FuNVhq9ScXPdX%2BSJWhY4X9O%2B33m1y2laa9SAzijOXl3ezHjbWfAjxyt4hRPgoCLrtO1hQCsoJp7qO7EppgL%2Bq7hovddcHOywmZoqkFRfZFU1jxl%2BQjUTjknhHXefAQBACObSvgJOsLD86TMofKt0kI0tzebDGoNx%2FcbzhvjZakBUiLNOUbmtl1C1DyVv%2FFBp0knGbTVCyrclUpEmjMXyxTmUV%2BszoaTW3S6%2FAKpqfjP6NLgOgYP%2F%2B09AnovBmcXIsvu1RJkjWjbC7wGRCDp%2FRNV1WwERv0YPFUdL6n2JXLx0aBW5FTrgK%2Fv%2Bk2CS4rXWsvjfNqYqId8cK9%2BKQbbR3VCgp2EgTtT3ft8N7hA4vE2TJH8Kb77iXQ0r63XC%2BhN8jORYxoCPsXPclEVKM%2Fr%2BUy1iVPlO2tvyz6W6Kz1DMJODicoGOqUBJ4M%2BqADsfmrpkS8MRWEoeC%2FvlyP%2Fl59j46obNeGj9Dld0vt31VbdI2idobnP2%2BPpqoLK6UWu4tnQkIkPbCRys%2FNOhLP0R4x5SH0G3uowo7pVWZeXdaFzfeCGjyfeLZhu%2B5SoEu%2Bo7ahYQo5%2BGbyzu0UgUcmVgsYGZr857%2B7SmICFmipJgYh4JzWohCjNZXcaZrFapHi2q9PL4X32oXN8ltCxZlJz&X-Amz-Signature=73dc3124212dc93516e1509791aaf2f009b55057e7817230b41865d1afe4950f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

