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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MZAASM5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T175356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaGGNH6ueG5DbSBXRxefKG1p3Zy2nuUuqBDmZ%2FG8BMLAiEAnWyzYSQyj%2FBzB%2Bub5lEKZxBwL4LpKOZxIVShDyTjsw8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDDph5wE97CEbJVnYYCrcA4AN%2FF8P8Oc5eCNY53vVwa9%2BR5jRhwkaC7LGkJ5OgK93RfAI3FvXocwuzb5Pf5dQXgQ1FT1QHdfeTTuiCXf8tfixQYpHcUi1B4exso5BdSwR%2BNRQHogG%2FFwXcQI4XgeQr2YEzHHdURWlCM5jhmSSReM2WaDSExc7D8labZ3aGF%2BRTRDko4fT3F1jXu590WK0%2BatWv2VpUNv5ZGPLaDPnNxB8L%2BF0jk%2BdCaMWr9CfM4gm%2BDCY7nvE8tXe1qIdGHvMXDnsv8RR6nsDOhld%2Bx2tVYXu6tq6E4KR6HDS5qs1pxvHU8doyol7AXyWRBVoDY3Xh2m1UIdl6ArNq%2F7Qp28UgDv82nChMRbusc54WZ8NEggOgF4SdzSa%2BH1mfBcHwe8HzCNJD%2BotDNmU%2FI9msqH%2FGecIVYV48YBWgDv87NHGlAzjTYEHrxxpGIcaD0FWBjrZAzpAuwNLTYni5Y6DI2v95E0GUr9g0AbcpXJjZdOUbQHHHbfjNupo9gzSMUcZxIL4ZwpHgN0G3ggLsm1AfWpIzmUmh4SydjdkkYRtSX5WjOz8SyUUqOP3ceNSaWKwu0cppCmmMN8xwrXRYiLQP3%2BLfcdOS4bahaVsNvWBPX6wpxaCheWsLkyrSZDkGwkqMNHL0ckGOqUBnA5nz2fVTPNbfedFMCD0aVJXxWSnTYMkjvEHr2XCi7Y0BpvdKxCn9zxQ5Of76sAlZaNrKfMWMgJUAiQD%2FBSLNATA7ZXZGR2ibTpGRcwdu6QdVm8e155mBGYMRYvU2HG%2F9xtIBklSi7QnyWuZdPudDrgMCiHZfllfEiDvjDujZ4nrFXYJCvQvjF9n3vXJx0LCM1kJ98jD%2FgU0ZdzATvY2t2DZNNPW&X-Amz-Signature=84192e78fa9b87c1fa6fcad11cdd7e5e306e99ad898f6f747f7165c22bb9fc63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MZAASM5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T175356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaGGNH6ueG5DbSBXRxefKG1p3Zy2nuUuqBDmZ%2FG8BMLAiEAnWyzYSQyj%2FBzB%2Bub5lEKZxBwL4LpKOZxIVShDyTjsw8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDDph5wE97CEbJVnYYCrcA4AN%2FF8P8Oc5eCNY53vVwa9%2BR5jRhwkaC7LGkJ5OgK93RfAI3FvXocwuzb5Pf5dQXgQ1FT1QHdfeTTuiCXf8tfixQYpHcUi1B4exso5BdSwR%2BNRQHogG%2FFwXcQI4XgeQr2YEzHHdURWlCM5jhmSSReM2WaDSExc7D8labZ3aGF%2BRTRDko4fT3F1jXu590WK0%2BatWv2VpUNv5ZGPLaDPnNxB8L%2BF0jk%2BdCaMWr9CfM4gm%2BDCY7nvE8tXe1qIdGHvMXDnsv8RR6nsDOhld%2Bx2tVYXu6tq6E4KR6HDS5qs1pxvHU8doyol7AXyWRBVoDY3Xh2m1UIdl6ArNq%2F7Qp28UgDv82nChMRbusc54WZ8NEggOgF4SdzSa%2BH1mfBcHwe8HzCNJD%2BotDNmU%2FI9msqH%2FGecIVYV48YBWgDv87NHGlAzjTYEHrxxpGIcaD0FWBjrZAzpAuwNLTYni5Y6DI2v95E0GUr9g0AbcpXJjZdOUbQHHHbfjNupo9gzSMUcZxIL4ZwpHgN0G3ggLsm1AfWpIzmUmh4SydjdkkYRtSX5WjOz8SyUUqOP3ceNSaWKwu0cppCmmMN8xwrXRYiLQP3%2BLfcdOS4bahaVsNvWBPX6wpxaCheWsLkyrSZDkGwkqMNHL0ckGOqUBnA5nz2fVTPNbfedFMCD0aVJXxWSnTYMkjvEHr2XCi7Y0BpvdKxCn9zxQ5Of76sAlZaNrKfMWMgJUAiQD%2FBSLNATA7ZXZGR2ibTpGRcwdu6QdVm8e155mBGYMRYvU2HG%2F9xtIBklSi7QnyWuZdPudDrgMCiHZfllfEiDvjDujZ4nrFXYJCvQvjF9n3vXJx0LCM1kJ98jD%2FgU0ZdzATvY2t2DZNNPW&X-Amz-Signature=a39ff51defd40db38031322160050ed3c05ff4f403c8666bef58744a150048cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
