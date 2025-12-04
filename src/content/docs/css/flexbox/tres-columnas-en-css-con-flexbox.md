---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M32BZZV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIFxHmOA1C357nmJLz8pv%2Fy6oNTwaR%2F8JaLACUaOJN4yWAiEA3FXlavpdD5%2Bt6S%2BXZKH26dQsh2%2B%2FZxSVGCHFQbmbipMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDNoBUoTXIBprbAWJ6yrcA%2Fd4Yn0xcw44yj1AxxL%2FnSNIEZNQCUARGhWIY8TEcHlk13yTgXRoSHxy%2BQDTVwN7osCDzemcfGFQqK9dxAvthcUagZIPJdWoGV54MmYkBHOEUTu%2F%2Bi2BSeL6KX%2FXINstZbl3VMPPllKqoAsdWCQ3og4pM893tCDRUP90ueznoDfRbxbbd6qjJ9jlJQgBfrXXAfCAzVgytEL1GWkZS%2BwvwPOQV8DaozSft%2BplyP0J897moCJqjugyfrT6iSlfnMa4rOBqFh2DNUVeQv271Vw7HsNeaLqYqiD4ZxODruVgrfS2dPatjeCrEwGTzPYWOSeWZbft1Ltp53NeCzncMNCjR7cRCOqnJppCl0ivKIp8KJQXBQ9knewP5fLDFeHymnW341BeXLWg%2FvaNfYnwz9rGdlLst%2FT%2BPQ4uJieQE%2B94qMpY%2FsGQkcpIQCBO62VOrXemH0sH%2BD7k8sDFQOjjIrVUm83fI5Cdy7Pj6QF8FaTZR95Bi6vuvFPGgifLea81pkrQ1tfb6N1Xro6HEk7a37QBOEKvJ8W1ggp7VMw4ZHmaKf2SUvCaWgdAd0CuWTOtuJ0gxrc3RWAbQHdSy8vZOWnSqAty02utNxowS42sD5Q3T03I6w8zPpdrBdO7exFIMIWFxckGOqUBfLoouYnk4xRQRhUGGLqo3viAgF7MRz9XT9mBZEcSLY31skUrnQDfcgcxKL3xHhE7cCG4xdsOLKoQk26wLB9%2BmFTotOJl4pLm61uI195%2Ft%2FBT90a3gC%2BfDDLuLuogemiAi27vdA27%2FfqewLCsPSzcBuipSOWyn3BCxsk1ZErWX7WwV8dwTkJfUQsjK9peurr4dZmDfLx5E%2FeTkBkOgNRxKGblsWyQ&X-Amz-Signature=0ba9b41fa912e72f24f591cc6dabfe197993f77e915bb9c7102f63f6302a4c6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M32BZZV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIFxHmOA1C357nmJLz8pv%2Fy6oNTwaR%2F8JaLACUaOJN4yWAiEA3FXlavpdD5%2Bt6S%2BXZKH26dQsh2%2B%2FZxSVGCHFQbmbipMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDNoBUoTXIBprbAWJ6yrcA%2Fd4Yn0xcw44yj1AxxL%2FnSNIEZNQCUARGhWIY8TEcHlk13yTgXRoSHxy%2BQDTVwN7osCDzemcfGFQqK9dxAvthcUagZIPJdWoGV54MmYkBHOEUTu%2F%2Bi2BSeL6KX%2FXINstZbl3VMPPllKqoAsdWCQ3og4pM893tCDRUP90ueznoDfRbxbbd6qjJ9jlJQgBfrXXAfCAzVgytEL1GWkZS%2BwvwPOQV8DaozSft%2BplyP0J897moCJqjugyfrT6iSlfnMa4rOBqFh2DNUVeQv271Vw7HsNeaLqYqiD4ZxODruVgrfS2dPatjeCrEwGTzPYWOSeWZbft1Ltp53NeCzncMNCjR7cRCOqnJppCl0ivKIp8KJQXBQ9knewP5fLDFeHymnW341BeXLWg%2FvaNfYnwz9rGdlLst%2FT%2BPQ4uJieQE%2B94qMpY%2FsGQkcpIQCBO62VOrXemH0sH%2BD7k8sDFQOjjIrVUm83fI5Cdy7Pj6QF8FaTZR95Bi6vuvFPGgifLea81pkrQ1tfb6N1Xro6HEk7a37QBOEKvJ8W1ggp7VMw4ZHmaKf2SUvCaWgdAd0CuWTOtuJ0gxrc3RWAbQHdSy8vZOWnSqAty02utNxowS42sD5Q3T03I6w8zPpdrBdO7exFIMIWFxckGOqUBfLoouYnk4xRQRhUGGLqo3viAgF7MRz9XT9mBZEcSLY31skUrnQDfcgcxKL3xHhE7cCG4xdsOLKoQk26wLB9%2BmFTotOJl4pLm61uI195%2Ft%2FBT90a3gC%2BfDDLuLuogemiAi27vdA27%2FfqewLCsPSzcBuipSOWyn3BCxsk1ZErWX7WwV8dwTkJfUQsjK9peurr4dZmDfLx5E%2FeTkBkOgNRxKGblsWyQ&X-Amz-Signature=4168694aae299e25c62f411b3f99db415d7639feb0a82b9c5def817e266a5880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

