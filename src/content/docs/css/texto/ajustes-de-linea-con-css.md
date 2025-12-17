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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBV5NHTG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5G0VgNJR2AmbcXMd2poGE9%2BpbQEaCf43FQt2Pv9mfPgIgE%2BoKgoFR5nycarzeN%2Bo5bVMnesUd%2BB%2BCBri%2BI4TWuqUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDFYATvQnvcmaqfqnlyrcA%2F1lXSLzAPXgH%2FtTott6z1Ra3TBJWrs63HilllVKRzT2SC0w3wINunf%2BRHO96PEjCoKdZy1rcUkqXt0lvCdHs26yw1HsZjj9Io9cNffhPdCuTtlm3%2F6wuOely9vV76K%2FPEbqy0P2u7MT4SDYxyGagX0hXxwgWOnJVriWAnwGc7ScFiIAJfLmPfUXrNeXY%2FYLWGzLjz2oZSnYDY9sQo7F1%2FtZF8l1FFDhvgFpu3EDdYG3ikdaqaSsj6%2Fj1EbPLRibmOuMNmBwdbenKUaUUDEkBLrNFs9SJ1Zjf39YyarvLl5IlYkx2u%2FLNfSBy6idV2FOEhT6GfA628injCvKiDgZJrc%2BEeWDWTcyl1MQS86R29MHKkihAJdvjFaOlmz4lQcHIwApYq1g6MPedJ8s7%2BT2C8PY4MUvenIyEwAjvkoOSt%2B0PRIh44nv7yccXwa8ihn9DNYu48B9ItzVX4BKkb3C1IlAmO7e1KFX0Zn7URN3Bsw3BeoneX77IXZBhUR9cAwFYugi915MSoNB1fv288U6wBugN0RYQSlXdEnbZ1rVkIMvak7GkLhmUqhAnGN0Vjy6rEyZcoT1K6ulY3ZMd7NjbMsOnVW%2Fk3GtA0j%2F8rLc%2BiyrNkYTaNdYYBz6tBahMNqWiMoGOqUBSD0uHq%2F686zilUbGliMhAt7QW%2Fc8FcT0js0bKx%2BtIii9hIKM%2BrRlOzEwvy2cICMDmQ3He6XM4KjxFDxgxR%2FJmsxFa37uwhLHPuiAto3XPi4SwwnqPf3P%2BUC7kMyaO0WtWqteUOl67%2FruQqWeXg8Xr2RnRedaZ54FlzFj4y%2FYSGA2GDjiTuqjKu4i9zVP5ij8zxyyrTbSHFJsaOXnSRuQ2q4x%2BEAr&X-Amz-Signature=3d590ed0befc4e04368be2e797ab50c4d4becdb8266dca5dea3dd6f224a8a389&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBV5NHTG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5G0VgNJR2AmbcXMd2poGE9%2BpbQEaCf43FQt2Pv9mfPgIgE%2BoKgoFR5nycarzeN%2Bo5bVMnesUd%2BB%2BCBri%2BI4TWuqUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDFYATvQnvcmaqfqnlyrcA%2F1lXSLzAPXgH%2FtTott6z1Ra3TBJWrs63HilllVKRzT2SC0w3wINunf%2BRHO96PEjCoKdZy1rcUkqXt0lvCdHs26yw1HsZjj9Io9cNffhPdCuTtlm3%2F6wuOely9vV76K%2FPEbqy0P2u7MT4SDYxyGagX0hXxwgWOnJVriWAnwGc7ScFiIAJfLmPfUXrNeXY%2FYLWGzLjz2oZSnYDY9sQo7F1%2FtZF8l1FFDhvgFpu3EDdYG3ikdaqaSsj6%2Fj1EbPLRibmOuMNmBwdbenKUaUUDEkBLrNFs9SJ1Zjf39YyarvLl5IlYkx2u%2FLNfSBy6idV2FOEhT6GfA628injCvKiDgZJrc%2BEeWDWTcyl1MQS86R29MHKkihAJdvjFaOlmz4lQcHIwApYq1g6MPedJ8s7%2BT2C8PY4MUvenIyEwAjvkoOSt%2B0PRIh44nv7yccXwa8ihn9DNYu48B9ItzVX4BKkb3C1IlAmO7e1KFX0Zn7URN3Bsw3BeoneX77IXZBhUR9cAwFYugi915MSoNB1fv288U6wBugN0RYQSlXdEnbZ1rVkIMvak7GkLhmUqhAnGN0Vjy6rEyZcoT1K6ulY3ZMd7NjbMsOnVW%2Fk3GtA0j%2F8rLc%2BiyrNkYTaNdYYBz6tBahMNqWiMoGOqUBSD0uHq%2F686zilUbGliMhAt7QW%2Fc8FcT0js0bKx%2BtIii9hIKM%2BrRlOzEwvy2cICMDmQ3He6XM4KjxFDxgxR%2FJmsxFa37uwhLHPuiAto3XPi4SwwnqPf3P%2BUC7kMyaO0WtWqteUOl67%2FruQqWeXg8Xr2RnRedaZ54FlzFj4y%2FYSGA2GDjiTuqjKu4i9zVP5ij8zxyyrTbSHFJsaOXnSRuQ2q4x%2BEAr&X-Amz-Signature=730bd048e9d1c087bb239bc1d75e9174b0a559fb4a672ca11127db7618f34c79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

