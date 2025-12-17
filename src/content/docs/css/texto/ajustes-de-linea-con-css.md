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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCUQBPBR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR7waOjFnQ1x6RcTe6hpP6kC34764LOwg069vRUIq1QAIgXwChcC%2Fv1Nh6Q%2Fm9pDcoVsRtVzfMnkyTDN%2F0dvbHW0kq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDMGzSdddaBsByOWXIyrcA5BxnXbVE67Mr2%2F5Vd3dDxlouyLGUf1YJndsPfaD9Pcm7gcyCxUcwRJK2Nnx6UnrpoRryiN7rCkm%2FOuVw7Lyy7gReZcSgrP79k%2B%2BVwbG%2FDcBQuAgg8whmFQVD8JsBnTo%2B4HVBzrhPcGEOyj2jAejeCjX85jHNIpFQ8LmTBitsuxB0lFLoRhNk7XFHkhXFt6xfzrcbGMFEiqTCsvWpW7ky4HOYBw1f2QrTg59HV5qUaMYY4u3A60HQ4%2F2BP0Afi3GpzibWD1GqIieCeeJ2sPP%2B1Xv4iYffIEifww%2FJNy1VVnb%2FoxHFMUqutQozfbbvFeizoqusGVmO%2F8HlTCZbW8H3aRgeHwUo0r4zKjjJ1UFeK0c88hdtbguV6pR0Xy%2Feb89xcrQushzCsIKjx8sIJ7NjNHXPx0coDHnSu2o2STezW3ObUfCOGccBbcMFBbxvUMbZ6aBKbScnocp%2BNikR%2BzHsVrWB0O73u4urMTs8f%2BH1dUyAC0kKwVFjwuOf2g30gTtNi7JJBCXlc1AnwMeQNRPxTUM1boKbQJSdYvI7ijQkOfPxzq0WwUVi8b0FIg3xeGV3gBcRot7bveUnJFEqEfHEdSUcdkX8g%2Fda%2FjXaOgaY3kTv4DETnF1%2FQukSZfBMOGdicoGOqUByeImAeqn4jWKKfGLST92NuFdoRrSbMwJ0hRyebeiJNOjkqZUfbUy%2BqKvsKJ%2FsVGkNHmnxmOuZIDM9p0eJ%2FCnN9j2dAfhokC5MH6AE3glYOJwuQL1NWFTOgaSq8uZrkCwPd5WLsiJECDKpxpXesS1gQsjBEl0edaoDY4FofxXJZFDq0eJYyBphX7xReRQZGdLvNnkKKkGwGC3oric%2BHBhsWNmAj%2B1&X-Amz-Signature=dc8a362caed5c5ce92957f30bf59cc716d61c0224c16643c9e3847bd1aaf147c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCUQBPBR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR7waOjFnQ1x6RcTe6hpP6kC34764LOwg069vRUIq1QAIgXwChcC%2Fv1Nh6Q%2Fm9pDcoVsRtVzfMnkyTDN%2F0dvbHW0kq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDMGzSdddaBsByOWXIyrcA5BxnXbVE67Mr2%2F5Vd3dDxlouyLGUf1YJndsPfaD9Pcm7gcyCxUcwRJK2Nnx6UnrpoRryiN7rCkm%2FOuVw7Lyy7gReZcSgrP79k%2B%2BVwbG%2FDcBQuAgg8whmFQVD8JsBnTo%2B4HVBzrhPcGEOyj2jAejeCjX85jHNIpFQ8LmTBitsuxB0lFLoRhNk7XFHkhXFt6xfzrcbGMFEiqTCsvWpW7ky4HOYBw1f2QrTg59HV5qUaMYY4u3A60HQ4%2F2BP0Afi3GpzibWD1GqIieCeeJ2sPP%2B1Xv4iYffIEifww%2FJNy1VVnb%2FoxHFMUqutQozfbbvFeizoqusGVmO%2F8HlTCZbW8H3aRgeHwUo0r4zKjjJ1UFeK0c88hdtbguV6pR0Xy%2Feb89xcrQushzCsIKjx8sIJ7NjNHXPx0coDHnSu2o2STezW3ObUfCOGccBbcMFBbxvUMbZ6aBKbScnocp%2BNikR%2BzHsVrWB0O73u4urMTs8f%2BH1dUyAC0kKwVFjwuOf2g30gTtNi7JJBCXlc1AnwMeQNRPxTUM1boKbQJSdYvI7ijQkOfPxzq0WwUVi8b0FIg3xeGV3gBcRot7bveUnJFEqEfHEdSUcdkX8g%2Fda%2FjXaOgaY3kTv4DETnF1%2FQukSZfBMOGdicoGOqUByeImAeqn4jWKKfGLST92NuFdoRrSbMwJ0hRyebeiJNOjkqZUfbUy%2BqKvsKJ%2FsVGkNHmnxmOuZIDM9p0eJ%2FCnN9j2dAfhokC5MH6AE3glYOJwuQL1NWFTOgaSq8uZrkCwPd5WLsiJECDKpxpXesS1gQsjBEl0edaoDY4FofxXJZFDq0eJYyBphX7xReRQZGdLvNnkKKkGwGC3oric%2BHBhsWNmAj%2B1&X-Amz-Signature=9da7779a2a11d4169461636442eb7f2e2e507536300a3df72ccd235e2fa3b6f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

