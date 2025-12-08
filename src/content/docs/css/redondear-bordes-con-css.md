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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I42R6LY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T010752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDJixmnHIpgsuzY3wm8YwdalhyeJlV%2B2Chup3tyJQDigIhAJWtEhZD5IFr%2FUsjeYPo2cGkNHGiPW1xd%2Bcko9Tu9nB%2FKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzub1dRqFKH5pyoVzMq3ANNe7pVpSdc2CQBvI2%2Fm%2BDBmoOG1Irm6rUCvtbVZq%2BYntAl6ELVOMhQSCEaZq45j1Ml8lndcMMFNXYXQHx3hoxJxSAN%2BM5XFD6Q9FokcqDvcpbhCoQohAA3CC9%2F%2FwlUt9VC8Y%2B0HB0NQNzZjZ9wUR%2F5641jyRPnf47lDFMoA5DUjnwOSflkcOVg7PRBpWylykM9G1uWCSyCpOfELwMlyB3aGD%2Be25oVq%2Fp%2BYO6q4jT6KbUmj81HA8mpAs69KjLmHMSa0Y6h7SQI8e9DN4YzlmIk82lcw4XESWqE9UN5EypBWmQ9XoUWHcmlaPGKEtry84Ivy7TJKcmZ5xEMHnDiI8I4YmfnfypSe%2BUBpFlehpbOoDaovHNqkQ1ubrdBmuqVBZDEKBZ7JEk7NoBItBczMMWh3vx9w7tuZcpw%2FzWMTf43gS%2FrwJzYkyuyF%2BWVf6fVKLnhxlkNbPhPZoaKCeNkiHrj6MPhTYaIU1xXhueBOkJ6Vz7r8DzIv3%2BPQg9QFaCJHYwYsYPxBzuwzOl1u5J5Fj1WX7SllaKTMMt4WSVQiZ4CNRs8YaDLFRsk83Ud1romjaJwlYEvlAuYEhU4XhoLcDISYvVE6WAACnWoZfJdXmEfXQl6IwgeRh0tnbR6nTClodjJBjqkAZssNnMFK0fMBH5b0gdRVi5rf5wVoNGu6OqR4WNf%2B7dMQKQdOhOy1J%2BkZ53SETqPp3qwX2sGpfT8u6C24zBS1FS5kH%2FVoVjnQSF3n1SyPlwhbDdpt%2BUMLYcSPmHklad%2FdVKLsECuW5wnrdcRp2c%2F48QC7tLtuuA%2FrrKwvaUBzErFJn9Y3med2njmPFgNIe0NJVYJxCQga14v4ZI9bYGnxmV6Iyso&X-Amz-Signature=219f57f876d250ab6bf7dbfc64ff2746bbe0fba885d46ddc37d59e405b22a261&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I42R6LY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T010752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDJixmnHIpgsuzY3wm8YwdalhyeJlV%2B2Chup3tyJQDigIhAJWtEhZD5IFr%2FUsjeYPo2cGkNHGiPW1xd%2Bcko9Tu9nB%2FKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzub1dRqFKH5pyoVzMq3ANNe7pVpSdc2CQBvI2%2Fm%2BDBmoOG1Irm6rUCvtbVZq%2BYntAl6ELVOMhQSCEaZq45j1Ml8lndcMMFNXYXQHx3hoxJxSAN%2BM5XFD6Q9FokcqDvcpbhCoQohAA3CC9%2F%2FwlUt9VC8Y%2B0HB0NQNzZjZ9wUR%2F5641jyRPnf47lDFMoA5DUjnwOSflkcOVg7PRBpWylykM9G1uWCSyCpOfELwMlyB3aGD%2Be25oVq%2Fp%2BYO6q4jT6KbUmj81HA8mpAs69KjLmHMSa0Y6h7SQI8e9DN4YzlmIk82lcw4XESWqE9UN5EypBWmQ9XoUWHcmlaPGKEtry84Ivy7TJKcmZ5xEMHnDiI8I4YmfnfypSe%2BUBpFlehpbOoDaovHNqkQ1ubrdBmuqVBZDEKBZ7JEk7NoBItBczMMWh3vx9w7tuZcpw%2FzWMTf43gS%2FrwJzYkyuyF%2BWVf6fVKLnhxlkNbPhPZoaKCeNkiHrj6MPhTYaIU1xXhueBOkJ6Vz7r8DzIv3%2BPQg9QFaCJHYwYsYPxBzuwzOl1u5J5Fj1WX7SllaKTMMt4WSVQiZ4CNRs8YaDLFRsk83Ud1romjaJwlYEvlAuYEhU4XhoLcDISYvVE6WAACnWoZfJdXmEfXQl6IwgeRh0tnbR6nTClodjJBjqkAZssNnMFK0fMBH5b0gdRVi5rf5wVoNGu6OqR4WNf%2B7dMQKQdOhOy1J%2BkZ53SETqPp3qwX2sGpfT8u6C24zBS1FS5kH%2FVoVjnQSF3n1SyPlwhbDdpt%2BUMLYcSPmHklad%2FdVKLsECuW5wnrdcRp2c%2F48QC7tLtuuA%2FrrKwvaUBzErFJn9Y3med2njmPFgNIe0NJVYJxCQga14v4ZI9bYGnxmV6Iyso&X-Amz-Signature=07bdb006ed61d1eee4cb389656da816e240f372d4c2c99986bfa70636a7ecd93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
