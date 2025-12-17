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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHWFTK5Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTQlXVHiMxvGMMNcbt%2BbjKQWrthxFSgVABJquytPeKsAiEA8%2F9bXqZ9jNK5HbRQPVzc8hyaJpAZt9%2BPmcy5oS6fRkoq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDNEhT%2B5ZR5XiLAvCwSrcA9ilGX5h0jfjety7F%2FGhMkgH4iyjgBSUQ7XZWIQ%2B7by82i6NwdgS89KcmJ3NRo%2FVgWMTihSsO5D02PVz8YulIHbdsuZrMewRd42Pp0OLcfItblXKSkleqeQ1ZfJflewrCnd0MEpFu1usxwZltLe5nveBxmyXGHvuVckAQTKzSX7ndERfN1pSmpqtfdqNRRqxcoLzDb5jnRxWsVss8Qey5%2BSB2LydRI%2FLa2snGAs0QfHtJRV6JbiQ6lVAbpY3N0U6S4RrUxQcv%2B03oMRDs%2FSXsY7r9iIZ0I%2BGTfALEJzD89IEIn4dsTAST%2BbKgvNnVFrC7Vbx57pjRDW%2BpJPisSQVsTXDraQVIhm9rOjJHQn8xJQjCL3dxYWIiEDO%2FYxpCBQhKEa1kUmgrPJc2tW81ypBWgLLIsN%2Fz6qUh4W8XTpSMxhLgNB8hAjFUxhF0N4IrwG0NJ7DXWqkXI1ggx36ZDnKSorcmz5dECcyYlxXer7HDPiZ3PVZDPCkb2C4OGRNdDA3lYrWdIJsaE03TKnrkF2l%2BBafm5jExK90WAe2273KJLpGARCiBha2bSQsjiESBjbjrRmIeA1c5KjsaRgMSTJyK%2Fm3xR2GwKzLJ4PTA3Gan4sQMKEWn0fXwscKlxmvMJC3icoGOqUBnozxap6tq8VFm0epcUF4SFUQpJFiPTUGCQzoeZmVsyrJDBP9M2F%2BydkcMrg19%2B%2B8iiTr0N4OAqgLr4JZAHSnMmploGQrk%2BVBFX7w0Aha3fP8X1VQerQX4VV2LbPT8j5ogaO6A6KAU1AN24PJLRlZM2EUY6c2P84WNltVzg3eJoFJbKInBH5DGKssrYvdsnBSmHLeTvC294sZ4d4W06N1XMQba4gn&X-Amz-Signature=041efebe539b54ac8fa841a021487785db7ffc1ed0aefe08719d93f51c7c4391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHWFTK5Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTQlXVHiMxvGMMNcbt%2BbjKQWrthxFSgVABJquytPeKsAiEA8%2F9bXqZ9jNK5HbRQPVzc8hyaJpAZt9%2BPmcy5oS6fRkoq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDNEhT%2B5ZR5XiLAvCwSrcA9ilGX5h0jfjety7F%2FGhMkgH4iyjgBSUQ7XZWIQ%2B7by82i6NwdgS89KcmJ3NRo%2FVgWMTihSsO5D02PVz8YulIHbdsuZrMewRd42Pp0OLcfItblXKSkleqeQ1ZfJflewrCnd0MEpFu1usxwZltLe5nveBxmyXGHvuVckAQTKzSX7ndERfN1pSmpqtfdqNRRqxcoLzDb5jnRxWsVss8Qey5%2BSB2LydRI%2FLa2snGAs0QfHtJRV6JbiQ6lVAbpY3N0U6S4RrUxQcv%2B03oMRDs%2FSXsY7r9iIZ0I%2BGTfALEJzD89IEIn4dsTAST%2BbKgvNnVFrC7Vbx57pjRDW%2BpJPisSQVsTXDraQVIhm9rOjJHQn8xJQjCL3dxYWIiEDO%2FYxpCBQhKEa1kUmgrPJc2tW81ypBWgLLIsN%2Fz6qUh4W8XTpSMxhLgNB8hAjFUxhF0N4IrwG0NJ7DXWqkXI1ggx36ZDnKSorcmz5dECcyYlxXer7HDPiZ3PVZDPCkb2C4OGRNdDA3lYrWdIJsaE03TKnrkF2l%2BBafm5jExK90WAe2273KJLpGARCiBha2bSQsjiESBjbjrRmIeA1c5KjsaRgMSTJyK%2Fm3xR2GwKzLJ4PTA3Gan4sQMKEWn0fXwscKlxmvMJC3icoGOqUBnozxap6tq8VFm0epcUF4SFUQpJFiPTUGCQzoeZmVsyrJDBP9M2F%2BydkcMrg19%2B%2B8iiTr0N4OAqgLr4JZAHSnMmploGQrk%2BVBFX7w0Aha3fP8X1VQerQX4VV2LbPT8j5ogaO6A6KAU1AN24PJLRlZM2EUY6c2P84WNltVzg3eJoFJbKInBH5DGKssrYvdsnBSmHLeTvC294sZ4d4W06N1XMQba4gn&X-Amz-Signature=11f56e5787cfb7a662ea307bf5baf1b20a3fc8477584e44235fd46a6f39986ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

