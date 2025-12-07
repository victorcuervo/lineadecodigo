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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVUQGOXA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T025800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCURv33Zqvp8fNhY1BjT1G20aUUTjVersA30kpxGpeIAiEAzvMl4IebXSG1unlsjyo0AKmgHRGsvr4lLWtUTNRohJIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3%2BP9QKZr9uzPEv2SrcAwsuucIiXZHxxfk%2B48Gd35RDNy4Fk%2Bi03EIMpFirLR6ySu75z%2F%2FqM8t1FNHQ1LPoElDIWdenvaaRV%2BIOwxAH9999DjaRJ2lLmqvDH%2F%2BarLwFYESdt4p1630kS9gl3FQoXetvUy56IVWoGq6KToKyfhQPcnCmnA8WYSRWhIbjEcIzjb56ZAO970%2BmfegbYM0B5jpBqeWmy1NjbIr%2BmWQ8jad6ZY0s7aFDoEzzt2ymY2kd3Bq9PJ6mNgM42dammDYl1qAF4v%2BarCFa45eN7sBspepa4OCJ5MOi%2BrtdVu2xGA0VwFIwFpdNJHsAsZCn5WobU4M7jwEWQ6IrVqXaCswqqpRvo7J2trQReB1kYCOndDPl2x0w3IzVznuDm8my5Zg7t1JYl5rVeiH%2FBFiOEMMDtcpCVDuBByOmV%2FnQdxZFZcymog9O31rYNLnWUO3MentNLd42BjfZJ%2B7%2BQJPEP%2Bfw77TAh%2BswJ5oUWmisEi4EtfiH6kl0T0Jfg%2BPGEmXqijt%2F8zeeoFOSwyR9keHGrEyTGEIbl7HMHYb1Yqlq%2FwhxJz8oqPeXyL1rTspPgOT2xxYefFTtezlQsJC9TOh%2BWTnkt%2Ba8dfZWfpLC6o30SE2DbXLdcTw2K109bommJrMOMIj90skGOqUBeKeXc1bBREpInW30ra6kuyyJT6JMrzh8eepWcgiwleFbY35jJU1jQ46fJPUmeH6H67Mxpx9HOydankeahT3GqsO5DHIq%2Fy8oVUdUeJPHDP2D1UerTUn5xu1qpHrz7h%2BjW4BdVbspDCuyhTsGda7E28HAa%2BXsC6WGe7fmk%2B9JbZtefjF2xI7TH7v8ox6BYjG9tdC%2B5EtdxgzEZ4VStBfs3AwuukF9&X-Amz-Signature=e7b60b7f52a9ed66810a051770c1b9529d464948c061f4133669e2ad1326c4ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVUQGOXA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T025800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCURv33Zqvp8fNhY1BjT1G20aUUTjVersA30kpxGpeIAiEAzvMl4IebXSG1unlsjyo0AKmgHRGsvr4lLWtUTNRohJIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3%2BP9QKZr9uzPEv2SrcAwsuucIiXZHxxfk%2B48Gd35RDNy4Fk%2Bi03EIMpFirLR6ySu75z%2F%2FqM8t1FNHQ1LPoElDIWdenvaaRV%2BIOwxAH9999DjaRJ2lLmqvDH%2F%2BarLwFYESdt4p1630kS9gl3FQoXetvUy56IVWoGq6KToKyfhQPcnCmnA8WYSRWhIbjEcIzjb56ZAO970%2BmfegbYM0B5jpBqeWmy1NjbIr%2BmWQ8jad6ZY0s7aFDoEzzt2ymY2kd3Bq9PJ6mNgM42dammDYl1qAF4v%2BarCFa45eN7sBspepa4OCJ5MOi%2BrtdVu2xGA0VwFIwFpdNJHsAsZCn5WobU4M7jwEWQ6IrVqXaCswqqpRvo7J2trQReB1kYCOndDPl2x0w3IzVznuDm8my5Zg7t1JYl5rVeiH%2FBFiOEMMDtcpCVDuBByOmV%2FnQdxZFZcymog9O31rYNLnWUO3MentNLd42BjfZJ%2B7%2BQJPEP%2Bfw77TAh%2BswJ5oUWmisEi4EtfiH6kl0T0Jfg%2BPGEmXqijt%2F8zeeoFOSwyR9keHGrEyTGEIbl7HMHYb1Yqlq%2FwhxJz8oqPeXyL1rTspPgOT2xxYefFTtezlQsJC9TOh%2BWTnkt%2Ba8dfZWfpLC6o30SE2DbXLdcTw2K109bommJrMOMIj90skGOqUBeKeXc1bBREpInW30ra6kuyyJT6JMrzh8eepWcgiwleFbY35jJU1jQ46fJPUmeH6H67Mxpx9HOydankeahT3GqsO5DHIq%2Fy8oVUdUeJPHDP2D1UerTUn5xu1qpHrz7h%2BjW4BdVbspDCuyhTsGda7E28HAa%2BXsC6WGe7fmk%2B9JbZtefjF2xI7TH7v8ox6BYjG9tdC%2B5EtdxgzEZ4VStBfs3AwuukF9&X-Amz-Signature=0da8256d82a71ad865e3287afb2c8695fe919307a581535d7a4e66d11a5598b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
