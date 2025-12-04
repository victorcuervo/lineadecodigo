---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHVGK6FM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T112541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIDJXbUDCGDkPuMhEEYLYUxsIN5QI%2BCmxdMzwoG%2BAT6%2FWAiB48rhICalZKwRrPI2f2%2F8AGGfqaE7T0RFm%2FJGiA8FZsir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM7Ex2MSFs%2BwdRhX4RKtwDiz2PGlptVMFSr1jzJBUfygn8IbBwoRmfATzYAbm%2BCHnKNN%2Fjjv3aakCH23wKoDmLZJVMt7eieMbK660eZ%2BG2Qt4vtar4bVY96KVtl6X5nS60jmX9kcyWkla%2FeS79l6Z22hkT7GfMB01WHWCu5US9NOoL%2FlBhxajfeud%2F3pCa1Oh7OwblY7r5O%2FzRzQ4xw0m5PPRytN6ibkNKEy8siRLSvNT8ZZEAesvdrK%2B%2FBzc3%2FhDv6CrQO2WRCEnEml2BBkfN8Y5wAbsK7hZZgo0K8l%2FADHLFZRxd4ckMOlz0H5bJ3Rl7oFsYRwqju%2BTqVA7YDPUcSg8kBuuoD4oj1N%2BIzixAj0yK%2B%2Bn2tWQwnr8hpMsqaCDIjpFYk%2BH%2FoEpsXzrZ6dWT3IXA%2BxApO3INuu7gGD%2FLUhuUGgp2VKjdMsNl4MICs%2FYsTRaU6O8%2B0c0Fv9FF6aFWnEyO1O%2FcIJ3s9okuimOW6SJrsK1eDGnRdjCsNAzs3lwsWfUx9HCxuO8sp2ZcKo02VlxFKHcGL4on%2Fy44GrXkXgkllYvmkh7pZcubqp3dAqmu%2BKfzlaooAtRd8m1yMPk%2FWVNEpqBER2phaamxzuoYXDNRjY8%2FrteiSWAk69dYyQ9Kz%2F%2BdUvgqfz5opNcw48jFyQY6pgHpegloUVwej04sWM2QiKf44YlcvZHNQ4I74Qh%2FYlNWcG6cSQHZT6whK2FhIOj%2B2VxwnpAWHUBj1bGmZRyMwPcsz2z%2Bi6X94fBTBM2gcLaF8VmeVGiVsE5mxuU8UH9Oikv1BsS5xbmlw08G31DyKtwviLInJRPm0h5G7irWulVTh8cnlRHyGZj8CNqrbyWfvuc4YYhYFy0cG4kebMIwtFPk67ch0szU&X-Amz-Signature=cb7de43c50a90ea8176fffad983ed2cbd5927b483582c7151a8f91b6206ff712&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHVGK6FM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T112541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIDJXbUDCGDkPuMhEEYLYUxsIN5QI%2BCmxdMzwoG%2BAT6%2FWAiB48rhICalZKwRrPI2f2%2F8AGGfqaE7T0RFm%2FJGiA8FZsir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM7Ex2MSFs%2BwdRhX4RKtwDiz2PGlptVMFSr1jzJBUfygn8IbBwoRmfATzYAbm%2BCHnKNN%2Fjjv3aakCH23wKoDmLZJVMt7eieMbK660eZ%2BG2Qt4vtar4bVY96KVtl6X5nS60jmX9kcyWkla%2FeS79l6Z22hkT7GfMB01WHWCu5US9NOoL%2FlBhxajfeud%2F3pCa1Oh7OwblY7r5O%2FzRzQ4xw0m5PPRytN6ibkNKEy8siRLSvNT8ZZEAesvdrK%2B%2FBzc3%2FhDv6CrQO2WRCEnEml2BBkfN8Y5wAbsK7hZZgo0K8l%2FADHLFZRxd4ckMOlz0H5bJ3Rl7oFsYRwqju%2BTqVA7YDPUcSg8kBuuoD4oj1N%2BIzixAj0yK%2B%2Bn2tWQwnr8hpMsqaCDIjpFYk%2BH%2FoEpsXzrZ6dWT3IXA%2BxApO3INuu7gGD%2FLUhuUGgp2VKjdMsNl4MICs%2FYsTRaU6O8%2B0c0Fv9FF6aFWnEyO1O%2FcIJ3s9okuimOW6SJrsK1eDGnRdjCsNAzs3lwsWfUx9HCxuO8sp2ZcKo02VlxFKHcGL4on%2Fy44GrXkXgkllYvmkh7pZcubqp3dAqmu%2BKfzlaooAtRd8m1yMPk%2FWVNEpqBER2phaamxzuoYXDNRjY8%2FrteiSWAk69dYyQ9Kz%2F%2BdUvgqfz5opNcw48jFyQY6pgHpegloUVwej04sWM2QiKf44YlcvZHNQ4I74Qh%2FYlNWcG6cSQHZT6whK2FhIOj%2B2VxwnpAWHUBj1bGmZRyMwPcsz2z%2Bi6X94fBTBM2gcLaF8VmeVGiVsE5mxuU8UH9Oikv1BsS5xbmlw08G31DyKtwviLInJRPm0h5G7irWulVTh8cnlRHyGZj8CNqrbyWfvuc4YYhYFy0cG4kebMIwtFPk67ch0szU&X-Amz-Signature=abdc68810ce0237c635b6bd46dc7e6043ac90c747f6faab801fcce8d1952287e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
