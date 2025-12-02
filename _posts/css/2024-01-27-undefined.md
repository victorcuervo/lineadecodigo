---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L65BVEL%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T235750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIBQnNdeBpCMl7niYWldxRotJ0OAaOr0JYGHkIt9fYptrAiEA%2B2sNllpXnhMxl5HnL4IElKsorFpaw80qF7OK%2BTlOAkcq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFxy5vEbfvw3%2F%2BSKkSrcAybtzsK7NrCtgHnctmzC%2BSbhT4XqZIY6aHcLcurBBw78NtxlObtfIKzmCHs8KrRbBLzaj%2F0f3bFRQMoUFkkTUqbpTtenOjI7iS9IdyLMweB5MTwPQqeXIaVUm1UD%2Bstk23h4x556kfZ1HNNPW7WXE2jFH5%2B%2BVw7oLD4mXI5SNbtr1aNclYmzQDIzY54JriSrPUB6U31cSErbfPbcO97Ys18Sgs6EBxlrluLv8aN6Kt7OpRTYLP%2FUV1dGZbUL3KPQzgGwMXcR5i9tO3le5BZsC4oZ3W%2FTTOSnTRsqIgW1O4uDYYgM7AtjO4qxEZ7y754NPMvUmHs9mdo4QwdsQjhGam3fdrn32ziODT%2Bj1ajw%2FuaR35lcZUhHBwY0jX2j38rgsHyFOJyAjAfiHrtKFbCQczXiw%2B5yZZS0lShlt9kPOYdMgdD%2BGrp3qvEMuNzDfxTM7Z6JjtzkOtEXPD2WoFdmu4fwv9d0xtG6L4Jpsd26ONcdXq%2Ftp3oJbcgwSg7O%2FVJqLx%2FE%2FxHYuhIxmo%2F1A0JYIf3T6c%2BrZx9TD8pUPyeqN7N56OA5GTmrxfH4wxfTOK2cgjQm84V1rPpDF7cbGKBft4tmcGxg%2BpjoOGByDzlO%2Bw78fsQJAPhfYtsbJbeGMOvkvckGOqUBrzDTDm82HndorN3tyhZgFN%2FHeXxM4XM0h5eMCgqanpOerDu7ZoQl%2Fo5onc0E5GNvFxqCSV%2BajMef7VG79VleFETYJ%2ByREIQj7UW%2Fz1uQU7bGiAAxmfUSdktx1%2F7hZD8g0X0h%2FZYw%2BpQahl4BsbBnR8p7gCzvEamXbjv6N8qrQazbZ5ouE9qrBk13IiTwku4tnpqb18jBBln4Tw4UJGnLeKjBaA6C&X-Amz-Signature=4c0fa61770ed15d8fdb92d2976e65dbe9fe2f2d8ef2b5ad6b7fbc3a0f19a8575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L65BVEL%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T235750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIBQnNdeBpCMl7niYWldxRotJ0OAaOr0JYGHkIt9fYptrAiEA%2B2sNllpXnhMxl5HnL4IElKsorFpaw80qF7OK%2BTlOAkcq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFxy5vEbfvw3%2F%2BSKkSrcAybtzsK7NrCtgHnctmzC%2BSbhT4XqZIY6aHcLcurBBw78NtxlObtfIKzmCHs8KrRbBLzaj%2F0f3bFRQMoUFkkTUqbpTtenOjI7iS9IdyLMweB5MTwPQqeXIaVUm1UD%2Bstk23h4x556kfZ1HNNPW7WXE2jFH5%2B%2BVw7oLD4mXI5SNbtr1aNclYmzQDIzY54JriSrPUB6U31cSErbfPbcO97Ys18Sgs6EBxlrluLv8aN6Kt7OpRTYLP%2FUV1dGZbUL3KPQzgGwMXcR5i9tO3le5BZsC4oZ3W%2FTTOSnTRsqIgW1O4uDYYgM7AtjO4qxEZ7y754NPMvUmHs9mdo4QwdsQjhGam3fdrn32ziODT%2Bj1ajw%2FuaR35lcZUhHBwY0jX2j38rgsHyFOJyAjAfiHrtKFbCQczXiw%2B5yZZS0lShlt9kPOYdMgdD%2BGrp3qvEMuNzDfxTM7Z6JjtzkOtEXPD2WoFdmu4fwv9d0xtG6L4Jpsd26ONcdXq%2Ftp3oJbcgwSg7O%2FVJqLx%2FE%2FxHYuhIxmo%2F1A0JYIf3T6c%2BrZx9TD8pUPyeqN7N56OA5GTmrxfH4wxfTOK2cgjQm84V1rPpDF7cbGKBft4tmcGxg%2BpjoOGByDzlO%2Bw78fsQJAPhfYtsbJbeGMOvkvckGOqUBrzDTDm82HndorN3tyhZgFN%2FHeXxM4XM0h5eMCgqanpOerDu7ZoQl%2Fo5onc0E5GNvFxqCSV%2BajMef7VG79VleFETYJ%2ByREIQj7UW%2Fz1uQU7bGiAAxmfUSdktx1%2F7hZD8g0X0h%2FZYw%2BpQahl4BsbBnR8p7gCzvEamXbjv6N8qrQazbZ5ouE9qrBk13IiTwku4tnpqb18jBBln4Tw4UJGnLeKjBaA6C&X-Amz-Signature=75e2791658709a54dfd90da5e013c30183e83c6c6c49e88b897dff4f64c3a572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

