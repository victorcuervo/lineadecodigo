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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZQVRG6B%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T051320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAv%2BcRMBYgwDccrZFbKuH2FEB9LeaBXjDABJIbLKLQToAiEA%2F1knVKl9ZtxLKZPy8mVsO1ffsWLpFd3Qa9FhGH9v1AMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDFJauhM7hcjnUc%2F3TCrcA1Yrc6c3pyow7Q5Mzwilmb%2FNSH93vbGevPU6avs4k1kym%2BNNYMOCCi4GVUsCwQienifWbUikI0g8CpqPSkDCWTJWWuvKXwmlN0GHw6CNsNFYU1gOp7Watlcpiq0r1063CDkDtHMKp6r6DtZ%2FM6WKbBsXKBytKhAS5%2FzzKwhlyboV7HYnwgNQdhLZfZZGAlqInoG68u1nElYJwwLSIvg0IkF52z1lk2%2FMV4tzKtBFwowPdV7%2BBatfoiZDLy90N7b7%2BJD0zIAJu15RQyJtRYeWpBQ4mojAdOK4Jfvqc166Y8P8czYjPzldTbI7cAKwRwbM1HWXIx10uTQAbHyCl%2FiHT6muKinQFCTZs%2FGvsfBcR42X%2BJ60luJ30BhNRmUL5FjgTycqJtcbMcT5rBBkojMQrlQGwHTWmbdrrWuSZebX4LwuxCW3fnBaBQc2lhrYz04UQw4YhnL0fca%2BBtMJdD%2BlxhwshgX5L2Wv%2BegJ19rjbJxWQD2hjL3%2FYF1tuOCctACQpZ3ZAu1G7rGqTB90iE8vvj49MxGAPoLpQm0fX97zzFHEdmvZHK7ZFNe4M9cKFN1r1bO1UN3WDSgyt8mGA0dqZTTi7I20DFXLBxhWr%2BqjCRmD5KcYtQL2ItIOuxLTMLOtyckGOqUBArLK6Vq%2BqbbTj2rUsRzNh3i4wZz9fExoZZLReQ7ru0V51Qli6P8KYqvYy%2FUd02reW8seoMMeeddT0X%2By3wVmpxZB8s9TuLwNOr6PjhDswPMD%2FQA7VYIIayJqP8yqpxW0JG0PVV6En1tmabwRWx1812OnDDc3TLMeb2CnlWk7sNaQghJAcnzPEeyuwHfUkKHIdsahTOntBy%2BKGBjFFEf9JnFWzP%2FG&X-Amz-Signature=89ec6304f8d5b9959ac345e10c2076a3164789bb66dafe39097140e76f8351e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZQVRG6B%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T051320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAv%2BcRMBYgwDccrZFbKuH2FEB9LeaBXjDABJIbLKLQToAiEA%2F1knVKl9ZtxLKZPy8mVsO1ffsWLpFd3Qa9FhGH9v1AMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDFJauhM7hcjnUc%2F3TCrcA1Yrc6c3pyow7Q5Mzwilmb%2FNSH93vbGevPU6avs4k1kym%2BNNYMOCCi4GVUsCwQienifWbUikI0g8CpqPSkDCWTJWWuvKXwmlN0GHw6CNsNFYU1gOp7Watlcpiq0r1063CDkDtHMKp6r6DtZ%2FM6WKbBsXKBytKhAS5%2FzzKwhlyboV7HYnwgNQdhLZfZZGAlqInoG68u1nElYJwwLSIvg0IkF52z1lk2%2FMV4tzKtBFwowPdV7%2BBatfoiZDLy90N7b7%2BJD0zIAJu15RQyJtRYeWpBQ4mojAdOK4Jfvqc166Y8P8czYjPzldTbI7cAKwRwbM1HWXIx10uTQAbHyCl%2FiHT6muKinQFCTZs%2FGvsfBcR42X%2BJ60luJ30BhNRmUL5FjgTycqJtcbMcT5rBBkojMQrlQGwHTWmbdrrWuSZebX4LwuxCW3fnBaBQc2lhrYz04UQw4YhnL0fca%2BBtMJdD%2BlxhwshgX5L2Wv%2BegJ19rjbJxWQD2hjL3%2FYF1tuOCctACQpZ3ZAu1G7rGqTB90iE8vvj49MxGAPoLpQm0fX97zzFHEdmvZHK7ZFNe4M9cKFN1r1bO1UN3WDSgyt8mGA0dqZTTi7I20DFXLBxhWr%2BqjCRmD5KcYtQL2ItIOuxLTMLOtyckGOqUBArLK6Vq%2BqbbTj2rUsRzNh3i4wZz9fExoZZLReQ7ru0V51Qli6P8KYqvYy%2FUd02reW8seoMMeeddT0X%2By3wVmpxZB8s9TuLwNOr6PjhDswPMD%2FQA7VYIIayJqP8yqpxW0JG0PVV6En1tmabwRWx1812OnDDc3TLMeb2CnlWk7sNaQghJAcnzPEeyuwHfUkKHIdsahTOntBy%2BKGBjFFEf9JnFWzP%2FG&X-Amz-Signature=942c8e1c839cdaf4b98fd55b88f2f1614da9f0a8e0e9bcd8ca76a454f8a4739a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
