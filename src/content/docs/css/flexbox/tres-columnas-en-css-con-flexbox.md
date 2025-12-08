---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJBLZDCU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T204646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIGbjpqDhimdlOwqbAqAlWVSVGQ4CKStnKFMS0qdY2RwIgRZjwuBVkkxKNiIHtU%2Fi3cl5dHOLqTZT72QJNAakLwgUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FHOgQXX67r266YVSrcA64uPstGcEG9uHhpOyiVsRIg8Eo0WAorT96xxJnTroeVnwSJKUqWCvJ2SU6cJf64OyPAIMNUlCjtgQ2HEECcvhcYeBspARlgA3EGAkm6I%2B3p0IMq0G00kH8hVfGlYgsPiGzXUDUZwU7KcAiMvphzyWhdZ8JK%2FT2%2FiesRdwaBNMyszKdnAs%2BhKqaXKV%2BVtofnLPvd3ztCYPiHgdb4a0XuHc2QPuo20WaxbimPHAUSfi8g25N2zYdghsM%2FxKHa7dTOWMB1oUhmhRyNDWDRTK0xWNKDFE%2FtywjFMN%2BiOrXXTM5PHyRBAwCoD8iI4EXVWqoyckjDVkeZK7adMRMKY5BmLSRhP1mbK47OCRLMUdYsv9sXylfM%2BQKragsdueWGP9JuiKAC%2BflOOwrqPILGYz%2FGYOKgc4uA7%2FwCxDWJOddJEoJc4tZixsm8w4QZ%2BN8EBV6ZVvGCRXlr%2FCwmelyXXlai47i2E6f74GzUdhOHUVjCT3kv6%2Fj496Jvt88BYFOC7SU1VynlofaZnzHCxcnzuUdn9c0248iF2k2o1Zuuc8LluKuzb6lB6GK%2FUlV%2BydLWsUQbF5ANRMkb4uX9tTtL75F9si3LZ9k8psLDYsqbdwrQsbQlAVLN3aKGyIEu4F6RMInd3MkGOqUBnrxCzIDnGSMEB2oAYsU43P8E4U%2BAaYchtelhzwD7jz2GqRcP7nsNnOUdfc9eAoTYsl7%2FkQAlyI8tmaOqJz2Ymcaan%2FdW7AiiaOU4sWtg1nVkCBq3p4gpA0zQT%2Fx58ibiOpO1CVDdtoI7YXJIaiGRAaSSvttGzVxrRUJWSdWK627FByskAqJNHdG%2BzAwJip0XOCD4C7PFpyOv3ipdzsp1LztSmeLT&X-Amz-Signature=509bfea602451635f52d010e47a921f52f561d8c3026cf564dafe3d3bcd9fe6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJBLZDCU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T204646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIGbjpqDhimdlOwqbAqAlWVSVGQ4CKStnKFMS0qdY2RwIgRZjwuBVkkxKNiIHtU%2Fi3cl5dHOLqTZT72QJNAakLwgUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FHOgQXX67r266YVSrcA64uPstGcEG9uHhpOyiVsRIg8Eo0WAorT96xxJnTroeVnwSJKUqWCvJ2SU6cJf64OyPAIMNUlCjtgQ2HEECcvhcYeBspARlgA3EGAkm6I%2B3p0IMq0G00kH8hVfGlYgsPiGzXUDUZwU7KcAiMvphzyWhdZ8JK%2FT2%2FiesRdwaBNMyszKdnAs%2BhKqaXKV%2BVtofnLPvd3ztCYPiHgdb4a0XuHc2QPuo20WaxbimPHAUSfi8g25N2zYdghsM%2FxKHa7dTOWMB1oUhmhRyNDWDRTK0xWNKDFE%2FtywjFMN%2BiOrXXTM5PHyRBAwCoD8iI4EXVWqoyckjDVkeZK7adMRMKY5BmLSRhP1mbK47OCRLMUdYsv9sXylfM%2BQKragsdueWGP9JuiKAC%2BflOOwrqPILGYz%2FGYOKgc4uA7%2FwCxDWJOddJEoJc4tZixsm8w4QZ%2BN8EBV6ZVvGCRXlr%2FCwmelyXXlai47i2E6f74GzUdhOHUVjCT3kv6%2Fj496Jvt88BYFOC7SU1VynlofaZnzHCxcnzuUdn9c0248iF2k2o1Zuuc8LluKuzb6lB6GK%2FUlV%2BydLWsUQbF5ANRMkb4uX9tTtL75F9si3LZ9k8psLDYsqbdwrQsbQlAVLN3aKGyIEu4F6RMInd3MkGOqUBnrxCzIDnGSMEB2oAYsU43P8E4U%2BAaYchtelhzwD7jz2GqRcP7nsNnOUdfc9eAoTYsl7%2FkQAlyI8tmaOqJz2Ymcaan%2FdW7AiiaOU4sWtg1nVkCBq3p4gpA0zQT%2Fx58ibiOpO1CVDdtoI7YXJIaiGRAaSSvttGzVxrRUJWSdWK627FByskAqJNHdG%2BzAwJip0XOCD4C7PFpyOv3ipdzsp1LztSmeLT&X-Amz-Signature=0001e663376fbc495372c0b309eb3c5dc16868defe16d520373975b79d12fd22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

