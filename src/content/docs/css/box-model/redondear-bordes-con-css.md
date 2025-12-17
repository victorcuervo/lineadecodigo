---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
author: victor_cuervo
---

Gracias a [CSS3](https://www.manualweb.net/css/) podemos redondear los bordes de los elementos. Y es que para redondear bordes con [CSS3](https://www.manualweb.net/css/) utilizaremos la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/).


La sintaxis general de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) es la siguiente:


```css
border-radius: [tamaño|porcentaje];
```


De esta forma podemos indicar **el tamaño o porcentaje** en el que se redondeará cada una de las esquinas de la capa. El valor corresponde con el radio de la circunferencia trazada en la esquina.


Así, si utilizamos:


```css
border-radius: 15px;
```


Veremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BSPZWJB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLYQ1Pmyrah8BHV2%2BmnoU0Hpaj7fGHyUoHl5ARnFaWfAiBDIu7D57x1kRFugSiH1eH7ZBg32PFu07MdXFRJfZvmSir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMn3osrQSCovCid%2FqhKtwD1blT9gSkUEMRur26grfid0bWyY4gFcMdGmlnLI9DmWyfVT26afjd5LLnTO3cQ8RKGp08zB%2FBiedYRaecFngyf%2FSTSZJfo4jglwSRDRHC1nG0DDU4%2BgGLvGNWIRzB7SlZ3DdBWcd6EDLp1a%2FUO0A%2FAOnHyXETDOeMlbQ5IqjYX%2FMvc%2FErBdqDhQQ3jI78OrtZofNNF64PXOck22HjwtPG37%2BXusaPy2KM17zfzroRxDLTvZ%2B%2Bshmv0tzM1wFUBcv5b9Lk2CvefYd%2B5NNp3zo59Dwec5d4dqg6taBuOs2og6wdH%2FnsljS48AMEFdnAJpb1iyEjpBbkI%2B9IsN%2FVvGQfNt8WI8bTFUcHcMpTHO6bo2%2Fp8KZpPhVX7W9iCcdthR%2BU9SGQjTeqO8s1rVHIB6hu13pcT5%2BZaj%2B%2B842MvYI8QkwuMgkRnA%2BETTW53egcliCuKitU8OvLukFXaNAZ%2F2GiEjnYs13Kg6rBFIkNrEdmpkBrddiS1TpevJhIrIv3WtcVDqguDLdx4K4B09na4hn8j%2Beoib%2BH%2F5KOmiZmTgMOgcYTt2kA3bIFiWd07jBBeAd1qzj%2ByJKoi1Ps%2BEtSrWRlPHQTmvfMFIDMqlNfuh%2FPYdA%2FLlVFCANjj45dWlMwnI%2BKygY6pgGUo%2Bx25k7IfMXHT8D7wkeV3vkiq%2BhyqpVD2Pe%2BuF0RT55ao0y1afCruflK3xN5AvYmCInrRURxXvic4OmOqo7fscHkqAX6cnI36crA%2Bb2%2FUWILMPwFGLa8reabk%2BJXQTXo%2B8Nk9u4p4u310oW7COdSAD9yJnCE4HeQmtnxBCref4vCslQLY3fKyDpvevc1KnyD6MpoP9%2F4b57v4fXIPoJMY2lL5iTD&X-Amz-Signature=098c86be5e526506171f3638324c29c31a5f63a9573c03fbd5d976c7220c2162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Podemos especificar un radio para cada una de las esquinas. En este caso se aplicará el orden de las agujas del reloj, empezado por la esquina superior izquierda, siguiendo por la esquina superior derecha, esquina inferior derecha y esquina inferior izquierda.


```css
border-radius: 5px 30px 45px 60px;
```


Si bien tenemos la capacidad de indicar el tamaño de cada de las esquinas por separado mediante las propiedades: border-top-left-radius, border-bottom-left-radius, border-top-right-radius y border-bottom-right-radius.


```css
border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Cuando identificamos los radios de las esquinas por separado podemos indicar de forma diferente los dos radios que conforman la esquina. Por ejemplo, podríamos modificar la esquina superior izquierda de la siguiente forma:


```css
border-top-left-radius: 400px 200px;
```


Y obtendremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BSPZWJB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLYQ1Pmyrah8BHV2%2BmnoU0Hpaj7fGHyUoHl5ARnFaWfAiBDIu7D57x1kRFugSiH1eH7ZBg32PFu07MdXFRJfZvmSir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMn3osrQSCovCid%2FqhKtwD1blT9gSkUEMRur26grfid0bWyY4gFcMdGmlnLI9DmWyfVT26afjd5LLnTO3cQ8RKGp08zB%2FBiedYRaecFngyf%2FSTSZJfo4jglwSRDRHC1nG0DDU4%2BgGLvGNWIRzB7SlZ3DdBWcd6EDLp1a%2FUO0A%2FAOnHyXETDOeMlbQ5IqjYX%2FMvc%2FErBdqDhQQ3jI78OrtZofNNF64PXOck22HjwtPG37%2BXusaPy2KM17zfzroRxDLTvZ%2B%2Bshmv0tzM1wFUBcv5b9Lk2CvefYd%2B5NNp3zo59Dwec5d4dqg6taBuOs2og6wdH%2FnsljS48AMEFdnAJpb1iyEjpBbkI%2B9IsN%2FVvGQfNt8WI8bTFUcHcMpTHO6bo2%2Fp8KZpPhVX7W9iCcdthR%2BU9SGQjTeqO8s1rVHIB6hu13pcT5%2BZaj%2B%2B842MvYI8QkwuMgkRnA%2BETTW53egcliCuKitU8OvLukFXaNAZ%2F2GiEjnYs13Kg6rBFIkNrEdmpkBrddiS1TpevJhIrIv3WtcVDqguDLdx4K4B09na4hn8j%2Beoib%2BH%2F5KOmiZmTgMOgcYTt2kA3bIFiWd07jBBeAd1qzj%2ByJKoi1Ps%2BEtSrWRlPHQTmvfMFIDMqlNfuh%2FPYdA%2FLlVFCANjj45dWlMwnI%2BKygY6pgGUo%2Bx25k7IfMXHT8D7wkeV3vkiq%2BhyqpVD2Pe%2BuF0RT55ao0y1afCruflK3xN5AvYmCInrRURxXvic4OmOqo7fscHkqAX6cnI36crA%2Bb2%2FUWILMPwFGLa8reabk%2BJXQTXo%2B8Nk9u4p4u310oW7COdSAD9yJnCE4HeQmtnxBCref4vCslQLY3fKyDpvevc1KnyD6MpoP9%2F4b57v4fXIPoJMY2lL5iTD&X-Amz-Signature=b2c23ec3b57181bf1928314eef7a6073a7f39862ba7706f16ccc8316d48c968e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
border-radius: [tamaño|porcentaje] {1,4} [tamaño|porcentaje] {1,4};
```


Por último tenemos que ser conscientes del soporte de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) de [CSS3](https://www.manualweb.net/css/). Ya que no todos los navegadores van a poder ejecutarla. En esos casos, los bordes que hayamos redondeado no se verán.


La implementación de [`border-radius`](https://w3api.com/CSS/border-radius/) que hemos visto es la de la [W3C](https://w3.org/). Hay implementaciones propietarias en los motores de renderizado de los browsers. Este es el caso de [Mozilla Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/). Dónde las propiedades para redondear los borders con [CSS](https://www.manualweb.net/css/) están especificadas como:


```css
-moz-border-radius: [tamaño|porcentaje];
-moz-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


En el caso de Webkit (sería, por ejemplo, para versiones antiguas de [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/)) se soportaba mediante el prefijo `-webkit`:


```css
-webkit-border-radius: [tamaño|porcentaje];
-webkit-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Por lo cual, si queremos buscar compatibilidad con nuestros ejemplos anteriores podemos poner lo siguiente:


```css
border-radius: 15px;
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
```


```css
border-radius: 5px 30px 45px 60px;
-moz-border-radius: 5px 30px 45px 60px;
-webkit-border-radius: 15px;
```


```css
border-top-left-radius: 400px 200px;
-moz-border-top-left-radius: 400px 200px;
-webkit-border-radius: 15px;
```


Los navegadores a partir de los cuales se empezó a dar soporte a [`border-radius`](https://w3api.com/CSS/border-radius/) son:

- [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 0.2 (con -webkit) y [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 4.0 (con el estándar)
- [Opera](https://ayudaenlaweb.com/navegadores/que-es-opera/) 10.5
- [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 3.0 (con -webkit) y [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 5.0 (con el estándar)
- [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 1.0 (con -moz) y [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 4.0 (con el estándar)
- [Internet Explorer](https://ayudaenlaweb.com/navegadores/que-es-internet-explorer/) 9
