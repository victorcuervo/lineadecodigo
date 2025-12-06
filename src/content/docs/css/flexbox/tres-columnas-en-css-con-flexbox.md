---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5XKNEIV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T235237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCInnmYoaOKY4iMYXB3HEWgf1OTk6OHFByeWVFiDuRe3wIgVgw4k5q4jPU1XfP1MZNPHwCpy4XJd1dGdSkGmO%2BMpmgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfiDkv7huATu%2F%2FofyrcAwNQtJinzAoEl6XvA59TQDbDeUuwcZiCurqW1kistinpfecBoOWV8EET%2BngEh7j%2BAoXASkWBzJXdLpgujahLLJa0bqxlA6Ad9BEn%2FRT2MuqpYiyGSdtl3GVppcUXm47es3U2V30j1A3eMsaHWzeDrLtbK6FVO3XlPcuQDO%2Balg9q3aiblS40ynnaus7dW08D03PDPhIddjc6bWeltH3Jv87egodcL8d384AG1B084dBzDzQqbr3C7m9o8pJ02Mz96gSqxvKug7LUi5Mx5o6L1Qv07gA6N7nQt%2BPdsw4n8mmmhFPmWV%2FhTkhExrzjtouL%2Bo10IkFqwm9Kgz33Ja%2B3S2joUtdA7gmd5i9%2ByYLFfa9u3zPXMp2ZDSR%2BMvKG%2Bkdtz%2F%2FJqChpTrS8p28f%2FHcQR79pUsgpv8Pcqt8FRN2tSMcOJeEC%2Fe4l9eSexGp3aOUfxDZpCLZ1ICbPDfRITJ9NRrylGe6GPvgGt6rv8Bg62DcHiN0cG9hMNZStO5Mqg%2B1IRUA13%2BKJo2QAbdeFvPszRkFzoIuCRciV%2BaQn1dfmKeyPi2HeYSdB77nPBAnaudbrZZqZag1%2BkKBkDpV%2BMd3jTNby5f8O%2F8FfCLRH6hOUL7O5HsLDQoh7NL945XbQMJf90skGOqUBQhk2ZRF6zxbs9v3%2FCN8R9erAbz2%2BgrIskEwuGJ9ZCiNTTlXT42F0lddyVqjdXLc1vkHT2PHrWROtoVbbZj%2Fx5hQS8oAH%2FhDtroBg8zQ5puDbwF0WReOwzRwZSnDs6GHsxvNG%2BY%2F%2BNf%2FWS01%2FXAoV972ge354fhCjIwRDXn6u6qRCqCvi972486KYU%2B4PpeeyxFbvqccqSbRCcfdP%2Ft9R0h%2BeEL4V&X-Amz-Signature=1394bde5af1629e2d1d764dfb0a06554b3bb0e03b5d9c3845e45887089778e54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5XKNEIV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T235237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCInnmYoaOKY4iMYXB3HEWgf1OTk6OHFByeWVFiDuRe3wIgVgw4k5q4jPU1XfP1MZNPHwCpy4XJd1dGdSkGmO%2BMpmgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfiDkv7huATu%2F%2FofyrcAwNQtJinzAoEl6XvA59TQDbDeUuwcZiCurqW1kistinpfecBoOWV8EET%2BngEh7j%2BAoXASkWBzJXdLpgujahLLJa0bqxlA6Ad9BEn%2FRT2MuqpYiyGSdtl3GVppcUXm47es3U2V30j1A3eMsaHWzeDrLtbK6FVO3XlPcuQDO%2Balg9q3aiblS40ynnaus7dW08D03PDPhIddjc6bWeltH3Jv87egodcL8d384AG1B084dBzDzQqbr3C7m9o8pJ02Mz96gSqxvKug7LUi5Mx5o6L1Qv07gA6N7nQt%2BPdsw4n8mmmhFPmWV%2FhTkhExrzjtouL%2Bo10IkFqwm9Kgz33Ja%2B3S2joUtdA7gmd5i9%2ByYLFfa9u3zPXMp2ZDSR%2BMvKG%2Bkdtz%2F%2FJqChpTrS8p28f%2FHcQR79pUsgpv8Pcqt8FRN2tSMcOJeEC%2Fe4l9eSexGp3aOUfxDZpCLZ1ICbPDfRITJ9NRrylGe6GPvgGt6rv8Bg62DcHiN0cG9hMNZStO5Mqg%2B1IRUA13%2BKJo2QAbdeFvPszRkFzoIuCRciV%2BaQn1dfmKeyPi2HeYSdB77nPBAnaudbrZZqZag1%2BkKBkDpV%2BMd3jTNby5f8O%2F8FfCLRH6hOUL7O5HsLDQoh7NL945XbQMJf90skGOqUBQhk2ZRF6zxbs9v3%2FCN8R9erAbz2%2BgrIskEwuGJ9ZCiNTTlXT42F0lddyVqjdXLc1vkHT2PHrWROtoVbbZj%2Fx5hQS8oAH%2FhDtroBg8zQ5puDbwF0WReOwzRwZSnDs6GHsxvNG%2BY%2F%2BNf%2FWS01%2FXAoV972ge354fhCjIwRDXn6u6qRCqCvi972486KYU%2B4PpeeyxFbvqccqSbRCcfdP%2Ft9R0h%2BeEL4V&X-Amz-Signature=15f35b30bd7b80db7ca2420fcb1de38b245803669fdaf32a7359481283c9f39f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

