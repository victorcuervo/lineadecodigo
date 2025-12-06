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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLS5SPZW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiD2n5is7jMX9yfph%2BW8w9EF%2FUy7xvPmWa7ZOoxsrprwIhAPr4pNcojbujIhR4jviSHjPPKbfAeqOJi7vTCre%2BdZ%2BCKv8DCHUQABoMNjM3NDIzMTgzODA1IgyDHWMQRu3%2BRbVSklsq3APJMSd7oU6146mcQDJxvNjBx904WVvzFPtn6vre8mSWuGZLPyDky%2F6q7iREewNeLG6ElyudXanJsWMTEkEXrNO%2F3qM0s5dN2ndQh0xz8iU99T%2F8fJugQ%2Blr%2B%2BsGJ3vcqOvlYZEsFuxjYKPmOXflBn6Fz8aJLyar%2B7Gcj2Yzr47TQzDZra4R3mGC8pSLyac%2FCz%2F19niIDngOHDOcuv2FuFK85DkyauuuAjSpAsxOwsHNy%2Bx0Xog%2FBk%2BhTOIIvMi35uEeZdOYAY8cgEfyohggccM0l%2F%2BRbdDz2e8P3Mof3iIRrF9VZLThc7fer%2BhV%2FtmhizSojMhf0na3jIQ4uC2CDm75sqNXbezhk53oZK2Xz2JC%2Bht5tyxZqUh6FTKYxWJiYDNVvGCu%2BW44Dysv3gE5TosEui%2FX8lv8p86D5zeQNXZxnbN%2FJd7STkWFFfQu47djhcu2XAQruFDFJ2ly0esg3VLujuyrBNsAaWYrgpIb6nqNefYExq20wyJLLTjO8kz3TDN426WlHqJauPyKWr8QkIXe3udNHYP7eyjAzJxkSIczebos3QbS3cim2A1WPS7nhO%2BI4V67WcKJiTpI81kg9KboLa8WL5AE68tPmTGs%2FAnmrA%2FeSiLejx9qJR5CRjDOptDJBjqkARrFXqyCYD4VmRGyCUYOiKiTntrL6mtG2cJn%2BbJ1HqFIdeU5eddAduEoa6MAN2b1GTbvQ%2B15EegtLJ4kTwFKQXB5i0N9XCO94KSy42XQZ6MdTSSkmMkeKnpHI3QglZdHSO%2F8PEUC7q8w4rGJPEhUJKMnqkkQH7Nww%2BYFtcEC1VkouIeIawcaJGwYwsPTRynff2vNQY6vV14g33SeKJsxobLb9LuL&X-Amz-Signature=4d87e1091abacc48dfd4f60aa09d8f7bea1e5e65dabba9d313be636b4e7e9f8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLS5SPZW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiD2n5is7jMX9yfph%2BW8w9EF%2FUy7xvPmWa7ZOoxsrprwIhAPr4pNcojbujIhR4jviSHjPPKbfAeqOJi7vTCre%2BdZ%2BCKv8DCHUQABoMNjM3NDIzMTgzODA1IgyDHWMQRu3%2BRbVSklsq3APJMSd7oU6146mcQDJxvNjBx904WVvzFPtn6vre8mSWuGZLPyDky%2F6q7iREewNeLG6ElyudXanJsWMTEkEXrNO%2F3qM0s5dN2ndQh0xz8iU99T%2F8fJugQ%2Blr%2B%2BsGJ3vcqOvlYZEsFuxjYKPmOXflBn6Fz8aJLyar%2B7Gcj2Yzr47TQzDZra4R3mGC8pSLyac%2FCz%2F19niIDngOHDOcuv2FuFK85DkyauuuAjSpAsxOwsHNy%2Bx0Xog%2FBk%2BhTOIIvMi35uEeZdOYAY8cgEfyohggccM0l%2F%2BRbdDz2e8P3Mof3iIRrF9VZLThc7fer%2BhV%2FtmhizSojMhf0na3jIQ4uC2CDm75sqNXbezhk53oZK2Xz2JC%2Bht5tyxZqUh6FTKYxWJiYDNVvGCu%2BW44Dysv3gE5TosEui%2FX8lv8p86D5zeQNXZxnbN%2FJd7STkWFFfQu47djhcu2XAQruFDFJ2ly0esg3VLujuyrBNsAaWYrgpIb6nqNefYExq20wyJLLTjO8kz3TDN426WlHqJauPyKWr8QkIXe3udNHYP7eyjAzJxkSIczebos3QbS3cim2A1WPS7nhO%2BI4V67WcKJiTpI81kg9KboLa8WL5AE68tPmTGs%2FAnmrA%2FeSiLejx9qJR5CRjDOptDJBjqkARrFXqyCYD4VmRGyCUYOiKiTntrL6mtG2cJn%2BbJ1HqFIdeU5eddAduEoa6MAN2b1GTbvQ%2B15EegtLJ4kTwFKQXB5i0N9XCO94KSy42XQZ6MdTSSkmMkeKnpHI3QglZdHSO%2F8PEUC7q8w4rGJPEhUJKMnqkkQH7Nww%2BYFtcEC1VkouIeIawcaJGwYwsPTRynff2vNQY6vV14g33SeKJsxobLb9LuL&X-Amz-Signature=5601c91b2773916be2c6e47f749b2e88f0a97aea8f817699ef59c8b24581e6f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
