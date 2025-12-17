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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4MSA3H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2FQabsmE01yR1plws3L0CNjqE5QACg3AzxVxvfeYjEAiEA4KRz58d7OLC8rRBdroChXLzi4SdNN%2FtI638Oi%2FU8%2BMoqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNS9To%2F8kvFMPxLp2yrcA1jMMdL%2F5lfF5gWuV7Tp7L2TXEBW6v%2FZg4jBAj01goXKV8J2H2Fp09eOpJAZaQk4xI8R1sXoQTgTaznmXYbDCUWmgN5s34R9of5lN8q0mIb%2F3xBHR5stgXycAXMuw%2FLCjQsHrjuQA113cv92AGtrdt4oH7WY5m104CSKSTDUTMXIV8uVeCjw14AleBYkG45jRkP36p9PYcZzSRtzdU2KFPOPe08bDS3oJacJphzy4knSr6gOS0Tmq3DBnZCwb5%2Bu2J3YToFpaOHg2jPP7sEpEOckv%2BSbclmUJj5s3IJm7pnL5HgM8TFATAXSNVi16trg%2B1AEugf2xuqfGpbhtt5794sTVV2KlGFgFb2rwpPmOnE3I0MSzlGy0%2Fr8CdHBiaKVF5iSOi%2F6AIYLti8ABnVOf31eS7SHbyDmOjwUX96laPLuCubAb9VJU8CJncZzm%2FTBVgMiq60PJwkK%2FZZ%2BytPrMEfsm6C8oXIMY7IC4mT1cnc%2FyZJ4qHRnSNsbEnTwoBxaHxRzgnJGzjNQW1TzJGCH%2BC3tl0B%2Fegum%2BjG34LLxE2AED3ThhONG%2ByVfXj0n6Icyqv8ZoYpxeQcBlc4HZ8DIvlG3KRf5ZLQbwSa3jEjVQ3KBbvzmHh3xhxo3NS6AMMWKjMoGOqUBGvpG9Mf8uHVGcJQDAkNKGrhHeYnrNA8Ys5SuFH3VTeZ6zTSKjyZrM9I%2BysyKjwVYilxdbSm4BIS3Pv4GZFKhm9ap1zbvv67yLCywMNaBrUyGMChJ5QAo0GtRMTMMlKYLZnlGcIfDpln7Plwavz34Zvo5%2F2Pd93ipNGV1XiKrmcDEZ2jgqUhjQI04kllKuerhf6FnVXXdFw0Iz5%2BAQ4THCzHmeHDl&X-Amz-Signature=426930bc7268156deaa74cb64f8e15fdaf7f774933f96e0e83a426dd9680a4c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4MSA3H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2FQabsmE01yR1plws3L0CNjqE5QACg3AzxVxvfeYjEAiEA4KRz58d7OLC8rRBdroChXLzi4SdNN%2FtI638Oi%2FU8%2BMoqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNS9To%2F8kvFMPxLp2yrcA1jMMdL%2F5lfF5gWuV7Tp7L2TXEBW6v%2FZg4jBAj01goXKV8J2H2Fp09eOpJAZaQk4xI8R1sXoQTgTaznmXYbDCUWmgN5s34R9of5lN8q0mIb%2F3xBHR5stgXycAXMuw%2FLCjQsHrjuQA113cv92AGtrdt4oH7WY5m104CSKSTDUTMXIV8uVeCjw14AleBYkG45jRkP36p9PYcZzSRtzdU2KFPOPe08bDS3oJacJphzy4knSr6gOS0Tmq3DBnZCwb5%2Bu2J3YToFpaOHg2jPP7sEpEOckv%2BSbclmUJj5s3IJm7pnL5HgM8TFATAXSNVi16trg%2B1AEugf2xuqfGpbhtt5794sTVV2KlGFgFb2rwpPmOnE3I0MSzlGy0%2Fr8CdHBiaKVF5iSOi%2F6AIYLti8ABnVOf31eS7SHbyDmOjwUX96laPLuCubAb9VJU8CJncZzm%2FTBVgMiq60PJwkK%2FZZ%2BytPrMEfsm6C8oXIMY7IC4mT1cnc%2FyZJ4qHRnSNsbEnTwoBxaHxRzgnJGzjNQW1TzJGCH%2BC3tl0B%2Fegum%2BjG34LLxE2AED3ThhONG%2ByVfXj0n6Icyqv8ZoYpxeQcBlc4HZ8DIvlG3KRf5ZLQbwSa3jEjVQ3KBbvzmHh3xhxo3NS6AMMWKjMoGOqUBGvpG9Mf8uHVGcJQDAkNKGrhHeYnrNA8Ys5SuFH3VTeZ6zTSKjyZrM9I%2BysyKjwVYilxdbSm4BIS3Pv4GZFKhm9ap1zbvv67yLCywMNaBrUyGMChJ5QAo0GtRMTMMlKYLZnlGcIfDpln7Plwavz34Zvo5%2F2Pd93ipNGV1XiKrmcDEZ2jgqUhjQI04kllKuerhf6FnVXXdFw0Iz5%2BAQ4THCzHmeHDl&X-Amz-Signature=f4c9ad46cb77e73e8f8f873e160e69e54c96f7d5f2389485331fc9a6f1a657fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

