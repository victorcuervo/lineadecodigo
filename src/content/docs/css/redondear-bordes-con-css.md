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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBBQRMZY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCH2Xermeq%2FPl0jjK6DySnFEkHd1ZZJvo7K8VnIXC5QWICIQDCithHc9eSrOS3oXSE0KHyBuFpUyc3FTvA243qQTjO%2FCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMga1K6Ldp1Q5eU0ldKtwDX9Lq2yckwddF6omAXYhWqr2e7cxXKA6uEeBqAJaLxqlrmsg95L%2Bcm0OSSjCrOZRfTZXg176VCWI6Lc4Kg%2BiLLXV%2BDciZPot1SRTLeLuJp8bHpUc87b6DJwIEI9B8hWW0OqArbu40JU4pldMy4AjBMIC47naIYrAJd4IlvX4BqH0ABLR2fAALAyk5bRUMFAaQ6KZp04CMWoSgajPdVoUIGJBKzZcTdA1Fu6NTqo4%2Bsc1g5YR797FlOoa5ORvhGxyeQMKh6HrhJUQx2UIuvBfbMGeDhwH2Fg9PoRA7oUeetqtk93bVFOJqpLdBd9KYF6UQj%2FLyiHWgykvLf5mC9D5xVsMH1p375pp0dFMZe5R9b0710zAvB4R4DnS09tCnnTtv8zFfQUyasYWpQO83KS%2FlOLb0WXpisbGfik0fmBOiNHyd%2BcJlxS9bZCzDo2wcmFekHqVEsLVZa65v4Eclp4SdeRN4WcMk%2BRXCLWuz5Rb4WXsRYhSDLQfTyfyk7l%2B9Nm%2FfLQjN1jbNYqiyQwO%2FXnsdR1u%2FZLpzjCPt5AEVUgvXdEDZ7vAMPmEHxY8OGi5XF0nnn4aNAVPhjR%2FR9U9B1TbWFmpy%2FiOLAoFrWz0k2slvbAG47sfvXNofmF%2Fe3xAw9dTDyQY6pgGKx%2FrvJ1VfcotRqCBNJJUYoCo3umhWaU9uNv7uRBi%2FKhk7SIOx1EfH912neOYnbmVIwsGD6YtV6I2sVimT3jgthQKhHh9XM%2Bafz27aSnoofJI3MFobYtaX7tc%2FGs6D52g5odcKMYg9SQqDRy9Q53rPjxi%2FM0cSa890qyMu%2BfpwT0QClY2dajbuoycVA8Dw1kD3I4eXMwxAhwztNTh5R4aHALA%2BEJ6H&X-Amz-Signature=a6fd223b9d67b05f772e3d57b19c8a8accadd74d02d5bee92ccf4f3fe5150ab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBBQRMZY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCH2Xermeq%2FPl0jjK6DySnFEkHd1ZZJvo7K8VnIXC5QWICIQDCithHc9eSrOS3oXSE0KHyBuFpUyc3FTvA243qQTjO%2FCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMga1K6Ldp1Q5eU0ldKtwDX9Lq2yckwddF6omAXYhWqr2e7cxXKA6uEeBqAJaLxqlrmsg95L%2Bcm0OSSjCrOZRfTZXg176VCWI6Lc4Kg%2BiLLXV%2BDciZPot1SRTLeLuJp8bHpUc87b6DJwIEI9B8hWW0OqArbu40JU4pldMy4AjBMIC47naIYrAJd4IlvX4BqH0ABLR2fAALAyk5bRUMFAaQ6KZp04CMWoSgajPdVoUIGJBKzZcTdA1Fu6NTqo4%2Bsc1g5YR797FlOoa5ORvhGxyeQMKh6HrhJUQx2UIuvBfbMGeDhwH2Fg9PoRA7oUeetqtk93bVFOJqpLdBd9KYF6UQj%2FLyiHWgykvLf5mC9D5xVsMH1p375pp0dFMZe5R9b0710zAvB4R4DnS09tCnnTtv8zFfQUyasYWpQO83KS%2FlOLb0WXpisbGfik0fmBOiNHyd%2BcJlxS9bZCzDo2wcmFekHqVEsLVZa65v4Eclp4SdeRN4WcMk%2BRXCLWuz5Rb4WXsRYhSDLQfTyfyk7l%2B9Nm%2FfLQjN1jbNYqiyQwO%2FXnsdR1u%2FZLpzjCPt5AEVUgvXdEDZ7vAMPmEHxY8OGi5XF0nnn4aNAVPhjR%2FR9U9B1TbWFmpy%2FiOLAoFrWz0k2slvbAG47sfvXNofmF%2Fe3xAw9dTDyQY6pgGKx%2FrvJ1VfcotRqCBNJJUYoCo3umhWaU9uNv7uRBi%2FKhk7SIOx1EfH912neOYnbmVIwsGD6YtV6I2sVimT3jgthQKhHh9XM%2Bafz27aSnoofJI3MFobYtaX7tc%2FGs6D52g5odcKMYg9SQqDRy9Q53rPjxi%2FM0cSa890qyMu%2BfpwT0QClY2dajbuoycVA8Dw1kD3I4eXMwxAhwztNTh5R4aHALA%2BEJ6H&X-Amz-Signature=3fc26317c30a2c40a72214b97a396d4ece87ca3627bbda19b9b34fd9dfb10b36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
