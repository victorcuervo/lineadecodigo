---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5U57EB2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIEh97yCIVFOCk0dFICkMXZXXd57iyEJu%2F8cSnE5Z75vYAiEAmsFOpiLxjdxjVhNO5mrPg%2BDDofwDC2d2d8zS9i%2FkIFYq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDFd%2BbD8orK1pYTcahircAySUhMQ9SEUaTldUhhviT2KfTYQyfRgATqmcRJsO%2BW2lPSYNHX%2B1JuiUA36a%2BsaV6VpIDd%2Fx7z6GU4g7JyiqW7VkMhZpePFpVSniDZKngVKee%2BScutQULSYshYU3nMxBM%2Fkm4TtijGZ8hVpQztTYR11uM3%2B5jOMR4Rk30kK8y30V5xnqB438PAITVIrJ0tqOF3C6AAujaby1xkjQL2ZmTBcGdHmMvojpVzOpZ14Jp3Rxi6CMROW%2F8IQd6vWD0zm6h0xKXQEti%2FuKb5wfU0IJqWIiYdYZQVZpQWjDJBmt3gCgGl2o9E05zl0xkY9pRsXws7X5eTEXXIWUdR8hhXxh0arIAOQYtwA4z4E2abEj7mzCzQE6%2B0Cv3VeHY6zgEfHLU8XVrR%2BN5kzBatIctN5a9oXsHSRWXtjz7r8qnSFEbvE%2FdCIq%2FTL%2BqhL2%2FiLpMaM22PX8nkaYQF3AoeObnKPy5v33f7IOxhFbkwNRf2c5otg3mPp7DzcoziBZCLpkyNoVZuXB21bKKWWpt42uBXx%2BdrKJbVwyAGdvUUbYqt3Y%2Fmz21%2BPl4%2FFaFiENn0XxpqAHYhSSBenjLiyRZHhRQeJkorR3y4qvaHH7z2ACwtvNq40cYYm3lw8tcCy1tCvuMI60w8kGOqUBRkW7d%2Ffr9k7z1OgWRO9%2BAXF0hzBrAauBUEQNl3LLxKPnGR6%2BBl%2BEyKH9xueW4IQicUTdX3lSjgI4BbLJgi5cMVDhV8cCCpX3DVUYuvXQL6WnOWdI4sVbHA%2FwA5R959hfTDb1sDJsZaP%2F5PB8VOzHt5%2FQ4bj15eV0fvSLL2whDVNxx5kgNwtOxJMP8fQ9t8bNsXjOkvt%2FTlsg9eQ%2F4s0VsUuZsrSG&X-Amz-Signature=a74aaa89bd5e94a0a077d4d6133a830de078a4e47cd11316598264ec71256b83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5U57EB2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIEh97yCIVFOCk0dFICkMXZXXd57iyEJu%2F8cSnE5Z75vYAiEAmsFOpiLxjdxjVhNO5mrPg%2BDDofwDC2d2d8zS9i%2FkIFYq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDFd%2BbD8orK1pYTcahircAySUhMQ9SEUaTldUhhviT2KfTYQyfRgATqmcRJsO%2BW2lPSYNHX%2B1JuiUA36a%2BsaV6VpIDd%2Fx7z6GU4g7JyiqW7VkMhZpePFpVSniDZKngVKee%2BScutQULSYshYU3nMxBM%2Fkm4TtijGZ8hVpQztTYR11uM3%2B5jOMR4Rk30kK8y30V5xnqB438PAITVIrJ0tqOF3C6AAujaby1xkjQL2ZmTBcGdHmMvojpVzOpZ14Jp3Rxi6CMROW%2F8IQd6vWD0zm6h0xKXQEti%2FuKb5wfU0IJqWIiYdYZQVZpQWjDJBmt3gCgGl2o9E05zl0xkY9pRsXws7X5eTEXXIWUdR8hhXxh0arIAOQYtwA4z4E2abEj7mzCzQE6%2B0Cv3VeHY6zgEfHLU8XVrR%2BN5kzBatIctN5a9oXsHSRWXtjz7r8qnSFEbvE%2FdCIq%2FTL%2BqhL2%2FiLpMaM22PX8nkaYQF3AoeObnKPy5v33f7IOxhFbkwNRf2c5otg3mPp7DzcoziBZCLpkyNoVZuXB21bKKWWpt42uBXx%2BdrKJbVwyAGdvUUbYqt3Y%2Fmz21%2BPl4%2FFaFiENn0XxpqAHYhSSBenjLiyRZHhRQeJkorR3y4qvaHH7z2ACwtvNq40cYYm3lw8tcCy1tCvuMI60w8kGOqUBRkW7d%2Ffr9k7z1OgWRO9%2BAXF0hzBrAauBUEQNl3LLxKPnGR6%2BBl%2BEyKH9xueW4IQicUTdX3lSjgI4BbLJgi5cMVDhV8cCCpX3DVUYuvXQL6WnOWdI4sVbHA%2FwA5R959hfTDb1sDJsZaP%2F5PB8VOzHt5%2FQ4bj15eV0fvSLL2whDVNxx5kgNwtOxJMP8fQ9t8bNsXjOkvt%2FTlsg9eQ%2F4s0VsUuZsrSG&X-Amz-Signature=7fcb0395b60792000174b3d6cff835f23195b298ac65b2d4ac81138d4163a985&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
