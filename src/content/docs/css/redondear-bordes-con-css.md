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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLG5XQDF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T093523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEF3nQ50V2s4n5tnWbYiC9oxETliMwzJ03dgrfvn5QsmAiEAu9O%2FMBxBdm4591W%2Bn3qHIE3XDmFtD5YfYw%2B7vCSIaWwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGx9alEgcmVpnNMxRCrcAzTypxWJVYloLnEeXanD2DatCIgQUbTJNVWTJsF9lv46l2I1BVsqCD91QRooBpZNGmlo4PhBNFfFRw8PDdupxsdGondzBO0JCIPDGMKiFSqJNuCT33RYf7TOHPCycdkeEcNF%2Boubx%2F%2FgTjfZIcEEo9Y2mOkyRdIWBEs2cPkpr7PlWg5pSOi0vhtSy5G%2FpoDxvV%2BsPNJalKsyA0fTMItMzRmT0SnGc8DNEMBY84uZurO%2B%2FMq25MV7w2jB%2B8RKsFEdOUKPfd%2FHGdhDrAg4dvLrQRpROYLS%2FchE3nJj4qpT1T3M71sxkqDU%2Fqk6M4KsKdKgWgee1FAlOnR6I8fAeeNjv%2BqS3u0vmJBPONJR9YqCjrdjjCPIrhRqrUC3D3O4blnA3bFLQU%2BXqzG%2FzScCzXDCSIDAqwoNihmHTXXz9jkLAbMet%2FR8wuH%2B9MuolmaeZGb7WH1ajExA0BmH%2FYuLu5gE7q2nTmoUOz%2F2G7GuW3fF7WmxgWwR7GtrxHOBLLdS1p7uQlhSmHg2iL1VfVZ7e2eTqngfy5ZDmvMu6511DcSBOQjll4KFABwmrq5mkVDbLJ5kn0zbO0cV6DevwU43OoIt1%2FruerApAoZbLaqTShIZQrgymFxdrE7WmfzL7bv3MKbE38kGOqUBzpkH65KDw35RNIGsDs8YwUxc15h68bmO0Ls8yr4Ny6LLQVanW7vSc26JJM6iL9yX0V6YXB97VYotgw8meHFyBHKFy7wsKrecfUCbMNbtRgTLyEboqPjs1m%2FnQ4utYzcFaZ2BOQV4nTPGa3gf2h1pwAgCiGV6KAvZS8QZN11Xs%2BSZ8Anhk57Mdg99%2FiGEVW3mPlKTAu1ouNYXv0vSU0JVq95lS20Q&X-Amz-Signature=7fb4befc28e6e6131aee43a50deb61b61cc8e497baceccfb7b22395ac2ac54a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLG5XQDF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T093523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEF3nQ50V2s4n5tnWbYiC9oxETliMwzJ03dgrfvn5QsmAiEAu9O%2FMBxBdm4591W%2Bn3qHIE3XDmFtD5YfYw%2B7vCSIaWwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGx9alEgcmVpnNMxRCrcAzTypxWJVYloLnEeXanD2DatCIgQUbTJNVWTJsF9lv46l2I1BVsqCD91QRooBpZNGmlo4PhBNFfFRw8PDdupxsdGondzBO0JCIPDGMKiFSqJNuCT33RYf7TOHPCycdkeEcNF%2Boubx%2F%2FgTjfZIcEEo9Y2mOkyRdIWBEs2cPkpr7PlWg5pSOi0vhtSy5G%2FpoDxvV%2BsPNJalKsyA0fTMItMzRmT0SnGc8DNEMBY84uZurO%2B%2FMq25MV7w2jB%2B8RKsFEdOUKPfd%2FHGdhDrAg4dvLrQRpROYLS%2FchE3nJj4qpT1T3M71sxkqDU%2Fqk6M4KsKdKgWgee1FAlOnR6I8fAeeNjv%2BqS3u0vmJBPONJR9YqCjrdjjCPIrhRqrUC3D3O4blnA3bFLQU%2BXqzG%2FzScCzXDCSIDAqwoNihmHTXXz9jkLAbMet%2FR8wuH%2B9MuolmaeZGb7WH1ajExA0BmH%2FYuLu5gE7q2nTmoUOz%2F2G7GuW3fF7WmxgWwR7GtrxHOBLLdS1p7uQlhSmHg2iL1VfVZ7e2eTqngfy5ZDmvMu6511DcSBOQjll4KFABwmrq5mkVDbLJ5kn0zbO0cV6DevwU43OoIt1%2FruerApAoZbLaqTShIZQrgymFxdrE7WmfzL7bv3MKbE38kGOqUBzpkH65KDw35RNIGsDs8YwUxc15h68bmO0Ls8yr4Ny6LLQVanW7vSc26JJM6iL9yX0V6YXB97VYotgw8meHFyBHKFy7wsKrecfUCbMNbtRgTLyEboqPjs1m%2FnQ4utYzcFaZ2BOQV4nTPGa3gf2h1pwAgCiGV6KAvZS8QZN11Xs%2BSZ8Anhk57Mdg99%2FiGEVW3mPlKTAu1ouNYXv0vSU0JVq95lS20Q&X-Amz-Signature=74ca693ab9e3dc521bdd80f363ff8d2524648480875e7b1a55b2a43a79717e5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
