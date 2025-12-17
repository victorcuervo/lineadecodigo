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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLHD2TFO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXuvgg91aDdVXX3tSC8Jj2Rw7crFV47lhWKWqD2UVotAIgGHDfEexzOufTMaUpIFxkyL6BDtWQ0pyiQRbeLvtZuy0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDNcXbVeE5MO65E8LySrcAx7PFG2mXyUt3rlgiDa1pWAjnYQBQaPyVHsr32OouRi8I9w%2B7LvYqpbkA7YbN95PgkefYGgWlpZq0oLvla2d6RvaiGLwXY9%2BdU2bp%2F2Z1tVuSVYbWsG5fzwir%2Ff7GJ6z3q4xgiW3zH76muTn52tXx%2BP1Cmuw8KTZ3B%2BT5y%2Fn9B4HH6FC8vklHatH8wGRSlmlT%2Bakjd3Kn1EhULu4ZtgunhbjM0VOnSn8l36PRe23TVfzkrEJk1AD1u46NF7IhP%2FJ3301AfuaHqJtYKXx%2BohzowpclzglcpNU3KvKynRnllYE64bozKtFSUrR3GfYFyGDMAVR4vuV59%2BYO9eBiWu3iCYmHJK%2FUj4%2F6YzbVgOCD2HQvpNO1o%2ByQSlZ1NUzoeZu8u%2BK6t1ez9kRa6KsIRRsjxUXDUoFWqlvni0ospJeLp2Cbe1CTu3VyMjlCgPPHA5C1Z6XYr3J5WkHSdrYNHMj1Mcx1paMl4PCheiOgf6XLmNBtAAOmdT%2BNezmj5tT5NYzmY0GIltksdevrdL5%2BGGY59h0pKIw%2FjC3m0yZA62GAzyeZM1hbxCnI4dVtm0S9diDdvfTRUrEC1S0nI96gTTauj%2Fw65sP4eJ2luSyuM%2F2OE2obxgjne9moaIqpL3hMKfwicoGOqUBqaYv9o4q24N9rRrF%2FInbq3PUaE7J9u%2F9MfVnvt%2BxW4CTYnzIUoBdf3Q7dtnMIYFsTf1y1uX1UX3uAr4p4rfafnBG7jSGyifUD6ixphzbvhZOeZzkZMyWp6yVEmwaBnHSj1T9Aqfz1xO5Hh1byYZAzjUau%2Bte0mSLYxfpJyDjGPjtw73hTXEMa5k82h1NmWbJ8CuCigWD8vpPb1EP2G2aY6vH6VrI&X-Amz-Signature=d39fe59272ac2374e22b55118492b24dbfa9a1a66743a22b1875716960a247ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLHD2TFO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXuvgg91aDdVXX3tSC8Jj2Rw7crFV47lhWKWqD2UVotAIgGHDfEexzOufTMaUpIFxkyL6BDtWQ0pyiQRbeLvtZuy0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDNcXbVeE5MO65E8LySrcAx7PFG2mXyUt3rlgiDa1pWAjnYQBQaPyVHsr32OouRi8I9w%2B7LvYqpbkA7YbN95PgkefYGgWlpZq0oLvla2d6RvaiGLwXY9%2BdU2bp%2F2Z1tVuSVYbWsG5fzwir%2Ff7GJ6z3q4xgiW3zH76muTn52tXx%2BP1Cmuw8KTZ3B%2BT5y%2Fn9B4HH6FC8vklHatH8wGRSlmlT%2Bakjd3Kn1EhULu4ZtgunhbjM0VOnSn8l36PRe23TVfzkrEJk1AD1u46NF7IhP%2FJ3301AfuaHqJtYKXx%2BohzowpclzglcpNU3KvKynRnllYE64bozKtFSUrR3GfYFyGDMAVR4vuV59%2BYO9eBiWu3iCYmHJK%2FUj4%2F6YzbVgOCD2HQvpNO1o%2ByQSlZ1NUzoeZu8u%2BK6t1ez9kRa6KsIRRsjxUXDUoFWqlvni0ospJeLp2Cbe1CTu3VyMjlCgPPHA5C1Z6XYr3J5WkHSdrYNHMj1Mcx1paMl4PCheiOgf6XLmNBtAAOmdT%2BNezmj5tT5NYzmY0GIltksdevrdL5%2BGGY59h0pKIw%2FjC3m0yZA62GAzyeZM1hbxCnI4dVtm0S9diDdvfTRUrEC1S0nI96gTTauj%2Fw65sP4eJ2luSyuM%2F2OE2obxgjne9moaIqpL3hMKfwicoGOqUBqaYv9o4q24N9rRrF%2FInbq3PUaE7J9u%2F9MfVnvt%2BxW4CTYnzIUoBdf3Q7dtnMIYFsTf1y1uX1UX3uAr4p4rfafnBG7jSGyifUD6ixphzbvhZOeZzkZMyWp6yVEmwaBnHSj1T9Aqfz1xO5Hh1byYZAzjUau%2Bte0mSLYxfpJyDjGPjtw73hTXEMa5k82h1NmWbJ8CuCigWD8vpPb1EP2G2aY6vH6VrI&X-Amz-Signature=f321c15ef1505613796e3d330a2aef1d7f0692edbc18b7fde925601514df7658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
