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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STDLM3NZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACqn%2BKel5Wdcts3c%2FrDJ9ZKEW3Kr2BfwysskwO0%2FhSQAiAI0x6d5AR0MdIDqtC6%2BrvFRrg1IZoMBhgxQ4LjuUMUVCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpSLWuqT7csH2dT1yKtwDwGtvTbI%2F7%2BT9M2G74Yw6xJChi3wxk1QqbO%2B3x8Nms7baZDCsOV7HO7DSzMvbUj1E0GKwufHjc5xg%2BuQT2UgYp%2FyxqNcY8KVBNXoy3Dk7728DIbpQdkd5yBGGRAZv5eS1ueYuzdgiqTW2izFWrQbYl35uJdcUKOMZNZYWBiw0fxtOt2r5yh%2FiD3SUGmF1keL%2BDV6n0tx9wsHx32db5QazznvTx278iT6gAyNf4kqwWR6wYRU%2Bx35cDuCn%2F64sbZHMFIVQFiX3zvdsDYeHvnk7tZX%2FRaCpfyKfb4htxUdkjBh4PPZOqAR68WI0VNhf7ZQ%2BQpNY1c23BJWjmc8kMsAYs43RZcWRjGzECfVf2j0g0GrBPML9oe9121wDX%2BYPJQ6l7rCPbJa2QQKCH29JEW1e%2BLsRhkCBtv2mPp7FYeEdMWt%2B77dsFwMeTQPq5M308aqFbr1FFwHBIqNcXQx6L2UUJ3S5mnRIaUStddVWXPuz2NEN7%2Fa%2FAY0zEEd0fo1hAQUmGp%2BSmBaYc0zJxYPKu7JUzyjVDixrCuWDfcSCkLRcya3%2BFMQg%2Fcp2Nxouk0AvH1tuQrj3BmLEEifli0D3un4sCuYx%2FGe3hGJ4r4yh9Fr47wxaDdatPoR0w0dm%2Figws4uMygY6pgHJ%2BNyJ30iTQ2nb60bws1MpVY%2FiYfbYO%2BR%2BsTbTHMeNSBFIHD3Pcw49IWkRUXNbCg31AegFaN7fMb24tHM4FLBk1%2FFXvLSjo%2FI7Tabx2nLbFsVZ7WKwqHRgPr9FYVH%2FcUMrRdIWqSzdmMZ%2FYMd3oqeJn2CbGld9%2B2W1ZOp0aLz4zUECkpuPshOBzcFCuJaScXKXSpRd6bHwMM0PaJlaTFcQIvvs0rK%2F&X-Amz-Signature=555c2c1eb4a90399f3a16794a4118642662c3a5a157d466b8e9af21c3d98c3da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STDLM3NZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACqn%2BKel5Wdcts3c%2FrDJ9ZKEW3Kr2BfwysskwO0%2FhSQAiAI0x6d5AR0MdIDqtC6%2BrvFRrg1IZoMBhgxQ4LjuUMUVCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpSLWuqT7csH2dT1yKtwDwGtvTbI%2F7%2BT9M2G74Yw6xJChi3wxk1QqbO%2B3x8Nms7baZDCsOV7HO7DSzMvbUj1E0GKwufHjc5xg%2BuQT2UgYp%2FyxqNcY8KVBNXoy3Dk7728DIbpQdkd5yBGGRAZv5eS1ueYuzdgiqTW2izFWrQbYl35uJdcUKOMZNZYWBiw0fxtOt2r5yh%2FiD3SUGmF1keL%2BDV6n0tx9wsHx32db5QazznvTx278iT6gAyNf4kqwWR6wYRU%2Bx35cDuCn%2F64sbZHMFIVQFiX3zvdsDYeHvnk7tZX%2FRaCpfyKfb4htxUdkjBh4PPZOqAR68WI0VNhf7ZQ%2BQpNY1c23BJWjmc8kMsAYs43RZcWRjGzECfVf2j0g0GrBPML9oe9121wDX%2BYPJQ6l7rCPbJa2QQKCH29JEW1e%2BLsRhkCBtv2mPp7FYeEdMWt%2B77dsFwMeTQPq5M308aqFbr1FFwHBIqNcXQx6L2UUJ3S5mnRIaUStddVWXPuz2NEN7%2Fa%2FAY0zEEd0fo1hAQUmGp%2BSmBaYc0zJxYPKu7JUzyjVDixrCuWDfcSCkLRcya3%2BFMQg%2Fcp2Nxouk0AvH1tuQrj3BmLEEifli0D3un4sCuYx%2FGe3hGJ4r4yh9Fr47wxaDdatPoR0w0dm%2Figws4uMygY6pgHJ%2BNyJ30iTQ2nb60bws1MpVY%2FiYfbYO%2BR%2BsTbTHMeNSBFIHD3Pcw49IWkRUXNbCg31AegFaN7fMb24tHM4FLBk1%2FFXvLSjo%2FI7Tabx2nLbFsVZ7WKwqHRgPr9FYVH%2FcUMrRdIWqSzdmMZ%2FYMd3oqeJn2CbGld9%2B2W1ZOp0aLz4zUECkpuPshOBzcFCuJaScXKXSpRd6bHwMM0PaJlaTFcQIvvs0rK%2F&X-Amz-Signature=22c78f61eb108a6df12dcc99b0c2ffbc673ffe3af08bc53026c4b033feb889de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

