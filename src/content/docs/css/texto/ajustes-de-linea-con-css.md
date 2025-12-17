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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EEOTYJY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T000703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyukTWkhtbVZ%2FqF76CESVax8pallDXn0KsDTKAmsCQGAiA1BU%2BuCs0bUcAqa1MClEI%2FFnEETCRsj8q6yPr2lCy6Fir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMMlzRQG%2FicIJHMTNTKtwDGTa6y7VAf9W8dOYgQmvxhBiMbZqZ%2F3eI5Fwnx%2FVbQ2%2F7n0lvTpEsfqPHhaZAyJN8X6Bt3WF9R0YlGRZcSLPhicOtu6obtI44R7midCZlx1LU6%2FnPUr2cxEnGrjupwiCmKJl4xLiQXCSpqa2uQpXd4y6wEDGj0veZt1kAQRuMDXnccfO8sFLjJqnAKsVIsqaHTFGJP%2FqqUfQUrjS4RWhW8IGAPS3esY4zIHKrSkRPMfNljVvh3VpxAVVLgErZ7satLSEbcn4Dv60FwERaVIzkvgGkqv9ewSBCffa1Ag1KC77HQL2%2Ffyhfg%2BFF8aFIgYl82oybmxqxVoB66gJIB6iWX4GfUySM54SfZPWRTZNjWsfhv7x64ngKTopnkNc2MPxPOUSUIjqnBUc4o1SGayluVEgeehM5NFk%2FMCCPMYzNtM5PqYcjM7iZK56KfXj08Bg8qe27Q00O2Z4DikpkV2W%2BElPoCvciQkv8b5kUVoVsMFP9tVLfLtsHv7evtj5dSqgXrQ%2BbtMiUiXHtdRdS5rEFTcLxspbwrV24AEzaDrcb9VuGYMlT3MYVnx2hih0EZZbN0Yi68a2seuRkaOuqL7RcJyb2gU5fV53CMpViJWbNNRqd0LsCika%2B54I%2BN30wiN%2BHygY6pgEQs16lZ%2BtUA1KhCCyu2eiLeecq9kwL%2BWVCOHXCGM8JRdXAlDafu7zdUHtIq8G80fnRF%2B8D7t%2FxdBcTODuiKglLxJM%2BaYt9eVMcc35hIpLFeE1gqvCBQIZuyT%2BtPcYHRc6JQhw43PCjf%2Bi75UKSEfzy%2FJVCwNOLgbQ7tl8t622JDfXR1xXbQEvaa%2BYQkauJlM%2FIIVAWd5tGlH4qArrGPhkVECDf8RK%2F&X-Amz-Signature=2511bf460c2e1aecf6c98125cd77679350ca16ade8f35066644cb2881482cd05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EEOTYJY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T000703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyukTWkhtbVZ%2FqF76CESVax8pallDXn0KsDTKAmsCQGAiA1BU%2BuCs0bUcAqa1MClEI%2FFnEETCRsj8q6yPr2lCy6Fir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMMlzRQG%2FicIJHMTNTKtwDGTa6y7VAf9W8dOYgQmvxhBiMbZqZ%2F3eI5Fwnx%2FVbQ2%2F7n0lvTpEsfqPHhaZAyJN8X6Bt3WF9R0YlGRZcSLPhicOtu6obtI44R7midCZlx1LU6%2FnPUr2cxEnGrjupwiCmKJl4xLiQXCSpqa2uQpXd4y6wEDGj0veZt1kAQRuMDXnccfO8sFLjJqnAKsVIsqaHTFGJP%2FqqUfQUrjS4RWhW8IGAPS3esY4zIHKrSkRPMfNljVvh3VpxAVVLgErZ7satLSEbcn4Dv60FwERaVIzkvgGkqv9ewSBCffa1Ag1KC77HQL2%2Ffyhfg%2BFF8aFIgYl82oybmxqxVoB66gJIB6iWX4GfUySM54SfZPWRTZNjWsfhv7x64ngKTopnkNc2MPxPOUSUIjqnBUc4o1SGayluVEgeehM5NFk%2FMCCPMYzNtM5PqYcjM7iZK56KfXj08Bg8qe27Q00O2Z4DikpkV2W%2BElPoCvciQkv8b5kUVoVsMFP9tVLfLtsHv7evtj5dSqgXrQ%2BbtMiUiXHtdRdS5rEFTcLxspbwrV24AEzaDrcb9VuGYMlT3MYVnx2hih0EZZbN0Yi68a2seuRkaOuqL7RcJyb2gU5fV53CMpViJWbNNRqd0LsCika%2B54I%2BN30wiN%2BHygY6pgEQs16lZ%2BtUA1KhCCyu2eiLeecq9kwL%2BWVCOHXCGM8JRdXAlDafu7zdUHtIq8G80fnRF%2B8D7t%2FxdBcTODuiKglLxJM%2BaYt9eVMcc35hIpLFeE1gqvCBQIZuyT%2BtPcYHRc6JQhw43PCjf%2Bi75UKSEfzy%2FJVCwNOLgbQ7tl8t622JDfXR1xXbQEvaa%2BYQkauJlM%2FIIVAWd5tGlH4qArrGPhkVECDf8RK%2F&X-Amz-Signature=af7ea0d647225b1dc425a6946f4e5362e4fa2c041a5a905286eddbdaadbab7a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

