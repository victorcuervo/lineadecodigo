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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RHWFHE7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T085101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt88RyITfMb0jk0l5NoAC%2Fzvgec76%2BXHvXNsZ4XqVSpgIhAKQnKAAH42H9uyMIz62BmsrYVfnqIe1z0nrM%2BFH3g3peKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzs8k4BuwI5HJDAdEoq3AOsbuab%2BGxIqgnfOzur5mrauKg133MbEf7H2%2F4WGWceM0cm0IRFlnkQKV2ZEezHdsUWjWN0G8FBa4f65gWdY8KU9hW3GKB0%2Fv9dC%2BwuJDCDGGP%2FAF8MqlsnYUmAaimn9BJndzh9h58K3ykXQBrfXs5BbXXbMqKsoLDmVYYJSr0TIGVvqEOAzoZiq%2FtKomkG1nZIhI7go%2FDWa3MNZveBu6wfjZU9FYt%2FJ4lIkqGeRwpCQi2jQ1HxBEv7pzLs0VNo8QsamzwBy8SuSsQFXsIJyGEC0sBT6fHz7DEmtF%2Bq7Jf6K7HYS0q2B7bq1BRsRZG8aJryPNminR587r1lgSUBIgrVUXL0i7cf1av7BnCrBWyLDnishPewwKHl9ReHO5odJkAzK3NIzAkRy%2FvrTMjXA9rvq1lC24W2Sq8hvw62h7BIinwfS0c3lk68SeLRzyGK8shOB4NBbBlZ27DQFE9%2BVDB9tOMD8wKAjYv87SuhAlJVqy%2FwPzFgvQZqqDuwoOulQtghijRGo%2F4kXeZt1LW09TJNdTgcLeP97HWeAcvoNs60YvU9%2B8Si7EadBhlMOxKOnF1p95H8uIXiZyB7rvNRMMrzzxZxzeC5XJoOB%2BIrve8ldFTJrof90RTN9eixMzCJotTJBjqkAfsCTVHPCLwJxuVCD1BWT42Ixbdlt2xKYXpWiBdYyHrU4rfIx%2BhX50nhWNgLsiaMpr2Sm5Tr%2FSSyNkOZmo%2BFrGz3TECiONTA2jvNLFi0kMZhvoJzUQ3UW%2FU44QM1Ys69QRMcsA204LrZyJ6JPu970mp0%2F%2Fook1S8bT%2FDR0w8VZtD6sk%2FOX6PDx9ojaeY40a9EBqaWIkKNMyKKcocS7cTH39j6GNw&X-Amz-Signature=604ee78c63dbb2931ac8a3f05034fe93924b639d15f3be4b0fc799485da2e748&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RHWFHE7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T085101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt88RyITfMb0jk0l5NoAC%2Fzvgec76%2BXHvXNsZ4XqVSpgIhAKQnKAAH42H9uyMIz62BmsrYVfnqIe1z0nrM%2BFH3g3peKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzs8k4BuwI5HJDAdEoq3AOsbuab%2BGxIqgnfOzur5mrauKg133MbEf7H2%2F4WGWceM0cm0IRFlnkQKV2ZEezHdsUWjWN0G8FBa4f65gWdY8KU9hW3GKB0%2Fv9dC%2BwuJDCDGGP%2FAF8MqlsnYUmAaimn9BJndzh9h58K3ykXQBrfXs5BbXXbMqKsoLDmVYYJSr0TIGVvqEOAzoZiq%2FtKomkG1nZIhI7go%2FDWa3MNZveBu6wfjZU9FYt%2FJ4lIkqGeRwpCQi2jQ1HxBEv7pzLs0VNo8QsamzwBy8SuSsQFXsIJyGEC0sBT6fHz7DEmtF%2Bq7Jf6K7HYS0q2B7bq1BRsRZG8aJryPNminR587r1lgSUBIgrVUXL0i7cf1av7BnCrBWyLDnishPewwKHl9ReHO5odJkAzK3NIzAkRy%2FvrTMjXA9rvq1lC24W2Sq8hvw62h7BIinwfS0c3lk68SeLRzyGK8shOB4NBbBlZ27DQFE9%2BVDB9tOMD8wKAjYv87SuhAlJVqy%2FwPzFgvQZqqDuwoOulQtghijRGo%2F4kXeZt1LW09TJNdTgcLeP97HWeAcvoNs60YvU9%2B8Si7EadBhlMOxKOnF1p95H8uIXiZyB7rvNRMMrzzxZxzeC5XJoOB%2BIrve8ldFTJrof90RTN9eixMzCJotTJBjqkAfsCTVHPCLwJxuVCD1BWT42Ixbdlt2xKYXpWiBdYyHrU4rfIx%2BhX50nhWNgLsiaMpr2Sm5Tr%2FSSyNkOZmo%2BFrGz3TECiONTA2jvNLFi0kMZhvoJzUQ3UW%2FU44QM1Ys69QRMcsA204LrZyJ6JPu970mp0%2F%2Fook1S8bT%2FDR0w8VZtD6sk%2FOX6PDx9ojaeY40a9EBqaWIkKNMyKKcocS7cTH39j6GNw&X-Amz-Signature=91e4c3eae6cc6ed1740fb54fe6b5ce25b84bcd55dc110b971d278960f0da2957&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
