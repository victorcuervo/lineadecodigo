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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5G4O2UM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFJyBaDrAG0av9X0WNfhWs%2Bc0FGSoAXVH8SxK0gdAuIzAiAPYdOvWz4QQR5k4%2BhaHvtQz%2FoZQBlx7AmTEKvnZMluPCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMpRyuzOFMWJLAKVewKtwD8sOQqKVzA3EBXQGR4sIAzJNOHzmGrBMsp7topXl852wWK0mSf1%2F6e1EpJaRzwDwCgcqwUbT2sN%2B4j7oL%2BqvyCrcA5TEBH6xbdmuf8WFbAK%2Bv1%2FeEGYqWedzqdRwj0xMN5l9TN7SY3oVfRf1lL8QRxLhdX4yG5xOxBjOzjocwDUUlZ7ir7UppK%2F6HJup6ItKXYj957V3x9LbYRczeVPbCKKp46f%2FOiNOp2E0FB8UNmMmwb20OhSlW50wjHBIrKEUpviM41RNjK8pJir9Z0iYZiEsb0CrLtOnPEGJoSSX%2FRujATA0lMQX7CzdKkwSPdzUGz8lys21ELhXguoJKhQ81b6iTF%2BnHyUkRFk%2FNilD%2BlIRdMhFo71YG8G9kshOIvtyNI8saTTWy7Y7NJTRDxfAdH0yk%2B%2FTV%2FkE8UPa8jHNi6W%2F4TgIetNaZ6tiCG%2FVAVuKj0tY9s9QhNHVzz01qCBnhwXLP4A9e4XzU9sp43Yq48qSjHghTPg1Dvq8QM3BDbxx7P2h0vg%2BgsooHRKJWTrmKgw%2FW4fSoYLTyIEcD0waTiFNNDP2wjNdjitXm1SH%2FIzPm2h%2B8k2Tc27x0bPrKqpGthw7tChshSYyVEMIZSkukesAB%2Bm%2BqM1th2gAyfvMwxqHGyQY6pgG8w6d0eWBzRatFTFur8kSso7rCw2Hwa8KAK48nh8Z4hDcYHfX8A4xGzHbVsTW8ZAHZ5DLNLWxZZ4xngqFI9hck32JriF5hqfQdbj4OEXCfYCm1JhXM5OvFg9kMWb04RTGNGzvetuxQ2hFCgtKrYo%2Bh%2FgBPuTTIaMwmWxHsFWVHLIvYjoaLl4hTOjNXXaGQ%2Fz%2BLTq2APj2uoz917%2FF4IfeTtEaQXVC5&X-Amz-Signature=e7e9a6261d469ae86b0b49e2f68ab011ff900ab4913d99372dd6f92cc76345c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5G4O2UM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFJyBaDrAG0av9X0WNfhWs%2Bc0FGSoAXVH8SxK0gdAuIzAiAPYdOvWz4QQR5k4%2BhaHvtQz%2FoZQBlx7AmTEKvnZMluPCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMpRyuzOFMWJLAKVewKtwD8sOQqKVzA3EBXQGR4sIAzJNOHzmGrBMsp7topXl852wWK0mSf1%2F6e1EpJaRzwDwCgcqwUbT2sN%2B4j7oL%2BqvyCrcA5TEBH6xbdmuf8WFbAK%2Bv1%2FeEGYqWedzqdRwj0xMN5l9TN7SY3oVfRf1lL8QRxLhdX4yG5xOxBjOzjocwDUUlZ7ir7UppK%2F6HJup6ItKXYj957V3x9LbYRczeVPbCKKp46f%2FOiNOp2E0FB8UNmMmwb20OhSlW50wjHBIrKEUpviM41RNjK8pJir9Z0iYZiEsb0CrLtOnPEGJoSSX%2FRujATA0lMQX7CzdKkwSPdzUGz8lys21ELhXguoJKhQ81b6iTF%2BnHyUkRFk%2FNilD%2BlIRdMhFo71YG8G9kshOIvtyNI8saTTWy7Y7NJTRDxfAdH0yk%2B%2FTV%2FkE8UPa8jHNi6W%2F4TgIetNaZ6tiCG%2FVAVuKj0tY9s9QhNHVzz01qCBnhwXLP4A9e4XzU9sp43Yq48qSjHghTPg1Dvq8QM3BDbxx7P2h0vg%2BgsooHRKJWTrmKgw%2FW4fSoYLTyIEcD0waTiFNNDP2wjNdjitXm1SH%2FIzPm2h%2B8k2Tc27x0bPrKqpGthw7tChshSYyVEMIZSkukesAB%2Bm%2BqM1th2gAyfvMwxqHGyQY6pgG8w6d0eWBzRatFTFur8kSso7rCw2Hwa8KAK48nh8Z4hDcYHfX8A4xGzHbVsTW8ZAHZ5DLNLWxZZ4xngqFI9hck32JriF5hqfQdbj4OEXCfYCm1JhXM5OvFg9kMWb04RTGNGzvetuxQ2hFCgtKrYo%2Bh%2FgBPuTTIaMwmWxHsFWVHLIvYjoaLl4hTOjNXXaGQ%2Fz%2BLTq2APj2uoz917%2FF4IfeTtEaQXVC5&X-Amz-Signature=cf334673e0e2b2c935b12aaf0b5dfa5d95f7e1ad59904879435327fc965325b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
