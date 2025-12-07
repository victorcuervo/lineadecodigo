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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUS6UZCZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T213320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC56vGbJW6ynCY8oNUNn5%2FJ8zQRKzR9pAlbxcjbImM7XAIhAKNEXb8DU%2FlF%2Fr5jRKtPhzCo05t9M2r%2BHb71RQnCeYJTKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5PjhvSrimhn6eRH4q3AM6mpvqOlP4WkwUeHALKwXb9rE9k1ZQBZ7Ihav5EzyRJssE37mx%2FM9ofJZjODPRVxcsFfQ%2BNxywSg6zp7K8n967SYLp0de50yfRdsk97%2BuljtApTcby6IEYPq3%2BQ8kbX8JoIzlWJlhMgUpTmXpWVfbAyj9MapTx1FJHIehhzb1Gshw%2B8qPK2gkBt7feEzTudaJEQDHWjm7G4g9R5tQTvrnKJPD1uZoUCEo6T0chAP2W6yGqbdiFu%2FyFEyx13ybyrE3slw64krce0Ji2tI1cxafDVZEFgdyS1vMvSM1kuCXorfotDZKVJtCzfM1f7vtgMF3B2fb%2BwwQrZZfpFCrLvDlThSt%2Fv1jdQ7X0QIXcN9kgIjuCXwkWZiHfZrBce1KU9qE5ndsYGn9JLLewF1KXFqTjV3DIWLCmAzb2oDvJD3W76Gir1W3S98Svx5jLgS0Ng8RLsTuyDtiZoJu0AsHBcm3l2AGW2PaJn27fxLg3461keR36FyGsQT0PlzErBF417StAIDkB19X2TvBxI3rEuHr5FU3v%2Fzy5%2BHI51xMO6sd0N5H7N9jAv7I%2F5IWt7LopTjnuAZisv5S6jbxOrGCUyOIW55HR9iReFc939RXGo4KZMaLGekqi79TzE80n0TDbx9fJBjqkAWzH9oDr6y6Am5h6jQ0p8OI4XTFs4ehrFmuLsJWBb9Uxd3GXtbLE5SMa2VPezWOOEmHVk8%2BcxFzcen6S2OcVv3qGnAnJBm3u6G9Ws0NDSJ2sB2ZrAraFvzvYFwWNSf052ktnmTjmwK%2BRqmNeiIfCiOsFZZmVIFIy3CgAnP1n3s74Y8OxgqfsMfGuDuZfqfqImalhaFVhmknQXktAgaOdoVbiUOax&X-Amz-Signature=55d43f950d9d8195c174438a11381eafb09a369fe5b138cfb3751d19b37414d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUS6UZCZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T213320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC56vGbJW6ynCY8oNUNn5%2FJ8zQRKzR9pAlbxcjbImM7XAIhAKNEXb8DU%2FlF%2Fr5jRKtPhzCo05t9M2r%2BHb71RQnCeYJTKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5PjhvSrimhn6eRH4q3AM6mpvqOlP4WkwUeHALKwXb9rE9k1ZQBZ7Ihav5EzyRJssE37mx%2FM9ofJZjODPRVxcsFfQ%2BNxywSg6zp7K8n967SYLp0de50yfRdsk97%2BuljtApTcby6IEYPq3%2BQ8kbX8JoIzlWJlhMgUpTmXpWVfbAyj9MapTx1FJHIehhzb1Gshw%2B8qPK2gkBt7feEzTudaJEQDHWjm7G4g9R5tQTvrnKJPD1uZoUCEo6T0chAP2W6yGqbdiFu%2FyFEyx13ybyrE3slw64krce0Ji2tI1cxafDVZEFgdyS1vMvSM1kuCXorfotDZKVJtCzfM1f7vtgMF3B2fb%2BwwQrZZfpFCrLvDlThSt%2Fv1jdQ7X0QIXcN9kgIjuCXwkWZiHfZrBce1KU9qE5ndsYGn9JLLewF1KXFqTjV3DIWLCmAzb2oDvJD3W76Gir1W3S98Svx5jLgS0Ng8RLsTuyDtiZoJu0AsHBcm3l2AGW2PaJn27fxLg3461keR36FyGsQT0PlzErBF417StAIDkB19X2TvBxI3rEuHr5FU3v%2Fzy5%2BHI51xMO6sd0N5H7N9jAv7I%2F5IWt7LopTjnuAZisv5S6jbxOrGCUyOIW55HR9iReFc939RXGo4KZMaLGekqi79TzE80n0TDbx9fJBjqkAWzH9oDr6y6Am5h6jQ0p8OI4XTFs4ehrFmuLsJWBb9Uxd3GXtbLE5SMa2VPezWOOEmHVk8%2BcxFzcen6S2OcVv3qGnAnJBm3u6G9Ws0NDSJ2sB2ZrAraFvzvYFwWNSf052ktnmTjmwK%2BRqmNeiIfCiOsFZZmVIFIy3CgAnP1n3s74Y8OxgqfsMfGuDuZfqfqImalhaFVhmknQXktAgaOdoVbiUOax&X-Amz-Signature=04b21e24b0c803211dadb9d25dc3804c65e87e65e0a54125253373db4b91ae0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
