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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCPVGDAL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T054353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIE%2FHAzf61F2ktWD9d8913c2gI58ta9S8YBO%2F%2FkU9heA0AiEAhV2uUfj3AePBWPj5gQvp%2BoVHbTUXO8taIYxqHeSIadAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMU%2Bo%2F6omZfYPvHXvircA7TRGCfCpOtF4HgiJ5UpZTqhNYWTlNlyCkSNPUB7C7BsMI0hMKmoA%2BkUABVOHnlHLaSmt4KVT%2BFNulYNZXc9ttjyVTtJRXq%2BGD1IGzUUj2IhwxSeW0ZWUl1ncZSPkiPEt121WVDwtEC97PLwqb6l3OM5tZvyFg0UxBx5nvpuuDOP5WepxRAODZP7zmP4Ywn36WjhF5%2Bx%2BlbIEWwrDY2sBwovlanNebY%2BGwDxuSb0bTIR%2BvNzcvd33cg7Bq%2Fw2EjlLsEWoPfCay1HlloX1K8UMXnQowWjeIp5AFAKiBsFjlEx1LMu1Xx13%2FXo65jo5YZpLCF1k1HXPTnTyBkcXmgh9rue28OkTGIUsMFtZnk5ua5xg9CLgVz71%2FJO3pU4rxxhXFc2QNfoy0IirCk1%2BaVxCpUu8jIzR9HlyOD3cdURix4weOdnI8n5wcum65atxYrK04dc%2FsoZSK6VpPnO1VpLlMBJ6SMIYr5DHeRAiz%2F9MEQMMk4hYJVfHCTtrOFKBM7xC7Uvy6rqcyxVY%2F8WVjJleFUrLOHQhXWr0VCO0CXmsD9RbYf3s%2BI2z%2Fb5aBnLBZosK4vx9VcdTef9%2BsR%2FfHI5VBTwIdjU69tXX9Wio%2F32hE%2FZiMsttPp9alAF7DwmMJuav8kGOqUBNRB1RGY0NBDO9V%2BW7PXf06hQINojG2OkUFfVYadKUJNgXfX%2Bn%2FoiYy5a3oVpd30ilD2sbS4dHQCJbCkji9%2BD2Zis40jdEsDvxNF8doX7fUiTw6MO37PmMEufQwqHHESAHugQoFv7CILCGqb%2BNLzbqwgtJjmCC6Fv%2FoLQYFsmj1a2aDd9iMNbvO%2B1zLz4AB%2Ftu3oFn6PkfbuLMSvSNFOR76j7%2FDcl&X-Amz-Signature=de55c2302e57dbb40a7139e4653cbe0a19df347daca786b2cd6dc76c05957c3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCPVGDAL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T054353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIE%2FHAzf61F2ktWD9d8913c2gI58ta9S8YBO%2F%2FkU9heA0AiEAhV2uUfj3AePBWPj5gQvp%2BoVHbTUXO8taIYxqHeSIadAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMU%2Bo%2F6omZfYPvHXvircA7TRGCfCpOtF4HgiJ5UpZTqhNYWTlNlyCkSNPUB7C7BsMI0hMKmoA%2BkUABVOHnlHLaSmt4KVT%2BFNulYNZXc9ttjyVTtJRXq%2BGD1IGzUUj2IhwxSeW0ZWUl1ncZSPkiPEt121WVDwtEC97PLwqb6l3OM5tZvyFg0UxBx5nvpuuDOP5WepxRAODZP7zmP4Ywn36WjhF5%2Bx%2BlbIEWwrDY2sBwovlanNebY%2BGwDxuSb0bTIR%2BvNzcvd33cg7Bq%2Fw2EjlLsEWoPfCay1HlloX1K8UMXnQowWjeIp5AFAKiBsFjlEx1LMu1Xx13%2FXo65jo5YZpLCF1k1HXPTnTyBkcXmgh9rue28OkTGIUsMFtZnk5ua5xg9CLgVz71%2FJO3pU4rxxhXFc2QNfoy0IirCk1%2BaVxCpUu8jIzR9HlyOD3cdURix4weOdnI8n5wcum65atxYrK04dc%2FsoZSK6VpPnO1VpLlMBJ6SMIYr5DHeRAiz%2F9MEQMMk4hYJVfHCTtrOFKBM7xC7Uvy6rqcyxVY%2F8WVjJleFUrLOHQhXWr0VCO0CXmsD9RbYf3s%2BI2z%2Fb5aBnLBZosK4vx9VcdTef9%2BsR%2FfHI5VBTwIdjU69tXX9Wio%2F32hE%2FZiMsttPp9alAF7DwmMJuav8kGOqUBNRB1RGY0NBDO9V%2BW7PXf06hQINojG2OkUFfVYadKUJNgXfX%2Bn%2FoiYy5a3oVpd30ilD2sbS4dHQCJbCkji9%2BD2Zis40jdEsDvxNF8doX7fUiTw6MO37PmMEufQwqHHESAHugQoFv7CILCGqb%2BNLzbqwgtJjmCC6Fv%2FoLQYFsmj1a2aDd9iMNbvO%2B1zLz4AB%2Ftu3oFn6PkfbuLMSvSNFOR76j7%2FDcl&X-Amz-Signature=f28b0f49dae349e2c0b614c24efb9c4170d5441c7719f94341446947a41faf1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

