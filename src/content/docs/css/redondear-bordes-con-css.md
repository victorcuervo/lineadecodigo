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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HAVOUE2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T023825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9lXhUMye0Sr%2Bk8gUo3Q1wSNOcVimMzM1cVJ74o1jskgIhAKKDTyo1GwHK6M9RX3FEVO5Ss2tohbj9WkA31qvlXquQKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfYd73MZxeKJMBtjoq3AOsnioN16eiTRwsMd7eC%2FnAvCueCJ0fYvmBB2sbL1Ci%2Fi3RDnDDSaJvsTYi0Ue7SWYli5My9ZEP%2FXWtukAsJoT2pQgwI0DvvGK6AvEHWgLye2TtzQOolRV7x09xW6csLPXBFglQ7CWrG0gACOCvAWm6OQ4%2BxKT3tSxnYJutevv83vzG0nPlmLmzfTRGOL92IAiYJvq0pSJwzv9rWeA8UtcZsYaSY8Mu2rOhZxOZTx7%2BmlaXQsQNv7l1IWO4qtvv46zfuyyuHteN9l9mHZUyUHPbPnWb9WhpoOZpFENvp8tup7aP39Eoq4ChawxW%2Ba5y9HBvzuWTqZiLoAfmwqR%2FPVQosmCf7htAgcyRnyn0L5%2BNeDEmcrBeDzbvp6vIAnKzItd18gTFb8HNKkDUDDqbBRbFCOkbZXIToDl5Ceh19RW1cKlg2wo%2B9b5blKV%2FoWa2VzDZx%2FVw6QqPUJr4hUbmnmtIRiaRx0wLDih%2FRsc8MIhYWUIYuZqmGpl8RC2mGH%2BprGiOz0C0VeMy3jr5kOnd7VVrDnlji00q27BedrNC72DAQRbulzzdciaYyDgT%2FdR3S6%2F22DpozckhiOi3eU9qru1hm3IzuMHmOBwtdRV3U4bWAOAoiI80tCbHn90ZPzCj%2FdLJBjqkAbo94exnE%2FnmjfmdFdPcg%2F2EAKL8Z4o5hzSqLD9DJ9edtdwQUwnD7MunbehyjJ9miGdOA4BN%2BPldJbjj9OITO74nlGGfcNcYV1aHpPsJZwzW3NWTGRVRfypbYgGGATp3e14qZ1W7qCG%2FmvVJihxSqAVSHPOUAbv1O8UF0C5IFPC8Uewg4RTkBLR%2Fs0tk0weZtLgyFG1mMmYMS%2FTxjnuxmjc0G%2BUK&X-Amz-Signature=b9b4fe9ff48d49424dfcd80a77b4523a8f39b86d0783cf83f7b29f90de95d4c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HAVOUE2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T023825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9lXhUMye0Sr%2Bk8gUo3Q1wSNOcVimMzM1cVJ74o1jskgIhAKKDTyo1GwHK6M9RX3FEVO5Ss2tohbj9WkA31qvlXquQKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfYd73MZxeKJMBtjoq3AOsnioN16eiTRwsMd7eC%2FnAvCueCJ0fYvmBB2sbL1Ci%2Fi3RDnDDSaJvsTYi0Ue7SWYli5My9ZEP%2FXWtukAsJoT2pQgwI0DvvGK6AvEHWgLye2TtzQOolRV7x09xW6csLPXBFglQ7CWrG0gACOCvAWm6OQ4%2BxKT3tSxnYJutevv83vzG0nPlmLmzfTRGOL92IAiYJvq0pSJwzv9rWeA8UtcZsYaSY8Mu2rOhZxOZTx7%2BmlaXQsQNv7l1IWO4qtvv46zfuyyuHteN9l9mHZUyUHPbPnWb9WhpoOZpFENvp8tup7aP39Eoq4ChawxW%2Ba5y9HBvzuWTqZiLoAfmwqR%2FPVQosmCf7htAgcyRnyn0L5%2BNeDEmcrBeDzbvp6vIAnKzItd18gTFb8HNKkDUDDqbBRbFCOkbZXIToDl5Ceh19RW1cKlg2wo%2B9b5blKV%2FoWa2VzDZx%2FVw6QqPUJr4hUbmnmtIRiaRx0wLDih%2FRsc8MIhYWUIYuZqmGpl8RC2mGH%2BprGiOz0C0VeMy3jr5kOnd7VVrDnlji00q27BedrNC72DAQRbulzzdciaYyDgT%2FdR3S6%2F22DpozckhiOi3eU9qru1hm3IzuMHmOBwtdRV3U4bWAOAoiI80tCbHn90ZPzCj%2FdLJBjqkAbo94exnE%2FnmjfmdFdPcg%2F2EAKL8Z4o5hzSqLD9DJ9edtdwQUwnD7MunbehyjJ9miGdOA4BN%2BPldJbjj9OITO74nlGGfcNcYV1aHpPsJZwzW3NWTGRVRfypbYgGGATp3e14qZ1W7qCG%2FmvVJihxSqAVSHPOUAbv1O8UF0C5IFPC8Uewg4RTkBLR%2Fs0tk0weZtLgyFG1mMmYMS%2FTxjnuxmjc0G%2BUK&X-Amz-Signature=a22219b68e196b552ca1e0b302bc232f318510e4ace910d09e8d5d0f9fc30fe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
