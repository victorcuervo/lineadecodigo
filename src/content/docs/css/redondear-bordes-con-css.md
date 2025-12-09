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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTEQXPFE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T041123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSsTmYzgge9c5NlD52Dxs5B%2FPMAw%2FXnli4JIJ0WqhqzAIgMWBxubmFEDmgpfql6K%2BXKaoknlGSS%2Bj5D2VLECput%2FkqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGYxQOFb5a3z1QJz8ircA9qndKoKHgehyaaPgrBDayn%2BogDDuyA6lVVCs6IY7zWBVZypg%2BnHcJ4Dhd0F%2FFXjdKr%2FMAPMdR4v3VxVRmdxdVjYYzUPlwGwvVk5sNeFMWJF48gmn%2Fgcz27hU7tDKt%2FbYY%2F3QXKlr0Ht9iCmOTCQ6DWFCv04YKZtmfufA88bh3YFeT3IR6cr5CITxwdtSEeJQ11TE01ViC5uenZgYrkY%2BK%2BXSPUSf6BD7JKF0Xxf8DDinMM%2BWJQGAOt9UNJXyFR7yfcZUGdmB0%2F9E%2B8nZ%2BT7ROaIfOyLFyBMhB2Ax%2BpFT48b2Z7OZo%2FRPx%2FTppTNiqfQvT%2BJ5Yez9BRW9q46Y1OeGdyUic6lvaV9Uu73RuUnAagfzN7k%2FGFug5kGxQ7Vzonm0jgu3CDCWlsZPkSZi2zP9t94R1Ub0UWT0EV75gVfWbWmgksMgs%2FJ2wjWqf6KlLvlX%2FDZVsFDv2xcEzESPcoZrAnwSXK%2BtH3vZODWymGw%2FsY42GhXxiZyfox%2FNS%2FViGSRWt7NBMl4U3JBkEWgoob0PvP18OzMXySqPBJM1h7bwDCa7cJbY5N%2Fzzbcx1P1%2BSxep7OWZZPoJEY1XxZucht2LmfCRanfdJF5%2BliLa1ZjiiO6wiWlYW233pAXIrY7MIOu3skGOqUBRdfZy4XybwWr9Rxui%2BKmqfHE%2FNljQntQQj%2FZ6H037g8STHx7WjsfjW2NMe%2BNQ3FVjUFK7OqKo6Iw3eb7JL%2B1o8QUa5%2BhdgcPawn%2BW8lck2MxCM1Jy3%2BXiCupVqTOsQTMMMQ4vHE8Vgl7ExT9nJPFs%2B2EkBZXr2GyjF1ac8yUSOF4rmsAb1LdsllzLnTS2g21KYELtjSKLp%2FPqz9pW8KO353GIBzi&X-Amz-Signature=e3f47dbffbea51bfa660a5cf97f6679646aad723d08f13c3cb7c49ab3ef36c73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTEQXPFE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T041123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSsTmYzgge9c5NlD52Dxs5B%2FPMAw%2FXnli4JIJ0WqhqzAIgMWBxubmFEDmgpfql6K%2BXKaoknlGSS%2Bj5D2VLECput%2FkqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGYxQOFb5a3z1QJz8ircA9qndKoKHgehyaaPgrBDayn%2BogDDuyA6lVVCs6IY7zWBVZypg%2BnHcJ4Dhd0F%2FFXjdKr%2FMAPMdR4v3VxVRmdxdVjYYzUPlwGwvVk5sNeFMWJF48gmn%2Fgcz27hU7tDKt%2FbYY%2F3QXKlr0Ht9iCmOTCQ6DWFCv04YKZtmfufA88bh3YFeT3IR6cr5CITxwdtSEeJQ11TE01ViC5uenZgYrkY%2BK%2BXSPUSf6BD7JKF0Xxf8DDinMM%2BWJQGAOt9UNJXyFR7yfcZUGdmB0%2F9E%2B8nZ%2BT7ROaIfOyLFyBMhB2Ax%2BpFT48b2Z7OZo%2FRPx%2FTppTNiqfQvT%2BJ5Yez9BRW9q46Y1OeGdyUic6lvaV9Uu73RuUnAagfzN7k%2FGFug5kGxQ7Vzonm0jgu3CDCWlsZPkSZi2zP9t94R1Ub0UWT0EV75gVfWbWmgksMgs%2FJ2wjWqf6KlLvlX%2FDZVsFDv2xcEzESPcoZrAnwSXK%2BtH3vZODWymGw%2FsY42GhXxiZyfox%2FNS%2FViGSRWt7NBMl4U3JBkEWgoob0PvP18OzMXySqPBJM1h7bwDCa7cJbY5N%2Fzzbcx1P1%2BSxep7OWZZPoJEY1XxZucht2LmfCRanfdJF5%2BliLa1ZjiiO6wiWlYW233pAXIrY7MIOu3skGOqUBRdfZy4XybwWr9Rxui%2BKmqfHE%2FNljQntQQj%2FZ6H037g8STHx7WjsfjW2NMe%2BNQ3FVjUFK7OqKo6Iw3eb7JL%2B1o8QUa5%2BhdgcPawn%2BW8lck2MxCM1Jy3%2BXiCupVqTOsQTMMMQ4vHE8Vgl7ExT9nJPFs%2B2EkBZXr2GyjF1ac8yUSOF4rmsAb1LdsllzLnTS2g21KYELtjSKLp%2FPqz9pW8KO353GIBzi&X-Amz-Signature=fbc3c035c86f435c4c520b3dba87f4fc2ef3d658d89861ee0fa8a886bfca83f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
