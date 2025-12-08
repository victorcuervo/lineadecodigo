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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N5VX6ID%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T021104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRive1YmUaR6R0KdY%2Fy0pYU2L4eLmVmVU5XzbncjKT6AiBZI%2Bh%2B4O5Aubkk3Opwiw0NlHhcaCtB1EAKiQrBEbdKAiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtf%2FdkXOQtzE63MFkKtwDIvA6UmEBs73IEVGDsJtActJLuXbBZFYAD2uF%2F2661tE9K2E%2FNmBA4RxOZrejHH5j%2B3Auyz2SLNX543LOsXLF9rPcIKZt2XlI5iNUMPSN%2FbyiAjITplHhFumUQYHBG48eVTdtBohDIpmDcJtUMovn1iw9KhUUiK60M1fXzn9eM8Q67q4RoaNM6pTfdNhuSiO0uCK0xGYMTACbd3lVl21H9XErvF2e2ObY7nABvh9Hv8v%2BNrLvhXZJFnqh7T%2BAcK5moGNyiNo1y8YoZIQhQpB%2F%2BCreVW%2Beyss8sNZxjyLsXcDjzidHTN1GktLKpWRWQf%2FqdN%2FwxKIXYuygfHp7jT6eEQeX2dk%2BjDJ0k9Fg%2FtDS8iLHg1zOoKkzz%2Fd279QWEEZIpYHWq2NP0HZOXbyyZMHT9ME3MNf2Fev1GvIqLvcNSQRLXJ%2FkgylsjykOWgKOb17Qrw7VlkmJhqTfUAr0LgADRmWhCzjTwlNofscQpd6ZWdq9F9BdGRI7Wjxyw7r2fllzcBhtIGD0kkIG%2F%2B4e6%2BTQ3p9CBJa7AwUVmC9Je5Q0h9mhI26HTlHR7a%2BfXdtKjCdstABMq8S0c1oLTTQ27aqRxK2dZXXNm3HqGa4tsPP7MXhZvrMcBKFovMjw6rsw5tDYyQY6pgHB2tEzL1HgHznpS5YVuTO%2F8PQMiupX2aSzRd938CGuX8R%2BST60RgrKEtWisUak20axQgwbOx6j8966a6FWxUoPTQdZ60%2F6CvT9aWT2ErrRiYJ7CiuEvrPha59vvhWI1LZwIgQgGxKRcJCe22wg7ebxndvgwDkMWWmhBUA9jFOQWWjxfd9rW1CutU%2BoSeeAgUzSLoR74hII4M%2FSz8VxE8LDuyNUzb1j&X-Amz-Signature=ee8061b4427a5cbcd79100b3fd516627b435da9c136e223cc04e278d48e499c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N5VX6ID%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T021104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRive1YmUaR6R0KdY%2Fy0pYU2L4eLmVmVU5XzbncjKT6AiBZI%2Bh%2B4O5Aubkk3Opwiw0NlHhcaCtB1EAKiQrBEbdKAiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtf%2FdkXOQtzE63MFkKtwDIvA6UmEBs73IEVGDsJtActJLuXbBZFYAD2uF%2F2661tE9K2E%2FNmBA4RxOZrejHH5j%2B3Auyz2SLNX543LOsXLF9rPcIKZt2XlI5iNUMPSN%2FbyiAjITplHhFumUQYHBG48eVTdtBohDIpmDcJtUMovn1iw9KhUUiK60M1fXzn9eM8Q67q4RoaNM6pTfdNhuSiO0uCK0xGYMTACbd3lVl21H9XErvF2e2ObY7nABvh9Hv8v%2BNrLvhXZJFnqh7T%2BAcK5moGNyiNo1y8YoZIQhQpB%2F%2BCreVW%2Beyss8sNZxjyLsXcDjzidHTN1GktLKpWRWQf%2FqdN%2FwxKIXYuygfHp7jT6eEQeX2dk%2BjDJ0k9Fg%2FtDS8iLHg1zOoKkzz%2Fd279QWEEZIpYHWq2NP0HZOXbyyZMHT9ME3MNf2Fev1GvIqLvcNSQRLXJ%2FkgylsjykOWgKOb17Qrw7VlkmJhqTfUAr0LgADRmWhCzjTwlNofscQpd6ZWdq9F9BdGRI7Wjxyw7r2fllzcBhtIGD0kkIG%2F%2B4e6%2BTQ3p9CBJa7AwUVmC9Je5Q0h9mhI26HTlHR7a%2BfXdtKjCdstABMq8S0c1oLTTQ27aqRxK2dZXXNm3HqGa4tsPP7MXhZvrMcBKFovMjw6rsw5tDYyQY6pgHB2tEzL1HgHznpS5YVuTO%2F8PQMiupX2aSzRd938CGuX8R%2BST60RgrKEtWisUak20axQgwbOx6j8966a6FWxUoPTQdZ60%2F6CvT9aWT2ErrRiYJ7CiuEvrPha59vvhWI1LZwIgQgGxKRcJCe22wg7ebxndvgwDkMWWmhBUA9jFOQWWjxfd9rW1CutU%2BoSeeAgUzSLoR74hII4M%2FSz8VxE8LDuyNUzb1j&X-Amz-Signature=122b3ea35228b97fa4a27f0b3a3af09f20f71380cf25209c23f2b82f23388b38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
