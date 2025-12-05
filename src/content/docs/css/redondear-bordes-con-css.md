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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RBDTRJ2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T012242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkVjRmZjNIppVV97mnnm1wGoJ33I9Z44DvKM9inTBCGAiEA9QuSzS3FyYLE76gJGFcyHmFQ8sTP9z2QbOxDXcVki1oq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBxlXtRPBNOmJZCyXircAyX6mC5AT%2FOqme6G50QhqjBYgug%2F6K69YjzoNgA8VgoUzyTcfWhqoKV215HQmE9Irt9K3qXA7kdpBru%2FjEet56M%2F8WZEFPXf7zFc%2B4yuU9U7IlupLQrNe6xq9XiQy1IfGaTTP1N5uQduPMzoxeM3qiXTEDDbhQDF4moQBjIfIfub9tOquhVWwoRmK%2BdMI7DC35Tlioe7fDem8S58bJsD4HPOOu%2BgGgZGKp66UUAkGywcG6z%2FnoWZESROPItWj%2ByWh4UYDKczGZ%2FroviZHRO2GfSPWl1tlsE40Pf4Tgm0DI45saR6WMZ6it86S5611eqg7FGF9c9hE53vwSz0NyhnJIRQtvADO5ie0HxbhFpZyMuXhwZW%2Fx7xG9E7xFnGMBr434MPZTkclR3Xjyh6YvjG703R308VFNDJfIdJpVcj%2BTuWOG5i4JuEinH9fyDYcM%2Bndo%2B8%2FaNz9scuuU92oJmTarhaiij%2FYknW6LsoqDe1jp3hIvQn3NlT1tVz8mic7pY720PFsGHXRbJGh%2ByYdTPiT1HxTcsCXqawU5GcMDZEumt4w2ayaKDH2TRm6UFgJSks9ixShB5eLB66Yuu4zga8YlejowHkltngqFSxiimgGCJv4cncyWVsMcXhTeOCMN%2BMyMkGOqUBf%2BeKw1T2TihxzP29852jIuv9Aq6McPHVNp3%2BpQEhw7zWIuucX%2Bx3wgqUwYUmRgN565pCqRLHEzNbPycfku3p44agwC9lORKyqtmbvNhv%2FVypaxpPfLMqYg3Iw0Rv6Cyo7AzOutxgolnHx673uplE%2F1Zp3Xl3646bVtDBiKbECaocSq75rux0JZtt%2FAtmoDKEyaI5s8IY9Xm2sAHYYZH8N%2FDLJ2DW&X-Amz-Signature=34e789027ca861e0e49a6ff6d9d38804b4bd83af0ca1836769a3b71a37793b1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RBDTRJ2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T012242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkVjRmZjNIppVV97mnnm1wGoJ33I9Z44DvKM9inTBCGAiEA9QuSzS3FyYLE76gJGFcyHmFQ8sTP9z2QbOxDXcVki1oq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBxlXtRPBNOmJZCyXircAyX6mC5AT%2FOqme6G50QhqjBYgug%2F6K69YjzoNgA8VgoUzyTcfWhqoKV215HQmE9Irt9K3qXA7kdpBru%2FjEet56M%2F8WZEFPXf7zFc%2B4yuU9U7IlupLQrNe6xq9XiQy1IfGaTTP1N5uQduPMzoxeM3qiXTEDDbhQDF4moQBjIfIfub9tOquhVWwoRmK%2BdMI7DC35Tlioe7fDem8S58bJsD4HPOOu%2BgGgZGKp66UUAkGywcG6z%2FnoWZESROPItWj%2ByWh4UYDKczGZ%2FroviZHRO2GfSPWl1tlsE40Pf4Tgm0DI45saR6WMZ6it86S5611eqg7FGF9c9hE53vwSz0NyhnJIRQtvADO5ie0HxbhFpZyMuXhwZW%2Fx7xG9E7xFnGMBr434MPZTkclR3Xjyh6YvjG703R308VFNDJfIdJpVcj%2BTuWOG5i4JuEinH9fyDYcM%2Bndo%2B8%2FaNz9scuuU92oJmTarhaiij%2FYknW6LsoqDe1jp3hIvQn3NlT1tVz8mic7pY720PFsGHXRbJGh%2ByYdTPiT1HxTcsCXqawU5GcMDZEumt4w2ayaKDH2TRm6UFgJSks9ixShB5eLB66Yuu4zga8YlejowHkltngqFSxiimgGCJv4cncyWVsMcXhTeOCMN%2BMyMkGOqUBf%2BeKw1T2TihxzP29852jIuv9Aq6McPHVNp3%2BpQEhw7zWIuucX%2Bx3wgqUwYUmRgN565pCqRLHEzNbPycfku3p44agwC9lORKyqtmbvNhv%2FVypaxpPfLMqYg3Iw0Rv6Cyo7AzOutxgolnHx673uplE%2F1Zp3Xl3646bVtDBiKbECaocSq75rux0JZtt%2FAtmoDKEyaI5s8IY9Xm2sAHYYZH8N%2FDLJ2DW&X-Amz-Signature=af3604845b508ce5ccba947f8c6fad2997422f75fadefd6639de0b4e6117958f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
