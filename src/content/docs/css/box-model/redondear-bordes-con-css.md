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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJOU3S63%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSL5OZfFTba5FaLONmA9UczgWRP7zfbXtoKk88yCJeoAiBG23IoMrEkNivUAVH3WhIYAUFg3%2F96n%2Bil142QwvUNDSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM9L6hIRT5RaLlXIt1KtwDnw6%2BKQs3sLM73B5ze0pmEBXBzJLyzHz4HU99uti6uQjMYFg9F8cTipj9L0hdiLLYjEah82sM8CCX9YaphZPpxl0ZC05pUFaJ1BvAF5e7khElB%2FQR5tgK7tlagq1i%2FcCTbRpXWiymXASJ37uDuQvoV7OFyVVxBML93ZFMqPHx3nf0lDc2OxOgf%2BNLY6tvlDNUZ%2FCWK3%2BwxrjjFqDIF%2FA%2Bg%2FVt258oSDis7JCLS4NT2bl7x1EtAd0NmSf5CHmt2tEWFDxiLlsXZQgZSqrimzkQOhJMzDwC9kqXHtq1lvKTGnYHREIUicSPzvhluiES1uWwrTGNRK%2Bvc4cJyqF0mCKQuSzfs1RCFBQ0ccocsS%2F%2Fawv0xr%2FLd8ex4oGhD%2BfJIzoariLnos65taLHH24hwMyy%2Fnm6q12qMGnl7c%2BcIPvEYG8GhyMisA4rNAu27NXaJWDMmAKFNjDD1dRtCs%2BfXzJZuYMTHvht2Ihy4QDJQZ4h67IuYxs8%2FoWcvQlQk61fu1TVzLE6rwaUJVJHRZI6OIo2A6RUCp2C9typMmXdg86M64dwYseEz1Ghnv2LWDXV9bKvDjdcqnxr9J%2FmRfg55EZvs4%2FUBPPT7OPNkRp9j3ZeP4G1qmmbVXkUB%2FzYHa8w0M6IygY6pgEHgIh1X60FHXuYB3rJLifDVScbhYIGVjo52pySpALWGPnWMDZs1uvhl%2Btg7sC93ErJBrYEa1vpKCeh9pww72%2Ft8TlGLFKlsZdch%2FaJFsYu53%2B%2BC3wKh0%2BIluBngoU9wbuoW45o9v8Ognko8mkRTG3SskD6ZQR8zhapOROzAJUFMm4R744icbVVLOC6y%2FONrobDlTknqNwHdB00ciHKTZSU5G%2BNf4WC&X-Amz-Signature=74a76e009c51ba290f985afe5b02edc53b4d2823041c15962ccf84ff3ddc2dd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJOU3S63%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSL5OZfFTba5FaLONmA9UczgWRP7zfbXtoKk88yCJeoAiBG23IoMrEkNivUAVH3WhIYAUFg3%2F96n%2Bil142QwvUNDSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM9L6hIRT5RaLlXIt1KtwDnw6%2BKQs3sLM73B5ze0pmEBXBzJLyzHz4HU99uti6uQjMYFg9F8cTipj9L0hdiLLYjEah82sM8CCX9YaphZPpxl0ZC05pUFaJ1BvAF5e7khElB%2FQR5tgK7tlagq1i%2FcCTbRpXWiymXASJ37uDuQvoV7OFyVVxBML93ZFMqPHx3nf0lDc2OxOgf%2BNLY6tvlDNUZ%2FCWK3%2BwxrjjFqDIF%2FA%2Bg%2FVt258oSDis7JCLS4NT2bl7x1EtAd0NmSf5CHmt2tEWFDxiLlsXZQgZSqrimzkQOhJMzDwC9kqXHtq1lvKTGnYHREIUicSPzvhluiES1uWwrTGNRK%2Bvc4cJyqF0mCKQuSzfs1RCFBQ0ccocsS%2F%2Fawv0xr%2FLd8ex4oGhD%2BfJIzoariLnos65taLHH24hwMyy%2Fnm6q12qMGnl7c%2BcIPvEYG8GhyMisA4rNAu27NXaJWDMmAKFNjDD1dRtCs%2BfXzJZuYMTHvht2Ihy4QDJQZ4h67IuYxs8%2FoWcvQlQk61fu1TVzLE6rwaUJVJHRZI6OIo2A6RUCp2C9typMmXdg86M64dwYseEz1Ghnv2LWDXV9bKvDjdcqnxr9J%2FmRfg55EZvs4%2FUBPPT7OPNkRp9j3ZeP4G1qmmbVXkUB%2FzYHa8w0M6IygY6pgEHgIh1X60FHXuYB3rJLifDVScbhYIGVjo52pySpALWGPnWMDZs1uvhl%2Btg7sC93ErJBrYEa1vpKCeh9pww72%2Ft8TlGLFKlsZdch%2FaJFsYu53%2B%2BC3wKh0%2BIluBngoU9wbuoW45o9v8Ognko8mkRTG3SskD6ZQR8zhapOROzAJUFMm4R744icbVVLOC6y%2FONrobDlTknqNwHdB00ciHKTZSU5G%2BNf4WC&X-Amz-Signature=f248a681d3a1d356fa64a18e33ed7a5ee57579dd8e89f14ea84a304a821773ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
