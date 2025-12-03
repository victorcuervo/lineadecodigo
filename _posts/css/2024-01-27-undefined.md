---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CATZ5H7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T175033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDEwmZsLMrIJ3ziVrYmGj6WLEq2OYOU%2FWsLvDxy3AZCqQIgGkO4VGrUqAmpWLAXoGcviUqOnjyN6RsjJ4ylcjeDuRUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOo%2F8CC0MXhjmtI%2BYircA6oKIh%2FUZ8XPidwalFdBIAGNrfwTfH%2FAXgEKiS6slKnOhw1XKMX1LCnv2JZWxQZTiyUt8aW%2FlSHJRSQP3Sh40PxegB0IvEgE8zOo3%2FD6BLnkBkxdCxagv84RStSS63wCAXOPbXMGHDlnT7VfZ2SEKPURjpI7%2Bqe5k00YRyDFqYwQuNcBShXftw1yrLNh67zLEkPyhQLzoUSI5zs%2BiclOAo6klvPaL2G1pBtn%2B3q69MdK%2B2IbyiPq%2Fne6EnBMFtOqOjAovU3PXgLm5%2BqrL4cHz%2BC3nB3k0Uarn3hbcU4iOCaqFMua4GWbQe0Pv0IQ%2Fh7ZgpZ%2Fg%2F1%2FyPwnri44zBwx0%2FEXjOZ%2BUFur9xEP3SmzaIxYqhsw96LOhviKoFIYbHky9kINn2t16aVY%2FPZVmWiKVQorweTsDJ9hehW%2BshSjfGcery8laPOdBfWkIP1J4QGJli5%2BPKPMB9At%2BLoBBcQy%2B0w%2BuvwLYOI8onYHOvMcQL%2BYH2F1Hb3lhsIF7ceTgq0IY2MBjL6unUguuxI%2FqNprbYKPNfe3aZirJ1oj%2FZgbSC7c6YuXuwUYWgQW4ncCFzm9MA6374%2Bxv1DxKqPC1T4636xbXD3hZ99uJGCYw0lyNbMv3IAuPtTEi89SKszdMJ7awckGOqUBcgv3s21arMQC5G8B9h22fPbc7Q%2FxwSCXVBcWrPboqoOoqL0oksUiiCiRSMj188%2BHG%2FGLiBBL1JVLIz5zsRH6CCXbYPwBx20dBXZkqfyZiZgPDREogq3LfZTPOGzBUDmsDNB0ZwjEK4n9MzrSIbweLl7weipJbABdBOoUOWWBirr7UVHIWK4FMgB%2BFHUTNlXcHwLQUxCi1wIerjhIRCvX1YR5%2FcwD&X-Amz-Signature=c5ad93e0270d4b048c77f6a2e0a041bf0d11d87168ac19611ac9d66c1f3282cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CATZ5H7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T175033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDEwmZsLMrIJ3ziVrYmGj6WLEq2OYOU%2FWsLvDxy3AZCqQIgGkO4VGrUqAmpWLAXoGcviUqOnjyN6RsjJ4ylcjeDuRUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOo%2F8CC0MXhjmtI%2BYircA6oKIh%2FUZ8XPidwalFdBIAGNrfwTfH%2FAXgEKiS6slKnOhw1XKMX1LCnv2JZWxQZTiyUt8aW%2FlSHJRSQP3Sh40PxegB0IvEgE8zOo3%2FD6BLnkBkxdCxagv84RStSS63wCAXOPbXMGHDlnT7VfZ2SEKPURjpI7%2Bqe5k00YRyDFqYwQuNcBShXftw1yrLNh67zLEkPyhQLzoUSI5zs%2BiclOAo6klvPaL2G1pBtn%2B3q69MdK%2B2IbyiPq%2Fne6EnBMFtOqOjAovU3PXgLm5%2BqrL4cHz%2BC3nB3k0Uarn3hbcU4iOCaqFMua4GWbQe0Pv0IQ%2Fh7ZgpZ%2Fg%2F1%2FyPwnri44zBwx0%2FEXjOZ%2BUFur9xEP3SmzaIxYqhsw96LOhviKoFIYbHky9kINn2t16aVY%2FPZVmWiKVQorweTsDJ9hehW%2BshSjfGcery8laPOdBfWkIP1J4QGJli5%2BPKPMB9At%2BLoBBcQy%2B0w%2BuvwLYOI8onYHOvMcQL%2BYH2F1Hb3lhsIF7ceTgq0IY2MBjL6unUguuxI%2FqNprbYKPNfe3aZirJ1oj%2FZgbSC7c6YuXuwUYWgQW4ncCFzm9MA6374%2Bxv1DxKqPC1T4636xbXD3hZ99uJGCYw0lyNbMv3IAuPtTEi89SKszdMJ7awckGOqUBcgv3s21arMQC5G8B9h22fPbc7Q%2FxwSCXVBcWrPboqoOoqL0oksUiiCiRSMj188%2BHG%2FGLiBBL1JVLIz5zsRH6CCXbYPwBx20dBXZkqfyZiZgPDREogq3LfZTPOGzBUDmsDNB0ZwjEK4n9MzrSIbweLl7weipJbABdBOoUOWWBirr7UVHIWK4FMgB%2BFHUTNlXcHwLQUxCi1wIerjhIRCvX1YR5%2FcwD&X-Amz-Signature=79c3c0f1f0074371aaba5533a9184d9e8b6b8d32ea412a88dafb25edb47c860f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

