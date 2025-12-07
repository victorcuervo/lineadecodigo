---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SGTCP5U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T202104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICnT6WB5ovf%2Bn9FkRtn8GkVZULSvTadlJXVcxj94yXU%2FAiEA8CvebCS123qxOv3T4qHtI6aDnFrGUnW8kwRLq%2BOLQO8qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLrhbWwsvoCoIcWwlyrcA8m5kngpujPa2Xswz8xkk8w2%2FECnIyaVjK2ThLFyAKdOb6pIr%2FReCf79djIGiTvN%2BH3zmiy6bBNYdrzzhcKwPDmvkAhM165FcplvEETWzuRwGGWsOvJVf8FNc71RKpmCuGnEyyAtu1tOFWmSbkWNZb%2FDl7P3nWht2bRefWdWb5E2mhb4f8h1akKffjOpMLU1TYohLDlzE9f2PVRGziS4uiUBIuXJTdBIVkyFBOmgVU75usoBf8cKTeGvOQPk8QtP1m6WciIcNUpZQi7DWG0HSCRTcRomU6IccQ%2FtCQH9jUP7f96MApJVnlipPFW9vFeURh5R5Au1oMLzT%2FpMtv2SEcX5Rv2EVIxDVXqv09e66dC3LY%2By6HI6FYhXxAWScvO2E0lqub%2FREGuG2LJGOwFGZo%2F%2B0vxtEFCFy56veBEOnkOe3uGPEdTJAsXhLSNBQZd41NyLgW6GMY9ynagwsIloVi8MNi5aHYpZGWL0PGd8Gz1xPASyn8lQts%2FMhy5j3v%2F7sH9r8hhVbKjB88DKDa8f3V0ikN%2B7PhXbwDeWHnAR8N3%2F2PdxrfKQiZNC%2BcjUQwp%2BHEIXWIOkfdSCsISXQMaJTxIsFpkESW1xEVdy29MVcRMyN9QET1u6DBiNXH%2BcMNyo18kGOqUBHaFyVKlLeJ4NXwlgsnmUBbrAqJjb2Mn7fsCtYQ5pXMAfLRdO%2F4EFwBz7nVSTzQANnvRwdBw9dWP2j6pt9povI2znKUVzZPS2XJ8YZXn52CGl%2FpfpLVxV0UHTfv8jNqNOIT9qmDsjxmbsRNaT6jzHTf%2FJhHoW2%2FjNMMZeXme5lTA55r22dDCFgv9R%2Bq5orIak%2By4r%2Fc9r4bdNj8B1%2FoeE%2F84IdjTV&X-Amz-Signature=36def7c8623b087478fc28a14b7421f3e49665f2c7ef409c6666a12e2394d3b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SGTCP5U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T202104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICnT6WB5ovf%2Bn9FkRtn8GkVZULSvTadlJXVcxj94yXU%2FAiEA8CvebCS123qxOv3T4qHtI6aDnFrGUnW8kwRLq%2BOLQO8qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLrhbWwsvoCoIcWwlyrcA8m5kngpujPa2Xswz8xkk8w2%2FECnIyaVjK2ThLFyAKdOb6pIr%2FReCf79djIGiTvN%2BH3zmiy6bBNYdrzzhcKwPDmvkAhM165FcplvEETWzuRwGGWsOvJVf8FNc71RKpmCuGnEyyAtu1tOFWmSbkWNZb%2FDl7P3nWht2bRefWdWb5E2mhb4f8h1akKffjOpMLU1TYohLDlzE9f2PVRGziS4uiUBIuXJTdBIVkyFBOmgVU75usoBf8cKTeGvOQPk8QtP1m6WciIcNUpZQi7DWG0HSCRTcRomU6IccQ%2FtCQH9jUP7f96MApJVnlipPFW9vFeURh5R5Au1oMLzT%2FpMtv2SEcX5Rv2EVIxDVXqv09e66dC3LY%2By6HI6FYhXxAWScvO2E0lqub%2FREGuG2LJGOwFGZo%2F%2B0vxtEFCFy56veBEOnkOe3uGPEdTJAsXhLSNBQZd41NyLgW6GMY9ynagwsIloVi8MNi5aHYpZGWL0PGd8Gz1xPASyn8lQts%2FMhy5j3v%2F7sH9r8hhVbKjB88DKDa8f3V0ikN%2B7PhXbwDeWHnAR8N3%2F2PdxrfKQiZNC%2BcjUQwp%2BHEIXWIOkfdSCsISXQMaJTxIsFpkESW1xEVdy29MVcRMyN9QET1u6DBiNXH%2BcMNyo18kGOqUBHaFyVKlLeJ4NXwlgsnmUBbrAqJjb2Mn7fsCtYQ5pXMAfLRdO%2F4EFwBz7nVSTzQANnvRwdBw9dWP2j6pt9povI2znKUVzZPS2XJ8YZXn52CGl%2FpfpLVxV0UHTfv8jNqNOIT9qmDsjxmbsRNaT6jzHTf%2FJhHoW2%2FjNMMZeXme5lTA55r22dDCFgv9R%2Bq5orIak%2By4r%2Fc9r4bdNj8B1%2FoeE%2F84IdjTV&X-Amz-Signature=134c3ccf9f06cae3e8c68018d71d6b2c107554743e957cfeb0e57e54735d7c92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

