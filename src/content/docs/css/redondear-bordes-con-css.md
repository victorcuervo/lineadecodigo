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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6G5F7H6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCWQxV96cMtF2A6OGm7sna8qcLcBmODWlIyR2YwsO4eTwIhANq4Rmk012OrV5maJn%2FVSFtiHAGGoWkR8DxDMoY3VHXmKv8DCEAQABoMNjM3NDIzMTgzODA1Igy7bViX%2BrepwmRg45cq3ANk6rljW17obY33tOEL3k6AqBn5G9dB8zHDTl%2FJ5dhpV%2FlDs3v1KRYC62UA%2FlKbSwCiS7ES%2BSNoHUxy1LNIfid11RtuL%2Bi1Nd%2FqRdJkn0fddzodDntSVzZyQktRjwPLtC58ePYKIIQ7KLpBjoxOg7D%2BibxKISXcFnKBW4%2FL7AKLDYuoJwrodpo1nLXK%2B9GSj3AYGmHgCYsQbFyPMXn1Cl5q%2Bev6Sm72aNSqkT7bOkwuxfgtWogZZ9lfxLaBXINyx%2BKgUkLvTOh0am2unRFmxRdK2%2FhdsIFzSyP443eqVuN6ZY1wASMI0fj4%2ByN2L5QsqLiq7f1%2Fj3QW2l7vKCNrSO8FangSE4b5361NbVbsSDjEZG46FA0EW9ajH6GC%2FosheFdn36vWzTaOoUiU4zmHoMBHulWca5xVy9GXyFA%2BYgKZRcAiCYG2hy1PqCApgTu5ryP0i1w59nF36Sm5krL%2F6mg4%2F495NpAfsqrC9X6vz6FzMUStXTbwkipJPrTUtjhpc%2F6t2f6OlJ0vsGgkyiz%2F0G14OoWXdE4QDfC0EEKnwWqQe3qIfX9nlGTrb2yhg4ddC%2FhfDY01UvdrpHyQf%2BO%2FIYzmii2Fl5oXkhVrHnEJd76MoLJrQpePSu%2Fd%2FKySIDDA6MTJBjqkAVwl%2FSIP9oCmbh8J4b%2B1X5t0a5Xafqqc%2FsflXzaritmZtyv8bbUWuoyY7sWDnyB%2F4kqYJLOHdPnLKhfOo%2FMp3CLg39sesVly1JG6aokTEPtNRUv8RXHr6wzxLcDeXjdevGdtMQgkeN%2BdScd%2FTV0sriMFiUBovi360T0U5GSOyRRIVeLafQB5HxVpWNd%2BRKpEuP7UBV8B%2BW96Hb9iw48Q6x76jpXe&X-Amz-Signature=4851f037263ada8b21ddd8c66f315513b8c33c46d43be5833d4560eca461ffde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6G5F7H6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCWQxV96cMtF2A6OGm7sna8qcLcBmODWlIyR2YwsO4eTwIhANq4Rmk012OrV5maJn%2FVSFtiHAGGoWkR8DxDMoY3VHXmKv8DCEAQABoMNjM3NDIzMTgzODA1Igy7bViX%2BrepwmRg45cq3ANk6rljW17obY33tOEL3k6AqBn5G9dB8zHDTl%2FJ5dhpV%2FlDs3v1KRYC62UA%2FlKbSwCiS7ES%2BSNoHUxy1LNIfid11RtuL%2Bi1Nd%2FqRdJkn0fddzodDntSVzZyQktRjwPLtC58ePYKIIQ7KLpBjoxOg7D%2BibxKISXcFnKBW4%2FL7AKLDYuoJwrodpo1nLXK%2B9GSj3AYGmHgCYsQbFyPMXn1Cl5q%2Bev6Sm72aNSqkT7bOkwuxfgtWogZZ9lfxLaBXINyx%2BKgUkLvTOh0am2unRFmxRdK2%2FhdsIFzSyP443eqVuN6ZY1wASMI0fj4%2ByN2L5QsqLiq7f1%2Fj3QW2l7vKCNrSO8FangSE4b5361NbVbsSDjEZG46FA0EW9ajH6GC%2FosheFdn36vWzTaOoUiU4zmHoMBHulWca5xVy9GXyFA%2BYgKZRcAiCYG2hy1PqCApgTu5ryP0i1w59nF36Sm5krL%2F6mg4%2F495NpAfsqrC9X6vz6FzMUStXTbwkipJPrTUtjhpc%2F6t2f6OlJ0vsGgkyiz%2F0G14OoWXdE4QDfC0EEKnwWqQe3qIfX9nlGTrb2yhg4ddC%2FhfDY01UvdrpHyQf%2BO%2FIYzmii2Fl5oXkhVrHnEJd76MoLJrQpePSu%2Fd%2FKySIDDA6MTJBjqkAVwl%2FSIP9oCmbh8J4b%2B1X5t0a5Xafqqc%2FsflXzaritmZtyv8bbUWuoyY7sWDnyB%2F4kqYJLOHdPnLKhfOo%2FMp3CLg39sesVly1JG6aokTEPtNRUv8RXHr6wzxLcDeXjdevGdtMQgkeN%2BdScd%2FTV0sriMFiUBovi360T0U5GSOyRRIVeLafQB5HxVpWNd%2BRKpEuP7UBV8B%2BW96Hb9iw48Q6x76jpXe&X-Amz-Signature=57d1c7bed03f7adcf20495141f023653fd043ee1b14ec98ad88a0f937d192048&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
