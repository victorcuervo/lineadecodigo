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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBHJ5YRC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T074650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhLEAP1itP3jYV5nVKvNVaxa%2BaeyzYeP2pNhYI96pscAiEA80bywv62w2yG7Vfcggq5RuvbN2V7%2Bu76Mz8T4pYFCEUqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPgUTdf1QWeRyZ5RNyrcA6j3J0g8fEPDJOLo595VAOpWgNrZNQdODAVu%2Bdwnbau3aR74ZIFnxT8%2FGHUPuySClUvDCQxQ2WlB9WyPAXy9O5YvGXInoqjXiiv6Whx5Jzrxzdq3TCM0Tz70JlogQB0mUK4QPfcT7HJPSJ%2BMQfZBFs5aFCuX3nwboTg%2BX5RwdysRl3SwF1vFhpWFCEy%2FtiVEZ71gz45TJYV6oI%2BW2sc6iiyIyT0Y1TiziHRpKka%2BZ2KWr6I9eWrLsmncxrmrW%2Ftd9x44PdVQampEwopi9rESPgpAAABdaalUbe%2BSHi6oXbSGJohgxgJHsc%2B6kLsR8hcsLzDuRuscaUeFtETIM6QVEPn0id4lNpuaNiPV%2Fu9qrF22UKw2qZmcP0uUbJ693Yz%2BXIyh%2FQhI8bf3OR0lem4D9nNIDQwoUj6uk8Sgum3ulDhxpeIArDU0ilmBAxMhgDP8%2BjyZemeup0faXEKpJz2IbraSQRByDwElXkbVphqd2YLSftJUBwYvFTNXQ8eGIT7Om0NIA2CWTvIwE81HsAVUFCRzq7IhK%2F4UZXXlpUmIxSa3mJZWtwcwirJiLeMWvJ0H4o%2BdyV9Q7gtMtmngyMu2y3DrWPQ55%2BqJ9WQLf%2BORYgH7EgPWJuqiB2UGjUrkMKPt2ckGOqUBbGi5Tvkm9TbkJmNOG%2BJMDsi1b61WZtINU%2FXptV1Ws3I3cwRET8EhfRGnzxNsHQ5O2HQTkM13ACYHa9icqB6%2BeNz%2Fc4vKBH23p5ieTW0mLnABj4sPIrJeexMYBCwAE7jaDdtPsq2nqBceXAIVWn2X0t2pigll1x5rDYKFya3EvcOM%2BRHcw5ELcf4npUtjzuCupC79HBN5rk7gtyNvfBkFe5wwPdza&X-Amz-Signature=272c8fab7bd70980adf62a8435a8668d02cf55619923d80f7eb83e30f4a5aeae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBHJ5YRC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T074650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhLEAP1itP3jYV5nVKvNVaxa%2BaeyzYeP2pNhYI96pscAiEA80bywv62w2yG7Vfcggq5RuvbN2V7%2Bu76Mz8T4pYFCEUqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPgUTdf1QWeRyZ5RNyrcA6j3J0g8fEPDJOLo595VAOpWgNrZNQdODAVu%2Bdwnbau3aR74ZIFnxT8%2FGHUPuySClUvDCQxQ2WlB9WyPAXy9O5YvGXInoqjXiiv6Whx5Jzrxzdq3TCM0Tz70JlogQB0mUK4QPfcT7HJPSJ%2BMQfZBFs5aFCuX3nwboTg%2BX5RwdysRl3SwF1vFhpWFCEy%2FtiVEZ71gz45TJYV6oI%2BW2sc6iiyIyT0Y1TiziHRpKka%2BZ2KWr6I9eWrLsmncxrmrW%2Ftd9x44PdVQampEwopi9rESPgpAAABdaalUbe%2BSHi6oXbSGJohgxgJHsc%2B6kLsR8hcsLzDuRuscaUeFtETIM6QVEPn0id4lNpuaNiPV%2Fu9qrF22UKw2qZmcP0uUbJ693Yz%2BXIyh%2FQhI8bf3OR0lem4D9nNIDQwoUj6uk8Sgum3ulDhxpeIArDU0ilmBAxMhgDP8%2BjyZemeup0faXEKpJz2IbraSQRByDwElXkbVphqd2YLSftJUBwYvFTNXQ8eGIT7Om0NIA2CWTvIwE81HsAVUFCRzq7IhK%2F4UZXXlpUmIxSa3mJZWtwcwirJiLeMWvJ0H4o%2BdyV9Q7gtMtmngyMu2y3DrWPQ55%2BqJ9WQLf%2BORYgH7EgPWJuqiB2UGjUrkMKPt2ckGOqUBbGi5Tvkm9TbkJmNOG%2BJMDsi1b61WZtINU%2FXptV1Ws3I3cwRET8EhfRGnzxNsHQ5O2HQTkM13ACYHa9icqB6%2BeNz%2Fc4vKBH23p5ieTW0mLnABj4sPIrJeexMYBCwAE7jaDdtPsq2nqBceXAIVWn2X0t2pigll1x5rDYKFya3EvcOM%2BRHcw5ELcf4npUtjzuCupC79HBN5rk7gtyNvfBkFe5wwPdza&X-Amz-Signature=0cb51af20ec192abb6f78fa62d471474c588242bee5d26ef50a8ea28fc28e5f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
