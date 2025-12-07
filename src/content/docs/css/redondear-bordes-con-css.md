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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRKW33ZZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWQhDynwxWw5wqftQ7vpU0dGJEOs63D%2FZOT9wAY7xbmgIhAIHAJUNgfZoDXu%2F22e47WFqG9sSYfdxZz77S%2FwAM%2FH8eKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfDHcNy4F2qyaz6O8q3AOGS0sJAPEDirPDuyWcDRIuP4KFOWFOFgBzljvDvhdq5TX3zN4Y5%2BjZf9PYrXvF4sQsKuZh38Uqks2tmL3w51h1FPDbhYCRFJ2dTz8zbwM7bhVWMBi%2FkqVbMvbvnRUe%2B2ZP1m929gevgTkwTTkGQoUxG6iIfNW8OFFWPI1W8XKqbVl68M6qBmjsNDmcapPiMyXjDeeiDwAr1TRaBzX%2BEtHRhIZVkfZtLtURtP%2BlRmftHwcAQ1WDvAvliwH2JsN8%2BaXnBO8guo%2FYwHvnLHv4N0Ba%2B3vyXsZSQmnSN5%2BEiEZzUTxQHNxPrqC6wakw4q2QsJpD%2BsAGecCcqFaoIyyzqxuu2ZXt%2BRZuUsYzVUyjig%2BqTe10dDZqsP87xv6e0AKwDre%2BN7xu34WmHOc6Pzp9A6oFGRNaG0AH2AUnpZ7u%2B0CcZf%2F90zDhlDm%2BuqWkJITU9KdE1sfVIia%2F2%2FgXOjcDLUNQ1%2FPcRBNtosi%2FFEGtTSM9xfeN7E0Dxo4D64%2FZi%2FDILqUkr1sCMiPBnfjC2Y%2B6AFIAUbY4i4j5ikzc%2F0cmEx9zcwRkYkxaMKOUENIhiOecHhYsYusIveIB%2F44ZfmWjVZ2x5XITfcDKrTXSqn6NqXeyH1uRBEqEhyFPFItABjDzmdXJBjqkARjGnlgvpktz%2F1CNz3aiSBI0StqZOGn8Rb3fHh1f%2BzzdV7LT%2BxAM3eUIyy44mSj4mYQ5q59nOaPUaHnkAKUL8fWmsriba%2F3y9eXuXoKuqW%2FPvXSCCTlX2qiKgCIkeqd6rxQKxlrNjjs0VJc6%2Bno5bx2RYN4xDi6OaNKY8IR6uLyc%2FjWT%2F1QlRKQVkm2FswMcKm3yyq%2BH6EZJX3NOdY4ONTvs%2F%2BSO&X-Amz-Signature=4bf965bd51dc99f83fa4eebcb69960997577e3f58570d8852cf6ef13262431ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRKW33ZZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWQhDynwxWw5wqftQ7vpU0dGJEOs63D%2FZOT9wAY7xbmgIhAIHAJUNgfZoDXu%2F22e47WFqG9sSYfdxZz77S%2FwAM%2FH8eKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfDHcNy4F2qyaz6O8q3AOGS0sJAPEDirPDuyWcDRIuP4KFOWFOFgBzljvDvhdq5TX3zN4Y5%2BjZf9PYrXvF4sQsKuZh38Uqks2tmL3w51h1FPDbhYCRFJ2dTz8zbwM7bhVWMBi%2FkqVbMvbvnRUe%2B2ZP1m929gevgTkwTTkGQoUxG6iIfNW8OFFWPI1W8XKqbVl68M6qBmjsNDmcapPiMyXjDeeiDwAr1TRaBzX%2BEtHRhIZVkfZtLtURtP%2BlRmftHwcAQ1WDvAvliwH2JsN8%2BaXnBO8guo%2FYwHvnLHv4N0Ba%2B3vyXsZSQmnSN5%2BEiEZzUTxQHNxPrqC6wakw4q2QsJpD%2BsAGecCcqFaoIyyzqxuu2ZXt%2BRZuUsYzVUyjig%2BqTe10dDZqsP87xv6e0AKwDre%2BN7xu34WmHOc6Pzp9A6oFGRNaG0AH2AUnpZ7u%2B0CcZf%2F90zDhlDm%2BuqWkJITU9KdE1sfVIia%2F2%2FgXOjcDLUNQ1%2FPcRBNtosi%2FFEGtTSM9xfeN7E0Dxo4D64%2FZi%2FDILqUkr1sCMiPBnfjC2Y%2B6AFIAUbY4i4j5ikzc%2F0cmEx9zcwRkYkxaMKOUENIhiOecHhYsYusIveIB%2F44ZfmWjVZ2x5XITfcDKrTXSqn6NqXeyH1uRBEqEhyFPFItABjDzmdXJBjqkARjGnlgvpktz%2F1CNz3aiSBI0StqZOGn8Rb3fHh1f%2BzzdV7LT%2BxAM3eUIyy44mSj4mYQ5q59nOaPUaHnkAKUL8fWmsriba%2F3y9eXuXoKuqW%2FPvXSCCTlX2qiKgCIkeqd6rxQKxlrNjjs0VJc6%2Bno5bx2RYN4xDi6OaNKY8IR6uLyc%2FjWT%2F1QlRKQVkm2FswMcKm3yyq%2BH6EZJX3NOdY4ONTvs%2F%2BSO&X-Amz-Signature=8a623b321133355df1adfa14e030385a58702a0fa120ca9e66bbab2379c2e50e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
