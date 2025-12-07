---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ORDWWLI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T081238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCET7wZRc1%2FQ1b4NcyAx6aeTt2hbVaWfhqwgguDatSGgwIgT2IfaxE6OpR47COSGdDjUehsge8dAs1v1iqTxTq4B08qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHX1mxQ0EzDAlWBTiyrcAwCHeZi6XuRol%2BhHcsyGEbqKdrYtIXtBt4VffGf75eh%2Fyh3HNGTv9deX%2F2XBgFpNELVfPdeaL2SgfVN4EfFBTnwIz02lsY4kkZvX4drUicHYYSFqtlvsWLfdlgjhwR8YA2hzzmwM3Cpsuluo4cuiJExmiNEnHs3MvT3PN%2BqC5pSO7yvQ7fnWvozRqQ19Gw7tgrxX7wo6ji5ZxbVl34JIR%2B6DPBAtXFhQ2n8%2BmFKL05%2BwHyTvbrNxUh0kNjbG36OlSE4oqiLw1EK0b0s20uDZ7qc62Q%2BobGyRNPR2uYgwUyluY67c1gRLOfaCTazkm8MQSC9uRupetCVM2Eg9GgdkPHZKkPhdctUEHH93oNT4kYIYp8wiPHIRjM4890ieNQvZNoR1RWUvSOfJDHVNYnhNnIaYYsjRAXz2GYx%2BGOE2lE2%2FV63yzRjBzWsnZO4svSXokVV2M0ULiCZ6OWJ7QUtoL3GYoLr5anvqHM3mtOYUTwtzW0bn%2Fl7LwJRkQwIerP3ZgaxpO6CTedh6BTg5GMJfFGJzqfnCbjOWiFBrtJ9eyZ7SDrbxEzpq8kF5K0YnxKK2Zwf%2F%2FJL9NUOMbAgE32CLlIQksukJDiSq7bnPwzceIz%2FwRZDmWB1x2MAH5M5MMJGd1MkGOqUBSxuqfT%2FmP%2FCbbpUpwZzvPMxYnxbGKX8CTfP9qgGr5XSLz5%2BsS2bky7oBaa7v0Do45MkuJStDmqNZv%2FzFnitFIXo3uGkdrz3xSXJW%2BraaxaVrWVQv8F9%2FsNbLjx28Imm8aRu5Pl5ad3dfi6Yd4sQ5kaoiyF36Fgdk3K%2BC2cZ4CkK3LEl%2FJrqxG2wG%2BSRvlFaeF33AXFj1NMyygYw3m0m5wc5cujHR&X-Amz-Signature=b3a8c3d55745fd42fc67ff1b9699a74aded789f35aa441f6b5e320d84563e3b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ORDWWLI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T081238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCET7wZRc1%2FQ1b4NcyAx6aeTt2hbVaWfhqwgguDatSGgwIgT2IfaxE6OpR47COSGdDjUehsge8dAs1v1iqTxTq4B08qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHX1mxQ0EzDAlWBTiyrcAwCHeZi6XuRol%2BhHcsyGEbqKdrYtIXtBt4VffGf75eh%2Fyh3HNGTv9deX%2F2XBgFpNELVfPdeaL2SgfVN4EfFBTnwIz02lsY4kkZvX4drUicHYYSFqtlvsWLfdlgjhwR8YA2hzzmwM3Cpsuluo4cuiJExmiNEnHs3MvT3PN%2BqC5pSO7yvQ7fnWvozRqQ19Gw7tgrxX7wo6ji5ZxbVl34JIR%2B6DPBAtXFhQ2n8%2BmFKL05%2BwHyTvbrNxUh0kNjbG36OlSE4oqiLw1EK0b0s20uDZ7qc62Q%2BobGyRNPR2uYgwUyluY67c1gRLOfaCTazkm8MQSC9uRupetCVM2Eg9GgdkPHZKkPhdctUEHH93oNT4kYIYp8wiPHIRjM4890ieNQvZNoR1RWUvSOfJDHVNYnhNnIaYYsjRAXz2GYx%2BGOE2lE2%2FV63yzRjBzWsnZO4svSXokVV2M0ULiCZ6OWJ7QUtoL3GYoLr5anvqHM3mtOYUTwtzW0bn%2Fl7LwJRkQwIerP3ZgaxpO6CTedh6BTg5GMJfFGJzqfnCbjOWiFBrtJ9eyZ7SDrbxEzpq8kF5K0YnxKK2Zwf%2F%2FJL9NUOMbAgE32CLlIQksukJDiSq7bnPwzceIz%2FwRZDmWB1x2MAH5M5MMJGd1MkGOqUBSxuqfT%2FmP%2FCbbpUpwZzvPMxYnxbGKX8CTfP9qgGr5XSLz5%2BsS2bky7oBaa7v0Do45MkuJStDmqNZv%2FzFnitFIXo3uGkdrz3xSXJW%2BraaxaVrWVQv8F9%2FsNbLjx28Imm8aRu5Pl5ad3dfi6Yd4sQ5kaoiyF36Fgdk3K%2BC2cZ4CkK3LEl%2FJrqxG2wG%2BSRvlFaeF33AXFj1NMyygYw3m0m5wc5cujHR&X-Amz-Signature=342e39f6c2eb7da144b59d9bb51a58656f76a91319971b347efb381c95f9e4de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

