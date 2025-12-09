---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJTJPQIC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T075504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNy437yvsNrOZVAwMG8i6kZlrB9T43nR3a92ieCFtHcgIgD79pLgRQc1sJJdmMAt2YPB0VQTebD6AOt4hBHnoPVCAqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHFSKxZtTeICuetEyrcA2Bh%2BxBUkQIYKJL%2FR%2BsqSElp9m4Pm5LnNejlZnwkj%2FB90yorUOlU91G%2FiJCohueP0cHEB%2B6OP0AGxvPagdp5iKWCeF2jFqW4gPFBaMJbgHbYezuAVvgYCGsX0dAu2yfgprn2eFHGaXz%2B%2F7cnlzWdqMghXoEi8wTa7oVG4R66JGamGWKz6MSZ1G%2BLhaPFH8AQy%2FfRbZOIZ%2FTK2qxlzpI7N1JWsLljWRX6ugdlm8YXk0NH4j464wqBAfiQ4Pvg81yJHZvPyfp53gea5PATbv43Emkkg%2FZrb3JDNh1Kwb8r0z2weO3fn1kLsx%2FoN7%2Bxu3eFLRYJdkOmcOm%2FBFbglu2iEmMtBH%2Fpg0i01lB3ef9JBTYe3nN3%2FzlruiTxXmFEDU0skEk9jJFujuz0Ui0EzM6GGrRPa1yAdQMZ8oWbETdPXqpIHq5fYZ%2FyYOHfuhGfgSXgRisI2QRdL1xYzXntpPKZCgWJLTqjLUeYF7jVeGcpRdA1ylyJ%2B5CxM0ZrBEufuRyHro%2FHJVcMAFlKvgE8Ta7%2BxIEVtr03esTu1YGefrpnrrL5s2IejqKZim%2F%2BrwOxXDGztyAhx0xU7OHdknQh5gp23ogdTDPEz%2FSNqDgM23P1XEwSNELgeSz3X4TzgBL1MNKk38kGOqUBuBWCQHE7OOI9qNAgpOTKScQPjgHWgFeAFjelUnfbg1lNEXVknPMiONe3r1hkycKeLBiQqvLNddyusL1yVwAQ8Pll0S6fPJSrOX%2BKrNoe3U9vXI4t2iuOZ2cPo%2Bm4g0nDuALScWhMjr2h8c8w3BuJQDZuwvdc%2BkRj4oIXI4Y0tfc7odKa2rs8pZ6%2FHRhfjK6lVieIRNOIZ907JPqIAywfZdjZRF37&X-Amz-Signature=73625480c3333db833c2deff23588a3119e0dce1dbe324ef23dcf974d1052c1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJTJPQIC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T075504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNy437yvsNrOZVAwMG8i6kZlrB9T43nR3a92ieCFtHcgIgD79pLgRQc1sJJdmMAt2YPB0VQTebD6AOt4hBHnoPVCAqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHFSKxZtTeICuetEyrcA2Bh%2BxBUkQIYKJL%2FR%2BsqSElp9m4Pm5LnNejlZnwkj%2FB90yorUOlU91G%2FiJCohueP0cHEB%2B6OP0AGxvPagdp5iKWCeF2jFqW4gPFBaMJbgHbYezuAVvgYCGsX0dAu2yfgprn2eFHGaXz%2B%2F7cnlzWdqMghXoEi8wTa7oVG4R66JGamGWKz6MSZ1G%2BLhaPFH8AQy%2FfRbZOIZ%2FTK2qxlzpI7N1JWsLljWRX6ugdlm8YXk0NH4j464wqBAfiQ4Pvg81yJHZvPyfp53gea5PATbv43Emkkg%2FZrb3JDNh1Kwb8r0z2weO3fn1kLsx%2FoN7%2Bxu3eFLRYJdkOmcOm%2FBFbglu2iEmMtBH%2Fpg0i01lB3ef9JBTYe3nN3%2FzlruiTxXmFEDU0skEk9jJFujuz0Ui0EzM6GGrRPa1yAdQMZ8oWbETdPXqpIHq5fYZ%2FyYOHfuhGfgSXgRisI2QRdL1xYzXntpPKZCgWJLTqjLUeYF7jVeGcpRdA1ylyJ%2B5CxM0ZrBEufuRyHro%2FHJVcMAFlKvgE8Ta7%2BxIEVtr03esTu1YGefrpnrrL5s2IejqKZim%2F%2BrwOxXDGztyAhx0xU7OHdknQh5gp23ogdTDPEz%2FSNqDgM23P1XEwSNELgeSz3X4TzgBL1MNKk38kGOqUBuBWCQHE7OOI9qNAgpOTKScQPjgHWgFeAFjelUnfbg1lNEXVknPMiONe3r1hkycKeLBiQqvLNddyusL1yVwAQ8Pll0S6fPJSrOX%2BKrNoe3U9vXI4t2iuOZ2cPo%2Bm4g0nDuALScWhMjr2h8c8w3BuJQDZuwvdc%2BkRj4oIXI4Y0tfc7odKa2rs8pZ6%2FHRhfjK6lVieIRNOIZ907JPqIAywfZdjZRF37&X-Amz-Signature=27f40ae002e00357dcb804559be03e63fe3d2468cc0297c8b37b99377e7acd3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

