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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RELKCYZ7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T051144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1kTJLhRbvXVHjOVD%2FuErG0DuTMSmrp44e%2BFhzIG5MBQIgNiYKQNc9HV%2BCOm0BmvWI%2F6X0Ny5mTwCnK25UC0xfv%2Fsq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDRQUli2GEgYGhhJNSrcA1wUr52RLZ%2FOPwGW9tGh1HQdhvKZ0D9zryvC6PznBz1f3vxt5uLHd8J6nOv1lLVhDmHWrMlxFPBZ30mNK2%2FkLG6nYCe4%2F0qDDjxi5cV1J2Fc7fizp86FDRrFh2rGe46Yhvn8KQWKjJt%2Blon86Bzk0DKID5zV2YBTi3QtseIPLX7o58323i8Sx9q%2B7Z4bn5KNzkbb0HNmrwXdsS1op8bAeBV8Ym3DZThAAseYVPL%2FC4sPhkyuwxr0ZAZoJomyo6ja7jScVE58zm2hidwOFuH8joPGVZ7V1QLdsRhrP11YtQJsAX2e2p%2BMDtPmhciM%2FlBxcsCXUEgAgxtlCy%2FSsP7JveRGBQVgrAIvoPk2jm7v3yE%2Bo3A5%2BmQ%2FbAb6Jxvro6iBlu4N4S%2FaLnroaMrPceFW37S1DEEBg3I8WwAhxgtoiE5oS%2B6jDMkYcfffkpYWgEPLZS%2Bvh38hP2rjEISaMb9fCgsc8yd39jM7ve47KlJfjpgJ%2BxaVogusFS08FN4FNjrJgCN1Lrbb5jZ4a1gkvCBZc4k91lxdO2XCwTATWr27VGEMUOAQp8wwm3fsteypQQgu1i6T%2BvWVavXCphPT0PrkwL3jjlgcgcFBp%2Flx7OjUKOUVShiDM4EJYDkBS5ACMJusyckGOqUB7Iq1m2zPkPsZ3RQhwr4XSSc%2B%2BU%2BDg%2FmCBdgH1KuZ3Yy0s2GUvzU5m2tOaXTxcfaEqlQjXl7TgbyTJLzo7i34uQK3bAV1TtL1IEOWoggkZGPgu8fZeIiBK21tUsRMx9rc45Vihcm7T98wDC6HZKpK4Hu%2FQRyDr%2BjLwmi5D0SR%2FJJrzH7DRFtZC4s4TTleU6zO%2FQmBuMpko0XcSM8u2ZELXPr%2F14eU&X-Amz-Signature=9986ac291b1bd27680b2ae85938c22096bfb09b9839097402536023d17767f98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RELKCYZ7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T051144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1kTJLhRbvXVHjOVD%2FuErG0DuTMSmrp44e%2BFhzIG5MBQIgNiYKQNc9HV%2BCOm0BmvWI%2F6X0Ny5mTwCnK25UC0xfv%2Fsq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDRQUli2GEgYGhhJNSrcA1wUr52RLZ%2FOPwGW9tGh1HQdhvKZ0D9zryvC6PznBz1f3vxt5uLHd8J6nOv1lLVhDmHWrMlxFPBZ30mNK2%2FkLG6nYCe4%2F0qDDjxi5cV1J2Fc7fizp86FDRrFh2rGe46Yhvn8KQWKjJt%2Blon86Bzk0DKID5zV2YBTi3QtseIPLX7o58323i8Sx9q%2B7Z4bn5KNzkbb0HNmrwXdsS1op8bAeBV8Ym3DZThAAseYVPL%2FC4sPhkyuwxr0ZAZoJomyo6ja7jScVE58zm2hidwOFuH8joPGVZ7V1QLdsRhrP11YtQJsAX2e2p%2BMDtPmhciM%2FlBxcsCXUEgAgxtlCy%2FSsP7JveRGBQVgrAIvoPk2jm7v3yE%2Bo3A5%2BmQ%2FbAb6Jxvro6iBlu4N4S%2FaLnroaMrPceFW37S1DEEBg3I8WwAhxgtoiE5oS%2B6jDMkYcfffkpYWgEPLZS%2Bvh38hP2rjEISaMb9fCgsc8yd39jM7ve47KlJfjpgJ%2BxaVogusFS08FN4FNjrJgCN1Lrbb5jZ4a1gkvCBZc4k91lxdO2XCwTATWr27VGEMUOAQp8wwm3fsteypQQgu1i6T%2BvWVavXCphPT0PrkwL3jjlgcgcFBp%2Flx7OjUKOUVShiDM4EJYDkBS5ACMJusyckGOqUB7Iq1m2zPkPsZ3RQhwr4XSSc%2B%2BU%2BDg%2FmCBdgH1KuZ3Yy0s2GUvzU5m2tOaXTxcfaEqlQjXl7TgbyTJLzo7i34uQK3bAV1TtL1IEOWoggkZGPgu8fZeIiBK21tUsRMx9rc45Vihcm7T98wDC6HZKpK4Hu%2FQRyDr%2BjLwmi5D0SR%2FJJrzH7DRFtZC4s4TTleU6zO%2FQmBuMpko0XcSM8u2ZELXPr%2F14eU&X-Amz-Signature=8fa347dca1e8ea96847cdf12107d35a2539038ca498b0b19851f8a846c049073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
