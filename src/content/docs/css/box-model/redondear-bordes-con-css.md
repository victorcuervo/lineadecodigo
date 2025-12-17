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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEY2LL3D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDDP%2BmgWFeazQMh1HpRJJ048Dn5U2rQB1s%2BP379YlSi6AiEAzwoAn1dlWhf9XZnkyz1RD5BkqfAnFbGUTMdEZcvGIRoq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMd6vR5MzutV1hkuYyrcA60jWQ9LscneefAeMAX%2FcVZBUkewgGg%2B%2FroGfVF%2BH5bWqUe%2B1r5sr0vOy4rOtqpTnOxobSaFNehxQ1wxh0urKGP8DbnLTptO7sLdiSQuRpOL5V%2BfVC9GTPMrF%2BG5RtRiHA5JNAMWs7hzdYhlueqKt8ivfq4uCFZUAHbKdCl%2BtDvyYHgw%2Be1%2FgXubjf5jLpxEwDO7MP603yZMEJ2isZ29PYCdyPL2gFFIBpBbCdC8k%2BZJu1VxA%2BLT0S0Bhi6hqfSqg0ep2F2Vnzmcy7NK2ui2fsFYJCN38hJYkWISXpYBFUBG97L41p%2Fv5A5w3aQwg0xDMld1XAVl8fXmpF3foI0B6tFwB%2BK%2FG4%2BnvjwdhnfcWw2Urfe0T0tNwclc914B6a625NboZnf21ENAZ248GbM0V2MwphttVcmR5OoaKbSyK4obK1EDuQZ2YhS7eBU71gAv9Hx2Txog0ggbjR7icteSWg1p13J6I37npSFUVr%2FmUTA6DjP7zFxiqYxddQ%2BXuX71V4SzpZ1fP3xXo9RDgOmz0FToKIOIbcbBSd3GZNaWhArwyISGrxbD4kFlOvNvkLWKsrD4ZCptPf2hp3CE%2BBd4hFm76sK4KAgISThIBWHjWP69rkGUuPKcmbbKfc%2BCMOjFisoGOqUBkimyI8nHepQGyCEuwM2tgxXeMBsS3eYM6Oj0gMmGpZR59E0EORKr1a%2FWKOmrGFtDYJhXu7zAHLWtQKlP2L8lSNR4HKVMcJVGQqvCpCJrVmFSHhgOQHFnFRSrkufRtsYaYuD9NHwPqotPtuKyH7CDEckD7qRdKHmzRMvNW9hLsyadKfv7hdYni4rNlZE4wGqeD%2FN6jPJ8%2FQy5rn343wwS8m%2FkL4LI&X-Amz-Signature=648b9c5570f1c7b9fe7714e2be840021ebf6f40fb0e7a49482d5c52361af8a42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEY2LL3D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDDP%2BmgWFeazQMh1HpRJJ048Dn5U2rQB1s%2BP379YlSi6AiEAzwoAn1dlWhf9XZnkyz1RD5BkqfAnFbGUTMdEZcvGIRoq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMd6vR5MzutV1hkuYyrcA60jWQ9LscneefAeMAX%2FcVZBUkewgGg%2B%2FroGfVF%2BH5bWqUe%2B1r5sr0vOy4rOtqpTnOxobSaFNehxQ1wxh0urKGP8DbnLTptO7sLdiSQuRpOL5V%2BfVC9GTPMrF%2BG5RtRiHA5JNAMWs7hzdYhlueqKt8ivfq4uCFZUAHbKdCl%2BtDvyYHgw%2Be1%2FgXubjf5jLpxEwDO7MP603yZMEJ2isZ29PYCdyPL2gFFIBpBbCdC8k%2BZJu1VxA%2BLT0S0Bhi6hqfSqg0ep2F2Vnzmcy7NK2ui2fsFYJCN38hJYkWISXpYBFUBG97L41p%2Fv5A5w3aQwg0xDMld1XAVl8fXmpF3foI0B6tFwB%2BK%2FG4%2BnvjwdhnfcWw2Urfe0T0tNwclc914B6a625NboZnf21ENAZ248GbM0V2MwphttVcmR5OoaKbSyK4obK1EDuQZ2YhS7eBU71gAv9Hx2Txog0ggbjR7icteSWg1p13J6I37npSFUVr%2FmUTA6DjP7zFxiqYxddQ%2BXuX71V4SzpZ1fP3xXo9RDgOmz0FToKIOIbcbBSd3GZNaWhArwyISGrxbD4kFlOvNvkLWKsrD4ZCptPf2hp3CE%2BBd4hFm76sK4KAgISThIBWHjWP69rkGUuPKcmbbKfc%2BCMOjFisoGOqUBkimyI8nHepQGyCEuwM2tgxXeMBsS3eYM6Oj0gMmGpZR59E0EORKr1a%2FWKOmrGFtDYJhXu7zAHLWtQKlP2L8lSNR4HKVMcJVGQqvCpCJrVmFSHhgOQHFnFRSrkufRtsYaYuD9NHwPqotPtuKyH7CDEckD7qRdKHmzRMvNW9hLsyadKfv7hdYni4rNlZE4wGqeD%2FN6jPJ8%2FQy5rn343wwS8m%2FkL4LI&X-Amz-Signature=67984d6745f8f5e03a809a959853f969c8bad31be76cc4dee63e9b6cf10048b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
