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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN7H7ODV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T070707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDniBX4AHCGAuP3Sw6RefQPaKc6S%2Ba6D6X8Pv8VFkqmTgIhAK%2BNO7mMnXdnIsnnoC5WMVf9pL7xVWq94QiEGQb4XOe7KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDK99jBzcgCwN0tlkq3ANbQjt9HFF3A6Gk2c3gZwaOi4BwfX12KNUkTkPtvwdU%2B1E%2BDAMrUMHpXclH8n9PnyaWuxc7qda%2BRk2EGGrL%2F%2BsHKS56IzT3G%2BZ7Yrpwah82fY6WTJPhmcveoQuFc2dQ%2FdydHYACG7W0WSGrlaf7zsubeJ1aoi3oxJAIuGsjEpveyket0AHbRGchEL1k4Sp%2B5%2FjCt1KmlbjHv8si7ozM%2BSRLgx%2FZQGjKrIgY7A16CB%2Fvyqbts1VO1ObLkHJxy%2Bf%2B05sEKVprpZreSDQwvXIWh%2B%2BaeTeX01UrG%2Fu8%2BsfbdCsW4DOzkLrU8bc3NKGRQhiI5FJ73bBxeinGTTj%2FdA8B7zoj0jdAGA6sjjz2bUkJEmc03b18wkrMX1i65gMhf2VJiVa6DeqAwap4yvDT6T%2Bm4CBVo6OBXYwdbVkz1dlY0qp%2F0KnopzecX5Fy0slwHMU4ibUfmzdGPfZQ4XQ3OFEleOR5EdqtFFakKo4ThIY%2FwaRnOuaDmgoA21e%2FGzk2FqkLZN%2Fvyh1%2Fr6lKGEG1%2Bnc9ntnVWC3fgGiBorOslpPDwgkdz%2F0%2FG4zSEdzfpHQXilo5cmpg%2B3voSmSNz%2F4Dqt4spKASUpMouPSeKL2DwuwAt9DSoZEWS%2Bh7pwkDxPvlbDCbh9%2FJBjqkARDZqLf6VVhiIry1velBnxAX4tfN9If0%2BryvvlUys4PyJdvq%2BG4jumpmgXdvaWkzBWfadoxytzsHSt6RMcAVWLE9i5iMosJXkirMvmS2cgSqH1uQdjPLIdxLdCMVEERK%2BELmkvIapfl%2BL1ShOnxrx7fT6S8E2pzaocyJi%2F2vsD%2Bv5C7SoPr83Dj3QzOLh7hoG%2BZBHGkaFbMH8%2FXIsKuBDRl6JGrl&X-Amz-Signature=b6a858437a81e6b59be208ecc0013e6a6b464fb133ac6c1d555615321ba6cf44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN7H7ODV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T070707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDniBX4AHCGAuP3Sw6RefQPaKc6S%2Ba6D6X8Pv8VFkqmTgIhAK%2BNO7mMnXdnIsnnoC5WMVf9pL7xVWq94QiEGQb4XOe7KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDK99jBzcgCwN0tlkq3ANbQjt9HFF3A6Gk2c3gZwaOi4BwfX12KNUkTkPtvwdU%2B1E%2BDAMrUMHpXclH8n9PnyaWuxc7qda%2BRk2EGGrL%2F%2BsHKS56IzT3G%2BZ7Yrpwah82fY6WTJPhmcveoQuFc2dQ%2FdydHYACG7W0WSGrlaf7zsubeJ1aoi3oxJAIuGsjEpveyket0AHbRGchEL1k4Sp%2B5%2FjCt1KmlbjHv8si7ozM%2BSRLgx%2FZQGjKrIgY7A16CB%2Fvyqbts1VO1ObLkHJxy%2Bf%2B05sEKVprpZreSDQwvXIWh%2B%2BaeTeX01UrG%2Fu8%2BsfbdCsW4DOzkLrU8bc3NKGRQhiI5FJ73bBxeinGTTj%2FdA8B7zoj0jdAGA6sjjz2bUkJEmc03b18wkrMX1i65gMhf2VJiVa6DeqAwap4yvDT6T%2Bm4CBVo6OBXYwdbVkz1dlY0qp%2F0KnopzecX5Fy0slwHMU4ibUfmzdGPfZQ4XQ3OFEleOR5EdqtFFakKo4ThIY%2FwaRnOuaDmgoA21e%2FGzk2FqkLZN%2Fvyh1%2Fr6lKGEG1%2Bnc9ntnVWC3fgGiBorOslpPDwgkdz%2F0%2FG4zSEdzfpHQXilo5cmpg%2B3voSmSNz%2F4Dqt4spKASUpMouPSeKL2DwuwAt9DSoZEWS%2Bh7pwkDxPvlbDCbh9%2FJBjqkARDZqLf6VVhiIry1velBnxAX4tfN9If0%2BryvvlUys4PyJdvq%2BG4jumpmgXdvaWkzBWfadoxytzsHSt6RMcAVWLE9i5iMosJXkirMvmS2cgSqH1uQdjPLIdxLdCMVEERK%2BELmkvIapfl%2BL1ShOnxrx7fT6S8E2pzaocyJi%2F2vsD%2Bv5C7SoPr83Dj3QzOLh7hoG%2BZBHGkaFbMH8%2FXIsKuBDRl6JGrl&X-Amz-Signature=1ae7f01ebfc43c09b3f74e9f003566d25f499c0dcbac518f773674aea0ddf1a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
