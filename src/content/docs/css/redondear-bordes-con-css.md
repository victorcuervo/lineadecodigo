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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PE6G5M3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T151325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnN%2FGGMHWIm10MTop0zfs5n70tmkMUriDpd%2FHTI3ZAcAiAdPbQcrXZtuEM7lf06twk9tyTtDvzOMLO8itfMvCCUvir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMuKS7Xe14eOTMvzgqKtwDFmwR%2FXMWphkKUj%2B8sRnPYrSIm94qSOwkyHnKlz%2FwsbQgbAlPWJEGDcCcCPwq%2BIpXDouv2EArjoTD%2BqirlM1jpJNT0GyuAU6bjZqutAaqLTRq4%2F9homF1LUl05tVrzZZQdGcilrxujiHFNP0FjRz7J3VCIMtEnb%2By%2FSqfCqtqCbhDcbSAYYsME4LhVDydw9eD1MzzUv%2F9DJ8oOnSJkZU%2ByNwLKlPKpVwda6FVojTNh1B34BTq7TH%2BCngeYpPY%2BRY%2BW%2FYAKadpDYAMlivCgF0RwWS6AuITx56HrP%2FRES3DBBfIkU%2BPM3oGGAC%2FQnA6nprSDZnGRd%2F823pv16rVuPRCUGla1760jysNTtIIEOH9%2BtfrY1r7EHpIXZgVaugqWy9Z%2BsazweEwlnYHJCR%2BCIgmxOHsIOfweFegIBXFKml9QFO9GinjZFssjUsZXGNfZBa%2FqM3VQnzklTaGfzmUEwXOj%2F0T2NIHmAFUQMlMBeBEsvuo4bY%2BMsuClWHX21FjZIDNybu%2Bo7Q9M9xJYwK4hNqqQH2obcEW6Q%2BFHaCbjl3QABaEMQ3JFVCn%2BwzWkHVhhMAHOvdogEKFLSDXj8F%2BPHIjLE1uA%2Fe8IWrgKEE%2FmioVbCFZ0rsjf4UEtRQQ1x8w6N7KyQY6pgG7gEiyazEMgLqdU0uXu5wjtxfxnIke4y99rANFdI%2FU7EOi4ihaouw%2BxD%2F50jyO9Hpgvg25Jhpw2THgEGTBGvvJ0oB6elgXBrc3l1TwPPbqBiQcSxkjhnAbhi6b6UaJKdASs8l69BaPGx0WmCshNZQWDTGSs6jXAc6O%2BmiMKfReuMReFZNmbqAY1YSPANwY3HkZgCWSdFJSHkpKeV7n%2FILhF6D4u3Xh&X-Amz-Signature=a0b523edee01d3ccaef8164f5b7b29d97c8ef882da73de5aef6b2319ccf44f9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PE6G5M3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T151325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnN%2FGGMHWIm10MTop0zfs5n70tmkMUriDpd%2FHTI3ZAcAiAdPbQcrXZtuEM7lf06twk9tyTtDvzOMLO8itfMvCCUvir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMuKS7Xe14eOTMvzgqKtwDFmwR%2FXMWphkKUj%2B8sRnPYrSIm94qSOwkyHnKlz%2FwsbQgbAlPWJEGDcCcCPwq%2BIpXDouv2EArjoTD%2BqirlM1jpJNT0GyuAU6bjZqutAaqLTRq4%2F9homF1LUl05tVrzZZQdGcilrxujiHFNP0FjRz7J3VCIMtEnb%2By%2FSqfCqtqCbhDcbSAYYsME4LhVDydw9eD1MzzUv%2F9DJ8oOnSJkZU%2ByNwLKlPKpVwda6FVojTNh1B34BTq7TH%2BCngeYpPY%2BRY%2BW%2FYAKadpDYAMlivCgF0RwWS6AuITx56HrP%2FRES3DBBfIkU%2BPM3oGGAC%2FQnA6nprSDZnGRd%2F823pv16rVuPRCUGla1760jysNTtIIEOH9%2BtfrY1r7EHpIXZgVaugqWy9Z%2BsazweEwlnYHJCR%2BCIgmxOHsIOfweFegIBXFKml9QFO9GinjZFssjUsZXGNfZBa%2FqM3VQnzklTaGfzmUEwXOj%2F0T2NIHmAFUQMlMBeBEsvuo4bY%2BMsuClWHX21FjZIDNybu%2Bo7Q9M9xJYwK4hNqqQH2obcEW6Q%2BFHaCbjl3QABaEMQ3JFVCn%2BwzWkHVhhMAHOvdogEKFLSDXj8F%2BPHIjLE1uA%2Fe8IWrgKEE%2FmioVbCFZ0rsjf4UEtRQQ1x8w6N7KyQY6pgG7gEiyazEMgLqdU0uXu5wjtxfxnIke4y99rANFdI%2FU7EOi4ihaouw%2BxD%2F50jyO9Hpgvg25Jhpw2THgEGTBGvvJ0oB6elgXBrc3l1TwPPbqBiQcSxkjhnAbhi6b6UaJKdASs8l69BaPGx0WmCshNZQWDTGSs6jXAc6O%2BmiMKfReuMReFZNmbqAY1YSPANwY3HkZgCWSdFJSHkpKeV7n%2FILhF6D4u3Xh&X-Amz-Signature=ec96165ddc39d326f509ec47e865d34c5e1322df37b7b15299e258586dc427e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
