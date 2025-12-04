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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GZTB6IJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCUFQ8FhK2IvFvBOebPk6h3jSjFhXq9icC952qojYLUkAIgRX6%2FmY8DMZYHWa4Y55pfUP4QepLfyrmMLAvgsuns3A8q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDHkOccmoBzremkFEFyrcA7y69T2xXVhsjMmp4lglnI37u1gOVY3DG28Bk2GU8QNzlWYcRXxes3n%2FYUTLkxZgBOhW%2BwSHckViTgjB1NtuCbJghx%2FUfm4bTcz0N4Inr%2Bm3k%2BjAPMts7TNe0cQidgYVTA69z1Oqon4mpWb7eYbZEhlvutxIABEov%2BYsX3pRiBi8mL7rUmcpgH6NtL55pxUwOcTYZqO4wje%2BvxocnPWGR%2BG3WjGWut4yxawnCDOx3RlbzblM4mo8NBSaGVJ%2BAcgz%2BWNDK3wlgra6OquCNQd468nKUXDMl9qwaKXVYhuPttInAwYzw3bgPropMIF235DZbJCmDtHSxzvDHop%2BZW%2FF3kfRz1DFUCNG4A1IgTWkdrIojWb5zzgVFDwYPBNEqvdXiOe%2BJv0axstTDv93epiVt8UIstkm2RloXuYeE8Xw8w6N6Zv9xrZWHmWRBPlRTApbiqKtcqIk7CMHr9f3lbNrcdv7el91pwAsh1gy5qSeO4IScl7ExcL%2F67eL1Lldz4spvGz8NitWzHEgcxlV38gNEEOEz2ADGb8Bg6BGCsZ9BKXRgOoZIe7%2FeFrIr%2BDphvLrG3Ouyfyx8wdm7NTotLA9Avv7t9SlUo44ktsfaMpIWcp7Vgl2lTeAjzDTVL15MLGVw8kGOqUBvYi2%2BxQn8NAW1SkLMuogsjOCphxHbIK%2BAeP0ukHmPHAeRJ3NhKqSUFsvMLqcGaBglgHZBDOhRX8t6cAHjmY53lZX1WHkvYrEd3kNCdSHfCQPLtWaU0FvPDl%2BPjLiQFQzUbsBFlxub9TAFVMhALrGN5rQxh0AS4E4vrigKPqB4djqWDDEiyBlUq2WNZcy06z6UgZ2ha1a15rMQvpetPJt72TwqDG5&X-Amz-Signature=c3686588342c86df556152d6017f52639fac9f5f467e0cdbac6fa415140e89ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GZTB6IJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCUFQ8FhK2IvFvBOebPk6h3jSjFhXq9icC952qojYLUkAIgRX6%2FmY8DMZYHWa4Y55pfUP4QepLfyrmMLAvgsuns3A8q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDHkOccmoBzremkFEFyrcA7y69T2xXVhsjMmp4lglnI37u1gOVY3DG28Bk2GU8QNzlWYcRXxes3n%2FYUTLkxZgBOhW%2BwSHckViTgjB1NtuCbJghx%2FUfm4bTcz0N4Inr%2Bm3k%2BjAPMts7TNe0cQidgYVTA69z1Oqon4mpWb7eYbZEhlvutxIABEov%2BYsX3pRiBi8mL7rUmcpgH6NtL55pxUwOcTYZqO4wje%2BvxocnPWGR%2BG3WjGWut4yxawnCDOx3RlbzblM4mo8NBSaGVJ%2BAcgz%2BWNDK3wlgra6OquCNQd468nKUXDMl9qwaKXVYhuPttInAwYzw3bgPropMIF235DZbJCmDtHSxzvDHop%2BZW%2FF3kfRz1DFUCNG4A1IgTWkdrIojWb5zzgVFDwYPBNEqvdXiOe%2BJv0axstTDv93epiVt8UIstkm2RloXuYeE8Xw8w6N6Zv9xrZWHmWRBPlRTApbiqKtcqIk7CMHr9f3lbNrcdv7el91pwAsh1gy5qSeO4IScl7ExcL%2F67eL1Lldz4spvGz8NitWzHEgcxlV38gNEEOEz2ADGb8Bg6BGCsZ9BKXRgOoZIe7%2FeFrIr%2BDphvLrG3Ouyfyx8wdm7NTotLA9Avv7t9SlUo44ktsfaMpIWcp7Vgl2lTeAjzDTVL15MLGVw8kGOqUBvYi2%2BxQn8NAW1SkLMuogsjOCphxHbIK%2BAeP0ukHmPHAeRJ3NhKqSUFsvMLqcGaBglgHZBDOhRX8t6cAHjmY53lZX1WHkvYrEd3kNCdSHfCQPLtWaU0FvPDl%2BPjLiQFQzUbsBFlxub9TAFVMhALrGN5rQxh0AS4E4vrigKPqB4djqWDDEiyBlUq2WNZcy06z6UgZ2ha1a15rMQvpetPJt72TwqDG5&X-Amz-Signature=ddc76d4f96f445aeb013a62b8a4483c87780f080ea0def7bc39d1af57f1aadb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
