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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KY3ONZX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0n%2BkHuYbkeVuOfKGjAR568xJdrZ%2B%2BQSkStnU6M4tcuAIgFB0Q9SFZs3WDrm5A799w5h%2F9CFSr4%2Fhpp%2BtxzRAA7Qkq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCdqZ%2FkzZaqyo6HKgCrcA%2F6qR3qjAaE2IT5JZCZYnNbEpXF%2BEF2AMbaFMhP8Szk8ShxMqveV4KwtQK94ZHeT3kKVNSiXJP5h1tzzc5WTrd3kT3%2B2a9FpnTVVlmfvLb82J5QrPziPcsBK16IaghjzzJswrcmPHs7DSTAHZHFP1Sn9Ugom3Xc5E%2BS8cyi1j1ET2kRhF%2FOo63LtZpiTQZtRzepqaDfNdeB2kuOpYj%2B59AjchWVxLm8tkBh8qWsa5Lu8uwLvodp4JRAuTrFa1NuY0oOm50UwzZpx%2B51KOgituH4o0ko6N5lHSmdOw6q7P%2FCAXj3gIUjkdNDv9pnAS2WBAdyEWfl%2B7evO9g6K0R%2Flx%2BsCbyHMC%2FEwyFLx8sYhlmUpMyf%2B%2FNGRHEGoI8GWB65M8S%2B3zX3VA7jfa0OfcA6grULPBT8%2FA1Y%2Fff41zXWJtr%2BMhqmxnHnXjdz3O0GxYSs0vGDcToUKHOLCFL6JJn%2BKzyji3Nn39nccJWWCofUQTnxjK1NxtOu2rrVm7rh6EaY9%2BvHAKzVu5%2Bjk0Dpsp%2BnWrtuAVXFsn%2BJSRduTcdTlc%2B%2FuXQyUdLSrikBx4gi0MMOTILd%2Fk6xxR%2FzNtFjQIowzyN%2Buli%2BcZyIMwpAkTTTbd951xMfJNumzzpznQzYsMM36xskGOqUBN%2FBapcY7A5XbSJXs0ejEzL5GsbAcSjB0lSl7FfAkURYpA%2BQqPlq9XRyp2%2FzmJRAvr6Z0QJXCr%2FVehp6cUL0rc5slGH85vaticSf0QEcJS97JSsDZSsh3h%2FeBuBycyMkef6nTK0Sow%2FvcwQTht1uDDavv5oB%2FTdqnAqtlaihd2vPoM3J6NGXrUScyEJNs3MIAbYM5AAPrAxR9%2FogjNdGLyk8AzZJw&X-Amz-Signature=0c820b1f309472821b2191d9d2570a40a304e74b0d3d2c0ec2563388cf95abc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KY3ONZX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0n%2BkHuYbkeVuOfKGjAR568xJdrZ%2B%2BQSkStnU6M4tcuAIgFB0Q9SFZs3WDrm5A799w5h%2F9CFSr4%2Fhpp%2BtxzRAA7Qkq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCdqZ%2FkzZaqyo6HKgCrcA%2F6qR3qjAaE2IT5JZCZYnNbEpXF%2BEF2AMbaFMhP8Szk8ShxMqveV4KwtQK94ZHeT3kKVNSiXJP5h1tzzc5WTrd3kT3%2B2a9FpnTVVlmfvLb82J5QrPziPcsBK16IaghjzzJswrcmPHs7DSTAHZHFP1Sn9Ugom3Xc5E%2BS8cyi1j1ET2kRhF%2FOo63LtZpiTQZtRzepqaDfNdeB2kuOpYj%2B59AjchWVxLm8tkBh8qWsa5Lu8uwLvodp4JRAuTrFa1NuY0oOm50UwzZpx%2B51KOgituH4o0ko6N5lHSmdOw6q7P%2FCAXj3gIUjkdNDv9pnAS2WBAdyEWfl%2B7evO9g6K0R%2Flx%2BsCbyHMC%2FEwyFLx8sYhlmUpMyf%2B%2FNGRHEGoI8GWB65M8S%2B3zX3VA7jfa0OfcA6grULPBT8%2FA1Y%2Fff41zXWJtr%2BMhqmxnHnXjdz3O0GxYSs0vGDcToUKHOLCFL6JJn%2BKzyji3Nn39nccJWWCofUQTnxjK1NxtOu2rrVm7rh6EaY9%2BvHAKzVu5%2Bjk0Dpsp%2BnWrtuAVXFsn%2BJSRduTcdTlc%2B%2FuXQyUdLSrikBx4gi0MMOTILd%2Fk6xxR%2FzNtFjQIowzyN%2Buli%2BcZyIMwpAkTTTbd951xMfJNumzzpznQzYsMM36xskGOqUBN%2FBapcY7A5XbSJXs0ejEzL5GsbAcSjB0lSl7FfAkURYpA%2BQqPlq9XRyp2%2FzmJRAvr6Z0QJXCr%2FVehp6cUL0rc5slGH85vaticSf0QEcJS97JSsDZSsh3h%2FeBuBycyMkef6nTK0Sow%2FvcwQTht1uDDavv5oB%2FTdqnAqtlaihd2vPoM3J6NGXrUScyEJNs3MIAbYM5AAPrAxR9%2FogjNdGLyk8AzZJw&X-Amz-Signature=b34aae495401723c74549f4931dac50f13c9cde304f4e47ad078a7d792db4c51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
