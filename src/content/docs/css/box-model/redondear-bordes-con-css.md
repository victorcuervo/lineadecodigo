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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TYOJ2ZV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVQNO3o1LrG3S8fl9%2BaCeHBZfTpI8E9UWCNWL9MyfDkAiEA%2BZ%2BY%2Fhx0TGBPjSvYdIU6qtee5%2B%2B8aPlCy24A81ip%2FR4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDN%2FRkZfheG2668yyuircA%2BaM3wqq4%2FMuRK9OHyFYRoT1bLl%2F3UeJc%2BDYWJu9kYH0LJrHy2FUR%2BvCfofRwLhgQ%2BKq69hrTu1QqVtsx5hBzui3g2Pn1Cl1FbBDpQDHepsMznFduyYcH9BxW%2FOlpLzCEYiSbY0nGH7jgbaM1T5KAHsXVTknol7YnjCP7tmP3z8%2BVVIfS%2FTmam24DE0SkklLZNrJkOrodS0AWPBW86THnxCbEMT7UuWacOo4QJo%2FrVaScxyeY4x%2BzSPhoW2CEKhVUS2rwvNlE5S%2FmEoqp0NdfGjce3UuyuBYtt%2FAnHVY0Iu28TMl6stcaxP5Ix1cTKEwlR%2Bs7dtaWhu%2F6sLzto0olON5TRQKo6lqwlGGhJPCqPXVdZSTzdH0Pnd4jkVuAoJZelldZ2kNG11Ae4uUWjLV%2FXRfW6ioEHirOO4qxaTlr1Lq7Xzb7Rk3Ulpd0Ne9G0TUysSuN5uEzae1oGrbDWv7JKxQhs%2F5VV9PZmt3GrZthFXEIuj4jXQd30B6k9tM0HtIGwJMrQsHGD5%2FPJ48y5yP4%2BATqnWY1McWS3BA8byGln3ZKpwEnH%2BCw1kT0ys%2F%2F8uzVoj7Ce9nasHn6GD%2FY5UtBsut7IQ8YM24DQR1mem90NVnVY1NYgUgt%2BjYBacOMM6XiMoGOqUBjhSV9l%2Fd6IU%2Fj%2BOI3EqTpsYCzvSrmQLq81YMvCLUTho3xZpM2s%2FkqIIS9H1knI7nSNf5rKZbDzNcpm%2BZigL0rOMintlDX6BWS8aEHLvHxfOIHLVgWXt8PSV01CV58X97bf1ijZhuTKYVR5MJ6bFR2JOFlAUwY7guibWAwn16fb0nXiCahI6pP5MCukJ3PV7NqHcaVGDAYy3XOvcL6xw%2FB9JlS%2Fiu&X-Amz-Signature=0acea75ee33630fd2b1d178d6e46112e01f1ad4f44a719a1eb9c77700062177c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TYOJ2ZV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVQNO3o1LrG3S8fl9%2BaCeHBZfTpI8E9UWCNWL9MyfDkAiEA%2BZ%2BY%2Fhx0TGBPjSvYdIU6qtee5%2B%2B8aPlCy24A81ip%2FR4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDN%2FRkZfheG2668yyuircA%2BaM3wqq4%2FMuRK9OHyFYRoT1bLl%2F3UeJc%2BDYWJu9kYH0LJrHy2FUR%2BvCfofRwLhgQ%2BKq69hrTu1QqVtsx5hBzui3g2Pn1Cl1FbBDpQDHepsMznFduyYcH9BxW%2FOlpLzCEYiSbY0nGH7jgbaM1T5KAHsXVTknol7YnjCP7tmP3z8%2BVVIfS%2FTmam24DE0SkklLZNrJkOrodS0AWPBW86THnxCbEMT7UuWacOo4QJo%2FrVaScxyeY4x%2BzSPhoW2CEKhVUS2rwvNlE5S%2FmEoqp0NdfGjce3UuyuBYtt%2FAnHVY0Iu28TMl6stcaxP5Ix1cTKEwlR%2Bs7dtaWhu%2F6sLzto0olON5TRQKo6lqwlGGhJPCqPXVdZSTzdH0Pnd4jkVuAoJZelldZ2kNG11Ae4uUWjLV%2FXRfW6ioEHirOO4qxaTlr1Lq7Xzb7Rk3Ulpd0Ne9G0TUysSuN5uEzae1oGrbDWv7JKxQhs%2F5VV9PZmt3GrZthFXEIuj4jXQd30B6k9tM0HtIGwJMrQsHGD5%2FPJ48y5yP4%2BATqnWY1McWS3BA8byGln3ZKpwEnH%2BCw1kT0ys%2F%2F8uzVoj7Ce9nasHn6GD%2FY5UtBsut7IQ8YM24DQR1mem90NVnVY1NYgUgt%2BjYBacOMM6XiMoGOqUBjhSV9l%2Fd6IU%2Fj%2BOI3EqTpsYCzvSrmQLq81YMvCLUTho3xZpM2s%2FkqIIS9H1knI7nSNf5rKZbDzNcpm%2BZigL0rOMintlDX6BWS8aEHLvHxfOIHLVgWXt8PSV01CV58X97bf1ijZhuTKYVR5MJ6bFR2JOFlAUwY7guibWAwn16fb0nXiCahI6pP5MCukJ3PV7NqHcaVGDAYy3XOvcL6xw%2FB9JlS%2Fiu&X-Amz-Signature=9619f676076e0889e630fc5df3aa68b24b0e398cf6646325d6c913006d1e4090&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
