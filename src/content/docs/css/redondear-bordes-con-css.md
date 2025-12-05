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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REMSPT36%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T131629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BmkKdseaw8DBLhzH29Pn5CTx82C8uYBgtz7%2FjModkCAiEAzOF6Q3KLwbYUm91E6Da%2B1sEOW2NiHshVtz9xvphfyz8q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDMN6cvhcpIKI8%2B80WCrcAwz%2BU0fV29Y%2FnoRiJU8eWlwu3kdeZMgz4rZrH5ZhLRlZQ4WuhCgClGt0n4WHob%2ByXJogzFA7Dvu0tXhJTDnkhMakmqo2QacJATF8yq4Rp5QmUg53IEH6yzcV3cNbq6MtYjzCI8YZaCOE%2BXukklsVnM%2BrSE5px5Kwq01HSy0CIXMwoLa38sL6J5lQsPE18NAWMLWhKYhR6aYEmKTISuaCzLF9Yr%2FhkXU00ihDCTy9nBjQEXudJYotVetgknPGz06Rn1gN8w%2Fe4I99tW6Qn9K5fZWPVEDuYLvxALlzvRx5KG2NWVW0g%2B%2FMuxtrfl63AdgWXBFRmJewgZeNgBuc%2Faj%2FvDOQ3ecSJmohhTqfom8hEpMDMzOS7e3ldrusDWKk10MPLlOMJMt3H%2Bcubh02A4WLF8buhAuDe5GMDI%2FWXu%2FMAnN9k%2BkKPHJWljh2wUtvtOKvBbbB7XExhoz%2F0B0K1vHWrQi74uhchbldRdDqDUKiUKmmkytc3y4v97CePJZK%2FeVltYPLKRnMp%2F0KhT646bgeZn5DDtj3gEbjJghi%2FX1nZwGHUsVCwCC%2BD6EN3uzsU6hL8aIUlOKA2aQkplYtXyNKEX5FzkgnVdjqTPLBrT%2BMzn6vW20BWXKBQRCircysMLPLyskGOqUBPd7CxPkuvcUOe0XvZtG8CeOGEtFGJcnWMFUk3HcJXxSXAt%2F9d51Dd0tJJzrSEXAzI7ylkD0aoHUJvaLEqA%2BvOG6auBf5SoUymB0ZVejgajq7nnZ05RzDnEsfo7lWzYkhFxKXxF8xUIXw%2BMt%2Fr3q9yH3T6me3G2WlGC0PAJAEzuYl3GwuJ4%2FrDnxLYGM1BUdQam%2B5nfY8tZxKNOTSyemOtHI5UblB&X-Amz-Signature=f81ce97a01e9ced876f006a0635f46c2e334f7fbde26fcac3e8ca865c4a6972c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REMSPT36%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T131629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BmkKdseaw8DBLhzH29Pn5CTx82C8uYBgtz7%2FjModkCAiEAzOF6Q3KLwbYUm91E6Da%2B1sEOW2NiHshVtz9xvphfyz8q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDMN6cvhcpIKI8%2B80WCrcAwz%2BU0fV29Y%2FnoRiJU8eWlwu3kdeZMgz4rZrH5ZhLRlZQ4WuhCgClGt0n4WHob%2ByXJogzFA7Dvu0tXhJTDnkhMakmqo2QacJATF8yq4Rp5QmUg53IEH6yzcV3cNbq6MtYjzCI8YZaCOE%2BXukklsVnM%2BrSE5px5Kwq01HSy0CIXMwoLa38sL6J5lQsPE18NAWMLWhKYhR6aYEmKTISuaCzLF9Yr%2FhkXU00ihDCTy9nBjQEXudJYotVetgknPGz06Rn1gN8w%2Fe4I99tW6Qn9K5fZWPVEDuYLvxALlzvRx5KG2NWVW0g%2B%2FMuxtrfl63AdgWXBFRmJewgZeNgBuc%2Faj%2FvDOQ3ecSJmohhTqfom8hEpMDMzOS7e3ldrusDWKk10MPLlOMJMt3H%2Bcubh02A4WLF8buhAuDe5GMDI%2FWXu%2FMAnN9k%2BkKPHJWljh2wUtvtOKvBbbB7XExhoz%2F0B0K1vHWrQi74uhchbldRdDqDUKiUKmmkytc3y4v97CePJZK%2FeVltYPLKRnMp%2F0KhT646bgeZn5DDtj3gEbjJghi%2FX1nZwGHUsVCwCC%2BD6EN3uzsU6hL8aIUlOKA2aQkplYtXyNKEX5FzkgnVdjqTPLBrT%2BMzn6vW20BWXKBQRCircysMLPLyskGOqUBPd7CxPkuvcUOe0XvZtG8CeOGEtFGJcnWMFUk3HcJXxSXAt%2F9d51Dd0tJJzrSEXAzI7ylkD0aoHUJvaLEqA%2BvOG6auBf5SoUymB0ZVejgajq7nnZ05RzDnEsfo7lWzYkhFxKXxF8xUIXw%2BMt%2Fr3q9yH3T6me3G2WlGC0PAJAEzuYl3GwuJ4%2FrDnxLYGM1BUdQam%2B5nfY8tZxKNOTSyemOtHI5UblB&X-Amz-Signature=4604669fde40f5ad4e33c25b15dbff312ffaad75ce304797adbf3ab3f8b25073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
