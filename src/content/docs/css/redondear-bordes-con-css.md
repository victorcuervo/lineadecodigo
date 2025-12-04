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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O7GFY3M%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCw2%2BzK46T49qwpd358i09d6ngfV3uYMB6lGJOpGVRLTQIhAMbXTPVxJVaT9sj%2F1Y%2BIZBgrPf4322R31V%2B9zJ3iVMlpKv8DCEAQABoMNjM3NDIzMTgzODA1IgxTLwTwaXtUYOwd6Hoq3APyhBqJ%2FNiIUn%2B3Ym1KpTw3ztZajmpwvn4GxsOFA8V6G1u9lZqUDuthvOj6S%2FdhJgLjowNiCQqhW8KoBgTe%2FX3wRL2S0NYm8gJ8yGnJHNhuZX8TwSiI88XTGsDZLPQZwVSuqUTJ8TbNXCwhFWuXWoX33xEmOv69NEsKXCf5ptHNclfGDCjaEKMro5xpj798KpSIAICo%2B02YiOvqKOVI%2BbgTXl%2BFzZiJAKFx3O6tIyCkWrfq7%2FJXzlcIt0QmiBU83T8OiZorPtQlx63PNmuPpii4%2FAwHRMwhf0974gjE12AnB6ADxqNDfRcr6GWU48IB0uBkPITata0Ge48qwNLRq5B2W9%2FZwi%2FNOZEhr5cSmISR5VmCYCX4JH7fbGNWRiFmGYYSLR3RRbc1ouLO9Ubu5%2FYYVFfjVAs1EUDB2LxKQMNrZFCwJyHWjHHUwXOpbjIabipcuDLV3ZING7FlFZ0BlfvsWT1VXci5hVwxBWbJhI2UTUEv%2FSmoUgA5fOOeYdCLq0IBQsOwhYzYfCqKrXAB7qU3%2F4uWl5dGz4vKf9iFlPkJNK7ESccr0BMd5uYPZutlXrB78H8N3qoMtkIEd1dx63PdCJlnV90rN9l%2BA5pSMYFjA7zKPUfsbEa6Skyh6TDz6MTJBjqkAajSXRROxFrxROWfszI6BMgKNkMo9lCccTYyhn8qmoFESs6UF%2BFOKoEg%2Bomu66CAOkKPgwwVSrrB4ER0TbmPMCeYDjwTZpJvFj7CF7xBhfjdRmZN2rpVHva6tDCK1T6bjZACgVOfg2Kfk%2BnHNpbz1UmfBwu%2BZz8FYELdAxJWgFzWYlpi%2B0lDwGBfFRDh%2FKvt5S9gCXZRr7UT3RBRV8sAhSvke%2BRz&X-Amz-Signature=46ab13d923c62ee35c0acc914944fa497573f0d99e7131b4bbbd9e245ef30dae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O7GFY3M%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCw2%2BzK46T49qwpd358i09d6ngfV3uYMB6lGJOpGVRLTQIhAMbXTPVxJVaT9sj%2F1Y%2BIZBgrPf4322R31V%2B9zJ3iVMlpKv8DCEAQABoMNjM3NDIzMTgzODA1IgxTLwTwaXtUYOwd6Hoq3APyhBqJ%2FNiIUn%2B3Ym1KpTw3ztZajmpwvn4GxsOFA8V6G1u9lZqUDuthvOj6S%2FdhJgLjowNiCQqhW8KoBgTe%2FX3wRL2S0NYm8gJ8yGnJHNhuZX8TwSiI88XTGsDZLPQZwVSuqUTJ8TbNXCwhFWuXWoX33xEmOv69NEsKXCf5ptHNclfGDCjaEKMro5xpj798KpSIAICo%2B02YiOvqKOVI%2BbgTXl%2BFzZiJAKFx3O6tIyCkWrfq7%2FJXzlcIt0QmiBU83T8OiZorPtQlx63PNmuPpii4%2FAwHRMwhf0974gjE12AnB6ADxqNDfRcr6GWU48IB0uBkPITata0Ge48qwNLRq5B2W9%2FZwi%2FNOZEhr5cSmISR5VmCYCX4JH7fbGNWRiFmGYYSLR3RRbc1ouLO9Ubu5%2FYYVFfjVAs1EUDB2LxKQMNrZFCwJyHWjHHUwXOpbjIabipcuDLV3ZING7FlFZ0BlfvsWT1VXci5hVwxBWbJhI2UTUEv%2FSmoUgA5fOOeYdCLq0IBQsOwhYzYfCqKrXAB7qU3%2F4uWl5dGz4vKf9iFlPkJNK7ESccr0BMd5uYPZutlXrB78H8N3qoMtkIEd1dx63PdCJlnV90rN9l%2BA5pSMYFjA7zKPUfsbEa6Skyh6TDz6MTJBjqkAajSXRROxFrxROWfszI6BMgKNkMo9lCccTYyhn8qmoFESs6UF%2BFOKoEg%2Bomu66CAOkKPgwwVSrrB4ER0TbmPMCeYDjwTZpJvFj7CF7xBhfjdRmZN2rpVHva6tDCK1T6bjZACgVOfg2Kfk%2BnHNpbz1UmfBwu%2BZz8FYELdAxJWgFzWYlpi%2B0lDwGBfFRDh%2FKvt5S9gCXZRr7UT3RBRV8sAhSvke%2BRz&X-Amz-Signature=d80a0b85fb87ca14d5ec271e4f2d98885e149b9b7a1a23a12f9732f8c055c858&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
