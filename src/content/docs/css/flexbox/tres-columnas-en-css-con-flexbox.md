---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZRZSCHX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T051100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVKuYmozGzxjmSg4gfI1skHuV6Q0cXtNpMH7nNyoIl2AiBffpssz9Zg6GoBrq1Aa5diDKnG8Uau3gTWpR6rGpWh9Sr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM9%2F6T1XzU6wabC5F0KtwDaplwb4ll3w84jCjteUxCZvisUOUaVpSPLhEwD00K4b9cw5LuHjrBTMwzMmDt2fSiMvTi2iJgcTd78075J2cfJ%2FbeD%2Fs4UIiUW3rT9YJgXSUP%2Bjr3fcIWSeTMSLgo0Ij79DWd5xulSzdp%2B6MAJJPBSqgl6fO5GCVY4o7%2FXVN4JcEyD%2Bhog3sC1PjbboZckhmT6ypgsxir%2FRRrS1aoCD3QdQHG3IeBVnxNDY8fligQ11mbtHSgC4fDfiSZnWF0l6VflNSNAzztBCKyuv1KGrqdzNWrX3hsx73j%2Fc%2Fb8i1%2BpnmvshM0ZwclwJwssqUovicmq1hMzYJufuY4UqqFlZUQsIXfIaUKszw9CrhK630hD0CEzm1nticMaqSZMvwKpj8%2BYhwmcoegTiS4wNLS9zNaYGjkMC2gDdH6SfV9uYBPApZKaQldtFyTVWJ3HQII%2BWPihNvMXOK2mya%2BHHDvY4Vdon54SvsH7YiLLIjHPWNwA%2BPAI4uq4gmnpjAiYUaS%2B9Q2h6w7FcWcKzx7%2Fc3%2BJX3n%2BFYgL5noqipXYd8Icc2ZAke7aXSErdb%2BUS6s4562dztg%2BxtJj9cDVMEPCbTn0mlRIbCDOwnBBMrdyj0FlcLalN4EkBEA6nvKdz7Y%2B88wgt7OyQY6pgEJRIOtPYv%2FZGNs7g6K9r7J4hdvla2RnNPGI9wAdbKJ4u%2BrWW%2BgjYyCGMpf8jsBjlI8o3PmiMskZ21v6FxpEKGU4LfOpRp9uljl4MHWXX4%2FyMLDdFFvM9w6V6kji3d66CImxhiX56yC6QZOcyNsfpgbzMsIBipcNYsPu25QcyKGEAZSl%2Fh8BO1TjD%2F99C1%2BtvEeIydd%2Ff5hv5V%2FXEPSEF%2FDmkiOUMqb&X-Amz-Signature=e012e0b6474befda771da62dd20f5709369ffb14091a27db6ebc14d34029928f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZRZSCHX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T051100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVKuYmozGzxjmSg4gfI1skHuV6Q0cXtNpMH7nNyoIl2AiBffpssz9Zg6GoBrq1Aa5diDKnG8Uau3gTWpR6rGpWh9Sr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM9%2F6T1XzU6wabC5F0KtwDaplwb4ll3w84jCjteUxCZvisUOUaVpSPLhEwD00K4b9cw5LuHjrBTMwzMmDt2fSiMvTi2iJgcTd78075J2cfJ%2FbeD%2Fs4UIiUW3rT9YJgXSUP%2Bjr3fcIWSeTMSLgo0Ij79DWd5xulSzdp%2B6MAJJPBSqgl6fO5GCVY4o7%2FXVN4JcEyD%2Bhog3sC1PjbboZckhmT6ypgsxir%2FRRrS1aoCD3QdQHG3IeBVnxNDY8fligQ11mbtHSgC4fDfiSZnWF0l6VflNSNAzztBCKyuv1KGrqdzNWrX3hsx73j%2Fc%2Fb8i1%2BpnmvshM0ZwclwJwssqUovicmq1hMzYJufuY4UqqFlZUQsIXfIaUKszw9CrhK630hD0CEzm1nticMaqSZMvwKpj8%2BYhwmcoegTiS4wNLS9zNaYGjkMC2gDdH6SfV9uYBPApZKaQldtFyTVWJ3HQII%2BWPihNvMXOK2mya%2BHHDvY4Vdon54SvsH7YiLLIjHPWNwA%2BPAI4uq4gmnpjAiYUaS%2B9Q2h6w7FcWcKzx7%2Fc3%2BJX3n%2BFYgL5noqipXYd8Icc2ZAke7aXSErdb%2BUS6s4562dztg%2BxtJj9cDVMEPCbTn0mlRIbCDOwnBBMrdyj0FlcLalN4EkBEA6nvKdz7Y%2B88wgt7OyQY6pgEJRIOtPYv%2FZGNs7g6K9r7J4hdvla2RnNPGI9wAdbKJ4u%2BrWW%2BgjYyCGMpf8jsBjlI8o3PmiMskZ21v6FxpEKGU4LfOpRp9uljl4MHWXX4%2FyMLDdFFvM9w6V6kji3d66CImxhiX56yC6QZOcyNsfpgbzMsIBipcNYsPu25QcyKGEAZSl%2Fh8BO1TjD%2F99C1%2BtvEeIydd%2Ff5hv5V%2FXEPSEF%2FDmkiOUMqb&X-Amz-Signature=270688644d25ebec1fddb56897c724f336f2028a75f73d2d9f639ac0f223c192&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

