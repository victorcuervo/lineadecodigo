---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UO7VVZK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T174127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIJFqgA1s6CpILhJ8zxGFZ1DKjO5%2Fq2RBw996jEUbgmwIhAOqi3gBsbuBUE64I83Xv%2Fbw5Z0dwwWevA9oipFasFIUpKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2aIz%2BczzYi3%2FvC6Mq3APB%2BnZxXQohI3FFnJ7S7hl9KSfNK0ByxBiyhqTx%2FxG1p7Ljm6Gp6MHpSmvqf0jjaSyLzGkRWA6N4IF6%2FbTE2%2FKp5rBDCYZvmwBmX6xeOR9IVFwb6XXM%2FQVhRg%2BWj1QxPyxOY3dpbidxTaSEHpGLI%2FTaU3fID63GJVd2k8OiZUgPHUe%2FodY96Corz6gQuktq1foC7QwNXpj4cWC81bP%2FnuO%2FGcLqljk%2BgkTDrQL8rTeYh9I6PYQycbppke3udkxZCbZ%2FBRkvALVdYPrFsR2IppIMqR3GF90VQnSrDccXBvhMo9stItdcAOMTwLLc%2B%2F0KyX1Qt5mJ40TmfZSXT7JB%2BA8Ntb6IPvzohbWIAwQ%2B9e1mW%2FiqUIVhwqE2KejShHmcyVwMrCrTOWLVlZkK2ysbUaw5TT5lr6c71JadnwsCTcqJDQqhsgz1JVt7NJ6zoSC9FXIlpa1chUXhzGsCeIeTO5ptY0F6O6LuwSdfa00aWMPNfKS5u%2BFpuCSFLBMwQUBKeo6QqscdmRVQlLDodoQ7%2Bd5VaaWWin3%2BJTXS83LBSbP3K7Yn0hC4ND1f5o5CxHj9wVM%2BJqd7tfRa1FTGKiQrZclGY%2Fcw8hU5hBmrcbsKYJmYNjSeD%2BpNOQ2mtqWHKDCTutbJBjqkATA%2FhIEyYEyNO7oBo90ACOrLur6WoAjiJFQcY03vlqYU4stbjbOS8wSVW3b%2B0Op5MVPyq8dTEH5mx%2FSF0FaUsnDR0zoER%2FNJ4ozunaXxy8M6aqa8sO6vkMUSoVMTXi%2FF7NmdHfnwohtZ2Np0HZN0uWV2Hrzo5QRzeS8HmW3%2FNrd%2BqzWVVbzac91do75Yz5L%2BO3%2Fn1vxPTrdTlzX04P4yjHLCgGFL&X-Amz-Signature=446fcdb01af0b6ed84071844abf859f0e3cc6902a7b73246c739f544d6c87a08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UO7VVZK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T174127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIJFqgA1s6CpILhJ8zxGFZ1DKjO5%2Fq2RBw996jEUbgmwIhAOqi3gBsbuBUE64I83Xv%2Fbw5Z0dwwWevA9oipFasFIUpKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2aIz%2BczzYi3%2FvC6Mq3APB%2BnZxXQohI3FFnJ7S7hl9KSfNK0ByxBiyhqTx%2FxG1p7Ljm6Gp6MHpSmvqf0jjaSyLzGkRWA6N4IF6%2FbTE2%2FKp5rBDCYZvmwBmX6xeOR9IVFwb6XXM%2FQVhRg%2BWj1QxPyxOY3dpbidxTaSEHpGLI%2FTaU3fID63GJVd2k8OiZUgPHUe%2FodY96Corz6gQuktq1foC7QwNXpj4cWC81bP%2FnuO%2FGcLqljk%2BgkTDrQL8rTeYh9I6PYQycbppke3udkxZCbZ%2FBRkvALVdYPrFsR2IppIMqR3GF90VQnSrDccXBvhMo9stItdcAOMTwLLc%2B%2F0KyX1Qt5mJ40TmfZSXT7JB%2BA8Ntb6IPvzohbWIAwQ%2B9e1mW%2FiqUIVhwqE2KejShHmcyVwMrCrTOWLVlZkK2ysbUaw5TT5lr6c71JadnwsCTcqJDQqhsgz1JVt7NJ6zoSC9FXIlpa1chUXhzGsCeIeTO5ptY0F6O6LuwSdfa00aWMPNfKS5u%2BFpuCSFLBMwQUBKeo6QqscdmRVQlLDodoQ7%2Bd5VaaWWin3%2BJTXS83LBSbP3K7Yn0hC4ND1f5o5CxHj9wVM%2BJqd7tfRa1FTGKiQrZclGY%2Fcw8hU5hBmrcbsKYJmYNjSeD%2BpNOQ2mtqWHKDCTutbJBjqkATA%2FhIEyYEyNO7oBo90ACOrLur6WoAjiJFQcY03vlqYU4stbjbOS8wSVW3b%2B0Op5MVPyq8dTEH5mx%2FSF0FaUsnDR0zoER%2FNJ4ozunaXxy8M6aqa8sO6vkMUSoVMTXi%2FF7NmdHfnwohtZ2Np0HZN0uWV2Hrzo5QRzeS8HmW3%2FNrd%2BqzWVVbzac91do75Yz5L%2BO3%2Fn1vxPTrdTlzX04P4yjHLCgGFL&X-Amz-Signature=d31ce2c88b1147c12144e714157b030fe8838d370a1fb9609adba5178ffa66c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

