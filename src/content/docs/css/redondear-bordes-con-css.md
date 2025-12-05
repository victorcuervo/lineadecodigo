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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AHK266D%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T033904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1Jr84IlOl4pT1K8A3PJV1FwWhOROXNjgfytIpwPDOWAiEAxpqXSDXu9ixE9AIRCwmb%2B2hwKyL52jiPC91qvk1tzeIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPVa3JAiOoJMzZEUfyrcA3VXcNC0rOk3pyI0knaH7fErHPLfxzG%2FvXlbCqfOsl0YOg5nC5guaLfHJwu52cJkU5T3Jy2gcWwQ9IH%2BECRhHu9cQFiDkvfEf5dSK01TBvQNuQU7MICMCGiW7%2FKaxyqyc5p%2FNaH250TycRpLXcAyB7aZqVTW24hMjPI7Zj3LSbgsb6%2BuHYbZw9D%2B2v6EDIViFNKV1tPvLy0WrvxWwzTLmRX9xrnnsyYQ0lGTPw5l58C2v5DXiQQyBm4F2Xwnzf%2FCvIWf2Zwv3xoE1Sj%2BqNvz%2FeDMSO16yGunbgoUeBHU1TmmXIKynexfFFf8C54EzEiGDiVkxiE4NPm2zC7anCy%2BsDKg6Qndqti%2Fe6j3rQ%2FrH7%2FVAsk%2Ba0Crowjp0gIVOgDmFUEg9ptp1UTy54JCasFz68XEgUCkOxxrWRFfam3j%2BPUaWoUiHzfs3gppkbKmCrl6eu3fYLknI%2BBcDg8Eie2DbCc0cnrn53%2B3yKKtLjDpVtZBQPg4z8MRyeGEbk0zZgubEMPWPck%2BC80ZSDany6tVnn3AuF8II8AhS%2Fskx%2BcqaPyxEX0I6XYl0yAnUzfRDB6Qzl3rIVQSC8rPKccomXAze%2FQITsuXpRBP5MQE7QE00LMq%2BoPtXXXnANC46cE8MN2MyMkGOqUBjGBH60TIJlvNzGZWz7u7pKSgQdApMlEgu12xMOyHoOKFdMm9vXZW%2F1m%2F58FT%2F5SqBZLBK5L6cxAHMFV5gWxsSx2TM4uLjApR5qFjoXD8LP1QPLVY6Y%2FtAaKn%2FGCfeQ1XNcPqakKm35Z0IYEra0NtwFw1v3iOkKBISDxYU7b0WYy87tRbKKFhtOd9X6%2BG16r7SDIobhMFfneqYTIb7qtIdS6lky3d&X-Amz-Signature=9e788f4a5dbef2a2c38b5c6ae63b18ef44d722e55bed4d66878e6975a340d3ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AHK266D%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T033904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1Jr84IlOl4pT1K8A3PJV1FwWhOROXNjgfytIpwPDOWAiEAxpqXSDXu9ixE9AIRCwmb%2B2hwKyL52jiPC91qvk1tzeIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPVa3JAiOoJMzZEUfyrcA3VXcNC0rOk3pyI0knaH7fErHPLfxzG%2FvXlbCqfOsl0YOg5nC5guaLfHJwu52cJkU5T3Jy2gcWwQ9IH%2BECRhHu9cQFiDkvfEf5dSK01TBvQNuQU7MICMCGiW7%2FKaxyqyc5p%2FNaH250TycRpLXcAyB7aZqVTW24hMjPI7Zj3LSbgsb6%2BuHYbZw9D%2B2v6EDIViFNKV1tPvLy0WrvxWwzTLmRX9xrnnsyYQ0lGTPw5l58C2v5DXiQQyBm4F2Xwnzf%2FCvIWf2Zwv3xoE1Sj%2BqNvz%2FeDMSO16yGunbgoUeBHU1TmmXIKynexfFFf8C54EzEiGDiVkxiE4NPm2zC7anCy%2BsDKg6Qndqti%2Fe6j3rQ%2FrH7%2FVAsk%2Ba0Crowjp0gIVOgDmFUEg9ptp1UTy54JCasFz68XEgUCkOxxrWRFfam3j%2BPUaWoUiHzfs3gppkbKmCrl6eu3fYLknI%2BBcDg8Eie2DbCc0cnrn53%2B3yKKtLjDpVtZBQPg4z8MRyeGEbk0zZgubEMPWPck%2BC80ZSDany6tVnn3AuF8II8AhS%2Fskx%2BcqaPyxEX0I6XYl0yAnUzfRDB6Qzl3rIVQSC8rPKccomXAze%2FQITsuXpRBP5MQE7QE00LMq%2BoPtXXXnANC46cE8MN2MyMkGOqUBjGBH60TIJlvNzGZWz7u7pKSgQdApMlEgu12xMOyHoOKFdMm9vXZW%2F1m%2F58FT%2F5SqBZLBK5L6cxAHMFV5gWxsSx2TM4uLjApR5qFjoXD8LP1QPLVY6Y%2FtAaKn%2FGCfeQ1XNcPqakKm35Z0IYEra0NtwFw1v3iOkKBISDxYU7b0WYy87tRbKKFhtOd9X6%2BG16r7SDIobhMFfneqYTIb7qtIdS6lky3d&X-Amz-Signature=a520f90f5d3a313a7dc73ee2285ccce44d64d2b2a58c3b77ac04a0beb5e71a91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
