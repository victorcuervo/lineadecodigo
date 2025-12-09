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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKSNFJOJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T095827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfjd50m0qwhhv%2BP1ncFT73Dr2cynzCOGa2eXFgkwk5ZgIhAJxfwCZWPAteLz93Xj1umM%2BDTpaUp%2FacLEEJcaMZV6cMKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp0JrztceqPx7Yfokq3AN9vacydDB0nPp62iyIehTaAa0Up3l%2ByO65c1cOCy2oe6lxVxe6phpVVfIul8OJOlYz0OxAUD6UD0pbeo71l2jChk1eOPhDyZnTXpM6aA8baFC%2FANts6QL0g9Nlpl3X99CcIW8Q%2BcJj7nmsB7KEleTnckmhTQKAzrFTEE9ZQ3XqcWFhaFi4PEw7MFRdqNsog2YGYF0ASQkjJS8sd1i8RcK5zUVQhhquoRV5nsfRyBpV1qeys9ugNF%2FkpqU%2BPAT%2FdsH2zQyRz%2F7XdKl95HWgC8J1dCx8LOydn77L2v2mLLsMOvJ8jMmloa1Er0CxNiM2vyqmYxMFvl%2BJ2V1fG2BBbWAtnRZHgquMkVo1CBYF9qruOvQnh5OMZFPMUVzAW5cT%2FF5l1kn4%2BI%2BqXVZcyFEq3kJx5JpgWBL8DnJnKWtm3JlcwkaMrDYzuVQLKyAB4yaYP65QjyIoc504N%2BVo%2BrRA%2FLlt2YFVUSR7oAmh6IEZHgoCS4x8ST%2BxmHMpoWYw0aPa4HIBrzrgt3LO9d6zJ0uR%2BLzrC2jNEGcmFP3eqt1J5f4Hgmug5w94NKzjmshGTJadRXNVIFH7RthDEMvZRY%2BLaKZ7oMDMhWZukYKOycaquOSkg0lTPXypUBid87B8oTD5w9%2FJBjqkAYmd%2F3EGR%2FCfT0YhZ1QrnHA7DeXuUpn9POJpe6IpDURKy2GSnz2XsL%2FxnQ8sTpIia6eDLN3WtzY%2BDjbgiVyK4vFSgxWvUFWGsAJGsID0TB7ArwpKdOjD%2FWXOMmXJlblbEfKaKuhsWPWkM3zBg6Sr%2B9%2FUz%2FTrYpaQtkLNlDrCNaxCUi3UDXCHm50KFri%2FYoIXVh73bzXd3S%2FF6XwaIL4aeab4y%2Fms&X-Amz-Signature=581559280394cc9c3d3bb7f3d761956b99fd324ff6c494542de83f6d35f0d77d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKSNFJOJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T095827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfjd50m0qwhhv%2BP1ncFT73Dr2cynzCOGa2eXFgkwk5ZgIhAJxfwCZWPAteLz93Xj1umM%2BDTpaUp%2FacLEEJcaMZV6cMKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp0JrztceqPx7Yfokq3AN9vacydDB0nPp62iyIehTaAa0Up3l%2ByO65c1cOCy2oe6lxVxe6phpVVfIul8OJOlYz0OxAUD6UD0pbeo71l2jChk1eOPhDyZnTXpM6aA8baFC%2FANts6QL0g9Nlpl3X99CcIW8Q%2BcJj7nmsB7KEleTnckmhTQKAzrFTEE9ZQ3XqcWFhaFi4PEw7MFRdqNsog2YGYF0ASQkjJS8sd1i8RcK5zUVQhhquoRV5nsfRyBpV1qeys9ugNF%2FkpqU%2BPAT%2FdsH2zQyRz%2F7XdKl95HWgC8J1dCx8LOydn77L2v2mLLsMOvJ8jMmloa1Er0CxNiM2vyqmYxMFvl%2BJ2V1fG2BBbWAtnRZHgquMkVo1CBYF9qruOvQnh5OMZFPMUVzAW5cT%2FF5l1kn4%2BI%2BqXVZcyFEq3kJx5JpgWBL8DnJnKWtm3JlcwkaMrDYzuVQLKyAB4yaYP65QjyIoc504N%2BVo%2BrRA%2FLlt2YFVUSR7oAmh6IEZHgoCS4x8ST%2BxmHMpoWYw0aPa4HIBrzrgt3LO9d6zJ0uR%2BLzrC2jNEGcmFP3eqt1J5f4Hgmug5w94NKzjmshGTJadRXNVIFH7RthDEMvZRY%2BLaKZ7oMDMhWZukYKOycaquOSkg0lTPXypUBid87B8oTD5w9%2FJBjqkAYmd%2F3EGR%2FCfT0YhZ1QrnHA7DeXuUpn9POJpe6IpDURKy2GSnz2XsL%2FxnQ8sTpIia6eDLN3WtzY%2BDjbgiVyK4vFSgxWvUFWGsAJGsID0TB7ArwpKdOjD%2FWXOMmXJlblbEfKaKuhsWPWkM3zBg6Sr%2B9%2FUz%2FTrYpaQtkLNlDrCNaxCUi3UDXCHm50KFri%2FYoIXVh73bzXd3S%2FF6XwaIL4aeab4y%2Fms&X-Amz-Signature=b1562417d942c163780c4a5e72e23512812d8efb84e919f9082b374394c03555&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
