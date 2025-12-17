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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RCCGGU6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FesG6lEH5s1Rg%2BG%2BrBsHtQ7NB8n9sbbfbDxBvyxshFAiEAg4khh5lCSZa58kNFsAESTPX3255fnA9avgtTXBEaXJgq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOoQ9WGxES6CW3aKsyrcA77HWLid2tcu1tzeNqfChrpVsaBuXGX4SHliNnU8CSweotEdZhPz2KLZ996q585ERf1Wt7W9LGVdSYBE9xNBrVhlSLQMz%2BXcYTjluT2WIm9CiyicTkNJoDa%2FDrOjsOrOLxeWJ5WjQRjg%2F4AxQmYF0D4N3fVNqNjDpYT8zkppsll2fjtOgi3pO%2BItsHyGORw751qE9VwtQtw7RaoryUOInVc8gtSRrU3ZIdG55QR4L4M8ryyLdax%2B1H3jNfLrfJ%2BosESHEDwXnEi3ITGioeMQPJOXQeBYX6DeCgUIU92qEQDTNh5cQ2MbaGkJ3oA%2FbMLGjeOWvUC%2FUgtz8T6UPnC%2BTanP7uCJwPPR1Y8EGtHaTkAtLpKk%2Fo5iCb9Legzl4ixhssgGY2nIxvtGlPY%2B6OEMcoYZS7eli9AgXbBClnonVq6UEjKRnjkXAoocU12RfdEfz5mbf7xAnQbSCjU8GbBxIgTxd9kD%2Flty8mL0eYgZM4nDjt75u4w0J0gCqiBAjkFDKb3JcIS1lxTy8Q6djBLP5%2BULYNhqRcdsAhzd9QPSw8yBuWY73O3w4p6jZc77ePQhFHvrxoXchMiDVCElnkOnPNj0PpV0xzaL71f6KdtEyZ6T4pdGEViB8q5OfD3RMPrFisoGOqUB8F2vC0KR2qE%2FElS9YiLKzti%2Fxeihz3ArLqF%2FWpQlkqL5x3cl4KbZtZjchHbWm1FKdnXNfBqJ55mWRxoWRY0Aee32mGL5wlUjFoR5Q0zTo133NVQ0Io1itA3cM%2BFM3edy7TpzMe8IK2fUJh013OV0RLIaDAoib8G0A%2BsH0BIuPn%2BUCjzvTQJXM5ULU%2BXcV3I6aJgAfRLGcmKQYbIyPcM67omacnt8&X-Amz-Signature=d235a55ee814dc8050f3c621af9d6eb23d347ddd813e37a7364863de601c814d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RCCGGU6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FesG6lEH5s1Rg%2BG%2BrBsHtQ7NB8n9sbbfbDxBvyxshFAiEAg4khh5lCSZa58kNFsAESTPX3255fnA9avgtTXBEaXJgq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOoQ9WGxES6CW3aKsyrcA77HWLid2tcu1tzeNqfChrpVsaBuXGX4SHliNnU8CSweotEdZhPz2KLZ996q585ERf1Wt7W9LGVdSYBE9xNBrVhlSLQMz%2BXcYTjluT2WIm9CiyicTkNJoDa%2FDrOjsOrOLxeWJ5WjQRjg%2F4AxQmYF0D4N3fVNqNjDpYT8zkppsll2fjtOgi3pO%2BItsHyGORw751qE9VwtQtw7RaoryUOInVc8gtSRrU3ZIdG55QR4L4M8ryyLdax%2B1H3jNfLrfJ%2BosESHEDwXnEi3ITGioeMQPJOXQeBYX6DeCgUIU92qEQDTNh5cQ2MbaGkJ3oA%2FbMLGjeOWvUC%2FUgtz8T6UPnC%2BTanP7uCJwPPR1Y8EGtHaTkAtLpKk%2Fo5iCb9Legzl4ixhssgGY2nIxvtGlPY%2B6OEMcoYZS7eli9AgXbBClnonVq6UEjKRnjkXAoocU12RfdEfz5mbf7xAnQbSCjU8GbBxIgTxd9kD%2Flty8mL0eYgZM4nDjt75u4w0J0gCqiBAjkFDKb3JcIS1lxTy8Q6djBLP5%2BULYNhqRcdsAhzd9QPSw8yBuWY73O3w4p6jZc77ePQhFHvrxoXchMiDVCElnkOnPNj0PpV0xzaL71f6KdtEyZ6T4pdGEViB8q5OfD3RMPrFisoGOqUB8F2vC0KR2qE%2FElS9YiLKzti%2Fxeihz3ArLqF%2FWpQlkqL5x3cl4KbZtZjchHbWm1FKdnXNfBqJ55mWRxoWRY0Aee32mGL5wlUjFoR5Q0zTo133NVQ0Io1itA3cM%2BFM3edy7TpzMe8IK2fUJh013OV0RLIaDAoib8G0A%2BsH0BIuPn%2BUCjzvTQJXM5ULU%2BXcV3I6aJgAfRLGcmKQYbIyPcM67omacnt8&X-Amz-Signature=b02cdccbe04d30e5faffbbe1390a01147cfc3794440d188a7cb14427d00bad89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

