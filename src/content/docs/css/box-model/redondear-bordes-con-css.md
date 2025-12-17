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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3RMSRUF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZXj%2FN5KnDagOvu2RVR5Kt3vkyobNogECrkIUqvVDI0wIgGsrflb%2BkrmBochwkdGAwhShdDF5BnJBLzLTGg5IoBvYq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDIMLG%2Fi4G6OU8%2BofVCrcAyIsONH94%2BjgU3ySLkSvZ146Cb1snIE6is%2FbUQmMkBcTsj6kybpU%2FH2zeDT8ZIC1m1u1Dn8%2BjY5Brn09CVHvdYqeh5EQ5nl6Sj7ZvID1hmcCLC2z2UYv1NW1drFNtAxdgLl3siw5NqBf2YGgQR63%2BeeiXQqEOE%2FFbUD4opB0u4ew8DrEJV7ddQKW0ie8URn8aXi8QkXLM2yi8Mcw2K4n34OZQGB%2BSP%2BwIo7ndmlBFd38Ft%2BhivY%2F6a4LQ6w2vFxfM5OVIz8Y%2BWdXHal%2FnnJjdtjYJPzGBBvICF6AngvrCvk%2BGVhY7JsTcerp7q7WhEFuPQqPJBRwb4fHrfszYeBA6p3m9GG8wgVEINvYsuaBokRMyjz2azPuX1zjkj7bHb47XwmGvPFnA7ZbWSSDA1B755%2B7jrKyBoNAs875kSp0o7J2iQcExd%2BBgRHac6oavDt7C%2FnDpNU1K%2Fe%2Flx6OLV%2B%2FoiFm9T%2Bry5sH1TXOrZfaZAZZPEaM9nokxJqKKyH44utmK6swKpL%2FWdk8fKUu3b%2FIflMcZ2O0UzoLvgsp6Rn%2FHIK7COfo7AL48fE%2BhHVyDf8BOfk7OP0cm2IecMSYw5w7qCAdc98kwnSpMglWglU0u3FQuUgq3UEHqm5elpkIMKqyiMoGOqUB1x9AZlrnA7ZLtvTj9UxAqs86nMZRoguApW6KhbSf73wUiRkHPg527MPrY46FAftToz67Bdg2G27hxIK%2BkLSZW6l1G0QtYmbNztBqCMAUdcWYd%2Bh1qPG6VnhSWcl285cmUzE9yIpp6rsa76fcxB4J%2Fz7FTYEM8J3X2KGSRXzi5CZPsXTuWBWzDNmkkL4PVLmrinF1OD6WXN1a3D4m3Nz0Ww9xeYVl&X-Amz-Signature=f55740eb28097838a36862b9128af1b5e2e0e2d82d492e9e1ee69eb7be758f54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3RMSRUF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZXj%2FN5KnDagOvu2RVR5Kt3vkyobNogECrkIUqvVDI0wIgGsrflb%2BkrmBochwkdGAwhShdDF5BnJBLzLTGg5IoBvYq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDIMLG%2Fi4G6OU8%2BofVCrcAyIsONH94%2BjgU3ySLkSvZ146Cb1snIE6is%2FbUQmMkBcTsj6kybpU%2FH2zeDT8ZIC1m1u1Dn8%2BjY5Brn09CVHvdYqeh5EQ5nl6Sj7ZvID1hmcCLC2z2UYv1NW1drFNtAxdgLl3siw5NqBf2YGgQR63%2BeeiXQqEOE%2FFbUD4opB0u4ew8DrEJV7ddQKW0ie8URn8aXi8QkXLM2yi8Mcw2K4n34OZQGB%2BSP%2BwIo7ndmlBFd38Ft%2BhivY%2F6a4LQ6w2vFxfM5OVIz8Y%2BWdXHal%2FnnJjdtjYJPzGBBvICF6AngvrCvk%2BGVhY7JsTcerp7q7WhEFuPQqPJBRwb4fHrfszYeBA6p3m9GG8wgVEINvYsuaBokRMyjz2azPuX1zjkj7bHb47XwmGvPFnA7ZbWSSDA1B755%2B7jrKyBoNAs875kSp0o7J2iQcExd%2BBgRHac6oavDt7C%2FnDpNU1K%2Fe%2Flx6OLV%2B%2FoiFm9T%2Bry5sH1TXOrZfaZAZZPEaM9nokxJqKKyH44utmK6swKpL%2FWdk8fKUu3b%2FIflMcZ2O0UzoLvgsp6Rn%2FHIK7COfo7AL48fE%2BhHVyDf8BOfk7OP0cm2IecMSYw5w7qCAdc98kwnSpMglWglU0u3FQuUgq3UEHqm5elpkIMKqyiMoGOqUB1x9AZlrnA7ZLtvTj9UxAqs86nMZRoguApW6KhbSf73wUiRkHPg527MPrY46FAftToz67Bdg2G27hxIK%2BkLSZW6l1G0QtYmbNztBqCMAUdcWYd%2Bh1qPG6VnhSWcl285cmUzE9yIpp6rsa76fcxB4J%2Fz7FTYEM8J3X2KGSRXzi5CZPsXTuWBWzDNmkkL4PVLmrinF1OD6WXN1a3D4m3Nz0Ww9xeYVl&X-Amz-Signature=ea5d19c07750f9f7bf9bf47ebf3932e000e039a495635ff1fac9233b04f863e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
