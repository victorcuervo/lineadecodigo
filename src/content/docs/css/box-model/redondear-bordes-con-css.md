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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI2WZ3S6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjtD%2FD93WR6IYMw%2F%2BZKuF8YtXjS1pch%2FYmsgisI%2BlT6AiEAxEhNRGGr%2B7L6AvzHCBdcCPbyT7N9rrLfEEW5095wqRoqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1cTNuqiusJcwN6oyrcA6wB1Jzbr07oCWZ4XuTyXRf%2B2wI7%2FIfGIBtZwbfndGmVGvGQ0VEmu4yiEe2YZXPQ%2FvyxQNlW2cimT9FwgpHsW6%2BJ%2By%2Fd%2Fvu5Jofyn2P7o8yzOyZr%2FV560u%2FAdxYsB5KWyX7GC%2Fu9es8cjD5UOrvYPJFEw15%2FTRE9YLG5qSUP3X5V0dI12anxtkrZzMBuXDaGXIMVR3Eth9Q8mYdNQs9dcGaTGbksmGBtFn8uHBeZQjnpGvyVjW%2FHs5fPx%2FYlNMDL604YqzDyj%2BT6nZfKBgiiaDfum8sRdLrRiP%2FlG%2FnnAL3yEaM0DbL6t%2B6ZZSCx%2BYyJbyMUfh8TKugpIcxCaIjbtKB6TWU%2BxCZikEBrLn9OJ4XI7zpeyWsXnZRux6ot09iTQc%2FyMZcNDiW86VMUDVSGUyOEiENeos19C8836kiEO6knxq3SEqKfNJkW8qYU6ShB9Ah6BCViCx%2Fl6%2B5kPHxo%2B6ISO9hDlnEeI3KPp%2BjWW7QBl2n55Ets5sTFWqdvTC%2Fa8s6tnwfJkLRTkbesfbmEiyWiNKtZUU%2BvJV7OedPCU6HL11S7ALFruTVRXWqFEC46YlKtvqCgWP%2BugcGEO8Qr6ysRQeVCjYuONFvYJER1aQVU%2FRghrNBja54aGpagMMiBi8oGOqUBWG7J1Pexptfhz8M0PcM8eixbHFMMRzUE15B5rcw6VX5XFL49ccMswK%2BHPp6D52%2FCPNFlkfCm46GuCWV7jIPyg97NYiY1Hot2D6PR4lh3Uim9X9XkBbBs6dAzmQ2HmC6tSovWsgdSPEgwBSSlYoRQFt7SVLuNSwZhdZGQHOnAQmizD08fl23PGKRHbfS%2FEQFHSSdZW0JJV4LZm5nio2xFHS7%2BaPg%2B&X-Amz-Signature=b343076e254be35eaf4d427a2ee5fcc79fbb2b8f102d70bc0de403d64b0fd29e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI2WZ3S6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjtD%2FD93WR6IYMw%2F%2BZKuF8YtXjS1pch%2FYmsgisI%2BlT6AiEAxEhNRGGr%2B7L6AvzHCBdcCPbyT7N9rrLfEEW5095wqRoqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1cTNuqiusJcwN6oyrcA6wB1Jzbr07oCWZ4XuTyXRf%2B2wI7%2FIfGIBtZwbfndGmVGvGQ0VEmu4yiEe2YZXPQ%2FvyxQNlW2cimT9FwgpHsW6%2BJ%2By%2Fd%2Fvu5Jofyn2P7o8yzOyZr%2FV560u%2FAdxYsB5KWyX7GC%2Fu9es8cjD5UOrvYPJFEw15%2FTRE9YLG5qSUP3X5V0dI12anxtkrZzMBuXDaGXIMVR3Eth9Q8mYdNQs9dcGaTGbksmGBtFn8uHBeZQjnpGvyVjW%2FHs5fPx%2FYlNMDL604YqzDyj%2BT6nZfKBgiiaDfum8sRdLrRiP%2FlG%2FnnAL3yEaM0DbL6t%2B6ZZSCx%2BYyJbyMUfh8TKugpIcxCaIjbtKB6TWU%2BxCZikEBrLn9OJ4XI7zpeyWsXnZRux6ot09iTQc%2FyMZcNDiW86VMUDVSGUyOEiENeos19C8836kiEO6knxq3SEqKfNJkW8qYU6ShB9Ah6BCViCx%2Fl6%2B5kPHxo%2B6ISO9hDlnEeI3KPp%2BjWW7QBl2n55Ets5sTFWqdvTC%2Fa8s6tnwfJkLRTkbesfbmEiyWiNKtZUU%2BvJV7OedPCU6HL11S7ALFruTVRXWqFEC46YlKtvqCgWP%2BugcGEO8Qr6ysRQeVCjYuONFvYJER1aQVU%2FRghrNBja54aGpagMMiBi8oGOqUBWG7J1Pexptfhz8M0PcM8eixbHFMMRzUE15B5rcw6VX5XFL49ccMswK%2BHPp6D52%2FCPNFlkfCm46GuCWV7jIPyg97NYiY1Hot2D6PR4lh3Uim9X9XkBbBs6dAzmQ2HmC6tSovWsgdSPEgwBSSlYoRQFt7SVLuNSwZhdZGQHOnAQmizD08fl23PGKRHbfS%2FEQFHSSdZW0JJV4LZm5nio2xFHS7%2BaPg%2B&X-Amz-Signature=064cb87c0c0020c33dbabd32133a60e20877bbb68d4f29175bbc3c354b6fc91f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
