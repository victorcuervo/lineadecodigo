---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCNMZ6WQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQC%2FkIWCGSNhyq4HtuQhjpSLpotCfNjwMfwc1j%2FmxG3dJQIgD5jrTCGz4SL87KI66W3VUGyf6%2Bh%2BBMvErt8F5zQOlKAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDE4SJIIK0pue7%2BianyrcA9e1UqC4ttMYpTmg9OhiL%2FybDWhY01ZnkYmeGy6iJNYljbm8Bq3kyqGFqRYVvcfytbL6fLQO7qVTNcXJlgUyw2tjmW3yWhloJMRJ1d5ACRr7YeYfRRoLSc9ct%2B9WtfXgm5Lsy0xy0XoE%2FWaphnBBZ0qa0PZdNai%2Bt2ALF3xukkp4VSmv9mGGexxrvw0PQtKXfeBy50ILjEk6AqnonOWwNojJailrpISKkignAgTFLaQX3l9%2F%2BrG9J3WMcS5swgw49BLIxoOyt%2ByNfsAKVuJuemYz0DvEchpjSJbEP3YXN3YwVcQ5mA%2F5mNbwEyiXQp1nu6KRKayvQ%2FEU1tbppxumMuNKhP72Lx1Z7IMuEn0MrNT9Lm72Ui%2BqGcU%2Fm4zab6GmDNPO6%2B5iDOQmEswZcnKAVzzkL732vNKk3f99xHlx5omKrZk%2FTCxWVUieylsDR6EtkVBPEJHtGuAZH6AZYpPPQtaxE6vS0Rnx7AJHwVFx%2Bg4nkI2HqXp9hbwzIuX6LQ9i3taPBan1g4A94BEhlCbl1voolIc9FM9CPUhL8y9dAMIMGdHxJR3HOOuA3AB7byBqHpf3x3eBvblEhw2FVDaEo80J%2Fndn3Y6Ftk%2BOy6SmEwQuGwiBmeD6bH9B%2FXnCMMrnxMkGOqUB781EzBQPvW4kwp6yr4jej9tpYciGW5lsxZ4chw3buoeJJlWqkH8AUHJoQdDPYTAPL933WF8AD7L%2FWm1V08WW4hzvKkwmn%2BrHytYT7mfKdrcLVGplad8X6VaRAVrLA57zjPhchmUTFTJ6c6ranuSM54cxQWbEiyTLAAGHN%2FQXdnGjhgFwCprnwT0WQ20K4DmpMi1xnabf65t3yZZoHXgLAWxM3ny2&X-Amz-Signature=c351fc56ff8318b1864cee4abd09d39e9db2f7883e2c3caec23a2cdb0771dc0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCNMZ6WQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQC%2FkIWCGSNhyq4HtuQhjpSLpotCfNjwMfwc1j%2FmxG3dJQIgD5jrTCGz4SL87KI66W3VUGyf6%2Bh%2BBMvErt8F5zQOlKAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDE4SJIIK0pue7%2BianyrcA9e1UqC4ttMYpTmg9OhiL%2FybDWhY01ZnkYmeGy6iJNYljbm8Bq3kyqGFqRYVvcfytbL6fLQO7qVTNcXJlgUyw2tjmW3yWhloJMRJ1d5ACRr7YeYfRRoLSc9ct%2B9WtfXgm5Lsy0xy0XoE%2FWaphnBBZ0qa0PZdNai%2Bt2ALF3xukkp4VSmv9mGGexxrvw0PQtKXfeBy50ILjEk6AqnonOWwNojJailrpISKkignAgTFLaQX3l9%2F%2BrG9J3WMcS5swgw49BLIxoOyt%2ByNfsAKVuJuemYz0DvEchpjSJbEP3YXN3YwVcQ5mA%2F5mNbwEyiXQp1nu6KRKayvQ%2FEU1tbppxumMuNKhP72Lx1Z7IMuEn0MrNT9Lm72Ui%2BqGcU%2Fm4zab6GmDNPO6%2B5iDOQmEswZcnKAVzzkL732vNKk3f99xHlx5omKrZk%2FTCxWVUieylsDR6EtkVBPEJHtGuAZH6AZYpPPQtaxE6vS0Rnx7AJHwVFx%2Bg4nkI2HqXp9hbwzIuX6LQ9i3taPBan1g4A94BEhlCbl1voolIc9FM9CPUhL8y9dAMIMGdHxJR3HOOuA3AB7byBqHpf3x3eBvblEhw2FVDaEo80J%2Fndn3Y6Ftk%2BOy6SmEwQuGwiBmeD6bH9B%2FXnCMMrnxMkGOqUB781EzBQPvW4kwp6yr4jej9tpYciGW5lsxZ4chw3buoeJJlWqkH8AUHJoQdDPYTAPL933WF8AD7L%2FWm1V08WW4hzvKkwmn%2BrHytYT7mfKdrcLVGplad8X6VaRAVrLA57zjPhchmUTFTJ6c6ranuSM54cxQWbEiyTLAAGHN%2FQXdnGjhgFwCprnwT0WQ20K4DmpMi1xnabf65t3yZZoHXgLAWxM3ny2&X-Amz-Signature=1d5b2d7f37d801a8a78f7a6ab4d5eaa37ba742340f390e1930322a642114178b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
