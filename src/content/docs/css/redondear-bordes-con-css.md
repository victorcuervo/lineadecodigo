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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNPBLVNW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T112645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAi6Grmo64AlHJym4igvj3Ap4P%2F%2FfOquv990yJkG6k1oAiBmtmkTq23fUR%2FlKJ8cGql6PO%2Fqpu4holtUJ0mh%2F1%2BWHir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMhJN48J7mSD%2FJA3HJKtwDgcrjQDzp5wih5nr8fEKEk0uj%2FvXbsxd81pBJtB4lr1taKbJwBuw2vVrF4VcB00GnwaQ8s2a7MTkbk5%2BBAkkDW6gsHBUXmvRqX3VTvmz4NWmFof7LU%2FkksChrP9U%2BLyf%2FrujLZKvTp7j7lE8ELhK92dQXTPRKNiZA54jFwsELHSpdiRYc52x3jQwwA7sy%2F%2FHPS4WirU4xHznVa41O67nzcP3rpkarbeEMlw05K%2FtMSXIglaXGFVg%2BxjYOEHGOO1CnBsvbIozaFnvGf9uu%2BCeaZCloF3EenKQmaVYKGAphHMO1GfC5Bo%2F7JCwPWZ9pXPAlqZh832sJXAlDui7ojLzTS6K86y0D1GDpJpS2dSoxMz549Nc7pRQYkdRJm8kG6b6aAt4W1lngrEtK%2F6T7b23y3sLQ%2FTdOjibZKH%2BcxKSgFDkfM0xBgEBcHwMsK7Q2lYUUMoJfafZdLW9SxP6tg%2BlN1UWvcGmXJybOZFAmRm2IZyAg5OkGXVJt6vXjjG5OG7zFluMTycT72BJnb57e%2FHqn35gtzK86cGvUeG4QgRDtzTQE7qiiKFzm9RRRlEl4MITPc1reQ26duMQsUpmAOUOb%2FcPRjTntnCFLeV5usABMCXKfHx2aK%2BuBGpgb5MUws87KyQY6pgH%2F061ZopmzmcGp1O%2BPMpS6OW06EH67d3BX1IlBgYiEvWrVBlEj%2B0u8TEmwF5Z%2Ffw3jxg%2BdHVan2VTcw1Q%2BR49iuYEj3Hx5EfDQJJIjEGvoCF%2BXDpOb3RmzOG3crykmLpH%2FopQW9ZYyMZwYGG0gTnRBsgjYgBISxb%2BdVS47FPH8CA162KfnG9S2CkKonoP8g%2BFk0op%2FgN1zeSPOIkggv9KkS58v3800&X-Amz-Signature=2199b6047bd45f6d82a0ac538d080276bae588ada28c8c3fee3eb0b69205fc15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNPBLVNW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T112645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAi6Grmo64AlHJym4igvj3Ap4P%2F%2FfOquv990yJkG6k1oAiBmtmkTq23fUR%2FlKJ8cGql6PO%2Fqpu4holtUJ0mh%2F1%2BWHir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMhJN48J7mSD%2FJA3HJKtwDgcrjQDzp5wih5nr8fEKEk0uj%2FvXbsxd81pBJtB4lr1taKbJwBuw2vVrF4VcB00GnwaQ8s2a7MTkbk5%2BBAkkDW6gsHBUXmvRqX3VTvmz4NWmFof7LU%2FkksChrP9U%2BLyf%2FrujLZKvTp7j7lE8ELhK92dQXTPRKNiZA54jFwsELHSpdiRYc52x3jQwwA7sy%2F%2FHPS4WirU4xHznVa41O67nzcP3rpkarbeEMlw05K%2FtMSXIglaXGFVg%2BxjYOEHGOO1CnBsvbIozaFnvGf9uu%2BCeaZCloF3EenKQmaVYKGAphHMO1GfC5Bo%2F7JCwPWZ9pXPAlqZh832sJXAlDui7ojLzTS6K86y0D1GDpJpS2dSoxMz549Nc7pRQYkdRJm8kG6b6aAt4W1lngrEtK%2F6T7b23y3sLQ%2FTdOjibZKH%2BcxKSgFDkfM0xBgEBcHwMsK7Q2lYUUMoJfafZdLW9SxP6tg%2BlN1UWvcGmXJybOZFAmRm2IZyAg5OkGXVJt6vXjjG5OG7zFluMTycT72BJnb57e%2FHqn35gtzK86cGvUeG4QgRDtzTQE7qiiKFzm9RRRlEl4MITPc1reQ26duMQsUpmAOUOb%2FcPRjTntnCFLeV5usABMCXKfHx2aK%2BuBGpgb5MUws87KyQY6pgH%2F061ZopmzmcGp1O%2BPMpS6OW06EH67d3BX1IlBgYiEvWrVBlEj%2B0u8TEmwF5Z%2Ffw3jxg%2BdHVan2VTcw1Q%2BR49iuYEj3Hx5EfDQJJIjEGvoCF%2BXDpOb3RmzOG3crykmLpH%2FopQW9ZYyMZwYGG0gTnRBsgjYgBISxb%2BdVS47FPH8CA162KfnG9S2CkKonoP8g%2BFk0op%2FgN1zeSPOIkggv9KkS58v3800&X-Amz-Signature=a7561b8866bae06a237ede3713aa0046405acab5c88a8428a8a5a3bb879b4cfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
