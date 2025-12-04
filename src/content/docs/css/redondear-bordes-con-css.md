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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623NHY76V%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0til4qq4tuJ2awAgMGAESZoK1gcLYpNRB4O6gxc9fyAiA5oAoaDS4SX4NVyyLFbKCgsBaApU8f1gcFfHBv%2Fwh89ir%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMjgY4yyk7VyqcsBHNKtwDU2UBWWUf9CJxejydiMqiM0XVloLk0bVvtOx%2B9OF%2BdDQwX%2B%2F8HnCi64h%2FKnVp3TliO6niIPZuzBG7yDb11YobFlmF8gtUeokJmibd6bHw7gCPpZD%2BeyfVgARLOYL9jxTtx35mkv%2Bmh8d%2F%2FTBc2izQsCmiTe6Nglk2t%2FioGAWtlELkJhd7bwiI%2FFWjX1YEckBBCk4qCtbWy1SBxejwpx0o5LbANzbK9asLccS8iuNRPyezQu3fZOMlVtBBOWVcH4LH6fYiYT6ThWTIvam77%2F6NMVzJoygN1uklqCS04qMo0hyMrCnyCeB6jchPEMOiZ3fO%2FCLCI2bW%2BW2GZdT11e8kqqt%2FBOdJZcYmJ8hHE3R%2F019%2BIHFlJY09D0BETppRiXMQxamX%2Fb0YWfDQqE0xskUPFWAcscnT4D0fxbpS3tOJ%2FbjQehxd6KGQcKYCssxDAvP1uG3dJgpzWV09eHbGiclP%2B1HdHSoPcDBdtUdM9tS2GV%2FQ9YINWkxG3fQ7V6Bp9u4ZKLRXYZxPJuLsLVIwvhzsOrgclaqeMHfXFH25z%2BqK2fCvE%2F%2B3P08VK7AZ%2BoAbUZ04pWA3Elddji0YKn6RI3BYBT%2FSWXS%2BjkkcwR2N4ZS%2Fw1y0MqTWf3YUuTINDwMw89vGyQY6pgGG%2FWu9KofwMRJGJFvBYpX%2FhhZCcYX7QmYqpto96Sv%2BvWck0GVXSeV902fTlCpNU5Rd%2BtMYEBRfo2hWybe99Xjug0HXz9vzB9ppPQvNonuDNZUuXQ%2FGWc424%2BFpVKe0lD%2FW%2FSnfUoaTwN8Bqi9EMNCN7FrSJ9L%2FVStfTVNEEz1RGyrcWNDwlxIwUMMhgxXA%2BO%2F%2B8vXftqVfMndSdX%2BHtef0jsA1Y3ep&X-Amz-Signature=4eb3919ad5232ad2cebc3654e276d0d89adcc2628b8f17e3165f29360044c442&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623NHY76V%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0til4qq4tuJ2awAgMGAESZoK1gcLYpNRB4O6gxc9fyAiA5oAoaDS4SX4NVyyLFbKCgsBaApU8f1gcFfHBv%2Fwh89ir%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMjgY4yyk7VyqcsBHNKtwDU2UBWWUf9CJxejydiMqiM0XVloLk0bVvtOx%2B9OF%2BdDQwX%2B%2F8HnCi64h%2FKnVp3TliO6niIPZuzBG7yDb11YobFlmF8gtUeokJmibd6bHw7gCPpZD%2BeyfVgARLOYL9jxTtx35mkv%2Bmh8d%2F%2FTBc2izQsCmiTe6Nglk2t%2FioGAWtlELkJhd7bwiI%2FFWjX1YEckBBCk4qCtbWy1SBxejwpx0o5LbANzbK9asLccS8iuNRPyezQu3fZOMlVtBBOWVcH4LH6fYiYT6ThWTIvam77%2F6NMVzJoygN1uklqCS04qMo0hyMrCnyCeB6jchPEMOiZ3fO%2FCLCI2bW%2BW2GZdT11e8kqqt%2FBOdJZcYmJ8hHE3R%2F019%2BIHFlJY09D0BETppRiXMQxamX%2Fb0YWfDQqE0xskUPFWAcscnT4D0fxbpS3tOJ%2FbjQehxd6KGQcKYCssxDAvP1uG3dJgpzWV09eHbGiclP%2B1HdHSoPcDBdtUdM9tS2GV%2FQ9YINWkxG3fQ7V6Bp9u4ZKLRXYZxPJuLsLVIwvhzsOrgclaqeMHfXFH25z%2BqK2fCvE%2F%2B3P08VK7AZ%2BoAbUZ04pWA3Elddji0YKn6RI3BYBT%2FSWXS%2BjkkcwR2N4ZS%2Fw1y0MqTWf3YUuTINDwMw89vGyQY6pgGG%2FWu9KofwMRJGJFvBYpX%2FhhZCcYX7QmYqpto96Sv%2BvWck0GVXSeV902fTlCpNU5Rd%2BtMYEBRfo2hWybe99Xjug0HXz9vzB9ppPQvNonuDNZUuXQ%2FGWc424%2BFpVKe0lD%2FW%2FSnfUoaTwN8Bqi9EMNCN7FrSJ9L%2FVStfTVNEEz1RGyrcWNDwlxIwUMMhgxXA%2BO%2F%2B8vXftqVfMndSdX%2BHtef0jsA1Y3ep&X-Amz-Signature=ab3f38588c60b02a751d963678eb9a295ca95a5e62819976159f948b39b3fb0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
