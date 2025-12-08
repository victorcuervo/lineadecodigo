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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHYV3SNQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T134705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGO0PDqIXjYyU%2FPjmVw9o%2BAEVQ%2BVLPZTwHGORBEo%2BvnYAiB3qTUgEoECHzxolwvNG1joYvR7NpbJDM5krRJMLkQKZCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhG6prbuwQqSImCVgKtwDNl6GazSSOBAqElBR6wkv6HmUN5ADDoyVou4eXzmBuSYjM6vIClrrv7f2XiEKUkVOqJEyXvTNX8mOYFWAkaKD2PlaESoFAeKrbtgUXnFrExR8HxHJZTCGfNuOVvqjQjm1SCxtTnGz5sELX6G9JJ%2Byhc4pc%2BDnfc8hvJg0dl6a8K0FD5KEIDgWW0NlYHbpvLcSoZxNO9wPouVVUfosX%2Bu8f%2Bbn694FU8mStYT9fCBK7gGu99wSvYISBons7vSXxaq29B27GR0mPzefmlZWPP4VWQSN1v%2FI6fLcipvg9yuSLb1jp7yVnWO%2F89uwShTpF4bMQVSdHP6WD%2BCBJh41Qw9LCDsKHMvF%2B60hp6YngrS9D3miVn60ia9IxZRSN0t34MKffeTYCPRZNuPrLYTo%2Bmhom0g3TLkG48a3dz4KFyCyJqDLhouRXM5VOlCSP6n20WoG6gnLEWn4Jmz8U8WZ%2FxwbNaBeRem7agCe%2B8vq8HtoQG55Wx4E%2FRnkJsjFtntouOb5fWMWvP%2Bv4q35XDuE7eoy4C7%2ByeZZ3aG5sJDQ0aknRNTxVHxw%2F8dNOw7bxFXJiCNM6APXcWEGUggkRIDBCcZzZ7Jx8A8TjgdMiISQW9HNQhHYmPcuVVae7FCOsEwwxo%2FbyQY6pgGHv2QsW9EJpZBWCemhzMj9Ff0JQj5kMH6KY%2BDPRmaSrjZWP2DlXy96415bFaSKsxlOw%2F4ntmB1q35TwY2O3cPxt520fCHDRfLFNeVGKshImfAjd0SohCj91lxE5%2BAGBWO1RJ0wKWn18OKOX9JJT8wRJ0oE8zHaYpKuCNhTiv2ZpmXi30G2P8xUNVr1wqBjMWy0895zhX2HtMM2oi6z3d%2BWtHVCO933&X-Amz-Signature=c4118a1079fc470d981387642e932181a42b7e53a47d9a44b19ec9858547efbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHYV3SNQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T134705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGO0PDqIXjYyU%2FPjmVw9o%2BAEVQ%2BVLPZTwHGORBEo%2BvnYAiB3qTUgEoECHzxolwvNG1joYvR7NpbJDM5krRJMLkQKZCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhG6prbuwQqSImCVgKtwDNl6GazSSOBAqElBR6wkv6HmUN5ADDoyVou4eXzmBuSYjM6vIClrrv7f2XiEKUkVOqJEyXvTNX8mOYFWAkaKD2PlaESoFAeKrbtgUXnFrExR8HxHJZTCGfNuOVvqjQjm1SCxtTnGz5sELX6G9JJ%2Byhc4pc%2BDnfc8hvJg0dl6a8K0FD5KEIDgWW0NlYHbpvLcSoZxNO9wPouVVUfosX%2Bu8f%2Bbn694FU8mStYT9fCBK7gGu99wSvYISBons7vSXxaq29B27GR0mPzefmlZWPP4VWQSN1v%2FI6fLcipvg9yuSLb1jp7yVnWO%2F89uwShTpF4bMQVSdHP6WD%2BCBJh41Qw9LCDsKHMvF%2B60hp6YngrS9D3miVn60ia9IxZRSN0t34MKffeTYCPRZNuPrLYTo%2Bmhom0g3TLkG48a3dz4KFyCyJqDLhouRXM5VOlCSP6n20WoG6gnLEWn4Jmz8U8WZ%2FxwbNaBeRem7agCe%2B8vq8HtoQG55Wx4E%2FRnkJsjFtntouOb5fWMWvP%2Bv4q35XDuE7eoy4C7%2ByeZZ3aG5sJDQ0aknRNTxVHxw%2F8dNOw7bxFXJiCNM6APXcWEGUggkRIDBCcZzZ7Jx8A8TjgdMiISQW9HNQhHYmPcuVVae7FCOsEwwxo%2FbyQY6pgGHv2QsW9EJpZBWCemhzMj9Ff0JQj5kMH6KY%2BDPRmaSrjZWP2DlXy96415bFaSKsxlOw%2F4ntmB1q35TwY2O3cPxt520fCHDRfLFNeVGKshImfAjd0SohCj91lxE5%2BAGBWO1RJ0wKWn18OKOX9JJT8wRJ0oE8zHaYpKuCNhTiv2ZpmXi30G2P8xUNVr1wqBjMWy0895zhX2HtMM2oi6z3d%2BWtHVCO933&X-Amz-Signature=6feee054dac017297c4db484e944e01ba103e3869e21d8dda806a3d3ae3776dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
