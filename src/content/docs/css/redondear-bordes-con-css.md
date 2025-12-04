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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OVMYSMG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQC8PjWPQeOdKmYcYS7wzMa3sbNDEyGjLpZgXqRReCF6VwIhALUAC00rOsmP2cAA%2BYx87FYmzjp%2Bkbusw7IYWohnah14Kv8DCD4QABoMNjM3NDIzMTgzODA1IgwoA8ERH3LE0nc7iA4q3AP80PkzMLG%2FfJW1jVSpL8AA8AEF2DpdRyRP8U%2FerN%2FbPP2Nt7rYa3XzI%2FklLh5qo3IpJe6TTJG2%2BOYZwN4C6Xfk5CImoxOyrszgwvVlDWFjybdoKB%2BTakEJT6JACPBz4R5R6dlK0%2B5XueWQnhEHGjJVWFlzwCMm0y0MbRSF7zqXKfuXHSs8rJi9cxhCgdpuJTGZP9UgYCoIevAQTw%2BmlcugKuNAMN1gzmSVY6h3EtcIRz5F81wFHRvZ%2BDFbMan%2BSj%2FfiRndXs5AbEp9rUOqgl%2BFbPQhC1sdi4%2BqzUzMqIgGImqaTkosQcybl5X0nyD79V9fUgj4q1W8CeFi28naqq0Emsf7vjEqRH75sif8BDXhmHff3pSbKblBi1ZnMCfJIg90CnhBUvZCW12WNVSR9xnYXfCN35DijNzKhJT7zJCrDhPByUS%2B0Js9a%2Bce2hik%2B7%2FNteeEKpE2KACkVs61i10NX4mDMSDAflvxV8o1JYp83FodD%2BxFAVUIoqkSII0%2FMTyB7bmLm%2FKsgin0e97T1OjGtsP59Fmz7l%2FdrdPE8vLun4AZ87wFCeRm1StkGx8gpNH6B4TSsYJiz9xWTIfFAdHHXIv7T4CCDOqlKnWnext08i6BQ5eIHFLYO%2BPEojDjrsTJBjqkAdhEuyS2XEaRNmutW63Cm5oU%2FEUeXebJLU%2BFMKgPYu6kJMQrpTQngOwKvGA1JTzezhsPHSw%2BPS9LOWcu%2FFjz4VeLFCbfxVsJgguHjzKFCkwovUXpbQDOgWKDGCs9N%2FkzkgOeTRIkaYkzK6lDUZwu8n%2BZsEDAX3Ov7j69MmcRkhfA6B6MyaPa8UWOmE968sCuFe32G1O%2Fcbymz2PApUa%2B8pjOKOFF&X-Amz-Signature=b6a945f83166fc0f850c1c702da666494461fb5ee2f397d4421f207a30d24f45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OVMYSMG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQC8PjWPQeOdKmYcYS7wzMa3sbNDEyGjLpZgXqRReCF6VwIhALUAC00rOsmP2cAA%2BYx87FYmzjp%2Bkbusw7IYWohnah14Kv8DCD4QABoMNjM3NDIzMTgzODA1IgwoA8ERH3LE0nc7iA4q3AP80PkzMLG%2FfJW1jVSpL8AA8AEF2DpdRyRP8U%2FerN%2FbPP2Nt7rYa3XzI%2FklLh5qo3IpJe6TTJG2%2BOYZwN4C6Xfk5CImoxOyrszgwvVlDWFjybdoKB%2BTakEJT6JACPBz4R5R6dlK0%2B5XueWQnhEHGjJVWFlzwCMm0y0MbRSF7zqXKfuXHSs8rJi9cxhCgdpuJTGZP9UgYCoIevAQTw%2BmlcugKuNAMN1gzmSVY6h3EtcIRz5F81wFHRvZ%2BDFbMan%2BSj%2FfiRndXs5AbEp9rUOqgl%2BFbPQhC1sdi4%2BqzUzMqIgGImqaTkosQcybl5X0nyD79V9fUgj4q1W8CeFi28naqq0Emsf7vjEqRH75sif8BDXhmHff3pSbKblBi1ZnMCfJIg90CnhBUvZCW12WNVSR9xnYXfCN35DijNzKhJT7zJCrDhPByUS%2B0Js9a%2Bce2hik%2B7%2FNteeEKpE2KACkVs61i10NX4mDMSDAflvxV8o1JYp83FodD%2BxFAVUIoqkSII0%2FMTyB7bmLm%2FKsgin0e97T1OjGtsP59Fmz7l%2FdrdPE8vLun4AZ87wFCeRm1StkGx8gpNH6B4TSsYJiz9xWTIfFAdHHXIv7T4CCDOqlKnWnext08i6BQ5eIHFLYO%2BPEojDjrsTJBjqkAdhEuyS2XEaRNmutW63Cm5oU%2FEUeXebJLU%2BFMKgPYu6kJMQrpTQngOwKvGA1JTzezhsPHSw%2BPS9LOWcu%2FFjz4VeLFCbfxVsJgguHjzKFCkwovUXpbQDOgWKDGCs9N%2FkzkgOeTRIkaYkzK6lDUZwu8n%2BZsEDAX3Ov7j69MmcRkhfA6B6MyaPa8UWOmE968sCuFe32G1O%2Fcbymz2PApUa%2B8pjOKOFF&X-Amz-Signature=c2baf4f4d5f1ca43b7dfe6fa4e774e6de38a92dbb5e233fb95ed14b9bf73c3db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
