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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUU7P36F%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZqbH4kQZB1Hnzh5e4hFr5pmptWh3oz2DP353SJ9Y6kwIhAMZziQTEdAgptGn92P86mwxMVpxSKLJmz4%2BdyNeHFIe5KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4ZnJ5n4VfCPU6Ne4q3AOc5yPRT9ueG3gU3OSKW0sxjyRIa%2Fa9Sr3UV8DLx9KA4nYhTL%2BIjtYuMnIWnCBGiQRdP4KWXskIR2ffO21hrM9eer0KeR1m%2BY%2B0XhdlSQyiNiAgJ7%2FUGoohX%2F89MM35sub%2Bnq8gdxTvZsH7TwIyFcuBvk2hjAsT4zqc9EtVTvTYTywB7IRUVGDaiC1NPOGkKGFf3u%2BpbXhzezLT4ciLdSKghW%2FN0hVSMf4uKsjulJidRvsR8wnEzeOBNKsVYkVxCr%2B8n84GNVwvBdqv4tTzaytr15eVLYTky36lOB%2FcES8dkcjapDzOtx9%2FtXuUP5p%2FAzxrj%2Bq5M9rBCHiMk6afKLZdwGEWv2Hgh9w9N1xr3a5yovTSE4NLh%2F8gNtruSLfekn00uFoTQ0Kf0IV2vCHaVzTg7FhRLTzL4ohAd5izT3qUGSF8zAZz5XVRbLAOG3Hk5oe6VXr4jTopfRMkMZO3IYBRPFIr1rSkCtXNN1wLKXXEOG%2BWOZlvLj0cIeFNnoatRpLjcX%2FmnajwZP5r4yqd%2FgINxlWW7jYtkChFtv66ss03UdfJlsISORwd4ISmf1pymbSRUU0bENLIsJMAYEeAARgdnkg2BUv6oU3PY%2F0wI8PrVi6xDCNCGmQeArIp%2BjCvn4vKBjqkASSvbn%2Focg%2BxXzE7NPebgo%2FUFKvcEpVr2mueLeLhTacLZf37UtHRjPKU2rlmYuZeMrHeYpgQMCqNqWHOXxCQzmOmAvs80q7O%2BRlJ%2FCLG69esv0QqgoFiU27OMR5dGfClofd8I7Yzx08Y7UJbC%2BFfkXkJjyP94AioteNqPthDPX0CqOnWbPm4GTvoHbIpg8d0uMRLc56eJ2UuxJY1hO8rQ8G3mKVB&X-Amz-Signature=e59dd634c8543b3d5bea28cf4e1ad82a1a759efcb25d5d44fdffddd536851a65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUU7P36F%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZqbH4kQZB1Hnzh5e4hFr5pmptWh3oz2DP353SJ9Y6kwIhAMZziQTEdAgptGn92P86mwxMVpxSKLJmz4%2BdyNeHFIe5KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4ZnJ5n4VfCPU6Ne4q3AOc5yPRT9ueG3gU3OSKW0sxjyRIa%2Fa9Sr3UV8DLx9KA4nYhTL%2BIjtYuMnIWnCBGiQRdP4KWXskIR2ffO21hrM9eer0KeR1m%2BY%2B0XhdlSQyiNiAgJ7%2FUGoohX%2F89MM35sub%2Bnq8gdxTvZsH7TwIyFcuBvk2hjAsT4zqc9EtVTvTYTywB7IRUVGDaiC1NPOGkKGFf3u%2BpbXhzezLT4ciLdSKghW%2FN0hVSMf4uKsjulJidRvsR8wnEzeOBNKsVYkVxCr%2B8n84GNVwvBdqv4tTzaytr15eVLYTky36lOB%2FcES8dkcjapDzOtx9%2FtXuUP5p%2FAzxrj%2Bq5M9rBCHiMk6afKLZdwGEWv2Hgh9w9N1xr3a5yovTSE4NLh%2F8gNtruSLfekn00uFoTQ0Kf0IV2vCHaVzTg7FhRLTzL4ohAd5izT3qUGSF8zAZz5XVRbLAOG3Hk5oe6VXr4jTopfRMkMZO3IYBRPFIr1rSkCtXNN1wLKXXEOG%2BWOZlvLj0cIeFNnoatRpLjcX%2FmnajwZP5r4yqd%2FgINxlWW7jYtkChFtv66ss03UdfJlsISORwd4ISmf1pymbSRUU0bENLIsJMAYEeAARgdnkg2BUv6oU3PY%2F0wI8PrVi6xDCNCGmQeArIp%2BjCvn4vKBjqkASSvbn%2Focg%2BxXzE7NPebgo%2FUFKvcEpVr2mueLeLhTacLZf37UtHRjPKU2rlmYuZeMrHeYpgQMCqNqWHOXxCQzmOmAvs80q7O%2BRlJ%2FCLG69esv0QqgoFiU27OMR5dGfClofd8I7Yzx08Y7UJbC%2BFfkXkJjyP94AioteNqPthDPX0CqOnWbPm4GTvoHbIpg8d0uMRLc56eJ2UuxJY1hO8rQ8G3mKVB&X-Amz-Signature=28f759c109ae10efbbb9eb9c7a211988999ac5f48a67d6d4e9e9c6de0efdbed7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
