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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJIOVRHK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK8ejydpy2pR6aWcv4%2F7kpyQi7eslucXn0YOT4Up18wgIgfkgvkB1rJ1ueyHx%2BeSB5HgHH9WA0AoNg1Qqd8WGjNAkq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDL0Ki58apKZCEihIDCrcAzVYaEUNRn8UZ1nRYcXV%2BadirJ8sHg4XhOgJsyfpxuJ%2BPN1wpmXVxROFvRRZW5AKnr%2FCSmr9jhF1D4uIHL0qerew7VCYB9zmUhNPjY1JNsCk7%2FPNyoT4zCBpmayrK9TX6iEfCPGyoZEo0Dt5urIe5JWs%2Fc773SF603vlZAR9NWTsyEqZ4JuK9e8nS0f7p7vl2NgjL2P70E4kh3plfyW5T5FrImqk6jY2esPkFiY4kir97Zmry8fuAErfc5dI4nu%2F865XiLubT1MJTBbSunCX0zjlVf%2BvNlTkthJohoV4a2OGAs5hCayIksCxWfB9byMnbNKirPiqWqIfoyNFBCLFztpVYT0FdGSP4Qiuwt6Ljl5yl3%2FgutM2x%2FnATbni2ZMFMYdSWzx4mqyvjEW0o2WdybDTDQ5XcmIPtpdx%2Fn3IoHfFbBunm7yS92JKHXuc2j6lwpSenMEUOFT3IvWFSktC6UNmB4gFIvr4CxktV9bSEToAbvzxtdSw0X3WckhWxjqW5BkyXgITndGSswjBpDG82uLB6t%2BJ4Q%2F3HxAm939BUbqds9BWwYsnkD7v63ACTwnbQKL%2BjQKPpbMqDlqOxOk1BzcSmlbecwn06LCNRAqHahHXOuNDQftAygmpQtA4MPiez8kGOqUBE9eqYuKmKsfbrq1V1ZunFdF9o9EjriKpFxTFyeN1CWIuTYevfRqyL8tRwZnETYauuS7XyWuHE0WiSVEXI5omB47L6lkimtAbkRhdTbMLf5cdae0EfBmAcvn3epT8TWlPHR9lN5fKWErokfWAEwl%2Fq7Gjrxpy%2FdPCURUSQhtBRUnEZLDs1RlnBowWsw7HM6ZtASYvhqaRn386w2dzp%2FapHP%2FUWWNP&X-Amz-Signature=e67765de9ab25ff01878b46478851024279228c6c5bad282add20b8529751841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJIOVRHK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK8ejydpy2pR6aWcv4%2F7kpyQi7eslucXn0YOT4Up18wgIgfkgvkB1rJ1ueyHx%2BeSB5HgHH9WA0AoNg1Qqd8WGjNAkq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDL0Ki58apKZCEihIDCrcAzVYaEUNRn8UZ1nRYcXV%2BadirJ8sHg4XhOgJsyfpxuJ%2BPN1wpmXVxROFvRRZW5AKnr%2FCSmr9jhF1D4uIHL0qerew7VCYB9zmUhNPjY1JNsCk7%2FPNyoT4zCBpmayrK9TX6iEfCPGyoZEo0Dt5urIe5JWs%2Fc773SF603vlZAR9NWTsyEqZ4JuK9e8nS0f7p7vl2NgjL2P70E4kh3plfyW5T5FrImqk6jY2esPkFiY4kir97Zmry8fuAErfc5dI4nu%2F865XiLubT1MJTBbSunCX0zjlVf%2BvNlTkthJohoV4a2OGAs5hCayIksCxWfB9byMnbNKirPiqWqIfoyNFBCLFztpVYT0FdGSP4Qiuwt6Ljl5yl3%2FgutM2x%2FnATbni2ZMFMYdSWzx4mqyvjEW0o2WdybDTDQ5XcmIPtpdx%2Fn3IoHfFbBunm7yS92JKHXuc2j6lwpSenMEUOFT3IvWFSktC6UNmB4gFIvr4CxktV9bSEToAbvzxtdSw0X3WckhWxjqW5BkyXgITndGSswjBpDG82uLB6t%2BJ4Q%2F3HxAm939BUbqds9BWwYsnkD7v63ACTwnbQKL%2BjQKPpbMqDlqOxOk1BzcSmlbecwn06LCNRAqHahHXOuNDQftAygmpQtA4MPiez8kGOqUBE9eqYuKmKsfbrq1V1ZunFdF9o9EjriKpFxTFyeN1CWIuTYevfRqyL8tRwZnETYauuS7XyWuHE0WiSVEXI5omB47L6lkimtAbkRhdTbMLf5cdae0EfBmAcvn3epT8TWlPHR9lN5fKWErokfWAEwl%2Fq7Gjrxpy%2FdPCURUSQhtBRUnEZLDs1RlnBowWsw7HM6ZtASYvhqaRn386w2dzp%2FapHP%2FUWWNP&X-Amz-Signature=756b4c3f4ea8010a514cb4216495ce8fdbb21ecdabb0bfb6d0fb69b84eae449b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
