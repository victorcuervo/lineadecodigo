---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNL4CA6F%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T225412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsc0y2dP%2BXBpTHJ6Ntv88M%2FiWxi8pc6AFLnhci6JkEcQIgUCOY0JOdUgvA%2FBpDd4xkNyZPy9LRCkuwIivCEW0rNP8q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDJMjq9RoMFIn5g2T%2FircA1plwxqqpLjUg22lWHtCgsDumnvgpIEG7VyQL3U%2B%2Fuc8nccn7NN7fZMMbzgP8VPzwVtTd2BoKl7B6R0x6XEkkCuNnZArayP4SlnOBazwJcPHiaBJqcKq0OjAiftlvVn%2BhgBEE2US7Y%2BEtTGXD4jAP86WeWFIC7oa3q6ehfx%2BzXNPfeVGOkf7tTfnuAaHgekHkyV%2BL0uI%2B2Z0seOMwNsZfcxf6OAVgDTzWRmXwhyhRpO4GJXtBPECUQ9%2BB60hBJMcDJtCntEBWxI57GIMRtMQfD6aBAlqXEtbujYjCsGne1f%2Fp%2FszvWYhZ7WSYU%2BQOOm61dzCVmfhiJxGY5nPM%2B043cfakOU6SL4DeX4bS0jlMFCc%2FI647vL5ShYLQ7n32bpShc16qMoELNkKleN5AxjrZ%2BFdWp8JRcakrEsFCPp1akA42w0TEZm8B9%2BboCEeqYak%2B7aIVD%2B6AzbqnlkL%2FtfYO8KFdKA6HoRUr3HZdC69LQpM75OnSC93r%2FkBqdG12um%2Fwo4XZtrLQHRz7Bn3zf92IP4%2FeoaJD249aUi2r3KiOKEvquPlQBrHWsUR8mThko9bApcH0jt9bHoWUviZhQnc4tB6EMVRq%2BYBwpptixR3jmRumRjyTESHDRVFTmXMMJKhzckGOqUBeuum6XYNJKVllsoJmUQOoENFWn1MIFHrXvG98ELsXF%2BO%2FnCavlvKqTi0VoqOWAyBm3oq4Nf5OFIl4x3IlJKLjbDBpLJOQfmub1IzWKelOxV9a6JBjzn0RmxXAD%2FQS2j4xd6k2TIAf7k%2BBvOggg0NunLW4HToMLG5GPfzMgUjjy37Z8o3RBCvzMcNbjS11Fc1G8ziWwX4YK1mL1gp68LsgKNX9j1g&X-Amz-Signature=8fc96ef8697663c60d0e44a645aab0ef0dd6e099b3799cc819c5578af5caf768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNL4CA6F%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T225412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsc0y2dP%2BXBpTHJ6Ntv88M%2FiWxi8pc6AFLnhci6JkEcQIgUCOY0JOdUgvA%2FBpDd4xkNyZPy9LRCkuwIivCEW0rNP8q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDJMjq9RoMFIn5g2T%2FircA1plwxqqpLjUg22lWHtCgsDumnvgpIEG7VyQL3U%2B%2Fuc8nccn7NN7fZMMbzgP8VPzwVtTd2BoKl7B6R0x6XEkkCuNnZArayP4SlnOBazwJcPHiaBJqcKq0OjAiftlvVn%2BhgBEE2US7Y%2BEtTGXD4jAP86WeWFIC7oa3q6ehfx%2BzXNPfeVGOkf7tTfnuAaHgekHkyV%2BL0uI%2B2Z0seOMwNsZfcxf6OAVgDTzWRmXwhyhRpO4GJXtBPECUQ9%2BB60hBJMcDJtCntEBWxI57GIMRtMQfD6aBAlqXEtbujYjCsGne1f%2Fp%2FszvWYhZ7WSYU%2BQOOm61dzCVmfhiJxGY5nPM%2B043cfakOU6SL4DeX4bS0jlMFCc%2FI647vL5ShYLQ7n32bpShc16qMoELNkKleN5AxjrZ%2BFdWp8JRcakrEsFCPp1akA42w0TEZm8B9%2BboCEeqYak%2B7aIVD%2B6AzbqnlkL%2FtfYO8KFdKA6HoRUr3HZdC69LQpM75OnSC93r%2FkBqdG12um%2Fwo4XZtrLQHRz7Bn3zf92IP4%2FeoaJD249aUi2r3KiOKEvquPlQBrHWsUR8mThko9bApcH0jt9bHoWUviZhQnc4tB6EMVRq%2BYBwpptixR3jmRumRjyTESHDRVFTmXMMJKhzckGOqUBeuum6XYNJKVllsoJmUQOoENFWn1MIFHrXvG98ELsXF%2BO%2FnCavlvKqTi0VoqOWAyBm3oq4Nf5OFIl4x3IlJKLjbDBpLJOQfmub1IzWKelOxV9a6JBjzn0RmxXAD%2FQS2j4xd6k2TIAf7k%2BBvOggg0NunLW4HToMLG5GPfzMgUjjy37Z8o3RBCvzMcNbjS11Fc1G8ziWwX4YK1mL1gp68LsgKNX9j1g&X-Amz-Signature=1ac3f81d96bcc694b66768fb73b2b1fe5e249c01e0bf69fc9734768dd511f1f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

