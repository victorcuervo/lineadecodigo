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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ABBLZCD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T000451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1tFaDAcDBHVKzRIqXOgnVQFue46Bp9vJ%2BKmZoXyw8EQIhAPzCMW2NWpe5Km4JKVA3kTkdFFYwaEluo26STmUfl95gKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBbmnpNTr0lB0Od6Qq3AMlXQKFvkblwnF97MW%2BKaPFPbnF8sbKvqpU2An0qfPWy%2B6CDSQDtm2u%2BtR9ggossK9Xzun9Zdl1gco8C6CWBnu3T9tO9xOMLX6a0hEK0WBEtr7Z%2BsRXJjIuMBu3zE1cBXEdDSWKoBIAdZftW4OnuUU9XVwtV9pP1Qczzag1dcXplhNH0lOXNQGJC4yHUW%2Btj5O%2FHikWoIkaeB5D%2BtoAuAMXLmPHq5lr7qPEb3IxiLiOfMRcvObv9W59111YLzKUJb5KK2ezTJULNjAh1fbO9fs8xi6VlLBQm%2B0Iz1LxSjENsOybnDpoxhBiw0yiSDxGtuXPSLkcNtsOAO7WK9RVi4wZT3f5NVJQZcXK3566RsQs51%2F3%2FKPkShtsCajddkMM2yTWYCAyZz3OXVvysDc2MxlMwtojb3E%2FoD28%2FonKqEhoYgGmHLLrAj8UykGRBkCdYyuYeSp0mDW%2F5CrjhF0ovb44uNwHyeDw13o3Ic14lZUd%2FR9l1siqYbQo4PgedA9k1Bg9bTRsfJrECavmah8xssdwuDWuhqBDvvsLIfLPMIQ0VoWsWnZVfvvpHgZYYvkRwmAqdMz8Z9DdPygSeXc4keZp%2BSlIdCNkjgJgxIcBzVWj9hM2xgP0XsVym9WZkDDd%2FdLJBjqkAdogJdImIJDuWM0%2FNz84j28Wp5NFPckATTCAByR0JczCROEpfgEwE1ZrssXAEWovS67t5MFM47aifFRM5mYWi8VvN%2F0mUTtwSVXcIglkYcmK28WyZZL635TtbXL1JRQkqOvtxzWnlEzWdu%2B4GcGpKpJb55JwHTjewu3hAEIfEXvpl%2BvwH5wFnVBa7GAlixe29CImSY%2FeIc6lwoyHI2hcYEs6IkLq&X-Amz-Signature=71599ef019de87991c42daa8cac04a1b50e00639f108f56b3f827397a43757b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ABBLZCD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T000451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1tFaDAcDBHVKzRIqXOgnVQFue46Bp9vJ%2BKmZoXyw8EQIhAPzCMW2NWpe5Km4JKVA3kTkdFFYwaEluo26STmUfl95gKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBbmnpNTr0lB0Od6Qq3AMlXQKFvkblwnF97MW%2BKaPFPbnF8sbKvqpU2An0qfPWy%2B6CDSQDtm2u%2BtR9ggossK9Xzun9Zdl1gco8C6CWBnu3T9tO9xOMLX6a0hEK0WBEtr7Z%2BsRXJjIuMBu3zE1cBXEdDSWKoBIAdZftW4OnuUU9XVwtV9pP1Qczzag1dcXplhNH0lOXNQGJC4yHUW%2Btj5O%2FHikWoIkaeB5D%2BtoAuAMXLmPHq5lr7qPEb3IxiLiOfMRcvObv9W59111YLzKUJb5KK2ezTJULNjAh1fbO9fs8xi6VlLBQm%2B0Iz1LxSjENsOybnDpoxhBiw0yiSDxGtuXPSLkcNtsOAO7WK9RVi4wZT3f5NVJQZcXK3566RsQs51%2F3%2FKPkShtsCajddkMM2yTWYCAyZz3OXVvysDc2MxlMwtojb3E%2FoD28%2FonKqEhoYgGmHLLrAj8UykGRBkCdYyuYeSp0mDW%2F5CrjhF0ovb44uNwHyeDw13o3Ic14lZUd%2FR9l1siqYbQo4PgedA9k1Bg9bTRsfJrECavmah8xssdwuDWuhqBDvvsLIfLPMIQ0VoWsWnZVfvvpHgZYYvkRwmAqdMz8Z9DdPygSeXc4keZp%2BSlIdCNkjgJgxIcBzVWj9hM2xgP0XsVym9WZkDDd%2FdLJBjqkAdogJdImIJDuWM0%2FNz84j28Wp5NFPckATTCAByR0JczCROEpfgEwE1ZrssXAEWovS67t5MFM47aifFRM5mYWi8VvN%2F0mUTtwSVXcIglkYcmK28WyZZL635TtbXL1JRQkqOvtxzWnlEzWdu%2B4GcGpKpJb55JwHTjewu3hAEIfEXvpl%2BvwH5wFnVBa7GAlixe29CImSY%2FeIc6lwoyHI2hcYEs6IkLq&X-Amz-Signature=bbaab4385163caf8d4cb6fc41eb45047c6f98fdc7756cbfacdfbf7396ec9e5e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
