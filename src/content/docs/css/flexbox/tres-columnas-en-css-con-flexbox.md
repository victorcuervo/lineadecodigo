---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB5VXSW4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T080409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxLplUYV7%2FbXS3odPssTZI9zul6hiOIVypW%2Fu3%2B1x06wIhAIisfqKYK3Z23AsrNalsb%2Ful1LdftEybaqUImLz6xTIZKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Bkr7%2FYi0BC998utsq3AMrmPvIns3%2BIafRWzLDDSWPrxqUIahHWFyHOiC7IAcYTnGFNamXQBihs4hxtKRLJvH8mduODNdWKxq%2FTq5rR99VZQuNY7v%2FohWguqeNZgEQ2UmdV9mVzsSICaZPaq4VleLj048IfJhOCVc%2FJwnB%2BpBL3kYwtObsENC7LbxnhapkSTEpShqdssCRxaYxPmrMEgw1HIRQYwHMQbGk6eD22T1pNsL42vkQ%2BIjYuBTwNDevQr7OReIFlDTTVtoSDHJ39fNNm9a1wrE4xlkjr5im%2FI79Q5aUusXskijqMuZklSHdvjtkTUmNvHewElAvxdHCEbsqjFrMxrbouUa%2BCK5iS53kqxA0EvBtef%2BnNFGEkIaQiZhveT%2BmOoha%2F5tUPBnPCfaRYfvL320e%2BclaGreq7VdEddBfR3yd0F3mDheTbIP%2BPa5S8FzvAXoGOpCVGPSyWH46v7HnXW02pYehwHJlPVmyBT9BAIzIoMTG3HsDx9xvbmRmy6%2BVyR2WYG7AHoxZ11%2BNcTEpJLueimc1Zqx5LwnL8InjZ83YblQHZcj%2BAIJlt3WWJd9ASt%2FXigxyPCf%2ByTXO473YV8fT6GN7CS3McgHNunmZLBJem59SaKHheUD5LyMhuRxHlY7UzrSb2TC7pN%2FJBjqkAavguUMHZUzoZ5ppYyNvdggNqON2cs7N6s1Dx9RKr%2FZ3CDUikjH95jDURZ6J1QGMebesJ0JM5RyR2TWXLPlltA7DcH285m15juR28jF4DXe9lmxAgHFYwUK0WNOi11ksnGBVRTDWgyTMGj2b9Kvkaqosj5IY7Hi8i1G6s6PpjHh7butsbr8FdHfF2i%2FiGYtENUx4m1Q5CSmFCmn%2B1pNCFV%2BLEc7M&X-Amz-Signature=e78405910e3410c69d43251583c3e5bf2dbd1e7b5e4b58fd595bb652b30556c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB5VXSW4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T080409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxLplUYV7%2FbXS3odPssTZI9zul6hiOIVypW%2Fu3%2B1x06wIhAIisfqKYK3Z23AsrNalsb%2Ful1LdftEybaqUImLz6xTIZKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Bkr7%2FYi0BC998utsq3AMrmPvIns3%2BIafRWzLDDSWPrxqUIahHWFyHOiC7IAcYTnGFNamXQBihs4hxtKRLJvH8mduODNdWKxq%2FTq5rR99VZQuNY7v%2FohWguqeNZgEQ2UmdV9mVzsSICaZPaq4VleLj048IfJhOCVc%2FJwnB%2BpBL3kYwtObsENC7LbxnhapkSTEpShqdssCRxaYxPmrMEgw1HIRQYwHMQbGk6eD22T1pNsL42vkQ%2BIjYuBTwNDevQr7OReIFlDTTVtoSDHJ39fNNm9a1wrE4xlkjr5im%2FI79Q5aUusXskijqMuZklSHdvjtkTUmNvHewElAvxdHCEbsqjFrMxrbouUa%2BCK5iS53kqxA0EvBtef%2BnNFGEkIaQiZhveT%2BmOoha%2F5tUPBnPCfaRYfvL320e%2BclaGreq7VdEddBfR3yd0F3mDheTbIP%2BPa5S8FzvAXoGOpCVGPSyWH46v7HnXW02pYehwHJlPVmyBT9BAIzIoMTG3HsDx9xvbmRmy6%2BVyR2WYG7AHoxZ11%2BNcTEpJLueimc1Zqx5LwnL8InjZ83YblQHZcj%2BAIJlt3WWJd9ASt%2FXigxyPCf%2ByTXO473YV8fT6GN7CS3McgHNunmZLBJem59SaKHheUD5LyMhuRxHlY7UzrSb2TC7pN%2FJBjqkAavguUMHZUzoZ5ppYyNvdggNqON2cs7N6s1Dx9RKr%2FZ3CDUikjH95jDURZ6J1QGMebesJ0JM5RyR2TWXLPlltA7DcH285m15juR28jF4DXe9lmxAgHFYwUK0WNOi11ksnGBVRTDWgyTMGj2b9Kvkaqosj5IY7Hi8i1G6s6PpjHh7butsbr8FdHfF2i%2FiGYtENUx4m1Q5CSmFCmn%2B1pNCFV%2BLEc7M&X-Amz-Signature=e3028fc93f87425f1a0d6f7c5070ddb39c7d7c8015bd972777b5a7680fdf5966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

