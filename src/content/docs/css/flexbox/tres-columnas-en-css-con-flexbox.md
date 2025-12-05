---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAI56Z3S%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T022345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrQ5Fe20nE7ybla1iYRoGoVb0GLboCjaWD8qvrKz3BAAIhAPb6jCfsGnfXITOICFRiGGQTC9T1F4FaphdEcSsZxWc%2BKv8DCE8QABoMNjM3NDIzMTgzODA1IgxjeOsG34jKDT49OKoq3APrJtDHWz5gnu5ih6UT0yW9lyHgmofL2XiZJnG1mTlWpmAVDqepQcLiB7cJf7CNugcom6rOO3%2FTDDnnWOb9zksXo5CUJaD4eiPkauihA1BmP2WKDJaqaC10q%2F%2FMh7usbTv%2F2f5MPYJG4ZmkRV%2FcYUUSLzVkdKR0YJY1YxfteHdiUDtB%2BAcis%2F3Kyn%2FQ6%2FkwpPf2Kh7Ua5hucU0Etc9NAwyGL1oti8LhGXr36mXMQJF8AmzEUq4FfDhNJYPO2Yg99vGB6fafOuc4ctNiwv6P2Vp2%2FWU3zaBGzPKxmId3Famx4%2F0G1bqKa52%2F4Xhc1cCHovf%2FjsCkmcUHV%2BEZKsHLAjPbr%2BUzB%2Bxk%2BltANewJp0xh3XU9R%2FVS9%2BPPTHE63skVCJVh3iE1R5iS8GdLJs77rvMGtWuJrXnEXFxUZHLClPvXU59ZoejUNK00voxiuXHEYdb36eDAQPdAaQdaEnfMJWZzBcBNnNoAov2nJDfEHWqqUPKxhWBGKoURf%2B82VMM42L5M6F4NT8Irjue%2Fq3zXespMXlcrLx8td15EmEiuLR2o6BVpnU%2BPqc1ffcGRiQCmJA6%2FYgz%2FNSARyVBeGovP%2BloXdU3ms2vFL5otOPDbVnBBDBuxbwFCyEuDezPR2DDyjMjJBjqkAQauglmfAo%2Bqjf8bHZ9n%2FE2ngNzfabYSl%2B3cMUXLnJ9xUaIbJf%2Bh0zCpR2R9F20mH4FfDNHmwuFcrUSuS%2BgH0n9EMNMYP2mCkmnvnxYwYyMnE%2BQPxUKU1cD6KRkZOxp5jSE6XEhFmlqKCar7HIqKNXTINfaTpmFeAkJHRf2V01U%2BvVzEh00rJsY6l4f3wvdRyYV4EXMUdisfZ2zFmvo84yL13mQG&X-Amz-Signature=57e30949fadcc0707c51d87202068c350aaf907c1b933449c2082e7a2adfa3c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAI56Z3S%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T022345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrQ5Fe20nE7ybla1iYRoGoVb0GLboCjaWD8qvrKz3BAAIhAPb6jCfsGnfXITOICFRiGGQTC9T1F4FaphdEcSsZxWc%2BKv8DCE8QABoMNjM3NDIzMTgzODA1IgxjeOsG34jKDT49OKoq3APrJtDHWz5gnu5ih6UT0yW9lyHgmofL2XiZJnG1mTlWpmAVDqepQcLiB7cJf7CNugcom6rOO3%2FTDDnnWOb9zksXo5CUJaD4eiPkauihA1BmP2WKDJaqaC10q%2F%2FMh7usbTv%2F2f5MPYJG4ZmkRV%2FcYUUSLzVkdKR0YJY1YxfteHdiUDtB%2BAcis%2F3Kyn%2FQ6%2FkwpPf2Kh7Ua5hucU0Etc9NAwyGL1oti8LhGXr36mXMQJF8AmzEUq4FfDhNJYPO2Yg99vGB6fafOuc4ctNiwv6P2Vp2%2FWU3zaBGzPKxmId3Famx4%2F0G1bqKa52%2F4Xhc1cCHovf%2FjsCkmcUHV%2BEZKsHLAjPbr%2BUzB%2Bxk%2BltANewJp0xh3XU9R%2FVS9%2BPPTHE63skVCJVh3iE1R5iS8GdLJs77rvMGtWuJrXnEXFxUZHLClPvXU59ZoejUNK00voxiuXHEYdb36eDAQPdAaQdaEnfMJWZzBcBNnNoAov2nJDfEHWqqUPKxhWBGKoURf%2B82VMM42L5M6F4NT8Irjue%2Fq3zXespMXlcrLx8td15EmEiuLR2o6BVpnU%2BPqc1ffcGRiQCmJA6%2FYgz%2FNSARyVBeGovP%2BloXdU3ms2vFL5otOPDbVnBBDBuxbwFCyEuDezPR2DDyjMjJBjqkAQauglmfAo%2Bqjf8bHZ9n%2FE2ngNzfabYSl%2B3cMUXLnJ9xUaIbJf%2Bh0zCpR2R9F20mH4FfDNHmwuFcrUSuS%2BgH0n9EMNMYP2mCkmnvnxYwYyMnE%2BQPxUKU1cD6KRkZOxp5jSE6XEhFmlqKCar7HIqKNXTINfaTpmFeAkJHRf2V01U%2BvVzEh00rJsY6l4f3wvdRyYV4EXMUdisfZ2zFmvo84yL13mQG&X-Amz-Signature=3e8421bdc9c11989060d1fc86406d5b83bccdd2d2921153bce66aed1fa2ab60b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

