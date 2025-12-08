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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZU6AQ6B%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb2DT0GxGWtmel48shw2xqcaIQBx5%2FrAr0MbtKJXqyVgIgXAlJW%2BQ4%2F75yA1PoXsx6YOXOxSzPHfenHZ3cWVNqVvEqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuT8ItFhFJsR1QXxCrcA2BohmDrsXOKgBWqPg7YUc5UlOW%2B5bL%2F%2B8XpuaRFZz1F7ven%2BKLyfI%2BwsxFBZELVj3L2q56maofMsK%2B0mhnGOo5jyN7w8pl9eK6tBtriIO9GQ6rN%2BN3bwLBItaYGKzm2MzKwMbpG0u%2FXjxKsN3HMZgvFjhVcYcmF2FvD%2B2c1dS7hB28b1WN%2Fi64ENj2TUJNwcWMALNhmkr6ocYp3ce0fFty2vJJqiH6eU3fS6OZheCubaActYth45ATpUJD7noCd7l9yob2DWXHbLPZY5gXBfScUpzZZTMmw9s546jx1pAbh1%2F%2FCffP35LAXnG0vds9ULbKSEGYKe6tYD5tuCAtmrmsd7q6vPkY3xHN%2BN2zmmqXb0aYD6SCY0tDBeqVNLw64dxFxWU28GNmQEFuNqjdA9h%2FCF8jQP3qiDrL0q9eYWJZCuC6XxJAQOquwpWBd7CIqU%2BxJMZ8uqilI9IfyNkysSbJJmTS5H0paN2E7k7DQUAwaOaqG%2BD%2FQIaVx1QK7VfJX7esmYsqGbrd4IRWyYIQQbACC1OQEVmYa9TDgrCDS3KWDD2z4B%2B%2FC3uIkjOWd0T%2FFvYLchuUvYt9k6jpd9db9XgdhLoP2pUGClPAw3kcS1k3nE%2BY3YdyW8KmP%2BDD9MIvv2MkGOqUBsPSEKbDFAYTHCe0eTgmnyWltfdkqB8HC%2BMv7rPF0jxVW9qK2t7QQLdYfLZuqyr6%2FGzvdpzBojiHRgaraBQZ1jVbU9MZUiYOjFJTYNCFUjQM1v5Un0hLdN17tND332HLiHiHyVSlfETBv5h7PYchQ5LxtWFhK09hZSYPqsVNNzpsJJimECqy5M%2B%2FYyz%2BXAgc%2F2N%2BWuCgCTkATMNgAOri9zzEtIOzp&X-Amz-Signature=ab28964e933b1deacab3411ff22ab533113bd63ab42466d0e7035abf09b13261&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZU6AQ6B%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb2DT0GxGWtmel48shw2xqcaIQBx5%2FrAr0MbtKJXqyVgIgXAlJW%2BQ4%2F75yA1PoXsx6YOXOxSzPHfenHZ3cWVNqVvEqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuT8ItFhFJsR1QXxCrcA2BohmDrsXOKgBWqPg7YUc5UlOW%2B5bL%2F%2B8XpuaRFZz1F7ven%2BKLyfI%2BwsxFBZELVj3L2q56maofMsK%2B0mhnGOo5jyN7w8pl9eK6tBtriIO9GQ6rN%2BN3bwLBItaYGKzm2MzKwMbpG0u%2FXjxKsN3HMZgvFjhVcYcmF2FvD%2B2c1dS7hB28b1WN%2Fi64ENj2TUJNwcWMALNhmkr6ocYp3ce0fFty2vJJqiH6eU3fS6OZheCubaActYth45ATpUJD7noCd7l9yob2DWXHbLPZY5gXBfScUpzZZTMmw9s546jx1pAbh1%2F%2FCffP35LAXnG0vds9ULbKSEGYKe6tYD5tuCAtmrmsd7q6vPkY3xHN%2BN2zmmqXb0aYD6SCY0tDBeqVNLw64dxFxWU28GNmQEFuNqjdA9h%2FCF8jQP3qiDrL0q9eYWJZCuC6XxJAQOquwpWBd7CIqU%2BxJMZ8uqilI9IfyNkysSbJJmTS5H0paN2E7k7DQUAwaOaqG%2BD%2FQIaVx1QK7VfJX7esmYsqGbrd4IRWyYIQQbACC1OQEVmYa9TDgrCDS3KWDD2z4B%2B%2FC3uIkjOWd0T%2FFvYLchuUvYt9k6jpd9db9XgdhLoP2pUGClPAw3kcS1k3nE%2BY3YdyW8KmP%2BDD9MIvv2MkGOqUBsPSEKbDFAYTHCe0eTgmnyWltfdkqB8HC%2BMv7rPF0jxVW9qK2t7QQLdYfLZuqyr6%2FGzvdpzBojiHRgaraBQZ1jVbU9MZUiYOjFJTYNCFUjQM1v5Un0hLdN17tND332HLiHiHyVSlfETBv5h7PYchQ5LxtWFhK09hZSYPqsVNNzpsJJimECqy5M%2B%2FYyz%2BXAgc%2F2N%2BWuCgCTkATMNgAOri9zzEtIOzp&X-Amz-Signature=13499888188daaa39b0e08bf949027d34472885d39277ff4acb8032a6965161c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
