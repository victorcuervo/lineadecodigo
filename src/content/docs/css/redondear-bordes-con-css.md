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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJOHHCA3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T185439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGa3Fia63Z8LEYFpBNbsL8dutqjHCs%2Fgo90P0MB3GhkAIhAP%2BFS0tW8ZmZ6tbNPMZoDpGh%2FlLZbdMplDWg4FYTnjwOKv8DCGAQABoMNjM3NDIzMTgzODA1IgwpIoPz2Mgzolzh9moq3APxb9OmmfWZJY9SjI814C2YyZUaYvKn82r7HybLsTPN%2FfnUL6TMcyB9j9SXSY8YbKL3HJIjf%2BUNpIK2J3vhZSKF94dvMTX6j6w1XGHHIwQ2wC5WnVMJQZ5osCKC5vWwqrrpxx1Qkis0cxcqqiUOI7m%2Fr3QtMdUVnAwsWLkiQVL%2B8tDGiXIhGNwHgyIOrjOfVZDTIIIiMA0Lf%2FOGDxT%2FmkH6jkHr7rtxjguPRvAvFBbo7c9ExkwbGa1MUXfZmHo4s5eVSjiXkII6f8tplEBf7oZX5crz%2BgYrGX5yYjrwsNZ7eCY%2FnjqX2QhzFb48SSJZWt%2FAWG7Y16x4McP4ibC3778XQb1URFPWAKxbXS2W9IU16bDeeO%2FSggHa4%2B4dKKaaC9vyygLJUbRWsDJX6e7JoqvinhuRqoNpwfSbyc5unNu%2F8%2BoEf7O5SkMSbL2yCBDBUlpuXbQkiMrZA8cOco3GeYkRIVW339r5Xd0dWPiOL7ZApNrRqbrxJCbV3CifiTc%2B7z8ooaZhML5jwA%2FDO6wmLRjaMtbkC2PM0DyjuQTJjFuFurK5k2SG86F9re7iNyFuvwFNgzUk%2FJZ7XCW6cOD9aAUY0PMTV7hT0LUFrTiy6pR5aB4zeOjRcbtbH4Px2DCl4cvJBjqkASEMZ9MahX%2B4rzAr%2FttZMvDPBybzdr1JF2uMFXEkWxbjhOll%2FAcl4uiyubIrGf4FPCdKLKI275pvXCarOtzbDU7i5Dfyd5h7lVGM3oaMoEzYg%2Fxvaulkp1dVQFpverro0zS2DH1j6jWb796DW18I9oqnY%2F9m5nof7h4OJK8jTVhJRMHmXrdf5ya9eFDYZ%2Boq1hUrdBv%2FQLjuXZYOjFHeH44mFdxl&X-Amz-Signature=074e042ac27910d099803eaf6a2058230a5f33adcc3e7c01bed86a4429a8f50b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJOHHCA3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T185439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGa3Fia63Z8LEYFpBNbsL8dutqjHCs%2Fgo90P0MB3GhkAIhAP%2BFS0tW8ZmZ6tbNPMZoDpGh%2FlLZbdMplDWg4FYTnjwOKv8DCGAQABoMNjM3NDIzMTgzODA1IgwpIoPz2Mgzolzh9moq3APxb9OmmfWZJY9SjI814C2YyZUaYvKn82r7HybLsTPN%2FfnUL6TMcyB9j9SXSY8YbKL3HJIjf%2BUNpIK2J3vhZSKF94dvMTX6j6w1XGHHIwQ2wC5WnVMJQZ5osCKC5vWwqrrpxx1Qkis0cxcqqiUOI7m%2Fr3QtMdUVnAwsWLkiQVL%2B8tDGiXIhGNwHgyIOrjOfVZDTIIIiMA0Lf%2FOGDxT%2FmkH6jkHr7rtxjguPRvAvFBbo7c9ExkwbGa1MUXfZmHo4s5eVSjiXkII6f8tplEBf7oZX5crz%2BgYrGX5yYjrwsNZ7eCY%2FnjqX2QhzFb48SSJZWt%2FAWG7Y16x4McP4ibC3778XQb1URFPWAKxbXS2W9IU16bDeeO%2FSggHa4%2B4dKKaaC9vyygLJUbRWsDJX6e7JoqvinhuRqoNpwfSbyc5unNu%2F8%2BoEf7O5SkMSbL2yCBDBUlpuXbQkiMrZA8cOco3GeYkRIVW339r5Xd0dWPiOL7ZApNrRqbrxJCbV3CifiTc%2B7z8ooaZhML5jwA%2FDO6wmLRjaMtbkC2PM0DyjuQTJjFuFurK5k2SG86F9re7iNyFuvwFNgzUk%2FJZ7XCW6cOD9aAUY0PMTV7hT0LUFrTiy6pR5aB4zeOjRcbtbH4Px2DCl4cvJBjqkASEMZ9MahX%2B4rzAr%2FttZMvDPBybzdr1JF2uMFXEkWxbjhOll%2FAcl4uiyubIrGf4FPCdKLKI275pvXCarOtzbDU7i5Dfyd5h7lVGM3oaMoEzYg%2Fxvaulkp1dVQFpverro0zS2DH1j6jWb796DW18I9oqnY%2F9m5nof7h4OJK8jTVhJRMHmXrdf5ya9eFDYZ%2Boq1hUrdBv%2FQLjuXZYOjFHeH44mFdxl&X-Amz-Signature=63635c75d3f56ce7abeddd6fd65aed8fc177288001ec6df19615981159c5d54b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
