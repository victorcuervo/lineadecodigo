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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBN3FYT5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKdGhb8R3XEQv6KyUngy1gZqJUx2RhGpr%2FpiyHNtKr9AiAeY2QAAb9MmUha6zlUL9lKE0Ic2CIoM%2FwEEhi3dTmk6Sr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMHl86Aa8lHEhFbdWyKtwDtAvDvC7YoirlSjtW8oK6Fd4e103tzOJU35XpcE6E%2B42fDO%2BFPTg5BGsiRVA2kYObEaUO6eeLD8VwCSdh%2FI0k1RfFtbnCUOsTwoF2QEV%2BcYW%2FbgYULbrSzy4dOEVTtMg2L09T8AmdO74XwoPOmD39VibL54qDZd8yN5uZ%2F8k5ALTN51uLPjVVirxYEEaKwbL6fQwHYSHRzm%2BW3XLm%2BJYhwW0zABctBDnYjjXhCDQyz2kg%2FejFth7IW6MhQTIOJvu4PtznU6Jrmp46FOvk9ZSFHRkyTphAIBz27vxnqUX1AMrY8KJlsKKwfR0rz3rS%2F0hh%2B7e6fUqgPaSwWkeEVOIJHACQZ9GnoDKjC2YIB0jU3txtZ5p621J0rLALE0ss2OpbTwJptAoYUYOKpkXwYzAKEEyYZ8mz3MYDWWSwdxBKwInWDehALC0pzge4TWy0GO6OYHsEb9%2BYONpIjOf9c716X%2BQqsnwhtac%2F1baN95OsSgwHTJNwJ37BICUme0lUSNUU3Pn4WQ%2FUnbmY8fAtaIJ68eNszGO6Yefn%2BRq%2FawNjI4qKAMkgqr08bIjuVmZZHdfT1259ZpGZR1gazQF65%2B9SGSRUtC7mERORjXDZDkKbQQqC3%2BQNaarUkhBZLPQw4p2JygY6pgF3uQvXcF3pDNHWISW9iY7J0iBLayQWbObpvztozydTOJpsygbDxQajGcLr7MkSypaFLnOjUXfIjUaO1af93VTCrrkT3b5tfu%2FVfz%2F9acC9%2FyPNc97I8ERIpz1BwOESggAs6cLb1qfgh1g3dsHnAsoKsFOk%2Fi8hgR8WiP4lVCn1TYx%2Fom1Xy74d0Qufpm3ncLpjch9LUx6jxbWoxDG3BGCRmZICyKob&X-Amz-Signature=33993f7d39aa3ceae244768db2e529fddd7583c76e4fb82f75b29c60a8d4a9f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBN3FYT5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKdGhb8R3XEQv6KyUngy1gZqJUx2RhGpr%2FpiyHNtKr9AiAeY2QAAb9MmUha6zlUL9lKE0Ic2CIoM%2FwEEhi3dTmk6Sr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMHl86Aa8lHEhFbdWyKtwDtAvDvC7YoirlSjtW8oK6Fd4e103tzOJU35XpcE6E%2B42fDO%2BFPTg5BGsiRVA2kYObEaUO6eeLD8VwCSdh%2FI0k1RfFtbnCUOsTwoF2QEV%2BcYW%2FbgYULbrSzy4dOEVTtMg2L09T8AmdO74XwoPOmD39VibL54qDZd8yN5uZ%2F8k5ALTN51uLPjVVirxYEEaKwbL6fQwHYSHRzm%2BW3XLm%2BJYhwW0zABctBDnYjjXhCDQyz2kg%2FejFth7IW6MhQTIOJvu4PtznU6Jrmp46FOvk9ZSFHRkyTphAIBz27vxnqUX1AMrY8KJlsKKwfR0rz3rS%2F0hh%2B7e6fUqgPaSwWkeEVOIJHACQZ9GnoDKjC2YIB0jU3txtZ5p621J0rLALE0ss2OpbTwJptAoYUYOKpkXwYzAKEEyYZ8mz3MYDWWSwdxBKwInWDehALC0pzge4TWy0GO6OYHsEb9%2BYONpIjOf9c716X%2BQqsnwhtac%2F1baN95OsSgwHTJNwJ37BICUme0lUSNUU3Pn4WQ%2FUnbmY8fAtaIJ68eNszGO6Yefn%2BRq%2FawNjI4qKAMkgqr08bIjuVmZZHdfT1259ZpGZR1gazQF65%2B9SGSRUtC7mERORjXDZDkKbQQqC3%2BQNaarUkhBZLPQw4p2JygY6pgF3uQvXcF3pDNHWISW9iY7J0iBLayQWbObpvztozydTOJpsygbDxQajGcLr7MkSypaFLnOjUXfIjUaO1af93VTCrrkT3b5tfu%2FVfz%2F9acC9%2FyPNc97I8ERIpz1BwOESggAs6cLb1qfgh1g3dsHnAsoKsFOk%2Fi8hgR8WiP4lVCn1TYx%2Fom1Xy74d0Qufpm3ncLpjch9LUx6jxbWoxDG3BGCRmZICyKob&X-Amz-Signature=6405379b1438de709efd34f35bde1479d65fbd08f77c87ccd16867db547e9331&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
