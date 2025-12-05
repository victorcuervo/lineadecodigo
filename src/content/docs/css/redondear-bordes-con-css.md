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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEJIV4QE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPvMNOsQI5oY4F0exTbJPkcgDntcavZVVrNDLPkwnVggIhAKm0rOrmu9ImiYHFYr9Zj9%2FTh4niyvp6uJu7juuiE2u8Kv8DCGAQABoMNjM3NDIzMTgzODA1IgzziR9HQi%2BQXtKQlOkq3ANnZcY55heRTRWvdLa9jTk1UtmV%2B8%2B0x%2B1OTX7v7sT9%2ByLSqPBVzYsYvI83ffKGMlBlG%2BOVEYKoO7j2whBiASc1ZOzgX%2FWxf5kZaWCIpvBB7oWOuIsNJYAn8xgEHdLr0SAE20HWY0rj9IlXR7Kog52brVj4G7%2B9pDnjwE3KQq9kGHrtUoBDCZ8%2BNb980JeA86nYwd4%2B6%2FEDYEVaz07sI%2FSEpLhwmO5GAwqEO6CSKSwYIY8Usjwcoz591K1JHSSFId%2BrbmCijaKNtuKq4vPJLIsQAyvLesgzdMpuaRMkv0F0rdpRek58jBqZj1PJxtWDrQvjCSnv1upLM6e2FbKONtMhLNr6rk%2B2CnLtWQTVCoUEbUySDXfz5jTPJW%2B9etQp3WGZbToWCGvsuONANImuw6%2B8iSbXabnLTvjgiHOkuxeO8zQ8BywYjEn47JVrD442GP7scRLmV8pzIGun5sOh2VNZj6ImS8Fqo6O2IRSWDgIHeAgf1i8CX0s5r%2F%2FrO0E%2F1NNEGMRa5oHqJWHoQfpoHjiyv0%2BR5BcRpK8UwCd7BoGYVGaD3apOG5MfkrnrR2vHCd2%2B6C0KmtihlbzNf4mPtkVrBjJZvbRx%2BifwCexir64ONuyFC5ydK%2F9F9544dzDe48vJBjqkAXNj6vgyksnVPkF%2BC0iMXCdLYgDjbMspyMjiv8oAsNGyhQiYJRKri41qfsmvUfeHetKwSH0HEXNS86OkJN1RwMZhTnfiaGzg4TgMhyh2oA6HM2r8uctv9zc28uz0fD%2BcMa7PLKGo42kDTJJWKGPOvMhhv5XrO8KJTMibEA0agvuFSkw4V249698rJjDDrzxx5AUK2CGZ24%2FYnjePbSyNvGTno%2BEs&X-Amz-Signature=d9e907784c380f7652a59daf7ce715a4201c541266a44de02a2d9a84a6990ed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEJIV4QE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPvMNOsQI5oY4F0exTbJPkcgDntcavZVVrNDLPkwnVggIhAKm0rOrmu9ImiYHFYr9Zj9%2FTh4niyvp6uJu7juuiE2u8Kv8DCGAQABoMNjM3NDIzMTgzODA1IgzziR9HQi%2BQXtKQlOkq3ANnZcY55heRTRWvdLa9jTk1UtmV%2B8%2B0x%2B1OTX7v7sT9%2ByLSqPBVzYsYvI83ffKGMlBlG%2BOVEYKoO7j2whBiASc1ZOzgX%2FWxf5kZaWCIpvBB7oWOuIsNJYAn8xgEHdLr0SAE20HWY0rj9IlXR7Kog52brVj4G7%2B9pDnjwE3KQq9kGHrtUoBDCZ8%2BNb980JeA86nYwd4%2B6%2FEDYEVaz07sI%2FSEpLhwmO5GAwqEO6CSKSwYIY8Usjwcoz591K1JHSSFId%2BrbmCijaKNtuKq4vPJLIsQAyvLesgzdMpuaRMkv0F0rdpRek58jBqZj1PJxtWDrQvjCSnv1upLM6e2FbKONtMhLNr6rk%2B2CnLtWQTVCoUEbUySDXfz5jTPJW%2B9etQp3WGZbToWCGvsuONANImuw6%2B8iSbXabnLTvjgiHOkuxeO8zQ8BywYjEn47JVrD442GP7scRLmV8pzIGun5sOh2VNZj6ImS8Fqo6O2IRSWDgIHeAgf1i8CX0s5r%2F%2FrO0E%2F1NNEGMRa5oHqJWHoQfpoHjiyv0%2BR5BcRpK8UwCd7BoGYVGaD3apOG5MfkrnrR2vHCd2%2B6C0KmtihlbzNf4mPtkVrBjJZvbRx%2BifwCexir64ONuyFC5ydK%2F9F9544dzDe48vJBjqkAXNj6vgyksnVPkF%2BC0iMXCdLYgDjbMspyMjiv8oAsNGyhQiYJRKri41qfsmvUfeHetKwSH0HEXNS86OkJN1RwMZhTnfiaGzg4TgMhyh2oA6HM2r8uctv9zc28uz0fD%2BcMa7PLKGo42kDTJJWKGPOvMhhv5XrO8KJTMibEA0agvuFSkw4V249698rJjDDrzxx5AUK2CGZ24%2FYnjePbSyNvGTno%2BEs&X-Amz-Signature=bb402c59c10b4a7f2320f46d2ba4002149c29b6841c260dd35aae8a079e765f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
