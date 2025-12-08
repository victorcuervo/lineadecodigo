---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WV4QBQH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T004751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiEWXfnb85gZWHahwvGFzPpXYdfKComD5YxLZjcCsbuAIgeHTEthvNjNFh09flwyq2wgmUvjjP46Oeg8O%2Bnc29vtkqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwBWRdF34lQFyW64CrcA2KIQ7kAlSLQTP7Xfue9pZUaY%2FAZvKdzX9hqpZiN%2B%2FlErWVhmA5M3RRh1kq16kZv0GZb%2Fy9y%2BZEOt3zkhGW%2FjRlyq5U5v5X4HY5XXoxwjflFv0OmpGM7TOE2TEZm7%2FV40bnUChAXLbbFM18yluCWN4XcwURhjduDZrBAKtlnKy%2BrxZCCqPgmOCr4UfERhN8B%2FkJFHz98ugKU04WUgtY6CsGnbcT1ihYT7MovvE%2F9ioFRIKost6mCrikhiwevRyS20TXlSLv%2BaDH0woRgrk3uinffZuoxGCQQJCJO18gpVZ8G1Edyexe%2F8yehLcloaiEOd5SeV9kgx2sCZwZknpDRJA%2BYYGojDqxCeAzi9OLh3GZy7P2vfjr4vJP3wKl51ua5C%2F50wpvvfYIOx2gQnbp%2FMxDSC%2FONbFww%2Bhknh5SpgIIxnsXC5LEC5zgVAVXFNhmarklgehwC5xQ%2BJrltE5U%2F%2BW7c5hfzqIa19Q8lPenZpJmzpE7VYD4Ij8hG9ENbTQ6R2291aIbP1xWbwJAFDQCto3zo4glRUgEIXLOjLPPpK9jbz6tDbbgH9RgVfR%2FY54x6z%2FYMb7DRw8Mzmh%2FOP9BVEzsJ4%2F3WreUn%2FlGsDU%2BCR3TOuJnRTtGW4yLM%2FHKeMPqh2MkGOqUBtE8Ik3w616xvDn6%2B%2FcITZmcfyac%2BjSaCdp1UlZidmZ3ES%2FSR9Tj52rZ33CyHKr7UDoX4WhVwjueMG1bdnDcd%2B2VxDovGVakctyRRctopvPJIuOQPH3c1EWH646QfCJvqnt7lXDCdIBdW2txMXSbj5m3xhKrfKjAfCEghXSF4Vg7d5izrb75HYT0CPLmDq6sa%2BKawV9VJGZmWHRhaVNBN85xnHkjj&X-Amz-Signature=c7dda7eb0ecd88ca7e751221474d40db72d1ba84e6809390eb0108ab8ac0d931&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WV4QBQH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T004751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiEWXfnb85gZWHahwvGFzPpXYdfKComD5YxLZjcCsbuAIgeHTEthvNjNFh09flwyq2wgmUvjjP46Oeg8O%2Bnc29vtkqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwBWRdF34lQFyW64CrcA2KIQ7kAlSLQTP7Xfue9pZUaY%2FAZvKdzX9hqpZiN%2B%2FlErWVhmA5M3RRh1kq16kZv0GZb%2Fy9y%2BZEOt3zkhGW%2FjRlyq5U5v5X4HY5XXoxwjflFv0OmpGM7TOE2TEZm7%2FV40bnUChAXLbbFM18yluCWN4XcwURhjduDZrBAKtlnKy%2BrxZCCqPgmOCr4UfERhN8B%2FkJFHz98ugKU04WUgtY6CsGnbcT1ihYT7MovvE%2F9ioFRIKost6mCrikhiwevRyS20TXlSLv%2BaDH0woRgrk3uinffZuoxGCQQJCJO18gpVZ8G1Edyexe%2F8yehLcloaiEOd5SeV9kgx2sCZwZknpDRJA%2BYYGojDqxCeAzi9OLh3GZy7P2vfjr4vJP3wKl51ua5C%2F50wpvvfYIOx2gQnbp%2FMxDSC%2FONbFww%2Bhknh5SpgIIxnsXC5LEC5zgVAVXFNhmarklgehwC5xQ%2BJrltE5U%2F%2BW7c5hfzqIa19Q8lPenZpJmzpE7VYD4Ij8hG9ENbTQ6R2291aIbP1xWbwJAFDQCto3zo4glRUgEIXLOjLPPpK9jbz6tDbbgH9RgVfR%2FY54x6z%2FYMb7DRw8Mzmh%2FOP9BVEzsJ4%2F3WreUn%2FlGsDU%2BCR3TOuJnRTtGW4yLM%2FHKeMPqh2MkGOqUBtE8Ik3w616xvDn6%2B%2FcITZmcfyac%2BjSaCdp1UlZidmZ3ES%2FSR9Tj52rZ33CyHKr7UDoX4WhVwjueMG1bdnDcd%2B2VxDovGVakctyRRctopvPJIuOQPH3c1EWH646QfCJvqnt7lXDCdIBdW2txMXSbj5m3xhKrfKjAfCEghXSF4Vg7d5izrb75HYT0CPLmDq6sa%2BKawV9VJGZmWHRhaVNBN85xnHkjj&X-Amz-Signature=6bb7210d5e4cf0f43719c15a8032998a51bb7a7b1da4a1bbd4fe2a18dea29ca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

