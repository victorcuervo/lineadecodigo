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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RAB6HG6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T094845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdYnPq2jwRkclWff9aDYkvoEk4m69lZcapj18STne44AiBD%2BHTrxwJRpaW2WJWsWkoI%2FA%2FIUsAPVM1h9qVOKms3aCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN0HX6SuuZG2yn%2Fu1KtwDFy9Y2z6kujy4ig5rXzQZpKeWSw1ImCSrT5HsuXT78ceO3lNktP%2BeaNl%2BTnEKZ%2FURKu6dBieNVuNtQPeLsU2Zo74bOxpqbzXpdNmbTPHa60tOFkWchml31CPqyuRICW42x1UfPBZQavd8A3vWUebFdsUyhbi%2BI7Dm4WluKHM8zqCzUSKxn8fDLvfywLboNAgHEX%2Bgi63v7dVjC2iW5B8%2FN0M6hwKj7j6yWzb0CjkW2KcH1VMl%2FePFKgzqow%2Fu%2B7pgbyJJV7eEjcXaprlcCA%2BkhGWahI1q2Z7e5n%2BrQup8I4hPU3iuGXwNu%2BbA4eGzQsPiMFV8djFMyPEfjt2vFURosCUqJtaHfbLScR%2Be996g9xy%2FBPHX7BNayj8bjD7TumEBKy8TR97rvcx99IFpdxS1GqEHdc9SayUVWKSnK2rg5Mvjw7bMKWRi3TTxfm5biFfuOpLMZRb%2F%2BoK%2FpT7B9YocQeerbibE44U9viZs2JmRSPZPS1i7Yj%2B3Q8kTJWjpXimUXNHrmvpZIRdTYiotVniEqzfCpjn3dQydO%2FNcXk1OlL4C%2FbMILavGA24XOkR6rSRAKmGZujA4lqe5f8%2FtXkbrIdYWh7RZTIa6lzUf77Nn5bD3td4%2BUNz0zVbdw28wqJnVyQY6pgGidJVTe4p%2BPJk3TUtJPsBDoteJSUUfSAvxtn9uPETT2KSlCJqrOneLf1xf8QtLGcpEpkuBPh0KSp9fTpOt%2FP84S%2FvAVxCtayZeDwwa7%2B4HfYxpj%2BKEGrUund3udYrvUWOGCFmomA5zXGo8tkelXsLNCw55E9FhM0Tte0iZOiHLZ3rfXwt1A3Di%2BYYNOtwMHyaApIIHFgB8%2BXeW1uEOTXCChDXfE5vQ&X-Amz-Signature=a6bd560b7f23ba1f3ca900a053ffedb396f57ec2f4869528303d058649c51313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RAB6HG6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T094845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdYnPq2jwRkclWff9aDYkvoEk4m69lZcapj18STne44AiBD%2BHTrxwJRpaW2WJWsWkoI%2FA%2FIUsAPVM1h9qVOKms3aCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN0HX6SuuZG2yn%2Fu1KtwDFy9Y2z6kujy4ig5rXzQZpKeWSw1ImCSrT5HsuXT78ceO3lNktP%2BeaNl%2BTnEKZ%2FURKu6dBieNVuNtQPeLsU2Zo74bOxpqbzXpdNmbTPHa60tOFkWchml31CPqyuRICW42x1UfPBZQavd8A3vWUebFdsUyhbi%2BI7Dm4WluKHM8zqCzUSKxn8fDLvfywLboNAgHEX%2Bgi63v7dVjC2iW5B8%2FN0M6hwKj7j6yWzb0CjkW2KcH1VMl%2FePFKgzqow%2Fu%2B7pgbyJJV7eEjcXaprlcCA%2BkhGWahI1q2Z7e5n%2BrQup8I4hPU3iuGXwNu%2BbA4eGzQsPiMFV8djFMyPEfjt2vFURosCUqJtaHfbLScR%2Be996g9xy%2FBPHX7BNayj8bjD7TumEBKy8TR97rvcx99IFpdxS1GqEHdc9SayUVWKSnK2rg5Mvjw7bMKWRi3TTxfm5biFfuOpLMZRb%2F%2BoK%2FpT7B9YocQeerbibE44U9viZs2JmRSPZPS1i7Yj%2B3Q8kTJWjpXimUXNHrmvpZIRdTYiotVniEqzfCpjn3dQydO%2FNcXk1OlL4C%2FbMILavGA24XOkR6rSRAKmGZujA4lqe5f8%2FtXkbrIdYWh7RZTIa6lzUf77Nn5bD3td4%2BUNz0zVbdw28wqJnVyQY6pgGidJVTe4p%2BPJk3TUtJPsBDoteJSUUfSAvxtn9uPETT2KSlCJqrOneLf1xf8QtLGcpEpkuBPh0KSp9fTpOt%2FP84S%2FvAVxCtayZeDwwa7%2B4HfYxpj%2BKEGrUund3udYrvUWOGCFmomA5zXGo8tkelXsLNCw55E9FhM0Tte0iZOiHLZ3rfXwt1A3Di%2BYYNOtwMHyaApIIHFgB8%2BXeW1uEOTXCChDXfE5vQ&X-Amz-Signature=7b946c394b9bbae26c52e2d8be89535c94a3489542f41524b49a0ad7bb222091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
