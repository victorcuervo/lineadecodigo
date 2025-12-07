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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BTNEGHD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T043054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDd7ZlTSh5rK2GjZXov4N27tnKLaOYQ0m0vreMguEUVQIhANWLFS%2B93JF4pSQsPa9LH6NB0ExixwvPb2Ri9tP%2F5FvUKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8N%2BrDUTpLWm67%2FIsq3AMsW%2BTPjmohPNiw5P6O0IdZaj46crVUHghbRjgRqhd9VmEJHkkTHnxaMhoShDsHp1%2Fpryc6yA%2Fjt%2FH1066pjX3K8Zrd9J6Y9Su8D9UkZImG1bHoiZ5OTtgw4t3ZNtCSUEt%2B9eMHxBwQu3isCRqMtnDvWTWPTIrjUva%2F176QuoH6A8d7f8kP9fJe9p99SAXrnZ3YNgEKquIT7MBruRG%2BFIRVSqLZnsEGORK8Yzz9xjdiolE80uIEdfvO0z4CAmitkANP9GLpvB1VKeBKnqN3vZIn3TxEZ08KE5hxzmyyeoV%2Fh1S6xunwkwJBN3xXuxk5%2Fhkr7WD3pUvNwKIHBFCCwzyIYdYxEMPGT%2B4GBcuxqRr2%2BtifYcs59kpUskXBvFjWpXJT8Fgsu22spVyp9gYxgmSzU0YyFbd82cTqSwB4BAqKNBCtDdrGtAYXM4ss3QqE8cRM5a44rqUeH4fEECjk0QXZtEYTKl8bZoh2zlk0FEKh81ySPwAFvNAcNH4HfPT3Kpfolz165J7fpz2K7tK%2Bj%2F%2BkhchcKGdfMoryMymW20mP6yEvcNCVfTdGJcJ6gScbVqRApMTaqoCk4DkfpkqzfJVuQdexo%2BPJBSItdbYJPy%2BogOVc0qYsPOKGXVesnzDV%2FdLJBjqkAeUfbF0nfvSdohWexMC2HKPBk4EIfit08%2BdXNgnEPOBLPW1quhlHwLYd172uC4cfUEnSnXDrt6UE7oyR7MesL%2BXQ4C54j0EP5pyB7qSk%2B75f0yUVZJItvYySf8w4o6rfhjunViQx9%2BkZ4f5yX52JqXgEw%2BzpVz1yAZWu0fOqkQrJAcvghE1bCVONKvZFciyI79b3WaRa7fdHXch016v0pBQv7Kcw&X-Amz-Signature=bfb479dee9c574327f856b8c2a588c460ff8608220e6d43eb03db8752dfc1b97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BTNEGHD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T043054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDd7ZlTSh5rK2GjZXov4N27tnKLaOYQ0m0vreMguEUVQIhANWLFS%2B93JF4pSQsPa9LH6NB0ExixwvPb2Ri9tP%2F5FvUKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8N%2BrDUTpLWm67%2FIsq3AMsW%2BTPjmohPNiw5P6O0IdZaj46crVUHghbRjgRqhd9VmEJHkkTHnxaMhoShDsHp1%2Fpryc6yA%2Fjt%2FH1066pjX3K8Zrd9J6Y9Su8D9UkZImG1bHoiZ5OTtgw4t3ZNtCSUEt%2B9eMHxBwQu3isCRqMtnDvWTWPTIrjUva%2F176QuoH6A8d7f8kP9fJe9p99SAXrnZ3YNgEKquIT7MBruRG%2BFIRVSqLZnsEGORK8Yzz9xjdiolE80uIEdfvO0z4CAmitkANP9GLpvB1VKeBKnqN3vZIn3TxEZ08KE5hxzmyyeoV%2Fh1S6xunwkwJBN3xXuxk5%2Fhkr7WD3pUvNwKIHBFCCwzyIYdYxEMPGT%2B4GBcuxqRr2%2BtifYcs59kpUskXBvFjWpXJT8Fgsu22spVyp9gYxgmSzU0YyFbd82cTqSwB4BAqKNBCtDdrGtAYXM4ss3QqE8cRM5a44rqUeH4fEECjk0QXZtEYTKl8bZoh2zlk0FEKh81ySPwAFvNAcNH4HfPT3Kpfolz165J7fpz2K7tK%2Bj%2F%2BkhchcKGdfMoryMymW20mP6yEvcNCVfTdGJcJ6gScbVqRApMTaqoCk4DkfpkqzfJVuQdexo%2BPJBSItdbYJPy%2BogOVc0qYsPOKGXVesnzDV%2FdLJBjqkAeUfbF0nfvSdohWexMC2HKPBk4EIfit08%2BdXNgnEPOBLPW1quhlHwLYd172uC4cfUEnSnXDrt6UE7oyR7MesL%2BXQ4C54j0EP5pyB7qSk%2B75f0yUVZJItvYySf8w4o6rfhjunViQx9%2BkZ4f5yX52JqXgEw%2BzpVz1yAZWu0fOqkQrJAcvghE1bCVONKvZFciyI79b3WaRa7fdHXch016v0pBQv7Kcw&X-Amz-Signature=e93230267b022bb9e808333361f7bf15e3380ef72dc926f398a5875f45f4d0ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
