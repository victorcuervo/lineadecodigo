---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7YTHUPW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T045554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGUhhMCag%2FBA1rmSKAPT0x4kHYG00DPB%2FvCHM6mROqLFAiA%2F7uLUoBO%2FekHJxrHFMYfoPt78mFE1NN6C99Z3VsNzjSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBNqHRO7UI5Y3R7YGKtwD5WJx1hmaInNQhNYJV3D79tLrLnOKQzxFqbznkJzShcElSXeGIR%2BTJeSEnoNIYfFgiGhiNhaynBoHKRJSxVPGyJ1aDrzjJwfVicsKJoDXsZjm2qJCk3yUU4C3QYDEA7x5VfERTxAQt2ZWwSLbC09K7w2yQ3EtV3gBz3UmImKs17iegXK5c9tdLMDJ0DHZYLUUa%2B4SJ%2FcwDeY04B7yP%2Bgu6g7EWPklYs1sElbkq85T2uCpGOO6R%2B0pU6WkcSun4hj%2F3cncK2dIqEKBwoqYiOjTqcqEkpHXZAqGZXb6CvIdpP%2FGLaUraL6YrMIAUrOj2snHXCBjDKMBFp6eCoXqiNtvmi6e%2BGyV3WURtAegIGUhAJA5KCechtSpcAlma1eg3I7SQyk5Spafhm9jwVKzUkpRW67NiftS9EG4mZoqKSsKDjoTZms1nrA1k3Q9pZ8ayt%2FU4mFhTPFuOjv2PuLRRJaq7IlzVblECdr%2B9ZwfzPcLcM%2BiaatG8f7uMvCZgEhewaSitZyu%2BAzLSijm1aMbw7eoTvz%2F6fN4wPh1wXWBdE%2BXOhyxelI51FacXQVziF1y6bYg2gwohVpfwqGrQ4ZlhN%2FjVs%2FRjcAM3QpIjKwbLjtPDKVCbFQ4ZYZC%2BE2fRQ8wgf7SyQY6pgGFz1UL%2FfLJqP%2FHBsbJCGlD8DDAT%2FfVa3GsEYzXg7pJAmMPgLk7%2Bhl714DNEf8rbBj%2FD%2FYurDmZFV%2F9e3dQgavY6TNAh3GpXSBk2taP2Dr15lUUFJv55Ql4PT27orca5vSDvyDDMO8uUYicspMHZO2eJoebf4WLRzz1VMRkhBD%2BzsoRdFcLGocd5isx%2Fo30UgZ4SnNhRLOC8U3gZ%2FV2J42uEayEQdkG&X-Amz-Signature=d0fea322a8143d7240e2ba13bbec41bef7ca3cc2be027468f93c40c9c97fbc4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7YTHUPW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T045554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGUhhMCag%2FBA1rmSKAPT0x4kHYG00DPB%2FvCHM6mROqLFAiA%2F7uLUoBO%2FekHJxrHFMYfoPt78mFE1NN6C99Z3VsNzjSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBNqHRO7UI5Y3R7YGKtwD5WJx1hmaInNQhNYJV3D79tLrLnOKQzxFqbznkJzShcElSXeGIR%2BTJeSEnoNIYfFgiGhiNhaynBoHKRJSxVPGyJ1aDrzjJwfVicsKJoDXsZjm2qJCk3yUU4C3QYDEA7x5VfERTxAQt2ZWwSLbC09K7w2yQ3EtV3gBz3UmImKs17iegXK5c9tdLMDJ0DHZYLUUa%2B4SJ%2FcwDeY04B7yP%2Bgu6g7EWPklYs1sElbkq85T2uCpGOO6R%2B0pU6WkcSun4hj%2F3cncK2dIqEKBwoqYiOjTqcqEkpHXZAqGZXb6CvIdpP%2FGLaUraL6YrMIAUrOj2snHXCBjDKMBFp6eCoXqiNtvmi6e%2BGyV3WURtAegIGUhAJA5KCechtSpcAlma1eg3I7SQyk5Spafhm9jwVKzUkpRW67NiftS9EG4mZoqKSsKDjoTZms1nrA1k3Q9pZ8ayt%2FU4mFhTPFuOjv2PuLRRJaq7IlzVblECdr%2B9ZwfzPcLcM%2BiaatG8f7uMvCZgEhewaSitZyu%2BAzLSijm1aMbw7eoTvz%2F6fN4wPh1wXWBdE%2BXOhyxelI51FacXQVziF1y6bYg2gwohVpfwqGrQ4ZlhN%2FjVs%2FRjcAM3QpIjKwbLjtPDKVCbFQ4ZYZC%2BE2fRQ8wgf7SyQY6pgGFz1UL%2FfLJqP%2FHBsbJCGlD8DDAT%2FfVa3GsEYzXg7pJAmMPgLk7%2Bhl714DNEf8rbBj%2FD%2FYurDmZFV%2F9e3dQgavY6TNAh3GpXSBk2taP2Dr15lUUFJv55Ql4PT27orca5vSDvyDDMO8uUYicspMHZO2eJoebf4WLRzz1VMRkhBD%2BzsoRdFcLGocd5isx%2Fo30UgZ4SnNhRLOC8U3gZ%2FV2J42uEayEQdkG&X-Amz-Signature=322499a7863f7174f85644b8d009fb746bd5ab0cb0447a8ddccd0abd8357ce63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

