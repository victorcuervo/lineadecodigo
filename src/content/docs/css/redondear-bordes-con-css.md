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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRUE53SV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T153347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPJjYDrA5%2BNgSMXT6fWHzLGQPMzNByPJwiMmuK6VjU5AIhAPEMevXxQn4A2R%2FZyGaanKU%2FxWMrPFPKobYrwFcrnSVuKv8DCFsQABoMNjM3NDIzMTgzODA1IgxmdZYpMdjcawgQ20Mq3APEJTjlpGWf8ZwFB5WEOWwn61EXTRLZLpCTUBUC%2BrhTqHxZa5P%2BTB5oVQbwMRzPye2HE%2F1Gyj118JKlygBPK5t7Gh%2B2uaEkx5RAjays6z6a9F5zZtxNKAacqZiEUXv4z2ff%2FK3YYpofTPQJR2eZrMF0EYXkpbP51cBg%2F9yWXyhPqkGnv3jIBNRzMDHnOqYY5%2F%2FDp4U3%2B7UmeMgINjeV077rM7hml%2FN4pV%2Fmj%2F8tqJKXi012Mwft5Jx5%2BziTTVn3urGRg5fRigErWFHPi9OyEJE8w6zzkW16OVfPeQU1mguqssR%2Blq%2BAmVVnXJgF763TkXJGPsqPH6UpdLGH2cZqoCCVp6kYkFgphCL3JknTsurh60QRJFKXG5ScN9BlwZOkZHRQdy2CeSLzUIQravrQgWDt6zEOHt3GONRNGai4hYhBlRIHVNI5heZcZlc7uMxB4tTqTotnPK%2FcjKroAeMRu5mO2McHVA2k8eILeA9WrS6mh6sta4qr%2BtvPD67IDd5ylj0pVP07zKP6LU4IoUu%2Btgq5KT4tB%2FUYqu10qwM4NdeLOhqpY2PZEJT2B5gdfntlqiibyRu7vka6Oe7KBVPylTqbk0o14oL2gWj2BejujM4X%2BqUyj3LHumdUS11VVzCe1MrJBjqkAawmFe%2BGXOz75MbTiG6tM%2FijYnEgEfdtl1BqOGAHK9tVlH3QCkKuoAx0BWSNo1GAgQR%2Fa4jxXYTRj32R3U7Nc%2BU5xEThcSwlliOKucbBeq9CpoE3O%2Baa8w3mnrqtLck5Ofu0RxcCVyxx1QJExbmgi54xSio7%2FAqw3SicgpChJZE2Ba5kdc53tafu8c4kxEiHbdMHXtCWwjB02pTZc8ue57kCRp6v&X-Amz-Signature=f26459928f95494e451262853a8de2a0ea2e8c31e4f646490af39f86eaddd6d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRUE53SV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T153347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPJjYDrA5%2BNgSMXT6fWHzLGQPMzNByPJwiMmuK6VjU5AIhAPEMevXxQn4A2R%2FZyGaanKU%2FxWMrPFPKobYrwFcrnSVuKv8DCFsQABoMNjM3NDIzMTgzODA1IgxmdZYpMdjcawgQ20Mq3APEJTjlpGWf8ZwFB5WEOWwn61EXTRLZLpCTUBUC%2BrhTqHxZa5P%2BTB5oVQbwMRzPye2HE%2F1Gyj118JKlygBPK5t7Gh%2B2uaEkx5RAjays6z6a9F5zZtxNKAacqZiEUXv4z2ff%2FK3YYpofTPQJR2eZrMF0EYXkpbP51cBg%2F9yWXyhPqkGnv3jIBNRzMDHnOqYY5%2F%2FDp4U3%2B7UmeMgINjeV077rM7hml%2FN4pV%2Fmj%2F8tqJKXi012Mwft5Jx5%2BziTTVn3urGRg5fRigErWFHPi9OyEJE8w6zzkW16OVfPeQU1mguqssR%2Blq%2BAmVVnXJgF763TkXJGPsqPH6UpdLGH2cZqoCCVp6kYkFgphCL3JknTsurh60QRJFKXG5ScN9BlwZOkZHRQdy2CeSLzUIQravrQgWDt6zEOHt3GONRNGai4hYhBlRIHVNI5heZcZlc7uMxB4tTqTotnPK%2FcjKroAeMRu5mO2McHVA2k8eILeA9WrS6mh6sta4qr%2BtvPD67IDd5ylj0pVP07zKP6LU4IoUu%2Btgq5KT4tB%2FUYqu10qwM4NdeLOhqpY2PZEJT2B5gdfntlqiibyRu7vka6Oe7KBVPylTqbk0o14oL2gWj2BejujM4X%2BqUyj3LHumdUS11VVzCe1MrJBjqkAawmFe%2BGXOz75MbTiG6tM%2FijYnEgEfdtl1BqOGAHK9tVlH3QCkKuoAx0BWSNo1GAgQR%2Fa4jxXYTRj32R3U7Nc%2BU5xEThcSwlliOKucbBeq9CpoE3O%2Baa8w3mnrqtLck5Ofu0RxcCVyxx1QJExbmgi54xSio7%2FAqw3SicgpChJZE2Ba5kdc53tafu8c4kxEiHbdMHXtCWwjB02pTZc8ue57kCRp6v&X-Amz-Signature=aceeb2446293bf6688049a9634903d5c97c9bec73da0b86d3bcdaf38012abada&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
