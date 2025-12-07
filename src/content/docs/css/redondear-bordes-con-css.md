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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FCRCOJK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T104431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCS7%2F13B227v8MqNQDw7kEceCuyGbp8WqzA7MNMisV80QIgNNfnwWfwjwunyqYfJqLWU09jJ8WtcGDDtzZpPzVuZsAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHuXW%2BNtdi81kSAiircA7E7nLL7803%2FCewqReey3sW0JjRHXRJ6%2B7%2F%2BjQN8N06UrVRmKxMnpN4v2e7LT0xYofjH0CWLPDM%2FwBx6YdKW812Si%2BTLld4f2hg9eAwrFJgU9DNR3R2Kfb7rYc6LtcUq40s%2FJFnFpd3aTHVIF%2B5ySb5qT5sJaBA9mf0omwTdHCBha5EfYbNreXz2t4WZ%2Fuj51C0nqIjfk3YRWLW%2Fli6XgwOpkkpEjA629xmarQUFqfYdtsP0TyZPH4US8t8XJxCb6xD%2B0cmElx9ZsP%2BEs1BYIT9AnWlEPsukg3GHcm21cli1dTXvg05%2BuamJsbPyM2rKv8p7TKSry%2BaBy1GpyMX%2FwOn5wHIRm22QRHSLzDdJ8XW0QAZcF9Scvye%2FAK9sYT8HSBgGNzIQ5wTD1PHloHpKTvoeu3Had3jiiWzWsxae05HnkbBbmehS3ry6ghRQFQSQO8UXgFYoi94TxqQ9PY1fvkusSHiIpd5e0pGSKq9FpshTPRQRyMfBdqT7AdHbrv%2BNcKvDJBPIog4H2I5whOha8Sx0S1vtj9xP8fBAIjnKu0GQMa%2BnG3UHH5AZ1XsXgNNgwKlK0DksPiLzWjuF9m8DqgIr7PfmJ6b7jbCEZPmwhDgV5Y%2BJvA5B%2F8C%2FyTx9MKGZ1ckGOqUBLYS8Cd6INgmBg39nrmjdGPy5UKu69UNjpC%2FtfTMp9I2aHxxthrqUBgK56saL2t98JVFUx8cvozgshqUbi73WRgF0Rj%2BRcDxkhBFlzUgDWuET7qo9IKyo0U6CGM5iiSRkFIif%2FhovTGYAZp9D2EJeJjmlEgRWbHWHKQsJabTtBF%2BWy3Fs8FMwsPdtXsXtbvSULPDRNIJPtHNbeu3kc70p4VXUSwHj&X-Amz-Signature=4705352f6b665f8e3c834f7cfe1fbc1f2d54e7667c0561667ee491a4cf2dd71e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FCRCOJK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T104431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCS7%2F13B227v8MqNQDw7kEceCuyGbp8WqzA7MNMisV80QIgNNfnwWfwjwunyqYfJqLWU09jJ8WtcGDDtzZpPzVuZsAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHuXW%2BNtdi81kSAiircA7E7nLL7803%2FCewqReey3sW0JjRHXRJ6%2B7%2F%2BjQN8N06UrVRmKxMnpN4v2e7LT0xYofjH0CWLPDM%2FwBx6YdKW812Si%2BTLld4f2hg9eAwrFJgU9DNR3R2Kfb7rYc6LtcUq40s%2FJFnFpd3aTHVIF%2B5ySb5qT5sJaBA9mf0omwTdHCBha5EfYbNreXz2t4WZ%2Fuj51C0nqIjfk3YRWLW%2Fli6XgwOpkkpEjA629xmarQUFqfYdtsP0TyZPH4US8t8XJxCb6xD%2B0cmElx9ZsP%2BEs1BYIT9AnWlEPsukg3GHcm21cli1dTXvg05%2BuamJsbPyM2rKv8p7TKSry%2BaBy1GpyMX%2FwOn5wHIRm22QRHSLzDdJ8XW0QAZcF9Scvye%2FAK9sYT8HSBgGNzIQ5wTD1PHloHpKTvoeu3Had3jiiWzWsxae05HnkbBbmehS3ry6ghRQFQSQO8UXgFYoi94TxqQ9PY1fvkusSHiIpd5e0pGSKq9FpshTPRQRyMfBdqT7AdHbrv%2BNcKvDJBPIog4H2I5whOha8Sx0S1vtj9xP8fBAIjnKu0GQMa%2BnG3UHH5AZ1XsXgNNgwKlK0DksPiLzWjuF9m8DqgIr7PfmJ6b7jbCEZPmwhDgV5Y%2BJvA5B%2F8C%2FyTx9MKGZ1ckGOqUBLYS8Cd6INgmBg39nrmjdGPy5UKu69UNjpC%2FtfTMp9I2aHxxthrqUBgK56saL2t98JVFUx8cvozgshqUbi73WRgF0Rj%2BRcDxkhBFlzUgDWuET7qo9IKyo0U6CGM5iiSRkFIif%2FhovTGYAZp9D2EJeJjmlEgRWbHWHKQsJabTtBF%2BWy3Fs8FMwsPdtXsXtbvSULPDRNIJPtHNbeu3kc70p4VXUSwHj&X-Amz-Signature=5058a3761bfbbff2279a0853a0e8aab869ce5d0bb763500b3d40f731ab3aacda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
