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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637FQZBSE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T111041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYF7qCISBkRy43siwE%2BDg5L86FTJsjVLM4B5aY9%2BEawwIgBMpgpI2mKfgLyuY7RvttPpAOkrZWnoqJ%2Bi7%2B6o%2FqWnAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDi3XjQpSsX9GGZCtSrcA43wsrw6Q9aefmMhIHk2K2BvRgCJTOXSfWLb%2Bzh5j3xmBJJqBHiXUFF8YTgn10oasnAvsIvZyg%2B%2BVz6hVBG9bXCUc3OXI34XxGeyaIlz8%2FnE%2BYz%2BcP1WUhhCuJeGBEDUeoD7eCK6vUaJdHP2LV%2BrSrSrLATXrzCfZt9ElJY1lBPKJzUARRF%2Fg%2BexrEpnJMl7tb3MOBS7OVB2TeZYgWew3RpijHh4c8POjC5Phc5JIJdknNL2LM%2Bh0dfMbbOZM6eV4%2Bz7vNGu61POjYTMwQXW6UGvC6hbXcD6BWvC5fCdaUCsJjLLymmMG2i4i4LR0UuzB%2BAZS8LM93gIf51pgODuJ8UgVN67Zw0QYL3y12pvGHyzQc%2FyXc0%2BfJJl%2F7NOyNovo6l6vNz2UnNTsZjZtwvqjKDdsVA24Ni9xn2lUXiN%2Bk%2BgK%2FgreE%2Bux63f9nDxSckILIQNO4Cl7i55kl1nA6toVB4OKM5DirociX%2BGCEvS4KpdmmC4BXyen4P3oJldFsAIntkvwDy%2FxeZt5xzVOHxQ6%2FDcoH%2FXsogdeVuQajuRaCxw22bCugT53nDlJdSajAtO9anWj0CDgGq3OaRb5se62%2FzQAfiqwseEKOaHWR0eeTXPdImKboLyr2AATbWYMKfOyskGOqUBrjA4C8UZ20xDJIguMLEi2CoPoT0dk6i9ohTT4F6eWQN0VAP5EaZ3aQ%2FVfHJOegWFuYNegdw0%2FA%2FhX9M%2BPoM1mAWOkyWcatGJzOHsNnsPE%2BD9rk%2ByOhtiBxVNhxmSxWdkCDz48CkwBmlZH%2FnYyNZNVnCe8KsXTUu8n1%2FlCrtGic83LNhz9%2BmIMG3CEnUHfJYofQagtwtdyzO705MFdyvXwDFbqn%2Bl&X-Amz-Signature=467948f5e6055eddd3f8456a942c6cbd759b2f5521ffbe22b7c640a413edb1b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637FQZBSE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T111041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYF7qCISBkRy43siwE%2BDg5L86FTJsjVLM4B5aY9%2BEawwIgBMpgpI2mKfgLyuY7RvttPpAOkrZWnoqJ%2Bi7%2B6o%2FqWnAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDi3XjQpSsX9GGZCtSrcA43wsrw6Q9aefmMhIHk2K2BvRgCJTOXSfWLb%2Bzh5j3xmBJJqBHiXUFF8YTgn10oasnAvsIvZyg%2B%2BVz6hVBG9bXCUc3OXI34XxGeyaIlz8%2FnE%2BYz%2BcP1WUhhCuJeGBEDUeoD7eCK6vUaJdHP2LV%2BrSrSrLATXrzCfZt9ElJY1lBPKJzUARRF%2Fg%2BexrEpnJMl7tb3MOBS7OVB2TeZYgWew3RpijHh4c8POjC5Phc5JIJdknNL2LM%2Bh0dfMbbOZM6eV4%2Bz7vNGu61POjYTMwQXW6UGvC6hbXcD6BWvC5fCdaUCsJjLLymmMG2i4i4LR0UuzB%2BAZS8LM93gIf51pgODuJ8UgVN67Zw0QYL3y12pvGHyzQc%2FyXc0%2BfJJl%2F7NOyNovo6l6vNz2UnNTsZjZtwvqjKDdsVA24Ni9xn2lUXiN%2Bk%2BgK%2FgreE%2Bux63f9nDxSckILIQNO4Cl7i55kl1nA6toVB4OKM5DirociX%2BGCEvS4KpdmmC4BXyen4P3oJldFsAIntkvwDy%2FxeZt5xzVOHxQ6%2FDcoH%2FXsogdeVuQajuRaCxw22bCugT53nDlJdSajAtO9anWj0CDgGq3OaRb5se62%2FzQAfiqwseEKOaHWR0eeTXPdImKboLyr2AATbWYMKfOyskGOqUBrjA4C8UZ20xDJIguMLEi2CoPoT0dk6i9ohTT4F6eWQN0VAP5EaZ3aQ%2FVfHJOegWFuYNegdw0%2FA%2FhX9M%2BPoM1mAWOkyWcatGJzOHsNnsPE%2BD9rk%2ByOhtiBxVNhxmSxWdkCDz48CkwBmlZH%2FnYyNZNVnCe8KsXTUu8n1%2FlCrtGic83LNhz9%2BmIMG3CEnUHfJYofQagtwtdyzO705MFdyvXwDFbqn%2Bl&X-Amz-Signature=23edd9d66e9729da347baf058c293f718a5b18e4ef03d084f26bc5e90f79f93a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
