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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX7EABYS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgwdbNfM1bQ3H20ASJ2EY0OMSljulobJ1cdx%2B9iug5WQIgfYNacbBb25zFSx5wk0L%2BO500G0zu2ueEf1oxIprEzS8q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDF%2FkRCXHxP%2BrPRyqByrcA%2BDeGc3SRnhYh36VRjPTlEbG3VKctK9IX2MlJ%2BMQIryKljr91yULcFL1j3SsDS0BZItx5ql%2FqrOnmEZhCzd7VJwN5KGZUCy0YsH6kiNh7Klz%2BM4Oy58pba607SFfAmrCBx6JvjOuilcNWgkjeTkZbFPCpqq12RQ5aqS22p5owSxPnYZN1en2vNEhSmdo5wGIMYY6lX5fC2NZUfgHrHF9WpyK2kfE05l3DXzDbWbU5TDjebcqXUkbxvPYLZyEj78HYDUiWXTpNOyCzoe1qZrJzOlRsPCIa6E30NGDTtEfBDQ6%2FRx1BtiQ0saqaV%2F1ES6U5xrBfIpYu346xLskk0Mez7HyePygMUjCrkmcLVmbuNl9lxXU%2B6F%2FO%2B4M460crsCUcCLK1sEnCiOrs0%2BNj7mRBSZ%2FyfZOSpatkQTPvPt%2Bp4julAm4sLBANZoMtZ511t7iurkCK5BwECMow6HthISaHGBor6IyqCj3WYc42f8ZBKcz3aD2tyGR5uEAqnoeVExvEDic8yAf2Wpvi5K3BybJaEhIu72nmBpCgUlmwAego4QEb1%2BuqDVKxPiMG85jrfXCDkDXI1aVX%2FKVBCuWjw5fchGqQdC08wtqWk5IEepPfH%2B4%2BEODE1MuGsTS2rfCMKC3icoGOqUBvp%2BMwbDSjghXoD9kgSHkBDcpljqtcmJfOtBYb9FmhGmohG3XFvG%2B%2Be97iscxTy8ak10Zxzx8LWBI5kEnhVE1ULyTZ8u216YRgEU6rb0g9lgdTmW8lHzTgVz3jVgv1cItN29XYnLdDdeIIIgN3%2Fv92spcP6PlzJ6NUqzwIf6HhqNa9cSEKtWvMNuB5DklDKAY1rgxkwc1EgYSePzPZTZJatXxOOv7&X-Amz-Signature=86c5495fd673d0a31b4d6e3a72f12b8b156327ecbf2579ab380bafb5f546925c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX7EABYS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgwdbNfM1bQ3H20ASJ2EY0OMSljulobJ1cdx%2B9iug5WQIgfYNacbBb25zFSx5wk0L%2BO500G0zu2ueEf1oxIprEzS8q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDF%2FkRCXHxP%2BrPRyqByrcA%2BDeGc3SRnhYh36VRjPTlEbG3VKctK9IX2MlJ%2BMQIryKljr91yULcFL1j3SsDS0BZItx5ql%2FqrOnmEZhCzd7VJwN5KGZUCy0YsH6kiNh7Klz%2BM4Oy58pba607SFfAmrCBx6JvjOuilcNWgkjeTkZbFPCpqq12RQ5aqS22p5owSxPnYZN1en2vNEhSmdo5wGIMYY6lX5fC2NZUfgHrHF9WpyK2kfE05l3DXzDbWbU5TDjebcqXUkbxvPYLZyEj78HYDUiWXTpNOyCzoe1qZrJzOlRsPCIa6E30NGDTtEfBDQ6%2FRx1BtiQ0saqaV%2F1ES6U5xrBfIpYu346xLskk0Mez7HyePygMUjCrkmcLVmbuNl9lxXU%2B6F%2FO%2B4M460crsCUcCLK1sEnCiOrs0%2BNj7mRBSZ%2FyfZOSpatkQTPvPt%2Bp4julAm4sLBANZoMtZ511t7iurkCK5BwECMow6HthISaHGBor6IyqCj3WYc42f8ZBKcz3aD2tyGR5uEAqnoeVExvEDic8yAf2Wpvi5K3BybJaEhIu72nmBpCgUlmwAego4QEb1%2BuqDVKxPiMG85jrfXCDkDXI1aVX%2FKVBCuWjw5fchGqQdC08wtqWk5IEepPfH%2B4%2BEODE1MuGsTS2rfCMKC3icoGOqUBvp%2BMwbDSjghXoD9kgSHkBDcpljqtcmJfOtBYb9FmhGmohG3XFvG%2B%2Be97iscxTy8ak10Zxzx8LWBI5kEnhVE1ULyTZ8u216YRgEU6rb0g9lgdTmW8lHzTgVz3jVgv1cItN29XYnLdDdeIIIgN3%2Fv92spcP6PlzJ6NUqzwIf6HhqNa9cSEKtWvMNuB5DklDKAY1rgxkwc1EgYSePzPZTZJatXxOOv7&X-Amz-Signature=0c54026098000e05f2d7bbe9e3f9b6e8f358194106bfebe3d69dc2b0f41fe823&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

