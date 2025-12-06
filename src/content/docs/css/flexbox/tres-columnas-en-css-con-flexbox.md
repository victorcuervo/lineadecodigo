---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDLOGRGN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T190316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3dHSsDyfclj%2F1tE9PwXVj9B%2FWfswwyL%2BmE1rFZoj1lAiEA338U%2Bm26oQYIHWMLElUBdFLnajF9xF%2ByrziiO4ammPoq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDDR13aKz6EoTjCzQcircA0r%2FF6ry23AMHebE27FakvqY3BxwGztGod57hc%2BF6pOfzdMdka1bDblrU1suNVHMbgXein%2BfyeCHOyUaPtmIwuCgK9kCD4pXN4IDIhVypbPP8%2BSztaR64A58m2de5qTNkcbcDlOr%2FYW26dpTLp21Z%2ByjDS3W7eSmAKH1RQnSwM1IIEhwPiDSvBqv5NMotvBN0Sm12FFOo8eSxYinRoSWUq0NIpJy9cH9Uxr7m6LLHeIH5VZNWL9HeZPWwQGNDWx%2B4VMXROJh57QEMGUWi%2BV3gcwCO0fIfTKrfXRqcYSDvDU31hKPkFu4uF6tVV0hc1sJP4ZN%2By3Kfuojk8Xt%2B1upHFsDhfnpukex17GVZTfmJKv9TZxF6v0tGvVhNxE6pXEi8vKzrxyq3cITK%2B8FMl7essYsSm3lweOlqHRObLl%2F0k5KkK9%2BKp2RQ25Vi8cNILtrsGUovG5o%2F8NhPT6bbI0tw2Ac%2Fplgm5tpxNtBwANmBeliKYrUy2kECUfrljCcOE7tJWiC%2Feo%2FwisaQLqe%2BIdL9pEKJHqcL8vKNTwCdeKM2HDooMNDEg85amGhRRIpZZ4hCgtgXbM%2FLgvvVtKCnG7aQYeMe9y0rkfITcddE4Vbf%2F6CU%2BXHNmvO85VtyGuOMNbM0ckGOqUBLjlTWH6R61jpC7qyLiw3ouxRDbIjY0CgKFiMLgLjQzlmz5%2Boe3MSN%2Fy2oOpYPyZbm0Rr33IMsBdNfxph1BD7RA7aXRaKlZldIrfSeK8Gfo3DlEXquSYgEzEC5qxQ5graZEDBYqH5NojLEeoDfid8vxKuRnmiopPi5%2Ba40gET2d4nabNh04xDe9XciSH10xia206SkEugKSnV5RFYtxBPvTGbXQNN&X-Amz-Signature=fd0356e77f4e182c582f9060551116b3b759dd1ba13921a1ff846d7889bc5508&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDLOGRGN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T190316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3dHSsDyfclj%2F1tE9PwXVj9B%2FWfswwyL%2BmE1rFZoj1lAiEA338U%2Bm26oQYIHWMLElUBdFLnajF9xF%2ByrziiO4ammPoq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDDR13aKz6EoTjCzQcircA0r%2FF6ry23AMHebE27FakvqY3BxwGztGod57hc%2BF6pOfzdMdka1bDblrU1suNVHMbgXein%2BfyeCHOyUaPtmIwuCgK9kCD4pXN4IDIhVypbPP8%2BSztaR64A58m2de5qTNkcbcDlOr%2FYW26dpTLp21Z%2ByjDS3W7eSmAKH1RQnSwM1IIEhwPiDSvBqv5NMotvBN0Sm12FFOo8eSxYinRoSWUq0NIpJy9cH9Uxr7m6LLHeIH5VZNWL9HeZPWwQGNDWx%2B4VMXROJh57QEMGUWi%2BV3gcwCO0fIfTKrfXRqcYSDvDU31hKPkFu4uF6tVV0hc1sJP4ZN%2By3Kfuojk8Xt%2B1upHFsDhfnpukex17GVZTfmJKv9TZxF6v0tGvVhNxE6pXEi8vKzrxyq3cITK%2B8FMl7essYsSm3lweOlqHRObLl%2F0k5KkK9%2BKp2RQ25Vi8cNILtrsGUovG5o%2F8NhPT6bbI0tw2Ac%2Fplgm5tpxNtBwANmBeliKYrUy2kECUfrljCcOE7tJWiC%2Feo%2FwisaQLqe%2BIdL9pEKJHqcL8vKNTwCdeKM2HDooMNDEg85amGhRRIpZZ4hCgtgXbM%2FLgvvVtKCnG7aQYeMe9y0rkfITcddE4Vbf%2F6CU%2BXHNmvO85VtyGuOMNbM0ckGOqUBLjlTWH6R61jpC7qyLiw3ouxRDbIjY0CgKFiMLgLjQzlmz5%2Boe3MSN%2Fy2oOpYPyZbm0Rr33IMsBdNfxph1BD7RA7aXRaKlZldIrfSeK8Gfo3DlEXquSYgEzEC5qxQ5graZEDBYqH5NojLEeoDfid8vxKuRnmiopPi5%2Ba40gET2d4nabNh04xDe9XciSH10xia206SkEugKSnV5RFYtxBPvTGbXQNN&X-Amz-Signature=2bdd03d1751cfaccf30401ef5513b70ed13a2d284ec36b56eb2e32177de7c6e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

