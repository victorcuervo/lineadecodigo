---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEMPLCYE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T084846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Cm21w%2Brrt8MGcJtLMC7YhqOlgVeAnRqS%2B7a%2FSWA18QIgA1MkKGUhcFDXDROU6piHKAQp5aKrchMPRmBkClGYOTMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImEd11Rlj8%2FYDQCpyrcA6%2FQxfFLRGpfhNgONMUoBRv2q5nQwo9m4x%2BSCF19XSg6c9jsYA6jWLxfV8AshTLSazmGpv2q1SdhxiSaRp1cbdyCfgqP0HyFr92nyE%2BVS10%2BMg96z3%2BRPPDg81KaL3CeFiDZdvFh6JHEwinKqlhKvTUe6E2E00QpTPDlquy9TKzo6bB23rq2eVt%2BTXSHwtEWkuW15Nojmj1%2FzA%2FxzvSPbfUYaYifmuiRFqLTvO4o2E0t9W3E6pQD%2BBDeDbGV9D%2BGRNK4u6r2xHTsZaXYozJXnFMLFU7GYW4Vhku83dS1wJjDVqA%2BtaMhNpmUUg37qBKxlVg1LpodTL90DvdIS%2F0xO3F4U23OHnSbSy0WoONHnau%2B7xI1rHJJ7%2FQwndmdB1lhHdy7N%2Bs%2Ft7jogKkOyVGP4eCKamAr1dp0pDDAayspPnjLbBnhB%2FdLMLr9WN%2BqcWNrEDw%2B7elxKd8YjtbKnxgdDeMjofFFI2a%2BUzLPsA7zpquyVmLmeMyoRvvMHV%2FMLHKhTlrtBcYysgKjk6%2FuEZfMdNGrhcqeYnHKG7eHqTPxyV5T10NHieTgHWKE0gUgr7DgTp1OkuVoPASO4PsCxlaytnlnzK0eUBoXPNhUqIJXWIWSk8Mesu44UQ9hm58yMJvu2ckGOqUBHU%2BeesyFnaCklqI2q19j1L%2BbbsX%2BLzNrLO5AAbsWlCC89uJnuYLby0E7R9ANufKNoBzfwVcohWSkDlxFT702khsCfriSNaJSQruqDLve9CuCW5sGb9hmw4tPSDu82XwwgP9rNPx2PpZnmOg30ZkDfpfWOPsk%2BW1VSvYf%2F1li3t9%2FTcgbamXQMtGdX8f%2BkF304Hs%2FvbeA2SmT8jByhnLkl9To7rFf&X-Amz-Signature=638f04688227e59e979ade7f9461da94dfadd7182334e66eb099c637496b882c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEMPLCYE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T084846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Cm21w%2Brrt8MGcJtLMC7YhqOlgVeAnRqS%2B7a%2FSWA18QIgA1MkKGUhcFDXDROU6piHKAQp5aKrchMPRmBkClGYOTMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImEd11Rlj8%2FYDQCpyrcA6%2FQxfFLRGpfhNgONMUoBRv2q5nQwo9m4x%2BSCF19XSg6c9jsYA6jWLxfV8AshTLSazmGpv2q1SdhxiSaRp1cbdyCfgqP0HyFr92nyE%2BVS10%2BMg96z3%2BRPPDg81KaL3CeFiDZdvFh6JHEwinKqlhKvTUe6E2E00QpTPDlquy9TKzo6bB23rq2eVt%2BTXSHwtEWkuW15Nojmj1%2FzA%2FxzvSPbfUYaYifmuiRFqLTvO4o2E0t9W3E6pQD%2BBDeDbGV9D%2BGRNK4u6r2xHTsZaXYozJXnFMLFU7GYW4Vhku83dS1wJjDVqA%2BtaMhNpmUUg37qBKxlVg1LpodTL90DvdIS%2F0xO3F4U23OHnSbSy0WoONHnau%2B7xI1rHJJ7%2FQwndmdB1lhHdy7N%2Bs%2Ft7jogKkOyVGP4eCKamAr1dp0pDDAayspPnjLbBnhB%2FdLMLr9WN%2BqcWNrEDw%2B7elxKd8YjtbKnxgdDeMjofFFI2a%2BUzLPsA7zpquyVmLmeMyoRvvMHV%2FMLHKhTlrtBcYysgKjk6%2FuEZfMdNGrhcqeYnHKG7eHqTPxyV5T10NHieTgHWKE0gUgr7DgTp1OkuVoPASO4PsCxlaytnlnzK0eUBoXPNhUqIJXWIWSk8Mesu44UQ9hm58yMJvu2ckGOqUBHU%2BeesyFnaCklqI2q19j1L%2BbbsX%2BLzNrLO5AAbsWlCC89uJnuYLby0E7R9ANufKNoBzfwVcohWSkDlxFT702khsCfriSNaJSQruqDLve9CuCW5sGb9hmw4tPSDu82XwwgP9rNPx2PpZnmOg30ZkDfpfWOPsk%2BW1VSvYf%2F1li3t9%2FTcgbamXQMtGdX8f%2BkF304Hs%2FvbeA2SmT8jByhnLkl9To7rFf&X-Amz-Signature=4095e5c415eaeb1515540674c370b91d927ce0c553efffa8633d2e54a573683b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

