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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRA6LA7M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCETXdu1aTreitGuZiVgUSK16QKaQid%2BAw02O8fm2caXgIgdP7pIcqip%2Fv1mdZESmW4ORLZTrz0kW45tOx8uIYlPa0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRTBH69oqWT71nWcSrcA%2FVhYCsNKIgm4VA6PTdaKDoS4RtbCP8A2pPnjwaNpSVrxiDN%2B0EJ%2F9zlyp0RoC2cNi2Gpyu94YJTCDAdTi9lapfurNPzicXJiBwtJwntu49U%2FAm5fgWhz8ktCiartySy17VF6F5lBKVBS%2B8FQWI9Zo0B4AxBqg6wO9k2nRLjrCNMyXzFDczw9jrsmgkBpt%2FK6Tj2uVmDCYSLv4f9viNvk7A1b8R7cGQ%2FuAIydQwmTs%2Fxd6uvqv%2FwTBPIFi3mVZR69h4P1l9PupcO3Lb6CLaKU5w9yy5a185pclMrIXstpHctXOdnECr%2BjZS8lTep31jmGy3aDfF%2F36vlQoNcmQxVFABr6G7%2FhPYLqLtIn0Zpp8%2F5QrGT1IBaH0iGSLckFCZL5MfjAa%2Fp7c1JfYvdGGSyQaJZRPz9BU%2BkxBWyUAKJw2r3pt3hvSDrLteBJyiQCyDl2704d1I7jrBrbMalvfGbb7xMJRPqnO3jvneeoU2brWwf7%2BsddgTfsV%2BCNF4eZ6XaAb9DxBO%2FXSZtkgfIBEgbG0crPzr%2FmQ2fSPwDsXsftn%2Ft41ip%2Fh3Td12%2FJaxjocyknr0sqFZXHXK4X1pG8ny0zME3B2j8K4FELNqqeofjQRGeCZ8%2BocFoxtAS%2BayGMP%2BtjMoGOqUBDZNErPZM0X5%2Bk6gRptbxhYKdcVo1AoX8tKHOVfHwF8PrYBZx7t7yZFfhXn5XB9yjMtT1VHlo3h4W03%2Bk0HlVAtfhqhmaLDnz%2FpQyyHa1REERlzuKybpDeVDu82VvktrQjo69iPyo2D%2FNjN6QZx%2FP8WUuuMZD2f%2BDENJN23rd%2F8gKBZxUNlAEpdAVAa6bGX1I5hFu1eaduuw0nde0RJMj3MBk023c&X-Amz-Signature=7ad43f19e6777db1b4acd19c33a9944bd0c1feb741d53499ab2f2cb6fa3b29a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRA6LA7M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCETXdu1aTreitGuZiVgUSK16QKaQid%2BAw02O8fm2caXgIgdP7pIcqip%2Fv1mdZESmW4ORLZTrz0kW45tOx8uIYlPa0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRTBH69oqWT71nWcSrcA%2FVhYCsNKIgm4VA6PTdaKDoS4RtbCP8A2pPnjwaNpSVrxiDN%2B0EJ%2F9zlyp0RoC2cNi2Gpyu94YJTCDAdTi9lapfurNPzicXJiBwtJwntu49U%2FAm5fgWhz8ktCiartySy17VF6F5lBKVBS%2B8FQWI9Zo0B4AxBqg6wO9k2nRLjrCNMyXzFDczw9jrsmgkBpt%2FK6Tj2uVmDCYSLv4f9viNvk7A1b8R7cGQ%2FuAIydQwmTs%2Fxd6uvqv%2FwTBPIFi3mVZR69h4P1l9PupcO3Lb6CLaKU5w9yy5a185pclMrIXstpHctXOdnECr%2BjZS8lTep31jmGy3aDfF%2F36vlQoNcmQxVFABr6G7%2FhPYLqLtIn0Zpp8%2F5QrGT1IBaH0iGSLckFCZL5MfjAa%2Fp7c1JfYvdGGSyQaJZRPz9BU%2BkxBWyUAKJw2r3pt3hvSDrLteBJyiQCyDl2704d1I7jrBrbMalvfGbb7xMJRPqnO3jvneeoU2brWwf7%2BsddgTfsV%2BCNF4eZ6XaAb9DxBO%2FXSZtkgfIBEgbG0crPzr%2FmQ2fSPwDsXsftn%2Ft41ip%2Fh3Td12%2FJaxjocyknr0sqFZXHXK4X1pG8ny0zME3B2j8K4FELNqqeofjQRGeCZ8%2BocFoxtAS%2BayGMP%2BtjMoGOqUBDZNErPZM0X5%2Bk6gRptbxhYKdcVo1AoX8tKHOVfHwF8PrYBZx7t7yZFfhXn5XB9yjMtT1VHlo3h4W03%2Bk0HlVAtfhqhmaLDnz%2FpQyyHa1REERlzuKybpDeVDu82VvktrQjo69iPyo2D%2FNjN6QZx%2FP8WUuuMZD2f%2BDENJN23rd%2F8gKBZxUNlAEpdAVAa6bGX1I5hFu1eaduuw0nde0RJMj3MBk023c&X-Amz-Signature=a64a7bc13f0a274f96139de7461a24b934a40f46325b06bb58abb2cb4cb0beda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

