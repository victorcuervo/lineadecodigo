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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWWYUUT5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZZxWqN9kY%2FzYyUiHAxljvgk9wMa1z%2FmgfIfbOVTte%2BAIgVpB0rT9IEisW21SvuhVH77%2FEXdn%2BF5%2FCnVXwmwEPX3YqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5Y9X%2BD%2B5aEjpvp%2BSrcA6JS56afuA96QE2JMix05kbIGPYtf17i0%2Fw4rquA%2F%2FmXMabRRBHYy7%2B8h0MhBD8Z%2F0DpaLoRgqClUng4bojoE6xKL67r1TkBGCEqqJvlI4%2FIfizWXsTnVfRBIXqxAji4cO6o91UGkYAvUckn8sEsczawhhcEKGcp5nkkefNdqpQNwrXOTueEmnuqTWSoDcn4AfMTrLWnO%2B8VrRd79%2BHYO%2B4g3jNE7CoqhwWE3RS%2F6EuWduTrd6vbviyioESZC4hVFyGJgkL7C%2BbQoR%2BzV8SpCaw%2BPKaO0Jin1RWR3w81mOBsuALcLbdR9uZiBuFc50gSvixlYoF30EvZhuN6zckP7VmenxCaZ8pCCvi%2BjjXEqYELsq5w%2BfIgQ9ZrUG8xqlzic1Bhi8y%2B7qyD5pOoXRW5MTFLJsDwIAzSUDb%2FQIxDiITZfIxEeceXVCGoPv4Era2HUUswjRg3HXiFSPaaDKhSeypxecofEcaauNlmMlRxPkI5nvCQP3gWhisuNpeErWAoLYejlzlAfWpqGPH5YGoilcNgRKz8sa28q3oKT5PBc%2F1d9e3Hyd0xyqI3Qh4NBlAh4YyW2g%2Fqo1H5DiwPrA%2B3juj%2BF%2BJvGRhHMzhHAGKFVqootWakfe7Lm6LoKdJFMLegi8oGOqUBt%2Bj9tPgTOenfvxYzbFQuf2PNlG4w9PV%2F%2Fgq1uNYGRdc7JOgq58DsfZwYEijJkV7UbRdOzLcgHStMuIHyaggyGDQi8kWhYggvGVmMqjvU4WfZbXQ81YFknQZfLzVW2Rlm2YkS1j938%2BG4pQZ70Qg5e9DyuIr%2FQq7GsGyk0UTlqB%2B8Vk1SEHKINGlXeHvndABVjaLY03KoODKJUVRmP%2FvDRO7RpUHm&X-Amz-Signature=bd6b0ed9987fa0572577d1c1841f671a7060f838daa7ad064dec196421d86321&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWWYUUT5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZZxWqN9kY%2FzYyUiHAxljvgk9wMa1z%2FmgfIfbOVTte%2BAIgVpB0rT9IEisW21SvuhVH77%2FEXdn%2BF5%2FCnVXwmwEPX3YqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5Y9X%2BD%2B5aEjpvp%2BSrcA6JS56afuA96QE2JMix05kbIGPYtf17i0%2Fw4rquA%2F%2FmXMabRRBHYy7%2B8h0MhBD8Z%2F0DpaLoRgqClUng4bojoE6xKL67r1TkBGCEqqJvlI4%2FIfizWXsTnVfRBIXqxAji4cO6o91UGkYAvUckn8sEsczawhhcEKGcp5nkkefNdqpQNwrXOTueEmnuqTWSoDcn4AfMTrLWnO%2B8VrRd79%2BHYO%2B4g3jNE7CoqhwWE3RS%2F6EuWduTrd6vbviyioESZC4hVFyGJgkL7C%2BbQoR%2BzV8SpCaw%2BPKaO0Jin1RWR3w81mOBsuALcLbdR9uZiBuFc50gSvixlYoF30EvZhuN6zckP7VmenxCaZ8pCCvi%2BjjXEqYELsq5w%2BfIgQ9ZrUG8xqlzic1Bhi8y%2B7qyD5pOoXRW5MTFLJsDwIAzSUDb%2FQIxDiITZfIxEeceXVCGoPv4Era2HUUswjRg3HXiFSPaaDKhSeypxecofEcaauNlmMlRxPkI5nvCQP3gWhisuNpeErWAoLYejlzlAfWpqGPH5YGoilcNgRKz8sa28q3oKT5PBc%2F1d9e3Hyd0xyqI3Qh4NBlAh4YyW2g%2Fqo1H5DiwPrA%2B3juj%2BF%2BJvGRhHMzhHAGKFVqootWakfe7Lm6LoKdJFMLegi8oGOqUBt%2Bj9tPgTOenfvxYzbFQuf2PNlG4w9PV%2F%2Fgq1uNYGRdc7JOgq58DsfZwYEijJkV7UbRdOzLcgHStMuIHyaggyGDQi8kWhYggvGVmMqjvU4WfZbXQ81YFknQZfLzVW2Rlm2YkS1j938%2BG4pQZ70Qg5e9DyuIr%2FQq7GsGyk0UTlqB%2B8Vk1SEHKINGlXeHvndABVjaLY03KoODKJUVRmP%2FvDRO7RpUHm&X-Amz-Signature=31964ccf33ccdaaebeaee51ee08254c241af406997c20acb459c652ae3e7a2e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

