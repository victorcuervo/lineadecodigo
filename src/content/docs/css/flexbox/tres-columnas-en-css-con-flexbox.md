---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WXBCOBT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T190808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHN8JkV8mMv6LLRmB5jpeNb4p%2Ba23toRmmLoTwpzio4QIhAIn3YSX9KzAoZRBUdJBbzuYKg0SvogAzpzRQsKrhDa9bKv8DCHoQABoMNjM3NDIzMTgzODA1Igw1j8rmM6I%2FEVnu2zgq3AMpgZXJcvyo7aEtonQ2QCvgf7GKHeySfOHkY%2BH8ztrvCMOrkXz6%2BrQKTilVJ3VxHrAymDf5tybEBHKjKHP9RXUnNSTMHsG1Ubc2J3MQcVz253BcKbLqz2Q2Bc2e7dG%2B%2BSYMc0Ldw%2Bp505fQbOk2W0iGBypOZskwTLVZXIG37uCJ4srolXUO7cEDP7cGJry9GUZyJysQdBC%2BX4NIU4t6ZPzJt3ekfdfEHWvt9kHJ5hwDUkEel9Y7LGEGmIoJwvqkBR%2Fg1H5FaqPwhhdNkjw9%2BMizvUz4WdrnRT5oc9xoofM4HMRCMeJX257KdnnrFbMn%2Bmlh1ekmP%2BUHXjqE%2B5EOPqQnXwW7MdDlm62YbXdeMG87NJdAaHGttvaq%2Fz6rqchbgcZwwHYz38oHjgGGke%2FLj1sSiZVUZOsDXZzue%2FyklPfRNxjjzlLlfTh0v4ekjSmRNOEubPaoDKdFx1N23ga8kQMvALlV7bEiL205IQk5RYTu%2F4sbrSXs%2FKyDcvxggTHxpJefCAFdo7h%2Ba5FSSOmOls%2FBC%2B7rE1V8PqOf6o5IhaR9ymbEPrykt9MXizQKsys4snNBkpfNnLYZfINBUVTrsAPtLWK0GoRRBRzNA%2BXNi9qE9cDqYNInTJxHb%2FJTrTCox9HJBjqkAXEPA9ZK5edfklE0vnGD%2BGQEbrI24SlTuY5kIVjq5%2FeVVuZyo1jGIUZhNViWhLg5%2Bi6tJ2ml31GVlXPy9kwrpJohF6hmpc%2FlK6SFdY%2BafLNohmNjemkg7RXZT9X%2BaFjzm2T57IckZOlaPdwGyOUmcOqfxmlUF0qSTt0PkrKKrfwnb%2B%2B%2FVuC2V2KfvnSPlz0ftfMltFzI2pq9ECo%2FwEtyKpxAQSOF&X-Amz-Signature=9ed3d4b9541af8c59857cd824724f1f005e411b5d1fb1f6f06530aff623430fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WXBCOBT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T190808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHN8JkV8mMv6LLRmB5jpeNb4p%2Ba23toRmmLoTwpzio4QIhAIn3YSX9KzAoZRBUdJBbzuYKg0SvogAzpzRQsKrhDa9bKv8DCHoQABoMNjM3NDIzMTgzODA1Igw1j8rmM6I%2FEVnu2zgq3AMpgZXJcvyo7aEtonQ2QCvgf7GKHeySfOHkY%2BH8ztrvCMOrkXz6%2BrQKTilVJ3VxHrAymDf5tybEBHKjKHP9RXUnNSTMHsG1Ubc2J3MQcVz253BcKbLqz2Q2Bc2e7dG%2B%2BSYMc0Ldw%2Bp505fQbOk2W0iGBypOZskwTLVZXIG37uCJ4srolXUO7cEDP7cGJry9GUZyJysQdBC%2BX4NIU4t6ZPzJt3ekfdfEHWvt9kHJ5hwDUkEel9Y7LGEGmIoJwvqkBR%2Fg1H5FaqPwhhdNkjw9%2BMizvUz4WdrnRT5oc9xoofM4HMRCMeJX257KdnnrFbMn%2Bmlh1ekmP%2BUHXjqE%2B5EOPqQnXwW7MdDlm62YbXdeMG87NJdAaHGttvaq%2Fz6rqchbgcZwwHYz38oHjgGGke%2FLj1sSiZVUZOsDXZzue%2FyklPfRNxjjzlLlfTh0v4ekjSmRNOEubPaoDKdFx1N23ga8kQMvALlV7bEiL205IQk5RYTu%2F4sbrSXs%2FKyDcvxggTHxpJefCAFdo7h%2Ba5FSSOmOls%2FBC%2B7rE1V8PqOf6o5IhaR9ymbEPrykt9MXizQKsys4snNBkpfNnLYZfINBUVTrsAPtLWK0GoRRBRzNA%2BXNi9qE9cDqYNInTJxHb%2FJTrTCox9HJBjqkAXEPA9ZK5edfklE0vnGD%2BGQEbrI24SlTuY5kIVjq5%2FeVVuZyo1jGIUZhNViWhLg5%2Bi6tJ2ml31GVlXPy9kwrpJohF6hmpc%2FlK6SFdY%2BafLNohmNjemkg7RXZT9X%2BaFjzm2T57IckZOlaPdwGyOUmcOqfxmlUF0qSTt0PkrKKrfwnb%2B%2B%2FVuC2V2KfvnSPlz0ftfMltFzI2pq9ECo%2FwEtyKpxAQSOF&X-Amz-Signature=2744f86434f9433ecb9349c4d9b82bb4d415f35f13ea69f57214e1ae3947296d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

