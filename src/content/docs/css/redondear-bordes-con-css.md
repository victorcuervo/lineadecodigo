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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSYZUHQD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T064755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVh%2Ftbhdb8LnCM624TYbBdJGWzRVekDqmmkg3URV0TbAiB6vLWmcFj8WEWssAJ3rLLAgg6aS9swz0fp%2FiXO0gBPdyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMorjS9z041DIb13rlKtwDGOnzc4mpTgTYYN7feoAeKapjEaZ2QfR51cLrNCvLDQmFuGmOdvKnSNauDDuYqPzfpu4Z8Ks170RPkoBDvQ0oVwChO6SWIpMYZS8J6VISZHBalmaib2fCDLIT%2Ff3JEfO1ToWVtAJURSYkmipBMYxfMgAmCuoU1UOeMwJnhlobExDDs59NxozMzduCytp%2BPmTBoXxSEUN8wMuQxPJnHJDPEEbuiFXY57pfrK09e%2FqvIkfJm5wUu%2BOwzPf32qsqJMlptDqBsdofQuN%2Bz8svUhWGO7EimnIA3Ba0DGtMC70oMKeZk7E%2BnKRtTgpb3jKA6xA6RtSIoH7eR4SpB5HcGY%2BkO8bKcF8Y0%2FyIZ5VTJw2UHe1tRLlIT4rbwD%2B%2FxN6RBB8aMlTktN4Md9LvCDJ%2Bwbi0aORV6HRBW2bS6rqyI%2FYZaiB%2Bt26vjRYOR7nblhVcVvTRe9fU5g6vPoLFVQv%2FcRPMi%2BFEM2RLf%2FDttV3KFh7yJYjNw7nEj4nag2MxrhMgz0x20fMa0Z%2BBid1vVZQZ5lJicx5R6kJgm%2F0JdnEpCTi%2Fm507a8e1mZzzoWWCBKUk%2BLQeyVyYBSXbI30zN81jaE1PTjbFaifOMghrsaTBJaV%2FJEY%2FcKVufeUugdDxR0gwwdDZyQY6pgELYWKvOt9nAppTpsCTKByicW8nUIpT43UWT4UMfIBycSDyWQo%2BHCTkHjHXEFV6N5%2F6FzOZ0nG1xPul7QJOF1Pzxzo8ozuER2TKynkctVmebhgthUdVJnO%2FDgzRNPXbjrQs7Otj53AsOQ58KKw0VaxITAdL2HkwXW8SdJzLXBhEMp%2BdDk6mIsbDktty5%2BMutDKyCkbFIus86ifWOGa3hKoEMN05Er09&X-Amz-Signature=4a3cec4b26c9da203e7783f55198b0a3d195a208d3f8e76cae761ffe16837433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSYZUHQD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T064755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVh%2Ftbhdb8LnCM624TYbBdJGWzRVekDqmmkg3URV0TbAiB6vLWmcFj8WEWssAJ3rLLAgg6aS9swz0fp%2FiXO0gBPdyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMorjS9z041DIb13rlKtwDGOnzc4mpTgTYYN7feoAeKapjEaZ2QfR51cLrNCvLDQmFuGmOdvKnSNauDDuYqPzfpu4Z8Ks170RPkoBDvQ0oVwChO6SWIpMYZS8J6VISZHBalmaib2fCDLIT%2Ff3JEfO1ToWVtAJURSYkmipBMYxfMgAmCuoU1UOeMwJnhlobExDDs59NxozMzduCytp%2BPmTBoXxSEUN8wMuQxPJnHJDPEEbuiFXY57pfrK09e%2FqvIkfJm5wUu%2BOwzPf32qsqJMlptDqBsdofQuN%2Bz8svUhWGO7EimnIA3Ba0DGtMC70oMKeZk7E%2BnKRtTgpb3jKA6xA6RtSIoH7eR4SpB5HcGY%2BkO8bKcF8Y0%2FyIZ5VTJw2UHe1tRLlIT4rbwD%2B%2FxN6RBB8aMlTktN4Md9LvCDJ%2Bwbi0aORV6HRBW2bS6rqyI%2FYZaiB%2Bt26vjRYOR7nblhVcVvTRe9fU5g6vPoLFVQv%2FcRPMi%2BFEM2RLf%2FDttV3KFh7yJYjNw7nEj4nag2MxrhMgz0x20fMa0Z%2BBid1vVZQZ5lJicx5R6kJgm%2F0JdnEpCTi%2Fm507a8e1mZzzoWWCBKUk%2BLQeyVyYBSXbI30zN81jaE1PTjbFaifOMghrsaTBJaV%2FJEY%2FcKVufeUugdDxR0gwwdDZyQY6pgELYWKvOt9nAppTpsCTKByicW8nUIpT43UWT4UMfIBycSDyWQo%2BHCTkHjHXEFV6N5%2F6FzOZ0nG1xPul7QJOF1Pzxzo8ozuER2TKynkctVmebhgthUdVJnO%2FDgzRNPXbjrQs7Otj53AsOQ58KKw0VaxITAdL2HkwXW8SdJzLXBhEMp%2BdDk6mIsbDktty5%2BMutDKyCkbFIus86ifWOGa3hKoEMN05Er09&X-Amz-Signature=3a1f5acf5439f40776d12c78df11b76c33e97bacca20f235ef13246e06926e8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
