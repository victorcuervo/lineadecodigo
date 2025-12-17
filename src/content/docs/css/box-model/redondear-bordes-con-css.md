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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHWVIP2J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJPtYSKywUwT4P51hECtNeqsZMK6KbfLaQoKj7pBx8BAiB9L%2BUU%2FxteOSoBXnhK8lqgzVL%2FXJ4YWMqMzrojSxcXsSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMyMHzBG9YHfHxHZvGKtwDc7ZQI6kAQLvqAo90Dvqhs%2BqoEOf2TTPZA2flCktR%2FDGsL3f1VQhpX8ChlV0CQmzrJT3HXWPwoYYcxGHSYCSXqs6J%2BKth5DwwBX9e7u3wi%2F7mXeIcJmbc17HVl7W8%2BcQtGK0%2Bxiry5Cxokz32YrP%2BxFISN09OrpNPj%2FRDkK4P2WIo79QP13CVTXB%2Bd3JJjb2m%2B%2FF1CHEAIdwL7LAGbQvjFV6T1aQzPR6Y0I2s4zb4I%2Bn0uwtsvNic6eAFXrQxAMyNzQXbhxFfC5sfL%2F1qL10F7eghb2Kl6V0uD8FFkleZqJJWGJwbh2uMvnsR0Rsxn%2FumDvcNG7kVkXfHfboIPH3PD0RZdWwvSsXV%2BHAVoVDm4mTAFBWx48ETdeuII1yU84VWRgDSksJve5RdTwbS%2FofDa3LjvGiNHlJv9ryWa1260d%2Bq%2BhlaiuVfYgzlJNF1zwaloJiB2qATHzrs9qlkErXqzd%2FZ%2FoCmgeuNEI0IMKxUV9Q%2FR%2Fnxylq7X4gbJt%2FEx5V5SEe6D5%2FfTNtZbjdUr4sToB8PDmx%2FDFP%2BGH9xYYefPd5eR5NXKdW5rHFHPXDsN9Wu9xpyxaaAdxC0V8jpl2u1CDhqhG9%2FSjSzqny49VqxEmjD%2BSTW%2FO3UdhGSQ94wio%2BKygY6pgHTloodgupFr%2BVHBqp5G2pG6aY%2FCtRSxtH7zTWudyzHQ0eGBwyDo%2B%2BExdg6BprxwVp3C7Qr8N53%2Ba98xQrWiLjQ7EIvfShnLorvJsIwQVvKhvYBWG1XahicHCjI%2F%2BykdGAmit%2FI0TjorGSHX9wsMJo1mglADjupkaefHLhppvAVvpzMK6%2FANDsisHTe3qenDwldMo4464ur3IUlptBgoW9bUl23Litr&X-Amz-Signature=add069a4b4ce01db9c231d8e7ca70dba38a39c264b3d3ea1622c46e692bd901b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHWVIP2J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJPtYSKywUwT4P51hECtNeqsZMK6KbfLaQoKj7pBx8BAiB9L%2BUU%2FxteOSoBXnhK8lqgzVL%2FXJ4YWMqMzrojSxcXsSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMyMHzBG9YHfHxHZvGKtwDc7ZQI6kAQLvqAo90Dvqhs%2BqoEOf2TTPZA2flCktR%2FDGsL3f1VQhpX8ChlV0CQmzrJT3HXWPwoYYcxGHSYCSXqs6J%2BKth5DwwBX9e7u3wi%2F7mXeIcJmbc17HVl7W8%2BcQtGK0%2Bxiry5Cxokz32YrP%2BxFISN09OrpNPj%2FRDkK4P2WIo79QP13CVTXB%2Bd3JJjb2m%2B%2FF1CHEAIdwL7LAGbQvjFV6T1aQzPR6Y0I2s4zb4I%2Bn0uwtsvNic6eAFXrQxAMyNzQXbhxFfC5sfL%2F1qL10F7eghb2Kl6V0uD8FFkleZqJJWGJwbh2uMvnsR0Rsxn%2FumDvcNG7kVkXfHfboIPH3PD0RZdWwvSsXV%2BHAVoVDm4mTAFBWx48ETdeuII1yU84VWRgDSksJve5RdTwbS%2FofDa3LjvGiNHlJv9ryWa1260d%2Bq%2BhlaiuVfYgzlJNF1zwaloJiB2qATHzrs9qlkErXqzd%2FZ%2FoCmgeuNEI0IMKxUV9Q%2FR%2Fnxylq7X4gbJt%2FEx5V5SEe6D5%2FfTNtZbjdUr4sToB8PDmx%2FDFP%2BGH9xYYefPd5eR5NXKdW5rHFHPXDsN9Wu9xpyxaaAdxC0V8jpl2u1CDhqhG9%2FSjSzqny49VqxEmjD%2BSTW%2FO3UdhGSQ94wio%2BKygY6pgHTloodgupFr%2BVHBqp5G2pG6aY%2FCtRSxtH7zTWudyzHQ0eGBwyDo%2B%2BExdg6BprxwVp3C7Qr8N53%2Ba98xQrWiLjQ7EIvfShnLorvJsIwQVvKhvYBWG1XahicHCjI%2F%2BykdGAmit%2FI0TjorGSHX9wsMJo1mglADjupkaefHLhppvAVvpzMK6%2FANDsisHTe3qenDwldMo4464ur3IUlptBgoW9bUl23Litr&X-Amz-Signature=47b78f04f95d9c7e21340cfea85fa1c47120c53deeaa229e30d7f5ce360884e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
