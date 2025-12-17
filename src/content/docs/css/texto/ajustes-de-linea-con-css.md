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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAKMF5ZH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC26srjbWEWgZkTDSvs5eB2QvwTGC1IVpckkvpIrULipwIgCcQ8hgzA0JFpg3F%2BPwDwChXXnjQu7MeHMgoAwijdhDUq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDEoMW84vB0FESRCjgSrcAzmHOKi%2BrPZuaIof4CYG2lrnEKbznR%2Ba0CRYc8uTgQHqGMydUrjLNdAUcp0Y3I125SRYsw7bJ%2F%2BZiIkxk24hLax8wsj0xeOqW0hhBp3%2FLujywkNSZ5jwvPRmnssG81e534uapl1%2Fq2uswFlwlqL1XYamed2qp7Qlat2wArlwqnczVln4GdEDsAC%2BPWyLA23ITZQY4pqV%2FpH3kUL03h2Y6lQHzExphZO%2BG1Ll70zcewiuUYBx2MdM7jdQjVG5k%2F%2BlHCrHLkoCctM4A8FzX%2FiWXkWlsV%2BG5Rsg%2BJJwmgN4r99yWCpWjVetD0ZwYMlAvtfDjnSci6l%2F3DBp2WkKbw19pjp1boNNAz%2FlOy6SxQIO0TRBUwge45wlPdb%2BRXQGlvcntuF1f%2B0Z0fbT83PnWxCCHEzrclkPy5gN9PmaZ%2Bh4gh%2F7ijoHy4OF0EekRUmx9dXqeUu9A9oGhYwRo9W2MZSD28YY5Eo3X71B2FzQjkVKM4rIMiz09iF5P%2FxO5la4rIYT33nt16a5nIlgtzM4vsTyDbHH05VJvMeejGNuKIsx7EHVEA1ir365Z967NQNJPcQ5Gbmshu4u564WVbbNLYEanBLzYj1XMfsbm42Z%2Bfnmyo%2FtTXk0%2BSMABXZZp4c3MI63icoGOqUB1fZx7nPVnU88GWCvYQ4ZvPmDPdyTrJi25JrCoNy3Or%2Ba7GSWeaSIx1YUjxund%2BMcQ%2FifQK%2Bue9bgjXhFdfSJq41zBQ3zJmM99Equ1FVsrXDy%2FG%2BAw5CxVNOe7be4zAMc7KOZwEq83aZvs19%2B57OJo7RRzleSyL1p0Ue%2BJEa%2FUa9s2HR3HC6TvVzKQT%2Bi6GasdwH%2BnKn6TMeIezcmdgQuCFvrSC0h&X-Amz-Signature=b40d352f3529378d929f48cbc2051a41214832d651170c001dc6e450592e898d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAKMF5ZH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC26srjbWEWgZkTDSvs5eB2QvwTGC1IVpckkvpIrULipwIgCcQ8hgzA0JFpg3F%2BPwDwChXXnjQu7MeHMgoAwijdhDUq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDEoMW84vB0FESRCjgSrcAzmHOKi%2BrPZuaIof4CYG2lrnEKbznR%2Ba0CRYc8uTgQHqGMydUrjLNdAUcp0Y3I125SRYsw7bJ%2F%2BZiIkxk24hLax8wsj0xeOqW0hhBp3%2FLujywkNSZ5jwvPRmnssG81e534uapl1%2Fq2uswFlwlqL1XYamed2qp7Qlat2wArlwqnczVln4GdEDsAC%2BPWyLA23ITZQY4pqV%2FpH3kUL03h2Y6lQHzExphZO%2BG1Ll70zcewiuUYBx2MdM7jdQjVG5k%2F%2BlHCrHLkoCctM4A8FzX%2FiWXkWlsV%2BG5Rsg%2BJJwmgN4r99yWCpWjVetD0ZwYMlAvtfDjnSci6l%2F3DBp2WkKbw19pjp1boNNAz%2FlOy6SxQIO0TRBUwge45wlPdb%2BRXQGlvcntuF1f%2B0Z0fbT83PnWxCCHEzrclkPy5gN9PmaZ%2Bh4gh%2F7ijoHy4OF0EekRUmx9dXqeUu9A9oGhYwRo9W2MZSD28YY5Eo3X71B2FzQjkVKM4rIMiz09iF5P%2FxO5la4rIYT33nt16a5nIlgtzM4vsTyDbHH05VJvMeejGNuKIsx7EHVEA1ir365Z967NQNJPcQ5Gbmshu4u564WVbbNLYEanBLzYj1XMfsbm42Z%2Bfnmyo%2FtTXk0%2BSMABXZZp4c3MI63icoGOqUB1fZx7nPVnU88GWCvYQ4ZvPmDPdyTrJi25JrCoNy3Or%2Ba7GSWeaSIx1YUjxund%2BMcQ%2FifQK%2Bue9bgjXhFdfSJq41zBQ3zJmM99Equ1FVsrXDy%2FG%2BAw5CxVNOe7be4zAMc7KOZwEq83aZvs19%2B57OJo7RRzleSyL1p0Ue%2BJEa%2FUa9s2HR3HC6TvVzKQT%2Bi6GasdwH%2BnKn6TMeIezcmdgQuCFvrSC0h&X-Amz-Signature=15a1a05889b4169621fd103e6adce3953906bc0311795874aaff5c1545cfddc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

