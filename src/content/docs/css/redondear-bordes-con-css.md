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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YLVL2LL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyjOMrxMENMCXB2SV%2F9db%2Blh54m6L1eKNgou1nxa2ZPAIhAPXAuaXEnEYTz4DQ6z0XEqLF7UciD3b%2FvxArKj8bOkerKv8DCGAQABoMNjM3NDIzMTgzODA1Igxg%2FrRbX7fPGQrJBTkq3AM2VOozSZa9O5hzadK2Vc%2FDOxGRHlfchgnPCecOWBjAGhd3DO5bdqef7p3P5l8LxeExllsfQTrZKPxqiYJrudheIqiDdMZzOJZict1jczrFoNncKwSalfd%2FiTCoAVgFLp9vbJoP43b2u9KbRHCkyweUGuhRj%2Fmvfdn9fvSgfADvyiDwD91l%2B5nN1HPdh%2F2ua3WXBZMdEImU8RcihMnYfGzAr4XHZx4wpHrJKjyTSDhvzjdCTaQnERbi%2FL4vjy8cyoKHclo%2B%2FpBkjd889S%2B0wGIzRf%2B9BUMvvDDlrZcQ0csXfX%2BJHJIUPNfzzo2BYArgzhr1S%2FrO6h6au0aBQPIVXwvktfv3XwPx6V4nO5N0Id6%2FFc6Jbt6sP19vJsuAOSyJsaq1vjEZT7Hw0rv%2Brl9DkddkSoEUHx9qzu32ZqjXjEBJtjc3lNexmTZAhZeoxXtUm%2FpgAp4Kc7skWTEB12oMZHHP8R1MTdvkU62e8ZsL6c8VD6exVDMjwZ%2BexnEKD380jC8sIPu6WWBbyMlBc8GKGBJOu%2BZkefXL4G2%2BLJrP7IhWJO6BywvFbRMfbWminlitiFyKhQItsF%2BvpZROWIUb4lzrnT1rdE%2FpGOfTX%2B2U2TMFC95tyyLQVz8rLWb4STCD6cvJBjqkAfTDs1pNEkKRUxs8IsU%2BUEHsn%2B8l%2Fx7W%2FncIrxw8JQixSBocuN5cRgrRV%2FD37J%2ByNDDK8B0DjGzj%2BMN5pToQIchGMPIqnAbkRc7OL4PEWBxnaI4M8x%2BDJiSoM0XaG7%2Foxq6mZrUq07emOtRoKJ%2B1uEqUzfgs7%2B3YyzEXCSZpE6Nbfi5aRnilAAxPZraSRu1urqIAZUQONk4uLalT2AqziGmxDqbD&X-Amz-Signature=220287b5a746239f0a3977ef2cc1569eaccb83dab7a2309df703fe7bacfb2402&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YLVL2LL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyjOMrxMENMCXB2SV%2F9db%2Blh54m6L1eKNgou1nxa2ZPAIhAPXAuaXEnEYTz4DQ6z0XEqLF7UciD3b%2FvxArKj8bOkerKv8DCGAQABoMNjM3NDIzMTgzODA1Igxg%2FrRbX7fPGQrJBTkq3AM2VOozSZa9O5hzadK2Vc%2FDOxGRHlfchgnPCecOWBjAGhd3DO5bdqef7p3P5l8LxeExllsfQTrZKPxqiYJrudheIqiDdMZzOJZict1jczrFoNncKwSalfd%2FiTCoAVgFLp9vbJoP43b2u9KbRHCkyweUGuhRj%2Fmvfdn9fvSgfADvyiDwD91l%2B5nN1HPdh%2F2ua3WXBZMdEImU8RcihMnYfGzAr4XHZx4wpHrJKjyTSDhvzjdCTaQnERbi%2FL4vjy8cyoKHclo%2B%2FpBkjd889S%2B0wGIzRf%2B9BUMvvDDlrZcQ0csXfX%2BJHJIUPNfzzo2BYArgzhr1S%2FrO6h6au0aBQPIVXwvktfv3XwPx6V4nO5N0Id6%2FFc6Jbt6sP19vJsuAOSyJsaq1vjEZT7Hw0rv%2Brl9DkddkSoEUHx9qzu32ZqjXjEBJtjc3lNexmTZAhZeoxXtUm%2FpgAp4Kc7skWTEB12oMZHHP8R1MTdvkU62e8ZsL6c8VD6exVDMjwZ%2BexnEKD380jC8sIPu6WWBbyMlBc8GKGBJOu%2BZkefXL4G2%2BLJrP7IhWJO6BywvFbRMfbWminlitiFyKhQItsF%2BvpZROWIUb4lzrnT1rdE%2FpGOfTX%2B2U2TMFC95tyyLQVz8rLWb4STCD6cvJBjqkAfTDs1pNEkKRUxs8IsU%2BUEHsn%2B8l%2Fx7W%2FncIrxw8JQixSBocuN5cRgrRV%2FD37J%2ByNDDK8B0DjGzj%2BMN5pToQIchGMPIqnAbkRc7OL4PEWBxnaI4M8x%2BDJiSoM0XaG7%2Foxq6mZrUq07emOtRoKJ%2B1uEqUzfgs7%2B3YyzEXCSZpE6Nbfi5aRnilAAxPZraSRu1urqIAZUQONk4uLalT2AqziGmxDqbD&X-Amz-Signature=213a9ce51b481ccf2d9cf492f3476460310559eaac96fc0b2924993084519707&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
