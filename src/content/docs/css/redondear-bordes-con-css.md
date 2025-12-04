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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQ7QGWV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIFhg9I4gOsNdL4cgw2j3wJcOKADhcAzMnTUQirq78lCyAiEA0MJC8%2Bwjw4mRugtuACOUTejVK6tC6iUZTpCCOtAk1zYq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDIorTeMwRPKEPsqbDyrcA41TSrdZytw%2B1E4qHUXsu%2BkrvjMNc%2F%2FjkQC7kNVeW2qHzTnzEu%2B7oTntHGkcXiZddKy1JXFPa%2FLG6SJWribso64iwl1Yblo9mTak%2FnxtaWlepxQoWwdPjtVGxg4v5sq0nGa6uYIrXcQgEuVFStMFRKW6z6VVsPHQzj2T8A3N%2Fom0G%2BsMzhN87tWUGeItsNTRf0S7mqqT7V1t0G5V4G%2BAYDRuKTsibXi9LFO8bJxwlxk0jpIS5j9fRTiEr8TgXC2AcnLN0xPD3ubKFx9coVlWTOMLrhwwpWKlmG40NvHwSvHL%2Fu2y3yhLp8trkaFORB%2BF3PzCFcy4rxCcDFxadbDH9tLo8WUxfq1EGktR9zhk8XbaXcLrKgxAACmCszhp0REIKl%2FRTmUSK3DzJjZCADa6%2FlSV9MYvqMgkoblVuFbTlUqW9Kg5%2BIvtAdOG67guUJqFnxPL8bYJJzEhTXjEDm%2FxrV6YgX4pI8iunDSqHO2XKu3fS%2Fne2B0okPZdlLIe9PNGq%2FT8hgYBQWkJy1qYCO7w%2B5uqd8CNECJtxclJ886hIDh2uGvzwLXZrauNKd7JgKVNNa92Z5rZzzMgfKjjK3E4VIF5BTERZ10dOz49U%2Ba8Ztr4w7Jj3kEVXDhc8StQMKfzw8kGOqUBwvBis4id8%2FNRI3DY%2F2LAudQ9XrMAGNhr99mWibdByinnuUY64P3SY7cWuCFUHbHWb7s3bAzJBWugZTplSnDB%2FlEke8ZyMsL%2FCil7S49%2Bh6c1e%2B0DXvXMzJBTi5%2FQvUsKJuU7nxqzj5xiuQeg6FBk3VeqGxMXiq%2FVLDn8cLt4quSz%2BpTLSMMKBU6cMb1qFe5xLW96TwoVqNcNrwfz7dWA4H2vXqB1&X-Amz-Signature=b6e827323805dc512ded7743d5f0cf03e6ffc339429d55b531d7dd7a744b29ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQ7QGWV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIFhg9I4gOsNdL4cgw2j3wJcOKADhcAzMnTUQirq78lCyAiEA0MJC8%2Bwjw4mRugtuACOUTejVK6tC6iUZTpCCOtAk1zYq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDIorTeMwRPKEPsqbDyrcA41TSrdZytw%2B1E4qHUXsu%2BkrvjMNc%2F%2FjkQC7kNVeW2qHzTnzEu%2B7oTntHGkcXiZddKy1JXFPa%2FLG6SJWribso64iwl1Yblo9mTak%2FnxtaWlepxQoWwdPjtVGxg4v5sq0nGa6uYIrXcQgEuVFStMFRKW6z6VVsPHQzj2T8A3N%2Fom0G%2BsMzhN87tWUGeItsNTRf0S7mqqT7V1t0G5V4G%2BAYDRuKTsibXi9LFO8bJxwlxk0jpIS5j9fRTiEr8TgXC2AcnLN0xPD3ubKFx9coVlWTOMLrhwwpWKlmG40NvHwSvHL%2Fu2y3yhLp8trkaFORB%2BF3PzCFcy4rxCcDFxadbDH9tLo8WUxfq1EGktR9zhk8XbaXcLrKgxAACmCszhp0REIKl%2FRTmUSK3DzJjZCADa6%2FlSV9MYvqMgkoblVuFbTlUqW9Kg5%2BIvtAdOG67guUJqFnxPL8bYJJzEhTXjEDm%2FxrV6YgX4pI8iunDSqHO2XKu3fS%2Fne2B0okPZdlLIe9PNGq%2FT8hgYBQWkJy1qYCO7w%2B5uqd8CNECJtxclJ886hIDh2uGvzwLXZrauNKd7JgKVNNa92Z5rZzzMgfKjjK3E4VIF5BTERZ10dOz49U%2Ba8Ztr4w7Jj3kEVXDhc8StQMKfzw8kGOqUBwvBis4id8%2FNRI3DY%2F2LAudQ9XrMAGNhr99mWibdByinnuUY64P3SY7cWuCFUHbHWb7s3bAzJBWugZTplSnDB%2FlEke8ZyMsL%2FCil7S49%2Bh6c1e%2B0DXvXMzJBTi5%2FQvUsKJuU7nxqzj5xiuQeg6FBk3VeqGxMXiq%2FVLDn8cLt4quSz%2BpTLSMMKBU6cMb1qFe5xLW96TwoVqNcNrwfz7dWA4H2vXqB1&X-Amz-Signature=67ae77e09a7d7f79c7a51469c4ecd80d677700b4ac5871135e530181fa91bf7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
