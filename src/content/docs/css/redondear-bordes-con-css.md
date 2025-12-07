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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQS6UPYA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDR7cb4t03jAdQa%2FNATB35oFwDhP6aP%2Bofm7N6FuHXpgAiBYVx17WFBY00CQp7FJO95RxQIqcq%2BEE0D9BkrB6gIWUCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCet96SxXNGbPbOqgKtwD3Y9YLV%2FJQxMmx09LNUzb9%2FhtKZbvorYjfOaEfdjqWq4UknHx7PwANTqc%2FDfz%2Bn0i8ITWA20EH6Lxcuw%2Fe4ZwHcVhJHg9T4k4UJi5vaK4BSQ%2Fb7G%2FQ1aJarNpakgRdpyNb5fLZISt8%2BWcLwrI1cpqPtuf1LwFKGAheK%2BOpU%2BgowDM0Ks06%2BUSFC3iS2HrU2TMhVVx6H%2B98fmJ8NLK4KI6weSseVZ61IaaPQ7KjHlz8KwRIR0vOX%2FOKiMjLVuaQsCsTF6jEoa31wpQ0Ob75p8jywVgGRmemK4b0gYpETstgoQWCqQS%2BazbBpXkdB2jSib8cr5jclU6c0A0O8jVg7JM3y7sIJwyqCjVPPSSfcotmZcCGSZOIXLa4bti%2BHS6apAke5e%2FjK2KjTgVlv0umYg%2B27mup28oZrL2tP953EEsXgHKrXnYnMJV%2B4GBG23Bh4iZzzebSUJmlprcAFICeD0I%2FbYUlNOAwdMGDwUCg%2Bw5A4QrXUFa1mxT5K7QO%2BeHDIxPtV5xP4JwnMP0q3h7X1gdfw%2FkMUsnut8AePTttCHt8QJKYoq%2Fudlur6gIQtWAPAGbi5LOM7baqLJevmGVxu4ayZG5qICd32V7sFUVKiUde94RW2ZgHTnAYciyfPEwjf7SyQY6pgF7Ps99H309Kyr1Tix%2BmoC6d4N0ktWhsAX9%2BdJ7IWIcmehgx3EGuhmzotAR52HcGsWnDlsY5PSQgz5ZlWglPDuQtm%2BYZcVodn3BqQEw6TXzIhjWDBwdg5IZPC9O1tur760kbu7UCPitVoYv%2BsEInuvnmKZCePrMLakWB4hITMRjnwZFI8phRhacFZ40be%2B0p7oXt%2F3tjYR%2Frsxghf7vWPeVux%2F%2FywLM&X-Amz-Signature=4f470dc16bddddba19cef142f512a302954e68d0105c914542ac7450687bbf68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQS6UPYA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDR7cb4t03jAdQa%2FNATB35oFwDhP6aP%2Bofm7N6FuHXpgAiBYVx17WFBY00CQp7FJO95RxQIqcq%2BEE0D9BkrB6gIWUCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCet96SxXNGbPbOqgKtwD3Y9YLV%2FJQxMmx09LNUzb9%2FhtKZbvorYjfOaEfdjqWq4UknHx7PwANTqc%2FDfz%2Bn0i8ITWA20EH6Lxcuw%2Fe4ZwHcVhJHg9T4k4UJi5vaK4BSQ%2Fb7G%2FQ1aJarNpakgRdpyNb5fLZISt8%2BWcLwrI1cpqPtuf1LwFKGAheK%2BOpU%2BgowDM0Ks06%2BUSFC3iS2HrU2TMhVVx6H%2B98fmJ8NLK4KI6weSseVZ61IaaPQ7KjHlz8KwRIR0vOX%2FOKiMjLVuaQsCsTF6jEoa31wpQ0Ob75p8jywVgGRmemK4b0gYpETstgoQWCqQS%2BazbBpXkdB2jSib8cr5jclU6c0A0O8jVg7JM3y7sIJwyqCjVPPSSfcotmZcCGSZOIXLa4bti%2BHS6apAke5e%2FjK2KjTgVlv0umYg%2B27mup28oZrL2tP953EEsXgHKrXnYnMJV%2B4GBG23Bh4iZzzebSUJmlprcAFICeD0I%2FbYUlNOAwdMGDwUCg%2Bw5A4QrXUFa1mxT5K7QO%2BeHDIxPtV5xP4JwnMP0q3h7X1gdfw%2FkMUsnut8AePTttCHt8QJKYoq%2Fudlur6gIQtWAPAGbi5LOM7baqLJevmGVxu4ayZG5qICd32V7sFUVKiUde94RW2ZgHTnAYciyfPEwjf7SyQY6pgF7Ps99H309Kyr1Tix%2BmoC6d4N0ktWhsAX9%2BdJ7IWIcmehgx3EGuhmzotAR52HcGsWnDlsY5PSQgz5ZlWglPDuQtm%2BYZcVodn3BqQEw6TXzIhjWDBwdg5IZPC9O1tur760kbu7UCPitVoYv%2BsEInuvnmKZCePrMLakWB4hITMRjnwZFI8phRhacFZ40be%2B0p7oXt%2F3tjYR%2Frsxghf7vWPeVux%2F%2FywLM&X-Amz-Signature=bbe5f034b5cf7ebfcb7c153876c168d728a7f21bb2612f4adb7d96ee5aba1ca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
