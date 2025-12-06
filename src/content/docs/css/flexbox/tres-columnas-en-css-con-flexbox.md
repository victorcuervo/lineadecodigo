---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4YRLT2X%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFDIoHz%2F0tIN9Dib%2BvcR6y5bQGrv9qV1QWatX2uGTmOqAiBxhY7QjVRsM964BXHl2ZnRhZaMRzTSriRR7YW0Y7B5%2Fir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMmotHezUzS5i4NibTKtwDHC3A4rp6THf%2FF%2B2Ra47V%2B%2FKmQQcJwScpR5%2F%2FHcUZWZ28WxNOZ6RA6ZkdBExIKrXZekeccCJfJzTSEmkT1%2FH5dPgLl9US7jFBZOVzAVXHP7Z8RIUI5LSwF94EWhB5g6rvRrg5T4PXQ2Cll2s3%2FuDPI9bpKTFCprWz%2Bnn9d%2BJYkY27X1c94L%2Fu5YvNknMeP6ITf8aTMLL1MrjLHX0zpwtIfgU8VPVDa823uq813Hi0zUhPT7OXJY8AquOKotA9s4K2xvH9EaAV3sO5ZPFYjZ43oNBtJgr%2BsmxZOiGdlEtqQUjprIbSMUvdVfy6KYuIUFV%2Bf4FcJzsxCZPwuAaM2AAPr4ygsPVMmkLPuLt%2BObXyVXMoJYNZerCx57o0byyPefAG1fvzNaUXsZFSkrxzpjcobrm8YXkBswTBzF9PU1Y7vsrMmdg16T3AzBaP%2BPTAdj6VwCqfABmwEWa%2F4xbiSRuGm4chdPWFx59A7n%2Bwzl6w2W4YIyLn8%2F8FQTH4LgWOTHrl%2FsCEnT%2B5jKRgaVRX5DNrUjDE8fJVKd%2F8wws%2FiazpUYvXamzzbTQ6YDF1R8KP0W6jGXuUPCU1G9wQs%2BdcMpxyjCNIvejuZuNlP8QNm3ZhllY1QXAJK4tKUscyaSYwisrRyQY6pgEFpKeTs5XUKr4YcSODtXAP3WAbD9l3ZkWC06b%2BZhSmxiwVNiW%2BLWzY%2FYXIrnkN%2FeMNtSwtyJahSkPPRTq8r5TIxhryRrVeUdyIHsfaFDqLID%2FiE7tHEANU3GQU%2BoR%2FYRugOGJOwiVqtuD04clVKeghOElVWGyJJ0jGcVGdZ5cUtgmilrMGiUl%2B%2BusmH86G0KLkgvB9I4StKpX%2FfJEJ6lf1sxFfgX8%2F&X-Amz-Signature=0eca45c51834be985dd6e5a0ee97ff0156cbd51e114a96c84b5394d5aafdfa23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4YRLT2X%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFDIoHz%2F0tIN9Dib%2BvcR6y5bQGrv9qV1QWatX2uGTmOqAiBxhY7QjVRsM964BXHl2ZnRhZaMRzTSriRR7YW0Y7B5%2Fir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMmotHezUzS5i4NibTKtwDHC3A4rp6THf%2FF%2B2Ra47V%2B%2FKmQQcJwScpR5%2F%2FHcUZWZ28WxNOZ6RA6ZkdBExIKrXZekeccCJfJzTSEmkT1%2FH5dPgLl9US7jFBZOVzAVXHP7Z8RIUI5LSwF94EWhB5g6rvRrg5T4PXQ2Cll2s3%2FuDPI9bpKTFCprWz%2Bnn9d%2BJYkY27X1c94L%2Fu5YvNknMeP6ITf8aTMLL1MrjLHX0zpwtIfgU8VPVDa823uq813Hi0zUhPT7OXJY8AquOKotA9s4K2xvH9EaAV3sO5ZPFYjZ43oNBtJgr%2BsmxZOiGdlEtqQUjprIbSMUvdVfy6KYuIUFV%2Bf4FcJzsxCZPwuAaM2AAPr4ygsPVMmkLPuLt%2BObXyVXMoJYNZerCx57o0byyPefAG1fvzNaUXsZFSkrxzpjcobrm8YXkBswTBzF9PU1Y7vsrMmdg16T3AzBaP%2BPTAdj6VwCqfABmwEWa%2F4xbiSRuGm4chdPWFx59A7n%2Bwzl6w2W4YIyLn8%2F8FQTH4LgWOTHrl%2FsCEnT%2B5jKRgaVRX5DNrUjDE8fJVKd%2F8wws%2FiazpUYvXamzzbTQ6YDF1R8KP0W6jGXuUPCU1G9wQs%2BdcMpxyjCNIvejuZuNlP8QNm3ZhllY1QXAJK4tKUscyaSYwisrRyQY6pgEFpKeTs5XUKr4YcSODtXAP3WAbD9l3ZkWC06b%2BZhSmxiwVNiW%2BLWzY%2FYXIrnkN%2FeMNtSwtyJahSkPPRTq8r5TIxhryRrVeUdyIHsfaFDqLID%2FiE7tHEANU3GQU%2BoR%2FYRugOGJOwiVqtuD04clVKeghOElVWGyJJ0jGcVGdZ5cUtgmilrMGiUl%2B%2BusmH86G0KLkgvB9I4StKpX%2FfJEJ6lf1sxFfgX8%2F&X-Amz-Signature=fbd51715d2eccb3e8415a3cff48e8e1eae5b2fc5f2237285d959399d2b0f71f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

