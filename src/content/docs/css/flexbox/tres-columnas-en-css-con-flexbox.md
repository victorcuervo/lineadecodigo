---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PLB6RWR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHXcOt%2BCpctLfZ9zhMRU0s%2Bz9ak5or6hjbB9tY%2B53X3wIhAPg4Mst4wrbRX76cJ0xt1v0i4btn0eQ0cqJc3KTa%2Fz1MKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBVQdP%2BaVeu%2Ff3KPYq3ANVDzn1uKqCUIwnvoZf%2BuhPZ99rNiFjo8xrh0WXuQkoJmx6jQDoEw7q33ezELIbPz4UmWCZUd161vMbr2p591WmrDXJbzeeh%2FRYjurGFzT3vlYGf0qOZt3lLuWZtkLUAMKcMONruuGIWwgDR%2FUxFSafBH7WSvK3VMVmtFmvNs9nkPPPNdeYghrygTgX4ilJQ0pqr8fHLRlc9JKZVP0Cg3QM3Nspb3rryM9uigQ%2Bxee7XwPGxV5bR1GHfCzF%2Bvj8QAok5kAwuZhbdV7hseGo0qsLZSe9wvWxSyMlC5%2BmcVSr3sj29ZwslKMGUGuY7NQ6yAmlsmXGDeGuPERsN5NhEwoD85mFbkh0fY8BRnYW4hLeL6lZOOnqQZMTnmmO1MszWSj51OHa7EbYTunDU5%2BeCFUNDbVTM%2BJG5BCNfY%2F55ojMl5f%2BK15zWwKdz9Z0K%2Btxn0et2ruyDgSxgOHfQZaLARMnvSCPIjFmgm6spbpN22wU5GTxA09FFWaifXSNWxD7royzdiXJzbUfCKixjuum2yhmGJHF8o6hpuDb2iQ39HUfv6Ycmst77x5EjpFk%2FZ4uWg4wIFyILYSGcZ1mnq2LJ01ImvdIoYwl1mDHXZm8HY7dj0wddi7eP9E8DP3OLTDWlNnJBjqkAdBtNsgsJ7tHErv%2BcDre1vufNx87BOUFiU%2Bgqv%2B%2BgSFT7x7T4VK7CLfeyaFzX1FU4V%2FCV84ZtyRX2YMo18qpr1CEZ441GoxefZqkCoFiUuedf3PW73tnNlymVPsIqvZA7SEsDlRZlbJPUNAdIR4IGORsZ0r%2Fn0CTo38dMH%2Btw4a9GG0Co2sueN%2Bl1dBQ1r%2B%2Bun6RExOhwuKY9PnFvG2b47s4jMXj&X-Amz-Signature=c263693dc273905e385557c420da17dbe6b5bdfda4717ad3b70d259e3339af77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PLB6RWR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHXcOt%2BCpctLfZ9zhMRU0s%2Bz9ak5or6hjbB9tY%2B53X3wIhAPg4Mst4wrbRX76cJ0xt1v0i4btn0eQ0cqJc3KTa%2Fz1MKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBVQdP%2BaVeu%2Ff3KPYq3ANVDzn1uKqCUIwnvoZf%2BuhPZ99rNiFjo8xrh0WXuQkoJmx6jQDoEw7q33ezELIbPz4UmWCZUd161vMbr2p591WmrDXJbzeeh%2FRYjurGFzT3vlYGf0qOZt3lLuWZtkLUAMKcMONruuGIWwgDR%2FUxFSafBH7WSvK3VMVmtFmvNs9nkPPPNdeYghrygTgX4ilJQ0pqr8fHLRlc9JKZVP0Cg3QM3Nspb3rryM9uigQ%2Bxee7XwPGxV5bR1GHfCzF%2Bvj8QAok5kAwuZhbdV7hseGo0qsLZSe9wvWxSyMlC5%2BmcVSr3sj29ZwslKMGUGuY7NQ6yAmlsmXGDeGuPERsN5NhEwoD85mFbkh0fY8BRnYW4hLeL6lZOOnqQZMTnmmO1MszWSj51OHa7EbYTunDU5%2BeCFUNDbVTM%2BJG5BCNfY%2F55ojMl5f%2BK15zWwKdz9Z0K%2Btxn0et2ruyDgSxgOHfQZaLARMnvSCPIjFmgm6spbpN22wU5GTxA09FFWaifXSNWxD7royzdiXJzbUfCKixjuum2yhmGJHF8o6hpuDb2iQ39HUfv6Ycmst77x5EjpFk%2FZ4uWg4wIFyILYSGcZ1mnq2LJ01ImvdIoYwl1mDHXZm8HY7dj0wddi7eP9E8DP3OLTDWlNnJBjqkAdBtNsgsJ7tHErv%2BcDre1vufNx87BOUFiU%2Bgqv%2B%2BgSFT7x7T4VK7CLfeyaFzX1FU4V%2FCV84ZtyRX2YMo18qpr1CEZ441GoxefZqkCoFiUuedf3PW73tnNlymVPsIqvZA7SEsDlRZlbJPUNAdIR4IGORsZ0r%2Fn0CTo38dMH%2Btw4a9GG0Co2sueN%2Bl1dBQ1r%2B%2Bun6RExOhwuKY9PnFvG2b47s4jMXj&X-Amz-Signature=e6775fb03754143d50e967ba88c3d2945675510b30f9a9f603b066f632ae1f4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

