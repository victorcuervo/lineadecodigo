---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635B5WZVI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T225459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdRDLLhdfMvlbR4I4wAUZrbUlch3u8pF5qJXYof31rSAIhAO9fz%2BaWO40v5aydt4G2mVpc%2FkTEzxGC%2FMwTTTfEwA1MKv8DCH8QABoMNjM3NDIzMTgzODA1Igy645UYd9nLHFlbXZsq3AO5pOzTSPtE1zugvDr%2FAVuMMRR1IzSuBsrEBvoZ5qRxPxQ1c6PGv6zhsGQEqC68fIeI1w7qNFAjcDidtnx10RKd3CpOu9sVcPwJiiGyi5UN5iS1zwXNBykziLubAnUKKB%2F6Ait%2Fq7lWJPB6FKr2cU7Xs1P7FsXCeKxkeLC9XG1lBaWy8q7SVRylKiGSpbZleLwKcCi%2BdTTW1G%2F9RosqBSjIGYbg5LAjmMVtAaSSNrRwRpW7EhSIlx88kjRu1rN2pnNGWv45xjpxtWiLJnTTKM8Thi6qFtW0C40HMu%2BGbWZd6Mtt981wMDKljyolVYiVraK8mnGKpDWviCpmxEs6mCsgpSVadnas9%2BtdoBhDr%2FF32sDLixzIRsSLplhQopX2MMpu9x44c%2B%2FlDgrhb%2FeUHwn%2FCoL2WFjVOYeytoDPJW0rhKUFhbnyRzFGVjFX%2BWXf5YxOGxVIyi4C482gz4j%2Btq1RCF6VKaHLjGed216CEUPu7D1hR6k1Nn3UTnh%2FXw9nV3AiTG%2FWr5S15ntH0qv%2BUi5IVjf3olI6%2B5FNZnMkEzxIOWL1cVrjlS3gFBo654yyTVtT4G9P%2FFhv8pFBiQX7foGdeoNC0Rt5KxeC4nZjZi0Si3VGeakYcMmGOCwuYDDO09LJBjqkAaYHn2HMrJPAG8wXbfqIDHFkf2k8aUSEw5Sn3HzMoJG57T8l33%2BdRuhQ88Fus3fUMte%2FUPsUtK5HccwF%2FLhvRe7EiDlRFxQCAumf0sUOGueoq0%2BUb3o%2B3AO4TV8vBrdDmkQcm2ipA50F0SF%2BFYJeeAP57pUnXNNsaTUp87Jr70kB2N9AMelGCvac2IfJF9XVez38F8D366QQexVLpstesAi9SOLE&X-Amz-Signature=3d4d316a8148764fe45cc01cdb0ce018094c422e965fbc2398f123c650f38d06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635B5WZVI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T225459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdRDLLhdfMvlbR4I4wAUZrbUlch3u8pF5qJXYof31rSAIhAO9fz%2BaWO40v5aydt4G2mVpc%2FkTEzxGC%2FMwTTTfEwA1MKv8DCH8QABoMNjM3NDIzMTgzODA1Igy645UYd9nLHFlbXZsq3AO5pOzTSPtE1zugvDr%2FAVuMMRR1IzSuBsrEBvoZ5qRxPxQ1c6PGv6zhsGQEqC68fIeI1w7qNFAjcDidtnx10RKd3CpOu9sVcPwJiiGyi5UN5iS1zwXNBykziLubAnUKKB%2F6Ait%2Fq7lWJPB6FKr2cU7Xs1P7FsXCeKxkeLC9XG1lBaWy8q7SVRylKiGSpbZleLwKcCi%2BdTTW1G%2F9RosqBSjIGYbg5LAjmMVtAaSSNrRwRpW7EhSIlx88kjRu1rN2pnNGWv45xjpxtWiLJnTTKM8Thi6qFtW0C40HMu%2BGbWZd6Mtt981wMDKljyolVYiVraK8mnGKpDWviCpmxEs6mCsgpSVadnas9%2BtdoBhDr%2FF32sDLixzIRsSLplhQopX2MMpu9x44c%2B%2FlDgrhb%2FeUHwn%2FCoL2WFjVOYeytoDPJW0rhKUFhbnyRzFGVjFX%2BWXf5YxOGxVIyi4C482gz4j%2Btq1RCF6VKaHLjGed216CEUPu7D1hR6k1Nn3UTnh%2FXw9nV3AiTG%2FWr5S15ntH0qv%2BUi5IVjf3olI6%2B5FNZnMkEzxIOWL1cVrjlS3gFBo654yyTVtT4G9P%2FFhv8pFBiQX7foGdeoNC0Rt5KxeC4nZjZi0Si3VGeakYcMmGOCwuYDDO09LJBjqkAaYHn2HMrJPAG8wXbfqIDHFkf2k8aUSEw5Sn3HzMoJG57T8l33%2BdRuhQ88Fus3fUMte%2FUPsUtK5HccwF%2FLhvRe7EiDlRFxQCAumf0sUOGueoq0%2BUb3o%2B3AO4TV8vBrdDmkQcm2ipA50F0SF%2BFYJeeAP57pUnXNNsaTUp87Jr70kB2N9AMelGCvac2IfJF9XVez38F8D366QQexVLpstesAi9SOLE&X-Amz-Signature=e481ff2429566ad76a7ecea72953c49859d2ae9db7cb2cfb6a285bbbfc7b8505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

