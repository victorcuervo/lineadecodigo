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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EANVV5A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ4jk%2BhIFTBf%2B9cWVSD6YOLIIzKDL56YvnAy3TrYE87wIhAOb2g8unI%2BMVHDLBeXOv0LbnA16D9gOdxjV%2BbYfHIvC%2BKv8DCH8QABoMNjM3NDIzMTgzODA1IgyuKHJPMBF%2F2maw%2FP8q3AP9hwV%2F5ZrgkZfoHrZzeNv3V2k0etZBCZOqZGImhs%2BH6nwudLqAs2LVuIAMX7RrN%2Btn8omwnrjsui42DO2HBhh6eZPubSTSA95d7EVk1RJ0PTEW%2BaBAzC%2FZbTAsenTrEvFh7%2FJId7o05ehsHCAydOiD1ZlkKkK7pehsU8iqy%2Bw4QvwtgO152uz%2BACeOyGaYy%2FnAOYVDJH2LfYndAvIxPqmtQWaYifRH8csFVxjpvYeIAh3rL6vv3eW%2BUnOUpfNbzyrxw0J7%2BJN75laoFTXQxMSmNKMLigjDc0gTbGsT2EK3iYxcLg0KCQB%2BHtFEckDJS3fUKXdbrRfmlQ90yPCKPXuSGpzz0bdYYhpzhRy1Z8kVmv2yUpc0CpKQPlrkui7D8wfkg2gWw1lsl9GvU%2Btf1DEDuiM6roy%2F%2BlVOOz7e%2BDVlobAiepSDHN9wkA79MWhL3Z1dXaMLviyARPxrQ2HuQi6Gw3z3BX0Ak8u6RihLbmvbhLw5nfN65tEm7SxSi0TKVecBLrP7Lv%2BQIOf2QOHej95VWFhrE9ZZJciVbamAkVXPhnLVhhol%2FLwAj7vTlf95rcHAMBWtyoe%2BgOYCRYHVzVUgEtjbYFsUrZS1Bhzqf8KrRl4X9AuMZSfNm7A%2B3TDf4YrKBjqkAViBDpEtFHIiy72c%2BE8xHeYNo7ycTm0gGhdWDw6lFSiCmbPqExDKaxPpw2TYm2S8b7Zanh6P1oJCczYxhgyw27%2FrBRUIftYu%2BQ6tTMqw6zCNzmeI6GBZcMbHTxAioVrN9PAFf%2BYgAXHlsC0oHyp%2B9%2B6ulLW5Yic3e1TQFVkMXdfoCgJsu7tRJQ0GhIIxTS1s1jCFn8wElPpO0d0IaW4G8D73RpOW&X-Amz-Signature=dde1fcaced9b3db503de17ff83eb6525bf918b1cd79cb9f9841a243ba8575af6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EANVV5A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ4jk%2BhIFTBf%2B9cWVSD6YOLIIzKDL56YvnAy3TrYE87wIhAOb2g8unI%2BMVHDLBeXOv0LbnA16D9gOdxjV%2BbYfHIvC%2BKv8DCH8QABoMNjM3NDIzMTgzODA1IgyuKHJPMBF%2F2maw%2FP8q3AP9hwV%2F5ZrgkZfoHrZzeNv3V2k0etZBCZOqZGImhs%2BH6nwudLqAs2LVuIAMX7RrN%2Btn8omwnrjsui42DO2HBhh6eZPubSTSA95d7EVk1RJ0PTEW%2BaBAzC%2FZbTAsenTrEvFh7%2FJId7o05ehsHCAydOiD1ZlkKkK7pehsU8iqy%2Bw4QvwtgO152uz%2BACeOyGaYy%2FnAOYVDJH2LfYndAvIxPqmtQWaYifRH8csFVxjpvYeIAh3rL6vv3eW%2BUnOUpfNbzyrxw0J7%2BJN75laoFTXQxMSmNKMLigjDc0gTbGsT2EK3iYxcLg0KCQB%2BHtFEckDJS3fUKXdbrRfmlQ90yPCKPXuSGpzz0bdYYhpzhRy1Z8kVmv2yUpc0CpKQPlrkui7D8wfkg2gWw1lsl9GvU%2Btf1DEDuiM6roy%2F%2BlVOOz7e%2BDVlobAiepSDHN9wkA79MWhL3Z1dXaMLviyARPxrQ2HuQi6Gw3z3BX0Ak8u6RihLbmvbhLw5nfN65tEm7SxSi0TKVecBLrP7Lv%2BQIOf2QOHej95VWFhrE9ZZJciVbamAkVXPhnLVhhol%2FLwAj7vTlf95rcHAMBWtyoe%2BgOYCRYHVzVUgEtjbYFsUrZS1Bhzqf8KrRl4X9AuMZSfNm7A%2B3TDf4YrKBjqkAViBDpEtFHIiy72c%2BE8xHeYNo7ycTm0gGhdWDw6lFSiCmbPqExDKaxPpw2TYm2S8b7Zanh6P1oJCczYxhgyw27%2FrBRUIftYu%2BQ6tTMqw6zCNzmeI6GBZcMbHTxAioVrN9PAFf%2BYgAXHlsC0oHyp%2B9%2B6ulLW5Yic3e1TQFVkMXdfoCgJsu7tRJQ0GhIIxTS1s1jCFn8wElPpO0d0IaW4G8D73RpOW&X-Amz-Signature=95aec80d1084809924962f65a993865d4e1a241e0a26404e959ff310aa3dbc8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
