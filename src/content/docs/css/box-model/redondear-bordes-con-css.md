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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IZMV45O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK09czNbFLvLH00FhfYXVLy5ctfVGJ%2BE9Tmv3IgpUEUQIhAI1Zx%2BH%2FsvpD4nL00GaYusbXddroTcYvM3rcMvbkRSyIKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPl4GqFHxCt6r5urUq3AP2wUSJXd85LeF9gott0r3bYrrfNeVovWhfL%2B%2Bk0kUM05zThDKkQDIO6QWo4VMPXDMAyUZ6TY0XSefrpE5gpys5ltbgdtOBMuWXKYruXZyy7%2B2rxE3R%2BcrdIyWUcGijYasz%2FCduvijSkUmXrJV07CIDv6Vt32r1yP06UWoXJQJp8tzNbmhzjdTQg8l3OaenvlS4iyeE5nAdL42SeDZhN0zXbVxjEJvDzDzQK%2BA%2FgA11WU0Oru6SdnMg8qrVl8z9%2FcTMDB3P6cH2IqkX4TqQChHalLLPMASnLqE%2FKL6ZFIl8CdqrE8iUB2gVattBE2Yau93AIplTKFcogou2on0lWft2aOqxyzAc%2FxGH05bl19FDuA9eCzw3TDSEKOfzI1KS9RcgIx4aN48BkIzyr6OM%2BS%2BPc2wdrHntKypTbGMGKWf4Qc1yFm0VkCN4J45VgXxwEBc7v7h0UCiy0xrkLfKSt8CLZrcpGsi6jWG%2Fg7mpPhBgGRFCh5o6OHAgU4Jc0KLiVVywFP2GWU5WpcKnaVzIu4NZjwBAmnQLgnDswXU0lIXEL56XQfZNEM04wAatzJaxKQmfiAOEbiYOC6iMq20zRm4nGJsBh2H7BrLJhr201140N1JYhLqcZ%2ByObzb1yjDXnovKBjqkAcRbJytZV1%2BIWcD54biBkg3zDADEpwdJbofHQaubqNpu3QVdNZtKIFYwHs5seplNVFzOeNUI7oeKklCqxTG1uMiwosRuv2SyFYJb8uCFcXftIk3LKyZL5CWL8%2FYddofUbfMldVsMf%2FixOcPwQyVZOuBRVQ2MLRX6SzPIsE7nnhFfVj6UWkPa1r6ya6lAoXTAZQM0mdvIIjFu6vzfpBjTksJv5nGt&X-Amz-Signature=08a953f0e91b264b831862e3a68a6853cf41d7df8638b2ec6e9d9b26fe81f212&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IZMV45O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK09czNbFLvLH00FhfYXVLy5ctfVGJ%2BE9Tmv3IgpUEUQIhAI1Zx%2BH%2FsvpD4nL00GaYusbXddroTcYvM3rcMvbkRSyIKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPl4GqFHxCt6r5urUq3AP2wUSJXd85LeF9gott0r3bYrrfNeVovWhfL%2B%2Bk0kUM05zThDKkQDIO6QWo4VMPXDMAyUZ6TY0XSefrpE5gpys5ltbgdtOBMuWXKYruXZyy7%2B2rxE3R%2BcrdIyWUcGijYasz%2FCduvijSkUmXrJV07CIDv6Vt32r1yP06UWoXJQJp8tzNbmhzjdTQg8l3OaenvlS4iyeE5nAdL42SeDZhN0zXbVxjEJvDzDzQK%2BA%2FgA11WU0Oru6SdnMg8qrVl8z9%2FcTMDB3P6cH2IqkX4TqQChHalLLPMASnLqE%2FKL6ZFIl8CdqrE8iUB2gVattBE2Yau93AIplTKFcogou2on0lWft2aOqxyzAc%2FxGH05bl19FDuA9eCzw3TDSEKOfzI1KS9RcgIx4aN48BkIzyr6OM%2BS%2BPc2wdrHntKypTbGMGKWf4Qc1yFm0VkCN4J45VgXxwEBc7v7h0UCiy0xrkLfKSt8CLZrcpGsi6jWG%2Fg7mpPhBgGRFCh5o6OHAgU4Jc0KLiVVywFP2GWU5WpcKnaVzIu4NZjwBAmnQLgnDswXU0lIXEL56XQfZNEM04wAatzJaxKQmfiAOEbiYOC6iMq20zRm4nGJsBh2H7BrLJhr201140N1JYhLqcZ%2ByObzb1yjDXnovKBjqkAcRbJytZV1%2BIWcD54biBkg3zDADEpwdJbofHQaubqNpu3QVdNZtKIFYwHs5seplNVFzOeNUI7oeKklCqxTG1uMiwosRuv2SyFYJb8uCFcXftIk3LKyZL5CWL8%2FYddofUbfMldVsMf%2FixOcPwQyVZOuBRVQ2MLRX6SzPIsE7nnhFfVj6UWkPa1r6ya6lAoXTAZQM0mdvIIjFu6vzfpBjTksJv5nGt&X-Amz-Signature=d545bd58ecbdde52aa80361bc61a096b5952b53b471415150e409915424378bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
