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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI7VNVMV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T213737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkOsFW8krEfr6M6H2mgklqJOs3XClRwmDCs6EEY%2BDz7AIhAMJ2p67cqEvHeFECfWP6lTwK137si%2BJ8f17VMEVVnFZpKv8DCHoQABoMNjM3NDIzMTgzODA1Igyzqk8Xu4Jkv2rPIRYq3AOW837Bzz7WflvjxqaQgayFa6yOp7iq0STByc7h%2BGwWMomuwuxUkAjYHvta%2F84AUDApzJuOjFyoeLO9duqicRCvY%2BOGH%2BffjHMWq5NgpCnynLJLfuQjMgGb5H3%2FYuIODVJeOK6j00cxh%2F2crdQcJ%2B7P6MPgQfgFTqWEYVDYYtOW0DhcRk0V4Frh7X%2BFEN%2FmaTiCDEacIObRK0Mi%2B9PxvWkWD4aoONUeTsx2Kovcvyp60F5bDe2f6gmrZRnSiWqqGpwqkg0t79rGoC3S7jREUiKUN62UcOFaOGik4hULWKiNhsEp3ZsnaETSgB4t95nuENCBKFqqSDWqE6GajCTYrZmS%2FjUfTFsMX2YEk2vVCHPSakfE2WeAuFXJ1xUJDVcxqvk%2BI3tLq1s%2FUS5UoHgYWrRgVbIEQAQW0Z7O8GUmfjH8LtWmFzZi1AQB3fpq0ETzCP8bkyddrVi8U5YlzCnIhcp%2Fy4flOruJvhWSmX7QtBMZ%2FCmv0fb3AZL52y3rWdUpvxkOWYMu8rixuyy%2B7qrh%2BrchDDsOm2WJQcY3zn3lmJgfhTQ%2BBRfqw%2FnrXCZ7uFUtoP3HKoE87vMGC2TELjusz%2B%2FOWMUW9ghCLK%2FIWipQKxsaxLt4N5xSlI8Y0vnUJjC3y9HJBjqkAbOgniho67U%2FVwqvVhkBI2Oi70AmoJms6edPdfce8Vn9oLCfUVDyJbJz0k5u%2Fa0rEYRt9uBPIfOYXHeiATGd67TCyMTGyAIgyezc9eqn3YFIlhP3Xzmqfe1OK2tHtHBJswo9jRwh2%2FMJeDFtSx%2BGuSJA7nV6c0awSfT7YLlbCP8wEWbStWbs9i8wl8r9oU3tOTSwj8ZG%2FlOvX%2BCnt0BZLh5ALP%2Ft&X-Amz-Signature=49d1965c806bb0db974e93f3157fb04e78e8686d43c9efad34194470066d682d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI7VNVMV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T213737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkOsFW8krEfr6M6H2mgklqJOs3XClRwmDCs6EEY%2BDz7AIhAMJ2p67cqEvHeFECfWP6lTwK137si%2BJ8f17VMEVVnFZpKv8DCHoQABoMNjM3NDIzMTgzODA1Igyzqk8Xu4Jkv2rPIRYq3AOW837Bzz7WflvjxqaQgayFa6yOp7iq0STByc7h%2BGwWMomuwuxUkAjYHvta%2F84AUDApzJuOjFyoeLO9duqicRCvY%2BOGH%2BffjHMWq5NgpCnynLJLfuQjMgGb5H3%2FYuIODVJeOK6j00cxh%2F2crdQcJ%2B7P6MPgQfgFTqWEYVDYYtOW0DhcRk0V4Frh7X%2BFEN%2FmaTiCDEacIObRK0Mi%2B9PxvWkWD4aoONUeTsx2Kovcvyp60F5bDe2f6gmrZRnSiWqqGpwqkg0t79rGoC3S7jREUiKUN62UcOFaOGik4hULWKiNhsEp3ZsnaETSgB4t95nuENCBKFqqSDWqE6GajCTYrZmS%2FjUfTFsMX2YEk2vVCHPSakfE2WeAuFXJ1xUJDVcxqvk%2BI3tLq1s%2FUS5UoHgYWrRgVbIEQAQW0Z7O8GUmfjH8LtWmFzZi1AQB3fpq0ETzCP8bkyddrVi8U5YlzCnIhcp%2Fy4flOruJvhWSmX7QtBMZ%2FCmv0fb3AZL52y3rWdUpvxkOWYMu8rixuyy%2B7qrh%2BrchDDsOm2WJQcY3zn3lmJgfhTQ%2BBRfqw%2FnrXCZ7uFUtoP3HKoE87vMGC2TELjusz%2B%2FOWMUW9ghCLK%2FIWipQKxsaxLt4N5xSlI8Y0vnUJjC3y9HJBjqkAbOgniho67U%2FVwqvVhkBI2Oi70AmoJms6edPdfce8Vn9oLCfUVDyJbJz0k5u%2Fa0rEYRt9uBPIfOYXHeiATGd67TCyMTGyAIgyezc9eqn3YFIlhP3Xzmqfe1OK2tHtHBJswo9jRwh2%2FMJeDFtSx%2BGuSJA7nV6c0awSfT7YLlbCP8wEWbStWbs9i8wl8r9oU3tOTSwj8ZG%2FlOvX%2BCnt0BZLh5ALP%2Ft&X-Amz-Signature=193ae7f34287506520193231d07e252e6dc53bcb53089eae1842b81d3df1592d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
