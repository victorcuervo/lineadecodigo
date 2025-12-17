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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXZXT3WA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfo5O8RrUnnDzakBBsTDqfyudRNyXlc1%2BGPlLa2g1IHAiB8yIQ6ohHoc1MR6Yi9NBjstbvYmHYdzAVTPVlDj6ia%2BSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM772%2FXwpkVxt63ZpSKtwDNeMSaoVtg6hYKFoda7a%2Bo9tYWPckgmxn7N2BNjF0Uwlto6t9txg8GVOjuKYTVo9jQorWoMwfxjK29z4CCi45Pzr2NHtCY%2BbOqLDeC%2FoQXjEhhkJPO98WZN16zZGnitkeiHFjs%2FnlO4v%2BmyYEXDu0YbGX9trQhas4zSzqJXP8fk8PBq3v0dK1Qwxc1RXaj%2FqzoxizmsSwTKBFB8KZ36oWRp6ZkrTT8QxznXQ9L3iPgP21g%2FoxyviW36%2FKc5QhChyExZAiuzmkrhMLSBGJwusrpt9xPBf0QkieneBLovMNTFg7KdfPz%2BDAuIWRjuRjBuud%2F%2BA%2FSJ3V%2FvaK7n9n1x%2BAneBfUPDBmr3B00CrO%2FAL3VBjvU9boBEaZjAGcXpj9Mc25LuS0jGy9G3qHIy6%2FoFuqMzHUIgFQgZvmE8sm3HEI39OkLYKkNqT7%2BtOt3eFCsZhNGQioMo2SGB0rHDeaW5O49oE4KJS6QQhtW7bgs6zzEBuu%2FXGYcyfdsf%2BBo6zTv4qq91pXustuuX6mftr8E3Fj9BKNqLwNRe04bPy1HmW0o%2BaibvzbNTiF33GtSOZpWudWwRaiaqyI330pvFjyfXn%2FNli4yzXEW13A0bzn6BFpqqzJTGPtreP%2FIL6YSAw5f%2BKygY6pgFPQ5Q5KwenTnsf%2FQDFNwlZIqw3B7hvJk9vqhTRjHMI6%2FslTsH2RQoUvhlfPnopEVNHtIkCzvNZaisIag0GBqI7PxM%2B8Fr%2FvDY87ymdjIfO914LB5lTnpO4M3JZBwEnDpm16bUB2zc%2FUOEH6ttQnsH3GQhA9CZAZtar%2BoQjPyphg%2BQxiz8crf3uEUnZBz5WZYW4lm8VIGPkmQrLE5eZTBiD0i9rxA7G&X-Amz-Signature=91ead72fbfd988c848ff7bc7392143651aad69e8ce8641872ec9baf562c13206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXZXT3WA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfo5O8RrUnnDzakBBsTDqfyudRNyXlc1%2BGPlLa2g1IHAiB8yIQ6ohHoc1MR6Yi9NBjstbvYmHYdzAVTPVlDj6ia%2BSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM772%2FXwpkVxt63ZpSKtwDNeMSaoVtg6hYKFoda7a%2Bo9tYWPckgmxn7N2BNjF0Uwlto6t9txg8GVOjuKYTVo9jQorWoMwfxjK29z4CCi45Pzr2NHtCY%2BbOqLDeC%2FoQXjEhhkJPO98WZN16zZGnitkeiHFjs%2FnlO4v%2BmyYEXDu0YbGX9trQhas4zSzqJXP8fk8PBq3v0dK1Qwxc1RXaj%2FqzoxizmsSwTKBFB8KZ36oWRp6ZkrTT8QxznXQ9L3iPgP21g%2FoxyviW36%2FKc5QhChyExZAiuzmkrhMLSBGJwusrpt9xPBf0QkieneBLovMNTFg7KdfPz%2BDAuIWRjuRjBuud%2F%2BA%2FSJ3V%2FvaK7n9n1x%2BAneBfUPDBmr3B00CrO%2FAL3VBjvU9boBEaZjAGcXpj9Mc25LuS0jGy9G3qHIy6%2FoFuqMzHUIgFQgZvmE8sm3HEI39OkLYKkNqT7%2BtOt3eFCsZhNGQioMo2SGB0rHDeaW5O49oE4KJS6QQhtW7bgs6zzEBuu%2FXGYcyfdsf%2BBo6zTv4qq91pXustuuX6mftr8E3Fj9BKNqLwNRe04bPy1HmW0o%2BaibvzbNTiF33GtSOZpWudWwRaiaqyI330pvFjyfXn%2FNli4yzXEW13A0bzn6BFpqqzJTGPtreP%2FIL6YSAw5f%2BKygY6pgFPQ5Q5KwenTnsf%2FQDFNwlZIqw3B7hvJk9vqhTRjHMI6%2FslTsH2RQoUvhlfPnopEVNHtIkCzvNZaisIag0GBqI7PxM%2B8Fr%2FvDY87ymdjIfO914LB5lTnpO4M3JZBwEnDpm16bUB2zc%2FUOEH6ttQnsH3GQhA9CZAZtar%2BoQjPyphg%2BQxiz8crf3uEUnZBz5WZYW4lm8VIGPkmQrLE5eZTBiD0i9rxA7G&X-Amz-Signature=9cb2c657668a49e13e7adb0e700a3435916748c94072056fa1d13a61558ae250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
