---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LFG73XK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDTbWAOZGVedrkM9d71IVrjkfi6MuXzRCL47bDjXimxcQIgPPlMkagUU%2BHKBJ54yHnClhfskHIjfJYBumdLhUkAKs8q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDLGzvJzmiJ4LEPOzGSrcA7OBB2YzjiH%2BX0o2tdWL%2Fdj9VKJJxHUIOJn49WZwnjMBlUI00LkePzrmfPeVsPFC579sSQ6eX%2FYcvyi%2FodtoFmFk23p%2BxIL9M4kLZUdQk1vmLnXxrvEiDTLmTFI2xaGXz%2B86mE8px%2BGU%2FdQM6ezuYvX%2BgRKglz5VPKWgzZVzSQaaKAm%2BWQaUe1d7gdBnxSPCkSNtp%2FZV1ypM%2BB3efIL6H7oTKJ1pSz8uwR9cM1f%2B%2FAi1wzimdW5AQBxSNgqRHhLhRNxQdGfi9jJswZEoCx42w9H17Z0v1BYj8v3T5hr%2BlG7tUv9GRdWa8trXtCHZIu52cJ8DgDJgsxDm%2F4%2BuJEcTduLdqTEYngMMozG8WuqZ5u%2BBwKQEeH7E479LQc70kdEn8C7lOXVuAkPG2OEEv%2B9PNRdTU0lhBnLOVtMs1Zqdsqovoaexis803ziZs973gG7ipomp0X1iB9otKE1BbzgTuaLByPpxFgUrhpRgnBIhMc1yHXKH0%2FgoyG6AlMjESUxpBMapDqyEjT9a5cDu9W9doFzHxQfT9XsrogVAJlXhHGv3JCyKCMBhZ%2Fh%2BozUKPMbJFImXw7wTcYPqzVeu%2Bq0bUTFt0d0ZWTnFOHE0kYmfUnpUbRvMRZNo3IViKQMtMM%2BVw8kGOqUBPX%2FNLzF0FtOaWcUmOg80eQl73yVMigGpjh6nnnwF4CoEW7%2BgjS1IO1uWDSgUhQHRiOyboqKeXecmuDMBVFyu6whn9249%2Fo0qAe1m%2BNL1Ok6sWZNQfoqARmXGIMNW1k2kRWbIfyteBfiArH%2BwpNZ71pA2k0IZeWqT7o58RKKHQr%2FZEIa24LzmRHnNvyY3VuZExUvkBTgdMK0Nbos6tUBSI8b%2B6ex5&X-Amz-Signature=df273f6b554157c6d5c68699bef94943bdd28880428f5d1ba709d763753b754b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LFG73XK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDTbWAOZGVedrkM9d71IVrjkfi6MuXzRCL47bDjXimxcQIgPPlMkagUU%2BHKBJ54yHnClhfskHIjfJYBumdLhUkAKs8q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDLGzvJzmiJ4LEPOzGSrcA7OBB2YzjiH%2BX0o2tdWL%2Fdj9VKJJxHUIOJn49WZwnjMBlUI00LkePzrmfPeVsPFC579sSQ6eX%2FYcvyi%2FodtoFmFk23p%2BxIL9M4kLZUdQk1vmLnXxrvEiDTLmTFI2xaGXz%2B86mE8px%2BGU%2FdQM6ezuYvX%2BgRKglz5VPKWgzZVzSQaaKAm%2BWQaUe1d7gdBnxSPCkSNtp%2FZV1ypM%2BB3efIL6H7oTKJ1pSz8uwR9cM1f%2B%2FAi1wzimdW5AQBxSNgqRHhLhRNxQdGfi9jJswZEoCx42w9H17Z0v1BYj8v3T5hr%2BlG7tUv9GRdWa8trXtCHZIu52cJ8DgDJgsxDm%2F4%2BuJEcTduLdqTEYngMMozG8WuqZ5u%2BBwKQEeH7E479LQc70kdEn8C7lOXVuAkPG2OEEv%2B9PNRdTU0lhBnLOVtMs1Zqdsqovoaexis803ziZs973gG7ipomp0X1iB9otKE1BbzgTuaLByPpxFgUrhpRgnBIhMc1yHXKH0%2FgoyG6AlMjESUxpBMapDqyEjT9a5cDu9W9doFzHxQfT9XsrogVAJlXhHGv3JCyKCMBhZ%2Fh%2BozUKPMbJFImXw7wTcYPqzVeu%2Bq0bUTFt0d0ZWTnFOHE0kYmfUnpUbRvMRZNo3IViKQMtMM%2BVw8kGOqUBPX%2FNLzF0FtOaWcUmOg80eQl73yVMigGpjh6nnnwF4CoEW7%2BgjS1IO1uWDSgUhQHRiOyboqKeXecmuDMBVFyu6whn9249%2Fo0qAe1m%2BNL1Ok6sWZNQfoqARmXGIMNW1k2kRWbIfyteBfiArH%2BwpNZ71pA2k0IZeWqT7o58RKKHQr%2FZEIa24LzmRHnNvyY3VuZExUvkBTgdMK0Nbos6tUBSI8b%2B6ex5&X-Amz-Signature=f91bdd683d622df5e342dfb65ee36dfa0cfa042aa197d9529926dbc570997d13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

