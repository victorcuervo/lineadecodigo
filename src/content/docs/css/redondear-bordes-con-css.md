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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662BFI3ML%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIAihsCXFYvo9g%2Bxtccyg3xUoWmrQm62%2BlQuFoIfYKC0eAiEAud%2BiEiQpCI4a9Nw0pPU0oUCwdaohMKmtHv6nlcMO0DEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDBDqQCqiT%2BbkJ7Mj8yrcAzivtEqxwykbWWrF6IfPQ%2F7lc7e%2BdE2231Ozh7jhzje3kgmkSyrWGVCAvIpV6gPAon0D5S%2B2Ej8iyi2oFYRJcHLGzzRKPpt07Ez%2F%2FYmplpRhJKnvE5syvoGTMRDIhWcDYu8cuGZBoBC%2BTpz77Ky5zHYfquNcFzm%2F%2F%2BKqK3hqb%2FDxiMauCv5%2BFcvjjN%2FNOzhGwVjxocmH1T%2FLEQXfcRObumNhCSEkrpq3LTQ%2FtNdAYmtpwmU7JP1FKl5Tql2WwBP6ZJUYjCiN%2BkcnkBgz%2Ff4rmTQkgEhzpd%2FLiorFYrYJ2lIBovOmpZwT8ncDJziKXL5wJND2BpKoUKAUS6S1%2Fp%2FGZO8uNaOa2tRFe0CC%2B4sgogF3fO9phKq2o1IPqL4TLSh5vyyXqCyevxG7Nu%2BF8AujFVsZ7i1RgsX9mAzD%2B5tEdaJyWuiVgu0lAj61BGQ0DPn9YMHCApcE3kT%2BztIh1iK0NP3gaourfQe%2B%2FEfsLeN55gUiIc8u%2ByHsNA59J%2BvG2d8iDqFkp%2B%2FBXFde9LCgNPOO8%2B4GX7dswBh5bkZVJcjYARQH4bpd6yyl9tGiSL34niZzfv3FDP7k%2FID0U7kAekuBJfl8959YOi58gJmr345LyMXSKtKUT7u0zzJNcUbJMOiDxskGOqUBbxxOLuTaiVKA0NN%2FKJLQ4dvnjcbTo5UjfSBkxbqjjFwdj0YxfGgP9OYTEKfZxYCZLhFn%2F828ksuTqIF7Ub%2BTMQBVDwHpRXbuW2vcn0c3%2B8X%2FM4mr4L6wMt9DZFsVrJ3mzfOj8KmbCw1qwyAPeUeis9Z4WVAKqiriHF4BjIqqRFiC%2BLARQ7u%2Bc5Cg1zZDwTRmlAKSvCC149sbdDeAohEO1q5AIpaZ&X-Amz-Signature=3954b1554a58e72ffafe0d167d8ad3b6385fd5a620c9b317217603f6d6c5a6d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662BFI3ML%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIAihsCXFYvo9g%2Bxtccyg3xUoWmrQm62%2BlQuFoIfYKC0eAiEAud%2BiEiQpCI4a9Nw0pPU0oUCwdaohMKmtHv6nlcMO0DEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDBDqQCqiT%2BbkJ7Mj8yrcAzivtEqxwykbWWrF6IfPQ%2F7lc7e%2BdE2231Ozh7jhzje3kgmkSyrWGVCAvIpV6gPAon0D5S%2B2Ej8iyi2oFYRJcHLGzzRKPpt07Ez%2F%2FYmplpRhJKnvE5syvoGTMRDIhWcDYu8cuGZBoBC%2BTpz77Ky5zHYfquNcFzm%2F%2F%2BKqK3hqb%2FDxiMauCv5%2BFcvjjN%2FNOzhGwVjxocmH1T%2FLEQXfcRObumNhCSEkrpq3LTQ%2FtNdAYmtpwmU7JP1FKl5Tql2WwBP6ZJUYjCiN%2BkcnkBgz%2Ff4rmTQkgEhzpd%2FLiorFYrYJ2lIBovOmpZwT8ncDJziKXL5wJND2BpKoUKAUS6S1%2Fp%2FGZO8uNaOa2tRFe0CC%2B4sgogF3fO9phKq2o1IPqL4TLSh5vyyXqCyevxG7Nu%2BF8AujFVsZ7i1RgsX9mAzD%2B5tEdaJyWuiVgu0lAj61BGQ0DPn9YMHCApcE3kT%2BztIh1iK0NP3gaourfQe%2B%2FEfsLeN55gUiIc8u%2ByHsNA59J%2BvG2d8iDqFkp%2B%2FBXFde9LCgNPOO8%2B4GX7dswBh5bkZVJcjYARQH4bpd6yyl9tGiSL34niZzfv3FDP7k%2FID0U7kAekuBJfl8959YOi58gJmr345LyMXSKtKUT7u0zzJNcUbJMOiDxskGOqUBbxxOLuTaiVKA0NN%2FKJLQ4dvnjcbTo5UjfSBkxbqjjFwdj0YxfGgP9OYTEKfZxYCZLhFn%2F828ksuTqIF7Ub%2BTMQBVDwHpRXbuW2vcn0c3%2B8X%2FM4mr4L6wMt9DZFsVrJ3mzfOj8KmbCw1qwyAPeUeis9Z4WVAKqiriHF4BjIqqRFiC%2BLARQ7u%2Bc5Cg1zZDwTRmlAKSvCC149sbdDeAohEO1q5AIpaZ&X-Amz-Signature=ec7947f63ad2a3607cc11367046b533978ef5afa4563f2a5c8cbb664e73867f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
