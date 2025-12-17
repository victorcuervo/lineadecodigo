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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L332B3Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaAo5HdjXBpTgW82uxfgnFiPufEb%2F0Gc6pGllBNuykSgIgDiTVdGeYwCI4XGb2vIzZPwLyDPlgIoR3Z7s8XX6OObgq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLisHH31Q93zL1QtdCrcAxejVaqyuWP6trby6fEKgbZqp5olvhdWjOIzxPk4yO%2Bsfe2FUkLMT6hF27PtWupUx5DhQZx%2BRFd%2BpY2QqHFSJV1BdlY%2FBGKHaEHBnL1gVLQ5T%2FUOaX%2FC24wXRf4sVk3cjQxG3kdgLGELX%2BviWn%2Bg7R1nGMDbHjZPCpg0dCSOvnd9ViGYBbAxCnJGAKgSFSCJInYdKGLjsK5F%2FM6Hh2mS%2FOgv5nqOI7PrMJvGx2YrRUu%2FisRNPn%2FCa9tPDUs5LqX%2FmNuzvnK0rbGjcrW032aZhuaOTqT4jnMqz%2BrcHGVNtUR4kk18EhYmgbR9Pt%2FcGO1PvKusfxCQThObagpuXuZd5%2B4JO7zknEGt6BWJlmRS4vYuirZbSY2DYPaZ57yEYPgoFJkZeEWpmpKC3GXKct6aAaDtDZ52wSF%2FVgAzMtXBNuSzWWHM%2FKYXtoP2NCM%2FPQek4YBiO0kQ4vlKycKXF%2FD%2Br2m%2Bd%2BP3CHAMYxkvr2I0Q1%2FOSYpURz4TU7dhQOp4uQvDtCgqOaNhX%2BL34NgwxGghQdjScsFyQVDqzGFWuTS8ILQPERxp6xfqZes3A6miXvmjqMu6AyxYxqp%2BvpSwLHK%2FGC81oG%2BWlZH2pwFLjKrc9h6Ecw9B%2FmlnBHw7Vf6NMPSdicoGOqUB8avsDQF%2B%2BWH9bVnr5s8mm65XWHh1ZR2mj09sK9WcKenUx1JT%2Bkn9iboKdSJTjLblTZCPWwCtwWsmup%2BgaFxzKG1a%2Fj8k7ADg2KSLcoMtkPFZUsxY%2FIOvk68L3wja0cR4b3EDaLKRmsBhsfDtcua0Hglc448IdWYdTppT8J%2FeejyND99OHvAw%2Fx988jTIv6vglE4bfemrYMtGGeHelr3PwRa6iH%2Fz&X-Amz-Signature=675a893f16c5d4ef2b998d3ee5bff9c638582dbc7fe548f58947b39adf3054bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L332B3Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaAo5HdjXBpTgW82uxfgnFiPufEb%2F0Gc6pGllBNuykSgIgDiTVdGeYwCI4XGb2vIzZPwLyDPlgIoR3Z7s8XX6OObgq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLisHH31Q93zL1QtdCrcAxejVaqyuWP6trby6fEKgbZqp5olvhdWjOIzxPk4yO%2Bsfe2FUkLMT6hF27PtWupUx5DhQZx%2BRFd%2BpY2QqHFSJV1BdlY%2FBGKHaEHBnL1gVLQ5T%2FUOaX%2FC24wXRf4sVk3cjQxG3kdgLGELX%2BviWn%2Bg7R1nGMDbHjZPCpg0dCSOvnd9ViGYBbAxCnJGAKgSFSCJInYdKGLjsK5F%2FM6Hh2mS%2FOgv5nqOI7PrMJvGx2YrRUu%2FisRNPn%2FCa9tPDUs5LqX%2FmNuzvnK0rbGjcrW032aZhuaOTqT4jnMqz%2BrcHGVNtUR4kk18EhYmgbR9Pt%2FcGO1PvKusfxCQThObagpuXuZd5%2B4JO7zknEGt6BWJlmRS4vYuirZbSY2DYPaZ57yEYPgoFJkZeEWpmpKC3GXKct6aAaDtDZ52wSF%2FVgAzMtXBNuSzWWHM%2FKYXtoP2NCM%2FPQek4YBiO0kQ4vlKycKXF%2FD%2Br2m%2Bd%2BP3CHAMYxkvr2I0Q1%2FOSYpURz4TU7dhQOp4uQvDtCgqOaNhX%2BL34NgwxGghQdjScsFyQVDqzGFWuTS8ILQPERxp6xfqZes3A6miXvmjqMu6AyxYxqp%2BvpSwLHK%2FGC81oG%2BWlZH2pwFLjKrc9h6Ecw9B%2FmlnBHw7Vf6NMPSdicoGOqUB8avsDQF%2B%2BWH9bVnr5s8mm65XWHh1ZR2mj09sK9WcKenUx1JT%2Bkn9iboKdSJTjLblTZCPWwCtwWsmup%2BgaFxzKG1a%2Fj8k7ADg2KSLcoMtkPFZUsxY%2FIOvk68L3wja0cR4b3EDaLKRmsBhsfDtcua0Hglc448IdWYdTppT8J%2FeejyND99OHvAw%2Fx988jTIv6vglE4bfemrYMtGGeHelr3PwRa6iH%2Fz&X-Amz-Signature=d162f707b0528beb195e8819aa2a873450119a2f3cde254443ca1bb3693051e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
