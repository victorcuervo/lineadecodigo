---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGQ5APGN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T012112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPa3sNdP0zO79tTAr0zQ2IfDyQoeyEJp2R3CTmIWIGwAIhAMn41caX%2FtYn3cWynDoZ4zAM1M%2Be7IRLfMWwEaCWP4vmKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE5xfTXO4zL%2FviUqoq3AO%2Bezq1gY65U4RLwQNJPXn7pBvLb7hRelCHZwYllTvh5fezBEjoUbIwBM5N0Y6QgBQFHW8Sarisfhe5qTNvSUtfu6DeEX8z7MzSuGPy4SuOQxc2%2FuWTTpPTk6vpcrMx5YaLJpM98yIxEa5Bc4WxwHUgH%2ByNzNWL0KhxSZWL6L4hJ7IKpF96XvctabFBME6NvzBppWfN7GlkwgbyjDy94TPirAgFvMMUTfsLv8raH9NlXkMvFvu8rfP4JgNv6989GhWaRMWv9lKcyd3QqGnGOuUkqg%2BJw77zmN4VDCoXa1tqNbPngyS5dfiVotznabyOZHKzEyEN1z4CM8Rs86pgNSd5XiqjStP%2FDr76BM0ndH19CA6TvaQXP9qaUHWDpbhZPdTTivRHSBOWYQ59zg6z%2F%2FAmeztO4kkxeo8Rd4gX9PfzsJv%2FZd6TNAumkkCzjv56Wu86gsalDIQQaZN9%2BYmLNeQiRZwnm%2BpOAuOXKHcCYaxA9zdVKJ%2B2gxEmmHv5OQGko5MV9XWEfacYW9BpyK%2BrtZx4GdZlm9fYKZ5u4x3g4%2Ba7qoq5prRDtXiPkEsjxIYm8CTQjnVMsS9iC1e%2FePg1sEAA4c0KT2YCSsPyL%2BzM02JSLQfDAtUdECk3rJHHwjDg%2FdLJBjqkAU2A8sFMQdXIglzLJk6AcFT%2Bf4PHeD%2FbARat%2B7tP1czgv9yPtk0FgEVxCOvb7NXE%2Bs4Ma9whQQbBMKe9LLWkqRRp4YwQACDbbDPN2ws0iKTa%2FaLgi%2BiEKylQYgeBAIC4cjDnP3dZubWuGds%2FntEytnX7e799R2y3KtEkK27%2BLACDEccNOwADM82lpS3UVQNV1R2tD%2F8WEYmVXHshNqABN6Fq90qO&X-Amz-Signature=bd38d3292b418ba8870f301f635fb1bfb71cfe9f941749393f2bd524d905a75e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGQ5APGN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T012112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPa3sNdP0zO79tTAr0zQ2IfDyQoeyEJp2R3CTmIWIGwAIhAMn41caX%2FtYn3cWynDoZ4zAM1M%2Be7IRLfMWwEaCWP4vmKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE5xfTXO4zL%2FviUqoq3AO%2Bezq1gY65U4RLwQNJPXn7pBvLb7hRelCHZwYllTvh5fezBEjoUbIwBM5N0Y6QgBQFHW8Sarisfhe5qTNvSUtfu6DeEX8z7MzSuGPy4SuOQxc2%2FuWTTpPTk6vpcrMx5YaLJpM98yIxEa5Bc4WxwHUgH%2ByNzNWL0KhxSZWL6L4hJ7IKpF96XvctabFBME6NvzBppWfN7GlkwgbyjDy94TPirAgFvMMUTfsLv8raH9NlXkMvFvu8rfP4JgNv6989GhWaRMWv9lKcyd3QqGnGOuUkqg%2BJw77zmN4VDCoXa1tqNbPngyS5dfiVotznabyOZHKzEyEN1z4CM8Rs86pgNSd5XiqjStP%2FDr76BM0ndH19CA6TvaQXP9qaUHWDpbhZPdTTivRHSBOWYQ59zg6z%2F%2FAmeztO4kkxeo8Rd4gX9PfzsJv%2FZd6TNAumkkCzjv56Wu86gsalDIQQaZN9%2BYmLNeQiRZwnm%2BpOAuOXKHcCYaxA9zdVKJ%2B2gxEmmHv5OQGko5MV9XWEfacYW9BpyK%2BrtZx4GdZlm9fYKZ5u4x3g4%2Ba7qoq5prRDtXiPkEsjxIYm8CTQjnVMsS9iC1e%2FePg1sEAA4c0KT2YCSsPyL%2BzM02JSLQfDAtUdECk3rJHHwjDg%2FdLJBjqkAU2A8sFMQdXIglzLJk6AcFT%2Bf4PHeD%2FbARat%2B7tP1czgv9yPtk0FgEVxCOvb7NXE%2Bs4Ma9whQQbBMKe9LLWkqRRp4YwQACDbbDPN2ws0iKTa%2FaLgi%2BiEKylQYgeBAIC4cjDnP3dZubWuGds%2FntEytnX7e799R2y3KtEkK27%2BLACDEccNOwADM82lpS3UVQNV1R2tD%2F8WEYmVXHshNqABN6Fq90qO&X-Amz-Signature=4510feccce1f94e61175635b0037aea05b5f4191780f1d3a230202e96ee25009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

