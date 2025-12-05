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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466433JVIV2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T060520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJS%2Fk6jNtMCbY2a7hQiEfhBMKUDEFPdzPI9omYAseorAiEApfqOFL0aPK3Dza37RHfrxpD2BJifJ5wB3N1oknBCwXIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDB1NRlQP%2F7%2BnKR%2B1YSrcA48uUIXeuF5k4c1gaeWW1FmeDpIlEK2KDBhe0C%2FOuBv6waMFgDbZww08gQRVch%2FnfVRP4MnDsbeIGLrtRGs8eS8ykR9IcygaZcQ5MpNJczWtlW0uxUgNrKBSqokSP%2Brfgrs7RoiS1IQw6T7O1o87OPsHLEW5TKMxAHLDKkTgpiS%2FEALyS2RJ8TJYicOKOxMq70kZjiIknNHnzMyrZolCLqG%2BTdPnGmWAChe1w4ektcq2hewkvXf0ME%2FHuE3RfrU4ds6BEwNUcPcNE%2F3AUJuk%2B469kAJ%2FyL%2Fjx7qFVV79SCrPWstyjtgkbQ7Z1CYYNRPLgIvsFC3VEGoULieyaxOdOjIKg%2BJ9vfYZ%2FqH%2FPjm6b3wL3gPL%2Br3iWx5pSMvWNmMTNh%2B5DkeYTOFqWDt1fMeY08M3avAZrb65OfvUmchSTI5eH4b8Fh3hzFvch6pnhywNpZHJt4N%2BGAvti7GvbRxcedLc3Z%2FpEbjcLOduJLAcE3GAUFimLpIwaoCTCAkOmg2EiYAWAAaPIdfhyXulMcN00Od0jGCgP8LgMelDTbcCpJs0jSDkcBtD0cu1lL50ubMs3OKqIt8Nf9GHIOrZucyXpx22AL4%2BcjYt4Au%2Fk9gQ%2FG%2FRGFsIQmUpVVcOeII7MOSpyckGOqUBMPLCBQJYI1Bmrkb0T%2B6AvlisI9EcyfqtRKmTeTtR0pkm1b6N2AjoMu4M%2FrNYkk0%2FN2gqbZf2rsA62AHikyY%2FD62GWwgxZq0UU%2FlVsZOKQ%2BszAiFG1Y8aYHH9Ja1k2RQxF4tbs0v%2B9HJOgZydEkUBD2WMeWADmV1eIGuDjT1lQ7UbAOUEjDKo35hebWVEOV47v62j34ynS3qVExJg4wMQqcFW5VmZ&X-Amz-Signature=c589f28781d2e5aa30cd329ab18d3f20208e6aab5aee3ac0bd744d5c4ed0b567&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466433JVIV2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T060520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJS%2Fk6jNtMCbY2a7hQiEfhBMKUDEFPdzPI9omYAseorAiEApfqOFL0aPK3Dza37RHfrxpD2BJifJ5wB3N1oknBCwXIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDB1NRlQP%2F7%2BnKR%2B1YSrcA48uUIXeuF5k4c1gaeWW1FmeDpIlEK2KDBhe0C%2FOuBv6waMFgDbZww08gQRVch%2FnfVRP4MnDsbeIGLrtRGs8eS8ykR9IcygaZcQ5MpNJczWtlW0uxUgNrKBSqokSP%2Brfgrs7RoiS1IQw6T7O1o87OPsHLEW5TKMxAHLDKkTgpiS%2FEALyS2RJ8TJYicOKOxMq70kZjiIknNHnzMyrZolCLqG%2BTdPnGmWAChe1w4ektcq2hewkvXf0ME%2FHuE3RfrU4ds6BEwNUcPcNE%2F3AUJuk%2B469kAJ%2FyL%2Fjx7qFVV79SCrPWstyjtgkbQ7Z1CYYNRPLgIvsFC3VEGoULieyaxOdOjIKg%2BJ9vfYZ%2FqH%2FPjm6b3wL3gPL%2Br3iWx5pSMvWNmMTNh%2B5DkeYTOFqWDt1fMeY08M3avAZrb65OfvUmchSTI5eH4b8Fh3hzFvch6pnhywNpZHJt4N%2BGAvti7GvbRxcedLc3Z%2FpEbjcLOduJLAcE3GAUFimLpIwaoCTCAkOmg2EiYAWAAaPIdfhyXulMcN00Od0jGCgP8LgMelDTbcCpJs0jSDkcBtD0cu1lL50ubMs3OKqIt8Nf9GHIOrZucyXpx22AL4%2BcjYt4Au%2Fk9gQ%2FG%2FRGFsIQmUpVVcOeII7MOSpyckGOqUBMPLCBQJYI1Bmrkb0T%2B6AvlisI9EcyfqtRKmTeTtR0pkm1b6N2AjoMu4M%2FrNYkk0%2FN2gqbZf2rsA62AHikyY%2FD62GWwgxZq0UU%2FlVsZOKQ%2BszAiFG1Y8aYHH9Ja1k2RQxF4tbs0v%2B9HJOgZydEkUBD2WMeWADmV1eIGuDjT1lQ7UbAOUEjDKo35hebWVEOV47v62j34ynS3qVExJg4wMQqcFW5VmZ&X-Amz-Signature=89f4c7d6d59daf0feafe321bfc6d19aba56738efeea64aff58f03e4e45a6cf26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
