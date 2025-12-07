---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHPUGBVZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T035558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhFUVwklTMx8pr1NMOLUSm0SPdohYTGdVJdp0GpWoVtAiALHhwJDABshO0nJJiOEfFyUGsk%2BvKk0RaVXjS8GSRVLSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCrEFC5AKwrAjY2UDKtwDMFDnkCfXp5mb3AO%2BqL4MximQ9053RZf5u2JMEvpC%2Ftd4XqggBGYIb3neILL1Eme5w1vl483Re50p%2Fa2romTJQnc7pZCKVjjxgpwrIpfOprvH9pjuzcCnhiFf0oXD2reBv1DE2cJbl9J%2Fn2F%2BDN3mimOphQEtJ0vMj3jpgWV2y5uF2etUs5vbIQxIZu26T93ZtoOlDDr9GUx4Cr%2F%2BzFswsRUsRQGFCMcbBZSFR2Lz0w7w3JkpXkoWMpJfPRXLNXGvttAviHlp0GDQ9tA3egna3WbhWgnZxqpvlH7MPkTirahglFn%2BYQ93Zk3VS93nHqK5Ro7JpJ3lROwNk%2FqC0TRyuoqOD2KFngetc5%2FiEDY8uDkcxDwbM3%2FGD%2BeRUy6ZU1nRzrUu5NaRmSgCB02cE5z0oVWgNEKVc1%2BnCflBGjrUbuvnmFDip%2BvXonNFquaqwEmox7lkemR99gfPguI7SU9QQQdiXqpaGtszZcWjMuXqaTf87ey%2FKyJjwMXLX2ltivv9XR12PZWReD4A9%2F36e5iG3zo9aEUFX%2F6JTC0pw2zGmR3VDl6YW96zPohSo3wDtH99xYEV2xDDV7WM2RSvKa%2Fd6nOuBR7fv5wR4czOJzXqib0y%2BF37Degcrc8Tt1swu%2F3SyQY6pgFItJgqikGBW%2FeQz0mtdrrlCdGk2KPLWDHvILdyhvfi2czzkRffmj0dl3sQDBthtJdBVH4ErjY9gmJAC1gqWxR%2BRHhmTsgUz%2B%2BTzN%2FQ3mq54ezEQ%2Fgbdy4avDuPvk%2BcAjc0GCxSfJpntBjlvLoU%2FeAkUcjsUhe8REWvDrKjZ2Fd5obf%2BZ9xVArS%2FcS7nFmI5ZeCzeYBgUNHf%2BqTuRf4tOqjG4eLCO%2F3&X-Amz-Signature=8ec5d16b1a7050de2c3fe48b5bd649087b3df401e48657f8c1890c1e8e57e40a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHPUGBVZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T035558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhFUVwklTMx8pr1NMOLUSm0SPdohYTGdVJdp0GpWoVtAiALHhwJDABshO0nJJiOEfFyUGsk%2BvKk0RaVXjS8GSRVLSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCrEFC5AKwrAjY2UDKtwDMFDnkCfXp5mb3AO%2BqL4MximQ9053RZf5u2JMEvpC%2Ftd4XqggBGYIb3neILL1Eme5w1vl483Re50p%2Fa2romTJQnc7pZCKVjjxgpwrIpfOprvH9pjuzcCnhiFf0oXD2reBv1DE2cJbl9J%2Fn2F%2BDN3mimOphQEtJ0vMj3jpgWV2y5uF2etUs5vbIQxIZu26T93ZtoOlDDr9GUx4Cr%2F%2BzFswsRUsRQGFCMcbBZSFR2Lz0w7w3JkpXkoWMpJfPRXLNXGvttAviHlp0GDQ9tA3egna3WbhWgnZxqpvlH7MPkTirahglFn%2BYQ93Zk3VS93nHqK5Ro7JpJ3lROwNk%2FqC0TRyuoqOD2KFngetc5%2FiEDY8uDkcxDwbM3%2FGD%2BeRUy6ZU1nRzrUu5NaRmSgCB02cE5z0oVWgNEKVc1%2BnCflBGjrUbuvnmFDip%2BvXonNFquaqwEmox7lkemR99gfPguI7SU9QQQdiXqpaGtszZcWjMuXqaTf87ey%2FKyJjwMXLX2ltivv9XR12PZWReD4A9%2F36e5iG3zo9aEUFX%2F6JTC0pw2zGmR3VDl6YW96zPohSo3wDtH99xYEV2xDDV7WM2RSvKa%2Fd6nOuBR7fv5wR4czOJzXqib0y%2BF37Degcrc8Tt1swu%2F3SyQY6pgFItJgqikGBW%2FeQz0mtdrrlCdGk2KPLWDHvILdyhvfi2czzkRffmj0dl3sQDBthtJdBVH4ErjY9gmJAC1gqWxR%2BRHhmTsgUz%2B%2BTzN%2FQ3mq54ezEQ%2Fgbdy4avDuPvk%2BcAjc0GCxSfJpntBjlvLoU%2FeAkUcjsUhe8REWvDrKjZ2Fd5obf%2BZ9xVArS%2FcS7nFmI5ZeCzeYBgUNHf%2BqTuRf4tOqjG4eLCO%2F3&X-Amz-Signature=7008edb17da1b182a91985a1ba97fb18dd249314b3c8923999d301cc0d47a626&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

