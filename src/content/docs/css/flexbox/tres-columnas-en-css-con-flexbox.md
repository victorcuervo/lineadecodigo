---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TWE2YD2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T030236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFswXSiLr688b5aeOp%2FSHL8401DGttmWZ%2BwjPI1SQcjhAiEA%2BZVi0g%2F0otcoeaieIR0biCeJkesnTtSula0VYxJ%2F7h0qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFa4PPSBkeJYCJu1myrcA1PJgpx%2BaaezRuSq1geibwrdOqxQCiUT%2FemIqLNga89ITFI%2B7W4VXC%2F8K%2Fi%2BZWw9JWfUX8o8mmk4XlxHRfb73dvWsslZWQko2oZbmXaIHIsNZsoWeFH7eUFhAXBvNjnOqOmUuyklOK%2FjF2DG48ZmzFHBQP8AnrPg9Yemoh%2BBL%2FPOcfsBwjddWTJXG15bt1S8oVuINha%2BAKv5LKf3llUPBYAsXy1Gb%2Fud7WrTZsfBpO4N%2F8QOM2MghGgbq3OpKDpBh1xSrlVaE%2FvVTQsmRfhcTNTp8pbqNyoHcfBblTDjdt%2F8%2BcfOkfKHJfbdoZuk5j0qgkUBx2EFW4U55FrI0xX%2FCQoKCr8E42n0iesnOl63x%2BLs0vbQDH2oHD6O0wkGgo1sQHs%2FNqzpn%2BbhH2DYb0sfGWqPlYgjA8kl%2BF4Vot9kuA%2B2klkvwL9NTR2vh0xJtWQ%2FEdjlDV99JzIW6vXdruav5huc%2BKJEi%2BDZ%2FPmYINdqSOidrUhN1Ym3bc5Xkugerc450hL4G%2BVOf021KLsaVUD2sUF%2BSfP%2BeAwI07TOqxs0i2nXHxnFt1%2FsgxWoag0Ctj2LpZpmdaO%2Fe9r5VjI5Nik%2FEJDGUWZ%2FrBYmlmXiODvvyxy03SLjJ2f5yxxerDC2MOCN3skGOqUBReCumY8OU04cV2RAjciVJKA0FsgTU6QfrPIrcB63OtqV%2BR4QpFeSZWuREOy4%2F0KFjsXCIly35XeRID6G9w39TvU%2FW6EgKxaAxeyel2%2B%2F1K0EyywKJ1%2BC2O86lzZo3%2FI0z95bVok4R0paLCbW2ZanV7PvOHmN0sjAjAHR4P0MOrXg2EnnMUJJy9t1Q0V%2Fsjwc4biuTVIwETN9gUnMGHzhXwdBvez5&X-Amz-Signature=3e9bea690f510fda993074e97c60fad39bfefe9b6d380991d24c65a9bba4ce2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TWE2YD2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T030236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFswXSiLr688b5aeOp%2FSHL8401DGttmWZ%2BwjPI1SQcjhAiEA%2BZVi0g%2F0otcoeaieIR0biCeJkesnTtSula0VYxJ%2F7h0qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFa4PPSBkeJYCJu1myrcA1PJgpx%2BaaezRuSq1geibwrdOqxQCiUT%2FemIqLNga89ITFI%2B7W4VXC%2F8K%2Fi%2BZWw9JWfUX8o8mmk4XlxHRfb73dvWsslZWQko2oZbmXaIHIsNZsoWeFH7eUFhAXBvNjnOqOmUuyklOK%2FjF2DG48ZmzFHBQP8AnrPg9Yemoh%2BBL%2FPOcfsBwjddWTJXG15bt1S8oVuINha%2BAKv5LKf3llUPBYAsXy1Gb%2Fud7WrTZsfBpO4N%2F8QOM2MghGgbq3OpKDpBh1xSrlVaE%2FvVTQsmRfhcTNTp8pbqNyoHcfBblTDjdt%2F8%2BcfOkfKHJfbdoZuk5j0qgkUBx2EFW4U55FrI0xX%2FCQoKCr8E42n0iesnOl63x%2BLs0vbQDH2oHD6O0wkGgo1sQHs%2FNqzpn%2BbhH2DYb0sfGWqPlYgjA8kl%2BF4Vot9kuA%2B2klkvwL9NTR2vh0xJtWQ%2FEdjlDV99JzIW6vXdruav5huc%2BKJEi%2BDZ%2FPmYINdqSOidrUhN1Ym3bc5Xkugerc450hL4G%2BVOf021KLsaVUD2sUF%2BSfP%2BeAwI07TOqxs0i2nXHxnFt1%2FsgxWoag0Ctj2LpZpmdaO%2Fe9r5VjI5Nik%2FEJDGUWZ%2FrBYmlmXiODvvyxy03SLjJ2f5yxxerDC2MOCN3skGOqUBReCumY8OU04cV2RAjciVJKA0FsgTU6QfrPIrcB63OtqV%2BR4QpFeSZWuREOy4%2F0KFjsXCIly35XeRID6G9w39TvU%2FW6EgKxaAxeyel2%2B%2F1K0EyywKJ1%2BC2O86lzZo3%2FI0z95bVok4R0paLCbW2ZanV7PvOHmN0sjAjAHR4P0MOrXg2EnnMUJJy9t1Q0V%2Fsjwc4biuTVIwETN9gUnMGHzhXwdBvez5&X-Amz-Signature=222a8f6c0e4b2dba90e96414750ee4bbc4845fdb56a265f97cb5d8e81c07aaaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

