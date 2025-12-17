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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675QSP7ZX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTiCMaJAI8L2SJCkw9xqGEQTgLfVEnRQfjjfh%2FubCDbQIgLobkS%2BsB354uf5X0FZy0JUNnme0wvVMezHaHjudNQGYq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDITO0Wcncmx7iqPNcircAwlxdQJC1nBbio9PRpadLScz9rqTuMFlVi78VpxtXF0%2FjM72wH34l7LV6D488u4MNakz%2FqCnyta8cIga0bTxqe7O3pja9APiG7Gsw6vDqIRzguc1ajxoZCAhCSG%2FU3MU3hjzS4PF89ao0nRV32hbqp6lYadRhjwcrlwL2AM8JUFZ9efWAqGVUvOkuHYm3jwKCXi3ykn%2BpkgaWYIL5utAZ7qFsZtGlYhYYG0nh69xLRdt9YIkLhTIv6mPsOnNNlyryRCONGOlMGbMIc4iNIaDBPciuS7Nob9M1BHQt2KGHqiUAWeQlbZcblcQoGG0MexELhHsfvuCnBglXPKkDiA4E%2BdSVUY5N4F8g3kJDEVfJYAIQe09NCf%2Bsex9wEs63YxSs%2BBFMvJoIFGLbDE7Ist5PHle%2BwrK8wcF5RRgQFA3ECGecnhhBDbXuS6JKeJId2Li6zp71S7hYqV6eYZxZyf4t3EzMeFUaGjfaBVnEbWtn%2Bx%2Bnp7rt1of4drFHJTqRf1LpgDpP3g2gXXHYg%2FpMUEnVM0AwnVBUDvwDDfGdzD80LuvFjliDpk8xKwA%2BflusWMAvblGE56yn0ooi%2FkRJ%2F4nkUx3WH4Ej8xD6ELH33XN7vJ7CD42UUhnXKQ%2BbNifMMeOisoGOqUBrvvDC4vnAe2JZ8p0t7esjPRLFOvrCBLRqiMBQbfWhfSSIzBuZ%2FBhp0pkENHdZYllXHcpH5WGPPbXr4icNxxXIdW9AA8z3WZ1sAGjXMHWnhgNWBNKvuagBzHEtLJhAZg7%2B88dyE%2BiKiXwXNR6KTjCLt4IIJYTINSXsPn4Q60P3n2Amg%2FAAvxEijwTM1nflYpn8n2qgsuagNRrqWT80ByeRtemU0Gz&X-Amz-Signature=6637e78eb3c91fbf7876ce4a7c26cd4aef12678b201dbd05936fafae329fdc78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675QSP7ZX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTiCMaJAI8L2SJCkw9xqGEQTgLfVEnRQfjjfh%2FubCDbQIgLobkS%2BsB354uf5X0FZy0JUNnme0wvVMezHaHjudNQGYq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDITO0Wcncmx7iqPNcircAwlxdQJC1nBbio9PRpadLScz9rqTuMFlVi78VpxtXF0%2FjM72wH34l7LV6D488u4MNakz%2FqCnyta8cIga0bTxqe7O3pja9APiG7Gsw6vDqIRzguc1ajxoZCAhCSG%2FU3MU3hjzS4PF89ao0nRV32hbqp6lYadRhjwcrlwL2AM8JUFZ9efWAqGVUvOkuHYm3jwKCXi3ykn%2BpkgaWYIL5utAZ7qFsZtGlYhYYG0nh69xLRdt9YIkLhTIv6mPsOnNNlyryRCONGOlMGbMIc4iNIaDBPciuS7Nob9M1BHQt2KGHqiUAWeQlbZcblcQoGG0MexELhHsfvuCnBglXPKkDiA4E%2BdSVUY5N4F8g3kJDEVfJYAIQe09NCf%2Bsex9wEs63YxSs%2BBFMvJoIFGLbDE7Ist5PHle%2BwrK8wcF5RRgQFA3ECGecnhhBDbXuS6JKeJId2Li6zp71S7hYqV6eYZxZyf4t3EzMeFUaGjfaBVnEbWtn%2Bx%2Bnp7rt1of4drFHJTqRf1LpgDpP3g2gXXHYg%2FpMUEnVM0AwnVBUDvwDDfGdzD80LuvFjliDpk8xKwA%2BflusWMAvblGE56yn0ooi%2FkRJ%2F4nkUx3WH4Ej8xD6ELH33XN7vJ7CD42UUhnXKQ%2BbNifMMeOisoGOqUBrvvDC4vnAe2JZ8p0t7esjPRLFOvrCBLRqiMBQbfWhfSSIzBuZ%2FBhp0pkENHdZYllXHcpH5WGPPbXr4icNxxXIdW9AA8z3WZ1sAGjXMHWnhgNWBNKvuagBzHEtLJhAZg7%2B88dyE%2BiKiXwXNR6KTjCLt4IIJYTINSXsPn4Q60P3n2Amg%2FAAvxEijwTM1nflYpn8n2qgsuagNRrqWT80ByeRtemU0Gz&X-Amz-Signature=cc4fd44d99895357c96dd57e8e627038c951d6879081818756cac02a6cc2f30a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

