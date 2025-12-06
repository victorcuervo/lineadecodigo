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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOJEFI57%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR4%2BOhwlhIi4%2F31MhTZt1qmwmhoCvdwY399juTz5QWBQIhAIc8jqBY6P403VNRhdVcwy0RVxnTWLI9fbflSllxnvSQKv8DCHEQABoMNjM3NDIzMTgzODA1IgxPg5p%2BcE8XTyRPgRsq3ANimJnB45LiUmABcZic14p6jZX0hAnm935e%2FQ%2BlldGDZrsrgdhursixG6XLjy3FmaZ86wOIKtnQCyJK8iEt3S8LAhzrN9cDpGFJsZccBr8niRxvPIp2VghuAs86V11NB2Kpr0Gr%2B%2FZ1f1r8ftTMkfC%2FQc8gj1WxjUj77OIR8ZvY4hd3Qdi6zYB9HaayWNEczea9HOXNl7QziX%2FgeS49g1YPYq7PlciTHerpanvWA9zMsxsiKXK%2Bcpf9BSaCOXDN1yq8JgtRZAw7VMAY7hTs9uXe43TnnKXZaZpovu0zGIMVVntYGbiEyzLKazsMHIjx4CTzaKov9pJ15ZJ7%2F%2FVB8DIKfYc3U%2B5XdoUfhYMofPnJ5fEIZMIIlm98Gxvyjex3fHMfJE8BIr22Zx7JO7Gp4MJU2JGSZ7y0uSnBqrOQwMN2vjynzxh4MqjAjLhRlF3x%2FNfsVFY%2FI6Z9Q5qULCzyqOr28R6vfaTZVAuG3cW6VvwOPrI85oWHF1bOcX2Ct7srxcwSyEU42RYB0250jiDubxWV3h%2FmvkyTfHXod5BngZwxavUeYThqY%2FhsvjLYjW51e789%2BLNTnR9AtyQbBIGSz%2BI2z8pe93a9MlrwP8BZL8HkygtxIBHX5d7mAfsJHjCVvc%2FJBjqkAenRxYjjtBDh9eKcbT02jfY3VHYiArqKzQdmzvhhN4S0IIUm0i1LMtYrBLR1cPHk5IExtQOQ%2FtyU3Uc1Jdaz%2F5xOydLpw0uP3X6sMKUBDv177K%2Bt%2FUnKvQqloGBjkiM370kFYbuZZQ94jKaJ8ANC8%2BlzPylzDpCm4J3YuM1uOXPEeW3zIXVKQHHXCJ7uqZQfdCKO%2FlvaiFm0RUVdy7kZiRiJnn47&X-Amz-Signature=780c0333a2b704e48875a2f8e589d9e776da8cb68b9f9fcc5654cecfff70a0b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOJEFI57%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR4%2BOhwlhIi4%2F31MhTZt1qmwmhoCvdwY399juTz5QWBQIhAIc8jqBY6P403VNRhdVcwy0RVxnTWLI9fbflSllxnvSQKv8DCHEQABoMNjM3NDIzMTgzODA1IgxPg5p%2BcE8XTyRPgRsq3ANimJnB45LiUmABcZic14p6jZX0hAnm935e%2FQ%2BlldGDZrsrgdhursixG6XLjy3FmaZ86wOIKtnQCyJK8iEt3S8LAhzrN9cDpGFJsZccBr8niRxvPIp2VghuAs86V11NB2Kpr0Gr%2B%2FZ1f1r8ftTMkfC%2FQc8gj1WxjUj77OIR8ZvY4hd3Qdi6zYB9HaayWNEczea9HOXNl7QziX%2FgeS49g1YPYq7PlciTHerpanvWA9zMsxsiKXK%2Bcpf9BSaCOXDN1yq8JgtRZAw7VMAY7hTs9uXe43TnnKXZaZpovu0zGIMVVntYGbiEyzLKazsMHIjx4CTzaKov9pJ15ZJ7%2F%2FVB8DIKfYc3U%2B5XdoUfhYMofPnJ5fEIZMIIlm98Gxvyjex3fHMfJE8BIr22Zx7JO7Gp4MJU2JGSZ7y0uSnBqrOQwMN2vjynzxh4MqjAjLhRlF3x%2FNfsVFY%2FI6Z9Q5qULCzyqOr28R6vfaTZVAuG3cW6VvwOPrI85oWHF1bOcX2Ct7srxcwSyEU42RYB0250jiDubxWV3h%2FmvkyTfHXod5BngZwxavUeYThqY%2FhsvjLYjW51e789%2BLNTnR9AtyQbBIGSz%2BI2z8pe93a9MlrwP8BZL8HkygtxIBHX5d7mAfsJHjCVvc%2FJBjqkAenRxYjjtBDh9eKcbT02jfY3VHYiArqKzQdmzvhhN4S0IIUm0i1LMtYrBLR1cPHk5IExtQOQ%2FtyU3Uc1Jdaz%2F5xOydLpw0uP3X6sMKUBDv177K%2Bt%2FUnKvQqloGBjkiM370kFYbuZZQ94jKaJ8ANC8%2BlzPylzDpCm4J3YuM1uOXPEeW3zIXVKQHHXCJ7uqZQfdCKO%2FlvaiFm0RUVdy7kZiRiJnn47&X-Amz-Signature=faba7911eb09709d806cb3ffde2e9f546e5b505a49deb93418ef5b7c0411e644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
