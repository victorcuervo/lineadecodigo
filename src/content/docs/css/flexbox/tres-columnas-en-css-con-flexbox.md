---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AMAYIFW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T132203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs4Pa1bOq81o1TxDJjleNgN%2BHPmc3VwhSdnF7My8mB7AIgZtmG%2Fj48BDpbkgvuT67IYOC%2B1kT5IgH3M4zuQ67LgesqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1PT02FK3cOv7R1MSrcA9DfpwPp9Yh%2B3BsTxEOQ0yKZ1slMixKxM%2Fhptnmrx5RqGdPPpsgJ%2FhE062%2FJVJ3zSEaRUFmyVy5ztmcVKg8ILZevrss2ydIUaQ7Ptaiq1u9jaixdPxTNjW4E%2FLxS1I20LBW0wBW40Mzqn7w8KBoADRc5OszV5pUztyUDZzUsthGUvDKAM5eIkvh0WtVIN9FtEMMVNxFO0fjIKTVNponTZ1HeXTCoTR1rNfI7Ds%2B37yzKMij9v7bK7u1UxgKsHOD2KyOZcL8otqfNACf8diPM7F0LlWyj40VfcTRV9bo%2BeBUIBfVsTnruxgNIrZ3MESb4V%2FwX4v9MjKClzL6GmaRnUZo2yECBnNIgSYROhHwTOoja97KS5CcndFFf4PwCJ%2FOURe10sSf6t9Kzl5JLN0VMLszdsmkvm%2FlgSEy8jST%2F2K3Ck21UQjHKnDI7Ip60aZOq%2B1%2B1UMMiejJ3NOLPlA6Tk%2FiDIc0rOz64MYTnI2z6%2BOp9tzQ0Jcnc%2BF4Or7MqmyfVGVFlQiGif%2F4SF56w4vOHgHBo5aa%2FS3Jy9g5DKb8LsprKaiY%2BKaCYmtRtnnrj2BFzok7uFbe525IQtxLfbr7NZxPMZa6fv3ipch25lnY2aF0ttwM5FjBrwibWpihtMJiZ1ckGOqUBDF05G%2FnGoWFzmUvnc%2BRVGiYKEMKei%2Ff3OXtplVmic0kvLRzBCuR%2FhfBhzRRFZioeK%2FVpvYhwEVSoxrXGmpvJtYzzTZDeSsDumvxNDLIm5MjiXZ%2B%2Fbqm5u4TQ5xKNtnAuWr7I1T2Kya8yoeu%2FBhw8Ak2tVi2Ypa7HIhKV7LnOxFRzctG9gV4jliU6MSlJA%2FW%2FOmZOh0YqM6o8bqdtESLDSWFkDZHc&X-Amz-Signature=d5a3cdb8bdc2212022849b1d6bfaadfdf7aec654ebc649dec3f0748d8a8ab0a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AMAYIFW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T132203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs4Pa1bOq81o1TxDJjleNgN%2BHPmc3VwhSdnF7My8mB7AIgZtmG%2Fj48BDpbkgvuT67IYOC%2B1kT5IgH3M4zuQ67LgesqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1PT02FK3cOv7R1MSrcA9DfpwPp9Yh%2B3BsTxEOQ0yKZ1slMixKxM%2Fhptnmrx5RqGdPPpsgJ%2FhE062%2FJVJ3zSEaRUFmyVy5ztmcVKg8ILZevrss2ydIUaQ7Ptaiq1u9jaixdPxTNjW4E%2FLxS1I20LBW0wBW40Mzqn7w8KBoADRc5OszV5pUztyUDZzUsthGUvDKAM5eIkvh0WtVIN9FtEMMVNxFO0fjIKTVNponTZ1HeXTCoTR1rNfI7Ds%2B37yzKMij9v7bK7u1UxgKsHOD2KyOZcL8otqfNACf8diPM7F0LlWyj40VfcTRV9bo%2BeBUIBfVsTnruxgNIrZ3MESb4V%2FwX4v9MjKClzL6GmaRnUZo2yECBnNIgSYROhHwTOoja97KS5CcndFFf4PwCJ%2FOURe10sSf6t9Kzl5JLN0VMLszdsmkvm%2FlgSEy8jST%2F2K3Ck21UQjHKnDI7Ip60aZOq%2B1%2B1UMMiejJ3NOLPlA6Tk%2FiDIc0rOz64MYTnI2z6%2BOp9tzQ0Jcnc%2BF4Or7MqmyfVGVFlQiGif%2F4SF56w4vOHgHBo5aa%2FS3Jy9g5DKb8LsprKaiY%2BKaCYmtRtnnrj2BFzok7uFbe525IQtxLfbr7NZxPMZa6fv3ipch25lnY2aF0ttwM5FjBrwibWpihtMJiZ1ckGOqUBDF05G%2FnGoWFzmUvnc%2BRVGiYKEMKei%2Ff3OXtplVmic0kvLRzBCuR%2FhfBhzRRFZioeK%2FVpvYhwEVSoxrXGmpvJtYzzTZDeSsDumvxNDLIm5MjiXZ%2B%2Fbqm5u4TQ5xKNtnAuWr7I1T2Kya8yoeu%2FBhw8Ak2tVi2Ypa7HIhKV7LnOxFRzctG9gV4jliU6MSlJA%2FW%2FOmZOh0YqM6o8bqdtESLDSWFkDZHc&X-Amz-Signature=de0b697919cd93cbc42dcc8801fabc826c0bcb46cb9e9b20aa6a9227497c7d10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

