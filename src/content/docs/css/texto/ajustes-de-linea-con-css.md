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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWW4MJVF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgLK4wFPsIoNy7QFJ2wTD1WQHxx5D4jWgkqUinokJHfAiEAzN%2FHarzAmxr0rxd2L63BOO2sxVKl9Y0WbEKvXgJOmqUq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDMoFh21il82jfdEa9SrcAwURGun0TSuPAxwKM3qaFrFEd1LDdmEAdsbzSVBEQKMGexSDaFI3kXFs90y7%2B%2Ft1LR6n2ZFntsVxzeSaob6keazHQB9Kvs7ZIxFSJLVFhNTxufdaQSoOzZxdXIZlU6qGCiawud0SdAEjdDVInZuR68O695B57zlBqlTezoWJngRawtsWhuUvlZtpO4SYxDPdzxNLS2VZ%2B8R0Nks9uCyWuARsnV5q6BnBYPSZ%2FUUYqPkMC5vysNrZ0s1GjfjSCqxfi91jN9eVtEcmgUA4aDnEIFycGnQ8OCOinEtiqCc5VzVQV8%2FdVpS%2BezJ7m7ns3VDiPyX%2F%2FnGLnxELKYoYpFr8upW3yTMGnxG%2FBJgZd4ScwJfNd5J4bjDN6Y0Qls0cdQgZaYgVcFsTLLs%2BLc96kRf%2B5nxZCZ3g1CwfRqikq4iNaOsPL9GsgLejmYavVpt4qCV6KC%2Bpcvw1sVizfgeoltwBCj2hOI2WRIeUAvMW6%2BFr8yTZfxQEF1rjRFcpOVIAE9QZ%2Bbe2qljEHZCVQrqnpEhu%2B4vT7pCstD7onvbk8la%2FjoWZD1c6gEwtolJwODID4ZV1Sjg75laNHozDNTQUg2%2F5BwDJzNQByTHY6wwWRo6RLgnU2NAPLj8YFDQqU1bqMKTwicoGOqUBJr%2FCnqHAJneeNk1OFs%2Fls2m38qnfLcOxnVlk4N%2BfqSGfKs8EskR5cNPDeklQK5rRTF%2BamJ27apOCx2klEcCQp6r1EYJUVNh%2FDzo76XczD9t%2Bd6TrW3fTzjwIFR8SQUzdjPaFQzBRqAfNagdD2X8OmOjVyy%2B6Svv%2BJxUCn1KzYBUUxklZqjNedq8CV57IpHM3ZFq0ja4NSRCcELHpZEAaWrUZtnQi&X-Amz-Signature=6fd0e55afcae415b5b4cdf3a1ae7a6c47bc095ea101f0c95b8f802bf96fe3ca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWW4MJVF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgLK4wFPsIoNy7QFJ2wTD1WQHxx5D4jWgkqUinokJHfAiEAzN%2FHarzAmxr0rxd2L63BOO2sxVKl9Y0WbEKvXgJOmqUq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDMoFh21il82jfdEa9SrcAwURGun0TSuPAxwKM3qaFrFEd1LDdmEAdsbzSVBEQKMGexSDaFI3kXFs90y7%2B%2Ft1LR6n2ZFntsVxzeSaob6keazHQB9Kvs7ZIxFSJLVFhNTxufdaQSoOzZxdXIZlU6qGCiawud0SdAEjdDVInZuR68O695B57zlBqlTezoWJngRawtsWhuUvlZtpO4SYxDPdzxNLS2VZ%2B8R0Nks9uCyWuARsnV5q6BnBYPSZ%2FUUYqPkMC5vysNrZ0s1GjfjSCqxfi91jN9eVtEcmgUA4aDnEIFycGnQ8OCOinEtiqCc5VzVQV8%2FdVpS%2BezJ7m7ns3VDiPyX%2F%2FnGLnxELKYoYpFr8upW3yTMGnxG%2FBJgZd4ScwJfNd5J4bjDN6Y0Qls0cdQgZaYgVcFsTLLs%2BLc96kRf%2B5nxZCZ3g1CwfRqikq4iNaOsPL9GsgLejmYavVpt4qCV6KC%2Bpcvw1sVizfgeoltwBCj2hOI2WRIeUAvMW6%2BFr8yTZfxQEF1rjRFcpOVIAE9QZ%2Bbe2qljEHZCVQrqnpEhu%2B4vT7pCstD7onvbk8la%2FjoWZD1c6gEwtolJwODID4ZV1Sjg75laNHozDNTQUg2%2F5BwDJzNQByTHY6wwWRo6RLgnU2NAPLj8YFDQqU1bqMKTwicoGOqUBJr%2FCnqHAJneeNk1OFs%2Fls2m38qnfLcOxnVlk4N%2BfqSGfKs8EskR5cNPDeklQK5rRTF%2BamJ27apOCx2klEcCQp6r1EYJUVNh%2FDzo76XczD9t%2Bd6TrW3fTzjwIFR8SQUzdjPaFQzBRqAfNagdD2X8OmOjVyy%2B6Svv%2BJxUCn1KzYBUUxklZqjNedq8CV57IpHM3ZFq0ja4NSRCcELHpZEAaWrUZtnQi&X-Amz-Signature=b9083f2d5273490898d153900cc011742b921bc3e2d443401d787e63491a7dfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

