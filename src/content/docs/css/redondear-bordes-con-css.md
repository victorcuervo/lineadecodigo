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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3QDXKX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T154008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNFQ1RGihJWeiH47NNmDMjkcI6I60bf48w0QotgS1mrAiEAuq4i9OAokMWyrxHNopHEtLR3CX%2FOwz3DmERorbd0%2Fxwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGRmy5gRIvaOxPNWySrcA5iEJPPHOohlsOU%2FfOP7lgdvMDXPY1Uo3eEobWQAW5Ze71rnevC6h3D0yJXucTh6ShDjGCkbBcpdMFBfHeTqzEfyHhnpPrZUUPkCpst49H0GY3mb3JMvqkF2BoYkoMyfAyP%2BKgy%2Bfi%2Fu2QjqQyKznfbQZlnG3fPR%2F4pZOjXVFQpmjGAG12t7hJPeurMfGbZhBrC2PFnuscnA%2FmUcwlUhBQXDQEgiH9cU%2BjKW%2BgwiRdhbXllicDnpOh5CS0IRMnnMZ4vls7xgnSoLLI34fNc%2F2RBDwCkLhYYmz3USUfBR8HCkXhgcpuf4hosdZSofTgoDpZaU%2FofLpwvnx0JG7r30VOq7W7XezdrurSUzKaOOLpHbHd3CcU3UFl1w%2BIb3Y8Qp1RYmJXgF4zYkHO866icGWZ0WN10GkTj3LUq%2FmTt8Cy04icl22ZZeNdeawuhx%2BUVvxQYMIIDBLnUUW1DiI8lZAHMDIs01R9umyk2V0dYSPNOqR8C%2Bf7h8GOuJ5aQdHM7tvSIwZCRkrmT6eM7qBUIl%2BDhCDdwkDyTnQw%2Bw79773FmEPaIL2Y1ZfmRyPmiTWo26nch7PBtCjHo36k2AvXe83nlX2o95z50uTPtwGtm8WuUarHRS8ByPzrWUNGHuMM2m0MkGOqUBLByVLWQS1JGcRaVXL4B6GSVGHj99qbIRsrIqtwjQC7zZZEnAhAUVYkllty9yT1CvP8c%2FWPxjck4N5iPgFUfcoQzf3IJI3HelvcmDbJRV2y35WyB%2BcIq9jyP4WiyWNk%2FMKuqMEd1XMKucYmVdwhaWG%2Bx6%2FFdlMrczVwNh3%2BwHk7LuTiAq6TdpPjcio3ywMc0Y5aNHy%2BoqBeZtqBxAxRgPJqRjZdPf&X-Amz-Signature=7b83c6beb71658b4115a4dc6718655de9ad088f947e9c133e6badd41101ff158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3QDXKX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T154008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNFQ1RGihJWeiH47NNmDMjkcI6I60bf48w0QotgS1mrAiEAuq4i9OAokMWyrxHNopHEtLR3CX%2FOwz3DmERorbd0%2Fxwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGRmy5gRIvaOxPNWySrcA5iEJPPHOohlsOU%2FfOP7lgdvMDXPY1Uo3eEobWQAW5Ze71rnevC6h3D0yJXucTh6ShDjGCkbBcpdMFBfHeTqzEfyHhnpPrZUUPkCpst49H0GY3mb3JMvqkF2BoYkoMyfAyP%2BKgy%2Bfi%2Fu2QjqQyKznfbQZlnG3fPR%2F4pZOjXVFQpmjGAG12t7hJPeurMfGbZhBrC2PFnuscnA%2FmUcwlUhBQXDQEgiH9cU%2BjKW%2BgwiRdhbXllicDnpOh5CS0IRMnnMZ4vls7xgnSoLLI34fNc%2F2RBDwCkLhYYmz3USUfBR8HCkXhgcpuf4hosdZSofTgoDpZaU%2FofLpwvnx0JG7r30VOq7W7XezdrurSUzKaOOLpHbHd3CcU3UFl1w%2BIb3Y8Qp1RYmJXgF4zYkHO866icGWZ0WN10GkTj3LUq%2FmTt8Cy04icl22ZZeNdeawuhx%2BUVvxQYMIIDBLnUUW1DiI8lZAHMDIs01R9umyk2V0dYSPNOqR8C%2Bf7h8GOuJ5aQdHM7tvSIwZCRkrmT6eM7qBUIl%2BDhCDdwkDyTnQw%2Bw79773FmEPaIL2Y1ZfmRyPmiTWo26nch7PBtCjHo36k2AvXe83nlX2o95z50uTPtwGtm8WuUarHRS8ByPzrWUNGHuMM2m0MkGOqUBLByVLWQS1JGcRaVXL4B6GSVGHj99qbIRsrIqtwjQC7zZZEnAhAUVYkllty9yT1CvP8c%2FWPxjck4N5iPgFUfcoQzf3IJI3HelvcmDbJRV2y35WyB%2BcIq9jyP4WiyWNk%2FMKuqMEd1XMKucYmVdwhaWG%2Bx6%2FFdlMrczVwNh3%2BwHk7LuTiAq6TdpPjcio3ywMc0Y5aNHy%2BoqBeZtqBxAxRgPJqRjZdPf&X-Amz-Signature=6ba9e9ccdd3b6af5401a46d8c7c5a94a4c6f585b1eab5b8b3cbdbed57091d4a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
