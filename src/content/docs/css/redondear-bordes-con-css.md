---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDUA446L%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIGGqx6IL%2BcyYJhyQyVaZK8ilqIMk9hwDzPFyF66PjHlnAiEAxWrXWwylW%2Bh9c7liTTNM11m53ACUElhlVJXAVpzyWbkq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDPm5AUJ6X0QHxW%2FbeSrcA6ENduHQeXR%2BkTTFAa38xNbzrnOFv0oxtld2Lvdu2efHJ5OuPP6Xg%2B6e%2Fajkw8%2BYrGowMhvAdYOcaq9FYf7%2FYh76sBoqAoTXEq1qm42QbMbyQUUjmWrJNXuxueSMIwxzpjwU4mNs3fDSC27CdONcloWOjWtENN30Po5mHwUo1iHjfBLokbNZANu6vIXo7fr%2Ffqwmb2PLe0mPWH5uQR70uXvKSakQ9W3jd7FgxFl7Z2GzrCwxCYxteaIaM46pxc1Yy2slAOYmdiltpQLmuklh3%2FZ%2BYCD%2FtiJRE03CaYQetKTiQ%2FvZHj0kxNA1j6EPX%2BRwOEy3wiRm59ZaA3x0r3CUdisk9T0zYm329hcOSo54lq8Uy7jPA420fncSvr59RYp%2BGjtCg0DH2DKYiXpC1%2BOu5Efx83NXLb8RxTb31%2FIER%2BpL56v9toT22CA80zP1vkXV7wEj0qGKa%2BqI5pv7cvXudqSuwUwZBU%2Bnw2iPU1jXfSxPI5E0ChZFPi2tpNr7UGWw1j%2FBhabDz%2BmTnemW0hqn3Fi%2FhQ8sW17hjgLg3s%2FlkEW7Lt1mDWHDsY9Ee1fBVvA%2FclUoJVm1KuW6atb1rVqNpOxALxZPfvEA5vNrrwV125dbVWIcXpyfMJ8IWB8OMP3mxckGOqUBb7YWX1ZriuBCYgPIEugjhhM5ypZwkU39RgFiNLN99qUNZ5AJzddHQgyzQE9sVpSDJ8Si5n3cxtz%2FTK0hclwOb2R6nJcLVuxWqKT67rsC2jnKcGaIK3kz8%2BQjmoE7PzemReGddVnJ4j1eL7SCyOM6mlRVoahH49PwdtmIg7xZ0Bn1UbFWM3kd7DjbG1CUIzxZk8NS2Dn%2BemTNPxg6qQ7DXAbDcApv&X-Amz-Signature=03943265f802332c55beb18a630f2fd17d68417e1741ad1cf7321cdd62703b50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDUA446L%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIGGqx6IL%2BcyYJhyQyVaZK8ilqIMk9hwDzPFyF66PjHlnAiEAxWrXWwylW%2Bh9c7liTTNM11m53ACUElhlVJXAVpzyWbkq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDPm5AUJ6X0QHxW%2FbeSrcA6ENduHQeXR%2BkTTFAa38xNbzrnOFv0oxtld2Lvdu2efHJ5OuPP6Xg%2B6e%2Fajkw8%2BYrGowMhvAdYOcaq9FYf7%2FYh76sBoqAoTXEq1qm42QbMbyQUUjmWrJNXuxueSMIwxzpjwU4mNs3fDSC27CdONcloWOjWtENN30Po5mHwUo1iHjfBLokbNZANu6vIXo7fr%2Ffqwmb2PLe0mPWH5uQR70uXvKSakQ9W3jd7FgxFl7Z2GzrCwxCYxteaIaM46pxc1Yy2slAOYmdiltpQLmuklh3%2FZ%2BYCD%2FtiJRE03CaYQetKTiQ%2FvZHj0kxNA1j6EPX%2BRwOEy3wiRm59ZaA3x0r3CUdisk9T0zYm329hcOSo54lq8Uy7jPA420fncSvr59RYp%2BGjtCg0DH2DKYiXpC1%2BOu5Efx83NXLb8RxTb31%2FIER%2BpL56v9toT22CA80zP1vkXV7wEj0qGKa%2BqI5pv7cvXudqSuwUwZBU%2Bnw2iPU1jXfSxPI5E0ChZFPi2tpNr7UGWw1j%2FBhabDz%2BmTnemW0hqn3Fi%2FhQ8sW17hjgLg3s%2FlkEW7Lt1mDWHDsY9Ee1fBVvA%2FclUoJVm1KuW6atb1rVqNpOxALxZPfvEA5vNrrwV125dbVWIcXpyfMJ8IWB8OMP3mxckGOqUBb7YWX1ZriuBCYgPIEugjhhM5ypZwkU39RgFiNLN99qUNZ5AJzddHQgyzQE9sVpSDJ8Si5n3cxtz%2FTK0hclwOb2R6nJcLVuxWqKT67rsC2jnKcGaIK3kz8%2BQjmoE7PzemReGddVnJ4j1eL7SCyOM6mlRVoahH49PwdtmIg7xZ0Bn1UbFWM3kd7DjbG1CUIzxZk8NS2Dn%2BemTNPxg6qQ7DXAbDcApv&X-Amz-Signature=9fa2f95929eec3e4c4b6781bed1cf0ea68139a749c22bfbcfeed57b29ef0c8a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
