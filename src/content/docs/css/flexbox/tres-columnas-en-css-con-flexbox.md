---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LVHYVK2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T233553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnMEO2EQcFkHvZ%2FJ8nR%2FpFKO5iBD641vduju4cveCcqAiEA3n8S8%2FUCdm9nIgL9%2FwcnMpFDMUOy8lFWOzc1d7hH2ZUqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJslu8EFwvv%2FZdEDPSrcA7w3osSjHlsbfSaFzw%2ByFBctPfQRklzMhZo97fEVnoI8Oevu4bMXwkiMPR6rjcWNt6uKoRmOGaQC5WUl5QW2cEkQUIPT3nGtfeJBeD6aNVr6xPTxunI5PVyLbUHbPnFEbLQth935YJnFYeHPwZYlAz7CK2x74Pr6ctCw%2FMMqrXxP%2BdjmJlZlJZDA5Qyb4sVr%2B0q%2FjYyByzPs3md9IxtMVCtC6p6t3%2BDMIhS28U9AQWBbXNCIwVLKFzbs%2FGQW5vPMj5QAJ9Ac3V0g2Vy%2FFz2wfcd1xyAm0IUQdraf2BnQCb16l45nKr1Mdx9I74IqHZstLwpqUuvrwDbv6DnO9Cd3muRb75jGp2EZzs8XByqKfJ%2Fg8C5Qfdx3t%2FLmn4zf8wQOB6IMm4qT7AWIhJJcRiocPj7VO2r0HsTf5qRVBo4wqv3U6%2BtBamGm61yVz8%2F34ygAW7YNArbSFu0HeCZ%2Bwj93Te1Pwix967p42FIGfoKqkJ7CcGtvenL120%2FBj6B5nkaKAsuagueNrQpahhQe86pJGnXJ2LUAhsKdxaozubRdwITgjPRAb9AtaiiUStK9HtUs5H9Xao5BIMc2%2FIiJHp59bSPCnvNU1W6dPOFvivYaHAaOp5T7i11OsL0P1THVMOyE2MkGOqUBJ1MVpAssBokZ4UNZvOHiFvV6bjevgnl8f6IySPqeT7Y3sbdXhSXjdEfHjhrvKl%2FWOfMPzwC3QXeDfpy%2F%2FmuPemMVJubDfHd%2FTeGK1DCgAS4eaFZAQs3hMw61Yj6%2F3CvPzmuopNVRSqVgYgK5hrLoLbp1OzUVpmJmUcVjXyAvZlojpLBsvm8%2FjkJS1tx9kOelC7DINvIcnsfAocPzugErDeNB%2BUmh&X-Amz-Signature=e5d9558a351432179151a646fe06cf675eac152c7ce1de51776fb75198e2c002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LVHYVK2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T233553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnMEO2EQcFkHvZ%2FJ8nR%2FpFKO5iBD641vduju4cveCcqAiEA3n8S8%2FUCdm9nIgL9%2FwcnMpFDMUOy8lFWOzc1d7hH2ZUqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJslu8EFwvv%2FZdEDPSrcA7w3osSjHlsbfSaFzw%2ByFBctPfQRklzMhZo97fEVnoI8Oevu4bMXwkiMPR6rjcWNt6uKoRmOGaQC5WUl5QW2cEkQUIPT3nGtfeJBeD6aNVr6xPTxunI5PVyLbUHbPnFEbLQth935YJnFYeHPwZYlAz7CK2x74Pr6ctCw%2FMMqrXxP%2BdjmJlZlJZDA5Qyb4sVr%2B0q%2FjYyByzPs3md9IxtMVCtC6p6t3%2BDMIhS28U9AQWBbXNCIwVLKFzbs%2FGQW5vPMj5QAJ9Ac3V0g2Vy%2FFz2wfcd1xyAm0IUQdraf2BnQCb16l45nKr1Mdx9I74IqHZstLwpqUuvrwDbv6DnO9Cd3muRb75jGp2EZzs8XByqKfJ%2Fg8C5Qfdx3t%2FLmn4zf8wQOB6IMm4qT7AWIhJJcRiocPj7VO2r0HsTf5qRVBo4wqv3U6%2BtBamGm61yVz8%2F34ygAW7YNArbSFu0HeCZ%2Bwj93Te1Pwix967p42FIGfoKqkJ7CcGtvenL120%2FBj6B5nkaKAsuagueNrQpahhQe86pJGnXJ2LUAhsKdxaozubRdwITgjPRAb9AtaiiUStK9HtUs5H9Xao5BIMc2%2FIiJHp59bSPCnvNU1W6dPOFvivYaHAaOp5T7i11OsL0P1THVMOyE2MkGOqUBJ1MVpAssBokZ4UNZvOHiFvV6bjevgnl8f6IySPqeT7Y3sbdXhSXjdEfHjhrvKl%2FWOfMPzwC3QXeDfpy%2F%2FmuPemMVJubDfHd%2FTeGK1DCgAS4eaFZAQs3hMw61Yj6%2F3CvPzmuopNVRSqVgYgK5hrLoLbp1OzUVpmJmUcVjXyAvZlojpLBsvm8%2FjkJS1tx9kOelC7DINvIcnsfAocPzugErDeNB%2BUmh&X-Amz-Signature=a6e0283358b0f1bea614f15a8656f26c94bcb5aacfd6a0ffea6bac628c0faaa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

