---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZH2NJ5E%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T122840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxHUedidDmaG0%2BKDdORGoMAx%2FI0Cp3qUMyr%2FPO0thsKgIgKmsXGKfxybiCF%2Fo9yk8P%2BItSEqhgylqxOVsXjkct2IsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrw1sfSgkiN2a%2Fo5ircA7h1v9kNM6u1qUVRu%2BMteiujX1epd3iRzoKy5Fdhd5wthYNxH%2BR62YghNF0GsyGgZVCLfs5er07s8OhHLbDSkSVdC8GeNAXCjQABokGLuu2uO5tTB7Hsih6OdnZjMn3aJ01F1r8OkbeO7Qnr4MBW%2BnTPkEp6I%2FVPbW20lTaRCB5onwHg1QJKtPm29%2BV1HM5FaAriEArGIq04OjXS36iJ4ZGbo7MZNrG9ZejKLZXtEfplt6bb5%2BVWvZmn9OoXY%2FS1Ofbkx89xacs3dqzZFVfH5fwzd%2FIXfwLKxz4zZE8FlXAB29e0sk7LfiQtVoEnHGIDfP2eUlDJb2bCLRVHPns%2FltpkECN1QCUii8Nx%2Bn7ggpyAG%2BPPkJ9k%2FstBUYHf5bCT1XuhSx5fnH56kwJgUQK5S4Q%2BYtwuMQ698rLFpRuUev7G2nF3M3oM7cKbPUJWooapWM34o9PO5%2F4d9sYi917kTOb%2FDAQ28R08YBHBP9aU64ICbNgudFBqEqSaFewTJ%2BSoqvMGP4s64GlQmwokbFpUh%2B467dYhEWUQJNHbaPjEauXFoHSc7FvL2xz50OTYbYGIEaLMQ0OkPL%2BeJy9EHZMRQrXqUVfcIxDn6q8vUnoSbDdgJiOt4ZMc4zjqsGVaMPOZ1ckGOqUBZoBXc0rfoeI1KGaAeR1CNghWyZfqKIFbq%2BmnGTEB9x5FkWs7q2n4J%2FmaoK2UZdlXYkg9PD5F1NBWQNmiNnuHt%2FKVxb5GdL5%2FdP7vI0Kx2gDUSnBcKGN6JvORjXzEuZGD3xmLG4qXxkFgLC9xFQB9l%2Fz6ppJu12Er1ZTiypN7QNHCEHltlIN40tHqj6nn8WwGaXxxNVgh%2FhWJQanvqHHM%2FOZYwvHh&X-Amz-Signature=0dbafb0c4d9467d8090c01ed8c85e881aa8d64f890d811dca270e03583dca986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZH2NJ5E%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T122840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxHUedidDmaG0%2BKDdORGoMAx%2FI0Cp3qUMyr%2FPO0thsKgIgKmsXGKfxybiCF%2Fo9yk8P%2BItSEqhgylqxOVsXjkct2IsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrw1sfSgkiN2a%2Fo5ircA7h1v9kNM6u1qUVRu%2BMteiujX1epd3iRzoKy5Fdhd5wthYNxH%2BR62YghNF0GsyGgZVCLfs5er07s8OhHLbDSkSVdC8GeNAXCjQABokGLuu2uO5tTB7Hsih6OdnZjMn3aJ01F1r8OkbeO7Qnr4MBW%2BnTPkEp6I%2FVPbW20lTaRCB5onwHg1QJKtPm29%2BV1HM5FaAriEArGIq04OjXS36iJ4ZGbo7MZNrG9ZejKLZXtEfplt6bb5%2BVWvZmn9OoXY%2FS1Ofbkx89xacs3dqzZFVfH5fwzd%2FIXfwLKxz4zZE8FlXAB29e0sk7LfiQtVoEnHGIDfP2eUlDJb2bCLRVHPns%2FltpkECN1QCUii8Nx%2Bn7ggpyAG%2BPPkJ9k%2FstBUYHf5bCT1XuhSx5fnH56kwJgUQK5S4Q%2BYtwuMQ698rLFpRuUev7G2nF3M3oM7cKbPUJWooapWM34o9PO5%2F4d9sYi917kTOb%2FDAQ28R08YBHBP9aU64ICbNgudFBqEqSaFewTJ%2BSoqvMGP4s64GlQmwokbFpUh%2B467dYhEWUQJNHbaPjEauXFoHSc7FvL2xz50OTYbYGIEaLMQ0OkPL%2BeJy9EHZMRQrXqUVfcIxDn6q8vUnoSbDdgJiOt4ZMc4zjqsGVaMPOZ1ckGOqUBZoBXc0rfoeI1KGaAeR1CNghWyZfqKIFbq%2BmnGTEB9x5FkWs7q2n4J%2FmaoK2UZdlXYkg9PD5F1NBWQNmiNnuHt%2FKVxb5GdL5%2FdP7vI0Kx2gDUSnBcKGN6JvORjXzEuZGD3xmLG4qXxkFgLC9xFQB9l%2Fz6ppJu12Er1ZTiypN7QNHCEHltlIN40tHqj6nn8WwGaXxxNVgh%2FhWJQanvqHHM%2FOZYwvHh&X-Amz-Signature=ca7b2bd70321e6bd165b3d97ad85ae3506b914ed28bb53846f8a27a16c77b69e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

