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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDJCD7Y4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T115615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy53FK43cYOSzoWNgrGl0rFCl3l5XAW1Ylg6o8BozUsAIhANAPbM%2FkjDxfbrfklvYHkBtCXi7c8RCUPfIwq7%2FQjLBsKv8DCFsQABoMNjM3NDIzMTgzODA1IgwR4akQSRuMEDYvYjkq3AMtIyz8iAY3nHsFn0tn2MxpQZqZyiGweAs5NjaawkOYjcHpPpZ%2FhFVkkAyX%2FcfWIXEdgLTtj%2BHs1fxJnmh7qnYLf6nVwV5WlE1GcbiwQVX1Bt6Ft6Gux5%2FMfFMztY324KZFS7rrOERNq6%2FMSNMUJeyI6ogZAHgfR4neH7OjQ%2BAt%2F1Ym5VQztYfOGtUQ2mWx1Tb0gIB2P5tuOGJaj195gSIKYbiv0jtCUSfcNpJVejXjy4YMxZAri%2BG2O3XwM1SuSnEYku7gG12riWWKuEIHtXZ9bFNTS3xmmr3kEx0gltJJ1TqSqyKlulpfYJyw7Jc2xOSTtDZAlNc44zmHAJe12IGPDHz2iyni%2BNVmyRlAG90TKf7mXVgx2n9ZZGKnTFxCbIiJs8traTmymNshJYzDhNPfjOwVL97RLgnLI8E1kCZ7iEr%2FROcecfjBv6sD4cO3PMcvnea6KJGpDnylBtZTLyIpZRtgmmda800sJbR%2Bq%2BMTYxVJ73RVa5Y%2Fh2KcpAnW4%2BCt47qd1ZkEW4x6aN9HlxT0HMJITpIxonnYuIUTkhkQ1i2to7x4h3Hw%2BmJpTgpuxQkblsBQCMc%2Bi4Y4gV3rArWYxeJ%2FXEimce3GQdGS23LvwTwA2vYnYS8z8eKptjCk0crJBjqkAdRBRtqf56uMKltItJi4a7DAxe8dxCTmpsa5TMIRYaxMwjlte2X8TMiAQiFX5OobFvQJDqJNjU8p%2F5gTo7H8bovS53mgYn50dLqHeou%2FfYj397Bci%2F8We%2BDyErzLtew3OfYfy3p7DKc37hzV%2BY8HSY%2BDsQ8xeBsbAi00Kgx5B6IEkTpFXM1fOZHoW71YAzJ6nM4Z8Jbzg68tKJaAZnG8ixftn7lF&X-Amz-Signature=e0901a0f4c00030653baa2a612510f1d90cfa086f0d84a4dfa43f34d2af99de4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDJCD7Y4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T115615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy53FK43cYOSzoWNgrGl0rFCl3l5XAW1Ylg6o8BozUsAIhANAPbM%2FkjDxfbrfklvYHkBtCXi7c8RCUPfIwq7%2FQjLBsKv8DCFsQABoMNjM3NDIzMTgzODA1IgwR4akQSRuMEDYvYjkq3AMtIyz8iAY3nHsFn0tn2MxpQZqZyiGweAs5NjaawkOYjcHpPpZ%2FhFVkkAyX%2FcfWIXEdgLTtj%2BHs1fxJnmh7qnYLf6nVwV5WlE1GcbiwQVX1Bt6Ft6Gux5%2FMfFMztY324KZFS7rrOERNq6%2FMSNMUJeyI6ogZAHgfR4neH7OjQ%2BAt%2F1Ym5VQztYfOGtUQ2mWx1Tb0gIB2P5tuOGJaj195gSIKYbiv0jtCUSfcNpJVejXjy4YMxZAri%2BG2O3XwM1SuSnEYku7gG12riWWKuEIHtXZ9bFNTS3xmmr3kEx0gltJJ1TqSqyKlulpfYJyw7Jc2xOSTtDZAlNc44zmHAJe12IGPDHz2iyni%2BNVmyRlAG90TKf7mXVgx2n9ZZGKnTFxCbIiJs8traTmymNshJYzDhNPfjOwVL97RLgnLI8E1kCZ7iEr%2FROcecfjBv6sD4cO3PMcvnea6KJGpDnylBtZTLyIpZRtgmmda800sJbR%2Bq%2BMTYxVJ73RVa5Y%2Fh2KcpAnW4%2BCt47qd1ZkEW4x6aN9HlxT0HMJITpIxonnYuIUTkhkQ1i2to7x4h3Hw%2BmJpTgpuxQkblsBQCMc%2Bi4Y4gV3rArWYxeJ%2FXEimce3GQdGS23LvwTwA2vYnYS8z8eKptjCk0crJBjqkAdRBRtqf56uMKltItJi4a7DAxe8dxCTmpsa5TMIRYaxMwjlte2X8TMiAQiFX5OobFvQJDqJNjU8p%2F5gTo7H8bovS53mgYn50dLqHeou%2FfYj397Bci%2F8We%2BDyErzLtew3OfYfy3p7DKc37hzV%2BY8HSY%2BDsQ8xeBsbAi00Kgx5B6IEkTpFXM1fOZHoW71YAzJ6nM4Z8Jbzg68tKJaAZnG8ixftn7lF&X-Amz-Signature=ff2f09d5071ea24fbce47ca51d8bf0d7ff91e8e16c242dc33ec95bb86d074e7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
