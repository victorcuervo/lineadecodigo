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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XCNUV7W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5Z3oQWnUAK4TA%2Fw0zWmx5punyTc1bhq75vyu1Z2RrTgIhAOC2gVEQcIarR6P234Kegn5iDJ%2FysaJTAPPTY4qsijILKv8DCHkQABoMNjM3NDIzMTgzODA1IgxpLWlvUtykRjiADCkq3AN%2FdDiKamq78N1QQGOXDXcsYSvWDHuRhHK255ugh7S%2BcEICf7YMRADdN0q0fX7ELBfcf%2FLvyCJnItU4FFqYlc7z6w06E70VjWu5qe5oxbwCrItiLX3H%2F2qu7J2l1IVsVSafMZtPlNh87hXu0icfXb8iKTTMOVTKoGi%2FF2c1eawui72KDYYN%2FshmA%2BvIXpW%2FPxDXAKu1NH7kSudelPOALqS4CrSkb3Mg%2Brw%2BxU0XrNJ1iss43p19BSIw6MnQ8s2eVwIt9qNn9Zdij%2BOoDZguuZYC%2F%2Fa7BMVMqNZ381aiLoBrZw%2Bupusgd3ptI53mQTvqSfmXskFc0PwISMQwoZBB%2FrzYOojOJvXIMTGwJxfU6kf%2ByEVPFq%2BhinWqhQ%2BX1Oc6JJ%2FvCyOh%2BuhiPZ1S3YdJVlIUe5EUKLclNZqzGqMiasfZ%2BWskqMFav2zXVd%2FBWvfMPoajJv3lSpdUuF6WJTlwRPpa05ZkhFdnpBZF8wbTE1e8yJmjEGM0SStvqOsVggMu84OzOuxrmKsATafcMqufK45s8hkg1YhwfI7TwYNDLAZDrF7NyO0GviMSSybc0cwJBSzRshSmwWdDrTqjXh38U2oA3y5lqzlf0VPWo9DLtsnfhwDSyFL3PSo%2FFHESXzCduInKBjqkAU8ovsWwYOwa5VbAxn52OcGPWVeoQI7KtGwPMznY1nbzxM0P9kSSNFb3q2z9C4kI7cguAgy8GIwPipG2iHzRcrfrOJN4yiUnPhvKh5eVJSDwUrjVn0Yat9t5GFy1HUfxpzV8Xrfln2sFOZCIPeH8EHR8LEynO4KrNRk1P%2BiYnLXfGPpBnOtF%2FMvd9Fbs7jcVsQC7kYA%2BlX%2F8q%2Btt9CZbWxxqsMxC&X-Amz-Signature=f60765f3c46c5a597ec221dd6b9aa56cd96edbe6d08a3c71578c70b362aa78c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XCNUV7W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5Z3oQWnUAK4TA%2Fw0zWmx5punyTc1bhq75vyu1Z2RrTgIhAOC2gVEQcIarR6P234Kegn5iDJ%2FysaJTAPPTY4qsijILKv8DCHkQABoMNjM3NDIzMTgzODA1IgxpLWlvUtykRjiADCkq3AN%2FdDiKamq78N1QQGOXDXcsYSvWDHuRhHK255ugh7S%2BcEICf7YMRADdN0q0fX7ELBfcf%2FLvyCJnItU4FFqYlc7z6w06E70VjWu5qe5oxbwCrItiLX3H%2F2qu7J2l1IVsVSafMZtPlNh87hXu0icfXb8iKTTMOVTKoGi%2FF2c1eawui72KDYYN%2FshmA%2BvIXpW%2FPxDXAKu1NH7kSudelPOALqS4CrSkb3Mg%2Brw%2BxU0XrNJ1iss43p19BSIw6MnQ8s2eVwIt9qNn9Zdij%2BOoDZguuZYC%2F%2Fa7BMVMqNZ381aiLoBrZw%2Bupusgd3ptI53mQTvqSfmXskFc0PwISMQwoZBB%2FrzYOojOJvXIMTGwJxfU6kf%2ByEVPFq%2BhinWqhQ%2BX1Oc6JJ%2FvCyOh%2BuhiPZ1S3YdJVlIUe5EUKLclNZqzGqMiasfZ%2BWskqMFav2zXVd%2FBWvfMPoajJv3lSpdUuF6WJTlwRPpa05ZkhFdnpBZF8wbTE1e8yJmjEGM0SStvqOsVggMu84OzOuxrmKsATafcMqufK45s8hkg1YhwfI7TwYNDLAZDrF7NyO0GviMSSybc0cwJBSzRshSmwWdDrTqjXh38U2oA3y5lqzlf0VPWo9DLtsnfhwDSyFL3PSo%2FFHESXzCduInKBjqkAU8ovsWwYOwa5VbAxn52OcGPWVeoQI7KtGwPMznY1nbzxM0P9kSSNFb3q2z9C4kI7cguAgy8GIwPipG2iHzRcrfrOJN4yiUnPhvKh5eVJSDwUrjVn0Yat9t5GFy1HUfxpzV8Xrfln2sFOZCIPeH8EHR8LEynO4KrNRk1P%2BiYnLXfGPpBnOtF%2FMvd9Fbs7jcVsQC7kYA%2BlX%2F8q%2Btt9CZbWxxqsMxC&X-Amz-Signature=eb30f7d9c1090b699fb1ce828c9c85e982a8a334207e2731a2aeceb6e61ab8da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

