---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642EJID5N%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIqAHJMJwo20WWXFoIDw8Yj76VzJGkl0VA3uT4ludRcQIhAKN4LhRoIUJTMdTRVk7BVHA4wvxKiu8zVYRV4vBoDR2cKv8DCHQQABoMNjM3NDIzMTgzODA1IgyNyHmM9GNX6aUfb54q3AO%2FZHVp%2BD5b6X2Tji8%2FpjoOLp3PDWtEEfS2ebvINQwIXjYqqVdalPKC8zBcUmOOCjDFVi8FEfvwrEHIqKAfGkfNnCRDlYjUduFpG7xYtkOTBBbzAjg8LH2zRWJdM2ZEVGvuJ9urCvL4OHImjRKwIfz84bQehXHeUi8xU11cjMD3l9wKV5F63n2fVTQ67uQs9bFvBOfcxRoT1R7i%2Bh8oEs2gwfyqLoyhChGyohEVsesAl3BhrN8N8WUfh9ZAqGU8Mqop8RGIHRqX3AAzk5x0UOnu8qezp0igkwhtiq%2FKjbovT0W%2FnrxQ9%2FDUP68BwPZlxka%2Fl0dHy43jgtq3EGpZJdLX2GT4F6qAYEFYLyVukCb3nanFraIzoiu7sltrwM9s9sr%2B1EPZoVe4%2FA8jccj%2BkNyCv9z2%2FQtt5z9ESeimrxB8oM4kSHmMDkaae6O02YbqYbbd8a8YhUj%2Fid3bWnPb02f6OLHn95TcbJBRHiuvOiDdOHKwUc%2Btu6Pyurvk60hqRKb8HiZx1FrP0jQt2y8S9rRT%2BWDUoSkv8qaaPCojf%2Bz2EscpEt76fzefEWk2fpd4hVSecKLlCFTDoCc0z%2BxSfC55opZA0kjF3QwyCekRU16JlFlYbiDZ8ujOKGfU7zDOitDJBjqkAel1SJCTjUYdEclubsRUy55xvh1ORBVrjkOyPnO0YNSirMSwA6UHXUxUUteP0AMrzUZkZXO74fmyj4lIX8mNxv4pTPDe4i75AjzaKlR3cMxsaoKqM7zTs0wyCSpOdIWSPbtb6RDfzuJ0iv%2FdT36AVVNv4V9bB29dp%2FZOx2e6NOj%2Bj3mUxGZYltAKF9EbYGO2XAfUkrGTzAV228HPde8UxAfUg24c&X-Amz-Signature=14b9504122753ad588b89c2dab7d1d8a3eb0cf0a0e73886faffbac39288badb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642EJID5N%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIqAHJMJwo20WWXFoIDw8Yj76VzJGkl0VA3uT4ludRcQIhAKN4LhRoIUJTMdTRVk7BVHA4wvxKiu8zVYRV4vBoDR2cKv8DCHQQABoMNjM3NDIzMTgzODA1IgyNyHmM9GNX6aUfb54q3AO%2FZHVp%2BD5b6X2Tji8%2FpjoOLp3PDWtEEfS2ebvINQwIXjYqqVdalPKC8zBcUmOOCjDFVi8FEfvwrEHIqKAfGkfNnCRDlYjUduFpG7xYtkOTBBbzAjg8LH2zRWJdM2ZEVGvuJ9urCvL4OHImjRKwIfz84bQehXHeUi8xU11cjMD3l9wKV5F63n2fVTQ67uQs9bFvBOfcxRoT1R7i%2Bh8oEs2gwfyqLoyhChGyohEVsesAl3BhrN8N8WUfh9ZAqGU8Mqop8RGIHRqX3AAzk5x0UOnu8qezp0igkwhtiq%2FKjbovT0W%2FnrxQ9%2FDUP68BwPZlxka%2Fl0dHy43jgtq3EGpZJdLX2GT4F6qAYEFYLyVukCb3nanFraIzoiu7sltrwM9s9sr%2B1EPZoVe4%2FA8jccj%2BkNyCv9z2%2FQtt5z9ESeimrxB8oM4kSHmMDkaae6O02YbqYbbd8a8YhUj%2Fid3bWnPb02f6OLHn95TcbJBRHiuvOiDdOHKwUc%2Btu6Pyurvk60hqRKb8HiZx1FrP0jQt2y8S9rRT%2BWDUoSkv8qaaPCojf%2Bz2EscpEt76fzefEWk2fpd4hVSecKLlCFTDoCc0z%2BxSfC55opZA0kjF3QwyCekRU16JlFlYbiDZ8ujOKGfU7zDOitDJBjqkAel1SJCTjUYdEclubsRUy55xvh1ORBVrjkOyPnO0YNSirMSwA6UHXUxUUteP0AMrzUZkZXO74fmyj4lIX8mNxv4pTPDe4i75AjzaKlR3cMxsaoKqM7zTs0wyCSpOdIWSPbtb6RDfzuJ0iv%2FdT36AVVNv4V9bB29dp%2FZOx2e6NOj%2Bj3mUxGZYltAKF9EbYGO2XAfUkrGTzAV228HPde8UxAfUg24c&X-Amz-Signature=d4db9f15f8bf3be69cb33d3f5ade13cbb5a55b8905d430a36ed04e117ab17995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

