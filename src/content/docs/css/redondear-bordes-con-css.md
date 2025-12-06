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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW7ZLLSE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T033414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9h6QhVgASNfSNM47mhOelRrlgFS4r%2FCcM5va8xgLh%2BAiB5v%2FBpm%2BlJZYEQIkJZi2bH5wezmGATTiElawANOYPV9Cr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMD61dE8ysUAP0zW1GKtwDXeDoLjUdxg1UfzzCd9o4Vls0Qyg4WcMYgwQvO7Rv6ejOYFuhav7tE29UejPir4JXSRmZnLDTwHTLoGpY5PetKC%2BTxkSut1qT71dZwusU3Eomj4g8AdUnkJEAhzEVTFUyUb2UVpNgPUhfFlBC2O1qbUb26O5%2FWDgj4RHL%2FVAXz25IrW2gHsUWIRKk89Z7XKfL4IOoan8lxdzvhqH8B4hB6M90klR7Rz9f4t%2Ba51p1x6IdI0ajXX2ePH8Dv3Dl2gF8fiaOGBX2AIiOXEpl8jaFwde4te%2BrYQPw37hCLJ1p80ZI7pNqiCGuW4Du6y9Vd5apaNyzCwtBCda6qlsfFN5fGs0ojxqo5i5R0Kaz38w8mvPEZ4om8xdQ2B6t3fmSCg8KXklwS%2FajAjO6cCcdaGBHweUefQ2sXz89TF50Mf88Qy3WFPBXASJvMM1R78cxmelOPEMM2pfhbDyOkEHcCE8TDcLhcGMcQCdq73QNkPloOm8cJBmjGOduM7DECDdS6C123ngWfjgRedjHUNLaYxlg6QbtpbZ7g1EfFy2b0UFrqRigTt%2BVH7UKo3N2%2BbNFzJquh28xT8BacOw58ifs%2B%2BWZq80Rhm3wutp2zml5w%2FxU5q6M9nu%2BvlwIqvr5RSAwysLOyQY6pgFGroGtz9ZEUZWYL41wtxG6%2FkpL%2BiHFWBjN7%2FUbk1kgAvNuYsZ4D3vKxQ%2FNmM4J9nfRwMIIK%2BHQEvPnNdHXcY2vCWOcfrAbLI2OTG6jrY08YbI%2BfCAfw83cA1JyaQWsomtnpMvZly0prTS%2Feba7tuOYIpILDcN8SnCSi7kYLoRH0ZSmv1Gyz4ZHyjMegtP9UOvmWmOAD%2F3S5Okpsw6Djo6pSbP5oDE1&X-Amz-Signature=fc3be9488e175ebc035c788bf62be140c52ab1c2e2f8fee786070c1dc2db99f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW7ZLLSE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T033414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9h6QhVgASNfSNM47mhOelRrlgFS4r%2FCcM5va8xgLh%2BAiB5v%2FBpm%2BlJZYEQIkJZi2bH5wezmGATTiElawANOYPV9Cr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMD61dE8ysUAP0zW1GKtwDXeDoLjUdxg1UfzzCd9o4Vls0Qyg4WcMYgwQvO7Rv6ejOYFuhav7tE29UejPir4JXSRmZnLDTwHTLoGpY5PetKC%2BTxkSut1qT71dZwusU3Eomj4g8AdUnkJEAhzEVTFUyUb2UVpNgPUhfFlBC2O1qbUb26O5%2FWDgj4RHL%2FVAXz25IrW2gHsUWIRKk89Z7XKfL4IOoan8lxdzvhqH8B4hB6M90klR7Rz9f4t%2Ba51p1x6IdI0ajXX2ePH8Dv3Dl2gF8fiaOGBX2AIiOXEpl8jaFwde4te%2BrYQPw37hCLJ1p80ZI7pNqiCGuW4Du6y9Vd5apaNyzCwtBCda6qlsfFN5fGs0ojxqo5i5R0Kaz38w8mvPEZ4om8xdQ2B6t3fmSCg8KXklwS%2FajAjO6cCcdaGBHweUefQ2sXz89TF50Mf88Qy3WFPBXASJvMM1R78cxmelOPEMM2pfhbDyOkEHcCE8TDcLhcGMcQCdq73QNkPloOm8cJBmjGOduM7DECDdS6C123ngWfjgRedjHUNLaYxlg6QbtpbZ7g1EfFy2b0UFrqRigTt%2BVH7UKo3N2%2BbNFzJquh28xT8BacOw58ifs%2B%2BWZq80Rhm3wutp2zml5w%2FxU5q6M9nu%2BvlwIqvr5RSAwysLOyQY6pgFGroGtz9ZEUZWYL41wtxG6%2FkpL%2BiHFWBjN7%2FUbk1kgAvNuYsZ4D3vKxQ%2FNmM4J9nfRwMIIK%2BHQEvPnNdHXcY2vCWOcfrAbLI2OTG6jrY08YbI%2BfCAfw83cA1JyaQWsomtnpMvZly0prTS%2Feba7tuOYIpILDcN8SnCSi7kYLoRH0ZSmv1Gyz4ZHyjMegtP9UOvmWmOAD%2F3S5Okpsw6Djo6pSbP5oDE1&X-Amz-Signature=b6c097772fbac080d6eedb541bc3151d9b8eb1aede5f94f6e666cce5972966cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
