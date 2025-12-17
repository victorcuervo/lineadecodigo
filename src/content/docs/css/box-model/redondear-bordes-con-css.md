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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RVSME3O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6jhA6cxX%2BGpFuWRavTYISgaWVyuwX1c32qtlY6OZe5AiBJRae3%2B2rmTJ5TqMTFHolU89SrdQOOCiG4qS7EoQYUoSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM79mJi08hxVOP%2F1x8KtwDTLxOohei9aDEd0pI4XpHBsBC52HdKlE3UN7q7wlUkgUaXpoKwtW4FkDiIQNBPgPogzernnvhHK4J77EuJoCqXwBtCT5mcu4dFDbEcOhU%2F%2FQeQwpb1maPDrbbCQX0Jrk75YvTTRdsXpDjwekrMvcwLqqncIgdii8kU85lwv7jHB6raJyksnz7S%2Bb6NVSoqbIhHFTQ%2BUHWi04MPgW5qFfVq0muJ1x6Nt3uMliSGesf7a5DoWz%2BFsaU%2FaD55kcwuvfX2VSaEPkfA9OAa9eFZw0vpiYZRy2g1MmF%2F5ej2fBVN6fAk%2B6jolHJ6ys2uHcMgT1Ctwxda5QPQGqK7N%2F8AsntwQj1FOR2ws%2B7tI29SCv%2F2%2BNRNytLzm%2BCHr%2Fbv%2FnK%2BzKKoXhFVFPjM8wMsY31h%2Fqr1rZ5hOVor3JYiqKM9r4kk4mZ3Bmnn5xUfZ9lo2TuqxRV8LHD%2B%2F8Y91zHTTqSP3sKWvwByHmzBNrjYsuz%2F8rfkLSNJnBG0bZiPFc9B3QLoJxM1WsGz%2FdeBBxl241XUGVuUYH5OZ5rycs3MGV%2FmtXp%2B5mn%2BHcRyx9nzhre3sW%2F6ovIU3Hs%2B1Pt4%2BAhNAZTrbDdmbLLC%2F2qaZRm1QdLt8IMWr1S6YAm7x1VcrGzKGIwj86IygY6pgHuHzasDe%2FWBdxdpPovCTKtDSnNugKk67zjsViS4eARo6R4t%2B9RbXwuL0iN9W1HiBmyF%2FWkf7rvjTsJzJdVFodhewzQ9OHNIod4304zbPdepS8E7Zw59bMoEGmxbCBY87mrn8sDvuAi5OS82g8DXoYr8QuEWdHgGqlFiU7LKe8AgR9mjgirHcNM7gtk8vBbbyUvzamoDEJwaPlwteEvgyTIqJqXI1cN&X-Amz-Signature=e7b1f72634c759c3a9385168b7c37b7767da4b88a50daf373cde1fb827258976&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RVSME3O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6jhA6cxX%2BGpFuWRavTYISgaWVyuwX1c32qtlY6OZe5AiBJRae3%2B2rmTJ5TqMTFHolU89SrdQOOCiG4qS7EoQYUoSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM79mJi08hxVOP%2F1x8KtwDTLxOohei9aDEd0pI4XpHBsBC52HdKlE3UN7q7wlUkgUaXpoKwtW4FkDiIQNBPgPogzernnvhHK4J77EuJoCqXwBtCT5mcu4dFDbEcOhU%2F%2FQeQwpb1maPDrbbCQX0Jrk75YvTTRdsXpDjwekrMvcwLqqncIgdii8kU85lwv7jHB6raJyksnz7S%2Bb6NVSoqbIhHFTQ%2BUHWi04MPgW5qFfVq0muJ1x6Nt3uMliSGesf7a5DoWz%2BFsaU%2FaD55kcwuvfX2VSaEPkfA9OAa9eFZw0vpiYZRy2g1MmF%2F5ej2fBVN6fAk%2B6jolHJ6ys2uHcMgT1Ctwxda5QPQGqK7N%2F8AsntwQj1FOR2ws%2B7tI29SCv%2F2%2BNRNytLzm%2BCHr%2Fbv%2FnK%2BzKKoXhFVFPjM8wMsY31h%2Fqr1rZ5hOVor3JYiqKM9r4kk4mZ3Bmnn5xUfZ9lo2TuqxRV8LHD%2B%2F8Y91zHTTqSP3sKWvwByHmzBNrjYsuz%2F8rfkLSNJnBG0bZiPFc9B3QLoJxM1WsGz%2FdeBBxl241XUGVuUYH5OZ5rycs3MGV%2FmtXp%2B5mn%2BHcRyx9nzhre3sW%2F6ovIU3Hs%2B1Pt4%2BAhNAZTrbDdmbLLC%2F2qaZRm1QdLt8IMWr1S6YAm7x1VcrGzKGIwj86IygY6pgHuHzasDe%2FWBdxdpPovCTKtDSnNugKk67zjsViS4eARo6R4t%2B9RbXwuL0iN9W1HiBmyF%2FWkf7rvjTsJzJdVFodhewzQ9OHNIod4304zbPdepS8E7Zw59bMoEGmxbCBY87mrn8sDvuAi5OS82g8DXoYr8QuEWdHgGqlFiU7LKe8AgR9mjgirHcNM7gtk8vBbbyUvzamoDEJwaPlwteEvgyTIqJqXI1cN&X-Amz-Signature=de0027f9c07260284b5bfb0a43853135c0ec97a22c39af72ae39fdf074ee6a68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
