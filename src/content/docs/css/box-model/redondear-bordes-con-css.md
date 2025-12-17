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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EGF4GEN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuqwFSFFrzFYQRNKz7%2BCqyK6J4eLpq%2BAxl69FbggQ4jAiBjfu7I%2F2kPXSfjkXlwzcQB%2FRQCPIzO6Mcr8rAoQeGcRSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKPUO7ULN6vI3SqIQKtwDcFiJ41jRoyo8GzBQ3n6eMnhKivbpyUaQgrgiljk4euCz5vo8RzGPkVJsonhxl4pZeCizi8j30P43k%2BSwXeYFiDcZC2IqOwQNu2Td85GWo2ILs34Rf%2FI17srno%2Fg2Bx3ORzsHScYJbB%2F3WYZ0sBmvk8qwD%2FxmYMM7d2XK53y%2BvAPP6O21NcOX0tCp5qWhzvQjWWwIhHppqLAHr9HmgOU2QbyZv3eJ9EoQTd66sCYofDCZphSkox7q%2Fb6HRvYsdc%2BPO8HVKemuo0l3LRcZ8zt8yUB%2BdMUfiv7IInbpjjXyYRwgb1G1nriF7gs2YeTN6IK%2Bs5w%2Bv1dnt3rCGeu5AjlHJzeZ61A8rJqPHaN%2B6nhKg2R0XnvFtq9QPME8cYpNIyVmq9eJK2tpt0liF4idsKXJ0IhrRwfbLsxrpuo%2FIRfDNwVZFgBgoRoC3Inb176LaQJEH90wbZzM8mmkZupZRnCikqDTWdFOMQ1OMO5IrY8KiJlgA2TLJbZZu9NILmmFw1cz93%2FDa620WM4GhmEPYdlZjKFgNUhsn7Sp%2BQZqiY%2Fq6a119dtpWeBjhShJCFqdDkYO8A7%2BOfdlDXTlcHBkCoSfL8rWrtMH4FUCrm9ObTqI0toZz8GgJ4R996qPTdowxJ%2BLygY6pgGBNNQLISgrxSD52HYCjJ8UaliAwLq5tuou%2BwFvVuPZqgQXqAhdGVVLSfJlqKtSuKI%2FUrlxOfN%2Fy7dSJ5cXFsg0sdRXba5DYKCxGAVW71nsKIlDeLZtZV%2BZNavFDtaPJRclXJMJW1SqCsv2FaeyGqzwzueOFM3YWWHKuJo0bFuao0wu9FkU0Hx3Cgojzq0rdTmMKdyw65HGzJ4vZta3CmuRPTr7Mq%2Fh&X-Amz-Signature=3e6277988b9cc406c30267db2a70a9480986fe832d6cd11de7d2164d48e4552a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EGF4GEN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuqwFSFFrzFYQRNKz7%2BCqyK6J4eLpq%2BAxl69FbggQ4jAiBjfu7I%2F2kPXSfjkXlwzcQB%2FRQCPIzO6Mcr8rAoQeGcRSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKPUO7ULN6vI3SqIQKtwDcFiJ41jRoyo8GzBQ3n6eMnhKivbpyUaQgrgiljk4euCz5vo8RzGPkVJsonhxl4pZeCizi8j30P43k%2BSwXeYFiDcZC2IqOwQNu2Td85GWo2ILs34Rf%2FI17srno%2Fg2Bx3ORzsHScYJbB%2F3WYZ0sBmvk8qwD%2FxmYMM7d2XK53y%2BvAPP6O21NcOX0tCp5qWhzvQjWWwIhHppqLAHr9HmgOU2QbyZv3eJ9EoQTd66sCYofDCZphSkox7q%2Fb6HRvYsdc%2BPO8HVKemuo0l3LRcZ8zt8yUB%2BdMUfiv7IInbpjjXyYRwgb1G1nriF7gs2YeTN6IK%2Bs5w%2Bv1dnt3rCGeu5AjlHJzeZ61A8rJqPHaN%2B6nhKg2R0XnvFtq9QPME8cYpNIyVmq9eJK2tpt0liF4idsKXJ0IhrRwfbLsxrpuo%2FIRfDNwVZFgBgoRoC3Inb176LaQJEH90wbZzM8mmkZupZRnCikqDTWdFOMQ1OMO5IrY8KiJlgA2TLJbZZu9NILmmFw1cz93%2FDa620WM4GhmEPYdlZjKFgNUhsn7Sp%2BQZqiY%2Fq6a119dtpWeBjhShJCFqdDkYO8A7%2BOfdlDXTlcHBkCoSfL8rWrtMH4FUCrm9ObTqI0toZz8GgJ4R996qPTdowxJ%2BLygY6pgGBNNQLISgrxSD52HYCjJ8UaliAwLq5tuou%2BwFvVuPZqgQXqAhdGVVLSfJlqKtSuKI%2FUrlxOfN%2Fy7dSJ5cXFsg0sdRXba5DYKCxGAVW71nsKIlDeLZtZV%2BZNavFDtaPJRclXJMJW1SqCsv2FaeyGqzwzueOFM3YWWHKuJo0bFuao0wu9FkU0Hx3Cgojzq0rdTmMKdyw65HGzJ4vZta3CmuRPTr7Mq%2Fh&X-Amz-Signature=1f2b08491227c79ea5c110549beef5c7e4a26428154069fba8244f6328246bcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
