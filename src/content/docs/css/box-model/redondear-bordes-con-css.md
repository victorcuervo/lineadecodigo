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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XIJAH7U%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4d1TQFHQek19U%2BmruF%2BKWtY71zGp5B2GTgGu0KDWHyAIhAMsGrTAE57jYv0%2FJ5xsBPhg9oWfkUrlXaOj6ADqDBbHTKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2F7jQGUTwPUZtOV%2BQq3APnxpUL6ne%2BzqEUAEQb766koIC307pEXv0pv%2FoShtBFSc3obeGEfDndyczG2zNuJtav3OlDgRsEDbJjxA8KmxG%2Bc8fL38xSn%2BgGy1DhBvDkrr3k3SFSqxBVYLpxB8oRDiNkbec6RumOQUzJaTPTzHElfB7NX%2BhBVU7A8EDQ2NB1jFQHkrpyDuqEdUezU%2BRQx6XM6hh8f1fXCpIEekPmOuKKtlHlMPOTn7IxHXgtFqzU2oQuOAHaakZ0RNEESjHvqklUH8Jk9KTCPB9A3ft3loWDH8WFMVR3bJfgWedz8SOPau%2B4961NLiK9IHjKJEYk1BHVygKPqGjPDjBEjf%2Bem3BB4xePyn0w50IehOK1J6x9XudWj5GFQFQdtZoAVidy77G8DaaI5BeubpPzMens%2FBzX3FglJiVP%2FDHe%2BMXLq83KjxQNpMDiH5vVppLUDVVwQE7tUsErzbmWVQZaNgikfCCbT2y1%2F6OK%2FZZP68J%2FrZXdiN6J%2FSccM8%2F3igOucTDlIANuR8R86SrQT6K9hGNrLzpk94KYoZOiq%2Boi3CPFRt5dajANS4F%2FLzCDxOe0BRuzWJ724n3c83gfSJMjzoko4SAPpoSyDH5JARAcZ6rPv1BaSeUNMD0JPU4aWCVlmzDgoIvKBjqkAVpWaeb%2F3LP7srX4QOuusKqhMTSHILwALFOSaYritSnz8EQoOSlkY9FMxGi%2FBcCJOGW5437I%2FBU5QSdR%2F5dD1cK747SagbXWgpnft9dMh3y9kVrG%2BaJGXNZosk0BwJgvG%2BY6G749MTUJsDTiyiR7y9gmApci4OIkYnx4aCOvOnh%2BUMvB3xDQrjcAfAHcOTYvlpdlnfoWGXSpJRfrVvSzLLADvh3k&X-Amz-Signature=54ff8a964da36e9ace40974c1de723b92a705f2a381c80f9fe6c0e2baa55f81a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XIJAH7U%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4d1TQFHQek19U%2BmruF%2BKWtY71zGp5B2GTgGu0KDWHyAIhAMsGrTAE57jYv0%2FJ5xsBPhg9oWfkUrlXaOj6ADqDBbHTKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2F7jQGUTwPUZtOV%2BQq3APnxpUL6ne%2BzqEUAEQb766koIC307pEXv0pv%2FoShtBFSc3obeGEfDndyczG2zNuJtav3OlDgRsEDbJjxA8KmxG%2Bc8fL38xSn%2BgGy1DhBvDkrr3k3SFSqxBVYLpxB8oRDiNkbec6RumOQUzJaTPTzHElfB7NX%2BhBVU7A8EDQ2NB1jFQHkrpyDuqEdUezU%2BRQx6XM6hh8f1fXCpIEekPmOuKKtlHlMPOTn7IxHXgtFqzU2oQuOAHaakZ0RNEESjHvqklUH8Jk9KTCPB9A3ft3loWDH8WFMVR3bJfgWedz8SOPau%2B4961NLiK9IHjKJEYk1BHVygKPqGjPDjBEjf%2Bem3BB4xePyn0w50IehOK1J6x9XudWj5GFQFQdtZoAVidy77G8DaaI5BeubpPzMens%2FBzX3FglJiVP%2FDHe%2BMXLq83KjxQNpMDiH5vVppLUDVVwQE7tUsErzbmWVQZaNgikfCCbT2y1%2F6OK%2FZZP68J%2FrZXdiN6J%2FSccM8%2F3igOucTDlIANuR8R86SrQT6K9hGNrLzpk94KYoZOiq%2Boi3CPFRt5dajANS4F%2FLzCDxOe0BRuzWJ724n3c83gfSJMjzoko4SAPpoSyDH5JARAcZ6rPv1BaSeUNMD0JPU4aWCVlmzDgoIvKBjqkAVpWaeb%2F3LP7srX4QOuusKqhMTSHILwALFOSaYritSnz8EQoOSlkY9FMxGi%2FBcCJOGW5437I%2FBU5QSdR%2F5dD1cK747SagbXWgpnft9dMh3y9kVrG%2BaJGXNZosk0BwJgvG%2BY6G749MTUJsDTiyiR7y9gmApci4OIkYnx4aCOvOnh%2BUMvB3xDQrjcAfAHcOTYvlpdlnfoWGXSpJRfrVvSzLLADvh3k&X-Amz-Signature=ce67f4e63d219df39e4e13c4380bf9745a4bbf3434fee9f122d5b363a4c9b6e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
