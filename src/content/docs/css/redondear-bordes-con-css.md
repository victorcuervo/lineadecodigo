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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ7IPQB7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T180740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHW2vuzLf8zKhhbvC78r50dKenOtFrT3gSJ4lwvEquTQIgMYEiaVAF0gzp5YWL6JGb3wHpd%2BNeFawmK1Efzz2yy2gqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKrzBWkFcqIJ70fZiSrcA%2FoxSIY6u7gDFt%2FDdVtC8SSl39k6hbcjzTuhDw7vnWn%2Bd7RmDhulIjEt%2B0Vc3EB8p4WhswHlU7fqgvbRpCQxGAm1t6JF6yeAI1YqTQz8TZ6484G0UyzkkQ869owSLeebjRo%2FJC%2B3gEfiO369CyqMLqnl3P8oQoJkpUhY1XAbBZ1XcE4F%2BetSBqJbNWFBBog1qbmYcGJ1%2F9pZHrnAEhfVOqSJC6YGcpGll3MIvGVl5UE6sstMxRgkqvnYz1BzT0vI%2BbFvxmTH6ozuDENeD4Jdu6hx53fo0LTi9oWWt71G6YLHlK7yibAk72z5g6gm2fVqCNxNIbunCrp55UHuqFABmvu1Oxiii2hcdwtJzsiRdnutil7r680njPHxOJxncUXOzUKpqE53p92q%2Bq3xxGpWuYWYimkvRsnPLr7Ovyy%2BiciuBQmGk%2Fwet7w6sGAx%2FTyVSSJt1dqrj4kLJcPKPgiMMGDUaBTB7W4r0NlKVzWY3QODyuAk%2BtgxtMQR%2BkTn1KWswJul7V1lDRRWRyRcXY1JtGEiE4RhNcr5GZQWU%2FgPh9sShYUV7hG%2FA0B9AN96GO0dTHZdg8tpo4%2FZm%2Fzvb53Aw1YOnNbxXsTNAWSloK2zb2SmfaZ6L3RCMGQe43ZGMIe91skGOqUBIUSgMEV0seXCMshnNpgDXztJKqUcYVMkRFO6npjbVhZunN2qN05FVJYZQM9k4NUvHVsrwgLZsNCTkPsEDqTMWst4MDQ7foFgSsNAtmCJDU5TVBCYf%2B2XerT7%2FxK5bj%2BRZC7lcQLdqSlc9fA%2BWWW9RO1hdGbrWE5jSTkGi2N3U5FW%2FpTO%2FA%2Frfwa%2BbAwdFcyNvXAPjz6bKwKvzJamW6pz0X%2F88GCG&X-Amz-Signature=c4a0c911ff61d2edbfcb9d562bddde4e61b9804990dc81d745c8a6ae59be39b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ7IPQB7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T180740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHW2vuzLf8zKhhbvC78r50dKenOtFrT3gSJ4lwvEquTQIgMYEiaVAF0gzp5YWL6JGb3wHpd%2BNeFawmK1Efzz2yy2gqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKrzBWkFcqIJ70fZiSrcA%2FoxSIY6u7gDFt%2FDdVtC8SSl39k6hbcjzTuhDw7vnWn%2Bd7RmDhulIjEt%2B0Vc3EB8p4WhswHlU7fqgvbRpCQxGAm1t6JF6yeAI1YqTQz8TZ6484G0UyzkkQ869owSLeebjRo%2FJC%2B3gEfiO369CyqMLqnl3P8oQoJkpUhY1XAbBZ1XcE4F%2BetSBqJbNWFBBog1qbmYcGJ1%2F9pZHrnAEhfVOqSJC6YGcpGll3MIvGVl5UE6sstMxRgkqvnYz1BzT0vI%2BbFvxmTH6ozuDENeD4Jdu6hx53fo0LTi9oWWt71G6YLHlK7yibAk72z5g6gm2fVqCNxNIbunCrp55UHuqFABmvu1Oxiii2hcdwtJzsiRdnutil7r680njPHxOJxncUXOzUKpqE53p92q%2Bq3xxGpWuYWYimkvRsnPLr7Ovyy%2BiciuBQmGk%2Fwet7w6sGAx%2FTyVSSJt1dqrj4kLJcPKPgiMMGDUaBTB7W4r0NlKVzWY3QODyuAk%2BtgxtMQR%2BkTn1KWswJul7V1lDRRWRyRcXY1JtGEiE4RhNcr5GZQWU%2FgPh9sShYUV7hG%2FA0B9AN96GO0dTHZdg8tpo4%2FZm%2Fzvb53Aw1YOnNbxXsTNAWSloK2zb2SmfaZ6L3RCMGQe43ZGMIe91skGOqUBIUSgMEV0seXCMshnNpgDXztJKqUcYVMkRFO6npjbVhZunN2qN05FVJYZQM9k4NUvHVsrwgLZsNCTkPsEDqTMWst4MDQ7foFgSsNAtmCJDU5TVBCYf%2B2XerT7%2FxK5bj%2BRZC7lcQLdqSlc9fA%2BWWW9RO1hdGbrWE5jSTkGi2N3U5FW%2FpTO%2FA%2Frfwa%2BbAwdFcyNvXAPjz6bKwKvzJamW6pz0X%2F88GCG&X-Amz-Signature=0aa2011177c0e230df9230dc24ff463397bf5dc6adbcada0f5bebf863362e27c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
