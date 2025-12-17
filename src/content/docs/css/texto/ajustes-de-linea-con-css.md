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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632CWXRY6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FQ0FDLXlpccgCfUmhI%2FDBAJgI13TRj5SSaEUV8t9lpwIgTrzgjTjSg%2Fb%2BjGkSUN0SJEncfDXIPp1YMKjr%2FiAJkcEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1BzbbIAy%2FRUXtxaCrcAwRquJrWR2a2uffw5QsM42ASoR9L5ZcfvasZbpnPKI%2BKMlpbdmDbKsiryrwmZ5%2F2L4ohtUsmTafvqXAfc1WkrUYwexvfWGLA%2FuKH6aTT5%2Bos9d%2FVQ2QmrK3fFw61706dGMJakZFqQhoPx7kHvQUCDPMkZjy9RMaLMbnVXL%2FnGtRTJIQMF7XX4NHYZ5M6nkW2cKPtURQY%2FHAZxZ8qBZgC0Yy3eQ2u3V72GYqTCLdtbclfrlhAJxMSSGgXfMyB4a6%2FwhCgmYMaHnpCW7pOAXaPFq2gcXgBlS2FPpZhnMJVti0tM5ohUlXS9NI6bH025eGh1Epd74W5HkfcfWcztF0CfxIgS24nSQn%2BdlBxpUzsJrpWqns6mTI%2Fd3YGVhNibUJMTSXL7CZGZw%2FrXnOaq%2FXStbhuUyMAOednzthzSaxd9HrFWfaflg%2BzcFFaznFXBbb00NkQgu6v1%2FQKVuPrSUKzUlr3XxnACqHQMwgT54%2FO1j7%2BvH%2Bmd9ezuWCJDKv8wfHqV5M2UK2bByhHAk9zhefQ5GWGDEIhiuD1LdRsfDPoFFROnfgUv0ku4lxC8b7KORvnXaj7wMFr4gaWdZF1eEiq7iBgCrUfrSTbVlKb5OKWMhRzFI8TY10%2FbMpJrPYoMKagi8oGOqUBifdn6VLlasFZvBC%2Bks%2BsxKOSvksEGQKtBHxSAAOU7XJ8kbl%2B%2FT%2BEZnVg4aqoXwC2PIBt6JeoNsm1LmtIkUzleojZCbYtmJ7oWJ%2BbNXHzHAUs7S9yvPNpu4WBME01kfj9IDbycDMvpZ2dodv9i6QzxTg2dixYphG4y%2FE%2BnUwwy%2FQ%2FoYTYcLF39zZexyaBXF%2Bg8lQsAIJWhO5w6%2FsTBfankA4bKK%2BB&X-Amz-Signature=a3e0bee2e2bbdeab7b945ad8ce63d5a241003243b8168541d66ba65e72a28110&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632CWXRY6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FQ0FDLXlpccgCfUmhI%2FDBAJgI13TRj5SSaEUV8t9lpwIgTrzgjTjSg%2Fb%2BjGkSUN0SJEncfDXIPp1YMKjr%2FiAJkcEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1BzbbIAy%2FRUXtxaCrcAwRquJrWR2a2uffw5QsM42ASoR9L5ZcfvasZbpnPKI%2BKMlpbdmDbKsiryrwmZ5%2F2L4ohtUsmTafvqXAfc1WkrUYwexvfWGLA%2FuKH6aTT5%2Bos9d%2FVQ2QmrK3fFw61706dGMJakZFqQhoPx7kHvQUCDPMkZjy9RMaLMbnVXL%2FnGtRTJIQMF7XX4NHYZ5M6nkW2cKPtURQY%2FHAZxZ8qBZgC0Yy3eQ2u3V72GYqTCLdtbclfrlhAJxMSSGgXfMyB4a6%2FwhCgmYMaHnpCW7pOAXaPFq2gcXgBlS2FPpZhnMJVti0tM5ohUlXS9NI6bH025eGh1Epd74W5HkfcfWcztF0CfxIgS24nSQn%2BdlBxpUzsJrpWqns6mTI%2Fd3YGVhNibUJMTSXL7CZGZw%2FrXnOaq%2FXStbhuUyMAOednzthzSaxd9HrFWfaflg%2BzcFFaznFXBbb00NkQgu6v1%2FQKVuPrSUKzUlr3XxnACqHQMwgT54%2FO1j7%2BvH%2Bmd9ezuWCJDKv8wfHqV5M2UK2bByhHAk9zhefQ5GWGDEIhiuD1LdRsfDPoFFROnfgUv0ku4lxC8b7KORvnXaj7wMFr4gaWdZF1eEiq7iBgCrUfrSTbVlKb5OKWMhRzFI8TY10%2FbMpJrPYoMKagi8oGOqUBifdn6VLlasFZvBC%2Bks%2BsxKOSvksEGQKtBHxSAAOU7XJ8kbl%2B%2FT%2BEZnVg4aqoXwC2PIBt6JeoNsm1LmtIkUzleojZCbYtmJ7oWJ%2BbNXHzHAUs7S9yvPNpu4WBME01kfj9IDbycDMvpZ2dodv9i6QzxTg2dixYphG4y%2FE%2BnUwwy%2FQ%2FoYTYcLF39zZexyaBXF%2Bg8lQsAIJWhO5w6%2FsTBfankA4bKK%2BB&X-Amz-Signature=177c1c7e8b1ef65da16039989c51b693251bd5a54f959f3ad4590f3f9ea48601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

