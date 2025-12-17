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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCYJZ6YO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmvLl6a%2BhF9kNkHw%2FIW6TdTUzuP9DeMKChGfMvHhOY9AiBUv8TFGKP%2BDoJ4vul09Y0ex%2FvBkdiB6J3YqT3pQbUbayr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMhZ05MiUduhRtoQHeKtwD91YFC4QCcb0NXV%2FQwmrSr%2FMyUYPi8YFeRh%2BYdpYG7xXQavX9bp%2BXricQhZ1mobO7KtrSwwoPp%2Fs1uEKmPzezrAR6dfInGT26U4Zf4eCWwjN6b%2FLzkm7zqFTnY3EpJ39RWFVmOVopCe86rOMPyWdeve7wEvVpSfrkv6u%2B07UVlFmmKgR2fpzyxbJod78K9FoqVFobADKWG2va7aYd%2BCvosKKoM4AT3h6pMbDyoMN6OeSPxGprMv1fQRx1QgAmpJ3BvGnB7LykJ3ULF02Nae6RORnffKmp10qGbPPk1nGJhIyUbkUayVyIdcNJcFnKqOT1xrbUyFP%2BZIPxtFZZIrPyvlT9V87M5PXHw%2FefAV5oLRB6hHNaXz7pxlv%2BgMR%2FMY%2B37NYPSHJxCXJME4kx3Uwr7hRklizcE1fNeTlFRZ407RpZNbyY54OfzAcMr1Sfy%2FDjeLvCcX5JGZEGjjRsDhoTHO3i1XFqeX7mjicgOlRYU5hAdXwCVlI6fvW7TaapdW3d41mGzIutCTL4B8zc5mA3apGSYnBWbPQA9Iimr95DQegHiuHMvIKZynGpPggBFe8UK2i3aNSFZtABDSOo94loZaBekV4VdAY6amD3WVEsYoiDM3c05LntPm%2FsacAwkauKygY6pgGxOdXFSdsaiMGxsEhiggOF3WvYlKc08gU9SGt4ZCJ4wCO0xnwIfZMfGYx0IaR25Ndu3H%2FBv1uKfHsxfQpIwI9UXynxpvtSM4JwcmUxf5Cc05hpFhwEW6x4L0B13kIDUvJmnPfO%2BKXtaT06cQFOJxveN9I%2FjNo6LrUTLaH34qA6Q%2BwDICoftAob3OO25u2MniJGeZ6GfW%2FDwdt3mdDlgNNEaYtyvFiD&X-Amz-Signature=e8df8066a33f0ce6a76253cad69deebaa3402da5e5f8551abc660ae74619d6e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCYJZ6YO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmvLl6a%2BhF9kNkHw%2FIW6TdTUzuP9DeMKChGfMvHhOY9AiBUv8TFGKP%2BDoJ4vul09Y0ex%2FvBkdiB6J3YqT3pQbUbayr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMhZ05MiUduhRtoQHeKtwD91YFC4QCcb0NXV%2FQwmrSr%2FMyUYPi8YFeRh%2BYdpYG7xXQavX9bp%2BXricQhZ1mobO7KtrSwwoPp%2Fs1uEKmPzezrAR6dfInGT26U4Zf4eCWwjN6b%2FLzkm7zqFTnY3EpJ39RWFVmOVopCe86rOMPyWdeve7wEvVpSfrkv6u%2B07UVlFmmKgR2fpzyxbJod78K9FoqVFobADKWG2va7aYd%2BCvosKKoM4AT3h6pMbDyoMN6OeSPxGprMv1fQRx1QgAmpJ3BvGnB7LykJ3ULF02Nae6RORnffKmp10qGbPPk1nGJhIyUbkUayVyIdcNJcFnKqOT1xrbUyFP%2BZIPxtFZZIrPyvlT9V87M5PXHw%2FefAV5oLRB6hHNaXz7pxlv%2BgMR%2FMY%2B37NYPSHJxCXJME4kx3Uwr7hRklizcE1fNeTlFRZ407RpZNbyY54OfzAcMr1Sfy%2FDjeLvCcX5JGZEGjjRsDhoTHO3i1XFqeX7mjicgOlRYU5hAdXwCVlI6fvW7TaapdW3d41mGzIutCTL4B8zc5mA3apGSYnBWbPQA9Iimr95DQegHiuHMvIKZynGpPggBFe8UK2i3aNSFZtABDSOo94loZaBekV4VdAY6amD3WVEsYoiDM3c05LntPm%2FsacAwkauKygY6pgGxOdXFSdsaiMGxsEhiggOF3WvYlKc08gU9SGt4ZCJ4wCO0xnwIfZMfGYx0IaR25Ndu3H%2FBv1uKfHsxfQpIwI9UXynxpvtSM4JwcmUxf5Cc05hpFhwEW6x4L0B13kIDUvJmnPfO%2BKXtaT06cQFOJxveN9I%2FjNo6LrUTLaH34qA6Q%2BwDICoftAob3OO25u2MniJGeZ6GfW%2FDwdt3mdDlgNNEaYtyvFiD&X-Amz-Signature=9a46a94d96af74f1216b5ead551b84047de4e7b99de4cadd6f3d15f71cab9575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

