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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJIUSRZU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCNi7wcbzDdzVOIwtzgoUsRBHO3YncgADOGNWrH8H%2BsLQIgVlkl9Mh0gQvMS7urGr88iMN6yWIWghbig9jYJsAvtwUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDAbtUr6mJyXPCp2VUSrcAzDP42M4y1N%2B2I2QFCUn0uSA38Mi8mBBX8M1qT68Y5mwHCZYuOSgat4inmGCfZBzGkQCGts9O%2FGT8C9xmt5MEqi1W1%2FG4rJpWeS7FoO9Qdp2Kvl8ucdzcchR0NEgRkvenE0dzf5D7T8D5jtw5P%2BbMRztyGh7RJTsuH8xnZ0oJe6SXX5JLmAlwSL6KzyGREKp7j%2Fhdq99UP2coU0xQ3PtWAzMQJWk8GTWrxk3wkE1HTmQQPjUXezdafjkTMuKpwGxkEp78ad0DIauf1EQVpB7xeGQ4OM2VyX8jzQdbr1qYqqLTX56%2BskHFJ3dWUsnVhM1FYUpD3G%2BhS7vy37t%2Bw3Mxk0kzu9Mkf1HumwlDQKVudBee7JIcMNsC5Za78b6KvPBdwxVA2wisimoj%2BL43s82x2b2mSLDoxr2zAwNDUpUf81QKqoyPx0JZ5TcifLuaONLR3FNk73C3znOjNhR%2B5qCQIIoAfM1abxuPVuO8XDVnpV4yUf8lN0hJKYa2NtWFPOEK45CM%2FpzySaN%2Be4FKHmxQAzsySr%2Bv7qIdJEEHtHxNZtgbnw3JSTTIqW5vs97NVqB0sZdh27%2BeUtieMZVOBD7%2BsnTM1lYT6eSGQuba8irt6sJevSdGrYXC6YG3OOzMLHnxMkGOqUBMdRPc5XZkrzrU4H0EquVci6qUrnFzw8SHt%2FaJdy6bGUlubcYnLOgfpB6fgN25%2FFsRHqncP2J0Rq5fnyPxdVTQc43ZiyIEr8o8GTNZahqHd1zwnd9wRSEOcRjeKvw8j9712RZCbDvQd4ZUELdXU%2BsmemOBEzcYjFhxa9hI5lDXvhCDnCVjFlozm9RRj0LGEUTzoRBA4MHa%2BEue3t8kYvlgo3jw8l4&X-Amz-Signature=2e59b966ea0774d561ec75d998a4a0b2529e5ded37ec2db7d19b1be8ba4c294b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJIUSRZU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCNi7wcbzDdzVOIwtzgoUsRBHO3YncgADOGNWrH8H%2BsLQIgVlkl9Mh0gQvMS7urGr88iMN6yWIWghbig9jYJsAvtwUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDAbtUr6mJyXPCp2VUSrcAzDP42M4y1N%2B2I2QFCUn0uSA38Mi8mBBX8M1qT68Y5mwHCZYuOSgat4inmGCfZBzGkQCGts9O%2FGT8C9xmt5MEqi1W1%2FG4rJpWeS7FoO9Qdp2Kvl8ucdzcchR0NEgRkvenE0dzf5D7T8D5jtw5P%2BbMRztyGh7RJTsuH8xnZ0oJe6SXX5JLmAlwSL6KzyGREKp7j%2Fhdq99UP2coU0xQ3PtWAzMQJWk8GTWrxk3wkE1HTmQQPjUXezdafjkTMuKpwGxkEp78ad0DIauf1EQVpB7xeGQ4OM2VyX8jzQdbr1qYqqLTX56%2BskHFJ3dWUsnVhM1FYUpD3G%2BhS7vy37t%2Bw3Mxk0kzu9Mkf1HumwlDQKVudBee7JIcMNsC5Za78b6KvPBdwxVA2wisimoj%2BL43s82x2b2mSLDoxr2zAwNDUpUf81QKqoyPx0JZ5TcifLuaONLR3FNk73C3znOjNhR%2B5qCQIIoAfM1abxuPVuO8XDVnpV4yUf8lN0hJKYa2NtWFPOEK45CM%2FpzySaN%2Be4FKHmxQAzsySr%2Bv7qIdJEEHtHxNZtgbnw3JSTTIqW5vs97NVqB0sZdh27%2BeUtieMZVOBD7%2BsnTM1lYT6eSGQuba8irt6sJevSdGrYXC6YG3OOzMLHnxMkGOqUBMdRPc5XZkrzrU4H0EquVci6qUrnFzw8SHt%2FaJdy6bGUlubcYnLOgfpB6fgN25%2FFsRHqncP2J0Rq5fnyPxdVTQc43ZiyIEr8o8GTNZahqHd1zwnd9wRSEOcRjeKvw8j9712RZCbDvQd4ZUELdXU%2BsmemOBEzcYjFhxa9hI5lDXvhCDnCVjFlozm9RRj0LGEUTzoRBA4MHa%2BEue3t8kYvlgo3jw8l4&X-Amz-Signature=348f18d637910857ef206fa542857b6eae0b27957841de6a3c547c2c333eb002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
