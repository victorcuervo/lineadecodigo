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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLWNXFRQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDknpuXcV3TKrBadK2YAcgLgPmeliL1Ijxcz7d4K5Q1DgIhAJZXeLR0ciQtQskwVLJifwjJ%2FGmKFWza%2FVAOBRRfkVy9Kv8DCDgQABoMNjM3NDIzMTgzODA1Igz0si7IM2q%2BKxg4GuYq3ANlD44%2F%2B00g%2B4C4Z%2BHkUXBU8FXbuTsg5KyBuQ5vIsHEy8C73qINz%2Bo5CVkI2sAXU0aTTDk9q6HfD3c4AHF%2BmHmsqia1Ku%2BnQKzFZnWnKDG%2FEco%2BhEoMmtK1JDgbWuvQCkepQk4jEG%2FMkWG0tSJdbKqzSFJk9SRsNnqtHGsNlG7tcz5AuEP%2BkQ9P1io3peyg5detAu4cssH5BKbp9uJKi%2Fz6OV6d0lhhziQVe0CmaSidNNuNsOZvu8r7yvQpU%2FuyVhWXUfW%2BOK%2FP0RAkiG2Rm75EGz53%2FFdvwUot1Jv%2B1QPPR9SZmeKYCNSkPeuWs6DAGWzFFNV%2FYJv%2B%2Fao9A%2FLum6O2vXjTAMKKUeC63CbIfbUtDZF40yktnSePsrc4Ir1fHe9tMUsNL6z61oMrivlywemkjbcUXXUP7qVSQThO8rgY5FNNObMC4RFM9ZZvL8Rqh24xDitQ6te7rrG%2F38xaIn1Z5K7b71yg64VS1ZQVQR%2FIQxg3SHEJmpTbfFoSwSsL%2BTzkWMMAZgoCGFcbnWWS%2F5Dd1KMuViEcZL32JgakfG4t9tzqmz3F%2BVocR2NoBNFiTOKDHa%2BR649cix2o7HthT0vMKtLxz2dDMRyaZ%2BnGwE7TTB%2Fhm%2FsQbpAXkAyveDDG98LJBjqkAVF7lhYb2f9%2FhbdhChgT04YBz13DtTbG6ZNATHhpZRTKxKvpSDNHTKKpfiL8pBT8b0XyIHMYhEAFDnL9bvFuF3f%2FkG3IPEkfGXkZqSRMvmC%2BtYXNsJV3nUmMJF7BT32Hnxnl0%2BkEnODk8E%2B8cjGtoAOjUqQGvYnCr893Ih9Bf%2BiJVT7mfvd6KL1MSSlShiVtUGDTF1HqPQooLbm6Bhy%2F%2Bt59vCoT&X-Amz-Signature=35d86f5fe2c162870dde1f47790d4dc23c86016e6a3c7a211f8eb9978c07dd22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLWNXFRQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDknpuXcV3TKrBadK2YAcgLgPmeliL1Ijxcz7d4K5Q1DgIhAJZXeLR0ciQtQskwVLJifwjJ%2FGmKFWza%2FVAOBRRfkVy9Kv8DCDgQABoMNjM3NDIzMTgzODA1Igz0si7IM2q%2BKxg4GuYq3ANlD44%2F%2B00g%2B4C4Z%2BHkUXBU8FXbuTsg5KyBuQ5vIsHEy8C73qINz%2Bo5CVkI2sAXU0aTTDk9q6HfD3c4AHF%2BmHmsqia1Ku%2BnQKzFZnWnKDG%2FEco%2BhEoMmtK1JDgbWuvQCkepQk4jEG%2FMkWG0tSJdbKqzSFJk9SRsNnqtHGsNlG7tcz5AuEP%2BkQ9P1io3peyg5detAu4cssH5BKbp9uJKi%2Fz6OV6d0lhhziQVe0CmaSidNNuNsOZvu8r7yvQpU%2FuyVhWXUfW%2BOK%2FP0RAkiG2Rm75EGz53%2FFdvwUot1Jv%2B1QPPR9SZmeKYCNSkPeuWs6DAGWzFFNV%2FYJv%2B%2Fao9A%2FLum6O2vXjTAMKKUeC63CbIfbUtDZF40yktnSePsrc4Ir1fHe9tMUsNL6z61oMrivlywemkjbcUXXUP7qVSQThO8rgY5FNNObMC4RFM9ZZvL8Rqh24xDitQ6te7rrG%2F38xaIn1Z5K7b71yg64VS1ZQVQR%2FIQxg3SHEJmpTbfFoSwSsL%2BTzkWMMAZgoCGFcbnWWS%2F5Dd1KMuViEcZL32JgakfG4t9tzqmz3F%2BVocR2NoBNFiTOKDHa%2BR649cix2o7HthT0vMKtLxz2dDMRyaZ%2BnGwE7TTB%2Fhm%2FsQbpAXkAyveDDG98LJBjqkAVF7lhYb2f9%2FhbdhChgT04YBz13DtTbG6ZNATHhpZRTKxKvpSDNHTKKpfiL8pBT8b0XyIHMYhEAFDnL9bvFuF3f%2FkG3IPEkfGXkZqSRMvmC%2BtYXNsJV3nUmMJF7BT32Hnxnl0%2BkEnODk8E%2B8cjGtoAOjUqQGvYnCr893Ih9Bf%2BiJVT7mfvd6KL1MSSlShiVtUGDTF1HqPQooLbm6Bhy%2F%2Bt59vCoT&X-Amz-Signature=a02318a419ab2dd35ce0ede44160e3c9bf112574485558974a929287f56cee76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
