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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UAS56JE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5H4dNm0sk%2BrRhSbFkYbna04bkMTfzYucj%2BuisKacOcwIgfGDWRjaQUMnP2%2BQC5gsrAEJ3XmZasalMtP8ynkYF4aAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEDAXNpINwzxfdaEBSrcA%2F%2FF2QdQlUQRLeREXfJSneF505uB0%2BtQhYrgaUzB%2FlUNH1vDHSPiwqmkqR8NJ2k0mWEJ90BBkTLuszmGdmOjnGfVoR704NVm8j5719Yl46jbPxRXccMsjAFd%2FbUV%2Bmz81tt1E9jT%2FreppKSe6CVzHxvhB4wPWLhzyBu2dSy2%2BTJ5jLI%2FYvFG5CinOfZZNCjrVKsdp2SRbQsWxk%2FJF4mVh6XTDgT4MpXd3Qmz%2FYUeaipFvhmbpR5Xz%2Bjd%2FG%2BRLWG%2F2VwfpMGLOj4oTbl%2Bs6am5KNXrja7%2Fn4Fx1w1UUHwPKL%2Fcm00kzqhdY%2FZYR3T5gAgD59R1u5DBBLNi%2BeLIp0dBJGDSusKL54a%2FKtG7PjE2vDcU72%2FWZx%2B8J8WrZU2YiwuFTd70tNvNbALUvQPBCxTsHCiHOjHaApGx3IWG5ADnOyC9bClN%2FlN5UhvFTWzLlYKfLpPeHwjMN7zEPgGX%2FrDnmSGQ9K3nu0AKp4VavPU2AktuCv4YiK9XhsgF1v1cKAN7ECA%2FCFeCeGNenYpwCAihQfhh3yvtdMKkKLdvUF00ANFKuWlq%2F84JRdmmkJbS5LWR6zT0XjyWmHOJSf9XHzarJU2dZYKzSOqDUInVVSaH4COrjcWmqJTGaqPCVYgMOr6xskGOqUBLMVJvSbsSrve2RtphU%2F74LWvYXFelU2%2FI007wLdK0UuX9h7wD%2BzLTM3G4eabgJCM3cw6DCtHTCDfSt%2Bf49l9olRe5fr8UvyaHAuZKi1e04AYKuLlQDkBdShTa3tZ%2Bhtrvc5TjA2WgKBsAy5uTBhW3HtKLSmNjzF1spiwmRESztB6RHiiaaW9t%2Fle%2FpyMX8cm7uGdob16hzzoSRlBbjmW66phdtU3&X-Amz-Signature=d58aa4fbacc9dfec97492462f5fa3885b2efa83ab032a84356ec8146e2f66dfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UAS56JE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5H4dNm0sk%2BrRhSbFkYbna04bkMTfzYucj%2BuisKacOcwIgfGDWRjaQUMnP2%2BQC5gsrAEJ3XmZasalMtP8ynkYF4aAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEDAXNpINwzxfdaEBSrcA%2F%2FF2QdQlUQRLeREXfJSneF505uB0%2BtQhYrgaUzB%2FlUNH1vDHSPiwqmkqR8NJ2k0mWEJ90BBkTLuszmGdmOjnGfVoR704NVm8j5719Yl46jbPxRXccMsjAFd%2FbUV%2Bmz81tt1E9jT%2FreppKSe6CVzHxvhB4wPWLhzyBu2dSy2%2BTJ5jLI%2FYvFG5CinOfZZNCjrVKsdp2SRbQsWxk%2FJF4mVh6XTDgT4MpXd3Qmz%2FYUeaipFvhmbpR5Xz%2Bjd%2FG%2BRLWG%2F2VwfpMGLOj4oTbl%2Bs6am5KNXrja7%2Fn4Fx1w1UUHwPKL%2Fcm00kzqhdY%2FZYR3T5gAgD59R1u5DBBLNi%2BeLIp0dBJGDSusKL54a%2FKtG7PjE2vDcU72%2FWZx%2B8J8WrZU2YiwuFTd70tNvNbALUvQPBCxTsHCiHOjHaApGx3IWG5ADnOyC9bClN%2FlN5UhvFTWzLlYKfLpPeHwjMN7zEPgGX%2FrDnmSGQ9K3nu0AKp4VavPU2AktuCv4YiK9XhsgF1v1cKAN7ECA%2FCFeCeGNenYpwCAihQfhh3yvtdMKkKLdvUF00ANFKuWlq%2F84JRdmmkJbS5LWR6zT0XjyWmHOJSf9XHzarJU2dZYKzSOqDUInVVSaH4COrjcWmqJTGaqPCVYgMOr6xskGOqUBLMVJvSbsSrve2RtphU%2F74LWvYXFelU2%2FI007wLdK0UuX9h7wD%2BzLTM3G4eabgJCM3cw6DCtHTCDfSt%2Bf49l9olRe5fr8UvyaHAuZKi1e04AYKuLlQDkBdShTa3tZ%2Bhtrvc5TjA2WgKBsAy5uTBhW3HtKLSmNjzF1spiwmRESztB6RHiiaaW9t%2Fle%2FpyMX8cm7uGdob16hzzoSRlBbjmW66phdtU3&X-Amz-Signature=90889aa27244f2decdbcca72f639cd8915ee177722a2c5fe40f20291c71788f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
