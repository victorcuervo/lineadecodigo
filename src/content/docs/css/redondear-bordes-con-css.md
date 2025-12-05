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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QE66T67%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T042306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDiykX1mdDpD0OcyKFexklPZiFPj7DC9rbaZ7nSNOLbAiEA%2FCsGTOyZI3L28%2BFRw9CrzEqjJ5hVW8uH%2FpxFrPRoURIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDG5z0V00KsWTpcnrEircAwPLMhG2UmY5y5LIsd07iyIFkf9tnOdGI5p%2FusrUwfyqpgZj%2FxAo6UD49gBHI8pX81GDSQy4hEP9ETWb76rbNirx4H%2Bsk%2Fuad6rfVvUPaPQl8vDRmxHYJEnRBL2SyXC8q0z7%2F7CHx6uBCU0AmRfeYoYntiEvGpvlBVZf1iHvXH%2FlmZ6gBXagZXX4k44GLoIeU8GxeyaPtHQVCCUzrjfk1sOFVa1%2B4jYxoTyyTsHy3lbFy3b9Wu6cgYWkeCjaER8JoLHLhDYWdDpyOw5XAT3oFGqCgQ2m0A2Gwx%2Bp1x4NLZasQ19Xs92RwnGjcfIlSaSYGd%2BL2gytNpljYRcbadx%2FvFbkFFHRkMprGyuNVWfrioITbUNptU%2F1lIJWC1WtKMR5YSgy5%2FpA8rupCSh2fGO7WmcO%2F4gluwMnzjjB5gWXR%2Fskf2ubnTynctzFiUuTxS0fx5gTFrwaxkostelbj%2Fsnqug1YC623iQHkzPJc4XENO%2F%2F4aNxP36CbsWBfpP5yDmJ%2BKmLoDGxkCpuoc0fOX7S4EWu%2FztirUevk0FY0islrYy2j0Vy9OvHlMaVqx%2FI0WRn8uinMk3JSsfcAc4E7wj0lyirCkFlbyCQsXsu%2B8N800WVtz766PyhxAR%2FVnXWMPOryckGOqUBRTA19zL1cRJBywHSeeTTlZYHtY3Q%2Fndi5TqPOYoTFXrAHFz87lr2Oq2M3yNFoC2Pc34zryoAuBwbet%2FWVgp1fovV4uUYMm9zZEG76teW9klSi%2F9t4kcVOi1RarTUSr9ZQFJCknKsGB1reKEu%2FrSzf08pDHRgHmtAkib84kfo9%2FzL67pTA74Avi2gLHaKVXSHvGYATVcsRKYj4TIDfRrMKZPg3Ow3&X-Amz-Signature=c9e5947b81b31068c1dd67dfd4334c675017992f3d68ce414c77c584c74c19bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QE66T67%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T042306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDiykX1mdDpD0OcyKFexklPZiFPj7DC9rbaZ7nSNOLbAiEA%2FCsGTOyZI3L28%2BFRw9CrzEqjJ5hVW8uH%2FpxFrPRoURIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDG5z0V00KsWTpcnrEircAwPLMhG2UmY5y5LIsd07iyIFkf9tnOdGI5p%2FusrUwfyqpgZj%2FxAo6UD49gBHI8pX81GDSQy4hEP9ETWb76rbNirx4H%2Bsk%2Fuad6rfVvUPaPQl8vDRmxHYJEnRBL2SyXC8q0z7%2F7CHx6uBCU0AmRfeYoYntiEvGpvlBVZf1iHvXH%2FlmZ6gBXagZXX4k44GLoIeU8GxeyaPtHQVCCUzrjfk1sOFVa1%2B4jYxoTyyTsHy3lbFy3b9Wu6cgYWkeCjaER8JoLHLhDYWdDpyOw5XAT3oFGqCgQ2m0A2Gwx%2Bp1x4NLZasQ19Xs92RwnGjcfIlSaSYGd%2BL2gytNpljYRcbadx%2FvFbkFFHRkMprGyuNVWfrioITbUNptU%2F1lIJWC1WtKMR5YSgy5%2FpA8rupCSh2fGO7WmcO%2F4gluwMnzjjB5gWXR%2Fskf2ubnTynctzFiUuTxS0fx5gTFrwaxkostelbj%2Fsnqug1YC623iQHkzPJc4XENO%2F%2F4aNxP36CbsWBfpP5yDmJ%2BKmLoDGxkCpuoc0fOX7S4EWu%2FztirUevk0FY0islrYy2j0Vy9OvHlMaVqx%2FI0WRn8uinMk3JSsfcAc4E7wj0lyirCkFlbyCQsXsu%2B8N800WVtz766PyhxAR%2FVnXWMPOryckGOqUBRTA19zL1cRJBywHSeeTTlZYHtY3Q%2Fndi5TqPOYoTFXrAHFz87lr2Oq2M3yNFoC2Pc34zryoAuBwbet%2FWVgp1fovV4uUYMm9zZEG76teW9klSi%2F9t4kcVOi1RarTUSr9ZQFJCknKsGB1reKEu%2FrSzf08pDHRgHmtAkib84kfo9%2FzL67pTA74Avi2gLHaKVXSHvGYATVcsRKYj4TIDfRrMKZPg3Ow3&X-Amz-Signature=e991877c5ad843c5f939123665dc0e283ed1b7078f0e38587f8ca63716427e08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
