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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXSYBUD7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx0%2F9gJkLBiWP0bqSloeRBF%2B71%2FNS%2FS%2B0cloTbo4A2rgIhAPHP4qW8xB2BPZ69wq%2Fw6aGI3m3mi8tFxa9Gx1r5XozVKv8DCH8QABoMNjM3NDIzMTgzODA1IgyMN94yg7AZCQSZL%2Fkq3AMR%2FecElUyS323wsI4tF9%2FnN36tMUCrT4LOBlFeFC%2BgKwtO4zNF4aiQXOPTACsalnrrL2H2inHqyHSLYkHyMqDLsCnMmWkUoDxP480lkwgnH2WdcuMYEZGOlzVQVBirgFiXn7aU4M%2BYVCdTiSe7yf8TI%2FC2E68VV1UOsXVHcrp7kz643gcbf%2BtVMEl2ljHVV6k2aRU5SbBFR0hZUvrJKyZOJRWuZwSfi8o4dZKMkO82IO0qrD9u5PXbbuerh0FHaF0mpkFnb9V11bbEs%2BUv%2F7lMERUxXkYWxw64F5IEV0HhDxZvbUzzUX7seDh0CgiWWpmTL18rbPtAZICRfwEhZ74b%2BgpYE39Gs8tzNxYd6HpOZB3W4fVf6rL3%2BleizaXh9bYzkjSaOFjTA6qbM0527W87myU9JxEH%2FUZhjaDFf1J%2FezZXd3h5xIDWiPmaP3uAdiIOA0o2VTaQarNKx5MvCuUauK7lA8gIiLGB%2BwEMp5zV%2FRxyao6oFAI0hosLPpGUuigjvjhfnnZbwy%2BVP03zEfNrmaJrRgs8%2FV47Fig8cAgG8i67PNQSPhs0X5RE%2FlQHHIC5%2FQ5cbrga9bwc8VhHSkHN%2B6v%2BqOIZCCnenW4LLnhv12XHSxwBT9rO9pgsyjDB4YrKBjqkAaQnmvgOd7Je%2B5I0v3gcKc5DRTPKJHYuJSg%2FmE2t5CGbhEtz0nfYgeKDN8uK5tO%2BzgzuTtjQ%2Fy33zbyfbJcM9%2BRKr5CPgKkK6Dqg%2BcVqytFXzymM%2F6kgKPw9Wzav6n1M1FonTgwi22JEmX1fVIpxOOT0CPxoISJsEwyzPNqRsw7vHB9NBH1yKNHnitiBwsqXKeOEmfeVg3bw1CeBBBzWSGkkzXAn&X-Amz-Signature=6535e951f178139c9090512b9732943ad382268d06f4823535e1b8dcec35c5ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXSYBUD7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx0%2F9gJkLBiWP0bqSloeRBF%2B71%2FNS%2FS%2B0cloTbo4A2rgIhAPHP4qW8xB2BPZ69wq%2Fw6aGI3m3mi8tFxa9Gx1r5XozVKv8DCH8QABoMNjM3NDIzMTgzODA1IgyMN94yg7AZCQSZL%2Fkq3AMR%2FecElUyS323wsI4tF9%2FnN36tMUCrT4LOBlFeFC%2BgKwtO4zNF4aiQXOPTACsalnrrL2H2inHqyHSLYkHyMqDLsCnMmWkUoDxP480lkwgnH2WdcuMYEZGOlzVQVBirgFiXn7aU4M%2BYVCdTiSe7yf8TI%2FC2E68VV1UOsXVHcrp7kz643gcbf%2BtVMEl2ljHVV6k2aRU5SbBFR0hZUvrJKyZOJRWuZwSfi8o4dZKMkO82IO0qrD9u5PXbbuerh0FHaF0mpkFnb9V11bbEs%2BUv%2F7lMERUxXkYWxw64F5IEV0HhDxZvbUzzUX7seDh0CgiWWpmTL18rbPtAZICRfwEhZ74b%2BgpYE39Gs8tzNxYd6HpOZB3W4fVf6rL3%2BleizaXh9bYzkjSaOFjTA6qbM0527W87myU9JxEH%2FUZhjaDFf1J%2FezZXd3h5xIDWiPmaP3uAdiIOA0o2VTaQarNKx5MvCuUauK7lA8gIiLGB%2BwEMp5zV%2FRxyao6oFAI0hosLPpGUuigjvjhfnnZbwy%2BVP03zEfNrmaJrRgs8%2FV47Fig8cAgG8i67PNQSPhs0X5RE%2FlQHHIC5%2FQ5cbrga9bwc8VhHSkHN%2B6v%2BqOIZCCnenW4LLnhv12XHSxwBT9rO9pgsyjDB4YrKBjqkAaQnmvgOd7Je%2B5I0v3gcKc5DRTPKJHYuJSg%2FmE2t5CGbhEtz0nfYgeKDN8uK5tO%2BzgzuTtjQ%2Fy33zbyfbJcM9%2BRKr5CPgKkK6Dqg%2BcVqytFXzymM%2F6kgKPw9Wzav6n1M1FonTgwi22JEmX1fVIpxOOT0CPxoISJsEwyzPNqRsw7vHB9NBH1yKNHnitiBwsqXKeOEmfeVg3bw1CeBBBzWSGkkzXAn&X-Amz-Signature=91c64dc09c0d858db50e3034f48c132ce53318632876d4af875cb0d25ed7a759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
