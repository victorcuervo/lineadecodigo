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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD5K4WH3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T064359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9K5%2FMUA1hnMzegkHoZLKlcR7z7Aoyp0GeDmDVifoWVAiEAmlAS8Px3Di3eTYSfzNGZyoO3i3KR7ELRlsN54B8yIt4qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPgk3z6R5dE074nUKCrcA552B4cJINpR11kQXP%2BGpoXgq1dhrwThuvtwL9QpeZAyya4w5Z0YqrmdtpoDq5aB%2BzJpv6d6tQYGprBEc1dsorysA4vaBbCYH7v%2BDyBKyxAJ8AudwHnmLcfpD3MrBv2a8R7omemOGNd7GK5JGy3pL50OSlEa2TCVdsOer7vEa%2BciwRk2JoEdiYTlMZS48jagE6WTcP80v%2Fa27ZH3sT6Wv08qn3%2FjT1svJsEVNQlWw%2F2ltbpI3PkXUr0xLs6QMwiQcYyUivF%2Bbzf2KmFPI0TCaAUqP1Qgixujqp9GQoZYZibDNElYT5JrFt%2B0PHMSQrKcnLgggPZq12hPLycBSvm4sgg18XdB418BHQJRdUBkkzvlX6kRQU4J6NjEDbvDq1bN6pJGbh4Af1M1BKrftII5dWcELcoDpdB4PBL3dzE8h1oLCCnxpScXXD%2FZuGvG1zThAUQd5y%2FWeMdPBd55X%2BIjD3vZPB1Fnj5r4gsrlBkTFzTyZCZFaBJbE5qp1B1d3cx8NjhCW3%2BgciVNVi4i%2FchFneN4UGIscLQg2qetSI84mgGRw5WNwhQ5kVz%2Fgsm0JUUR7wvr7JvIEpuUGt9kFYoFeVg0z5ODZrXYoyvbreW8R4DKU3oKDyOwsfXMDrDJMJfR2ckGOqUB7A9k3%2FYP%2FlFS6YQMCb5YmlIboXvaZTWeXywwktnY%2FrInvujAbBHYnoPIvlh5CPa2fSFmaUhmFE23Cweqanvdg9tuE%2FKaXfjZRXYhwBNwR88hVINTBsTe6MJiA5P2lmIq9mJbQobDu0XsKiHm%2Fkqmi2fNU31yZNt3OpDhfOVYXbIoJsaP2%2FVuOHi4N5epKkon%2FaGadriCZe%2BP6SD4ioEirdK1WfU7&X-Amz-Signature=32ea494f8ba4838898a58c6cb3e5d508783acaf7f859a606b007f83218f888fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD5K4WH3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T064359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9K5%2FMUA1hnMzegkHoZLKlcR7z7Aoyp0GeDmDVifoWVAiEAmlAS8Px3Di3eTYSfzNGZyoO3i3KR7ELRlsN54B8yIt4qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPgk3z6R5dE074nUKCrcA552B4cJINpR11kQXP%2BGpoXgq1dhrwThuvtwL9QpeZAyya4w5Z0YqrmdtpoDq5aB%2BzJpv6d6tQYGprBEc1dsorysA4vaBbCYH7v%2BDyBKyxAJ8AudwHnmLcfpD3MrBv2a8R7omemOGNd7GK5JGy3pL50OSlEa2TCVdsOer7vEa%2BciwRk2JoEdiYTlMZS48jagE6WTcP80v%2Fa27ZH3sT6Wv08qn3%2FjT1svJsEVNQlWw%2F2ltbpI3PkXUr0xLs6QMwiQcYyUivF%2Bbzf2KmFPI0TCaAUqP1Qgixujqp9GQoZYZibDNElYT5JrFt%2B0PHMSQrKcnLgggPZq12hPLycBSvm4sgg18XdB418BHQJRdUBkkzvlX6kRQU4J6NjEDbvDq1bN6pJGbh4Af1M1BKrftII5dWcELcoDpdB4PBL3dzE8h1oLCCnxpScXXD%2FZuGvG1zThAUQd5y%2FWeMdPBd55X%2BIjD3vZPB1Fnj5r4gsrlBkTFzTyZCZFaBJbE5qp1B1d3cx8NjhCW3%2BgciVNVi4i%2FchFneN4UGIscLQg2qetSI84mgGRw5WNwhQ5kVz%2Fgsm0JUUR7wvr7JvIEpuUGt9kFYoFeVg0z5ODZrXYoyvbreW8R4DKU3oKDyOwsfXMDrDJMJfR2ckGOqUB7A9k3%2FYP%2FlFS6YQMCb5YmlIboXvaZTWeXywwktnY%2FrInvujAbBHYnoPIvlh5CPa2fSFmaUhmFE23Cweqanvdg9tuE%2FKaXfjZRXYhwBNwR88hVINTBsTe6MJiA5P2lmIq9mJbQobDu0XsKiHm%2Fkqmi2fNU31yZNt3OpDhfOVYXbIoJsaP2%2FVuOHi4N5epKkon%2FaGadriCZe%2BP6SD4ioEirdK1WfU7&X-Amz-Signature=34fec0ae83f9f2b3ff2e1e94116633b36b046e32c218eade73a8af5db525bfe6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
