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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CE6STD4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZTrvqGQqweTWZlzNnSMGDArMnd79prYLlVQpKbqnVTQIhAL4jeZ0FZyTg8MUqxDbXGyZFzx%2FCMXTCivjPfFZaHDV7Kv8DCHEQABoMNjM3NDIzMTgzODA1IgzpXNry3ZIxxrIv%2B2oq3ANTxUoPayOY7qf3FC8spWMJ5Oe1OrCfWntcAA1rYVvLe1%2FU0dYq6kmj6EuBF9QjMw1VZ3y0N12eZaSG0wtKRghFdtoSRpnUCj4EVyqOp6jT35F0aGmdSHEO6uqemwZ0IPW2rE21jJZu%2Bo%2Fv6O2%2FPNjsohh30%2FWgKIjsp2rlpz%2F%2FsYh5w7iYJ8XrS56OAGM%2Bjf%2Bdf0PLv0YxLicm8saYPEg%2FTjyH3BCB3tr0z96QBQrDxLWKvZE%2Bzcqun5Y8mHd8xz8o4c0KpulyDuLIzqGVx4c3jq3Xvv8Yv1avjjjni9iKTV%2BCpz7tG3swh343XPYaJM%2FBgpB%2B8tIR3%2FQlyNJyG9NmQQ%2BffLflpfhcQLg3LJ%2FYe7bTlTqL8J2SXI%2FiuOvFoBsVY4QcSTfTTd6nayEhdF87JuFtQN8um1mvUEmPhif%2FTI7Z2AsImPFMn0GZ0RS6Ur3d%2F4V7fKJ5azXsK%2BYYknn4rx0JObsJs56PhdaIijnp31R7YSrwlTQNqcGM96JbBCSYV5sCmQKCQij6y1OKRfnRA7zZWrLHdXOjfN%2FFsKS60MQcCX1bCkjcVG4PkIqtxlt0q7EKF8CdMRf%2FAigcR6Xma5rHIwAhYEJKVV4UkYi5jpnW5rybzGkW3Rn1kjCUvM%2FJBjqkAWmxVS6cL9nA3WU5pqf74B6rMG4e0hRtHJQV6cxYL67vnt5lp03NsLArhuDMF3Fh1x1u3bZujVd4Gj1dNtUgx47JNJrFeteg233dQCg6Sbl78S77YtcnrQFHIlcqZw8ifsOTHY95umdX%2FVUI40RILEjf75Kd5LW1q89MRmu5gfxcPzTdXYyB3oKtyGpWgy5MqO6rFv%2B58TLV10s8ggx4uVqiGCX3&X-Amz-Signature=eab7f866bd7df843a3f550b616a59603c7ae3e6626ea25179032280cf8194106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CE6STD4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZTrvqGQqweTWZlzNnSMGDArMnd79prYLlVQpKbqnVTQIhAL4jeZ0FZyTg8MUqxDbXGyZFzx%2FCMXTCivjPfFZaHDV7Kv8DCHEQABoMNjM3NDIzMTgzODA1IgzpXNry3ZIxxrIv%2B2oq3ANTxUoPayOY7qf3FC8spWMJ5Oe1OrCfWntcAA1rYVvLe1%2FU0dYq6kmj6EuBF9QjMw1VZ3y0N12eZaSG0wtKRghFdtoSRpnUCj4EVyqOp6jT35F0aGmdSHEO6uqemwZ0IPW2rE21jJZu%2Bo%2Fv6O2%2FPNjsohh30%2FWgKIjsp2rlpz%2F%2FsYh5w7iYJ8XrS56OAGM%2Bjf%2Bdf0PLv0YxLicm8saYPEg%2FTjyH3BCB3tr0z96QBQrDxLWKvZE%2Bzcqun5Y8mHd8xz8o4c0KpulyDuLIzqGVx4c3jq3Xvv8Yv1avjjjni9iKTV%2BCpz7tG3swh343XPYaJM%2FBgpB%2B8tIR3%2FQlyNJyG9NmQQ%2BffLflpfhcQLg3LJ%2FYe7bTlTqL8J2SXI%2FiuOvFoBsVY4QcSTfTTd6nayEhdF87JuFtQN8um1mvUEmPhif%2FTI7Z2AsImPFMn0GZ0RS6Ur3d%2F4V7fKJ5azXsK%2BYYknn4rx0JObsJs56PhdaIijnp31R7YSrwlTQNqcGM96JbBCSYV5sCmQKCQij6y1OKRfnRA7zZWrLHdXOjfN%2FFsKS60MQcCX1bCkjcVG4PkIqtxlt0q7EKF8CdMRf%2FAigcR6Xma5rHIwAhYEJKVV4UkYi5jpnW5rybzGkW3Rn1kjCUvM%2FJBjqkAWmxVS6cL9nA3WU5pqf74B6rMG4e0hRtHJQV6cxYL67vnt5lp03NsLArhuDMF3Fh1x1u3bZujVd4Gj1dNtUgx47JNJrFeteg233dQCg6Sbl78S77YtcnrQFHIlcqZw8ifsOTHY95umdX%2FVUI40RILEjf75Kd5LW1q89MRmu5gfxcPzTdXYyB3oKtyGpWgy5MqO6rFv%2B58TLV10s8ggx4uVqiGCX3&X-Amz-Signature=624cb3c75be5f0c2bb9cde626ba1c1387480a4fb45c5fca97f5dd14a3f2f1538&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
