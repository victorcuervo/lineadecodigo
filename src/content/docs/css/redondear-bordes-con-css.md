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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z4P5PS2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T052605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgw1oSq3I8P4zBsjn20AWY2J1hJ8es7h6NapXGIpIGGAiEAgLoSPdu8f16Ol8tq7np1e1mAg2c6667tV21%2B0CZ5KSYqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1H0XCYzuzk2ZimEircA37Eb8U%2FWQ7JWljGSZOrSmO32cIaaULvGeMk4JtnjFtSwo6UN%2BYGG%2FkTaK18Myqg1udjpnZ7AhuQTbz6I6s%2FJBxeQcJhLMuh%2Fd4XD3U538Q%2BaRI%2BZlaynClsgqbyL3fBCVFRWd0qjToXZc%2FXMVyj8uX%2FsWC4EIboXwFbD%2FvfmE2R%2F%2F3n%2F6XwDSwA9eH0saHumj5vw0k%2B%2BQElVmEafBAExytA00QcD3KGIlZ1yzzEE9fb%2FmLApeqPK56ybPbQ0jZ1HSR09eIEn%2FevCphplZEg203NTWufEztBpQkGMFKUMgd1Y4n2Q05eT295EV7WxZzu8EhxiQwGx34ZjBXEZF6F3OeT6inFMk7iScz2mAdwBb0%2BAv6e5dkZKyiwtB8rx%2BOUx1teSS7LhK6vI4tKh8PHl%2FZdmim3K59I43tH1KidIzcjaJUhMmzzy8qkgCFS9VuDqDqt0IfDiCV6xIW5P7X4zBTEz5co0bAji5X0uBzS11Md%2FqMOg8uvY5AqdwXbvu%2F4ccLXOZcr2AtAMJlher1znhkl7x0hUNcPqEpG5HFC0GjGj3HT%2Bo9cISdrYj5Z798FG1%2BBDWC1ym4GYxFyyYu6VLcoqMbdd%2FAdzV341%2Bjr88igJ%2BaX6lv2NuqJNoVbMIfl3skGOqUBXt8i4usVPeWaCHbgcwx%2BA0lSmGDKDtIYbGC3F7BULI9%2F2luJoeebRZGBlfEcLSSqoJ9ZO5YHe2xSW7jfi3qQwFSqrt5S6PE%2Fxf4olcjLrUhXNLMFjuhWyQPehYq3ckkdxOdMAXj9xF1kSJKt%2FNqmd8izjkpOcH2pXeMAwONcfkKkPQTrvMP84h%2F8Xd63Y3syYDVL90ef4vulLK2MFRmvWZ66ppF5&X-Amz-Signature=4a96a2d3a615a2a95f4f8d1608a39741ce81e2a31b75539f0ecf78de5e9ac996&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z4P5PS2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T052605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgw1oSq3I8P4zBsjn20AWY2J1hJ8es7h6NapXGIpIGGAiEAgLoSPdu8f16Ol8tq7np1e1mAg2c6667tV21%2B0CZ5KSYqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1H0XCYzuzk2ZimEircA37Eb8U%2FWQ7JWljGSZOrSmO32cIaaULvGeMk4JtnjFtSwo6UN%2BYGG%2FkTaK18Myqg1udjpnZ7AhuQTbz6I6s%2FJBxeQcJhLMuh%2Fd4XD3U538Q%2BaRI%2BZlaynClsgqbyL3fBCVFRWd0qjToXZc%2FXMVyj8uX%2FsWC4EIboXwFbD%2FvfmE2R%2F%2F3n%2F6XwDSwA9eH0saHumj5vw0k%2B%2BQElVmEafBAExytA00QcD3KGIlZ1yzzEE9fb%2FmLApeqPK56ybPbQ0jZ1HSR09eIEn%2FevCphplZEg203NTWufEztBpQkGMFKUMgd1Y4n2Q05eT295EV7WxZzu8EhxiQwGx34ZjBXEZF6F3OeT6inFMk7iScz2mAdwBb0%2BAv6e5dkZKyiwtB8rx%2BOUx1teSS7LhK6vI4tKh8PHl%2FZdmim3K59I43tH1KidIzcjaJUhMmzzy8qkgCFS9VuDqDqt0IfDiCV6xIW5P7X4zBTEz5co0bAji5X0uBzS11Md%2FqMOg8uvY5AqdwXbvu%2F4ccLXOZcr2AtAMJlher1znhkl7x0hUNcPqEpG5HFC0GjGj3HT%2Bo9cISdrYj5Z798FG1%2BBDWC1ym4GYxFyyYu6VLcoqMbdd%2FAdzV341%2Bjr88igJ%2BaX6lv2NuqJNoVbMIfl3skGOqUBXt8i4usVPeWaCHbgcwx%2BA0lSmGDKDtIYbGC3F7BULI9%2F2luJoeebRZGBlfEcLSSqoJ9ZO5YHe2xSW7jfi3qQwFSqrt5S6PE%2Fxf4olcjLrUhXNLMFjuhWyQPehYq3ckkdxOdMAXj9xF1kSJKt%2FNqmd8izjkpOcH2pXeMAwONcfkKkPQTrvMP84h%2F8Xd63Y3syYDVL90ef4vulLK2MFRmvWZ66ppF5&X-Amz-Signature=37c894ce0b4eb306ba1be88bd0e26d53e80207f50bffa163cad4cdf84b942459&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
