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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTKWH553%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkDXxSQMNIn9vgMyyLWjqRyqOY%2B5rh6KdViYs6AYY%2BXgIhALWW1o%2Bvj3bJaAdujZAvADqKCVSgsHxC3qbLY%2BYrnZcJKv8DCHMQABoMNjM3NDIzMTgzODA1Igyo2T9Ia1l3S9TcuOcq3AOOH5vE5D7PkHD%2Fw8BDL8SdicA7suRXuOqO4MLvmN%2BfrQ7PJsZ8OJ8BNDcCu%2BVNH2b%2FRaxc3vYUwXnOJ%2BWQ09U4jBpmQVkJSUI3E4WTS%2Bj%2FguARJDEZVQgj%2BkLfzy5fx7%2BZ4bJUXeeLnWVZKJQoCgSLl%2BCuBK9uJhl8L6aj3qCyLd%2FIZMlXNqixkfi8wGnGpUEzHioQh9fSOOdjrYPDE4UDB20C7a%2FZfDeYw9PtecwsK%2F68jhQH2SlImujC3JTYGIRh45v2BoieGj4evO5l83Z1lu5qQc6lEEVSrXpmQQJGeGYlpmJSDIK9X97R2ceBBTCPZnKXc6SmsBZ3Xo2O8IggV1sBLb9YFwB5poGYvEH7F%2FFBdzqxXvFul4gThTw%2F5SHhIlnlOdEwxmUMQxWDP%2FIM6nzSsf9vynrwSFIQ3yjirL1dBkgLTdwzU49cetA5%2FOigf5OT2P%2BTR938RAdC7JkiV5Kix%2FyE%2Be%2BTqw4mLeczLnB%2FcEyWIMVNS9isSnbUMzK7%2B0phazSzNVlqwYnhI2HViP4pbDRAdTKh52c%2BRBr7aFML62FltcHOWFCQTjOVEherIea8TJMRycQTFHSqC7276mTK41BhPNWRhf%2BnuP6O%2BcfMxu%2Bh79gY3oeW%2FzDllojKBjqkASMNafFHJ%2B14FmK9%2F4ylsfjfms%2FD%2FrB8hatKWhB%2BVUItEST87BsNmrDSwGlsJOm3UE1b8%2FiLlYm6Pg8Fld0HhifRq2c2CrQGdktPnJP1ZCGo17HZhQhlRUvTQjiLmTEEjHAHp2rMYuxvIrfBAkckAvjCv8MVPf8ezLzUfAJ%2B8iAETlm6PnVJEG1oonvMihnd%2FiqHvAmgASj3x14wRJq%2BNbNt5qPe&X-Amz-Signature=54f299fba06397ef3c4746dd2a4693f2e2f6846edeaf7887f674cb7e8064c5a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTKWH553%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkDXxSQMNIn9vgMyyLWjqRyqOY%2B5rh6KdViYs6AYY%2BXgIhALWW1o%2Bvj3bJaAdujZAvADqKCVSgsHxC3qbLY%2BYrnZcJKv8DCHMQABoMNjM3NDIzMTgzODA1Igyo2T9Ia1l3S9TcuOcq3AOOH5vE5D7PkHD%2Fw8BDL8SdicA7suRXuOqO4MLvmN%2BfrQ7PJsZ8OJ8BNDcCu%2BVNH2b%2FRaxc3vYUwXnOJ%2BWQ09U4jBpmQVkJSUI3E4WTS%2Bj%2FguARJDEZVQgj%2BkLfzy5fx7%2BZ4bJUXeeLnWVZKJQoCgSLl%2BCuBK9uJhl8L6aj3qCyLd%2FIZMlXNqixkfi8wGnGpUEzHioQh9fSOOdjrYPDE4UDB20C7a%2FZfDeYw9PtecwsK%2F68jhQH2SlImujC3JTYGIRh45v2BoieGj4evO5l83Z1lu5qQc6lEEVSrXpmQQJGeGYlpmJSDIK9X97R2ceBBTCPZnKXc6SmsBZ3Xo2O8IggV1sBLb9YFwB5poGYvEH7F%2FFBdzqxXvFul4gThTw%2F5SHhIlnlOdEwxmUMQxWDP%2FIM6nzSsf9vynrwSFIQ3yjirL1dBkgLTdwzU49cetA5%2FOigf5OT2P%2BTR938RAdC7JkiV5Kix%2FyE%2Be%2BTqw4mLeczLnB%2FcEyWIMVNS9isSnbUMzK7%2B0phazSzNVlqwYnhI2HViP4pbDRAdTKh52c%2BRBr7aFML62FltcHOWFCQTjOVEherIea8TJMRycQTFHSqC7276mTK41BhPNWRhf%2BnuP6O%2BcfMxu%2Bh79gY3oeW%2FzDllojKBjqkASMNafFHJ%2B14FmK9%2F4ylsfjfms%2FD%2FrB8hatKWhB%2BVUItEST87BsNmrDSwGlsJOm3UE1b8%2FiLlYm6Pg8Fld0HhifRq2c2CrQGdktPnJP1ZCGo17HZhQhlRUvTQjiLmTEEjHAHp2rMYuxvIrfBAkckAvjCv8MVPf8ezLzUfAJ%2B8iAETlm6PnVJEG1oonvMihnd%2FiqHvAmgASj3x14wRJq%2BNbNt5qPe&X-Amz-Signature=36f5daaa89b1e7a20a81e963dc347cc6ad43a1186d2d654342cbe0c60081cead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
