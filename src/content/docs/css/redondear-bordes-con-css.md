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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X34PJXR3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T105853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FllSSLk6sI0%2FRo9610cUE9N%2FXQrH2306OqTVoIu6voAIhAMQVpedT9QzorHLufy5nEIXAdTjbgIVES0UsSPtHhURyKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRBpxC51E1cQFEAAMq3APkqSQCRajf0GT34N%2FjylXj30J40tjAUwMJdSQm6fxGGv%2FvtyjvOe5iFoYUtlxOIhsyXe9Oo5mRGQL81qPhEG3k%2BFJYvbDbaLwWsjeST%2B%2Fxp%2B0mwa9eoQ6DbhxYAFkYBuPcMCasNotC6JINkQyV3dx0yYxKbdksU0AXp4wtdf7D%2BTxjWTjV4HI7Qo%2Bz3Ku6G0f8bDhOr9bgURjMS4CKGAwMiWf%2Ft2x1pR9U%2BtKZG4e8RERjlaNHwELdBkI7tJVV0o7UIhdjJB7V13xugsNy%2FyV%2FRxwonsJr4hf%2Fq9An8SvhN7RF31lHE6WTDbiO9cnnV%2B9j1DW%2FybXH2whSM6Exg9NWlU%2BevxtDXmeJ%2Be4ktW%2BYcs0b4ELosDQIEDuSA3BbaC%2BDz1E1SSHgtonfeuOA5joRVAyV5um0sCVQFr9MSCP4HPY%2BoU6yHGtUQYrnZZnDOwOmwfwrvPP2nFgBMAbIseV2%2FqobH43Dpp2gYsE6Gy19s2bRIC56%2BBHtUw4HILe8jlSdVtCJ59f6B%2FayeKzHo4U2T943cb%2B0M8qrSoU9YeZqfIWnwt%2BhxfDfRWrGExM5Sncr0MuX45AXRXcMZn9698ll6DoRyalTbr6z8Dohz8O0CkVlAqlxVyeETlstnDDGmdXJBjqkAVHkbDtblCboGpIjSwuaxIp9zM%2Bna%2BM10eG62qnYw20SqaP0BPrA5ptaWKfD3%2FzDkPmlwYXndNBqJfa0U35B0zxGuAEyXUBannii%2BnBv6zmgXGrKqODJL7S85axWuMWifLcpZArfm99bTZQaok7rN6YrkgCSJ%2BHU8kCjazocCS03mA1lJjj1tWcCLXj8%2BxeqXsLR%2BubUdRE8N5E%2B6JCSuHycZO3v&X-Amz-Signature=2b5b5f51d8308204e123c2bc252ac94ac688e77849949c10b438c01d0de51455&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X34PJXR3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T105853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FllSSLk6sI0%2FRo9610cUE9N%2FXQrH2306OqTVoIu6voAIhAMQVpedT9QzorHLufy5nEIXAdTjbgIVES0UsSPtHhURyKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRBpxC51E1cQFEAAMq3APkqSQCRajf0GT34N%2FjylXj30J40tjAUwMJdSQm6fxGGv%2FvtyjvOe5iFoYUtlxOIhsyXe9Oo5mRGQL81qPhEG3k%2BFJYvbDbaLwWsjeST%2B%2Fxp%2B0mwa9eoQ6DbhxYAFkYBuPcMCasNotC6JINkQyV3dx0yYxKbdksU0AXp4wtdf7D%2BTxjWTjV4HI7Qo%2Bz3Ku6G0f8bDhOr9bgURjMS4CKGAwMiWf%2Ft2x1pR9U%2BtKZG4e8RERjlaNHwELdBkI7tJVV0o7UIhdjJB7V13xugsNy%2FyV%2FRxwonsJr4hf%2Fq9An8SvhN7RF31lHE6WTDbiO9cnnV%2B9j1DW%2FybXH2whSM6Exg9NWlU%2BevxtDXmeJ%2Be4ktW%2BYcs0b4ELosDQIEDuSA3BbaC%2BDz1E1SSHgtonfeuOA5joRVAyV5um0sCVQFr9MSCP4HPY%2BoU6yHGtUQYrnZZnDOwOmwfwrvPP2nFgBMAbIseV2%2FqobH43Dpp2gYsE6Gy19s2bRIC56%2BBHtUw4HILe8jlSdVtCJ59f6B%2FayeKzHo4U2T943cb%2B0M8qrSoU9YeZqfIWnwt%2BhxfDfRWrGExM5Sncr0MuX45AXRXcMZn9698ll6DoRyalTbr6z8Dohz8O0CkVlAqlxVyeETlstnDDGmdXJBjqkAVHkbDtblCboGpIjSwuaxIp9zM%2Bna%2BM10eG62qnYw20SqaP0BPrA5ptaWKfD3%2FzDkPmlwYXndNBqJfa0U35B0zxGuAEyXUBannii%2BnBv6zmgXGrKqODJL7S85axWuMWifLcpZArfm99bTZQaok7rN6YrkgCSJ%2BHU8kCjazocCS03mA1lJjj1tWcCLXj8%2BxeqXsLR%2BubUdRE8N5E%2B6JCSuHycZO3v&X-Amz-Signature=394be5b84481cab4ee2a0af5b5b899910f2c1757aa36bf14b996b42cc3fa2f2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
