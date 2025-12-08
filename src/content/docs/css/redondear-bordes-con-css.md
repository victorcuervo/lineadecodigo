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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OTB54JB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T052522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4LzbFGgP%2FByJp5dF8hoU18IumhzJ7P%2FqdmfharGOc8gIgXfZF0AG80XL%2Bi9D0N3B5Ot1xvrFedZNMZvKlnqctQzwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG48O9ZhAPpimB0D0ircA1FAH9eAO0cYt3A6X8kjQ1X5WlfFD8KWJwBZ6miV2efcnFdg%2BzYh7zBQZX3dmNp%2BWKWYCXLo6ajlCV05deuBWCnX0q6kN6xndZj3JXXC6jBfUXSWhQ3mfW3%2F1%2FUyITafwtQs064%2F%2FarLMS30CXpAwqZ69GxCiwUr%2BwWiCq1AK36BPlc2JMxaWkn8KhV6aDJXGUPvOXHxavt0jysXl9abJWHP85FIq08B%2F%2FQGEe%2FcA2FsFG2rse1BOenznyrpzYY05jehLh6apmbZrETEw18SxQMkB4oqxMU7%2B1tI0CmQmiR2PTHIpxPjBhdB5v3i7X0ab1k%2FhK0hdE68vldXhk7zM7RhnjA5T6FwrcyG8H4i5xnEnaeKEFVJ8NRtA2XgxPvjsn6vALfndDQcGoh%2Bn2M8ip39P5d0fipbF57KGL6vlRtJP1MGMv4C0RPBqpGomVJzZ3lcmye7lfMfFNtI6NDRA02aW06e6WPjRxfXj7rMM5%2Fq%2BVwp2oY7%2FxU5s6Jdm%2B4AAl5xOFY7QfYSGLobe07CGbJaXmfGAhVRQ7Lj81RGDl%2Boj4AYYRP4jIAqrf6yuxpJvvYsaTG1C9GLcMsFZ%2B8JJYRjrHfdq%2FTgMtTBS%2FI3WR8ifsH%2BKkHq9emI093vMOGz2ckGOqUBAYksTbiBoijXXHZjjUdrLr2ZTcihhxBc8RVaGDnRjbo4OyNmeJVvPaHiTZ3IZsGFeDfg5sfToX9KWUzWOyWSEDr%2F9ST0e%2FfORUn9uhZF%2BLMZ%2B3Br9bwkE6UX8h9ktoIUWBU93zE9VRYLzB4w4Fen%2FoWgUEtZODtfdCDL9uAwjW5GkZkXnuekUCycM1tzyx8uiujNXhLMcY1LHicCNrZwYCSjEjps&X-Amz-Signature=da9c0d257039ad4c9a8e8b33fb97f194c6988fe0c90ab01e94f841bc5f2fa7aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OTB54JB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T052522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4LzbFGgP%2FByJp5dF8hoU18IumhzJ7P%2FqdmfharGOc8gIgXfZF0AG80XL%2Bi9D0N3B5Ot1xvrFedZNMZvKlnqctQzwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG48O9ZhAPpimB0D0ircA1FAH9eAO0cYt3A6X8kjQ1X5WlfFD8KWJwBZ6miV2efcnFdg%2BzYh7zBQZX3dmNp%2BWKWYCXLo6ajlCV05deuBWCnX0q6kN6xndZj3JXXC6jBfUXSWhQ3mfW3%2F1%2FUyITafwtQs064%2F%2FarLMS30CXpAwqZ69GxCiwUr%2BwWiCq1AK36BPlc2JMxaWkn8KhV6aDJXGUPvOXHxavt0jysXl9abJWHP85FIq08B%2F%2FQGEe%2FcA2FsFG2rse1BOenznyrpzYY05jehLh6apmbZrETEw18SxQMkB4oqxMU7%2B1tI0CmQmiR2PTHIpxPjBhdB5v3i7X0ab1k%2FhK0hdE68vldXhk7zM7RhnjA5T6FwrcyG8H4i5xnEnaeKEFVJ8NRtA2XgxPvjsn6vALfndDQcGoh%2Bn2M8ip39P5d0fipbF57KGL6vlRtJP1MGMv4C0RPBqpGomVJzZ3lcmye7lfMfFNtI6NDRA02aW06e6WPjRxfXj7rMM5%2Fq%2BVwp2oY7%2FxU5s6Jdm%2B4AAl5xOFY7QfYSGLobe07CGbJaXmfGAhVRQ7Lj81RGDl%2Boj4AYYRP4jIAqrf6yuxpJvvYsaTG1C9GLcMsFZ%2B8JJYRjrHfdq%2FTgMtTBS%2FI3WR8ifsH%2BKkHq9emI093vMOGz2ckGOqUBAYksTbiBoijXXHZjjUdrLr2ZTcihhxBc8RVaGDnRjbo4OyNmeJVvPaHiTZ3IZsGFeDfg5sfToX9KWUzWOyWSEDr%2F9ST0e%2FfORUn9uhZF%2BLMZ%2B3Br9bwkE6UX8h9ktoIUWBU93zE9VRYLzB4w4Fen%2FoWgUEtZODtfdCDL9uAwjW5GkZkXnuekUCycM1tzyx8uiujNXhLMcY1LHicCNrZwYCSjEjps&X-Amz-Signature=7102789a72fae9ec0565dbecb00e02598aed0b37b1358b01a102e087e9e61ef7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
