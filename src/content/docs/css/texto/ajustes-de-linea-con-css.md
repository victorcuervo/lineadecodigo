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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKK6MOA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjuw%2FAWCCOTVl%2BXGQlo7%2FZUDUsBJlCEHJfUgs0ijmwjQIhAJv5fLdcDS7rmxiwEL%2BUj6wgnNGJdhtUPWnaaArdKA0QKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJJTN4PU%2BSZuMFGN0q3AOx6PiV%2F5cN5Xy%2B3V4X6rzqtCTAXy2IRENiz7ODgAbTCVQFwYeKCGmNRzC0Nj03%2BepT9scewkpSi6%2FXs76cGnpXj%2FYd5WsHHigmJaZbREvQ47jRc993ld%2BkhXEwxjLVBILW6omMTgf9RGz6cWN6otib4PEWdF7vWpoYIHTCnIyXaTMHQRLNod1DLsZ0YXVxBcz4OF1Xph5ObWUnXshZFI6RRpNuvoGljklICXz7AO1Sy94temMq61qONZrfMRn1rB67Oso3iQSo7mU9BOAdcbdhjIV28m3wolGMUKEZiYplalSjQnM1FYyj3JY77P7oNhpO6kqGu6josG2A5oadsupmj48NieBAmB27%2FoA0ujkMhzDemqcE7H1UKhdRa7fjqehIVa%2B4ZW6yf9Jb5E6XdlMTx6fVVUNgllCCIcGNwHxwXGUZajLZdR8yJm307RmMNnrAnSWpyeQ0JklZlRp0QqNXLQDRBixsBNx59fn0RudQWGoStR2K6HgISkKi4vhZjqu79AeTNoTiTV7tx7oyvo%2BTBuH9fOE%2BC3WLNiwnZ2Di7I0m2qoy%2FYWpy6ej6SytUJcPe1EPelJywap5Gb6SLksW9JopzMFP3kOsxORZzqJMdJMxvcHUmdedH%2F1Y7jDUn4vKBjqkAcAzYiQOuM9jafFncEtKVxLkn4HH6qmA85jACIiOlwaynLIS8Gyygzcioi57163g8vg711PHI9F4U1PSB2Vx%2BZPhQqBz%2F6IgTkzXcdZ0OotOKenOKRF0LdqXJQw8J6O3jUVmwDQQwPvayuZx%2FqWotYzYRlH9G%2BGHtTGNmtvsK%2Bigogs6i2Y2RlYgSe0hIB5UWxHiFFoITy8v8ghOSdGRS3yWuliE&X-Amz-Signature=e8930a5bbbe9635601acfa027fb45f9c471adeff6695bb20be5a4e2498b6f78d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKK6MOA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjuw%2FAWCCOTVl%2BXGQlo7%2FZUDUsBJlCEHJfUgs0ijmwjQIhAJv5fLdcDS7rmxiwEL%2BUj6wgnNGJdhtUPWnaaArdKA0QKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJJTN4PU%2BSZuMFGN0q3AOx6PiV%2F5cN5Xy%2B3V4X6rzqtCTAXy2IRENiz7ODgAbTCVQFwYeKCGmNRzC0Nj03%2BepT9scewkpSi6%2FXs76cGnpXj%2FYd5WsHHigmJaZbREvQ47jRc993ld%2BkhXEwxjLVBILW6omMTgf9RGz6cWN6otib4PEWdF7vWpoYIHTCnIyXaTMHQRLNod1DLsZ0YXVxBcz4OF1Xph5ObWUnXshZFI6RRpNuvoGljklICXz7AO1Sy94temMq61qONZrfMRn1rB67Oso3iQSo7mU9BOAdcbdhjIV28m3wolGMUKEZiYplalSjQnM1FYyj3JY77P7oNhpO6kqGu6josG2A5oadsupmj48NieBAmB27%2FoA0ujkMhzDemqcE7H1UKhdRa7fjqehIVa%2B4ZW6yf9Jb5E6XdlMTx6fVVUNgllCCIcGNwHxwXGUZajLZdR8yJm307RmMNnrAnSWpyeQ0JklZlRp0QqNXLQDRBixsBNx59fn0RudQWGoStR2K6HgISkKi4vhZjqu79AeTNoTiTV7tx7oyvo%2BTBuH9fOE%2BC3WLNiwnZ2Di7I0m2qoy%2FYWpy6ej6SytUJcPe1EPelJywap5Gb6SLksW9JopzMFP3kOsxORZzqJMdJMxvcHUmdedH%2F1Y7jDUn4vKBjqkAcAzYiQOuM9jafFncEtKVxLkn4HH6qmA85jACIiOlwaynLIS8Gyygzcioi57163g8vg711PHI9F4U1PSB2Vx%2BZPhQqBz%2F6IgTkzXcdZ0OotOKenOKRF0LdqXJQw8J6O3jUVmwDQQwPvayuZx%2FqWotYzYRlH9G%2BGHtTGNmtvsK%2Bigogs6i2Y2RlYgSe0hIB5UWxHiFFoITy8v8ghOSdGRS3yWuliE&X-Amz-Signature=48438ca62ecf07dea63da1a58013c79878d506139878c838d81d7573db9073a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

