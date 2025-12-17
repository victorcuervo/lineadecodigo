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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NZKTHAU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrvPhCpwPjVzLTzJOJlHbEUX1SYkurp903ovay7uSdhQIgTSCPr6OQThlpXKjw%2FzDdXzuh%2BlGQZgsVSUxCMAgejcIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDMLleONvxeUX0kKWCircA1DVrrTS3cpHNJeimWFF6Li%2B4JfXprykEJMlbHDoVWM9CZ%2Bt6wPfR31pAvawDsr75eyfgqDmZARVKgmLw0AkcEWtd%2BtistWyN2WYKwVzk9sCVAgQBygO%2FkZpNrn9gOqqpEukvfA484TvMQXpnka4%2BkSL%2Fe6QOdFeH8t2DPlp2w7pO6lpOi8vKn0brKiwCAlvv5qTE2RdThrdfeTHuRAYKN26fxVlesRmJlHE%2FM5rAQ0T79hj9%2FBWKONAVyBOwUsbQqfIff9KWtPj4bfIsZkCG1awmpNxTLQH53lJrjI2rpCrUIq5f9m6Lphri%2Frfzl%2BSlUaG%2FUlz0SasSLJkJj5Gh55XVEDSneigx7%2F3MMVJZbdFsr28CqVN1oGw6C0vdESTZaPgKitQBvqU08B1QkPfjeOxH5JgLYhilwFxl081grPc%2FYywWeFQk8hjW1a23rCjvqZ5RuB7CSDkokBS92lE%2BsBKK2RUC60K61Cxc%2BWHDR97LP6QTxCJWm%2FQR4kgZpFNVhgFA4v3MJblyqeRb6nZ52SQtTsHQBdlJjp2OLHIZkRmQX3ixVwKy6nAwA6LQiRXV3pBcyvbu5OVDGenvjbUJmdA34Ojh1AUf85fYsvaOiO3tvsZNz8czSCosxWeMOeqisoGOqUBkuGN4bmEwQki32LMS9gz%2FbZb5Eg6ac5w9PDRAnOSxKE4iY31eSHMowZ%2FhFc7ZiuGPUfVnRrNCtQPlrdoo6mQocfS9otWR9tk7HrNgGZblun%2F804v2mOwz8%2FhchfDi3nPfDEl3jz0XrFl4LtNVO2Ln8pN%2Fa0lWDvoz1DRstFHRkAXKaHNRyL6PBTbzliW8iXgQTYyJQ24eUPptLS8KtgOvdOLOsVn&X-Amz-Signature=269af8c76e47df75f963b7617e2ffa72a5ab414cd8ce37b43668b9e77b0e7a8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NZKTHAU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrvPhCpwPjVzLTzJOJlHbEUX1SYkurp903ovay7uSdhQIgTSCPr6OQThlpXKjw%2FzDdXzuh%2BlGQZgsVSUxCMAgejcIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDMLleONvxeUX0kKWCircA1DVrrTS3cpHNJeimWFF6Li%2B4JfXprykEJMlbHDoVWM9CZ%2Bt6wPfR31pAvawDsr75eyfgqDmZARVKgmLw0AkcEWtd%2BtistWyN2WYKwVzk9sCVAgQBygO%2FkZpNrn9gOqqpEukvfA484TvMQXpnka4%2BkSL%2Fe6QOdFeH8t2DPlp2w7pO6lpOi8vKn0brKiwCAlvv5qTE2RdThrdfeTHuRAYKN26fxVlesRmJlHE%2FM5rAQ0T79hj9%2FBWKONAVyBOwUsbQqfIff9KWtPj4bfIsZkCG1awmpNxTLQH53lJrjI2rpCrUIq5f9m6Lphri%2Frfzl%2BSlUaG%2FUlz0SasSLJkJj5Gh55XVEDSneigx7%2F3MMVJZbdFsr28CqVN1oGw6C0vdESTZaPgKitQBvqU08B1QkPfjeOxH5JgLYhilwFxl081grPc%2FYywWeFQk8hjW1a23rCjvqZ5RuB7CSDkokBS92lE%2BsBKK2RUC60K61Cxc%2BWHDR97LP6QTxCJWm%2FQR4kgZpFNVhgFA4v3MJblyqeRb6nZ52SQtTsHQBdlJjp2OLHIZkRmQX3ixVwKy6nAwA6LQiRXV3pBcyvbu5OVDGenvjbUJmdA34Ojh1AUf85fYsvaOiO3tvsZNz8czSCosxWeMOeqisoGOqUBkuGN4bmEwQki32LMS9gz%2FbZb5Eg6ac5w9PDRAnOSxKE4iY31eSHMowZ%2FhFc7ZiuGPUfVnRrNCtQPlrdoo6mQocfS9otWR9tk7HrNgGZblun%2F804v2mOwz8%2FhchfDi3nPfDEl3jz0XrFl4LtNVO2Ln8pN%2Fa0lWDvoz1DRstFHRkAXKaHNRyL6PBTbzliW8iXgQTYyJQ24eUPptLS8KtgOvdOLOsVn&X-Amz-Signature=53002228f45b03ff44b5c0c6de3b6b9615795439a5f26bea5cb98d44de323971&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
