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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F5SHFCE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdGUJZCKGrC2kFUEqsdXxcFzRFaDVibDgT19BlSSH8mQIhAPdRcSUUznKcegdJkgBoAqfzX1n8hsmY5wGLSjOhJSHmKv8DCHQQABoMNjM3NDIzMTgzODA1IgyWGk9KlRV5ruUnqZkq3AOxiDnxc1SclRmWuxpv5%2F22OrQeeBpzwc1RHSF%2Fd7az94ww%2FhkZPK%2FVYMs%2Bn5VlL7C8Wq1RJym4Iwo2NmBD7G%2B2zT8dHNOg0NTRdMMeILI0cfdxDpw6gOZbsnSnLYbi9%2BGc5vz4lp4wPmLQtY%2BcH8UPqDoS0AhophVsfYUQXOP7qC7gGpX%2FVkocnnLe0ELCOT1BYblYJjWy8jfdaZS80juISYEd23rwKnVAz9S2BwQrCLPBTcABbQnuCvdqlshJZXfqmD0OsBrwgdtbQO6DjSEDVTfVC%2BuEH9S28cdfiYVJJ9TMhyn8GmkEG0XrTpWExHz0C%2FIBZAvswcODNXYSwkqd1%2BXqvFglblqWKayQJvPtV%2B0%2F%2F%2FdqR5XOTEtKZYW6KxCKNpsw5egfJIuJh00vWqCmocBPdEG1g5l2LqFaH5E3RAOO%2BOTOz6pQgOTPpJ%2F1B4SC6663qgexv%2BhymbenaxjOBFVx5tuerai%2FlAILqSEqVerimVwmuy9nXFNbWm9mflrMwPx2bggsGdtoj%2BG%2BEoKSMJm2nfhY9T3gvp2C9%2FqkabUj3ZHIlB3XC0LgKIzOZQm%2BCTEBOzYpZhGpD8KsIRMWwNA%2BONjfU%2FIERKjUWrSUcE7D4OY%2FrGvdua2llzDIsYjKBjqkAUfWf1KcGId8nuYfhyFu5PTpyBVNjqjplrDvd9gu98tglna0tnIFFiFqjs5HL64nYwLEpqBzc%2BYOw6C1wM9vxgC8Ze486T2LY6YT8GLdtig8peNFmFAf94eSzfMiUQ2urEGGuzUW6QCPzkmWASD5J%2BhGqY1o5EbWkTWC9wP3gPcgv1KUHQ5eRqibuI5CWjwCm8CIDCxU8QCWTfBajdEheeU6XOIf&X-Amz-Signature=5bfdfd0f5a6b00e5f1f1de57f94bc7bffb4654efd75e8e229c7dc0b2a42d513a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F5SHFCE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdGUJZCKGrC2kFUEqsdXxcFzRFaDVibDgT19BlSSH8mQIhAPdRcSUUznKcegdJkgBoAqfzX1n8hsmY5wGLSjOhJSHmKv8DCHQQABoMNjM3NDIzMTgzODA1IgyWGk9KlRV5ruUnqZkq3AOxiDnxc1SclRmWuxpv5%2F22OrQeeBpzwc1RHSF%2Fd7az94ww%2FhkZPK%2FVYMs%2Bn5VlL7C8Wq1RJym4Iwo2NmBD7G%2B2zT8dHNOg0NTRdMMeILI0cfdxDpw6gOZbsnSnLYbi9%2BGc5vz4lp4wPmLQtY%2BcH8UPqDoS0AhophVsfYUQXOP7qC7gGpX%2FVkocnnLe0ELCOT1BYblYJjWy8jfdaZS80juISYEd23rwKnVAz9S2BwQrCLPBTcABbQnuCvdqlshJZXfqmD0OsBrwgdtbQO6DjSEDVTfVC%2BuEH9S28cdfiYVJJ9TMhyn8GmkEG0XrTpWExHz0C%2FIBZAvswcODNXYSwkqd1%2BXqvFglblqWKayQJvPtV%2B0%2F%2F%2FdqR5XOTEtKZYW6KxCKNpsw5egfJIuJh00vWqCmocBPdEG1g5l2LqFaH5E3RAOO%2BOTOz6pQgOTPpJ%2F1B4SC6663qgexv%2BhymbenaxjOBFVx5tuerai%2FlAILqSEqVerimVwmuy9nXFNbWm9mflrMwPx2bggsGdtoj%2BG%2BEoKSMJm2nfhY9T3gvp2C9%2FqkabUj3ZHIlB3XC0LgKIzOZQm%2BCTEBOzYpZhGpD8KsIRMWwNA%2BONjfU%2FIERKjUWrSUcE7D4OY%2FrGvdua2llzDIsYjKBjqkAUfWf1KcGId8nuYfhyFu5PTpyBVNjqjplrDvd9gu98tglna0tnIFFiFqjs5HL64nYwLEpqBzc%2BYOw6C1wM9vxgC8Ze486T2LY6YT8GLdtig8peNFmFAf94eSzfMiUQ2urEGGuzUW6QCPzkmWASD5J%2BhGqY1o5EbWkTWC9wP3gPcgv1KUHQ5eRqibuI5CWjwCm8CIDCxU8QCWTfBajdEheeU6XOIf&X-Amz-Signature=19c9fb30f7de8dc9b4629b7566e346f7b01eb34eb8f341c93470e0b074c361da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
