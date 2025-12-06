---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKNC7E47%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOFEq7V2uPZrfjIe8S4wnupDlKJLHft2nJTWAVGYrZNAiEA1W9CCp%2F3ccYi616WNBYIj%2Fsmu%2F%2BEr0nNyi7GeO2w%2Brkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDK5jguOMkFd0qlkQByrcAzQeOhHDUip4CDaivY07XdaCE2LsxmZsGTh97QDxRmbsuvLVb8MtRnao95n6so42EY6t25TspVr8Q5FJbtgnMMtt%2Fr0GwCPQoF9T3yVfX77NXc87B7CPtRK2QELEj6RQ1G%2FBSJH27idE2XaJ%2F5jMSyDP1DnBBpP58CXwWfOhIJfRwJ1hTx%2FoTF%2FHoTiKphiMaB0VP0HbUhYFXjasFbCR3S7sLdcbE%2BALiXOPudOnWp%2BVhe79gLZ0Sjc7LqGt%2BAZ%2BK80PhpOYc3cvRibQ4UBdclLmqyDY%2FhFtxdsdKjElnxcpExYW%2FRivH%2FDj3Or181KySYoll%2FYYch6CCi90G8YtSwb232AGZ%2B%2FSGspjI5adabTdsjz0La%2BR1aJdGh0E11Hd%2Fmv%2FKKfou3PgznHwDQis5OIDREgi9PQpF3GGDGyOADO5sNKXGgDdZuTltYYFiyjPQnQhjan2k08eVMHxwLPRkSzmaJKbrKPeyWmKEXkPUAMgORMGLjypCTK8bAc3VszIN5BOjQYTjgse3HUG8Sub2FNNqH3bc4CtGTcVG4AXmNewtpCS7g7DsZriFPB4pJiGh2HWQGgr7psjOXEtGooZvj5fJIbtiR6jtVTt%2BVqC5y8dvJ7QswKNY5zHSKOeMNbM0ckGOqUBiJEnL6L1r6lIDL4wnhCj2BKrJxRcXeydG5V1VEhp%2FLK3IwIJG5XeVArxfxtFctRwm36gIvbH75BpWR2oCMQ7J1yGqkcZDgVZjOup5bkbYakWOOeFDfd2krHtlqVhGkakYhWabyBiAe5rrM9HItKImK2mXJAMMYDvuq76kgMBHqYC55e5So5DlP75oNrAUI3%2FFT59iaUXWE1zrXlRyXviUFM5yQ1o&X-Amz-Signature=ee937f1cc9ebe54ccbad6dc95f4b36e54047586be39125c9fe91045c5b6a53cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKNC7E47%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOFEq7V2uPZrfjIe8S4wnupDlKJLHft2nJTWAVGYrZNAiEA1W9CCp%2F3ccYi616WNBYIj%2Fsmu%2F%2BEr0nNyi7GeO2w%2Brkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDK5jguOMkFd0qlkQByrcAzQeOhHDUip4CDaivY07XdaCE2LsxmZsGTh97QDxRmbsuvLVb8MtRnao95n6so42EY6t25TspVr8Q5FJbtgnMMtt%2Fr0GwCPQoF9T3yVfX77NXc87B7CPtRK2QELEj6RQ1G%2FBSJH27idE2XaJ%2F5jMSyDP1DnBBpP58CXwWfOhIJfRwJ1hTx%2FoTF%2FHoTiKphiMaB0VP0HbUhYFXjasFbCR3S7sLdcbE%2BALiXOPudOnWp%2BVhe79gLZ0Sjc7LqGt%2BAZ%2BK80PhpOYc3cvRibQ4UBdclLmqyDY%2FhFtxdsdKjElnxcpExYW%2FRivH%2FDj3Or181KySYoll%2FYYch6CCi90G8YtSwb232AGZ%2B%2FSGspjI5adabTdsjz0La%2BR1aJdGh0E11Hd%2Fmv%2FKKfou3PgznHwDQis5OIDREgi9PQpF3GGDGyOADO5sNKXGgDdZuTltYYFiyjPQnQhjan2k08eVMHxwLPRkSzmaJKbrKPeyWmKEXkPUAMgORMGLjypCTK8bAc3VszIN5BOjQYTjgse3HUG8Sub2FNNqH3bc4CtGTcVG4AXmNewtpCS7g7DsZriFPB4pJiGh2HWQGgr7psjOXEtGooZvj5fJIbtiR6jtVTt%2BVqC5y8dvJ7QswKNY5zHSKOeMNbM0ckGOqUBiJEnL6L1r6lIDL4wnhCj2BKrJxRcXeydG5V1VEhp%2FLK3IwIJG5XeVArxfxtFctRwm36gIvbH75BpWR2oCMQ7J1yGqkcZDgVZjOup5bkbYakWOOeFDfd2krHtlqVhGkakYhWabyBiAe5rrM9HItKImK2mXJAMMYDvuq76kgMBHqYC55e5So5DlP75oNrAUI3%2FFT59iaUXWE1zrXlRyXviUFM5yQ1o&X-Amz-Signature=c8f2f9a7c12eeb4082e0f656db17ae8d01673f7c31cd36ea5d35bff7c5a4d98e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

