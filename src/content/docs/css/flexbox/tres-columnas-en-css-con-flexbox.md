---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466675PZXKV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T203617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPgBLdQR%2BJ2vJh7rYdGpfTB79GcUOJ6mY%2FQxPULTAcjAiEAvhueshWysuH0oONqZaEgWBd2vL6MS8u9VnNPp2lkWnIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLz%2BK%2Bm42JAwyCAxIircA%2FNpyW9YwEckpVzkWhMbwUPrvfcm4%2FDXmhCNVx%2Bq%2F3ZjKb%2B5yb%2FgZLiFj1Iz7hKIzFUw3NWb0rwojTe2qJiXz6yHY2vrT33sg2VNVXqakNXET5nSz1TPZ%2BBbUKa0sCulwEAOW5DcSid8fjFtw40BJglebf4%2F2QRx0npjjHUsTmWkiNLL8RvfiiWH9fC2eqljARVsuQX5L9G6Y7Rn%2BtKiNZAJp4ckoYBIKcKk229T94rLCUmmHXd7kyvckMyc4nEjZxF6tqGlmDGHe546KHjMrTETshwbIZk9PzHqGG33AfCme1HzGz7u12SDBTDeiGyxpVoW4CVffzVSqNgWWmKag2fKh3N8HN1EBtpL2HCruPwyWQs4aoCCFlaQUPg5J2iw5y3ekREL2MhhP54TigvzYf5aZNTKPuQ4LXlp%2B1vHDLBisKUP%2BMRU60ILvFzklXdSVNglgAl4d1umPymcA9OWVhSsp9rNf7gqkzmIKGL3%2BCVvRjLF7EuZU4kcu%2BuJsqUDg%2B0lNqvKfUg9XFDrBGFYEO9KknZO8SmuO3P88H2yCI74koysLaEsQItGp4MzBtLNTDc9sCCjad9kyg6HFbUYPAFX5Es6NPFv9ifvArqfEUsS5mIOkXWFOeQwjSagMLbF0ckGOqUB%2BvQAP4Uev%2BiMOVafFgIl43lLvbUJFiXwNqFL%2BjgGcPh0QFoRDPkxOuyj%2FEsTXmHeLiWeUpO8uZwHDjwHuFwpzFit25W4%2BVJkVq0qFBlgdILvemA4aEZbHrwy5HpXjnleH4euzNFXnNlDhUVGouMeZV1UpOJfTzfAkPIrZCzSppApSYfxEJ5lX4V8TsjlzGI50OEYZvAjvOL8FS0Gbe3TAGtB1L3%2B&X-Amz-Signature=00a12a7f68c59211df37d20bcc90bf89b71d71fa557468e0429abb2f97b6ca1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466675PZXKV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T203617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPgBLdQR%2BJ2vJh7rYdGpfTB79GcUOJ6mY%2FQxPULTAcjAiEAvhueshWysuH0oONqZaEgWBd2vL6MS8u9VnNPp2lkWnIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLz%2BK%2Bm42JAwyCAxIircA%2FNpyW9YwEckpVzkWhMbwUPrvfcm4%2FDXmhCNVx%2Bq%2F3ZjKb%2B5yb%2FgZLiFj1Iz7hKIzFUw3NWb0rwojTe2qJiXz6yHY2vrT33sg2VNVXqakNXET5nSz1TPZ%2BBbUKa0sCulwEAOW5DcSid8fjFtw40BJglebf4%2F2QRx0npjjHUsTmWkiNLL8RvfiiWH9fC2eqljARVsuQX5L9G6Y7Rn%2BtKiNZAJp4ckoYBIKcKk229T94rLCUmmHXd7kyvckMyc4nEjZxF6tqGlmDGHe546KHjMrTETshwbIZk9PzHqGG33AfCme1HzGz7u12SDBTDeiGyxpVoW4CVffzVSqNgWWmKag2fKh3N8HN1EBtpL2HCruPwyWQs4aoCCFlaQUPg5J2iw5y3ekREL2MhhP54TigvzYf5aZNTKPuQ4LXlp%2B1vHDLBisKUP%2BMRU60ILvFzklXdSVNglgAl4d1umPymcA9OWVhSsp9rNf7gqkzmIKGL3%2BCVvRjLF7EuZU4kcu%2BuJsqUDg%2B0lNqvKfUg9XFDrBGFYEO9KknZO8SmuO3P88H2yCI74koysLaEsQItGp4MzBtLNTDc9sCCjad9kyg6HFbUYPAFX5Es6NPFv9ifvArqfEUsS5mIOkXWFOeQwjSagMLbF0ckGOqUB%2BvQAP4Uev%2BiMOVafFgIl43lLvbUJFiXwNqFL%2BjgGcPh0QFoRDPkxOuyj%2FEsTXmHeLiWeUpO8uZwHDjwHuFwpzFit25W4%2BVJkVq0qFBlgdILvemA4aEZbHrwy5HpXjnleH4euzNFXnNlDhUVGouMeZV1UpOJfTzfAkPIrZCzSppApSYfxEJ5lX4V8TsjlzGI50OEYZvAjvOL8FS0Gbe3TAGtB1L3%2B&X-Amz-Signature=f16cafd496f764722f23e08eb12454cc5057a10ffbea7e0b2a07885db16080f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

