---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS2V4FTD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T115307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEvX2J5sITTXYY%2F0q8XQ3GGG6C0zthkMBoX55QnPfpWAiA8NAHBgreFiAkjivjVbNJqe%2FrQZlsmm2IWHIIt47XbByr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMVMw%2Faed878EPS6eRKtwDF7G78OmYJ%2BofmTG23fl1NlXquip2uuGxF2xebLk6YEhPOkN0KTPmwFkOaAF0tQtmeN7e2N%2Bp9me7E1BhcgMfLwCc4HwP0DUNW7YkWXKBzgplYVh17y5kSXOQXflU%2BM5912jaIwnCfltoyJ3mqhLWVi%2BMpziiFcmUA6LaVcJ2IUnS%2Fo6ywlrl8U2UIcxOzrVkUyc9EUPWJozdxoHE%2BuRno8LDQ0XKsNUB9%2Fuo2eV2cttozMHl9734M21J43zkfTC7BQm30HOTWI3yUW3fsMSOG%2BPYKSJViwSZFM5JPCMekIG8rsb0p9XVFV8eB4lqUHeZIJV7LZRmudyuClQxpYHVz12rkgsRjInjnVJFuNNSlAAZFG5rRylJeFYxhGzjRgS%2FQ0t%2FCsmreW3gHNiWBJwVtaPQUhMv%2FJFCZri7MVHPysb9aF65WQmVXIsS6Vljs4hF33rVCwuMD2CgpMKZZ%2FDB7GFDmP9lEfX%2FIXINc42jwjYbIrBMUbfm8EiJSUR3sCisl1voIFrGB3iVrIreJkKjAYTZaF3VODxSiNI8vlwQsVrJ5Uasl1ZoCagR10V0NIXPo9dbdCt1Pevv%2BTLb%2B2jKhPojFb2xMOau7CoFKz2NYSB%2BXoNgIZx2qmqaG7ow6tLKyQY6pgF%2BfFV9fLwuE7zcw0FYsFIRmsYHpIogFTuHlovvEGgs0IGqRM3OhFA48as0%2FDlalD5XIk8d5RasXsngdv%2FtOOtj1%2BArI%2B4E2H1fstfAm66fKHEk8xbJ%2BbY2ZjO%2FGw9VXFUi6nJMk1Ngaq0QI0mTkGKkXHDEo2%2FWQi0Zv%2FE2gssKxU%2FePtZk%2FwO8NbwqmQqzR2eEP6ttbQkEeQrbCN0zMl1Teey%2F%2BlT8&X-Amz-Signature=e81d3961592b0393f135a6845f7994eb78a6376ebc1208307117a09783797e35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS2V4FTD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T115307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEvX2J5sITTXYY%2F0q8XQ3GGG6C0zthkMBoX55QnPfpWAiA8NAHBgreFiAkjivjVbNJqe%2FrQZlsmm2IWHIIt47XbByr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMVMw%2Faed878EPS6eRKtwDF7G78OmYJ%2BofmTG23fl1NlXquip2uuGxF2xebLk6YEhPOkN0KTPmwFkOaAF0tQtmeN7e2N%2Bp9me7E1BhcgMfLwCc4HwP0DUNW7YkWXKBzgplYVh17y5kSXOQXflU%2BM5912jaIwnCfltoyJ3mqhLWVi%2BMpziiFcmUA6LaVcJ2IUnS%2Fo6ywlrl8U2UIcxOzrVkUyc9EUPWJozdxoHE%2BuRno8LDQ0XKsNUB9%2Fuo2eV2cttozMHl9734M21J43zkfTC7BQm30HOTWI3yUW3fsMSOG%2BPYKSJViwSZFM5JPCMekIG8rsb0p9XVFV8eB4lqUHeZIJV7LZRmudyuClQxpYHVz12rkgsRjInjnVJFuNNSlAAZFG5rRylJeFYxhGzjRgS%2FQ0t%2FCsmreW3gHNiWBJwVtaPQUhMv%2FJFCZri7MVHPysb9aF65WQmVXIsS6Vljs4hF33rVCwuMD2CgpMKZZ%2FDB7GFDmP9lEfX%2FIXINc42jwjYbIrBMUbfm8EiJSUR3sCisl1voIFrGB3iVrIreJkKjAYTZaF3VODxSiNI8vlwQsVrJ5Uasl1ZoCagR10V0NIXPo9dbdCt1Pevv%2BTLb%2B2jKhPojFb2xMOau7CoFKz2NYSB%2BXoNgIZx2qmqaG7ow6tLKyQY6pgF%2BfFV9fLwuE7zcw0FYsFIRmsYHpIogFTuHlovvEGgs0IGqRM3OhFA48as0%2FDlalD5XIk8d5RasXsngdv%2FtOOtj1%2BArI%2B4E2H1fstfAm66fKHEk8xbJ%2BbY2ZjO%2FGw9VXFUi6nJMk1Ngaq0QI0mTkGKkXHDEo2%2FWQi0Zv%2FE2gssKxU%2FePtZk%2FwO8NbwqmQqzR2eEP6ttbQkEeQrbCN0zMl1Teey%2F%2BlT8&X-Amz-Signature=e6f1b3cd5e68d1fc2bf5793f794c681f9544b458bd7b6bbf340263c173f752c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

