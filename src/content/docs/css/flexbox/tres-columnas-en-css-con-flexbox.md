---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TEDH7J5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T065923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjQzoTu2PVxnL8WxHd6M7TcjBHVd13UBsL4b5RxhQiHAiEArtPaPywxi5Bvpym1%2FNnuQifv0PzdwIgCwrX4t2CLlIAq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDO65EpWR7krKLoC3iSrcAyaOvJH1bLehXHCJY7ejCE2CI9hu8anhWejUldNtZ79Fe%2FmW8zgyH%2Frrrw6oB50pIZ96rygwgCV0V%2FOYpAPYW2EUtAsRCyu581soayJAOzCdWUv6Bj1C1C8Y%2Bz6vJhCL1eOBefvqynHbRBdt8K%2Bsx6zfql2zThcmIR%2BjTqgHhxRQoudVqP%2BA1UZ8SM8PVtbVQ7UDq4YeIs4GaRnefvE5N%2FKXUp%2BCAOz%2BWwVejWeKvJwoS2jYN5PFFcfpvm2bTveKEw9z8EoiAQADNDi8lTxsK13AA97Qxt2Ksxetl%2F3zUn5k%2FqUf4EF4F0SfwFRxNKSMw%2Bwn4BU%2BYHM%2FGhDk359z0CFBUosA%2F3tgmZooprY%2BmEu51REWvAJ3fFyzeWBVKkgwdVaLpqO7xZIazcOuzCuTwGFHuFGG63%2F60zPBnslDJ4Pd2avbJIsQlmoU7bR260Sg5xnclkkK0AJVox7RHsB4EVdnQjZwFXbwdtq7ELJoivgVgi3BqzMmwYywTHwQsNFpzSPfg9%2F6NuoBs5hvuKIhqZ7QB1JhJpTcmZOquLeo2hBOYqsRYBm6GGD0LNq8aKT%2F7KP0sPin1YoB2L4FzXjG%2BrNVv9%2Bhe16uHxb7d58c0yVQ4Hqn4XLy9Nt%2BNo2SMI6yyckGOqUBXCjZD07Vod7Rt1Xty%2FIxakzcLf%2B4mBLvUXR3oWRkwLlGWPu%2BXXlzkdECfcPBAsQcuXZtOiasbSFKVywgP6pLcYTbW3JhJ3aYRmJrdUgvhPs3SAKCnXis46v%2FA7Xa4BfJuaWZ8uiQDwoc4ttKPCIGytPbcegl4OCN8WIDFGVxi3JhGZTbcl5kIxfG9EeIxm%2B7rYAx%2FnOyuTLC6E%2F8jUKq2uQYajau&X-Amz-Signature=f814831e02046a1868ac97d323a55c63eb915c1677ea3709b1a277ce0942bc35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TEDH7J5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T065923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjQzoTu2PVxnL8WxHd6M7TcjBHVd13UBsL4b5RxhQiHAiEArtPaPywxi5Bvpym1%2FNnuQifv0PzdwIgCwrX4t2CLlIAq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDO65EpWR7krKLoC3iSrcAyaOvJH1bLehXHCJY7ejCE2CI9hu8anhWejUldNtZ79Fe%2FmW8zgyH%2Frrrw6oB50pIZ96rygwgCV0V%2FOYpAPYW2EUtAsRCyu581soayJAOzCdWUv6Bj1C1C8Y%2Bz6vJhCL1eOBefvqynHbRBdt8K%2Bsx6zfql2zThcmIR%2BjTqgHhxRQoudVqP%2BA1UZ8SM8PVtbVQ7UDq4YeIs4GaRnefvE5N%2FKXUp%2BCAOz%2BWwVejWeKvJwoS2jYN5PFFcfpvm2bTveKEw9z8EoiAQADNDi8lTxsK13AA97Qxt2Ksxetl%2F3zUn5k%2FqUf4EF4F0SfwFRxNKSMw%2Bwn4BU%2BYHM%2FGhDk359z0CFBUosA%2F3tgmZooprY%2BmEu51REWvAJ3fFyzeWBVKkgwdVaLpqO7xZIazcOuzCuTwGFHuFGG63%2F60zPBnslDJ4Pd2avbJIsQlmoU7bR260Sg5xnclkkK0AJVox7RHsB4EVdnQjZwFXbwdtq7ELJoivgVgi3BqzMmwYywTHwQsNFpzSPfg9%2F6NuoBs5hvuKIhqZ7QB1JhJpTcmZOquLeo2hBOYqsRYBm6GGD0LNq8aKT%2F7KP0sPin1YoB2L4FzXjG%2BrNVv9%2Bhe16uHxb7d58c0yVQ4Hqn4XLy9Nt%2BNo2SMI6yyckGOqUBXCjZD07Vod7Rt1Xty%2FIxakzcLf%2B4mBLvUXR3oWRkwLlGWPu%2BXXlzkdECfcPBAsQcuXZtOiasbSFKVywgP6pLcYTbW3JhJ3aYRmJrdUgvhPs3SAKCnXis46v%2FA7Xa4BfJuaWZ8uiQDwoc4ttKPCIGytPbcegl4OCN8WIDFGVxi3JhGZTbcl5kIxfG9EeIxm%2B7rYAx%2FnOyuTLC6E%2F8jUKq2uQYajau&X-Amz-Signature=9613b630e31a0ef2884d9d0eb867ad321c9df64a3343472576f976b464aa205e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

