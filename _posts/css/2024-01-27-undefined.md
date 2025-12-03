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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ36YH6W%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T131329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIFXhdYt5PbvO7qsDderLVsnB9HviQceHN7kfPsLSV2xFAiEAn9ohMOyHGRE1mbGUQ1%2FkQSOwbBHwSkHOX5%2BFOW48Qgsq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDJB8hNjqgWEl%2FZzX6yrcAxwsQB8rzSfzUFmP3hpkSAmBws2L6a%2FdgUyBISIAuj5JRUKPt4urXonHBUGnLKoHh%2F8dy9aUboL6FwtjFvTtDITACwVmQJ2uHCBO9q4hUA6u%2FCIJkABYUbvYHYRnTgrdOG7VynmtuiTZOmh%2Bp3VnMZIzfCfjaIUNAanHAPOuYXzvHlibVXE6Z6ltqBeaqRFlUG1Mirv60%2BGeC%2FWwhx65KW18YIWwtcU3as5WkfpPdhSk84CH02vuiNwC9xRgqhlZh%2B4trq5B4l7asqSqUmqQoyDSCmXbDQbo9%2BqnJyz%2Fv8bygNU0MAl9rSM3ejLMuNoQbf71%2Bf4yKSgde639kwRydjSip05%2FMM6Y8i%2Fk2wS6qlsgK5QE9IVkpTs4NswCB4hoI5Qncu54CE8Zl46blN4g%2FMJxtxaGddywkogVZ%2BNql74dXIKErLY%2Fgjfd6bGcOUtBW%2F4Wm3%2BYsZ%2B3v3OCRDFZ1XgjoRo6poxZ%2F%2BlRw%2Fum3oCh0cmxkTfnr%2BZ9LnfNQtsNQK3Ozw2%2FJ7%2F9myHQS4MzAGVyCO9CNeXs4Yj4pPWl3nlZhMcKHOBQPg6YmxhADdAlY1BsLZATnFu4YPjVVUnjXQBTIZQx4W7qkqQPncmFAsqUztEDK0jB0Kb7Py8NMKXrwMkGOqUBH6zwuQ5IdGSiRQBidhY%2B7%2BJz2wF3rjTyLiDXzuuLb5sivmBXhkMRFKGfgNcvliWKel%2FOX3LvLtajquricRB9p1b3wlXruaIYxdRHF%2FLNoOG1bn2%2BHsjISaPzSTHE3BbTyNmtIhy5dBBG3MnT09vNu9D%2F13PGrQDwW%2Fj%2BAXbtWv27YP0e%2FkhwxMcCwIM97NU9g%2B23QPcu0KeL69CRDkG34XWLFdJv&X-Amz-Signature=455db72d5a03cebfa2cbc10e63cf26d19102eeaf34c742e6aa13c5ab659344d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ36YH6W%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T131329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIFXhdYt5PbvO7qsDderLVsnB9HviQceHN7kfPsLSV2xFAiEAn9ohMOyHGRE1mbGUQ1%2FkQSOwbBHwSkHOX5%2BFOW48Qgsq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDJB8hNjqgWEl%2FZzX6yrcAxwsQB8rzSfzUFmP3hpkSAmBws2L6a%2FdgUyBISIAuj5JRUKPt4urXonHBUGnLKoHh%2F8dy9aUboL6FwtjFvTtDITACwVmQJ2uHCBO9q4hUA6u%2FCIJkABYUbvYHYRnTgrdOG7VynmtuiTZOmh%2Bp3VnMZIzfCfjaIUNAanHAPOuYXzvHlibVXE6Z6ltqBeaqRFlUG1Mirv60%2BGeC%2FWwhx65KW18YIWwtcU3as5WkfpPdhSk84CH02vuiNwC9xRgqhlZh%2B4trq5B4l7asqSqUmqQoyDSCmXbDQbo9%2BqnJyz%2Fv8bygNU0MAl9rSM3ejLMuNoQbf71%2Bf4yKSgde639kwRydjSip05%2FMM6Y8i%2Fk2wS6qlsgK5QE9IVkpTs4NswCB4hoI5Qncu54CE8Zl46blN4g%2FMJxtxaGddywkogVZ%2BNql74dXIKErLY%2Fgjfd6bGcOUtBW%2F4Wm3%2BYsZ%2B3v3OCRDFZ1XgjoRo6poxZ%2F%2BlRw%2Fum3oCh0cmxkTfnr%2BZ9LnfNQtsNQK3Ozw2%2FJ7%2F9myHQS4MzAGVyCO9CNeXs4Yj4pPWl3nlZhMcKHOBQPg6YmxhADdAlY1BsLZATnFu4YPjVVUnjXQBTIZQx4W7qkqQPncmFAsqUztEDK0jB0Kb7Py8NMKXrwMkGOqUBH6zwuQ5IdGSiRQBidhY%2B7%2BJz2wF3rjTyLiDXzuuLb5sivmBXhkMRFKGfgNcvliWKel%2FOX3LvLtajquricRB9p1b3wlXruaIYxdRHF%2FLNoOG1bn2%2BHsjISaPzSTHE3BbTyNmtIhy5dBBG3MnT09vNu9D%2F13PGrQDwW%2Fj%2BAXbtWv27YP0e%2FkhwxMcCwIM97NU9g%2B23QPcu0KeL69CRDkG34XWLFdJv&X-Amz-Signature=41305c1212271e54acf69e3bf32f350046bac893a02660afe3f66258e109a15c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

