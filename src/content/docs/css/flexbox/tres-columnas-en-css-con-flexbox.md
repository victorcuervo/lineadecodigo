---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W42JO6TK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzurU1PEeXqZkTfEruVO9lvGE4QH1oKKh0WNfojaRjuAiA6lhDSHJBa7GWthMOdmwFj56xpEK24PEstQvjoyzi2gSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPA5GsF9eYh916wuAKtwDGDdGnsw9HaiYM8WySXB5pz%2F4%2BefsMmPqVSIKZEXTa2mLqUgaq6GWXhHEV%2B8EOUgUgrsxUGi8vpnq%2BsLfakLJ0t33kKPe3tI8v3DvLtI7pNGf68hY152cdYjkasz4nDwBENy3rV75Qv0NNJJDQn7bJxZGuz9AmdA2mjthljJCLmKZv%2FvalAIPTveUXh7s1FF9vIWks5tuYZpp6Fpp6wTBXd8gRHUf0CreYAKh9aXnHNch0hapHZJ%2BP7tixgxuybsTUYixE1ljMHjFkQhU%2ByrSV0acK0Nnw4w0yWUkJDK4DoDh1H9qFQuMUXZND6zms6FabGA4LV%2BYY0I6eyMIXF5ATdWqta6jEj4g0uMBUA33t0UzbXoVZJEljZhaMSyu%2Bldu5iAXrEZLjXthkZNJwef%2FpWLq2fHke7gLTfFEt6y3VAsmWb1Ij251zQE9JKfOXYOxNavglrLw8W%2B5%2FfyXrsO3IBCJ%2BJW%2FKPG56%2FVRy%2FBEbDuf9CXjP3szKy9OjlrPfZMk599KzMcpqlHNGo4Gkn06lwGNIGTQWI5%2FTCSBpFEPC%2Fth2uvQm6Dn0vQyPQ4pMn%2FWIgTvIS0saR4KRIsR22spiBjwAEZAb0w4otbvy3ROGyF%2FDt4aIBrTj6r2wVAw8%2F3SyQY6pgHuDVox%2FMd5f67uJsa%2FH9cJED1OLp%2F3E5E6h66ZZpPCS6PHYYfUD3fds%2B2dtMDuApr7HLeoB7C8rmpIT8dLMBYuWGWxi9iWbW9IeSU%2Fb%2F9x9IF9JZiGgjItx%2FYavQnSJJSizTuSr3IiaabIRyhB2doFV8BKlvtAoBOEb%2FeUq%2F4vUKhUXLfxa7%2B4uynsRAlM65uZTX12K%2B27B2M22g%2BX4f8%2FEavbEclr&X-Amz-Signature=57d41135931c6880922fc3f504cbd8f7c84637c736e6dbbb156d6f8d9a0a8049&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W42JO6TK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzurU1PEeXqZkTfEruVO9lvGE4QH1oKKh0WNfojaRjuAiA6lhDSHJBa7GWthMOdmwFj56xpEK24PEstQvjoyzi2gSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPA5GsF9eYh916wuAKtwDGDdGnsw9HaiYM8WySXB5pz%2F4%2BefsMmPqVSIKZEXTa2mLqUgaq6GWXhHEV%2B8EOUgUgrsxUGi8vpnq%2BsLfakLJ0t33kKPe3tI8v3DvLtI7pNGf68hY152cdYjkasz4nDwBENy3rV75Qv0NNJJDQn7bJxZGuz9AmdA2mjthljJCLmKZv%2FvalAIPTveUXh7s1FF9vIWks5tuYZpp6Fpp6wTBXd8gRHUf0CreYAKh9aXnHNch0hapHZJ%2BP7tixgxuybsTUYixE1ljMHjFkQhU%2ByrSV0acK0Nnw4w0yWUkJDK4DoDh1H9qFQuMUXZND6zms6FabGA4LV%2BYY0I6eyMIXF5ATdWqta6jEj4g0uMBUA33t0UzbXoVZJEljZhaMSyu%2Bldu5iAXrEZLjXthkZNJwef%2FpWLq2fHke7gLTfFEt6y3VAsmWb1Ij251zQE9JKfOXYOxNavglrLw8W%2B5%2FfyXrsO3IBCJ%2BJW%2FKPG56%2FVRy%2FBEbDuf9CXjP3szKy9OjlrPfZMk599KzMcpqlHNGo4Gkn06lwGNIGTQWI5%2FTCSBpFEPC%2Fth2uvQm6Dn0vQyPQ4pMn%2FWIgTvIS0saR4KRIsR22spiBjwAEZAb0w4otbvy3ROGyF%2FDt4aIBrTj6r2wVAw8%2F3SyQY6pgHuDVox%2FMd5f67uJsa%2FH9cJED1OLp%2F3E5E6h66ZZpPCS6PHYYfUD3fds%2B2dtMDuApr7HLeoB7C8rmpIT8dLMBYuWGWxi9iWbW9IeSU%2Fb%2F9x9IF9JZiGgjItx%2FYavQnSJJSizTuSr3IiaabIRyhB2doFV8BKlvtAoBOEb%2FeUq%2F4vUKhUXLfxa7%2B4uynsRAlM65uZTX12K%2B27B2M22g%2BX4f8%2FEavbEclr&X-Amz-Signature=f90ee9128dc71c545c33bc4e3731f3d89fb349a5634c6611b0e4fc0b080a7222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

