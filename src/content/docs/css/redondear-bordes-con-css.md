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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWLFDUZG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T071339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlI0HIfg5s2rRcwd0giuW8NgaE2rM1ZXPKOR7x%2FzBZUgIhAPtQZraxfbCDYMOsllyJ%2BrOQNz4%2B5VD7wkjfo3jJsba3Kv8DCFUQABoMNjM3NDIzMTgzODA1IgzBsOKRg5C4bxQHP5Iq3APy95L5NcKZkrZhf3Gdk%2BrkJgK2ZdlX7GsN84cdzIgCP0p5WRrLg1ulNcFoGdAszAOTFCrzuF1OtDJg4XoyWlcT%2F3n5pfaCyCwq5H80fx2iQ3UtEVXsVJfGnRAoMCpnOGlJmfytZZlzROml2Dhi8U603dSlhgcGrSxGT7W9e1NACYEYTm%2FP%2F1QHMSGOdO0oGjzXk61Dda5Mzqpa9Vv%2FFLXtQXuLZVxEnY%2B4Mbx787WPkSjfb%2BMoDm125dr5se55mb745QNeSZBadwDU9l3NuMh7yXGvRuPOTTq36z5bjp%2B2XJ8uvZvApJqfY5tRZMMCo6T%2BCYX11le2g7WS3tCRLqUu1JAFSl4xKpFl9nJULBfsrVPqW9D%2B5fvSX7txpRSYsvxUpwnSMl6cWEbXBg93eOJCpWCbcqgK5tjGl8qxGiOMJcFSn8aJm7x9YQlrxvlZ8HvpHQ7QrUJPwOyvs5mY8Gy9%2FwW6dNK2VXLiSk3nF3JI15yHYN7XzTlW6QnrcD4h%2FMXkJFyeFZZFgPqCL8J1GXx5lzsxJTf7S4sIhm49BtFCmJ1q6jX%2Fi02nYm%2BgTdi30ERf7rZaNN%2BRRO0dkpktwf20yEiOkuDjKTPd60Sa%2BO2AFUgvTzPRLZG2a05VHDCxscnJBjqkAeG%2FHlecyD%2BRR8PG2rdb7VPktIattltH3%2FTfSNHmtt9v3KKeNxoO6FIWYvHdHtPKaP7qyQC1XeYMtv%2Bowo9%2FYtygNDtBcI%2FUIHZjUuS8JfQ4I3B2AVKVF4vJn%2BNEyhpORgSTH3fbvSykCLHoS51pJLVPKxbs29wy3T2p5%2F2wQ0iAoPByy1bx%2FEvkIS%2FMeimw26wpAEwqOEJuous5s4AvM5S%2FF4wF&X-Amz-Signature=a67d794c68741fec0ac19fbf01c6d55334950bbb88cd6e3ea3272cffdcc87054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWLFDUZG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T071339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlI0HIfg5s2rRcwd0giuW8NgaE2rM1ZXPKOR7x%2FzBZUgIhAPtQZraxfbCDYMOsllyJ%2BrOQNz4%2B5VD7wkjfo3jJsba3Kv8DCFUQABoMNjM3NDIzMTgzODA1IgzBsOKRg5C4bxQHP5Iq3APy95L5NcKZkrZhf3Gdk%2BrkJgK2ZdlX7GsN84cdzIgCP0p5WRrLg1ulNcFoGdAszAOTFCrzuF1OtDJg4XoyWlcT%2F3n5pfaCyCwq5H80fx2iQ3UtEVXsVJfGnRAoMCpnOGlJmfytZZlzROml2Dhi8U603dSlhgcGrSxGT7W9e1NACYEYTm%2FP%2F1QHMSGOdO0oGjzXk61Dda5Mzqpa9Vv%2FFLXtQXuLZVxEnY%2B4Mbx787WPkSjfb%2BMoDm125dr5se55mb745QNeSZBadwDU9l3NuMh7yXGvRuPOTTq36z5bjp%2B2XJ8uvZvApJqfY5tRZMMCo6T%2BCYX11le2g7WS3tCRLqUu1JAFSl4xKpFl9nJULBfsrVPqW9D%2B5fvSX7txpRSYsvxUpwnSMl6cWEbXBg93eOJCpWCbcqgK5tjGl8qxGiOMJcFSn8aJm7x9YQlrxvlZ8HvpHQ7QrUJPwOyvs5mY8Gy9%2FwW6dNK2VXLiSk3nF3JI15yHYN7XzTlW6QnrcD4h%2FMXkJFyeFZZFgPqCL8J1GXx5lzsxJTf7S4sIhm49BtFCmJ1q6jX%2Fi02nYm%2BgTdi30ERf7rZaNN%2BRRO0dkpktwf20yEiOkuDjKTPd60Sa%2BO2AFUgvTzPRLZG2a05VHDCxscnJBjqkAeG%2FHlecyD%2BRR8PG2rdb7VPktIattltH3%2FTfSNHmtt9v3KKeNxoO6FIWYvHdHtPKaP7qyQC1XeYMtv%2Bowo9%2FYtygNDtBcI%2FUIHZjUuS8JfQ4I3B2AVKVF4vJn%2BNEyhpORgSTH3fbvSykCLHoS51pJLVPKxbs29wy3T2p5%2F2wQ0iAoPByy1bx%2FEvkIS%2FMeimw26wpAEwqOEJuous5s4AvM5S%2FF4wF&X-Amz-Signature=7b16276d5b8995c794079dfeebd6f71f31109b4310321ae211dad4438e294b27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
