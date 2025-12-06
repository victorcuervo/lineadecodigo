---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NMBQMOO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3tvJZS%2BSusLBYgqgySqLyr99c7yX2fv%2FpXw3zhBz3rQIgJVfg6MPj%2BhNHVm3PUc4uv25cweeh8saeObGn0kblSnIq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDFTl4BS2Rp8mqRMhJCrcA%2Ba96EpfSKQrHmPBr1mr6sa73GxFLGXGKo8ce0kLKfbShhl%2B8k7ZDuqhrNOBW%2BJjHkBoMoHeU38W8n7PYM8fVEAy8bv9eEaJ8BRHP%2FoRK1yZMopSZgdFI8ofcMbr3onkSM1JX%2Fw5EmayvHM3tTkrMqqeBlxwPY3GLxVJcX3fjI9iXf%2BhklEMjCgnhM8RffSJZ3sWqhDRlzWQ5Qt84WtrP3AWBq9SzansnN5FwmB0Ymty7X7b67i51YNaM3IN33WlOal2CO8FEZxcOpuZvaoSds6zP9755eh8q4xc3K6tVigbSpHQOVCid189tJMOso9T84O5DIGWHnoSbVYA99ekRmA3oZeIxG6%2FUCBx44tX3PHfpJSRVLZtdKqAJKfIuRuzqnApYNTAPk4PSTKW%2F0ei%2BoGrC3zjepRrvruj6ecHAYvaUM53ygPHUM8C8lTi1sPc45Yd9aqGviAQWfNxa23Gv4NtOJAJVjmMLBU1HV4s%2Bh%2BOBFe6qqF1DrKnPVHdIWP3DzGBYyIMMhupk6H0Cy8NvnRD8uWphRowzOloYUCO8ld0iMidy9h46S9%2FW8yKLhOu8wvdmV80Xw%2F0JGdZux6k0%2Be9R1whgsF90XdB9NGzw6%2FqjFdvnBC%2BCwi%2BpHOvML2ez8kGOqUBQ9EfnKHsrNAc0xluGFEJKJFmRP2rYtdnPKRVMAC1MNyqgaFkN%2FNUPB6mYKhLxnMh98mIMI40Zl3SXuNFOikZzGp4m4R4cN1XVGR0dA50%2FJpaAscKOZ4Gwe%2FV5XU8YO4uE1CIJEZFU4E3mY2eqgUgIsU%2B%2BVRLswvyozEx9RV5Z5HK7u%2FJtnH89eRbVzu4IVxeRFNt52kZ%2Fl6k2rgTrDGpbNRGK4A8&X-Amz-Signature=cb26f3c07e57e05d9bce14d8b3304c066c4005622e6a6623c8a6980d36869c50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NMBQMOO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3tvJZS%2BSusLBYgqgySqLyr99c7yX2fv%2FpXw3zhBz3rQIgJVfg6MPj%2BhNHVm3PUc4uv25cweeh8saeObGn0kblSnIq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDFTl4BS2Rp8mqRMhJCrcA%2Ba96EpfSKQrHmPBr1mr6sa73GxFLGXGKo8ce0kLKfbShhl%2B8k7ZDuqhrNOBW%2BJjHkBoMoHeU38W8n7PYM8fVEAy8bv9eEaJ8BRHP%2FoRK1yZMopSZgdFI8ofcMbr3onkSM1JX%2Fw5EmayvHM3tTkrMqqeBlxwPY3GLxVJcX3fjI9iXf%2BhklEMjCgnhM8RffSJZ3sWqhDRlzWQ5Qt84WtrP3AWBq9SzansnN5FwmB0Ymty7X7b67i51YNaM3IN33WlOal2CO8FEZxcOpuZvaoSds6zP9755eh8q4xc3K6tVigbSpHQOVCid189tJMOso9T84O5DIGWHnoSbVYA99ekRmA3oZeIxG6%2FUCBx44tX3PHfpJSRVLZtdKqAJKfIuRuzqnApYNTAPk4PSTKW%2F0ei%2BoGrC3zjepRrvruj6ecHAYvaUM53ygPHUM8C8lTi1sPc45Yd9aqGviAQWfNxa23Gv4NtOJAJVjmMLBU1HV4s%2Bh%2BOBFe6qqF1DrKnPVHdIWP3DzGBYyIMMhupk6H0Cy8NvnRD8uWphRowzOloYUCO8ld0iMidy9h46S9%2FW8yKLhOu8wvdmV80Xw%2F0JGdZux6k0%2Be9R1whgsF90XdB9NGzw6%2FqjFdvnBC%2BCwi%2BpHOvML2ez8kGOqUBQ9EfnKHsrNAc0xluGFEJKJFmRP2rYtdnPKRVMAC1MNyqgaFkN%2FNUPB6mYKhLxnMh98mIMI40Zl3SXuNFOikZzGp4m4R4cN1XVGR0dA50%2FJpaAscKOZ4Gwe%2FV5XU8YO4uE1CIJEZFU4E3mY2eqgUgIsU%2B%2BVRLswvyozEx9RV5Z5HK7u%2FJtnH89eRbVzu4IVxeRFNt52kZ%2Fl6k2rgTrDGpbNRGK4A8&X-Amz-Signature=e617170c870f47bc6aba1a2f31f0d0532e903f702d3bb0afe65b607b1b2ecca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

