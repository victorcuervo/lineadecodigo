---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URZT676A%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T003155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGE0hMoTa8pEvqDzdJbVaKpXOTOozbeMirtWbGGpbJHnAiBJOD4BhXKAkXwwvwlRmz%2FViIwH8hfxHByF7V3t6GeNRCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxQApjflWMuxGl%2Fl8KtwD31n8iHmX9c2yF7%2FnBFvtj4tJDU2N4HVGnbUsIZSiihXLhWywcNI3cJydstFFKxaiVmnCbK0Kjkb1udIGQmXrJi8ognHNx%2F4dJd59Eqohefuqcma6JR0B9Kp7FXvKxKVeLp%2FoSqfStatETcCoXRNEKRZCLSQWtU2DcjfZDa3INUadj%2FKEP%2B2eo2WoRnzb3bAI%2FAdPcYdM6qkNhA6xnyd0bM1M0RvrW8l06dVy%2BARP4ZwQtBWtrQDGc2jwyHLtvVzpPLYt9CvCaYEBCI7i6Xlid%2F%2F6UOQo51Z14rMbfL9urxjY%2Bst7%2BzcRVydZSpiVDa1RJDFTxFjuJjj2RKpY6uQ2%2B9JKVj5U77%2BGUerWSklzGFA7IAbxV4zthKDUz47%2FoVbT%2Bg1XhcFgkNGyYAvf9pAhEo4F31Q7OVY7o3Z%2F6vmHc4h0rXaczEcCkTBmiVCwWcENPwZPPXE6SsXf7BpOjwGJSoY3y77%2BpbnRv7GOCSZ7wyuDoP45LSbd5CFGmRMDpK%2F9izsblwjjjfeVaaXaPWpgOf0UJxkzC1n4PPJcjjB2AzQx0W7mhVZ9Wm0oh5ncLnQvgvSsS66qQb0HkHRe4ztgA3pwQ6cK4f8li%2FXzNi6mgNJuIrIlvc2mge59I1UwgKLYyQY6pgE8Lt%2FdnvJRA80%2FXmFb9YlfHk0Nrb2gDfEPiJoh97stxkRETowfvTu%2Bw5X%2FeK6Y6xdBTshNysRgi0UYDF32cir1cS%2B5VbWPSI%2F4Ld%2FhorKc01YKGaF0NcKsnlRfpQQtCJ2rYZJcmyx3p71fI9li%2BXGPRP1ndIba%2F5i3v69QoHrc7YQ90y0HQHu9MhwR9Z5s2K0w0m3w6e%2Bb2wN1L94jy5K5ZhKvm1Jq&X-Amz-Signature=2ae59e307783f0e5874d9b1a041a067eb28733ad88c00e71acb88524d2660fcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URZT676A%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T003155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGE0hMoTa8pEvqDzdJbVaKpXOTOozbeMirtWbGGpbJHnAiBJOD4BhXKAkXwwvwlRmz%2FViIwH8hfxHByF7V3t6GeNRCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxQApjflWMuxGl%2Fl8KtwD31n8iHmX9c2yF7%2FnBFvtj4tJDU2N4HVGnbUsIZSiihXLhWywcNI3cJydstFFKxaiVmnCbK0Kjkb1udIGQmXrJi8ognHNx%2F4dJd59Eqohefuqcma6JR0B9Kp7FXvKxKVeLp%2FoSqfStatETcCoXRNEKRZCLSQWtU2DcjfZDa3INUadj%2FKEP%2B2eo2WoRnzb3bAI%2FAdPcYdM6qkNhA6xnyd0bM1M0RvrW8l06dVy%2BARP4ZwQtBWtrQDGc2jwyHLtvVzpPLYt9CvCaYEBCI7i6Xlid%2F%2F6UOQo51Z14rMbfL9urxjY%2Bst7%2BzcRVydZSpiVDa1RJDFTxFjuJjj2RKpY6uQ2%2B9JKVj5U77%2BGUerWSklzGFA7IAbxV4zthKDUz47%2FoVbT%2Bg1XhcFgkNGyYAvf9pAhEo4F31Q7OVY7o3Z%2F6vmHc4h0rXaczEcCkTBmiVCwWcENPwZPPXE6SsXf7BpOjwGJSoY3y77%2BpbnRv7GOCSZ7wyuDoP45LSbd5CFGmRMDpK%2F9izsblwjjjfeVaaXaPWpgOf0UJxkzC1n4PPJcjjB2AzQx0W7mhVZ9Wm0oh5ncLnQvgvSsS66qQb0HkHRe4ztgA3pwQ6cK4f8li%2FXzNi6mgNJuIrIlvc2mge59I1UwgKLYyQY6pgE8Lt%2FdnvJRA80%2FXmFb9YlfHk0Nrb2gDfEPiJoh97stxkRETowfvTu%2Bw5X%2FeK6Y6xdBTshNysRgi0UYDF32cir1cS%2B5VbWPSI%2F4Ld%2FhorKc01YKGaF0NcKsnlRfpQQtCJ2rYZJcmyx3p71fI9li%2BXGPRP1ndIba%2F5i3v69QoHrc7YQ90y0HQHu9MhwR9Z5s2K0w0m3w6e%2Bb2wN1L94jy5K5ZhKvm1Jq&X-Amz-Signature=b0194ef7bfeecbb9139c83ee04c77e57d2f81a8debb77c3264c2409b9709bea4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

