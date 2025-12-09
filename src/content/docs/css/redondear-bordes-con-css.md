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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNYKAI6K%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T050142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDroa4LLCmgF3ivgMsBa%2B3SlIR3JsQd9FCLrjqQziDHoAIgXkgzzNDLmFt01lLk4fhKgAGj4qKgtapoaWQOibZOKQ8qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvRnJrXnELPKKjxwircA8U0ZauLHjwr3WTKi%2FGM%2FA9D2dJwhtV34%2BiK7jHkpgfMe46ow%2FqjQCzbVFssVE5XHMBO6oLv7%2BID0l7BQtVmIWu6JKgeNXZXhbpU0WxIgoZr%2F%2BYnMslqM4RAoY%2BxpO5PODTWlaDWGnQ3J3TkWCaOCXrXjzmApd9CB5mrCXhSylvKAFN7U8enaBBQ2GyW5962z3feO5VZ6lBNQpERybPv8QeiEIWnxVho0ZvZXg19MqOIQDZSYFnM9%2F76tZWws7mALJn0yw0ZZMp35ZeJBtKC0HoEol4NyyjeQIjPhouCq4XsaEnsgkKXruOTPoSouWVuTeLRG54I7OLQbKI6%2FfnYbd8KPu8LZ3RAlFsBG4E6XSf8Fu1r%2BMulD0pFVBuGDIvkhLxsq%2FueBVco5kM%2BmbXV8cLMguT%2B8UGHIgl%2FjG18NSOjTCK0A12c45PfCrllicdn2s6fOMuywSXZyHvRGX9TH75q5urphjT8wUB7JzWEx%2FZdJiZlmjrTtrwEyatkdxSJ0ASNV90fPDj%2B0LUdGVLBxK0VzIQ0SsmtN8o99WB6sTkEDVRFnrlIOSoQpup8SVuvF95Tlb%2FvFF5DTUoC1FKabRIhuibaU7eXiMp2oHqXLVuPXDoBVq3HMN%2FCBm%2BZMMXJ3skGOqUB6C2wlyhz7XAhkPOFxjOc2vW0QE54mommgUSP7Ju%2Bdx3qZTHnqosibPz5Z2G%2BKgMVVBkUyiZq3U%2FN6vcXEgDuBf29feJ1c3BMo6wkbuAqXMo57iL%2FhOVaWRiqKsw3Lbkh3NS8gDFWWhzFesIyHb1oa7hfB5MgqI26oRPL6npEmr0xyNFj8vOmy32p0cK5Md73ayQly4%2F1eOOvPmBYnsyhhQvgp0OD&X-Amz-Signature=85cf606f8fc24c7c843b6269d4347b47fbcd45f3ea6505a52ea34d0a3b3e3ee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNYKAI6K%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T050142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDroa4LLCmgF3ivgMsBa%2B3SlIR3JsQd9FCLrjqQziDHoAIgXkgzzNDLmFt01lLk4fhKgAGj4qKgtapoaWQOibZOKQ8qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvRnJrXnELPKKjxwircA8U0ZauLHjwr3WTKi%2FGM%2FA9D2dJwhtV34%2BiK7jHkpgfMe46ow%2FqjQCzbVFssVE5XHMBO6oLv7%2BID0l7BQtVmIWu6JKgeNXZXhbpU0WxIgoZr%2F%2BYnMslqM4RAoY%2BxpO5PODTWlaDWGnQ3J3TkWCaOCXrXjzmApd9CB5mrCXhSylvKAFN7U8enaBBQ2GyW5962z3feO5VZ6lBNQpERybPv8QeiEIWnxVho0ZvZXg19MqOIQDZSYFnM9%2F76tZWws7mALJn0yw0ZZMp35ZeJBtKC0HoEol4NyyjeQIjPhouCq4XsaEnsgkKXruOTPoSouWVuTeLRG54I7OLQbKI6%2FfnYbd8KPu8LZ3RAlFsBG4E6XSf8Fu1r%2BMulD0pFVBuGDIvkhLxsq%2FueBVco5kM%2BmbXV8cLMguT%2B8UGHIgl%2FjG18NSOjTCK0A12c45PfCrllicdn2s6fOMuywSXZyHvRGX9TH75q5urphjT8wUB7JzWEx%2FZdJiZlmjrTtrwEyatkdxSJ0ASNV90fPDj%2B0LUdGVLBxK0VzIQ0SsmtN8o99WB6sTkEDVRFnrlIOSoQpup8SVuvF95Tlb%2FvFF5DTUoC1FKabRIhuibaU7eXiMp2oHqXLVuPXDoBVq3HMN%2FCBm%2BZMMXJ3skGOqUB6C2wlyhz7XAhkPOFxjOc2vW0QE54mommgUSP7Ju%2Bdx3qZTHnqosibPz5Z2G%2BKgMVVBkUyiZq3U%2FN6vcXEgDuBf29feJ1c3BMo6wkbuAqXMo57iL%2FhOVaWRiqKsw3Lbkh3NS8gDFWWhzFesIyHb1oa7hfB5MgqI26oRPL6npEmr0xyNFj8vOmy32p0cK5Md73ayQly4%2F1eOOvPmBYnsyhhQvgp0OD&X-Amz-Signature=023bd9c0926dafe2eb6fe93be470e1f8482842da4cc0431a3944e946dee1ebd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
