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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX2RC7HG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy0E8L4BDBGsSQW%2BUCODDO1Jzvx0yJsicz6EhwngJaywIgWW5EHd25sMJxAydB%2BOfHaqX%2BVjZSYwcy7%2BSprti99WQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuxsq7bpa72InYYLSrcA2U39Yrf8AV%2Fv8%2F5h6eUybCI%2B%2B7xTtj86OLVpvs%2FPXmfDkr8Dh9fpPb2vHhe1PG2edylzpnrLG6WdVFJojDsXFJF22fAJ3JnzHJOCWO6rQPYuNxqu9gS0CL%2FIj6lrp1SqudFTJS2%2F96b5WJ%2BnaOEAqBJn6ESzfsuCdShEci0V1wxG0KHBlELzWX%2F%2F4OnzrqdxeCQjcImDkdXDmou7%2FJBqwRC0wL3cbHxNqO3YHJ66PExnOMff%2BkKKIMjBca3xVr3IRrUlrnvmzxk3RwKsezmJhgoMRRVbdOklMFSJnbUh5zjeC6E7awnJXVG8iHdecKWEICPM7C78%2B8J%2FfJL7R3XGAZV2JJMIxRCMlMvMUkGtMR1eClMn%2BdphyVK6Wz84nUtTVF5m1zNzA8JsJrLzd7W8zV%2B9wf%2F3huekhYwuFjnZZSzYUNfcP%2FtNdqUiaZ%2BYL2647iVdPumsUwa2UDU9Ol0I6oUZZgThAmr1fePMWFTuRycjynAbc8Wve2VqWBzr67XkTMeJkY%2FDoLKcNYrGnjtWGPC%2BV3iOqwBQ6QXXxOFKY%2B2r%2FXO4p3vmRDLDyARPxjwb3nLxUm5nb5J6uXlAh09iUMspyy1l5C1mvkyTmdRryMRuSjYcUMHqZjmQ3m4MP6tjMoGOqUBEynLBcEsbm6ncyYJQRm1w00X0EpKRBVUa0fF4jQYPSWamm37UuosUdYPA77dbKCPg1qwk69h8mknZzCSTSF1gFCz6xkzUbDTopJw9sn8lwSBt1sUc6knNsWxxJ0L3l1wiVWjHPl%2Fp82OvuLJ0NYNLPCRREtNVLe3Vd2FvSoQaGcipvqZw%2Fl9x78pKvenLLxRhN5YkMcCSqok9nq2p%2FRGvkQtMl9Q&X-Amz-Signature=2e90007bc2ec4faf40653115ba590e3847cb8e5878d22d263c438ac59d4e3b3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX2RC7HG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy0E8L4BDBGsSQW%2BUCODDO1Jzvx0yJsicz6EhwngJaywIgWW5EHd25sMJxAydB%2BOfHaqX%2BVjZSYwcy7%2BSprti99WQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuxsq7bpa72InYYLSrcA2U39Yrf8AV%2Fv8%2F5h6eUybCI%2B%2B7xTtj86OLVpvs%2FPXmfDkr8Dh9fpPb2vHhe1PG2edylzpnrLG6WdVFJojDsXFJF22fAJ3JnzHJOCWO6rQPYuNxqu9gS0CL%2FIj6lrp1SqudFTJS2%2F96b5WJ%2BnaOEAqBJn6ESzfsuCdShEci0V1wxG0KHBlELzWX%2F%2F4OnzrqdxeCQjcImDkdXDmou7%2FJBqwRC0wL3cbHxNqO3YHJ66PExnOMff%2BkKKIMjBca3xVr3IRrUlrnvmzxk3RwKsezmJhgoMRRVbdOklMFSJnbUh5zjeC6E7awnJXVG8iHdecKWEICPM7C78%2B8J%2FfJL7R3XGAZV2JJMIxRCMlMvMUkGtMR1eClMn%2BdphyVK6Wz84nUtTVF5m1zNzA8JsJrLzd7W8zV%2B9wf%2F3huekhYwuFjnZZSzYUNfcP%2FtNdqUiaZ%2BYL2647iVdPumsUwa2UDU9Ol0I6oUZZgThAmr1fePMWFTuRycjynAbc8Wve2VqWBzr67XkTMeJkY%2FDoLKcNYrGnjtWGPC%2BV3iOqwBQ6QXXxOFKY%2B2r%2FXO4p3vmRDLDyARPxjwb3nLxUm5nb5J6uXlAh09iUMspyy1l5C1mvkyTmdRryMRuSjYcUMHqZjmQ3m4MP6tjMoGOqUBEynLBcEsbm6ncyYJQRm1w00X0EpKRBVUa0fF4jQYPSWamm37UuosUdYPA77dbKCPg1qwk69h8mknZzCSTSF1gFCz6xkzUbDTopJw9sn8lwSBt1sUc6knNsWxxJ0L3l1wiVWjHPl%2Fp82OvuLJ0NYNLPCRREtNVLe3Vd2FvSoQaGcipvqZw%2Fl9x78pKvenLLxRhN5YkMcCSqok9nq2p%2FRGvkQtMl9Q&X-Amz-Signature=cc39cabaf81c1cdbe52237c41b2c740fbb11f36ad937ded39e25529bd4046cfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
