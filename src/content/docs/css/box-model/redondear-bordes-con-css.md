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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB76LO3X%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBY3oNM%2BPAq4Y4YbGA7En6eP7gkGWzW9PQWXQjCMePeIAiEAgzCxRTccCaGTPyku96xNmBwNEA6BmbU8Oh3Js7wCEpcq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDKiY4LwjetgaZCJEYCrcAz18ioxgsxnIoKa1YiToZ6Sg9edDXZTvi4RSfePAguLrSBzLJC5uLbAgQHGqk8n%2FblO7talCkAiUeMAkhhGhOhWtonFwnO5646f8qzCkmGZRGXFT%2BXsoydbaXdeqhfO0gOTNK6w%2FJcfMmtu2Lv8EbVbSwBStGF2mfp4lR73Vft7MEmtEBxWARgzetso4H7wH%2FhsE4Z62DAKlCbcyBn%2BfmcKYiGBccyp66nEfFM1AYJ7hhUgo20qJ%2B%2Feiri9M1DPgC0zcDeziUoyTPSnZNSastKowCqTUai%2FEqZy66M5AUEaZNcDpr9sQ%2BNaV8ZZ8N%2BhqO%2FQbAP%2Bmfv8lcvdYMs9ceOFl5Cqep24TnQ2I9CRciErHa%2BgltH0B1mnhDEBb541t%2BGHjg9I3T2ecfV78ZOzzB5BUC62Tkm4G1Y8lNGnaxWiA%2F8c%2Fcrj6yiGSSkYibLdgP0CPcwo1C0fm7VaKvZi%2BVR%2FdeLZpT2gHyonQH7ZAwhjPqbFaMHPY0J0QV%2Fs84wLvvIl%2FcHFjQ7uwA4y1t4uwdIMz5hn63KvOIom%2FgeFz3xxCscEomiiDv8Sl8J3kHlmKcRhNYZyvIAYjDCgxfwbW%2FqFV9o2LTBaPjinyN8zedlsGB5FlzN8NOElOe2vAMODGisoGOqUBjjLkNREfM0jHWdkWQw%2F4dMvVAzj0Pm6sDvjqy2N%2BSyqvgVrKbqEWotQfJyrxEDktDGtKFi6ZZ%2Bflcj2j4K6tVNCHZJhxrVHnn60KbaA6UAGgXoAhcvh052J4mhCQ8bwYvPqXl0Ro5FuEJMy4iGq4yqHCricsCfvauFlz6KAytBcG2egmdD5nvlE0EHc529i0UX2QXeA%2BXNry6zs9WQWr0xo%2BDh7Q&X-Amz-Signature=c2f3a31b8005ef5ff31734d828638ba7bc265a09a19abd9bc24c3d9f955989ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB76LO3X%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBY3oNM%2BPAq4Y4YbGA7En6eP7gkGWzW9PQWXQjCMePeIAiEAgzCxRTccCaGTPyku96xNmBwNEA6BmbU8Oh3Js7wCEpcq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDKiY4LwjetgaZCJEYCrcAz18ioxgsxnIoKa1YiToZ6Sg9edDXZTvi4RSfePAguLrSBzLJC5uLbAgQHGqk8n%2FblO7talCkAiUeMAkhhGhOhWtonFwnO5646f8qzCkmGZRGXFT%2BXsoydbaXdeqhfO0gOTNK6w%2FJcfMmtu2Lv8EbVbSwBStGF2mfp4lR73Vft7MEmtEBxWARgzetso4H7wH%2FhsE4Z62DAKlCbcyBn%2BfmcKYiGBccyp66nEfFM1AYJ7hhUgo20qJ%2B%2Feiri9M1DPgC0zcDeziUoyTPSnZNSastKowCqTUai%2FEqZy66M5AUEaZNcDpr9sQ%2BNaV8ZZ8N%2BhqO%2FQbAP%2Bmfv8lcvdYMs9ceOFl5Cqep24TnQ2I9CRciErHa%2BgltH0B1mnhDEBb541t%2BGHjg9I3T2ecfV78ZOzzB5BUC62Tkm4G1Y8lNGnaxWiA%2F8c%2Fcrj6yiGSSkYibLdgP0CPcwo1C0fm7VaKvZi%2BVR%2FdeLZpT2gHyonQH7ZAwhjPqbFaMHPY0J0QV%2Fs84wLvvIl%2FcHFjQ7uwA4y1t4uwdIMz5hn63KvOIom%2FgeFz3xxCscEomiiDv8Sl8J3kHlmKcRhNYZyvIAYjDCgxfwbW%2FqFV9o2LTBaPjinyN8zedlsGB5FlzN8NOElOe2vAMODGisoGOqUBjjLkNREfM0jHWdkWQw%2F4dMvVAzj0Pm6sDvjqy2N%2BSyqvgVrKbqEWotQfJyrxEDktDGtKFi6ZZ%2Bflcj2j4K6tVNCHZJhxrVHnn60KbaA6UAGgXoAhcvh052J4mhCQ8bwYvPqXl0Ro5FuEJMy4iGq4yqHCricsCfvauFlz6KAytBcG2egmdD5nvlE0EHc529i0UX2QXeA%2BXNry6zs9WQWr0xo%2BDh7Q&X-Amz-Signature=30f481966db7b3856de42e141295bcf8ae519f76ea670a16e3df219faf027ec4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
