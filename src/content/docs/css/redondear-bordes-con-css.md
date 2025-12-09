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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QTHIO7I%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T071512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbFogFpHANaptgHSuZWXAEV688gQcd1wYS2zvqD4X1cQIhAPiNAfMHa3tYDmn23dwZyXvUvT8V9VXEHm9AryxDMbfMKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwa%2FXdSAsfgC7liBQIq3ANKjtdWiVfNJNkgrd2Q15BYOlznpwIWpBTYuBb%2FIOAyTBumH4eFtwLLkijlJaGBuXmqv0traYCMITvSbkfPCyOTqrb79SBOBH%2FQErnXSvS9jhDGZIAVNyumPT2Tv1evmfqB4FvvddZuZy7ULxtxPmzTGg9rqQUVRlrCwy05gq8K7C1kpv5g3pho5tckpE5yC4GTYXiJmsFOxtBwCvfag2Tn2FGOMoEvHXN%2Fza4LQOEtrtnKjfSIXnl%2B%2FPO6NjmGEt3hgnd8nSKhg7jt%2BQniFJbUzKiD6bBNpLNqcfhOzDoSmtmzi1OI1wogDWIF5m3rvDNYKybTHs7l4CMJO%2FV%2F17XzYX2c1OlUzMjMT%2FESTwKQRsuQSeb3qk%2BaeOzWencICEQEADwX1tZOKi%2BLD9WNe40p2GpC1633TQ86aHMUccq%2Fe7Si7yPDnUAYf8A%2B5ng%2FmionCIjaR6GlAJQY09QfgCN4C2LurjSESGk0%2FU%2Bc%2Fli1TRZWPKOPppMRQdZ7sEt47py4ONBF9%2B2p9hfyDkKzFr2W2VMyjGdXZqK4pkyjNPI%2F3bGHpq6BwHG1EMOyky2DW9b6RVnmEUjZBvUvXu5t7GWRCPtN4H8mNLye9bn0Kqu8dWu5m4jGrimBYDsrnDClh9%2FJBjqkAT3t1Rr%2F0b3dxyM2cg4EanNLC1SLlbzNkY8a0eWAMDwcKg6eCRfCFxw%2BGKEemt%2BmokI7%2BA95Uyc03Eo3yE%2F1TjVLBzKHUUUTt%2FGdbuMgTBg%2FC61O34oUNXxHQtVmI3a%2FN0iVVmj4%2BkHDmKL9MxAWFqNpziJ88kHxL%2BOkmhmPzdz2l2ZZGfs6l14NVH3scLT3%2F2O5OVutrstf%2BhzE29uEGeCJlCvj&X-Amz-Signature=2438137756b732ad1f0883e2a93205d02718392376b3bbe9668da1fa69c60af8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QTHIO7I%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T071512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbFogFpHANaptgHSuZWXAEV688gQcd1wYS2zvqD4X1cQIhAPiNAfMHa3tYDmn23dwZyXvUvT8V9VXEHm9AryxDMbfMKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwa%2FXdSAsfgC7liBQIq3ANKjtdWiVfNJNkgrd2Q15BYOlznpwIWpBTYuBb%2FIOAyTBumH4eFtwLLkijlJaGBuXmqv0traYCMITvSbkfPCyOTqrb79SBOBH%2FQErnXSvS9jhDGZIAVNyumPT2Tv1evmfqB4FvvddZuZy7ULxtxPmzTGg9rqQUVRlrCwy05gq8K7C1kpv5g3pho5tckpE5yC4GTYXiJmsFOxtBwCvfag2Tn2FGOMoEvHXN%2Fza4LQOEtrtnKjfSIXnl%2B%2FPO6NjmGEt3hgnd8nSKhg7jt%2BQniFJbUzKiD6bBNpLNqcfhOzDoSmtmzi1OI1wogDWIF5m3rvDNYKybTHs7l4CMJO%2FV%2F17XzYX2c1OlUzMjMT%2FESTwKQRsuQSeb3qk%2BaeOzWencICEQEADwX1tZOKi%2BLD9WNe40p2GpC1633TQ86aHMUccq%2Fe7Si7yPDnUAYf8A%2B5ng%2FmionCIjaR6GlAJQY09QfgCN4C2LurjSESGk0%2FU%2Bc%2Fli1TRZWPKOPppMRQdZ7sEt47py4ONBF9%2B2p9hfyDkKzFr2W2VMyjGdXZqK4pkyjNPI%2F3bGHpq6BwHG1EMOyky2DW9b6RVnmEUjZBvUvXu5t7GWRCPtN4H8mNLye9bn0Kqu8dWu5m4jGrimBYDsrnDClh9%2FJBjqkAT3t1Rr%2F0b3dxyM2cg4EanNLC1SLlbzNkY8a0eWAMDwcKg6eCRfCFxw%2BGKEemt%2BmokI7%2BA95Uyc03Eo3yE%2F1TjVLBzKHUUUTt%2FGdbuMgTBg%2FC61O34oUNXxHQtVmI3a%2FN0iVVmj4%2BkHDmKL9MxAWFqNpziJ88kHxL%2BOkmhmPzdz2l2ZZGfs6l14NVH3scLT3%2F2O5OVutrstf%2BhzE29uEGeCJlCvj&X-Amz-Signature=3ff036a84821458e3f3f148001d534a3dcb4f89d452344cc62068823b5e5c5fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
