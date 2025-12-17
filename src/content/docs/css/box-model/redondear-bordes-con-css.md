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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVFBAFH3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHS6VJqdPhEsRt%2BCblJM1ZUGjnabxwmVg8uT6cve6qzAAiBZG5qgf2P6QmFijtG%2BaRIF%2BvleFU5XtR0I0%2BdmY%2F%2BKmCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMknHjH6pcGrx3kj0HKtwDvySBe56mCOXs1%2BuZdK1OC2NPoDBkwIN2bijKEDXM36Kl0KCKoHEXb%2FQpboJyDjNYH%2FaVZeNzBQrtYjnGU6Uj2CXsOBpZSOTXpU1EqNxmNK4hN5aJHNhRWjMOBtKNiHMXpNn%2BKGX4F1zROR9b%2BotsWWjlN76csm1fNgzCXND1GEbjyBcWIzmqT%2F525TBbo%2BGuAd0hm7Ca75t4b3aXDCa67MOBv3RQjFNIzXYV9bNWcwOkpJ4Fme3TbgLGbVob9i5ODterntdA0HeKOzsRPRQcORY243eAOIEjbKohLN0v3CrQervCW3SBNh5HPhmKiW2ipCjnmzpzLleZC8tTmvXYHRUmYqfF%2FUC9x1IDBNmurywi2fpEuORwVlzT7adN8NsOG8QlXVgNC2LDUmU1Rh4dJfPIjvGb0Lpn9zpEvcWE%2By3cUpjmTTrSMDAuSYHskKACc7d5wMvrz%2BOQPHVwbUQbsvH9zk1NIoFXVrA1NmKDZ1c2%2BtzTMi1LzGa%2FtZoaqXSpvgfwLDxfv76BVsWw5%2FNAeCSW0DIu1hD6IUd38O1uWXL36GRAhz2TlKDk%2FZhks2qFvawu1Zf%2FdBCciP%2BaGPay0%2BqxHfTTKRqC1Xtv5zpWXczwurbBMIXWelMhq1Qwo9KJygY6pgHHw8p9txH49I86zF07qe5AI2nJXjQh5GKF6gk8lRcYgsQg8cdH13VnIWMs%2BWq1FYuIC3qy6fbnntMglgYf%2BPygjHixg95kkMyaOh5leGd1SQQxgsSa7KjRyM%2FG22ZXeVSaQjG8jlHTcm435EzBAOinNZL733KV6KHTUmNO3tqhPeM%2FUczPOOCVbwupxYUm19V%2BpxdPvxdekPomy%2FWLCHj2bOS%2FE5Kk&X-Amz-Signature=111fbfd623a7d17d9fe64967f8aa612ab094e99bdeeb228820f347bfea91a35f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVFBAFH3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHS6VJqdPhEsRt%2BCblJM1ZUGjnabxwmVg8uT6cve6qzAAiBZG5qgf2P6QmFijtG%2BaRIF%2BvleFU5XtR0I0%2BdmY%2F%2BKmCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMknHjH6pcGrx3kj0HKtwDvySBe56mCOXs1%2BuZdK1OC2NPoDBkwIN2bijKEDXM36Kl0KCKoHEXb%2FQpboJyDjNYH%2FaVZeNzBQrtYjnGU6Uj2CXsOBpZSOTXpU1EqNxmNK4hN5aJHNhRWjMOBtKNiHMXpNn%2BKGX4F1zROR9b%2BotsWWjlN76csm1fNgzCXND1GEbjyBcWIzmqT%2F525TBbo%2BGuAd0hm7Ca75t4b3aXDCa67MOBv3RQjFNIzXYV9bNWcwOkpJ4Fme3TbgLGbVob9i5ODterntdA0HeKOzsRPRQcORY243eAOIEjbKohLN0v3CrQervCW3SBNh5HPhmKiW2ipCjnmzpzLleZC8tTmvXYHRUmYqfF%2FUC9x1IDBNmurywi2fpEuORwVlzT7adN8NsOG8QlXVgNC2LDUmU1Rh4dJfPIjvGb0Lpn9zpEvcWE%2By3cUpjmTTrSMDAuSYHskKACc7d5wMvrz%2BOQPHVwbUQbsvH9zk1NIoFXVrA1NmKDZ1c2%2BtzTMi1LzGa%2FtZoaqXSpvgfwLDxfv76BVsWw5%2FNAeCSW0DIu1hD6IUd38O1uWXL36GRAhz2TlKDk%2FZhks2qFvawu1Zf%2FdBCciP%2BaGPay0%2BqxHfTTKRqC1Xtv5zpWXczwurbBMIXWelMhq1Qwo9KJygY6pgHHw8p9txH49I86zF07qe5AI2nJXjQh5GKF6gk8lRcYgsQg8cdH13VnIWMs%2BWq1FYuIC3qy6fbnntMglgYf%2BPygjHixg95kkMyaOh5leGd1SQQxgsSa7KjRyM%2FG22ZXeVSaQjG8jlHTcm435EzBAOinNZL733KV6KHTUmNO3tqhPeM%2FUczPOOCVbwupxYUm19V%2BpxdPvxdekPomy%2FWLCHj2bOS%2FE5Kk&X-Amz-Signature=1a4d481dc83c61a8323c1b88be2e8ea4135b814cdef017b2f39ec6c60a9f81c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
