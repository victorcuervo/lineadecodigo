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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWN6FWNA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx%2FjVWIKi4d%2BL2uGjExrpRK93V18LVoZ%2FaZ9o1ArL55AIgd34nCmUUIlnZQAbPaWDOsvPJtkiM550581WLS1GLKwoq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDBl7iNIB4EffQ5n5fircAzpchKRT3DKhneRAoyr7r1WFsm55WTF00%2BNa1Y3qBYyNwF8cGJ%2Bb2aGHi44eYq3NKOHLmhkLbJZqShA0UbdK%2Fk2JG0nMpnsIqnlj%2BbWLD8zChstcgR7tjs85nAJitb89amZF6HriOJnvYFIoD6o0kLbotiyZS6mH3x9C%2BqXSDxfPwdtlvBYqFB6Od7tckFyzGR62TipiQKWZtCkgMIQ7xC5hwHqq2eiliutUAvBq4aGW4I6eG0Clv5VwS%2FWmRizadAYt9NaI7pwrscrclC31mTJBGqXVN23hJrWe1FlrNC24q%2BPnT7ie6fvIk3acD7PrYsr8GzDZtd2tsRbRHRUE9VTHnVtS%2BaC3IZ0plvNvnKLl5D%2Fwal8dTYHoXwmuznYTRjCDPVViH0ueMRr%2BLN452QRL%2B1HhRp4FOCqwVwOZNNzKLjlAkrFyxG2YOaV3Bwlvz2B63hyyLDW7q%2B4DlK5ztvynSXr675pfuqOcpDiktFCCfRImN7a0MU0dtYQGBjB0wrP9urNT9RL%2BJtfIvEPCmW%2FHRQX4NWsC%2FH9GqHq%2BRMFX%2BFVuDIje5dS3%2FLlBQlEl59%2BRVTQAarSdZf3GFhQuSHnKak2UVi5GiEYvWg5Rg6rmuObjDR7ACrFhvJqgMIKziMoGOqUBt8V5teu77l5MKT%2FS4fCQsPvZPxViSXhGsO8oUl49BWYF%2BCfL65SB2ZQO4B%2BV8ms9H8l6C%2Bv7scW5bQuRk1sm%2BhiR99ewc%2B60AbKrdxDTUkt0lYfxAfp7Q04NcAtg%2BV8FxcgVIy31NPiM%2BfOzy2hFkZXhGszhRlibFoX3XKpn5Fy5gWj2ENMKsaZSPNrtVJ3wep9KyQYuAis95CKz3MLvJZQOdMHP&X-Amz-Signature=e38dd3e019be1a4d00580f571a7705401e885ddeba0b72431b9c70dbbf6f6653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWN6FWNA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx%2FjVWIKi4d%2BL2uGjExrpRK93V18LVoZ%2FaZ9o1ArL55AIgd34nCmUUIlnZQAbPaWDOsvPJtkiM550581WLS1GLKwoq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDBl7iNIB4EffQ5n5fircAzpchKRT3DKhneRAoyr7r1WFsm55WTF00%2BNa1Y3qBYyNwF8cGJ%2Bb2aGHi44eYq3NKOHLmhkLbJZqShA0UbdK%2Fk2JG0nMpnsIqnlj%2BbWLD8zChstcgR7tjs85nAJitb89amZF6HriOJnvYFIoD6o0kLbotiyZS6mH3x9C%2BqXSDxfPwdtlvBYqFB6Od7tckFyzGR62TipiQKWZtCkgMIQ7xC5hwHqq2eiliutUAvBq4aGW4I6eG0Clv5VwS%2FWmRizadAYt9NaI7pwrscrclC31mTJBGqXVN23hJrWe1FlrNC24q%2BPnT7ie6fvIk3acD7PrYsr8GzDZtd2tsRbRHRUE9VTHnVtS%2BaC3IZ0plvNvnKLl5D%2Fwal8dTYHoXwmuznYTRjCDPVViH0ueMRr%2BLN452QRL%2B1HhRp4FOCqwVwOZNNzKLjlAkrFyxG2YOaV3Bwlvz2B63hyyLDW7q%2B4DlK5ztvynSXr675pfuqOcpDiktFCCfRImN7a0MU0dtYQGBjB0wrP9urNT9RL%2BJtfIvEPCmW%2FHRQX4NWsC%2FH9GqHq%2BRMFX%2BFVuDIje5dS3%2FLlBQlEl59%2BRVTQAarSdZf3GFhQuSHnKak2UVi5GiEYvWg5Rg6rmuObjDR7ACrFhvJqgMIKziMoGOqUBt8V5teu77l5MKT%2FS4fCQsPvZPxViSXhGsO8oUl49BWYF%2BCfL65SB2ZQO4B%2BV8ms9H8l6C%2Bv7scW5bQuRk1sm%2BhiR99ewc%2B60AbKrdxDTUkt0lYfxAfp7Q04NcAtg%2BV8FxcgVIy31NPiM%2BfOzy2hFkZXhGszhRlibFoX3XKpn5Fy5gWj2ENMKsaZSPNrtVJ3wep9KyQYuAis95CKz3MLvJZQOdMHP&X-Amz-Signature=34a491ed553e789c00de7f6d9d1373a3c02e96a3eac022504066e6535cf29fa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
