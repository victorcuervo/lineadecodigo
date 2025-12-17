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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL744QCL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXQmLy%2Bc8gQ9dQoWncUz4Yl35KjXr0Zv02dEb1hl4m4AIhAIfkzuFeFT6rQT1enkn9co8Vsse6cq1WE3f5G7ilPDivKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzzt5TF3k7ukWsT68Qq3AMP63q7T3fMZLGhK2r7SpBUXU370mzjQ73KrLYP0tazAVqHVEmw6%2B5%2BUriEscnx2LaZCclTgIzYkgOAWRDmQ2PFx0u%2B2EkyX5HDpkZWQvWIAxVCBtbFztM%2BS%2B6P9lzP9GyI%2FAMHKH1isuF9LXHcaUqKsgD2q%2BjIW8lckYm19gJYrYmfKH1viHDzTZYd5XUNBcSmSKrLa8zdb8hH22BCYAhw8drwjofR2T57pGAR8TsXZYDNvqtYs1XILwJas%2F4mM0UaoFT6z56zIxzaALpv5%2BxFwY2LTUmUwkGl1Aw08W2dK6ielrSRURDI%2FerEJa58Ck1A5OzzAUyu7SE9KpFW6%2Bcti%2FzH4hRXy82LlL9FTSd57IfoIgQr0qI1YlUaxpMN3WMOxgFpRBz%2BU0rmAP03jkemXZ9seugr57rXNd8d8as05gK6MthWMglMDYXpsjNp6mTQz9qhIHvRMrMsz2XDwiPbjFRh5o%2B07poTVsEC1FtBtfJrDwv70iMurlI95NLbQrWRsx1wNigCMV8wPpOJDpIq9JMqetKdl7ywMT9iW8xfG%2FqU%2BQmgg10s70fUPmXB2Ro6srWpwHdoErq4IxzVA72ieWtH%2BUGJPA%2FjjnYlXpYwRnvWw43OZo94p903lDC3gYvKBjqkARDp545gJdkoiYepJgPvLNH61QxUaunOoaiv2G0JvRAFN7G83UaVlxTm0mwtDpgecLU9u1py9PUXWMYUELDVFe4gGhi7wgP6C7eU5JdF%2FAin6MtETG4JAr%2FwaEW491%2B%2BIzpcJKb1VEnYn8XaGtzcSZcbUIFzH6tWlQq8740WWEEKkQBcAgdD6BlfbGRKu7YZdM%2BuzCqubf9m0AGK07bfR%2BjHAlXO&X-Amz-Signature=2df56efb4d2ea31efd231ec44243a82fc1ffa6d579010c228195148814de45d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL744QCL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXQmLy%2Bc8gQ9dQoWncUz4Yl35KjXr0Zv02dEb1hl4m4AIhAIfkzuFeFT6rQT1enkn9co8Vsse6cq1WE3f5G7ilPDivKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzzt5TF3k7ukWsT68Qq3AMP63q7T3fMZLGhK2r7SpBUXU370mzjQ73KrLYP0tazAVqHVEmw6%2B5%2BUriEscnx2LaZCclTgIzYkgOAWRDmQ2PFx0u%2B2EkyX5HDpkZWQvWIAxVCBtbFztM%2BS%2B6P9lzP9GyI%2FAMHKH1isuF9LXHcaUqKsgD2q%2BjIW8lckYm19gJYrYmfKH1viHDzTZYd5XUNBcSmSKrLa8zdb8hH22BCYAhw8drwjofR2T57pGAR8TsXZYDNvqtYs1XILwJas%2F4mM0UaoFT6z56zIxzaALpv5%2BxFwY2LTUmUwkGl1Aw08W2dK6ielrSRURDI%2FerEJa58Ck1A5OzzAUyu7SE9KpFW6%2Bcti%2FzH4hRXy82LlL9FTSd57IfoIgQr0qI1YlUaxpMN3WMOxgFpRBz%2BU0rmAP03jkemXZ9seugr57rXNd8d8as05gK6MthWMglMDYXpsjNp6mTQz9qhIHvRMrMsz2XDwiPbjFRh5o%2B07poTVsEC1FtBtfJrDwv70iMurlI95NLbQrWRsx1wNigCMV8wPpOJDpIq9JMqetKdl7ywMT9iW8xfG%2FqU%2BQmgg10s70fUPmXB2Ro6srWpwHdoErq4IxzVA72ieWtH%2BUGJPA%2FjjnYlXpYwRnvWw43OZo94p903lDC3gYvKBjqkARDp545gJdkoiYepJgPvLNH61QxUaunOoaiv2G0JvRAFN7G83UaVlxTm0mwtDpgecLU9u1py9PUXWMYUELDVFe4gGhi7wgP6C7eU5JdF%2FAin6MtETG4JAr%2FwaEW491%2B%2BIzpcJKb1VEnYn8XaGtzcSZcbUIFzH6tWlQq8740WWEEKkQBcAgdD6BlfbGRKu7YZdM%2BuzCqubf9m0AGK07bfR%2BjHAlXO&X-Amz-Signature=1063459796243c22c1bca301a4814f73682eb1bff227e679851435071d48a972&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

