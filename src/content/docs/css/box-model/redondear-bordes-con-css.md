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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXXZLOYH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPrBMpZVzUOuuoQX3akR5IVnDZdnAfa2LdzqEMS69f4AiEAlgOPPGdXXlFLroNl1KEpSdDtWDDZCiwrYV7av8hPjVMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPKcSfizU0OwyopYHyrcAy1CNsdcus%2F4WBopyEI%2BbABl6CxNGZRNfjjn6QNGW%2FOWzIVdv5yqmsl7yJBZWrC5iU2T%2FjWW709ow6TWAutQCsXC2gjspeio4IpPmTyiCLU2%2Br9PGHAX%2BFVXnur2aJEawnn0pvAknd%2FXklLQcf9gI0TMtqdwdlqCSA6peNfp2nCJ%2Bw2W1jE%2FnstOoCNQJ0SiDM1tEl15QrJdso44lr7amGcAw1sIVCNhC0qUMbSqxEugCNwLInvJ8C3By%2BTGhOhPH34xe3jCs8BOSiu7JXTJ7OBLKtyt8ezS5RhnUdRcpo4h6yWbAbDgQnDHsQnhykBb66r6hsJEXNZMWM7aTaaWwHHdk4jNv5Boj5w5w2nel6jAGkz0YplH7XYG%2FtTucmwLxQvoV%2BUtnnM1j4Gu5Uoi9L69kJx3lnOIa8iIrDn%2BSbaDrrAh%2B8NYTSpHr5xGaZOyOhCwK5MNNcQNoJnrXpS70yRPYYN0BSUg%2FJK67P%2BYpk9wnOLhsHAOJ9xoZuNrU72ZH%2BesKuEDBFoWKLxAsCY1xPzTeQV2kI75NFIrn%2FF0GBf0yVMdK3jM%2FSOIlo%2FefmBu03a%2BHVmdIILjNulgaLpL8wOVP29sKKlP0LN0knSAv3t1qTlymO4lBAYgjciOMNeWiMoGOqUBiOGZ84BOZxwlS7xLUeiy%2F0SsBggL8LJyxiyW3PEgqyczwDxrJbOP8j1gpJt1Pl%2FHclSF5dQOPr05pD8JzXYVkAJ3cW0rnmxQsDpxZFvGvdUv1pzVkdOyUGZg5pAVwEodUtCAmjjT3ccPOW6S1%2B3fXBT0E1qtTI9%2Fa6i0Q%2ByvFinlN5KoMJnF09QGL%2BozMBtasjQ3MOvsqaPTkJBHIX%2B9EN9V4%2BP7&X-Amz-Signature=b773840cd789da9158f5a28a6bf2318587c2eb2489281b61998252a3f5323e7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXXZLOYH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPrBMpZVzUOuuoQX3akR5IVnDZdnAfa2LdzqEMS69f4AiEAlgOPPGdXXlFLroNl1KEpSdDtWDDZCiwrYV7av8hPjVMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPKcSfizU0OwyopYHyrcAy1CNsdcus%2F4WBopyEI%2BbABl6CxNGZRNfjjn6QNGW%2FOWzIVdv5yqmsl7yJBZWrC5iU2T%2FjWW709ow6TWAutQCsXC2gjspeio4IpPmTyiCLU2%2Br9PGHAX%2BFVXnur2aJEawnn0pvAknd%2FXklLQcf9gI0TMtqdwdlqCSA6peNfp2nCJ%2Bw2W1jE%2FnstOoCNQJ0SiDM1tEl15QrJdso44lr7amGcAw1sIVCNhC0qUMbSqxEugCNwLInvJ8C3By%2BTGhOhPH34xe3jCs8BOSiu7JXTJ7OBLKtyt8ezS5RhnUdRcpo4h6yWbAbDgQnDHsQnhykBb66r6hsJEXNZMWM7aTaaWwHHdk4jNv5Boj5w5w2nel6jAGkz0YplH7XYG%2FtTucmwLxQvoV%2BUtnnM1j4Gu5Uoi9L69kJx3lnOIa8iIrDn%2BSbaDrrAh%2B8NYTSpHr5xGaZOyOhCwK5MNNcQNoJnrXpS70yRPYYN0BSUg%2FJK67P%2BYpk9wnOLhsHAOJ9xoZuNrU72ZH%2BesKuEDBFoWKLxAsCY1xPzTeQV2kI75NFIrn%2FF0GBf0yVMdK3jM%2FSOIlo%2FefmBu03a%2BHVmdIILjNulgaLpL8wOVP29sKKlP0LN0knSAv3t1qTlymO4lBAYgjciOMNeWiMoGOqUBiOGZ84BOZxwlS7xLUeiy%2F0SsBggL8LJyxiyW3PEgqyczwDxrJbOP8j1gpJt1Pl%2FHclSF5dQOPr05pD8JzXYVkAJ3cW0rnmxQsDpxZFvGvdUv1pzVkdOyUGZg5pAVwEodUtCAmjjT3ccPOW6S1%2B3fXBT0E1qtTI9%2Fa6i0Q%2ByvFinlN5KoMJnF09QGL%2BozMBtasjQ3MOvsqaPTkJBHIX%2B9EN9V4%2BP7&X-Amz-Signature=fbdcb575c7ba0b9c051154eb41a03cbeaeedf55166803e1699a4792e6456d930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
