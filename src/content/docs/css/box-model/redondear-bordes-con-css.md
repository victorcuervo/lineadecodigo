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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW5NPXNS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICA%2Bfl9QX6bIEGSGGQTnrwHezRqIpB1G8ucj8cdGsvyWAiEA6oqrGVbCMPxRybl8%2B%2BWWRSd4dTe%2BVC9KVO5cM1YooUoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDModPvVK9POojtoE2CrcAw%2FJdzDgzftANwfTHA6BU6VDi7pcFIJsUwEJLKQk8GcpYHiIUicrCi4DTDqLbcgskgMW603r6i91ve9vmlF4cHqmYpP5T5jerEsySpjHQiM3q0JLJR3E%2B%2FkqrEm3CgrL334WdId04cheHnl3P9K%2FrRVHce%2F3lU2X3W7pWAi73ZUKyicSc2gxzKTFpzx1SXQo9PG%2FZUuQX09wJ%2FGw5Er6dBSBmKzEusjJom63qjK%2FUACtTxnWP9wJ0OO4M4cbhLHopT%2FbabKYuVUDKBQIvFbyGZsfHimHwhfApy4CyxvL8P3fRf1%2FRaDBZWmDQqoqDJicJTlQ4TFd1ayD1RaCmBbQPo0yCnnCNTsRJrEAVIevSsdoI0LMczpIh4o02v9kk2%2Fd6fR%2F2WUojUTA2apQFjaksSzivgWkwnVeWKPmww8MYfCAWH6FST8AXnsjey5GkGjPH1ezPu6ae56SRsgi8CnQTgAAQ0vPoGbHIUy%2BdKS9ccgRC6FvaUgLLhmpLqgu8XGKfLLnNtWuYVfb1AuBuYA2laDmKggXS9sSiSKmc9z%2Fmn69oAU%2BSNWKNaQYjMFLD4lwlQoCS4YFedwo1QjucyNGts3TnRWHx7gcQQmCzSGrmxm485MUsByJ3CXNVwDvMMOdicoGOqUBOe%2BC%2FkpKVPabNsWLoBmsElhT4N7cBkRJhVvyxPWoiapw9M0KCJNDEh%2FUGlF7XAsldFqINwyh6Cmssn8z60kq3skT8hDgWgRObRAaNTfoVTOP%2Fv4BZFqPSw5vY3vJ5O3PwTgmyUU8zvVwJ7EBwjycAgYMa0x7vbfCkQGS2w07gKtE2WylZffoFIK9OrwnA2cJYALxShXFaL2sh0Zlp5yXH5ozk%2Bea&X-Amz-Signature=9ac36bdd7cbb08ebc7cf00ec2894e9a81fe664d6860db84c13b2b142ed39c5cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW5NPXNS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICA%2Bfl9QX6bIEGSGGQTnrwHezRqIpB1G8ucj8cdGsvyWAiEA6oqrGVbCMPxRybl8%2B%2BWWRSd4dTe%2BVC9KVO5cM1YooUoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDModPvVK9POojtoE2CrcAw%2FJdzDgzftANwfTHA6BU6VDi7pcFIJsUwEJLKQk8GcpYHiIUicrCi4DTDqLbcgskgMW603r6i91ve9vmlF4cHqmYpP5T5jerEsySpjHQiM3q0JLJR3E%2B%2FkqrEm3CgrL334WdId04cheHnl3P9K%2FrRVHce%2F3lU2X3W7pWAi73ZUKyicSc2gxzKTFpzx1SXQo9PG%2FZUuQX09wJ%2FGw5Er6dBSBmKzEusjJom63qjK%2FUACtTxnWP9wJ0OO4M4cbhLHopT%2FbabKYuVUDKBQIvFbyGZsfHimHwhfApy4CyxvL8P3fRf1%2FRaDBZWmDQqoqDJicJTlQ4TFd1ayD1RaCmBbQPo0yCnnCNTsRJrEAVIevSsdoI0LMczpIh4o02v9kk2%2Fd6fR%2F2WUojUTA2apQFjaksSzivgWkwnVeWKPmww8MYfCAWH6FST8AXnsjey5GkGjPH1ezPu6ae56SRsgi8CnQTgAAQ0vPoGbHIUy%2BdKS9ccgRC6FvaUgLLhmpLqgu8XGKfLLnNtWuYVfb1AuBuYA2laDmKggXS9sSiSKmc9z%2Fmn69oAU%2BSNWKNaQYjMFLD4lwlQoCS4YFedwo1QjucyNGts3TnRWHx7gcQQmCzSGrmxm485MUsByJ3CXNVwDvMMOdicoGOqUBOe%2BC%2FkpKVPabNsWLoBmsElhT4N7cBkRJhVvyxPWoiapw9M0KCJNDEh%2FUGlF7XAsldFqINwyh6Cmssn8z60kq3skT8hDgWgRObRAaNTfoVTOP%2Fv4BZFqPSw5vY3vJ5O3PwTgmyUU8zvVwJ7EBwjycAgYMa0x7vbfCkQGS2w07gKtE2WylZffoFIK9OrwnA2cJYALxShXFaL2sh0Zlp5yXH5ozk%2Bea&X-Amz-Signature=1f7c994661e9fe488eaf128fd320edf6b61dc758cdd80838fa7fb76047f78b98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
