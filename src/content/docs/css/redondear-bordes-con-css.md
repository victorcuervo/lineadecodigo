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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N2LOYAB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T094849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID94cbPFf7XehYnHFKb3%2BeAI46QX4aiWpp1LWfP2iMjxAiB5DoZBBEYznjGvTBqVoRBsrN%2FdJeCp5Nmb%2Fxz0A9VdlyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe42XEB0aUgFuBJhlKtwDF0vkCzafDUgPCADCnQ2AqYr%2FaPCfyw5%2FN4B9a2NXSD52npW2kdqtfAdShKr6XOwcGaMZzwab23BiKZFIcexg7JNH6qXAKGdUvSZp8RNJX6JI8BDAaif%2Fbu%2FgRFFHHRd4fz36dZLt6sC3mJtCbJkZm0T0l9ogziYC%2BGcgIebdx0MIBLdMEEOsDw6zIrJ3oVi%2FnoKdoW3N0dHVAAX0p9zy%2FufAXt8tARuBJM5AIEZ%2FD%2B2JELwkkW6le6rlLcqrV8Sgh1T9VNCjQl8gX972U377%2F7srHX6QvjZn8C8sjBnQ5lohgnYkrHqWQoGGdI9Mrw0YDlfpBuaUrASrkHe6ZkL7wE70Ps74a2LigLGs2s77b1uaVEIOWj4hgyzuJVhqHkYIJRqZkxubvy94AYTUGe4ctv97eb7nUFmEVI%2FakRPRxL6sZ59n%2FwJgvGxtK%2BrzcNkWF7FzOD3WDPy8zMNMHynhF%2FrdWJRjdK%2FWHrChn8ovobx4RRpLoenleLlHAJkdsCnuaAtIsq9zRb%2BBcBZyn%2FcyXKohktkQhrZT%2BchxXwbeDm8gzn5uwFYbqeJWDEhFYwmdJQLpuo9hZv%2BHG3mj6%2BpRsLxbg2d5W1BH%2Ffuuww0l1gQKJUiAWzvuX2%2FtD4Uwz%2B3ZyQY6pgHKZzyzpGZTTsX97UOOdQMOTfs%2BOdOprd6it%2F4SM2vsLRsyOeH8gZITfHcUNllOKxEzu9rXZBBIbUPws8BRDhOkOWUktBfe63%2F1v%2Fc3eXxOdKfSiz4MYiklGOjR%2F7WXuqGdgb0RJ2e32cn6UCpF%2BlCXRr59ruBMjpaTMG1vcyzKEfpUvBK8ZYdThgQSN7ZoStXV3SUHtGL1egfRN%2B6zeO2LLTElgLld&X-Amz-Signature=94c092221239c95292da96b0642a79890c45eeb617ed6484c533d24717b0496d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N2LOYAB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T094849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID94cbPFf7XehYnHFKb3%2BeAI46QX4aiWpp1LWfP2iMjxAiB5DoZBBEYznjGvTBqVoRBsrN%2FdJeCp5Nmb%2Fxz0A9VdlyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe42XEB0aUgFuBJhlKtwDF0vkCzafDUgPCADCnQ2AqYr%2FaPCfyw5%2FN4B9a2NXSD52npW2kdqtfAdShKr6XOwcGaMZzwab23BiKZFIcexg7JNH6qXAKGdUvSZp8RNJX6JI8BDAaif%2Fbu%2FgRFFHHRd4fz36dZLt6sC3mJtCbJkZm0T0l9ogziYC%2BGcgIebdx0MIBLdMEEOsDw6zIrJ3oVi%2FnoKdoW3N0dHVAAX0p9zy%2FufAXt8tARuBJM5AIEZ%2FD%2B2JELwkkW6le6rlLcqrV8Sgh1T9VNCjQl8gX972U377%2F7srHX6QvjZn8C8sjBnQ5lohgnYkrHqWQoGGdI9Mrw0YDlfpBuaUrASrkHe6ZkL7wE70Ps74a2LigLGs2s77b1uaVEIOWj4hgyzuJVhqHkYIJRqZkxubvy94AYTUGe4ctv97eb7nUFmEVI%2FakRPRxL6sZ59n%2FwJgvGxtK%2BrzcNkWF7FzOD3WDPy8zMNMHynhF%2FrdWJRjdK%2FWHrChn8ovobx4RRpLoenleLlHAJkdsCnuaAtIsq9zRb%2BBcBZyn%2FcyXKohktkQhrZT%2BchxXwbeDm8gzn5uwFYbqeJWDEhFYwmdJQLpuo9hZv%2BHG3mj6%2BpRsLxbg2d5W1BH%2Ffuuww0l1gQKJUiAWzvuX2%2FtD4Uwz%2B3ZyQY6pgHKZzyzpGZTTsX97UOOdQMOTfs%2BOdOprd6it%2F4SM2vsLRsyOeH8gZITfHcUNllOKxEzu9rXZBBIbUPws8BRDhOkOWUktBfe63%2F1v%2Fc3eXxOdKfSiz4MYiklGOjR%2F7WXuqGdgb0RJ2e32cn6UCpF%2BlCXRr59ruBMjpaTMG1vcyzKEfpUvBK8ZYdThgQSN7ZoStXV3SUHtGL1egfRN%2B6zeO2LLTElgLld&X-Amz-Signature=5fe276b2045116743bea945fec08f2a9534dbf90cf2a1f0f0a7abc2cc2f41d42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
