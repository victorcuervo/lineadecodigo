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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QYEHCWK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmQY8scmjel7kr7e7VoGMgvrKNfUvoxohyDyX4SulSMAiEA7MKoM3ptLscG4W%2BK%2FGMiqXB3RgpQGJhAtEDz1GuqUNgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGGTNnOwpUHQr4BnqCrcA4SretJp5ebUtOJZml9fZWw9y6a4ot2LwYjAtHjG7g7%2B8RwVRhDfLB%2B%2BbC4vmoW906qSAOyEzI%2Bscp0PVabSaVG6YfjAyh%2BrVryQJ9xmoN4ScjvwXEaoeftwoW74pjLVqkfXG35U4iKlX1Ogz6XXLx9%2FiQoquRdV%2FeCT0glcuGjcYUkH26N2lZOLx7HCv2DP%2Fv2SxYSgpeYHp1xl6f%2Brjqs3w1BuFtKoGtzmiDfiORYSxu7EIZAvS6Y3VqbiuwISePg9QLRt%2BuDXHteLdThe4mjCOs3iLHYXxXQcKM%2FolZ4ZPC64qEnRLeHhicWVdwmhw86KZgHFlan4TkXkzNlSnQYtE6QFmoIminnkptmB4GCNt7kAPYfdT4PjcMj%2BjdZ4ZvSBcMeiyp%2B2cf6eAv0WXM1i71TIPs9aIuG3l7028OBVGDysB2NBT9wFZF11tQ9iq2p4iP2db3Wa0ANk4HaQ35A5%2FB8wsb8PHuhNOok1s9mkNU91dYfywxSmptANjzX%2B9qp%2F%2Fk37bGPEPcVDUqNXMfH8b%2FJ8SifAojl8Igo5dZtBYqGjFQzfOUO7N1UK368B0D4S3NY35TMT62oQW%2B0gygmhefk6bK%2BvLBulywxz9q6pnIqE%2Ba09jKMGEHDyMKrSicoGOqUBbLpvfH%2BKp356C4FqspMAaAM0fQ9gcJAGuyg0RJ0EQH%2FkDRB9Pnrca6EBtfBG6LykMCfSjaHQ79rwfUQiU6ozyLpc8YgYlw9PPy3BIDrZdtmik0RLHFkLhv5L2WR5wI8iF4nGfpQ6JXKeZLh6KZGDWrWzwBiNi3fekOAGuUXEtZ3i0weHZhmsoyUW%2Bl%2FJdUNP5T87TcOR%2FVcP%2FEOq8UTREOJ2RKNG&X-Amz-Signature=a0192851317c001ce5b631b96e0078eed1242531047f64c67540ffc7790cb9b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QYEHCWK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmQY8scmjel7kr7e7VoGMgvrKNfUvoxohyDyX4SulSMAiEA7MKoM3ptLscG4W%2BK%2FGMiqXB3RgpQGJhAtEDz1GuqUNgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGGTNnOwpUHQr4BnqCrcA4SretJp5ebUtOJZml9fZWw9y6a4ot2LwYjAtHjG7g7%2B8RwVRhDfLB%2B%2BbC4vmoW906qSAOyEzI%2Bscp0PVabSaVG6YfjAyh%2BrVryQJ9xmoN4ScjvwXEaoeftwoW74pjLVqkfXG35U4iKlX1Ogz6XXLx9%2FiQoquRdV%2FeCT0glcuGjcYUkH26N2lZOLx7HCv2DP%2Fv2SxYSgpeYHp1xl6f%2Brjqs3w1BuFtKoGtzmiDfiORYSxu7EIZAvS6Y3VqbiuwISePg9QLRt%2BuDXHteLdThe4mjCOs3iLHYXxXQcKM%2FolZ4ZPC64qEnRLeHhicWVdwmhw86KZgHFlan4TkXkzNlSnQYtE6QFmoIminnkptmB4GCNt7kAPYfdT4PjcMj%2BjdZ4ZvSBcMeiyp%2B2cf6eAv0WXM1i71TIPs9aIuG3l7028OBVGDysB2NBT9wFZF11tQ9iq2p4iP2db3Wa0ANk4HaQ35A5%2FB8wsb8PHuhNOok1s9mkNU91dYfywxSmptANjzX%2B9qp%2F%2Fk37bGPEPcVDUqNXMfH8b%2FJ8SifAojl8Igo5dZtBYqGjFQzfOUO7N1UK368B0D4S3NY35TMT62oQW%2B0gygmhefk6bK%2BvLBulywxz9q6pnIqE%2Ba09jKMGEHDyMKrSicoGOqUBbLpvfH%2BKp356C4FqspMAaAM0fQ9gcJAGuyg0RJ0EQH%2FkDRB9Pnrca6EBtfBG6LykMCfSjaHQ79rwfUQiU6ozyLpc8YgYlw9PPy3BIDrZdtmik0RLHFkLhv5L2WR5wI8iF4nGfpQ6JXKeZLh6KZGDWrWzwBiNi3fekOAGuUXEtZ3i0weHZhmsoyUW%2Bl%2FJdUNP5T87TcOR%2FVcP%2FEOq8UTREOJ2RKNG&X-Amz-Signature=563bb1fc9ab233cd849af1344ba29352aa16dc8fc43cfa328a918b680d200ac1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
