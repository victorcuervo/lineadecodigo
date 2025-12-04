---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDDHVM6L%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BHKOQTNJlL0Xl8SlUnIgT3ZFjcMixLmpV4Pyy%2Bp3hKgIgdxazWgdsoAyAWirsDnz5BMH4ZjzEpYcAf6sirywKeWcq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDGnAfPlC9M%2FvZMhgqCrcA797%2FDMo9tv1iLFPt73uwKDVzYkE1DxVqiS%2BUsuF8D8emwoJgQCG5dKHl8I3DdRceHXroZTYqwGb57lJEZy2ls0udjrkp6%2B5J9fX1VCQtgNgDA3Z6WC3tpxhqRFHqcE%2FQCPUT8TrP3vPsb1070z9qHIMPfzAO1xgZGKc2e5rnj7vOSlS7isFtREIiwBa27dWxdnNY4m2F6KXYM7n46pFF1jIfnK9tKDXhOBsKqltSqDkbdA3TegygnG14%2B2Ysd6ULthcCrVX3PfxG%2FgkPiczrZ3Fuek5SgMQ19n%2BOrCX8yut10gAUirloIhIOKGjDgsYLmNROg89qaHZ2WOR2zisYYnrL85%2B3%2FtYNs%2BpQ5fL%2FnQA73%2BcBMA8g3F1DSGTCtkSlVdiFMulzZE9XStxD6Y600gxdvgB61DLPkaDJD4GR32BD%2BWveKv0TlanbCtK4OuG%2FcRN8vVo5rpU3b40aRh%2Fquf55gtVew0o8Phtm0s3v31RWzl1L31UeRtvTvOapZeEaCsj1FTo2C31zI2x0NkmpG9dvlkNDFzFT8j5XPWyBhlCoIeGDCB3d%2BZypXtoYkFEsVO0Y5H233%2Fd3%2FBma%2FGRUb9P3krvuhZC16zGIlwblLsjOBPSQlYw55PcS3wuMOPcxskGOqUBUnL1Uoxk4gF4GG8ivDWSMEM1YVH4kDeClcBRWdiJT6aY0ZBFySWhK7znhMkBCStJJKMyVr26KbVmzAgqpVvVK8c75l6fG7rogIao58GEdp20UirXcnvNmP20wd9pyQ6aVCTglkB0Gelxv%2F51fftfTitcN%2B%2Ff4BQzEmNx3qiId7GtDnBQQ8iEmQQ81sRWb63LfnFqZP0PZtkt5XD3hhJzJMisTz2C&X-Amz-Signature=5657abd191ae0b91bf35c570f88a05ceea215eea848952e178d305a610f68bd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDDHVM6L%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BHKOQTNJlL0Xl8SlUnIgT3ZFjcMixLmpV4Pyy%2Bp3hKgIgdxazWgdsoAyAWirsDnz5BMH4ZjzEpYcAf6sirywKeWcq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDGnAfPlC9M%2FvZMhgqCrcA797%2FDMo9tv1iLFPt73uwKDVzYkE1DxVqiS%2BUsuF8D8emwoJgQCG5dKHl8I3DdRceHXroZTYqwGb57lJEZy2ls0udjrkp6%2B5J9fX1VCQtgNgDA3Z6WC3tpxhqRFHqcE%2FQCPUT8TrP3vPsb1070z9qHIMPfzAO1xgZGKc2e5rnj7vOSlS7isFtREIiwBa27dWxdnNY4m2F6KXYM7n46pFF1jIfnK9tKDXhOBsKqltSqDkbdA3TegygnG14%2B2Ysd6ULthcCrVX3PfxG%2FgkPiczrZ3Fuek5SgMQ19n%2BOrCX8yut10gAUirloIhIOKGjDgsYLmNROg89qaHZ2WOR2zisYYnrL85%2B3%2FtYNs%2BpQ5fL%2FnQA73%2BcBMA8g3F1DSGTCtkSlVdiFMulzZE9XStxD6Y600gxdvgB61DLPkaDJD4GR32BD%2BWveKv0TlanbCtK4OuG%2FcRN8vVo5rpU3b40aRh%2Fquf55gtVew0o8Phtm0s3v31RWzl1L31UeRtvTvOapZeEaCsj1FTo2C31zI2x0NkmpG9dvlkNDFzFT8j5XPWyBhlCoIeGDCB3d%2BZypXtoYkFEsVO0Y5H233%2Fd3%2FBma%2FGRUb9P3krvuhZC16zGIlwblLsjOBPSQlYw55PcS3wuMOPcxskGOqUBUnL1Uoxk4gF4GG8ivDWSMEM1YVH4kDeClcBRWdiJT6aY0ZBFySWhK7znhMkBCStJJKMyVr26KbVmzAgqpVvVK8c75l6fG7rogIao58GEdp20UirXcnvNmP20wd9pyQ6aVCTglkB0Gelxv%2F51fftfTitcN%2B%2Ff4BQzEmNx3qiId7GtDnBQQ8iEmQQ81sRWb63LfnFqZP0PZtkt5XD3hhJzJMisTz2C&X-Amz-Signature=f015ec517fee8acccb7552b58a882bebd8ff558cb5bbf4a8ed86fc76b08e04c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
