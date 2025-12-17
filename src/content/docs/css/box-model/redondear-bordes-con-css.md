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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635CYZIQ5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4MtFjQVFmzW2zN3%2B%2Fqiw2ZV4RLuHSGkBdPA8snleWIAIhAJntj9xhZa9X00gCPptniyzP3xvQ5oVvHEtuxp02ZV22KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzLxVE3Nye%2Blx8h0oq3ANye9DCQBO6ybQ7Nj2cc21cPbzRTLkyUVt8joLkPWLwnAe%2FsEbWVK2ygot5rMgR6WvmYP3giJ2wqJbwO5HrHirHpwzow%2FE7oFVB6a6kPt%2BS%2F6VscQ%2BpiZu8A4cCZP17X1JqQ9li4Nb9312ZSnW5T9r%2B2iD4fF742cmLENiwmrShNUBfsJh9DCL8vetKeCX8WTCOAVaVYu8qWnf9AtvVh4peKr6e0l3sBfPMb3iFuf3yyWWYA9gLbjEs8OxSzh2pR8qktk5PdEqkUWw3BYTnjbRLkhUn1dldwr7DbzqHF3Ag629RdaYBf%2FevYqowr%2FbohMmDzuf70RlvhkTNyCHIgAdKGZnCtAdonGynwSsursLe9PXHEQPeQFE74jUQahvmxutSNo9VOWzcuQ7EkBxcU1pcD3ZcUVck5CTU8Sb4tDaVZqK0kKE%2FSHbj%2Fkrxa%2Byhs8SWKjCOaaS4tJNdEER3EeUNB8Ezb%2BoF029u6tg9JSj%2Fg1nStUhTXNpKr60hIzrIx8%2FH2EBMmuzBQhh1IhfGsOLBSToKYjtdcsi%2FgZ8puE2z5qP95J0LfQM7sJkSz4Rn2g5CgJlMpMd2oe7n0UphJ%2BpmgwiLR%2BSF3iPmXQTdta%2BI7kOKOD1SB%2F7TK0j7tzDSrozKBjqkAd8JKrXLr9vwfzakv5eeFJktSH%2Bvls1IVV4XS53h3NbnsPQfS%2Fpqol5KpnJNvq7Hv6zAqFoPMIUQ7YGmyv8nEnX4nmIJzOm3XPhCKmXTQW%2B0qkeH0UjXxWIEq%2FRQqbgBN8TTGgSHKd8ujX%2F8O6xnhxBnVTkvyV2ZdKcVlYzIhjPjJp8r92OnKmvaG2DYbHaS1%2B7Sms8To6iTUhAlcTphest6F2R6&X-Amz-Signature=d22991f7bd5e3aeadbab3d56f027af3876cdba42e9fe30ec1eead7604f5372e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635CYZIQ5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4MtFjQVFmzW2zN3%2B%2Fqiw2ZV4RLuHSGkBdPA8snleWIAIhAJntj9xhZa9X00gCPptniyzP3xvQ5oVvHEtuxp02ZV22KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzLxVE3Nye%2Blx8h0oq3ANye9DCQBO6ybQ7Nj2cc21cPbzRTLkyUVt8joLkPWLwnAe%2FsEbWVK2ygot5rMgR6WvmYP3giJ2wqJbwO5HrHirHpwzow%2FE7oFVB6a6kPt%2BS%2F6VscQ%2BpiZu8A4cCZP17X1JqQ9li4Nb9312ZSnW5T9r%2B2iD4fF742cmLENiwmrShNUBfsJh9DCL8vetKeCX8WTCOAVaVYu8qWnf9AtvVh4peKr6e0l3sBfPMb3iFuf3yyWWYA9gLbjEs8OxSzh2pR8qktk5PdEqkUWw3BYTnjbRLkhUn1dldwr7DbzqHF3Ag629RdaYBf%2FevYqowr%2FbohMmDzuf70RlvhkTNyCHIgAdKGZnCtAdonGynwSsursLe9PXHEQPeQFE74jUQahvmxutSNo9VOWzcuQ7EkBxcU1pcD3ZcUVck5CTU8Sb4tDaVZqK0kKE%2FSHbj%2Fkrxa%2Byhs8SWKjCOaaS4tJNdEER3EeUNB8Ezb%2BoF029u6tg9JSj%2Fg1nStUhTXNpKr60hIzrIx8%2FH2EBMmuzBQhh1IhfGsOLBSToKYjtdcsi%2FgZ8puE2z5qP95J0LfQM7sJkSz4Rn2g5CgJlMpMd2oe7n0UphJ%2BpmgwiLR%2BSF3iPmXQTdta%2BI7kOKOD1SB%2F7TK0j7tzDSrozKBjqkAd8JKrXLr9vwfzakv5eeFJktSH%2Bvls1IVV4XS53h3NbnsPQfS%2Fpqol5KpnJNvq7Hv6zAqFoPMIUQ7YGmyv8nEnX4nmIJzOm3XPhCKmXTQW%2B0qkeH0UjXxWIEq%2FRQqbgBN8TTGgSHKd8ujX%2F8O6xnhxBnVTkvyV2ZdKcVlYzIhjPjJp8r92OnKmvaG2DYbHaS1%2B7Sms8To6iTUhAlcTphest6F2R6&X-Amz-Signature=af82b009c0241ea852228f4302c08593994b840d3ddc893040e1dcfc83acf54e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
