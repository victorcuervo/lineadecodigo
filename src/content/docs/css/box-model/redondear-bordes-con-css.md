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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV2DK4WE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg9pa%2BRUc2DmJyVD%2BeQeS99ggSLJGcbyHGYx9CnGaBxQIhAOLP8TY292ooiOdejzx74aohhv2r0X7b4XgEDVq0j8KFKv8DCHUQABoMNjM3NDIzMTgzODA1IgzgOrViEJu%2BP9W104Mq3AMl2wwIfgfZLmUc5PfLhuktxtEJmiHR444Vb%2ByTuBB1x4ocDu42GHIs0t9z6Ztb9X9r3LAe6uERxNZG9Rcm3q5lZ3c7AiaHoTffL0gW1sHunuHQI7T7C9QWWtpZoR4HdRb8YqGXm2IVSQKJ05dBwF6O48bECn3krsfaONYYh2td2jEswaOwcMPWiY7P84ZPASm2iCfuq3C%2Fj%2B16kpWYeR5l05u1chcWFp2YXvcQIufB84B8ZV%2Fo1oo63sSrtAc8sJjgW5X1Zd6Wg1nR04AwsnMwwxwIFJLqRJMgPO2yAlNKzMuVmOfXlVWkeZpTuw0jCaksS5KDwycd0%2F3FDLm7Z1MV%2ByQ0IPiZHvgcm9Yus6ANvBWKLVKGPj0RFDsHVSrVoYBLOQEx5bqIx24PtP5NCPD5kyHea3Kov1jlYWnJU6RhmvjaNpClfBFHWgIsByP0rKRAG1FthACbLt%2BcLctIbMQT3u8EvxxTmS94hHgypzxuB2dQclJ6xZNIZ56%2BPQumGZ54c0WfBoXJ0mD45p1UOTNnx8j25LyKZ3KcqVDvwkTBEuERT5lmFAUNghOyVr%2BQapf%2B0fBqF%2FBku%2BpochxURBcV5muA1TnlT3oeRMEACwfZEk2fRehLaataRWl53zCyzojKBjqkAQbGHq%2BLfpRa9fLAWRzqNt4%2FfhJmDCzHKZmfGY79%2F28tJbXOZYmkqf35ebmOlxmky5QyBVnp06HPzobaOjyRoxKuSfo%2BnF%2FDKa4sZrvT1QuUniUjj5q91ez6YyBIlXIW7IiNHh2Snlq%2FiZUQovHPIKmmSlmZtThU5cFNxx8GA%2B5Hawslq6gOBm0kKX079prMYPHFl8%2FGuff64QBpCHood2U4WLcB&X-Amz-Signature=a125d6eb57c0436c7089d1a50f63c084cf5dd857c59da5be14ed617e207e7ddb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV2DK4WE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg9pa%2BRUc2DmJyVD%2BeQeS99ggSLJGcbyHGYx9CnGaBxQIhAOLP8TY292ooiOdejzx74aohhv2r0X7b4XgEDVq0j8KFKv8DCHUQABoMNjM3NDIzMTgzODA1IgzgOrViEJu%2BP9W104Mq3AMl2wwIfgfZLmUc5PfLhuktxtEJmiHR444Vb%2ByTuBB1x4ocDu42GHIs0t9z6Ztb9X9r3LAe6uERxNZG9Rcm3q5lZ3c7AiaHoTffL0gW1sHunuHQI7T7C9QWWtpZoR4HdRb8YqGXm2IVSQKJ05dBwF6O48bECn3krsfaONYYh2td2jEswaOwcMPWiY7P84ZPASm2iCfuq3C%2Fj%2B16kpWYeR5l05u1chcWFp2YXvcQIufB84B8ZV%2Fo1oo63sSrtAc8sJjgW5X1Zd6Wg1nR04AwsnMwwxwIFJLqRJMgPO2yAlNKzMuVmOfXlVWkeZpTuw0jCaksS5KDwycd0%2F3FDLm7Z1MV%2ByQ0IPiZHvgcm9Yus6ANvBWKLVKGPj0RFDsHVSrVoYBLOQEx5bqIx24PtP5NCPD5kyHea3Kov1jlYWnJU6RhmvjaNpClfBFHWgIsByP0rKRAG1FthACbLt%2BcLctIbMQT3u8EvxxTmS94hHgypzxuB2dQclJ6xZNIZ56%2BPQumGZ54c0WfBoXJ0mD45p1UOTNnx8j25LyKZ3KcqVDvwkTBEuERT5lmFAUNghOyVr%2BQapf%2B0fBqF%2FBku%2BpochxURBcV5muA1TnlT3oeRMEACwfZEk2fRehLaataRWl53zCyzojKBjqkAQbGHq%2BLfpRa9fLAWRzqNt4%2FfhJmDCzHKZmfGY79%2F28tJbXOZYmkqf35ebmOlxmky5QyBVnp06HPzobaOjyRoxKuSfo%2BnF%2FDKa4sZrvT1QuUniUjj5q91ez6YyBIlXIW7IiNHh2Snlq%2FiZUQovHPIKmmSlmZtThU5cFNxx8GA%2B5Hawslq6gOBm0kKX079prMYPHFl8%2FGuff64QBpCHood2U4WLcB&X-Amz-Signature=41927080529ec283f5c3c2b037bf4bdd8a96d0ebaf61186fb389a18b9e4d753c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
