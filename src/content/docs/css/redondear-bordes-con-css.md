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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IHMM5YZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T141336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACcxgIv7MlGkvS5GGvdtWmXzs0tkMFiot4dYS6EEa%2BiAiEAxIYaT8AOvtwTB2x3YfH6qpe9fTFbsKEN1lvmRDuK3XgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPeLsASEZWUFaLZQ7ircAy4%2BUaOfO3tnhy%2BNIO5gyon3ze%2Bsr8Ej%2Bu2kbkg%2F6W3Z4Z1eXyI6aDwuVEO90LcPW2swubh4%2BDcsoY3J2u43ywH2HE7hVxrRWte5jxFzALW%2F6fMtdjS642u2IrFtBU2NJ35MND5dRthnvYs8m2YfS6364IE68SQKciDrBdJvnXvTEFdQ3v%2FYn6%2FzbUqyKn%2Fdv6RPFG5g2EICh%2FuPHVfLJStec5JIr76ZOHJOtkaofhny2J3WwaUto3BcA0CbxwEKF2bVaJ2IYPfduFrS9F5ZZnwCsPnEQC7T6eDifJgZEQhFQ3aNfteT17YIjZMZ9YOJiaMcCuv2F7i2K55pTkYvBSLX6zpvpRPm9xvxaNDcoJcOkhKtOBSsBqO7v%2F%2FyIRzyS40pb2umdwq9%2Bmt9m6mD3kUoSLTPwKYmn%2FWxG0nB3zud43jOm7nhwy5LKClO8GcjMSMx9IRUprNr%2FpMqVcyUURP8CPrauT444kk3f8b%2FoxDxs6syY7Dh3HqQfZWzuqRPNz0BC0gBx%2FXEtiHZ4ld1O3Jl8zhHmJQF4fmjmdp%2FEOP8uTBmhObqQYQctqPhCgCzN3khWODm7Qg4YmaDRIi5jSgRSJi2Oe4yHnCb6Ob4DWLN4XnBwal2Cgu5R7pWMLCQ28kGOqUBIazsb%2FgZ1vRk1bNxzvie35CQODwEUnaBIszE2pTU8YDwNKf6JiIIFWQzlWk%2BKtkVOYBj5lG%2FGc8dW4GFhVtsrrzSeZUq67uvOW4lqW0GeYWAV8wCv4UNxRyl6M%2F9Hf3ccslzf6H%2FQOnGFAaGCGxkQzNsn69nuElx15z2wRLjyl6YYUsKtjCbWI%2B0OzobS8H4%2F9cgN%2FLd7L1SmxJUD4lbFbXKAdYC&X-Amz-Signature=fd4e680c5b7e3600dd1b7bf08621417dd4dab1cc3df789567c4e591129389ecd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IHMM5YZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T141336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACcxgIv7MlGkvS5GGvdtWmXzs0tkMFiot4dYS6EEa%2BiAiEAxIYaT8AOvtwTB2x3YfH6qpe9fTFbsKEN1lvmRDuK3XgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPeLsASEZWUFaLZQ7ircAy4%2BUaOfO3tnhy%2BNIO5gyon3ze%2Bsr8Ej%2Bu2kbkg%2F6W3Z4Z1eXyI6aDwuVEO90LcPW2swubh4%2BDcsoY3J2u43ywH2HE7hVxrRWte5jxFzALW%2F6fMtdjS642u2IrFtBU2NJ35MND5dRthnvYs8m2YfS6364IE68SQKciDrBdJvnXvTEFdQ3v%2FYn6%2FzbUqyKn%2Fdv6RPFG5g2EICh%2FuPHVfLJStec5JIr76ZOHJOtkaofhny2J3WwaUto3BcA0CbxwEKF2bVaJ2IYPfduFrS9F5ZZnwCsPnEQC7T6eDifJgZEQhFQ3aNfteT17YIjZMZ9YOJiaMcCuv2F7i2K55pTkYvBSLX6zpvpRPm9xvxaNDcoJcOkhKtOBSsBqO7v%2F%2FyIRzyS40pb2umdwq9%2Bmt9m6mD3kUoSLTPwKYmn%2FWxG0nB3zud43jOm7nhwy5LKClO8GcjMSMx9IRUprNr%2FpMqVcyUURP8CPrauT444kk3f8b%2FoxDxs6syY7Dh3HqQfZWzuqRPNz0BC0gBx%2FXEtiHZ4ld1O3Jl8zhHmJQF4fmjmdp%2FEOP8uTBmhObqQYQctqPhCgCzN3khWODm7Qg4YmaDRIi5jSgRSJi2Oe4yHnCb6Ob4DWLN4XnBwal2Cgu5R7pWMLCQ28kGOqUBIazsb%2FgZ1vRk1bNxzvie35CQODwEUnaBIszE2pTU8YDwNKf6JiIIFWQzlWk%2BKtkVOYBj5lG%2FGc8dW4GFhVtsrrzSeZUq67uvOW4lqW0GeYWAV8wCv4UNxRyl6M%2F9Hf3ccslzf6H%2FQOnGFAaGCGxkQzNsn69nuElx15z2wRLjyl6YYUsKtjCbWI%2B0OzobS8H4%2F9cgN%2FLd7L1SmxJUD4lbFbXKAdYC&X-Amz-Signature=a90ef0807797c782503d13cc17565a38ba738fb7798aac3a43e955a8c336751a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
