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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFB4RB6S%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDixPqiPn0iohMVJSPUEv6nUqO6caFjvJhnPWInj3JyzAiEAuz2vXpKjSK6442ofs2DJifuwey%2F%2FAq9waucSbxwdTH0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIDbnGyPsYwAieGNGyrcA1J1FJ8YicnFIoVFbQ%2F9bxNZRZrnR3pxW%2FYZ9GFzA9QA0UZ9EEJX6EGeTQdJ3ByJtgFjDHaM5t%2BfK8v%2FdTOgZk2cb9dj1km3ogEBQQbLrrIBBSl%2BMPsJDYREqPati1KN1mX%2FE8QP0L46seuOfXmshmfD0ipK6qR7NmrKQ7JZWsLQuK69CnBhaR9kihJdXd59HPUAnWjshrWTJmLCyYY9tfny39SLe7%2BourYd1Pq01X3BwPl%2BT15oIim9AA%2FBN42ycNiAZ%2FNOLL6t1clx%2BoYlYpz11dbIecBn4H4m9rEMZouKGQSRXr7gBaj7aEI%2FH6ltaXwEBA6WxhWDNRm990A77nidx8GOD8J3YoY01vWyw5GMuVjIPbKgayGyCFWaLjGc4blWZsE2JUu3A0kE36xQ%2B%2BmIWS23toSFd80t60KJwtgSJUbikPS%2B2fRhi%2BWJjplDFpaua54xXMGalyuPkQHIgwMt%2BNpqbdM1kUum1jI3fC3Zj1dFZnzQCkPrGMwmugCL9N3GDHf0%2F%2B9m6wF6PRu16vYTn8EIPNyekDBo5KXhhGJwbIOAOTjMZJYDbKrwVfwdtqnfBjBN%2B%2Fi4KZAxpXH06t7PWYclES0y6snZPufEbFyXNfP3hue7sOvUSjQSMJDfh8oGOqUBtuRWCytrpqNE1ZMdALjYun2dk8WpQXJXkLME6Fsh6Nue5A4aN2e21SzyMjNlk6DqS71FlUKSkbP6yZZ7EqQM3mhgewyLv5rSjRVMaH3be81Kcw3VC2sY07ZsS25sy7e8KWVHwQEAkKCmQA2KCaWePwQBKaNapi9Nb5S7wvKXLLMkwHz7ou0kduAO0OwMD9jqPe9zIHE08S0kpl54Lanc6PFEEm1M&X-Amz-Signature=402afd89d210fe6b38742b4692b2181d36daad49963bb07aa737c2f7979ae3a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFB4RB6S%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDixPqiPn0iohMVJSPUEv6nUqO6caFjvJhnPWInj3JyzAiEAuz2vXpKjSK6442ofs2DJifuwey%2F%2FAq9waucSbxwdTH0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIDbnGyPsYwAieGNGyrcA1J1FJ8YicnFIoVFbQ%2F9bxNZRZrnR3pxW%2FYZ9GFzA9QA0UZ9EEJX6EGeTQdJ3ByJtgFjDHaM5t%2BfK8v%2FdTOgZk2cb9dj1km3ogEBQQbLrrIBBSl%2BMPsJDYREqPati1KN1mX%2FE8QP0L46seuOfXmshmfD0ipK6qR7NmrKQ7JZWsLQuK69CnBhaR9kihJdXd59HPUAnWjshrWTJmLCyYY9tfny39SLe7%2BourYd1Pq01X3BwPl%2BT15oIim9AA%2FBN42ycNiAZ%2FNOLL6t1clx%2BoYlYpz11dbIecBn4H4m9rEMZouKGQSRXr7gBaj7aEI%2FH6ltaXwEBA6WxhWDNRm990A77nidx8GOD8J3YoY01vWyw5GMuVjIPbKgayGyCFWaLjGc4blWZsE2JUu3A0kE36xQ%2B%2BmIWS23toSFd80t60KJwtgSJUbikPS%2B2fRhi%2BWJjplDFpaua54xXMGalyuPkQHIgwMt%2BNpqbdM1kUum1jI3fC3Zj1dFZnzQCkPrGMwmugCL9N3GDHf0%2F%2B9m6wF6PRu16vYTn8EIPNyekDBo5KXhhGJwbIOAOTjMZJYDbKrwVfwdtqnfBjBN%2B%2Fi4KZAxpXH06t7PWYclES0y6snZPufEbFyXNfP3hue7sOvUSjQSMJDfh8oGOqUBtuRWCytrpqNE1ZMdALjYun2dk8WpQXJXkLME6Fsh6Nue5A4aN2e21SzyMjNlk6DqS71FlUKSkbP6yZZ7EqQM3mhgewyLv5rSjRVMaH3be81Kcw3VC2sY07ZsS25sy7e8KWVHwQEAkKCmQA2KCaWePwQBKaNapi9Nb5S7wvKXLLMkwHz7ou0kduAO0OwMD9jqPe9zIHE08S0kpl54Lanc6PFEEm1M&X-Amz-Signature=9a642a7fcb789909ec7dc56ec4b9b51ce4dd57497cd9d19b497f08d532e76c17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

