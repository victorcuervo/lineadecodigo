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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RJ4DU2E%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T133745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEz1KTFk9VuCKqPGCK3Hbek%2F49ME%2FejWcXAr3%2BSShb81AiEAyg1MYL254OBsgvRXliyJeqZ5Kf8Q0mkGpICyC0YkQPwq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFUYvMnYVsOwnb0nhCrcA1RtIF70IT%2FVofZdeD8aKtLn%2FyMj5Cp%2FKqqEMa7yUxmB8%2FO%2Brrr1OwsKRZS3UOYobq4T7kWr36CbpKD3NEveYoWc4pyOVg6FnJIQKy%2FByXfTEfUFNgRvVhAMbmC4JxgPZ2d48Bv8HjxEIEwwwt1fwqL7O5GyiUYJLTBLnm9bE9ChR3kA%2B%2FXZ4%2BCcqiTdJf%2FmNrWye2OjUaN0Haphw5rQR0jE4kWont5jRGW3F%2FH6a%2FzwqZ6EKdjO3IUPPSnMT28x08GDYKE1OvjSPhoi7drkahJEqioq8yAalApCLvmbyLzsw6cA1yP%2FAO5rKM%2BnSuG8jG0OOhxwZkToqOyJIqc3ZXcBriekftboF%2B048TGFyxT6MaEThAwd7ltNloFC%2BpmCAG%2Foo0%2BJY7nyQPUc8qS1Z7m6wpwUBe1OSx5pSaeKvdhc3HUNzUUomTA5e73iJsK6HyNy%2B8NcaReIlEGf4c5PbTp%2Fg4MEGojjQFkSTiym5zkqF3nqFXI0xiyzz5xblYCOtN9qeDz%2Ff3Ya3K9yYXWzkeYUNU30hV9YdfJL0KhDMr8Gc7aS150R0YLwegXxiFtwCBNBr2Z0BSLgbNETZhNJTm5jwOsNkp5X4lcBNfn5kAdsr6Xq3ZuX8BkpGVFQMOvVyskGOqUBj97tyRa0hFsci3HTFdZV18oMAVpkhazL0XrERU0giIsbDDvcNBHi7VPO6KJCdblkEHmX2Xg5p93B9etdre0ukv90bng7btustEPIv7tvIkryOU9Y5FRMNXviF7NH0d1nElCPZOiOGp9JsoV1Te2c5V1X4wEWWI28ZE30KKbedPjT8JlbWCDcdKYlDI6kzsVE38ffan2bQL6E32YXz4Da%2BEZq7a%2FT&X-Amz-Signature=5d2386f9823661733dd9b47918dce506c1a0f590f866cfd85302af446e81affb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RJ4DU2E%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T133745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEz1KTFk9VuCKqPGCK3Hbek%2F49ME%2FejWcXAr3%2BSShb81AiEAyg1MYL254OBsgvRXliyJeqZ5Kf8Q0mkGpICyC0YkQPwq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFUYvMnYVsOwnb0nhCrcA1RtIF70IT%2FVofZdeD8aKtLn%2FyMj5Cp%2FKqqEMa7yUxmB8%2FO%2Brrr1OwsKRZS3UOYobq4T7kWr36CbpKD3NEveYoWc4pyOVg6FnJIQKy%2FByXfTEfUFNgRvVhAMbmC4JxgPZ2d48Bv8HjxEIEwwwt1fwqL7O5GyiUYJLTBLnm9bE9ChR3kA%2B%2FXZ4%2BCcqiTdJf%2FmNrWye2OjUaN0Haphw5rQR0jE4kWont5jRGW3F%2FH6a%2FzwqZ6EKdjO3IUPPSnMT28x08GDYKE1OvjSPhoi7drkahJEqioq8yAalApCLvmbyLzsw6cA1yP%2FAO5rKM%2BnSuG8jG0OOhxwZkToqOyJIqc3ZXcBriekftboF%2B048TGFyxT6MaEThAwd7ltNloFC%2BpmCAG%2Foo0%2BJY7nyQPUc8qS1Z7m6wpwUBe1OSx5pSaeKvdhc3HUNzUUomTA5e73iJsK6HyNy%2B8NcaReIlEGf4c5PbTp%2Fg4MEGojjQFkSTiym5zkqF3nqFXI0xiyzz5xblYCOtN9qeDz%2Ff3Ya3K9yYXWzkeYUNU30hV9YdfJL0KhDMr8Gc7aS150R0YLwegXxiFtwCBNBr2Z0BSLgbNETZhNJTm5jwOsNkp5X4lcBNfn5kAdsr6Xq3ZuX8BkpGVFQMOvVyskGOqUBj97tyRa0hFsci3HTFdZV18oMAVpkhazL0XrERU0giIsbDDvcNBHi7VPO6KJCdblkEHmX2Xg5p93B9etdre0ukv90bng7btustEPIv7tvIkryOU9Y5FRMNXviF7NH0d1nElCPZOiOGp9JsoV1Te2c5V1X4wEWWI28ZE30KKbedPjT8JlbWCDcdKYlDI6kzsVE38ffan2bQL6E32YXz4Da%2BEZq7a%2FT&X-Amz-Signature=9abdff74fd7b131ece3b13a2fcdded89643b3fe814db4af009ee6e9db1a89b57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
