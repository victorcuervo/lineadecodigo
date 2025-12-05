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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN4OLSF2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHr5zLwnBadey5kd8xn696Su6w617QG5GhsCIR8i7hEvAiEAm%2F1%2F8ZcMvvyrZpil4Sxuqq2TNjbfijtsG%2Fn9M6gWlKgq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDLK7Mb1trT8ZRxzt0CrcA24L7AL6%2BcJeD9t6L%2FDovSVhQrMQSY%2Fw5MndaJNWbo62uc4P%2BDvcHr%2BmRPt3hj28RU%2BPE14eBpygnpQt%2FYzfggLnT4kW5Flds0lka2RQBbrmqCsoud54wscNI10ZoqNM2oDSZ76%2FOvVVA6yFmQsPWTuBaUfwNFJS5C40db3dy6cCknCl2a0Og9BR1tzOT%2F7X1T0euQe7NZFD0M0tpzOIDJTot5ypsBhlwUV2JKzjN3hKXgM3NgltcPci7AvvdREYlL8%2B7uMSvo1%2BD2Hq6mK5KzPsd8IH%2Btdnlqacy2R1xVMQIfYemNDi7%2Bpu06Ha17%2Fj%2BUbbl63J%2BAArv%2FgNiXMcqLsz6G69dRFGdmvYq3v5KQn%2BBYBnZgRMe2ZFUXORcSQ709zh8RndJxYfroKhDOHn%2F2XrfyYdolu6Y%2BcC7wAsKghwGI2v248lVl9610GYXS4G%2B6LPla6xVGJCy7BZJJv5%2FS4yJ7py%2FPrVI%2BuSwYiAy0NnUtmwxohoqTrHtiqTtYS%2FOVzj%2BQQ5rVc%2FPXGZPmDsOAEA%2FQeV03m16APkxCgksGVBIoK6r8bobiuEb7g4npBcn3UnfA5X5uKBgn5XhibI089PkvNursKJaUfdpoPrUtIDU1dPFYZTF%2FFzEFJbMMrGzckGOqUB96eXne5zCIdb0bxjoZ96zsgSw%2BeZ%2BRteULNP0fdopnQX0D3wUWg3j5tmaLJEooW1icW6VZRtUNylXe9UlUQ6M7AeKm2FZksZH0d%2B%2FpcZpq0iD5yIYF6FCzy1x8W%2FpDEEm9bkx1XMVUkEOvdnyKtffE%2BIVzonlHwbO6TQ67cLMNM%2F9u%2FnCSVAlDw%2Bmee7xn2m7e8HbHa3DoVvRnh4Q8Kk6o5Dr98o&X-Amz-Signature=996c19f7db7b0aaa6b91202a11f6946ec98b97f17f5c820049efc87b944cb6ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN4OLSF2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHr5zLwnBadey5kd8xn696Su6w617QG5GhsCIR8i7hEvAiEAm%2F1%2F8ZcMvvyrZpil4Sxuqq2TNjbfijtsG%2Fn9M6gWlKgq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDLK7Mb1trT8ZRxzt0CrcA24L7AL6%2BcJeD9t6L%2FDovSVhQrMQSY%2Fw5MndaJNWbo62uc4P%2BDvcHr%2BmRPt3hj28RU%2BPE14eBpygnpQt%2FYzfggLnT4kW5Flds0lka2RQBbrmqCsoud54wscNI10ZoqNM2oDSZ76%2FOvVVA6yFmQsPWTuBaUfwNFJS5C40db3dy6cCknCl2a0Og9BR1tzOT%2F7X1T0euQe7NZFD0M0tpzOIDJTot5ypsBhlwUV2JKzjN3hKXgM3NgltcPci7AvvdREYlL8%2B7uMSvo1%2BD2Hq6mK5KzPsd8IH%2Btdnlqacy2R1xVMQIfYemNDi7%2Bpu06Ha17%2Fj%2BUbbl63J%2BAArv%2FgNiXMcqLsz6G69dRFGdmvYq3v5KQn%2BBYBnZgRMe2ZFUXORcSQ709zh8RndJxYfroKhDOHn%2F2XrfyYdolu6Y%2BcC7wAsKghwGI2v248lVl9610GYXS4G%2B6LPla6xVGJCy7BZJJv5%2FS4yJ7py%2FPrVI%2BuSwYiAy0NnUtmwxohoqTrHtiqTtYS%2FOVzj%2BQQ5rVc%2FPXGZPmDsOAEA%2FQeV03m16APkxCgksGVBIoK6r8bobiuEb7g4npBcn3UnfA5X5uKBgn5XhibI089PkvNursKJaUfdpoPrUtIDU1dPFYZTF%2FFzEFJbMMrGzckGOqUB96eXne5zCIdb0bxjoZ96zsgSw%2BeZ%2BRteULNP0fdopnQX0D3wUWg3j5tmaLJEooW1icW6VZRtUNylXe9UlUQ6M7AeKm2FZksZH0d%2B%2FpcZpq0iD5yIYF6FCzy1x8W%2FpDEEm9bkx1XMVUkEOvdnyKtffE%2BIVzonlHwbO6TQ67cLMNM%2F9u%2FnCSVAlDw%2Bmee7xn2m7e8HbHa3DoVvRnh4Q8Kk6o5Dr98o&X-Amz-Signature=f611df894fc70c5606d924ad0c79fa327c7fe5ccce16a8843a0fd3479fa2c98c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
