---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632A6GUGJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T192739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKWU3ILRkWGsc2hpTp5mRovyaHKfUbgLcfYzMUkK6J0wIgBTgvtM0xwv%2BysZZsGgI%2FHAKOtSMokGTMdSUHUS4Ht7wq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCNKzCbyDWxlj%2BmvnCrcAz2lRe1WbwDsnCeJh3ZxEtq66dGsZhAHcVESJs2OY1%2B01y4nJfWezcKvlUMGvEmd7HYRCM3vvW%2BSz6EFEa%2BcO%2FYjMysGyg9jL7dp%2FIgGA391cyGnNUSWh8GkhvleGFneTUSABNuzJWYrK5%2Bf6z2DaKR2WSPAlEa%2B5qRyPxpWj2NY4yl5EV%2FlnxBaUtiBGYpWeGxHi5b5AKEH2crWhnCq9Qarcf3RTDmpyFkH1%2F%2BflbvtBEMtZe0RUeN8QE0KPNvKIjJ7YnUjLVMkt%2F6lkZgqRiXRMxgiZx3K9UFs9Kde%2F0SuRMKK5E40UXNXy5nj2rjEtjLhqNQEkVi1%2FT2wV%2Fac72PoRox1W83sxGQc2iO%2BnBJDiEameP8h776UvFGUDJq7K%2BC0INx6%2BdGmr3X6D0lY24UxEpN%2FFlLAZfnvtGdNe8SukitfFr50d%2BmKSLymOtcV1MfVhWCza2l5d5%2B0juevRJzlrx35ZjdmfA8hsT3Tdz%2BhsETHJ5LmEQB7%2Fqjj2tFZkDIsbVSiq0y1jfPPZKUEQDhWV4bhbwD2%2BC7GxqGdU7uylDzfm3P7aTRUJy1P99iCg8iPsC%2BTkWLYxbMFSi4qFC1Lai3P9dqTjmFRga2BNmHfDWJ9DGBN4%2FccqabyMITH0ckGOqUBfiM2wft5DJZTSkRBo7VLGY4Jt3ya63SDcJn%2Fe938DSFd1e0RFzY5aVYyl8WGYjwZBNP4UvEP%2FRy6re2qkA55zh5i%2F0QlaJjpi9UJe82b4zyL1lgm1V%2FMud2pVNUWQllYgfXdZZBx%2FrEA8cBprZrBr%2BfLPt5YsUl2G7M%2Bslooyj5BBWqmt4%2Bhm8mkUbT008DtPoiQVQsMTKpw9raOwHDJu7N3Vu9p&X-Amz-Signature=7c3aa69b9340c3a2e816ea9c71337a3749856d9c0da1a65af2055f258ec98e43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632A6GUGJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T192739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKWU3ILRkWGsc2hpTp5mRovyaHKfUbgLcfYzMUkK6J0wIgBTgvtM0xwv%2BysZZsGgI%2FHAKOtSMokGTMdSUHUS4Ht7wq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCNKzCbyDWxlj%2BmvnCrcAz2lRe1WbwDsnCeJh3ZxEtq66dGsZhAHcVESJs2OY1%2B01y4nJfWezcKvlUMGvEmd7HYRCM3vvW%2BSz6EFEa%2BcO%2FYjMysGyg9jL7dp%2FIgGA391cyGnNUSWh8GkhvleGFneTUSABNuzJWYrK5%2Bf6z2DaKR2WSPAlEa%2B5qRyPxpWj2NY4yl5EV%2FlnxBaUtiBGYpWeGxHi5b5AKEH2crWhnCq9Qarcf3RTDmpyFkH1%2F%2BflbvtBEMtZe0RUeN8QE0KPNvKIjJ7YnUjLVMkt%2F6lkZgqRiXRMxgiZx3K9UFs9Kde%2F0SuRMKK5E40UXNXy5nj2rjEtjLhqNQEkVi1%2FT2wV%2Fac72PoRox1W83sxGQc2iO%2BnBJDiEameP8h776UvFGUDJq7K%2BC0INx6%2BdGmr3X6D0lY24UxEpN%2FFlLAZfnvtGdNe8SukitfFr50d%2BmKSLymOtcV1MfVhWCza2l5d5%2B0juevRJzlrx35ZjdmfA8hsT3Tdz%2BhsETHJ5LmEQB7%2Fqjj2tFZkDIsbVSiq0y1jfPPZKUEQDhWV4bhbwD2%2BC7GxqGdU7uylDzfm3P7aTRUJy1P99iCg8iPsC%2BTkWLYxbMFSi4qFC1Lai3P9dqTjmFRga2BNmHfDWJ9DGBN4%2FccqabyMITH0ckGOqUBfiM2wft5DJZTSkRBo7VLGY4Jt3ya63SDcJn%2Fe938DSFd1e0RFzY5aVYyl8WGYjwZBNP4UvEP%2FRy6re2qkA55zh5i%2F0QlaJjpi9UJe82b4zyL1lgm1V%2FMud2pVNUWQllYgfXdZZBx%2FrEA8cBprZrBr%2BfLPt5YsUl2G7M%2Bslooyj5BBWqmt4%2Bhm8mkUbT008DtPoiQVQsMTKpw9raOwHDJu7N3Vu9p&X-Amz-Signature=7025112e2406bf82eaff649419fd8d9914fb69eb3be37792a22ac31535523846&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

