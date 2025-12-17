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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KRU2I2I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnXEsTJfHKGXZGhqX%2FIIlij8PjiPv9vO5ZpLQrXnQnCgIhALssTlw%2FCfsYLAa9g31GFG8voyhvGZF6cdbGOnb7GQRHKv8DCHsQABoMNjM3NDIzMTgzODA1IgxstXZ0T%2FwfEXiGGX0q3AMhrA0a2ay0qu2y4xR4zVuQGVqV%2FXL7s8U5X%2B8ADJH5YuNAMVYhtRbjJOZpAKZt%2FNgF6hNKrS0KoHvVJEYBiuT8j18%2Bn6%2FEMHzcmiiNG1uD64nO3qeIDJfFRJoIVeb8YuhILjUfaPaULWYkUpAt2V5nIRN7J4hgpUObRi7kj2NBfEL6WmFJO58mrsEWKGIYuM1FfqmYqCdivNVdptBIjGVSnrfWhk3%2FfGAqZ0rGMSVnEDXtsIOSfpVs51iyy%2F8Tzw%2BefwWrXIVCp32J17HHgdV5qX8Z6xyn3zVBQ%2FAVhkvenZYUfXmkY%2FLFAsVi6hEIikS7q85TMOBaeZDQxD5yyYTqpucKMe2x6Cg9m6HkbJH6B9J%2FObggQelsdbl8XV3GqfgfqG8URUlXzA5JUb8rkhMznL37MplWZk4rpJ1tB%2Bw47XzB%2FA5FreGxISMlva7g8B3OYchbnunHiUJYLwH2h46emDf89gJYUcHriDyYDiMCbPIjgxdTtOwXDgrpuSOJ9XXPBOvYG3SISvlLDLQKLjIl7RhDzowIdKtB4l7bFgdCwcPbc5%2FT7fl5QPSvK8B7Qn8rHH3bXOFuBybjOiA8z3L892R62ku5jBRB2kVpu9p%2BN7GfA6Cx%2FH1KLKYXDzCn8InKBjqkAex7j3eXmmGBRW4OCaHZfO0tqB6%2Fl%2FcRzJUmIJNxIEYANJ%2FtXp6seNDLmYr8Ni83f4FMcc%2FmehOduKzcuBd0YKupWS6ED1i%2FkXLKFIeH%2Bw2aDlsdtpvlCCFrb26qPFMTzQFzToG7qFRomUP%2BwEjFreo4TaoUlVcsW1fHtfcUiIaZtYc39fcArheJ61WsdDoD09yhUjWpdRK8k%2BasLXMUIJO%2BgPE4&X-Amz-Signature=41a00fa0ba6b68e953256dd84c257bfab47091db50095dbd7a4fd7b9da558296&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KRU2I2I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnXEsTJfHKGXZGhqX%2FIIlij8PjiPv9vO5ZpLQrXnQnCgIhALssTlw%2FCfsYLAa9g31GFG8voyhvGZF6cdbGOnb7GQRHKv8DCHsQABoMNjM3NDIzMTgzODA1IgxstXZ0T%2FwfEXiGGX0q3AMhrA0a2ay0qu2y4xR4zVuQGVqV%2FXL7s8U5X%2B8ADJH5YuNAMVYhtRbjJOZpAKZt%2FNgF6hNKrS0KoHvVJEYBiuT8j18%2Bn6%2FEMHzcmiiNG1uD64nO3qeIDJfFRJoIVeb8YuhILjUfaPaULWYkUpAt2V5nIRN7J4hgpUObRi7kj2NBfEL6WmFJO58mrsEWKGIYuM1FfqmYqCdivNVdptBIjGVSnrfWhk3%2FfGAqZ0rGMSVnEDXtsIOSfpVs51iyy%2F8Tzw%2BefwWrXIVCp32J17HHgdV5qX8Z6xyn3zVBQ%2FAVhkvenZYUfXmkY%2FLFAsVi6hEIikS7q85TMOBaeZDQxD5yyYTqpucKMe2x6Cg9m6HkbJH6B9J%2FObggQelsdbl8XV3GqfgfqG8URUlXzA5JUb8rkhMznL37MplWZk4rpJ1tB%2Bw47XzB%2FA5FreGxISMlva7g8B3OYchbnunHiUJYLwH2h46emDf89gJYUcHriDyYDiMCbPIjgxdTtOwXDgrpuSOJ9XXPBOvYG3SISvlLDLQKLjIl7RhDzowIdKtB4l7bFgdCwcPbc5%2FT7fl5QPSvK8B7Qn8rHH3bXOFuBybjOiA8z3L892R62ku5jBRB2kVpu9p%2BN7GfA6Cx%2FH1KLKYXDzCn8InKBjqkAex7j3eXmmGBRW4OCaHZfO0tqB6%2Fl%2FcRzJUmIJNxIEYANJ%2FtXp6seNDLmYr8Ni83f4FMcc%2FmehOduKzcuBd0YKupWS6ED1i%2FkXLKFIeH%2Bw2aDlsdtpvlCCFrb26qPFMTzQFzToG7qFRomUP%2BwEjFreo4TaoUlVcsW1fHtfcUiIaZtYc39fcArheJ61WsdDoD09yhUjWpdRK8k%2BasLXMUIJO%2BgPE4&X-Amz-Signature=493bc64b038acd7106086bb7603ee48aaee089a3325b227c623d180f24146061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

