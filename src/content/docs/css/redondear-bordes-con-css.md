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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y774J5BL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T172815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFcm1tSXO9pFJltx0PnFofjkcbZc9uXuXb4sJIjwK2VrAiA1lNcT2IDLj7znN9e6qKHGfrMkuF2Yxl6s49JoXSwDtSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMfDPVXQxoGjmqMr6iKtwDD4PRbxT%2B17uoZC2aZFl6SYQ0UxIytHYaQsbsarTk2MmbyHm1BqxhP3IoZ9Rf7QJOdUYprIclFbzqAnLxFawhZ%2FxFn8o7PNhd7zc2mkyOiso738%2FQqTd2piq1q3jSFjXODVrBnZRHqm0LCc7RmL4xrE4C0Me76TSLadxRSCE%2FUC5jXtteZTvDPrR35xmNB6aQtTfc0ynqiUBy7GDgmkJUsdAnVPGi7uIgta7wqVk8Zg%2BOgN3D1kyuYACZCwqhSctE1d7z47exkA%2B8TD1iWvz2VOPpkz5SqfKINN0qX%2FxHwhEkGRwSbzIWuB1sh8wKBRsIjr0haWs4y8ymJ3eqr6thSgsJ2LDxmBdmNJFrYB3KN8iw7p43%2Fv3kQRJe6GnmNSsBJZ1DWpizyqxWBZ9l7hnbI5jEqa6oxl8fQ1SUjYcen3FHih5eroeASBxMqfeGs6dIEW4drzZPmT1GI9G7DsvQuk7uDj7%2FNGERJbu0FXmYoW7ghK7qpqE54gnfaybr3ZaQ0qlO%2BQQ2wxbntNk01PMmjaYn0YVger%2FMPManNeGqrHFf%2F8eylUVXo6%2F7Iw7sy0Rb65VEcO%2FUX5xqnwvpeq%2FKf8LWeI45VtmgW5GnWPMrosT%2F4ZtWa50qaJfnUC8wnuLLyQY6pgF3b7aaqvkDD08jLkJ4922hTs4aOhwK7vvjN04Kwus%2FWKBTiJ8jzo%2F5OfwvHpTvcqIbBn1xpHa3m3DJVKEdCojKN3BKCDCJKcAxbEM%2FTZUwZoXIbqz7acUJwzq%2FWWvmgTiUybv%2FWv1voYs57VfH1AtbWcbeCxUY6tPu%2FuEN2%2FOxGKPnvNJtbYqu1EaPq1sEfjRjvzxxGlO4KxUXq6aX5uq9fWmyaQbT&X-Amz-Signature=1366de8277cadecc1b719f9c6ba8db8a82f7618eee115ff00a8d5cdb5c24e632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y774J5BL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T172815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFcm1tSXO9pFJltx0PnFofjkcbZc9uXuXb4sJIjwK2VrAiA1lNcT2IDLj7znN9e6qKHGfrMkuF2Yxl6s49JoXSwDtSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMfDPVXQxoGjmqMr6iKtwDD4PRbxT%2B17uoZC2aZFl6SYQ0UxIytHYaQsbsarTk2MmbyHm1BqxhP3IoZ9Rf7QJOdUYprIclFbzqAnLxFawhZ%2FxFn8o7PNhd7zc2mkyOiso738%2FQqTd2piq1q3jSFjXODVrBnZRHqm0LCc7RmL4xrE4C0Me76TSLadxRSCE%2FUC5jXtteZTvDPrR35xmNB6aQtTfc0ynqiUBy7GDgmkJUsdAnVPGi7uIgta7wqVk8Zg%2BOgN3D1kyuYACZCwqhSctE1d7z47exkA%2B8TD1iWvz2VOPpkz5SqfKINN0qX%2FxHwhEkGRwSbzIWuB1sh8wKBRsIjr0haWs4y8ymJ3eqr6thSgsJ2LDxmBdmNJFrYB3KN8iw7p43%2Fv3kQRJe6GnmNSsBJZ1DWpizyqxWBZ9l7hnbI5jEqa6oxl8fQ1SUjYcen3FHih5eroeASBxMqfeGs6dIEW4drzZPmT1GI9G7DsvQuk7uDj7%2FNGERJbu0FXmYoW7ghK7qpqE54gnfaybr3ZaQ0qlO%2BQQ2wxbntNk01PMmjaYn0YVger%2FMPManNeGqrHFf%2F8eylUVXo6%2F7Iw7sy0Rb65VEcO%2FUX5xqnwvpeq%2FKf8LWeI45VtmgW5GnWPMrosT%2F4ZtWa50qaJfnUC8wnuLLyQY6pgF3b7aaqvkDD08jLkJ4922hTs4aOhwK7vvjN04Kwus%2FWKBTiJ8jzo%2F5OfwvHpTvcqIbBn1xpHa3m3DJVKEdCojKN3BKCDCJKcAxbEM%2FTZUwZoXIbqz7acUJwzq%2FWWvmgTiUybv%2FWv1voYs57VfH1AtbWcbeCxUY6tPu%2FuEN2%2FOxGKPnvNJtbYqu1EaPq1sEfjRjvzxxGlO4KxUXq6aX5uq9fWmyaQbT&X-Amz-Signature=89d62c370a78ce1ac9136c6e028d64cfb053ef595f04a9d9a58c07e1e932d5c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
