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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FU77BSL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC27kne9LYm7CjlXBgYB7pUrJqRw9KK3jjGbDamavKewwIgci7g64YgGx6zmt0QVS2DB%2B3RaukCUutpH%2FqLEdC06vgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMtlF9n2EXNEL%2BcYmSrcA45RorjozAdpg%2Ff7QDvIf6jj5cI%2BbRA3v0Nf4cPXt4Y9LLyzf7wCKrzJBSD2UjwdZzC1kzroCcEt%2By73nV7EKVBzU%2FxpxyTgMwn%2FJ1KLATh87V%2Begx7IUNKrlUfwKv6F9CXmDwbhXbjiQt%2BA%2Fp0IucrAiX0U3DaKhUA5dBo%2FlzJQ8uWf%2BRNzzLL9%2FKZncn6FBVbIi3uzGD27tHY3FQQOTNoPsi3wFj2V1gw8p9uDKWPxRLqFdYoGlK4f4Kmi%2BBEaVDzdK7xMrY9XgZsTzvf8a1XvPy4FtXg4Ao7DwH5g%2BaGH1eO3qPwZpf%2F6DI%2BM6Vd8%2FA9dSaTFmPYQ3Crp3GZY11%2BTMY2F7k2sZAMc8D%2BViSwrgDDIZGCzAb3pG4efEcuaVluEMgZWq5MMOccUYiQvdK4PvTLbbGWb7JYVTYQYsI9Xycbsr%2Fi5HfYuy1vEidNiGxAJ7vip6U6qNF%2B1t0Ex3zj4Qb8CGbSafhsNVcnyWdJoRLhusrYsmXJtByDxWriIH3Sg704eEZai7Jn%2BA%2F2WaPJXC42DSxdqHFc3xYaZD0Ymhh1M9AwsEKh79C5TdDOBWbncOxoCprlq6ptDnmW9kwPLewyZF7FfGaN0U%2FP2fdg8V6W4zDUktrIsOBFpMN%2FRicoGOqUBofmhZSIdEg%2BGhCsbBy3U7gwq6KDYK6D%2BWvLNG7DoABiMrypnqc%2BVMlNntLbw16ZXOBCOaGKZYTdfE0ttP0GwJjUNwPSqdoPrsOtwntG4VUvJ9u%2Fk3lFJ9RkJNuQ8eJRupUIWNApJjGgUjd3%2F035C9z60sDTz14egGWAI3TSzoGEFvfApuBsV3WHGvrO5v8Ya%2FNWJJiX8zAhObKdi%2FhF5dN47bK71&X-Amz-Signature=4d26e94dda2121059916535b58f4ae6e96fcdb0a65ca9a7228a86048f5313548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FU77BSL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC27kne9LYm7CjlXBgYB7pUrJqRw9KK3jjGbDamavKewwIgci7g64YgGx6zmt0QVS2DB%2B3RaukCUutpH%2FqLEdC06vgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMtlF9n2EXNEL%2BcYmSrcA45RorjozAdpg%2Ff7QDvIf6jj5cI%2BbRA3v0Nf4cPXt4Y9LLyzf7wCKrzJBSD2UjwdZzC1kzroCcEt%2By73nV7EKVBzU%2FxpxyTgMwn%2FJ1KLATh87V%2Begx7IUNKrlUfwKv6F9CXmDwbhXbjiQt%2BA%2Fp0IucrAiX0U3DaKhUA5dBo%2FlzJQ8uWf%2BRNzzLL9%2FKZncn6FBVbIi3uzGD27tHY3FQQOTNoPsi3wFj2V1gw8p9uDKWPxRLqFdYoGlK4f4Kmi%2BBEaVDzdK7xMrY9XgZsTzvf8a1XvPy4FtXg4Ao7DwH5g%2BaGH1eO3qPwZpf%2F6DI%2BM6Vd8%2FA9dSaTFmPYQ3Crp3GZY11%2BTMY2F7k2sZAMc8D%2BViSwrgDDIZGCzAb3pG4efEcuaVluEMgZWq5MMOccUYiQvdK4PvTLbbGWb7JYVTYQYsI9Xycbsr%2Fi5HfYuy1vEidNiGxAJ7vip6U6qNF%2B1t0Ex3zj4Qb8CGbSafhsNVcnyWdJoRLhusrYsmXJtByDxWriIH3Sg704eEZai7Jn%2BA%2F2WaPJXC42DSxdqHFc3xYaZD0Ymhh1M9AwsEKh79C5TdDOBWbncOxoCprlq6ptDnmW9kwPLewyZF7FfGaN0U%2FP2fdg8V6W4zDUktrIsOBFpMN%2FRicoGOqUBofmhZSIdEg%2BGhCsbBy3U7gwq6KDYK6D%2BWvLNG7DoABiMrypnqc%2BVMlNntLbw16ZXOBCOaGKZYTdfE0ttP0GwJjUNwPSqdoPrsOtwntG4VUvJ9u%2Fk3lFJ9RkJNuQ8eJRupUIWNApJjGgUjd3%2F035C9z60sDTz14egGWAI3TSzoGEFvfApuBsV3WHGvrO5v8Ya%2FNWJJiX8zAhObKdi%2FhF5dN47bK71&X-Amz-Signature=f2a1f6815ced29776f6f6566ad2a61b9ff382f15303bff6ed7983465919305db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
