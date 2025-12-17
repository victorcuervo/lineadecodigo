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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YSRYUTB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7ErfIenLgp2ModVl2st3zWjyT55IgxSuog3%2FTnPuX8AIgezSm6PdG2GupLPatREEsJ%2BPmUrEHIcakEHHwYaRPd9YqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6MepKGVcf8yShPRSrcA4m24eqlNwTZJhI%2FONRlgdUaDwNUbRwbRfyYbtZRcNDLodKYx011Ho6DFBvsmgIlLlELRhdc7%2FUGEy8BZGKmMjQ%2F739IrXIv0iQlw7MkfwYOrcvwMs0g6LcOuoitSFifum3wZUhRxLax%2FYwkjJswvHE%2F2CLRJlyxSV7yhgPwLsNYi2LRlx97JNWLfP%2B905ZR5MxhIVLlhaM0%2F5n6Or2ufXT6ZM%2BBy%2BCiMXQG%2FJTBiby7oC98p%2BNTgkjE0LTXz0YzaWgN9caw2IC8x0kezsAP0jI4ra9RnQ8SUJYVo1IFgC0u53WkEoc%2BJ2IEUWB1mRxCE%2FrT7y6rcmufijm09fMJtASb5V91uaDWUFy8Avch%2BmrebvW7qfmV8Lij1CzeMhFDV4mOQf1OzbLUi%2BT3JOpHqngmCCOOvmBKmAEkb6qgYq2Jm8ZKyqA2GM%2F76fh9cUAPyxJl7w6Yhs6sehn1Xt9UFxPQv6Xw%2B4mnUIt36hCI%2F9hlyeQIo5OrM2i%2BXvoD46jO1zsmikWAYaJHmMkPvbSYZNtNdk%2FdF6nNysw7ED4zEY9xQ9I%2FxF4xzT1zKmT3FLwx%2BRkQWG4j5RjuLF3pZTZh622TM3QaKyJ080pqf8r4j0OqaZdOBBw%2BX8yUTZAwMNSfi8oGOqUBPW36mBLqq2VdhxkdW3KXYm0zEnBEN7AAYQ6Z%2BpqxAskPlW0AMO2cl5lElSk9zq%2FiuoRWVjz0eTK%2Fd8Z5yS4rMKNQYKH89zaa1OsETS%2FHFJBNw24Ti4c6FhQg0%2F37FIlT7ymdoAlixAVTAiVzbp62VOzJf%2Fvq2vd%2FUzPWxaB%2FjayVbrqOtTh3UKoMogUdavkGPZvNaaeHhzNvkpyM6AVHnIxO9LDm&X-Amz-Signature=d5a9ab75bfc0ae64236f38493cb654fbdf4a757910e0d621d25f1b682df484ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YSRYUTB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7ErfIenLgp2ModVl2st3zWjyT55IgxSuog3%2FTnPuX8AIgezSm6PdG2GupLPatREEsJ%2BPmUrEHIcakEHHwYaRPd9YqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6MepKGVcf8yShPRSrcA4m24eqlNwTZJhI%2FONRlgdUaDwNUbRwbRfyYbtZRcNDLodKYx011Ho6DFBvsmgIlLlELRhdc7%2FUGEy8BZGKmMjQ%2F739IrXIv0iQlw7MkfwYOrcvwMs0g6LcOuoitSFifum3wZUhRxLax%2FYwkjJswvHE%2F2CLRJlyxSV7yhgPwLsNYi2LRlx97JNWLfP%2B905ZR5MxhIVLlhaM0%2F5n6Or2ufXT6ZM%2BBy%2BCiMXQG%2FJTBiby7oC98p%2BNTgkjE0LTXz0YzaWgN9caw2IC8x0kezsAP0jI4ra9RnQ8SUJYVo1IFgC0u53WkEoc%2BJ2IEUWB1mRxCE%2FrT7y6rcmufijm09fMJtASb5V91uaDWUFy8Avch%2BmrebvW7qfmV8Lij1CzeMhFDV4mOQf1OzbLUi%2BT3JOpHqngmCCOOvmBKmAEkb6qgYq2Jm8ZKyqA2GM%2F76fh9cUAPyxJl7w6Yhs6sehn1Xt9UFxPQv6Xw%2B4mnUIt36hCI%2F9hlyeQIo5OrM2i%2BXvoD46jO1zsmikWAYaJHmMkPvbSYZNtNdk%2FdF6nNysw7ED4zEY9xQ9I%2FxF4xzT1zKmT3FLwx%2BRkQWG4j5RjuLF3pZTZh622TM3QaKyJ080pqf8r4j0OqaZdOBBw%2BX8yUTZAwMNSfi8oGOqUBPW36mBLqq2VdhxkdW3KXYm0zEnBEN7AAYQ6Z%2BpqxAskPlW0AMO2cl5lElSk9zq%2FiuoRWVjz0eTK%2Fd8Z5yS4rMKNQYKH89zaa1OsETS%2FHFJBNw24Ti4c6FhQg0%2F37FIlT7ymdoAlixAVTAiVzbp62VOzJf%2Fvq2vd%2FUzPWxaB%2FjayVbrqOtTh3UKoMogUdavkGPZvNaaeHhzNvkpyM6AVHnIxO9LDm&X-Amz-Signature=0e0f582e8cec25ed003775c36178d9cc523df9a9e2a76050ed429b806b803d9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

