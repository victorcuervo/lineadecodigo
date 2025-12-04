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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOSXTNZZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCyWcLya99Wg8KGIlbCFVOIHIrYT5rYHkbGWqFqtzp0vgIgSNvwZLuZXlngoYRf5OPZ8r4ShcwCDgcW2pMkeKI0i24q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDlnGPA2SIUTYQeUxircA2a5LJpVNhCpWHiCsuScUERyvmeeQQN%2F9peq9%2FXNZ37U%2FyY7Dj8veCUxFZ8aBwuVfRx1cEhR1u6LPAvovAZnsLjNr%2BbWkYJ4tJUttVIC%2F8OyVYcVSPDUHVQsUfF%2FMHjqghBG0dvxUunNpx2vNL6M6k2OjsIuluNRBIjT7%2FGrq%2Biz%2F5bD4x4ob%2FpKPUavJBvttCZTCmYgHENjk3SLePk7JwSD31eOcqmm3uctm683BXqtBzSYPGzX%2Fic4L01nD2FysNTVTh0uftS8esSnS%2FlMBGJVkPzyHi6RYlFYN9M1Bkb1Ac1PHXngWEi9C0v%2FBab%2B4uTvEUi%2B9mjSdgeA9ecufJGrGzCCdU7NlhKyUJ7%2BVavYah%2FwTOvf2OMqOpZ4DdMm%2BJsrG2EyztvszHZiB%2B7oQPMaBiFQaBt9v%2Bxj6Z%2BmnR9bL3%2FvC68l3zyC5Gp0nO65mz48MvUJuvuUlPAW3Ejf3wgsEGufnLjULmjb80SjsLihPirlej81gPvlxJVFMNCgTM7of%2FDWjoAi%2B%2Ftfsw3XZOYUKONAFPVxYecOtXZz8ABC4yvKWT9hyhDkXuqJXrX5Zfnt73ji3PI6U0EYJV8GkIkH%2BGfbgTX3cXQa%2FTHfp1ibgrEBFk7Psjht%2FOWcMMWUw8kGOqUBQgXm8UIaiHVPamC6bP6X5edUC7XBI0DyBzW0V3YloAT5LDcarWBLxvbvIcBbvPx8fpxS8x6PMn42AHQD%2BupioRXzvjuYjI9n3AiLsx0Rr1gmAMaCQ%2FeTWvkqPXabXMUtfUIPSj6SAOQo0TlSPpx21EouXvL%2FF1ZOpMhh8gvJHZbqEvvYB%2BYvG1RVABvl2B0vbfP7FptTd82qUqsRp5Eqa3iqEFzY&X-Amz-Signature=fac855c79a497a256134cf8b2ab756417950322ea3d2d9ed8a1989328a69c75c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOSXTNZZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCyWcLya99Wg8KGIlbCFVOIHIrYT5rYHkbGWqFqtzp0vgIgSNvwZLuZXlngoYRf5OPZ8r4ShcwCDgcW2pMkeKI0i24q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDlnGPA2SIUTYQeUxircA2a5LJpVNhCpWHiCsuScUERyvmeeQQN%2F9peq9%2FXNZ37U%2FyY7Dj8veCUxFZ8aBwuVfRx1cEhR1u6LPAvovAZnsLjNr%2BbWkYJ4tJUttVIC%2F8OyVYcVSPDUHVQsUfF%2FMHjqghBG0dvxUunNpx2vNL6M6k2OjsIuluNRBIjT7%2FGrq%2Biz%2F5bD4x4ob%2FpKPUavJBvttCZTCmYgHENjk3SLePk7JwSD31eOcqmm3uctm683BXqtBzSYPGzX%2Fic4L01nD2FysNTVTh0uftS8esSnS%2FlMBGJVkPzyHi6RYlFYN9M1Bkb1Ac1PHXngWEi9C0v%2FBab%2B4uTvEUi%2B9mjSdgeA9ecufJGrGzCCdU7NlhKyUJ7%2BVavYah%2FwTOvf2OMqOpZ4DdMm%2BJsrG2EyztvszHZiB%2B7oQPMaBiFQaBt9v%2Bxj6Z%2BmnR9bL3%2FvC68l3zyC5Gp0nO65mz48MvUJuvuUlPAW3Ejf3wgsEGufnLjULmjb80SjsLihPirlej81gPvlxJVFMNCgTM7of%2FDWjoAi%2B%2Ftfsw3XZOYUKONAFPVxYecOtXZz8ABC4yvKWT9hyhDkXuqJXrX5Zfnt73ji3PI6U0EYJV8GkIkH%2BGfbgTX3cXQa%2FTHfp1ibgrEBFk7Psjht%2FOWcMMWUw8kGOqUBQgXm8UIaiHVPamC6bP6X5edUC7XBI0DyBzW0V3YloAT5LDcarWBLxvbvIcBbvPx8fpxS8x6PMn42AHQD%2BupioRXzvjuYjI9n3AiLsx0Rr1gmAMaCQ%2FeTWvkqPXabXMUtfUIPSj6SAOQo0TlSPpx21EouXvL%2FF1ZOpMhh8gvJHZbqEvvYB%2BYvG1RVABvl2B0vbfP7FptTd82qUqsRp5Eqa3iqEFzY&X-Amz-Signature=76258e0af11a532174f434aeefff4524e59a757942a57c457f2a2e6a60b1d687&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
