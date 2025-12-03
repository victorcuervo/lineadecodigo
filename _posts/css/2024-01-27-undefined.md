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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIVI3CL3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T063440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCtX%2BfSGca0qp3x2cg5i%2BLaREZ6CRVU0WmxcKIfxmY%2FLgIgU0vJp2IMaclqUZQuvKbhcRaDpfaL3pKUHKGmU5CrlrEq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMpTvkT4JIoxY7naYSrcA0zLrVFEt15fSc2scInyTtzASVtWX%2BBzet%2ByP70pVDC36OhEX3hmwTcG7JtkaDFyZP5xurcLuBXXHehggDzQZm%2BXIET0zcUdp%2BVNc9F3Ur2zhD0w5kV8gHcLzAtYtmlA56kLhy1odCOeekCg1Nxgfuv4sGrNqw7X762Hp%2B771TACEBblGKWwwzSJ43teHtlDvDQSab3BwORp8iinUkgmu5FrwBc8VMWBDwg6RIGLAJguwJm4Ok4TzOWy63y6Fc5zE3z1uxohrrMII%2B50HPbij0zlZUELJXvnEcL4Feem1g57NIZi69wx1ZqYdL5Cuc2NERi7GQB8Qkcmc2070pYdTDJliEsJE%2BqPrnnpav4hcuBTPfxoWNY%2F%2FNa38Y6WIQJNt5OE3HBZX6MOWNuCmYzNpXGNP%2Bzfq4KFhMCaVMj5wBc1FvqUwlDZJHgqAMT9yToA%2FTUHL4chYVK2Bt3bMrZuBD9FIbVPiwZFOSczCEYoU1fVaoI1g49v3siH3EVXzOwcdT%2FHUGdHXht3QYcCzC4RiE0RDarK8%2BBKr%2FvD8SAqLj%2FhNUp%2FrrTvZeHaybBFDBtWDgB59zYm%2F0NSjL0rsQkh8XzJI99g8ILtqv4FrQ1fjoRvX9Q0kCASm9r7f3l7MLSav8kGOqUBkuUlnCApMN%2B7Qzc5QbWNBQo%2ByZyQwWg1priEp1SyOcFDJ4%2B9v4ZU2uhqpO75BDM8tUfRclo3t8uaYZkK0kGiHxKTfRftjVTBUG0yxFl%2BRYTzUreeIPPvsT%2FzKtbp9wRpNehO9cChZsmIm0mkTBINl1C8W5MHEhEmb2hXsGnuDUcDZ6kE7ltw4N6Ef9QLTT2A6JsNqXoIX0qfLsDBxZwJ2f%2F2bQOG&X-Amz-Signature=fc57eb8b3a6fc9647ee6cc132b628dfe5079fbfae0a1717dd9073a15505c0618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIVI3CL3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T063440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCtX%2BfSGca0qp3x2cg5i%2BLaREZ6CRVU0WmxcKIfxmY%2FLgIgU0vJp2IMaclqUZQuvKbhcRaDpfaL3pKUHKGmU5CrlrEq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMpTvkT4JIoxY7naYSrcA0zLrVFEt15fSc2scInyTtzASVtWX%2BBzet%2ByP70pVDC36OhEX3hmwTcG7JtkaDFyZP5xurcLuBXXHehggDzQZm%2BXIET0zcUdp%2BVNc9F3Ur2zhD0w5kV8gHcLzAtYtmlA56kLhy1odCOeekCg1Nxgfuv4sGrNqw7X762Hp%2B771TACEBblGKWwwzSJ43teHtlDvDQSab3BwORp8iinUkgmu5FrwBc8VMWBDwg6RIGLAJguwJm4Ok4TzOWy63y6Fc5zE3z1uxohrrMII%2B50HPbij0zlZUELJXvnEcL4Feem1g57NIZi69wx1ZqYdL5Cuc2NERi7GQB8Qkcmc2070pYdTDJliEsJE%2BqPrnnpav4hcuBTPfxoWNY%2F%2FNa38Y6WIQJNt5OE3HBZX6MOWNuCmYzNpXGNP%2Bzfq4KFhMCaVMj5wBc1FvqUwlDZJHgqAMT9yToA%2FTUHL4chYVK2Bt3bMrZuBD9FIbVPiwZFOSczCEYoU1fVaoI1g49v3siH3EVXzOwcdT%2FHUGdHXht3QYcCzC4RiE0RDarK8%2BBKr%2FvD8SAqLj%2FhNUp%2FrrTvZeHaybBFDBtWDgB59zYm%2F0NSjL0rsQkh8XzJI99g8ILtqv4FrQ1fjoRvX9Q0kCASm9r7f3l7MLSav8kGOqUBkuUlnCApMN%2B7Qzc5QbWNBQo%2ByZyQwWg1priEp1SyOcFDJ4%2B9v4ZU2uhqpO75BDM8tUfRclo3t8uaYZkK0kGiHxKTfRftjVTBUG0yxFl%2BRYTzUreeIPPvsT%2FzKtbp9wRpNehO9cChZsmIm0mkTBINl1C8W5MHEhEmb2hXsGnuDUcDZ6kE7ltw4N6Ef9QLTT2A6JsNqXoIX0qfLsDBxZwJ2f%2F2bQOG&X-Amz-Signature=6d8835cbcd4ce0588539a16c66f52869873238f56c57638efff26bdda4d83bed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

