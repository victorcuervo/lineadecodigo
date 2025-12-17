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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZURJ3FW7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF16Izxfm0U%2FyJciDYQOQHJRB1eUDSljdyoMnQPf9TTMAiEAznUjxaS7yWK7k%2F5j5a8%2BdK33TG%2BJ9iSllpgPeycdogwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOioem4%2FtWZAcKi4kSrcA2xjgWjp%2BirEz%2F0g%2BVFxuN%2FjMd9HgQ%2FOyR08fvjTH85%2FnpWLQbErt05K8JJDxsoJ4Tw7XX3SgMWZXBT2Uxlr9q%2B7AlacSieChoSqfdg5ZIMYZNxOzI%2FsgWHAKcZQ2FHUw3k2RlKVql4N38AnKLC%2Bz8oTOOsExe%2BL06RnwKnignGAZG%2B5u0f3MzFrVa7A971g69enbqnpZ2UHhzI4ErlOUn9RMlnRy%2FGQvs9duD85fZ6gnxClJzDhO64efk5vxmLwswhMM2c3%2BHVnbLk9TUqub1ptEvyjl5bwYZl0k60BMUr5lGr%2FZ0AMji1Jttf9VoA7F9LXCRMkbymY1%2Fz7Pd5pwvQ1a0%2B93jwrciNFY6vA9rW59N0UnGmGGdB3JixCpcc6F3OiKJfbBUufawG1Qddqo4dmf4%2FeV8hcYN4M6KmLg2%2B6J09zlV%2BZpWheeyCo3ZscehOgqKDHt2MHy1PTGzaqb1yjJsw91OeFxQPk%2F4JI95MojOSCkGsbBZdRL8VKBi5V41BKk%2Fc0X75hoFY0lo879UUq%2Fp4Af6dsmBHPYO%2FRC41u8E%2BBfnkcn8FpI%2BTcFJaER7HzscBC%2BLj1sAOzkVe1e1oVuUAC0tyGpwYoUtGRIJpziwbsJhCtdoICvyWSMOuCicoGOqUBWeROiFlXcx293AMe3CND%2B6IH9KyEY6qaRWErOUmiZ1hzZWk5aUwI0GlprLw%2F3E6%2FeqrIhDFZt6RlOS0jP7U7X%2FtE0Y3c34IrTDud7QDbRfdYYgv%2BKUJ%2FUcH2iYigoIIDAGfa6Zvoa74ljOM7a8Oe28rbINJsyIqpmZQ8aENxkcJzzj8comlECp9q9VNPKr59zRrSIRobHCbqoxFJnNjncmprTTbT&X-Amz-Signature=fd2d2098338df1ec5db9b3b7c844bc8d64f29529c752c172b60436a4a5fce903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZURJ3FW7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF16Izxfm0U%2FyJciDYQOQHJRB1eUDSljdyoMnQPf9TTMAiEAznUjxaS7yWK7k%2F5j5a8%2BdK33TG%2BJ9iSllpgPeycdogwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOioem4%2FtWZAcKi4kSrcA2xjgWjp%2BirEz%2F0g%2BVFxuN%2FjMd9HgQ%2FOyR08fvjTH85%2FnpWLQbErt05K8JJDxsoJ4Tw7XX3SgMWZXBT2Uxlr9q%2B7AlacSieChoSqfdg5ZIMYZNxOzI%2FsgWHAKcZQ2FHUw3k2RlKVql4N38AnKLC%2Bz8oTOOsExe%2BL06RnwKnignGAZG%2B5u0f3MzFrVa7A971g69enbqnpZ2UHhzI4ErlOUn9RMlnRy%2FGQvs9duD85fZ6gnxClJzDhO64efk5vxmLwswhMM2c3%2BHVnbLk9TUqub1ptEvyjl5bwYZl0k60BMUr5lGr%2FZ0AMji1Jttf9VoA7F9LXCRMkbymY1%2Fz7Pd5pwvQ1a0%2B93jwrciNFY6vA9rW59N0UnGmGGdB3JixCpcc6F3OiKJfbBUufawG1Qddqo4dmf4%2FeV8hcYN4M6KmLg2%2B6J09zlV%2BZpWheeyCo3ZscehOgqKDHt2MHy1PTGzaqb1yjJsw91OeFxQPk%2F4JI95MojOSCkGsbBZdRL8VKBi5V41BKk%2Fc0X75hoFY0lo879UUq%2Fp4Af6dsmBHPYO%2FRC41u8E%2BBfnkcn8FpI%2BTcFJaER7HzscBC%2BLj1sAOzkVe1e1oVuUAC0tyGpwYoUtGRIJpziwbsJhCtdoICvyWSMOuCicoGOqUBWeROiFlXcx293AMe3CND%2B6IH9KyEY6qaRWErOUmiZ1hzZWk5aUwI0GlprLw%2F3E6%2FeqrIhDFZt6RlOS0jP7U7X%2FtE0Y3c34IrTDud7QDbRfdYYgv%2BKUJ%2FUcH2iYigoIIDAGfa6Zvoa74ljOM7a8Oe28rbINJsyIqpmZQ8aENxkcJzzj8comlECp9q9VNPKr59zRrSIRobHCbqoxFJnNjncmprTTbT&X-Amz-Signature=9322922e2f7581874a812e0fdc61a99c9ef617b41ae6518b32df7204c2416e11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
