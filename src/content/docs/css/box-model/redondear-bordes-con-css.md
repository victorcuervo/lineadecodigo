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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKIMAVSM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUA12Jq88ZSQIxi4NxksHmKf1GMenIEKy0GnGp6lL%2BqAIgUDA6ppfg71oe3wEH4bOtvlG1tmpaFW672VB%2FR7GfnTkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPeN2GBmlj9LLKTT6SrcA1t23WMl1TKH2KNdnSHBXq%2FctvpsPZjClwqz7bDmago0QqGt7cw1tIn%2FFFG2WOxBd111rJ5oA2dt4TwIO5whKi0vbxeJcVG3FvqmIihLT6jdUlPcsHTo%2BjjS7j6XJPlK%2BJsPSi3pWbrp8I3DgiNHdt%2FXGzVn7qCZO0W3GXM74kfBPRf7AQQ3dUJJ4ZBiYOWwZNp5CYeKqVude0N5ZXPAToFt947HvXES713o1vNORXqFtQYoaqdZF8fEwxHOuC5jfjI3a07qhB%2BPTKFs4LGLAdjinzEXtD1OGkNZ%2BkKUzukrug86Bgf9Yqu4tPXHVmqSW%2B3MsRJ6Ohts4rINeT%2FbbkSOP8oZz0v5X8UCA2lWlyq9%2Bw3%2FySIimj7%2BZ8glr%2BFvhpJjd9XP%2FAKx2MnyL7iG6coHHnwa%2BvaUJA5I0u%2FVRn8f4wWLIG9uXKjcw%2FIPmk2Bvnfh%2B5vbOLsC96g7eocGdDPfqf59NKPeDEtqrDi3YbPHFbR7vVP%2BN3MWNFAJaA5VA4b5W4lthCx9rXhGdqBTDbEeorfOl3r%2Bok%2BVofP7iFW47osz5%2BescTUJO37jTrcipyNW0nKoRM3JN%2BgtRUp3Dhk3fJ1%2BmVQY91is242AgIQ1PkVrMMcmlEwAluXbMI3SicoGOqUBSZoR%2BKvYxoPrNywaQolH5Lhi97rmn0%2BwbLvic%2FhK1Mi4fwrZW3YF52s4Lq4YPgsYpIU%2F15JCdpYq0rlkfDibdIWCcYl%2BfLzYz7nKwmDa562kwjAg2TztQoHKjz9KQnEppRCu5Q1JjdXX%2BaE69j6%2BsiDszHEiXCmk18%2B7X8FingNAYXMRvcqmYu8lA83U4tzD7D3vA05jnyiKP99KzvYgHkJ0IKlx&X-Amz-Signature=918c478a90d787b479bb0f14fcd6546fe15969ac40bb1cb784027fecb5ee1ee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKIMAVSM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUA12Jq88ZSQIxi4NxksHmKf1GMenIEKy0GnGp6lL%2BqAIgUDA6ppfg71oe3wEH4bOtvlG1tmpaFW672VB%2FR7GfnTkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPeN2GBmlj9LLKTT6SrcA1t23WMl1TKH2KNdnSHBXq%2FctvpsPZjClwqz7bDmago0QqGt7cw1tIn%2FFFG2WOxBd111rJ5oA2dt4TwIO5whKi0vbxeJcVG3FvqmIihLT6jdUlPcsHTo%2BjjS7j6XJPlK%2BJsPSi3pWbrp8I3DgiNHdt%2FXGzVn7qCZO0W3GXM74kfBPRf7AQQ3dUJJ4ZBiYOWwZNp5CYeKqVude0N5ZXPAToFt947HvXES713o1vNORXqFtQYoaqdZF8fEwxHOuC5jfjI3a07qhB%2BPTKFs4LGLAdjinzEXtD1OGkNZ%2BkKUzukrug86Bgf9Yqu4tPXHVmqSW%2B3MsRJ6Ohts4rINeT%2FbbkSOP8oZz0v5X8UCA2lWlyq9%2Bw3%2FySIimj7%2BZ8glr%2BFvhpJjd9XP%2FAKx2MnyL7iG6coHHnwa%2BvaUJA5I0u%2FVRn8f4wWLIG9uXKjcw%2FIPmk2Bvnfh%2B5vbOLsC96g7eocGdDPfqf59NKPeDEtqrDi3YbPHFbR7vVP%2BN3MWNFAJaA5VA4b5W4lthCx9rXhGdqBTDbEeorfOl3r%2Bok%2BVofP7iFW47osz5%2BescTUJO37jTrcipyNW0nKoRM3JN%2BgtRUp3Dhk3fJ1%2BmVQY91is242AgIQ1PkVrMMcmlEwAluXbMI3SicoGOqUBSZoR%2BKvYxoPrNywaQolH5Lhi97rmn0%2BwbLvic%2FhK1Mi4fwrZW3YF52s4Lq4YPgsYpIU%2F15JCdpYq0rlkfDibdIWCcYl%2BfLzYz7nKwmDa562kwjAg2TztQoHKjz9KQnEppRCu5Q1JjdXX%2BaE69j6%2BsiDszHEiXCmk18%2B7X8FingNAYXMRvcqmYu8lA83U4tzD7D3vA05jnyiKP99KzvYgHkJ0IKlx&X-Amz-Signature=cc39728e335cb2c2ad38e7efcae14c55f20d4824489dd7909377a954ed004782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
