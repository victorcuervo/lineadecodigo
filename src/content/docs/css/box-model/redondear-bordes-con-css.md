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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQAQWIDH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxpgwHbriCY0H1MgVNdw8TkR%2B2Dqvkj7PWHH48rSNNxAiEAqXhLYLWMd5GVrivdfuEDHgHVBdPRZLwPFiFWeCrjuPMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDMRh8ephrpDj7LoTpSrcA3ecPR6XTRiuA3oGr%2BjK%2FPifmRNMGLALaJD1IeQxDLqqZgz%2FtxGb%2BXRX80Dqr33jz8aPpFN7Q%2Bt9P%2FGpv5T%2BbGF7%2FB0oeveyP42NG5ly3OYZrcgOyDfXk7f130%2F0NuBUyc%2B%2BrOJr2I9PRd3vUv1aQznz2umbtptx%2FM4G1js8Msqp3%2FhXQXlQwfV%2FWJGlTnJUd0KL9HxMiJt9RAj72Xi3sF0Xv5V3dSoazsfYPDaM62HqEGH%2FBKL5w1JdU9%2Fod6l1BHjwGMtRH%2BFgPwX6nKUZeam0EgtI6iDBZLwh5cv5yAJFZz5KDO3uG%2F0DpzBR%2F7MwvCI6AY4U%2FQjOUQS1z2FYedHGZ7htuWzv6mAgYO7olQfnGXiVdz68Wr%2FbOoIZbbdxWowkeqCVv4%2BkrVT%2BSJdRUAFRTLS21HDQk%2BD4f2OR8q4IJkthMZfS1ueL2iW0d%2BN2EUoegaUDWdXiGPN6dF%2FFyUtddfE83gBiijgorwsgeIcZtoq3M6cVuMNLS%2FHjkSFFgPJYrLNBipPBDzi32dhEKjNr1pj3lQ0Za0CayHA8LW%2FZqM9zUlQMGMAI13LaYtpqd2NIXsjypzr8bQmAlgm32MP%2BvSYqKYC1b27ZGag9gC4VoJGitGg%2F4Yu%2B6wItMKucicoGOqUBsezx4QOaxkiRxd7O%2BE3Y63db2bHejoRNW2k3WSbV0Tu3T3XmbP8bnHUhjrZ6s%2FeTkxwbOGQrWWixzu58mckyJyWF9FLCANuwSPoyMlCUeVCj0%2BvLmVIfMuwPFusuU%2BOfgQ3sUc%2BLFayc3AfTsI%2BBhMPy9HQIelRqPJHG0uYPmcDJj2ORCciMO2YW%2BKhVJs%2Ffof7ZgFFqSzpBnQJoGoNvDn0TKisS&X-Amz-Signature=a2861556a9e59fb0dd2511b85dfca44ac4317c37b15aee591670f0493bb6f9bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQAQWIDH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxpgwHbriCY0H1MgVNdw8TkR%2B2Dqvkj7PWHH48rSNNxAiEAqXhLYLWMd5GVrivdfuEDHgHVBdPRZLwPFiFWeCrjuPMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDMRh8ephrpDj7LoTpSrcA3ecPR6XTRiuA3oGr%2BjK%2FPifmRNMGLALaJD1IeQxDLqqZgz%2FtxGb%2BXRX80Dqr33jz8aPpFN7Q%2Bt9P%2FGpv5T%2BbGF7%2FB0oeveyP42NG5ly3OYZrcgOyDfXk7f130%2F0NuBUyc%2B%2BrOJr2I9PRd3vUv1aQznz2umbtptx%2FM4G1js8Msqp3%2FhXQXlQwfV%2FWJGlTnJUd0KL9HxMiJt9RAj72Xi3sF0Xv5V3dSoazsfYPDaM62HqEGH%2FBKL5w1JdU9%2Fod6l1BHjwGMtRH%2BFgPwX6nKUZeam0EgtI6iDBZLwh5cv5yAJFZz5KDO3uG%2F0DpzBR%2F7MwvCI6AY4U%2FQjOUQS1z2FYedHGZ7htuWzv6mAgYO7olQfnGXiVdz68Wr%2FbOoIZbbdxWowkeqCVv4%2BkrVT%2BSJdRUAFRTLS21HDQk%2BD4f2OR8q4IJkthMZfS1ueL2iW0d%2BN2EUoegaUDWdXiGPN6dF%2FFyUtddfE83gBiijgorwsgeIcZtoq3M6cVuMNLS%2FHjkSFFgPJYrLNBipPBDzi32dhEKjNr1pj3lQ0Za0CayHA8LW%2FZqM9zUlQMGMAI13LaYtpqd2NIXsjypzr8bQmAlgm32MP%2BvSYqKYC1b27ZGag9gC4VoJGitGg%2F4Yu%2B6wItMKucicoGOqUBsezx4QOaxkiRxd7O%2BE3Y63db2bHejoRNW2k3WSbV0Tu3T3XmbP8bnHUhjrZ6s%2FeTkxwbOGQrWWixzu58mckyJyWF9FLCANuwSPoyMlCUeVCj0%2BvLmVIfMuwPFusuU%2BOfgQ3sUc%2BLFayc3AfTsI%2BBhMPy9HQIelRqPJHG0uYPmcDJj2ORCciMO2YW%2BKhVJs%2Ffof7ZgFFqSzpBnQJoGoNvDn0TKisS&X-Amz-Signature=81e313635ccb2048cbf98f6e1c81890045ce3a17d93ebc5b73c3e1018062e66d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
