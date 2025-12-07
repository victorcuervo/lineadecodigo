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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG7F7LST%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T220301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFGxF8oIf0p42aq5oG9ZR1JjkL3VikGlCwuHbZuizp8AiEApePgNbl%2FM9PIWHkZpgnbnBcD29Gv%2FKhsS4aBEGMBF54qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOD7mBoRt%2BsA1RisyircA9fyH48Ogw2V0pGrglOKhLjUpXvSBofYYuzOg3cRmtiP8i5KT0Qzt2Jn7K4u7o8PU7oV3vBXAYHfKxBw43GvYm0QAwgBtfS4BpFkOiKRskhNb5W4TtuLag5P2o6cLg%2FTaJKzoVXNpjybhHGlO%2BQiqLQHvqKF2cKQfHQfAc75F9fFeta2P1GMYCykxSVBi4By4qNHfflSpW1vZsi5J%2FUCmf%2FiF8ypfboak97yoYSbWVV%2Fa8LGE57QQEi2hyk6%2BWZrmKgVRUnMMcBsLXMHi737HY2qZ33z11FjBpxMrcl6jB6Rb%2FT5XPNtH49R1k58Fe3WtGbey5HR%2FXnAHhN1kQYcqlJ7dwoL77rvKrnIOrLxwIEaIRWuJTL0G%2B9EhwegSLOYrQX%2BXLhXndiz7fnr4uMV46GF4DDOMveyHO0v%2BzMtsnFcGYE8dr6fpIS1CzBH1kLYigthRwyB922lJ51OpMhfMApznTZqf5QY5GU%2FGTLyJTbtPgWzSGhka2iIZmEf42trpTusfRFL%2BO2VrW6dtzuBVtwLIAWlKndTRcCQ%2B2zi0yAp8DaNWrQvrwfrD5kJXYIEJXnx57x9tzKebTvyIOUV2Xma951vYQREUk3r7%2BntNSDBxxHMZGuUi3LkEodvMPXH18kGOqUBeS94%2Fd28fBpZBlU0tuCkH8aDtWPaTZGHNjTCt8KptUAcYDb1uwZGusbjW%2Bq9e8i8l1jcMP3VFT0d5gDnYrtbZK0ko3D0E%2Bw3MitDhDte8TrmfBwztqKiWe94vAcZzKTHNvbxqMsnMiX2zpu5eeNPdBadAc9F63K3MV3nEWX8kjaNjQzJpiRkz4e%2BWD7brzn6%2FKAek%2Bvg8%2BAyvdgZ5MAHrsKWt1%2FR&X-Amz-Signature=be5186ff90e9b897cd1bf7f63c270c1f8dc0540457005f3115a45ed2f709a1b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG7F7LST%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T220301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFGxF8oIf0p42aq5oG9ZR1JjkL3VikGlCwuHbZuizp8AiEApePgNbl%2FM9PIWHkZpgnbnBcD29Gv%2FKhsS4aBEGMBF54qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOD7mBoRt%2BsA1RisyircA9fyH48Ogw2V0pGrglOKhLjUpXvSBofYYuzOg3cRmtiP8i5KT0Qzt2Jn7K4u7o8PU7oV3vBXAYHfKxBw43GvYm0QAwgBtfS4BpFkOiKRskhNb5W4TtuLag5P2o6cLg%2FTaJKzoVXNpjybhHGlO%2BQiqLQHvqKF2cKQfHQfAc75F9fFeta2P1GMYCykxSVBi4By4qNHfflSpW1vZsi5J%2FUCmf%2FiF8ypfboak97yoYSbWVV%2Fa8LGE57QQEi2hyk6%2BWZrmKgVRUnMMcBsLXMHi737HY2qZ33z11FjBpxMrcl6jB6Rb%2FT5XPNtH49R1k58Fe3WtGbey5HR%2FXnAHhN1kQYcqlJ7dwoL77rvKrnIOrLxwIEaIRWuJTL0G%2B9EhwegSLOYrQX%2BXLhXndiz7fnr4uMV46GF4DDOMveyHO0v%2BzMtsnFcGYE8dr6fpIS1CzBH1kLYigthRwyB922lJ51OpMhfMApznTZqf5QY5GU%2FGTLyJTbtPgWzSGhka2iIZmEf42trpTusfRFL%2BO2VrW6dtzuBVtwLIAWlKndTRcCQ%2B2zi0yAp8DaNWrQvrwfrD5kJXYIEJXnx57x9tzKebTvyIOUV2Xma951vYQREUk3r7%2BntNSDBxxHMZGuUi3LkEodvMPXH18kGOqUBeS94%2Fd28fBpZBlU0tuCkH8aDtWPaTZGHNjTCt8KptUAcYDb1uwZGusbjW%2Bq9e8i8l1jcMP3VFT0d5gDnYrtbZK0ko3D0E%2Bw3MitDhDte8TrmfBwztqKiWe94vAcZzKTHNvbxqMsnMiX2zpu5eeNPdBadAc9F63K3MV3nEWX8kjaNjQzJpiRkz4e%2BWD7brzn6%2FKAek%2Bvg8%2BAyvdgZ5MAHrsKWt1%2FR&X-Amz-Signature=19f5c92772ac7f0020bda5c7002a8a4ce7492d7f48e397abeb9f4ed988a7f968&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
