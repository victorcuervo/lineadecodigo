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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V6DWWUX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T214324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH2QvUnu4%2FeCJqMlhqcJYJBny3GXLvTLvqRUpZl7kuiAIhAJxqAnKZhZ5ujQrZlOjJw68HtS49nJ47kiorKl6ucSIsKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxl5SDC570%2Bq0lDaFIq3ANLsNMdr6ncQepeIZea3goJsW5d7uesdNhrVsg2nokbL1040%2FyMGyvyb%2BwdyPFnSxCljAc1aYe%2Bq793i2O64hcUKa6V2TSbrUkTeE6kBGXoIpQpGNSwsYdAk3nCkCh99wIvoGb1%2BO0QwVFzak2SRexhOPsRsdcwh0rc3ktd%2Be0kSo1oLqPVJ7iTzaIkgllgg2pJ6FPdfTffe3VixKokEnWL0wvhENz22knnN2DzitldJSoZ6p6WBT2qVlbXGRQqCekehKBpkdmU2YhjyiUN3NTDOiymi35nlfo3Tk0ZIVu8jr7o%2B34XDg5F5NA2jLXIyKs1T9Hp1KNkkPfd22Xe47cIkE5xYEqdNmydhcuvj4Prd2CC%2F4E6dcSeeqvhy5BE4jSK8WozdKDeGnY%2Fcjh7lrF3eIugZ8fDo2WDv0kUF%2BmNN9gbS%2FBrQ3fIpwZ3DBlf8gTWml3BiXceco01NXpqKfuCBGjXj4BV3D6FlNpzRUtvDGIEZDFFHbI%2FtBrsJL150wcDIoHZCGNQfi5VqbjYyzVptYEojYkyHiblX1iit1mF5VfUpD9nWnVcEeVLUOWMv8uXf3tOrBdka5d%2F4OtwE3wUg7Tws5ooYNOcjTWtDxtJCMB1olfwGdto9zclLjDyxtfJBjqkAaMb1MZjI7wHE0%2BfAYNLScmpjslrdlX5Oqhvp5zKhkaybwLdpUeLSMK9ycSyay6tpXQrZROt3n9jpIH1CWfiwfx2VJJKXP59WEmR5kV3ufZUhWgHQb2FDtGzxPem23mb86906nx2E5PUXpkmmi7nHKPjlWQodWDQgPw04IJoVll01LXltqvspRCJEznV7JPyEqcKBueAKr3kjwNQnNmL4VGqVEri&X-Amz-Signature=d6c4667b8d8e5e2f0e277312ab7e2780443a94bcb3a41f166ef341eb2f1906d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V6DWWUX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T214324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH2QvUnu4%2FeCJqMlhqcJYJBny3GXLvTLvqRUpZl7kuiAIhAJxqAnKZhZ5ujQrZlOjJw68HtS49nJ47kiorKl6ucSIsKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxl5SDC570%2Bq0lDaFIq3ANLsNMdr6ncQepeIZea3goJsW5d7uesdNhrVsg2nokbL1040%2FyMGyvyb%2BwdyPFnSxCljAc1aYe%2Bq793i2O64hcUKa6V2TSbrUkTeE6kBGXoIpQpGNSwsYdAk3nCkCh99wIvoGb1%2BO0QwVFzak2SRexhOPsRsdcwh0rc3ktd%2Be0kSo1oLqPVJ7iTzaIkgllgg2pJ6FPdfTffe3VixKokEnWL0wvhENz22knnN2DzitldJSoZ6p6WBT2qVlbXGRQqCekehKBpkdmU2YhjyiUN3NTDOiymi35nlfo3Tk0ZIVu8jr7o%2B34XDg5F5NA2jLXIyKs1T9Hp1KNkkPfd22Xe47cIkE5xYEqdNmydhcuvj4Prd2CC%2F4E6dcSeeqvhy5BE4jSK8WozdKDeGnY%2Fcjh7lrF3eIugZ8fDo2WDv0kUF%2BmNN9gbS%2FBrQ3fIpwZ3DBlf8gTWml3BiXceco01NXpqKfuCBGjXj4BV3D6FlNpzRUtvDGIEZDFFHbI%2FtBrsJL150wcDIoHZCGNQfi5VqbjYyzVptYEojYkyHiblX1iit1mF5VfUpD9nWnVcEeVLUOWMv8uXf3tOrBdka5d%2F4OtwE3wUg7Tws5ooYNOcjTWtDxtJCMB1olfwGdto9zclLjDyxtfJBjqkAaMb1MZjI7wHE0%2BfAYNLScmpjslrdlX5Oqhvp5zKhkaybwLdpUeLSMK9ycSyay6tpXQrZROt3n9jpIH1CWfiwfx2VJJKXP59WEmR5kV3ufZUhWgHQb2FDtGzxPem23mb86906nx2E5PUXpkmmi7nHKPjlWQodWDQgPw04IJoVll01LXltqvspRCJEznV7JPyEqcKBueAKr3kjwNQnNmL4VGqVEri&X-Amz-Signature=dbf6d34b75c23f7a2871f9cb692d6ea74d0dccdfa50880ac06291f30a4e9e0f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
