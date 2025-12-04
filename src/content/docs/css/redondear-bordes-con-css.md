---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I7VPVAM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIAImAfM7tI3ECGBREoM5FUV%2BANfWWqeA1LqJId772DMoAiA1ZxnRpbXD%2B%2B4j5e3NERcKlBAMbiqEmYn%2BM4%2FBAtsa%2Bir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM1uJ4Zape5ojn8spaKtwDcwXbIAaCtEcvSlZkFsU%2FMKLA1WPe3wyrHf0M0RrT6ShWBgKBA96yJRPmurQvU7dkCEI8YYdnO6D6vzIlvz3DDXSR4Cwwo6KlbaLAJeCR1D7c%2F7wMENK0G39z1lYI%2FCQJxQ2LdK%2BS9kcPbd8MjsYtNeQf1kuWpoGbPTvjJMo6DTSTxnG6%2FrWgle4hv22%2BeAtNq99ebTS0ohoYjtkDCj4xxFa7l6gl49rXABJmdkPrGDlmH4QNPxuVLrwCGFD22NYrJx%2Bannb24bmh1XQPS2DqRW4XhARfK6UZ5qNNxRDF8t8WbMdmsxhww%2FTwlGi0CdxPTXIagIxOLaj8LYtUVFjGB0BmrN0XLJsjkDUmFtxheFETKNxRnn7oKuRr%2FloHh95dQyCIKYYcsW3slBjDCtWX7AQdlfmsKjOVgS76v0VX%2BdS4Pcg4f8wYJwpARIe2tW%2B9MuCYkQJmp51t%2Bb6V0AlipZPWchWe6uzuYoM4iSw%2Bxu9JZWeGUEK93pCytWZ2%2FHAhw4%2BYZM14JCfKMoXm57uNUqciaupwHT1YWg0oZdOnd8tArhhk71VaJLe1nNP2J6WwYXSMh9qrIZYlIdMiw2yNgreieSBeJmE%2BHomCM%2F5TYaImtyOcAJwvL5BVNUswsebFyQY6pgHxvXT1dzqdlWP3texcJGqCAoKbM6mHx8YxYoJBij4bLm9sbo%2F1uMBO%2BNCN4fdCl9qboP4ybB70J8iIFvS9kyO3RFPtriQPvG3jfy1Q%2BmUAE5szzkLTmATnktep%2BroFbTPU3ryvco5PFbTGzUDnWignBJ%2Fur6Xsaf5OnMOrulLDYsUjO7%2B9Fb%2F6KBV%2F388e9nogiGkgLJUrmUdaEg5FcQH8TtqqMk%2B%2F&X-Amz-Signature=86a40c396b697b52f9907d0dee3084b26f9742ff3ea64c24e3bcdc53015a5eb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I7VPVAM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIAImAfM7tI3ECGBREoM5FUV%2BANfWWqeA1LqJId772DMoAiA1ZxnRpbXD%2B%2B4j5e3NERcKlBAMbiqEmYn%2BM4%2FBAtsa%2Bir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM1uJ4Zape5ojn8spaKtwDcwXbIAaCtEcvSlZkFsU%2FMKLA1WPe3wyrHf0M0RrT6ShWBgKBA96yJRPmurQvU7dkCEI8YYdnO6D6vzIlvz3DDXSR4Cwwo6KlbaLAJeCR1D7c%2F7wMENK0G39z1lYI%2FCQJxQ2LdK%2BS9kcPbd8MjsYtNeQf1kuWpoGbPTvjJMo6DTSTxnG6%2FrWgle4hv22%2BeAtNq99ebTS0ohoYjtkDCj4xxFa7l6gl49rXABJmdkPrGDlmH4QNPxuVLrwCGFD22NYrJx%2Bannb24bmh1XQPS2DqRW4XhARfK6UZ5qNNxRDF8t8WbMdmsxhww%2FTwlGi0CdxPTXIagIxOLaj8LYtUVFjGB0BmrN0XLJsjkDUmFtxheFETKNxRnn7oKuRr%2FloHh95dQyCIKYYcsW3slBjDCtWX7AQdlfmsKjOVgS76v0VX%2BdS4Pcg4f8wYJwpARIe2tW%2B9MuCYkQJmp51t%2Bb6V0AlipZPWchWe6uzuYoM4iSw%2Bxu9JZWeGUEK93pCytWZ2%2FHAhw4%2BYZM14JCfKMoXm57uNUqciaupwHT1YWg0oZdOnd8tArhhk71VaJLe1nNP2J6WwYXSMh9qrIZYlIdMiw2yNgreieSBeJmE%2BHomCM%2F5TYaImtyOcAJwvL5BVNUswsebFyQY6pgHxvXT1dzqdlWP3texcJGqCAoKbM6mHx8YxYoJBij4bLm9sbo%2F1uMBO%2BNCN4fdCl9qboP4ybB70J8iIFvS9kyO3RFPtriQPvG3jfy1Q%2BmUAE5szzkLTmATnktep%2BroFbTPU3ryvco5PFbTGzUDnWignBJ%2Fur6Xsaf5OnMOrulLDYsUjO7%2B9Fb%2F6KBV%2F388e9nogiGkgLJUrmUdaEg5FcQH8TtqqMk%2B%2F&X-Amz-Signature=c353ec843514872160409343432d2e5a40385c1e276005530fe1eea498cce2bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
