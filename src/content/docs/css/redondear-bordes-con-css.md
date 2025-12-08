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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GWB6JH5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T111807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxJI7jpEANrFsWikujWRblXSTqJGIHyE1gkasbk7H6bAiAta4Fxksd1UfEX7kvNvaBnDGYNZNa5UC4f4EVTC034pCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkYAT583riw89kAlsKtwDkPvaYRyCL%2FZs7h%2FtX51rUd4EqfGIZZgK4LMqu5CJLQohmDl5hxCByjlZcI19ANinfPj17e%2FGWqgqslpk6%2FPJjFXrmkWWrrbaiXz9seCHBxdgI1PnFi%2Beeg6SRqykl5If%2BHRYNED5kL7SsHcVf3wcbn%2FiX90UhMyO%2BBrzuDYHQVUFoA1oPOFa7QQtF9llEkntdU5d8YJQYpY4KnP%2F0jhiD694B5rqGKAAFlYIC9ol%2BbeMiwmNmKdPvodH7cPOz0lAvHsw772BHugYgFTN%2Bsabl68yby3kSlUNLsL%2F3%2BMT35PjjBZrLHJt3JgK9%2FNdBpnquRxObUvcP%2Fd12R%2F61Dg1gEmzGuqVSy7BhWrgWnkj5T3ONZ0UdxPJY5mJ5G1KGg8h%2FW8c3OfpRyc%2BEgTdalGlK1eNf%2Bp7l6j2tJt%2B6FuHae6kJGrAFiR5rllqKevJF24aSKlrh624b%2BlY2Cl8TjSiOjK30lEOR4W2D2U%2BVpNQdUfjbvpbRKS8%2FrtvyHcNfkbLLJh%2ByeTofSue5NXELyd2s3AQSj19lJp5XjAiIAQONxJOlUMscl3nO1wCysos184TPqcYZ%2FUjzzOsT4UkuDO%2BoOOfEjJyhSrfkmmagKpipc0hVZMyI%2BnTeMzlXr8wpe3ZyQY6pgHhHdgU3m31QpIb9d2VYZCB4zb73z2NrQOhU6%2FRAAR0NxJvtCEQ9%2BwL6xyQGkhP8JxeedD3hKHzCChvGu99VG87jiebGRxCxvCz6JeizLgzcdh%2Bsr9wm%2ByK8tIn6EdNUvUPEBkw5Ll3p5bu8ZCKCvcmgNVvSDJWdWXBMPipKpmhpANjs5JD7H9Wtvv%2BMM6thATPxTyEs4RHNIo0sgSzGxWMa5Gapz%2Fl&X-Amz-Signature=2e69dcdf800621dac5c256b04cf91c4b0d5a35681ae74d8e7aa25dd686c86880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GWB6JH5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T111807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxJI7jpEANrFsWikujWRblXSTqJGIHyE1gkasbk7H6bAiAta4Fxksd1UfEX7kvNvaBnDGYNZNa5UC4f4EVTC034pCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkYAT583riw89kAlsKtwDkPvaYRyCL%2FZs7h%2FtX51rUd4EqfGIZZgK4LMqu5CJLQohmDl5hxCByjlZcI19ANinfPj17e%2FGWqgqslpk6%2FPJjFXrmkWWrrbaiXz9seCHBxdgI1PnFi%2Beeg6SRqykl5If%2BHRYNED5kL7SsHcVf3wcbn%2FiX90UhMyO%2BBrzuDYHQVUFoA1oPOFa7QQtF9llEkntdU5d8YJQYpY4KnP%2F0jhiD694B5rqGKAAFlYIC9ol%2BbeMiwmNmKdPvodH7cPOz0lAvHsw772BHugYgFTN%2Bsabl68yby3kSlUNLsL%2F3%2BMT35PjjBZrLHJt3JgK9%2FNdBpnquRxObUvcP%2Fd12R%2F61Dg1gEmzGuqVSy7BhWrgWnkj5T3ONZ0UdxPJY5mJ5G1KGg8h%2FW8c3OfpRyc%2BEgTdalGlK1eNf%2Bp7l6j2tJt%2B6FuHae6kJGrAFiR5rllqKevJF24aSKlrh624b%2BlY2Cl8TjSiOjK30lEOR4W2D2U%2BVpNQdUfjbvpbRKS8%2FrtvyHcNfkbLLJh%2ByeTofSue5NXELyd2s3AQSj19lJp5XjAiIAQONxJOlUMscl3nO1wCysos184TPqcYZ%2FUjzzOsT4UkuDO%2BoOOfEjJyhSrfkmmagKpipc0hVZMyI%2BnTeMzlXr8wpe3ZyQY6pgHhHdgU3m31QpIb9d2VYZCB4zb73z2NrQOhU6%2FRAAR0NxJvtCEQ9%2BwL6xyQGkhP8JxeedD3hKHzCChvGu99VG87jiebGRxCxvCz6JeizLgzcdh%2Bsr9wm%2ByK8tIn6EdNUvUPEBkw5Ll3p5bu8ZCKCvcmgNVvSDJWdWXBMPipKpmhpANjs5JD7H9Wtvv%2BMM6thATPxTyEs4RHNIo0sgSzGxWMa5Gapz%2Fl&X-Amz-Signature=727325133a82a73a24a822bd16745e572b6c67ff1716ed46b8b317296b7a6fbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
