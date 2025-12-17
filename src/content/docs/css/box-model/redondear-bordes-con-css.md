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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622OUTYAV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg39UGswkQMx7gBQ71W1%2BAQ7pnjt4JbwwGwNyBZAGaNgIgL5QyrvzhbQLIQqTWmWtD3Sntvw2pTUnxfY1K6QJ7o3AqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMSQAMA2BEVNM%2FZNyrcA0obX5I1XcVs0S%2Fqt3d2i3jbpt%2FDvcab0xyJ4Lo0oAYQ0dl4BPQTmqNohQ1iSBp8LdnIhPlEMo%2FLbUD4PM7ui5nym89i22bQ%2BxV5THQ8PQ60F%2BojTKyhx9EoYofXHBPV90wGlfmSRNF1IDG8tvaVLHUzM19KEKzo9ZQq1jEALtxJY2WCblZoNVmACjeddY58WIwNx36%2F8ptWUjXVuEyj9TNtTRcHxoXsxkHA5cKa35CrGjHsy3Ukw7k%2Fzsie2buwLaoQa9%2BVdE5eusE1z5dYLYOKYy1ujKWHG3mU%2B%2BhPLx0AftJNILCaeEkAKHDMVuydzmKF7v29fJuZTvMo4BzIiJL9u9pRiGx9tSc%2FeJ1241y8BTOUAiTEZb87tw6GsC0dSWaLKobvDtbLYvW%2BvMS224Oo1Do31Eqt4d0T7Qc%2FiSh7yMLQne%2BS5ICGt5xtMh5YGsdvOl0usjGA%2FH%2BusZ2iHtsL0vQMFMgbF4uogJ2%2FHIMujLRy7d9q%2FWIuS2wbENI05qG8o1BH8m7X92r8OwYI2FliA16lmFwuTYdXi9k%2Bs1JeO4cRhtKx3dGEQQRFnNlLqdScDMnmNDmUGvgsGi87%2BFMdDN4m0sJs91uxJA6QN%2BTF8gkDIsCJSMn5pVojMN2tjMoGOqUBbzsHgMvs5E0dgfbVBGe0vEiFLXjk%2Ff3nX88PPOKvGEW1JUbzufbuQDR2PCBssFZacKIIB0QHndU8dMpwAc9W53aKvrIPxN03w7dp8Og2xX%2FlGuoVfcLQY%2BGMDG%2FY24nSnNz1PBK5yAcC%2F9OI3f%2FNpkGnSde8TaHwiplVIK74Zm7VX%2BDz%2FR3Vduf5Auvl6cwQnB9d4XG7JP%2FLeE6a9AxSQdpc%2FUla&X-Amz-Signature=4ebdc8d2d11f08b516148fc893d05f1aa65e7ebf1a1adec7be5b25140b86250a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622OUTYAV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg39UGswkQMx7gBQ71W1%2BAQ7pnjt4JbwwGwNyBZAGaNgIgL5QyrvzhbQLIQqTWmWtD3Sntvw2pTUnxfY1K6QJ7o3AqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMSQAMA2BEVNM%2FZNyrcA0obX5I1XcVs0S%2Fqt3d2i3jbpt%2FDvcab0xyJ4Lo0oAYQ0dl4BPQTmqNohQ1iSBp8LdnIhPlEMo%2FLbUD4PM7ui5nym89i22bQ%2BxV5THQ8PQ60F%2BojTKyhx9EoYofXHBPV90wGlfmSRNF1IDG8tvaVLHUzM19KEKzo9ZQq1jEALtxJY2WCblZoNVmACjeddY58WIwNx36%2F8ptWUjXVuEyj9TNtTRcHxoXsxkHA5cKa35CrGjHsy3Ukw7k%2Fzsie2buwLaoQa9%2BVdE5eusE1z5dYLYOKYy1ujKWHG3mU%2B%2BhPLx0AftJNILCaeEkAKHDMVuydzmKF7v29fJuZTvMo4BzIiJL9u9pRiGx9tSc%2FeJ1241y8BTOUAiTEZb87tw6GsC0dSWaLKobvDtbLYvW%2BvMS224Oo1Do31Eqt4d0T7Qc%2FiSh7yMLQne%2BS5ICGt5xtMh5YGsdvOl0usjGA%2FH%2BusZ2iHtsL0vQMFMgbF4uogJ2%2FHIMujLRy7d9q%2FWIuS2wbENI05qG8o1BH8m7X92r8OwYI2FliA16lmFwuTYdXi9k%2Bs1JeO4cRhtKx3dGEQQRFnNlLqdScDMnmNDmUGvgsGi87%2BFMdDN4m0sJs91uxJA6QN%2BTF8gkDIsCJSMn5pVojMN2tjMoGOqUBbzsHgMvs5E0dgfbVBGe0vEiFLXjk%2Ff3nX88PPOKvGEW1JUbzufbuQDR2PCBssFZacKIIB0QHndU8dMpwAc9W53aKvrIPxN03w7dp8Og2xX%2FlGuoVfcLQY%2BGMDG%2FY24nSnNz1PBK5yAcC%2F9OI3f%2FNpkGnSde8TaHwiplVIK74Zm7VX%2BDz%2FR3Vduf5Auvl6cwQnB9d4XG7JP%2FLeE6a9AxSQdpc%2FUla&X-Amz-Signature=fb7d626a7e75c3b0138be6e625ee971fd02fd39f641470d308ab26c7f19643c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
