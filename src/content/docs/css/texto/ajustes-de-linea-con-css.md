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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LZUURY5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAEqxWJ00yHKDLS5Hr3l6yDcFFvKEzhXCyUU1I7x2B1QIgVMjJ0j%2BRVRKL%2FvKxty09X2ws%2BWssqoWjnK%2F0j2cSR2Yq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKEGBlIf3wZ2qtcpWircA%2Fs1cndScK8c04WN0UaCWM5vxwV%2FsOHAdWVOsX41OUdlipg%2F%2B07vduTYED%2Fynd3vz%2BruJwCO2Uv9%2Fsoh0oD6g1Qc%2FsP34czs9SguH2a3yF7eT2%2FmVkCtUdHhY4H0xwgyG2KrUDnT4sPKtxF%2BCUV1WjYR50ihEOypUx5qVn97o1csk0%2BNFFeNNnytTYE9dMNP%2FEXlz%2FO9pQtdJS%2FQVGQl7bEcot37GYAPOWXoNI1fW7UsPplNGK%2BSfOGdDzP%2B%2FUvHgb%2FCeOj10z2lVx89ygXlh9bsNVXVNuAvZrbRQxwWbL6DyXkHvUNE9x2Hw0AiPTlIukX6vSbwAO9YME6Jc%2F%2BSgdMCdbYvuF%2BDUV%2FagCDTbYGTehBj8cymgLpHs0fBN8RTdn2TQ3XamOI4tAn70d0ewbIfwHA0QATMH%2F1KsAH9r5TWU8EGtYnxOUjswTD7xfOWTJUWgwaYoLpTk9QEzHyGoiT9un9MMiyO0f8LsBrJRkZ0nbnWXFCEoMl3Z2MbOWNL66%2FjRWxnDwyaa3oGi9JVpjgiZHoHAvunB2%2ByMuAc9IWwjYakl4AZRXeBYx3XwyUmBMTs2E3HUI9KBMK3Er1Ops83v2P0iAEFDuoycz9en6Jlj2rY6WDY059iVVI%2FMNyqisoGOqUB4tATmR2gWhafRBAM7xZDwGtnVSL40ei4HNZabJLcqZsvUOq5KfuV4ix%2B%2BAQkmSvwDh37Z6z7OXq55BcXAYTOHCS0faKeqRl%2Fr5mSWGwLgRbUneKRGLGSUxUwPfPVy%2BOME%2BV4fzW6nDuQopdyrpcCT%2F1ua4sV%2Bc93ocb4da7knDW3m3mGIjiWVD%2BLnc4CiUJJMCebD2XngHg1%2BXYMl3qw%2BbQneahx&X-Amz-Signature=3bb3e16a8672362d3150013dc6bfb0f6a744716c5bce837deb81818eafc0d0f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LZUURY5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAEqxWJ00yHKDLS5Hr3l6yDcFFvKEzhXCyUU1I7x2B1QIgVMjJ0j%2BRVRKL%2FvKxty09X2ws%2BWssqoWjnK%2F0j2cSR2Yq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKEGBlIf3wZ2qtcpWircA%2Fs1cndScK8c04WN0UaCWM5vxwV%2FsOHAdWVOsX41OUdlipg%2F%2B07vduTYED%2Fynd3vz%2BruJwCO2Uv9%2Fsoh0oD6g1Qc%2FsP34czs9SguH2a3yF7eT2%2FmVkCtUdHhY4H0xwgyG2KrUDnT4sPKtxF%2BCUV1WjYR50ihEOypUx5qVn97o1csk0%2BNFFeNNnytTYE9dMNP%2FEXlz%2FO9pQtdJS%2FQVGQl7bEcot37GYAPOWXoNI1fW7UsPplNGK%2BSfOGdDzP%2B%2FUvHgb%2FCeOj10z2lVx89ygXlh9bsNVXVNuAvZrbRQxwWbL6DyXkHvUNE9x2Hw0AiPTlIukX6vSbwAO9YME6Jc%2F%2BSgdMCdbYvuF%2BDUV%2FagCDTbYGTehBj8cymgLpHs0fBN8RTdn2TQ3XamOI4tAn70d0ewbIfwHA0QATMH%2F1KsAH9r5TWU8EGtYnxOUjswTD7xfOWTJUWgwaYoLpTk9QEzHyGoiT9un9MMiyO0f8LsBrJRkZ0nbnWXFCEoMl3Z2MbOWNL66%2FjRWxnDwyaa3oGi9JVpjgiZHoHAvunB2%2ByMuAc9IWwjYakl4AZRXeBYx3XwyUmBMTs2E3HUI9KBMK3Er1Ops83v2P0iAEFDuoycz9en6Jlj2rY6WDY059iVVI%2FMNyqisoGOqUB4tATmR2gWhafRBAM7xZDwGtnVSL40ei4HNZabJLcqZsvUOq5KfuV4ix%2B%2BAQkmSvwDh37Z6z7OXq55BcXAYTOHCS0faKeqRl%2Fr5mSWGwLgRbUneKRGLGSUxUwPfPVy%2BOME%2BV4fzW6nDuQopdyrpcCT%2F1ua4sV%2Bc93ocb4da7knDW3m3mGIjiWVD%2BLnc4CiUJJMCebD2XngHg1%2BXYMl3qw%2BbQneahx&X-Amz-Signature=5321977ff1ab5c18dd72738c50f08e832c52d00157f6e236fa25a6c1310d1e75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

