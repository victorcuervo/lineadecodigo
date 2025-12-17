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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665CVXVMJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCarZyPrV%2F7ScsfXO1zkS7uMFDA11g%2FvPG%2F41lIcchjegIgZIOI635BQkmlafvoG1%2BXE8oNbopXakqduDYuU%2BjYpjUq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDFC2YVWlFBQOFkn4GyrcAxP1ZETkFRiu1qboAtaMC0v1MWGeTalkMvYrbvsFWBs26zwL%2BOv4Faju9gseK5xd43GXh2H7Gl0aULvZ3iF4B9R1reah9OxRCGP4FwSl%2FabooDwfGxQykfofMWTQN%2FusbEdrCqv57%2FHM8PCoLzx23nuKU05gt%2Fjl4k86L22a75XjVjuRxdOnj7XsVI5yE88rBq2MAKduajK1bOIAvbw%2BT%2FXQtjyxd%2F4x7smNDmDDrRJP3a10YBb9koR6P1UvH9BBNQP12qGmDchd5edN%2BFAUGvnhxoBODHD7mrBEEwLq00MSX5e95dxFDQdayYCvA5l951WzgmHqLqiiykU3MWZwbjzqXSBlvm5LusPw0eTXSmYufXnluW%2BzjGCcuOoFNhkzyrUkkYYnH7CGDTJxinsYmx%2FL2RFs0YGqGPsYZT1KtumCKXIOCqdgUXaBkdirm4jW6t6vQavd9KqRnHeiUqWgp7qE%2Fb2lipUA0Xl8QqKvyyPRYezfB1iPhb0nZhNj9bHYl7f0DsqTbXB52guTs34Zk1hV%2BHc%2F9Z1YWsZVg3vJ0AARhiNdgJ4YTdAIxhUBWmiZvFzHyZFBG0sysRcG2rhXB9VJg46WDhs5ZwGjJgyomIKZLG22SeO4UYiKZZNYMNqDicoGOqUB5zvPjGVoojTUy46iJaD406PDzpxnPdmO0yX3Dw6isb6bqzcfujOi0EKXSZhnOxxjVvu9G6lpw%2FkEe8mNobLxCu5o6EyK6jwp%2BkVJkyHY4YxPuq6Nxfpmy%2FsC%2BJ9UgmZQeHVVsZRHQS4M9H%2F4TBFww%2BfBBS08jGQjhLpA%2BE7dxPtEBErdiNezrjaaV11hWfUdnWf8Hd8fQUwW0AM29L2kF%2BQHmt8H&X-Amz-Signature=bf87a6ec7540037cb80a0f8e77b4ad7549eea0664925b1985af4774d7223716b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665CVXVMJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCarZyPrV%2F7ScsfXO1zkS7uMFDA11g%2FvPG%2F41lIcchjegIgZIOI635BQkmlafvoG1%2BXE8oNbopXakqduDYuU%2BjYpjUq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDFC2YVWlFBQOFkn4GyrcAxP1ZETkFRiu1qboAtaMC0v1MWGeTalkMvYrbvsFWBs26zwL%2BOv4Faju9gseK5xd43GXh2H7Gl0aULvZ3iF4B9R1reah9OxRCGP4FwSl%2FabooDwfGxQykfofMWTQN%2FusbEdrCqv57%2FHM8PCoLzx23nuKU05gt%2Fjl4k86L22a75XjVjuRxdOnj7XsVI5yE88rBq2MAKduajK1bOIAvbw%2BT%2FXQtjyxd%2F4x7smNDmDDrRJP3a10YBb9koR6P1UvH9BBNQP12qGmDchd5edN%2BFAUGvnhxoBODHD7mrBEEwLq00MSX5e95dxFDQdayYCvA5l951WzgmHqLqiiykU3MWZwbjzqXSBlvm5LusPw0eTXSmYufXnluW%2BzjGCcuOoFNhkzyrUkkYYnH7CGDTJxinsYmx%2FL2RFs0YGqGPsYZT1KtumCKXIOCqdgUXaBkdirm4jW6t6vQavd9KqRnHeiUqWgp7qE%2Fb2lipUA0Xl8QqKvyyPRYezfB1iPhb0nZhNj9bHYl7f0DsqTbXB52guTs34Zk1hV%2BHc%2F9Z1YWsZVg3vJ0AARhiNdgJ4YTdAIxhUBWmiZvFzHyZFBG0sysRcG2rhXB9VJg46WDhs5ZwGjJgyomIKZLG22SeO4UYiKZZNYMNqDicoGOqUB5zvPjGVoojTUy46iJaD406PDzpxnPdmO0yX3Dw6isb6bqzcfujOi0EKXSZhnOxxjVvu9G6lpw%2FkEe8mNobLxCu5o6EyK6jwp%2BkVJkyHY4YxPuq6Nxfpmy%2FsC%2BJ9UgmZQeHVVsZRHQS4M9H%2F4TBFww%2BfBBS08jGQjhLpA%2BE7dxPtEBErdiNezrjaaV11hWfUdnWf8Hd8fQUwW0AM29L2kF%2BQHmt8H&X-Amz-Signature=7b17c5ac8173a3d88c323028f89d7f043c9eee2b85a0287796488fa3ddb9185a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

