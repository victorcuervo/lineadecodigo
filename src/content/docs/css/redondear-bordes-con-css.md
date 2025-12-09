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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBSXDFHJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T011445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7WXX75gux0dt2uxY6ohdnSYsSO7dhtiqbZq%2FT%2F0bSdwIhANohJQXrSI59D%2B3Eri70oZhfPkBtk8Q3Ad009poP2zzgKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBcStM14djK3i%2FWHoq3AMJhx6pnSVHIOGtd2Tmwege9HubAmdhU8H3UNfjyOcHldFM0EBNdZ9i9SOYBT%2FSqMJH%2BT%2Baw4RRbamfRNNQnwtzLjXKIBz%2BQvVG7%2Btk2eQ0AvIg%2B%2F9mQszZT%2BznRphvvFU5UoFMcMWVepOsEnOkPeqnD0lvU%2B2Ra96XkC09%2F37RbBarNGLAMCQBo95rB3ULYLsj73FOu8MPY1C18ZNAz4DN52TMEPtNRIv9KzN%2FXhJHze4%2FgwkDExiuiyRxrcm3MIB9Lo7NkUWegf9kg6wVMfJcdGwNjGrSN6ZSVb5sf4ne7XejAlyk%2ByemBJrqKoJhGzvffbEitMcGWma4g2dYRoDD8BhSipiY%2BR1B1lcH8P9skpSYJVX%2BnIiW6d0iQq3gJPsz3D9%2FibWa3%2Fmw2qpEDLFpfKyyniUAW6L3eNk30fZgKpLFdQ6h0bWa1P9DU0gL8FbxHzgdIp6ampbRY6aD0SMsCPxAUYSTyLS8Z7JCxladz6XUCppWHxJ7U7Nv5gfYttQah%2Bf42wOxAOUzDzl5hh1OPC7K%2FCortgbpy5W74MT4FjC3ckuUeCaVoqFiqBcySZbF38UmWu%2B72avfsB6pms6pC3zuR3hnCWAC7TvM8Gw%2F%2F11mSR5oqwKCZplJvDCU6d3JBjqkAdleibtAByNszmHs8cf5OxgxVw%2FzRbTT2MDd0nWz1EeWsAfgQqzTcLZ94H5tH1NKMYP0jq6NOa00SH%2BKE%2Fy5Zx3udkeE6AIIbp7r45GotcEV0k2%2FrLsvLo2RUFDKRLYwEMNsUtNnUrtlzmE17ZbyUBphisL5o3HtFGpWrcxnLNHNiw4ELHZcx0DGo60yGuMRFo6nLg71HuSzegkyrtN%2BdQOEmEGh&X-Amz-Signature=e3c4c05fc8c3b6535c0e4688fe2ff56aa72fe768f91c65ce4b685f3cd4777c02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBSXDFHJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T011445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7WXX75gux0dt2uxY6ohdnSYsSO7dhtiqbZq%2FT%2F0bSdwIhANohJQXrSI59D%2B3Eri70oZhfPkBtk8Q3Ad009poP2zzgKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBcStM14djK3i%2FWHoq3AMJhx6pnSVHIOGtd2Tmwege9HubAmdhU8H3UNfjyOcHldFM0EBNdZ9i9SOYBT%2FSqMJH%2BT%2Baw4RRbamfRNNQnwtzLjXKIBz%2BQvVG7%2Btk2eQ0AvIg%2B%2F9mQszZT%2BznRphvvFU5UoFMcMWVepOsEnOkPeqnD0lvU%2B2Ra96XkC09%2F37RbBarNGLAMCQBo95rB3ULYLsj73FOu8MPY1C18ZNAz4DN52TMEPtNRIv9KzN%2FXhJHze4%2FgwkDExiuiyRxrcm3MIB9Lo7NkUWegf9kg6wVMfJcdGwNjGrSN6ZSVb5sf4ne7XejAlyk%2ByemBJrqKoJhGzvffbEitMcGWma4g2dYRoDD8BhSipiY%2BR1B1lcH8P9skpSYJVX%2BnIiW6d0iQq3gJPsz3D9%2FibWa3%2Fmw2qpEDLFpfKyyniUAW6L3eNk30fZgKpLFdQ6h0bWa1P9DU0gL8FbxHzgdIp6ampbRY6aD0SMsCPxAUYSTyLS8Z7JCxladz6XUCppWHxJ7U7Nv5gfYttQah%2Bf42wOxAOUzDzl5hh1OPC7K%2FCortgbpy5W74MT4FjC3ckuUeCaVoqFiqBcySZbF38UmWu%2B72avfsB6pms6pC3zuR3hnCWAC7TvM8Gw%2F%2F11mSR5oqwKCZplJvDCU6d3JBjqkAdleibtAByNszmHs8cf5OxgxVw%2FzRbTT2MDd0nWz1EeWsAfgQqzTcLZ94H5tH1NKMYP0jq6NOa00SH%2BKE%2Fy5Zx3udkeE6AIIbp7r45GotcEV0k2%2FrLsvLo2RUFDKRLYwEMNsUtNnUrtlzmE17ZbyUBphisL5o3HtFGpWrcxnLNHNiw4ELHZcx0DGo60yGuMRFo6nLg71HuSzegkyrtN%2BdQOEmEGh&X-Amz-Signature=969001765baa073ef2e12d3076cfe0b498e82fcdf335c72f44d61ed0c8ffe9f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
