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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A7N5WKL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBPLEaAqc95rBDCxjsXgpj9xOWo1hd0lUK2JXODKpBrQIhAKd9dW1HiyEoiP%2BrzPxKjrYXaHFQDan9BTAasn8r65zpKv8DCH0QABoMNjM3NDIzMTgzODA1Igz6tpeg0flriqmTtEkq3AM4ZgBiR%2FtuVmIXcCSJ728WTWwVaO9jAbeqtMr8d4uTtmMfHFAzC0SjHhztqI7smHN5h%2BwiXpuKtOZGp3U8kj7olB7wa9LrYoVzWLra5QQ9S9BwkYQILXGB3pyTByFo8kimcX8yIruEneQ7tzDbQWDg0gNzgDyCJwFZGW%2FQhn5eC1iYVQM3zVASKMdxlJE6X%2FshnGAbh%2FO2NXFy86GpW%2BQ0ahWtswiveRHsE0eePjzwxO3iNiIidL%2FT%2BxwaeVYAUG9pdM9E7oPKp8OoQKlMcoRGbCKKoyQh5bZUPlVa4tlIL8v9xIagwWL5t2rkEqvDThMaZTYUAAJ%2FUMhbsolxpRuGD5hBhVbDGdpEKrImt6EvAxff5GBSdRRexNFkTCvgGqXVsNe6MB5WEKcOf2%2Bdwfy8RF4wkyIssPCdPoujGa8IYspk4WixCxFfn9KFiBzF%2F5sXZO8qXK81C4vvZiZjMfMZ3C6fe2ivjmSzNSAZeuxcp5xK%2FFpQS9I4F9b3f62bURr0c5QgX6Tk0W%2BL57Km4ERIL1nbE0lYNirWRO2tb1vaRxXSc8ygWVYMQBPhrCZkzJvrYIJrmBZ1hC3fC%2BzscAvpmqMNRLdNgebZFcs3%2FLPwpTF%2BsidCbTFNeHNVvTD2qorKBjqkASEw6O2DfpIOUbwRSxthUj1r%2FZmiYs7X4TbHDtlUCcOj1Pn12JMH83WUbkpIDIy5P1dYMf4Gt6RtfuDhvAg8VyIU0azaq5uRpu3ynLh%2F4NHvXnbtpNHWp4ohtXtZdrDsUfgATu5G36RKp2J36XgGGAmIB8tlmd4xLb0caKlJYLeUY3yTr7lciU8KcBKoEhRdFUpiSvIIpMdzPwG5ZU%2FTjyVf1mmP&X-Amz-Signature=30adb473882566c6564c624acd254a1599de1f46f105d77e56de00f2fe4534cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A7N5WKL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBPLEaAqc95rBDCxjsXgpj9xOWo1hd0lUK2JXODKpBrQIhAKd9dW1HiyEoiP%2BrzPxKjrYXaHFQDan9BTAasn8r65zpKv8DCH0QABoMNjM3NDIzMTgzODA1Igz6tpeg0flriqmTtEkq3AM4ZgBiR%2FtuVmIXcCSJ728WTWwVaO9jAbeqtMr8d4uTtmMfHFAzC0SjHhztqI7smHN5h%2BwiXpuKtOZGp3U8kj7olB7wa9LrYoVzWLra5QQ9S9BwkYQILXGB3pyTByFo8kimcX8yIruEneQ7tzDbQWDg0gNzgDyCJwFZGW%2FQhn5eC1iYVQM3zVASKMdxlJE6X%2FshnGAbh%2FO2NXFy86GpW%2BQ0ahWtswiveRHsE0eePjzwxO3iNiIidL%2FT%2BxwaeVYAUG9pdM9E7oPKp8OoQKlMcoRGbCKKoyQh5bZUPlVa4tlIL8v9xIagwWL5t2rkEqvDThMaZTYUAAJ%2FUMhbsolxpRuGD5hBhVbDGdpEKrImt6EvAxff5GBSdRRexNFkTCvgGqXVsNe6MB5WEKcOf2%2Bdwfy8RF4wkyIssPCdPoujGa8IYspk4WixCxFfn9KFiBzF%2F5sXZO8qXK81C4vvZiZjMfMZ3C6fe2ivjmSzNSAZeuxcp5xK%2FFpQS9I4F9b3f62bURr0c5QgX6Tk0W%2BL57Km4ERIL1nbE0lYNirWRO2tb1vaRxXSc8ygWVYMQBPhrCZkzJvrYIJrmBZ1hC3fC%2BzscAvpmqMNRLdNgebZFcs3%2FLPwpTF%2BsidCbTFNeHNVvTD2qorKBjqkASEw6O2DfpIOUbwRSxthUj1r%2FZmiYs7X4TbHDtlUCcOj1Pn12JMH83WUbkpIDIy5P1dYMf4Gt6RtfuDhvAg8VyIU0azaq5uRpu3ynLh%2F4NHvXnbtpNHWp4ohtXtZdrDsUfgATu5G36RKp2J36XgGGAmIB8tlmd4xLb0caKlJYLeUY3yTr7lciU8KcBKoEhRdFUpiSvIIpMdzPwG5ZU%2FTjyVf1mmP&X-Amz-Signature=9febfb8d393a9e4f9e2e3c1522732640550fc917f0a98718046e5ae2e514df30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

