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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G3TWZRB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmuZAyuNWWOJBUFcba5xd4C8s8aEQFoAORghn5Fp7J1gIgWGhLgG7vuKmdcTf5oZDw56Fn9AMNTvbJI%2F16R82cZGMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKkmJXEeaF03EN8yyrcA%2Brqc1eBs2WNUNbfOMtuxTMoXKxlzoxCYsb5%2BREofIewkIpCjX7GqIKc23jOLDlmdsQqzIKJg%2BOfikoPFcCm6nv71bOI9%2BrgvvBl%2BZELNR4xmq115uMm8ITeuKCF9peDJMRLn8sNY015GUBhR%2FHmPilqD6jh8YNVKNMB5LSfdwsChmIWd1IjHOmDAzcbaxd9P9na934gbalYrQ%2FjAZ4N2nEUJxJsvas1tpPML8itoTono7slJmrXahlcwuCOqHuc%2F%2FEYRd4cghMF%2Fj6rLtZh0Pi%2Fru7MZbDHixcUlxE%2F52oxg272RxC8zygbyIQknw0LWUN2auiOJInDhkTfNX2TpgYHf%2FVWk6Br9Q2ZdWmSxlbSHZmNyxjm1pIPyRhfZ%2FY6CPzIlZzukpQA%2FbvS7%2FP%2FDJBhNdDg9n7ALuoOEGyxlTAWtgVeUwaai%2FVxnXDSLKiTJcMcDIyEsecr7N%2BXfLAMr7dUdild5F1y8yc2%2B3Nzl0UKVb10qaQ7bb1%2FyN2NbaRzkYEU%2Fh5wA0KJuuqH7WRx73YP2YhZtb%2FyeD1nySJf%2BM4nTkPl%2FAoVe3WYAUBhR7zCrY5rmPoJxcvkMJH9Wsx8mOX75%2BO1JKoKr2Fwo6EO3fL3KBW8eJF%2BBDBhBR4xMNGtjMoGOqUBJkqyB8KIqmfdIiFzzCubzGSg1Lasi7p%2FO433N3ZZEd6Ur8AQQwsUUT%2F%2FOKsW6LR3PAn0HItUEObE7rfBRJjy5JNUAMfPVH8d8Pf1qnY08%2Ffc7un0G%2B%2Fkgh8HA%2BMXYynT%2FSwWvyFv7nVALDYIh2t2drkgjUnKPHOaYxFJ0sMckw5ziWUZY8bdVHCmC148gQQL9VEtIWzhWRNDSojeM0YGJF04Or1D&X-Amz-Signature=6d13e2062e45d1110e5ada7747991364f11a162d442963dfb8a251e8868d23c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G3TWZRB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmuZAyuNWWOJBUFcba5xd4C8s8aEQFoAORghn5Fp7J1gIgWGhLgG7vuKmdcTf5oZDw56Fn9AMNTvbJI%2F16R82cZGMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKkmJXEeaF03EN8yyrcA%2Brqc1eBs2WNUNbfOMtuxTMoXKxlzoxCYsb5%2BREofIewkIpCjX7GqIKc23jOLDlmdsQqzIKJg%2BOfikoPFcCm6nv71bOI9%2BrgvvBl%2BZELNR4xmq115uMm8ITeuKCF9peDJMRLn8sNY015GUBhR%2FHmPilqD6jh8YNVKNMB5LSfdwsChmIWd1IjHOmDAzcbaxd9P9na934gbalYrQ%2FjAZ4N2nEUJxJsvas1tpPML8itoTono7slJmrXahlcwuCOqHuc%2F%2FEYRd4cghMF%2Fj6rLtZh0Pi%2Fru7MZbDHixcUlxE%2F52oxg272RxC8zygbyIQknw0LWUN2auiOJInDhkTfNX2TpgYHf%2FVWk6Br9Q2ZdWmSxlbSHZmNyxjm1pIPyRhfZ%2FY6CPzIlZzukpQA%2FbvS7%2FP%2FDJBhNdDg9n7ALuoOEGyxlTAWtgVeUwaai%2FVxnXDSLKiTJcMcDIyEsecr7N%2BXfLAMr7dUdild5F1y8yc2%2B3Nzl0UKVb10qaQ7bb1%2FyN2NbaRzkYEU%2Fh5wA0KJuuqH7WRx73YP2YhZtb%2FyeD1nySJf%2BM4nTkPl%2FAoVe3WYAUBhR7zCrY5rmPoJxcvkMJH9Wsx8mOX75%2BO1JKoKr2Fwo6EO3fL3KBW8eJF%2BBDBhBR4xMNGtjMoGOqUBJkqyB8KIqmfdIiFzzCubzGSg1Lasi7p%2FO433N3ZZEd6Ur8AQQwsUUT%2F%2FOKsW6LR3PAn0HItUEObE7rfBRJjy5JNUAMfPVH8d8Pf1qnY08%2Ffc7un0G%2B%2Fkgh8HA%2BMXYynT%2FSwWvyFv7nVALDYIh2t2drkgjUnKPHOaYxFJ0sMckw5ziWUZY8bdVHCmC148gQQL9VEtIWzhWRNDSojeM0YGJF04Or1D&X-Amz-Signature=c1c30a0c06c27a7ef3d0554bf87cfa6cc1766b83da9b5dec26a39573c7da82a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
