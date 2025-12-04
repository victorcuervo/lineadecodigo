---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSFM3GUY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBehSAU9d2vfmq6RpIDB9KJXS6FZH5NHkha9z6U1KGa2AiAvsC0XqJXrmCVyvXveTrVFx41uShic1t%2F3%2BLwXPd7sCir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMvYngPc5P3ISXbx6cKtwDaX01GiWrWuP%2Frjp%2Fz42NOsMDAnSAx75QjwGRrtJRTiqG%2BtB8W7ecs4U6K9sP3S%2B7vre9%2FcPXaWS6sMQUVT3vtC%2Foem7HWaShfmSFp4z99b8hs3adyuiwrqEPhTd8xAzDYDLfh1Ho2mQz2fnJG%2FU1zuPrMtizV57cDhZOqyzD4P66ruTz4%2B6zsTNh%2FQ46zzGfJuO9Um7CPyHRXVN0dqxlHmUbp%2F9%2Fwkoog3kEFrUNkFyg%2BBQGLlmCM%2FicY1g66SvngKy%2FCdWMZDXHcym4UjlnvCY9nYJzDJ1mpdYmVH5m6nnhjTbkzcYLKWsstZN36QttvNte0t3OQlLGMYbHarCdMepdFWq4qVAaOU5KO6Ns9GMPwuhv6s%2BRVkq4MBJUkSdVjO0se%2F5t9QDv%2BixJ2cBHXnIGptQDEM9nOcwckDXmjDX%2FwGWg4bKkvucUPGhqi1pDUB9NVtZAEkbU8DTK1dfY61GqZ4jv9fz4bc8kJJ2TkR7I4QbvjlrwsVNU1h%2FcSpAFcrrtLx3t6ezMufW4AVNl5xXsyXiEiRTLpUaR%2BpPt2hFG2k35rw2IwwuhYlHin13Na4omP3LOWzYaaaV7c92WA%2BnNbozoU%2B%2BWkpwyKnf3BWUojAZB7diL8FOYGu8wvvLDyQY6pgG9wU0qV%2BTjW5EPA6DAbPO4TaVh3103VzksaMtBhePv1JD1oHW3YEwQjZ71MFU3Z4xvQ8Y5yR%2BTvx67dQeHdn3HOKJ6uMf5oo4c8WrqqxHc0hL8x0%2BoeRkSlqazdsEckfL3CEnzgPzMYxrNB5myBv%2FHLNcrafV9EjR4UlJuqxNqbyjWddzcpf%2F%2FZ91lDQMg6j0qY9NAzI2y%2FvhLPxBVB%2FDWCO18C0uJ&X-Amz-Signature=6e8d630a187f3cf0616631a82ab44f70feaf165bc1a82032e7bd51c3b23bf93b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSFM3GUY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBehSAU9d2vfmq6RpIDB9KJXS6FZH5NHkha9z6U1KGa2AiAvsC0XqJXrmCVyvXveTrVFx41uShic1t%2F3%2BLwXPd7sCir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMvYngPc5P3ISXbx6cKtwDaX01GiWrWuP%2Frjp%2Fz42NOsMDAnSAx75QjwGRrtJRTiqG%2BtB8W7ecs4U6K9sP3S%2B7vre9%2FcPXaWS6sMQUVT3vtC%2Foem7HWaShfmSFp4z99b8hs3adyuiwrqEPhTd8xAzDYDLfh1Ho2mQz2fnJG%2FU1zuPrMtizV57cDhZOqyzD4P66ruTz4%2B6zsTNh%2FQ46zzGfJuO9Um7CPyHRXVN0dqxlHmUbp%2F9%2Fwkoog3kEFrUNkFyg%2BBQGLlmCM%2FicY1g66SvngKy%2FCdWMZDXHcym4UjlnvCY9nYJzDJ1mpdYmVH5m6nnhjTbkzcYLKWsstZN36QttvNte0t3OQlLGMYbHarCdMepdFWq4qVAaOU5KO6Ns9GMPwuhv6s%2BRVkq4MBJUkSdVjO0se%2F5t9QDv%2BixJ2cBHXnIGptQDEM9nOcwckDXmjDX%2FwGWg4bKkvucUPGhqi1pDUB9NVtZAEkbU8DTK1dfY61GqZ4jv9fz4bc8kJJ2TkR7I4QbvjlrwsVNU1h%2FcSpAFcrrtLx3t6ezMufW4AVNl5xXsyXiEiRTLpUaR%2BpPt2hFG2k35rw2IwwuhYlHin13Na4omP3LOWzYaaaV7c92WA%2BnNbozoU%2B%2BWkpwyKnf3BWUojAZB7diL8FOYGu8wvvLDyQY6pgG9wU0qV%2BTjW5EPA6DAbPO4TaVh3103VzksaMtBhePv1JD1oHW3YEwQjZ71MFU3Z4xvQ8Y5yR%2BTvx67dQeHdn3HOKJ6uMf5oo4c8WrqqxHc0hL8x0%2BoeRkSlqazdsEckfL3CEnzgPzMYxrNB5myBv%2FHLNcrafV9EjR4UlJuqxNqbyjWddzcpf%2F%2FZ91lDQMg6j0qY9NAzI2y%2FvhLPxBVB%2FDWCO18C0uJ&X-Amz-Signature=040d2ec18938a3ba4073f360ce6f55b64ac4a0240cb0efb761d115a407827e6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
