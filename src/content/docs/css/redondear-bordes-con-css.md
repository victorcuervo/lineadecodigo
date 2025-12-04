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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662SX2ZVU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnaepkbZwLjE8e64retvN6SPL6%2Bl5%2F5eyCEJt5Jtr91AiEA8C5%2F%2F%2Ba9fHDo9usaDK9tdaaB6%2Ff%2B2fPHU73XFzz7n9oq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDNHlDSVh4eRyqhxSWircA6WNAAqGM2pQ35XbD%2BwBxB0fRn%2FuLch3MlBHqQnq9VFNBLk8W%2BqgjWrgKXLLS491PHFaKgm3yQSm81mU9DT0hYauH8L1IbpvF2CJziSm7%2Fw%2F9wnOqDqY8G5Q4uRCmtkoLscKlLWt8msMyRRUkj4CdV2VxDn2oAs80ay8ge8qxfEMtn7QhhMhPK%2FvdkxzeefQk3HnXd4PEb0zL%2BCfWWEhANAFK%2BbY5kPAPK4htySJSZe4YzF2uXOBVyXVbwc%2BQqmFmDRvD65XPIBxIgLSpRBnEed0AUu6C7Fxjg6x4ATP3DdrFX6dafmlCN05u76PuZ20ACSEqaIKsV5UnhG4jwafF62%2FsNeJHU0ZxYvkluL10bzzfBHUv6CCqcXLBi0BTuug4C0JFI2VEnwTDLckFgQvCLz5cS6%2FPUXM4I4JCEnHTNKyrRXtNJ5aRqz9xKsNHZtWKFuZnZ9TrPcIpjMuzs1KowE1ktwvuMf6Q1EiM2%2Fyf7XzP5ZRhwh%2FhfGUkS0sDYig0wOpi3XPvpoDL5DYqdOU2leMS1%2FYEe43odnh8W7eJ8Ak0aq5oEs%2B8iP0VSURzd7n9W0Em62yoMQuiA1Khh6MOOne0cLmXBXyd1p%2FfotyieG%2B4VOLWWw2UnDtQZwGMNHcxskGOqUBysWSn%2FH8EBbtlN1ZCDleVGwgJZbe%2FFYBKkp9sWHuK%2BaKZAxiTMgWZYw90PDBRnY2jzJDgsc%2BPrt9INhUyX3Tn9BtJ364PvvMUztQff5Qw%2BlpHpo82lJitg7DMe%2F2R2UxUnTpJtId7CZtfHisxmzB0OxdNWVxcFVWQwUsHEXsY8iDMUOG0oCopJbWP9NFtK8tJuLdJUb6IvaRn5CQW%2BcGpcqQJrUh&X-Amz-Signature=0b76738364bf64bcae774318457806cb7deab4e811848942010d646c90412790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662SX2ZVU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnaepkbZwLjE8e64retvN6SPL6%2Bl5%2F5eyCEJt5Jtr91AiEA8C5%2F%2F%2Ba9fHDo9usaDK9tdaaB6%2Ff%2B2fPHU73XFzz7n9oq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDNHlDSVh4eRyqhxSWircA6WNAAqGM2pQ35XbD%2BwBxB0fRn%2FuLch3MlBHqQnq9VFNBLk8W%2BqgjWrgKXLLS491PHFaKgm3yQSm81mU9DT0hYauH8L1IbpvF2CJziSm7%2Fw%2F9wnOqDqY8G5Q4uRCmtkoLscKlLWt8msMyRRUkj4CdV2VxDn2oAs80ay8ge8qxfEMtn7QhhMhPK%2FvdkxzeefQk3HnXd4PEb0zL%2BCfWWEhANAFK%2BbY5kPAPK4htySJSZe4YzF2uXOBVyXVbwc%2BQqmFmDRvD65XPIBxIgLSpRBnEed0AUu6C7Fxjg6x4ATP3DdrFX6dafmlCN05u76PuZ20ACSEqaIKsV5UnhG4jwafF62%2FsNeJHU0ZxYvkluL10bzzfBHUv6CCqcXLBi0BTuug4C0JFI2VEnwTDLckFgQvCLz5cS6%2FPUXM4I4JCEnHTNKyrRXtNJ5aRqz9xKsNHZtWKFuZnZ9TrPcIpjMuzs1KowE1ktwvuMf6Q1EiM2%2Fyf7XzP5ZRhwh%2FhfGUkS0sDYig0wOpi3XPvpoDL5DYqdOU2leMS1%2FYEe43odnh8W7eJ8Ak0aq5oEs%2B8iP0VSURzd7n9W0Em62yoMQuiA1Khh6MOOne0cLmXBXyd1p%2FfotyieG%2B4VOLWWw2UnDtQZwGMNHcxskGOqUBysWSn%2FH8EBbtlN1ZCDleVGwgJZbe%2FFYBKkp9sWHuK%2BaKZAxiTMgWZYw90PDBRnY2jzJDgsc%2BPrt9INhUyX3Tn9BtJ364PvvMUztQff5Qw%2BlpHpo82lJitg7DMe%2F2R2UxUnTpJtId7CZtfHisxmzB0OxdNWVxcFVWQwUsHEXsY8iDMUOG0oCopJbWP9NFtK8tJuLdJUb6IvaRn5CQW%2BcGpcqQJrUh&X-Amz-Signature=ad97ba16b6523f95ef11511dedd31c51a8d9d0d9b90ddd66b3071f1648e6bdfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
