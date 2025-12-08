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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXBT75W3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T171402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDs3fLMblbjJtz67glj7EIXs%2BZMyn0FHpN9pi3l4LxwZAIgSp3sD5wRHVl75K8OsdZ6pJxMolNZJD7GaurPCftuXEAqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHehxOPCs6rWbdmkCrcA2mb65C9g87u17zzYwvcNnojmdyL5tHrxEK1um%2B2Ha2WTxTqT7RVWOl%2FOeyLjcv1eoSgV7fji029ftzX7SDx55v6b8rbwv4cDjcWLtwtoF1J0qSd%2BQQXQQw15yLfKUbApjDE6Z%2BbNqxBaJnFUIrfVnz76nCJSYIycw%2BExryx5lgJu3%2BRbUefw7UctKPdPBMsPibTcRDVmm7bn0dgjS6Qo%2BSezb1g1ECZD1zHWqzoTCmUnwY5Xbe2C4ttUCvwv2GiNJyIdW7%2BlQKlC7aphZiv3reRcdRi531A1NXlVghdlfKY7P4p6DlBuBFLOhuoXQ2N9QXgGoJvSlw5fCKawlysRpTW%2Bdj8wK5JBYEIm4Co5Ck9DsIrg4qLiIpp%2BaYG%2F43LQpqTqA8LDZ7DYn8Q70uEQg6oaSPQcE2E%2BwMFZG1ftOoFlTmSzYkc18klxnq%2Fa7adCIozI35su7aGf3D%2Fm2PyJmJ7w8pAIDPvI2s%2FhfEK3TZzWzsP0VFK1AFPO18UhwwsEHvAVHl6D%2Bn9TMSD9JtivbJ3syhaCifUSVabeH%2Bl3IP5szX3VWnzeC2TU2oHkOOg7F2ERIOZ8KTgcV0327mrVBPF6upcZAWQ%2BKwhO22sO25YwlFXaOHr9JnDjUbaMMiG3MkGOqUBHyY2lhRION%2BOdgpf50bkZs3i2YIj8vF1KsKPLnVHPjlNqA3tkqSK%2FRF5nF4eu373MrJLgdtHhSr0w99HmSfCXt9XxvkK8BYB0hbKbMZEsKd0MNEVGvqhVn7gGmDGZ%2BlI5XjDgb%2BAh765Xk0Hb4ap5mdUaFSX11EcEthJJohyMtejz7l7DayPAQgT9d4u%2FnblkeY5QsBjCveSe5Jx2We3i%2BIGJsAh&X-Amz-Signature=01d7187798146414a88d6121eb05545462640eda5b0d4aa62bd83712e3312c91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXBT75W3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T171402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDs3fLMblbjJtz67glj7EIXs%2BZMyn0FHpN9pi3l4LxwZAIgSp3sD5wRHVl75K8OsdZ6pJxMolNZJD7GaurPCftuXEAqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHehxOPCs6rWbdmkCrcA2mb65C9g87u17zzYwvcNnojmdyL5tHrxEK1um%2B2Ha2WTxTqT7RVWOl%2FOeyLjcv1eoSgV7fji029ftzX7SDx55v6b8rbwv4cDjcWLtwtoF1J0qSd%2BQQXQQw15yLfKUbApjDE6Z%2BbNqxBaJnFUIrfVnz76nCJSYIycw%2BExryx5lgJu3%2BRbUefw7UctKPdPBMsPibTcRDVmm7bn0dgjS6Qo%2BSezb1g1ECZD1zHWqzoTCmUnwY5Xbe2C4ttUCvwv2GiNJyIdW7%2BlQKlC7aphZiv3reRcdRi531A1NXlVghdlfKY7P4p6DlBuBFLOhuoXQ2N9QXgGoJvSlw5fCKawlysRpTW%2Bdj8wK5JBYEIm4Co5Ck9DsIrg4qLiIpp%2BaYG%2F43LQpqTqA8LDZ7DYn8Q70uEQg6oaSPQcE2E%2BwMFZG1ftOoFlTmSzYkc18klxnq%2Fa7adCIozI35su7aGf3D%2Fm2PyJmJ7w8pAIDPvI2s%2FhfEK3TZzWzsP0VFK1AFPO18UhwwsEHvAVHl6D%2Bn9TMSD9JtivbJ3syhaCifUSVabeH%2Bl3IP5szX3VWnzeC2TU2oHkOOg7F2ERIOZ8KTgcV0327mrVBPF6upcZAWQ%2BKwhO22sO25YwlFXaOHr9JnDjUbaMMiG3MkGOqUBHyY2lhRION%2BOdgpf50bkZs3i2YIj8vF1KsKPLnVHPjlNqA3tkqSK%2FRF5nF4eu373MrJLgdtHhSr0w99HmSfCXt9XxvkK8BYB0hbKbMZEsKd0MNEVGvqhVn7gGmDGZ%2BlI5XjDgb%2BAh765Xk0Hb4ap5mdUaFSX11EcEthJJohyMtejz7l7DayPAQgT9d4u%2FnblkeY5QsBjCveSe5Jx2We3i%2BIGJsAh&X-Amz-Signature=f38d44a7ac73cef5c58136e1311170c73b50509d117fc3a826eda18db7fc4f2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
