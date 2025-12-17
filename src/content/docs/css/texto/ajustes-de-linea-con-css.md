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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O2HPXD5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDx5sOYQNmmZZM449GHdgyIgdnt96a0PKnHC88VMLiNKgIhAL9W8a%2BzrD88Dtxu8HzhGG%2BDB5xYu0qVWr2uBFI%2B2f2wKv8DCHsQABoMNjM3NDIzMTgzODA1Igx0Z5x50SN4TQbQHIUq3AOl5%2FPadLe8U53l5PUBfEgtFIDZLIGPBZVTvWlZWa72LVNfp45MfLcZU%2Fy7P8I6ymKN7fpxR4W6g70aIex8E3axDVQ5LMDZGaIA%2BPtzq4Thd6p%2BBAn7BF1gAjj5Kc%2Bxaeuqbu4Lx0%2BJ9hzesXTqVZuZen9V7ktNvz4Dhaqlw%2FNVwcm4L%2BrBxmTqHQS7BbfrDrCeXjVPEKlX2IXjgN0jqptXfJs%2Fj2cQ0VCXhf%2Bt6uG9ukez9GWjWoSsYwqrFS%2Fk21i8%2B1F71aTRy%2Fyz1IGwcttOqCzbsETZMOOGRKFWkyPgUKQJrRsVqNs3o0ICWIxQQoGZL8go9PsosBemciqUsb74u2wuZRmMKP6ZQcyoUxs3wr%2BCQICfd5YMrcA6e7y5BBY46%2BKD3l0Qmn%2BkaqzUd1rue1l9GrkJDydNkz%2BewA%2FGh4AKTUs2Ivbp5e8U%2BqAqVl8LTOxcXdqatkLWIARBLBRUTCgq5B2ZtcwRfN5llpczSKlA1Y5%2FH%2BVm7QA9EGJmmE3%2FIQHQt16A%2FGMXO8VJjqsoDqGSAPyJMSvaGc%2BJJWA1I1G12D7APHaS75nyWMOWemn2IbCDd0gERdCFkaIupY2a7bwk33Q528YNjFQyX6ifU2obC5SK%2FGLwX1gUbjCV8InKBjqkAU9oz%2B32iY7xeRUS8WZFTILrC9iIHeI8CHS7xOsJ3mzQfz9d%2FO1DwzO0ZNgkik23WGiaRgpWPR2YABv9LFVhVEBTSmLXK0F42YAVPsVh%2BAmNnzSq4ekmj56BVf6a01M7jtHiys%2F%2FqvaIBPfq3mhzlCllatQFCF%2Fj8NEcdZ5dmIvdcB9A7xZ8IRYDwUO72dNnF%2F%2FXPGGftPhxEfLMK8xqJec3g6%2Bq&X-Amz-Signature=9bafb32651ef1a50e8e14d066ec92926163b41f81b21c092718076f11ef2cd93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O2HPXD5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDx5sOYQNmmZZM449GHdgyIgdnt96a0PKnHC88VMLiNKgIhAL9W8a%2BzrD88Dtxu8HzhGG%2BDB5xYu0qVWr2uBFI%2B2f2wKv8DCHsQABoMNjM3NDIzMTgzODA1Igx0Z5x50SN4TQbQHIUq3AOl5%2FPadLe8U53l5PUBfEgtFIDZLIGPBZVTvWlZWa72LVNfp45MfLcZU%2Fy7P8I6ymKN7fpxR4W6g70aIex8E3axDVQ5LMDZGaIA%2BPtzq4Thd6p%2BBAn7BF1gAjj5Kc%2Bxaeuqbu4Lx0%2BJ9hzesXTqVZuZen9V7ktNvz4Dhaqlw%2FNVwcm4L%2BrBxmTqHQS7BbfrDrCeXjVPEKlX2IXjgN0jqptXfJs%2Fj2cQ0VCXhf%2Bt6uG9ukez9GWjWoSsYwqrFS%2Fk21i8%2B1F71aTRy%2Fyz1IGwcttOqCzbsETZMOOGRKFWkyPgUKQJrRsVqNs3o0ICWIxQQoGZL8go9PsosBemciqUsb74u2wuZRmMKP6ZQcyoUxs3wr%2BCQICfd5YMrcA6e7y5BBY46%2BKD3l0Qmn%2BkaqzUd1rue1l9GrkJDydNkz%2BewA%2FGh4AKTUs2Ivbp5e8U%2BqAqVl8LTOxcXdqatkLWIARBLBRUTCgq5B2ZtcwRfN5llpczSKlA1Y5%2FH%2BVm7QA9EGJmmE3%2FIQHQt16A%2FGMXO8VJjqsoDqGSAPyJMSvaGc%2BJJWA1I1G12D7APHaS75nyWMOWemn2IbCDd0gERdCFkaIupY2a7bwk33Q528YNjFQyX6ifU2obC5SK%2FGLwX1gUbjCV8InKBjqkAU9oz%2B32iY7xeRUS8WZFTILrC9iIHeI8CHS7xOsJ3mzQfz9d%2FO1DwzO0ZNgkik23WGiaRgpWPR2YABv9LFVhVEBTSmLXK0F42YAVPsVh%2BAmNnzSq4ekmj56BVf6a01M7jtHiys%2F%2FqvaIBPfq3mhzlCllatQFCF%2Fj8NEcdZ5dmIvdcB9A7xZ8IRYDwUO72dNnF%2F%2FXPGGftPhxEfLMK8xqJec3g6%2Bq&X-Amz-Signature=e797f6e307b9373fede7231467ce705687c2ca782daff2585efc8aa4b28afb25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

