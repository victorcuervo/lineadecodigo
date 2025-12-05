---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXF32LNV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T045824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVIxicveX%2FonpOS5KPHY1ERrS02oE%2F7tL5Yv1d3sedSwIgFWgGA7%2F%2Fq3ifkpEO0soZjCwhrFKxW6AsF2fvZuOj5%2FMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDIp1LFekN0rpyRcbiSrcAwZA6sgynlmG12KT531jydfyo36PUvnw7veFyFw8xboLZIEL74ZRoNzSBnQJb%2BcYi5gwsnpbFCc1lV9mMc%2FMFb2Fi9scVZIZqRs1Ew6XjErTjfbUrLUBBHriGksr1NQ4L2aq%2BB5U8FqBxBWRVV%2F4VbSBbb395LZnURf%2BogMzIh8H1Npo2wJmrfzPK9SOuqfqAtozNnLJaBf%2BmNqll%2FQWKyQkAluMqwyFV5bhNIL0ZQe8ixdBhJu2NRmUx1J5ghdSeCCpclzWrl7%2FidNv2tPwH2Xxi57pgoFox2xVliV2JEByVc3fbtKAgdBrjDa1F5GfmP8Nf55enSrmaO%2FOdWXkrKnY20meFuihMQMHOcGYQKS5CfqTPChqnY90jJaRKrxdlPvobOu8cmlyIKzQpkJm35NmZM71a8Z5GOZOCs6985BvAcZ8P43EWRv63pEK1A5XE13S5DCtCxuZQaD1ivDajAp%2Fu0YLZsfkULYy%2F7nZ%2FRQatbMH7zbQqw1Vqp5jNOiODQcaPx%2BdlpX7%2BryHrBfp%2BdYcST7S5ZnF33k2bIgv2S5mAUM9Cbk3qYeYbM2bjcfR8mBeqfGSOG1%2BjnuscpSoP6hGHzj14YM0YZiLOzlXTtSz0MyP3k%2FZZDdlrBhNMJWryckGOqUBz5WJM4Bx7sq%2F1CyHZJq7Qwh%2F3DhjqTKOs%2FvxrMBwCs%2FJhBM%2BVZ8H8aMDUNGtjLi6LP3%2BFC7fgsnRby0V%2FUv7lRj3wXN%2F8pUQ553dPseP%2BgjVz9ZxWU5IO72f4uFm9lzpBl3NvbO1IAkxuVFdA5S4pkDgpFlVvUfstWqZahs9OmGoN2VDVjbTGwbOQ8py9qkl3tdN3wGoWn5VzC%2Bjw8OqPVZU4E2K&X-Amz-Signature=74aad75929130a1a97e32642254ff9150a94e3bd7ad2c22fbdc0252892a9d68c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXF32LNV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T045824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVIxicveX%2FonpOS5KPHY1ERrS02oE%2F7tL5Yv1d3sedSwIgFWgGA7%2F%2Fq3ifkpEO0soZjCwhrFKxW6AsF2fvZuOj5%2FMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDIp1LFekN0rpyRcbiSrcAwZA6sgynlmG12KT531jydfyo36PUvnw7veFyFw8xboLZIEL74ZRoNzSBnQJb%2BcYi5gwsnpbFCc1lV9mMc%2FMFb2Fi9scVZIZqRs1Ew6XjErTjfbUrLUBBHriGksr1NQ4L2aq%2BB5U8FqBxBWRVV%2F4VbSBbb395LZnURf%2BogMzIh8H1Npo2wJmrfzPK9SOuqfqAtozNnLJaBf%2BmNqll%2FQWKyQkAluMqwyFV5bhNIL0ZQe8ixdBhJu2NRmUx1J5ghdSeCCpclzWrl7%2FidNv2tPwH2Xxi57pgoFox2xVliV2JEByVc3fbtKAgdBrjDa1F5GfmP8Nf55enSrmaO%2FOdWXkrKnY20meFuihMQMHOcGYQKS5CfqTPChqnY90jJaRKrxdlPvobOu8cmlyIKzQpkJm35NmZM71a8Z5GOZOCs6985BvAcZ8P43EWRv63pEK1A5XE13S5DCtCxuZQaD1ivDajAp%2Fu0YLZsfkULYy%2F7nZ%2FRQatbMH7zbQqw1Vqp5jNOiODQcaPx%2BdlpX7%2BryHrBfp%2BdYcST7S5ZnF33k2bIgv2S5mAUM9Cbk3qYeYbM2bjcfR8mBeqfGSOG1%2BjnuscpSoP6hGHzj14YM0YZiLOzlXTtSz0MyP3k%2FZZDdlrBhNMJWryckGOqUBz5WJM4Bx7sq%2F1CyHZJq7Qwh%2F3DhjqTKOs%2FvxrMBwCs%2FJhBM%2BVZ8H8aMDUNGtjLi6LP3%2BFC7fgsnRby0V%2FUv7lRj3wXN%2F8pUQ553dPseP%2BgjVz9ZxWU5IO72f4uFm9lzpBl3NvbO1IAkxuVFdA5S4pkDgpFlVvUfstWqZahs9OmGoN2VDVjbTGwbOQ8py9qkl3tdN3wGoWn5VzC%2Bjw8OqPVZU4E2K&X-Amz-Signature=d196b760b0685ec9b3983b3c8bf2fbf4ef1776f057dfb10df250a3583d3ad416&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

