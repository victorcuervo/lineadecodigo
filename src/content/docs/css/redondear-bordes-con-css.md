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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKNSVTWY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T020815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHupjyF6jqBLvC3aIH4et34qPdCFtehvDIlNRw9E1pZJAiAPJulnFh7stfcPeNPA8MC16de1mnXOm3RG%2FrrG%2FKB%2B4yqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6T%2BekxiaqBjBlTtfKtwDySlKc%2FQKAMT4PkNX5PdzDhP%2F4EvbC979UH6fzwv%2Fe4heCeN4WeH9ZcqQ5Kx8wtsfbxNJN5WKi38LA9gszqfSCbZMlHOSunU3fnUsU0c9kq2IpWCkpjxtu2qTSaAIPVIuAu73KVegvyj6gIzNdxWobEuHlEWpcZdh7PrlvzDRPy%2F39PPp7VUB%2B0H3QonxxdtfIqw8pExtFey%2B%2F7MxZCEhGNLJvjca8JTcsSE0vVRyrWdTaitCdr3rOMUYYhpE3VGP9DW1iSrAE4zsvXjTzjQQoqei5I3KzNWM9S1Sz8aQUNgHt9cIVhhlIrLmB1wQOCFlZFUOOO5xZqkEIczeIFzDTDGOEfh3qxDLVasOAYLApZSw1oT%2BKyNYpCJ8Kc3ngV%2B48UfwinQC%2B8Yc%2Fj3e4iHr65%2FoBJJZV7qCY739WSUgg3VmUoTEynXRjVkaDaPJvOp3wj4FIcq2gWlPN2%2FUYIXqcph2%2FsRNXNp9A3xBC25SjERy2iAhN0Ox347KVkmZZ6EAWE3veIj9Pdoc%2BGHQLyb0yYgk2AR99BYou8jvT%2Fktld4PvFv%2BxzyHEMLq4TqDzyNyZFaU5qddYqdJqaknjmdbBRDeIZWp0vvZdjDO1ddZP1mxjhocj8cceOYHOP8wu%2FLdyQY6pgGNsOlpQqfK2lQgd%2FckEcHtpsQZKyn0ftMvvK4hIpzqcOmv4opsgfDd33%2F6rqaqRr5RMm0GyToBwEfQb2C6t6bdaqkvp4ilwMfDKxLSNjCvduN8ZMrwOsrVv0KQSvJ%2BE8xp6HZOoGkHtbk9Ju%2FIv7LHYdofRU6YZEgLFWxWl2UWN%2B1KBYbYfZw3wFmjajxcdzRYvtF3z1N5a1p%2FeV1VurlFAbGQ5qa%2F&X-Amz-Signature=2f8e9ec69012603866a3d480ac29be33bad9cc2e9126b092d7b304f194bd6ace&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKNSVTWY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T020815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHupjyF6jqBLvC3aIH4et34qPdCFtehvDIlNRw9E1pZJAiAPJulnFh7stfcPeNPA8MC16de1mnXOm3RG%2FrrG%2FKB%2B4yqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6T%2BekxiaqBjBlTtfKtwDySlKc%2FQKAMT4PkNX5PdzDhP%2F4EvbC979UH6fzwv%2Fe4heCeN4WeH9ZcqQ5Kx8wtsfbxNJN5WKi38LA9gszqfSCbZMlHOSunU3fnUsU0c9kq2IpWCkpjxtu2qTSaAIPVIuAu73KVegvyj6gIzNdxWobEuHlEWpcZdh7PrlvzDRPy%2F39PPp7VUB%2B0H3QonxxdtfIqw8pExtFey%2B%2F7MxZCEhGNLJvjca8JTcsSE0vVRyrWdTaitCdr3rOMUYYhpE3VGP9DW1iSrAE4zsvXjTzjQQoqei5I3KzNWM9S1Sz8aQUNgHt9cIVhhlIrLmB1wQOCFlZFUOOO5xZqkEIczeIFzDTDGOEfh3qxDLVasOAYLApZSw1oT%2BKyNYpCJ8Kc3ngV%2B48UfwinQC%2B8Yc%2Fj3e4iHr65%2FoBJJZV7qCY739WSUgg3VmUoTEynXRjVkaDaPJvOp3wj4FIcq2gWlPN2%2FUYIXqcph2%2FsRNXNp9A3xBC25SjERy2iAhN0Ox347KVkmZZ6EAWE3veIj9Pdoc%2BGHQLyb0yYgk2AR99BYou8jvT%2Fktld4PvFv%2BxzyHEMLq4TqDzyNyZFaU5qddYqdJqaknjmdbBRDeIZWp0vvZdjDO1ddZP1mxjhocj8cceOYHOP8wu%2FLdyQY6pgGNsOlpQqfK2lQgd%2FckEcHtpsQZKyn0ftMvvK4hIpzqcOmv4opsgfDd33%2F6rqaqRr5RMm0GyToBwEfQb2C6t6bdaqkvp4ilwMfDKxLSNjCvduN8ZMrwOsrVv0KQSvJ%2BE8xp6HZOoGkHtbk9Ju%2FIv7LHYdofRU6YZEgLFWxWl2UWN%2B1KBYbYfZw3wFmjajxcdzRYvtF3z1N5a1p%2FeV1VurlFAbGQ5qa%2F&X-Amz-Signature=a77e3c118daf03744c4fd63124ded36007dd61260aa248f225fabec6afaf7d60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
