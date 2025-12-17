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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUJCXIIT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDReIDRjvRf8fWIQWOFGEc6zeMSZKrrNMq%2FOEm0idXTyAiEA4xWv1%2FNR6Jor0oDzVw5fsD36EJBzXlsAek13odX1%2Bl4qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNeAN9OvgmDQIMrOxyrcAyh%2Bs9%2FfCC1Aquv6JdWDON8fROnah8Gw%2BG%2BOU%2BbfuoGLjOGQVShszBSBa%2BvEJkRPSHc%2B6fese%2Bgs6aLNrXRhB%2B4qKrLHYpBO%2BCZYgWb285f0xq2SAkytOSpRWCET%2BYtn8jmxLDzCH1T15alFYD9NOlWnpUGS74vQMnCDIIThPMwq8Xw%2FBfj1JcVjQfFzSHHUUCOy9Lvf229FkgxSCh3EBRCsn4NFB183RtzTuNOKIPkx2ypBjCwIMg0SYFagD8mVjbxnYQ3EqIcTidaHaZx8VS5nLMulW7S1V0mFwgpzuF4wfbcO4xQb9Q9jyCnPyAr0V2oyZEFHvjMawEkm%2B5Ii8nU8EfS%2FhBsp%2FwHxWQodz6kief3RparEqpOd7Ab2wKCmSku4e89R4dksfTQIIlveln0bQZu4F7BRfFwRdKfUN3m8yn3d1zUgM%2BozPgSuLL2MT%2Fna6gPit6nCbkQy8U6GGFd0%2FMVmmPw8lRXapR0J%2BeQsvtrN5xsNstIhDXXKbLoAdwuj6ZWB3eOyh0PypZ3pD0E4tCZF9xCDYg3FHERMo1jlSAET1gSH%2F2czQxdQxg4KXhy%2B5bRpbEfvXKsy9%2FnTuAb7a8TXJ%2FTtuRd0Za2BlDzRqsv%2BjZVWCkgE53iRMJ2Bi8oGOqUBwNS%2F%2FJiFr8tk2p3uMM%2BGzCto9jAVLP6MWySSNlDlunU3h2UtLKChmyX6hXCJghGlFx2YC8aNAawrMe6xSqhJo7dBpO4LQf1QIvIqHZ3YGaRJLLD4CZtIQ0%2B8xzqyUPpdkB%2Bt9XA7fl2fuZ4PI%2F%2Fep8U5ZIuhtZ2UjQXwmCY%2B%2BbzUISpoWyHCecRv4fJ9ZYEopaBjJB0QWM0tqslZQ3Q3go8I6mFy&X-Amz-Signature=ce5b17e7a9c535607874de94dda70ed2932f33d2aa91457f13c4d0ce3c13db46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUJCXIIT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDReIDRjvRf8fWIQWOFGEc6zeMSZKrrNMq%2FOEm0idXTyAiEA4xWv1%2FNR6Jor0oDzVw5fsD36EJBzXlsAek13odX1%2Bl4qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNeAN9OvgmDQIMrOxyrcAyh%2Bs9%2FfCC1Aquv6JdWDON8fROnah8Gw%2BG%2BOU%2BbfuoGLjOGQVShszBSBa%2BvEJkRPSHc%2B6fese%2Bgs6aLNrXRhB%2B4qKrLHYpBO%2BCZYgWb285f0xq2SAkytOSpRWCET%2BYtn8jmxLDzCH1T15alFYD9NOlWnpUGS74vQMnCDIIThPMwq8Xw%2FBfj1JcVjQfFzSHHUUCOy9Lvf229FkgxSCh3EBRCsn4NFB183RtzTuNOKIPkx2ypBjCwIMg0SYFagD8mVjbxnYQ3EqIcTidaHaZx8VS5nLMulW7S1V0mFwgpzuF4wfbcO4xQb9Q9jyCnPyAr0V2oyZEFHvjMawEkm%2B5Ii8nU8EfS%2FhBsp%2FwHxWQodz6kief3RparEqpOd7Ab2wKCmSku4e89R4dksfTQIIlveln0bQZu4F7BRfFwRdKfUN3m8yn3d1zUgM%2BozPgSuLL2MT%2Fna6gPit6nCbkQy8U6GGFd0%2FMVmmPw8lRXapR0J%2BeQsvtrN5xsNstIhDXXKbLoAdwuj6ZWB3eOyh0PypZ3pD0E4tCZF9xCDYg3FHERMo1jlSAET1gSH%2F2czQxdQxg4KXhy%2B5bRpbEfvXKsy9%2FnTuAb7a8TXJ%2FTtuRd0Za2BlDzRqsv%2BjZVWCkgE53iRMJ2Bi8oGOqUBwNS%2F%2FJiFr8tk2p3uMM%2BGzCto9jAVLP6MWySSNlDlunU3h2UtLKChmyX6hXCJghGlFx2YC8aNAawrMe6xSqhJo7dBpO4LQf1QIvIqHZ3YGaRJLLD4CZtIQ0%2B8xzqyUPpdkB%2Bt9XA7fl2fuZ4PI%2F%2Fep8U5ZIuhtZ2UjQXwmCY%2B%2BbzUISpoWyHCecRv4fJ9ZYEopaBjJB0QWM0tqslZQ3Q3go8I6mFy&X-Amz-Signature=bfce8769c9d5ee57d8de1c7376dfcd94f25984683ee291fdb9498695a407c941&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

