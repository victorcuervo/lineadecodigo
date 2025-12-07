---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOGCKIGA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T012628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BjBidCM1o%2BzIhk%2FPHFqIn3jWQ%2BUQ4BRAaC0Ye1ZmkwAiEA%2B4bULJsosiGDd2hI2GPY0A%2FbUE%2FJSD%2BWYjl%2F%2FYBl5acqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPL7wPGbjaUgbK7Y6ircA2QDwhgyCe1FFjQQww0E58zOGXu%2FkXX%2BQnZ9Q6jFNXe5fepoYArNP3cSiKFTwatENw4LGhCxbPdQXhhlfre1K0UsAsLY01wSYdJNEa8W8zYVq7WDrBvG7HfrZw44jMqyFWDxz07SlfN2KozQJx27EVT%2FJUEjK%2FkII2AQlZG9VN5R%2FXYWGE3dgM5t%2FHUUxEKMIlq34B75ND5bTt%2FVgTSBHTFQo2%2FC2L9JwU%2BnOaLkSk0JW%2F5iQK4KVg8NPZzjGPeok6vwWfxiz54X6L6Vv1USvIKZqqL55LKhGlMVZrYK8SEmqQzZTOAgXpJEpfrfRV9DPPmx%2B8fRYTOb4eVcEthv%2BqaU3n7MmRFkguQqxgGWD9BA%2BZN%2FtNG%2F9mBgqsPnOqlGOPfy1qt0PNX%2FK3b9g8vgxZvkU%2BkDhvDsj068j31Hs0W2Xp6RD9McNZM56UFLT%2FZ7re1X3gzBrZnCddS9jObC6kEtFUn5GJxlp7PqXTnrzUmmeR8ndSucV0i0wtZqbxQpLHhzaXmJJtVcfZ0VOckVAfgU%2F1Yyjcf9O5W0wv%2Feg3nBey1PHZsZ3t%2F7YOmr1nrt%2F9%2FVBpeHULgZLyuLLso%2B4FjbMB%2FK9W3KMUX4seizDRMWhtfuWgMSv%2BhE9HxjMNz90skGOqUBEv6zEbec08fUVPNn8gFo8Pe8Qx6g54KvxrWcMl6uGbEhP84jf%2FvhVHznpww7%2FoIV79aHU0991ejzO7EDjFV3UwNtmxX%2FCwcWP%2F349Rr2wbgnaaUDR9prNoRFy3VuAsvgDg4nq6me7%2Bbywdoq7XAQdsqzE4w965OlNGFw25EFWJi2QI9YxZbdZZhX%2FgLYTBKWSsH%2Bh74bmux5eb3qGukJ1ovGslly&X-Amz-Signature=095d9c99e8afded9ed12ad2b284a7b65dcadf8ad539025c0551dba11853b8e20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOGCKIGA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T012628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BjBidCM1o%2BzIhk%2FPHFqIn3jWQ%2BUQ4BRAaC0Ye1ZmkwAiEA%2B4bULJsosiGDd2hI2GPY0A%2FbUE%2FJSD%2BWYjl%2F%2FYBl5acqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPL7wPGbjaUgbK7Y6ircA2QDwhgyCe1FFjQQww0E58zOGXu%2FkXX%2BQnZ9Q6jFNXe5fepoYArNP3cSiKFTwatENw4LGhCxbPdQXhhlfre1K0UsAsLY01wSYdJNEa8W8zYVq7WDrBvG7HfrZw44jMqyFWDxz07SlfN2KozQJx27EVT%2FJUEjK%2FkII2AQlZG9VN5R%2FXYWGE3dgM5t%2FHUUxEKMIlq34B75ND5bTt%2FVgTSBHTFQo2%2FC2L9JwU%2BnOaLkSk0JW%2F5iQK4KVg8NPZzjGPeok6vwWfxiz54X6L6Vv1USvIKZqqL55LKhGlMVZrYK8SEmqQzZTOAgXpJEpfrfRV9DPPmx%2B8fRYTOb4eVcEthv%2BqaU3n7MmRFkguQqxgGWD9BA%2BZN%2FtNG%2F9mBgqsPnOqlGOPfy1qt0PNX%2FK3b9g8vgxZvkU%2BkDhvDsj068j31Hs0W2Xp6RD9McNZM56UFLT%2FZ7re1X3gzBrZnCddS9jObC6kEtFUn5GJxlp7PqXTnrzUmmeR8ndSucV0i0wtZqbxQpLHhzaXmJJtVcfZ0VOckVAfgU%2F1Yyjcf9O5W0wv%2Feg3nBey1PHZsZ3t%2F7YOmr1nrt%2F9%2FVBpeHULgZLyuLLso%2B4FjbMB%2FK9W3KMUX4seizDRMWhtfuWgMSv%2BhE9HxjMNz90skGOqUBEv6zEbec08fUVPNn8gFo8Pe8Qx6g54KvxrWcMl6uGbEhP84jf%2FvhVHznpww7%2FoIV79aHU0991ejzO7EDjFV3UwNtmxX%2FCwcWP%2F349Rr2wbgnaaUDR9prNoRFy3VuAsvgDg4nq6me7%2Bbywdoq7XAQdsqzE4w965OlNGFw25EFWJi2QI9YxZbdZZhX%2FgLYTBKWSsH%2Bh74bmux5eb3qGukJ1ovGslly&X-Amz-Signature=dfafaab9480addc004133186bd8602b5e96dd11e3caf23a165b18add04f2e6fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

