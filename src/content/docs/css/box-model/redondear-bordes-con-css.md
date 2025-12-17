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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T67BFPXB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGegLyyc1lwG%2FJdPV7wgn1Tg5b4F567dyQMjKUBbl8cAIgQuqByQ3kRIrIjXPhpNRSaOgFegJHv%2FHGrrNIVxztzMUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOhwiKucNtksf5ljFSrcA%2FI03FI9n%2BvkAdXCE5RH0z2gKGfyMbGP3nseqCYwtx8cspb7inalY39m%2BuMLF926jPzOfreAoZIJ6hAnL7r7K4t%2Bpr7VZ7tJ%2B86nI9qMbiPSk8AJS0YaCEyMHFQKFyU0pQREaKsGAW1Y%2F3X%2FWDWSjwwgpm3PA0DCvI2TzlHOQHiySPAQixTseDbL1jTLOg0qOSE%2ByN5gNVzk77VVY5de8NSvmKtZgogC2vcBZ6%2Fu3Z9wTkSFfjs5egtbXHLfRHcurd3lNjynmRSMEt3p5ANG6fx9%2BeUmgX2izaYnsRrdwygSjSNS%2Bj5Uq7xhG3%2Bc6N1rFv%2FbXhxCuO0c2iPBG8mkV8i9xEAZmBWVALB6Tvguwmmn%2FkPZ60Cko7Id3nDwYDh%2Bkt5H4of6Ib7UP%2FqrgQRcKRTCJ0zDte8uwGex6XuViidybRX8TfSAls3NlvNA8U6BquqoFGF71WFk43iumHORZa4honSjMT00D2iOQYTE4%2Bk65uQawoFGJvPCbPOXx9ac0YpFlGFM74uU%2Bdfvt7cx2hmAM3%2F9fblX%2FGVoKmWk7NEF%2FTJAcCpnUmdycaZqck2cw6pQclRaQ%2FSnW73PCZDClBLwY6gQOQix3b4lV0B0tS0ltat%2FPV9XEZBwVUmiMNCDiMoGOqUBucu1V0zFGY0z5VPB3SDO3R7wg3yQQFxSwDyBPmmh5ajZPTx0%2BkaOKCWwCiKGls8Zt9Eqo4vUYmBXbcCqAnrhFQb2UUSrO%2BEePRMBzu2%2BObMmIl4DmjKm1WOY%2BlgtAauadge6ggmmzFzmcP6ckQOReAgvKTV%2Bl5ZyLidvxew1mWrx0ICz17rxGUQvc3kswVKByAw3MGPvviR8ywwOT%2FJPUgsc4tBV&X-Amz-Signature=0419021847ef99ffdf3f2bd400f30f8652888730da4bbd7c0f6f8da423e83e7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T67BFPXB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGegLyyc1lwG%2FJdPV7wgn1Tg5b4F567dyQMjKUBbl8cAIgQuqByQ3kRIrIjXPhpNRSaOgFegJHv%2FHGrrNIVxztzMUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOhwiKucNtksf5ljFSrcA%2FI03FI9n%2BvkAdXCE5RH0z2gKGfyMbGP3nseqCYwtx8cspb7inalY39m%2BuMLF926jPzOfreAoZIJ6hAnL7r7K4t%2Bpr7VZ7tJ%2B86nI9qMbiPSk8AJS0YaCEyMHFQKFyU0pQREaKsGAW1Y%2F3X%2FWDWSjwwgpm3PA0DCvI2TzlHOQHiySPAQixTseDbL1jTLOg0qOSE%2ByN5gNVzk77VVY5de8NSvmKtZgogC2vcBZ6%2Fu3Z9wTkSFfjs5egtbXHLfRHcurd3lNjynmRSMEt3p5ANG6fx9%2BeUmgX2izaYnsRrdwygSjSNS%2Bj5Uq7xhG3%2Bc6N1rFv%2FbXhxCuO0c2iPBG8mkV8i9xEAZmBWVALB6Tvguwmmn%2FkPZ60Cko7Id3nDwYDh%2Bkt5H4of6Ib7UP%2FqrgQRcKRTCJ0zDte8uwGex6XuViidybRX8TfSAls3NlvNA8U6BquqoFGF71WFk43iumHORZa4honSjMT00D2iOQYTE4%2Bk65uQawoFGJvPCbPOXx9ac0YpFlGFM74uU%2Bdfvt7cx2hmAM3%2F9fblX%2FGVoKmWk7NEF%2FTJAcCpnUmdycaZqck2cw6pQclRaQ%2FSnW73PCZDClBLwY6gQOQix3b4lV0B0tS0ltat%2FPV9XEZBwVUmiMNCDiMoGOqUBucu1V0zFGY0z5VPB3SDO3R7wg3yQQFxSwDyBPmmh5ajZPTx0%2BkaOKCWwCiKGls8Zt9Eqo4vUYmBXbcCqAnrhFQb2UUSrO%2BEePRMBzu2%2BObMmIl4DmjKm1WOY%2BlgtAauadge6ggmmzFzmcP6ckQOReAgvKTV%2Bl5ZyLidvxew1mWrx0ICz17rxGUQvc3kswVKByAw3MGPvviR8ywwOT%2FJPUgsc4tBV&X-Amz-Signature=4ce5c545a998de9111b53056f182102535f8cf8d3a55571a5227bee4b06d7ea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
