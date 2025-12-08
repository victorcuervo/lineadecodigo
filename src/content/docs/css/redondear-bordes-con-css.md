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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBJ5LNO3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T045419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj%2B4zGM0A2iP%2FN4ucbAEHEVYBnSt32rS%2B7CwTg2tIFQAIhAKLXmP8ZN%2FpWiIAXLmDE%2FOeHHaLzgirTzCyYo8Qy%2BXweKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQjrd8ca6vcZMSzfsq3ANtBlQ9nM%2FD6MOwfugJ3yW31ApMCWGIYC7HWijfw%2BWFtCsWoIq3s3hqEb5yBmGbOCazhvq9KSj80xebo4S5sD3wrx87PF4VTwyIB8DC%2BWKYEMxp6enLove4koQ%2FGz1HT5lCJ4q5TyYnXVLx4gMHvSJ9GHqR7oGdcwyeYa807YwYLTazXn1gexk7WCzfANWJtc%2FB3rSJc%2BsaW7N3N%2F8kxsd7LH%2FJXs%2BRZZPfUkoPgLb%2FN7XL87xzZEUI546qt53rPzTJJZrMgQ54H8X%2B5j6D%2FlyoesSyhuZEQHOpZV61AidI%2BcluFRuw0jMfAbTUTz7r0gCR4k8sYCmqHTEkw7sRXdHAM3g8tNFc60%2BjfkjsCXUSmUiisU6A6t9YQHsd0ZxfaThnRw7E0ob3jQ7L6CLzhFT%2FWkVQkh3BhdgNKBG8KNiQv4nEQ3%2Ftr1D4oqYRg5wHlB81fJA7WJHG%2FbWlgb6RBP0Rs8aYF4h%2FLbbMjuNk21dTf%2BZ1%2F9celBtISfBCCbScoqk%2FeHak3EMT0occRePmiG5FZVLxGH4WFvNQ2Rpu3UwvGKvEhCEy88qdlf7qE1ZDzl4yaFHFrrOj8JNS9QWBKM1beyf4CXbpVouGgAppg8QG8mXCu0UfggpOUVQ0NTDVlNnJBjqkAcfqxooMv4qZ%2F7f%2F2i4sOjHyeevuEAY8%2F9odwoYlf%2FV5EhjiE2zYJRFJpLQNYm53a8yBTxd8yA53hFSnUqnPXj%2BbuLyQReUwNMlgivknt%2BOxtOQuFakOD27gslJUVU7eun1YiB%2FVQg58cs5DZXADlSRmKlb18rrroRp3TD11OvYGeqVW9ZCE9fovBLZyN4Jn05VOgMKnHtanLxEJPlLS%2FLGMQki1&X-Amz-Signature=4334189db77ea1a81be9274486f768bbfe48813d796b92d07105ec8958fd4397&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBJ5LNO3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T045419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj%2B4zGM0A2iP%2FN4ucbAEHEVYBnSt32rS%2B7CwTg2tIFQAIhAKLXmP8ZN%2FpWiIAXLmDE%2FOeHHaLzgirTzCyYo8Qy%2BXweKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQjrd8ca6vcZMSzfsq3ANtBlQ9nM%2FD6MOwfugJ3yW31ApMCWGIYC7HWijfw%2BWFtCsWoIq3s3hqEb5yBmGbOCazhvq9KSj80xebo4S5sD3wrx87PF4VTwyIB8DC%2BWKYEMxp6enLove4koQ%2FGz1HT5lCJ4q5TyYnXVLx4gMHvSJ9GHqR7oGdcwyeYa807YwYLTazXn1gexk7WCzfANWJtc%2FB3rSJc%2BsaW7N3N%2F8kxsd7LH%2FJXs%2BRZZPfUkoPgLb%2FN7XL87xzZEUI546qt53rPzTJJZrMgQ54H8X%2B5j6D%2FlyoesSyhuZEQHOpZV61AidI%2BcluFRuw0jMfAbTUTz7r0gCR4k8sYCmqHTEkw7sRXdHAM3g8tNFc60%2BjfkjsCXUSmUiisU6A6t9YQHsd0ZxfaThnRw7E0ob3jQ7L6CLzhFT%2FWkVQkh3BhdgNKBG8KNiQv4nEQ3%2Ftr1D4oqYRg5wHlB81fJA7WJHG%2FbWlgb6RBP0Rs8aYF4h%2FLbbMjuNk21dTf%2BZ1%2F9celBtISfBCCbScoqk%2FeHak3EMT0occRePmiG5FZVLxGH4WFvNQ2Rpu3UwvGKvEhCEy88qdlf7qE1ZDzl4yaFHFrrOj8JNS9QWBKM1beyf4CXbpVouGgAppg8QG8mXCu0UfggpOUVQ0NTDVlNnJBjqkAcfqxooMv4qZ%2F7f%2F2i4sOjHyeevuEAY8%2F9odwoYlf%2FV5EhjiE2zYJRFJpLQNYm53a8yBTxd8yA53hFSnUqnPXj%2BbuLyQReUwNMlgivknt%2BOxtOQuFakOD27gslJUVU7eun1YiB%2FVQg58cs5DZXADlSRmKlb18rrroRp3TD11OvYGeqVW9ZCE9fovBLZyN4Jn05VOgMKnHtanLxEJPlLS%2FLGMQki1&X-Amz-Signature=4738128502753521be233db19b5982593e91baf96c99c1653220b2f8f9f57ba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
