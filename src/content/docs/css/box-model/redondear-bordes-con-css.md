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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7R4RWMY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgh%2FVXVpmC1NUkpKYZppeF3ehf2Zje0Q02WievfyEq6wIgG8Esfovc%2BcEsG6s3zewqHqCu3x32wTGj0xqZnBxtijkq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDIwfS2gdTLuJKSttgSrcAwBSzCdjoOK%2FARX5K5NWnw62DcNGiOMeaAHiOdiL4uUAPVkj40%2B4wJgFOX8Go%2F%2B%2F%2FTiXgtNdPqsuO9EDJ4Q90sazY91sW7BTDgfuPw5PUXJ0jasnHQaGUklFEvD2DFBBsGBWracvU%2BL9%2BTJXpakVy0ZqCt0N2Yb7RKKjXsjR4K8ENGnhBvTf2Y9nJV8aJg5AQJPP9lSuuBLhqSzE1E26OdSH2qNpy17cOPtjeKvGud3lvpFA0%2B3W5qY3YjD2GDng329uV0L5Izmm4bKwlDhqJ%2BE4huMKBLnBvRQy8X%2FmCX3wCAs96e3z7Zf%2FF3GuCZTv%2BkRWsxn92L%2BO5XBj12Upt11EwB7IMFQZsNqFPykYMvh3D87jFJwfp5IFvEbCtel8tHCnxya8Bs8EdcWdQpPMcAxc4jdH3BiKuzN8my3vK3X6ewOj%2BobRGDqE1aqDk5y70l18%2B1X7H%2B3nkXfZMA4EqDV%2BTqr5N7kfTegnvdY1Vmf1iQRU4UoF0uldZVAPkfmIYiBOBn8ZrqOG0A8gIG4dpdLvNGgezdG0iKwLuU3z7QTyKRaIULlIxPSJGOm%2BxZq%2F5AjypJjc%2BCrieCB8ZRNOX6uRISJetnDGPK%2BOqdERo7BxAS2h18dy1zHJyuYzMPOOisoGOqUBpGSshHt0cztLLFS1AjyHDTW7MU%2FmyW%2F1JyNl7iahLgZGIWbtOEFJBxqJ9DbpquKxnXViU3ltw3INNsckEhIwG9e0pBD96IZn21PfaAJIBdvO80jVpUBnOb0pv7vF0YM%2Bx%2BgK49WKaK4e0N4IBdya%2B3lUGjctV6pduoKDAn%2FGsP6fGNCs3Bu67oUxSO5crLnvoe9Xgc9OAdAes5Iv2Sw84YGpvp2q&X-Amz-Signature=84690624ff31b9ffef155f596cafb5c82b0e5234ddb655382209471850fe9f93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7R4RWMY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgh%2FVXVpmC1NUkpKYZppeF3ehf2Zje0Q02WievfyEq6wIgG8Esfovc%2BcEsG6s3zewqHqCu3x32wTGj0xqZnBxtijkq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDIwfS2gdTLuJKSttgSrcAwBSzCdjoOK%2FARX5K5NWnw62DcNGiOMeaAHiOdiL4uUAPVkj40%2B4wJgFOX8Go%2F%2B%2F%2FTiXgtNdPqsuO9EDJ4Q90sazY91sW7BTDgfuPw5PUXJ0jasnHQaGUklFEvD2DFBBsGBWracvU%2BL9%2BTJXpakVy0ZqCt0N2Yb7RKKjXsjR4K8ENGnhBvTf2Y9nJV8aJg5AQJPP9lSuuBLhqSzE1E26OdSH2qNpy17cOPtjeKvGud3lvpFA0%2B3W5qY3YjD2GDng329uV0L5Izmm4bKwlDhqJ%2BE4huMKBLnBvRQy8X%2FmCX3wCAs96e3z7Zf%2FF3GuCZTv%2BkRWsxn92L%2BO5XBj12Upt11EwB7IMFQZsNqFPykYMvh3D87jFJwfp5IFvEbCtel8tHCnxya8Bs8EdcWdQpPMcAxc4jdH3BiKuzN8my3vK3X6ewOj%2BobRGDqE1aqDk5y70l18%2B1X7H%2B3nkXfZMA4EqDV%2BTqr5N7kfTegnvdY1Vmf1iQRU4UoF0uldZVAPkfmIYiBOBn8ZrqOG0A8gIG4dpdLvNGgezdG0iKwLuU3z7QTyKRaIULlIxPSJGOm%2BxZq%2F5AjypJjc%2BCrieCB8ZRNOX6uRISJetnDGPK%2BOqdERo7BxAS2h18dy1zHJyuYzMPOOisoGOqUBpGSshHt0cztLLFS1AjyHDTW7MU%2FmyW%2F1JyNl7iahLgZGIWbtOEFJBxqJ9DbpquKxnXViU3ltw3INNsckEhIwG9e0pBD96IZn21PfaAJIBdvO80jVpUBnOb0pv7vF0YM%2Bx%2BgK49WKaK4e0N4IBdya%2B3lUGjctV6pduoKDAn%2FGsP6fGNCs3Bu67oUxSO5crLnvoe9Xgc9OAdAes5Iv2Sw84YGpvp2q&X-Amz-Signature=fca654449e7b2945562627f1f7c9d04aaee41724e9e02bc1307a44c2ac1c2a40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
