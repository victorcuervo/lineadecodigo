---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHTE7NQC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T071834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwjkAqxeXvYISaIE5vBmgi%2B2LgT4ZAhaYr1lOTghzDlAiEA07ajsu1rJy6VWtGC2FlgAbPhdHWI5LQZsOdeyNfpg1cqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL33YZmSg2KlWF6%2BSCrcA0bJVhx%2Bxxb62G2EmcMPLimckdAWL3ZoQgDke7s0bxS0LXOw1kVpji4ERdrMt5epeGpoGCSSDzpJjx9xjLv8uxTRy4nCK4c3CrdE0RAFi9fFS0K%2FQ2BVJrOoYtC1LRo%2B99Vj6uNuaWHRn38W58uX7qBwJMzzBz1TRziVYnsGbj8K7VqRiZGkORLOoIGO1%2F9oV62LRVoXAxwGko3KeSIdhfWnOA%2FJn4Y2VVObdgHybzb2%2BRnuYn8U6ghldjLVH8U2bVtta3I0866MRkTZgsNM8ry9iqnqQXICerX6%2FZnPe652Qcm8FbgBZvLGqo66OMN%2Fn2DenTnuTuwTAK8paSzov5zPOmU8yPYhA8JVspx7LrcogbCEr3m9S%2BsJHJcdg1tP4Jz%2Fwp2YvLQOFEKDSNpD2ZED%2BkEGj8s6f015OYvifPuvVvbkOZ5N8vLAlH%2F6DGr3fdxkZS8FoY7T4C8H%2BfkxbccPEdPFfqs5jun4nI%2Fmd1%2BpoYZjSkT6M7lEvhNOOeHQQWlC78B8g%2F1Cjoz25FSxRrg4%2BwdroVzgaGmRxr2kfLHi4uwO%2BfvdnvOFrC3%2BJkHsoMA9ONrqSIcZV8lev2C7HxK%2Fh6opqMIexl%2BRQvmdZcoCHEbrN37DLnU6HjbZMK6I38kGOqUByM83aGqmkz6hoPRZG5d%2B0%2BQYDzcYzGDfi83WsDiloSC2cJZwBkd0IZ6X%2BLj8mqrmlnuP%2BIPHIyPHwwU%2BnYPN%2B6bHDQJj6a6D6spCqlw%2FC4GL7%2BajhEEmR%2B8xchR73Po2Xx4VM8jncGZQebWiUoZ%2BTzRyz5%2FbxFF9RPMMBHvOuEf5Dkywf3W0t5R0t%2FX%2Fvxb4H3FLSIKB9o6JuNmfB35sBIw2AAoP&X-Amz-Signature=019301e860b1455dbc895c21eb84a8efbf28a66accf787c9a5095ec0a261d547&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHTE7NQC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T071834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwjkAqxeXvYISaIE5vBmgi%2B2LgT4ZAhaYr1lOTghzDlAiEA07ajsu1rJy6VWtGC2FlgAbPhdHWI5LQZsOdeyNfpg1cqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL33YZmSg2KlWF6%2BSCrcA0bJVhx%2Bxxb62G2EmcMPLimckdAWL3ZoQgDke7s0bxS0LXOw1kVpji4ERdrMt5epeGpoGCSSDzpJjx9xjLv8uxTRy4nCK4c3CrdE0RAFi9fFS0K%2FQ2BVJrOoYtC1LRo%2B99Vj6uNuaWHRn38W58uX7qBwJMzzBz1TRziVYnsGbj8K7VqRiZGkORLOoIGO1%2F9oV62LRVoXAxwGko3KeSIdhfWnOA%2FJn4Y2VVObdgHybzb2%2BRnuYn8U6ghldjLVH8U2bVtta3I0866MRkTZgsNM8ry9iqnqQXICerX6%2FZnPe652Qcm8FbgBZvLGqo66OMN%2Fn2DenTnuTuwTAK8paSzov5zPOmU8yPYhA8JVspx7LrcogbCEr3m9S%2BsJHJcdg1tP4Jz%2Fwp2YvLQOFEKDSNpD2ZED%2BkEGj8s6f015OYvifPuvVvbkOZ5N8vLAlH%2F6DGr3fdxkZS8FoY7T4C8H%2BfkxbccPEdPFfqs5jun4nI%2Fmd1%2BpoYZjSkT6M7lEvhNOOeHQQWlC78B8g%2F1Cjoz25FSxRrg4%2BwdroVzgaGmRxr2kfLHi4uwO%2BfvdnvOFrC3%2BJkHsoMA9ONrqSIcZV8lev2C7HxK%2Fh6opqMIexl%2BRQvmdZcoCHEbrN37DLnU6HjbZMK6I38kGOqUByM83aGqmkz6hoPRZG5d%2B0%2BQYDzcYzGDfi83WsDiloSC2cJZwBkd0IZ6X%2BLj8mqrmlnuP%2BIPHIyPHwwU%2BnYPN%2B6bHDQJj6a6D6spCqlw%2FC4GL7%2BajhEEmR%2B8xchR73Po2Xx4VM8jncGZQebWiUoZ%2BTzRyz5%2FbxFF9RPMMBHvOuEf5Dkywf3W0t5R0t%2FX%2Fvxb4H3FLSIKB9o6JuNmfB35sBIw2AAoP&X-Amz-Signature=f1a3b3dd27e3988332453e50d9331935980b18f94216c59318689b234b2b6141&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

