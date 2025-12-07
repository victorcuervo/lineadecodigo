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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTJT4VX4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T205926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTOKTZvwRUvu2xUQW3Yly2YT8X0mTjGNWMfJ4WApt82QIhAKIsJAlXdf%2BKLGjcZFZlCaafhFtJP2WKZUotJ9qANhSEKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoqTOc4FPKmQbGb7Mq3AOo3NsCqW6bBWbWU%2Fw8G2%2FfRvPfhHVY4HrJ4l4u4BzLMe7HDs6Ghqn88lPQIYpQrFaDwaJNip%2F850jGCeKwtdluuWQ89IXw%2Fl5IWVYLbGED%2BzCDraPZaiI65qdo8igcEF7lMtQq9GodXmd8k4cJyCaDOh5CTMSdQaOa9ma97l1ZSyOaEEHbVNZutsUNsCL6TePb8EvksJFKUQNFmGxiaHwmw4RyReKSuHUDdlF4du%2B6fstzP8TaH%2FiuZ61ygoXdrwK2npxF%2BJvnfszBd7%2FB%2FtFcr5z%2Fw0xxxYRti8H9i%2B7KZqXkdW0WMGurbBNQ5yJB9OuDLb54G8InxAZS7bQiZa2tj3ngPUm7%2FH3%2B0uazaYHC3nL%2FsiCwwbnc2H6tLlcdoQc54xWUG2MlpKF2BkH3m98AuKiQ63bmOCrsu83W9xYm9xrmNYr4z%2FZOArmcxOS1JyyWqpxr0iMFBwDCcF0SdnSRQrig0ifaFUd8glPYtQXbHGktLudWt%2Bt7uO2E6ZtjMr825hJXdqI5Krz8TVnrRD3fIBOB827LgzM8nncARUlGtvKRUW3fMEa8ue2HaRRTxbQQcrFwT0eS0t5hwgEOQt1zvu50JjkQipJ1eIJGngjAfVwKy0UqjN1PDAMw1DDTx9fJBjqkAWDlara3Y5cKmrMC%2FwBcPQ24xigKsnr5cq8XPwHj64NqchVgagjSN14sKQozvBO9q4esh4TQ7efaWt2M24DWwwskcHrapLrfXAzuifOtOzsws4aKCDPTdjzIlb3HtlIJwS5GM5%2F1UMUeM4xjGhhEVMoWsdswBXsDlv83PVWvg45XbUcvvPCFKBQgh%2BAnp4GjwocSg6DGmrmq4kh%2BBM8rJFCuMbMs&X-Amz-Signature=5ca158b6048a8a4863c2ffbdaa9a37c4f40e7e8f3a2dc3b2bd644ac5b74bf1de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTJT4VX4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T205926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTOKTZvwRUvu2xUQW3Yly2YT8X0mTjGNWMfJ4WApt82QIhAKIsJAlXdf%2BKLGjcZFZlCaafhFtJP2WKZUotJ9qANhSEKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoqTOc4FPKmQbGb7Mq3AOo3NsCqW6bBWbWU%2Fw8G2%2FfRvPfhHVY4HrJ4l4u4BzLMe7HDs6Ghqn88lPQIYpQrFaDwaJNip%2F850jGCeKwtdluuWQ89IXw%2Fl5IWVYLbGED%2BzCDraPZaiI65qdo8igcEF7lMtQq9GodXmd8k4cJyCaDOh5CTMSdQaOa9ma97l1ZSyOaEEHbVNZutsUNsCL6TePb8EvksJFKUQNFmGxiaHwmw4RyReKSuHUDdlF4du%2B6fstzP8TaH%2FiuZ61ygoXdrwK2npxF%2BJvnfszBd7%2FB%2FtFcr5z%2Fw0xxxYRti8H9i%2B7KZqXkdW0WMGurbBNQ5yJB9OuDLb54G8InxAZS7bQiZa2tj3ngPUm7%2FH3%2B0uazaYHC3nL%2FsiCwwbnc2H6tLlcdoQc54xWUG2MlpKF2BkH3m98AuKiQ63bmOCrsu83W9xYm9xrmNYr4z%2FZOArmcxOS1JyyWqpxr0iMFBwDCcF0SdnSRQrig0ifaFUd8glPYtQXbHGktLudWt%2Bt7uO2E6ZtjMr825hJXdqI5Krz8TVnrRD3fIBOB827LgzM8nncARUlGtvKRUW3fMEa8ue2HaRRTxbQQcrFwT0eS0t5hwgEOQt1zvu50JjkQipJ1eIJGngjAfVwKy0UqjN1PDAMw1DDTx9fJBjqkAWDlara3Y5cKmrMC%2FwBcPQ24xigKsnr5cq8XPwHj64NqchVgagjSN14sKQozvBO9q4esh4TQ7efaWt2M24DWwwskcHrapLrfXAzuifOtOzsws4aKCDPTdjzIlb3HtlIJwS5GM5%2F1UMUeM4xjGhhEVMoWsdswBXsDlv83PVWvg45XbUcvvPCFKBQgh%2BAnp4GjwocSg6DGmrmq4kh%2BBM8rJFCuMbMs&X-Amz-Signature=d4174a414bafc5d4bcc0c97edd4f08a4749edc2edf9087af549a07ef8b395dc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
