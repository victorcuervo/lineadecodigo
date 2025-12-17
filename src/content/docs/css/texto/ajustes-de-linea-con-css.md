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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642CKZDON%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICU2lckkAmYC8L0SH3JjL9Ul8i%2FQNUmkItwg0wC17N%2F4AiEAmL5CHW7BoQdLvnh0wxlA2Mk4NEwQB2AzRMIOmP5X4WEq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDIgGS0W%2BMecYVMuyrCrcA%2BaOo54ZIZsBipEFsyRbkKXOCfZjUjjCh1tkV9OqHX6yDIX5LelpNXtkQS%2BCPnt1rf6Fl1g0cmOHq%2B278%2Fj3haOgM1lqiEwOl%2B0jjRBJmYMU%2FViQzhuIiKAp2gfsE0KIkI6h3eNxJcwiUpghfbbhcQ1TyJMOiwGbcKAXRe3YVe2t8uWTMVfzztcItAMnkYHNADVKJGuNLpBLDu24xhbG4U3rG%2FP2B6YRi4g%2Fv%2FGdpt8FCwRhNLnFdkfXYRCr7QFkXF3N3MSEVkS4%2B%2F3tFbo13MzLmtbFNjRkxIt1PO1cZMV%2B2XZjBc9jvzBHvoHuYV5NmW%2FyB23he%2FHF3k%2BBkffhuO940YHQGqz0PoGX7GYwdAaLWXbJLkewkPlqiMnqiFh29tfj1RVzvZEDkB19WSw2gxMKTD5C9D51Jo%2FQyRAg4RQiPrB2e6oh8JaDkHPCKdJt9z7ymsxt6PzSg3QUALpQ9tfVkmavr4D4dO%2BNeTERt1y3PwohvwI8g00haauqQgFkZkwJE2aB5jFiVsEfvIXod8EkTFvQb3rKMe%2FgfnWvv3UTPqZDDJfyuh5PnRM8tqeqdaNRMhoXjV%2BLKzFVIkIouWq1%2BsaN1LAWqksQaqgi4X1%2BeL1jnQWC9EPIwdpiMNiyiMoGOqUBOWMSOvUZq%2BxH5ONWuj%2BdWdAstVCtlMbQ91HN366EvYMblaP1iUgsn3MUnm5L%2B6NoYaP0YMz9seV1KJNnZb7uv%2BnOFrc0WIXQZzjIveuNQtLjUiWGWREdAOycvtbFmwbIhjo%2FCM3Is0D2DkqiGAe5AER%2BUjurbIZLA%2FcDXO%2F8GVi8fuh7%2BcsX8GjCqq1Sr2SrLL246e31hzZrqLSCIMRh7%2B8qoIy2&X-Amz-Signature=3b81869ea2a70970281881bcaa8bc1cd10b4b4daedde1c43971d632e8b903fc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642CKZDON%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICU2lckkAmYC8L0SH3JjL9Ul8i%2FQNUmkItwg0wC17N%2F4AiEAmL5CHW7BoQdLvnh0wxlA2Mk4NEwQB2AzRMIOmP5X4WEq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDIgGS0W%2BMecYVMuyrCrcA%2BaOo54ZIZsBipEFsyRbkKXOCfZjUjjCh1tkV9OqHX6yDIX5LelpNXtkQS%2BCPnt1rf6Fl1g0cmOHq%2B278%2Fj3haOgM1lqiEwOl%2B0jjRBJmYMU%2FViQzhuIiKAp2gfsE0KIkI6h3eNxJcwiUpghfbbhcQ1TyJMOiwGbcKAXRe3YVe2t8uWTMVfzztcItAMnkYHNADVKJGuNLpBLDu24xhbG4U3rG%2FP2B6YRi4g%2Fv%2FGdpt8FCwRhNLnFdkfXYRCr7QFkXF3N3MSEVkS4%2B%2F3tFbo13MzLmtbFNjRkxIt1PO1cZMV%2B2XZjBc9jvzBHvoHuYV5NmW%2FyB23he%2FHF3k%2BBkffhuO940YHQGqz0PoGX7GYwdAaLWXbJLkewkPlqiMnqiFh29tfj1RVzvZEDkB19WSw2gxMKTD5C9D51Jo%2FQyRAg4RQiPrB2e6oh8JaDkHPCKdJt9z7ymsxt6PzSg3QUALpQ9tfVkmavr4D4dO%2BNeTERt1y3PwohvwI8g00haauqQgFkZkwJE2aB5jFiVsEfvIXod8EkTFvQb3rKMe%2FgfnWvv3UTPqZDDJfyuh5PnRM8tqeqdaNRMhoXjV%2BLKzFVIkIouWq1%2BsaN1LAWqksQaqgi4X1%2BeL1jnQWC9EPIwdpiMNiyiMoGOqUBOWMSOvUZq%2BxH5ONWuj%2BdWdAstVCtlMbQ91HN366EvYMblaP1iUgsn3MUnm5L%2B6NoYaP0YMz9seV1KJNnZb7uv%2BnOFrc0WIXQZzjIveuNQtLjUiWGWREdAOycvtbFmwbIhjo%2FCM3Is0D2DkqiGAe5AER%2BUjurbIZLA%2FcDXO%2F8GVi8fuh7%2BcsX8GjCqq1Sr2SrLL246e31hzZrqLSCIMRh7%2B8qoIy2&X-Amz-Signature=1eb8b6a764de24b40ea2ab6a582cf30260aff39b6f5e22873eb443613bf04e8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

