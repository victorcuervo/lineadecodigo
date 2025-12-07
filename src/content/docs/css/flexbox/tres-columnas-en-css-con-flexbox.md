---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LTH5VML%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T163402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FCsyfkGmaiV%2FPo2%2F%2FgVpxFLSzMxkKRHXrDVi7kN2MpAIhAOmEJ3NsdOfRzzf46%2FjWr%2BVI%2B1cU0UfBQ0r9nkJ3qCdOKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3rfcZIebIDwapr8sq3ANap0IzgKP7hYnANYMxlhdum4YXibJBsqF7MLYBGXgPcTfIbtbO43v8dqXPpcUAvccogVBgJhPdzCMKOt9tdQ6yCu3eKIV5Hv1CZXNgP798M20CvR8uYfQfO13vlVD5KBYZArP6d5xSMqws9E1oM770Q1%2BQWCwhre5sM2Hu3xA69ZvGvnm%2B98SF1NX1LxrBZi7nWG56ozREvm5eULjbeAL1kkAI0fNnz5YbDDFtgMib5w%2F%2B6Kq%2FCQBLY6Jo6pYmyKKSgiK8xY1O3OAYeEs0wgn8UI07RV%2BVOo9LYkvdJ8PL3sOixYTcnAffzN1U1ZVvn5HzjDZNXnHtNmYMdxUzJ2p%2FdJcWuE6eOpjD6ej4%2FeueQi25NDmUoyo2jsfW1TvNFF%2FUDjPmhK%2Fgamw9d7xU5gN1EjwtdaEs57jxST%2FVIbFJjKtCtx1oI6lCPRAdLebLtDcHlmAbc7XBjrZD2cwo%2FgcKbVKuQ7iXrIy2aq2ASwjnraLoQCp%2BXBoe5MByStqziyQhJJhZfeVGT4qcc7GDw4DJ%2B2XsUJItxTBt0C%2F67vHLGMdX%2BnnkOgZAUnymNd3Nx5ATWVm6P5uT14XfdO0m1C7pwSPVhpywFMo6AGZBlDZCLKMuitb43B%2BsxgrpcTDQutbJBjqkAcEd9E9V4acdW7Z%2Bj4pl87PtngMdKGYmy%2FJCIRXoG9srvE706Zp709Ts6sV%2BINGUaLi4hV%2BnFCNfPFXCRzaWn4xkiWAZCHsbF7eWdLzJDFBuxtbdkpomhSYFAap8StqjZ8qXI%2B0tATGDcKBc%2BPJdDkz6F1k8%2FryXTE%2FuNHUzANseECotAkFZ3HKp3o4eko3HLk0Eboho44VS6ISyFZ6DGDEQKrQ8&X-Amz-Signature=0fdfbaec6e7434a181a9bbc2bbc6b23ad62d8a58d6a1416307583860774672f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LTH5VML%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T163402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FCsyfkGmaiV%2FPo2%2F%2FgVpxFLSzMxkKRHXrDVi7kN2MpAIhAOmEJ3NsdOfRzzf46%2FjWr%2BVI%2B1cU0UfBQ0r9nkJ3qCdOKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3rfcZIebIDwapr8sq3ANap0IzgKP7hYnANYMxlhdum4YXibJBsqF7MLYBGXgPcTfIbtbO43v8dqXPpcUAvccogVBgJhPdzCMKOt9tdQ6yCu3eKIV5Hv1CZXNgP798M20CvR8uYfQfO13vlVD5KBYZArP6d5xSMqws9E1oM770Q1%2BQWCwhre5sM2Hu3xA69ZvGvnm%2B98SF1NX1LxrBZi7nWG56ozREvm5eULjbeAL1kkAI0fNnz5YbDDFtgMib5w%2F%2B6Kq%2FCQBLY6Jo6pYmyKKSgiK8xY1O3OAYeEs0wgn8UI07RV%2BVOo9LYkvdJ8PL3sOixYTcnAffzN1U1ZVvn5HzjDZNXnHtNmYMdxUzJ2p%2FdJcWuE6eOpjD6ej4%2FeueQi25NDmUoyo2jsfW1TvNFF%2FUDjPmhK%2Fgamw9d7xU5gN1EjwtdaEs57jxST%2FVIbFJjKtCtx1oI6lCPRAdLebLtDcHlmAbc7XBjrZD2cwo%2FgcKbVKuQ7iXrIy2aq2ASwjnraLoQCp%2BXBoe5MByStqziyQhJJhZfeVGT4qcc7GDw4DJ%2B2XsUJItxTBt0C%2F67vHLGMdX%2BnnkOgZAUnymNd3Nx5ATWVm6P5uT14XfdO0m1C7pwSPVhpywFMo6AGZBlDZCLKMuitb43B%2BsxgrpcTDQutbJBjqkAcEd9E9V4acdW7Z%2Bj4pl87PtngMdKGYmy%2FJCIRXoG9srvE706Zp709Ts6sV%2BINGUaLi4hV%2BnFCNfPFXCRzaWn4xkiWAZCHsbF7eWdLzJDFBuxtbdkpomhSYFAap8StqjZ8qXI%2B0tATGDcKBc%2BPJdDkz6F1k8%2FryXTE%2FuNHUzANseECotAkFZ3HKp3o4eko3HLk0Eboho44VS6ISyFZ6DGDEQKrQ8&X-Amz-Signature=e98eae04cba2f17cf24914b541d01f215b8593045000c11701b73174767744de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

