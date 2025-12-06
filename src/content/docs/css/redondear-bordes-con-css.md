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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWOGKFUS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T125658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyVCYKz6a8sSnlu73ECAX9hjxwMrM4C4h%2B4H6bjHC7NgIgBFX%2B3Jp%2FFJkV6Q3cqWO%2F37w%2BRnV0FOH6GPWvxOQDypUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDF5L8GRUZosEqj8GHCrcA2GBHlcs715wfEa%2FQ4uvY9aL1XmhKHj47mNz4jB2X3Chmk8fQFLJnWGHZHxiYMbjZf0JeSdGgeOWIwAjR8fqjLiOznXSO7iCkq0Jf3BiKoSONG2%2FpWXFUcAfyq3pvMasGD%2BSiFfYEtc1JMC6ow6bl2OJUiKbiCa2sJBFlM221uDaB0Owe1ezXcx79%2Fz5ss1hX1FKGh0oxFaZZyPmWziOGfidfevecFELFstHs%2Fw4%2FtqzOQgF6sBwuopn98AglhQDDWZ0WWceTwJOk9J2hEFVMLlAHzVcrz9wl7T7cJFDLsmIu0vWgVBCOpGJQJJ%2FZh91YokMq5t%2FMS2YDpWHvOBr2epIV93zmOBAMEExFm0nQ5bHq2%2BNR6BOJwYIvfrwJQJlBUrDS76yNvBS6%2BbbqLXzSLtzjTq0o0kZFtRT1kfEfcJlL53WZaHa25s%2BnUMB9czbAxkDWmsj9hQSNaFi6X%2FUwCPe2IYJf69IEZV%2FT3NVO9JPh4LCpU3V3GftkW8Ik%2BjOwGGEfqtdTs29N7tIYZE8jNoskRTj2IoNhgSfcCHHXMSeAwjne8NNUJTXGzJyl0BDEyN40k0iG%2BM10zv%2Fz1hMa45uZ9lX39PzLbNynp6fddhGwd6O4fAwpMrFozC2MLOm0MkGOqUBXOE2vevc6LrDiZSYowuZFJhRKuObZQufeEsFJA22uQcxPtpe0T%2Bc9IiAsblcj%2B1a3C6qoVJSqxBgIMg2Ljs35kNzXueGHWqeISypdqKZ1pzGj8NT3cYk2%2FPsY9r%2BctOG0zSe9tpUNO2gP%2B1ytGNnhLmKpJHP1K5dNK3ZddHrNCvYq3kN4n1prbO7LN5HQJTrGZrNPxS1HgGisRkjB9x9NcGNmpo1&X-Amz-Signature=f453c60cd52b0fdd4e0929e965333ec15cbcee02aec276d78a18e6128be16a83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWOGKFUS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T125658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyVCYKz6a8sSnlu73ECAX9hjxwMrM4C4h%2B4H6bjHC7NgIgBFX%2B3Jp%2FFJkV6Q3cqWO%2F37w%2BRnV0FOH6GPWvxOQDypUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDF5L8GRUZosEqj8GHCrcA2GBHlcs715wfEa%2FQ4uvY9aL1XmhKHj47mNz4jB2X3Chmk8fQFLJnWGHZHxiYMbjZf0JeSdGgeOWIwAjR8fqjLiOznXSO7iCkq0Jf3BiKoSONG2%2FpWXFUcAfyq3pvMasGD%2BSiFfYEtc1JMC6ow6bl2OJUiKbiCa2sJBFlM221uDaB0Owe1ezXcx79%2Fz5ss1hX1FKGh0oxFaZZyPmWziOGfidfevecFELFstHs%2Fw4%2FtqzOQgF6sBwuopn98AglhQDDWZ0WWceTwJOk9J2hEFVMLlAHzVcrz9wl7T7cJFDLsmIu0vWgVBCOpGJQJJ%2FZh91YokMq5t%2FMS2YDpWHvOBr2epIV93zmOBAMEExFm0nQ5bHq2%2BNR6BOJwYIvfrwJQJlBUrDS76yNvBS6%2BbbqLXzSLtzjTq0o0kZFtRT1kfEfcJlL53WZaHa25s%2BnUMB9czbAxkDWmsj9hQSNaFi6X%2FUwCPe2IYJf69IEZV%2FT3NVO9JPh4LCpU3V3GftkW8Ik%2BjOwGGEfqtdTs29N7tIYZE8jNoskRTj2IoNhgSfcCHHXMSeAwjne8NNUJTXGzJyl0BDEyN40k0iG%2BM10zv%2Fz1hMa45uZ9lX39PzLbNynp6fddhGwd6O4fAwpMrFozC2MLOm0MkGOqUBXOE2vevc6LrDiZSYowuZFJhRKuObZQufeEsFJA22uQcxPtpe0T%2Bc9IiAsblcj%2B1a3C6qoVJSqxBgIMg2Ljs35kNzXueGHWqeISypdqKZ1pzGj8NT3cYk2%2FPsY9r%2BctOG0zSe9tpUNO2gP%2B1ytGNnhLmKpJHP1K5dNK3ZddHrNCvYq3kN4n1prbO7LN5HQJTrGZrNPxS1HgGisRkjB9x9NcGNmpo1&X-Amz-Signature=dbb87685512ea7d81cf1dc9acd456c5c554baf6c5756acf670ac9668cbdc2f2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
