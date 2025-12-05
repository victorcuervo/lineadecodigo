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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRIT7NGR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T000954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYmOKyK8s%2BPfOS13q7Mj0UuAQfsAVREdCpcyOZXMdBUQIgcYGe%2BnvTr8FI3Gwo7fu1%2Bp6YJ6VA4iLppz%2Bu0pBCMtgq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDN4biPRjxwlJo7OcPyrcA5tKgH%2FxrfOYaEZzreVd4Y4j9aT7%2FXEyNtgnUfqUop8j0rcQf0IRVAlNmbsawYnenCde5PLOfwtTi8LWGqycK%2FashayWHdcxj2%2B9VgA22BpH7RNHV4xhROLDU9dRfhzFP7aLfeMMoFmWqvUW1SQVbYpPNSyjlUqY7Te6tuzKdsgnP%2FRsuuEf9eTNlBzVygA6yc%2Fj9XQ9EjM0eecfbT4BR2dwJKurZ3rIzqyyonLKyr%2BNPpFW%2FMZs5IhqPSxdvfqa%2BflXLPi2giKOWviRcegi9vDSb9Vn5VL1PcvzTDX09CRfX1qMaTMCHbdVNDOh4ZAPS%2BMjt4RAwQ1IHHRa%2BVUYEjVEf519sw%2BbNrbvo1xLhGDMBtSZhL3Zd92pW76Fk4IOig4JmXhqKALhrXW4Zu7t4grIS%2FiL%2F5bByAUWNGGRi2B1jqH7dKIyC2xIvvBFxfQ%2B2V9We5rhLohj5Mq8Ews1cyHSWJCP76PfiB8ronM3apW9zPj9FimByPKoMXOdSOA8xsGUgvkwT9KLnZQBiWqaano6eO2%2B1eeE4bC3r7ALOrIdyWKbOPVmZ7aqaExRH1Jv%2BFXzzpS%2FeM1MwPUpiMrnjV4%2FGdu0hNrAsO8OMk3mNkPDbEBMl0tPzeOkxcxbMMyMyMkGOqUBrpHmGBpfBQ12gwuUk5qjPYMieKNLPYGoyNmOU3og%2FoGfM0P7t31qaHOE64fSLINZWphYyn1Kqo1hnghTPdiSgWBf9Wj8wxE68%2BknQ1%2Fo1WBTjTL3ZUdCnGP9P3%2BddIkGDBd3yD22IWZ%2BiXH1HnwViTXex93we8Tyk5a9tZRcV1HjU0yUqOPv%2F5XlJKz0c6X5BnWunCxGwtxMFOEFxuwALMOH5TkJ&X-Amz-Signature=4fe6ef66b8903d4d8e30283c19b895a5f4d30bb9b21fdf8a5ed68bb528ccd5a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRIT7NGR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T000954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYmOKyK8s%2BPfOS13q7Mj0UuAQfsAVREdCpcyOZXMdBUQIgcYGe%2BnvTr8FI3Gwo7fu1%2Bp6YJ6VA4iLppz%2Bu0pBCMtgq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDN4biPRjxwlJo7OcPyrcA5tKgH%2FxrfOYaEZzreVd4Y4j9aT7%2FXEyNtgnUfqUop8j0rcQf0IRVAlNmbsawYnenCde5PLOfwtTi8LWGqycK%2FashayWHdcxj2%2B9VgA22BpH7RNHV4xhROLDU9dRfhzFP7aLfeMMoFmWqvUW1SQVbYpPNSyjlUqY7Te6tuzKdsgnP%2FRsuuEf9eTNlBzVygA6yc%2Fj9XQ9EjM0eecfbT4BR2dwJKurZ3rIzqyyonLKyr%2BNPpFW%2FMZs5IhqPSxdvfqa%2BflXLPi2giKOWviRcegi9vDSb9Vn5VL1PcvzTDX09CRfX1qMaTMCHbdVNDOh4ZAPS%2BMjt4RAwQ1IHHRa%2BVUYEjVEf519sw%2BbNrbvo1xLhGDMBtSZhL3Zd92pW76Fk4IOig4JmXhqKALhrXW4Zu7t4grIS%2FiL%2F5bByAUWNGGRi2B1jqH7dKIyC2xIvvBFxfQ%2B2V9We5rhLohj5Mq8Ews1cyHSWJCP76PfiB8ronM3apW9zPj9FimByPKoMXOdSOA8xsGUgvkwT9KLnZQBiWqaano6eO2%2B1eeE4bC3r7ALOrIdyWKbOPVmZ7aqaExRH1Jv%2BFXzzpS%2FeM1MwPUpiMrnjV4%2FGdu0hNrAsO8OMk3mNkPDbEBMl0tPzeOkxcxbMMyMyMkGOqUBrpHmGBpfBQ12gwuUk5qjPYMieKNLPYGoyNmOU3og%2FoGfM0P7t31qaHOE64fSLINZWphYyn1Kqo1hnghTPdiSgWBf9Wj8wxE68%2BknQ1%2Fo1WBTjTL3ZUdCnGP9P3%2BddIkGDBd3yD22IWZ%2BiXH1HnwViTXex93we8Tyk5a9tZRcV1HjU0yUqOPv%2F5XlJKz0c6X5BnWunCxGwtxMFOEFxuwALMOH5TkJ&X-Amz-Signature=146c7b2f43a3e1dac6fd624c47e0a1175ac85c6d9d923502ee40ac862c6ee4df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
