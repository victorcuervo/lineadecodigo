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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIRIVMKO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIF13b2P4dvQJh0STXCvVooOeJfZzVxPNdnh0arqPrcgkAiApspG8w3BxBv2fHVsbrLVFEAWxMHMX6vlFPhzC81mNaCr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMq3cHhivXGn1Nsy05KtwDj3S5Cf3W1IHc9UKpB6DyhZrIJdfBspjyX%2FM%2B3bOuF4b3bWX8fHiEYtsv8%2FruXufSIUllcAcrsbYZpjBSb3crFO5hDsf0QLkES%2Fzvz%2Fs2y61ovmLifdGYao0UlEx%2Fw%2B5Cz1Ly1gz%2BWDemwSkuYrmrkXN1CCQ1fHQ1oMMO4WdR5x%2FT2aqgr4R80nSEE%2FhNtnrFY3hA8qUr3qdIv2yE6XVkU%2Fw5w9YZbCtbnwGOsmOTFa%2Fh3QZX6uLdhv9mkxV09Hv4SHOfpofxKX2MS4%2Bn3pPYOhjIobcfMGLCh40igcAuhWAYjgqx2vI%2BKcrJyxrEfx3r4qJkTPe0MtosTvf3aEIxHgFQPHsb9EtgPtp%2BdxMpjVd%2F7HlsAxKY1nyeYbfU3kQlePgWkw4ktwmPWueMXeTjLHngBX0%2F%2BhdOnR%2F5%2F7ElijqEZ9b8drP11B05P7zxPQ9HF0e%2FJedjon20T1s8K3UfMcj9YuETD6o6YZxiZ12y8oR893KNSGiXF2Jhgj%2BaiB4RsCYz%2BehzBKGRYPpGMKyGX5vCCqWHcU9yo885LQ6iwLP8MTQQaL5nSF7Qh%2Bgx%2BqwfB9eYp%2B9okIfMvN%2BzIpS2sjh2%2F7Myq%2FBCb%2BzshIoH%2BYnlClBUxVG%2BwL5NSTkwsvjCyQY6pgHy5l1Emo0NRXcqXfdsXWTelqN8vi78TjZCdAHKjJSDkpWsEPyIPp1NpMLqDziUdy6Rrc7mc1aPlCG7HQf95ZbjufzuOBXjBlNQQuYPnwJcFIUvjTKMnJn83oRVc1SlWq2t6yBBT7QlpuOztzv4Q%2FtJeJrV7qUSx4ej3EDrhq4naVMIS94W3QvbeHCM0oAAGERbN901XkwfevUFVTQ8VK56wQOQ6U2g&X-Amz-Signature=0aa804d1ffef36f19a54b8aa2442af5b152d594ef8978ad621552c55e6bbd45b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIRIVMKO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIF13b2P4dvQJh0STXCvVooOeJfZzVxPNdnh0arqPrcgkAiApspG8w3BxBv2fHVsbrLVFEAWxMHMX6vlFPhzC81mNaCr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMq3cHhivXGn1Nsy05KtwDj3S5Cf3W1IHc9UKpB6DyhZrIJdfBspjyX%2FM%2B3bOuF4b3bWX8fHiEYtsv8%2FruXufSIUllcAcrsbYZpjBSb3crFO5hDsf0QLkES%2Fzvz%2Fs2y61ovmLifdGYao0UlEx%2Fw%2B5Cz1Ly1gz%2BWDemwSkuYrmrkXN1CCQ1fHQ1oMMO4WdR5x%2FT2aqgr4R80nSEE%2FhNtnrFY3hA8qUr3qdIv2yE6XVkU%2Fw5w9YZbCtbnwGOsmOTFa%2Fh3QZX6uLdhv9mkxV09Hv4SHOfpofxKX2MS4%2Bn3pPYOhjIobcfMGLCh40igcAuhWAYjgqx2vI%2BKcrJyxrEfx3r4qJkTPe0MtosTvf3aEIxHgFQPHsb9EtgPtp%2BdxMpjVd%2F7HlsAxKY1nyeYbfU3kQlePgWkw4ktwmPWueMXeTjLHngBX0%2F%2BhdOnR%2F5%2F7ElijqEZ9b8drP11B05P7zxPQ9HF0e%2FJedjon20T1s8K3UfMcj9YuETD6o6YZxiZ12y8oR893KNSGiXF2Jhgj%2BaiB4RsCYz%2BehzBKGRYPpGMKyGX5vCCqWHcU9yo885LQ6iwLP8MTQQaL5nSF7Qh%2Bgx%2BqwfB9eYp%2B9okIfMvN%2BzIpS2sjh2%2F7Myq%2FBCb%2BzshIoH%2BYnlClBUxVG%2BwL5NSTkwsvjCyQY6pgHy5l1Emo0NRXcqXfdsXWTelqN8vi78TjZCdAHKjJSDkpWsEPyIPp1NpMLqDziUdy6Rrc7mc1aPlCG7HQf95ZbjufzuOBXjBlNQQuYPnwJcFIUvjTKMnJn83oRVc1SlWq2t6yBBT7QlpuOztzv4Q%2FtJeJrV7qUSx4ej3EDrhq4naVMIS94W3QvbeHCM0oAAGERbN901XkwfevUFVTQ8VK56wQOQ6U2g&X-Amz-Signature=e4ef569614795dd8eff3f7e3e67e785e1c8b370b246fd5703c7b49ea7fc7bf03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
