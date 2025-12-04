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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4N7P4IA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCrD%2BE7egWeSqqNnaka9qYBjSXtNxBc4YobYlwlgIOe6AIhALwel2x%2Fuw3MGXt%2FApSytOpUwSNYCuNc8KTyEu9TtvQ8Kv8DCEQQABoMNjM3NDIzMTgzODA1IgwwyAksPYk8BRYvbcAq3ANfTTDR5kbzrYuBYBoWihk5h78GcTKP1o2LBkDSLB64Yg9LVzNr5fCkUyVPiVt2En8OKoVPCmzdMRrsD53G22Zt09JTdk0b6zkOEtgGhE%2FwpldF%2BR2CT%2BUxLVOZW4ICYis707gNK5OADndMBObcD30o%2Fc4zYGz90jvzTU9EUlTnTqxMuwvnQq%2F4pAT1h0xP5X4kxof02uqX1o65nO3rHnoRHYEKNckevG4HYOi2ggUC2Tm4UuZD2RtZr7DqXvzBDR7Pxix0QCGR5GXtq2DrRkOnKVwIz3oxI7NTz3yAdTeGFi3WfG1p%2F1TS%2FMaChMGhHw4lsdpJukF%2Fs3FswVBWoXORpNYn7snfVlNkyh4VtegD7SDmw8w%2FyCdZQnUmRIepDMsXOZbIq4oUXrkVwkGGTC7m2vYYUGJHWNnGIUcqOdbg5cCOUC2C%2Bf2bGg7BGH2wkDEuyw1%2ByaNEvMHdwSzdrQermlapzcRH5TbEHI8%2F5gl8gxlomqG4eh7ChYY0%2BzJHYblRthQEomEtAWisLNeDUW9PuZzZ9QdGMMOcKd2EOodR0mMqDqfFiOmIifaePIoBYSsbv83W9YlWMGBJzYJ6UHDFFQxjW3fbxNNrtlC6YYwGjTifeIKkURkG5w4%2BMTD2yMXJBjqkAdeDZKoKwpmuKH7fbPHgQ1SP8xbhZ4Pc9gOSfYQ%2F0cDy1pYiRFFux%2BfWyMYJTD7RG%2Bz4Gzf0c6okvOCsJkmwAt7KErPtEhNZwu%2FOnynGynQgQiF9l6WGWMI6tidY%2BVb%2BB2VX5uyembWCCOIf060%2F5Jl5mGM3XIa%2B2nGA78RV9BEF%2F93lbSgSdrh4wVDOdyKorNaWMyFo2s1qKo6vptT%2FaPo4gYaM&X-Amz-Signature=d5348f79ed2473fff754318ee08405274ac922151f23666111cc1d90913cd9f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4N7P4IA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCrD%2BE7egWeSqqNnaka9qYBjSXtNxBc4YobYlwlgIOe6AIhALwel2x%2Fuw3MGXt%2FApSytOpUwSNYCuNc8KTyEu9TtvQ8Kv8DCEQQABoMNjM3NDIzMTgzODA1IgwwyAksPYk8BRYvbcAq3ANfTTDR5kbzrYuBYBoWihk5h78GcTKP1o2LBkDSLB64Yg9LVzNr5fCkUyVPiVt2En8OKoVPCmzdMRrsD53G22Zt09JTdk0b6zkOEtgGhE%2FwpldF%2BR2CT%2BUxLVOZW4ICYis707gNK5OADndMBObcD30o%2Fc4zYGz90jvzTU9EUlTnTqxMuwvnQq%2F4pAT1h0xP5X4kxof02uqX1o65nO3rHnoRHYEKNckevG4HYOi2ggUC2Tm4UuZD2RtZr7DqXvzBDR7Pxix0QCGR5GXtq2DrRkOnKVwIz3oxI7NTz3yAdTeGFi3WfG1p%2F1TS%2FMaChMGhHw4lsdpJukF%2Fs3FswVBWoXORpNYn7snfVlNkyh4VtegD7SDmw8w%2FyCdZQnUmRIepDMsXOZbIq4oUXrkVwkGGTC7m2vYYUGJHWNnGIUcqOdbg5cCOUC2C%2Bf2bGg7BGH2wkDEuyw1%2ByaNEvMHdwSzdrQermlapzcRH5TbEHI8%2F5gl8gxlomqG4eh7ChYY0%2BzJHYblRthQEomEtAWisLNeDUW9PuZzZ9QdGMMOcKd2EOodR0mMqDqfFiOmIifaePIoBYSsbv83W9YlWMGBJzYJ6UHDFFQxjW3fbxNNrtlC6YYwGjTifeIKkURkG5w4%2BMTD2yMXJBjqkAdeDZKoKwpmuKH7fbPHgQ1SP8xbhZ4Pc9gOSfYQ%2F0cDy1pYiRFFux%2BfWyMYJTD7RG%2Bz4Gzf0c6okvOCsJkmwAt7KErPtEhNZwu%2FOnynGynQgQiF9l6WGWMI6tidY%2BVb%2BB2VX5uyembWCCOIf060%2F5Jl5mGM3XIa%2B2nGA78RV9BEF%2F93lbSgSdrh4wVDOdyKorNaWMyFo2s1qKo6vptT%2FaPo4gYaM&X-Amz-Signature=e3364b4317edf812fd971355b8cb365b0a3d5659be15e5db122819e900154a6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
