---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLBL7XQV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDFbxPyje8Czgn%2F3Hps0i9V0HX1CUAVZYdtaMEncbkQdgIgS6P5u2ulu5rX5nKktjUEJXe4iPW4LnUYUAVADpeL9nEq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDH4rbYBYgIXO7ZhpOSrcA3ZbVblprYBefkyb5Nc%2Bh8MrTcsvuiMesfwPGP2oD1AbpdpGinqAjt5jAW6YxSdSecSUw3SutjKfc6PaDFnnUfOXsBTbE6OnPF5eFGjcKnHPviQWogr80A83xRB7wdYkKdR72UkkUNaW23L1WWsID7yp3fXuHD4mhocFwlrwBU4AfRsHrlK7DAcjBvm5g4Km6%2ByYR6Dpb6Cyzq7CWFQtrwkNfA%2Bci8tWMrnbVHuEckjsUUqMohyoIlJ6dxeR3OrzzOjJKnQnzDHxaq3ebY6qOshwduE0HB2AgaSLWfwgWBCrzZjJQzhS0tOWq4MBeA5Roo7kUQrMAq5k2%2FPsRGoxGFqeryBt2OTRBs2qlEKUvk1vt%2Bk7fidtULF%2FVdeBjKGvc%2Fqhg8jWjNIB8GdDNUzRMTPbFpfb59e8edcIULhKpIt3Pzgv6b6eIGwkuliYAw6bBhMFiLq%2BOhvoAQ14bkCIC%2FzBg3Nmepm3pkbEQri%2ByEh%2BAz2WEvZPuBhzouzIfTQ6lM9H3Aenen05slXCtepO6bVPLpG%2FwfInwR9mDImQz1zDcbpxuqwGDgQZiv8CHRevgI2Faf0xzkNvibbWA5x9e0UJwgqTZbbEgvZPpOPo41lOkI3QEsf5GQkbrXMHMJr4wskGOqUBM4FkClh2ejF5drWnh4wLKhJTOQfk6iid8Em73zceAVk34NTln9Ku%2BYwDNDv2%2F%2BO3RQUT%2BLIWn5TAr71sIMvT4xv3YHuO3Wb8phLZ1bRm%2FgOGe7hrcCMGw8H%2FnKhWqiH7lDZVzAsgHk6CQA%2B5lhNWXyiYXYVQ95KpwWrtj%2BYiqMwKAwz0DRgdGRYrHJvn%2FUJ15%2BfZKhBfGmgZ0%2BX1bhde3vlZHJOt&X-Amz-Signature=9ec1d64bc2b436c624b4071ec31b5631c926875e4b43fa6913051259e9ce560f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLBL7XQV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDFbxPyje8Czgn%2F3Hps0i9V0HX1CUAVZYdtaMEncbkQdgIgS6P5u2ulu5rX5nKktjUEJXe4iPW4LnUYUAVADpeL9nEq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDH4rbYBYgIXO7ZhpOSrcA3ZbVblprYBefkyb5Nc%2Bh8MrTcsvuiMesfwPGP2oD1AbpdpGinqAjt5jAW6YxSdSecSUw3SutjKfc6PaDFnnUfOXsBTbE6OnPF5eFGjcKnHPviQWogr80A83xRB7wdYkKdR72UkkUNaW23L1WWsID7yp3fXuHD4mhocFwlrwBU4AfRsHrlK7DAcjBvm5g4Km6%2ByYR6Dpb6Cyzq7CWFQtrwkNfA%2Bci8tWMrnbVHuEckjsUUqMohyoIlJ6dxeR3OrzzOjJKnQnzDHxaq3ebY6qOshwduE0HB2AgaSLWfwgWBCrzZjJQzhS0tOWq4MBeA5Roo7kUQrMAq5k2%2FPsRGoxGFqeryBt2OTRBs2qlEKUvk1vt%2Bk7fidtULF%2FVdeBjKGvc%2Fqhg8jWjNIB8GdDNUzRMTPbFpfb59e8edcIULhKpIt3Pzgv6b6eIGwkuliYAw6bBhMFiLq%2BOhvoAQ14bkCIC%2FzBg3Nmepm3pkbEQri%2ByEh%2BAz2WEvZPuBhzouzIfTQ6lM9H3Aenen05slXCtepO6bVPLpG%2FwfInwR9mDImQz1zDcbpxuqwGDgQZiv8CHRevgI2Faf0xzkNvibbWA5x9e0UJwgqTZbbEgvZPpOPo41lOkI3QEsf5GQkbrXMHMJr4wskGOqUBM4FkClh2ejF5drWnh4wLKhJTOQfk6iid8Em73zceAVk34NTln9Ku%2BYwDNDv2%2F%2BO3RQUT%2BLIWn5TAr71sIMvT4xv3YHuO3Wb8phLZ1bRm%2FgOGe7hrcCMGw8H%2FnKhWqiH7lDZVzAsgHk6CQA%2B5lhNWXyiYXYVQ95KpwWrtj%2BYiqMwKAwz0DRgdGRYrHJvn%2FUJ15%2BfZKhBfGmgZ0%2BX1bhde3vlZHJOt&X-Amz-Signature=a5338fbcf89be31d4ccec2a8f850cf9f209c8da110062b05a95073da9f2bb572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

