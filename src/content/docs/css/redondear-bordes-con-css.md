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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMZG5FMG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T125151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FJOeZhGd9Z5bIGhNY%2BXnGKwIu2h%2FRPWoE0cwZCIZ8QAiAV%2BJAIM24ckMKB61x8ZTWOuggOPQIO7ArQNnGX%2FA4MeiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLfLEtdKkuH5PuVehKtwDhxuQL%2BJNkPLgmKLW4xsJ7uuHCfR5KYKOCh3op6JMDfyn%2BawDAgalBk0jV4NuvilgYSSdObmYIRLWorlbGB2%2B%2BhGW92zXVYTd7SVGOVU6ugGA7QmJOGMRvF%2FDheHzX5kZyQiP%2FQd42vuUyuwwaltJLbEK%2FdASP9IlFqsjn%2Ba3nUCYIGLRA6vQd15e%2BGPXLebjQFXiwc%2BJ1vEMaylCB74toRyq0vzW1ThPU9ndXzFfYuhOilSjr9VZWUgNgIlqy%2BAdDcS%2B6NGfHrr0F4mtLcBT0GggVejgPHihFGTMEAe%2Fjvynlt4d%2BfB71ERflIxUkgB%2BKW4f7nSKLaxpROXNy3pRFTmAQB25t%2FSqkNkiCSMQz7lfyTo9v0wMo4WAfLw448UfmFX1%2FgAIAlkzuSnvse8uJgQysw4A96e%2Bw5ajX7l6zmb3X1%2BM24m2w7vx3TLrmj3fs%2Fjt6iXamCSiSSZQBGZVxulHiIu7kSw5omxGporM9IvxhhUt9IjSf6Dd59NdVkJq5sd%2Fw2D%2BE38xDjBa%2F2RFSPGP8b%2BhLSOQ6Eg%2BiWEJl7bycNf6LBrqoI%2BvQZoIn%2FgWA2BoIiRPvYbx9QrNZYNGuqXnvcJjp9Vuq09WMFN7Y45UeXZphfgPmJKjCyUwzZrVyQY6pgHr6W0kzYnfly3RyKJD8RYVbatssqi2W0%2BWKjsVFp1PPQDYwX9CHHkLXtK4cSSeWMRIpc2WTDlv5ZADeEuJte9Ka%2FU2LMtco3yMmt7AzIhoN7DEdyPlNsYU4T%2FzjiMw3HlOtOcQC5jhr5ASgcYKW9m%2Fyuvq5S4Q0zVUfghu6LvBQUtXEB8UECRi%2B0MymP0%2BfjXDepYgHgKNosqpmd31sa7rcfz%2F9JGl&X-Amz-Signature=a13f63dd547887c0bfb640c9971bac19f26a0e6b3155fc23a960d7ce267b1daa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMZG5FMG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T125151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FJOeZhGd9Z5bIGhNY%2BXnGKwIu2h%2FRPWoE0cwZCIZ8QAiAV%2BJAIM24ckMKB61x8ZTWOuggOPQIO7ArQNnGX%2FA4MeiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLfLEtdKkuH5PuVehKtwDhxuQL%2BJNkPLgmKLW4xsJ7uuHCfR5KYKOCh3op6JMDfyn%2BawDAgalBk0jV4NuvilgYSSdObmYIRLWorlbGB2%2B%2BhGW92zXVYTd7SVGOVU6ugGA7QmJOGMRvF%2FDheHzX5kZyQiP%2FQd42vuUyuwwaltJLbEK%2FdASP9IlFqsjn%2Ba3nUCYIGLRA6vQd15e%2BGPXLebjQFXiwc%2BJ1vEMaylCB74toRyq0vzW1ThPU9ndXzFfYuhOilSjr9VZWUgNgIlqy%2BAdDcS%2B6NGfHrr0F4mtLcBT0GggVejgPHihFGTMEAe%2Fjvynlt4d%2BfB71ERflIxUkgB%2BKW4f7nSKLaxpROXNy3pRFTmAQB25t%2FSqkNkiCSMQz7lfyTo9v0wMo4WAfLw448UfmFX1%2FgAIAlkzuSnvse8uJgQysw4A96e%2Bw5ajX7l6zmb3X1%2BM24m2w7vx3TLrmj3fs%2Fjt6iXamCSiSSZQBGZVxulHiIu7kSw5omxGporM9IvxhhUt9IjSf6Dd59NdVkJq5sd%2Fw2D%2BE38xDjBa%2F2RFSPGP8b%2BhLSOQ6Eg%2BiWEJl7bycNf6LBrqoI%2BvQZoIn%2FgWA2BoIiRPvYbx9QrNZYNGuqXnvcJjp9Vuq09WMFN7Y45UeXZphfgPmJKjCyUwzZrVyQY6pgHr6W0kzYnfly3RyKJD8RYVbatssqi2W0%2BWKjsVFp1PPQDYwX9CHHkLXtK4cSSeWMRIpc2WTDlv5ZADeEuJte9Ka%2FU2LMtco3yMmt7AzIhoN7DEdyPlNsYU4T%2FzjiMw3HlOtOcQC5jhr5ASgcYKW9m%2Fyuvq5S4Q0zVUfghu6LvBQUtXEB8UECRi%2B0MymP0%2BfjXDepYgHgKNosqpmd31sa7rcfz%2F9JGl&X-Amz-Signature=2f0fa17ea78c5ebb62f94ea0d117272b339c425cccf225d8fd8bc75513e44129&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
