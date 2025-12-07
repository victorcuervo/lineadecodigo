---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQJEOBAK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVm6nTuPJU29vRpwy7PnDP%2F608gXHlG8%2BbdZuEq9wbaAiA8UFI1EcebSt4rQPUCc8Hgabpo%2FnHt3WbVsmRm8rDOTCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKNRIB8Bz5XBlSsxnKtwDUCERR651W8fAKQhjwHFLVcidgkB%2FzW6pn5p%2BM7saLqZWUDLmUn1qDGHXj3Oetkedf7DfIJ8LsjQaIxJbA%2FREssXFaAoKGHyRMFJWiLk%2FTwy1LYJX3zRttsAMQnkyBgkLIu2DTHfDPLAlm6RO47r9R8EO8KahLb8uwMRBlBUPKkAp530Ho8cvzjDqjiFQQODU6Ze6Kbh0bAsgU37h7KpQfKGrC13OiU1cFpREAJsbdSaFcWoEb6zGGumpD%2FkQ8j2DzXOonoDulGd5wpLgNI9qS5p27PtLYQMbhO%2BkF7912e1cb7PDEIxaQBNXNA1AT7rW2Tr90oHCh%2BmuULmKfabI6OEOchBBeXkMJNj5CLF6tXbo%2BBsfW93aKuJywvQXE5JUk91cJNuKHbHS8dgu%2BFGVqNObBUbAnZ6L0WZn1Z5OFTbCyD53xTN4wRz0ke8mPS4Pig%2ByaNy2ODuHZfEvIThwdbGFwFT5PWjCN5AIPgFqIbs3tvwQAkFfBwLwtRrJhdGtBF92geSbhQcHg7%2BaqdBXR0PJ8gp198A8pUvHyzXHjQ9EH%2F0R4pUxUS9Dmlupt1CMyWky%2FC8CdjjvtgfE6PJo%2BmEiazn3QhSg%2BPT5%2FojLHsl2kIm7pvzeNib314ww8v3SyQY6pgFsBZDYYkU8M%2FC9fP3%2BA26%2FQq6%2F6%2F%2FqR1sdoS6p4hVmHmIhxG%2FA%2F0HHKCqJgc4xkD%2Fl94JUHapTjISHx6LW9gDogQzAEpVuMT4%2BZqqmOWLYgPoRklE4M37uuL7kokzS3Kp%2B5H7HJXI1IcymQy1ugkVWRI7oA1uVy1vpC%2BnuuFsV9PbhisVdyqHkS4GlA0WjDHsEiYzzNP%2Fohqs0AzEfijsXzsWrpzO0&X-Amz-Signature=5e0e23134de7d68ebf66e89e8e51506d0340ed92ade46b6421cb2863715fdb3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQJEOBAK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVm6nTuPJU29vRpwy7PnDP%2F608gXHlG8%2BbdZuEq9wbaAiA8UFI1EcebSt4rQPUCc8Hgabpo%2FnHt3WbVsmRm8rDOTCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKNRIB8Bz5XBlSsxnKtwDUCERR651W8fAKQhjwHFLVcidgkB%2FzW6pn5p%2BM7saLqZWUDLmUn1qDGHXj3Oetkedf7DfIJ8LsjQaIxJbA%2FREssXFaAoKGHyRMFJWiLk%2FTwy1LYJX3zRttsAMQnkyBgkLIu2DTHfDPLAlm6RO47r9R8EO8KahLb8uwMRBlBUPKkAp530Ho8cvzjDqjiFQQODU6Ze6Kbh0bAsgU37h7KpQfKGrC13OiU1cFpREAJsbdSaFcWoEb6zGGumpD%2FkQ8j2DzXOonoDulGd5wpLgNI9qS5p27PtLYQMbhO%2BkF7912e1cb7PDEIxaQBNXNA1AT7rW2Tr90oHCh%2BmuULmKfabI6OEOchBBeXkMJNj5CLF6tXbo%2BBsfW93aKuJywvQXE5JUk91cJNuKHbHS8dgu%2BFGVqNObBUbAnZ6L0WZn1Z5OFTbCyD53xTN4wRz0ke8mPS4Pig%2ByaNy2ODuHZfEvIThwdbGFwFT5PWjCN5AIPgFqIbs3tvwQAkFfBwLwtRrJhdGtBF92geSbhQcHg7%2BaqdBXR0PJ8gp198A8pUvHyzXHjQ9EH%2F0R4pUxUS9Dmlupt1CMyWky%2FC8CdjjvtgfE6PJo%2BmEiazn3QhSg%2BPT5%2FojLHsl2kIm7pvzeNib314ww8v3SyQY6pgFsBZDYYkU8M%2FC9fP3%2BA26%2FQq6%2F6%2F%2FqR1sdoS6p4hVmHmIhxG%2FA%2F0HHKCqJgc4xkD%2Fl94JUHapTjISHx6LW9gDogQzAEpVuMT4%2BZqqmOWLYgPoRklE4M37uuL7kokzS3Kp%2B5H7HJXI1IcymQy1ugkVWRI7oA1uVy1vpC%2BnuuFsV9PbhisVdyqHkS4GlA0WjDHsEiYzzNP%2Fohqs0AzEfijsXzsWrpzO0&X-Amz-Signature=d2e5a6b3fb63e24cb5dd8faee8f935ba810296cd55649f5296af428273ce00eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

