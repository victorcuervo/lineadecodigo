---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQXE2HRX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T103250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXFK16h8uv8XN%2F%2FHS0HgFuqQCAoO1Z3EKQCX5KruWHcgIhAM79I4aVaUfwDNg9l8XXp6lFYtI103My4sTbmm0ZEu3QKv8DCFsQABoMNjM3NDIzMTgzODA1IgzzFIeLYfANx4qzcasq3APmQfI14u7n2yw2ueEpnaVjqTWfD5K5bGBQ0fZaoTXCx3osG%2BQJI2yb251Hntzw7EFlkTwzgXM%2B1J2g%2F7wYVNHwTTS4Li8EdvKF9rj9RK%2BgoiCBxvY93W63%2FKY3PZuz8CmH2SeO%2F5acWVBUd9UQo0XhM79cPixfjS%2F7MB2pUb2NnuO1Vb9tYLy2xGcPiVK8Ez3EZtfDSXAFu6aAnXM0jMFwWgC3l6gKA8KZmwB8txlzTmQMfNCMVpRnKy5nwSPDoOo%2BJ3upcV%2FTUx0VvdcGFWx319AkVIadwcCygO0vFIeDyYBOjN9gZwY2xha%2BdsDztcm6GipMpX%2BdsGLFTgUOPlx2amtBWQjgn5jyc2rAqLMvclXXs%2BUtckC0WLpwKSmPVQmrJC99STzT6igDRJe0vex8Lek5BCzswXffepC8hDXRh9kMmkwdj0WADYOGpON1%2FBDhJwfAV8n5qhBY9vEPp3ySaelWVOp0JFIvGlGpiwShcwE4hduo7IKDNFUIB04nNvLxCdW8%2B8G8rHYZJEdksAUUHuSqs1gk44iWixPBfUnS5x5Sg9Q66bloOj1Nh2yAaHxCMZTvzvywy%2FkizvnTl3YqdZFtedd7w24w01IUdA3RUY5dJxZRvOPrvoCskTD118rJBjqkAQWq2kxobAh87UxJXPHxH3imPckbHJNZWXyp4%2B8BGXqmrFf%2FhqWsOdPp%2Bpa8bUu0c%2FgnBRTRJBvY7HURQacjUaShfTA3T2ELdosfUMo8yHLezqbXL9T6AzeXzG48Zd2CDiBIlUpwWZcY4V2tJK16a0v0w4FwcAZ9qGCHENr0eGB26t96%2B55RyuEV0uxPZhPSmj1zx3CjNhGYVM9l4SOzo4Evwv%2B3&X-Amz-Signature=a76df90910287ec043e11f34d7dd420c3127c7503473108eaba54283d32e40a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQXE2HRX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T103250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXFK16h8uv8XN%2F%2FHS0HgFuqQCAoO1Z3EKQCX5KruWHcgIhAM79I4aVaUfwDNg9l8XXp6lFYtI103My4sTbmm0ZEu3QKv8DCFsQABoMNjM3NDIzMTgzODA1IgzzFIeLYfANx4qzcasq3APmQfI14u7n2yw2ueEpnaVjqTWfD5K5bGBQ0fZaoTXCx3osG%2BQJI2yb251Hntzw7EFlkTwzgXM%2B1J2g%2F7wYVNHwTTS4Li8EdvKF9rj9RK%2BgoiCBxvY93W63%2FKY3PZuz8CmH2SeO%2F5acWVBUd9UQo0XhM79cPixfjS%2F7MB2pUb2NnuO1Vb9tYLy2xGcPiVK8Ez3EZtfDSXAFu6aAnXM0jMFwWgC3l6gKA8KZmwB8txlzTmQMfNCMVpRnKy5nwSPDoOo%2BJ3upcV%2FTUx0VvdcGFWx319AkVIadwcCygO0vFIeDyYBOjN9gZwY2xha%2BdsDztcm6GipMpX%2BdsGLFTgUOPlx2amtBWQjgn5jyc2rAqLMvclXXs%2BUtckC0WLpwKSmPVQmrJC99STzT6igDRJe0vex8Lek5BCzswXffepC8hDXRh9kMmkwdj0WADYOGpON1%2FBDhJwfAV8n5qhBY9vEPp3ySaelWVOp0JFIvGlGpiwShcwE4hduo7IKDNFUIB04nNvLxCdW8%2B8G8rHYZJEdksAUUHuSqs1gk44iWixPBfUnS5x5Sg9Q66bloOj1Nh2yAaHxCMZTvzvywy%2FkizvnTl3YqdZFtedd7w24w01IUdA3RUY5dJxZRvOPrvoCskTD118rJBjqkAQWq2kxobAh87UxJXPHxH3imPckbHJNZWXyp4%2B8BGXqmrFf%2FhqWsOdPp%2Bpa8bUu0c%2FgnBRTRJBvY7HURQacjUaShfTA3T2ELdosfUMo8yHLezqbXL9T6AzeXzG48Zd2CDiBIlUpwWZcY4V2tJK16a0v0w4FwcAZ9qGCHENr0eGB26t96%2B55RyuEV0uxPZhPSmj1zx3CjNhGYVM9l4SOzo4Evwv%2B3&X-Amz-Signature=42566170514ba9d66aa33fb360529e2d7372c60d7044e1e93194860850a2e481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

