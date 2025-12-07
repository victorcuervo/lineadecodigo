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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBTMMQOR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T061538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUlRBu4fFJX6cV%2BAh3tDqxPKufVkNYzwIo2Ar0NuPobgIhANhyr06ioqw23M5ERsypxKg3lWQ1cJ7MJ%2BbV9GME4ff1KogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTtQ8tXHSIHcYMBOcq3AN4LYVdZD4KjpVZ5kZ7GyP26T%2FPvBLqFyp9yoHERKmThAdkVC3wYGUoZOuoz%2FEhTVBejlprSRWybCtZtHb%2BwZrHmcLv0wyUwlvQttuB%2FetoXigZ4k3YjtlIt9sJkUS1Ykl4xQkZv%2FgocMwtSZCwNTz7GwOuZX95ErawgWUvLK1F0eVrYrqdRAM%2FwaPAP2FP9u3HAdxD3KthDoDu8fxsXk0Mjbk8w4Gy05BM7q1a6rSPzn5OsImH1b04NAROM%2BFCxIQGfwtAg1NT3%2BFoQuc3LD%2FLvQ%2BpNVf%2Ft3FLxO38l1asfOB%2F3sx1MVFEUAiYIQhas8xWa9l3kxGl%2Bu%2FXjCH%2BHnOoJeN5DA3W3TpynXCatyw9FAs4Ack3CaxWcJKWyOipUl7IJeG9fUqHYe7WQH8sYIXSOaDx6ysQUzQQJ0MmhrEctx0Qn0bRoRJihzXeOUj0oUSCmUWXVGFpmD8SmNqwhSbHCSLIzhFEa0XSk6ndUNE1AzsVtlLjwp121DAnykCLCRvgpUPTzP0ComDb%2BumRlN%2FkwX5ltYQx0lEtlGfQF4cZLywaCDNIWu14Vm%2F1Mt4aJvPh2WL4him3i%2FBApvIa46PpXya9VbRDwlBOs%2FMIk3z2rbJ%2FwkMMvVFl1s2d6DDwn9TJBjqkAa%2F1BNyaduJgrb%2Bwl1%2BoEks30D64EXVIzR1VsHADTs5mQsVQuYSCFhj6RAaW5iWhkIg78UDkg%2F9M1eHTxEu2BBP%2Fsp78xLxQamIxe%2BVLQlHSY%2FLHTyPpyQ%2Flmpjk25gFpt2cvsaPOYDuegv206qOkmbLgUiqmBLObJ%2BMYUY77M7ymhxUrce1CgcJbhgdjjEr6bz%2BXTn06DapoF8I4AKLVfdtTLcg&X-Amz-Signature=016fccd70e79a181f50b40932b568c49f5814d5e39bb9eee858933baf89f6215&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBTMMQOR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T061538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUlRBu4fFJX6cV%2BAh3tDqxPKufVkNYzwIo2Ar0NuPobgIhANhyr06ioqw23M5ERsypxKg3lWQ1cJ7MJ%2BbV9GME4ff1KogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTtQ8tXHSIHcYMBOcq3AN4LYVdZD4KjpVZ5kZ7GyP26T%2FPvBLqFyp9yoHERKmThAdkVC3wYGUoZOuoz%2FEhTVBejlprSRWybCtZtHb%2BwZrHmcLv0wyUwlvQttuB%2FetoXigZ4k3YjtlIt9sJkUS1Ykl4xQkZv%2FgocMwtSZCwNTz7GwOuZX95ErawgWUvLK1F0eVrYrqdRAM%2FwaPAP2FP9u3HAdxD3KthDoDu8fxsXk0Mjbk8w4Gy05BM7q1a6rSPzn5OsImH1b04NAROM%2BFCxIQGfwtAg1NT3%2BFoQuc3LD%2FLvQ%2BpNVf%2Ft3FLxO38l1asfOB%2F3sx1MVFEUAiYIQhas8xWa9l3kxGl%2Bu%2FXjCH%2BHnOoJeN5DA3W3TpynXCatyw9FAs4Ack3CaxWcJKWyOipUl7IJeG9fUqHYe7WQH8sYIXSOaDx6ysQUzQQJ0MmhrEctx0Qn0bRoRJihzXeOUj0oUSCmUWXVGFpmD8SmNqwhSbHCSLIzhFEa0XSk6ndUNE1AzsVtlLjwp121DAnykCLCRvgpUPTzP0ComDb%2BumRlN%2FkwX5ltYQx0lEtlGfQF4cZLywaCDNIWu14Vm%2F1Mt4aJvPh2WL4him3i%2FBApvIa46PpXya9VbRDwlBOs%2FMIk3z2rbJ%2FwkMMvVFl1s2d6DDwn9TJBjqkAa%2F1BNyaduJgrb%2Bwl1%2BoEks30D64EXVIzR1VsHADTs5mQsVQuYSCFhj6RAaW5iWhkIg78UDkg%2F9M1eHTxEu2BBP%2Fsp78xLxQamIxe%2BVLQlHSY%2FLHTyPpyQ%2Flmpjk25gFpt2cvsaPOYDuegv206qOkmbLgUiqmBLObJ%2BMYUY77M7ymhxUrce1CgcJbhgdjjEr6bz%2BXTn06DapoF8I4AKLVfdtTLcg&X-Amz-Signature=76125366e947b51e08fab9b575be036e65530306fe1abdcfb6dad42cfa829b61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
