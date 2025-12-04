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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3QLLLNQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCE2whNsNizTeiJteJ%2BZC0Xoc%2BeSkwzIPcFEwNU5al5HQIhALcDieZUrm40N6i4oksEIFszRVz2%2FkQ4UHaTlC6HREsBKv8DCD0QABoMNjM3NDIzMTgzODA1IgyP0wpziIFqXOcY3AMq3ANZvBzYssamdxD%2BNTD80AJlWcPdWXcR%2BJSZokdXGYyV7kiuNcKmbfXK%2BbjShg1QrrMkiQ62%2BRMjEFDD8yuU1ds3cm1tUSGERQnqIW72cxgIleNMgnrrpt%2FzzKmHPrno7mU39ty5WdiLnZuRmo4DPPn5%2B3tLcbTO%2FGEldfOkThIUnXzFNideS%2FN61P4WCoUPDBHlW8gaC7fp7l7hXwpEskeSC%2FHbDmdFwySMS1lwHJ9Z%2BgbOVnjs3si6Dl4CltBMac9d5M3Aj3oyi%2B6gPwxjXhkKOXeNbHdhRYZaT7%2Baf%2BYFyyFh%2BquOPOEMxzNnFwLnJnlGyH377Q6X7zvyQKjEEKSj2J7AA5qKU59E1lNGFT7v9JMfzzFNQUBBKfDTqrz00FLYTIn20wHbNFyYSe20aRj%2FVLdg4%2FZ5MgHr8Iyt19Pgu%2FbUoQw1%2B3Fk8ZiYEV1I1ZoxlrxjJwoAambqvyUaOzf0sQk8l%2BoFa7w20bsWToJBP39ktwdj9T6nZcJl8JVByfWhbAi7RY74ZyGGXnaRNen563xIPWbZV95HZknMCNCqdwr1tjHd0WqZMxRMYLU2jePxQycopJM9sa5dGb74xc9u4ehwim9SGFrEHsF6nJ74njZ%2Brd74Ue%2Fkn87wGTCckcTJBjqkAY%2F8T%2Fy3Jehlp3tA8OnCYbbKOb9drUL3lSsLJRjUAQtr3Ae7FKEhonLsXnSHgAA5wVSuxXG7gMfj5XK5X3lw6wdeRX9%2BoKs38s3BrtGwzBEUYL8aLVm8FQcMzfpmzpjhDbYxAgnKzRSpkdqg8VY5mziu7%2Bql3ZFcDS4CL29LCO%2FD1omH%2FAiYJT9ZSR88Ks23TeIPou4vGO3Gydk5%2FPwVGEPtAHUR&X-Amz-Signature=5595dbf40493a95d2553c71cd54a7887468b228301b49c3dcf66e4b99f629958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3QLLLNQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCE2whNsNizTeiJteJ%2BZC0Xoc%2BeSkwzIPcFEwNU5al5HQIhALcDieZUrm40N6i4oksEIFszRVz2%2FkQ4UHaTlC6HREsBKv8DCD0QABoMNjM3NDIzMTgzODA1IgyP0wpziIFqXOcY3AMq3ANZvBzYssamdxD%2BNTD80AJlWcPdWXcR%2BJSZokdXGYyV7kiuNcKmbfXK%2BbjShg1QrrMkiQ62%2BRMjEFDD8yuU1ds3cm1tUSGERQnqIW72cxgIleNMgnrrpt%2FzzKmHPrno7mU39ty5WdiLnZuRmo4DPPn5%2B3tLcbTO%2FGEldfOkThIUnXzFNideS%2FN61P4WCoUPDBHlW8gaC7fp7l7hXwpEskeSC%2FHbDmdFwySMS1lwHJ9Z%2BgbOVnjs3si6Dl4CltBMac9d5M3Aj3oyi%2B6gPwxjXhkKOXeNbHdhRYZaT7%2Baf%2BYFyyFh%2BquOPOEMxzNnFwLnJnlGyH377Q6X7zvyQKjEEKSj2J7AA5qKU59E1lNGFT7v9JMfzzFNQUBBKfDTqrz00FLYTIn20wHbNFyYSe20aRj%2FVLdg4%2FZ5MgHr8Iyt19Pgu%2FbUoQw1%2B3Fk8ZiYEV1I1ZoxlrxjJwoAambqvyUaOzf0sQk8l%2BoFa7w20bsWToJBP39ktwdj9T6nZcJl8JVByfWhbAi7RY74ZyGGXnaRNen563xIPWbZV95HZknMCNCqdwr1tjHd0WqZMxRMYLU2jePxQycopJM9sa5dGb74xc9u4ehwim9SGFrEHsF6nJ74njZ%2Brd74Ue%2Fkn87wGTCckcTJBjqkAY%2F8T%2Fy3Jehlp3tA8OnCYbbKOb9drUL3lSsLJRjUAQtr3Ae7FKEhonLsXnSHgAA5wVSuxXG7gMfj5XK5X3lw6wdeRX9%2BoKs38s3BrtGwzBEUYL8aLVm8FQcMzfpmzpjhDbYxAgnKzRSpkdqg8VY5mziu7%2Bql3ZFcDS4CL29LCO%2FD1omH%2FAiYJT9ZSR88Ks23TeIPou4vGO3Gydk5%2FPwVGEPtAHUR&X-Amz-Signature=b367beddf246e7ad9f012ad0c0e7c558eb18bc140888c8fe06c6ea11fad547b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
