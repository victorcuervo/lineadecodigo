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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOBPQLA6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T063747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBAAMm%2BY203GsV9EKTSAW0tsMm7ERsPTj4uwK58o3b2AiBQIPhI7%2BTHXDUM4%2FuVB%2B6ELuJd8XZkNasZj8dHcOhtYyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyFpyBC9lzPueLklyKtwDtf8Xfgm5MltOgp1Lm2SFFOwQjK%2BtIOxha9W6T7uYYhdJ6tHVgXYxLVshBby6NvBD1t36Om4FDOF6AInxXEPWLV%2FnTeYw%2FGExZKd1%2FPzYv9M20a5NnGBCIUM3EETcqynUNnBbPEm7quOU5KMNw%2B3ZfaKKUkXIdznxo3wmr99ZGyvq1duo2skXEf3xjO5FV%2FURBEzekiGycEr7cUguxjJe6C037fmetW1NzD%2FEnXH%2Bo2nWlMrroxuggubAd9Jol1fn1136cnqrAr%2B%2FdVlzqviR1VAm4oOdPlHDxB9PHTwqJhR3DXyOAkl0dOyhJYKokaZYEAlN%2B9riuKnVNSiqQX0F8GX9ryoznDgKxn619QlejTNZIQvSmHU7Y%2FTy9290y%2BsGSz1hcpp0XpaSIO9OPNK07RGAmwQ6J9dAxgwbuhdHIKe7zAAm6DTTt7Bu63PiouFN8I0Nat40qv08PH1gC2y%2BRdxhi6%2BgqfHhe82nVs1U%2Bqr5EbH6VcpetuUegF9JoJjF59bX7WMZbORqBmqKLOvqCmJX1A2ux5yRpZ2KeqNXA%2BIZfEgc5qr9d7dVjPu7DPc%2FYugyPRJgo1xruce3NNLlZedJTl%2Bz1Epdc6LGmPtp%2BgndIkb%2BVlFbosgyx0YwndDZyQY6pgHAZMPNjy7hqNd5JmNy5qMVYfKnvDE52mXG1uK%2FgvoVS9zaBJlFCQfLpvqkAjY7e5l5ODi6ow2H89u41oG%2FAF94NCw3ZNBZf3kY9fCw0qGumzhd6z2tewlv%2BbKBaK9Y8ajnWr4q%2B1%2BOxsYzMfh1DWFR%2F0aDhhZFcFH%2FgfK6UgvnkxQxKGnasv9thOA4wxx4EjFM%2F0is4cNw5ehU82DUXSmo0QdeV1Nw&X-Amz-Signature=568a928d222a4510a58c1287c3a4165870af24d8896bb3aeca846371e439203a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOBPQLA6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T063747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBAAMm%2BY203GsV9EKTSAW0tsMm7ERsPTj4uwK58o3b2AiBQIPhI7%2BTHXDUM4%2FuVB%2B6ELuJd8XZkNasZj8dHcOhtYyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyFpyBC9lzPueLklyKtwDtf8Xfgm5MltOgp1Lm2SFFOwQjK%2BtIOxha9W6T7uYYhdJ6tHVgXYxLVshBby6NvBD1t36Om4FDOF6AInxXEPWLV%2FnTeYw%2FGExZKd1%2FPzYv9M20a5NnGBCIUM3EETcqynUNnBbPEm7quOU5KMNw%2B3ZfaKKUkXIdznxo3wmr99ZGyvq1duo2skXEf3xjO5FV%2FURBEzekiGycEr7cUguxjJe6C037fmetW1NzD%2FEnXH%2Bo2nWlMrroxuggubAd9Jol1fn1136cnqrAr%2B%2FdVlzqviR1VAm4oOdPlHDxB9PHTwqJhR3DXyOAkl0dOyhJYKokaZYEAlN%2B9riuKnVNSiqQX0F8GX9ryoznDgKxn619QlejTNZIQvSmHU7Y%2FTy9290y%2BsGSz1hcpp0XpaSIO9OPNK07RGAmwQ6J9dAxgwbuhdHIKe7zAAm6DTTt7Bu63PiouFN8I0Nat40qv08PH1gC2y%2BRdxhi6%2BgqfHhe82nVs1U%2Bqr5EbH6VcpetuUegF9JoJjF59bX7WMZbORqBmqKLOvqCmJX1A2ux5yRpZ2KeqNXA%2BIZfEgc5qr9d7dVjPu7DPc%2FYugyPRJgo1xruce3NNLlZedJTl%2Bz1Epdc6LGmPtp%2BgndIkb%2BVlFbosgyx0YwndDZyQY6pgHAZMPNjy7hqNd5JmNy5qMVYfKnvDE52mXG1uK%2FgvoVS9zaBJlFCQfLpvqkAjY7e5l5ODi6ow2H89u41oG%2FAF94NCw3ZNBZf3kY9fCw0qGumzhd6z2tewlv%2BbKBaK9Y8ajnWr4q%2B1%2BOxsYzMfh1DWFR%2F0aDhhZFcFH%2FgfK6UgvnkxQxKGnasv9thOA4wxx4EjFM%2F0is4cNw5ehU82DUXSmo0QdeV1Nw&X-Amz-Signature=5f1921a846d5781999d6f1597963f9a4176c211afa8f4ef90e1cad22c969718b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
