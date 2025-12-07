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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZQ5VEB5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T053830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs7QQFAH5Lv61NDkfkoWEmo0NEqaKQLbRSp7erz2VyCAIhAJcxQ3ylb%2Bsg%2BE2a93hQUphtKgeT3VI7On5dBOtHDAGLKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfBE%2BKrlk%2BpqGet04q3AOYVd2jTIvE0FPD5QZxCDlOWr8%2FTKIc3Q1%2BDtk3PTtrf21sCu%2FEj7cbonA%2FrTGj4bnIOGNz3hs0ZaHk5IiL7JEoXRyvh3U6bMbeXVgCYwg1Gkopg2idZoRycrtms25mC8EzmFrh3vU%2F9SB%2F2KJCbVYIUq9eYDDRMaKUMAsqK5SEsoB3QM2YIg1F%2BgcnDipj0SzdsIe%2B%2Fr%2FmIZAAx2w1iPQmEIS9FeIl3cCDRGa1hwOrjKZOe1ZlidN3K6mAj0KUkVrFdDR%2B5v9Dv00mhLTsevBx9SV3%2FEWwpyl56anEd8dI2PGqfCUT0Yf8p9BBddy01KhZdg2%2F0UjWbewFUevD61h7K8MnqEc22Oqv9Pga9xEB8yWmnrL22mPqRoat%2BkzS%2B8Oao8%2BJSRgZqTw%2B67L9ilavPTstqZlEJEi7%2B0NgHG4fMIGkydsYROIoKstpMj1z92WfequDq8M%2F%2F0EfFmmefOqfWdBWpn96pdNg7JosytlQGhsdN8L4PfcBC3M30Sy1ljTnBgwuuomMNgJYDrpc5%2B960BUC7ZaIuTq3B6Etzt3bJ%2FBgCwOhxLOA6fBkgOA%2FfsZgel6M2zcmtCst0fNxs4tNuoji5YhL8Gws%2F4txHXqBbphT5pubYaYtmDn7%2FDCqo9TJBjqkAVvThWf4uhjVpxZUeUehNgafgOlg0ycp4dRjKGrAb2C8sC3%2FhJ8vMUoc9IFtRH2KjMKVs%2FdXvaOoiXeiXnTm7PMKv0tXIpzi3Umdhq%2BsUeyTc1Y1EDiLtdeZCKoHybyVPYceENCUyE%2BlE1%2BFs1cjBQfR4kghElPGLGStt2aurPj7KW4fzXHlkaVPNPswvnJPsgINM3oRbFgAKHwbalbu5exy20pj&X-Amz-Signature=5abe199ab499d901cb2f6bd4511531fa408156021127895f1f1f2d6b6f7f7d6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZQ5VEB5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T053830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs7QQFAH5Lv61NDkfkoWEmo0NEqaKQLbRSp7erz2VyCAIhAJcxQ3ylb%2Bsg%2BE2a93hQUphtKgeT3VI7On5dBOtHDAGLKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfBE%2BKrlk%2BpqGet04q3AOYVd2jTIvE0FPD5QZxCDlOWr8%2FTKIc3Q1%2BDtk3PTtrf21sCu%2FEj7cbonA%2FrTGj4bnIOGNz3hs0ZaHk5IiL7JEoXRyvh3U6bMbeXVgCYwg1Gkopg2idZoRycrtms25mC8EzmFrh3vU%2F9SB%2F2KJCbVYIUq9eYDDRMaKUMAsqK5SEsoB3QM2YIg1F%2BgcnDipj0SzdsIe%2B%2Fr%2FmIZAAx2w1iPQmEIS9FeIl3cCDRGa1hwOrjKZOe1ZlidN3K6mAj0KUkVrFdDR%2B5v9Dv00mhLTsevBx9SV3%2FEWwpyl56anEd8dI2PGqfCUT0Yf8p9BBddy01KhZdg2%2F0UjWbewFUevD61h7K8MnqEc22Oqv9Pga9xEB8yWmnrL22mPqRoat%2BkzS%2B8Oao8%2BJSRgZqTw%2B67L9ilavPTstqZlEJEi7%2B0NgHG4fMIGkydsYROIoKstpMj1z92WfequDq8M%2F%2F0EfFmmefOqfWdBWpn96pdNg7JosytlQGhsdN8L4PfcBC3M30Sy1ljTnBgwuuomMNgJYDrpc5%2B960BUC7ZaIuTq3B6Etzt3bJ%2FBgCwOhxLOA6fBkgOA%2FfsZgel6M2zcmtCst0fNxs4tNuoji5YhL8Gws%2F4txHXqBbphT5pubYaYtmDn7%2FDCqo9TJBjqkAVvThWf4uhjVpxZUeUehNgafgOlg0ycp4dRjKGrAb2C8sC3%2FhJ8vMUoc9IFtRH2KjMKVs%2FdXvaOoiXeiXnTm7PMKv0tXIpzi3Umdhq%2BsUeyTc1Y1EDiLtdeZCKoHybyVPYceENCUyE%2BlE1%2BFs1cjBQfR4kghElPGLGStt2aurPj7KW4fzXHlkaVPNPswvnJPsgINM3oRbFgAKHwbalbu5exy20pj&X-Amz-Signature=65aa57599122428b1a56edd2ed32b5314eab20ee2cdf67f35c7b69f60555c1cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
