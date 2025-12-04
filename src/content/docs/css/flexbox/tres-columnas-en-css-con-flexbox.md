---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPQ2RYVM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD7Aqit22TmmLGSYqKB5VZXhIP1zt0cSl4pvq0lNaVEywIgdAPc%2FdAm8Dmnz4nUEm1QPlS5KEmMLWoGZ80Zb2AHgWUq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDIH3knn38MqFAxkBcCrcA3i5SK%2BDOwTDok5TDtGamGvKvDOYqLIu%2Fg5701FcUvh4H9ioZ%2FDgSl5bOoa%2Bs4sSIPfqdztrb0ZA%2B16sbypkl%2BFAQXuyNHXHOOvI0j0pbA%2BDFha3uhNpLCCg0UyNGqncTAJUJWj%2Bie9jOMb0VHi5sXEXuHZWMImArMHPF71yZ%2FABnA8BlrofUNRzQeHo2%2FG974LWxZy1%2FuBvPQE6pa9jZX8RZQvKydjkSU5W%2BBedFnp7br1RgZ8rc2ziGZGWRlnOLNxKFln0dExcI6GLZShp9LCK1oY1w1vH62opfhlrrtPbMz2dD3ZnQ%2Fupj5jPz4HdJUaQzeKKUYBCgFuddjXgZ8Ag9BDUQ46h8KJpb5xkMzN6PsiJ0dcGP502xbsll1DhVuzNIOz696Q%2FFSZK5kczbw0FuJ7zfsqjYG40l0CxV8UcKTbh96XydedD0dYwjJsKgysH22Nu27JEG5bMSs%2FoXsHzD3%2BFISqMccNItW%2F3Ye1JrbPQh86aVamnrMpIjV%2FkGmRPT51nkoXnkTbJprZZ3ZFwZOgj7k1%2Bopz6H5fzgUNZ41ccu%2FQsfT08KNTiJXEJsD9%2FQh5YNVdR6GC%2BohrL6MMp42%2BDuNQYJdjfYAlbLHpwGcgGQxz%2BQ%2BfLiXUBMI2RxMkGOqUBl09XbVGuip3Mf8ZAepFtRuzB%2F8lcpZwZ%2BYlI2%2FVjdYVDgXJEcrk5lM7ArIWarbNIb7TcrLo1OgBrDwjvh8UV9zqiEjprBxyT8o4Nlab8tMoKdtkdlT%2FVw%2FPR1fe16u4r5m%2BTUqzJz9zj5ri2cdf5sqgJ9yVa1LBaywD2vpN64nz9H1jvm71ADaWcfpNiFb6rrU77EgB1NBL%2FRis9TAtb5W9NqNxs&X-Amz-Signature=acd061ed18c9b382847d220fc9cbe13a8c5cd968ebe63c07aeadc0dedf1b3e12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPQ2RYVM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD7Aqit22TmmLGSYqKB5VZXhIP1zt0cSl4pvq0lNaVEywIgdAPc%2FdAm8Dmnz4nUEm1QPlS5KEmMLWoGZ80Zb2AHgWUq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDIH3knn38MqFAxkBcCrcA3i5SK%2BDOwTDok5TDtGamGvKvDOYqLIu%2Fg5701FcUvh4H9ioZ%2FDgSl5bOoa%2Bs4sSIPfqdztrb0ZA%2B16sbypkl%2BFAQXuyNHXHOOvI0j0pbA%2BDFha3uhNpLCCg0UyNGqncTAJUJWj%2Bie9jOMb0VHi5sXEXuHZWMImArMHPF71yZ%2FABnA8BlrofUNRzQeHo2%2FG974LWxZy1%2FuBvPQE6pa9jZX8RZQvKydjkSU5W%2BBedFnp7br1RgZ8rc2ziGZGWRlnOLNxKFln0dExcI6GLZShp9LCK1oY1w1vH62opfhlrrtPbMz2dD3ZnQ%2Fupj5jPz4HdJUaQzeKKUYBCgFuddjXgZ8Ag9BDUQ46h8KJpb5xkMzN6PsiJ0dcGP502xbsll1DhVuzNIOz696Q%2FFSZK5kczbw0FuJ7zfsqjYG40l0CxV8UcKTbh96XydedD0dYwjJsKgysH22Nu27JEG5bMSs%2FoXsHzD3%2BFISqMccNItW%2F3Ye1JrbPQh86aVamnrMpIjV%2FkGmRPT51nkoXnkTbJprZZ3ZFwZOgj7k1%2Bopz6H5fzgUNZ41ccu%2FQsfT08KNTiJXEJsD9%2FQh5YNVdR6GC%2BohrL6MMp42%2BDuNQYJdjfYAlbLHpwGcgGQxz%2BQ%2BfLiXUBMI2RxMkGOqUBl09XbVGuip3Mf8ZAepFtRuzB%2F8lcpZwZ%2BYlI2%2FVjdYVDgXJEcrk5lM7ArIWarbNIb7TcrLo1OgBrDwjvh8UV9zqiEjprBxyT8o4Nlab8tMoKdtkdlT%2FVw%2FPR1fe16u4r5m%2BTUqzJz9zj5ri2cdf5sqgJ9yVa1LBaywD2vpN64nz9H1jvm71ADaWcfpNiFb6rrU77EgB1NBL%2FRis9TAtb5W9NqNxs&X-Amz-Signature=e124e075b99a7deec7709aa702c6a10e4916a1f80d92a9dd4f6616bedb63c635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

