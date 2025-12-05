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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXOSEV53%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T225300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCINTfJ2%2BNx%2FTt8PWA4uxSK03Nt%2B8JvhMxSHT%2FQXgHHkgIgYDPnSjT6S2wjUXzb%2FwJA3sKIXxL9HfFEwvqqXrjslTMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDGJb5KlIIhZKRGWhwCrcA%2F2PasYECes9P%2FSfd%2FO%2BlMaAi7ivc5t%2FJgk%2BTN7mQ60UEW2AHDxXY9qZFStJkW9a1bjClmVyYMp4t%2FOaeEnM3tOzwAwnb6QOTespVxQR3iC7myHiCasZ%2Bx6Y9%2B8ufAdYOnH9cGbSb%2BadL1WKM7uKJ39ganBmElMhYnxVRZyHFxiTLJ07aDDx1XzRihuxAN4LO%2FLTKivU3myuRFM6oTKrpqtvxu6Ee33EMgc2uweFjQE3EpsbXHkxaKolWdXVIMnqR%2BtAlLW1hQcHsp3gbmpcCNQwbNfqIcGW2rBNaWbpnnZJjCPJu%2B4ipHArJthuTIRTiO0eOQ%2F%2BvEieiRM2KmjHeN%2Be%2BRUpSrzHHGPNHFtkyo6twI6UDUqplhmq%2FxxPPtZ9P9WoqMuGiDV0%2FH8Fk27TsPH%2BqVrrdmSjay8mYf571hxOIhNpKOWyJ%2F9FmX%2F8KJ%2Bw7nYHfgw9soELWj92ARI1aBLSH2wEORTdj5w5tGJaadoIsu2Ql5a7N%2FTxeGVa7TXFvn%2FjnRI9bX8WnCZNilvDXXoB7NNPkhwtLujB7V21i%2Fik778w%2F4ZmH%2BdWKhwNsd6YdNm%2F%2Byx4wsm0XPHQEJe3omtLYOE4LSMUQkbHZioUDm9PeaUshPFhIIng%2FvIgMNn%2FzMkGOqUBlvmQ7HVKVAP3QS%2FWH0m56A%2B7OFWm4ppf%2B4SL6gjTLgWxYKhd%2BVSTfj8e%2BXuWpALxNiRBNJcNyarP86shidKz3Nqi0awGodnKAFWhgAN9IWNr7H2fA2S2%2BseDjeu6p9G3QAq4Eamhsd5mbNjuNDaT2%2B3XId0gU5RHAzaVIndHTuBkOVrhkKntuozdfoN3a4Oh6VVvTxIt728rWAlqZCI2jP696ina&X-Amz-Signature=8588a8bde75181477ba30734921ec98bc8da421abf58b117705569569aedbb41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXOSEV53%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T225300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCINTfJ2%2BNx%2FTt8PWA4uxSK03Nt%2B8JvhMxSHT%2FQXgHHkgIgYDPnSjT6S2wjUXzb%2FwJA3sKIXxL9HfFEwvqqXrjslTMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDGJb5KlIIhZKRGWhwCrcA%2F2PasYECes9P%2FSfd%2FO%2BlMaAi7ivc5t%2FJgk%2BTN7mQ60UEW2AHDxXY9qZFStJkW9a1bjClmVyYMp4t%2FOaeEnM3tOzwAwnb6QOTespVxQR3iC7myHiCasZ%2Bx6Y9%2B8ufAdYOnH9cGbSb%2BadL1WKM7uKJ39ganBmElMhYnxVRZyHFxiTLJ07aDDx1XzRihuxAN4LO%2FLTKivU3myuRFM6oTKrpqtvxu6Ee33EMgc2uweFjQE3EpsbXHkxaKolWdXVIMnqR%2BtAlLW1hQcHsp3gbmpcCNQwbNfqIcGW2rBNaWbpnnZJjCPJu%2B4ipHArJthuTIRTiO0eOQ%2F%2BvEieiRM2KmjHeN%2Be%2BRUpSrzHHGPNHFtkyo6twI6UDUqplhmq%2FxxPPtZ9P9WoqMuGiDV0%2FH8Fk27TsPH%2BqVrrdmSjay8mYf571hxOIhNpKOWyJ%2F9FmX%2F8KJ%2Bw7nYHfgw9soELWj92ARI1aBLSH2wEORTdj5w5tGJaadoIsu2Ql5a7N%2FTxeGVa7TXFvn%2FjnRI9bX8WnCZNilvDXXoB7NNPkhwtLujB7V21i%2Fik778w%2F4ZmH%2BdWKhwNsd6YdNm%2F%2Byx4wsm0XPHQEJe3omtLYOE4LSMUQkbHZioUDm9PeaUshPFhIIng%2FvIgMNn%2FzMkGOqUBlvmQ7HVKVAP3QS%2FWH0m56A%2B7OFWm4ppf%2B4SL6gjTLgWxYKhd%2BVSTfj8e%2BXuWpALxNiRBNJcNyarP86shidKz3Nqi0awGodnKAFWhgAN9IWNr7H2fA2S2%2BseDjeu6p9G3QAq4Eamhsd5mbNjuNDaT2%2B3XId0gU5RHAzaVIndHTuBkOVrhkKntuozdfoN3a4Oh6VVvTxIt728rWAlqZCI2jP696ina&X-Amz-Signature=1aca76ecea8cc626e0ff4d74f1978ed733afcf8b8a8ee06d7928a9e0f8f85997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
