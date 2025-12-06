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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH2IQWH5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T175648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC83XIqQgHfeytyWPbM2%2FGZOvZHP7do5AxGSiDbHSYuYQIhAKb0%2FDxT7Te7R3NG%2BhoJzqoTXF673FOwgmd1yI7F4yV8Kv8DCHoQABoMNjM3NDIzMTgzODA1IgwRc3YjHuo%2BHpumqwkq3AP6GXLj2BQLYaqdfs01%2BruiK3cWSEXgJxpAsE59GEYuBI3TBEXvr9lVazrs3mvB5Q9FkS2vJHi5s%2BPzsdfhBYmv4QZPrIMvu44Xy5KKS9VcVJehDb8df8YSCfSP3w69TInyBLqtpYVQPDxKf1yurBoilYHFbbTJf0qd%2B%2BiIcEimqVPH2eoMaDgXgYfsOiWmEfLX7tMiOEMDkh0Mr%2B5HlSe8OlbM%2B58zxdcjeQ9KlhABmCrtknPzWwfRfhKGf8rQ0rPInsNRqnNyCyxVCKQ5DwDUdkZWHhn9KyOP6B0fE6yb2fvz16u8IgyoyaYOHEpVpOqHoXRNXUw6KI9YYyTFh0JwYVm5F%2FNfm%2Bk0rHrIIve3dSdZvBErYp9cmo77wTPmOrGnudZTeV6W%2BDUCJ08EjVp15LZ0JJpilQczaVljohQ%2BmMouuLvsj6OdIkQJU16rDq4qZGwOWm92OLGpw88tDuW7BSrtalG%2FWLrtuVpy4inxPaAVe7fdKP5NFX%2FWhPYaFFk3Mm0uXGAvVxT6b3%2Fsr9C9zkOohoVELFr3m%2B5sjWb%2Bye7vskkDbk8ZRSWIyNPjTFT5GBCRyNY8dbtHPcuWRqna9hrvq%2FutEMIqKSnFWtik4JEOb2CKpte1s3sM%2BzCTzNHJBjqkAWcKnN9ft1IzZ7yI8OAGVGy7Qr7b11Sfn88K7KJyXOkC8gXq%2BEFobcJW9A5LefRDogfv%2F4jnX6lKsOxoeZ2bY1y5uCkHSK%2FjLuYLZ%2B9YGdAQ9KsoFc4jAmtrzk4VwZ%2Bp1zcl811fsaWOAQsoZEljTk2sdibMzfePSy4i%2Bt3YYnLQoUXXrp8BkLfcSylre7dm3DLoRqy7orEw19oqdGbbppYxVCBx&X-Amz-Signature=215c893aaeaf420494b16f1d22e102b234de3cc1442b2740759be181f6df3ae2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH2IQWH5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T175648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC83XIqQgHfeytyWPbM2%2FGZOvZHP7do5AxGSiDbHSYuYQIhAKb0%2FDxT7Te7R3NG%2BhoJzqoTXF673FOwgmd1yI7F4yV8Kv8DCHoQABoMNjM3NDIzMTgzODA1IgwRc3YjHuo%2BHpumqwkq3AP6GXLj2BQLYaqdfs01%2BruiK3cWSEXgJxpAsE59GEYuBI3TBEXvr9lVazrs3mvB5Q9FkS2vJHi5s%2BPzsdfhBYmv4QZPrIMvu44Xy5KKS9VcVJehDb8df8YSCfSP3w69TInyBLqtpYVQPDxKf1yurBoilYHFbbTJf0qd%2B%2BiIcEimqVPH2eoMaDgXgYfsOiWmEfLX7tMiOEMDkh0Mr%2B5HlSe8OlbM%2B58zxdcjeQ9KlhABmCrtknPzWwfRfhKGf8rQ0rPInsNRqnNyCyxVCKQ5DwDUdkZWHhn9KyOP6B0fE6yb2fvz16u8IgyoyaYOHEpVpOqHoXRNXUw6KI9YYyTFh0JwYVm5F%2FNfm%2Bk0rHrIIve3dSdZvBErYp9cmo77wTPmOrGnudZTeV6W%2BDUCJ08EjVp15LZ0JJpilQczaVljohQ%2BmMouuLvsj6OdIkQJU16rDq4qZGwOWm92OLGpw88tDuW7BSrtalG%2FWLrtuVpy4inxPaAVe7fdKP5NFX%2FWhPYaFFk3Mm0uXGAvVxT6b3%2Fsr9C9zkOohoVELFr3m%2B5sjWb%2Bye7vskkDbk8ZRSWIyNPjTFT5GBCRyNY8dbtHPcuWRqna9hrvq%2FutEMIqKSnFWtik4JEOb2CKpte1s3sM%2BzCTzNHJBjqkAWcKnN9ft1IzZ7yI8OAGVGy7Qr7b11Sfn88K7KJyXOkC8gXq%2BEFobcJW9A5LefRDogfv%2F4jnX6lKsOxoeZ2bY1y5uCkHSK%2FjLuYLZ%2B9YGdAQ9KsoFc4jAmtrzk4VwZ%2Bp1zcl811fsaWOAQsoZEljTk2sdibMzfePSy4i%2Bt3YYnLQoUXXrp8BkLfcSylre7dm3DLoRqy7orEw19oqdGbbppYxVCBx&X-Amz-Signature=0d66bc786fdbe0b0b361e1c7a7504d3a21f8b1c52acbaf4682e74177d57f984e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
