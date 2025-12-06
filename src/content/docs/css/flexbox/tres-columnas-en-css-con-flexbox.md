---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXUNUIFQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T140612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhIOxaK%2BVKXb8%2FrAYFREu5MXLCzzduAAo7PjdaVcg8FAiBqtSLRpegFQk6hS8W%2Bd2oMS3C140SFdPr8DCbxE1hnUCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMjFZ8y%2FBH5cUAoCG4KtwDt%2BgAX8cjEJwMiBNkEScVw%2BdZpdcU9ky1bb8wyUloo4oiJzIl9gd7uxgMQqkwLcRxpompW8Wdz6dGO%2FI3Q57Md9z1mLPGcrKz3zqHpx4EN0rLpxukdD3pVGhXkoreSDPrZnnzaEfQQvQKpH2HOqQ8pYnw0pZYsZPEgohVw6k%2B9vbNc93AAlgOzW5nyAQ07%2By%2B9BxQ%2Fv9HkE%2F72y99GK1%2BUxWhC5WQQ5qVC%2B67oRjteUB76G6shNWHtsP4pNO4RU%2BjF8w%2BtQnL9VcAPL624av33KBGCEDgCTbSrI4r2WavbUwNWA9%2BP9SixIC23pEKDLptR9ynufenM4zfIDbjsFcxV%2BRC3fXXTx3it6oF%2FQI%2BCokqUPzlVlS2BYuYlLImnjFI4K938OBKz9G4H4GcF%2F7isQBfmRtvZAb1U0Rh%2BSQQnlYhNr7vtaeQVpL8JXCUxrFVWvShC1FLRNvSuvb%2BCjD8oYw8Xyw2FYWUk6NbEQxocjpsd9p8Nxgnp%2Bx2TjsJNkoZFCM%2BQQGkQUyKCiokq3um5oChKlLdTmVtj9jb08T%2BCwTVgspVf%2B2iWu%2B3%2FDzgR2JNRhHhyce4EMqizNplwFPmQjB7L1MjLPE4XhbG5eWMUhrsOci6PDH2%2BVSugMwwpqbQyQY6pgErfEkEuvBfUUOChte4Ink59fdXkcpZvbqTr9pAV4fxhgWenXe%2BRANXkP82y%2FrEYQuyIh3plzMUmNTZjfxYPzsC8fdr7d5RT93ysGmNUZ3XOCwXg%2FHwr8WPeUtaFT4Fc7%2B5rvze47DJLxyGFCH%2BEAZjpnz6wl4gHw1y%2FEHEtJWuj5qzXEoFBi5wjxY8l33jGsuyK6mbPPqADStgmyUuJWQFfD%2BD328o&X-Amz-Signature=3fc20c411f6685d9767800878cc4a2f727e2d2ae317740d7022bb4b884b2f1a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXUNUIFQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T140612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhIOxaK%2BVKXb8%2FrAYFREu5MXLCzzduAAo7PjdaVcg8FAiBqtSLRpegFQk6hS8W%2Bd2oMS3C140SFdPr8DCbxE1hnUCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMjFZ8y%2FBH5cUAoCG4KtwDt%2BgAX8cjEJwMiBNkEScVw%2BdZpdcU9ky1bb8wyUloo4oiJzIl9gd7uxgMQqkwLcRxpompW8Wdz6dGO%2FI3Q57Md9z1mLPGcrKz3zqHpx4EN0rLpxukdD3pVGhXkoreSDPrZnnzaEfQQvQKpH2HOqQ8pYnw0pZYsZPEgohVw6k%2B9vbNc93AAlgOzW5nyAQ07%2By%2B9BxQ%2Fv9HkE%2F72y99GK1%2BUxWhC5WQQ5qVC%2B67oRjteUB76G6shNWHtsP4pNO4RU%2BjF8w%2BtQnL9VcAPL624av33KBGCEDgCTbSrI4r2WavbUwNWA9%2BP9SixIC23pEKDLptR9ynufenM4zfIDbjsFcxV%2BRC3fXXTx3it6oF%2FQI%2BCokqUPzlVlS2BYuYlLImnjFI4K938OBKz9G4H4GcF%2F7isQBfmRtvZAb1U0Rh%2BSQQnlYhNr7vtaeQVpL8JXCUxrFVWvShC1FLRNvSuvb%2BCjD8oYw8Xyw2FYWUk6NbEQxocjpsd9p8Nxgnp%2Bx2TjsJNkoZFCM%2BQQGkQUyKCiokq3um5oChKlLdTmVtj9jb08T%2BCwTVgspVf%2B2iWu%2B3%2FDzgR2JNRhHhyce4EMqizNplwFPmQjB7L1MjLPE4XhbG5eWMUhrsOci6PDH2%2BVSugMwwpqbQyQY6pgErfEkEuvBfUUOChte4Ink59fdXkcpZvbqTr9pAV4fxhgWenXe%2BRANXkP82y%2FrEYQuyIh3plzMUmNTZjfxYPzsC8fdr7d5RT93ysGmNUZ3XOCwXg%2FHwr8WPeUtaFT4Fc7%2B5rvze47DJLxyGFCH%2BEAZjpnz6wl4gHw1y%2FEHEtJWuj5qzXEoFBi5wjxY8l33jGsuyK6mbPPqADStgmyUuJWQFfD%2BD328o&X-Amz-Signature=de2efeee9c429cc6553a3d5001b8ee663293a5b89be5b58336777d828c706d8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

