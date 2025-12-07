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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PL2GAEW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T170319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYBfLcLOUX3TprpBUaibZip9a2ebTkNRKHdwKsAmBFlAIhAIR6mTavJ%2B%2BzvCr4f0tonD%2F5k5cYUcROeoVYy9TQShmKKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzRRQWzVQcV47n1pgq3AMphLEDDMK6Z9Ofn3FZICFmeBc6HgyAgtCsgMteQaoF4cRljvIAVGDkrnOamktjSEf%2BrEq%2F%2BdShXRXtBh%2F%2BrSf2pjkv4Yy54Mr3gGcK36CfUaAoMOodWDGrslBMZ%2B5E%2BF7L4Rqk4SHWQLD9TAEVbPvlk%2Fq0CzG89iGDdgoMjTbg%2F4TDMCrjdlLgkqoig1HV0j81gUttKPFUej4Dy5mnCO%2BbUkjK%2FYAhnuSf8SzwHWNIsFdwzoLVZQsXwJW3xo8R4DHSF0z5MzytvACoWZ9Ay4e9xF7SoPkqi1HRDA4MoVRZ6msShtwvg5m3E1WTVCHqTx5OAW3ULcGwXL37Tx2xafSSaYYS5zH%2FfPNGIOxnKebYJQkYT3mAFwmOvgg%2B8%2Fm%2FZa3ps3CROAdqnUYsQRDSbVR0Hqg8%2BMC4VPHIyYV%2F%2FRrAEjEL0%2FLWCg1WjDYPgYAKpX3O9cgUxINwLdglhWRkn1FhYyqv0llsoQ6eM8b5DHY8BUfNyGmf6hQ7XIyk4aePKkFrdLKdoo7aE0ES2jMRw8jTFxRTEymHZphZSKbGlLfDFFuS3gyb44iEvl5BxAY%2FG9OTxNPABmRk2AECkkA%2Fo%2F7UIZR39rrKvNelrsZXQoEleVfzgrn3bsSMzdTLIDDCtdbJBjqkATHBpYLTZzM0nIcPOwySQ3li6CKTnzF%2FiUoxr6jHoxY4JDUqroWEN9yv3WaaL1%2FXQL6YNSjTGZU5%2FenTj5j8kiHvytNwFxFIx2dzdmbGzHzoEaXQM0uz9dfm9A2HA2fILTVClHTxugqat%2BMypr5wSqVUL6SqDcNS68ZqW3pvvr4H8zzSDwbNw6F0Bhm4bIZzy53KXCiBl9%2Ffqp4uWeYamp8YOUIs&X-Amz-Signature=fca165232de497e600860fff63de1ee63951c32ba5731c08fb61d9b2dc956adf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PL2GAEW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T170319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYBfLcLOUX3TprpBUaibZip9a2ebTkNRKHdwKsAmBFlAIhAIR6mTavJ%2B%2BzvCr4f0tonD%2F5k5cYUcROeoVYy9TQShmKKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzRRQWzVQcV47n1pgq3AMphLEDDMK6Z9Ofn3FZICFmeBc6HgyAgtCsgMteQaoF4cRljvIAVGDkrnOamktjSEf%2BrEq%2F%2BdShXRXtBh%2F%2BrSf2pjkv4Yy54Mr3gGcK36CfUaAoMOodWDGrslBMZ%2B5E%2BF7L4Rqk4SHWQLD9TAEVbPvlk%2Fq0CzG89iGDdgoMjTbg%2F4TDMCrjdlLgkqoig1HV0j81gUttKPFUej4Dy5mnCO%2BbUkjK%2FYAhnuSf8SzwHWNIsFdwzoLVZQsXwJW3xo8R4DHSF0z5MzytvACoWZ9Ay4e9xF7SoPkqi1HRDA4MoVRZ6msShtwvg5m3E1WTVCHqTx5OAW3ULcGwXL37Tx2xafSSaYYS5zH%2FfPNGIOxnKebYJQkYT3mAFwmOvgg%2B8%2Fm%2FZa3ps3CROAdqnUYsQRDSbVR0Hqg8%2BMC4VPHIyYV%2F%2FRrAEjEL0%2FLWCg1WjDYPgYAKpX3O9cgUxINwLdglhWRkn1FhYyqv0llsoQ6eM8b5DHY8BUfNyGmf6hQ7XIyk4aePKkFrdLKdoo7aE0ES2jMRw8jTFxRTEymHZphZSKbGlLfDFFuS3gyb44iEvl5BxAY%2FG9OTxNPABmRk2AECkkA%2Fo%2F7UIZR39rrKvNelrsZXQoEleVfzgrn3bsSMzdTLIDDCtdbJBjqkATHBpYLTZzM0nIcPOwySQ3li6CKTnzF%2FiUoxr6jHoxY4JDUqroWEN9yv3WaaL1%2FXQL6YNSjTGZU5%2FenTj5j8kiHvytNwFxFIx2dzdmbGzHzoEaXQM0uz9dfm9A2HA2fILTVClHTxugqat%2BMypr5wSqVUL6SqDcNS68ZqW3pvvr4H8zzSDwbNw6F0Bhm4bIZzy53KXCiBl9%2Ffqp4uWeYamp8YOUIs&X-Amz-Signature=f0de859b8f21f3896f732010791b4a735f07250399923351d770f31807555139&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
