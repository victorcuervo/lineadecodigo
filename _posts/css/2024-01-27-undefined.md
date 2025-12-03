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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GPHXCXL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T123913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCICPOoCXKHuXKErBam9vS2m2BjKu7jabwZL2oMdIDDvd2AiBvq%2FYBBbbeidd4078tB2htB8ckwG07IrhpQ71v4%2B%2BQKCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM2Mg%2Bn4mMDwSO6NvJKtwDFFZfQDLPSCNbNXJFcofXv572NTy0YVH4yIVYYdiOwPhltTo%2BAGUHFaKa%2BY9xdIah6pZGlVX8gF2eAsXffKoFwThIjI4uJ0rvF%2Fv%2F1A%2FKJvXFIYKBN5y6WBxiuXM7bR122g47lKL8LZFE5cAlD3vCn%2FLqVJNy4zk1VRYsS8r2eZOQw%2By5YSkuhfpoel2wO8uXfBP7ij0wAnlt0F3YwGc%2BTKJHe4zNvrwcdtZ1mMCLowdC7BQ27RNawtno6oOFNLeDWi42%2BoqxwQ6KDi9Pd79kXAlK%2BRJ4EWZGKA2QcQ10N1Tc0d3KdZIvSrOwdivz%2FqUVI6LHD2LFrAXp3rymEIGgiUi3b%2F2WOyuLVn52sSK%2Ffs%2BA7Z84KmVKLNvL5m4o%2B7KGCwNHq4OfdGswYSSWKkAsFIOrX6%2BaBXXb%2FZkFx7dO89DHXrYjKRSrYMpvlwwzBKDCn5nTfluLM2SnKXdqJR0cXmykInErVWXjdgQFp7y9DMDcnTELDZmzSNDIg%2BYXMRptE5qfqoTLGBFyQUDnAQClT%2Buq0mFABnSCPl5FULULVGSFrM4QGfZDZufg%2ByWh0tg02d0t0B2i3kKWCQFkOwR1Z3N%2BEEElOShHfBFkreiKl9LjIZNLublz5osoiNEwqs3AyQY6pgE1cggFdjyj%2B1d4c0%2BTCm1jvJeNLrd%2B8rvX47zBhzzFFg%2BWt1We7a6%2FqFnxgxHWreThKnM%2BelkPN%2ByHRT4sxpb5v65L%2BUl6FMn9WCcv7Vd75igG3unK49O6JSvt4HgG%2BwtLv4%2Be4QtTQfX1fkqF1oKU0C%2F%2FJ%2FNogd3aC6rD%2Fiq3GsMIb37QslUlVRFlVSbJlXVh8H1NKKtXhFSgSoCkfZq%2BC6GKZ%2FFF&X-Amz-Signature=5737528cd67dd879d62801d167394af8707c2c61bf6c548db612c1b84ffbbb2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GPHXCXL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T123913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCICPOoCXKHuXKErBam9vS2m2BjKu7jabwZL2oMdIDDvd2AiBvq%2FYBBbbeidd4078tB2htB8ckwG07IrhpQ71v4%2B%2BQKCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM2Mg%2Bn4mMDwSO6NvJKtwDFFZfQDLPSCNbNXJFcofXv572NTy0YVH4yIVYYdiOwPhltTo%2BAGUHFaKa%2BY9xdIah6pZGlVX8gF2eAsXffKoFwThIjI4uJ0rvF%2Fv%2F1A%2FKJvXFIYKBN5y6WBxiuXM7bR122g47lKL8LZFE5cAlD3vCn%2FLqVJNy4zk1VRYsS8r2eZOQw%2By5YSkuhfpoel2wO8uXfBP7ij0wAnlt0F3YwGc%2BTKJHe4zNvrwcdtZ1mMCLowdC7BQ27RNawtno6oOFNLeDWi42%2BoqxwQ6KDi9Pd79kXAlK%2BRJ4EWZGKA2QcQ10N1Tc0d3KdZIvSrOwdivz%2FqUVI6LHD2LFrAXp3rymEIGgiUi3b%2F2WOyuLVn52sSK%2Ffs%2BA7Z84KmVKLNvL5m4o%2B7KGCwNHq4OfdGswYSSWKkAsFIOrX6%2BaBXXb%2FZkFx7dO89DHXrYjKRSrYMpvlwwzBKDCn5nTfluLM2SnKXdqJR0cXmykInErVWXjdgQFp7y9DMDcnTELDZmzSNDIg%2BYXMRptE5qfqoTLGBFyQUDnAQClT%2Buq0mFABnSCPl5FULULVGSFrM4QGfZDZufg%2ByWh0tg02d0t0B2i3kKWCQFkOwR1Z3N%2BEEElOShHfBFkreiKl9LjIZNLublz5osoiNEwqs3AyQY6pgE1cggFdjyj%2B1d4c0%2BTCm1jvJeNLrd%2B8rvX47zBhzzFFg%2BWt1We7a6%2FqFnxgxHWreThKnM%2BelkPN%2ByHRT4sxpb5v65L%2BUl6FMn9WCcv7Vd75igG3unK49O6JSvt4HgG%2BwtLv4%2Be4QtTQfX1fkqF1oKU0C%2F%2FJ%2FNogd3aC6rD%2Fiq3GsMIb37QslUlVRFlVSbJlXVh8H1NKKtXhFSgSoCkfZq%2BC6GKZ%2FFF&X-Amz-Signature=d3b3dbed6280039fe8d782e4b6033fd40fb905fb201732236b0c2f4ad6404e49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

