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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QROE45HI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2FuNUU7vVtxiABlH4MNKNFPTVXzIrUX1mpE4k9fIWCPAiBMJMRhSM90xB8jiON1rTu1F5QJk1bgEuAW%2FyQ0ENIhUSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMLc8f96Z7qeLIbnkoKtwDxbhXKp1DqU6nTiJtJtESLmkuAfJF6cS29b%2BNhIfmXheR04NxXDdNalM3NPwiNWmbw3tkvdU%2F%2B3xcp0mzhawXcH%2BlPr5caEJPoD7rQmXOTsRtu5a4h9CuoQS5E68ULXGJnKnnX2ydloL5vCG5%2BLngRQYjZEgvrOZrytjgVsuK%2BZ%2FnF5RV7e9Z0ro7%2Fdlpw7kiGUagsbzDCLxRwDdIcKWV2Bo2HDjJX9OueyzXEEeWzud66nCMHS7m80yf6Wv2Cr0Jc25miuqFEciOdbFEn4V8Cs7rm6h%2B0RWZkghhruHwANXm3rsds%2FrNMHuVPiSFsLjUavGpG8OSdv8dvyIiQEOzIprdPLWK1GDNbxU%2FQsCKth5RBVb7xMfwpo5t%2FTZUm2cD%2B%2FZ5%2FVtt%2Bt2ZE%2BiYa9J%2BsFSVHulug4fiEDAHq51NPhvpzcBMvEMH5nG1DqZc61nuUak7t7v74fE%2BtjYcIYghsVYYFybjyORNkuvk5GJqnTm4yPKASJBUXPqPwMkzLp7WJ3REKZ8RGiXbrxgZlyC7aAzaFDq5IvWniY5t%2FJLjHDQCPcGRyltRbstYz8fNC7qvY8RP9FElF%2Fv3L4Ta1pEw233KEgGF6CfJOctDRjZ8SzzACJLABQlnYKpbVEAw2paIygY6pgHVjxkjsTScz2xvJxKqGB7XvwZkILA58zkk%2FnGru0YRynBP71OxM3IR0zperoYpcnEL%2FI1YCsxcbz5T%2Fyool9%2FO39p7RIFdI5gLHAQYrrHBGvr02eBL6SIRz%2BodEbNqCRzd2FC3fVY9il0Iwmbu5p7HXAc31Xaw0cSmOk%2BKZtym0uTJI1Ee%2BS6wALM3INUuRzawtF4dKeBOPHVLjHNH5FRgQhmQaEQA&X-Amz-Signature=b1fbed71a85f4c1e8bc67b59bf5834ad9c07286202de99f16fabac04d6b3485c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QROE45HI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2FuNUU7vVtxiABlH4MNKNFPTVXzIrUX1mpE4k9fIWCPAiBMJMRhSM90xB8jiON1rTu1F5QJk1bgEuAW%2FyQ0ENIhUSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMLc8f96Z7qeLIbnkoKtwDxbhXKp1DqU6nTiJtJtESLmkuAfJF6cS29b%2BNhIfmXheR04NxXDdNalM3NPwiNWmbw3tkvdU%2F%2B3xcp0mzhawXcH%2BlPr5caEJPoD7rQmXOTsRtu5a4h9CuoQS5E68ULXGJnKnnX2ydloL5vCG5%2BLngRQYjZEgvrOZrytjgVsuK%2BZ%2FnF5RV7e9Z0ro7%2Fdlpw7kiGUagsbzDCLxRwDdIcKWV2Bo2HDjJX9OueyzXEEeWzud66nCMHS7m80yf6Wv2Cr0Jc25miuqFEciOdbFEn4V8Cs7rm6h%2B0RWZkghhruHwANXm3rsds%2FrNMHuVPiSFsLjUavGpG8OSdv8dvyIiQEOzIprdPLWK1GDNbxU%2FQsCKth5RBVb7xMfwpo5t%2FTZUm2cD%2B%2FZ5%2FVtt%2Bt2ZE%2BiYa9J%2BsFSVHulug4fiEDAHq51NPhvpzcBMvEMH5nG1DqZc61nuUak7t7v74fE%2BtjYcIYghsVYYFybjyORNkuvk5GJqnTm4yPKASJBUXPqPwMkzLp7WJ3REKZ8RGiXbrxgZlyC7aAzaFDq5IvWniY5t%2FJLjHDQCPcGRyltRbstYz8fNC7qvY8RP9FElF%2Fv3L4Ta1pEw233KEgGF6CfJOctDRjZ8SzzACJLABQlnYKpbVEAw2paIygY6pgHVjxkjsTScz2xvJxKqGB7XvwZkILA58zkk%2FnGru0YRynBP71OxM3IR0zperoYpcnEL%2FI1YCsxcbz5T%2Fyool9%2FO39p7RIFdI5gLHAQYrrHBGvr02eBL6SIRz%2BodEbNqCRzd2FC3fVY9il0Iwmbu5p7HXAc31Xaw0cSmOk%2BKZtym0uTJI1Ee%2BS6wALM3INUuRzawtF4dKeBOPHVLjHNH5FRgQhmQaEQA&X-Amz-Signature=05ba4d61d580eb29abc361707fc6dfc0c8ebcace2f018c46e44b75ff9ca672a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
