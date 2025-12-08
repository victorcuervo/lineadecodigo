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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RMN63QK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T133849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUfl%2BOQ6Em1joQmulxJXa82y4B4pGlX%2B2T4%2F1UMezE3AIgWOwfhAyozyULkAVB%2BfcW4q48XYMMkEm4uIIueNd1lgoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAc3lmSpqKHzKtM6ircAymdgdS06Sb2HDOUlETG69oXAu2dyV1KWMvGlw9GI3fBfCm1nzaCkwOwyvqr5JJ8ILp%2BJlp2XcpPuueYhsJAHJXo8eoHCek%2FBvwNR%2F1Phrt1VAcCrP26BUXoiY%2BU4em2zj80SfYgQd6fTUJPIKYpQCu%2BEVPAfS9xfKpMRvXvmDh0jTbtQcMi6h6y4yXT1v8ZGQ1p63WfSL0BEAHfu2XKOlZ07rev1wamhaGCM39Lrz4MK3eojtH9vjEGZWSwTL5dP2ffJSsDaar8h9Xq4cbiCsXIaX%2FM%2FNAb0Fk0x87OiOAHbC%2FwwIBof7kbt4f2zRvtAU13J8W9ILrNuXuRi23FpfMURNeZkZ3yaoV37FdWbwA6AVxadfGz1TR8JBK%2FnHf1vgVJT0kw%2FQZqtm0YAjDprUrqzqLPW41QkmWwhw%2FT8rIjPXzRHH2EpI5r3dgnFQJrh9SBmr4dKmftW440lRSHaAEV3MT01iscqYgAIgPw49cTRlFik9pwlnHS8kTrHu%2BQw%2BbAafmpX3heMYK9vO7%2FrUldlNeAs50tE%2BtzrvazXuiA9teb%2F43pBRxlACDYhh3Z275oTE7YBvcLYdGqM5MpgxQO%2BeV0Y60uYgKEUmBFhJevgQ1%2B6NaoGMvtyGQJMNyP28kGOqUB7SbXyr5YMXJpfTZKu4ZZJtq9JOwJgiFiDhmjH9ads7s%2FBdgcjnzJ4ijuXBrRVuD%2BoLu6MQYguDxFuaSZkuBTJ0E4mW8dxfhUlL6k8e8qZE2ZbYXSWLrKSMVX7Ho9xnk1E4topGCd50H%2FeZQKhdBSMv%2FcuBFzn5Xx42eLCUQX2rtBrtwOd9f%2BhJsKkuDGpm5b5Ghe4IdSlFBsoMiXuj9%2Fw%2B%2B3LWUK&X-Amz-Signature=29f9ba62cc109a86f0d3aea4bc276b541add5bf4fdd18bec8e8b345947dc8ce5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RMN63QK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T133849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUfl%2BOQ6Em1joQmulxJXa82y4B4pGlX%2B2T4%2F1UMezE3AIgWOwfhAyozyULkAVB%2BfcW4q48XYMMkEm4uIIueNd1lgoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAc3lmSpqKHzKtM6ircAymdgdS06Sb2HDOUlETG69oXAu2dyV1KWMvGlw9GI3fBfCm1nzaCkwOwyvqr5JJ8ILp%2BJlp2XcpPuueYhsJAHJXo8eoHCek%2FBvwNR%2F1Phrt1VAcCrP26BUXoiY%2BU4em2zj80SfYgQd6fTUJPIKYpQCu%2BEVPAfS9xfKpMRvXvmDh0jTbtQcMi6h6y4yXT1v8ZGQ1p63WfSL0BEAHfu2XKOlZ07rev1wamhaGCM39Lrz4MK3eojtH9vjEGZWSwTL5dP2ffJSsDaar8h9Xq4cbiCsXIaX%2FM%2FNAb0Fk0x87OiOAHbC%2FwwIBof7kbt4f2zRvtAU13J8W9ILrNuXuRi23FpfMURNeZkZ3yaoV37FdWbwA6AVxadfGz1TR8JBK%2FnHf1vgVJT0kw%2FQZqtm0YAjDprUrqzqLPW41QkmWwhw%2FT8rIjPXzRHH2EpI5r3dgnFQJrh9SBmr4dKmftW440lRSHaAEV3MT01iscqYgAIgPw49cTRlFik9pwlnHS8kTrHu%2BQw%2BbAafmpX3heMYK9vO7%2FrUldlNeAs50tE%2BtzrvazXuiA9teb%2F43pBRxlACDYhh3Z275oTE7YBvcLYdGqM5MpgxQO%2BeV0Y60uYgKEUmBFhJevgQ1%2B6NaoGMvtyGQJMNyP28kGOqUB7SbXyr5YMXJpfTZKu4ZZJtq9JOwJgiFiDhmjH9ads7s%2FBdgcjnzJ4ijuXBrRVuD%2BoLu6MQYguDxFuaSZkuBTJ0E4mW8dxfhUlL6k8e8qZE2ZbYXSWLrKSMVX7Ho9xnk1E4topGCd50H%2FeZQKhdBSMv%2FcuBFzn5Xx42eLCUQX2rtBrtwOd9f%2BhJsKkuDGpm5b5Ghe4IdSlFBsoMiXuj9%2Fw%2B%2B3LWUK&X-Amz-Signature=a79a6bf4aac05798f391b33ed42fd7e6e0d2efa3eae86b9dbe39ad265a4e82ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
