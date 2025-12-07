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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB7C7BN4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T162604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUM1WBNnVECtV3GEjanD6az4RDSk32rXfXyBTPm6IZJgIgUrWP6EZSbxo5y6FEqyOaio0k7W%2BQUgaClrMbKA1BivIqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB51qdlDSfgGL%2BEGhCrcA5yCW75ktwDm4V5P%2F3grSMzBEUktXU4MrtS5dPChXSO0RjqRAZaY7%2B%2B9DjHMK3TtqDK5ZY37V1hR9kK3eecZu%2Fff6ObejLd1JTmjQnEEbHRQBoCxvklMK7CU3vGTEWBI%2BfxLyG7MiHAVqRQHS9%2Bb8CwdrO9FpJDvOAdyEmzxqOyREU9DEVq9rFjgNCKnilR7qXR4Eqbi9r5mrDjFBvwc8YvVXls84b6oRoJVQCeSMPdwOxWNm%2FXGh96%2Buv7zi8j4ZS3Vo0636Fa%2FONa30J%2F8rc3ZNPT5B0Tni77Xru06tJp4AJpMPzf02aT2VfrZJtvtDd2TK7GN5nKeJ3ROlMfkI%2F%2Ffl7e7gDAWrxD895%2BockkSeOSFIBj5S9ITyqQVDoSmOawcsohKpzx432KOxp46XHDwK51lPRAIU2SzNvuds%2Bual25ieQDHh9l43n5u0zu9HY6MzVQp1skFQHgpdRMu4kOO8jEmmEejjbKLSg1SyZKqNk4y%2BeCYhVUVXlntk3NCd4ADgzBWJANjoT%2FvKxDLamIi%2FDWKCJsWE7J8v%2FrbANv9savkqJmIwznKO2O4xq%2BCabNLrm0CHyaLb1I5aVhN98LKaqIrxoS6H4yXIluCBvyaoIb4EV4OlwSXvNDwMLy31skGOqUB1KBZjXXTkhza862n0IRqj3ZSKhHUuvJhLLur%2Fp6nTIh7K2ZaUfu7VdI4b2E2rtfyRePwfLxxud9YAY2l8vttEtF%2BpFMk%2F31aRwQ3U48GGoDqTPHqUrdJ94PF%2FJO0%2Blmpa3AhRGkov0KQcjIFs%2BJhuAwmV4k8sNPlj5QVHdz%2FNs85XcFO8R%2FqND70zTtXh4fLCEYC4fx0JMjwnbRXYauQw6YTGpki&X-Amz-Signature=e4d96b3c56c9fc21c128413ee741774815047d7ea95c30364269bd344244bc82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB7C7BN4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T162604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUM1WBNnVECtV3GEjanD6az4RDSk32rXfXyBTPm6IZJgIgUrWP6EZSbxo5y6FEqyOaio0k7W%2BQUgaClrMbKA1BivIqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB51qdlDSfgGL%2BEGhCrcA5yCW75ktwDm4V5P%2F3grSMzBEUktXU4MrtS5dPChXSO0RjqRAZaY7%2B%2B9DjHMK3TtqDK5ZY37V1hR9kK3eecZu%2Fff6ObejLd1JTmjQnEEbHRQBoCxvklMK7CU3vGTEWBI%2BfxLyG7MiHAVqRQHS9%2Bb8CwdrO9FpJDvOAdyEmzxqOyREU9DEVq9rFjgNCKnilR7qXR4Eqbi9r5mrDjFBvwc8YvVXls84b6oRoJVQCeSMPdwOxWNm%2FXGh96%2Buv7zi8j4ZS3Vo0636Fa%2FONa30J%2F8rc3ZNPT5B0Tni77Xru06tJp4AJpMPzf02aT2VfrZJtvtDd2TK7GN5nKeJ3ROlMfkI%2F%2Ffl7e7gDAWrxD895%2BockkSeOSFIBj5S9ITyqQVDoSmOawcsohKpzx432KOxp46XHDwK51lPRAIU2SzNvuds%2Bual25ieQDHh9l43n5u0zu9HY6MzVQp1skFQHgpdRMu4kOO8jEmmEejjbKLSg1SyZKqNk4y%2BeCYhVUVXlntk3NCd4ADgzBWJANjoT%2FvKxDLamIi%2FDWKCJsWE7J8v%2FrbANv9savkqJmIwznKO2O4xq%2BCabNLrm0CHyaLb1I5aVhN98LKaqIrxoS6H4yXIluCBvyaoIb4EV4OlwSXvNDwMLy31skGOqUB1KBZjXXTkhza862n0IRqj3ZSKhHUuvJhLLur%2Fp6nTIh7K2ZaUfu7VdI4b2E2rtfyRePwfLxxud9YAY2l8vttEtF%2BpFMk%2F31aRwQ3U48GGoDqTPHqUrdJ94PF%2FJO0%2Blmpa3AhRGkov0KQcjIFs%2BJhuAwmV4k8sNPlj5QVHdz%2FNs85XcFO8R%2FqND70zTtXh4fLCEYC4fx0JMjwnbRXYauQw6YTGpki&X-Amz-Signature=5ee168ebc1ac32e8904ad8edc6293255e7047aa6fc42e382dd1c4c00f353c565&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
