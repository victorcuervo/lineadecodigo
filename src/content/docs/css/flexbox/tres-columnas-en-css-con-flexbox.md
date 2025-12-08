---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PPX5IXQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T024004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICo0YPbmSEQ40yvRAIN6iQYWPCat6lUKYdbiDWmFegzvAiAuHmhteRXmSoeDiyj0xPCW%2B6OjTSwzCjR7MhqfRDuBKiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMENS7bWLvjM145kMpKtwDyh8%2Bs7l0n4u7WKs2%2FJnuldRVAT8JXotmgFwXH%2BqguZuIIhzQ7NvLqoQyjPNU8SjMPN%2BLSwBadq%2FM5kfTQF6DJYTJNn8lCT8y2Jz0vam9Yan3fcInqtasdW%2Bj3SMTGpsHiauoQBhNKcwkj4a0ZZH1tAyfBmKcegEPeruBZ7Zk2kfvzQi9vOksTl2HDUuVqwRvWlSlG5%2F6BJj0ZF2tqoXAae%2Fc8%2FSNqJIRMQExVE9I153GiV1hMZwmS2cOxcr2ticN8FGQkHB0PYP%2B7obHC0x8ya%2FBuzuW4R1oozwSAKdMJSLWzAMVnW6fMIbRDAuuZVsmA3mdo%2BBBNZf20dlDk3U%2FVOPvb5qZD12GKS%2FU1YKBX6Ynj9aHFXtdC%2F1VISugrZBUl4lxhDtEu8hMnkbfFItsdPfPWgjoqrwLm%2FUkdAI%2FUMPF6cIcqJJ0k2%2BiSLQC9GEHUX%2BG%2FJB0HTzvwm9lwenoMbOdDNXZZMyUI0rslxcobjAhneqLYx90uYJ7SgL1GDSJ9bNcH2OF4AoWXGBV0HXyOiJrjZbm3hCYT38EKdu0zvLmm98ZFbDJqS107qMvUA2QkU5ZoQGKURTK11TFF%2BGIajvmAFkAuq%2FbHdGiZH7uHWA4MVGt4lgFRG5MDp4w6O7YyQY6pgFWFHquE8MdQrpyFpQR3nPbfQ7Pk0SVT3uZXgMHp%2FsoinSQn3%2F3VIMm5%2Fph%2B%2F318qxGKaRcukoLC%2B4m513DrNW22t2dOYR700aDxuuon%2Ba%2B3yKvaPqxUMdQFdbUWxkUGwU%2BpXEQ3gTcZYdAODwqyxZEIvGVfdAJ%2BPXXKVgE0eeTE7YhLjq8%2FLsYRU2Kd5q2ae7WaS6SAfqf2M99f5FOT8lmHTfSBuZ2&X-Amz-Signature=43bffcfe7dc87617647683eb7ed358cd9580389f05807d561dd7ab68666dbe65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PPX5IXQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T024004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICo0YPbmSEQ40yvRAIN6iQYWPCat6lUKYdbiDWmFegzvAiAuHmhteRXmSoeDiyj0xPCW%2B6OjTSwzCjR7MhqfRDuBKiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMENS7bWLvjM145kMpKtwDyh8%2Bs7l0n4u7WKs2%2FJnuldRVAT8JXotmgFwXH%2BqguZuIIhzQ7NvLqoQyjPNU8SjMPN%2BLSwBadq%2FM5kfTQF6DJYTJNn8lCT8y2Jz0vam9Yan3fcInqtasdW%2Bj3SMTGpsHiauoQBhNKcwkj4a0ZZH1tAyfBmKcegEPeruBZ7Zk2kfvzQi9vOksTl2HDUuVqwRvWlSlG5%2F6BJj0ZF2tqoXAae%2Fc8%2FSNqJIRMQExVE9I153GiV1hMZwmS2cOxcr2ticN8FGQkHB0PYP%2B7obHC0x8ya%2FBuzuW4R1oozwSAKdMJSLWzAMVnW6fMIbRDAuuZVsmA3mdo%2BBBNZf20dlDk3U%2FVOPvb5qZD12GKS%2FU1YKBX6Ynj9aHFXtdC%2F1VISugrZBUl4lxhDtEu8hMnkbfFItsdPfPWgjoqrwLm%2FUkdAI%2FUMPF6cIcqJJ0k2%2BiSLQC9GEHUX%2BG%2FJB0HTzvwm9lwenoMbOdDNXZZMyUI0rslxcobjAhneqLYx90uYJ7SgL1GDSJ9bNcH2OF4AoWXGBV0HXyOiJrjZbm3hCYT38EKdu0zvLmm98ZFbDJqS107qMvUA2QkU5ZoQGKURTK11TFF%2BGIajvmAFkAuq%2FbHdGiZH7uHWA4MVGt4lgFRG5MDp4w6O7YyQY6pgFWFHquE8MdQrpyFpQR3nPbfQ7Pk0SVT3uZXgMHp%2FsoinSQn3%2F3VIMm5%2Fph%2B%2F318qxGKaRcukoLC%2B4m513DrNW22t2dOYR700aDxuuon%2Ba%2B3yKvaPqxUMdQFdbUWxkUGwU%2BpXEQ3gTcZYdAODwqyxZEIvGVfdAJ%2BPXXKVgE0eeTE7YhLjq8%2FLsYRU2Kd5q2ae7WaS6SAfqf2M99f5FOT8lmHTfSBuZ2&X-Amz-Signature=b09fadaa5234ba90b1738eddea763d2bd16ae6069956a293d506ea2784dba9ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

