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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPEHP3FX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T145301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDz2KGn%2FkXGngZh3v11svoWtqe2P4DAGv2bEALKfFJGYAiEAvJxqNyM%2B2aA3gKvvQVP9ucY%2BRNg7c8Biie16PEXvW20q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDHmRblJixQ79pCHp4yrcA1m3UqBpMCQpyz%2FL15Zx3RYfy0ssNe%2FaVDeJROXJAzMAAhmm3MDrQGwXBzCc1IE9y8KLb6IyekcJBMcDslN8XvfVUMKLmQRgkSGvtblJv7qOBW2%2FQk5d%2Feor5vkoh3Yrr8RC9Tu6DUaeYx75ifLlCNFtLihC%2Bl32O6P%2FsqVRaEJ%2FZ007INOGUA8e%2F7y28lCwSPBCGGQkTCoitiC6B08MHxHvv988cnapAoLWRh3PhkZ92bhrKjNrDXLkcAbySjglX5EJMFu9sfis57eu%2Bjodm%2FhlXstHrTcgQ3h0oLuGffF1Kbl6QyDbUaG7gfkjrJ08aTFrJf%2BIbmXBGXjsEP4xhZNqlZyiljvDH7d6yvczqSLlvEBVeM%2BbTbTpd%2F%2Bny6xgypcOe32liavT3e%2FY0gP9d9RmeG%2BWjWmJCxez53Wdi0Cee2GTrir2m8Q3Vx1BXOpwe8dz8V30JpWKDeKD5Zz8ZcTJ964T1mEliUXb06WzlU%2FEZypDKI%2F129cVAm4MokTzsl6s7ESuemihxRVj2GfnmPk7%2FxYXMpTQaYbm0sg4kBhwAtDC%2BWe9Gp%2BJgvq2RQxdA8Pl3tEEKR9IavF2mlYQbJSRzLXYdJhHrXmmFHz8HBNf9ADFENBIUtSMqEpHMKvOyskGOqUBAQn3LwgMTryilL4Dn4wuoG8GbtMvt0cYKoq8rwemQWlt8aJ%2BsXSbRtkdP4eBTfayJozY1zoetS0uzNrYr9Rgww9yepWZtfk8JVcZDXAdNfJqAdO7wljSQRvW1cY%2BIFf%2BZvsQLiUu2KClzteC%2BFTmCmmS1dxV6Yoh6o2ThDnHG38DCMF4ZLzVDTPMom4hbtY5YNzOPOuZWCAVYSjOXAXu2rzsa0sL&X-Amz-Signature=1630b1892e33be407cb4dd3986f0e2d9b7c924af7113ce334d959d4b3dcb326a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPEHP3FX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T145301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDz2KGn%2FkXGngZh3v11svoWtqe2P4DAGv2bEALKfFJGYAiEAvJxqNyM%2B2aA3gKvvQVP9ucY%2BRNg7c8Biie16PEXvW20q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDHmRblJixQ79pCHp4yrcA1m3UqBpMCQpyz%2FL15Zx3RYfy0ssNe%2FaVDeJROXJAzMAAhmm3MDrQGwXBzCc1IE9y8KLb6IyekcJBMcDslN8XvfVUMKLmQRgkSGvtblJv7qOBW2%2FQk5d%2Feor5vkoh3Yrr8RC9Tu6DUaeYx75ifLlCNFtLihC%2Bl32O6P%2FsqVRaEJ%2FZ007INOGUA8e%2F7y28lCwSPBCGGQkTCoitiC6B08MHxHvv988cnapAoLWRh3PhkZ92bhrKjNrDXLkcAbySjglX5EJMFu9sfis57eu%2Bjodm%2FhlXstHrTcgQ3h0oLuGffF1Kbl6QyDbUaG7gfkjrJ08aTFrJf%2BIbmXBGXjsEP4xhZNqlZyiljvDH7d6yvczqSLlvEBVeM%2BbTbTpd%2F%2Bny6xgypcOe32liavT3e%2FY0gP9d9RmeG%2BWjWmJCxez53Wdi0Cee2GTrir2m8Q3Vx1BXOpwe8dz8V30JpWKDeKD5Zz8ZcTJ964T1mEliUXb06WzlU%2FEZypDKI%2F129cVAm4MokTzsl6s7ESuemihxRVj2GfnmPk7%2FxYXMpTQaYbm0sg4kBhwAtDC%2BWe9Gp%2BJgvq2RQxdA8Pl3tEEKR9IavF2mlYQbJSRzLXYdJhHrXmmFHz8HBNf9ADFENBIUtSMqEpHMKvOyskGOqUBAQn3LwgMTryilL4Dn4wuoG8GbtMvt0cYKoq8rwemQWlt8aJ%2BsXSbRtkdP4eBTfayJozY1zoetS0uzNrYr9Rgww9yepWZtfk8JVcZDXAdNfJqAdO7wljSQRvW1cY%2BIFf%2BZvsQLiUu2KClzteC%2BFTmCmmS1dxV6Yoh6o2ThDnHG38DCMF4ZLzVDTPMom4hbtY5YNzOPOuZWCAVYSjOXAXu2rzsa0sL&X-Amz-Signature=f279f78631dad9ae5f7c15d47bd14753f0673ef591318835a454838a7f132ccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
