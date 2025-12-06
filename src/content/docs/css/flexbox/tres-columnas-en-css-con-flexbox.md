---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6JGYDZD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T230022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd3BLPn4GtYX%2FTjdxi7qshbUr5I6nGmBA0ehV1VQYb7gIhAPUy9D0K%2FwYKMzbZuT0PFnq1Cbv8CIEA2qDKt%2FSfM3tzKv8DCH8QABoMNjM3NDIzMTgzODA1IgxulX04Ke%2B7lDTqODwq3AM7ncGhIJ%2BBQbHiYhLfUjcNs6zosMrYHYBqQdL1R6TrfujWXeGH65zOmnQ6vjimfMYR0co3GMAlCIzQY%2FMjMdfi2XX73jjYp93Zh7BEQNL9ETA7%2BLnmK7%2FP%2F0IAY1kl1MOj8AMkztzjifQElM4NCo9QceOIeQ8aJWBlgAazVBo6M9pFCr3oUy%2FQHZfAX%2FKWECDtcmP0bSSKHaCSjHBnX9%2FqQuNrR%2BoEErXvt5YoIyNqglED83BZh26jJW2R0Cwku%2BK8YZk39r4hJsVUkt4sXunl25VngNEK8R3qTuNU2F5tU0ouMwnmBFnRJYWqsvx0LrwETRIL8fh%2FIhcQ%2F1pTE%2BMnCgrPKdEpQzCrl4nxlN%2FDxzT2mqHThIi52sOZb2dUnabzL2%2B6PldhTk5NWy1eVl0DH4wzUXKQa32lyAtVgcDSNw7ekW1VrKqUsiRvhqjivPqLBzBNelLVGQlTAsm4YLm1G5LLLziRvl5VMb2sxyuuTa6wo5SRYNac5UBJbpGhbkJJd1ynTEB0cUjgxhgsTsdEKDYoN0vof8Zm0Md%2B8fPzmx7g5%2BtgGzzA2OrANkMgYqRu8ToPfWLAHBdkC3ituxMuHGc4OsLcwRBwTT7d%2BpduFUuAjsWv742xYn55VzD%2F0tLJBjqkAbaoJ33g66JTxcufAdLE76QVtoeEB1bml4oaucRAhmiiJep%2BtzrKacPpwz5GFu3rLNUU3lKWsSCwhFWuQLtq5%2FsnWDL6IyMZluIzx7AP6xvWXQGRoYMj%2BBZd1fMK3HoF49Y1y3dMIyttG9a4pMdXeMHg6jiCQtg%2FRFVzCUSXuHz%2B6qYfTueOC%2FdAr1o%2BMu11oHQWEilBPZRMSQmTdafSyyvLTd%2FM&X-Amz-Signature=1a3d87343adf0b10375966b322ee9a54ddcda9237a23efe68bfb5f1527d3c3a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6JGYDZD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T230022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd3BLPn4GtYX%2FTjdxi7qshbUr5I6nGmBA0ehV1VQYb7gIhAPUy9D0K%2FwYKMzbZuT0PFnq1Cbv8CIEA2qDKt%2FSfM3tzKv8DCH8QABoMNjM3NDIzMTgzODA1IgxulX04Ke%2B7lDTqODwq3AM7ncGhIJ%2BBQbHiYhLfUjcNs6zosMrYHYBqQdL1R6TrfujWXeGH65zOmnQ6vjimfMYR0co3GMAlCIzQY%2FMjMdfi2XX73jjYp93Zh7BEQNL9ETA7%2BLnmK7%2FP%2F0IAY1kl1MOj8AMkztzjifQElM4NCo9QceOIeQ8aJWBlgAazVBo6M9pFCr3oUy%2FQHZfAX%2FKWECDtcmP0bSSKHaCSjHBnX9%2FqQuNrR%2BoEErXvt5YoIyNqglED83BZh26jJW2R0Cwku%2BK8YZk39r4hJsVUkt4sXunl25VngNEK8R3qTuNU2F5tU0ouMwnmBFnRJYWqsvx0LrwETRIL8fh%2FIhcQ%2F1pTE%2BMnCgrPKdEpQzCrl4nxlN%2FDxzT2mqHThIi52sOZb2dUnabzL2%2B6PldhTk5NWy1eVl0DH4wzUXKQa32lyAtVgcDSNw7ekW1VrKqUsiRvhqjivPqLBzBNelLVGQlTAsm4YLm1G5LLLziRvl5VMb2sxyuuTa6wo5SRYNac5UBJbpGhbkJJd1ynTEB0cUjgxhgsTsdEKDYoN0vof8Zm0Md%2B8fPzmx7g5%2BtgGzzA2OrANkMgYqRu8ToPfWLAHBdkC3ituxMuHGc4OsLcwRBwTT7d%2BpduFUuAjsWv742xYn55VzD%2F0tLJBjqkAbaoJ33g66JTxcufAdLE76QVtoeEB1bml4oaucRAhmiiJep%2BtzrKacPpwz5GFu3rLNUU3lKWsSCwhFWuQLtq5%2FsnWDL6IyMZluIzx7AP6xvWXQGRoYMj%2BBZd1fMK3HoF49Y1y3dMIyttG9a4pMdXeMHg6jiCQtg%2FRFVzCUSXuHz%2B6qYfTueOC%2FdAr1o%2BMu11oHQWEilBPZRMSQmTdafSyyvLTd%2FM&X-Amz-Signature=af77e5f468db06aceb5289bfb0dd249b8d40beb13654600ff6e6547f01fcd1da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

