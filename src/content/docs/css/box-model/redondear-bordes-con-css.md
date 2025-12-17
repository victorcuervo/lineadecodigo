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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFLFCDY6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGL3yqFwGYAJ3I3Qn%2FEiukbCyTaaiVnj2kWx8dAjcyscAiEA4DgUZbAK6ViAWvv%2BrqQ8q3ivbi19e8zDNRnu9u69crIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDLoVyFB%2FEJkMnAq2GircAyxiEqMG%2FCYT1IaRHQsXSuPGKYOlFD8y0MF1%2BDVMSTiAiImCxNK%2FKUXt8CjxzX35BBwpAST6zDtjMd%2BPeTKNfyAhb34Gk7MVKY1jVseaGOUsjf3M4b1PPh8%2FWQ2AM8Ydg4XIYsUbjOAwChq%2FRNgGY9dfiJ2eA91V0yzmCTgb1%2FuuOFZNo4%2FRyq7d7%2FIfYZKCIcgQZl8qFUZHVYgMyQnph%2FfvMW8UoowrA4G94wz%2B%2F%2B2mzTh%2BzJZHKr44yy5y%2BEpiBItc0miCbjGJMhoLRtj3AsGbXf%2FUN5LEaUkoJUzKIPkFQ5aVK4oyPJPrztABQdhlHhp7imNK9n7uxsR%2FAkqtHSb%2B1VIfh7creRgbx9Z26eZn5GVn0jH50ffw49M4qTavJaLMjeA1WwjjYNx3FMKZo14MZiiE0QtD9Rp10ZOdCZgGcpWttEZZScHCUDZRHqrZvtru6BFnv7yyurAWjw7WY9gt6WKyS1im1aKveTLERR4f6TU%2Fpdcc4C8KZGaj4wtgOHpBmyjCSmn9DrRrGZ1fQRXof5zmT3T%2F0DHe1f5oJJCRjyvfaC%2BAlVvJsjtJCGb1h8%2FRSw12cO6CcTi8ymU0TALBTA3RPbh%2B1hiElckkJj1ZUQLv7g%2FrtceOX7YjMKzRicoGOqUBCdhboXm41gMvHDN%2Bsuqr1hs%2BgDbLherSUA2cb934xnF7cPM92ip6iEEPvODreSMByQsCMeN6IY7kyDNrMh0XXOkiUrD0jKdK0%2BimeIdIngXs1TUFIUFL1s3uSpJ29fLc6oXMVlTg5iFx%2FyV83HtHdxyUfYy3zIqMxFYARvhexrUVRd1af%2FKCbASMDsoHtwdhoKdmV8P1IvbB8at0esruqQPYRK3w&X-Amz-Signature=ed32c4f18c5c1ed78ef10593d7eaf6490b5c980b4bfe4ec9cc575e0023020d48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFLFCDY6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGL3yqFwGYAJ3I3Qn%2FEiukbCyTaaiVnj2kWx8dAjcyscAiEA4DgUZbAK6ViAWvv%2BrqQ8q3ivbi19e8zDNRnu9u69crIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDLoVyFB%2FEJkMnAq2GircAyxiEqMG%2FCYT1IaRHQsXSuPGKYOlFD8y0MF1%2BDVMSTiAiImCxNK%2FKUXt8CjxzX35BBwpAST6zDtjMd%2BPeTKNfyAhb34Gk7MVKY1jVseaGOUsjf3M4b1PPh8%2FWQ2AM8Ydg4XIYsUbjOAwChq%2FRNgGY9dfiJ2eA91V0yzmCTgb1%2FuuOFZNo4%2FRyq7d7%2FIfYZKCIcgQZl8qFUZHVYgMyQnph%2FfvMW8UoowrA4G94wz%2B%2F%2B2mzTh%2BzJZHKr44yy5y%2BEpiBItc0miCbjGJMhoLRtj3AsGbXf%2FUN5LEaUkoJUzKIPkFQ5aVK4oyPJPrztABQdhlHhp7imNK9n7uxsR%2FAkqtHSb%2B1VIfh7creRgbx9Z26eZn5GVn0jH50ffw49M4qTavJaLMjeA1WwjjYNx3FMKZo14MZiiE0QtD9Rp10ZOdCZgGcpWttEZZScHCUDZRHqrZvtru6BFnv7yyurAWjw7WY9gt6WKyS1im1aKveTLERR4f6TU%2Fpdcc4C8KZGaj4wtgOHpBmyjCSmn9DrRrGZ1fQRXof5zmT3T%2F0DHe1f5oJJCRjyvfaC%2BAlVvJsjtJCGb1h8%2FRSw12cO6CcTi8ymU0TALBTA3RPbh%2B1hiElckkJj1ZUQLv7g%2FrtceOX7YjMKzRicoGOqUBCdhboXm41gMvHDN%2Bsuqr1hs%2BgDbLherSUA2cb934xnF7cPM92ip6iEEPvODreSMByQsCMeN6IY7kyDNrMh0XXOkiUrD0jKdK0%2BimeIdIngXs1TUFIUFL1s3uSpJ29fLc6oXMVlTg5iFx%2FyV83HtHdxyUfYy3zIqMxFYARvhexrUVRd1af%2FKCbASMDsoHtwdhoKdmV8P1IvbB8at0esruqQPYRK3w&X-Amz-Signature=42bf03ff361500505519fee2cd8fdd69ebdd6c79f6916754ece5245df0d724a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
