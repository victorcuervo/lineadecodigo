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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4IUA4FY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T012406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO86OMAYtDfobK8t4MWkoy%2F%2B7UiWiYGLfjitE%2FM%2FvwQQIhANCcl0jl2J00fXrI7%2B1KY%2BT%2BsoiKCGzOzaW7XQgwjWBYKv8DCE8QABoMNjM3NDIzMTgzODA1IgyblFKXv%2BR7bloABJAq3ANNP3TpRIWHy0DwlJmhPjld%2BOtL3PRq%2FGFJVAXhROpkIw7Qmbm3Mz8VfDt8UBpXAncXzLeBjzOn73%2FYaYjngZriIBataAKFaxSVPHEQDmiE0KGmV%2Bu4T0schcqg5pEOhIA2biOGHtT%2FRWktTlBQOteZRNeJiffnIyxT4Dx4gtN6Yj7ILsjutWFIBxdw6dGDOrHKhQvowQRui38MnDnUD0IfLi6O2cKYoRfzHIMCzUUR55nGqJoxpzoZycCx0wSqSpZd6IixF1wqVQovk2WQasXn4zaqILcjSMlUXMNR%2B1cFA0n2KMOjJj3p2%2FYXjHv6x1hxEI9HMlabcHgo6G7K%2BP%2F1G9JZn%2B7l1RwAI%2BfMbDkFy7uuLyS9Hy5QpQaBZbGLoZfoh225625yWdK8p1vs%2Bc%2BKr%2BYbHIF5DAbxfA2gDuUi%2BScbxfC%2FGSRXCTi5TDX%2FmC80QhYGIBgdkISPLLcaFYADY0%2FrTg58AkqDAnMSj%2FrQIbGTFSgyTGPtW970q4IknIPgqOSiPInRzlNCuMfb%2FXn3vhAe3ff2kiou%2F3nda%2FVpy%2BCgu4wwYtYHWTIaStQbjylVXbVfe2B%2F4rCcBfnJSwyQsH8Kq3FbOGf84iIdxaE43LoF9UvIZZHHAZ6bvDD5i8jJBjqkAWXXOFLc95FJuFIadsAL%2BRnzOsXt7UgCmhWtvfm6HocB%2FYCihIsm9Es2fAncZMKyx%2FI97Bd5FVTu3Vko8sz6e0JlZ2A72fnZyQGP9z2%2BsBJ81%2F9o2H0yJcIo2LkB0GPnYj5PBxtSWZrQz6at5njy4OfjoU7W1nibDQr2mZlYqpJu03hcaP5EKUx5LAa8Gbk3mgI3m63%2Bl8ab22hczin2x79edlev&X-Amz-Signature=f694c0cc83052ae041373ef0c4a8da74b1c2c2f01fb2279018d7dc84a1ebc3e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4IUA4FY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T012406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO86OMAYtDfobK8t4MWkoy%2F%2B7UiWiYGLfjitE%2FM%2FvwQQIhANCcl0jl2J00fXrI7%2B1KY%2BT%2BsoiKCGzOzaW7XQgwjWBYKv8DCE8QABoMNjM3NDIzMTgzODA1IgyblFKXv%2BR7bloABJAq3ANNP3TpRIWHy0DwlJmhPjld%2BOtL3PRq%2FGFJVAXhROpkIw7Qmbm3Mz8VfDt8UBpXAncXzLeBjzOn73%2FYaYjngZriIBataAKFaxSVPHEQDmiE0KGmV%2Bu4T0schcqg5pEOhIA2biOGHtT%2FRWktTlBQOteZRNeJiffnIyxT4Dx4gtN6Yj7ILsjutWFIBxdw6dGDOrHKhQvowQRui38MnDnUD0IfLi6O2cKYoRfzHIMCzUUR55nGqJoxpzoZycCx0wSqSpZd6IixF1wqVQovk2WQasXn4zaqILcjSMlUXMNR%2B1cFA0n2KMOjJj3p2%2FYXjHv6x1hxEI9HMlabcHgo6G7K%2BP%2F1G9JZn%2B7l1RwAI%2BfMbDkFy7uuLyS9Hy5QpQaBZbGLoZfoh225625yWdK8p1vs%2Bc%2BKr%2BYbHIF5DAbxfA2gDuUi%2BScbxfC%2FGSRXCTi5TDX%2FmC80QhYGIBgdkISPLLcaFYADY0%2FrTg58AkqDAnMSj%2FrQIbGTFSgyTGPtW970q4IknIPgqOSiPInRzlNCuMfb%2FXn3vhAe3ff2kiou%2F3nda%2FVpy%2BCgu4wwYtYHWTIaStQbjylVXbVfe2B%2F4rCcBfnJSwyQsH8Kq3FbOGf84iIdxaE43LoF9UvIZZHHAZ6bvDD5i8jJBjqkAWXXOFLc95FJuFIadsAL%2BRnzOsXt7UgCmhWtvfm6HocB%2FYCihIsm9Es2fAncZMKyx%2FI97Bd5FVTu3Vko8sz6e0JlZ2A72fnZyQGP9z2%2BsBJ81%2F9o2H0yJcIo2LkB0GPnYj5PBxtSWZrQz6at5njy4OfjoU7W1nibDQr2mZlYqpJu03hcaP5EKUx5LAa8Gbk3mgI3m63%2Bl8ab22hczin2x79edlev&X-Amz-Signature=3efb70018a942680c83e7477ac1914fa55806166363ed96f924a7985903122dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
