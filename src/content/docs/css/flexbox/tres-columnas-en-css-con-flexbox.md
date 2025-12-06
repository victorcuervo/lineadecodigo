---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJR3F7QF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb5eTzSTzcc5LW2s9H4sBsoNKticNP9nezgJIjSXWK%2BAIhAI7dlFCs8mFnzvtNihiHnZM2psSlHEo8QmUJv%2FpsOz3AKv8DCHoQABoMNjM3NDIzMTgzODA1Igxv0wNFZgCL%2BvXYI%2Bwq3AOvfi3R2zUd4fPCo7yfNk7OrfQv2cQR2TzC3xMEa8QQMDmPfH1PZjWF3O8IdaBa%2FQRgvEyIjjtGSyQQaiiVJBz5D48yGInTmCd1S46a6unIkNLZAre7OTO%2FI2NJoC17FnyVyX8iiDqsSzPvbvxXIFIH2dvhY%2BVRhi4O3dc5kSwrUuSq2BE7SrBZc00F6meWiLRlR2zr%2F%2FPtPtz4dFnNQKGfQdfl%2BxUwMckUhyocy0zS1IeeByz0nmvY6rrjlduxAr6rEWgfBEaKH9FE%2FaCdSpDyjEip0ymXNVJjoFmnoPwnX37T08bQxpShWcK%2FHyFElTilG4kIYCVkfXGMpSP8R7JfAI%2FH7C6ZdxEiOV%2BMTIF%2BDPScCJQgvn7fW344yfSDjnDRvxMBM1TPLEZghYHEZs8Q0TFaozSoBfPjEdS2%2F5a3FzX%2BDmSWTcW4rGp6143q%2FisnRk%2Bf0MPqChhv8b6S1L5mZBR7qZjRls57WW9S15g1FVuS0G9sw1FzPb3pb13w5bRbfS9oaNbdT3iVI6CoPvtcgw6GFgaDpAFpRBDUgpUMB5U9X5CyyHJGX0tuudK3e07KZIRkI8qRDWEOpVMbM%2BnLDz7xrIKKb9fHutNKp1Eg3evzsYc6Eybrrs%2BHljDVwtHJBjqkAcTu8OrpdNoop4Oj4uX3IDRDC0AVljHaKkpDNYK4C8QOtQJclQM%2FzkbDqfAyXcZqENDo6nKHVAEwLXbGQUjD4gvzwzzGKGat%2BVzDsZDVH6rKFD1MSOj108Xa0Ru3lIubqI8X9oWRFLjSs%2FgGqFVZSgWHiPRIALMwmkyciwVharoJOSVV7tnuzQoFp7J%2FBUQ2sbUYQfLYgzuV0xwit7oA9lmcS5Wn&X-Amz-Signature=ed0021040285920369d26fe8828363f700f9d8f6f0ba1665de0c9f00ff2183da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJR3F7QF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb5eTzSTzcc5LW2s9H4sBsoNKticNP9nezgJIjSXWK%2BAIhAI7dlFCs8mFnzvtNihiHnZM2psSlHEo8QmUJv%2FpsOz3AKv8DCHoQABoMNjM3NDIzMTgzODA1Igxv0wNFZgCL%2BvXYI%2Bwq3AOvfi3R2zUd4fPCo7yfNk7OrfQv2cQR2TzC3xMEa8QQMDmPfH1PZjWF3O8IdaBa%2FQRgvEyIjjtGSyQQaiiVJBz5D48yGInTmCd1S46a6unIkNLZAre7OTO%2FI2NJoC17FnyVyX8iiDqsSzPvbvxXIFIH2dvhY%2BVRhi4O3dc5kSwrUuSq2BE7SrBZc00F6meWiLRlR2zr%2F%2FPtPtz4dFnNQKGfQdfl%2BxUwMckUhyocy0zS1IeeByz0nmvY6rrjlduxAr6rEWgfBEaKH9FE%2FaCdSpDyjEip0ymXNVJjoFmnoPwnX37T08bQxpShWcK%2FHyFElTilG4kIYCVkfXGMpSP8R7JfAI%2FH7C6ZdxEiOV%2BMTIF%2BDPScCJQgvn7fW344yfSDjnDRvxMBM1TPLEZghYHEZs8Q0TFaozSoBfPjEdS2%2F5a3FzX%2BDmSWTcW4rGp6143q%2FisnRk%2Bf0MPqChhv8b6S1L5mZBR7qZjRls57WW9S15g1FVuS0G9sw1FzPb3pb13w5bRbfS9oaNbdT3iVI6CoPvtcgw6GFgaDpAFpRBDUgpUMB5U9X5CyyHJGX0tuudK3e07KZIRkI8qRDWEOpVMbM%2BnLDz7xrIKKb9fHutNKp1Eg3evzsYc6Eybrrs%2BHljDVwtHJBjqkAcTu8OrpdNoop4Oj4uX3IDRDC0AVljHaKkpDNYK4C8QOtQJclQM%2FzkbDqfAyXcZqENDo6nKHVAEwLXbGQUjD4gvzwzzGKGat%2BVzDsZDVH6rKFD1MSOj108Xa0Ru3lIubqI8X9oWRFLjSs%2FgGqFVZSgWHiPRIALMwmkyciwVharoJOSVV7tnuzQoFp7J%2FBUQ2sbUYQfLYgzuV0xwit7oA9lmcS5Wn&X-Amz-Signature=f8c69e58e266df2feeb055a29086b46e85543ea7d37a9ccd2a026e0cfa97ad40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

