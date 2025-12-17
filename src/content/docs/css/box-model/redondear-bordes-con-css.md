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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPOH4B7X%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmhPesk8JuH8ULe8fD65m31AuPG%2B1AR40US0l5%2FT9%2BCAiEAx4f%2BkFj2wEbw9FKiz7NQXL8jJA8zMJxRE9LiiQZhIbEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDItebUeH%2Bzo5i%2FbcjCrcA9n9B8of6BlwYTl2JzDGKMO%2BbtR4S835Ki9ta4xyNAnTVmJydjJ0H4yZP2ZB1M4gux16szqsEYbUZM9kxN6d0jSQM1rO4bwBk6V8eSaq%2BJUNLy7yTX40X73fy4SRFNL%2BRTQsUOZoqy05xJarO3JmkTmWWP0q9WTLn22qzUEIyaO%2FwIfTjnIkQT%2F0aTp%2BJnDA7Dc2XAqhV8p1moawYeNaHHotwdCXB8ikDowA8DYIKOY1Z%2BQ3dBCFIJe%2FXqYpBFC8jSAmJ5FsKVhoeDO0xglUmhJ7u7OC1TJ%2FaevZN1h3O00frwFIQCIXqrqss7IRPO15ghD5Wd7UJ7XF6MB%2FwwUQEunknNhd9McUCMVY3Z4sWPJt0lKgRIdtESAI2gUUMgaxqN0oBjEFPrFSoIxlWN8NwDEyvvuCTrWX%2BHFQEArSlwxuTgB%2F3%2FPwWBCzSGShElVdJdJLw%2FUgGXERnkG4xzNu0Dc2sjc%2B%2FK6a%2BymLUHAiwpck5qjx%2B9zqwgQqztA%2FYp8OFDyIZR4AXm0VVu6V%2Bmx11sTE7diw6J0wfm%2BufHIV1Ixtckw6mMLrhhyHqSAtL0laXijTGVjV5TZaE9cWiR0CYrJKWA5VFl74TNcrmRvQ2nETZ8iwFsQDTP0ChgZEMJy4icoGOqUBSp9vAqC%2FRNta5hs8RgcGVwoV40pKoBgln2novjr8BexEWrNHjC66RHbAq9sl8k3B6S4nG6ZjSwJvJMQSJj71D45gDcn%2FMCo2hRoVbw%2BXCCKyM19fHtU8GVs7Anyyn1jSLPdXOrKo9bR1ZbohWD8PxMyEGcedMU3VxpE1IKEVfcmI283HdVkGk2%2BEtcBHw8B%2F%2Fl6qbajPbj15i%2F%2Bpw1LKQXNqQXKN&X-Amz-Signature=bf1a40ab1e54339d4c971f814e30f3740384ad188d2e05eaaaaee635c3367849&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPOH4B7X%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmhPesk8JuH8ULe8fD65m31AuPG%2B1AR40US0l5%2FT9%2BCAiEAx4f%2BkFj2wEbw9FKiz7NQXL8jJA8zMJxRE9LiiQZhIbEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDItebUeH%2Bzo5i%2FbcjCrcA9n9B8of6BlwYTl2JzDGKMO%2BbtR4S835Ki9ta4xyNAnTVmJydjJ0H4yZP2ZB1M4gux16szqsEYbUZM9kxN6d0jSQM1rO4bwBk6V8eSaq%2BJUNLy7yTX40X73fy4SRFNL%2BRTQsUOZoqy05xJarO3JmkTmWWP0q9WTLn22qzUEIyaO%2FwIfTjnIkQT%2F0aTp%2BJnDA7Dc2XAqhV8p1moawYeNaHHotwdCXB8ikDowA8DYIKOY1Z%2BQ3dBCFIJe%2FXqYpBFC8jSAmJ5FsKVhoeDO0xglUmhJ7u7OC1TJ%2FaevZN1h3O00frwFIQCIXqrqss7IRPO15ghD5Wd7UJ7XF6MB%2FwwUQEunknNhd9McUCMVY3Z4sWPJt0lKgRIdtESAI2gUUMgaxqN0oBjEFPrFSoIxlWN8NwDEyvvuCTrWX%2BHFQEArSlwxuTgB%2F3%2FPwWBCzSGShElVdJdJLw%2FUgGXERnkG4xzNu0Dc2sjc%2B%2FK6a%2BymLUHAiwpck5qjx%2B9zqwgQqztA%2FYp8OFDyIZR4AXm0VVu6V%2Bmx11sTE7diw6J0wfm%2BufHIV1Ixtckw6mMLrhhyHqSAtL0laXijTGVjV5TZaE9cWiR0CYrJKWA5VFl74TNcrmRvQ2nETZ8iwFsQDTP0ChgZEMJy4icoGOqUBSp9vAqC%2FRNta5hs8RgcGVwoV40pKoBgln2novjr8BexEWrNHjC66RHbAq9sl8k3B6S4nG6ZjSwJvJMQSJj71D45gDcn%2FMCo2hRoVbw%2BXCCKyM19fHtU8GVs7Anyyn1jSLPdXOrKo9bR1ZbohWD8PxMyEGcedMU3VxpE1IKEVfcmI283HdVkGk2%2BEtcBHw8B%2F%2Fl6qbajPbj15i%2F%2Bpw1LKQXNqQXKN&X-Amz-Signature=327515e8849b81cb6801ef1425ee4834dd6b0a732a2fabbd10b79768014d6c6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
