---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNOX7YPY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIAqzs%2FVBSqsipZhhaoYWTAVzZMGas8VSNcZ0Fpgpi%2F7lAiADElxVvR0q5%2F5MvZakq85oHR1O1ms1LflPLG%2BnXC5MVyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMFcJB7tDNZRfC8GM%2BKtwDKJMmdLEOl%2FHMrh4abJTYRVy11tT2ehTqaH7HTYZDDqpNYJQfBMa9%2BOJi9MvJGH1mdqu41MXkWRj%2BTt7fC1PizVe3uKq0yPi32Y0eTsJx5Z1oQbDhUrm9rOWGp%2B9C%2B2p1hqd01bSuBSwuTFZqJnBu71CTb1exG6KsjSLiMYsSWMdFH2lZ3kdNXRg4FQbp4ZdokdlHskp5hi4N6h1yrTatSi%2FwdiQRogpGd3VhybM7HfoPN8n1cSehDbL7c%2FsCSB3QKSkUihl20zuAOvodnVn174mqU4%2BW66C0h0JVLRMmuvgbu3gNt0sAZM%2FHmuB%2BO9K86AnTF%2FNnS7%2BD8hG43E0ChJXLYu%2BlIAyr2N2vUVvd1nvlsFVbVGhT8V2WmCdnX1TmnNDp7k3sfnSYK34bWS5BkP8lNK12nLwNWNZfHF84%2Fa4JtWePpJmNH3b7lRtuKYwavs9alofzhURfaLiL36FBjlaEgSLJ525YEF8BbUGUiAwRmtr9ZNFNddNxqO9Q4HBxcJiTob3kKDIaHoOA%2F4W09UrtH61alnwpF4YluyK3xCZNLYj0%2FdSDxH0XvW%2BmDDSryiONhgTRBuMCflY6k6qXSw5Uj4%2BdkNOGNW2DwQSWomahyx6huZcTT4rINZ4w%2BYPGyQY6pgHpIUlPqiS3ET2u3F1l5EYbku60W%2BIMkIt4EUbPqpyg1QWZ09dUdBCEn2%2F530CVlR4iBOLP1CWUYJ6IEy%2BUV2BN0%2B8di999G7zpcZsRTgmWDd8eS%2BTnK1Gy6jiL31VdZlsQiRkANhrpqG4H8nZ67E527qoTUrg4ECG0tvN%2FFtGGLAVYJotw9H8kjkVC878uowwjkKtAUHK8c5xSWKmuKSUVpS55uB%2BE&X-Amz-Signature=44aba405c4b54256ec2dcba9d87c22e7a955b07613a90d40647364669842831f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNOX7YPY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIAqzs%2FVBSqsipZhhaoYWTAVzZMGas8VSNcZ0Fpgpi%2F7lAiADElxVvR0q5%2F5MvZakq85oHR1O1ms1LflPLG%2BnXC5MVyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMFcJB7tDNZRfC8GM%2BKtwDKJMmdLEOl%2FHMrh4abJTYRVy11tT2ehTqaH7HTYZDDqpNYJQfBMa9%2BOJi9MvJGH1mdqu41MXkWRj%2BTt7fC1PizVe3uKq0yPi32Y0eTsJx5Z1oQbDhUrm9rOWGp%2B9C%2B2p1hqd01bSuBSwuTFZqJnBu71CTb1exG6KsjSLiMYsSWMdFH2lZ3kdNXRg4FQbp4ZdokdlHskp5hi4N6h1yrTatSi%2FwdiQRogpGd3VhybM7HfoPN8n1cSehDbL7c%2FsCSB3QKSkUihl20zuAOvodnVn174mqU4%2BW66C0h0JVLRMmuvgbu3gNt0sAZM%2FHmuB%2BO9K86AnTF%2FNnS7%2BD8hG43E0ChJXLYu%2BlIAyr2N2vUVvd1nvlsFVbVGhT8V2WmCdnX1TmnNDp7k3sfnSYK34bWS5BkP8lNK12nLwNWNZfHF84%2Fa4JtWePpJmNH3b7lRtuKYwavs9alofzhURfaLiL36FBjlaEgSLJ525YEF8BbUGUiAwRmtr9ZNFNddNxqO9Q4HBxcJiTob3kKDIaHoOA%2F4W09UrtH61alnwpF4YluyK3xCZNLYj0%2FdSDxH0XvW%2BmDDSryiONhgTRBuMCflY6k6qXSw5Uj4%2BdkNOGNW2DwQSWomahyx6huZcTT4rINZ4w%2BYPGyQY6pgHpIUlPqiS3ET2u3F1l5EYbku60W%2BIMkIt4EUbPqpyg1QWZ09dUdBCEn2%2F530CVlR4iBOLP1CWUYJ6IEy%2BUV2BN0%2B8di999G7zpcZsRTgmWDd8eS%2BTnK1Gy6jiL31VdZlsQiRkANhrpqG4H8nZ67E527qoTUrg4ECG0tvN%2FFtGGLAVYJotw9H8kjkVC878uowwjkKtAUHK8c5xSWKmuKSUVpS55uB%2BE&X-Amz-Signature=c5446570e4d94d6af29d1eb9b2c77a229e163b1da587aac691a432a351b636f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
