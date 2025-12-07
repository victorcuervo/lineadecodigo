---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RS2MY73%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T060337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI09hYLS2iQ8WUgxPC8NdZBjQ48xeGKSwvGwwxprYn7wIgQDlhZVWYRXQtvEY6CmEoxSVelmQHbayIOtE%2BzV4DCqwqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkmntumdy4HAtkimSrcA%2Fln59lTgxbMHkihm6aQvo7QdK9kcnZdmlI6%2B3RvhHxVx0dyvuGs3rmLp3SSK%2Foo4KMB5%2F%2FQvn5f1idXK8ymMsSE%2FDGgYwYG2VvUlAZCfWI%2FjuctZ4GKNXWMMaI6BiaCHaptg%2FnqH6QxT31l2X7Tnj3UAcuOVcudtnIgjRIC1lueHdGWQpGCGjeV9kMi7oYBYlJijr9hbyPJe7PoWsfMoAFkK9YNmhftAdVht%2FR0oFLdV7ozEuESkeg3%2B2H%2Fd7L8EDhHPsPBJkSEMjyzyBhSepUHF8wdmDrVM0uaj%2BuzHJHEEj8i2AHgfV9%2BWlDo7I%2B%2FoHsioZwlfVWnIIWwfbZumWqozCCVamlwhk1e1U%2FsltB6VT17IrwZkLBnKgUSMJFhCbxp3unD0V7uIiGlnP7M1Q8bsvXGTm4SN0Tc4U6utafWsJKtmNGjidEx%2F8l8B%2FXpebK4tN%2FkhYqMsYV24ASOtLmApb9G2b5sZrbbTBGiVtYLoKY2ogMHdEPzEEyfOz35ypIRf9Z1jEQydmUczk0Z%2BYvq9Gi5s2q9oAkKEaSr%2FXgT6gueFSd2nx%2FbXjCTnz0b2s6BcGATNBcZzdP4DWZVu2C2TbH9cF%2BCiPVtgBDpy7H2KFZckbYoC51CtkKXMPaj1MkGOqUB2IMyQDDetm%2FNas4FVS%2FSW1Ry5eM2svCWDKv6J65m0ct6WwRwxDsnIm2Xi9yS87qBKoFoHKDCgRQCspF%2BOvT5M%2FxhXuBqMj8u33yaDafL70S50qS55wpDRxae5l70QwSMb00eECHCRkcnZlQSmAA%2FC2ESJlmb5en8yqa5vkErT1m9lDIKGFTMHhm4p%2B3HQKvM2H8VhU%2F4zsvRjzVgQoBX9bBA%2FLip&X-Amz-Signature=2c600636e5b3814d2ea26ddfd3d578caa36afea56676e5dd7cdb701a6b260259&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RS2MY73%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T060337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI09hYLS2iQ8WUgxPC8NdZBjQ48xeGKSwvGwwxprYn7wIgQDlhZVWYRXQtvEY6CmEoxSVelmQHbayIOtE%2BzV4DCqwqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkmntumdy4HAtkimSrcA%2Fln59lTgxbMHkihm6aQvo7QdK9kcnZdmlI6%2B3RvhHxVx0dyvuGs3rmLp3SSK%2Foo4KMB5%2F%2FQvn5f1idXK8ymMsSE%2FDGgYwYG2VvUlAZCfWI%2FjuctZ4GKNXWMMaI6BiaCHaptg%2FnqH6QxT31l2X7Tnj3UAcuOVcudtnIgjRIC1lueHdGWQpGCGjeV9kMi7oYBYlJijr9hbyPJe7PoWsfMoAFkK9YNmhftAdVht%2FR0oFLdV7ozEuESkeg3%2B2H%2Fd7L8EDhHPsPBJkSEMjyzyBhSepUHF8wdmDrVM0uaj%2BuzHJHEEj8i2AHgfV9%2BWlDo7I%2B%2FoHsioZwlfVWnIIWwfbZumWqozCCVamlwhk1e1U%2FsltB6VT17IrwZkLBnKgUSMJFhCbxp3unD0V7uIiGlnP7M1Q8bsvXGTm4SN0Tc4U6utafWsJKtmNGjidEx%2F8l8B%2FXpebK4tN%2FkhYqMsYV24ASOtLmApb9G2b5sZrbbTBGiVtYLoKY2ogMHdEPzEEyfOz35ypIRf9Z1jEQydmUczk0Z%2BYvq9Gi5s2q9oAkKEaSr%2FXgT6gueFSd2nx%2FbXjCTnz0b2s6BcGATNBcZzdP4DWZVu2C2TbH9cF%2BCiPVtgBDpy7H2KFZckbYoC51CtkKXMPaj1MkGOqUB2IMyQDDetm%2FNas4FVS%2FSW1Ry5eM2svCWDKv6J65m0ct6WwRwxDsnIm2Xi9yS87qBKoFoHKDCgRQCspF%2BOvT5M%2FxhXuBqMj8u33yaDafL70S50qS55wpDRxae5l70QwSMb00eECHCRkcnZlQSmAA%2FC2ESJlmb5en8yqa5vkErT1m9lDIKGFTMHhm4p%2B3HQKvM2H8VhU%2F4zsvRjzVgQoBX9bBA%2FLip&X-Amz-Signature=401ef7326813fc2a493a7e2e1d879829648ffdde33894fc28a07349cc46a4c17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

