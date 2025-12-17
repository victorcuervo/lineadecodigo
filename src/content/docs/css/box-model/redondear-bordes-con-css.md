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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJYNLPHH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6geiDsEa9LOqZjh1vSvE26TTb0qx6LJ1Z4vWSKgPwyAiAfHx7FtmLtgq%2FVRipyyu9J8KcddoM8w0XvtC3t7YYD3yr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMzfroR0OjUO%2FoQ2S9KtwDCbnhvzP%2BfbfOcsKIkIIZZPdqdB82i0PJYC96OOF3SWPgKZ8uD212jMeJo1bSoM7JS26c4DzAGpsBoTUjCfoS3cwlQAarS%2FTDOvb1rgsAIUsVNXmio3FLF36bTwj436GGj87krDOUm%2BCld5hZ2Q2s%2Ff%2FmWjf3LXBDligdo7Bt2vzXWZAh%2BeMem4hFsle%2F73hjBxzpvtDf0%2B%2FAKIjVMkqrSAtFtblsnTd8ZS5QrfV4pD7YwrCFYN64na2%2Fc423%2FrIHZMoaM3tE88n7hnuvnp7ccnaDuCcrVuoEA9mx8flD85UQcMXSBufgo%2FDy4nrwpCpK8MRfzL8MfpUTr8DpbJzQ2lBWhOR2kuIjT49FgOevrE9xz9Pgf7urTMsugt4epWwglfymCDFBuox3VDuTSCiHOdCoIHugwAKFByP%2BqzgUIoJsUMQZ9ebNn72L8P6E%2BBUg%2BeDvX%2FU8ygzcB1EGFHfIs0YdDOqMtKPLXLGnMjXtTUxrjZaHVBXIzIkmHVb%2F1sqXHNDm%2B3urAwx3DG8Ejl1sBJub13%2BoqkfmhXxUx4LfmIl6sr9%2FRbbZQBuJkXROfcMdOyJ6EJdxtpdX4RmnJshjjKc4n0VpPvYD7k0odv3iCWGwbHJncQ33Tmvy5qUwhNKJygY6pgFlhhCdmd9CRDlMvmz1ALWeCmjzYDGcaD3XfG6JghtFMyrqoPJuq6wTl8VJJdYOJbz3%2FKjjZAW%2BN%2B6xQiT2JE01BVPfrOChdYEEQ1pmOx0A0j0LtOh3HS4dERv%2BAmtayqyd98LR0ikrJRWoEFwMHQPvYc6Dy6PxIdi%2BKzAXkiWUJctwRepogRIrkzcyvTOF7SoPeST%2Bj8HNi91C2VWZ7Tps%2BKk3KLeU&X-Amz-Signature=671701719fc8051e59da7616f369d720fffdd565c19ad6bd037398ce902ce031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJYNLPHH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6geiDsEa9LOqZjh1vSvE26TTb0qx6LJ1Z4vWSKgPwyAiAfHx7FtmLtgq%2FVRipyyu9J8KcddoM8w0XvtC3t7YYD3yr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMzfroR0OjUO%2FoQ2S9KtwDCbnhvzP%2BfbfOcsKIkIIZZPdqdB82i0PJYC96OOF3SWPgKZ8uD212jMeJo1bSoM7JS26c4DzAGpsBoTUjCfoS3cwlQAarS%2FTDOvb1rgsAIUsVNXmio3FLF36bTwj436GGj87krDOUm%2BCld5hZ2Q2s%2Ff%2FmWjf3LXBDligdo7Bt2vzXWZAh%2BeMem4hFsle%2F73hjBxzpvtDf0%2B%2FAKIjVMkqrSAtFtblsnTd8ZS5QrfV4pD7YwrCFYN64na2%2Fc423%2FrIHZMoaM3tE88n7hnuvnp7ccnaDuCcrVuoEA9mx8flD85UQcMXSBufgo%2FDy4nrwpCpK8MRfzL8MfpUTr8DpbJzQ2lBWhOR2kuIjT49FgOevrE9xz9Pgf7urTMsugt4epWwglfymCDFBuox3VDuTSCiHOdCoIHugwAKFByP%2BqzgUIoJsUMQZ9ebNn72L8P6E%2BBUg%2BeDvX%2FU8ygzcB1EGFHfIs0YdDOqMtKPLXLGnMjXtTUxrjZaHVBXIzIkmHVb%2F1sqXHNDm%2B3urAwx3DG8Ejl1sBJub13%2BoqkfmhXxUx4LfmIl6sr9%2FRbbZQBuJkXROfcMdOyJ6EJdxtpdX4RmnJshjjKc4n0VpPvYD7k0odv3iCWGwbHJncQ33Tmvy5qUwhNKJygY6pgFlhhCdmd9CRDlMvmz1ALWeCmjzYDGcaD3XfG6JghtFMyrqoPJuq6wTl8VJJdYOJbz3%2FKjjZAW%2BN%2B6xQiT2JE01BVPfrOChdYEEQ1pmOx0A0j0LtOh3HS4dERv%2BAmtayqyd98LR0ikrJRWoEFwMHQPvYc6Dy6PxIdi%2BKzAXkiWUJctwRepogRIrkzcyvTOF7SoPeST%2Bj8HNi91C2VWZ7Tps%2BKk3KLeU&X-Amz-Signature=4786463c4d80f9f5407c63076e3b81efc197681a083fbf3804cdce1edbf921bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
