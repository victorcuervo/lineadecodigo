---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SYU3KLT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCDKu%2BctgFLzhGSVMHfTCnLnukhqfddjYHTFmWxlOwVqQIhAMy34Bvn3DJFFckwyWPX36H9KKrbUeiU8cL0IjbAXdmnKv8DCDkQABoMNjM3NDIzMTgzODA1IgwZfMqjw%2FmfT6n6rrQq3ANtlVATf6ez9kApImu%2FIsqcsAk6y2WPggcHvcfj4XnKGXZ2h7NR1KZhbOQdK%2F621TwuLTXbixJToym3gjd01%2FaPJb8Vw7ul%2FnH0qzwdoMxlLFK0bd2aJPFnNpIgwaTgx5a2iBdyoftLz0HLO3c5FaVDw63LhUDDDV%2FGLPN2xHCMUYvHXmjfKvFFlDF0VpLnCaf6P5jFpwzt6Z9ASKvFwAu3SZB9%2FcDeiAscEBe%2FHWjtYJchNxRYkm2fKRH4kCvTOkv%2BI%2BYmVXjDXMw8ncdRWVGNUtVD0whK3l31TMIfwW%2FAvCfc8ezucSbaACv4ARm5l2tyLkoQ8sL4DVXBRXm71RRtxvJn5Y024MCnLaER2K1PtU2l63h2S19nmdyhUSv4QWlIzE9dh5LaOs5VXeP51WlwVlH2RWFEsmdj80xKIM%2BJx99HNMZ%2Bxtp3zKih37wwHF0jrHXTj00nAH8vcrFEu1ZWyGCXpw7dHgtzsedg5h66yd2Euu9uvz85ibS1h80dJuXXiW5ptZG5NLZbhSoZUt32sWcqscsHAFLofo21%2FjGGVg%2F3eHQR5qycDTOG8QIRaqc2ndMe%2FR3UpvrS9x%2FdOiJD3eYGFi9g1d2w4d5RvSEV%2F%2FAHcJ5nYxDbE%2Fa9ZDD%2FlMPJBjqkAXsqTto5G1feMxMzTGik6Z4p2WOtBGjijy55qrdHXyoes8gudv5mlIM8BlqvvXObLs%2BOqg2njDeFLG4t5VqGcjL%2FLL84ahoxba4GD4LbbnVLRJJJEMAtMQR5iZL0Q%2FW56N7gSl%2F9FlJdZ1EmSOBnQGBDi5cWnxerB1n8kmlmE4LnYfOsc%2F3NcD0D7KSXcWZLo0epbjuec1Fuyx7U5assEB38J0Uu&X-Amz-Signature=c6eabd315be5250ef2a6a14fa78444dfc025c379e95c42815a7092418702e73e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SYU3KLT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCDKu%2BctgFLzhGSVMHfTCnLnukhqfddjYHTFmWxlOwVqQIhAMy34Bvn3DJFFckwyWPX36H9KKrbUeiU8cL0IjbAXdmnKv8DCDkQABoMNjM3NDIzMTgzODA1IgwZfMqjw%2FmfT6n6rrQq3ANtlVATf6ez9kApImu%2FIsqcsAk6y2WPggcHvcfj4XnKGXZ2h7NR1KZhbOQdK%2F621TwuLTXbixJToym3gjd01%2FaPJb8Vw7ul%2FnH0qzwdoMxlLFK0bd2aJPFnNpIgwaTgx5a2iBdyoftLz0HLO3c5FaVDw63LhUDDDV%2FGLPN2xHCMUYvHXmjfKvFFlDF0VpLnCaf6P5jFpwzt6Z9ASKvFwAu3SZB9%2FcDeiAscEBe%2FHWjtYJchNxRYkm2fKRH4kCvTOkv%2BI%2BYmVXjDXMw8ncdRWVGNUtVD0whK3l31TMIfwW%2FAvCfc8ezucSbaACv4ARm5l2tyLkoQ8sL4DVXBRXm71RRtxvJn5Y024MCnLaER2K1PtU2l63h2S19nmdyhUSv4QWlIzE9dh5LaOs5VXeP51WlwVlH2RWFEsmdj80xKIM%2BJx99HNMZ%2Bxtp3zKih37wwHF0jrHXTj00nAH8vcrFEu1ZWyGCXpw7dHgtzsedg5h66yd2Euu9uvz85ibS1h80dJuXXiW5ptZG5NLZbhSoZUt32sWcqscsHAFLofo21%2FjGGVg%2F3eHQR5qycDTOG8QIRaqc2ndMe%2FR3UpvrS9x%2FdOiJD3eYGFi9g1d2w4d5RvSEV%2F%2FAHcJ5nYxDbE%2Fa9ZDD%2FlMPJBjqkAXsqTto5G1feMxMzTGik6Z4p2WOtBGjijy55qrdHXyoes8gudv5mlIM8BlqvvXObLs%2BOqg2njDeFLG4t5VqGcjL%2FLL84ahoxba4GD4LbbnVLRJJJEMAtMQR5iZL0Q%2FW56N7gSl%2F9FlJdZ1EmSOBnQGBDi5cWnxerB1n8kmlmE4LnYfOsc%2F3NcD0D7KSXcWZLo0epbjuec1Fuyx7U5assEB38J0Uu&X-Amz-Signature=128c272c2ac43e686f5f4b5936b3d9e99b66f7d715e7836c12b3758a946bb072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

