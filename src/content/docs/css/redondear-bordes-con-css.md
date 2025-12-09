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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4N2ILTY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T041422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BYlbULMZJO9uhW0s2sWbAtP%2Fm80869AfCIkv2DreB2AiEAjY0KLtPngddqggngHIRUnNL81iY6Q4dtprmCMDH7KLYqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLHO3yYanIUf9VcDyrcA%2Bwgh8aS093yoYFOIBhDKJ%2Fhip8v1siiB9W406ra8X9jDlN1XPLRalAkSIbL%2F69KRQjvEiitC393wZ24j0gwT8pYLgpjUqxnxIHhStqbtzdr3nRPWi1%2BJH5Khko1X18PfNjOpB76tH8BuplozIR8HT%2FyJPhyszz5mzleQwAoclfbJoLMtOr%2BZO4X17yBg9UaCrD7vtXp1dQGucM9AQzJk9q1j0nTW6%2BtWDe0Wq6qJPylVd0gk3AjvccDkVA%2BJWl%2Bo9luO7IdS5oUVYPUn98j00eBXsjQ7rLE2oDXH1ZY2WfETha7%2BFu1oEOvpZLFtim0I9Fwc6Nri32DqVkCA4k5PlRi7kAF3w3c1W9PPkcA7vux%2FszZkZ0%2F9FiM9EKyIooRx5MD5mJcOUe8SqixNRteMSsXnzwX33jZypqzAQgoxuXqPEsvo5MXyak%2BT2HTL3GAiYEPdcGLtE6ha25okzIQYc9KYtlYNu8BtGiRMrTv7XpBs3esg4JW5yVqSHfkPKIvio0aWXE7bFSB7XVMvQr4RFMo7rMwta97v5fDMrTSDRxbtkJ02bQjX6M%2FwAw2ANBVas4UE6yeNrZeGQIK%2FToxIQ%2BglU2P91zvIgOHVyYPh6lrifwhHiN%2B30M88pzMMJmu3skGOqUByFVAuLiFO%2FY%2BesbbyxLwtLAsSKsxyYe63%2BarPVYzK%2BnFWbm%2FGe2Kt8UHS3ZUVlx8hurIxn73jD1fNDKwB0G7C2sdVEoyN5zsGaXTFXljSuyWriWl1ozJDhLUqLUsS7uW55Fe%2BSiETJBCczuaP2IvXu6n9FGk4c68gwVD%2Fg6sCqMPyBX5BBEp%2BlC7gGsbZ362eQzU5JVr5l6oGRT1QVpumzRmL9XV&X-Amz-Signature=61a2a6695fa1388fd8f1c714afec45c5cbe2a26fe966eafc163225d163b64b7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4N2ILTY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T041422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BYlbULMZJO9uhW0s2sWbAtP%2Fm80869AfCIkv2DreB2AiEAjY0KLtPngddqggngHIRUnNL81iY6Q4dtprmCMDH7KLYqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLHO3yYanIUf9VcDyrcA%2Bwgh8aS093yoYFOIBhDKJ%2Fhip8v1siiB9W406ra8X9jDlN1XPLRalAkSIbL%2F69KRQjvEiitC393wZ24j0gwT8pYLgpjUqxnxIHhStqbtzdr3nRPWi1%2BJH5Khko1X18PfNjOpB76tH8BuplozIR8HT%2FyJPhyszz5mzleQwAoclfbJoLMtOr%2BZO4X17yBg9UaCrD7vtXp1dQGucM9AQzJk9q1j0nTW6%2BtWDe0Wq6qJPylVd0gk3AjvccDkVA%2BJWl%2Bo9luO7IdS5oUVYPUn98j00eBXsjQ7rLE2oDXH1ZY2WfETha7%2BFu1oEOvpZLFtim0I9Fwc6Nri32DqVkCA4k5PlRi7kAF3w3c1W9PPkcA7vux%2FszZkZ0%2F9FiM9EKyIooRx5MD5mJcOUe8SqixNRteMSsXnzwX33jZypqzAQgoxuXqPEsvo5MXyak%2BT2HTL3GAiYEPdcGLtE6ha25okzIQYc9KYtlYNu8BtGiRMrTv7XpBs3esg4JW5yVqSHfkPKIvio0aWXE7bFSB7XVMvQr4RFMo7rMwta97v5fDMrTSDRxbtkJ02bQjX6M%2FwAw2ANBVas4UE6yeNrZeGQIK%2FToxIQ%2BglU2P91zvIgOHVyYPh6lrifwhHiN%2B30M88pzMMJmu3skGOqUByFVAuLiFO%2FY%2BesbbyxLwtLAsSKsxyYe63%2BarPVYzK%2BnFWbm%2FGe2Kt8UHS3ZUVlx8hurIxn73jD1fNDKwB0G7C2sdVEoyN5zsGaXTFXljSuyWriWl1ozJDhLUqLUsS7uW55Fe%2BSiETJBCczuaP2IvXu6n9FGk4c68gwVD%2Fg6sCqMPyBX5BBEp%2BlC7gGsbZ362eQzU5JVr5l6oGRT1QVpumzRmL9XV&X-Amz-Signature=3abcd4d5dc29d5e518d91acb85dd9bde824a11a95f02ecc65a054c067eb4aca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
