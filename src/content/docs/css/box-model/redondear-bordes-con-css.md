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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJM7ODYE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy3HM7X4twIw1RrPpxh0sOXlLeISCrTdt%2FyE9sTxEzUAIhALtESDJqeD%2F%2BH8ZnYzD3%2FU6KV1hnKv4Xcfe9BbiFsph5Kv8DCHUQABoMNjM3NDIzMTgzODA1IgzEiw8o7%2B1RXsV0OdMq3AOH65xp0k%2BRHyNJ53xbq0X0%2FE196ZKeqWbM%2BgSuZyOWzT0poSPKaD698z2bgb99ZAJgyKMroJqA36M8W8Hg8LF007ZY7oNieO0bF1tJ9NtbJECqTlb1c1Ywkf4YQfDjFaFd49%2FlqeX6%2FP0aSxgYT09P2OeTTQIG5u%2FHWA689p3K42HAMR4LJeqd%2FyAEZAgWBVsjd4Ln9eMFmyqPnGCnYZJZyY10DYhm5f6ap2YqNkalNi97GTUxyX97%2Fcj0SSMFmqrmBAkFXcMTX99zkVu2mjKSuJ7FaBjtXZ5BdSAoyZEoszEIktCdnAzAlyj1TRoQBbKssimKLaRkULeUAJlAH0Z7x%2BIhM90xJDKVRZUPxAC%2FABM2mwOrqrctsZpOyiHqLfXZR9DGQPAGY7oYyQB2i2Dk5Z7CvCAYmnjnnZp7geUTPFG7nfxMNYbO3ChlKvl89LivKgwyS5hu9VN79hj%2BWKxeC6r6KXEvbgGYbDsYYoP3boZPLlyNYLY0%2B3toxqCvuOqEI3ySWTRmtnPg48FjleU4eZkCh%2BAx9YLbhTNrjpgrRhbJputRVC7ucuhs16U8HHhrxxafKzFp5vsq0eGoWQrz4LwZk3T7QO3GLNP75S9MPF%2FSR%2BeRnCwiipNXgTCYzojKBjqkAag2pvLJMDbgejdlBaGGAi7qUaC23sSLtVE39Oua%2BUBWTBj6M3greF5kcTi0a2gtbRv6Wp7CI2E8uUyGMjc8cW%2Buqp8cUS4piw%2FF3%2Be9Y8aTlyjdeSckCd6TKUo%2Bfd%2BL4AP8g%2FL3b1FQFgyPdkmg9kPlgcL6IgftMiEBHUymvmM12S%2F%2FlAQAgMoGlM3DL%2BB05DttoIV8%2Bh0T7bWmzlMmqF%2B1Krv7&X-Amz-Signature=c8697cae42a0556fdf60c432cb3c719ed544fcb6915aed9ede0708b4ed2061d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJM7ODYE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy3HM7X4twIw1RrPpxh0sOXlLeISCrTdt%2FyE9sTxEzUAIhALtESDJqeD%2F%2BH8ZnYzD3%2FU6KV1hnKv4Xcfe9BbiFsph5Kv8DCHUQABoMNjM3NDIzMTgzODA1IgzEiw8o7%2B1RXsV0OdMq3AOH65xp0k%2BRHyNJ53xbq0X0%2FE196ZKeqWbM%2BgSuZyOWzT0poSPKaD698z2bgb99ZAJgyKMroJqA36M8W8Hg8LF007ZY7oNieO0bF1tJ9NtbJECqTlb1c1Ywkf4YQfDjFaFd49%2FlqeX6%2FP0aSxgYT09P2OeTTQIG5u%2FHWA689p3K42HAMR4LJeqd%2FyAEZAgWBVsjd4Ln9eMFmyqPnGCnYZJZyY10DYhm5f6ap2YqNkalNi97GTUxyX97%2Fcj0SSMFmqrmBAkFXcMTX99zkVu2mjKSuJ7FaBjtXZ5BdSAoyZEoszEIktCdnAzAlyj1TRoQBbKssimKLaRkULeUAJlAH0Z7x%2BIhM90xJDKVRZUPxAC%2FABM2mwOrqrctsZpOyiHqLfXZR9DGQPAGY7oYyQB2i2Dk5Z7CvCAYmnjnnZp7geUTPFG7nfxMNYbO3ChlKvl89LivKgwyS5hu9VN79hj%2BWKxeC6r6KXEvbgGYbDsYYoP3boZPLlyNYLY0%2B3toxqCvuOqEI3ySWTRmtnPg48FjleU4eZkCh%2BAx9YLbhTNrjpgrRhbJputRVC7ucuhs16U8HHhrxxafKzFp5vsq0eGoWQrz4LwZk3T7QO3GLNP75S9MPF%2FSR%2BeRnCwiipNXgTCYzojKBjqkAag2pvLJMDbgejdlBaGGAi7qUaC23sSLtVE39Oua%2BUBWTBj6M3greF5kcTi0a2gtbRv6Wp7CI2E8uUyGMjc8cW%2Buqp8cUS4piw%2FF3%2Be9Y8aTlyjdeSckCd6TKUo%2Bfd%2BL4AP8g%2FL3b1FQFgyPdkmg9kPlgcL6IgftMiEBHUymvmM12S%2F%2FlAQAgMoGlM3DL%2BB05DttoIV8%2Bh0T7bWmzlMmqF%2B1Krv7&X-Amz-Signature=fda72644c1b561691d149b6bcfee99ffaef32ee8857d38228a525ef40d68dfdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
