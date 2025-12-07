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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDDEOX4S%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T165959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuzoHKsFsZSm6GTfKMAY04LNg%2FGtOZJZxwefmhGhOBAAiEA9V4%2B4%2FJ5rVABuExq9wtSYq1ViSyGzKXxQTmjnkQ0ItMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsG199LgWoQn8XquSrcA4O9tuJjGOU8snmYTnlAd6X%2FC9yEZPU%2FA6%2BYUXUELKt9vlG7rljfmieR6Uiy5dqLBZLY2GoJhrbSuSinwZOUX3objLtm40IJteNS0p9mNRbfxwnWZWt%2F2pTIRVY66cTzQ%2FFXgqKaG%2BVYYvWqpRMYN2%2FSZlG3dqgOF9WQezfCNCLXmJuHBF6LsHSP%2BlBuqhq1fMkqPpfw%2FVVaB4OV6KoDT9KFezPoSwxcuFAz6%2F43xRv3pUiF7EwcI%2Bimxi3bMtWK3DVMAcO4Fc0Qh2UTXcwRIMg28CH%2Bidqyl5tmde0v028atd5tmZsW9q7OuP4tfnDteinJ3aJLYGcNBplixd6TzKAJjmC2RtLmWE3Gfi%2FycQqGBcs%2FJ%2BmiVH6vRMM5vsfEU0uOBx5g68eC2qY37nBF3FPmewPLpX9ovXW7bGrcCwYkHhn1Sq9aBlThMIdcrM8nY7H6hWW4iTH7INCVF1lv2QGQ36aJvi149OgMCEy5vdiUZvihDO%2Fv9lYdzRvSePQzzvCzYS0waeRqlA8wSwmq0fSBfhnARR%2BQNd11X5u3Mo8BE4e%2Fi5WsEdk4FD3zNj%2Bt6Si61Y0%2Bsb9CuS5f1lHbahlo4SOK2fAqDdOt1kdBsx8xp5xgTW4TPkLf2p%2B5MIHA1skGOqUB9WSWPOXev9NrwSu7RqFYIgpeb9lQgp7nc8qIM29IFfV%2FoTMgiLNpwCCngo9FL2SaaerAfCL4h9AMvVe9P50%2B3lkmoIg3Q%2B%2F7PJjNN9Bktkr1FB%2B%2BJHyc2sy8qsgXfUoT%2FZ9uRRaFWGlnHWqgB6e2KVYX%2Fh%2FuG1dSYWrAk4dO2yfnYmxTI2lfq0050mxIcWM3q6rTtuMr4TmMZdgev2BeBbawDXfF&X-Amz-Signature=afeb81838938ec21c03626df80136e5ba534bd5ffe528c919f88c90c8e07bcbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDDEOX4S%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T165959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuzoHKsFsZSm6GTfKMAY04LNg%2FGtOZJZxwefmhGhOBAAiEA9V4%2B4%2FJ5rVABuExq9wtSYq1ViSyGzKXxQTmjnkQ0ItMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsG199LgWoQn8XquSrcA4O9tuJjGOU8snmYTnlAd6X%2FC9yEZPU%2FA6%2BYUXUELKt9vlG7rljfmieR6Uiy5dqLBZLY2GoJhrbSuSinwZOUX3objLtm40IJteNS0p9mNRbfxwnWZWt%2F2pTIRVY66cTzQ%2FFXgqKaG%2BVYYvWqpRMYN2%2FSZlG3dqgOF9WQezfCNCLXmJuHBF6LsHSP%2BlBuqhq1fMkqPpfw%2FVVaB4OV6KoDT9KFezPoSwxcuFAz6%2F43xRv3pUiF7EwcI%2Bimxi3bMtWK3DVMAcO4Fc0Qh2UTXcwRIMg28CH%2Bidqyl5tmde0v028atd5tmZsW9q7OuP4tfnDteinJ3aJLYGcNBplixd6TzKAJjmC2RtLmWE3Gfi%2FycQqGBcs%2FJ%2BmiVH6vRMM5vsfEU0uOBx5g68eC2qY37nBF3FPmewPLpX9ovXW7bGrcCwYkHhn1Sq9aBlThMIdcrM8nY7H6hWW4iTH7INCVF1lv2QGQ36aJvi149OgMCEy5vdiUZvihDO%2Fv9lYdzRvSePQzzvCzYS0waeRqlA8wSwmq0fSBfhnARR%2BQNd11X5u3Mo8BE4e%2Fi5WsEdk4FD3zNj%2Bt6Si61Y0%2Bsb9CuS5f1lHbahlo4SOK2fAqDdOt1kdBsx8xp5xgTW4TPkLf2p%2B5MIHA1skGOqUB9WSWPOXev9NrwSu7RqFYIgpeb9lQgp7nc8qIM29IFfV%2FoTMgiLNpwCCngo9FL2SaaerAfCL4h9AMvVe9P50%2B3lkmoIg3Q%2B%2F7PJjNN9Bktkr1FB%2B%2BJHyc2sy8qsgXfUoT%2FZ9uRRaFWGlnHWqgB6e2KVYX%2Fh%2FuG1dSYWrAk4dO2yfnYmxTI2lfq0050mxIcWM3q6rTtuMr4TmMZdgev2BeBbawDXfF&X-Amz-Signature=3614d5d64d1d6ac3a6342a9b7d96f3260794e387b9314a8ec4d2c900d5f41c34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
