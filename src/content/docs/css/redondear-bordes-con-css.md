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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCAHP6O6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T020641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxocwNFeTbYafkSthSvudVy9l36kVcgNrs7xoMQbiwBAiAiEp%2FeW5sJr79BnlAGkSI%2FNY4Lr0%2Ba0Fi%2BMA7xKKj%2FuCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNQK5q%2B91Z9LwcR6JKtwDoCjm6wa14Jz%2F3Ei2LFS38Jvpqf0oSm67WTOUwQLz7MHCOtd6KDa6jczRbohjVQEiz3F89aPAnHpddgABrf%2Fp4Jw%2BYeEy%2BYdeOYPOxe7IV4RpwLUf14C1dkrL6%2BlOR8X6GoAwfZKnNL8hnMeQWqyq9Ri%2FVItHjbiuIaADnZcfvVynMxFpi3Q1hCletKCAfZ9zBNniPKsPQHr4hwUAG1vRfq3gAMMHwMCxMNemz8YsLHSU1LGUQMeHLuKaBHt%2BUgn6VmM3N2skg5XQZWZKWeogcaZUmymj%2BUnAOStE3ZN2%2FqPbst8gS25sqyxxrof8ALRvZ2LnZO3faQEPQ2ft2ROizVu31AsgoXPlHlspcaoSYbSNdQBUoJ0aYJ2%2FvnIro%2BbQaNRBrc4WCbk93fL6HCtbk0VNJK5pce5YGoj%2Fp5pbz4%2F0Y4q42jZwe7vvwUyTiSM%2FiX1OxYa6S3uUE3vk2y5jtELgkDx9zMHZXks1pgAo6%2Fg6KM%2F%2B7z0o0WecbpU7jSH%2B8K9JONQU24SJpLrk2UJJ1G11SaHv%2Br2T0g61vrQHVdHiEAdN0n2v8qFmiMkFJRZj%2FmYT%2BzudPHjkjUfBG9RgjSCaXcOam6eMZ5OqlsoNC7IfY34X%2FOFLs7HvUtgwwNHYyQY6pgExaJO8HyI%2B8RmK3eskuLPvJ8GreLpBSsV%2FuMHioIgUhAqKAglqYcMmXNYvO6VWp%2FM5yqIm%2Fh9uljSD15S8hNTLtd6qdK%2Bs4CbeYtcaUZQ0KUhCokhOyesOINXTppvKsjIPHqBQcoa5Sow3FeUNGv6Ycq8GHckqrKReRFLhXCMyPLXmcb5GWv%2B91aDMHQlmI70VtLwHuZYYcWi%2FQY3DC4YIrRfqJGDs&X-Amz-Signature=f229de900bd460bb3730a7a700fc2c20c8ed18565b7b956660837e126c7b1c58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCAHP6O6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T020641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxocwNFeTbYafkSthSvudVy9l36kVcgNrs7xoMQbiwBAiAiEp%2FeW5sJr79BnlAGkSI%2FNY4Lr0%2Ba0Fi%2BMA7xKKj%2FuCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNQK5q%2B91Z9LwcR6JKtwDoCjm6wa14Jz%2F3Ei2LFS38Jvpqf0oSm67WTOUwQLz7MHCOtd6KDa6jczRbohjVQEiz3F89aPAnHpddgABrf%2Fp4Jw%2BYeEy%2BYdeOYPOxe7IV4RpwLUf14C1dkrL6%2BlOR8X6GoAwfZKnNL8hnMeQWqyq9Ri%2FVItHjbiuIaADnZcfvVynMxFpi3Q1hCletKCAfZ9zBNniPKsPQHr4hwUAG1vRfq3gAMMHwMCxMNemz8YsLHSU1LGUQMeHLuKaBHt%2BUgn6VmM3N2skg5XQZWZKWeogcaZUmymj%2BUnAOStE3ZN2%2FqPbst8gS25sqyxxrof8ALRvZ2LnZO3faQEPQ2ft2ROizVu31AsgoXPlHlspcaoSYbSNdQBUoJ0aYJ2%2FvnIro%2BbQaNRBrc4WCbk93fL6HCtbk0VNJK5pce5YGoj%2Fp5pbz4%2F0Y4q42jZwe7vvwUyTiSM%2FiX1OxYa6S3uUE3vk2y5jtELgkDx9zMHZXks1pgAo6%2Fg6KM%2F%2B7z0o0WecbpU7jSH%2B8K9JONQU24SJpLrk2UJJ1G11SaHv%2Br2T0g61vrQHVdHiEAdN0n2v8qFmiMkFJRZj%2FmYT%2BzudPHjkjUfBG9RgjSCaXcOam6eMZ5OqlsoNC7IfY34X%2FOFLs7HvUtgwwNHYyQY6pgExaJO8HyI%2B8RmK3eskuLPvJ8GreLpBSsV%2FuMHioIgUhAqKAglqYcMmXNYvO6VWp%2FM5yqIm%2Fh9uljSD15S8hNTLtd6qdK%2Bs4CbeYtcaUZQ0KUhCokhOyesOINXTppvKsjIPHqBQcoa5Sow3FeUNGv6Ycq8GHckqrKReRFLhXCMyPLXmcb5GWv%2B91aDMHQlmI70VtLwHuZYYcWi%2FQY3DC4YIrRfqJGDs&X-Amz-Signature=9ac2d52daebfca7231196d0e3c413378d8213137ba596de3531f1ee5bb84c31b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
