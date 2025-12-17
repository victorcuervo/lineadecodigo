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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYPJPLZD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCE%2Bxjj21DtPR5Bw5ZN9lp5auKdbvu%2FUY1sNRmaUXZrCwIhAMz1KW6r4U%2Bng9jIe%2F7Aug1MG3bllVVEqy2JahosMfVhKv8DCHwQABoMNjM3NDIzMTgzODA1IgzPz4j3dQTGCBWM9xYq3AOGnGIAIapD2XdERwERR98g1Kefe1sln7sBoiHDVNmYm4bPes8RpZnjuqSUtXXXhC1GgtZ0LATjRGiy7H95%2FesXuiF%2FczovajwIvkOsxUynE7auCF5YnC6ZQYXm6EqxfghJoKXxn3BspFbe6GfmnCV9tG%2B4i93%2FucEsDRRcy049WzeBXm0QWqJm4yrE83IGCTNtRBqbYFWiBPu2W%2BaGRV91Wc2XRfxFkYnHjZTQG%2FvNGH5sbrj3rRVzBvuLtt%2FY%2F1KRcBygQ%2Fgg1xJcItP1x34TGRTEf5UV13%2FGQ9T4uIjfaP%2BOGQE1XXngcdKh49SnvfmvzgD3qgNYsT7h1mv4%2FOpAb50cl1xZpst%2BLky6O4IOX4Hnnz7JPS9k%2FzhGSJZqhJSJxn5HmRhxTxLetst0wLh4OiQ4uxRmSsyoAykt8wwhtSz4FollU%2BUzpnjw%2BJCpwpyxaHBm0NB8U5Vf7aoptPC9ul4l10nj9C9haDQrdbcVJn9CnjsYc5LiA%2B1HMWcEecnLSdz6VaHzui1XneFfPQfKayq0%2B4nPqMvAap1qfz806b79Oz356IcSdoXaP6ob6MbKULpusXPpMaN1nYOg0ivgrjx1w4pO%2BJr33SoNycvsAh78CXWQwd5EQLvNejCDj4rKBjqkAdbe9kcIdzQGWHRHvvIQbEu1eoCoffio7z29Xz20wpakTH1OZDYoGqwqPiEDdOkZb8UIJovJcna1y4sDZfStaDKskYdJYIrjw80kKA3L1ZoTGddxONrOhUcDk9uEtIIVD9u7VQOVLzYA4oW0FfItzhrDy36E%2BxAsTWmQ5AxhJ9fYK8NRjzQ5cB5aGtn54b2qDED4frA0wchgkLrZvw215a9PuI%2Bg&X-Amz-Signature=ab364e7cb3a0e5c03521d275073bf65875be9284e2425fc92f7d4805d45e8444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYPJPLZD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCE%2Bxjj21DtPR5Bw5ZN9lp5auKdbvu%2FUY1sNRmaUXZrCwIhAMz1KW6r4U%2Bng9jIe%2F7Aug1MG3bllVVEqy2JahosMfVhKv8DCHwQABoMNjM3NDIzMTgzODA1IgzPz4j3dQTGCBWM9xYq3AOGnGIAIapD2XdERwERR98g1Kefe1sln7sBoiHDVNmYm4bPes8RpZnjuqSUtXXXhC1GgtZ0LATjRGiy7H95%2FesXuiF%2FczovajwIvkOsxUynE7auCF5YnC6ZQYXm6EqxfghJoKXxn3BspFbe6GfmnCV9tG%2B4i93%2FucEsDRRcy049WzeBXm0QWqJm4yrE83IGCTNtRBqbYFWiBPu2W%2BaGRV91Wc2XRfxFkYnHjZTQG%2FvNGH5sbrj3rRVzBvuLtt%2FY%2F1KRcBygQ%2Fgg1xJcItP1x34TGRTEf5UV13%2FGQ9T4uIjfaP%2BOGQE1XXngcdKh49SnvfmvzgD3qgNYsT7h1mv4%2FOpAb50cl1xZpst%2BLky6O4IOX4Hnnz7JPS9k%2FzhGSJZqhJSJxn5HmRhxTxLetst0wLh4OiQ4uxRmSsyoAykt8wwhtSz4FollU%2BUzpnjw%2BJCpwpyxaHBm0NB8U5Vf7aoptPC9ul4l10nj9C9haDQrdbcVJn9CnjsYc5LiA%2B1HMWcEecnLSdz6VaHzui1XneFfPQfKayq0%2B4nPqMvAap1qfz806b79Oz356IcSdoXaP6ob6MbKULpusXPpMaN1nYOg0ivgrjx1w4pO%2BJr33SoNycvsAh78CXWQwd5EQLvNejCDj4rKBjqkAdbe9kcIdzQGWHRHvvIQbEu1eoCoffio7z29Xz20wpakTH1OZDYoGqwqPiEDdOkZb8UIJovJcna1y4sDZfStaDKskYdJYIrjw80kKA3L1ZoTGddxONrOhUcDk9uEtIIVD9u7VQOVLzYA4oW0FfItzhrDy36E%2BxAsTWmQ5AxhJ9fYK8NRjzQ5cB5aGtn54b2qDED4frA0wchgkLrZvw215a9PuI%2Bg&X-Amz-Signature=2a0e3d349acf3a682d71fc88b25e119c7e9532e526f6b52a587573ccfceb4e2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
