---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZW4Q7W%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T103613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BVm%2FUskhqDpVIVI2jOUwkyY9geoyU16n3zN%2BvGpGRTAiEAuM3bx5JWtkYl8NCOFGha4IgfY9ag5vK6%2B3QGSZnuh78qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDg2LnlQbSWn9ThpyrcAxPBeZSD4VWt4g1o%2BWqp0AJT5m7aJBPPu98vT%2BfJtbFUN8F%2FomFGyohwSLgYiusmhIOp%2BxyngtfarRTfnnc0hg%2BrL190N9VD0j1GN9yEr%2F%2BoONl7kd7NnLykQoh%2F7LsF1UnHmDm6Qrfy%2Fwb6fgVfOhYjedRxXeRIe4bQ2W90goNpr2RP9dQLkEsU3Tng8WwCV8gCQd8ztqWzMB4%2BLbyFOyfUcKPaj0rHA4g0kNAynCB6%2B36MmtOmQ4fHuZYXowhjVF3dn1hoMmnnzWglIjijkx5q7eEpKdrBD%2FrGRUJ7OaYEJ%2BXhyUQl%2FrdelNrnhtAl7eOQYu0qZn6EXpkAKVVwYQNLcar81%2FYzyZhh8D40k1%2BCHkZ8zVQrtJlCSgy1vi1vqHn6ki3zsVuel6b%2F%2FRcuuLEVSSX%2FKDEiIx2pXRdeBdSMllAmzj6TtGc03LPyp%2BHjv78UR2alFEKnlJs12b9GesAsIm6OjszzNjiGA14pGIqcnKZUI3uRoSUqpPdw3MDPNOZEMyt7oT%2BVEovX1GhvPWcTSH%2ByR2xS4o2wQrBRVCpwzcjYx88Bnhfk%2FKCkcBippZRO6d9RZ4LOgG2XerdpZaF2UsNJb6USVsAYwbBugsJKGENRY2RwSj%2Bb%2FpMOMNLu2ckGOqUBzJyhWo9ywbKjAzVpz52AG7hWB9ig5v%2FgzpueKNqbabdrnGXWoVgWUBGcsTHfZziK7hGAqcaJm9751dstiBNSEqLcLoVcXmkTr%2FfDnfQfWzM4lvoxkzZBoMLwr4wZCP564HiDtDEnwb4UdE8UQMPUYaviYVCexCfusAsA6U7IUks1iNW3Czc5S2zTOzUXaxaCQFmRJ%2FTa3k9t8Fbvf%2FS1lfP3FdHs&X-Amz-Signature=63256753880a01c2c40449e9c340cc9b54921444fd11b424076b306fb900a011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZW4Q7W%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T103613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BVm%2FUskhqDpVIVI2jOUwkyY9geoyU16n3zN%2BvGpGRTAiEAuM3bx5JWtkYl8NCOFGha4IgfY9ag5vK6%2B3QGSZnuh78qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDg2LnlQbSWn9ThpyrcAxPBeZSD4VWt4g1o%2BWqp0AJT5m7aJBPPu98vT%2BfJtbFUN8F%2FomFGyohwSLgYiusmhIOp%2BxyngtfarRTfnnc0hg%2BrL190N9VD0j1GN9yEr%2F%2BoONl7kd7NnLykQoh%2F7LsF1UnHmDm6Qrfy%2Fwb6fgVfOhYjedRxXeRIe4bQ2W90goNpr2RP9dQLkEsU3Tng8WwCV8gCQd8ztqWzMB4%2BLbyFOyfUcKPaj0rHA4g0kNAynCB6%2B36MmtOmQ4fHuZYXowhjVF3dn1hoMmnnzWglIjijkx5q7eEpKdrBD%2FrGRUJ7OaYEJ%2BXhyUQl%2FrdelNrnhtAl7eOQYu0qZn6EXpkAKVVwYQNLcar81%2FYzyZhh8D40k1%2BCHkZ8zVQrtJlCSgy1vi1vqHn6ki3zsVuel6b%2F%2FRcuuLEVSSX%2FKDEiIx2pXRdeBdSMllAmzj6TtGc03LPyp%2BHjv78UR2alFEKnlJs12b9GesAsIm6OjszzNjiGA14pGIqcnKZUI3uRoSUqpPdw3MDPNOZEMyt7oT%2BVEovX1GhvPWcTSH%2ByR2xS4o2wQrBRVCpwzcjYx88Bnhfk%2FKCkcBippZRO6d9RZ4LOgG2XerdpZaF2UsNJb6USVsAYwbBugsJKGENRY2RwSj%2Bb%2FpMOMNLu2ckGOqUBzJyhWo9ywbKjAzVpz52AG7hWB9ig5v%2FgzpueKNqbabdrnGXWoVgWUBGcsTHfZziK7hGAqcaJm9751dstiBNSEqLcLoVcXmkTr%2FfDnfQfWzM4lvoxkzZBoMLwr4wZCP564HiDtDEnwb4UdE8UQMPUYaviYVCexCfusAsA6U7IUks1iNW3Czc5S2zTOzUXaxaCQFmRJ%2FTa3k9t8Fbvf%2FS1lfP3FdHs&X-Amz-Signature=617f141e61fac45a6176d5895bdb3d23766942fb15d6b2e2d8d8fcf8fb003b68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

