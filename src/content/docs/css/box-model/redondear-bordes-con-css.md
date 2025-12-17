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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4J7DPYJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICgsL5L4JSJovvrcaULCN8rfP5pzIy9FKoX0A6IaqhCPAiEAk5T%2BaiW8PZUBZAV2vTEPYKIZQCmOjBkanaIturhr%2Fw0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJeNXy%2FLsVVzZQuMcCrcAxc4EE43jVmpNO5QmGZ1FU9XIGQJy7duJFB4uw04y8N2e4Wk73lSkg1vApBq3%2Fmu0wXX4gzTblRANyP2qVbwCAWYWaZTv64aUqBLJOBRrCkn7q2pjxEq4NSCzm2O%2Fl09SbTitWHV0HtzdX6B7HghBwBu3vVnDCwNGYgTZAEww7wQ1qPupdOcVFdPG1kcDU5aRgPjC2GJLeDBFM12dw5nwa7%2BCQ%2FPkbdzQAaF04LwHa6O%2F1jzshSNjBtLEkWPKFTmdVyqpFlT2W6sDgha3Zf6un7PZIx7jc7jBhT%2BBPdQjoLOethPGOcjIHv33p5l7nlXT93V1KQ%2BE%2Fam53BMvyp%2BOCIEzyJa97wLRumAWqeAJS1rH33fe1Tjv7LSQZPFivTH9Fg7Gam9Q%2FILK0mP6Ogj0vv2qxtSYYkxZEzL%2BdLRvksl2dqlqksBuBGNsxWDVfUiTBdbSyFru7jSss0SaTns9CCykq%2FP1UDyAYLumHPVSEbVKo%2FW3rAeUIBinl49S4ASNrjCuFbPPTZslBvbciL73o%2BSpmW8fgEmpKs1T25tQbZ8309neyOdw9YZHd64VI%2F2rc2LZwIfWQP5pqC4KQwB%2BiZCwqe9ek81MJf58QP7fK83os8OtYZMvZfH0L%2BWMJqXiMoGOqUBSMLTPTedI2pSQmDKosjCj0VMNEdoPqEYltRAMLgc0kEKZP5iFN78pQoTdEft3EYJxVU4JxqeSemSWSQMRI8vVL0GnCK6VRm74kjf%2BKQw1eKlW5OCwg3huH%2FE2WsgED4Akc0Y0Pq1NRQdWgvnUmEn4YmGdD%2BhVMqbavpk8725pSaTIfZu97TMP3quX%2BU402PMfbuAhJlddG11Zt5fH49Vxn83Zt5W&X-Amz-Signature=5cdb7f34bf76607e69e2eaf14d16d77fbbc5ad356ef9d42807fa90e3b95935e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4J7DPYJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICgsL5L4JSJovvrcaULCN8rfP5pzIy9FKoX0A6IaqhCPAiEAk5T%2BaiW8PZUBZAV2vTEPYKIZQCmOjBkanaIturhr%2Fw0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJeNXy%2FLsVVzZQuMcCrcAxc4EE43jVmpNO5QmGZ1FU9XIGQJy7duJFB4uw04y8N2e4Wk73lSkg1vApBq3%2Fmu0wXX4gzTblRANyP2qVbwCAWYWaZTv64aUqBLJOBRrCkn7q2pjxEq4NSCzm2O%2Fl09SbTitWHV0HtzdX6B7HghBwBu3vVnDCwNGYgTZAEww7wQ1qPupdOcVFdPG1kcDU5aRgPjC2GJLeDBFM12dw5nwa7%2BCQ%2FPkbdzQAaF04LwHa6O%2F1jzshSNjBtLEkWPKFTmdVyqpFlT2W6sDgha3Zf6un7PZIx7jc7jBhT%2BBPdQjoLOethPGOcjIHv33p5l7nlXT93V1KQ%2BE%2Fam53BMvyp%2BOCIEzyJa97wLRumAWqeAJS1rH33fe1Tjv7LSQZPFivTH9Fg7Gam9Q%2FILK0mP6Ogj0vv2qxtSYYkxZEzL%2BdLRvksl2dqlqksBuBGNsxWDVfUiTBdbSyFru7jSss0SaTns9CCykq%2FP1UDyAYLumHPVSEbVKo%2FW3rAeUIBinl49S4ASNrjCuFbPPTZslBvbciL73o%2BSpmW8fgEmpKs1T25tQbZ8309neyOdw9YZHd64VI%2F2rc2LZwIfWQP5pqC4KQwB%2BiZCwqe9ek81MJf58QP7fK83os8OtYZMvZfH0L%2BWMJqXiMoGOqUBSMLTPTedI2pSQmDKosjCj0VMNEdoPqEYltRAMLgc0kEKZP5iFN78pQoTdEft3EYJxVU4JxqeSemSWSQMRI8vVL0GnCK6VRm74kjf%2BKQw1eKlW5OCwg3huH%2FE2WsgED4Akc0Y0Pq1NRQdWgvnUmEn4YmGdD%2BhVMqbavpk8725pSaTIfZu97TMP3quX%2BU402PMfbuAhJlddG11Zt5fH49Vxn83Zt5W&X-Amz-Signature=a2672cb1d8a02e0e1a4d369a9f399e072c96f3932d046a9bf8dcd3e9386396dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
