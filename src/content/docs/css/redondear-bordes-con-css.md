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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6P52Y2W%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T183203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID65XRdmr4wXawAgtxGYE2qR4XAvcGPhS12WnQ%2B5LTsWAiA6z5NiNegmDdflP8%2FKwsvuNqfH3IdzFkkb64%2BluBrnOSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMPgBK6niAVXvZc2YTKtwD9i2OQgjV4Bb2bWsR%2B%2Br3%2B7EBnhOO%2F0xoAii0D3jpXAw4uQtTlo8m4IlLV%2FfVPXxqpaO2AN85JiBWs3z2xTWP0qQ8xVv0gH5NicUqWgoiL%2Fe1%2BZXM5rw3ziEqGpAZvw9D3a1fyijZhdfgtLKpJCTCRi5NgBo4EfGX4uNg1oBckK0F355%2B1EvWP24%2Boa0deXogh2NTuE6tudKQ1ZX0FDvCBK%2Fjr5UuD1WvCQeAp%2FRiUsGuvQuF4CGwIBWu7zkj0ulXSMBepeCQgBukoF4N3k%2BWpYLhMYNPNiZLoP6xxak6UBSTntffk5JU4aJnjtOJ%2ByracNSResHkP5T7z%2FaxBEzHQhxlHYLfOTx0d8BSADLtlbtiEa3U%2F86uAYO1oyUTfse1GDAj2OH%2FOXWTr8pY55z1Oka6yJCOnmltp%2BOhRj4D44j6g4PvL4FU873JccfQf5Nxcey3LmGs6%2FVkkbbcAkB5S6H28PecLM2eR1AbiSjtNTm9xZqkVBsE4TaVRiMZ7BtJS8D%2FZaBkpr%2Fvi%2BfuEXsJYWJV0ITNC01rayvsodbOiArDF%2F0lE1x4dBtuq93z0zupV2wYBWI%2BKJx4ufOGPeuYqzWnq4yUnPXYbE9hlNAfHB4wfYxWvkHMoWZ2cvswj%2B%2FLyQY6pgEu9V3JM2%2FNQzarK6n6NXhWMWmDR14v%2BR64p57B%2BmAkyfd14Yrc%2FSOTOY%2F5skAzExT8r%2B2StXXlUeIzg8sqRKPK2%2BGamwcURB%2B66rMH%2BmkLCuGeTzWhk2VmJIkJc2yhXDYX4tmi30Ny8opu6c0SthMsfWnJ2OFZjsnpjLhtRPn5psInZ41mgAkMbVcXMfq4V9SQjNjqEK4tQQCDxuI23QDRiEH8xF54&X-Amz-Signature=4a14fd7bb55e9b9b3a6fb5eca6af3a3b4191b6478039d381c16df7ff1d5218f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6P52Y2W%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T183203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID65XRdmr4wXawAgtxGYE2qR4XAvcGPhS12WnQ%2B5LTsWAiA6z5NiNegmDdflP8%2FKwsvuNqfH3IdzFkkb64%2BluBrnOSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMPgBK6niAVXvZc2YTKtwD9i2OQgjV4Bb2bWsR%2B%2Br3%2B7EBnhOO%2F0xoAii0D3jpXAw4uQtTlo8m4IlLV%2FfVPXxqpaO2AN85JiBWs3z2xTWP0qQ8xVv0gH5NicUqWgoiL%2Fe1%2BZXM5rw3ziEqGpAZvw9D3a1fyijZhdfgtLKpJCTCRi5NgBo4EfGX4uNg1oBckK0F355%2B1EvWP24%2Boa0deXogh2NTuE6tudKQ1ZX0FDvCBK%2Fjr5UuD1WvCQeAp%2FRiUsGuvQuF4CGwIBWu7zkj0ulXSMBepeCQgBukoF4N3k%2BWpYLhMYNPNiZLoP6xxak6UBSTntffk5JU4aJnjtOJ%2ByracNSResHkP5T7z%2FaxBEzHQhxlHYLfOTx0d8BSADLtlbtiEa3U%2F86uAYO1oyUTfse1GDAj2OH%2FOXWTr8pY55z1Oka6yJCOnmltp%2BOhRj4D44j6g4PvL4FU873JccfQf5Nxcey3LmGs6%2FVkkbbcAkB5S6H28PecLM2eR1AbiSjtNTm9xZqkVBsE4TaVRiMZ7BtJS8D%2FZaBkpr%2Fvi%2BfuEXsJYWJV0ITNC01rayvsodbOiArDF%2F0lE1x4dBtuq93z0zupV2wYBWI%2BKJx4ufOGPeuYqzWnq4yUnPXYbE9hlNAfHB4wfYxWvkHMoWZ2cvswj%2B%2FLyQY6pgEu9V3JM2%2FNQzarK6n6NXhWMWmDR14v%2BR64p57B%2BmAkyfd14Yrc%2FSOTOY%2F5skAzExT8r%2B2StXXlUeIzg8sqRKPK2%2BGamwcURB%2B66rMH%2BmkLCuGeTzWhk2VmJIkJc2yhXDYX4tmi30Ny8opu6c0SthMsfWnJ2OFZjsnpjLhtRPn5psInZ41mgAkMbVcXMfq4V9SQjNjqEK4tQQCDxuI23QDRiEH8xF54&X-Amz-Signature=8b6c104cb3d0bc6a22a0c59494add5e0688cf9ea48d7c88caebc57b93380a42e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
