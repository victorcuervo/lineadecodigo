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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JDRJPRR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNwjMc5isfJql2yDwYksQjctArpdrzYYQREcU8vv0eGAiAaK%2B5zMvjYM93eElkVc1qcALdI5%2Bs2zUaeILWGMOwXsSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMYoXV2l52L%2B9uF3L6KtwDdB0fcXogBTe5K3c8deEs6M42DtiYfyP%2FTVenkw1BSZ7oqHHnuNjTcD%2FNemD%2B5HWecuuyf577paNsGIdAmLQ6%2B6HS384W7yqS2ZtFYOg2Teoxq%2F%2Fp3MgZj8UPwJ%2Fb7Fu9urslQ21KcqD9Dr7O9OvNPNjwFubDigIzsPfXTrgbqBLh6pv0e104m6KH1iFZ2%2F4BLlu21IJGEc39P%2Fv5XrsAOnvJPYO8oKuMDualKAKKYDw3OsB%2BAznh4u6054WgwU6%2BUkDzLOiSLmTht0Nt6QgExBBQzVWbQ4wH7a15liaYRo7%2FqFkzqrENxbGeoRa1VYWlDhII52KN4PgrgucXd%2BKJ5602QrIa%2B4NvB8OOJva%2B%2BLD1SzFQ1%2BRgxxHGiI5km4GA84Oc%2Blcm08XuGUp2bwqvRPzhU6PKJm6C2SIkyjeCzOTud8nY4O3JMahuB9CvYnTUh2KanOFWv1MJQ3tXBOrIH7ce1h09P0PpB1Nj4mbQbeLjvGy5DykWUYh8uTO1xvYOyOim101qkrSDQvKlDZxPCZPc9MNKeymga9VryBtzRNZjjuEkeDsQsT%2Fl1mZmHowfFsxHD%2BdL2j%2FVYGjm6q3N2MEqRwuVVHEMaCsU9JSFw8P%2B1CoqSMpT03lZ1Fgw4rOIygY6pgHPVys691jGT3WGShsb9BAjS2TLAOcVB06lMJz4yqoIFeP%2BhtYPl4So7e9i3JHbs5WUQmgE4UXdz9GXFLYEynCygzTzjL%2FVu6FD1JSMVJOAlf3YjWfMgt9ajnwXyT0haSBHlKwExDpTCKaVQ2bAEs1YwuMu6BdQN48wMmaJiLTsRU%2FL8lr%2BfmUJhI5hJEW1TxBexf%2BPFyOe63CRdEtsnt2Y1oy3t0u7&X-Amz-Signature=83fcaf073f1f7ddc3be6c7e4dac2ee9d7b1fbd926b9822aebf36038bc6b05e83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JDRJPRR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNwjMc5isfJql2yDwYksQjctArpdrzYYQREcU8vv0eGAiAaK%2B5zMvjYM93eElkVc1qcALdI5%2Bs2zUaeILWGMOwXsSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMYoXV2l52L%2B9uF3L6KtwDdB0fcXogBTe5K3c8deEs6M42DtiYfyP%2FTVenkw1BSZ7oqHHnuNjTcD%2FNemD%2B5HWecuuyf577paNsGIdAmLQ6%2B6HS384W7yqS2ZtFYOg2Teoxq%2F%2Fp3MgZj8UPwJ%2Fb7Fu9urslQ21KcqD9Dr7O9OvNPNjwFubDigIzsPfXTrgbqBLh6pv0e104m6KH1iFZ2%2F4BLlu21IJGEc39P%2Fv5XrsAOnvJPYO8oKuMDualKAKKYDw3OsB%2BAznh4u6054WgwU6%2BUkDzLOiSLmTht0Nt6QgExBBQzVWbQ4wH7a15liaYRo7%2FqFkzqrENxbGeoRa1VYWlDhII52KN4PgrgucXd%2BKJ5602QrIa%2B4NvB8OOJva%2B%2BLD1SzFQ1%2BRgxxHGiI5km4GA84Oc%2Blcm08XuGUp2bwqvRPzhU6PKJm6C2SIkyjeCzOTud8nY4O3JMahuB9CvYnTUh2KanOFWv1MJQ3tXBOrIH7ce1h09P0PpB1Nj4mbQbeLjvGy5DykWUYh8uTO1xvYOyOim101qkrSDQvKlDZxPCZPc9MNKeymga9VryBtzRNZjjuEkeDsQsT%2Fl1mZmHowfFsxHD%2BdL2j%2FVYGjm6q3N2MEqRwuVVHEMaCsU9JSFw8P%2B1CoqSMpT03lZ1Fgw4rOIygY6pgHPVys691jGT3WGShsb9BAjS2TLAOcVB06lMJz4yqoIFeP%2BhtYPl4So7e9i3JHbs5WUQmgE4UXdz9GXFLYEynCygzTzjL%2FVu6FD1JSMVJOAlf3YjWfMgt9ajnwXyT0haSBHlKwExDpTCKaVQ2bAEs1YwuMu6BdQN48wMmaJiLTsRU%2FL8lr%2BfmUJhI5hJEW1TxBexf%2BPFyOe63CRdEtsnt2Y1oy3t0u7&X-Amz-Signature=339875f8b161b0e64eb9ed175baff128d05d644f08dbec4ef845fda1ff7146b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
