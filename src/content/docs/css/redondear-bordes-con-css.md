---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
slug: /css/redondear-bordes-con-css/
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D3CPS3T%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T144943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH1QkxjqzrjmcvcJGlZfpu4oBwUJ%2FYzIoRjv3ENXug1AIgAX9oFmlc7iNlg6c%2BJ0Bh5cOlKNjAq9lDT2OTiEaoNu8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2F80EPz%2FWiSE%2FowsCrcA%2Bp4Oi%2FYL9sylj8H4QOBk1SHPlbUfGnjgZfHf4i79j5XyWPztgmh3AFngi%2Ber%2BPAQM41Pl2%2Bu9xa8I1EDW88hMC6Sc%2FGm8K9Rf5ZffYSLni2SY7d%2B6%2F1EB%2BylGxek%2FNInhbqTMhf4vUEjo431YuF1ZQvb3iZHc3tiNpdgH10zeWrMopMS4xyYNtHdJgdsGX8mKtnQR%2BDpvN1%2FDGJ9H40B4uPn5BK8Clx03MskdymaYM9gB1hcPAjNcQGtcmTJoW1G%2F%2FMINchwva9qZO6Ae3jen495XHo08NhQH5NK4pCHm7Bgwc3ZjcGaUGBohTLJqkNNcVPaSyQc5s1%2BpVBiItEJHizqJ%2Fs6tCSNFMktN%2BI88Xc61RoVbb4scv%2FLg1iDCn%2BuKeB8vjKpAg%2FYStgdiEWaEPD1Q2Ej3MmPqiemqtcERZIIeyVVtJQOWJlCAfXXIFZaE71wXZFWjX3O0fPLGxW25MMKaXb%2FqcEdjrQ1lBdlsvVYUqIXjNHwg7fbWE20KjicHeJ6CBNfb6SRLw4AuxOquNgt2xc%2FuiH%2FUYqILr7REBV423INDUXb0NGWlheiffJ8k%2FSs5upLQ8qu8LzTg4fqh%2BuqS0rc4Shb5%2BVx5CPB%2F1BvP%2FL%2B49VNCA1U%2B28MP%2Ba1ckGOqUB5dXbbA6R5%2FkVGLWLoQ9M4k7dcs7gtE59THN1dZlJsw2L61YerDwNT0NQU2o42f2Y5Bs6vHLDUMqVnU7ErakcRHsidABdgBEXAu4UTOHrnBkdCPUkKLQjnQX2ueyzKe3ChivCr%2BGH0EzLe9SYlXBGZAFaHDJUHlryUh%2FL413Ir0fU%2B4EEUAeObWC7ud0ikyG4EmqyxEzCMcTomP5RFX9YNxw1o2ga&X-Amz-Signature=b635fa52816c4e32b33a03ccc24d41223bfa3d1ae37ebbd0763990f30d652790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D3CPS3T%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T144943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH1QkxjqzrjmcvcJGlZfpu4oBwUJ%2FYzIoRjv3ENXug1AIgAX9oFmlc7iNlg6c%2BJ0Bh5cOlKNjAq9lDT2OTiEaoNu8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2F80EPz%2FWiSE%2FowsCrcA%2Bp4Oi%2FYL9sylj8H4QOBk1SHPlbUfGnjgZfHf4i79j5XyWPztgmh3AFngi%2Ber%2BPAQM41Pl2%2Bu9xa8I1EDW88hMC6Sc%2FGm8K9Rf5ZffYSLni2SY7d%2B6%2F1EB%2BylGxek%2FNInhbqTMhf4vUEjo431YuF1ZQvb3iZHc3tiNpdgH10zeWrMopMS4xyYNtHdJgdsGX8mKtnQR%2BDpvN1%2FDGJ9H40B4uPn5BK8Clx03MskdymaYM9gB1hcPAjNcQGtcmTJoW1G%2F%2FMINchwva9qZO6Ae3jen495XHo08NhQH5NK4pCHm7Bgwc3ZjcGaUGBohTLJqkNNcVPaSyQc5s1%2BpVBiItEJHizqJ%2Fs6tCSNFMktN%2BI88Xc61RoVbb4scv%2FLg1iDCn%2BuKeB8vjKpAg%2FYStgdiEWaEPD1Q2Ej3MmPqiemqtcERZIIeyVVtJQOWJlCAfXXIFZaE71wXZFWjX3O0fPLGxW25MMKaXb%2FqcEdjrQ1lBdlsvVYUqIXjNHwg7fbWE20KjicHeJ6CBNfb6SRLw4AuxOquNgt2xc%2FuiH%2FUYqILr7REBV423INDUXb0NGWlheiffJ8k%2FSs5upLQ8qu8LzTg4fqh%2BuqS0rc4Shb5%2BVx5CPB%2F1BvP%2FL%2B49VNCA1U%2B28MP%2Ba1ckGOqUB5dXbbA6R5%2FkVGLWLoQ9M4k7dcs7gtE59THN1dZlJsw2L61YerDwNT0NQU2o42f2Y5Bs6vHLDUMqVnU7ErakcRHsidABdgBEXAu4UTOHrnBkdCPUkKLQjnQX2ueyzKe3ChivCr%2BGH0EzLe9SYlXBGZAFaHDJUHlryUh%2FL413Ir0fU%2B4EEUAeObWC7ud0ikyG4EmqyxEzCMcTomP5RFX9YNxw1o2ga&X-Amz-Signature=b5fba9382a2fd8a6c84fb0572885d11dcaffa7a63304387a2238b45f20732ccd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```text
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


```text
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
