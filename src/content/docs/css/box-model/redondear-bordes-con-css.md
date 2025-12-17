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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XMEEW7V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJU3gwelszlUv93USoBoTcOXqOYLEVV2ts4R0yEnGdNgIgVoZCyHhp4NjYMf7r35RvdNkh67YLq2MCFhzax%2BumBJkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAhCvqjlwcKKakmUoSrcA5vEit39N6M%2FXywt8mLkKo%2FYbaiUALZa5sIJ7KiCQzzGBSpyfRDZCsmVW9YLqx2LCNqxuOlFgf5pSF6KiyXcZIGiHWLSPK7TJYc8%2BCJ6XNxsVBFUt%2F7faSMbz5SRicow7nB9m3jZY3FJ91mPrgitHlXvtXiyyMBFT54C%2FeIVhDrMPB9ehwYKPfGNgIzDGpMb3f1vonmdtV%2FcvNVbz73mhTNr%2Bo3TouTMoTqtl0FEEl1Vugg0cSHCkkavmtnajOivW0i5FV2apSRpBkpZC2zb8o%2FysuDGmZ2EU6LDY5h%2F53IY6g0N98CFhanYj9Bo0iBdZZYT8CmVGjWO6Ehru7v11Su%2BOAb5unAtYctxi98x8w8RHKFHrffE1ZDwZKTZzMY0j7F5dky9u8Sb%2Bn3URDAPr%2BF5yVdUIqGpDuFIAExH%2FVyW5vdwApLeM8gHp8uT6TKGP19GzZNt7rl2fXgRoD3yc%2FOQLjuXSFV2R2V8Gt%2BwIb%2FV8rLUjrMe22xkqFXjNajJs67Y7ayER2RiWvYEWOIEVeJkipaVoxhgSY3F%2FLp7bJgwgIqeAWuHith67s1kym4OT35DLjImyef0ux0P%2BmO%2B%2BPIcQtw0wxQhOBMNOCQHewyOUeQfcbxmZRqmUEpvMLXeh8oGOqUBlkksebIBSt6E%2B7m7MiwFNpiu2n%2FGd3numUlZ18fU5A6bBBVJSlzw7IHh2r41V7oI0WABfZH2IMnZ4tg4rNYG5dlVh5QHWr7drPl2MbSAVmfn0OxvuCiXP%2FN%2B8jtNd0%2FnlBYEVUXfHyGVcPnN5rCq2rOScsM10kny2l7XZeuOwpsCBm%2FG3lT1i%2FR%2BJK1pNHFYK0OgNB9tYTgExbVAgsKWFL2bF%2BTG&X-Amz-Signature=bfb4720f20ed009249c2556e7517db1656d474876aa376de79767ae6ab80cf7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XMEEW7V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJU3gwelszlUv93USoBoTcOXqOYLEVV2ts4R0yEnGdNgIgVoZCyHhp4NjYMf7r35RvdNkh67YLq2MCFhzax%2BumBJkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAhCvqjlwcKKakmUoSrcA5vEit39N6M%2FXywt8mLkKo%2FYbaiUALZa5sIJ7KiCQzzGBSpyfRDZCsmVW9YLqx2LCNqxuOlFgf5pSF6KiyXcZIGiHWLSPK7TJYc8%2BCJ6XNxsVBFUt%2F7faSMbz5SRicow7nB9m3jZY3FJ91mPrgitHlXvtXiyyMBFT54C%2FeIVhDrMPB9ehwYKPfGNgIzDGpMb3f1vonmdtV%2FcvNVbz73mhTNr%2Bo3TouTMoTqtl0FEEl1Vugg0cSHCkkavmtnajOivW0i5FV2apSRpBkpZC2zb8o%2FysuDGmZ2EU6LDY5h%2F53IY6g0N98CFhanYj9Bo0iBdZZYT8CmVGjWO6Ehru7v11Su%2BOAb5unAtYctxi98x8w8RHKFHrffE1ZDwZKTZzMY0j7F5dky9u8Sb%2Bn3URDAPr%2BF5yVdUIqGpDuFIAExH%2FVyW5vdwApLeM8gHp8uT6TKGP19GzZNt7rl2fXgRoD3yc%2FOQLjuXSFV2R2V8Gt%2BwIb%2FV8rLUjrMe22xkqFXjNajJs67Y7ayER2RiWvYEWOIEVeJkipaVoxhgSY3F%2FLp7bJgwgIqeAWuHith67s1kym4OT35DLjImyef0ux0P%2BmO%2B%2BPIcQtw0wxQhOBMNOCQHewyOUeQfcbxmZRqmUEpvMLXeh8oGOqUBlkksebIBSt6E%2B7m7MiwFNpiu2n%2FGd3numUlZ18fU5A6bBBVJSlzw7IHh2r41V7oI0WABfZH2IMnZ4tg4rNYG5dlVh5QHWr7drPl2MbSAVmfn0OxvuCiXP%2FN%2B8jtNd0%2FnlBYEVUXfHyGVcPnN5rCq2rOScsM10kny2l7XZeuOwpsCBm%2FG3lT1i%2FR%2BJK1pNHFYK0OgNB9tYTgExbVAgsKWFL2bF%2BTG&X-Amz-Signature=96a367f75d17dcfe36531865841a5a1dc97f748a4a8eaa00fdd3325cdd2a23e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
