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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH5QXNMX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T045907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFPiiWMiCM407NlcQZUlwE1SZVF868Y5lm0EuSmZhAswIgBZ9muanxczK2t9%2BBETXcEtlW4Pk2IeiUjGExk%2FPqoZwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkvKqW0ddAqVeWuoSrcAx%2FdR0Tzmoy5KyYcQGlcW4ClwjXQxwpU332tVOGBWSZGlpNQsIx0MAVOehFPh65BxvH6dYIuxbgQ%2B1G5theYOMhJxaxqw0CQblotmODnHJSTIBTIU2fddIsIU2FFvFnFe8OIIFxtTVDJOAKwXIhH1okLxdYT6dXB%2B%2FqDnBkCG%2BVgV15PKWxHvuCUnVro6b3RZFDHttUKQca1eeM1frYZ6lomCUCw58rzgYdlaigCtV0JfGh%2BRPtDeqsil%2Fw42Loyq%2BelNLKKgEKbhL9fAcX3GpV%2BVrFCa6tw0sl1aImn2hv4V3cEC%2FmPl5A299OH5A%2B3mbvXxtUMWRJ2e3zX9MVyR6v8Sb0nLQ7gBco3Ctrqikw2bPirC12YOoronR3AbVgxTuTH%2B1z9ABSDEoXv3KM4a%2FtK6OBpAIG2cygPzlRsqxKgEs9%2FDoAJ8ducHIWut9hG9vtNPWqXmUuY%2BswaO%2FTKo6fT7UJ0T%2B5mayitXW4KI%2B1VYQkCROkm4iOzJKwrBuD%2FsQBMhEcNPeEpjKPOgsnRxcdUFH5S54FluzDqB7OWH%2Fc12AxRTUhvUNf2mqVu9TxbsrFEMhxRBl18VpngUVtkBYEm4Vhq59oIuM%2FN6EN3ZSh8tLfYk2Z%2FqTAaDPC9MOqz2ckGOqUBzwnox75Cd666N2%2BAW8N2n00SnxNVtCwa7PqsUjEt8TQu5f1jhVux%2B029KtvMryCKJ7bgjTaCqPp9kB%2BMq45%2BiSiCz2XKVXqF72HY1AVaJRDxMHcXYByIv%2BAl8O3TNMIyexyqzVsf%2BT%2FOFQ5GvT4VlXZDb864E4TzHPVI06KR04PNb8AAM6J%2FahSi%2FHzT12xUGcGVuwuq%2Bh0d1jeGiHBpGscbcMA6&X-Amz-Signature=91148d379c35581d5509428d7eba8a52da8554dfbd05516d364264e40ed170d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH5QXNMX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T045907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFPiiWMiCM407NlcQZUlwE1SZVF868Y5lm0EuSmZhAswIgBZ9muanxczK2t9%2BBETXcEtlW4Pk2IeiUjGExk%2FPqoZwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkvKqW0ddAqVeWuoSrcAx%2FdR0Tzmoy5KyYcQGlcW4ClwjXQxwpU332tVOGBWSZGlpNQsIx0MAVOehFPh65BxvH6dYIuxbgQ%2B1G5theYOMhJxaxqw0CQblotmODnHJSTIBTIU2fddIsIU2FFvFnFe8OIIFxtTVDJOAKwXIhH1okLxdYT6dXB%2B%2FqDnBkCG%2BVgV15PKWxHvuCUnVro6b3RZFDHttUKQca1eeM1frYZ6lomCUCw58rzgYdlaigCtV0JfGh%2BRPtDeqsil%2Fw42Loyq%2BelNLKKgEKbhL9fAcX3GpV%2BVrFCa6tw0sl1aImn2hv4V3cEC%2FmPl5A299OH5A%2B3mbvXxtUMWRJ2e3zX9MVyR6v8Sb0nLQ7gBco3Ctrqikw2bPirC12YOoronR3AbVgxTuTH%2B1z9ABSDEoXv3KM4a%2FtK6OBpAIG2cygPzlRsqxKgEs9%2FDoAJ8ducHIWut9hG9vtNPWqXmUuY%2BswaO%2FTKo6fT7UJ0T%2B5mayitXW4KI%2B1VYQkCROkm4iOzJKwrBuD%2FsQBMhEcNPeEpjKPOgsnRxcdUFH5S54FluzDqB7OWH%2Fc12AxRTUhvUNf2mqVu9TxbsrFEMhxRBl18VpngUVtkBYEm4Vhq59oIuM%2FN6EN3ZSh8tLfYk2Z%2FqTAaDPC9MOqz2ckGOqUBzwnox75Cd666N2%2BAW8N2n00SnxNVtCwa7PqsUjEt8TQu5f1jhVux%2B029KtvMryCKJ7bgjTaCqPp9kB%2BMq45%2BiSiCz2XKVXqF72HY1AVaJRDxMHcXYByIv%2BAl8O3TNMIyexyqzVsf%2BT%2FOFQ5GvT4VlXZDb864E4TzHPVI06KR04PNb8AAM6J%2FahSi%2FHzT12xUGcGVuwuq%2Bh0d1jeGiHBpGscbcMA6&X-Amz-Signature=2f4f7c2caa4abedc3838c7723f72645169479743e3aae3fd23c8d9a00e2b5776&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
