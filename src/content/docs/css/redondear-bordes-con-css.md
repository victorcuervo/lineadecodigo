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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVZGKYVV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDH6sOSs4Tb5lwcgFt9xUO4FTlDyKAHC58LzkAlywNLUAiEAinlvPLDcBo0gHGPGHKbps4%2Bn%2B8eAflAGyBGRkibwDCUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD4J73cpFQ3moOSwWircA4A4WmKYbaBXXLBC7ZuWLEjGTZGvl4sqvmmZwvnq5mUYqclD4b6LCZJXPVzIEPNBDYTENgQO0qlJJqXBVbylcFmw%2FxqGOMsBdTNcoVrsvqyuliRHMKvZcdcyLvRzbbvNnB2XaqDkYEZS%2BH6zchbIWJ2RCauVR%2ByLw%2BdgyXS38TlwrCvec4qBZrVb%2FKeUrlYEpG7O%2FNUpVKE%2BIDoxm7WIxxI4%2FHpPc6kvKaIxcA8wis1k7JjbxArvP5icGbCm%2FcrFvKBoRFcmiZQxUKQ7Qp7NJtdyvNrdHM%2BoxACW1eRcqOCbIfKiWJeG3WYIPda6lpbPSvCXx2VMzNWL3TGxgtlb7neeOCiMOdhNQqS3DHgv8XNJhBzx4sWJQPtjmTBaSL2OqYG5suGjj7x%2B5eoXZb5sj99l6VGHADTd697vGFDcVbFPrctAiHgowVrc3E2DY3pqkXm5WlUZ7bBBGSL5ERyOpQBC0cdYLUO0EgiBYHnHWI%2FDqXIrEEsmqTyGKSWwyidbVRwYfLT9AHChkbDcWSe6P7HvIQU0aLERSJChucbVLqCDbwrFP3Fe1ZOPgKkHkKk6KuZp8QU512%2B8QJuiFIeOF%2B4GwAHDSRxRuam7IDknosBWaN5OWeQHoWY5Kh4lMNj90skGOqUB7NTdkTzW8Pux2xH%2FEHjkIFwUW2%2FCyj0UoVosf9Fga196p2lvS4pnnDhjUsmPpO%2BVw1o3msfHUD6EBIXHnHewX0yR4%2Bjh8Xv9GjXSh2g9wyImHvw9Vab%2B77cqAnDe4Y0NO1TE1olJcMiwJgRCu5nHE9q0Q8Sw0Th%2BGa1E18UtMee28MxQQRV2mJS7FARt%2Fo6BLMGR6irnkSKgkoVWaIZej5XCLWO0&X-Amz-Signature=532e00ebdeb8af00485a736d768f90d3076cd3580ed0c40da2df029ff64b1530&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVZGKYVV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDH6sOSs4Tb5lwcgFt9xUO4FTlDyKAHC58LzkAlywNLUAiEAinlvPLDcBo0gHGPGHKbps4%2Bn%2B8eAflAGyBGRkibwDCUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD4J73cpFQ3moOSwWircA4A4WmKYbaBXXLBC7ZuWLEjGTZGvl4sqvmmZwvnq5mUYqclD4b6LCZJXPVzIEPNBDYTENgQO0qlJJqXBVbylcFmw%2FxqGOMsBdTNcoVrsvqyuliRHMKvZcdcyLvRzbbvNnB2XaqDkYEZS%2BH6zchbIWJ2RCauVR%2ByLw%2BdgyXS38TlwrCvec4qBZrVb%2FKeUrlYEpG7O%2FNUpVKE%2BIDoxm7WIxxI4%2FHpPc6kvKaIxcA8wis1k7JjbxArvP5icGbCm%2FcrFvKBoRFcmiZQxUKQ7Qp7NJtdyvNrdHM%2BoxACW1eRcqOCbIfKiWJeG3WYIPda6lpbPSvCXx2VMzNWL3TGxgtlb7neeOCiMOdhNQqS3DHgv8XNJhBzx4sWJQPtjmTBaSL2OqYG5suGjj7x%2B5eoXZb5sj99l6VGHADTd697vGFDcVbFPrctAiHgowVrc3E2DY3pqkXm5WlUZ7bBBGSL5ERyOpQBC0cdYLUO0EgiBYHnHWI%2FDqXIrEEsmqTyGKSWwyidbVRwYfLT9AHChkbDcWSe6P7HvIQU0aLERSJChucbVLqCDbwrFP3Fe1ZOPgKkHkKk6KuZp8QU512%2B8QJuiFIeOF%2B4GwAHDSRxRuam7IDknosBWaN5OWeQHoWY5Kh4lMNj90skGOqUB7NTdkTzW8Pux2xH%2FEHjkIFwUW2%2FCyj0UoVosf9Fga196p2lvS4pnnDhjUsmPpO%2BVw1o3msfHUD6EBIXHnHewX0yR4%2Bjh8Xv9GjXSh2g9wyImHvw9Vab%2B77cqAnDe4Y0NO1TE1olJcMiwJgRCu5nHE9q0Q8Sw0Th%2BGa1E18UtMee28MxQQRV2mJS7FARt%2Fo6BLMGR6irnkSKgkoVWaIZej5XCLWO0&X-Amz-Signature=6b7406fd7895aa621d075db5cc12a7cdb440978a62586b293d7fca02d277b01b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
