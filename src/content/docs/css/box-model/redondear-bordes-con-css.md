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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBRDAAU6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEpu2gGL4WKs65Byzt4bgsdxwvhv2y0qM5djOZP0v20LAiEAxyUA7GZWDBVU4DSoQvrNqwWLkeR7O82qea8Gwc2wzsgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCoV7zMVVGUUrt7U9CrcA7A%2FZ60E6oJLXMjkCWY6JnsdfFIdFtJOYg5i5ja5vpwWdxXJS0MfHK61LlKxJ4bW6kwnMfNPx%2FEud%2FhkepVbLOcCBjCadEapzz3ElYpXcz8vvkHvB%2BiNrZOBz%2BuYB2f5y2G8IndDl9qr0lDOJuGRr%2B79dvuLvVCvgB6LUxmvELDDv19m%2FxE%2B6bYHMFc5nBcsMmY59cDAM%2BiM8mtWJub%2BhJDlR88OuW5oXH%2F6Jk%2BJ5mlT0bvCXgx0ZllqVCdz0VBSRfVoTIxHjFbIVwprBJrj1fz%2F1nYBPH2uLQB9ismCSdogyHJyjmt26%2BL5XAUhVkaQrVJzAo4V7VTMY0D3Ou%2FhLAzMxCDjrysW8xn66nHvcWHCWIp5UQNCGyylCc5hzXK9fN5TWQkUlqHVBOCFFHeEK9WgwdGexjRxCV%2FvVQMWath%2FGtjMSw4Mf9DAEnjpJa9YS%2FRjyqGSS2XwOmCmtNv%2B74lRvTKDgyMej3aJvl2WCmcXCstD2z%2FRnncAos9eSkvR%2BwK%2BQ60f%2BjAeH2F4SHM7NIeLdWwMJ241r5DeqBj6RM3nneswc1sw%2FfasPgh81xM9MNCNh8350eBwJaQbtDFBJ%2FMO4MaJUUHVJWc3sRNJhT3dNrPa4tIv2AHPj8WsML6XiMoGOqUBetmkddGWDuwCZygjoSym4MFoo1STQPQHONoQsjt7eOvqs8Q6xwltgGbv9wHo2d0re0Ux9KvW%2Ba5p%2BXQ13Qki9AAULDcEraB431eVrWonUaXs7cDV%2Bh7ptJyJxsj%2BTmaBMWbTCvag5ifqScnhKCG72AmKxQISkaNA4nlfgAG%2FkxvUt2TNME0SLtRLzi9PtoL4A4csReD2FZSz9Xhdcq2zejCpEEl9&X-Amz-Signature=68844b5118d7760c5f23222ea988dcbdbc561790e20f0e8f872c9394aaca3dda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBRDAAU6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEpu2gGL4WKs65Byzt4bgsdxwvhv2y0qM5djOZP0v20LAiEAxyUA7GZWDBVU4DSoQvrNqwWLkeR7O82qea8Gwc2wzsgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCoV7zMVVGUUrt7U9CrcA7A%2FZ60E6oJLXMjkCWY6JnsdfFIdFtJOYg5i5ja5vpwWdxXJS0MfHK61LlKxJ4bW6kwnMfNPx%2FEud%2FhkepVbLOcCBjCadEapzz3ElYpXcz8vvkHvB%2BiNrZOBz%2BuYB2f5y2G8IndDl9qr0lDOJuGRr%2B79dvuLvVCvgB6LUxmvELDDv19m%2FxE%2B6bYHMFc5nBcsMmY59cDAM%2BiM8mtWJub%2BhJDlR88OuW5oXH%2F6Jk%2BJ5mlT0bvCXgx0ZllqVCdz0VBSRfVoTIxHjFbIVwprBJrj1fz%2F1nYBPH2uLQB9ismCSdogyHJyjmt26%2BL5XAUhVkaQrVJzAo4V7VTMY0D3Ou%2FhLAzMxCDjrysW8xn66nHvcWHCWIp5UQNCGyylCc5hzXK9fN5TWQkUlqHVBOCFFHeEK9WgwdGexjRxCV%2FvVQMWath%2FGtjMSw4Mf9DAEnjpJa9YS%2FRjyqGSS2XwOmCmtNv%2B74lRvTKDgyMej3aJvl2WCmcXCstD2z%2FRnncAos9eSkvR%2BwK%2BQ60f%2BjAeH2F4SHM7NIeLdWwMJ241r5DeqBj6RM3nneswc1sw%2FfasPgh81xM9MNCNh8350eBwJaQbtDFBJ%2FMO4MaJUUHVJWc3sRNJhT3dNrPa4tIv2AHPj8WsML6XiMoGOqUBetmkddGWDuwCZygjoSym4MFoo1STQPQHONoQsjt7eOvqs8Q6xwltgGbv9wHo2d0re0Ux9KvW%2Ba5p%2BXQ13Qki9AAULDcEraB431eVrWonUaXs7cDV%2Bh7ptJyJxsj%2BTmaBMWbTCvag5ifqScnhKCG72AmKxQISkaNA4nlfgAG%2FkxvUt2TNME0SLtRLzi9PtoL4A4csReD2FZSz9Xhdcq2zejCpEEl9&X-Amz-Signature=6ffb8ac8047d3fefa570a1d7af3b9b25d8b5edc5d5f5a821476c4af065de215f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
