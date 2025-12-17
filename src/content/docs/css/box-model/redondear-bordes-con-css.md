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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN4OIWNH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNC%2BFq1FMD%2Fk%2BY%2BT92nuoagVrNUrT5MvBWprDRBu0JFwIhAPBt5W5AIpgjA1Zq5jf8CqLnalWH4fF0yPyg9kdkv%2BFrKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2F1uZqMmQPp58GcDcq3ANebEOZfaULbB0J%2BTSYc1eOKuzpkNt%2FkPy74fAMjciSy5Lf6UXCQ2e3Npxpw%2B85Db9NYO5tF2c%2ByRBFi0eB00jkG7o%2BQKkY2XUfuqYtBpbu1RNd68DtzO%2F5p0FOY3hMKfHwxcQ1BS4e5c7QwdtBhBdt2kxlflZjYdQqdPaqi00JdKlCpdT4b8up68Z1DueBhAh%2Fj5e%2B7U%2F9GwTXugbmeXm1VfEh%2BDDt9jnEB2TSFOCR0vP2UKM6I9V8DFmu1Ajhh8i0zd0fPGmmf07Z93Vp6%2Fn2e0XLP1t2jj%2FkvPw2DdcQmq6PgjeiRF1L1SowETEHE7VogeM7gkWhbaZycFAl9tRRmnHze0J9idUAjozdQ6jtJ7uBSrKKGDsPgl6kjK78yf5ee%2F2%2FphTLWmu9D6k%2F2H3%2FDL2mvcg8nl4oekL45TCmZ7ixSvQx8LFfL%2BU8jrlaaWfvFhNZW98YTueKYsvrIBdYMVk5ZXsgrRAzmZ%2F%2BSeC%2BSE%2BL2bqPCRyKCTsxSd2l8TT5hyZa78sVP%2Bds1cdD5XH3%2FXP5uVgdOQwFs%2BbrF1AB2ox75jIX8E7M4wVzQ4ffzJmhTVfJ4pUuD7oIerFYN2%2B7HhcsU%2FXCTRTTV82Yc3kMTbjotehh3zXUrq06rTDfoIvKBjqkAV42XWR5f7waUwQkTAq4ztGygg70L6%2FolTx8iM2xDE%2FfqzyE%2BPb%2BTxL8S%2FxoxPXGjn8TsDlN0mhnv%2F6BcTcgfx5iNcwVK%2BKxjL%2FixnsU%2FjjiQVjd99mmKpb%2Fku77uQE3R9kHYBf7hQ0cWZnd5LeSTBc7lsQQcgi53QXOo4mKY5e%2FfYRvW4EsFONIGYvlMGIFKGFtA8Qk3r0jiyzpJFG3N77PktPp&X-Amz-Signature=384596500f93706cd59bc8519f3346401204cfe2fc9283cf478c0298efcc6ce5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN4OIWNH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNC%2BFq1FMD%2Fk%2BY%2BT92nuoagVrNUrT5MvBWprDRBu0JFwIhAPBt5W5AIpgjA1Zq5jf8CqLnalWH4fF0yPyg9kdkv%2BFrKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2F1uZqMmQPp58GcDcq3ANebEOZfaULbB0J%2BTSYc1eOKuzpkNt%2FkPy74fAMjciSy5Lf6UXCQ2e3Npxpw%2B85Db9NYO5tF2c%2ByRBFi0eB00jkG7o%2BQKkY2XUfuqYtBpbu1RNd68DtzO%2F5p0FOY3hMKfHwxcQ1BS4e5c7QwdtBhBdt2kxlflZjYdQqdPaqi00JdKlCpdT4b8up68Z1DueBhAh%2Fj5e%2B7U%2F9GwTXugbmeXm1VfEh%2BDDt9jnEB2TSFOCR0vP2UKM6I9V8DFmu1Ajhh8i0zd0fPGmmf07Z93Vp6%2Fn2e0XLP1t2jj%2FkvPw2DdcQmq6PgjeiRF1L1SowETEHE7VogeM7gkWhbaZycFAl9tRRmnHze0J9idUAjozdQ6jtJ7uBSrKKGDsPgl6kjK78yf5ee%2F2%2FphTLWmu9D6k%2F2H3%2FDL2mvcg8nl4oekL45TCmZ7ixSvQx8LFfL%2BU8jrlaaWfvFhNZW98YTueKYsvrIBdYMVk5ZXsgrRAzmZ%2F%2BSeC%2BSE%2BL2bqPCRyKCTsxSd2l8TT5hyZa78sVP%2Bds1cdD5XH3%2FXP5uVgdOQwFs%2BbrF1AB2ox75jIX8E7M4wVzQ4ffzJmhTVfJ4pUuD7oIerFYN2%2B7HhcsU%2FXCTRTTV82Yc3kMTbjotehh3zXUrq06rTDfoIvKBjqkAV42XWR5f7waUwQkTAq4ztGygg70L6%2FolTx8iM2xDE%2FfqzyE%2BPb%2BTxL8S%2FxoxPXGjn8TsDlN0mhnv%2F6BcTcgfx5iNcwVK%2BKxjL%2FixnsU%2FjjiQVjd99mmKpb%2Fku77uQE3R9kHYBf7hQ0cWZnd5LeSTBc7lsQQcgi53QXOo4mKY5e%2FfYRvW4EsFONIGYvlMGIFKGFtA8Qk3r0jiyzpJFG3N77PktPp&X-Amz-Signature=c68d585e0f1ffbaea8cc0afd7d9aaaf09436c33578b94a756ee4d0c9e4a3b448&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
