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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C5Q6WB5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIGmuYvqdrntRmR18Pps2XQtNYgSk4GATTw8SvVZ79avRAiB5A2K1L4mHtlSZr7euWduMflz%2BZvTjrYgtuoHxlxsAPir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMcmiQBaWE9O9%2BMV6zKtwD%2B9FGEWsfdiG1QB9Os00Xc%2BCvSttuhyOvfg%2BYZgXk%2FDanL8lI6MGuZl8iLF5VunCNNZGBv64B2CL5ez9zKT9ER7b2FNi0GWZDAALSsdX6nayop5qaR%2BuUci7RtSP%2BH0Oru1bw503wXUJfDixSFmpOk4d8PZEITJIkFZsrKysFZmBqZy%2BWW1XsHR%2BnbF%2BP5kZnJk965pande3K%2F7ZYSFrbxQw32CIo%2FhVEHDMQRPdY6tUN4DCxuShpo87WhR6xFSWS4X0NrKV8pz0wq0EwESCfE0RZR4%2BPa7s6n4UwdxArBYBsDyzeC3dYO3VN4Itg1mt1H8DdQyzxrE3kjIf3ugySwAZIXNuVRTiOkFbkwraEKzb9q0JtyCASRz5NqSMdjcauoIUlMz4R%2FM%2FjRg1iJjv9xomTJAPxn3Jb0EaMVSnadIan81BJGpH%2Fpbwsssjw4rKGn2or9yrs3hTnu8WKsobz79fa8%2F3LOCffWeHMUpoBml0C3I2rd1CZ6lUTbvckYcNasO%2F508ojMMP7en%2FxktxebUZnBlLsOvPykeCCE7MxAyZJ1L0FGJJ7TgLmauusVvxl3W3cSHoe8Of71bVTlNa35K1eA1HPqQ2fXsn%2BM1yb%2B8FjmwduvScmEEoxWvMw6vfCyQY6pgEz2fUrGxy5Ycr1ZBEmxnuBlF369SoCR0igh3OvTGxxd5szLScfa8cc%2F44x%2FMUR6r1c3h89mRXON9FYXKnsxlaNzc2R70vSi10EmNeVkiARrFkmpmLlb0waaldImhGjmIzAiS35PYFxjABCRVumGnSKicFPHq71LKlRcJxxSdtLGHDa7%2FRVMXnCqmGKKkr8Es7vPRfgtoqvkPTot8DiJPMvpOfv0F3M&X-Amz-Signature=d9f2affe6c667c7361846f7f47a4b8c8b9c639a9aaa8a95f6bc17d4d3be0c167&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C5Q6WB5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIGmuYvqdrntRmR18Pps2XQtNYgSk4GATTw8SvVZ79avRAiB5A2K1L4mHtlSZr7euWduMflz%2BZvTjrYgtuoHxlxsAPir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMcmiQBaWE9O9%2BMV6zKtwD%2B9FGEWsfdiG1QB9Os00Xc%2BCvSttuhyOvfg%2BYZgXk%2FDanL8lI6MGuZl8iLF5VunCNNZGBv64B2CL5ez9zKT9ER7b2FNi0GWZDAALSsdX6nayop5qaR%2BuUci7RtSP%2BH0Oru1bw503wXUJfDixSFmpOk4d8PZEITJIkFZsrKysFZmBqZy%2BWW1XsHR%2BnbF%2BP5kZnJk965pande3K%2F7ZYSFrbxQw32CIo%2FhVEHDMQRPdY6tUN4DCxuShpo87WhR6xFSWS4X0NrKV8pz0wq0EwESCfE0RZR4%2BPa7s6n4UwdxArBYBsDyzeC3dYO3VN4Itg1mt1H8DdQyzxrE3kjIf3ugySwAZIXNuVRTiOkFbkwraEKzb9q0JtyCASRz5NqSMdjcauoIUlMz4R%2FM%2FjRg1iJjv9xomTJAPxn3Jb0EaMVSnadIan81BJGpH%2Fpbwsssjw4rKGn2or9yrs3hTnu8WKsobz79fa8%2F3LOCffWeHMUpoBml0C3I2rd1CZ6lUTbvckYcNasO%2F508ojMMP7en%2FxktxebUZnBlLsOvPykeCCE7MxAyZJ1L0FGJJ7TgLmauusVvxl3W3cSHoe8Of71bVTlNa35K1eA1HPqQ2fXsn%2BM1yb%2B8FjmwduvScmEEoxWvMw6vfCyQY6pgEz2fUrGxy5Ycr1ZBEmxnuBlF369SoCR0igh3OvTGxxd5szLScfa8cc%2F44x%2FMUR6r1c3h89mRXON9FYXKnsxlaNzc2R70vSi10EmNeVkiARrFkmpmLlb0waaldImhGjmIzAiS35PYFxjABCRVumGnSKicFPHq71LKlRcJxxSdtLGHDa7%2FRVMXnCqmGKKkr8Es7vPRfgtoqvkPTot8DiJPMvpOfv0F3M&X-Amz-Signature=fd23392d5c4561ba8a43cd4f5c18d711a453ab18e251c1c14b5bea4a7ee17205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
