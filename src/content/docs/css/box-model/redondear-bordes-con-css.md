---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y5K5CPA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F%2FfQApPJ9Y%2FLesXgWe21jzzaU6E%2Fvib%2F0xJ9ZWEhTFgIhALRYg9bMImGJtGR96W6qg5L%2BTspO7n8OurNw2nw6etpdKv8DCH4QABoMNjM3NDIzMTgzODA1IgyWntXwowKN%2B5lhRH8q3APRsp4WeQT%2BBCyu9ywmLcZ4NJbnVoqW8WPlBsLhtlC7%2FE70dalgiW8U0vHsqD9lEeyCMG4U9xIcASpO3JQwgrL1Z7Z5fZRmKTnWb6xMsJAEqX%2FB8MP7XYdPI8Lq7kl3T%2Bw8iBeBpEDl3CuonANqey2MX3iZ2R3bFOTLcwWxNCTrdnenK2U%2BmoTG1clpRpbmeC9ALhLy3dPuseYyzu0gTAW1KMX0YrmPT8KbiSN5vme9EA0LiJ6NHfYpl5r5IncwzI7cz288s1Pwib4ANdZRrVrGxQAX520oDbeYH53zCMdJ5U56QHl%2BytdxhzTIb2sKGm4YLEhoFdqURGIFHPDCDLQifNEB%2FMG%2BLXoF5Vw9W%2Fq1n6KS9RqFPlaW9k17A%2FJ0ZcqPFuLY7pU9m5S7MIoy6POEygT7NVOpsBqZpk1HnSmWLCf3YRlB21OavZrOBw3Y1U%2BNoWC1YVWEmeUtfZU%2BlC435Aaxul5PM2K5AGBYm60Vq1vIRqf9l4VmL7B3Swh6mGKM%2BO6HizSB0EVGb%2FBeXf04uO9Xp5G74aTU5%2Fr18LeaKgA%2FzO%2BX%2BHMjUAVmlvGQepK4%2BSlkv1YKDhcoPnBi7kIFGdvdsDXLsCv7evVX%2BUQWh86XFEHua24vQPMVGzC1xorKBjqkAfjgvlIIK0RUgYH0lKiKNOBygI8gV7bidTt4aDHjbb9LsfIoLjINo92BDHY7q3svDkQgZFC8Zrt5DjUVjiP%2BT9RmeJZEBs0dUVaI1ReBUfspyGgffQGvXVwxGj3LSz78pphKtffl5icTBF5FQS7IFuQMXWbq3Xi371ojRluIP5KzTqhUlHci6dosyVfBMKPJB%2BLnTOBir16uk7qbgKjg5yUwoymh&X-Amz-Signature=f520760a23e0ce0aa3afcfb0b90218352ff87da7ac0abbb7cb39c81faa15b098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y5K5CPA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F%2FfQApPJ9Y%2FLesXgWe21jzzaU6E%2Fvib%2F0xJ9ZWEhTFgIhALRYg9bMImGJtGR96W6qg5L%2BTspO7n8OurNw2nw6etpdKv8DCH4QABoMNjM3NDIzMTgzODA1IgyWntXwowKN%2B5lhRH8q3APRsp4WeQT%2BBCyu9ywmLcZ4NJbnVoqW8WPlBsLhtlC7%2FE70dalgiW8U0vHsqD9lEeyCMG4U9xIcASpO3JQwgrL1Z7Z5fZRmKTnWb6xMsJAEqX%2FB8MP7XYdPI8Lq7kl3T%2Bw8iBeBpEDl3CuonANqey2MX3iZ2R3bFOTLcwWxNCTrdnenK2U%2BmoTG1clpRpbmeC9ALhLy3dPuseYyzu0gTAW1KMX0YrmPT8KbiSN5vme9EA0LiJ6NHfYpl5r5IncwzI7cz288s1Pwib4ANdZRrVrGxQAX520oDbeYH53zCMdJ5U56QHl%2BytdxhzTIb2sKGm4YLEhoFdqURGIFHPDCDLQifNEB%2FMG%2BLXoF5Vw9W%2Fq1n6KS9RqFPlaW9k17A%2FJ0ZcqPFuLY7pU9m5S7MIoy6POEygT7NVOpsBqZpk1HnSmWLCf3YRlB21OavZrOBw3Y1U%2BNoWC1YVWEmeUtfZU%2BlC435Aaxul5PM2K5AGBYm60Vq1vIRqf9l4VmL7B3Swh6mGKM%2BO6HizSB0EVGb%2FBeXf04uO9Xp5G74aTU5%2Fr18LeaKgA%2FzO%2BX%2BHMjUAVmlvGQepK4%2BSlkv1YKDhcoPnBi7kIFGdvdsDXLsCv7evVX%2BUQWh86XFEHua24vQPMVGzC1xorKBjqkAfjgvlIIK0RUgYH0lKiKNOBygI8gV7bidTt4aDHjbb9LsfIoLjINo92BDHY7q3svDkQgZFC8Zrt5DjUVjiP%2BT9RmeJZEBs0dUVaI1ReBUfspyGgffQGvXVwxGj3LSz78pphKtffl5icTBF5FQS7IFuQMXWbq3Xi371ojRluIP5KzTqhUlHci6dosyVfBMKPJB%2BLnTOBir16uk7qbgKjg5yUwoymh&X-Amz-Signature=61668fc385183936888be6eaf84bc6759f4aecdc021fd2cdf665ec69be47cbe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
