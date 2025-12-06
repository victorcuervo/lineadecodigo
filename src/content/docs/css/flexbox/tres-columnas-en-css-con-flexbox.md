---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTVFLKSP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T211918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3YYvIgXVk4aTL9yo%2Bd6ducU5WIfYQbp%2B0jwOF6oSaEgIgPxRqLawOPQ3GxmK5cuR32Qs0O0R5Df%2FqLXYXUfseknoq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDDrJKRqHpsNhPVTzzCrcA4qQAGeiZIwW9cTbeK2Y4jqoml4VLCWSKQdd5hZ4l8jPNpaHTOv70nI3XsW1x2FXVN6vKW0VFtrKsoiyH2lujlnrAxSxkCI%2FPW%2F464lwysVjwiQo5yBLFxjnP5laIbGJJmjbev%2BON%2BRngtty%2BfQxdYcQN%2FYL9qpEFaDT2jL%2F3EPHd0ynCZ6b0vOpeYEzrTpvprESSqvwkPXRUWcOahm6vxVB0KWVTL02bLNldziJihGO0QZuqnzmRunPjBfZaa3ZqSgX4VXummimDV7h4%2BbFxUBrrfcX0lasHx0t38djyll6LBERx3E3uOO%2BsegREqLWtZz34HrHzY57BRMqgaa6XRuIhkT%2BbephIpRM3oQjqjnFgW%2FWVZKlLBsc4ow9E3VSnxjuiRx0TjsMdTeRWmBPLEHbOa7YkeXHzSTsryxuUH9zgzE1mHzPCzhd2920Ca%2FrHwd2sC2O7%2B4nennlx7qk%2B4TiIGMu7KpX7zD5VBLWsczry%2FSPACRae1rawJMzL5ulmb7tKkSnCdiYpowbGSxRKzV5UFYahbDSqezuPJBs0962WJQN6LkIhJdeQDuL9GPyu8C8z0JrqZOkyH4nclSGQMOkZ%2BjH1mGcQA0Q1S%2BobVY%2Bw5ajwBcI5no2R%2FS8MPHM0ckGOqUBOjOy0MBBXJIxV8712T%2BPbutWkh%2F2N4kqws4sgCjDqCAlnUnmmjAdUehWjmgabJiEaEN2a0c14hip4CrYqg%2Bk7ydn0geradlg1rI8fE3Cb%2FS0fN88sVoA%2Fbvh%2B2z8eBtaIEGEO6IHSQaLuejS0BtYppCP%2BHzs6dMt3YFMiQF0LUn%2ByAAzA%2BtFLmGuuw%2FQwBcDzO01dAqykKdRoApYr88SAPyv35qd&X-Amz-Signature=563c402794ab435cf518f1bf7965b0eab3f9a74ad7a59052adb418d9da40c58f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTVFLKSP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T211918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3YYvIgXVk4aTL9yo%2Bd6ducU5WIfYQbp%2B0jwOF6oSaEgIgPxRqLawOPQ3GxmK5cuR32Qs0O0R5Df%2FqLXYXUfseknoq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDDrJKRqHpsNhPVTzzCrcA4qQAGeiZIwW9cTbeK2Y4jqoml4VLCWSKQdd5hZ4l8jPNpaHTOv70nI3XsW1x2FXVN6vKW0VFtrKsoiyH2lujlnrAxSxkCI%2FPW%2F464lwysVjwiQo5yBLFxjnP5laIbGJJmjbev%2BON%2BRngtty%2BfQxdYcQN%2FYL9qpEFaDT2jL%2F3EPHd0ynCZ6b0vOpeYEzrTpvprESSqvwkPXRUWcOahm6vxVB0KWVTL02bLNldziJihGO0QZuqnzmRunPjBfZaa3ZqSgX4VXummimDV7h4%2BbFxUBrrfcX0lasHx0t38djyll6LBERx3E3uOO%2BsegREqLWtZz34HrHzY57BRMqgaa6XRuIhkT%2BbephIpRM3oQjqjnFgW%2FWVZKlLBsc4ow9E3VSnxjuiRx0TjsMdTeRWmBPLEHbOa7YkeXHzSTsryxuUH9zgzE1mHzPCzhd2920Ca%2FrHwd2sC2O7%2B4nennlx7qk%2B4TiIGMu7KpX7zD5VBLWsczry%2FSPACRae1rawJMzL5ulmb7tKkSnCdiYpowbGSxRKzV5UFYahbDSqezuPJBs0962WJQN6LkIhJdeQDuL9GPyu8C8z0JrqZOkyH4nclSGQMOkZ%2BjH1mGcQA0Q1S%2BobVY%2Bw5ajwBcI5no2R%2FS8MPHM0ckGOqUBOjOy0MBBXJIxV8712T%2BPbutWkh%2F2N4kqws4sgCjDqCAlnUnmmjAdUehWjmgabJiEaEN2a0c14hip4CrYqg%2Bk7ydn0geradlg1rI8fE3Cb%2FS0fN88sVoA%2Fbvh%2B2z8eBtaIEGEO6IHSQaLuejS0BtYppCP%2BHzs6dMt3YFMiQF0LUn%2ByAAzA%2BtFLmGuuw%2FQwBcDzO01dAqykKdRoApYr88SAPyv35qd&X-Amz-Signature=3198e1f8ec9b4b217cb5bc1c12e16c541a91d788d03acf5962a2780865056d64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

