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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZS4UIZW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T182751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFJFb5Pd3%2FQzvoy%2BCFBYUu42Zd6aNjzY3Pp1wNYsRhiAiAsQgOTnsngHZLo4JuGhsfHpvyfPMwG%2F6TggLEXSpLIeCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMgQir5nkK2DwBXoiOKtwDdGrOxSkNInqS8VLY9bV87Wd7CDW2w%2BATmMIV0kZHdWQKAcF2qBhjr%2F7Nk4yQuEUjD9iz3va91pv9PQluCy7I9LsChcFi%2FaRwNkIH8SZYbBGNlmzU8CWLsHcUuQgarrx30nUJqAjl03XMwrqJWK1KNd9kGn0qmwFVq%2FEr1g15R1Dt5SqXCMVgYTRr7eR00%2BGJL%2BsuASEVMAjyIM6D5Y6hvI6ldbjy5tpTFcR0h%2BTPhGSacUP7%2FNUZZ6ksFqXrI8QthNg8VwnyI37YZaD4qE5fTYPpI%2Bdes%2FuihlirhW3XedTn065YuF%2FUGxgBdjdCPr5ekxpDS7PpTapJfd31evyK4eDQW%2F0mUDIi9YOJVUvxY5rHZRvVDCY5N%2BVMS21MCm%2BfjLUTO5l%2FaxpZ%2F9TEPxcwjMMww2xN%2FMe6U1dW%2BKZoXEQjJeJGW9YhPt3v4hSh5l4rDxD7zPNz7JdtimVV8MDvM53%2B99s8zc2mKzMoVAChnyZ5vDz3024NDKJ3SxCMHgDrPqIbFupBmeSQzMDUSXYH4PGvCJoG8PZvLDBgSEFiCKuGk46zi9nQ1Ql9sd8Zurud1pLtDSKCf4c7VeEXGbR%2BsO0gsUZkRI2sv0U9l%2FmZigqJzf4A5gR4%2FFMuTJ8wt%2FDLyQY6pgELLVD1XTM7ejcO1B4kVme9rjoyicAiXjexLyhx7g99%2B57y%2FWu1dK41wblbIwFnBYN5aC5Ubnsigvrv6ksOpu%2FgwqOt1ex2sOgQ3SPcFR6NX3OybGljWaxr09B%2F6hywYYUvVhfq%2F4LhCjO4Rk%2BfDYvDZP0yeFJ6vnYnftJHWxS7fQY%2FYr8Maz6SBCBFrrFTXuh6dpaq1RWt24OJXUj7dOJmOzw7pGEL&X-Amz-Signature=ee0ea0c8e99af400a37eb675f09ebebd999c5401943cb0643e9d18b795ee39ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZS4UIZW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T182751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFJFb5Pd3%2FQzvoy%2BCFBYUu42Zd6aNjzY3Pp1wNYsRhiAiAsQgOTnsngHZLo4JuGhsfHpvyfPMwG%2F6TggLEXSpLIeCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMgQir5nkK2DwBXoiOKtwDdGrOxSkNInqS8VLY9bV87Wd7CDW2w%2BATmMIV0kZHdWQKAcF2qBhjr%2F7Nk4yQuEUjD9iz3va91pv9PQluCy7I9LsChcFi%2FaRwNkIH8SZYbBGNlmzU8CWLsHcUuQgarrx30nUJqAjl03XMwrqJWK1KNd9kGn0qmwFVq%2FEr1g15R1Dt5SqXCMVgYTRr7eR00%2BGJL%2BsuASEVMAjyIM6D5Y6hvI6ldbjy5tpTFcR0h%2BTPhGSacUP7%2FNUZZ6ksFqXrI8QthNg8VwnyI37YZaD4qE5fTYPpI%2Bdes%2FuihlirhW3XedTn065YuF%2FUGxgBdjdCPr5ekxpDS7PpTapJfd31evyK4eDQW%2F0mUDIi9YOJVUvxY5rHZRvVDCY5N%2BVMS21MCm%2BfjLUTO5l%2FaxpZ%2F9TEPxcwjMMww2xN%2FMe6U1dW%2BKZoXEQjJeJGW9YhPt3v4hSh5l4rDxD7zPNz7JdtimVV8MDvM53%2B99s8zc2mKzMoVAChnyZ5vDz3024NDKJ3SxCMHgDrPqIbFupBmeSQzMDUSXYH4PGvCJoG8PZvLDBgSEFiCKuGk46zi9nQ1Ql9sd8Zurud1pLtDSKCf4c7VeEXGbR%2BsO0gsUZkRI2sv0U9l%2FmZigqJzf4A5gR4%2FFMuTJ8wt%2FDLyQY6pgELLVD1XTM7ejcO1B4kVme9rjoyicAiXjexLyhx7g99%2B57y%2FWu1dK41wblbIwFnBYN5aC5Ubnsigvrv6ksOpu%2FgwqOt1ex2sOgQ3SPcFR6NX3OybGljWaxr09B%2F6hywYYUvVhfq%2F4LhCjO4Rk%2BfDYvDZP0yeFJ6vnYnftJHWxS7fQY%2FYr8Maz6SBCBFrrFTXuh6dpaq1RWt24OJXUj7dOJmOzw7pGEL&X-Amz-Signature=bb471378869489ddd461198acc42a46d75a915c212c94a3c6f7898575b176956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
