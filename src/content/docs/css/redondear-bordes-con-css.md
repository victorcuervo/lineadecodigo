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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MZ2MNGE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T230957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTuTwu%2Bq1OuGEKA5mO55%2BnvSv6O%2Bu3sa6B5C2HmIznDgIgEEVHFnllS5l4RuyOLcI1HKL71aYQM9d8MllKw7rnEoEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDOhMlyiMssKY9xMtPyrcA%2FsaspduIzh9VKDq7nZK0mmWBFu8TUmsYE0u6kbbZejjYgD5hI%2Fkx%2B4kbCSirEXzAotriYAe7crLU6Og2Hf660j8AAFJ9fAv1%2BAIfmIszED%2BXMR%2BY%2BtLuj7O1RdHHd1sRyedEBKvP4s%2BEZ%2FP3SexuAIwBW%2BhY2vpSfFfo8LuhhWRhiZmz8hIpvOy5kZSKh7kurs5tA8uEoZ%2BfqJUl6ZoXceDZhA9ETu828goXBenON3151t%2BbWhKIqntb9Wb3%2FVKv7%2BqXJcZuv0tzhMolCx2ExuR%2B2d9RZ36Nk27GY1lVHCPccao55cDq7oQ0uljGosE2g0wbgpsTRPzhD6r7rzgWcF%2BblPLUnmrNur%2Bu7HSlyZavKG8Nnx56%2FsqBOngiFFhreDr75m3fd1sw%2BcUcv1Fj6WP%2B2f6ELZlLSZmlhpsTbGLd6QZ6W9JbZCzA0Chp%2Bl5sZ0tHJzJzd%2BrqtDAcl6QNa%2BpDM7rs5Sz9fUIPoxtKj17IbGkCoR9dJqAbGAekZ%2BI0E%2BWXHArLmBM9G%2Bh1TDTTamPbChrrAJB2Q9qFB1ofnVvDrKVWOFDmRCDpkc%2BEjKDCFuOGviKPpkt90ngHoLjr%2F1kDCC%2BiEGZYwc8kQ8ErhNqQf2u%2BUVPVFM1b04EMP%2FFzckGOqUBR9R8bFnJESPMkAOOgTjevsw7BcUfTrW%2BeFct%2FdpBIFstoAsngOapWkoQM5Ytwb57UGQu%2FguhvqH69jpF%2BS45y2SAsRio60eL%2FSarU42FFAia%2Ffs9YOCPl2Fd9UGfdo1GW%2BuK9ecWQWYMzhbV4P%2F1KXgEklqhrUoSFjUs%2BO4uQWB357zetuC8Eqj8i7LwthQdXTH6B8Wg5n2k7L8b2wKcvAszwLoP&X-Amz-Signature=633743f3cf962e3da2a574b298220956a8e741d3b74c0bbbd3f2c9d8de61ad1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MZ2MNGE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T230957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTuTwu%2Bq1OuGEKA5mO55%2BnvSv6O%2Bu3sa6B5C2HmIznDgIgEEVHFnllS5l4RuyOLcI1HKL71aYQM9d8MllKw7rnEoEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDOhMlyiMssKY9xMtPyrcA%2FsaspduIzh9VKDq7nZK0mmWBFu8TUmsYE0u6kbbZejjYgD5hI%2Fkx%2B4kbCSirEXzAotriYAe7crLU6Og2Hf660j8AAFJ9fAv1%2BAIfmIszED%2BXMR%2BY%2BtLuj7O1RdHHd1sRyedEBKvP4s%2BEZ%2FP3SexuAIwBW%2BhY2vpSfFfo8LuhhWRhiZmz8hIpvOy5kZSKh7kurs5tA8uEoZ%2BfqJUl6ZoXceDZhA9ETu828goXBenON3151t%2BbWhKIqntb9Wb3%2FVKv7%2BqXJcZuv0tzhMolCx2ExuR%2B2d9RZ36Nk27GY1lVHCPccao55cDq7oQ0uljGosE2g0wbgpsTRPzhD6r7rzgWcF%2BblPLUnmrNur%2Bu7HSlyZavKG8Nnx56%2FsqBOngiFFhreDr75m3fd1sw%2BcUcv1Fj6WP%2B2f6ELZlLSZmlhpsTbGLd6QZ6W9JbZCzA0Chp%2Bl5sZ0tHJzJzd%2BrqtDAcl6QNa%2BpDM7rs5Sz9fUIPoxtKj17IbGkCoR9dJqAbGAekZ%2BI0E%2BWXHArLmBM9G%2Bh1TDTTamPbChrrAJB2Q9qFB1ofnVvDrKVWOFDmRCDpkc%2BEjKDCFuOGviKPpkt90ngHoLjr%2F1kDCC%2BiEGZYwc8kQ8ErhNqQf2u%2BUVPVFM1b04EMP%2FFzckGOqUBR9R8bFnJESPMkAOOgTjevsw7BcUfTrW%2BeFct%2FdpBIFstoAsngOapWkoQM5Ytwb57UGQu%2FguhvqH69jpF%2BS45y2SAsRio60eL%2FSarU42FFAia%2Ffs9YOCPl2Fd9UGfdo1GW%2BuK9ecWQWYMzhbV4P%2F1KXgEklqhrUoSFjUs%2BO4uQWB357zetuC8Eqj8i7LwthQdXTH6B8Wg5n2k7L8b2wKcvAszwLoP&X-Amz-Signature=a901697ba0637b50378a3cd158efb088e6f9f42eddb35324a0968433e7816c89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
