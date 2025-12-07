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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPUEWMQU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXMMfcD3uMYE4%2F7IB%2BWtHKMWgA8sqc4UNQnwMZJIrRnAIhAJrbq1xk8mAFP4lkqjRBfFOsURPRdlR%2BoZldWjWzUSckKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTMb35U0DakAmXJPIq3AN35Wa9%2FvSQ4mgULvLCoep6%2Bt%2FB%2BX545DA83a7Cbk0K2uF%2BpW9eAzaOHKAJyQLbnisXvk4scJERJBoHrZ%2F6nZwzsdlSVk8dTfDPo3IA%2FjX1vfwLB0P0l7TlsTatYiaxbDRb2G5mg9wEMZQTAcMaHbJN8ldPPXaCKsD4fkS6Iy%2FYhdGPs1HAmvwVDEmg8unYoDq7uMOIvBaBOPIlpT4%2BSCqERSvfSP7zP8%2B8KGgWr%2BSPpd%2BqILYTGuZyjDxgvfDj9utRko9DurMq%2F2exaOQrRAvsCP9KprKYif74IjNcCtcdLpQYqiGjDN6PBwqNi7BQZSwhLq5bArMGCPH8Pya6F5Li94sZ4ixWG33UTQsPaaq3FCarIfE%2BodaGdi7TlcovYm1DqpsxpFJP0Wxx40Pd5S%2F58IkClXWn0IvLJm%2FR6c%2BBerT7DtyoekZyjdVOf8JaTi2iVcMk6eO%2B5ETXsQVpP%2B3EgWwyPu8Ar6nOWmbaeWf%2B1P9%2F4qfhrX%2BrgxYSfVEr2UQJHqaGcQQBPh%2FGFrV86nWVwwrT%2FS7FfBppzoC4DC0C9po3XFGnE4AVoc%2BP3BOILE59y3LOqcQ6Rgp1CVAPOgwbQuNLtLC7N5DPQd0VQPkUAWh0F2k%2FHrUNGk0TBzCymtXJBjqkAYlafMbNebPd6kyWyKDBrfaeGRvcD0FGeLKniOC6lzwc%2BX%2B8gtXT8BbdNEomcmNwx1zvcviIREJ%2BtB52%2FUjmjDWiVzAkali2b55n0NLiGOhCIFnfMzVYaz0dH91gukRr8bA%2FxyiqGcASd9hw3oiCQ6qCUK8QJ%2FA7E4NxgqWbGa3wgxaq7tK6esM9R%2FPlMAupGt5RWiSlUpgD310tG%2BacG%2FBQOYln&X-Amz-Signature=57b463b105f01c1131ad7a247d47127a62a68c7ae0b503d65b2d5ed367c395e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPUEWMQU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXMMfcD3uMYE4%2F7IB%2BWtHKMWgA8sqc4UNQnwMZJIrRnAIhAJrbq1xk8mAFP4lkqjRBfFOsURPRdlR%2BoZldWjWzUSckKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTMb35U0DakAmXJPIq3AN35Wa9%2FvSQ4mgULvLCoep6%2Bt%2FB%2BX545DA83a7Cbk0K2uF%2BpW9eAzaOHKAJyQLbnisXvk4scJERJBoHrZ%2F6nZwzsdlSVk8dTfDPo3IA%2FjX1vfwLB0P0l7TlsTatYiaxbDRb2G5mg9wEMZQTAcMaHbJN8ldPPXaCKsD4fkS6Iy%2FYhdGPs1HAmvwVDEmg8unYoDq7uMOIvBaBOPIlpT4%2BSCqERSvfSP7zP8%2B8KGgWr%2BSPpd%2BqILYTGuZyjDxgvfDj9utRko9DurMq%2F2exaOQrRAvsCP9KprKYif74IjNcCtcdLpQYqiGjDN6PBwqNi7BQZSwhLq5bArMGCPH8Pya6F5Li94sZ4ixWG33UTQsPaaq3FCarIfE%2BodaGdi7TlcovYm1DqpsxpFJP0Wxx40Pd5S%2F58IkClXWn0IvLJm%2FR6c%2BBerT7DtyoekZyjdVOf8JaTi2iVcMk6eO%2B5ETXsQVpP%2B3EgWwyPu8Ar6nOWmbaeWf%2B1P9%2F4qfhrX%2BrgxYSfVEr2UQJHqaGcQQBPh%2FGFrV86nWVwwrT%2FS7FfBppzoC4DC0C9po3XFGnE4AVoc%2BP3BOILE59y3LOqcQ6Rgp1CVAPOgwbQuNLtLC7N5DPQd0VQPkUAWh0F2k%2FHrUNGk0TBzCymtXJBjqkAYlafMbNebPd6kyWyKDBrfaeGRvcD0FGeLKniOC6lzwc%2BX%2B8gtXT8BbdNEomcmNwx1zvcviIREJ%2BtB52%2FUjmjDWiVzAkali2b55n0NLiGOhCIFnfMzVYaz0dH91gukRr8bA%2FxyiqGcASd9hw3oiCQ6qCUK8QJ%2FA7E4NxgqWbGa3wgxaq7tK6esM9R%2FPlMAupGt5RWiSlUpgD310tG%2BacG%2FBQOYln&X-Amz-Signature=f027661298cc10d69f71448bc6014737d0a70d3c4ce60e50936820d69e62e147&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
