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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZZREW4Y%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T022237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDL2sMFDReuAOZ62OxfI0c7fVe0RgAd%2BIMSKTvuA0Lb%2FAiAZufCaDY2u7DmJUtvfrPh4HKeegVagTQcI5DrlXBCooir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM0ZU2HJCaCQsPAyrUKtwDW1YPwdfAqpV8CR%2Bsc5TLUZcZOrioxJ7hr9klBJ4LAILCZX0fDBG4gDyLgsF1Vzl6A5uPmZw5zUcmlgD9csdA1IQn7VHRwAPFjjqQtGgyt3jjYeYOh360Z%2BA1hAyPB0bcl7qYS5HmEKSptmaozUU4MEdJ%2F2RT255e9M5m68gOYHPIoJV4KqY52WEx1CALd014WFtfvyV7tKR%2BcRpzkyN1UTTrohI5FRmwyKvmqQY7ugHTXuwtAU4gzPkd7cbqWZssImp%2BinVnt1TaOF7qqbjw%2BW1y0eWGWr%2FMCjDTBAhAI74DM%2BPjp%2BB0o5lMW9HzBZ%2Flw7HVJc0TUvyYLTbS4cTXVyyPe3QF9TUALRxnIK1gsjwYqyhspY%2F%2Fub6jPzbbyNS1bo43jlexukAbbyY81uh%2B4RJ87LVgQaLqktJ%2B5ut5YNtwmxbukoNAaFZxx6Vf7yb5%2FdDSkrhB0%2Bq4Jf0rYv2B3i3klzC%2Be48Gava27FmF%2BZc2U4N%2B16Y2QK2xhfQDA5YAjoPsAq%2Bo7q4GqkKWtyZ3Lio0npc61L1Fh4FGxBHRFokRbO2CI%2B9ppvdZt%2BcC0DKtoR6ft5L%2B8fMS12q7LmDAWLT7fg67Bw2txTGJTcKtVIqQfoqzi3co7Ax%2BJN0w0IzIyQY6pgEJZl4%2FeosnRfgBoV39IF0FzwhZgvoNXFYEv0AYQRMKYsJEpTaZ%2FrBgXW7qAbUd8Emrm56yVJUucheiUY%2Fx1%2FsCkTCMcRhBkX8zA3GKM0YItDVNrKMHros49L2jrjEjgkakeMYRflhIwb1hvoiLW%2Fa7r0X7DaSlE8Q5KNCxgS1gnycjYN5mas5IZlEpYufZH1C%2BK%2B8KlLe32nEEJFSg14%2FQiJWJafAQ&X-Amz-Signature=ec6a17ddff9d5ecdea0701489426fec494ca374493258c6525cfe652a270785a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZZREW4Y%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T022237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDL2sMFDReuAOZ62OxfI0c7fVe0RgAd%2BIMSKTvuA0Lb%2FAiAZufCaDY2u7DmJUtvfrPh4HKeegVagTQcI5DrlXBCooir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM0ZU2HJCaCQsPAyrUKtwDW1YPwdfAqpV8CR%2Bsc5TLUZcZOrioxJ7hr9klBJ4LAILCZX0fDBG4gDyLgsF1Vzl6A5uPmZw5zUcmlgD9csdA1IQn7VHRwAPFjjqQtGgyt3jjYeYOh360Z%2BA1hAyPB0bcl7qYS5HmEKSptmaozUU4MEdJ%2F2RT255e9M5m68gOYHPIoJV4KqY52WEx1CALd014WFtfvyV7tKR%2BcRpzkyN1UTTrohI5FRmwyKvmqQY7ugHTXuwtAU4gzPkd7cbqWZssImp%2BinVnt1TaOF7qqbjw%2BW1y0eWGWr%2FMCjDTBAhAI74DM%2BPjp%2BB0o5lMW9HzBZ%2Flw7HVJc0TUvyYLTbS4cTXVyyPe3QF9TUALRxnIK1gsjwYqyhspY%2F%2Fub6jPzbbyNS1bo43jlexukAbbyY81uh%2B4RJ87LVgQaLqktJ%2B5ut5YNtwmxbukoNAaFZxx6Vf7yb5%2FdDSkrhB0%2Bq4Jf0rYv2B3i3klzC%2Be48Gava27FmF%2BZc2U4N%2B16Y2QK2xhfQDA5YAjoPsAq%2Bo7q4GqkKWtyZ3Lio0npc61L1Fh4FGxBHRFokRbO2CI%2B9ppvdZt%2BcC0DKtoR6ft5L%2B8fMS12q7LmDAWLT7fg67Bw2txTGJTcKtVIqQfoqzi3co7Ax%2BJN0w0IzIyQY6pgEJZl4%2FeosnRfgBoV39IF0FzwhZgvoNXFYEv0AYQRMKYsJEpTaZ%2FrBgXW7qAbUd8Emrm56yVJUucheiUY%2Fx1%2FsCkTCMcRhBkX8zA3GKM0YItDVNrKMHros49L2jrjEjgkakeMYRflhIwb1hvoiLW%2Fa7r0X7DaSlE8Q5KNCxgS1gnycjYN5mas5IZlEpYufZH1C%2BK%2B8KlLe32nEEJFSg14%2FQiJWJafAQ&X-Amz-Signature=12410a8bd4015d6012f9aaa5c12bbb2a308b0c823c29a48b0fc8f78b953780ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
