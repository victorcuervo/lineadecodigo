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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674TD3OIX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T081853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQC0O9b8HOKhxvFFDkS69Rw3QiwA8GrzhjjV8FHDRy8uFwIhAKLfc25UuVPZA2pjjlsKssXKBY9Mjs7KK%2F9doHlZdBAsKv8DCEEQABoMNjM3NDIzMTgzODA1IgzfpeSLOeSFkavNiyMq3APHsbMTZAxsJei4uv35Scl6tZzf4an0%2BgZXq3fInFjFycCMWNUa8k0ZSsM%2BM8FWcaqy1qivMvSRKjS5O9Sw5%2B7rjYRpe1SAcio3pB8t2nVznQRRzzrMDA%2FwrzDhl%2F%2BbWtsRXImKjr8lKy0dZlZmCQu7U3DiDE0phBpbnY8ukerVtHN4SKKq9dri7lx059f0cxwz5B3BlBKxIjPww5c4ZW3F9q8LMxhPKeG3t4KIkxLIgrKTAEuv8W31tSC0DdCWsDY4EDRezFmDcX2CwrKsf1GMlNajfNXmezQCcr86GCbuiPNqiGczPtu9PGORz3G%2Brtx3YuW6pFQHkx2Zysj4v5TKnjdqym30P%2BCCgQxCyWUL4PU2fx9q1xUv%2BZ8b6olZzZex4hftChUiYKSjlG8IHeYvfKQnSI8JBQqC%2BENb2kKSDXhJShs66%2B0y50jnjh059d32G4oT4mCZaBatTMCY41ptFJzWXjPpxlAe%2FOQcv1XGx5ca5eiMvlNCktLFR4YJpQo7qWx6gu3n9I8eFJTmS3CzBu0hX4af2F%2FmZ6zQvBB3TR5kkHfwTwNpMZCVvGXLz04LBP1TrGQHCmncRr7%2FGFLiCZkVJ376A%2F6WLbAkKn4hI7w1saztgfYhc4dfkzCShsXJBjqkAevie2Jtlo9fa0dRDAAkk%2ByNzSuDY59%2FEaxJ%2FT8YR4g7%2F5l0lypPqJ2hX7hXUaGj0m01GtDPgJKTKv70ptKMtOiVDIXTJqoYr9gGOFfnQ1855hI8cyxoXxely8v%2BE5WaycsrEWtgvxWjuSw0QyNSiDq%2Brwjj4wIz2G5eHD875m6PxaAEtAvSYOFOIA2FAMDYegL7lhv11VObew0IvUrv4VvpoEyh&X-Amz-Signature=3538031973e6ff53d05b9a1c721e762e612ae082eee7b31af44a7ff378d9fc5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674TD3OIX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T081853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQC0O9b8HOKhxvFFDkS69Rw3QiwA8GrzhjjV8FHDRy8uFwIhAKLfc25UuVPZA2pjjlsKssXKBY9Mjs7KK%2F9doHlZdBAsKv8DCEEQABoMNjM3NDIzMTgzODA1IgzfpeSLOeSFkavNiyMq3APHsbMTZAxsJei4uv35Scl6tZzf4an0%2BgZXq3fInFjFycCMWNUa8k0ZSsM%2BM8FWcaqy1qivMvSRKjS5O9Sw5%2B7rjYRpe1SAcio3pB8t2nVznQRRzzrMDA%2FwrzDhl%2F%2BbWtsRXImKjr8lKy0dZlZmCQu7U3DiDE0phBpbnY8ukerVtHN4SKKq9dri7lx059f0cxwz5B3BlBKxIjPww5c4ZW3F9q8LMxhPKeG3t4KIkxLIgrKTAEuv8W31tSC0DdCWsDY4EDRezFmDcX2CwrKsf1GMlNajfNXmezQCcr86GCbuiPNqiGczPtu9PGORz3G%2Brtx3YuW6pFQHkx2Zysj4v5TKnjdqym30P%2BCCgQxCyWUL4PU2fx9q1xUv%2BZ8b6olZzZex4hftChUiYKSjlG8IHeYvfKQnSI8JBQqC%2BENb2kKSDXhJShs66%2B0y50jnjh059d32G4oT4mCZaBatTMCY41ptFJzWXjPpxlAe%2FOQcv1XGx5ca5eiMvlNCktLFR4YJpQo7qWx6gu3n9I8eFJTmS3CzBu0hX4af2F%2FmZ6zQvBB3TR5kkHfwTwNpMZCVvGXLz04LBP1TrGQHCmncRr7%2FGFLiCZkVJ376A%2F6WLbAkKn4hI7w1saztgfYhc4dfkzCShsXJBjqkAevie2Jtlo9fa0dRDAAkk%2ByNzSuDY59%2FEaxJ%2FT8YR4g7%2F5l0lypPqJ2hX7hXUaGj0m01GtDPgJKTKv70ptKMtOiVDIXTJqoYr9gGOFfnQ1855hI8cyxoXxely8v%2BE5WaycsrEWtgvxWjuSw0QyNSiDq%2Brwjj4wIz2G5eHD875m6PxaAEtAvSYOFOIA2FAMDYegL7lhv11VObew0IvUrv4VvpoEyh&X-Amz-Signature=5e82bc0489fcf27e83f3e6392157a5fb3af385251720b669493a0a386a609b93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
