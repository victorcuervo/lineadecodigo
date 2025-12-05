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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCY7XKZ4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T220101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClMQWD05tvqNqXBMwmToVHNBTik5VNjVPpbM2xrhPRvwIhAIx5JFyUBQvvNCWCaCC6a6XTyHzJGp7XXVoaeRXZxLGpKv8DCGYQABoMNjM3NDIzMTgzODA1IgyNu6dFub2kmZg55Toq3AOSbNHXzJ24%2BG2SQx91GZo2B1SxDqulzdM5QZ4VUHEcdDv8uEBWthFJAebJGjmY%2FugyjE2MTkKQtjulJzFZg7v4s7yYed1PhRjIfG3hyPqutAz%2B%2BqXO0IoKDZHiDQqz%2ByevZw66c6sSduuhOQf1%2FJDlZ04KZKe8Z6v6JwES8Br4RzixXCdgpTorWatWjZ1Fcxabkpa1xlZzMIGQIRnSqSEf26e5i6YHm1eJH58kRRiTGWNp%2BlB52wPCvZ%2FKKxzGl0RFmEgWtYb4Z5MdB7IJIAWDa1iiDC4oAkiJOfjvQz6HRcBjassmHN1QA8aam6uYcsDsUlDP2sw0sLP55gDOk9ZHabT%2FZfXqf2T1dS0QfsWDCNfcySb5OgqA7qAwUt%2BO4iMJaTXp%2FJJQfshLQjsEVwOwwPOCjFO12qW4zGAHYj1kMeh%2FOnFHNbCyJNzS3lon7kNg5sSuzrOm9lCeQ4q%2FSPmdYRlUhfk5rexV04Gtv%2BBol0Kv2lQgoEkUNDOmxLDRuuBjk7Lgyh0%2BoZmtI6C0ZlZq%2B%2B35gHrKY6ABua22YPCq18yAmG7UnqvM4CQ3NZpKCRUN5ISJukOoK9rWBDHiqVeYML3E%2FxHceyhG5OsCJCkWp%2B1s%2FXAnV5jqHT%2BkhzDwmM3JBjqkAYjDU6vKTCBnVLKCAgWuP6nfZbXxR3njhE2u6magtCDiuMUViU7WK%2FOUeiZHNI%2BIeM4JgjxQEAZx7RaUQs5xydAsGKBad%2FUvJ%2FhDRhMPnpitFr30Ai5KEmRLicbXY27%2BEpvJ8nkmfrw%2BA%2BY2GXmt7Z1kSaYU0FnOc6zanEvBYKxHr2fiAENju3MBKjo1G6QWFgIcuYNFIPCFGbslz9gZNO7S7n7W&X-Amz-Signature=2ce3c9dcfa0fc46895cf265ed9bd3c6d24d94d2eb473fc509079a9d4a192d982&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCY7XKZ4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T220101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClMQWD05tvqNqXBMwmToVHNBTik5VNjVPpbM2xrhPRvwIhAIx5JFyUBQvvNCWCaCC6a6XTyHzJGp7XXVoaeRXZxLGpKv8DCGYQABoMNjM3NDIzMTgzODA1IgyNu6dFub2kmZg55Toq3AOSbNHXzJ24%2BG2SQx91GZo2B1SxDqulzdM5QZ4VUHEcdDv8uEBWthFJAebJGjmY%2FugyjE2MTkKQtjulJzFZg7v4s7yYed1PhRjIfG3hyPqutAz%2B%2BqXO0IoKDZHiDQqz%2ByevZw66c6sSduuhOQf1%2FJDlZ04KZKe8Z6v6JwES8Br4RzixXCdgpTorWatWjZ1Fcxabkpa1xlZzMIGQIRnSqSEf26e5i6YHm1eJH58kRRiTGWNp%2BlB52wPCvZ%2FKKxzGl0RFmEgWtYb4Z5MdB7IJIAWDa1iiDC4oAkiJOfjvQz6HRcBjassmHN1QA8aam6uYcsDsUlDP2sw0sLP55gDOk9ZHabT%2FZfXqf2T1dS0QfsWDCNfcySb5OgqA7qAwUt%2BO4iMJaTXp%2FJJQfshLQjsEVwOwwPOCjFO12qW4zGAHYj1kMeh%2FOnFHNbCyJNzS3lon7kNg5sSuzrOm9lCeQ4q%2FSPmdYRlUhfk5rexV04Gtv%2BBol0Kv2lQgoEkUNDOmxLDRuuBjk7Lgyh0%2BoZmtI6C0ZlZq%2B%2B35gHrKY6ABua22YPCq18yAmG7UnqvM4CQ3NZpKCRUN5ISJukOoK9rWBDHiqVeYML3E%2FxHceyhG5OsCJCkWp%2B1s%2FXAnV5jqHT%2BkhzDwmM3JBjqkAYjDU6vKTCBnVLKCAgWuP6nfZbXxR3njhE2u6magtCDiuMUViU7WK%2FOUeiZHNI%2BIeM4JgjxQEAZx7RaUQs5xydAsGKBad%2FUvJ%2FhDRhMPnpitFr30Ai5KEmRLicbXY27%2BEpvJ8nkmfrw%2BA%2BY2GXmt7Z1kSaYU0FnOc6zanEvBYKxHr2fiAENju3MBKjo1G6QWFgIcuYNFIPCFGbslz9gZNO7S7n7W&X-Amz-Signature=f5e6948f0e602ef4805a00680ec84986e4c536274432f9bf71ce896fe42b21c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
