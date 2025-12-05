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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3EU2L7V%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T042741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHrZ0TMwTbiMboZ3St6d8eRtIegIPek0R6qrixAzlRR%2BAiEApsCKvnyh9QL6QJj90VFV%2BqF%2BdkN6c9ndJOY8hCti%2FzUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDECrj0TqBMzi2t%2BZ3CrcAyiq6SncKcd9WT7GqjVpYYwlLHHdlS1nDdsT0mbrPFWZrUsAWoTzD1%2BmDyccgqlGhjohB88tribGWc08U91ghtVYa5716VrJ5NUHW05RoM%2B6zQSoEGHGs1MOLNL2cr0K6AtK7Cx2WcQcOpMc1TE2qiQzKOoIG8LTaYO7PIxCvumnsBWacjFncYc0GnNsmfxyZEncP%2F%2FWoQnJrgZB6BoXMDrCAlbtoKmtWmzczUUGN1ydns9%2BX%2F2LfeJT2%2ByD5u4pl%2FgV3847LRM4vJfVjd%2FxFx9v2a2XquRU3PK0vuBe048So%2FXyh4v2fDHfuCMy9BODumTADCPLJqAAwSOZoaSm0Yowj3D5DWJiXf76YAOBQ95LDmxpqLKyisNulgB5wAPESLG4JeiwD2gfrHxJmnCwT8ox7fq9Y5wBJL0xv7dPURyaJfqscgwjUPyVZPSMmNxFUZIKWq7Us5QmrxSklk5SSL8awY%2Bgf%2BQUr9T%2FW%2FLXzOm43%2FoUSRIYLiCxo3fdH3I1EEQMGg9kVCifKrIs8sROCtS1%2ByaRb5B%2F5%2FzBV9TdaNNLGZTIkvlDPkO55MCFKev7u%2BLST73oGGstCm1qv%2F4Yv3RcIjN1TIMn6Z7RuEa0jnfyIK0pEuFCTErQIovDMMqyyckGOqUB82G693cLgOsdaWDOh%2FSIVQXjobc20A1xDKWvB2j%2BqH%2FrqSSrhyr6kK8NThQjbAAN%2F%2FGX1waKg9jOWOenprNQtgwPIcYM4aDBlnQKIgLPgC%2B7tcUXyR8DOovb8dF4CUX6SDcLhR%2FXJB6kJEOi9R3OG5Wtf0KjxtEjKxm%2BliC3lXxdQwJvnMfqezS6rd5XqsUun8ZH1Yu8hUQzG31SKkhIvm%2B1lNkF&X-Amz-Signature=9854edb00cf93ba74d5edc5b0d8328db1d7109c8ac478e3f03ee6795de7e740c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3EU2L7V%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T042741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHrZ0TMwTbiMboZ3St6d8eRtIegIPek0R6qrixAzlRR%2BAiEApsCKvnyh9QL6QJj90VFV%2BqF%2BdkN6c9ndJOY8hCti%2FzUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDECrj0TqBMzi2t%2BZ3CrcAyiq6SncKcd9WT7GqjVpYYwlLHHdlS1nDdsT0mbrPFWZrUsAWoTzD1%2BmDyccgqlGhjohB88tribGWc08U91ghtVYa5716VrJ5NUHW05RoM%2B6zQSoEGHGs1MOLNL2cr0K6AtK7Cx2WcQcOpMc1TE2qiQzKOoIG8LTaYO7PIxCvumnsBWacjFncYc0GnNsmfxyZEncP%2F%2FWoQnJrgZB6BoXMDrCAlbtoKmtWmzczUUGN1ydns9%2BX%2F2LfeJT2%2ByD5u4pl%2FgV3847LRM4vJfVjd%2FxFx9v2a2XquRU3PK0vuBe048So%2FXyh4v2fDHfuCMy9BODumTADCPLJqAAwSOZoaSm0Yowj3D5DWJiXf76YAOBQ95LDmxpqLKyisNulgB5wAPESLG4JeiwD2gfrHxJmnCwT8ox7fq9Y5wBJL0xv7dPURyaJfqscgwjUPyVZPSMmNxFUZIKWq7Us5QmrxSklk5SSL8awY%2Bgf%2BQUr9T%2FW%2FLXzOm43%2FoUSRIYLiCxo3fdH3I1EEQMGg9kVCifKrIs8sROCtS1%2ByaRb5B%2F5%2FzBV9TdaNNLGZTIkvlDPkO55MCFKev7u%2BLST73oGGstCm1qv%2F4Yv3RcIjN1TIMn6Z7RuEa0jnfyIK0pEuFCTErQIovDMMqyyckGOqUB82G693cLgOsdaWDOh%2FSIVQXjobc20A1xDKWvB2j%2BqH%2FrqSSrhyr6kK8NThQjbAAN%2F%2FGX1waKg9jOWOenprNQtgwPIcYM4aDBlnQKIgLPgC%2B7tcUXyR8DOovb8dF4CUX6SDcLhR%2FXJB6kJEOi9R3OG5Wtf0KjxtEjKxm%2BliC3lXxdQwJvnMfqezS6rd5XqsUun8ZH1Yu8hUQzG31SKkhIvm%2B1lNkF&X-Amz-Signature=a1dfa7fc0fd65862bb1c80dee5310ea9baad2ac92e0a68bb390b0c19c81728d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
