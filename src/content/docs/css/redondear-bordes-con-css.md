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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z44EN5FV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T112057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU5HaFFiOtJlgIyN8lrvqn3blEH0UXpAK%2BKJ9Qb1hShgIgOvDQtlGLCt80u%2FJNh%2FHkB7JPGF%2B3pmhQWcsAOcopfBAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDNd074uHYLVwpb8DUircA493%2FNXR3Qnv%2Fn%2BqL1YzZFGTjjM%2Bh%2BTnYsZUFDn7OmclwGfel%2BLmuFkjoNS6opZJGN1Uas%2Bceb35Mlhd4iEIBn1khn3Jmp6ciALv8ykgzmRZvILEQ4J5ysoOrIQm45scGEW%2B3LJhBrX8ppHoRLMmTH2YeHhl90aRLm6v5NL6SrUI1QFQQkOHnf%2B3rKsm85rJmsdYEs3xIyWYnC6bCeW4YX%2FgLDPOW3Mr2wKsDH6BVHqVGrptoFQumve%2F%2FZej%2Fndh2Ma%2FXf%2B2PhzSiKkhIXad8XeNGtMqkj4XvyzXOspInxCFwM62leMuIuVDQuC1v3tTgK5IBx2X9CJJsSS96xTCBCUapkP6VUWY3RU9fjqp%2FR6DzPkX1huf2gIp2xJniDhVUcI7%2BKj6HEuEK2kaP6gnyHPAogkFCKrD5puHheSCtcXnPEPGfAYoMQQ1wtPE8tuFODSzQQo%2Bt0Vf8sfZ47jUd5GIG5U2IY0HmGwoNpK0U6JNtxR7qkUirjgiSO2CaB%2BvKLEwGfnD6Xhsb47zZodjbqLt6lJjpmqXC4sFNn%2FhvhzQ7Hmv%2BB7d%2FB2FoouJE1ewTaoQYRbRBsPBi0ivLChST4jec80oikCHwfk2c0dTXb2f8X7FgHCPAzDXbFEgMI7YyskGOqUBGoVGjepgtgLMn6bZNnoHodLrodUUdwixOEbNf1Y4eWutm2JpD4gKb6%2Bg%2BGimP5GtdnGDhD1pVMFJPStF4VjI2wzJ%2FpEAkZyERp8562%2BaiWmhL8sENEjJY3eU%2BgncCG%2Fr%2FA1kVO%2F%2BWLJTW8tK3pV4IhzU4S5gjYV8sOFeXCv%2FRlhpgVR6klSuHC7qctSa%2FMjxFOec8S0qouKqevfoe9T5Iv4aAGy1&X-Amz-Signature=d0690fe0bcd60526f0e0df5a628f0e0151c92e665f1f6a520f0b7373c381f981&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z44EN5FV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T112057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU5HaFFiOtJlgIyN8lrvqn3blEH0UXpAK%2BKJ9Qb1hShgIgOvDQtlGLCt80u%2FJNh%2FHkB7JPGF%2B3pmhQWcsAOcopfBAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDNd074uHYLVwpb8DUircA493%2FNXR3Qnv%2Fn%2BqL1YzZFGTjjM%2Bh%2BTnYsZUFDn7OmclwGfel%2BLmuFkjoNS6opZJGN1Uas%2Bceb35Mlhd4iEIBn1khn3Jmp6ciALv8ykgzmRZvILEQ4J5ysoOrIQm45scGEW%2B3LJhBrX8ppHoRLMmTH2YeHhl90aRLm6v5NL6SrUI1QFQQkOHnf%2B3rKsm85rJmsdYEs3xIyWYnC6bCeW4YX%2FgLDPOW3Mr2wKsDH6BVHqVGrptoFQumve%2F%2FZej%2Fndh2Ma%2FXf%2B2PhzSiKkhIXad8XeNGtMqkj4XvyzXOspInxCFwM62leMuIuVDQuC1v3tTgK5IBx2X9CJJsSS96xTCBCUapkP6VUWY3RU9fjqp%2FR6DzPkX1huf2gIp2xJniDhVUcI7%2BKj6HEuEK2kaP6gnyHPAogkFCKrD5puHheSCtcXnPEPGfAYoMQQ1wtPE8tuFODSzQQo%2Bt0Vf8sfZ47jUd5GIG5U2IY0HmGwoNpK0U6JNtxR7qkUirjgiSO2CaB%2BvKLEwGfnD6Xhsb47zZodjbqLt6lJjpmqXC4sFNn%2FhvhzQ7Hmv%2BB7d%2FB2FoouJE1ewTaoQYRbRBsPBi0ivLChST4jec80oikCHwfk2c0dTXb2f8X7FgHCPAzDXbFEgMI7YyskGOqUBGoVGjepgtgLMn6bZNnoHodLrodUUdwixOEbNf1Y4eWutm2JpD4gKb6%2Bg%2BGimP5GtdnGDhD1pVMFJPStF4VjI2wzJ%2FpEAkZyERp8562%2BaiWmhL8sENEjJY3eU%2BgncCG%2Fr%2FA1kVO%2F%2BWLJTW8tK3pV4IhzU4S5gjYV8sOFeXCv%2FRlhpgVR6klSuHC7qctSa%2FMjxFOec8S0qouKqevfoe9T5Iv4aAGy1&X-Amz-Signature=41554ab4563255bef86f17ec41c7f7adf0df553ac674a368fa3480e6c19d2355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
