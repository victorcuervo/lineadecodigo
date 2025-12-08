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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCBAOFUB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T223207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3gGlJepF9exviEk%2BqxYJpnbix8FNeqNpbYIX7JJ%2FRfgIhAMHG8l641UrkeVcz6FB3Dx5Dvn6pqSHn5kabDmuHn02XKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUGAK2VxgTNjaELJkq3APjpZpnwhfaf8cbRXSTh%2FvsBQEhxfR918A%2FzOnf0gid1BUGcx5irtJ0%2BWmQJplaaMbxTKjhjaf%2Bwyn%2B2u1at%2F%2BJ8GhaQsmpWu1c669Ra2OohlkRJn%2FLXyOSL3RHTSUfs%2FZsMY9McfS61heLi4bmPBfObwOL5m1lz7o5pkj063N5%2F9bTEAsp%2F0Ne3CPyvv7V6pryHcfC66rO4V6v1TgiQ7JD1XMdoraelK95vtM%2F%2FPi8fWAWKpcfqQif%2FSecfMMG%2Fjk%2Fv7RTePDtTl4Qb7VHE66EjDYSCeZlu4Yg5CSomlGGKIWNWoNrGaUNBpJrnYD6G%2BOSz0okcR%2BJG2dZXhxjrHH5h5DeZbfLRwOEvrLcH5leDVkcqkaZV7BQswILZx3O3Z4cGN%2BY%2BPMPbkgrBSTks%2BakhsPnfALqytn5LUgJWDWU9sYc1KQQ6DYnJKwhA9DEPitrJC4W5wYrO9H5jTLk6utMVQAxqIcrqMrK29kebp8PkixDE07YHU868BRKx1Im4ucYZXYsgM2QW5KIElfRIjloPGroaujyov48%2FIY6HQrNdx9uhCogX22w7soSgw7sbHvaSqRlav3r3Ks5xl22PmfU3MiGoZ5FIPgMMyoKl65NBFxab60wp9bVB7XiCTD%2Fod3JBjqkAUTW7J2dRUA%2F60%2FSn5N2OhzBAMGxp4tvNi02L9xx6g1OhBzZZUT4bnfXwF5E5OW076g2xjUnBYuDN1cw%2FXQJLuPAoX86mkq%2Bbvb5QQ5l5XB8grZRs7CHU8zGp0HU5SQe3pe2qkkkU4IaQDw1jo4K1n1ktH%2F3phNeUvGcGv6MAcVLeiLU0cmdv%2BERqgqZYiw31iRdTwmaLyh8DwiG1s1WLKhixlvT&X-Amz-Signature=83160eb0c8789f1dda8b0341d5b7f26e4865c56b5464b6a9411bc1601291507a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCBAOFUB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T223207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3gGlJepF9exviEk%2BqxYJpnbix8FNeqNpbYIX7JJ%2FRfgIhAMHG8l641UrkeVcz6FB3Dx5Dvn6pqSHn5kabDmuHn02XKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUGAK2VxgTNjaELJkq3APjpZpnwhfaf8cbRXSTh%2FvsBQEhxfR918A%2FzOnf0gid1BUGcx5irtJ0%2BWmQJplaaMbxTKjhjaf%2Bwyn%2B2u1at%2F%2BJ8GhaQsmpWu1c669Ra2OohlkRJn%2FLXyOSL3RHTSUfs%2FZsMY9McfS61heLi4bmPBfObwOL5m1lz7o5pkj063N5%2F9bTEAsp%2F0Ne3CPyvv7V6pryHcfC66rO4V6v1TgiQ7JD1XMdoraelK95vtM%2F%2FPi8fWAWKpcfqQif%2FSecfMMG%2Fjk%2Fv7RTePDtTl4Qb7VHE66EjDYSCeZlu4Yg5CSomlGGKIWNWoNrGaUNBpJrnYD6G%2BOSz0okcR%2BJG2dZXhxjrHH5h5DeZbfLRwOEvrLcH5leDVkcqkaZV7BQswILZx3O3Z4cGN%2BY%2BPMPbkgrBSTks%2BakhsPnfALqytn5LUgJWDWU9sYc1KQQ6DYnJKwhA9DEPitrJC4W5wYrO9H5jTLk6utMVQAxqIcrqMrK29kebp8PkixDE07YHU868BRKx1Im4ucYZXYsgM2QW5KIElfRIjloPGroaujyov48%2FIY6HQrNdx9uhCogX22w7soSgw7sbHvaSqRlav3r3Ks5xl22PmfU3MiGoZ5FIPgMMyoKl65NBFxab60wp9bVB7XiCTD%2Fod3JBjqkAUTW7J2dRUA%2F60%2FSn5N2OhzBAMGxp4tvNi02L9xx6g1OhBzZZUT4bnfXwF5E5OW076g2xjUnBYuDN1cw%2FXQJLuPAoX86mkq%2Bbvb5QQ5l5XB8grZRs7CHU8zGp0HU5SQe3pe2qkkkU4IaQDw1jo4K1n1ktH%2F3phNeUvGcGv6MAcVLeiLU0cmdv%2BERqgqZYiw31iRdTwmaLyh8DwiG1s1WLKhixlvT&X-Amz-Signature=20e3a26020445e5ae72460623d960552f2f68423f4c171d04197fd7ca03c4774&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
