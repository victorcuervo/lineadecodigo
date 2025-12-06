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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T7YCCH2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T134325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXaYo%2BXVNMaReH7ivkHsaFSsJwLlgd9X17uOy7Rb5l%2FgIgWpD5wdrvV1U3XDRbU%2FNMRZi78S%2BaNkLS1UauWnGKSlEq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDG9ooa9pFKjZrhdIEircAxJ5F6Bv7B1Ejg9pCPGDlpOFCpEBCuM8l712GTPEmzlXtsS%2BCcBKI6R1Re1otIhxMWK82Iel8d%2FjYtfHPsnpKssDgBy%2FrCZBYq%2Fkf56P%2BlSt%2BjE4EK1kNSrhADZAEjbinh6BPhjbWlBFtCft7Y527mv5fKRa%2BGrpG%2FGAqvv5S0qCtESeZUBq3yn%2F%2BIn7zw%2B5xyyA2J46U4zLWbSIvFN93cvFqyStg29Aj38ocAcnWO9o1ck%2BXY24ZzfsbQ%2Fpkc5102KVviYi6dqNSr5ohxzi6k%2Bmo7KBik3c8%2FIBOTVZQB25GdCT2yYzeBdukwWX%2F86DoADgT42MHkgfwxvG7scHzXptINQA9jyoTKpWGspaiKg3A4M%2FNfqhnne8EV75eshy07g%2BSQXPvCLlE%2Fhqx9EwKg1sAThEIOtr46op4Ke52%2FXo7fAlnkzIQrU0%2BDuHbNkk1ZA4R27rcg6wcQtydXW%2Fcr3n%2FHfxNew%2Bqw%2Fe8T33XECIXGWnXFJOB4taW2%2BxverGHFEA24Aw7WGrpPwJrYv0vrcFIwbMez0ejfFdqUurI2wUK6kJ0r2eomgrvYbKGnPm%2F7tm%2BNzZnHsFYaDMLqt8QkffrqnOhIVzi8iRHCIqAcXn00%2BgCQLhDHDe4xH%2BMM2m0MkGOqUBQZWGv2nxAoUw3wEFmzax5uPOI6TrGteQrRkO1teGvStHzWQ927O1HQVgc3erDb6L2OWTEZdC0IUYezd30UVQbEI7akMjzBwzAJ63ECNzxmoH437tcD7czL7YolzDYgoJWpXnTxPDjSoSfgs5iAjr5juLfx4aTt3lXxA2juyBneiKfcLndgimZWfK1dNkqKmqW1DYR7h5NX6xK7gbkZauA83Jx2G%2F&X-Amz-Signature=2271485ed4322413282e0682b61211ffce94b1c4464e7fe0df5c1e07a8ad7c47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T7YCCH2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T134325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXaYo%2BXVNMaReH7ivkHsaFSsJwLlgd9X17uOy7Rb5l%2FgIgWpD5wdrvV1U3XDRbU%2FNMRZi78S%2BaNkLS1UauWnGKSlEq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDG9ooa9pFKjZrhdIEircAxJ5F6Bv7B1Ejg9pCPGDlpOFCpEBCuM8l712GTPEmzlXtsS%2BCcBKI6R1Re1otIhxMWK82Iel8d%2FjYtfHPsnpKssDgBy%2FrCZBYq%2Fkf56P%2BlSt%2BjE4EK1kNSrhADZAEjbinh6BPhjbWlBFtCft7Y527mv5fKRa%2BGrpG%2FGAqvv5S0qCtESeZUBq3yn%2F%2BIn7zw%2B5xyyA2J46U4zLWbSIvFN93cvFqyStg29Aj38ocAcnWO9o1ck%2BXY24ZzfsbQ%2Fpkc5102KVviYi6dqNSr5ohxzi6k%2Bmo7KBik3c8%2FIBOTVZQB25GdCT2yYzeBdukwWX%2F86DoADgT42MHkgfwxvG7scHzXptINQA9jyoTKpWGspaiKg3A4M%2FNfqhnne8EV75eshy07g%2BSQXPvCLlE%2Fhqx9EwKg1sAThEIOtr46op4Ke52%2FXo7fAlnkzIQrU0%2BDuHbNkk1ZA4R27rcg6wcQtydXW%2Fcr3n%2FHfxNew%2Bqw%2Fe8T33XECIXGWnXFJOB4taW2%2BxverGHFEA24Aw7WGrpPwJrYv0vrcFIwbMez0ejfFdqUurI2wUK6kJ0r2eomgrvYbKGnPm%2F7tm%2BNzZnHsFYaDMLqt8QkffrqnOhIVzi8iRHCIqAcXn00%2BgCQLhDHDe4xH%2BMM2m0MkGOqUBQZWGv2nxAoUw3wEFmzax5uPOI6TrGteQrRkO1teGvStHzWQ927O1HQVgc3erDb6L2OWTEZdC0IUYezd30UVQbEI7akMjzBwzAJ63ECNzxmoH437tcD7czL7YolzDYgoJWpXnTxPDjSoSfgs5iAjr5juLfx4aTt3lXxA2juyBneiKfcLndgimZWfK1dNkqKmqW1DYR7h5NX6xK7gbkZauA83Jx2G%2F&X-Amz-Signature=f3a516674a884139958575a5c2200a18c7f3bfce5625703552a4f6579b78a1b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
