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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UKJEZRN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFa1iFRKpbNTKriBYpvn7w3zljcxOCo6YOxgm42A67wCAiAl8Nnvdfm%2FPXE6gtrnFxDaGqubUKfxFayLUElItgXmQCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMQlMcpRlYMTTd5UHjKtwDawmtK9VK4rKLV22YnkN1kSV99%2BwKsOPxgIW8cLRiKgMp%2FtIxxC1Uo2S8QlSvRniMZA4u%2FYjWw9Q7%2FPAQo4SUMk1%2FzBY%2FMA%2Bc9dTSzlqK3ln6MNsu5RU1NR4wBk%2FOZ8bFlFlBO0mPEcobWrsNk%2F%2BEI3pjzM8FjXpXh0pbltxqz1Emkfe4dYP5duT2t8PPMzLSCqQqafCvIKLVUWoVQGY3mNDuwVuVAVvEpoS1HCVh0PIH3C2nmkGTHi1bbzV%2F%2FvAFPwSSU%2FIjxsb9TPT6FysMUr17ht3PcUZLLn1bo1iOo8Yhd7JeSE25hWtKwC4bQvSGJ3VQ1HDAqboIbFw9HnZ9mUnbC%2B2Rbbu5ccIQv%2BD3UwtQp6ZcncAcL9VumSl0ZTpHY0a4HG5rWMWfVzt18w8uvslMu7Z0PTJyKxXBWvwy864Yi61qszWwDECwIZdlAGqeFnSXB1JbU7F%2BQ3M9cBTZTRuf5xi3V%2FVHxjdvIPpwuTkcNceqkPagTnMjIK0fdsQ5tz6jvVaswCCpkvuH97gjT%2F1F1loQphcpO0AT0trQlnlUctoB1M2y5ONqYtUWz52hLolIeATMn1W0kreGnHgXvk4rzMh9RE%2F1fcpmWjVQLrKPXfqdxdUFHGsuy88wyuGKygY6pgFAbcZ7DT3I5bz1xNgi%2F0H3bu4cT7Q2oxMMLIeKHlkpvHhM9xVeHuMcWTw1JAQnnIYaIDhrVFgzeDM4K%2FNGjPnti4AeKaMDJxlwr6coWlg1Ohg7My5nCXpMS4ABh%2FhCCz%2BpnJijh0jO0JAbzOP30nPIHbB6%2F8K6D4x%2BpY5G8vVaxtS7qqzER5Sf5Z25WH0HvvqBqqzgf%2BexrCRLjv0grxIPfWy9HGxU&X-Amz-Signature=c11ff857174635f2434d9291baa876db7bc812ba6f8ca489ccc552a6c0262270&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UKJEZRN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFa1iFRKpbNTKriBYpvn7w3zljcxOCo6YOxgm42A67wCAiAl8Nnvdfm%2FPXE6gtrnFxDaGqubUKfxFayLUElItgXmQCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMQlMcpRlYMTTd5UHjKtwDawmtK9VK4rKLV22YnkN1kSV99%2BwKsOPxgIW8cLRiKgMp%2FtIxxC1Uo2S8QlSvRniMZA4u%2FYjWw9Q7%2FPAQo4SUMk1%2FzBY%2FMA%2Bc9dTSzlqK3ln6MNsu5RU1NR4wBk%2FOZ8bFlFlBO0mPEcobWrsNk%2F%2BEI3pjzM8FjXpXh0pbltxqz1Emkfe4dYP5duT2t8PPMzLSCqQqafCvIKLVUWoVQGY3mNDuwVuVAVvEpoS1HCVh0PIH3C2nmkGTHi1bbzV%2F%2FvAFPwSSU%2FIjxsb9TPT6FysMUr17ht3PcUZLLn1bo1iOo8Yhd7JeSE25hWtKwC4bQvSGJ3VQ1HDAqboIbFw9HnZ9mUnbC%2B2Rbbu5ccIQv%2BD3UwtQp6ZcncAcL9VumSl0ZTpHY0a4HG5rWMWfVzt18w8uvslMu7Z0PTJyKxXBWvwy864Yi61qszWwDECwIZdlAGqeFnSXB1JbU7F%2BQ3M9cBTZTRuf5xi3V%2FVHxjdvIPpwuTkcNceqkPagTnMjIK0fdsQ5tz6jvVaswCCpkvuH97gjT%2F1F1loQphcpO0AT0trQlnlUctoB1M2y5ONqYtUWz52hLolIeATMn1W0kreGnHgXvk4rzMh9RE%2F1fcpmWjVQLrKPXfqdxdUFHGsuy88wyuGKygY6pgFAbcZ7DT3I5bz1xNgi%2F0H3bu4cT7Q2oxMMLIeKHlkpvHhM9xVeHuMcWTw1JAQnnIYaIDhrVFgzeDM4K%2FNGjPnti4AeKaMDJxlwr6coWlg1Ohg7My5nCXpMS4ABh%2FhCCz%2BpnJijh0jO0JAbzOP30nPIHbB6%2F8K6D4x%2BpY5G8vVaxtS7qqzER5Sf5Z25WH0HvvqBqqzgf%2BexrCRLjv0grxIPfWy9HGxU&X-Amz-Signature=e0b948f9fb81639cdd2c3f8c15a0efe41d69e8d216246af954fe573d6de91147&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
