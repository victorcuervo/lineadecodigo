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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAUDEIKU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T170536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBu%2F2fIVqiIk1XKiEBV%2FmKaWfluKmiis6p9GnCm4zym1AiEAnrd8wz4x%2FjVymN%2FRAEe7zJbdQteiuIIxmiv3Ar%2FDq70q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAdS6BwsD5zTwxMf2yrcAyg9D75XLVKr82djqLFni97JOTKHoU1H%2B63OSxkicQu5k887vHsvPapDCXP0Ps1V6IvCEk1fv2ns8ntScoZyqARzHBp367bGOZgvUXBvBPzkfrnLBVUqxW2vXdqaKaIqPuX8uECwM5Cpr9umvOyX0GH4zIa%2FtPXhVGpCDzoNeJ40XkCNd%2F6KJvWOk8xxJMRqrjzrEptUW4DWVxXCUA0MuWG82rjhh5bihUGTFt52uGAUpWiDriQ0EpgInY4YYLxKL3o3q9AK4CbIz6Vg6FW3%2BoZnll4csLsWZv%2Bf0DoJB4R2Mkweo0icFbj9Tt1ZJDTRElXuR4jEAn3yxSdvqP%2Bl%2B%2Brat0aYrjlGyLXXEkbFkSR8rzIt8dxJ62bvjVFupcjol0nZOL8olHM7oh%2FlbsteWB1YPnwqkYT%2BHdnJyEzEvbKU9MN6VXSifL5HS12RPwc2oNbhn6nvRzbIFZVzvK4KtACvKTR0N2s1MPzt7ImuxyFtBjEQ%2FPaTY4CRDcYUPP2w%2B%2B0zQcpdnss%2BAzHr%2F1r0FtEtTUmgEcUKWLDUicKw%2BeVb0RaJw8d0IATj1hUTgbq6F2O3Aou6T1TnabKaAXpDcLlFJ6cDIjeNrkPXBgGG8eyitDVGjEHWF%2B57bexCMMmm0MkGOqUBJL0lFBVat1CTJmOr6yLb3iDxd9X1oNUemngQlXfjOYdpdkl47yERVldPgaLTeOwtjNfORw1uJ%2FpS%2BJEY9KxGYGVOQ8qOuCNdqTzx0e3ZQQr44G0ZBERArFcplhfRumWKK3kF7LIS2P7tuzAg4jUkZcTfsXWqqC4mjd8bqvvgJUHkRh5c%2FQAJAYSOs8Gl2px%2FMQd0IN6A6mlm7tSSY2h0narnfJnn&X-Amz-Signature=fc83a4681a068e84886a09e1a28f295ed197fac8b215ca3eeddd0dd8149e927b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAUDEIKU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T170536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBu%2F2fIVqiIk1XKiEBV%2FmKaWfluKmiis6p9GnCm4zym1AiEAnrd8wz4x%2FjVymN%2FRAEe7zJbdQteiuIIxmiv3Ar%2FDq70q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAdS6BwsD5zTwxMf2yrcAyg9D75XLVKr82djqLFni97JOTKHoU1H%2B63OSxkicQu5k887vHsvPapDCXP0Ps1V6IvCEk1fv2ns8ntScoZyqARzHBp367bGOZgvUXBvBPzkfrnLBVUqxW2vXdqaKaIqPuX8uECwM5Cpr9umvOyX0GH4zIa%2FtPXhVGpCDzoNeJ40XkCNd%2F6KJvWOk8xxJMRqrjzrEptUW4DWVxXCUA0MuWG82rjhh5bihUGTFt52uGAUpWiDriQ0EpgInY4YYLxKL3o3q9AK4CbIz6Vg6FW3%2BoZnll4csLsWZv%2Bf0DoJB4R2Mkweo0icFbj9Tt1ZJDTRElXuR4jEAn3yxSdvqP%2Bl%2B%2Brat0aYrjlGyLXXEkbFkSR8rzIt8dxJ62bvjVFupcjol0nZOL8olHM7oh%2FlbsteWB1YPnwqkYT%2BHdnJyEzEvbKU9MN6VXSifL5HS12RPwc2oNbhn6nvRzbIFZVzvK4KtACvKTR0N2s1MPzt7ImuxyFtBjEQ%2FPaTY4CRDcYUPP2w%2B%2B0zQcpdnss%2BAzHr%2F1r0FtEtTUmgEcUKWLDUicKw%2BeVb0RaJw8d0IATj1hUTgbq6F2O3Aou6T1TnabKaAXpDcLlFJ6cDIjeNrkPXBgGG8eyitDVGjEHWF%2B57bexCMMmm0MkGOqUBJL0lFBVat1CTJmOr6yLb3iDxd9X1oNUemngQlXfjOYdpdkl47yERVldPgaLTeOwtjNfORw1uJ%2FpS%2BJEY9KxGYGVOQ8qOuCNdqTzx0e3ZQQr44G0ZBERArFcplhfRumWKK3kF7LIS2P7tuzAg4jUkZcTfsXWqqC4mjd8bqvvgJUHkRh5c%2FQAJAYSOs8Gl2px%2FMQd0IN6A6mlm7tSSY2h0narnfJnn&X-Amz-Signature=81ce1b1968e3e5b75540310c53516f15c5a604d9f5f9bb2ddfb4fcc4316526f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
