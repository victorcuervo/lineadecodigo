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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSMXZ2J4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T145056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0hamrmYqpOIaJC8PJKllerA%2BairQ0MZMYagDcvBizDAiEAgQQT3jVMf1MzVG1bB1B7poMvnYtBXLinHBVsBpeoYBgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGloBI1mhyiDZ0uo2yrcAx78ZOpcMr2FYj86IDg2DmiGDOfmCJOveU53AkTXJciyo%2BtjxtZ3yH1t9ABhKMcy6zmgAH%2FTrUtXDzJNJRaSr%2F%2FX6sNkW6SwH2lXwX0OJkKKIBx8ENSbtTSx%2BR7Xwia3RqzdCeuHubzhOwDZSXmQXGFBhQfFtRUt48Smic95VrjXbfXNMJzvXN6tuL6OFsyLIaJVS0R8e6hCj2P7B4qdbYKcaHFvWTE%2BIUmLbjASbnDeeF7QXe3TPOaRopSSra8Op7b%2BMTUkHArDgYUQQzBlNO29seQKxGCAKCVFYWlUu7HVLbWgLTQLjW45mO1uIBBlyhYCJqR7GODfgWk5QEHY7UuJgd8%2FzsHnRUkB8Pqtzo7lQSBzsVie3Mj65Hn3rJvy7IgdkvAQOzbrphcNMZC%2B2joMOJgCpY2DYAU5I%2FWVPV98CTfQ5ASZ4gdnMILMnGKNS7xZMFtn3S5Fp8v6svcqd7OzRxglunlKo04T27C6pUg7IlRI%2BWiP5yMH%2BvXkPShh1YANKSVlj%2FFXp7Fx9235fXDQRxwLAR8H2s0cBAVzxepM9LJHoV6L3OGckP9wdIAA0zUA6co4S2ME4EvFWT4Hg1oQvjYWkWs016Vj7V9yOSzSCj7u2e278ULag%2B2QMJyZ1ckGOqUBTLxkxbVZ03y%2FvN%2FMK5R9685LrkGMRDtlXixm7ybLsK2auQMRGmSrR2CyOMQCKRoL%2FEVjS8D1rfdtoYlP8CZl99wh%2BEpVhD8nWYAjyAmZgnIW2tV0RFM3ipyjgcI4KaqOWBLLcClv5IqUlCOAQsE%2B8p%2FQagfZshQbHrYArLF8SConyxyQnS9o%2BBDMVfhsankoZfDkacliloFEMmSnUVt8eeXA2kiA&X-Amz-Signature=2bd7a61d67aab6821ae9c31c86f0a6ab52398003ea76eccd49e789a6dc18c8a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSMXZ2J4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T145056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0hamrmYqpOIaJC8PJKllerA%2BairQ0MZMYagDcvBizDAiEAgQQT3jVMf1MzVG1bB1B7poMvnYtBXLinHBVsBpeoYBgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGloBI1mhyiDZ0uo2yrcAx78ZOpcMr2FYj86IDg2DmiGDOfmCJOveU53AkTXJciyo%2BtjxtZ3yH1t9ABhKMcy6zmgAH%2FTrUtXDzJNJRaSr%2F%2FX6sNkW6SwH2lXwX0OJkKKIBx8ENSbtTSx%2BR7Xwia3RqzdCeuHubzhOwDZSXmQXGFBhQfFtRUt48Smic95VrjXbfXNMJzvXN6tuL6OFsyLIaJVS0R8e6hCj2P7B4qdbYKcaHFvWTE%2BIUmLbjASbnDeeF7QXe3TPOaRopSSra8Op7b%2BMTUkHArDgYUQQzBlNO29seQKxGCAKCVFYWlUu7HVLbWgLTQLjW45mO1uIBBlyhYCJqR7GODfgWk5QEHY7UuJgd8%2FzsHnRUkB8Pqtzo7lQSBzsVie3Mj65Hn3rJvy7IgdkvAQOzbrphcNMZC%2B2joMOJgCpY2DYAU5I%2FWVPV98CTfQ5ASZ4gdnMILMnGKNS7xZMFtn3S5Fp8v6svcqd7OzRxglunlKo04T27C6pUg7IlRI%2BWiP5yMH%2BvXkPShh1YANKSVlj%2FFXp7Fx9235fXDQRxwLAR8H2s0cBAVzxepM9LJHoV6L3OGckP9wdIAA0zUA6co4S2ME4EvFWT4Hg1oQvjYWkWs016Vj7V9yOSzSCj7u2e278ULag%2B2QMJyZ1ckGOqUBTLxkxbVZ03y%2FvN%2FMK5R9685LrkGMRDtlXixm7ybLsK2auQMRGmSrR2CyOMQCKRoL%2FEVjS8D1rfdtoYlP8CZl99wh%2BEpVhD8nWYAjyAmZgnIW2tV0RFM3ipyjgcI4KaqOWBLLcClv5IqUlCOAQsE%2B8p%2FQagfZshQbHrYArLF8SConyxyQnS9o%2BBDMVfhsankoZfDkacliloFEMmSnUVt8eeXA2kiA&X-Amz-Signature=8a553b02af6b2c611e0bdf8b89f4192dbe54963f6336162715cdfec04897e333&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
