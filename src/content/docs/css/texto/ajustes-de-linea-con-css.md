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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646FQNRJL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICm6X6Yjpo4cXQQ8dYMr6Q0zgDImU%2BRMrjxo65xMt%2Fc1AiAhpiqoyu3dm7rbNLd8SqQTIJ6MWNP9GOJPGQlwzStzYir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMrybWnglH3PZWxQXUKtwDmGDLxFA9BOvVbbUwxnsSp1ioKjHaOrtHmQ55MHCBHUd0k7VI1iaGJK6c%2Fq7xsqDML%2FTDfCsw3OUeZ6L78vKPHbjscQk9OA%2F3Zxu1%2FXWyuQUiOP60ZdrOBjzLPQpB9%2BfbHhC%2BG2EYVgHmDrx6NtyN7dFQtfxhwROEOYTSHX8CsG8a6hKx19hP1p6ap6nGSn%2B6ScowOErgUFYv0BZGTLwx%2FDYstfL3g82Lf5PzWRK%2BLKhiewjMpOZUUnbtioIM2iZmrmb1V5yV6H2NWOtcXGb8lKYXhEQDNyWUmKtrvBgaOCPt0ZhpAcUKhcDhpyXsrzlCxL6u9R7L49hockGgZIBjkeQVNIR3CMZnIjP0sDBA561z6qJqoLBQap5m0sHOH3WYpfl1AGA%2Fcl7gb1evBqX5Y7DZ9%2FYsQFH%2Fkc49KM22Aa90QalvAl79ItEB8s0N4FePqsKyxhzrptqjUPN9gcCLPb3s4iKqSmmrf3OKE9QKyQgeIP5kMYL3s%2BQ5frUg9pJ3pgBVQEvV7OEv58bkJFxOdbuyoTY1GYDVrkumD1CD3defiY%2FFS9D%2Fo5pwuVY5V1CMb4EQ8MVLC%2BmjgZ7AkLL23DeBQMWfKynM1gZtrEx863uralDrFiI6gHpmmaAw5paIygY6pgEOt6EKt3QmN2pUpD04zM0bMDObmYOtDy6v0w6KopmVHGARWD5bSRz9931bzrayu1pPPbFfVjrcMzRpZG6orMjqt2z%2Be2KoHGOr%2FGOXf60HMQj1zmUtIAUS72xSFL5VNvfDg25FBV5t3yPfM12tWWM8mSZSnoqqD1kcHxp7%2FWXygDNA1dFHWaUh22582zs56Tzc3qLNWsNQ9I5sg6JnCjtnW6RPsCdh&X-Amz-Signature=a677ebeaa030a23695b38a8c0322df27521ead8ba0cf231593f6e1957c1a4abf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646FQNRJL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICm6X6Yjpo4cXQQ8dYMr6Q0zgDImU%2BRMrjxo65xMt%2Fc1AiAhpiqoyu3dm7rbNLd8SqQTIJ6MWNP9GOJPGQlwzStzYir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMrybWnglH3PZWxQXUKtwDmGDLxFA9BOvVbbUwxnsSp1ioKjHaOrtHmQ55MHCBHUd0k7VI1iaGJK6c%2Fq7xsqDML%2FTDfCsw3OUeZ6L78vKPHbjscQk9OA%2F3Zxu1%2FXWyuQUiOP60ZdrOBjzLPQpB9%2BfbHhC%2BG2EYVgHmDrx6NtyN7dFQtfxhwROEOYTSHX8CsG8a6hKx19hP1p6ap6nGSn%2B6ScowOErgUFYv0BZGTLwx%2FDYstfL3g82Lf5PzWRK%2BLKhiewjMpOZUUnbtioIM2iZmrmb1V5yV6H2NWOtcXGb8lKYXhEQDNyWUmKtrvBgaOCPt0ZhpAcUKhcDhpyXsrzlCxL6u9R7L49hockGgZIBjkeQVNIR3CMZnIjP0sDBA561z6qJqoLBQap5m0sHOH3WYpfl1AGA%2Fcl7gb1evBqX5Y7DZ9%2FYsQFH%2Fkc49KM22Aa90QalvAl79ItEB8s0N4FePqsKyxhzrptqjUPN9gcCLPb3s4iKqSmmrf3OKE9QKyQgeIP5kMYL3s%2BQ5frUg9pJ3pgBVQEvV7OEv58bkJFxOdbuyoTY1GYDVrkumD1CD3defiY%2FFS9D%2Fo5pwuVY5V1CMb4EQ8MVLC%2BmjgZ7AkLL23DeBQMWfKynM1gZtrEx863uralDrFiI6gHpmmaAw5paIygY6pgEOt6EKt3QmN2pUpD04zM0bMDObmYOtDy6v0w6KopmVHGARWD5bSRz9931bzrayu1pPPbFfVjrcMzRpZG6orMjqt2z%2Be2KoHGOr%2FGOXf60HMQj1zmUtIAUS72xSFL5VNvfDg25FBV5t3yPfM12tWWM8mSZSnoqqD1kcHxp7%2FWXygDNA1dFHWaUh22582zs56Tzc3qLNWsNQ9I5sg6JnCjtnW6RPsCdh&X-Amz-Signature=be74b96ca346403c39202a84beeaa83a08f5db4769bbb511be12466dcdb28a6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

