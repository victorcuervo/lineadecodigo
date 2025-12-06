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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB77H5W5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T161713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwmPKqm8sUKxK9070ApAcmaIEEX64OhmlVSxMLlTataAiEAz2CsPSRMLjuzykoIVFadMOihpbS1qYZS8KG708Pp6wsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEbnlwOtVbCIaiNHWircA%2Fx6po4WuAIvGbdnpEHGnDfhl9f1Vuj%2Bh7p1RTIMSLbmtL4Bt4PKN3YrICwSWzHrwF5WhdX0bkzK6yZ2hdxw7%2Fm1n54Jo1k9WKXjzHD7o2nZBi0OAkN9QylSQu42wXyNYNmVunPgONQIizWt3%2FIM9kl10%2BajLp8%2BjChTq7k1XsFrLJjiEzflRl9Y306mwylusD1sYJjJfL81nvSUPb7GGmIIn9qyXvsPvwHHVvQJXUbA8dvRzMc5f9WTO831l65c40N1na7hdg%2BE0jEWTq13pkSRmloakp8acXEszxIqRuzSARxtEe5Hl7eBrhOAF%2FSE4rdVTYXzWLC1KG1w%2BcYlu7Tf283viPqZwQ5mUBGegpYGBz18hxdpep4v6r6k5Dtp2n1hZyKCJSHTpPT3gl9reZP9EfcvSC3TKfwnO9keHTgn4AASYsfjBlc9OJDTKvta2fSLESWsJr4w4IFXqzeHT0w4AeVf1hd4fzVyxM600C0XRX3K%2FqFQmZf0Tmx%2FnOkKK5gRu7MjNw4s%2B%2BilJeWS1Qz%2FxdLBlQi%2ByggVPOvyg9bQ%2B%2F%2Ftzm2MfTz00JV%2FrfmhycW8c9xHthHxn5kSeU3ycI5xizIBHRPfI%2FFA0%2FmMITDnygzRrj4JkWLrWAfvMMmm0MkGOqUBjjrAKc62YL42z1KOSf2%2BsROHmP%2FxXF5C2kc8%2FmDYaU33inRsORDQIZinKU2QVot7onvscHGjNAHP4BVM4nKBfcvUz0jfIJ7Z8aT3zXEEaX3Pui5zuMB15zZz5%2Fjs2Z3w4%2Fa8MrsujXLl%2FUIqCAZDK%2F%2FAibG8ijPVFJqD6bpO7Ly7PByGc%2FUB%2Fd56A2hYlnbaI8JD6tBIXSRnvnku%2FB3xttBa8VpV&X-Amz-Signature=8f8692b4e8d5746849d3248ec6186059e7ab2a540642ef50395ba10087a22569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB77H5W5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T161713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwmPKqm8sUKxK9070ApAcmaIEEX64OhmlVSxMLlTataAiEAz2CsPSRMLjuzykoIVFadMOihpbS1qYZS8KG708Pp6wsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEbnlwOtVbCIaiNHWircA%2Fx6po4WuAIvGbdnpEHGnDfhl9f1Vuj%2Bh7p1RTIMSLbmtL4Bt4PKN3YrICwSWzHrwF5WhdX0bkzK6yZ2hdxw7%2Fm1n54Jo1k9WKXjzHD7o2nZBi0OAkN9QylSQu42wXyNYNmVunPgONQIizWt3%2FIM9kl10%2BajLp8%2BjChTq7k1XsFrLJjiEzflRl9Y306mwylusD1sYJjJfL81nvSUPb7GGmIIn9qyXvsPvwHHVvQJXUbA8dvRzMc5f9WTO831l65c40N1na7hdg%2BE0jEWTq13pkSRmloakp8acXEszxIqRuzSARxtEe5Hl7eBrhOAF%2FSE4rdVTYXzWLC1KG1w%2BcYlu7Tf283viPqZwQ5mUBGegpYGBz18hxdpep4v6r6k5Dtp2n1hZyKCJSHTpPT3gl9reZP9EfcvSC3TKfwnO9keHTgn4AASYsfjBlc9OJDTKvta2fSLESWsJr4w4IFXqzeHT0w4AeVf1hd4fzVyxM600C0XRX3K%2FqFQmZf0Tmx%2FnOkKK5gRu7MjNw4s%2B%2BilJeWS1Qz%2FxdLBlQi%2ByggVPOvyg9bQ%2B%2F%2Ftzm2MfTz00JV%2FrfmhycW8c9xHthHxn5kSeU3ycI5xizIBHRPfI%2FFA0%2FmMITDnygzRrj4JkWLrWAfvMMmm0MkGOqUBjjrAKc62YL42z1KOSf2%2BsROHmP%2FxXF5C2kc8%2FmDYaU33inRsORDQIZinKU2QVot7onvscHGjNAHP4BVM4nKBfcvUz0jfIJ7Z8aT3zXEEaX3Pui5zuMB15zZz5%2Fjs2Z3w4%2Fa8MrsujXLl%2FUIqCAZDK%2F%2FAibG8ijPVFJqD6bpO7Ly7PByGc%2FUB%2Fd56A2hYlnbaI8JD6tBIXSRnvnku%2FB3xttBa8VpV&X-Amz-Signature=65a1d843ad24a8e8174dd12536e5e773ad18fe970af0ae334d719418ab1628e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
