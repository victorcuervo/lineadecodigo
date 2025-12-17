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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JGRN6QO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLNi9%2Bo0e%2F5OdSwPIWEChcwB0hPOtYwwS%2F%2FPkWxC3iYgIhAOvLM9VJ8pvRIovoQDbFNiMStMGJr1Y8SGVUdMxmi47sKv8DCH4QABoMNjM3NDIzMTgzODA1IgyzDUONh87dOS5WE5Eq3AOLRUnOiia9y0EUPDiKEX6MkkJy0tRAwxuxdoXS%2F%2BbVAwcyNFv03r39chTmxWcDbv7FHqzw1iolbXGIl0DuUTKsap%2BdISyxRuRapXhQJilia1G51PeTBO3DQhy2ocWkLmKB4eN5LQSpkQWP0UPLaWaTSlza2RnraMYKxqSoZw0KXGPK1IWGkLp%2FGiIbKjwN1uTm7V%2FNIBEofoqH2lM9AU33hwtkPbhcksJ1bGh59SUOr7nt7bVqdoA27pKI7XWXzawykHxuJrGvvehP5dSqBTOw%2BUhtLX4N0D%2BzErQRj5qLQIEL304Iik8SuHzu018jIXOcpHu7ObNB0RIsykNm8ZfFulvD5lRheh%2FuY6%2BTUUtrcglaX84vTK1yrf7H8DCPkcykKD8prgy0cy7KFPV7p81WbyHYb%2FsWV3aeMz1iLP474ZGUcMPbuXikrmTvNdeVkJyv%2FBEfWdnuF%2B3nyMMqd%2FBZxLDqD3holI0VqA70UgND4OPLEjycNRrET55EbIgH3k%2BwhF3099kbg045LUrlpdiByJlGBuUbH1SxdnCv1XVmBN1MdNNHCPefFghVuR2JhgXkpq4Ov6PMhCq09CFABazSZoUO2wWIzaulQ58eiLvwKEfg38iRULDju6TRwjDUxYrKBjqkAZ2oMXBhBQ2n4PMi%2BmmC5esRap1yLssSvHV9L2u69SnFru0cCtTmvHbK3nQGBbhCuVTKbUSlRNsHDknPF98944lHcmRZ3KMGF6%2BVSNckJOIR3FZqcP%2FY8oE231sxiGDGHLVPft0%2BNSH92WCRISq3OU5N88vHPjebSpbtmMuv%2BH42WZRMH%2F86Mk5%2F2pPxZqVEiyjBEZY8Rf%2FoIpJR3sn25AMqno4b&X-Amz-Signature=69cda1bf4a6e84d44feef2eeb46616526d5b31ec4d9da2fed514010ae16e3a94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JGRN6QO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLNi9%2Bo0e%2F5OdSwPIWEChcwB0hPOtYwwS%2F%2FPkWxC3iYgIhAOvLM9VJ8pvRIovoQDbFNiMStMGJr1Y8SGVUdMxmi47sKv8DCH4QABoMNjM3NDIzMTgzODA1IgyzDUONh87dOS5WE5Eq3AOLRUnOiia9y0EUPDiKEX6MkkJy0tRAwxuxdoXS%2F%2BbVAwcyNFv03r39chTmxWcDbv7FHqzw1iolbXGIl0DuUTKsap%2BdISyxRuRapXhQJilia1G51PeTBO3DQhy2ocWkLmKB4eN5LQSpkQWP0UPLaWaTSlza2RnraMYKxqSoZw0KXGPK1IWGkLp%2FGiIbKjwN1uTm7V%2FNIBEofoqH2lM9AU33hwtkPbhcksJ1bGh59SUOr7nt7bVqdoA27pKI7XWXzawykHxuJrGvvehP5dSqBTOw%2BUhtLX4N0D%2BzErQRj5qLQIEL304Iik8SuHzu018jIXOcpHu7ObNB0RIsykNm8ZfFulvD5lRheh%2FuY6%2BTUUtrcglaX84vTK1yrf7H8DCPkcykKD8prgy0cy7KFPV7p81WbyHYb%2FsWV3aeMz1iLP474ZGUcMPbuXikrmTvNdeVkJyv%2FBEfWdnuF%2B3nyMMqd%2FBZxLDqD3holI0VqA70UgND4OPLEjycNRrET55EbIgH3k%2BwhF3099kbg045LUrlpdiByJlGBuUbH1SxdnCv1XVmBN1MdNNHCPefFghVuR2JhgXkpq4Ov6PMhCq09CFABazSZoUO2wWIzaulQ58eiLvwKEfg38iRULDju6TRwjDUxYrKBjqkAZ2oMXBhBQ2n4PMi%2BmmC5esRap1yLssSvHV9L2u69SnFru0cCtTmvHbK3nQGBbhCuVTKbUSlRNsHDknPF98944lHcmRZ3KMGF6%2BVSNckJOIR3FZqcP%2FY8oE231sxiGDGHLVPft0%2BNSH92WCRISq3OU5N88vHPjebSpbtmMuv%2BH42WZRMH%2F86Mk5%2F2pPxZqVEiyjBEZY8Rf%2FoIpJR3sn25AMqno4b&X-Amz-Signature=59c6a26be5abb287209953fdc3af5270e41fb5ada1d11d34fc5c17781dfd0d8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
