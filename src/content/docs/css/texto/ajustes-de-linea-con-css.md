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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUFQYRH4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGWetmU%2F50F0PzjSR%2FEm%2F08x5vVMLBFSTaTzHdnHo8cAiABw0DCI3OXf8PdsC0ak6CP%2FXcJxeZg3%2F6c0Cd4oGNznyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMnfRV0EQkv3jcwxk%2FKtwDPNJQBPeBlOmLUQ1%2Fgv3vwF%2B98p2uQp0ReRUSNBMEYtXP9CNSoK4WFP3yZ52KyKjTe2doiujnd7BwMQyeDZH6KnKw0iAFQzxrR9jJWUQADj95NCO4qiyb7mkgMQ9C3KJFTSqCMHfSwYQmz5UxrIO1q8BB3AtB0omTpzd4WNieClSYT2dZ5KgYeGlEMUCVN7d2KX7nuGGfdnzcDskcx7pCaL4C%2FSbWMgnKofgluDTzmTH9x4M20cvNxtlijh%2BX9G4FNp0K7uruAnJu%2BfI4ZN%2FPSayo2oMGvxvzUm0m4FqP3m9NJhhOst8DahGIE8la1CCsMjEhVmTU%2F8sdokhQexgUbcMFHlsf4KdrHKAcATB28GRgWeBvjVES9e8Vh7Wm%2Ba%2B3Xe%2F1QsrMQSW8AV1sHzGH4r8lYqX0OXhS3hitRdQ9TG6dUyGrNRIvEza%2F6ary%2FRZRNAEeLHWAGOd%2FwBekKZsmfJ1Y8qhLk6EYVyx0IsTdbhSms2UOAI3OvvstBi6mov%2FTTOoCOQZVEj9c804l%2ByhMcY2abMVU8uVj0QSkXLBqTmFJX%2F%2Br7P3pWMHKnIgp8HC4Bf2ny2QEocgGKLeivc2cEfxvvMyFh99dhs5Gp9PAbN28BgilswLubT85b10wgeqIygY6pgHBI8CJFT9eWJNlmWlIJe4qZgMolN7150U4fSW%2FsbTXA0Xhwjd8XipgsL3UxQ2XY6hkD0SPmf0sPkrpIARrOptvBwVXkjz7pJqWIHscDNgnMnem%2FUn66z0ivPRci7RmXh87OJuSYAvUEUqEfdwthSScq9YIR7gBXGEYGccZMpYb6Jf%2FxEVhbYCQXliNGc5hsB4Nbml8rP85cR0c77fojY6sDXS9vkJL&X-Amz-Signature=078dbeb7fc8a47707a55d36243db98916cf98cf7d820f02e8be3bbe85278c6e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUFQYRH4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGWetmU%2F50F0PzjSR%2FEm%2F08x5vVMLBFSTaTzHdnHo8cAiABw0DCI3OXf8PdsC0ak6CP%2FXcJxeZg3%2F6c0Cd4oGNznyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMnfRV0EQkv3jcwxk%2FKtwDPNJQBPeBlOmLUQ1%2Fgv3vwF%2B98p2uQp0ReRUSNBMEYtXP9CNSoK4WFP3yZ52KyKjTe2doiujnd7BwMQyeDZH6KnKw0iAFQzxrR9jJWUQADj95NCO4qiyb7mkgMQ9C3KJFTSqCMHfSwYQmz5UxrIO1q8BB3AtB0omTpzd4WNieClSYT2dZ5KgYeGlEMUCVN7d2KX7nuGGfdnzcDskcx7pCaL4C%2FSbWMgnKofgluDTzmTH9x4M20cvNxtlijh%2BX9G4FNp0K7uruAnJu%2BfI4ZN%2FPSayo2oMGvxvzUm0m4FqP3m9NJhhOst8DahGIE8la1CCsMjEhVmTU%2F8sdokhQexgUbcMFHlsf4KdrHKAcATB28GRgWeBvjVES9e8Vh7Wm%2Ba%2B3Xe%2F1QsrMQSW8AV1sHzGH4r8lYqX0OXhS3hitRdQ9TG6dUyGrNRIvEza%2F6ary%2FRZRNAEeLHWAGOd%2FwBekKZsmfJ1Y8qhLk6EYVyx0IsTdbhSms2UOAI3OvvstBi6mov%2FTTOoCOQZVEj9c804l%2ByhMcY2abMVU8uVj0QSkXLBqTmFJX%2F%2Br7P3pWMHKnIgp8HC4Bf2ny2QEocgGKLeivc2cEfxvvMyFh99dhs5Gp9PAbN28BgilswLubT85b10wgeqIygY6pgHBI8CJFT9eWJNlmWlIJe4qZgMolN7150U4fSW%2FsbTXA0Xhwjd8XipgsL3UxQ2XY6hkD0SPmf0sPkrpIARrOptvBwVXkjz7pJqWIHscDNgnMnem%2FUn66z0ivPRci7RmXh87OJuSYAvUEUqEfdwthSScq9YIR7gBXGEYGccZMpYb6Jf%2FxEVhbYCQXliNGc5hsB4Nbml8rP85cR0c77fojY6sDXS9vkJL&X-Amz-Signature=cc3ae96ff4160e1e9b5f7631602871a6b25ac40da3d582b64a0acf6703c77ee0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

