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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HNQ6DAB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOd%2Fw5PqiZyyvvLQAU1YCgGa6BldH0SmjdRTuxca0XUAiBbivCBcmVkGd5EolK67IjGccLa7iuzcD0yCAwnJqhbXSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMlKMvcGRj5bZYI59LKtwDRvio4rDWXSrMk4LFJj1XWS7opDpRz%2BpQ%2BnPIjtUVX2Is%2Bjlnrt5saFQPls%2FhyD2ep24VgsfysoGk2udNhO%2BNrNCTtr9uTiUqO%2FHFDzoEMAn51Yc80BRYjj8NHH8S6NxKybYJLbcUHisSgSpZOpQB5qKH5y3c1js%2ByHGZhM4Q5ofqEEWYn04Cw1WdU4KbG0XfpDlLYl9697hRaCopxO8hHosrmgjEvwFPtwizr3voy1hF1kFNFyIsyqSaGN1OBpYEPtwCG4SntdR09BtpRYjcbauyeI3TrTkOLc2%2BjvJ%2Bgc5LmhyViFLP%2FkAcY3dpGUuyGCO30xKCZEX51%2FvKzTxUruYcE0M7w6oRxMXYSNvcTMOP7UL%2BDiQxdHYEsfg5h4WrRwgoi%2BOXa1g4kyt5ZrdsS5Etdqm4%2BHrJQzc5TtBAzpHtX0Qt2tXsuwSs36Inq6vu9BNCT1fcJMlKPeYnh7KDh678nSp68GkwnXEl4DTwNQPSb4dJIyswNZFaM9xvr%2BtCOcg21p%2Fn8p%2FVkr75UiIZUxPCZZtvWKVTqPffOk%2F%2BTHfTF86wREq13hqEitUVXlCnEROCUIHhGiKOQhDdvSTWb%2BOqVzuvGdEu1CZeGdzvzHZMH36vSow9vg2mG7UwrZyJygY6pgG%2FrIPXj7k7zdhrIipM62FKZu43iCvXRG4x1kiUDSYSYroNW0zpPRitCwAMx0N8cSHOFwyex0V63oTzv5VDf52CakGHkG%2B2zdRL5RsPS%2FB4%2B%2BwylpBkLfBupiqQ9cwXbYNLaVJpqFY9ZhoSF6otNL8wq1T6EGqTZYs3z%2BX0STzggy1T%2FTOJWj66Uwit0zqIb3tzGfVq1BLMheQ8sXepIewbkGzN907B&X-Amz-Signature=127c54cf639a5ba8808622748c99575b4002c22adaefdac30d4a179627e9ad69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HNQ6DAB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOd%2Fw5PqiZyyvvLQAU1YCgGa6BldH0SmjdRTuxca0XUAiBbivCBcmVkGd5EolK67IjGccLa7iuzcD0yCAwnJqhbXSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMlKMvcGRj5bZYI59LKtwDRvio4rDWXSrMk4LFJj1XWS7opDpRz%2BpQ%2BnPIjtUVX2Is%2Bjlnrt5saFQPls%2FhyD2ep24VgsfysoGk2udNhO%2BNrNCTtr9uTiUqO%2FHFDzoEMAn51Yc80BRYjj8NHH8S6NxKybYJLbcUHisSgSpZOpQB5qKH5y3c1js%2ByHGZhM4Q5ofqEEWYn04Cw1WdU4KbG0XfpDlLYl9697hRaCopxO8hHosrmgjEvwFPtwizr3voy1hF1kFNFyIsyqSaGN1OBpYEPtwCG4SntdR09BtpRYjcbauyeI3TrTkOLc2%2BjvJ%2Bgc5LmhyViFLP%2FkAcY3dpGUuyGCO30xKCZEX51%2FvKzTxUruYcE0M7w6oRxMXYSNvcTMOP7UL%2BDiQxdHYEsfg5h4WrRwgoi%2BOXa1g4kyt5ZrdsS5Etdqm4%2BHrJQzc5TtBAzpHtX0Qt2tXsuwSs36Inq6vu9BNCT1fcJMlKPeYnh7KDh678nSp68GkwnXEl4DTwNQPSb4dJIyswNZFaM9xvr%2BtCOcg21p%2Fn8p%2FVkr75UiIZUxPCZZtvWKVTqPffOk%2F%2BTHfTF86wREq13hqEitUVXlCnEROCUIHhGiKOQhDdvSTWb%2BOqVzuvGdEu1CZeGdzvzHZMH36vSow9vg2mG7UwrZyJygY6pgG%2FrIPXj7k7zdhrIipM62FKZu43iCvXRG4x1kiUDSYSYroNW0zpPRitCwAMx0N8cSHOFwyex0V63oTzv5VDf52CakGHkG%2B2zdRL5RsPS%2FB4%2B%2BwylpBkLfBupiqQ9cwXbYNLaVJpqFY9ZhoSF6otNL8wq1T6EGqTZYs3z%2BX0STzggy1T%2FTOJWj66Uwit0zqIb3tzGfVq1BLMheQ8sXepIewbkGzN907B&X-Amz-Signature=c3bbf8f40a2d3e49564a36b4aa36b0495e52520e5655c96b6865727679b2a469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
