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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VOWDJFF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIpKS25CTzmc6dBAPAYomkXoy4%2FcKbsRMBSv4qPNwpgwIhAJB1BsQcEUISA6bdDs5drcXjLrKwYG%2B%2B9XQC56OiipIaKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzm4mefB%2FUFKMYnw08q3APgVk2ykiFCpKWTSrqC79B93c523YL4GMfdetJT0UuDgnb3YA4vhZCMU1Z8tIT2BIlfY8O%2FnKfUkKErorX2vgtFyCf%2FLIi%2BWWhLoMaLWmmlp3IGt4GFmipSUFVKulDUF8CUQPIP8iQJpo508TYjY7%2FSDDQ6jvVVqGLP3TKJMezeVClwEGS%2FKtUVs6Ng6bPqHUMc2HMe8X5USjskkrhk9XNdfLQWuC1805%2F6xbtcbTKjiqCD4XH7tMobpCBx2G3uZ8VkE%2FVolhzCMmNzaNYGEbc928lbbVt8uRDGypzDe75lExcGxz4ia87woG%2Fg%2BXLgTfXx8SGrIWMWC%2BARnJHE%2B9wz%2B0L9YoIDaF2A2ajYHWSI7QWDsmPY4gNm9wozK0xLll6fzC3RTQtxzqgNEgByXHMX2pgVkE5JZXHjqYXS%2FvZQxsj17FlyGkE3d2%2FU5XCgAIxYgJ%2F4xeQwT1h6K89AYtQ2i3NM04hrvKmdmE1V%2BZ4S4raV0GntjW8jP2B8hUYXhhwwR8S%2Fj1Px06kmKRXQjNcGKFdGZm0xnZe%2F5hHeHIsUdXd%2BimikTUsJlm1LADiSSDLKeXph7gb3QMagbC4bTkYWpzqvATld0tWJKnzgidMbVH9OWjK4GkDS4Xi8mDDHn4vKBjqkARlvGo9XAU4P62VwusXQHEE722%2FnVYtg9DWkTbfXu%2FxDD6qjuqzeEoY91%2BMbqgH56TcISiv%2FTB%2BdV2Vq23NrPZnhF1EeP%2FPCP5dVzzYg%2Bs3VL6eHcf3TmDqoPBY0QjYnX2wb4AQERR%2FwbEtnqFrU72ALN6q3qRRbeOHPozPOG0ENPzvbHxtsdbk6NkoUG8bSkx5ekJxSYHvxPX1I%2BpqXjBuEoXy6&X-Amz-Signature=da9dca6c866a65f79be5957aabe887533ce79ceaed860be8b2ee32312dc52c06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VOWDJFF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIpKS25CTzmc6dBAPAYomkXoy4%2FcKbsRMBSv4qPNwpgwIhAJB1BsQcEUISA6bdDs5drcXjLrKwYG%2B%2B9XQC56OiipIaKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzm4mefB%2FUFKMYnw08q3APgVk2ykiFCpKWTSrqC79B93c523YL4GMfdetJT0UuDgnb3YA4vhZCMU1Z8tIT2BIlfY8O%2FnKfUkKErorX2vgtFyCf%2FLIi%2BWWhLoMaLWmmlp3IGt4GFmipSUFVKulDUF8CUQPIP8iQJpo508TYjY7%2FSDDQ6jvVVqGLP3TKJMezeVClwEGS%2FKtUVs6Ng6bPqHUMc2HMe8X5USjskkrhk9XNdfLQWuC1805%2F6xbtcbTKjiqCD4XH7tMobpCBx2G3uZ8VkE%2FVolhzCMmNzaNYGEbc928lbbVt8uRDGypzDe75lExcGxz4ia87woG%2Fg%2BXLgTfXx8SGrIWMWC%2BARnJHE%2B9wz%2B0L9YoIDaF2A2ajYHWSI7QWDsmPY4gNm9wozK0xLll6fzC3RTQtxzqgNEgByXHMX2pgVkE5JZXHjqYXS%2FvZQxsj17FlyGkE3d2%2FU5XCgAIxYgJ%2F4xeQwT1h6K89AYtQ2i3NM04hrvKmdmE1V%2BZ4S4raV0GntjW8jP2B8hUYXhhwwR8S%2Fj1Px06kmKRXQjNcGKFdGZm0xnZe%2F5hHeHIsUdXd%2BimikTUsJlm1LADiSSDLKeXph7gb3QMagbC4bTkYWpzqvATld0tWJKnzgidMbVH9OWjK4GkDS4Xi8mDDHn4vKBjqkARlvGo9XAU4P62VwusXQHEE722%2FnVYtg9DWkTbfXu%2FxDD6qjuqzeEoY91%2BMbqgH56TcISiv%2FTB%2BdV2Vq23NrPZnhF1EeP%2FPCP5dVzzYg%2Bs3VL6eHcf3TmDqoPBY0QjYnX2wb4AQERR%2FwbEtnqFrU72ALN6q3qRRbeOHPozPOG0ENPzvbHxtsdbk6NkoUG8bSkx5ekJxSYHvxPX1I%2BpqXjBuEoXy6&X-Amz-Signature=acfcafbb3b9517462be6134653ca3660e3c3887e8b4fb46ee331faf1d5f04d7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

