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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYYP2RRY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T144750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC2eH9kxKJSt2w%2BpBlcV%2FULsHPU35qz%2B8lAS%2FeAfi0cQIhAK3ocEEm%2F0xFYXZuNSb3u7weTEEUgORzHoAnsCBSArqeKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwG0fBUgFpMlGhrrvIq3APlFSUPV1GFuOcCUX9fHGSaQFix83Us5bm%2FOIKbPiYttCPhOaFHNg9XEZj4n1ZZ%2FvodxIPzkkdZkL4Q%2B%2FKMc46YSxTy5o7blUw2LtEoeWBGGBPQBBX94GOTl3u5pYEET%2FgTGJDdea4FaXjvIggskc1BIGMnJBU0uSbnmZ1ZSDIySm2qrjfvjlL1JFfOYtNtDp5%2Bh3Zz82vrf0mlf%2BE3LK%2Fv1II3AW9NT3nlKz5gjLhFtwvXUkvYXF5YqbpP7WD7dLeoO3nL4TjEuk8sWQtlt5MLvkoAuDC5UDyQzReudI6F2cBFnKP7qBxlleRNW%2B5PaVn8%2Fv7bZfjH8XhzvAWQnABBAD%2FNZv%2BYrdQrOOxPUsIw3UCTgu8us6GR71IAFs0i%2BhVYUNx6nY4jDtc91Yon0uStLBdRduvU%2FupKorxnd0qeUFNGapOnT5%2FyK6U4pdh7deuuzNIUttkfj58J%2FwJJK1cw%2FCKoZNybiC%2BaXleDWZ2R9ZfvcFvCiVJQHuLj2PJDkYFvmYFk9DEFZTvoL9qv%2BVPTNtU69wuix41nES%2BfAYNn3O1%2BkcN0VthWL8EF2P2D2yVMiBSbvzAtbFQyw4zTQU7bL62N5Fawpcxsyfq9FdcYBbPkX9HJCJSO0LqfATD5wdvJBjqkAZ2dQNO%2BkwwrKwpcvitXehQP8bZ%2B6d2TjJkW4hR5LhxKEu5G7RKB0dPfggdEZ5pMd6PUii2p9pVAqmeBd7E2OYml121oF2X6n58ytGxQR%2BbPeIWZD%2F0KQJAQ74whYN8KvwhWmWLap07jGJZLz0L76sgvP9aRdetmEjy1QcKOWetB0kttaBv5xAEkzwY5kNbV6GG7XG8IsXbhXldCUC%2FIQ%2B8KRiAo&X-Amz-Signature=a79d76c297c345e993b4ceec732fb66dd4be96e07d6dc51ae884b38b34a7d848&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYYP2RRY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T144750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC2eH9kxKJSt2w%2BpBlcV%2FULsHPU35qz%2B8lAS%2FeAfi0cQIhAK3ocEEm%2F0xFYXZuNSb3u7weTEEUgORzHoAnsCBSArqeKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwG0fBUgFpMlGhrrvIq3APlFSUPV1GFuOcCUX9fHGSaQFix83Us5bm%2FOIKbPiYttCPhOaFHNg9XEZj4n1ZZ%2FvodxIPzkkdZkL4Q%2B%2FKMc46YSxTy5o7blUw2LtEoeWBGGBPQBBX94GOTl3u5pYEET%2FgTGJDdea4FaXjvIggskc1BIGMnJBU0uSbnmZ1ZSDIySm2qrjfvjlL1JFfOYtNtDp5%2Bh3Zz82vrf0mlf%2BE3LK%2Fv1II3AW9NT3nlKz5gjLhFtwvXUkvYXF5YqbpP7WD7dLeoO3nL4TjEuk8sWQtlt5MLvkoAuDC5UDyQzReudI6F2cBFnKP7qBxlleRNW%2B5PaVn8%2Fv7bZfjH8XhzvAWQnABBAD%2FNZv%2BYrdQrOOxPUsIw3UCTgu8us6GR71IAFs0i%2BhVYUNx6nY4jDtc91Yon0uStLBdRduvU%2FupKorxnd0qeUFNGapOnT5%2FyK6U4pdh7deuuzNIUttkfj58J%2FwJJK1cw%2FCKoZNybiC%2BaXleDWZ2R9ZfvcFvCiVJQHuLj2PJDkYFvmYFk9DEFZTvoL9qv%2BVPTNtU69wuix41nES%2BfAYNn3O1%2BkcN0VthWL8EF2P2D2yVMiBSbvzAtbFQyw4zTQU7bL62N5Fawpcxsyfq9FdcYBbPkX9HJCJSO0LqfATD5wdvJBjqkAZ2dQNO%2BkwwrKwpcvitXehQP8bZ%2B6d2TjJkW4hR5LhxKEu5G7RKB0dPfggdEZ5pMd6PUii2p9pVAqmeBd7E2OYml121oF2X6n58ytGxQR%2BbPeIWZD%2F0KQJAQ74whYN8KvwhWmWLap07jGJZLz0L76sgvP9aRdetmEjy1QcKOWetB0kttaBv5xAEkzwY5kNbV6GG7XG8IsXbhXldCUC%2FIQ%2B8KRiAo&X-Amz-Signature=4378b82e51a430fcf37a0619e6dd9115242c4ae948cd871e8bc624516bb29bfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
