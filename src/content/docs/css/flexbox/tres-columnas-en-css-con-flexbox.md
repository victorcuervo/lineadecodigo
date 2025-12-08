---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624HKU4PY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T001141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZCkNSS%2F8W%2BwEwfLSmymbFOcw%2BIWOiH5ObH5DtVRUJKAiEAvPfQRnSw06N3FamxyhvwCOCNSsw8Ifru4DZjqb2LksUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImgtCuGIZQoBPfZyircA6fReM3h7xk7Q2rgEqoD2cl0HRNvLzud9PBXSUqiFw0Dsusr6kfRaZSEUOUbrdLAQaEEYBzbZgeyOrJBB4qPwS%2FPxUcFES0SVz299XDMtiPXW79jE2bvfC0fNB5kIPMzdnWPgSTwHbApoAaaL26PBmTgESjUAjXRQTlLbpFQmCX3qRhBqt2UFFYaSW6jRjkXZ0MzE8IcbZlIIc3woAZYfCwSx5879%2BYHSM7nK5DYKPTlFcE%2BJRu8jKcEeLouKOu51YU8FqFnWceBwPiNbM5vQGp789nTRxwPPdGdJmVWLvjr0BeipYkg52BRfcR8XUg3QmFAkWbk4ChChu%2BdFeASprbqrJFgQRs3pLYD190JH0RW0GnIj%2BsJARSFNsA0WWo%2FiTHIn5fg4cD5CkGWJrW%2B9pXclQsS3rnbTyMavJUJ4UW%2BjlRJl3OxUYMZQja48atnBqsHQQVtAkkARwxRSXBJe%2FlVuH8yYCQbmga%2FTY1HG%2BZLD5rUzcdqqzRssqRw8JN2Rb6frdX%2Fl%2Bmwa8KQijb%2Bg%2BPf3G0xAaPNSWYHsf5OTTBjjWC4jb0A6MbR%2BXBBxfXsO8KzD%2FU%2Fq5w5036%2BR1AeTtgPDJngG0RVs%2FAYqmKwDZrCCIeCB3xhBuPUj3djMM%2Bh2MkGOqUBs4Xcl69IRUBYdglM4H4TuGmoA25XHNq0Vj2VnFvwgj60K7glRlw4uWA3UWPZ7%2F6%2BZeLWWgkuuLOok2knsGcYfLlrQaWvbVKfFQxFnZerQ5cUZFDh4vvr20bSXSM5YiQDYfhuXI9zJUH0%2FvfpKrQ4ixPawnm%2F65S0ENitrkWtdZ1oj%2FYaMfiwWFoLdFZLMLPuO3TxKxylVWdG6QkC1nVzykUQ4atx&X-Amz-Signature=18022ecb4f50f8495e534bedf4f6d2b5b74b1a479fca4d7ef64c3b0d7e4ce7bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624HKU4PY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T001141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZCkNSS%2F8W%2BwEwfLSmymbFOcw%2BIWOiH5ObH5DtVRUJKAiEAvPfQRnSw06N3FamxyhvwCOCNSsw8Ifru4DZjqb2LksUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImgtCuGIZQoBPfZyircA6fReM3h7xk7Q2rgEqoD2cl0HRNvLzud9PBXSUqiFw0Dsusr6kfRaZSEUOUbrdLAQaEEYBzbZgeyOrJBB4qPwS%2FPxUcFES0SVz299XDMtiPXW79jE2bvfC0fNB5kIPMzdnWPgSTwHbApoAaaL26PBmTgESjUAjXRQTlLbpFQmCX3qRhBqt2UFFYaSW6jRjkXZ0MzE8IcbZlIIc3woAZYfCwSx5879%2BYHSM7nK5DYKPTlFcE%2BJRu8jKcEeLouKOu51YU8FqFnWceBwPiNbM5vQGp789nTRxwPPdGdJmVWLvjr0BeipYkg52BRfcR8XUg3QmFAkWbk4ChChu%2BdFeASprbqrJFgQRs3pLYD190JH0RW0GnIj%2BsJARSFNsA0WWo%2FiTHIn5fg4cD5CkGWJrW%2B9pXclQsS3rnbTyMavJUJ4UW%2BjlRJl3OxUYMZQja48atnBqsHQQVtAkkARwxRSXBJe%2FlVuH8yYCQbmga%2FTY1HG%2BZLD5rUzcdqqzRssqRw8JN2Rb6frdX%2Fl%2Bmwa8KQijb%2Bg%2BPf3G0xAaPNSWYHsf5OTTBjjWC4jb0A6MbR%2BXBBxfXsO8KzD%2FU%2Fq5w5036%2BR1AeTtgPDJngG0RVs%2FAYqmKwDZrCCIeCB3xhBuPUj3djMM%2Bh2MkGOqUBs4Xcl69IRUBYdglM4H4TuGmoA25XHNq0Vj2VnFvwgj60K7glRlw4uWA3UWPZ7%2F6%2BZeLWWgkuuLOok2knsGcYfLlrQaWvbVKfFQxFnZerQ5cUZFDh4vvr20bSXSM5YiQDYfhuXI9zJUH0%2FvfpKrQ4ixPawnm%2F65S0ENitrkWtdZ1oj%2FYaMfiwWFoLdFZLMLPuO3TxKxylVWdG6QkC1nVzykUQ4atx&X-Amz-Signature=89fd955da8850f894f70d0debb1da25ffac836855794d935f103a67b5a8f8c0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

