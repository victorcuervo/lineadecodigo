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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSAZU4YD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T114438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICttrHYjxed5rsIK8GYLGg7%2FbOUND724ebACCeCAL%2FYUAiAgouubxv2i6pt%2FVZHeJD3xJgXN27EOQl33%2B5W%2FhmtYfSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt67iXIObAblcmO6bKtwD0v3EBgNtWHiVli%2FnVr4fN7iS4RBxM1iQYXbkBU73c8cZVrgEOgQQRnETon6cp8KoUWG4U52N%2BSS%2Fh5PNtMm9YC8B%2BmJkOojscq7lgTasPsCz%2BYw%2FRbyr4N93iqQsHZswGuVWHgCJYTV7xqTXYfshRLdvk7wtcaYupsmTvCt7kMdZOl2JhkmoCwFizsx0I5VnVIKx806lDRiPlIZ2fdUu0OCTdW07xxLVp3S7AjxQKG90ShsSjpuPIF47i9T38eYozrhfl%2BN0LIV30P3Jq7yTNO%2BUGLYY6BF64gf9nXCDRRdel7PkxMzHAJjDBsCv7qLgwrHtGrIpdgrmtWSTXc2rVZy2Lreb7gudFCZfUrQgN796alS%2BO89DNumuWEOuuiYzDDs1EF70%2B5yolhDJlVlMlUx8NbjDsr8HbrpdkiIVJUQqtQI2WvuxfOAZEucqkuV%2Bsql95VrMcRfrDZU3mavWb6cRC7GThTw7Va2wFgFg8uVClgXrq20IM8iLlNVWhWEL3PKKXzw70Gu3xR6j2%2F%2FjixgQqPV8SczpUJHhy1Hy5EdhG%2BIKvETpzj59dL6fGP0hTPx8a%2FD7ltQnSKXd6%2BzSnLQDNKYtRUqSWLBGrlxEzlGt4euRK9JacoQOdaEwsprVyQY6pgELFz9MmvVn5mFEsB4Cs9k74HRbcvymWbgr5pLJAwyTKg5WQj2rtO4vhcinBWFO0W7rWpOf6KOSoLGj%2FigK5FuyJvhbNTw918CHuLkjKzjRwi4mlzW4Tu%2BWhzvCO0V0pNT0trSFYruEZDr2MgFEXhKm15lhVNTt%2BWwiIzyGDwMFaw129qvzoVyb4%2Fo0I3WdtXH8wPIXAfKc8o11WbDN8lyDckYpbU2v&X-Amz-Signature=80217567cf6a66899a0aae76481ccc62b6faf863e15b3046d3db66eb69c7c7fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSAZU4YD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T114438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICttrHYjxed5rsIK8GYLGg7%2FbOUND724ebACCeCAL%2FYUAiAgouubxv2i6pt%2FVZHeJD3xJgXN27EOQl33%2B5W%2FhmtYfSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt67iXIObAblcmO6bKtwD0v3EBgNtWHiVli%2FnVr4fN7iS4RBxM1iQYXbkBU73c8cZVrgEOgQQRnETon6cp8KoUWG4U52N%2BSS%2Fh5PNtMm9YC8B%2BmJkOojscq7lgTasPsCz%2BYw%2FRbyr4N93iqQsHZswGuVWHgCJYTV7xqTXYfshRLdvk7wtcaYupsmTvCt7kMdZOl2JhkmoCwFizsx0I5VnVIKx806lDRiPlIZ2fdUu0OCTdW07xxLVp3S7AjxQKG90ShsSjpuPIF47i9T38eYozrhfl%2BN0LIV30P3Jq7yTNO%2BUGLYY6BF64gf9nXCDRRdel7PkxMzHAJjDBsCv7qLgwrHtGrIpdgrmtWSTXc2rVZy2Lreb7gudFCZfUrQgN796alS%2BO89DNumuWEOuuiYzDDs1EF70%2B5yolhDJlVlMlUx8NbjDsr8HbrpdkiIVJUQqtQI2WvuxfOAZEucqkuV%2Bsql95VrMcRfrDZU3mavWb6cRC7GThTw7Va2wFgFg8uVClgXrq20IM8iLlNVWhWEL3PKKXzw70Gu3xR6j2%2F%2FjixgQqPV8SczpUJHhy1Hy5EdhG%2BIKvETpzj59dL6fGP0hTPx8a%2FD7ltQnSKXd6%2BzSnLQDNKYtRUqSWLBGrlxEzlGt4euRK9JacoQOdaEwsprVyQY6pgELFz9MmvVn5mFEsB4Cs9k74HRbcvymWbgr5pLJAwyTKg5WQj2rtO4vhcinBWFO0W7rWpOf6KOSoLGj%2FigK5FuyJvhbNTw918CHuLkjKzjRwi4mlzW4Tu%2BWhzvCO0V0pNT0trSFYruEZDr2MgFEXhKm15lhVNTt%2BWwiIzyGDwMFaw129qvzoVyb4%2Fo0I3WdtXH8wPIXAfKc8o11WbDN8lyDckYpbU2v&X-Amz-Signature=bfafd6be381077e5c90102523361f80f81e8da5bcbdde678f0c8a17bd6124417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
