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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN6P5KXP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIGJwkIPIDHH5kQiK1VEW8VvF6GmbBhVWScyA9d9S6bH4AiEA0Ag7r8EN095Tm33ufVfCQdLkxwIKurb8ggNnewCddrAq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPaQnkyu9wSpRtKCJSrcA7PyAXivXT5DRrCpN8aOvx8AZ1taKMcnAdLsw74B2HlDm%2BoEMBQ5rCcV0c4dk465Jf%2BR9yIwx8GBDXA07N%2FWkj1YuRvavFDdajR0C5SXr0rJA1trdQXqx0PfUc14PPbUb4%2BFtr2nDldLkmXomIEHW1V60XV%2FlpdWcf%2FmTgvO3ncGgHKfyHUCOXFtN1bXKWZByvz9suvjLFT7tkzNiwoI7PH%2F7EWLMBBDPAsokvlQSDrJr%2FyHFoLWTm6u6I0FM2l5sTPzh%2F%2B62pgLKtMYK1mMmyoq1ARNL7vGzwGXdNk8ThYG7XfiTxRCBLG3V3k%2F90VIJn0q7hL5s44MszjrVPNm%2BGEYXF8L4MU%2BZt%2FF3toLt8xLiB9bbyWJztWravtJNCDIJNz8SS8RGGygz522O9whFhAuaHALKbGo1qyHbhVciY9lRbHscD7NkB45kopmJULwRFGdQwziFel5UknlFltgjOYGxXVWApYphwi2%2BlYuYkilpmkPART7Gi6%2B1JbNNSHeeiN7BdbjKuutvUHNjzzzyPghiM0aRwcG3TP11A1V1CAbXu212USjgm2gxJ2jiOUkRMPFH0ISef%2FqVGMBSM76%2F%2F%2B%2B4%2Ft%2FPsZbXdP1LSLYMG0oKrH5yNYrlhCaHaB%2FMKm%2BxskGOqUB04YIAbWzYjBMTJkDhZGgzCQgkp5A%2BJRv0cReWyKvGIkMnbPPBBzrq%2BUs1Z9PvrtH7oJfXhB5cFMCV0zxFd6LOGTH8CEoA0mMzGk7klLekkIPkn3xVTdFlZmMgFZAvEZInxYPDZFMGOV1v%2B7Sxl4ViASWxWk0UAk6fcy3iBQjvuWi6vuUgos4BbiGtDHOcQOMtJAChniPu%2BvT5dydI8usl%2FcBbaS%2F&X-Amz-Signature=8b1fbaf72de4a006cf21cd6110d2e98999eeb1292003ba9eaf24df0572ca24a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN6P5KXP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIGJwkIPIDHH5kQiK1VEW8VvF6GmbBhVWScyA9d9S6bH4AiEA0Ag7r8EN095Tm33ufVfCQdLkxwIKurb8ggNnewCddrAq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPaQnkyu9wSpRtKCJSrcA7PyAXivXT5DRrCpN8aOvx8AZ1taKMcnAdLsw74B2HlDm%2BoEMBQ5rCcV0c4dk465Jf%2BR9yIwx8GBDXA07N%2FWkj1YuRvavFDdajR0C5SXr0rJA1trdQXqx0PfUc14PPbUb4%2BFtr2nDldLkmXomIEHW1V60XV%2FlpdWcf%2FmTgvO3ncGgHKfyHUCOXFtN1bXKWZByvz9suvjLFT7tkzNiwoI7PH%2F7EWLMBBDPAsokvlQSDrJr%2FyHFoLWTm6u6I0FM2l5sTPzh%2F%2B62pgLKtMYK1mMmyoq1ARNL7vGzwGXdNk8ThYG7XfiTxRCBLG3V3k%2F90VIJn0q7hL5s44MszjrVPNm%2BGEYXF8L4MU%2BZt%2FF3toLt8xLiB9bbyWJztWravtJNCDIJNz8SS8RGGygz522O9whFhAuaHALKbGo1qyHbhVciY9lRbHscD7NkB45kopmJULwRFGdQwziFel5UknlFltgjOYGxXVWApYphwi2%2BlYuYkilpmkPART7Gi6%2B1JbNNSHeeiN7BdbjKuutvUHNjzzzyPghiM0aRwcG3TP11A1V1CAbXu212USjgm2gxJ2jiOUkRMPFH0ISef%2FqVGMBSM76%2F%2F%2B%2B4%2Ft%2FPsZbXdP1LSLYMG0oKrH5yNYrlhCaHaB%2FMKm%2BxskGOqUB04YIAbWzYjBMTJkDhZGgzCQgkp5A%2BJRv0cReWyKvGIkMnbPPBBzrq%2BUs1Z9PvrtH7oJfXhB5cFMCV0zxFd6LOGTH8CEoA0mMzGk7klLekkIPkn3xVTdFlZmMgFZAvEZInxYPDZFMGOV1v%2B7Sxl4ViASWxWk0UAk6fcy3iBQjvuWi6vuUgos4BbiGtDHOcQOMtJAChniPu%2BvT5dydI8usl%2FcBbaS%2F&X-Amz-Signature=c581a4fd43e5706714f5c7fc9819a31d7b720ee3932f4ed596c8a9cfbe146900&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
