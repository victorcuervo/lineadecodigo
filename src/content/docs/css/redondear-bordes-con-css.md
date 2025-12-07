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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTXUFIMH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T204630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA69eIUcLXJwozI1tDyrE%2FRfva%2BBiv8tUNJMexSaRYyyAiEA5qRdrqHH%2BiVpBU39d8ctlppdmARzjoi4oyzyb4v2LPAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtrUoeN2tNri59HZSrcA6%2BgU5PAM4UU850GT%2FDUx9O3IEipLFPZTVfOltmeoUC3xC0KEYzPwuSAdnBmkXt6MKItQe0Qu3UUBjJgsRXKhfVBWTncgc8QD5XU0fqaGjdeuO6VUzH4veTHXLLuYmejdNDnqxayYxKRVq7DIEhoEHrGPgeo7WxW8fMpQlgUQAuoxoQNvrRlAkK9WWOrJKnR5F%2Bp1Ollp%2B9TMk33PDnHBtEPvUAd3E69B32GOtFpbeI2lBeOACls95C7QzBE%2FKknvBwKrQN6nG0vxvKwdl3WUeZMoIZLOVqvegIyr8H7zh3S6MeJw9%2F%2BNLp%2FOlUcv%2FP5GfzusFXOK9ibTZhyWU3Kz5f4CPpYpuMAlYSErsponBnP%2Fo9j9empaRSF2oF4PlQjmGEbnrRLcL189vTYAthNJP8Cv5T%2BtnkKCd3eI1wP5ODhHQ%2BLKAfhB6da1%2BZJ3vdQyFRoMTVQWa4IIc5F4wod8nrSB2znXxBMnzwPPWxIXTl4DPxY3AiFnAzWiXT2%2FYLU90VYQIvWRjcjNMBKC5JDan2wRdx5NDilROPmoOFravQO3Vvog618iAq6zSCMA%2FDzJHfw3Gi4IgB2cHUNRVw8XCFiVPGDFf8cGns18l%2FUlup8xKLEP2HDHIutA%2FiXMMjH18kGOqUBrXJrrQhJdC%2Be4DGu2yySsGPLR7FZK6JjleqKfinVS6pw1bWjD4%2FVHR7gQLS3hwGZjMMfzoQ7B8eLQi7pgzcw6a4gd6%2BdosQ8AC3r2Jlz2PfqG%2Fhoa9%2Bte3HR5zcLvv7%2BICcbFdbuciyTEQRsFjTK9cHE48nhNh6apDKOZ8qB0dX1BjH2vvIdmDvoF72cQ2xVIC50vvz8b3FUtnpTd5JYiJgjBynk&X-Amz-Signature=60273e0f27b025a5ace7860115bc03aa461e5c19a4435e5dde5743cef80b0931&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTXUFIMH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T204630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA69eIUcLXJwozI1tDyrE%2FRfva%2BBiv8tUNJMexSaRYyyAiEA5qRdrqHH%2BiVpBU39d8ctlppdmARzjoi4oyzyb4v2LPAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtrUoeN2tNri59HZSrcA6%2BgU5PAM4UU850GT%2FDUx9O3IEipLFPZTVfOltmeoUC3xC0KEYzPwuSAdnBmkXt6MKItQe0Qu3UUBjJgsRXKhfVBWTncgc8QD5XU0fqaGjdeuO6VUzH4veTHXLLuYmejdNDnqxayYxKRVq7DIEhoEHrGPgeo7WxW8fMpQlgUQAuoxoQNvrRlAkK9WWOrJKnR5F%2Bp1Ollp%2B9TMk33PDnHBtEPvUAd3E69B32GOtFpbeI2lBeOACls95C7QzBE%2FKknvBwKrQN6nG0vxvKwdl3WUeZMoIZLOVqvegIyr8H7zh3S6MeJw9%2F%2BNLp%2FOlUcv%2FP5GfzusFXOK9ibTZhyWU3Kz5f4CPpYpuMAlYSErsponBnP%2Fo9j9empaRSF2oF4PlQjmGEbnrRLcL189vTYAthNJP8Cv5T%2BtnkKCd3eI1wP5ODhHQ%2BLKAfhB6da1%2BZJ3vdQyFRoMTVQWa4IIc5F4wod8nrSB2znXxBMnzwPPWxIXTl4DPxY3AiFnAzWiXT2%2FYLU90VYQIvWRjcjNMBKC5JDan2wRdx5NDilROPmoOFravQO3Vvog618iAq6zSCMA%2FDzJHfw3Gi4IgB2cHUNRVw8XCFiVPGDFf8cGns18l%2FUlup8xKLEP2HDHIutA%2FiXMMjH18kGOqUBrXJrrQhJdC%2Be4DGu2yySsGPLR7FZK6JjleqKfinVS6pw1bWjD4%2FVHR7gQLS3hwGZjMMfzoQ7B8eLQi7pgzcw6a4gd6%2BdosQ8AC3r2Jlz2PfqG%2Fhoa9%2Bte3HR5zcLvv7%2BICcbFdbuciyTEQRsFjTK9cHE48nhNh6apDKOZ8qB0dX1BjH2vvIdmDvoF72cQ2xVIC50vvz8b3FUtnpTd5JYiJgjBynk&X-Amz-Signature=eb5e8ce30e95780b47f8b5ea777b4b7b5d1a5c6c05fe9d3376a7dcd82f64ed34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
