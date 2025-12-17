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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBGFTS7T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FArkIQBBuQYHoJ%2F6Q%2BptIUEgpnxXTyPIQAQg0kXVgLAiARmPz99wbV2ELQBDs6NPnq6RHVShLNLZyOsjZAXdSufir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMTcI2gslS6rJQD9whKtwDBdiJTNHTBIad8JSqMIHQdzeDg6gPvb%2B%2FQirUozbj1g2oX3fW%2BRIYrgHH4CL6ZtmLEAY%2BLEiqac8zohEO5S7etc1kUcifKPoMDua6tc97NpvfZnGf2wMve5hBDi%2B1Z24vCIN5eW6OTaXTebA1xNlL3wDnbiJygPkQXgA4HNOvoCWhj8hvopD22PmyjMbHMoRf%2FojbLVYBCprm%2F4z%2FwTvMmSivGufK4S2%2BCqy66YVxeOoe74ZtW8AW0Av6WtETjgiv1QGvdLU9HQFT%2BasYqvaD6j0Nt7w9sa2kJKgHkrFZbXYj2uLu11l9EGBHaRrDAQpmm61vIpIRGRGJXPcSWbH5CAqoNfIe4eGKAh2RRsANCZHau7Oau7EJduQJT6Vi5GPajFO%2BZTOxzg31u04UHdKNpUefwfG8EL1Xe1Q4KuLsRDpxrNQDPWjsgVdPo0to8L%2B%2FkPe8vIcLhH%2FqlEYrlHmQs%2FxrFH3W0WoCuBmeCsEowyQDlJdiFih78R2ZbCJ5tAafABBB77cQ3ReZqJQhqxREk5tInHXv%2FhBYuXg3dGQmbnYrYJcxcsJ5Sg2sJy7WD6M%2BjVcqGYmHjgufYd3lJdcPwsHBgsdO6%2BmiGYlOZDVnX8eIVdTwWMR2bxIL6gMwsYOJygY6pgEwyApDeW2LzTLUzapbP63SbVHoTW7lbLrlYPOAbSft8%2BAo1jLnLk%2FViRSqszk2ZL1H%2BOBlPXhoGVgfl4jNMQE43e4%2BXIVxnBoWFXTGYt%2FBJmcekbej2xshLZQJjlAEU3k4%2BKico0Fr8hn2SsEdy6IoX74QXXFY2paazOm1fcNmPEzJeIU3vz9kLWZQctChgD5O4aa8oF2pnA%2FBQqN7ILy3ce2RJoo9&X-Amz-Signature=9918505fbeea8b4543727819a7a074dc68654f06b73858df34308d1171c0575a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBGFTS7T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FArkIQBBuQYHoJ%2F6Q%2BptIUEgpnxXTyPIQAQg0kXVgLAiARmPz99wbV2ELQBDs6NPnq6RHVShLNLZyOsjZAXdSufir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMTcI2gslS6rJQD9whKtwDBdiJTNHTBIad8JSqMIHQdzeDg6gPvb%2B%2FQirUozbj1g2oX3fW%2BRIYrgHH4CL6ZtmLEAY%2BLEiqac8zohEO5S7etc1kUcifKPoMDua6tc97NpvfZnGf2wMve5hBDi%2B1Z24vCIN5eW6OTaXTebA1xNlL3wDnbiJygPkQXgA4HNOvoCWhj8hvopD22PmyjMbHMoRf%2FojbLVYBCprm%2F4z%2FwTvMmSivGufK4S2%2BCqy66YVxeOoe74ZtW8AW0Av6WtETjgiv1QGvdLU9HQFT%2BasYqvaD6j0Nt7w9sa2kJKgHkrFZbXYj2uLu11l9EGBHaRrDAQpmm61vIpIRGRGJXPcSWbH5CAqoNfIe4eGKAh2RRsANCZHau7Oau7EJduQJT6Vi5GPajFO%2BZTOxzg31u04UHdKNpUefwfG8EL1Xe1Q4KuLsRDpxrNQDPWjsgVdPo0to8L%2B%2FkPe8vIcLhH%2FqlEYrlHmQs%2FxrFH3W0WoCuBmeCsEowyQDlJdiFih78R2ZbCJ5tAafABBB77cQ3ReZqJQhqxREk5tInHXv%2FhBYuXg3dGQmbnYrYJcxcsJ5Sg2sJy7WD6M%2BjVcqGYmHjgufYd3lJdcPwsHBgsdO6%2BmiGYlOZDVnX8eIVdTwWMR2bxIL6gMwsYOJygY6pgEwyApDeW2LzTLUzapbP63SbVHoTW7lbLrlYPOAbSft8%2BAo1jLnLk%2FViRSqszk2ZL1H%2BOBlPXhoGVgfl4jNMQE43e4%2BXIVxnBoWFXTGYt%2FBJmcekbej2xshLZQJjlAEU3k4%2BKico0Fr8hn2SsEdy6IoX74QXXFY2paazOm1fcNmPEzJeIU3vz9kLWZQctChgD5O4aa8oF2pnA%2FBQqN7ILy3ce2RJoo9&X-Amz-Signature=04951db332f6465c8bb56eb7008e1923e0ea13428175f1c4229242c26c698638&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
