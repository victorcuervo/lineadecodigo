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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD3B6BMV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T095147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGea%2FVsIuzgICYHDyv8pb97ejnJUw8boNqGD7ysxtKqoAiEAnN%2FlxmbsSdlDFSW%2Bxs0NM62xU%2B4LPKvl1vZDcRHVshQqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJkr68kUEcx4FMzwCrcA7JVpACPL8VXDRF4cZWa%2FlIDqIUt8%2FKs5165YbiwqlJwwPa26E53N%2BV%2FSYtrDMl0AnXRsRoPNZVMmDcdbx4Ys0a%2BXTwgGxmANkG4u3t7RguCGlpHwACqbNgZ%2FX6EccU%2B95Qq4th%2BIKj7nCovsBLjXUPskI3MhjLwgBvDi4sKIR2nORyFcsqfc6WSbYpG2hG%2FmQH4%2FDn5iufoOhC%2B6FDruMROPwKFxUs3zapUkwU7GGKI7B2JrSYv93dIy19PJKk%2BavdKhBYJarngTuDet3NoibMGtMioXULZZT6khE0fKFtpD2pLR6xEPoFbUnLlbc6yZCM1X6fMdHT9XyMD4ZTYRY4ES3WzfSJeuRlCOOPeyvze2%2BuuGa3DQMHEYRU9hRsg8Y4CTi4aZF5S8bqhCW%2Ffh1Vv5UdZNaES6NQvDjh%2BMKekUpH9r4x8D65Qv3z7CZjVfBYqKLKCUXL12ITp2qRqQ0OKs%2B3L3V4aMZq7KypDG2fo2F47UpBBjsAySOUIv1XlROcrsseyZ8n4lxuEY3eN1sIw9nxGmyhVG7kwafdknGx0DE%2BYtanceT9RX57R4RFJM2EV8SZ4Ku9i3QxitnAIkN6us4ny9ssVfBUoIR2D%2FaCmX%2B1xaIcuM0GgU%2FtBMKjt2ckGOqUBJowukNPz35xBvYjgCfRoUh4tFanqCUaj3S5BDO6KvTrxFw9r0lEpcwJD8K5MZ5f7o9iZ0GL6XGp3n01%2FeSoYtH7ZPbqnyhybDO4NDqU2WqAgW6OxY477TWYEjXUyLm5L%2BR9Pn6sb%2FTysFCH9hMWldSHUR%2BL9mxgke3GDmndxqTr04AOtUEVy3WIxa3s4oaxOwRJLVveU1Fud3zOwId5djTiu39Wx&X-Amz-Signature=97e75b9ba3c205fee290bdad0cb5109e13cfce601f55efcba65a880d6087cb41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD3B6BMV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T095147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGea%2FVsIuzgICYHDyv8pb97ejnJUw8boNqGD7ysxtKqoAiEAnN%2FlxmbsSdlDFSW%2Bxs0NM62xU%2B4LPKvl1vZDcRHVshQqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJkr68kUEcx4FMzwCrcA7JVpACPL8VXDRF4cZWa%2FlIDqIUt8%2FKs5165YbiwqlJwwPa26E53N%2BV%2FSYtrDMl0AnXRsRoPNZVMmDcdbx4Ys0a%2BXTwgGxmANkG4u3t7RguCGlpHwACqbNgZ%2FX6EccU%2B95Qq4th%2BIKj7nCovsBLjXUPskI3MhjLwgBvDi4sKIR2nORyFcsqfc6WSbYpG2hG%2FmQH4%2FDn5iufoOhC%2B6FDruMROPwKFxUs3zapUkwU7GGKI7B2JrSYv93dIy19PJKk%2BavdKhBYJarngTuDet3NoibMGtMioXULZZT6khE0fKFtpD2pLR6xEPoFbUnLlbc6yZCM1X6fMdHT9XyMD4ZTYRY4ES3WzfSJeuRlCOOPeyvze2%2BuuGa3DQMHEYRU9hRsg8Y4CTi4aZF5S8bqhCW%2Ffh1Vv5UdZNaES6NQvDjh%2BMKekUpH9r4x8D65Qv3z7CZjVfBYqKLKCUXL12ITp2qRqQ0OKs%2B3L3V4aMZq7KypDG2fo2F47UpBBjsAySOUIv1XlROcrsseyZ8n4lxuEY3eN1sIw9nxGmyhVG7kwafdknGx0DE%2BYtanceT9RX57R4RFJM2EV8SZ4Ku9i3QxitnAIkN6us4ny9ssVfBUoIR2D%2FaCmX%2B1xaIcuM0GgU%2FtBMKjt2ckGOqUBJowukNPz35xBvYjgCfRoUh4tFanqCUaj3S5BDO6KvTrxFw9r0lEpcwJD8K5MZ5f7o9iZ0GL6XGp3n01%2FeSoYtH7ZPbqnyhybDO4NDqU2WqAgW6OxY477TWYEjXUyLm5L%2BR9Pn6sb%2FTysFCH9hMWldSHUR%2BL9mxgke3GDmndxqTr04AOtUEVy3WIxa3s4oaxOwRJLVveU1Fud3zOwId5djTiu39Wx&X-Amz-Signature=6b8226ff2bb2e0bef805e76ab0206a5c118389ea315bf205c594a421ba3c34ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
