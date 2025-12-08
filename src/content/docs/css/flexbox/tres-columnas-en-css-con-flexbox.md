---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYPVUBIM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T092649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHe4QS6O81LimDo7jcItZLbxgsarrBQmb8kPnxwddW2kAiBrDx%2BIIcfAmD4%2FeH9SUZe0rnsnksS4O6N49R4YUzFSIyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDS4DM9BW5Yczq2nUKtwDbFyOWhN6Qy3QYnOCBzUEnveDLc3Oc8IWNgSR65CmhG9A7eBEomiYLWJIDQ9r0HA9PlQdQbmKWn6Mr4SON3UXDwbZz%2FGwKu6SD3VxONBLrTmaP7LIBvHsXds%2Bm4uQe0j1yxT8wh8mGYyyhBKLop2%2BHDtcuwAbMyTccK6U6nyKaRSUmbGxn5XQkJwBNm0yo1whceaedXHnmdfSm1I3lIOsCp5M4%2F3kUwqJin4L7a0y3gw9mBHshvT4PHIz2yD2ftqOIE5dYbo3iIWl73WfoDjKwg1RhEHRmo3DrqfwDLuSCRRd%2F9yIbSODzFyJXyAd%2BlULKAk4DmHuzJl3gDSvg2EMxscvLuoj3cSx4Br0d8%2FB3lxoYNKaO8yBuyyyJG8kO14L05EhF1bO41jjn9ood2MyxDlWr4fe7iTxz%2BJNzTAFil0OFyYje8COmgEe8CAGJAN6%2B421MlDAGGPocKMwxy%2BNTp7CyqaROSZlwhDl2QDHeM0jw1FdBGe9R12HCbwQ%2FGMWinZ6FOaEDWpg5A5yxtGW3HO%2F0PhLsBeD%2BYHukinrE0y42kTvl%2F8lvquTNBhlGdgpssjaJrDgKiLAoAK6JDU1PxbaM4YalEGGURevy%2BV8u8ujTHLIqEzZFxkDgLIwk%2B7ZyQY6pgFW1b6LP%2BcoYG9VhcGcK9Uv6yDPRSbUTvZPEbLQ53u%2BZCy33goFZJM%2F5vVEbAZ5LbsSmMmzPfMdhHuiEfgLfmdjMWwlGrDusn75uylcFYjIAvfGFvPq2WrwPjioYHsdymabBt3Nmys%2Bf0H9Q1cvoJGIRO2IpmOzRHQfJf4Q0QL%2BI3L8pz28WBl%2B2LeXlbVWoOyBKSwMtzdX1PLScyKZ0kH7m6%2FY0TA5&X-Amz-Signature=2f685f0d5aa54f7f90fb6baf0c755be45e8d64f8c06547795516ce995a702f84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYPVUBIM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T092649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHe4QS6O81LimDo7jcItZLbxgsarrBQmb8kPnxwddW2kAiBrDx%2BIIcfAmD4%2FeH9SUZe0rnsnksS4O6N49R4YUzFSIyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDS4DM9BW5Yczq2nUKtwDbFyOWhN6Qy3QYnOCBzUEnveDLc3Oc8IWNgSR65CmhG9A7eBEomiYLWJIDQ9r0HA9PlQdQbmKWn6Mr4SON3UXDwbZz%2FGwKu6SD3VxONBLrTmaP7LIBvHsXds%2Bm4uQe0j1yxT8wh8mGYyyhBKLop2%2BHDtcuwAbMyTccK6U6nyKaRSUmbGxn5XQkJwBNm0yo1whceaedXHnmdfSm1I3lIOsCp5M4%2F3kUwqJin4L7a0y3gw9mBHshvT4PHIz2yD2ftqOIE5dYbo3iIWl73WfoDjKwg1RhEHRmo3DrqfwDLuSCRRd%2F9yIbSODzFyJXyAd%2BlULKAk4DmHuzJl3gDSvg2EMxscvLuoj3cSx4Br0d8%2FB3lxoYNKaO8yBuyyyJG8kO14L05EhF1bO41jjn9ood2MyxDlWr4fe7iTxz%2BJNzTAFil0OFyYje8COmgEe8CAGJAN6%2B421MlDAGGPocKMwxy%2BNTp7CyqaROSZlwhDl2QDHeM0jw1FdBGe9R12HCbwQ%2FGMWinZ6FOaEDWpg5A5yxtGW3HO%2F0PhLsBeD%2BYHukinrE0y42kTvl%2F8lvquTNBhlGdgpssjaJrDgKiLAoAK6JDU1PxbaM4YalEGGURevy%2BV8u8ujTHLIqEzZFxkDgLIwk%2B7ZyQY6pgFW1b6LP%2BcoYG9VhcGcK9Uv6yDPRSbUTvZPEbLQ53u%2BZCy33goFZJM%2F5vVEbAZ5LbsSmMmzPfMdhHuiEfgLfmdjMWwlGrDusn75uylcFYjIAvfGFvPq2WrwPjioYHsdymabBt3Nmys%2Bf0H9Q1cvoJGIRO2IpmOzRHQfJf4Q0QL%2BI3L8pz28WBl%2B2LeXlbVWoOyBKSwMtzdX1PLScyKZ0kH7m6%2FY0TA5&X-Amz-Signature=1ee6832bac55f12bc335355d173c7dc4deb4cddaefab86ffad54aa5a4c04457e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

