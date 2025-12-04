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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E5HTKQT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIHDkOfiK6ngoCzI%2FHqqdiQZ%2FeLcInDGlwMzcVYLJTxb7AiBuxvm1yyZSMDi0ft574p5O4F5CwT9CJgwMcOn%2Fe5fY7Cr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMhDzlZvth3cYbLqZxKtwDWv%2B%2BPqe5%2F7%2F%2FFT8ch6niHUnPNQ9kd3qQIl%2FJRENbtdtpBNkzhQjUrgbmn5Qhswg1Up6Pb2vNu8SVVwnuVP2X0EGFfc%2B5qr%2FJI5KituhbWfZ5JfNyruClXNPFcmAEfXEf2cLETv6jzFKAZDUhjmQmoTo2oEFmgRexSZakiA%2BcCyZy9iJhSFbFM3H1Fe0Mn3j8p4GiN%2BY32%2B9pzSVES3XciuppS3zsZ9x9hnJYtZuUkGKuF8vASIDopPg69iq8ET0eTjIApsoWs336RDcG%2FpSWZ2R5DGsXW1zmL4HLb9K89vd6tSnnBnnxEa0pQKN0iwEbwxv1t0z1iqFwkzBVRB%2BGdEYOjFah7WY7MXOkfVQefPP8TGwVtxSckYRwO%2B%2FDVdShkyBb3bOeK%2Beg%2FNRZgRPNFjn7hAcLgKYLKY6ga8nxbUoKTJIcx4VoiNgE47p9dCjcTQfW%2BTnwelw3p3afJu4ad13R1SkubYpdIEFay05BBJoYbJPg7tgk6zYP256UUzFmiqBeXoKuor7S3IxkHUPioE1%2BuTYmLJxsogS%2F0VJEOaHMQFeqzlyRE200vviBP04R54J39hxinqQOt%2FjT%2BeUetmTSteZ3N%2BBWHVw%2BiiLPh1o7G633vZghyPeVl8ww9%2BbFyQY6pgHCF6tb%2BoCBxkdSfTNbPJ4z1d%2BQ5hhSyXzOibS2ug6jfWufUB1G%2FIOFfPKyCtPsiVYkGVKuz%2B%2F5SKcS1PU11ZgIQZTGB%2BIQRekd0l9Q4Uqs6GcNSZluvuEjJQDrY71my1%2Befe9Y9nvvrM0XfenZ7erVvStvJ5pu5wSnmYGfeKmpNzUuJGrRPHIQ%2BB%2BfIMHaAhvxO3qrVN8HjCjqQ4dYyIdhQQUlELvU&X-Amz-Signature=9ff73a25396358754eaf895519fbc17d65da1f05ee5101864245752a61db02c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E5HTKQT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIHDkOfiK6ngoCzI%2FHqqdiQZ%2FeLcInDGlwMzcVYLJTxb7AiBuxvm1yyZSMDi0ft574p5O4F5CwT9CJgwMcOn%2Fe5fY7Cr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMhDzlZvth3cYbLqZxKtwDWv%2B%2BPqe5%2F7%2F%2FFT8ch6niHUnPNQ9kd3qQIl%2FJRENbtdtpBNkzhQjUrgbmn5Qhswg1Up6Pb2vNu8SVVwnuVP2X0EGFfc%2B5qr%2FJI5KituhbWfZ5JfNyruClXNPFcmAEfXEf2cLETv6jzFKAZDUhjmQmoTo2oEFmgRexSZakiA%2BcCyZy9iJhSFbFM3H1Fe0Mn3j8p4GiN%2BY32%2B9pzSVES3XciuppS3zsZ9x9hnJYtZuUkGKuF8vASIDopPg69iq8ET0eTjIApsoWs336RDcG%2FpSWZ2R5DGsXW1zmL4HLb9K89vd6tSnnBnnxEa0pQKN0iwEbwxv1t0z1iqFwkzBVRB%2BGdEYOjFah7WY7MXOkfVQefPP8TGwVtxSckYRwO%2B%2FDVdShkyBb3bOeK%2Beg%2FNRZgRPNFjn7hAcLgKYLKY6ga8nxbUoKTJIcx4VoiNgE47p9dCjcTQfW%2BTnwelw3p3afJu4ad13R1SkubYpdIEFay05BBJoYbJPg7tgk6zYP256UUzFmiqBeXoKuor7S3IxkHUPioE1%2BuTYmLJxsogS%2F0VJEOaHMQFeqzlyRE200vviBP04R54J39hxinqQOt%2FjT%2BeUetmTSteZ3N%2BBWHVw%2BiiLPh1o7G633vZghyPeVl8ww9%2BbFyQY6pgHCF6tb%2BoCBxkdSfTNbPJ4z1d%2BQ5hhSyXzOibS2ug6jfWufUB1G%2FIOFfPKyCtPsiVYkGVKuz%2B%2F5SKcS1PU11ZgIQZTGB%2BIQRekd0l9Q4Uqs6GcNSZluvuEjJQDrY71my1%2Befe9Y9nvvrM0XfenZ7erVvStvJ5pu5wSnmYGfeKmpNzUuJGrRPHIQ%2BB%2BfIMHaAhvxO3qrVN8HjCjqQ4dYyIdhQQUlELvU&X-Amz-Signature=d48214313c978f3dd9af5a184acb052d9132f199a0f854ff1716282a66643256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
