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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBRB3PRT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICafS%2FRUa%2BnBKqEz%2FbhAek9BWvCCGNkuJgtrl%2Bk4DJgGAiB0hR5WyOpK1KBDZmLU8yOySqijKcwpF%2FqhhcTsY6rTSyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1A4J11RNiDrncnmtKtwD%2F5GYx3UWS2Bwdp3N6xOatoTJMF3GvV5rZrMmKBOeFf47%2Fa6cpf3XCvdiCZYCJC8a6r11u0Ub6B38Zfhf44NQ0ncdR0sC68grvOI4abhCRbSHudmKQ5Fk%2FyzHGrre5eFmzgGCG%2BVgGCh17cOYbyeHp3EsrT88dhyDZYTFpVkJOTK90F%2F5K0lohN%2FZ3wmNyDqIg8dHIB%2Flyx4dSyVrsQpm8kCm4r1uTXHZJOsMe73Zbe6uj3jqnoWn1CgBw5nT3FLC1xZJnOcShWaqeeBS071PcYdJ3HODS%2BA1JfeP0o4umBJh4fdBTaRjuBY3BdLcPGxcRusLuCIjhCTHaEIcRUau5VuHrhsaakLQhIenh%2F%2FRxw1tw3ZWQU7%2FDoYNYOPYz8ouu6kSOcIbpetBmqPdWHDoAgn0NVUw1g%2BfkXzKP6RGEUKRHfrzirFu91tpL0qTj19%2Bg5e0t6PtgxeYBfqqeBKzeBMPQt4Jj%2Fx%2FJNDyh8CcefGwNvz6fdojITecIHL1MWps24XDGEKa3pMTL82%2B5MwFGTF3txbcg8yvi9tLmLTzaUtlSUOhFyHqt5jnI8WE5rmU5qjgRRZihZtNZVpRP8xsout%2F0iSneYn2Q2VwYfkcSGWLrnA3rt4nXhHQ5dMwh6CLygY6pgFu06YVGlSNOaxRudckaWN7p2GK%2Bo1Mj1D6Z4XxsSi3%2FPoPFI6PEMN0mxESeYp6G9QkEQuhcGWHVYjwHm9s%2Fog%2FML7WKjlZNcjLNDEvHhkP%2F%2BX4FCmUuIQq3BJQxTkV8xJAE1wtNtemGY5WgB38L3NamKajF8yY4tvq6PQbe03l0x6AfYON2zIZyDhx7snKMnCkQbmc2MoGujrceGk%2B6mKb7NXLgqxo&X-Amz-Signature=69a7765584f3e2c819aac037e1307be5b903ac2dcce568788e07a18f3daa86f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBRB3PRT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICafS%2FRUa%2BnBKqEz%2FbhAek9BWvCCGNkuJgtrl%2Bk4DJgGAiB0hR5WyOpK1KBDZmLU8yOySqijKcwpF%2FqhhcTsY6rTSyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1A4J11RNiDrncnmtKtwD%2F5GYx3UWS2Bwdp3N6xOatoTJMF3GvV5rZrMmKBOeFf47%2Fa6cpf3XCvdiCZYCJC8a6r11u0Ub6B38Zfhf44NQ0ncdR0sC68grvOI4abhCRbSHudmKQ5Fk%2FyzHGrre5eFmzgGCG%2BVgGCh17cOYbyeHp3EsrT88dhyDZYTFpVkJOTK90F%2F5K0lohN%2FZ3wmNyDqIg8dHIB%2Flyx4dSyVrsQpm8kCm4r1uTXHZJOsMe73Zbe6uj3jqnoWn1CgBw5nT3FLC1xZJnOcShWaqeeBS071PcYdJ3HODS%2BA1JfeP0o4umBJh4fdBTaRjuBY3BdLcPGxcRusLuCIjhCTHaEIcRUau5VuHrhsaakLQhIenh%2F%2FRxw1tw3ZWQU7%2FDoYNYOPYz8ouu6kSOcIbpetBmqPdWHDoAgn0NVUw1g%2BfkXzKP6RGEUKRHfrzirFu91tpL0qTj19%2Bg5e0t6PtgxeYBfqqeBKzeBMPQt4Jj%2Fx%2FJNDyh8CcefGwNvz6fdojITecIHL1MWps24XDGEKa3pMTL82%2B5MwFGTF3txbcg8yvi9tLmLTzaUtlSUOhFyHqt5jnI8WE5rmU5qjgRRZihZtNZVpRP8xsout%2F0iSneYn2Q2VwYfkcSGWLrnA3rt4nXhHQ5dMwh6CLygY6pgFu06YVGlSNOaxRudckaWN7p2GK%2Bo1Mj1D6Z4XxsSi3%2FPoPFI6PEMN0mxESeYp6G9QkEQuhcGWHVYjwHm9s%2Fog%2FML7WKjlZNcjLNDEvHhkP%2F%2BX4FCmUuIQq3BJQxTkV8xJAE1wtNtemGY5WgB38L3NamKajF8yY4tvq6PQbe03l0x6AfYON2zIZyDhx7snKMnCkQbmc2MoGujrceGk%2B6mKb7NXLgqxo&X-Amz-Signature=50038046f1cd66ae1adbc1f798952e2f4f792f9bde30a18ec382e5320df4e7a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
