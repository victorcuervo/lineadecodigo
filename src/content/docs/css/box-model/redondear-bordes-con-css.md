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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FGC74BK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGw1IEOMtqSy8showKNf6kvB6AuclHj0xs0NrBQSbofnAiEAk7xjG%2BeezgGKdXErneeMoIP7uhmtR8J0jV2btxY%2Fppsq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDBLrV2hd%2B6hnHZZj%2BCrcA0rzkdCek29wxR%2Fa%2FlKUpcA%2BuyTfNwL30bRRqXfm4gPlY%2Bn9rgBDvVHqj%2FWeFcaWvJVXigzVAaN8rFZhHkriw5ykn9ZFTMmr3qPxxzP7mP1d087nKmi%2BjkcDhYuP3zIdEtyahFwNulDTo9JcNqjXmvMY6ur1epcsInh169PVwcJTlW8NGQ%2FKySX1vI93cdGK5aJuJajBPw6B2nrNHD4pEF3bOjLeEd3nZJ8Kga28e8RtgVYK46GjwN15kVnEzi0UI8%2Bl6yZDS%2FreUsRH%2BXIoK3YTH7hemdD87M8RFxf%2BCfcWEvWP4AOT37O7MSe7f%2BhbbYsRa8HOKaEIKwvX9DPx1iB7LKOzZV948pDCYaw6ugpztKSQ9z0zG6iLhTuDUHLzcWMNXY4V8tCt0x2c%2BjbH8aqwgFRrONHYbtjEOF5Zqy4e%2BvnSlGZ9lgtc9ncSkb0j%2Fq7yqBLY%2B%2F4FoCHZUayl4zGMY2ExE7yhZyKbvFIlskBE4E4cx1c%2BdqeoC9slu5QjKbfmtz53rli0vJzQaBXxpv2xFML1A2OgDgD1HLXfjq0mg2QRhdGnqaB3N7DdtB7VVEnRMt7lxHjNRagxlAWNRQ3vvSYMCdSH0TdTUIi%2FjkAOu3jdYrE76sgKgYsEMOvvicoGOqUBrYLp6AcsUVBgpu7%2FLsx1Sw9sUBCCCNbMLnbqW3qq2yzn%2Bge1CQ9AFZ7LhEUqBgny%2FCFV0kcGK0XhwsQa0NpwosFZUP3uFHjTxHkwwwga8%2BKSpDXU%2BfUWOzZFga7lOt8ATI2IoNSqmnAjFmbnnWG5fHDTcZ3uMaM9vJEKOzzv9orQ%2BicEvFtkgGjShZptAIkWVvq9%2FJkBng7bvkhE5Vg7XTp4ryDi&X-Amz-Signature=e9bcc07d0abcf7c67d8394fc640baed91167ffbc6f9b98468bc6223bffc09e45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FGC74BK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGw1IEOMtqSy8showKNf6kvB6AuclHj0xs0NrBQSbofnAiEAk7xjG%2BeezgGKdXErneeMoIP7uhmtR8J0jV2btxY%2Fppsq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDBLrV2hd%2B6hnHZZj%2BCrcA0rzkdCek29wxR%2Fa%2FlKUpcA%2BuyTfNwL30bRRqXfm4gPlY%2Bn9rgBDvVHqj%2FWeFcaWvJVXigzVAaN8rFZhHkriw5ykn9ZFTMmr3qPxxzP7mP1d087nKmi%2BjkcDhYuP3zIdEtyahFwNulDTo9JcNqjXmvMY6ur1epcsInh169PVwcJTlW8NGQ%2FKySX1vI93cdGK5aJuJajBPw6B2nrNHD4pEF3bOjLeEd3nZJ8Kga28e8RtgVYK46GjwN15kVnEzi0UI8%2Bl6yZDS%2FreUsRH%2BXIoK3YTH7hemdD87M8RFxf%2BCfcWEvWP4AOT37O7MSe7f%2BhbbYsRa8HOKaEIKwvX9DPx1iB7LKOzZV948pDCYaw6ugpztKSQ9z0zG6iLhTuDUHLzcWMNXY4V8tCt0x2c%2BjbH8aqwgFRrONHYbtjEOF5Zqy4e%2BvnSlGZ9lgtc9ncSkb0j%2Fq7yqBLY%2B%2F4FoCHZUayl4zGMY2ExE7yhZyKbvFIlskBE4E4cx1c%2BdqeoC9slu5QjKbfmtz53rli0vJzQaBXxpv2xFML1A2OgDgD1HLXfjq0mg2QRhdGnqaB3N7DdtB7VVEnRMt7lxHjNRagxlAWNRQ3vvSYMCdSH0TdTUIi%2FjkAOu3jdYrE76sgKgYsEMOvvicoGOqUBrYLp6AcsUVBgpu7%2FLsx1Sw9sUBCCCNbMLnbqW3qq2yzn%2Bge1CQ9AFZ7LhEUqBgny%2FCFV0kcGK0XhwsQa0NpwosFZUP3uFHjTxHkwwwga8%2BKSpDXU%2BfUWOzZFga7lOt8ATI2IoNSqmnAjFmbnnWG5fHDTcZ3uMaM9vJEKOzzv9orQ%2BicEvFtkgGjShZptAIkWVvq9%2FJkBng7bvkhE5Vg7XTp4ryDi&X-Amz-Signature=fbdc8f27e6db9b68bb335b230af006e3591caefdebc588a63ec0fb37cf3b0783&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
