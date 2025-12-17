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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLKZQUTA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEEFHdnILwkrstQJYDvub9fnumgV1SSYoMWoukXEDYBAIhAO2uMQ2nvml6nEmvWtc6LlS9seo%2B8quJASglzPlsj3e5KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpjBVTF7t92287MQIq3AOb4hJvkbBzm1PFPVa%2FRuB03R0tX8S6fgIS5LH3C01Q7nvShWUikwNvWSKrljk1RimpYklAigNtLvgWUd4k%2BC7yuxGC5tctkoYTFx%2F9mJ5IiXJCn5XPFhQ6Z4Xvvgj7H3n6wpSwidXwQkgKiY7cA04gnh0I11R1KmnkU%2B8TcDrJdf2mEBDldl4CSUn%2B1wMBmbsczCRZYfygp5MiK5Cnao%2BzDvloxB1ubwsqzUjdv%2Fcp2jZ2hWinT9l8G%2FW2mqcX%2FMQFEg5ZB2y5FpomGzAUhEwXwPgxCrwnj2P83EiiG8aDlXaIj5XB2V1HSLs2XAHHI8ANoQ34MBMmqZerXILG%2FjnXGAgXjk0UEhJfBZ%2BdYbErsRrd3fUP9pBAclxSk9E6BHLtnAAS3PHZ1%2FMxmLUENnlXo5HHjm8aFjSB%2FAQOljZdsc127monCjj1G%2FvE6lc0vfY%2BQCFxPB7B%2F%2Bq3UUMgOXeulGvpb3UPFppdzBdqtmHPKkMtp%2FKF28Bvg1sUN1WY6RpoHD601o5LCO8ibLKos%2BA4pZGKYq4D08lNdGVzmOdURyd24akTJ6RD8bIodwwABZxAyF9wXssZpgCPSKhCRFg%2BwPYArW%2BusagwrpttaH%2BJV9BiNtl7npHG91KeRzDs%2F4rKBjqkAWdRmw3UauWtJ4fKaQkzozXiCuJAmR1a%2BPHodMz0cz%2B70KQUFPO%2FFk7jfGQD3mRVG9wZToz89QYmrdMC9KYONxUl4LbZoOueY7NTrwKJLAKvYL%2BBeRO8f%2BARiovmqox8xEjLvqFjiH5KgcK75o3ZwgcnXO2V9wtU5COFsbOxZc2Rm977Z80zddDIu82jQAFUyhqgh0KxLL5Ev0bEcs0FqMt4ZLdX&X-Amz-Signature=3396712676d25c8ecc0b79f4ee2095e2d17da4c587bc004f4c390f5f8bb5f508&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLKZQUTA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEEFHdnILwkrstQJYDvub9fnumgV1SSYoMWoukXEDYBAIhAO2uMQ2nvml6nEmvWtc6LlS9seo%2B8quJASglzPlsj3e5KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpjBVTF7t92287MQIq3AOb4hJvkbBzm1PFPVa%2FRuB03R0tX8S6fgIS5LH3C01Q7nvShWUikwNvWSKrljk1RimpYklAigNtLvgWUd4k%2BC7yuxGC5tctkoYTFx%2F9mJ5IiXJCn5XPFhQ6Z4Xvvgj7H3n6wpSwidXwQkgKiY7cA04gnh0I11R1KmnkU%2B8TcDrJdf2mEBDldl4CSUn%2B1wMBmbsczCRZYfygp5MiK5Cnao%2BzDvloxB1ubwsqzUjdv%2Fcp2jZ2hWinT9l8G%2FW2mqcX%2FMQFEg5ZB2y5FpomGzAUhEwXwPgxCrwnj2P83EiiG8aDlXaIj5XB2V1HSLs2XAHHI8ANoQ34MBMmqZerXILG%2FjnXGAgXjk0UEhJfBZ%2BdYbErsRrd3fUP9pBAclxSk9E6BHLtnAAS3PHZ1%2FMxmLUENnlXo5HHjm8aFjSB%2FAQOljZdsc127monCjj1G%2FvE6lc0vfY%2BQCFxPB7B%2F%2Bq3UUMgOXeulGvpb3UPFppdzBdqtmHPKkMtp%2FKF28Bvg1sUN1WY6RpoHD601o5LCO8ibLKos%2BA4pZGKYq4D08lNdGVzmOdURyd24akTJ6RD8bIodwwABZxAyF9wXssZpgCPSKhCRFg%2BwPYArW%2BusagwrpttaH%2BJV9BiNtl7npHG91KeRzDs%2F4rKBjqkAWdRmw3UauWtJ4fKaQkzozXiCuJAmR1a%2BPHodMz0cz%2B70KQUFPO%2FFk7jfGQD3mRVG9wZToz89QYmrdMC9KYONxUl4LbZoOueY7NTrwKJLAKvYL%2BBeRO8f%2BARiovmqox8xEjLvqFjiH5KgcK75o3ZwgcnXO2V9wtU5COFsbOxZc2Rm977Z80zddDIu82jQAFUyhqgh0KxLL5Ev0bEcs0FqMt4ZLdX&X-Amz-Signature=d3e282328f729df3c6e409b7015792665a54501356142ee898e1325205c42854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
