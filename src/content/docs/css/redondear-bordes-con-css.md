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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGFYCJIK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T123214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFfHVl3dKKN2FbsWpJ%2BlXDqM%2B4Rt32p%2FlVVil8DqNaTAiABqNU%2FmS84B7PD0xphlGO1joJ%2Bc5P8s1TwIu2CoqEAJyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMlB3k0m3Qo4TcZ5CLKtwDNosbvW%2FDPkDZulLpqp9DriKLf7Eo%2FDZOYuPgazS8CUJUZpM6OVeJBC44EGL9TK%2Fv58EKedQxKzeGc2zJC28rHPlJAJhZZjcE0I%2Fp%2B3w5kPexktUpGcuOaZ2jSkQFvwd9Uc0OQ5EEc%2FUU13TAac%2FOVH64UuzLADf0mCUwa40s%2BrkB9WoXgNQvomDHiJ7eu7geVvjxlwBjv2zk4TLsGrhCzj%2FpJkCXgkiU8hZTikbtYs4BUcAMyJshuRNIBe1X82WSfZEtNN%2BVcnOyUXPDDEVNSdfEqfJAH1FSbkO6NGoLk2CL6qTNusxqI%2BrTuADcck9f5LHkc3o0TBRpz02DJvjBLnGO1Orm5VfrbGt1nWKH0czw9urGFzU06XdKeRR%2ByfcqdyUnYNPVdRhiylfyivyE3L5epGRo1JMpsbV1TbiyDGNhmAiZaCBrzyX9eskFtOAdklF15QUfNw9ssK9v7kxEmtx50Om83ipnQ3ax9rgH2RenOV1PP%2F6fa%2FA%2BGTm0h1TTVv7xtdsnVEtFTqYjFMl7GXvg%2BG2Od%2B9VvChVlgzo6Zwtmw5CNympPbn8nU5CIc45w%2BbZaJ%2FABXAmTey6kIJrFEg53jzy16eudE%2FKSv2qbsD7NpSL0cuvPQfLxsowjafQyQY6pgEJJS%2FLtp46amBv%2Bakh842fr10Gg1E0ML2qWKDKvlM%2BMWDmjiDLYr8UP55SpITTzoRZAl%2Bb%2BhvgNC0HSqhlAUShmhalDPMeL0QBaQJ3QHV7TbhKF9pb7wrGzvIid2iL41Or75KnSKlX2vXcwwl8CrP6i%2FBtpC2U0K55U35MY6aJUC%2BxrKD73qwR4Kuv5KG2auGWYyq%2B%2BeTnkHm6ynJ8XqhWRHjM3D6Z&X-Amz-Signature=b7efeb1cc833bacdc9db3d26842259051957e33959b2223a326774a353ac3e25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGFYCJIK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T123214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFfHVl3dKKN2FbsWpJ%2BlXDqM%2B4Rt32p%2FlVVil8DqNaTAiABqNU%2FmS84B7PD0xphlGO1joJ%2Bc5P8s1TwIu2CoqEAJyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMlB3k0m3Qo4TcZ5CLKtwDNosbvW%2FDPkDZulLpqp9DriKLf7Eo%2FDZOYuPgazS8CUJUZpM6OVeJBC44EGL9TK%2Fv58EKedQxKzeGc2zJC28rHPlJAJhZZjcE0I%2Fp%2B3w5kPexktUpGcuOaZ2jSkQFvwd9Uc0OQ5EEc%2FUU13TAac%2FOVH64UuzLADf0mCUwa40s%2BrkB9WoXgNQvomDHiJ7eu7geVvjxlwBjv2zk4TLsGrhCzj%2FpJkCXgkiU8hZTikbtYs4BUcAMyJshuRNIBe1X82WSfZEtNN%2BVcnOyUXPDDEVNSdfEqfJAH1FSbkO6NGoLk2CL6qTNusxqI%2BrTuADcck9f5LHkc3o0TBRpz02DJvjBLnGO1Orm5VfrbGt1nWKH0czw9urGFzU06XdKeRR%2ByfcqdyUnYNPVdRhiylfyivyE3L5epGRo1JMpsbV1TbiyDGNhmAiZaCBrzyX9eskFtOAdklF15QUfNw9ssK9v7kxEmtx50Om83ipnQ3ax9rgH2RenOV1PP%2F6fa%2FA%2BGTm0h1TTVv7xtdsnVEtFTqYjFMl7GXvg%2BG2Od%2B9VvChVlgzo6Zwtmw5CNympPbn8nU5CIc45w%2BbZaJ%2FABXAmTey6kIJrFEg53jzy16eudE%2FKSv2qbsD7NpSL0cuvPQfLxsowjafQyQY6pgEJJS%2FLtp46amBv%2Bakh842fr10Gg1E0ML2qWKDKvlM%2BMWDmjiDLYr8UP55SpITTzoRZAl%2Bb%2BhvgNC0HSqhlAUShmhalDPMeL0QBaQJ3QHV7TbhKF9pb7wrGzvIid2iL41Or75KnSKlX2vXcwwl8CrP6i%2FBtpC2U0K55U35MY6aJUC%2BxrKD73qwR4Kuv5KG2auGWYyq%2B%2BeTnkHm6ynJ8XqhWRHjM3D6Z&X-Amz-Signature=3847b672e972f1ff53741402749a35af2bf40306c771ed4d55037d6555b0963b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
