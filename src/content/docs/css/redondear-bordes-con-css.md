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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCJJAHO2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDraNF4qUPyVos1EeCqFJxj4QsnDfJUZsx8HlRMXaV6hwIhAJJo4tVB%2F0Ebt2aRXN4e0AdT7ERFlSZS49VRaqmAlNyWKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1Y9QDFJ3xSXVVBooq3ANXT5wr%2FKPAaRNLb3bDHK1e1Fqkrf%2B%2B37I%2FrssyhJtDyYlAYrN5mP8a6uqzRPevh%2FzZmA7KApm9OP9HR%2BNEG%2FUELNwCrvubMPKMLAt%2Ftd2mk3SlRnj2rA7OuG3%2BdDI0JRn8UF%2Fb0Qe%2FpH2SHyfvH7hArzkZfPLuOPUInFwnjwVXC1o3VWnAPO3bPYurFeaDp1U9o%2BptWvL4oi0s9GlIWrpXDKqqR%2FhYMYOo%2FAEwOFc3NpsPseZ9PZk5zDeYtS1kfUGkfGL9ByJSXiu9RSYj8520I7xuChldvvmvwrxpNYfJL5l9Q2SlW9mzftweZO8cnuPdJ9so1ZNt8KUMDbwVOtSxmrXhIitI2Sa796HXYZN2NJlxDur3S5lE4CvwBy1j%2Bl589gwso8%2Bx7uzAoZM%2Bt6LWOUQDYcF0Ma3axA8nupFzKTLDVpep2FQwQKHkx0VTnATb%2BnTJxbNtI43gQX%2BLo3co%2Biq9s5IXHN9UYEtGaMmotcR9s6xsTv8cdsAwX%2ByeiaKReYOL22XwSKA%2FPnyccxCgSIAQs6xAJIJpW9n5Fy6zx8TfCFKaSr9%2B8tq%2FIX%2F3O%2F4Jb5%2B8Gxq1P%2FIvXTOj0iz9Aolj73yhGscsrLWXqL7pbO1tjCkEfDdnHmFU3DCv0NnJBjqkAfyBlnuGugfiau7uxq9LtNVfdjPchpVaYOUOHO507NeNrDaUKmj4Z3WnvmUPCOu2qRPudFR1Y9YrwdvNhnXE8%2BdV273heXBn1s11D4clA9P5lTEmekCgCHPOiVWYcDEMQhVF5TOis9rez%2FVJ49Iesk4U3hPjgNLTq3fJvyVXXhkmtRX%2BVp%2F5mgXEF1jTx9XKfItRNst1455Go9j%2BkA8Dj7wzI%2BQH&X-Amz-Signature=62903867521dbfe37434c7cc51683a3e0551354d169590a56f6d1bf54950dcd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCJJAHO2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDraNF4qUPyVos1EeCqFJxj4QsnDfJUZsx8HlRMXaV6hwIhAJJo4tVB%2F0Ebt2aRXN4e0AdT7ERFlSZS49VRaqmAlNyWKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1Y9QDFJ3xSXVVBooq3ANXT5wr%2FKPAaRNLb3bDHK1e1Fqkrf%2B%2B37I%2FrssyhJtDyYlAYrN5mP8a6uqzRPevh%2FzZmA7KApm9OP9HR%2BNEG%2FUELNwCrvubMPKMLAt%2Ftd2mk3SlRnj2rA7OuG3%2BdDI0JRn8UF%2Fb0Qe%2FpH2SHyfvH7hArzkZfPLuOPUInFwnjwVXC1o3VWnAPO3bPYurFeaDp1U9o%2BptWvL4oi0s9GlIWrpXDKqqR%2FhYMYOo%2FAEwOFc3NpsPseZ9PZk5zDeYtS1kfUGkfGL9ByJSXiu9RSYj8520I7xuChldvvmvwrxpNYfJL5l9Q2SlW9mzftweZO8cnuPdJ9so1ZNt8KUMDbwVOtSxmrXhIitI2Sa796HXYZN2NJlxDur3S5lE4CvwBy1j%2Bl589gwso8%2Bx7uzAoZM%2Bt6LWOUQDYcF0Ma3axA8nupFzKTLDVpep2FQwQKHkx0VTnATb%2BnTJxbNtI43gQX%2BLo3co%2Biq9s5IXHN9UYEtGaMmotcR9s6xsTv8cdsAwX%2ByeiaKReYOL22XwSKA%2FPnyccxCgSIAQs6xAJIJpW9n5Fy6zx8TfCFKaSr9%2B8tq%2FIX%2F3O%2F4Jb5%2B8Gxq1P%2FIvXTOj0iz9Aolj73yhGscsrLWXqL7pbO1tjCkEfDdnHmFU3DCv0NnJBjqkAfyBlnuGugfiau7uxq9LtNVfdjPchpVaYOUOHO507NeNrDaUKmj4Z3WnvmUPCOu2qRPudFR1Y9YrwdvNhnXE8%2BdV273heXBn1s11D4clA9P5lTEmekCgCHPOiVWYcDEMQhVF5TOis9rez%2FVJ49Iesk4U3hPjgNLTq3fJvyVXXhkmtRX%2BVp%2F5mgXEF1jTx9XKfItRNst1455Go9j%2BkA8Dj7wzI%2BQH&X-Amz-Signature=73ebfce5e3ca2e02c70547feff1c35cdc43af9331e9d7fa04f091897249dc627&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
