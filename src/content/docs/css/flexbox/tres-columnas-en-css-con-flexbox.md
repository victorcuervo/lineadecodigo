---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AAMRLJ5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T183634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV612sM8dGDCtCPknT6HrpvzvLJqcOuDHbhD07RhD05QIhANCocuiw0%2BtkUG8gyU5mJBRb%2BIadSh8GU%2B9yiy%2BSqlY8KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCgSiTEi7xKjyjnX0q3AOU4MFCdW5KE5VnMebdSJSTEn67cpWfvuklyjrykIlLPD6%2FbJT%2BTl8OUNBwiE2qnyf%2Bab9tc%2BSQ6z%2BqbZvI6Xfut0UYexz5n7fGENfIiwAMy2AJjW%2BJtMVg5hTY81CdMh%2BvjVssJ0AWfmFEvukc9ymIoRlzrfWNqr7HLkVVzhei4RRyGBCwDa9vx%2FI%2BxNQtLrUxes0jeU%2Fo9DwgWp3pGTnFbbKFdhnjqpzmrKUAIb%2FDu%2Bd51XQ7iYLcE%2FFv2h%2B4BHQYhP9mlVEJ%2B07QGfKaQDtgS2%2FUQJtd3YLDb4NpxCZi7Ot8%2FfQiIYrDRHoo7PWkyifKWCP3miDgVKbmMOUW9fZg4QP6xX%2FgvSyQtsy3ziWb6gWGxm0e7fzXqsj92h63amEVYZ2TzYKtNfYVQZfx9Un07rpKG5mewEX4%2FYyrDZPbBjyKvznevzEt8KABlx0eWkV1aMKw2OC%2FAzu8OzC9yZp7fArn%2FRIJJYbnLIL7O6ilaIf47AYGw8RhrkpH8gjl%2BgfNSVuNynlv9G6YrxWD2ZHCXg7Ht0FhGABAGk1eayMskOut2g%2BL%2FSan6hwe3pGez6VYBwjhgxANJB5FVg%2B24L04RxtN9D9OxXzyOgOrhn8gx%2BBCkWlvgenixCIzFDCHh9zJBjqkAcX9szRsYatDcYgnnHlP0pHVHGquhRWJPqqS3FbMPZM0ZAPm%2FTrg%2Fsem2tREZ%2FtUz7pV7WPkXOvIMcFSEEZGK2T6eUVds1FyLKgFGPezmbkO0lzenAUZdmDRMMMEGPiX6wbt3biFjSCGLwBNyYzA5RDsCHGPNyHuhgz2EPrj1czSz0ycEFO9F9h6C1cKFN6X26sAd3VkVfpjkj4d484Q028Axb%2Bn&X-Amz-Signature=8ab214a862ccdcc207781253cec89510823e47da7790b99d2d6e031251c84345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AAMRLJ5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T183634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV612sM8dGDCtCPknT6HrpvzvLJqcOuDHbhD07RhD05QIhANCocuiw0%2BtkUG8gyU5mJBRb%2BIadSh8GU%2B9yiy%2BSqlY8KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCgSiTEi7xKjyjnX0q3AOU4MFCdW5KE5VnMebdSJSTEn67cpWfvuklyjrykIlLPD6%2FbJT%2BTl8OUNBwiE2qnyf%2Bab9tc%2BSQ6z%2BqbZvI6Xfut0UYexz5n7fGENfIiwAMy2AJjW%2BJtMVg5hTY81CdMh%2BvjVssJ0AWfmFEvukc9ymIoRlzrfWNqr7HLkVVzhei4RRyGBCwDa9vx%2FI%2BxNQtLrUxes0jeU%2Fo9DwgWp3pGTnFbbKFdhnjqpzmrKUAIb%2FDu%2Bd51XQ7iYLcE%2FFv2h%2B4BHQYhP9mlVEJ%2B07QGfKaQDtgS2%2FUQJtd3YLDb4NpxCZi7Ot8%2FfQiIYrDRHoo7PWkyifKWCP3miDgVKbmMOUW9fZg4QP6xX%2FgvSyQtsy3ziWb6gWGxm0e7fzXqsj92h63amEVYZ2TzYKtNfYVQZfx9Un07rpKG5mewEX4%2FYyrDZPbBjyKvznevzEt8KABlx0eWkV1aMKw2OC%2FAzu8OzC9yZp7fArn%2FRIJJYbnLIL7O6ilaIf47AYGw8RhrkpH8gjl%2BgfNSVuNynlv9G6YrxWD2ZHCXg7Ht0FhGABAGk1eayMskOut2g%2BL%2FSan6hwe3pGez6VYBwjhgxANJB5FVg%2B24L04RxtN9D9OxXzyOgOrhn8gx%2BBCkWlvgenixCIzFDCHh9zJBjqkAcX9szRsYatDcYgnnHlP0pHVHGquhRWJPqqS3FbMPZM0ZAPm%2FTrg%2Fsem2tREZ%2FtUz7pV7WPkXOvIMcFSEEZGK2T6eUVds1FyLKgFGPezmbkO0lzenAUZdmDRMMMEGPiX6wbt3biFjSCGLwBNyYzA5RDsCHGPNyHuhgz2EPrj1czSz0ycEFO9F9h6C1cKFN6X26sAd3VkVfpjkj4d484Q028Axb%2Bn&X-Amz-Signature=c2f09231d3578610ae0a366fc77d6b30acc3e418bae5691fc5dbb5145e7b1251&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

