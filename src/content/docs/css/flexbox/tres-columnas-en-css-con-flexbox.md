---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BOOE7JE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T221423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtBRXqhYleUTO5TvDDouetvhrMfTOgLxKN%2BJ%2B2wOduDwIgHvLVt62UwtusMtUJctYjbY5qEOShe9kIUbW9ZzL9T2wqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSJCu7frGJI1ADBqyrcAzOMCpnfpFs1aSV0%2Bqx2RLDXCmnYgthUAiM4OrfCK2Ub5HqkhaSuT8H0s%2Fn1lpAyqOx3iNVdiAEHJ%2BZx8vDI0DCBdMtEu2BbNd0mVhWEwORApNa8jC3W2sfcLh92MnSPvaRnqRodfacX5AFle9gF4BX1DSFlLcd63aPpr1VC4fkodxAGF5rsrr8FqiOPd8CVzORm4Y7RphvIoHMCHZpL3FirQI2NI86v54KzP8t6o%2FXlOalh6y7XNOFX0YO43mC7zFbzDLZDDY2jwp3GzKWaOQXwvkEgNR5csI5M%2FbLXwJHVM9f19nueKLH2mJebZRD35Ov9OS4QtndeVTiy6gfBtt7fDm23jxZypcKe8M8F7qcCeL%2Bjq%2BnTntq4wwWZJOdwTAd7uvqAVM1QcHMwsBm0FUxs3o46U8xAPdHwEVDBiC37zXZVDGPn%2BkZhd%2FdRabPJCzdVeV49z0iVOnlYnwyoTENjCjad355qRPFRH%2BQvAdsZZPNQIGeWRODomDf9zji1d%2B%2FpF85Fcxta1EUK4bQ3f2KAu60qFfbjEDS7w9q%2B5KasLmdsUE24jjhDk0l6oLv%2F0ioww1QkJU%2BrSHhxJ5CQuwaD2QWZnIwT%2F10rxZU9PXx8v18rcEgt5gkcqYwCMIXI18kGOqUBbCJHRnsI812UTuxWfTKD5A3lCM4fBerEnjCFo84VrgBhtYBfD7sHkAtAZEMmNTpfBTxlja%2Fcgig0SC4mmP8gnJirRSfiNIFgh%2FPPv14bxTVFcgurzd%2F8xxKpVyebq0i8pDXH3vw3CC5CER9jG%2FZd41Q1tBX24ZOqdM96LUPtYMfdooqjkxiezqgotkF1PSBjaTC6sgK5O3sXmtk8X%2B2ACCgbWqhf&X-Amz-Signature=6de770781d1cd3c2d428a332ab5902c1002a59b82aeabe7306c0273344a065d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BOOE7JE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T221423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtBRXqhYleUTO5TvDDouetvhrMfTOgLxKN%2BJ%2B2wOduDwIgHvLVt62UwtusMtUJctYjbY5qEOShe9kIUbW9ZzL9T2wqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSJCu7frGJI1ADBqyrcAzOMCpnfpFs1aSV0%2Bqx2RLDXCmnYgthUAiM4OrfCK2Ub5HqkhaSuT8H0s%2Fn1lpAyqOx3iNVdiAEHJ%2BZx8vDI0DCBdMtEu2BbNd0mVhWEwORApNa8jC3W2sfcLh92MnSPvaRnqRodfacX5AFle9gF4BX1DSFlLcd63aPpr1VC4fkodxAGF5rsrr8FqiOPd8CVzORm4Y7RphvIoHMCHZpL3FirQI2NI86v54KzP8t6o%2FXlOalh6y7XNOFX0YO43mC7zFbzDLZDDY2jwp3GzKWaOQXwvkEgNR5csI5M%2FbLXwJHVM9f19nueKLH2mJebZRD35Ov9OS4QtndeVTiy6gfBtt7fDm23jxZypcKe8M8F7qcCeL%2Bjq%2BnTntq4wwWZJOdwTAd7uvqAVM1QcHMwsBm0FUxs3o46U8xAPdHwEVDBiC37zXZVDGPn%2BkZhd%2FdRabPJCzdVeV49z0iVOnlYnwyoTENjCjad355qRPFRH%2BQvAdsZZPNQIGeWRODomDf9zji1d%2B%2FpF85Fcxta1EUK4bQ3f2KAu60qFfbjEDS7w9q%2B5KasLmdsUE24jjhDk0l6oLv%2F0ioww1QkJU%2BrSHhxJ5CQuwaD2QWZnIwT%2F10rxZU9PXx8v18rcEgt5gkcqYwCMIXI18kGOqUBbCJHRnsI812UTuxWfTKD5A3lCM4fBerEnjCFo84VrgBhtYBfD7sHkAtAZEMmNTpfBTxlja%2Fcgig0SC4mmP8gnJirRSfiNIFgh%2FPPv14bxTVFcgurzd%2F8xxKpVyebq0i8pDXH3vw3CC5CER9jG%2FZd41Q1tBX24ZOqdM96LUPtYMfdooqjkxiezqgotkF1PSBjaTC6sgK5O3sXmtk8X%2B2ACCgbWqhf&X-Amz-Signature=b0f7b7a061f9faaafb2966c22793b593fa778382d477a140c3bbdede88efc2d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

