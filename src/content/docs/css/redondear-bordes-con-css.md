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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVSTIVHL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T062456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD37YVa7yieNHXAL6jAcX95UEp8ntvalW7g4nb2rtq0rQIhAKoQEJwrsMq0apRSiPpDukCKe6WcE%2BBlfb%2FVwTSO91FDKv8DCFUQABoMNjM3NDIzMTgzODA1IgwjK2Df02751EePAH0q3AP1aCKqCQGQ5%2BxU0SmNd04yg6xe1hLU%2FclY8%2FwU1bfr%2BpHmXT7k1eBPWNqqf62xGeuIuy9jgsxyRg75u2okzdbKQuRLBZol7ovK%2Fhd8LdCHAxL7Hy1bWPpESIcaeHeF1uZSp87lRXyMYkw9zAsV4eBugH6EtpsjQ78NbDWfj7TxmkhljjvzkcNP8PdRWxAiNl%2F5chMsXQKDseEBGztUOI09N3D9aUJlvKRjDbQs%2FZkiReP46RxOi8mlR5czPkE7%2BCAw%2B%2BjczMapU40vSTtIdTiXvF%2BOBgyhAEDXvcMCOlvk7ymVvIZxc3OafVS47DAMK96hDGwG4fCBKEYmEETeazckkpVvtbOu9tJ6sJelg8cK5i3cRUlzr%2FrFU%2FikWWEoDIZ5Gcx4tRv3eK1DxshTJ1iIVJFgu7MDXIGWv1M0b6n9GAPlPLwCReX7ATQ%2BtiYFGMU%2BNBy84kQtqolEWm9tkqUoEFpshaWj7xx0c3pYaMaXgFYq84aMiEuAdVCo%2Ffh51knnmBRfvcu7HhB7fTg68cKg3pZxyqpEFyQEaubNnxWWM8lL%2FSUZ0majsxdvTbxZj5GmxF1XBACKtdH8%2B95wI9Lj58g4SCCP%2Fq5SMx2gSOoL1NYlhX3tX2EE8ebP8TD5scnJBjqkAc5gAnorCn%2FVzkfU6xG43AimA%2FuGxRXp8yBacKkoi4b83V4a4PypjmHrBsB%2BEvvXcruU6OrfaYTyKROmRxfMBjuru6%2Brhs5A5BoghD1xkadtGUJKFuAnyIgJQaHwKHmGRuo%2B%2BybJImtzTb7OBuFszNIoJ4VmISBeXzo7MK%2FOIbI8VJspC1Dn70OAOeVKDLzoUHo0MyzYaEBeOHUKVy5c1Z7zi%2FKC&X-Amz-Signature=83b0ba09362668e582032fe00007bcc6ef13d8fc0e8f0cacdcaf05f5138c6bec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVSTIVHL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T062456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD37YVa7yieNHXAL6jAcX95UEp8ntvalW7g4nb2rtq0rQIhAKoQEJwrsMq0apRSiPpDukCKe6WcE%2BBlfb%2FVwTSO91FDKv8DCFUQABoMNjM3NDIzMTgzODA1IgwjK2Df02751EePAH0q3AP1aCKqCQGQ5%2BxU0SmNd04yg6xe1hLU%2FclY8%2FwU1bfr%2BpHmXT7k1eBPWNqqf62xGeuIuy9jgsxyRg75u2okzdbKQuRLBZol7ovK%2Fhd8LdCHAxL7Hy1bWPpESIcaeHeF1uZSp87lRXyMYkw9zAsV4eBugH6EtpsjQ78NbDWfj7TxmkhljjvzkcNP8PdRWxAiNl%2F5chMsXQKDseEBGztUOI09N3D9aUJlvKRjDbQs%2FZkiReP46RxOi8mlR5czPkE7%2BCAw%2B%2BjczMapU40vSTtIdTiXvF%2BOBgyhAEDXvcMCOlvk7ymVvIZxc3OafVS47DAMK96hDGwG4fCBKEYmEETeazckkpVvtbOu9tJ6sJelg8cK5i3cRUlzr%2FrFU%2FikWWEoDIZ5Gcx4tRv3eK1DxshTJ1iIVJFgu7MDXIGWv1M0b6n9GAPlPLwCReX7ATQ%2BtiYFGMU%2BNBy84kQtqolEWm9tkqUoEFpshaWj7xx0c3pYaMaXgFYq84aMiEuAdVCo%2Ffh51knnmBRfvcu7HhB7fTg68cKg3pZxyqpEFyQEaubNnxWWM8lL%2FSUZ0majsxdvTbxZj5GmxF1XBACKtdH8%2B95wI9Lj58g4SCCP%2Fq5SMx2gSOoL1NYlhX3tX2EE8ebP8TD5scnJBjqkAc5gAnorCn%2FVzkfU6xG43AimA%2FuGxRXp8yBacKkoi4b83V4a4PypjmHrBsB%2BEvvXcruU6OrfaYTyKROmRxfMBjuru6%2Brhs5A5BoghD1xkadtGUJKFuAnyIgJQaHwKHmGRuo%2B%2BybJImtzTb7OBuFszNIoJ4VmISBeXzo7MK%2FOIbI8VJspC1Dn70OAOeVKDLzoUHo0MyzYaEBeOHUKVy5c1Z7zi%2FKC&X-Amz-Signature=8deb03ae9ebca3d55bdec3be6557fd0373d8828447e7cbd0fc2a46710ac0c19f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
