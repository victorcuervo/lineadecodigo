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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TG2ZQWP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T094452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIHvceo%2BzghLgU1ud7VOs%2BvJt0gTKiz%2BzL1R5EpdNA3OrAiEAuFc%2FdcejAIhFe9S2BhishwuGEKbHrsnbHCbRHa0d77wq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEs9nu4PXxJgi9pUgSrcA2GiwBwGLpR8wshomE7ojTk9IUjmJ2aUVLGuwGFJ9VP%2FxaWyX7tVpPRzKq4%2FDSSvK5Qf%2BnDGb4a4rPPXA8Vz%2BfdH%2F9b9Ldo4aEMmJxvL3k7PaKCGh240T%2BGXC0%2FlKtPm1wtoYzcRv8ZkORL%2B78eo%2BcjGvHSkRcvdm4Gv66397qxQL1MhWwu%2B4zWr2wEl64BYbHZcmU0ygMDAeCklmSv2M38ILElEc1UoQ1LEd%2FBgeRSbKqvF4IUkV4Uw43zsjraMBxeOTbO1KNVHjxodeocKwNFrPcVYJtiFeTmcjOANQRYl988X8GIfpBKyF%2FaY4tlod0vJZW5q0kWtj1Wl3Fe1%2Fw1LGXNWoMzJQhWj9zCjgPErJ1I8xguUooS8LnEMoPvPX9ysdZ%2FCzn%2F7wFts4UkR4NDa42xtGmV%2Fg9RwvnsRMtw0wZ7YI4qyr4gIWxS2xZ5XStgUnbuUfPM%2FhZTx22NzLrqf1OoWoC0rn5dNHmdngZy%2BXysZuje%2F9conRtiMpi32aJ0XUwL5o8bKhwKOlqUWiMIJEt2LDL7rjkbaKeKuMOQr7ii5DK5wBsyou9KxJXlAOSS4WfoZ2H%2B%2F0%2FW8SWx%2FvaQ54nKil6uwmGxbjRK5q%2FaVfQq17kxpraur8Gv7MMSqxckGOqUBJuEkOkMkwUYmG1lONavuqOoO9znLsdlU2XZpRw%2BFmpR8sSUpVttF1HKX0nGwBGN%2B%2BrZZaL%2F%2BJdDFRXykAZH96hdD6ZoPQ8lfetYeRfg27y5ksFka0xNm3TwtPBuS0vyuK4ybgZb9hSBZoPpSfFD%2BFs7ENrWdywit8kYO17pGBF5hCyklHenjbAhV5q5jQKdXpY55VEDVssIc776oil4U6KaNiht0&X-Amz-Signature=295314fc610757ba7dc3e396cc755accf3059681deb263b29a537f7a6efbc3b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TG2ZQWP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T094452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIHvceo%2BzghLgU1ud7VOs%2BvJt0gTKiz%2BzL1R5EpdNA3OrAiEAuFc%2FdcejAIhFe9S2BhishwuGEKbHrsnbHCbRHa0d77wq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEs9nu4PXxJgi9pUgSrcA2GiwBwGLpR8wshomE7ojTk9IUjmJ2aUVLGuwGFJ9VP%2FxaWyX7tVpPRzKq4%2FDSSvK5Qf%2BnDGb4a4rPPXA8Vz%2BfdH%2F9b9Ldo4aEMmJxvL3k7PaKCGh240T%2BGXC0%2FlKtPm1wtoYzcRv8ZkORL%2B78eo%2BcjGvHSkRcvdm4Gv66397qxQL1MhWwu%2B4zWr2wEl64BYbHZcmU0ygMDAeCklmSv2M38ILElEc1UoQ1LEd%2FBgeRSbKqvF4IUkV4Uw43zsjraMBxeOTbO1KNVHjxodeocKwNFrPcVYJtiFeTmcjOANQRYl988X8GIfpBKyF%2FaY4tlod0vJZW5q0kWtj1Wl3Fe1%2Fw1LGXNWoMzJQhWj9zCjgPErJ1I8xguUooS8LnEMoPvPX9ysdZ%2FCzn%2F7wFts4UkR4NDa42xtGmV%2Fg9RwvnsRMtw0wZ7YI4qyr4gIWxS2xZ5XStgUnbuUfPM%2FhZTx22NzLrqf1OoWoC0rn5dNHmdngZy%2BXysZuje%2F9conRtiMpi32aJ0XUwL5o8bKhwKOlqUWiMIJEt2LDL7rjkbaKeKuMOQr7ii5DK5wBsyou9KxJXlAOSS4WfoZ2H%2B%2F0%2FW8SWx%2FvaQ54nKil6uwmGxbjRK5q%2FaVfQq17kxpraur8Gv7MMSqxckGOqUBJuEkOkMkwUYmG1lONavuqOoO9znLsdlU2XZpRw%2BFmpR8sSUpVttF1HKX0nGwBGN%2B%2BrZZaL%2F%2BJdDFRXykAZH96hdD6ZoPQ8lfetYeRfg27y5ksFka0xNm3TwtPBuS0vyuK4ybgZb9hSBZoPpSfFD%2BFs7ENrWdywit8kYO17pGBF5hCyklHenjbAhV5q5jQKdXpY55VEDVssIc776oil4U6KaNiht0&X-Amz-Signature=482c24388c577e93f04f5afac889d32613acd2f919b9720424ed8d98f44c3848&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
