---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXZU5X2Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDrZPowRUV%2BQl9PdCl6FmLvuXCzzbkHqbXJ66J5cooFtwIhAKX3FzvSjUYBhGsJZff98A%2BSZxDcWVc%2FLheoGcxtgas4Kv8DCDoQABoMNjM3NDIzMTgzODA1Igx0t1MLJk%2BJPuVV0Agq3AOqoQHutvwbthJTjOoZfcIqdaVA3HopNaSGMgtvTRqu1hPbQ8BZNG16SraAWhVxRS%2BB%2BhlHOsXme%2FWvG20o4Hw%2BF1WL3rq%2FmisI1fUksRRS%2BrUXb4u3oz%2BTQGzEwki%2FTedHHy5geXFFXmdV9CkrmpiuH73qshfP3o39y3LEAF6NXPSZeIO6z9mrMrhMEs8EmIiAV4OmcLP3MUNp3GZo9lAGcUykqfYghQIS7310mfTK9IWnL5%2BUVnje8UL7iP0HS61BhDaoO0dDbnGYWnZkvWvBwr3KXhVu6OQ2tncZS83JrrCbc%2FYR8b3TZtl1yg5rnzeaNdfLm4ktyroPhS%2FTTjPxnFKWIs9eZLvKD9v8qu2zX9VCn6lXJGdN%2BT4ytnSFi%2FCunefhNy2jK7UamqTT%2BBf2Iqh7bFwpgJIMtFZdeQsZIPisipFbWg9dTEJi3YJRNpvlFNl7R2QkdOBRvF105LVlNViloXhbCiz5OYPItHTvw3O6YWMfBd1OgKhAvgsCX4SFdsRRqAIYo3xES%2BLG3ioR21tkOmrQ9T6PXf47ytovOrIyzMMl4uZAKLdJ9eIS3BiDBQb4rRV4icuvOtfWvzlm2RwYt6StilvuTwTXEy7i%2FLGjb0i49eG3CqV%2BxTCItcPJBjqkAcM3Fesm6vJ1PCFZLf7aNV%2F0LY2rUxHOo%2FHm7A%2F0wa2WwoGy5iBjzsKnj4Pvu%2FE7Jnw%2BDJIgBr0PEEsgx%2FQark86pDlb%2BDAdTOOfIeR6GiEl833Fu9h0dPIbgbHiWWCLEBRhnio5AW4JZKvy%2BBTn%2B7aYVMzh2uPmG01u15YcyIJ2bpePnP3BgZm3U18Nr1g27fPfpUhJbPfT7PCYtMm4QeWWx4uq&X-Amz-Signature=621248a5aeca7cc16291ba3883c00502dd800a20a34ac3e4ded31e33c6baee6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXZU5X2Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDrZPowRUV%2BQl9PdCl6FmLvuXCzzbkHqbXJ66J5cooFtwIhAKX3FzvSjUYBhGsJZff98A%2BSZxDcWVc%2FLheoGcxtgas4Kv8DCDoQABoMNjM3NDIzMTgzODA1Igx0t1MLJk%2BJPuVV0Agq3AOqoQHutvwbthJTjOoZfcIqdaVA3HopNaSGMgtvTRqu1hPbQ8BZNG16SraAWhVxRS%2BB%2BhlHOsXme%2FWvG20o4Hw%2BF1WL3rq%2FmisI1fUksRRS%2BrUXb4u3oz%2BTQGzEwki%2FTedHHy5geXFFXmdV9CkrmpiuH73qshfP3o39y3LEAF6NXPSZeIO6z9mrMrhMEs8EmIiAV4OmcLP3MUNp3GZo9lAGcUykqfYghQIS7310mfTK9IWnL5%2BUVnje8UL7iP0HS61BhDaoO0dDbnGYWnZkvWvBwr3KXhVu6OQ2tncZS83JrrCbc%2FYR8b3TZtl1yg5rnzeaNdfLm4ktyroPhS%2FTTjPxnFKWIs9eZLvKD9v8qu2zX9VCn6lXJGdN%2BT4ytnSFi%2FCunefhNy2jK7UamqTT%2BBf2Iqh7bFwpgJIMtFZdeQsZIPisipFbWg9dTEJi3YJRNpvlFNl7R2QkdOBRvF105LVlNViloXhbCiz5OYPItHTvw3O6YWMfBd1OgKhAvgsCX4SFdsRRqAIYo3xES%2BLG3ioR21tkOmrQ9T6PXf47ytovOrIyzMMl4uZAKLdJ9eIS3BiDBQb4rRV4icuvOtfWvzlm2RwYt6StilvuTwTXEy7i%2FLGjb0i49eG3CqV%2BxTCItcPJBjqkAcM3Fesm6vJ1PCFZLf7aNV%2F0LY2rUxHOo%2FHm7A%2F0wa2WwoGy5iBjzsKnj4Pvu%2FE7Jnw%2BDJIgBr0PEEsgx%2FQark86pDlb%2BDAdTOOfIeR6GiEl833Fu9h0dPIbgbHiWWCLEBRhnio5AW4JZKvy%2BBTn%2B7aYVMzh2uPmG01u15YcyIJ2bpePnP3BgZm3U18Nr1g27fPfpUhJbPfT7PCYtMm4QeWWx4uq&X-Amz-Signature=bde42f0ee85169cac8ec0498b12c63bfa2c6cb604831ce9f0a8f8989533e98d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

