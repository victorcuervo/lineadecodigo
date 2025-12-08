---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVHWHZCO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T165253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiwv88mzXCyKXLnx5OnR4pkmccFnnhjZwXYAtrPOl12AiEAiQ62Q%2BXv7kbAI71K8IjU1g0hmgBY2onHlKX7GNyGaNEqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyIXzNv0s7Y2Oe%2FQyrcA50i3esjb6s%2F2pd%2Bc0OlCPwMBZxDg703kh6nwezWv9E1J8317amAhQZKuCNzFkWl7oXey%2BE6Ujd0X859nU%2BcXqb2KwNAeISlUyqHX%2FC%2FwIbf%2BqCxeLVInP7CJJUP4srPjm55mAr4lsqEh7iepnetG1ER3sH403bu%2Fn0pQkQ4PjCRTjnHQMBSBTmgHAeKnbTImTLb5ZBL5b8HMhnKn5MHn%2Bng0wAfzh2USOqQ2eXfUVW%2FSGpkU22RalMqKq9JLTl1F8WE7FjpVyO3XBCyuuVEI1%2B2p8wxl7WS9B1KGOfD77aimSsNPBchRZWpzT1o47TlE5LNOf8yNG7sX3i3OYYrRVjMD5CeR%2FmSR4nlhwSdwPmBuJ4ui7v1MkQRE%2FExftlNoesBKy1%2BNn0m9kFrFd%2B5ZDBGvLC5FRRxK5xRH2h%2BWH%2Fxkusrse8WZIrbcejWR6ePgHGsbHhZKLTQu%2FbjslLng%2FsSOVAhCW0CtNcrfdGLWcxyNnU84OzL4SEFs2ut0tAm4szZH%2BMkqBo6meevnJoLFwQrgkOotfyyeQmaXvj8fzw%2FdMrNZEVnkXlt8RIJ1LJmZP02yFM%2Bub0%2BvXm1wLiRsh6DIqqarERfP7a3S%2FFL%2F42wWjhkKKIrUCusk%2FNcMKzl28kGOqUBRdjoJAlFzLYAhChqm2%2F1AjRcKhpvhT6ekOqqhi%2BNTA4tNoeO%2BPjxkzxadgL9q8UAMwS59g3uyS2AM3gaxlSS%2FQIylDc2EHpIKT3TSYyvMo%2BzlEAHcY8hgwkE4qFoCP6TuHjC1utxlG1yRHllMWujBxoacCUnBVigsAGCAs8sXldXNLA1YLMqvjI%2BGm%2FN%2B6WRgUK7M7fOdR5fDXsFDP8Mcwfm2%2F%2Bn&X-Amz-Signature=e91e16cfeb3bfbff0a034526b4b2d94b8309a67578db68ee7088dfdabe2a37c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVHWHZCO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T165253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiwv88mzXCyKXLnx5OnR4pkmccFnnhjZwXYAtrPOl12AiEAiQ62Q%2BXv7kbAI71K8IjU1g0hmgBY2onHlKX7GNyGaNEqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyIXzNv0s7Y2Oe%2FQyrcA50i3esjb6s%2F2pd%2Bc0OlCPwMBZxDg703kh6nwezWv9E1J8317amAhQZKuCNzFkWl7oXey%2BE6Ujd0X859nU%2BcXqb2KwNAeISlUyqHX%2FC%2FwIbf%2BqCxeLVInP7CJJUP4srPjm55mAr4lsqEh7iepnetG1ER3sH403bu%2Fn0pQkQ4PjCRTjnHQMBSBTmgHAeKnbTImTLb5ZBL5b8HMhnKn5MHn%2Bng0wAfzh2USOqQ2eXfUVW%2FSGpkU22RalMqKq9JLTl1F8WE7FjpVyO3XBCyuuVEI1%2B2p8wxl7WS9B1KGOfD77aimSsNPBchRZWpzT1o47TlE5LNOf8yNG7sX3i3OYYrRVjMD5CeR%2FmSR4nlhwSdwPmBuJ4ui7v1MkQRE%2FExftlNoesBKy1%2BNn0m9kFrFd%2B5ZDBGvLC5FRRxK5xRH2h%2BWH%2Fxkusrse8WZIrbcejWR6ePgHGsbHhZKLTQu%2FbjslLng%2FsSOVAhCW0CtNcrfdGLWcxyNnU84OzL4SEFs2ut0tAm4szZH%2BMkqBo6meevnJoLFwQrgkOotfyyeQmaXvj8fzw%2FdMrNZEVnkXlt8RIJ1LJmZP02yFM%2Bub0%2BvXm1wLiRsh6DIqqarERfP7a3S%2FFL%2F42wWjhkKKIrUCusk%2FNcMKzl28kGOqUBRdjoJAlFzLYAhChqm2%2F1AjRcKhpvhT6ekOqqhi%2BNTA4tNoeO%2BPjxkzxadgL9q8UAMwS59g3uyS2AM3gaxlSS%2FQIylDc2EHpIKT3TSYyvMo%2BzlEAHcY8hgwkE4qFoCP6TuHjC1utxlG1yRHllMWujBxoacCUnBVigsAGCAs8sXldXNLA1YLMqvjI%2BGm%2FN%2B6WRgUK7M7fOdR5fDXsFDP8Mcwfm2%2F%2Bn&X-Amz-Signature=5c9a270c7b0bf531290d13eba6df5b9f53c46050e738165b7fd705a380bfa7c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

