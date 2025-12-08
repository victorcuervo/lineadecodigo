---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGC2XFL5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T231504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlR%2B319o%2FO0SSeMpisJ%2FZiK0bajicU0%2Fc7THyiKIPzWwIhAIjjtLhbKmjZwqYlO9nL%2BtI0MnlbqbG21PbRYq8bNlP5KogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZagOri2GCbcvGOPcq3AMpoXJ1eXemHGsBsnHUs7jUYoLTAmD3dg2YFUQcVIkaW9EKPAYn3ZbVZB3O0s1hGPCzpWoTUaQ0E5MkW2qRiXh1SKcDTsmb6LG3%2BRPC1Bwia36M5rFVeNgblxRWenRBILdePcspUZ375wRzB3UghpJSExSebmThkMkyCoaxNUvC%2B5fene%2FlA7GAlOtw4NPiimLTXoOjzuTjEglP%2B8nR2ffgMLAj%2FTEWwAmI%2B8ChCRNHjAEgeqtd0DLrLYxB6SopXVLU6rp%2FpXq1MZa5ckzpRj7TA5JSnb1B7ZQ0IZnXlyB9Z6aCk%2BFQxtO%2Bddau3IvQkHnksztVhrgjuJwddcrWJLttTdd5MYGe%2BnYxPuLmBM4eCBUbB82999xIzx%2BXJSZU1F6F1YWxf4zi05LWr80ONKm3Ef19fs73AIxyYNEfynbr7JmoMgTWqRXlmPe70IyrajhYDikCiQYYpU%2BB%2B5enC6mi3kAsAcjr%2B%2F54mIDOdBbqIZ7iTbkk1pJTI6Rf5CRuwYWF6OqCN1dicOWHE92%2B6GPO4Zp9Q4IyBkw%2Fkum3uT4X7DjO3%2B7451I4KxZD8GNRqboGuwuVorRJb34vpP%2Bt%2F3OfHHY96HNdaOdeCMI%2FEmGGPeMN%2FAYkofmPkF%2FeIDDbod3JBjqkAZ1wVhfFXMcBk%2FWjxOuB%2BCwpKBO359zUEGQz7p%2Byn6qBaaBrh07Opf9SM8%2BfVabJJxm89NXw4Q%2Fr3MKU96ZVrH220FCCmBltfr30H%2F7G7LieXMOaD8MACkBORFjXINKYWxhHTusHjlTm3R2EF%2Fyp%2BLh0VUdfxKfR2DmjT5c4Ktx5Tb4tQBmpo7hEGscM7Ke0wN1YwgTenaDm5RW1pa5RrFWxVoEo&X-Amz-Signature=c36aeb7fadd35869d4990ea5dbc8a3241c45d070455d6c8fba8a201a21dfe612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGC2XFL5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T231504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlR%2B319o%2FO0SSeMpisJ%2FZiK0bajicU0%2Fc7THyiKIPzWwIhAIjjtLhbKmjZwqYlO9nL%2BtI0MnlbqbG21PbRYq8bNlP5KogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZagOri2GCbcvGOPcq3AMpoXJ1eXemHGsBsnHUs7jUYoLTAmD3dg2YFUQcVIkaW9EKPAYn3ZbVZB3O0s1hGPCzpWoTUaQ0E5MkW2qRiXh1SKcDTsmb6LG3%2BRPC1Bwia36M5rFVeNgblxRWenRBILdePcspUZ375wRzB3UghpJSExSebmThkMkyCoaxNUvC%2B5fene%2FlA7GAlOtw4NPiimLTXoOjzuTjEglP%2B8nR2ffgMLAj%2FTEWwAmI%2B8ChCRNHjAEgeqtd0DLrLYxB6SopXVLU6rp%2FpXq1MZa5ckzpRj7TA5JSnb1B7ZQ0IZnXlyB9Z6aCk%2BFQxtO%2Bddau3IvQkHnksztVhrgjuJwddcrWJLttTdd5MYGe%2BnYxPuLmBM4eCBUbB82999xIzx%2BXJSZU1F6F1YWxf4zi05LWr80ONKm3Ef19fs73AIxyYNEfynbr7JmoMgTWqRXlmPe70IyrajhYDikCiQYYpU%2BB%2B5enC6mi3kAsAcjr%2B%2F54mIDOdBbqIZ7iTbkk1pJTI6Rf5CRuwYWF6OqCN1dicOWHE92%2B6GPO4Zp9Q4IyBkw%2Fkum3uT4X7DjO3%2B7451I4KxZD8GNRqboGuwuVorRJb34vpP%2Bt%2F3OfHHY96HNdaOdeCMI%2FEmGGPeMN%2FAYkofmPkF%2FeIDDbod3JBjqkAZ1wVhfFXMcBk%2FWjxOuB%2BCwpKBO359zUEGQz7p%2Byn6qBaaBrh07Opf9SM8%2BfVabJJxm89NXw4Q%2Fr3MKU96ZVrH220FCCmBltfr30H%2F7G7LieXMOaD8MACkBORFjXINKYWxhHTusHjlTm3R2EF%2Fyp%2BLh0VUdfxKfR2DmjT5c4Ktx5Tb4tQBmpo7hEGscM7Ke0wN1YwgTenaDm5RW1pa5RrFWxVoEo&X-Amz-Signature=522b0bae9a9a798e61b9b84006e7e5526311570b157ebc4e3946493ac090f8c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

