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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC6VU4VG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6X4c5n69v8%2FjgUkSnBOfLWr56uGpCXwF4TKwiJBHbgAiEAnaauNGsNBQZxhBE6LYb9XBsv8GxOAR3a%2F%2FmSPbwRzS0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4Ew6T0E4KfJHjsqyrcA%2F5CNIsAMUvTjFX%2Fdz98GFGAFidy6vpTpekTG1sIaXblAz43JyqZUkTlPr1%2BiwtFJIBo%2FeTDyjDRrybqpTejEjHHE9RaN41Svk0W68%2FlMeY9QDYvaBe5LdAgChRcqiZGT10VD8lI78fJXGGPcQkBtjX1PHNbzSJMSEHEleE2GXZRA%2BQOxwPfl%2FKXE6rZIw%2FIUaIeEg9CpAdZjKSkbpeoPmDrjn1u8Pt2iKJ2aN0xYlLe1CT%2FenLWaSbDkDQ5ZcyYWIfA9lbdKpWp%2FGG33oSls3nyp3mHWukGPT7Ec2Wp3EcQ5bGh4IhOF3aekak1WABDX1lifIiQ%2B4YSmrQLlIABM7Ng6DJ4HYApDmp0d8dXeR%2FQsgoYj8zat%2FBgOpZwV5nxRD34F1XccKM9oLaH0I4wKr3uG6CHPJyNswPvUj2m211DWeNnvAwhp8HceFPqgHFnahK7p18rU2NCq5PREApJZmiSOB2%2FHgmqEtRgczDTidBNIVDN4LTGfvaTiXIbmCX8C271cQ5wSVcZYmk%2BX6KjRFjZjtX%2F7xEiNolLLvBdkKLaiIizoMy6tMDIcBOEk7Wd1USFBKxTBiF6yW6E8oVJsgZwLb0fjYnkUMsD%2FmaqYpuo6qZtL%2BvEOsEsBHEGMKOgi8oGOqUBm8hh0AuT%2Fw%2Bo149aDOLHFS68tx9kmkZSb164A533hgkkRUdijexzB3DVbg6%2F9HEozqcfBY9p5KVyIXrsOOGncZBYOEycVfPlARa7kqd%2FFMELWV21qWFEsoERKppheYtqjI8i6u25x3gYzeJ4JmqU0kYP%2BlMrPaVo0%2FkLXZ8kVGeGP7CvCbaz9g4%2BfJ1FmtB5G9U%2B4xinVZ6y4r0%2Bik12YclKQx0Q&X-Amz-Signature=ce803e9b854b5b8ef97b160acbe2247376a5daef3f9f9310f5a4dfee53da08cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC6VU4VG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6X4c5n69v8%2FjgUkSnBOfLWr56uGpCXwF4TKwiJBHbgAiEAnaauNGsNBQZxhBE6LYb9XBsv8GxOAR3a%2F%2FmSPbwRzS0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4Ew6T0E4KfJHjsqyrcA%2F5CNIsAMUvTjFX%2Fdz98GFGAFidy6vpTpekTG1sIaXblAz43JyqZUkTlPr1%2BiwtFJIBo%2FeTDyjDRrybqpTejEjHHE9RaN41Svk0W68%2FlMeY9QDYvaBe5LdAgChRcqiZGT10VD8lI78fJXGGPcQkBtjX1PHNbzSJMSEHEleE2GXZRA%2BQOxwPfl%2FKXE6rZIw%2FIUaIeEg9CpAdZjKSkbpeoPmDrjn1u8Pt2iKJ2aN0xYlLe1CT%2FenLWaSbDkDQ5ZcyYWIfA9lbdKpWp%2FGG33oSls3nyp3mHWukGPT7Ec2Wp3EcQ5bGh4IhOF3aekak1WABDX1lifIiQ%2B4YSmrQLlIABM7Ng6DJ4HYApDmp0d8dXeR%2FQsgoYj8zat%2FBgOpZwV5nxRD34F1XccKM9oLaH0I4wKr3uG6CHPJyNswPvUj2m211DWeNnvAwhp8HceFPqgHFnahK7p18rU2NCq5PREApJZmiSOB2%2FHgmqEtRgczDTidBNIVDN4LTGfvaTiXIbmCX8C271cQ5wSVcZYmk%2BX6KjRFjZjtX%2F7xEiNolLLvBdkKLaiIizoMy6tMDIcBOEk7Wd1USFBKxTBiF6yW6E8oVJsgZwLb0fjYnkUMsD%2FmaqYpuo6qZtL%2BvEOsEsBHEGMKOgi8oGOqUBm8hh0AuT%2Fw%2Bo149aDOLHFS68tx9kmkZSb164A533hgkkRUdijexzB3DVbg6%2F9HEozqcfBY9p5KVyIXrsOOGncZBYOEycVfPlARa7kqd%2FFMELWV21qWFEsoERKppheYtqjI8i6u25x3gYzeJ4JmqU0kYP%2BlMrPaVo0%2FkLXZ8kVGeGP7CvCbaz9g4%2BfJ1FmtB5G9U%2B4xinVZ6y4r0%2Bik12YclKQx0Q&X-Amz-Signature=9fe9784c07b02f3f7548ac8440a9df01193d1b0ba34c8795fbdf36307de5cd8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
