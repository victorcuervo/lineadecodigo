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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P6AD4TO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz2%2B6OaiXYMdzdyuHPheKfUC3XklXRQQf%2FtvRuMV4a2QIhAJG0hK7rCwpdin5IfrWl4eZvUfMVkaMSRCYunMYK5sFMKv8DCHQQABoMNjM3NDIzMTgzODA1Igwao1pWzXZxtIRvHm0q3AM55HL6bOTMfNTHnm948VTNU5ZHCBuU77tm5AVyWJz4%2FKatb6xJ0PBmn2LH7rT364Bg7n18o14O%2BFCDuCFVHB20cnubz0oCHMCXBal5ST3A5SrU7azPKWLXEHr6K6AWy5B7dtpSO7WNC0qqJkeQS74%2FJX4PN2Vtvo99Rln1XfTyaJ5Zz778GF2q25A3EOfMDlXAtY5kdkcDz9%2FRUL9begMpnpFYEyDvWEytcr7iD%2FId5G16oVTpz%2FaUb2NQPBJIUrxWoBG94ebFoRlx8HiELxU91LYZbZP1A5Ht6yN%2B%2BQjSTFU13zZIVv4ZQkDL2LSjuG0IRgbsL2ZGvTj87YTIOL1Rj2f3PzpduO616mHZgMbB%2BOhsh%2F2%2B7ydh%2Fwnv9FTbkxopYF1%2FUlSn7XqEBS5%2Fdi5hepAJ%2BsjndrQodEJcCZtigGV7hLROaHnEUkNdm%2B%2BF%2B%2FX0towbRAhhE82GqN1uufRb6QlU9Bd%2F4P8fPxaKt2xAUIAPwCy1dBbDJ98gaLuswysBLubQRxXa28ASjUj%2BLweF7T0El2dqRwy2bIgORREKsug9SSZ1KPOccjXzRD2CnjvRGUoBkQmywXG3HghMutvzY745x8I7Ewy1uhgR2PjeOaWPAGcZEMktiJrOGDCAs4jKBjqkASR0ONFo30MSVmHjmprxrTMjP5unaWFvjTEVq1NUc0BpaeIKM4ZSDKhhPP2qOZOWHZJBoJE3T8jXzpoRCdjSumbd3GJIGtJmhD8QHI8oNwtV44dGypAQ%2Bmyv5jdpJlM3KiBhpcMyWRU%2BFqq0X5P%2ByXTMBV6lfxbf7qpig4UlyVRdwZiaZb6Rs%2B%2FxE5JPalYLkyMrMVVF46ou29hOCcNCU7dD5WNH&X-Amz-Signature=73e3f0ea4d4c2dbb857bafa829bb357e8aa7cb9c3dc65fca025d6e0faaf2778e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P6AD4TO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz2%2B6OaiXYMdzdyuHPheKfUC3XklXRQQf%2FtvRuMV4a2QIhAJG0hK7rCwpdin5IfrWl4eZvUfMVkaMSRCYunMYK5sFMKv8DCHQQABoMNjM3NDIzMTgzODA1Igwao1pWzXZxtIRvHm0q3AM55HL6bOTMfNTHnm948VTNU5ZHCBuU77tm5AVyWJz4%2FKatb6xJ0PBmn2LH7rT364Bg7n18o14O%2BFCDuCFVHB20cnubz0oCHMCXBal5ST3A5SrU7azPKWLXEHr6K6AWy5B7dtpSO7WNC0qqJkeQS74%2FJX4PN2Vtvo99Rln1XfTyaJ5Zz778GF2q25A3EOfMDlXAtY5kdkcDz9%2FRUL9begMpnpFYEyDvWEytcr7iD%2FId5G16oVTpz%2FaUb2NQPBJIUrxWoBG94ebFoRlx8HiELxU91LYZbZP1A5Ht6yN%2B%2BQjSTFU13zZIVv4ZQkDL2LSjuG0IRgbsL2ZGvTj87YTIOL1Rj2f3PzpduO616mHZgMbB%2BOhsh%2F2%2B7ydh%2Fwnv9FTbkxopYF1%2FUlSn7XqEBS5%2Fdi5hepAJ%2BsjndrQodEJcCZtigGV7hLROaHnEUkNdm%2B%2BF%2B%2FX0towbRAhhE82GqN1uufRb6QlU9Bd%2F4P8fPxaKt2xAUIAPwCy1dBbDJ98gaLuswysBLubQRxXa28ASjUj%2BLweF7T0El2dqRwy2bIgORREKsug9SSZ1KPOccjXzRD2CnjvRGUoBkQmywXG3HghMutvzY745x8I7Ewy1uhgR2PjeOaWPAGcZEMktiJrOGDCAs4jKBjqkASR0ONFo30MSVmHjmprxrTMjP5unaWFvjTEVq1NUc0BpaeIKM4ZSDKhhPP2qOZOWHZJBoJE3T8jXzpoRCdjSumbd3GJIGtJmhD8QHI8oNwtV44dGypAQ%2Bmyv5jdpJlM3KiBhpcMyWRU%2BFqq0X5P%2ByXTMBV6lfxbf7qpig4UlyVRdwZiaZb6Rs%2B%2FxE5JPalYLkyMrMVVF46ou29hOCcNCU7dD5WNH&X-Amz-Signature=68de0a31fbc11d25ff4836d582f5b57ce387cbfdcf56a1028f54de6c5d192bfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
