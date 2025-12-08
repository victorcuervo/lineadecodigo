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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAYI5HHE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T232933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7HAxxn62lRJle1aQpvrPD%2FlLTvGR%2FAkBNbTrP6e3tTAiEAjMJqSTOazaaQqjvupTrKS8hIRW9q209z1bulALsrcMAqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALaFLzt5rIq1gj07CrcA4yTyXv7Ivwz6XZJG53PbkfmG6NYvhwsYleyP2C%2BbPmYMlIPm3gA7jzZuE9y%2FfSp2SAA0R15ahRtJw4QRHzTHozdCuTuH8EH7iMlzt3cJhs11kcLrOafQVIMaCuJkItfRyLGSw98qucDrs5ibFbg7yOCL4%2BOQhlHJKj1L3tfZewUHv2tiGj5grOR8LTJkinMQ00%2BpUmjoRfqVzcF3aTgCYzsHI4cztMQlXJbMQoO6j%2FY8oWUp%2FURVR8hrFjGWojYFWDWRfTpn2nbLz56%2FH3lZyTfIgqlxp7AHvRZE1RnoZc5EemNCqwIGI2ug%2BWoCrjEsJp2nexmjD0aNJPrRsIfoKo07P1QtA1IGUiZoHoO2uKvXBJxyFsRp7197kmdgolOT6%2B5ZvPvqmvEl5HYU7g69ktePPjxIOFZ3wWKxEjnwFOZC6Wx5a2qTnsSn1UifzXdWz4rELedsQNKG0WwPivsXhG09oMIsIeQkxk94wdlEBMwibpXaHsy1v37O%2B777VsNq%2BH4S0L2xlEgnGgyPgukRAYFk%2F9Fw9tnw0%2BzCRIJlpSuDkD5ZB0yzFa1UBSyPaV7bIjnUMBrFUBU4lWQTY75hr9TthHQj0LKE60YsrR3nHNOnscQoi60CRj%2BtCWoMKui3ckGOqUBaNf2xc3ph7LBLZYQRg%2F6W1zYdzgXZd%2FMMo22jNwtrRh29CUgHpB7D5JMQj%2BDZrFXKbicbUCToCtY8MGhi871TfzAIXu82Q0t5XV17rGd4OanNIn2mT4yDbktCHkC5k59SFoUAVTX3TSvxS%2Bfu9Aw9sZKPTGpqXnrp0byj7XdmBkuSvYqKlLnBJ2OKeS3nwS2sD6K5NCDwFL9AhVIdaNSJeGQlocR&X-Amz-Signature=ceb90db406993aa2a68854291a07938490c56ea0576230819b14b503719ea8bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAYI5HHE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T232933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7HAxxn62lRJle1aQpvrPD%2FlLTvGR%2FAkBNbTrP6e3tTAiEAjMJqSTOazaaQqjvupTrKS8hIRW9q209z1bulALsrcMAqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALaFLzt5rIq1gj07CrcA4yTyXv7Ivwz6XZJG53PbkfmG6NYvhwsYleyP2C%2BbPmYMlIPm3gA7jzZuE9y%2FfSp2SAA0R15ahRtJw4QRHzTHozdCuTuH8EH7iMlzt3cJhs11kcLrOafQVIMaCuJkItfRyLGSw98qucDrs5ibFbg7yOCL4%2BOQhlHJKj1L3tfZewUHv2tiGj5grOR8LTJkinMQ00%2BpUmjoRfqVzcF3aTgCYzsHI4cztMQlXJbMQoO6j%2FY8oWUp%2FURVR8hrFjGWojYFWDWRfTpn2nbLz56%2FH3lZyTfIgqlxp7AHvRZE1RnoZc5EemNCqwIGI2ug%2BWoCrjEsJp2nexmjD0aNJPrRsIfoKo07P1QtA1IGUiZoHoO2uKvXBJxyFsRp7197kmdgolOT6%2B5ZvPvqmvEl5HYU7g69ktePPjxIOFZ3wWKxEjnwFOZC6Wx5a2qTnsSn1UifzXdWz4rELedsQNKG0WwPivsXhG09oMIsIeQkxk94wdlEBMwibpXaHsy1v37O%2B777VsNq%2BH4S0L2xlEgnGgyPgukRAYFk%2F9Fw9tnw0%2BzCRIJlpSuDkD5ZB0yzFa1UBSyPaV7bIjnUMBrFUBU4lWQTY75hr9TthHQj0LKE60YsrR3nHNOnscQoi60CRj%2BtCWoMKui3ckGOqUBaNf2xc3ph7LBLZYQRg%2F6W1zYdzgXZd%2FMMo22jNwtrRh29CUgHpB7D5JMQj%2BDZrFXKbicbUCToCtY8MGhi871TfzAIXu82Q0t5XV17rGd4OanNIn2mT4yDbktCHkC5k59SFoUAVTX3TSvxS%2Bfu9Aw9sZKPTGpqXnrp0byj7XdmBkuSvYqKlLnBJ2OKeS3nwS2sD6K5NCDwFL9AhVIdaNSJeGQlocR&X-Amz-Signature=499a5f2d95f7ebc824ea0769ff90fd4ebc514359c1080f3f51df17381a0368dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
