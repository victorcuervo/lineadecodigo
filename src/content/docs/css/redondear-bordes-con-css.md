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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YGUJ7G6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T155913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVan21H2T8S4vOG5LdzQxMu4%2BCKl5xHUwWeng5x%2Bs4PgIgRUdVKQhE1fGezYl3hZUW%2BAEt80r7tKPAbn5Hn%2FOo55gqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYmkdtv0E3WmJpLrSrcA%2FMFUEk6a85tx1TcETo1y%2BNWePoxUHPDT%2BnuKVdMW7g20Ti3QJXrUKXW5BhUk60G4V3JDG%2B8L9upc4yRiOlZkEp7zryrO%2FZOoNHTIr8J4TEiwV9w0DW%2FjMfK%2BgX2SCFenGB44XUHv9dCsvaAi8maHeeFZioMowgG5uqGPcih5w4dRGEYo7YasGiZMghIy5GoHdIZ2icavo6d2E03vWKOQoZdhXpnYGO1tWmN%2FP2XleJYFOssipWXke9ObpPoxO9H9eQlzSCjYaY2jed%2FNiwY5pt4qMbIs6fpVF7AYrav7tNu9UBIIDulFzpW2lPSpEh64lBG1RA1PNOvnunYE4S6%2BCJW736aJsXwKrmDEZCvsTwBiuVxNVVVaSd2iWrfBLtEJhEwrUPe6i8U4aX2WWH98OtSTnuuXUCpjV8LN7%2B4G5pvRfa83DlATTdioXM9samaMzaaEAuuAWnoV1COu275yhRkOjAS0LnxWK%2B9IqXWWO4Ct0uuWIdyospCUKNDKtx2dv%2BCeENV94KUfyKLCunr0jXncvOVe2r2qYqR%2Btmj9QuVju9kVNcQFMbs0kBRP0FYOkbjHPpCDDQXEsKhBKaYoO1LokZPhZChIJnmukwp4iTbSRhjPyyo6Mzyi7LEMKC51skGOqUBfOQKa5B3HUbE6eAeOnH1BLkv7wd5MhBZkfESA7Co3dLZVBoNkDZ1s9xMqpaJNXC%2FErTT9ODNJE1ywxD51nDWKeKav5bkJXP9XDxr3wGtEjYCZvWMVII2gH15Om0N8rzrXYe5ZdL8TMN4kBDjbmp1zdxWRhocnozsdky4PqBJz4S5mIxe6t7eTUKkPnm5ByzSx9ykalV9itsU3uFxj3%2BXGhT0H9uz&X-Amz-Signature=91175fc7ff7cade73a6c79dfd80c63dbc2e1eac976b76685b75c033cb2d83e93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YGUJ7G6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T155913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVan21H2T8S4vOG5LdzQxMu4%2BCKl5xHUwWeng5x%2Bs4PgIgRUdVKQhE1fGezYl3hZUW%2BAEt80r7tKPAbn5Hn%2FOo55gqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYmkdtv0E3WmJpLrSrcA%2FMFUEk6a85tx1TcETo1y%2BNWePoxUHPDT%2BnuKVdMW7g20Ti3QJXrUKXW5BhUk60G4V3JDG%2B8L9upc4yRiOlZkEp7zryrO%2FZOoNHTIr8J4TEiwV9w0DW%2FjMfK%2BgX2SCFenGB44XUHv9dCsvaAi8maHeeFZioMowgG5uqGPcih5w4dRGEYo7YasGiZMghIy5GoHdIZ2icavo6d2E03vWKOQoZdhXpnYGO1tWmN%2FP2XleJYFOssipWXke9ObpPoxO9H9eQlzSCjYaY2jed%2FNiwY5pt4qMbIs6fpVF7AYrav7tNu9UBIIDulFzpW2lPSpEh64lBG1RA1PNOvnunYE4S6%2BCJW736aJsXwKrmDEZCvsTwBiuVxNVVVaSd2iWrfBLtEJhEwrUPe6i8U4aX2WWH98OtSTnuuXUCpjV8LN7%2B4G5pvRfa83DlATTdioXM9samaMzaaEAuuAWnoV1COu275yhRkOjAS0LnxWK%2B9IqXWWO4Ct0uuWIdyospCUKNDKtx2dv%2BCeENV94KUfyKLCunr0jXncvOVe2r2qYqR%2Btmj9QuVju9kVNcQFMbs0kBRP0FYOkbjHPpCDDQXEsKhBKaYoO1LokZPhZChIJnmukwp4iTbSRhjPyyo6Mzyi7LEMKC51skGOqUBfOQKa5B3HUbE6eAeOnH1BLkv7wd5MhBZkfESA7Co3dLZVBoNkDZ1s9xMqpaJNXC%2FErTT9ODNJE1ywxD51nDWKeKav5bkJXP9XDxr3wGtEjYCZvWMVII2gH15Om0N8rzrXYe5ZdL8TMN4kBDjbmp1zdxWRhocnozsdky4PqBJz4S5mIxe6t7eTUKkPnm5ByzSx9ykalV9itsU3uFxj3%2BXGhT0H9uz&X-Amz-Signature=42be473e45cc9e2a54be7164c6aceca09905901461d18db96d29425ed0931d16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
