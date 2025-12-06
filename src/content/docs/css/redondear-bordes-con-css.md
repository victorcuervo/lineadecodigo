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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJWJWGMO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T110221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQ5IqrE9J2FB%2BmYpx0z5YJLSOzuNTYBzeiNr7IeiqXvAiEAzFaT1YeERIktB%2BbBId2HFqBW5iasGRjtJCYtgPBK0e4q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDAnEMDXP1eSAEhCy6SrcA2B9cHEBoJxBS34YOrs%2FT71BTq0uqFnwp%2FaMBAkjQ8GHLzfQK2Bk8Tq6w0VsV4p68UmSmt7gFXdwLH8k3dNujArvqcWoEXQHnnqwmR9%2BRn3muu6nxbaQEghKCjjwiXGzeKoIMFXl2BT%2BgyTcyI3WONAZ%2FV41KhgzxRNTYd4uIPf1VKp2asVECAA6NegD7viiAV3yFyvWEQkfyJTfxLbNFwvNUG77o7IGpPqLg8mgnxXf5X%2Bed35nbcOsefhClexzARQ3SyicF1Q2LwPrUKXXkCnxUkk2XJybCwgT5DX82MK3hwoJPkyphCsbQ0eb7q6Ooza%2FOyHUdHopkLLVO2hd0GeBJX8CdgP06Pr0dObmjnV2MFlzxY6eVQ5ChCSd1d%2B373jxvkdk5pgy8ZLKSoSifniCcoolS2je4wisBHEe4e76Nc6SQeqkMTcpIsuk%2BBjkQ0PJ8L99f2trdzqoSDz9yUIFj5KFB8C7KwzIbLZvk7HXEZZ2TtW7B5YJeAVn7yrHYbV21omPATM3Gp9MIhlzNIhGK%2B0dVBK7SHmC%2F8Bb2Xlsh1IspF8vcZpTA68qErOvoKuLYXUXcgn2Q%2FT2u1OufKosCriFNRZQJTfJBLltxoQdTSVuGK%2FDcIaS7MNlMMeJ0MkGOqUBMh%2Fd3ttBPQ8gZu%2BMvX1Xr2Ni6jP0Jd%2FXyHgNaOo4aA1Onjm70%2F1LKdWKzACK26ZW9Iexs4pnUrhzNtMfveGJTWIRULP8FsxQ6fhcvQBbeNGtu6Fg1YxsVoHKrPRnp4PuBQY7JogDPg3DAURM2%2BvyJe3l51Hd%2Bh89sURedUchhMynsWk9YivInom9y1q3hhGWGI9EmfqJOMaq9iv5HnfzSzNaYqlu&X-Amz-Signature=429bb2236a2c970c6b25f030b378c55a46731b3fcffe1f01caed82e711e91856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJWJWGMO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T110221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQ5IqrE9J2FB%2BmYpx0z5YJLSOzuNTYBzeiNr7IeiqXvAiEAzFaT1YeERIktB%2BbBId2HFqBW5iasGRjtJCYtgPBK0e4q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDAnEMDXP1eSAEhCy6SrcA2B9cHEBoJxBS34YOrs%2FT71BTq0uqFnwp%2FaMBAkjQ8GHLzfQK2Bk8Tq6w0VsV4p68UmSmt7gFXdwLH8k3dNujArvqcWoEXQHnnqwmR9%2BRn3muu6nxbaQEghKCjjwiXGzeKoIMFXl2BT%2BgyTcyI3WONAZ%2FV41KhgzxRNTYd4uIPf1VKp2asVECAA6NegD7viiAV3yFyvWEQkfyJTfxLbNFwvNUG77o7IGpPqLg8mgnxXf5X%2Bed35nbcOsefhClexzARQ3SyicF1Q2LwPrUKXXkCnxUkk2XJybCwgT5DX82MK3hwoJPkyphCsbQ0eb7q6Ooza%2FOyHUdHopkLLVO2hd0GeBJX8CdgP06Pr0dObmjnV2MFlzxY6eVQ5ChCSd1d%2B373jxvkdk5pgy8ZLKSoSifniCcoolS2je4wisBHEe4e76Nc6SQeqkMTcpIsuk%2BBjkQ0PJ8L99f2trdzqoSDz9yUIFj5KFB8C7KwzIbLZvk7HXEZZ2TtW7B5YJeAVn7yrHYbV21omPATM3Gp9MIhlzNIhGK%2B0dVBK7SHmC%2F8Bb2Xlsh1IspF8vcZpTA68qErOvoKuLYXUXcgn2Q%2FT2u1OufKosCriFNRZQJTfJBLltxoQdTSVuGK%2FDcIaS7MNlMMeJ0MkGOqUBMh%2Fd3ttBPQ8gZu%2BMvX1Xr2Ni6jP0Jd%2FXyHgNaOo4aA1Onjm70%2F1LKdWKzACK26ZW9Iexs4pnUrhzNtMfveGJTWIRULP8FsxQ6fhcvQBbeNGtu6Fg1YxsVoHKrPRnp4PuBQY7JogDPg3DAURM2%2BvyJe3l51Hd%2Bh89sURedUchhMynsWk9YivInom9y1q3hhGWGI9EmfqJOMaq9iv5HnfzSzNaYqlu&X-Amz-Signature=d883abc50494bc837c87c68f136e4631c7715ccc2e8698f84e1efcee674c0cba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
