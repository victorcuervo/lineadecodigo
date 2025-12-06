---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QVYRIQI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T051222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDL81n9J7t%2FqP%2BC5LbPTIJdOUrd75mcydrsh5%2FdDZZ6gIgNy6FvsR4sVZbr3kFEgi8MfX7A5C9x3fHZh0z%2BJjdxaYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMngG%2BcLsAH%2BzPfN%2BircA5IoNrNbbhTSdIjDrLQCvhnf1cgaDQP8QQGJySTQXnCEgt1Qm07KouA9V%2Bp3S1VqB1I%2Be%2F7MGlxKi473ptAJ8itrKAnyYZuzRbsRdHFgDnY3hdDrpOOGR8CmjsvSjOR3be29zhQviqNIYgw3uEQSZG%2BXk69%2BMT9zKbJVeK3ToeE3znAYC9%2BRPmYHvSCiI1Cw5fjVZlzhgkTVw4OxtpxSlUxlY1GuCJKIA7OGhWSfN1Vv90UmmDx4LIOqYTxGzdj4%2F2BVTE%2FUmztPFzupY%2BZ%2Bt6jTlO8V9o1nEeHhaW94g4N%2BVsIiRFar0D08YymbEdliIgx592n3QmsjjnYVLrJ6oT3lm1WUtwB5r59lg1b50Qn5osSL597inj7ZB7adMJJ4lmVsU6zdjenXjMt%2BgVS12XDS9RJ8inQ0TRPpWl8gJuv%2Bx6YD%2FJbId2kS%2Bces%2BowWTPhmvN%2B2G8myTi0CJ8A3qx2rG2DpY0sYbPN7QePSYik5AgxnSLefFs%2FVwRY4iMNh%2BjykroNBWAijBrzhWgq9i5fXEAWBWs35iEsTYBRLv9R78oy59bUuofPl9okXBYGMupOZybx5GpR2wyDj8fcmoFneTNnYIFMZWEqZewD0Y3SGewFflRrjkq0TxmA5MJvezskGOqUBkQy%2FH%2FoDLFklxIhDUn3TYTeeCXCgbYc2UvJ8NHGBS%2BNUPZAzwRxFpfWfVopuLazKRCcG6ZIKaQoQMlvGAfWoaqhHBjrlsN7gaTzU1Jt3Nwu3xhD9N6Owjaw0d8Nl0AtvJL1YtRMJXoQLdR33ch4YvrtqJ%2B1%2FTxAnIkJYTLMT9sAZrjF%2FkSzpqgM6PebazfO%2B9ikglAe5lUhrrNC8H9RE50Fd5fmX&X-Amz-Signature=730704e42cc81fbb6bcc57cf987570f430af69507124e6f56fc743c19e5dd4c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QVYRIQI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T051222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDL81n9J7t%2FqP%2BC5LbPTIJdOUrd75mcydrsh5%2FdDZZ6gIgNy6FvsR4sVZbr3kFEgi8MfX7A5C9x3fHZh0z%2BJjdxaYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMngG%2BcLsAH%2BzPfN%2BircA5IoNrNbbhTSdIjDrLQCvhnf1cgaDQP8QQGJySTQXnCEgt1Qm07KouA9V%2Bp3S1VqB1I%2Be%2F7MGlxKi473ptAJ8itrKAnyYZuzRbsRdHFgDnY3hdDrpOOGR8CmjsvSjOR3be29zhQviqNIYgw3uEQSZG%2BXk69%2BMT9zKbJVeK3ToeE3znAYC9%2BRPmYHvSCiI1Cw5fjVZlzhgkTVw4OxtpxSlUxlY1GuCJKIA7OGhWSfN1Vv90UmmDx4LIOqYTxGzdj4%2F2BVTE%2FUmztPFzupY%2BZ%2Bt6jTlO8V9o1nEeHhaW94g4N%2BVsIiRFar0D08YymbEdliIgx592n3QmsjjnYVLrJ6oT3lm1WUtwB5r59lg1b50Qn5osSL597inj7ZB7adMJJ4lmVsU6zdjenXjMt%2BgVS12XDS9RJ8inQ0TRPpWl8gJuv%2Bx6YD%2FJbId2kS%2Bces%2BowWTPhmvN%2B2G8myTi0CJ8A3qx2rG2DpY0sYbPN7QePSYik5AgxnSLefFs%2FVwRY4iMNh%2BjykroNBWAijBrzhWgq9i5fXEAWBWs35iEsTYBRLv9R78oy59bUuofPl9okXBYGMupOZybx5GpR2wyDj8fcmoFneTNnYIFMZWEqZewD0Y3SGewFflRrjkq0TxmA5MJvezskGOqUBkQy%2FH%2FoDLFklxIhDUn3TYTeeCXCgbYc2UvJ8NHGBS%2BNUPZAzwRxFpfWfVopuLazKRCcG6ZIKaQoQMlvGAfWoaqhHBjrlsN7gaTzU1Jt3Nwu3xhD9N6Owjaw0d8Nl0AtvJL1YtRMJXoQLdR33ch4YvrtqJ%2B1%2FTxAnIkJYTLMT9sAZrjF%2FkSzpqgM6PebazfO%2B9ikglAe5lUhrrNC8H9RE50Fd5fmX&X-Amz-Signature=181b48f904bbd1df6df8e9f975da2ebe6b183f6dd3bca692a11b8cbe96ca2156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

