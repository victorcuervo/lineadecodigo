---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466324Z7WTV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T125753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKnLdUxlXFvN16Ek0WgUeHs2u3saBrGj%2F3jRiT2znrwAiEAlA83YrlCIJT2aTFLfcNNjpc8wKjS6ONnH8rH014xcegq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDA7%2BY03cKlinMnPdIyrcAyH%2BY9KAV1WfUHKWiFqtkmS0r%2BtMqX2iKkfRAxYUTv6YXrckaSSWIn0uNLd%2FoCELqAbwHIfnNcNzlSmV5fF8SzKH%2BQRZ6mXDEKuepQpa%2FNGptQCEev1hNG%2FW3RREAZsS6V1eUlhb9fjP%2B%2B%2FyDlDIC8BvEPPT%2FXPcAM8CojxIuKNv6lODc9NVf6Imx8eyPftR5CogIummyyzRHNNFafwbHrGQWsd2kMQnLuLDgGwyS0eNTOnniO3qpcDG6HPUv696xmIx6SJc48O%2FZ100%2FSe66hwQKFVph4YWcjgLBci7oosaZkauLYjsnU10WVa0sL4sFQuiAEUaKdO6yqIY7L1sjhxYMWCleifXO75yYDqEYxVGVFf%2Bljlvww4w4F1lmyfEDaGgErgoyPUqxFmVgoEsTFv1JoKkBGFyABUZyHueS7dLZbnu3kLr2QGPZckE1PJHH9DM6LeyD5rAg7zZkxFFWZhIs2pIFFqOgIFVR%2BP6ydZ%2BkC%2FaZ6RVafxcwA4EXjHADTpNeuhOz73bawXYYhJTL6O9wCzTwQgKySmNOOWLv5h7xariMYu4HwT20yhYlyNP8Sl8U8E4rNt8bn43OkX9ssvHvcaYPL0cNVuvJDKN9Q3cHD9lLZkkZmhwBJw0MPXKyskGOqUBtvjZOhHEmK2W02Ie6VbF6Vk1F%2FhyVjhjeQOyKp33SLnm3LcAuCVk%2FyMvXRmlkNSRfDTHAQyNrimhbyslyoq739uaKpDOVxabVmGCpb%2BkSeLGQNMA%2BTlT%2B6MGGBsFa6rAliTUPzf62mfO4IPYQ%2F%2BDQ7pphXWW7UvDo57bSetTvMnxwgVuL%2B4EQQkeI3MQtztQbUN4s3K%2Bk3Lk%2FYbaiZiSY0PxcI48&X-Amz-Signature=0ac3107dbacfea7251e632ba589adf0ab905fd343c7088ed9baa860583bcb96a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466324Z7WTV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T125753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKnLdUxlXFvN16Ek0WgUeHs2u3saBrGj%2F3jRiT2znrwAiEAlA83YrlCIJT2aTFLfcNNjpc8wKjS6ONnH8rH014xcegq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDA7%2BY03cKlinMnPdIyrcAyH%2BY9KAV1WfUHKWiFqtkmS0r%2BtMqX2iKkfRAxYUTv6YXrckaSSWIn0uNLd%2FoCELqAbwHIfnNcNzlSmV5fF8SzKH%2BQRZ6mXDEKuepQpa%2FNGptQCEev1hNG%2FW3RREAZsS6V1eUlhb9fjP%2B%2B%2FyDlDIC8BvEPPT%2FXPcAM8CojxIuKNv6lODc9NVf6Imx8eyPftR5CogIummyyzRHNNFafwbHrGQWsd2kMQnLuLDgGwyS0eNTOnniO3qpcDG6HPUv696xmIx6SJc48O%2FZ100%2FSe66hwQKFVph4YWcjgLBci7oosaZkauLYjsnU10WVa0sL4sFQuiAEUaKdO6yqIY7L1sjhxYMWCleifXO75yYDqEYxVGVFf%2Bljlvww4w4F1lmyfEDaGgErgoyPUqxFmVgoEsTFv1JoKkBGFyABUZyHueS7dLZbnu3kLr2QGPZckE1PJHH9DM6LeyD5rAg7zZkxFFWZhIs2pIFFqOgIFVR%2BP6ydZ%2BkC%2FaZ6RVafxcwA4EXjHADTpNeuhOz73bawXYYhJTL6O9wCzTwQgKySmNOOWLv5h7xariMYu4HwT20yhYlyNP8Sl8U8E4rNt8bn43OkX9ssvHvcaYPL0cNVuvJDKN9Q3cHD9lLZkkZmhwBJw0MPXKyskGOqUBtvjZOhHEmK2W02Ie6VbF6Vk1F%2FhyVjhjeQOyKp33SLnm3LcAuCVk%2FyMvXRmlkNSRfDTHAQyNrimhbyslyoq739uaKpDOVxabVmGCpb%2BkSeLGQNMA%2BTlT%2B6MGGBsFa6rAliTUPzf62mfO4IPYQ%2F%2BDQ7pphXWW7UvDo57bSetTvMnxwgVuL%2B4EQQkeI3MQtztQbUN4s3K%2Bk3Lk%2FYbaiZiSY0PxcI48&X-Amz-Signature=aaa26f596c6b39e2b78cac5bc837985046faca4c1833ea9a4779247f19a86cc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

