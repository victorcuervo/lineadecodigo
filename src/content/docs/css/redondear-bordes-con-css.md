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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI3UMBKK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIC3M45H4nXd1gDTmdkMdsoP2rMOaQvZm607PqjC25RnAAiAdX2bunwXkrNlsuDXleJqS6XreUP8P6xGqwnqtHvoAnSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM9xo8tQhSfuAx%2BfP2KtwDn%2Frjj5ssKMCpHUZfnhagi1AI2ztWQXN9GGbY%2BMrHgE8BZbcEB1UGE%2F%2BzAayBl63InrdqjTIspv6enLXkr6H%2BTM9lw3xjNTt70lPBaLbM%2FTiKcWvgJwdo%2FQJAHWtF8Y9h2g%2FjbZD48D1%2FMx%2F6jEk5y5Zpm%2BlbOFUkRsaai85L1TAc%2BNFF1yKwvFW7XoutFzyNsWWLTfJUirLpQajmZdaSr8%2BtpEt1Kbu1e2F6VSLRDFv2FMqh3Q9YDoAYP2tcRntvjHwD9HWfY1%2FZWaz5bsleLB8Vp6JfWux4KqE32WKF3%2BvOwp2u%2FmDV1hjFVsE%2FEfNZ%2B8Elf8ktRPSzoc04WypJjjqT5HepoYjKQQkoErFZNDzlgIeiNq8rZKGrynpO%2FTzkeVLyVi%2FQyXGgApXLuJhLx62lPBz%2BRSiiwRLyQZ%2BEbPxK6fxklZz9JRflnUIvKJPtPENsppygeVg0nysN%2BFLSG5uNf1T21cyPVl61i0EHA8VnMIUyGnnXccLSii6OXGwxXSw7dFxCmVXRyuK4%2BazyhhiG01kd4qdVV3KORGEh%2BKHGgVexVQXDu%2BBXh0epSVTnMM8OgSCaJE9uHJ8E1xFuijnHs%2FgcMfn4eYSVascieYy2XnChr76nXPYFjAMwsr7GyQY6pgG2rbMbTfPnFngh8jfAsEDuwNz%2B5a9pKFQXXDesyIkBK5I%2Bs5lvwi002UgXksi8034B2VDUtjhoUNmvyY%2FzLHFKtQJ%2FLbikiGm5RVMdlWXxyzUlKZ%2Fg41e1JoJhzia2sRfBIXohGBYzQK2JrvE3tFnNFhfKmyAYQRxV%2BSeIC1sk%2FmgwNXakBcO3g69FCnccvNQ1wo8VsBsOML%2FE9ol1J3PQgin4Ip3t&X-Amz-Signature=a9fdefc9c59ae0c3628200d5d8fd417c1bb5b7d50cadd9be0790f6e9ca1a253d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI3UMBKK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIC3M45H4nXd1gDTmdkMdsoP2rMOaQvZm607PqjC25RnAAiAdX2bunwXkrNlsuDXleJqS6XreUP8P6xGqwnqtHvoAnSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM9xo8tQhSfuAx%2BfP2KtwDn%2Frjj5ssKMCpHUZfnhagi1AI2ztWQXN9GGbY%2BMrHgE8BZbcEB1UGE%2F%2BzAayBl63InrdqjTIspv6enLXkr6H%2BTM9lw3xjNTt70lPBaLbM%2FTiKcWvgJwdo%2FQJAHWtF8Y9h2g%2FjbZD48D1%2FMx%2F6jEk5y5Zpm%2BlbOFUkRsaai85L1TAc%2BNFF1yKwvFW7XoutFzyNsWWLTfJUirLpQajmZdaSr8%2BtpEt1Kbu1e2F6VSLRDFv2FMqh3Q9YDoAYP2tcRntvjHwD9HWfY1%2FZWaz5bsleLB8Vp6JfWux4KqE32WKF3%2BvOwp2u%2FmDV1hjFVsE%2FEfNZ%2B8Elf8ktRPSzoc04WypJjjqT5HepoYjKQQkoErFZNDzlgIeiNq8rZKGrynpO%2FTzkeVLyVi%2FQyXGgApXLuJhLx62lPBz%2BRSiiwRLyQZ%2BEbPxK6fxklZz9JRflnUIvKJPtPENsppygeVg0nysN%2BFLSG5uNf1T21cyPVl61i0EHA8VnMIUyGnnXccLSii6OXGwxXSw7dFxCmVXRyuK4%2BazyhhiG01kd4qdVV3KORGEh%2BKHGgVexVQXDu%2BBXh0epSVTnMM8OgSCaJE9uHJ8E1xFuijnHs%2FgcMfn4eYSVascieYy2XnChr76nXPYFjAMwsr7GyQY6pgG2rbMbTfPnFngh8jfAsEDuwNz%2B5a9pKFQXXDesyIkBK5I%2Bs5lvwi002UgXksi8034B2VDUtjhoUNmvyY%2FzLHFKtQJ%2FLbikiGm5RVMdlWXxyzUlKZ%2Fg41e1JoJhzia2sRfBIXohGBYzQK2JrvE3tFnNFhfKmyAYQRxV%2BSeIC1sk%2FmgwNXakBcO3g69FCnccvNQ1wo8VsBsOML%2FE9ol1J3PQgin4Ip3t&X-Amz-Signature=a31c7595e47099c4a8b1bc7c54b0bf6f59ec8e3ec58dd24ba476f6b84dcbfb5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
