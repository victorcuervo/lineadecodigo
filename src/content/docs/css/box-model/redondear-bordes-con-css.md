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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622HRNETT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGQdE5ChnN4pGBY0v0CidggeqEJe70ob4DexBXO940UAiAdwJ7i%2FDjPN%2BDLCtkV27skuQjapfz4hRd%2Bn6KLi05r4Cr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMm8LhnCiRc6tp0EnEKtwDjaPfWo%2ByrVE5lsWZb0ryj8dHuuWKojmi1B7k8FLoNhGnWN1ISmRwHJJaPGDNeTXNHN1W7Pg8qZzLv0ZRFziH9FgzX6owW%2BK0q7NdJnehRXyuZGE%2BAXq9Kmbo6FGFArGGTYs4IrofcwVOT%2Fxv8uhB8zvgZtpDh4mQ%2BbP%2FM4unRSmIG10XizM7ys1swVVV%2BGpMvK%2BQrdQFxDP5mZSW%2BoV4vHcDOX4TVr6PSM%2B6pvXnyOyFyp22QmkeGm2z2lUn%2FMi%2F4vnTKvecNxLaEUzAk8BIEjIzKlGLGNfRDW3wIbZR5kKYxNDgFNXOZVe3hP9gs0%2F5Ptvg8HVKEoqFCKq0v4FQVtIN0fnLyy5eiYyznZA7gM9qyhff5haH2l7Fmq%2B7uzow3JUTKuHFGiGhfiosBDLhKjnt38lP8hUXF1W4RZzoZM6lZDkbnuro4xjMycd%2B6cOjIfuABTttM%2FAi9JDlPjYg%2FmCo%2FtOtrFLh2a8NyGt%2Bi0Hn4rDAirfeV9f66Ru5%2BkdZt5jIomOHXi%2B9%2B5f%2FpBVU86BFMP8lz8OVLnVsy7h64bXWo1oymKYltGde9zL0DVMmGA8wQXL2qCNqJumFovAVwxYJ40%2BrRBk6tz%2FdkBNw2k59rgKTotvjo%2BhWsK8wsKuKygY6pgHmaMZdS16YizxJkyGeg0VH0wkj4pGJu45k%2FVOhcTOiXxqD2LnI3vpYkwJBIkwKB74nZuKDXlCjePVq%2FB7qAcwV08bdPtEf71do%2B%2B47zOFQGSksDTEWKQPofL%2F7mL50MXjev87hvHEMZZbb9kuMOXd84CtyGYmuXUBTQl16aQeDNbytd%2FR6xT7SS7CPwW98yDPtwVNXLmu4M8QaYRq490uhlQoEITCS&X-Amz-Signature=55c0dcd24fd3ebe32d818562b098d381ff4779d4909f12caa8072a0ca7d60664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622HRNETT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGQdE5ChnN4pGBY0v0CidggeqEJe70ob4DexBXO940UAiAdwJ7i%2FDjPN%2BDLCtkV27skuQjapfz4hRd%2Bn6KLi05r4Cr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMm8LhnCiRc6tp0EnEKtwDjaPfWo%2ByrVE5lsWZb0ryj8dHuuWKojmi1B7k8FLoNhGnWN1ISmRwHJJaPGDNeTXNHN1W7Pg8qZzLv0ZRFziH9FgzX6owW%2BK0q7NdJnehRXyuZGE%2BAXq9Kmbo6FGFArGGTYs4IrofcwVOT%2Fxv8uhB8zvgZtpDh4mQ%2BbP%2FM4unRSmIG10XizM7ys1swVVV%2BGpMvK%2BQrdQFxDP5mZSW%2BoV4vHcDOX4TVr6PSM%2B6pvXnyOyFyp22QmkeGm2z2lUn%2FMi%2F4vnTKvecNxLaEUzAk8BIEjIzKlGLGNfRDW3wIbZR5kKYxNDgFNXOZVe3hP9gs0%2F5Ptvg8HVKEoqFCKq0v4FQVtIN0fnLyy5eiYyznZA7gM9qyhff5haH2l7Fmq%2B7uzow3JUTKuHFGiGhfiosBDLhKjnt38lP8hUXF1W4RZzoZM6lZDkbnuro4xjMycd%2B6cOjIfuABTttM%2FAi9JDlPjYg%2FmCo%2FtOtrFLh2a8NyGt%2Bi0Hn4rDAirfeV9f66Ru5%2BkdZt5jIomOHXi%2B9%2B5f%2FpBVU86BFMP8lz8OVLnVsy7h64bXWo1oymKYltGde9zL0DVMmGA8wQXL2qCNqJumFovAVwxYJ40%2BrRBk6tz%2FdkBNw2k59rgKTotvjo%2BhWsK8wsKuKygY6pgHmaMZdS16YizxJkyGeg0VH0wkj4pGJu45k%2FVOhcTOiXxqD2LnI3vpYkwJBIkwKB74nZuKDXlCjePVq%2FB7qAcwV08bdPtEf71do%2B%2B47zOFQGSksDTEWKQPofL%2F7mL50MXjev87hvHEMZZbb9kuMOXd84CtyGYmuXUBTQl16aQeDNbytd%2FR6xT7SS7CPwW98yDPtwVNXLmu4M8QaYRq490uhlQoEITCS&X-Amz-Signature=90078be9951efdfa229a20523a5b87236e307b17d3e8651fd0d371e81ceb96f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
