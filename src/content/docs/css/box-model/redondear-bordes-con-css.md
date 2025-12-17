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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ5EPD46%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIELAyq5fnTQnIeZuXf3yizxKXrVrIJ8SKQdQkUohJxZBAiEAj9Wv1iqUoDkrf73alYzW4RJA7z2mAtJtMvtctpzRRUMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLDu%2BTFWfj8E482GqircAzUSeCuYbF41UnUQ%2Fi4BWXlf%2FV7D%2BEwaZ2RR13%2BAhUsSQbvLs5gGX5AmQ4bRJ6FF8ahYrnNuLsEIbVokDSylcrswsZbLsGHtNWTMLGPSQ2MAlWIczd1Ydi6p1TKas09KQKV%2BRL9tWEmB5HgCLNLoZgmb58VncgGZNHr7MlZoxdI9V7pybU5Qz1fEB4q0keYKm4sdMBRNUnNZGiGKqcHB%2FLp0p9N5J39SBaEIRbRovjP4WZ8QYKUbcHl%2B%2FIkezp9saWYN30w0ga1W14ynzA37FNVIKoYGhLjvL%2Ft5t2MRe1fC7hPTNWqjewcR6vJIs%2Fdtgegez%2B%2BEhUrrcW8Hbl4W2gD4ERuYU6Ur5Gu9H0330QBgAAEuoP2pl6%2BfuILccyKtgDmXW1m8aPjpBXl7F2s3PQbSs5Vtzh2TBmRXjstKhVB4qQPn4bopVVAYYla8lSqFtRRcikB8CPtui2oqu1kJkvFFPLihDyvV%2BrWtLY4l%2F%2FHkD5WFqWFBYMyIlX8zE64UjOWTcSnNBhDpQJwTWUHekyDENrBd7xL4K7YENz%2F%2F11P5Brj5EEdfm8JNW5PHub5pN9O4Zt3uzefsip447ejabk1aXxwpUBCoRQ4F4bBX%2B6%2FmKfMg%2FcriXL1Cvb0FMPOOisoGOqUBRxyvAhf%2BkS%2BjhIyY408hztEMM71VkqIPFbdmmFlkMlRTFlpzZ0OlrdY4XPep6VdOKLRKl1Q3%2F0qmhuXGoDZgLtqfy1RjiEigNhes4bk1rTjjfyZi3B9S2ubuZujEG%2BzX5X5bUhVG%2BMPq46xqMTz7ciBbP5PCKMmZVQfq9f36XbcBND%2Bl31p8ZwB8yP3yz8vMbvM%2Fq75zPkF3y0oZcQxRP2qVAYZ5&X-Amz-Signature=840a3a859f5e9aaa5e59f85ad2ee074c40d40cb50390d7948e6aba5b9641c2ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ5EPD46%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIELAyq5fnTQnIeZuXf3yizxKXrVrIJ8SKQdQkUohJxZBAiEAj9Wv1iqUoDkrf73alYzW4RJA7z2mAtJtMvtctpzRRUMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLDu%2BTFWfj8E482GqircAzUSeCuYbF41UnUQ%2Fi4BWXlf%2FV7D%2BEwaZ2RR13%2BAhUsSQbvLs5gGX5AmQ4bRJ6FF8ahYrnNuLsEIbVokDSylcrswsZbLsGHtNWTMLGPSQ2MAlWIczd1Ydi6p1TKas09KQKV%2BRL9tWEmB5HgCLNLoZgmb58VncgGZNHr7MlZoxdI9V7pybU5Qz1fEB4q0keYKm4sdMBRNUnNZGiGKqcHB%2FLp0p9N5J39SBaEIRbRovjP4WZ8QYKUbcHl%2B%2FIkezp9saWYN30w0ga1W14ynzA37FNVIKoYGhLjvL%2Ft5t2MRe1fC7hPTNWqjewcR6vJIs%2Fdtgegez%2B%2BEhUrrcW8Hbl4W2gD4ERuYU6Ur5Gu9H0330QBgAAEuoP2pl6%2BfuILccyKtgDmXW1m8aPjpBXl7F2s3PQbSs5Vtzh2TBmRXjstKhVB4qQPn4bopVVAYYla8lSqFtRRcikB8CPtui2oqu1kJkvFFPLihDyvV%2BrWtLY4l%2F%2FHkD5WFqWFBYMyIlX8zE64UjOWTcSnNBhDpQJwTWUHekyDENrBd7xL4K7YENz%2F%2F11P5Brj5EEdfm8JNW5PHub5pN9O4Zt3uzefsip447ejabk1aXxwpUBCoRQ4F4bBX%2B6%2FmKfMg%2FcriXL1Cvb0FMPOOisoGOqUBRxyvAhf%2BkS%2BjhIyY408hztEMM71VkqIPFbdmmFlkMlRTFlpzZ0OlrdY4XPep6VdOKLRKl1Q3%2F0qmhuXGoDZgLtqfy1RjiEigNhes4bk1rTjjfyZi3B9S2ubuZujEG%2BzX5X5bUhVG%2BMPq46xqMTz7ciBbP5PCKMmZVQfq9f36XbcBND%2Bl31p8ZwB8yP3yz8vMbvM%2Fq75zPkF3y0oZcQxRP2qVAYZ5&X-Amz-Signature=412603658cb6d160e0a6699b60fee00e94ffd82786d3d75c9cf6925d3c4cef04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
