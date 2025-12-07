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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YHH57UQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T223338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKrrzsbyJ9ta%2FH2mpQob51XxFAgX1sNzxUGjj5bTH7bAiEAk8OU8kMyp4QXvtnh%2BBVGLU5RbJLHLYqYc4Ur4s9jLBoqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMDoq8wzYvBEQYe8yrcAyihL7bHSr5TVqdq5%2BsCfCVQxIkEKDCHT5syxmNqNdZURRHuyNMTTuo5XhCvtwaksGiXmblgiQjoYzi%2BBatIJzRXTCPZkup7PPtsiS7cQBtwDO7SHnBwAl0Ma1Dv1FI1KEOhXE7ioQdf0y3yb3ncQyTV9VqodbW27Oi72mlliwwaWGrkBWbfNUjtvVYBtwQE%2FX4DHpjMG68qvB7fIzTJrdq7mIjqIG%2Fv2snV4v0XrhMwjO1E1J4XlohwEnnVjvPuX0JrbfSvOpSDZ5v8RX9iM2YuNBiFOaU6xw0HX22vUpiklNalsT8olf%2FW8k4Et9GiojoYOUHCOsTL8WFVSYmMbn8bynW%2BL7x8DkOdEquq5Z6iOVrhJ8J55kUxscqOcOHz%2FMqFVXExNgMHYiqTuI17FcjlYOUofd2x10BU%2FE8yukEatsGIxttzuNSzkyt6NJ6qTF4g%2BW2EXnvL5TaGKNgGswEMzLVDr%2BobDJ%2BTvAkLnxGi5nhPTjwtoMit%2Fii%2BkNCCkSo7hExvfqorGTixihBXnI3IbZc%2FGDJx6bOTxp6fg5B4bVOidmHSWVxmBDDa1UUMQ9yfv5iefTZ%2B9e6NS3QurEZqJ%2FrBIxCQsBqUrqWfph4JL%2B6Ji3c9QTNrkDKdMMrH18kGOqUBqMTLiGi%2FZZqDJmSL8UA08GcTETk0FnBTvg3Q16aigeO%2FyO5DmnouT1zrHWVLMQG4CtFEFmcVN5wHc2JYH9JdSeu7kDZ2j5WUY5mOFfaECVD9zVPgC7J940JhrjAEEy3I5oH59YE9lgkABgOQfgsJ4oyepwCr78ZYpFC7hErs2Rm4WcuEpM4Wt29VtsMOYxTNzhY%2BuJlfJSnDpeyvXVnzJpT21mNR&X-Amz-Signature=d84225d54776a81ef9203ac8245d967bf8ad533f4eb2c37d3e73aea1e87e8c50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YHH57UQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T223338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKrrzsbyJ9ta%2FH2mpQob51XxFAgX1sNzxUGjj5bTH7bAiEAk8OU8kMyp4QXvtnh%2BBVGLU5RbJLHLYqYc4Ur4s9jLBoqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMDoq8wzYvBEQYe8yrcAyihL7bHSr5TVqdq5%2BsCfCVQxIkEKDCHT5syxmNqNdZURRHuyNMTTuo5XhCvtwaksGiXmblgiQjoYzi%2BBatIJzRXTCPZkup7PPtsiS7cQBtwDO7SHnBwAl0Ma1Dv1FI1KEOhXE7ioQdf0y3yb3ncQyTV9VqodbW27Oi72mlliwwaWGrkBWbfNUjtvVYBtwQE%2FX4DHpjMG68qvB7fIzTJrdq7mIjqIG%2Fv2snV4v0XrhMwjO1E1J4XlohwEnnVjvPuX0JrbfSvOpSDZ5v8RX9iM2YuNBiFOaU6xw0HX22vUpiklNalsT8olf%2FW8k4Et9GiojoYOUHCOsTL8WFVSYmMbn8bynW%2BL7x8DkOdEquq5Z6iOVrhJ8J55kUxscqOcOHz%2FMqFVXExNgMHYiqTuI17FcjlYOUofd2x10BU%2FE8yukEatsGIxttzuNSzkyt6NJ6qTF4g%2BW2EXnvL5TaGKNgGswEMzLVDr%2BobDJ%2BTvAkLnxGi5nhPTjwtoMit%2Fii%2BkNCCkSo7hExvfqorGTixihBXnI3IbZc%2FGDJx6bOTxp6fg5B4bVOidmHSWVxmBDDa1UUMQ9yfv5iefTZ%2B9e6NS3QurEZqJ%2FrBIxCQsBqUrqWfph4JL%2B6Ji3c9QTNrkDKdMMrH18kGOqUBqMTLiGi%2FZZqDJmSL8UA08GcTETk0FnBTvg3Q16aigeO%2FyO5DmnouT1zrHWVLMQG4CtFEFmcVN5wHc2JYH9JdSeu7kDZ2j5WUY5mOFfaECVD9zVPgC7J940JhrjAEEy3I5oH59YE9lgkABgOQfgsJ4oyepwCr78ZYpFC7hErs2Rm4WcuEpM4Wt29VtsMOYxTNzhY%2BuJlfJSnDpeyvXVnzJpT21mNR&X-Amz-Signature=fe52ac28d8ff48e474ff879813519290fc0812d4262381a2bfdefb764a73f9b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
