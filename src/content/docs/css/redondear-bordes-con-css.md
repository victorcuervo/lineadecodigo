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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y44KZ5SF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T212934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEkXB8fq3I4cFqHMywUQrlJjJMDISlFnpguAvAq7onKAIhAOr9Z4Oq8mbPuPdBM6X5reIYZdW83UhThgKTpd2xyGMqKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwq09BQP%2F3YYs51CYsq3AMifgNccQTjgNG0ynycfRx2%2FDaJfnJ7kmxQep63Kto%2F9Ob2TGnt2HfO4lwUWLwb3b0zC1lcpOW0zWtnNp9C26BzcliIuhoLe4KKkGUxWadRmjfAuNt74sJicLW1D5T5iYXmy6vhDbziYj30EvbwBRckWGJxJWfXoK8zxen25Td6F00ANeLuzuxmPOl8qzg%2BCWD%2BlPuwObQNFTlk%2F5RYa16gFsbN%2BdNvt7ZY0X4vLexiXw1iLQcZ770OIvfI5CVd0BchlZV009JKKV5bXS7nkOlW%2FnVFlWJ3w4%2BLAWSbkzt2%2BaxVfzV95mTavl1Also%2FQLx3yt37Za7JLNqZWsOJB8yeTX%2BSoDbQIouPZtg5qbFL1qf6NJb22HU8J7Slzvd5wjDe7exk48qdtYNSTO%2Fr7nl%2F7OYRU%2BokAJdrwhrJbymn0CWpAiAhHF0NSrkBo8JkK4FYOS0nCULvV2d8XJ%2BOtjQ5cCb%2FrlC1zs%2BVe54nliQxNJsknSt5%2BwMIJDa9vwfzDthXA7hfTTaMcm3ich%2FVcyhcsCMybYE%2BIW%2F%2BlO%2BvtX5HKU7NyrdykyCuY2OKl3P%2FcysNqUv8ffY2irbv5AdVi513BhVPe17IoMPgQhRBwWwRpIG2VH7Wzo2NiV3NsTCAgN3JBjqkAUZ1x9dk5FllakByYQViR9IVVtRDrd6MF54%2FqR0DGqU0pNA8h2hJoDz2rqCVvmk8AUK8CB1gZTcHr93ugyyiETOboxgSA%2FUfTL3%2BMuXmB%2FiMS2m5DmUlDr1SWzXoLGEKEfV%2B506qtt8G5Ml7LmDINfQKnVz1DsUeKUKrKaeqWN2TCxC3QpFqi%2FIvvWUlAHLSo1Ybxj1JFH8kvbCjQWDZy6ZHV7tc&X-Amz-Signature=8e633cb4e0580e3d07466ac31dbe364660b6476284d8ee869a2d94a69d7bbbb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y44KZ5SF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T212934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEkXB8fq3I4cFqHMywUQrlJjJMDISlFnpguAvAq7onKAIhAOr9Z4Oq8mbPuPdBM6X5reIYZdW83UhThgKTpd2xyGMqKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwq09BQP%2F3YYs51CYsq3AMifgNccQTjgNG0ynycfRx2%2FDaJfnJ7kmxQep63Kto%2F9Ob2TGnt2HfO4lwUWLwb3b0zC1lcpOW0zWtnNp9C26BzcliIuhoLe4KKkGUxWadRmjfAuNt74sJicLW1D5T5iYXmy6vhDbziYj30EvbwBRckWGJxJWfXoK8zxen25Td6F00ANeLuzuxmPOl8qzg%2BCWD%2BlPuwObQNFTlk%2F5RYa16gFsbN%2BdNvt7ZY0X4vLexiXw1iLQcZ770OIvfI5CVd0BchlZV009JKKV5bXS7nkOlW%2FnVFlWJ3w4%2BLAWSbkzt2%2BaxVfzV95mTavl1Also%2FQLx3yt37Za7JLNqZWsOJB8yeTX%2BSoDbQIouPZtg5qbFL1qf6NJb22HU8J7Slzvd5wjDe7exk48qdtYNSTO%2Fr7nl%2F7OYRU%2BokAJdrwhrJbymn0CWpAiAhHF0NSrkBo8JkK4FYOS0nCULvV2d8XJ%2BOtjQ5cCb%2FrlC1zs%2BVe54nliQxNJsknSt5%2BwMIJDa9vwfzDthXA7hfTTaMcm3ich%2FVcyhcsCMybYE%2BIW%2F%2BlO%2BvtX5HKU7NyrdykyCuY2OKl3P%2FcysNqUv8ffY2irbv5AdVi513BhVPe17IoMPgQhRBwWwRpIG2VH7Wzo2NiV3NsTCAgN3JBjqkAUZ1x9dk5FllakByYQViR9IVVtRDrd6MF54%2FqR0DGqU0pNA8h2hJoDz2rqCVvmk8AUK8CB1gZTcHr93ugyyiETOboxgSA%2FUfTL3%2BMuXmB%2FiMS2m5DmUlDr1SWzXoLGEKEfV%2B506qtt8G5Ml7LmDINfQKnVz1DsUeKUKrKaeqWN2TCxC3QpFqi%2FIvvWUlAHLSo1Ybxj1JFH8kvbCjQWDZy6ZHV7tc&X-Amz-Signature=620710a682194a5c601add5578d7ea6877e1172d95fe40bcb645b124a8f25fc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
