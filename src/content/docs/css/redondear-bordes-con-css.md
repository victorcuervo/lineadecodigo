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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGMCRB4C%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T221651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRW5z0Y3R%2BQt%2FPbK1BuyqsTFmBEAo%2FDOy2CodHx6tQDQIgIBBU5Fc5gwbT6VUF%2F1dzoU01vkUNg6HdrDWam3yQ6Tsq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLci8LBqs9DnVn0pQircA1TsYgmBQN21IJFJiYeGLDL6n22rcRc%2FY%2B0CB0bBmfTAq63gTP1Ec1O7dCLS3QerMwP37syY1XN6fGgQVEpl0Ipw%2BA%2Fu72IC7TBR2B%2FcovMyvX1kmZqfIhtlnwvqSPxacVMCEB227EPyaUkPwncHGTLpuglzhmf0s7Dy0lvY%2FAmLQTh0UbvaR83WfQNW%2FtId23pGDB5yHKQB9dhx8BZMFzJCTZES1Sk7HEcMeEcv0tf1m9Klb92ywc9bk5cC4LoXTtH9BMDCb%2BhsLWzxZnhfr9bJlIy%2BquqrxqvvFDDhc5xS0k%2FR2HD%2BjDRVHYaZTNw6BLgYYMGjG1M1VhL1vKpeyvoHZvf0dIBTYT%2FiuRoOiKuSm5hyeBRwaL%2BNB0p2x8PYtePgr%2BnH%2BzcB7bHXPAqyGFeE9M9VwJeLbTHgM6BbyUzY8mYj%2F%2B%2F0GSRpZN4MgEM8mUV%2FS0fZegpNByUE%2FjgcZVvt2wLK8bJ86ssavOpmGu54MKJ%2B%2Btbasuf6VH9I2OFENSTLj2p%2Ft5qz0Rtk6V8Ib%2BaZUUaDGCjDifavX7BSnwMqYU4NY9tUgThH6NLRZ9BetXvEPvlNwsbMq3d2wpFfGh6TQBm8EBct2OF1uSPBNw3Uxr8QmDEa5%2FV6JF6UMNzT0skGOqUBRBomJ4oYnc37i2gsE4RSY6ObotzpIPkciM3fmpGf39UfjLklBIGioMSkthxLexFlyAF53tydwZKIQFALQaAsIs8JvYNwX%2BTG3zyA%2Bl7CBXEGjTacOg7j%2B7YvvSa98h0fWCNTEYJ6wwuwwdpK2kZQZPJ4g%2F34WpfbAvdOJdBcZrDdh7Wpv%2Blnv9y%2B5CUCQycQY4Vx7fIPCIpT6f%2F6DnDYwXQD0rhD&X-Amz-Signature=ad6b0b42e8ac874250056649f61df6069ce509acd46416cd291cf2fd55adf390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGMCRB4C%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T221651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRW5z0Y3R%2BQt%2FPbK1BuyqsTFmBEAo%2FDOy2CodHx6tQDQIgIBBU5Fc5gwbT6VUF%2F1dzoU01vkUNg6HdrDWam3yQ6Tsq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLci8LBqs9DnVn0pQircA1TsYgmBQN21IJFJiYeGLDL6n22rcRc%2FY%2B0CB0bBmfTAq63gTP1Ec1O7dCLS3QerMwP37syY1XN6fGgQVEpl0Ipw%2BA%2Fu72IC7TBR2B%2FcovMyvX1kmZqfIhtlnwvqSPxacVMCEB227EPyaUkPwncHGTLpuglzhmf0s7Dy0lvY%2FAmLQTh0UbvaR83WfQNW%2FtId23pGDB5yHKQB9dhx8BZMFzJCTZES1Sk7HEcMeEcv0tf1m9Klb92ywc9bk5cC4LoXTtH9BMDCb%2BhsLWzxZnhfr9bJlIy%2BquqrxqvvFDDhc5xS0k%2FR2HD%2BjDRVHYaZTNw6BLgYYMGjG1M1VhL1vKpeyvoHZvf0dIBTYT%2FiuRoOiKuSm5hyeBRwaL%2BNB0p2x8PYtePgr%2BnH%2BzcB7bHXPAqyGFeE9M9VwJeLbTHgM6BbyUzY8mYj%2F%2B%2F0GSRpZN4MgEM8mUV%2FS0fZegpNByUE%2FjgcZVvt2wLK8bJ86ssavOpmGu54MKJ%2B%2Btbasuf6VH9I2OFENSTLj2p%2Ft5qz0Rtk6V8Ib%2BaZUUaDGCjDifavX7BSnwMqYU4NY9tUgThH6NLRZ9BetXvEPvlNwsbMq3d2wpFfGh6TQBm8EBct2OF1uSPBNw3Uxr8QmDEa5%2FV6JF6UMNzT0skGOqUBRBomJ4oYnc37i2gsE4RSY6ObotzpIPkciM3fmpGf39UfjLklBIGioMSkthxLexFlyAF53tydwZKIQFALQaAsIs8JvYNwX%2BTG3zyA%2Bl7CBXEGjTacOg7j%2B7YvvSa98h0fWCNTEYJ6wwuwwdpK2kZQZPJ4g%2F34WpfbAvdOJdBcZrDdh7Wpv%2Blnv9y%2B5CUCQycQY4Vx7fIPCIpT6f%2F6DnDYwXQD0rhD&X-Amz-Signature=6184835ed801a9d966a66b0995c01249710dbaac921fcd485d561cf51d03d922&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
