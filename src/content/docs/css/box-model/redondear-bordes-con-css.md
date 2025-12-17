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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T2CXNZL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3%2FLo3vvnRsaYRI1n72yI6l9Ax69KXim30m3tYAla1MAiBmAZ%2BnZjmbwuSogE%2FCE5coJ5wxE73VkkbAdGqxRcvEySr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM1Nb3Ma7GHx8Jy9EOKtwDWXTxuFcikLF3tSIGrwbMBWczRHzpM7J0ZwDtPwxZPULBqx0cDJBjQAOQq%2FwX1IhP63zXmgclJuAK%2B1N8LMUDjOI4vOLPpBNAgAXdf8mAG%2B7FgE2%2BrpEdyxL3T3xkRqr6bKYIqC%2FcalIJ7WJ%2B7MEf10XvMxmSQA7EBRNoc%2Filbj9bZmiGZ6ANL8PgbKsnJSoLkckjTy3qUAXNWQ9q700dnyLGl0e31Z%2FEqF7%2BwAUr9QTqTqJixofbGVAs13dcDXbLg5G3tP%2FneWUFjJ%2BhWCkTq5iTQ3tFvm0lt6dkUqGcVglxRfRJKq35bjua8G1IAeCPAFINjI7pHl40AgfNuZGWzsjElgYP9UfD34TlsKbi3ZseWeaoBi9C9X5f5A1z8EgctdPffPkXXtLIBfIZgWeUEQlD8TTw5AfH9KcIVROGd%2FGAn8l9LrZaMpMuTrTvhfqT%2FKwgpQRAwdcaaSrEqn8tVC6hxmq18TRNFtQFhOwiGL2hIgn4Jw%2FNnt0vMju6zyz5ydOMT4sAyP4iQVyTYK6DI3FeGOaVYWSIIcHP7cwnJ%2BFQVdhAHMaTNRcC%2FQXenq31%2Bv8LuTiEMQQDg8BwY7f22UA8fg9Bb3hrFjT8mcLuI4jrOkYxzyvwluIk0fow3aqKygY6pgGG7MPlh5V72NgUEDk%2FTM5xhVXDudrhQ7rU8ebb0A2At0ocrH6T1CSbLfzwjidMySqfsYS562Sikkb72E8urKQtVREcb7G%2BNr9r9AcozHthWhsL3YkwZqM%2Fg20rYRga%2BdyWTH2YMgqniSjlmuZY%2Ft%2B%2B6Trkeq63UCeYFbjAVmlOG7HCM9M%2FzJAye3CWCdr%2BAH2ajVosAtiz0hLgDKYiDabgRKPZ49ie&X-Amz-Signature=23fc8b2601a748246cbb056ea6b669ff93c027ba9971c438e3b64ba8a1e21336&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T2CXNZL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3%2FLo3vvnRsaYRI1n72yI6l9Ax69KXim30m3tYAla1MAiBmAZ%2BnZjmbwuSogE%2FCE5coJ5wxE73VkkbAdGqxRcvEySr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM1Nb3Ma7GHx8Jy9EOKtwDWXTxuFcikLF3tSIGrwbMBWczRHzpM7J0ZwDtPwxZPULBqx0cDJBjQAOQq%2FwX1IhP63zXmgclJuAK%2B1N8LMUDjOI4vOLPpBNAgAXdf8mAG%2B7FgE2%2BrpEdyxL3T3xkRqr6bKYIqC%2FcalIJ7WJ%2B7MEf10XvMxmSQA7EBRNoc%2Filbj9bZmiGZ6ANL8PgbKsnJSoLkckjTy3qUAXNWQ9q700dnyLGl0e31Z%2FEqF7%2BwAUr9QTqTqJixofbGVAs13dcDXbLg5G3tP%2FneWUFjJ%2BhWCkTq5iTQ3tFvm0lt6dkUqGcVglxRfRJKq35bjua8G1IAeCPAFINjI7pHl40AgfNuZGWzsjElgYP9UfD34TlsKbi3ZseWeaoBi9C9X5f5A1z8EgctdPffPkXXtLIBfIZgWeUEQlD8TTw5AfH9KcIVROGd%2FGAn8l9LrZaMpMuTrTvhfqT%2FKwgpQRAwdcaaSrEqn8tVC6hxmq18TRNFtQFhOwiGL2hIgn4Jw%2FNnt0vMju6zyz5ydOMT4sAyP4iQVyTYK6DI3FeGOaVYWSIIcHP7cwnJ%2BFQVdhAHMaTNRcC%2FQXenq31%2Bv8LuTiEMQQDg8BwY7f22UA8fg9Bb3hrFjT8mcLuI4jrOkYxzyvwluIk0fow3aqKygY6pgGG7MPlh5V72NgUEDk%2FTM5xhVXDudrhQ7rU8ebb0A2At0ocrH6T1CSbLfzwjidMySqfsYS562Sikkb72E8urKQtVREcb7G%2BNr9r9AcozHthWhsL3YkwZqM%2Fg20rYRga%2BdyWTH2YMgqniSjlmuZY%2Ft%2B%2B6Trkeq63UCeYFbjAVmlOG7HCM9M%2FzJAye3CWCdr%2BAH2ajVosAtiz0hLgDKYiDabgRKPZ49ie&X-Amz-Signature=39936c3b998c1883343ee916b2e592a2adf729b08003f53df91ba15cfe1e5045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
