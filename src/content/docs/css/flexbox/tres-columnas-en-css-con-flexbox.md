---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6T6OSPY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T072037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3gMBoU2BnN8mpGZ3bmZyhM9v04AYOTgHnFnkQ%2FnlOOQIhAO9ndPdhfWI1ou1gJCIzw3lTFRaTpYlgD4S3RZpKBtHeKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9AhxtqPk4xY2S6GMq3AN2YXGAkbRSlbXJdoWorhdAMVt65gnSpnK2G%2FW3GJn5Uq9XlYvFThnXm0j78pHYoCeiCLsQh%2Fc83bG1d2s7O4kZE%2Fc2XkylI6GMtqrZws8HMjoDpsyZgQ5Zj%2Fda43jejoxAXtIF2%2F3XgqPNeAmJW3mg%2BoTBBZ9Q4z2nsuZL6HnXDFxQVg4P5VesEHKpsDQxLlShPtkOFOCA48pEqBmaBM5MWpT3Qkwsl%2Fs6KywyJbHO11Wl0ZNwCLiRgfIW1OJ39lXadAkTF6Kb9dTpeS%2BTXBnvgXdGk5fvglT2SMBOa3fIJ02nBIr8S%2FIl4WFklkM1sBj9Ld7QuJ9BPTD7p3X%2FIvuCwLkUgTx1HLyxMmaDFdZDFV8uEmMCbJnsvbqVTuoYpNY721L2bJ7hdLxJ%2BdQ9JRXRju7skJamVgyQHSaeOA%2BrOepIiP%2FvsL6h6jqWA0oHn8APoNQKH3qfTA7P5eBeq4kig4%2FmsqFQsg2H06I9sXbhcftUre%2BTrdsEih2vTkEuwuBXd08R73TL7GJbWuzlAodxUw2Ui2tZh4GyccfekoUjcB7BlOb%2BAogoYsCEPGryG5JmrsND1vFueFV7%2Ffh%2FesU70pWiSLTcQOcuYypD6d6VGpKy73EQMzyW8Mk0JDC57dnJBjqkAfzISO1Z6UtdY%2Fs5s9sxQAzsW9bfKrDeF%2FbOFoBpWZh1GIKUVeclZWTngNjmYJoAR%2BiIkjlaALvVbKWj1PgJsz0BXv84hXgE0%2BV6%2B00f%2FeJuj2r87FHJ7f00m8LPGu0h9ePb5lKLFRqq3G6LobQpoI0a4WqCltf0SOveOZZYV5xN2kmeoXMRFohw8sI2Enz4ye5d1a6SlZWogMH6Tz9NFwlzy3Wc&X-Amz-Signature=cd8b7b58a689697064f37c2aea65f4fb186528cf8024bd33db0effae446e53ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6T6OSPY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T072037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3gMBoU2BnN8mpGZ3bmZyhM9v04AYOTgHnFnkQ%2FnlOOQIhAO9ndPdhfWI1ou1gJCIzw3lTFRaTpYlgD4S3RZpKBtHeKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9AhxtqPk4xY2S6GMq3AN2YXGAkbRSlbXJdoWorhdAMVt65gnSpnK2G%2FW3GJn5Uq9XlYvFThnXm0j78pHYoCeiCLsQh%2Fc83bG1d2s7O4kZE%2Fc2XkylI6GMtqrZws8HMjoDpsyZgQ5Zj%2Fda43jejoxAXtIF2%2F3XgqPNeAmJW3mg%2BoTBBZ9Q4z2nsuZL6HnXDFxQVg4P5VesEHKpsDQxLlShPtkOFOCA48pEqBmaBM5MWpT3Qkwsl%2Fs6KywyJbHO11Wl0ZNwCLiRgfIW1OJ39lXadAkTF6Kb9dTpeS%2BTXBnvgXdGk5fvglT2SMBOa3fIJ02nBIr8S%2FIl4WFklkM1sBj9Ld7QuJ9BPTD7p3X%2FIvuCwLkUgTx1HLyxMmaDFdZDFV8uEmMCbJnsvbqVTuoYpNY721L2bJ7hdLxJ%2BdQ9JRXRju7skJamVgyQHSaeOA%2BrOepIiP%2FvsL6h6jqWA0oHn8APoNQKH3qfTA7P5eBeq4kig4%2FmsqFQsg2H06I9sXbhcftUre%2BTrdsEih2vTkEuwuBXd08R73TL7GJbWuzlAodxUw2Ui2tZh4GyccfekoUjcB7BlOb%2BAogoYsCEPGryG5JmrsND1vFueFV7%2Ffh%2FesU70pWiSLTcQOcuYypD6d6VGpKy73EQMzyW8Mk0JDC57dnJBjqkAfzISO1Z6UtdY%2Fs5s9sxQAzsW9bfKrDeF%2FbOFoBpWZh1GIKUVeclZWTngNjmYJoAR%2BiIkjlaALvVbKWj1PgJsz0BXv84hXgE0%2BV6%2B00f%2FeJuj2r87FHJ7f00m8LPGu0h9ePb5lKLFRqq3G6LobQpoI0a4WqCltf0SOveOZZYV5xN2kmeoXMRFohw8sI2Enz4ye5d1a6SlZWogMH6Tz9NFwlzy3Wc&X-Amz-Signature=f3e3e6cc61f56017c85be196d26b77a38aecad698b678a155649fee120b49688&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

