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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSAIQR7J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX6p9yWcTXSi23fkLE98U%2BP2dHdduA%2BiaPEDy41OgP2AIgM4zdpzgaCRlyFP1DM5JeWnxVQSJcRNaNl1xK%2FIVJXYcq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDC4Q1NuM0aToQzlTKyrcA1T5T9D0ebjgyJuY3tBva8HGRkxqT5GnqzD3iZFWY88vrLkubWBTl2QEDRI3SWgFzLp4iepIwQ8ORfCmeVsPMGPHE2hQ0PpIjEz0gkuyHROuXJ2Qj%2BEUK3N7bqyWFk4r7ja4VgUhqYlAOZUUqk3pEipk1Bi9fyTtob60sGaj6bPUO903Ay0BUqH%2BU4ymIpJJG%2Bkp0LFpn1HFZGu2HgbBunyZ7O%2F4kRI4IVFz2fmoy0%2FdDzMirGSumDlPo8COBUMWMLVV0USMEnFapuiophXe1%2Bs6Oyyx3q%2FlkLrKiBKf6t0dbEF5Wol2l%2Bsi2cTBHfJLyUXceaX0c2LgQQG9fGRoTdPr1knCBtP45geGpOsilBz4kUbLdNAi4AwpV2PdHKC3M9F2KAgavd6CPSRmPi2uN6YwYmvjtrtCZ7dk84UXibF9j6%2BbpcLvr%2BX9iEwiN4Qz8INfkJXVwyHYDnn3k1EQqhKN0LIdJj5GaTzS%2F96sGYDW1KrR7LbBIgwRpdmy2rTk8ADX%2FmO2JfmPsDKIxz9dUIQkE5f%2B7KT6fdWGNc1J9b6hn83JI1mIWtEpDam5s9kkyGILfYQkZeUQGwzAeGNU8qkHsK1BuFQA3xB3%2FMKxdPcKmfL9wLd6f8adcPcvMJiqisoGOqUBJnyY3hiOXjoX4NXmcIviviKNrGNXBO6GMYGH0xlPIz30A%2FZqFdnXgzgVMOQ50oPeaX0ijgyi5RqVSFR4gzLsJ0raJfvPQxb1LCSlUF4JoMtUMynIAu25kWTrqF%2B2xl24Iu5jKwqbSariy0We32w%2B7GHvGR9K0r1PzR4bMbv%2BGrbabVR0hKA51%2BQMpOyWYlY%2FMuIbvROyNlfeyRfP72vILpxeVaWx&X-Amz-Signature=feeea9a914a468705703cb97e0d573f356687bf85f399e1d7d6299e72a22e472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSAIQR7J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX6p9yWcTXSi23fkLE98U%2BP2dHdduA%2BiaPEDy41OgP2AIgM4zdpzgaCRlyFP1DM5JeWnxVQSJcRNaNl1xK%2FIVJXYcq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDC4Q1NuM0aToQzlTKyrcA1T5T9D0ebjgyJuY3tBva8HGRkxqT5GnqzD3iZFWY88vrLkubWBTl2QEDRI3SWgFzLp4iepIwQ8ORfCmeVsPMGPHE2hQ0PpIjEz0gkuyHROuXJ2Qj%2BEUK3N7bqyWFk4r7ja4VgUhqYlAOZUUqk3pEipk1Bi9fyTtob60sGaj6bPUO903Ay0BUqH%2BU4ymIpJJG%2Bkp0LFpn1HFZGu2HgbBunyZ7O%2F4kRI4IVFz2fmoy0%2FdDzMirGSumDlPo8COBUMWMLVV0USMEnFapuiophXe1%2Bs6Oyyx3q%2FlkLrKiBKf6t0dbEF5Wol2l%2Bsi2cTBHfJLyUXceaX0c2LgQQG9fGRoTdPr1knCBtP45geGpOsilBz4kUbLdNAi4AwpV2PdHKC3M9F2KAgavd6CPSRmPi2uN6YwYmvjtrtCZ7dk84UXibF9j6%2BbpcLvr%2BX9iEwiN4Qz8INfkJXVwyHYDnn3k1EQqhKN0LIdJj5GaTzS%2F96sGYDW1KrR7LbBIgwRpdmy2rTk8ADX%2FmO2JfmPsDKIxz9dUIQkE5f%2B7KT6fdWGNc1J9b6hn83JI1mIWtEpDam5s9kkyGILfYQkZeUQGwzAeGNU8qkHsK1BuFQA3xB3%2FMKxdPcKmfL9wLd6f8adcPcvMJiqisoGOqUBJnyY3hiOXjoX4NXmcIviviKNrGNXBO6GMYGH0xlPIz30A%2FZqFdnXgzgVMOQ50oPeaX0ijgyi5RqVSFR4gzLsJ0raJfvPQxb1LCSlUF4JoMtUMynIAu25kWTrqF%2B2xl24Iu5jKwqbSariy0We32w%2B7GHvGR9K0r1PzR4bMbv%2BGrbabVR0hKA51%2BQMpOyWYlY%2FMuIbvROyNlfeyRfP72vILpxeVaWx&X-Amz-Signature=004225c06fac7432581b4dd6521c7a0a74c6b9cfe4582a3b5be11063b096d980&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
