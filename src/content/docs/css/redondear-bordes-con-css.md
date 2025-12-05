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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NH7RNAY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T233751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJkt7UA9grlOTxuRAHuwh0vJa6jCQmRk5bkNG1RfUOvwIhAM1kLrdBktx%2FRMZuuWo6O%2BHsE595s2IduRflFXeCZzOuKv8DCGgQABoMNjM3NDIzMTgzODA1IgwfXZLPHyDPCra%2BdDYq3AOzTrMRsNYEDCVN30TFeymrhRBG86wcGNjt07w0M3tNjOMfIBKLPJB%2F4cTJB%2BAyU4nrruoywd7HCiGxZNI1FpP%2F5F0U2lZkUmM7Q0HHDtt4BfZ%2F3rkcBoaTRSUaYGkugeGh1f2afKkqbjHAIXOjhFn3Jfqg%2FYM46X35Vns2TQr7DXVoSH7BV7YSEUD2XhRrxgzreEzqAUpF33mpxE4KZXSVJZv5aMXBfLQTuN5Xf0Rs1Zi6jFKO81DyJvYBJ6d4yqtVQA9fTskwcMPBqt0ldFy65WZmI6yEKxY3cfdtODDucBC4NXXtqWTGBzoltl4pmIBVgWYDpqJ0%2Bfty5M%2BPJtdvbGOQbJTBt2urD1mEjx6HWzaPKy5Tno3iGzyPrfNl%2F%2FYgFvJ%2F2%2FsTZIZEChP9zykGj1cjz0rGX9%2FjNoUjIU0VCgzPiXNQr%2BX98w3UywKzsB4ZffK9A01iR2YUGOo%2FhF5kzthiwIqI9t%2B2zguSHd42umXv%2BJaLCD8KRqn4OC5sEvgeTWA3OE3l7rYeJaTa7QNbWo4UYwynvTrXVRlGg1yadoRhcdTMG0dmtuHgU9hEJWC%2BJPYNS1%2FXzEYqLv%2FpU3Hq7XEX2C6PKbV61XLdfkeS2WnhXuhW2%2BOtFHEFCDCZxs3JBjqkAe5oLHOT46cXO6xF7UskA5SNvirHqziApxduK9nZ9xX4BJlybag4lJD%2FL20%2B6NCgKXHGRcHNSkJjlObtd7uWUHPT1LRbXjycZcipg90WdgKW84V%2FoCdnpYZ4jDK5HmZ7ON2YkwDBIO9DejpEgFBeH0VTyaqcvfyB8gCUOF3Cnyl7t6SPxdXvm6yMM09LoojimygA6UbX2CvSb9SY1Av92J3keK0F&X-Amz-Signature=9a35f72a3e9008f9ad7511c5c35494a9a52e0036a06d9dd5c4db282f3ab6f39f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NH7RNAY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T233751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJkt7UA9grlOTxuRAHuwh0vJa6jCQmRk5bkNG1RfUOvwIhAM1kLrdBktx%2FRMZuuWo6O%2BHsE595s2IduRflFXeCZzOuKv8DCGgQABoMNjM3NDIzMTgzODA1IgwfXZLPHyDPCra%2BdDYq3AOzTrMRsNYEDCVN30TFeymrhRBG86wcGNjt07w0M3tNjOMfIBKLPJB%2F4cTJB%2BAyU4nrruoywd7HCiGxZNI1FpP%2F5F0U2lZkUmM7Q0HHDtt4BfZ%2F3rkcBoaTRSUaYGkugeGh1f2afKkqbjHAIXOjhFn3Jfqg%2FYM46X35Vns2TQr7DXVoSH7BV7YSEUD2XhRrxgzreEzqAUpF33mpxE4KZXSVJZv5aMXBfLQTuN5Xf0Rs1Zi6jFKO81DyJvYBJ6d4yqtVQA9fTskwcMPBqt0ldFy65WZmI6yEKxY3cfdtODDucBC4NXXtqWTGBzoltl4pmIBVgWYDpqJ0%2Bfty5M%2BPJtdvbGOQbJTBt2urD1mEjx6HWzaPKy5Tno3iGzyPrfNl%2F%2FYgFvJ%2F2%2FsTZIZEChP9zykGj1cjz0rGX9%2FjNoUjIU0VCgzPiXNQr%2BX98w3UywKzsB4ZffK9A01iR2YUGOo%2FhF5kzthiwIqI9t%2B2zguSHd42umXv%2BJaLCD8KRqn4OC5sEvgeTWA3OE3l7rYeJaTa7QNbWo4UYwynvTrXVRlGg1yadoRhcdTMG0dmtuHgU9hEJWC%2BJPYNS1%2FXzEYqLv%2FpU3Hq7XEX2C6PKbV61XLdfkeS2WnhXuhW2%2BOtFHEFCDCZxs3JBjqkAe5oLHOT46cXO6xF7UskA5SNvirHqziApxduK9nZ9xX4BJlybag4lJD%2FL20%2B6NCgKXHGRcHNSkJjlObtd7uWUHPT1LRbXjycZcipg90WdgKW84V%2FoCdnpYZ4jDK5HmZ7ON2YkwDBIO9DejpEgFBeH0VTyaqcvfyB8gCUOF3Cnyl7t6SPxdXvm6yMM09LoojimygA6UbX2CvSb9SY1Av92J3keK0F&X-Amz-Signature=484cbcdd5e0f34b3d519af1161cf1911e4974e1db57a0cad23f421bc886c2899&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
