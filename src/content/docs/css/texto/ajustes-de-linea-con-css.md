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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOSMK2B4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHdbeYp67WZrKeDogaYgmF2CSJqwOsTyAq0za%2FY%2B4uiQAiEAsA85Djjc9gTXu4FKvCpIV%2BiHqau4Mpx%2BK3uSmYCWqd4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2yvxvf3ZNhKkKJ9SrcA1Zd6gGODiyFIVF2SM3%2Br%2BjXsufA8UAmieJ%2BkYBxLTJkFaio8W6e1NzUf%2F3j%2FMGy3ecM%2Bc8EEjZRpOVzl%2Bh9f4nhC5gxeJiW7PSYx0PMQSuphO9USxhkEMmKD4%2BvbIPEibXCKDqn5A4nYoULaDlLn1Khh9mmWED8QFdOCAJycd%2BZFQOqQr7Jl%2B0oI%2BuTrRxnTLYDRBRWK%2FykJllCZfIQQFawYWqfo9oabqghfab%2BkQQ4jmdqj42rwxanf4SBmoRNx8xba1PKbOYFwRi94olNIYRCAIzK2pSWtz94xcBsPp4KiWXrOBxBt%2FytVSBkUlviYDx8p5eMFargugMdrX3xMu6wAJb1MDkIH5ySSITLJJjzDuGom5u5XSazWTouTImSN2YBo35m7gTM7WJcAgaigTsdNLqZffjjJGIno8l5GfH%2F4yi6cGtDDOvBaF%2ButS1EJGrE522m%2Bf7K0358avm7YFbpBVu21%2FPOvCuGg26YQwnx%2F%2BWInf0AsYz2tHo9oTNATZUOr3Zj0i35Mmzk38a5UmVXTgScQYrGqaTt4jtTOqhr76Zp0bVpnHxcb0xiM0fyyslg79HaMwJoTUqJIrCMVX87Q4mqPFnldNGzqnaLX98TkQ%2FkZNtk5W5mIWMWMLqfi8oGOqUBox222Y37e2TctdLcNU1x8LuiRfZoL75LyCWeq3og3xVX7xM4RlCLtsDNmfCkXVlLRrs6L0I6HsZcgR%2BPlIgVEfCnRUEivrmr0S1Kva7JTJq5Y2BQliLGvxWIBdpQHmIQsV%2FNulk6Po6fY3%2BdNxT1py8gVlwCKCyxMLrNgDkd7nGaJLCDX8805YWMQMM9s%2FUFHVg7G0%2FVqTzgfql8uwGpCVvINOwD&X-Amz-Signature=44553c1933e8c5f36e2a3479e6ea4cde3d24a9dc49672c0664e32ba1eae8b930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOSMK2B4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHdbeYp67WZrKeDogaYgmF2CSJqwOsTyAq0za%2FY%2B4uiQAiEAsA85Djjc9gTXu4FKvCpIV%2BiHqau4Mpx%2BK3uSmYCWqd4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2yvxvf3ZNhKkKJ9SrcA1Zd6gGODiyFIVF2SM3%2Br%2BjXsufA8UAmieJ%2BkYBxLTJkFaio8W6e1NzUf%2F3j%2FMGy3ecM%2Bc8EEjZRpOVzl%2Bh9f4nhC5gxeJiW7PSYx0PMQSuphO9USxhkEMmKD4%2BvbIPEibXCKDqn5A4nYoULaDlLn1Khh9mmWED8QFdOCAJycd%2BZFQOqQr7Jl%2B0oI%2BuTrRxnTLYDRBRWK%2FykJllCZfIQQFawYWqfo9oabqghfab%2BkQQ4jmdqj42rwxanf4SBmoRNx8xba1PKbOYFwRi94olNIYRCAIzK2pSWtz94xcBsPp4KiWXrOBxBt%2FytVSBkUlviYDx8p5eMFargugMdrX3xMu6wAJb1MDkIH5ySSITLJJjzDuGom5u5XSazWTouTImSN2YBo35m7gTM7WJcAgaigTsdNLqZffjjJGIno8l5GfH%2F4yi6cGtDDOvBaF%2ButS1EJGrE522m%2Bf7K0358avm7YFbpBVu21%2FPOvCuGg26YQwnx%2F%2BWInf0AsYz2tHo9oTNATZUOr3Zj0i35Mmzk38a5UmVXTgScQYrGqaTt4jtTOqhr76Zp0bVpnHxcb0xiM0fyyslg79HaMwJoTUqJIrCMVX87Q4mqPFnldNGzqnaLX98TkQ%2FkZNtk5W5mIWMWMLqfi8oGOqUBox222Y37e2TctdLcNU1x8LuiRfZoL75LyCWeq3og3xVX7xM4RlCLtsDNmfCkXVlLRrs6L0I6HsZcgR%2BPlIgVEfCnRUEivrmr0S1Kva7JTJq5Y2BQliLGvxWIBdpQHmIQsV%2FNulk6Po6fY3%2BdNxT1py8gVlwCKCyxMLrNgDkd7nGaJLCDX8805YWMQMM9s%2FUFHVg7G0%2FVqTzgfql8uwGpCVvINOwD&X-Amz-Signature=1341bdfc7e330dfe93ff837ba43ea2ac56cab1634161ce4eab9139f6258d50bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

