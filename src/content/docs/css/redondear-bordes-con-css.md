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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP5YHVRT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T200530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2%2FeULESb2Qx%2BZt2lCJsFGSrkO3Cr9vs3c6t0lgHkERAiEAu5sujGhANZ4%2FwAPS19bHAZW51RKdEzBEshJO023nIjAq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDClyxnGiKj%2FdRKwC2CrcA898uoUiyrt4DosBlYuB3ef13GKAK7HVfyT4v5VmI128Fi%2FV6UTYCqRZbIRvUHYZ7kzyZRa%2BozSzj9G03kHfDaFdluArYeykPB3O3k37Z9h8Yu9CidXQeAQ67eWXQF23D%2FufWJ2c9uVcbjtGtl1WJ%2Fr7RyToIWBCCASk%2BAunEkKSg9Q73lcKJ6nADz4vEAjbTCRZR3qJSG5vRNr9zgx6eClDeFbNnJaURUgZU%2BTj%2BxjbSLbzAP%2BIBrxTHX4rMafN279FrQVGvVYCf%2FUCyppk2Ay%2BXe9GRZsHSd9jOB4pTBh8kONaxql1jyVpZX5xWqDmB5KMJAtfqmpFm2Zd2lJxuEZwD%2BDLNUQNgzPANrTzWTawpjU17ci%2BfbSvuXRZflKeJS%2BxZgsks2TSGCccrKSxrHS8QRVJr%2BCy0M%2BIuw6D8k%2B79lxohytVrmOktqG9VanJkQogAwDz%2Fo44A35wyn3v55XD5871BssUSRLP2SSZV7tExBFZetbvASBBZ1QsRQV8taQjz5hLH%2Bm9zcz1olHCMxsuryrKzs4IuMhVByK9gVb%2FzKNb1IAOoKCELnUejhmTFBZmFauoog10hEcZRAl%2FI9HVYMDw00HP5rag32F0E4lZ%2BqIQXGGV%2FLJRnmWPMJP2y8kGOqUBUDFZHUx%2Fhj8ovQeuYPdkcLuarWE4I9g6crFgTTL96QwWyd4mzKfNIuqwZR5uxQobDV2xituWlZX3yvu0To1OHoNBMWm9eOy4TRLbrkTa02M8V6KIT9gSaugmffryMw4emtCSBvwuGyROaRqs1cNSNctY%2BZP5wVfj7kNjH107b5hE98NgsoS8xd8BazjX7qWu6%2FRzDwucE%2FgBehE1by6354PVMgpk&X-Amz-Signature=bfd7264f191a773452bcc03d1f9b53dbcab8df817f2535ba133fa2297ff87047&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP5YHVRT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T200530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2%2FeULESb2Qx%2BZt2lCJsFGSrkO3Cr9vs3c6t0lgHkERAiEAu5sujGhANZ4%2FwAPS19bHAZW51RKdEzBEshJO023nIjAq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDClyxnGiKj%2FdRKwC2CrcA898uoUiyrt4DosBlYuB3ef13GKAK7HVfyT4v5VmI128Fi%2FV6UTYCqRZbIRvUHYZ7kzyZRa%2BozSzj9G03kHfDaFdluArYeykPB3O3k37Z9h8Yu9CidXQeAQ67eWXQF23D%2FufWJ2c9uVcbjtGtl1WJ%2Fr7RyToIWBCCASk%2BAunEkKSg9Q73lcKJ6nADz4vEAjbTCRZR3qJSG5vRNr9zgx6eClDeFbNnJaURUgZU%2BTj%2BxjbSLbzAP%2BIBrxTHX4rMafN279FrQVGvVYCf%2FUCyppk2Ay%2BXe9GRZsHSd9jOB4pTBh8kONaxql1jyVpZX5xWqDmB5KMJAtfqmpFm2Zd2lJxuEZwD%2BDLNUQNgzPANrTzWTawpjU17ci%2BfbSvuXRZflKeJS%2BxZgsks2TSGCccrKSxrHS8QRVJr%2BCy0M%2BIuw6D8k%2B79lxohytVrmOktqG9VanJkQogAwDz%2Fo44A35wyn3v55XD5871BssUSRLP2SSZV7tExBFZetbvASBBZ1QsRQV8taQjz5hLH%2Bm9zcz1olHCMxsuryrKzs4IuMhVByK9gVb%2FzKNb1IAOoKCELnUejhmTFBZmFauoog10hEcZRAl%2FI9HVYMDw00HP5rag32F0E4lZ%2BqIQXGGV%2FLJRnmWPMJP2y8kGOqUBUDFZHUx%2Fhj8ovQeuYPdkcLuarWE4I9g6crFgTTL96QwWyd4mzKfNIuqwZR5uxQobDV2xituWlZX3yvu0To1OHoNBMWm9eOy4TRLbrkTa02M8V6KIT9gSaugmffryMw4emtCSBvwuGyROaRqs1cNSNctY%2BZP5wVfj7kNjH107b5hE98NgsoS8xd8BazjX7qWu6%2FRzDwucE%2FgBehE1by6354PVMgpk&X-Amz-Signature=91e051d4e09c620c7425cf9f6ecc6dd0d5c01bc8a158dafa42925c2a32e25e3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
