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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIZ3KJ7T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIC3FIfo%2FwpqFcs%2B6bfYZyHBR21UfBrTW30%2FMurk3MOwIhANiHSdU20U%2BTFAEvOMvXPk49CfmOAYkwy57B9JigkAZDKv8DCHsQABoMNjM3NDIzMTgzODA1IgwWkGSYj1JgBz8sp3Iq3ANrTwbquK4ap17%2Fg2cZTiDnCkslPYqCHfRfLymM3bafNnc8EZX5ygBO4%2FuDfrhA5%2FaSExE1h7tTCVPm1EZSpLJ%2Flw4XVHpcNHrviwj%2FQWTyjG%2Fssvf9mCVPigbop1fqFEo%2F%2Fz0OpYGBlJ3cGorhI00kLB0YiI0kCO6yNueXSJSILpF7SP0FtWdU8MRmcHih%2FvHGUk9gfEBKycSx0Efmch21Ntl13uiVcG9mOtlkXxxn%2B8sS4R4FNMk0EFur5y%2Fw9gDNyAMu0KXIZ0DLvV%2FjXiL5nBvhA94iF7rmbq10PfAOC0Dy%2FlbebH3kBvsuBfaF8h08ogsZJ%2B%2FuEM%2FMnx8js%2FyQdQuCA9Hpa34n5nWroRDlkMILk1RfZTCYk5I2o4fde8iO5ZMjhXWsMqOTjOJq1D1D52A0F15voZAX2mlC6cKJj9T8VmB8993IAXhya7lfdvKYCUG0NP34EL8XFxjnfCgVYoJM8Kf%2Fs2Te5SP3Wv1AAEgWSUGBzcgHES1rUR23JxQPPs6no%2FYVQtLTHQFYT%2Bxuquq7HLIeFRwf9bnwDrJ9ShB%2BueXnpJ23keIeJAHopIpZuY1ChwmcygjM%2B%2BBZwDceo733Eg%2FyhSaNgiZYku7Nssp2Yc99Gnc3Bboh5zDB74nKBjqkAWfKEGQHig36M5hMT2IZJkgkhAd4XDGRDgphhDsq7TtyQcaCrPLNFUUYWDp0dJdPXZBRfpAyUMmlpWRbz9Sv8VhJdDejWcVQEnpHnnrGi%2Fk%2FtxR3VXt%2FhZf6a3wGyYn21ZH4XxVNVkTPeItRbC2kBwYpUrSW7v3zeE8stDoDBWKIkehejseIEAdoeOAkTWPQbzSKRuqOm%2BbMbSNTub50fAq7ABNf&X-Amz-Signature=d637726dacb97ec06fd46bb756faddb8f96c998bafe4e05010cec69c36d00d12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIZ3KJ7T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIC3FIfo%2FwpqFcs%2B6bfYZyHBR21UfBrTW30%2FMurk3MOwIhANiHSdU20U%2BTFAEvOMvXPk49CfmOAYkwy57B9JigkAZDKv8DCHsQABoMNjM3NDIzMTgzODA1IgwWkGSYj1JgBz8sp3Iq3ANrTwbquK4ap17%2Fg2cZTiDnCkslPYqCHfRfLymM3bafNnc8EZX5ygBO4%2FuDfrhA5%2FaSExE1h7tTCVPm1EZSpLJ%2Flw4XVHpcNHrviwj%2FQWTyjG%2Fssvf9mCVPigbop1fqFEo%2F%2Fz0OpYGBlJ3cGorhI00kLB0YiI0kCO6yNueXSJSILpF7SP0FtWdU8MRmcHih%2FvHGUk9gfEBKycSx0Efmch21Ntl13uiVcG9mOtlkXxxn%2B8sS4R4FNMk0EFur5y%2Fw9gDNyAMu0KXIZ0DLvV%2FjXiL5nBvhA94iF7rmbq10PfAOC0Dy%2FlbebH3kBvsuBfaF8h08ogsZJ%2B%2FuEM%2FMnx8js%2FyQdQuCA9Hpa34n5nWroRDlkMILk1RfZTCYk5I2o4fde8iO5ZMjhXWsMqOTjOJq1D1D52A0F15voZAX2mlC6cKJj9T8VmB8993IAXhya7lfdvKYCUG0NP34EL8XFxjnfCgVYoJM8Kf%2Fs2Te5SP3Wv1AAEgWSUGBzcgHES1rUR23JxQPPs6no%2FYVQtLTHQFYT%2Bxuquq7HLIeFRwf9bnwDrJ9ShB%2BueXnpJ23keIeJAHopIpZuY1ChwmcygjM%2B%2BBZwDceo733Eg%2FyhSaNgiZYku7Nssp2Yc99Gnc3Bboh5zDB74nKBjqkAWfKEGQHig36M5hMT2IZJkgkhAd4XDGRDgphhDsq7TtyQcaCrPLNFUUYWDp0dJdPXZBRfpAyUMmlpWRbz9Sv8VhJdDejWcVQEnpHnnrGi%2Fk%2FtxR3VXt%2FhZf6a3wGyYn21ZH4XxVNVkTPeItRbC2kBwYpUrSW7v3zeE8stDoDBWKIkehejseIEAdoeOAkTWPQbzSKRuqOm%2BbMbSNTub50fAq7ABNf&X-Amz-Signature=b6c16ffe659e83c08fdc38588e14bfb84c24ed936fe6c88454342b770ad448a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

