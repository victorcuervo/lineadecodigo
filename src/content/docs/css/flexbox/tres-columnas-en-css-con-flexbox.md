---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4WGNXOG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T005930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbS%2FAc9rLjfiBZ2BLCGie%2Bkas29GB1nTDwc%2FebXg2j7QIgVB0qynCJFGu89ET1n8dp0GPoQNLRCHEJRWEpVyc2%2BDUq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDAlldOGn%2FTAdE4xygyrcA6uctPvzCK8vhpd3ttWJNORYlqMeSrJCt75KJ3QKMKs968HX7OsWUSk2HWaUH%2BcnZynHYF6zj9i8GEBZuYn23X6B5NUDbLJ637kLdJQ46rmmXbJxQ52GTbIgI08HSkuB8XHRRblGcGpDst5YVTFEJcy%2FKesqwcW6bdxftEQ9Fk87xEB2J6zz304wBKLAaosE6IMcQXHSgd6a7uOz96KpAuRaBXFrr%2ByKVWMVgRCySapQ9d4M2Q0JrgxKD0pPvRJ3psjuURSW%2BRrPfpesQBg%2BKZeye3wFsz7nJxxuZYxpwybBkHpywqZkq6Q5zkcYMi3i%2Fb8oLmqXtV480XSrz56zXXS7TN%2FEeGeDprDqW1GFvJWGDWel43nOGVzIu1eV%2B4YBbJjLnePIqUqDub1sg5tJXri%2BNQt3DwBemXGWZQTti9c0xFeH954QIUNUDZhhlEW9ETbLYYuppjcnxEMA%2FbZnjwUndebp0PnjdfhaO0oUBjWMXFS2Rjxf87%2BpA4gWZrfDjGprGUVCsH1Qx%2BkoXmINnyYNxBOnt4%2FiARr7bamDxIsE3elBE5LxwZ1wYKxUOVETvMYVP%2BoEQfY89WZUprf1bITfEknWodkVw3HULu4scPh4WHYJzHDR1WbZ5mnCMICMyMkGOqUBdP%2FTFQMPmwuSRTMKpXRmPCs%2FFyTyuBHMockl0PEtVHMZcjmSr1y0%2F6fGouHkZ1vPO9p5QKTySbfSgkpyh18N9AD3F6Sf04BO%2BVrCpVv9OXAqxIUNN9%2F8qlchrT4fBDXKeQEoY2C%2Bwcc7MlX%2B6UseUYxo0wwwxJBWr6X%2FVST0QRhpxub92OH7wc7AVpxqQjREFV%2FYvqQVXJeqItZNHuBFfpdx2El1&X-Amz-Signature=faa3b91783f6e0abf8ae66a85bfe9b283f8f970cbc32b3d1a0cfa55cf2c5d9bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4WGNXOG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T005930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbS%2FAc9rLjfiBZ2BLCGie%2Bkas29GB1nTDwc%2FebXg2j7QIgVB0qynCJFGu89ET1n8dp0GPoQNLRCHEJRWEpVyc2%2BDUq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDAlldOGn%2FTAdE4xygyrcA6uctPvzCK8vhpd3ttWJNORYlqMeSrJCt75KJ3QKMKs968HX7OsWUSk2HWaUH%2BcnZynHYF6zj9i8GEBZuYn23X6B5NUDbLJ637kLdJQ46rmmXbJxQ52GTbIgI08HSkuB8XHRRblGcGpDst5YVTFEJcy%2FKesqwcW6bdxftEQ9Fk87xEB2J6zz304wBKLAaosE6IMcQXHSgd6a7uOz96KpAuRaBXFrr%2ByKVWMVgRCySapQ9d4M2Q0JrgxKD0pPvRJ3psjuURSW%2BRrPfpesQBg%2BKZeye3wFsz7nJxxuZYxpwybBkHpywqZkq6Q5zkcYMi3i%2Fb8oLmqXtV480XSrz56zXXS7TN%2FEeGeDprDqW1GFvJWGDWel43nOGVzIu1eV%2B4YBbJjLnePIqUqDub1sg5tJXri%2BNQt3DwBemXGWZQTti9c0xFeH954QIUNUDZhhlEW9ETbLYYuppjcnxEMA%2FbZnjwUndebp0PnjdfhaO0oUBjWMXFS2Rjxf87%2BpA4gWZrfDjGprGUVCsH1Qx%2BkoXmINnyYNxBOnt4%2FiARr7bamDxIsE3elBE5LxwZ1wYKxUOVETvMYVP%2BoEQfY89WZUprf1bITfEknWodkVw3HULu4scPh4WHYJzHDR1WbZ5mnCMICMyMkGOqUBdP%2FTFQMPmwuSRTMKpXRmPCs%2FFyTyuBHMockl0PEtVHMZcjmSr1y0%2F6fGouHkZ1vPO9p5QKTySbfSgkpyh18N9AD3F6Sf04BO%2BVrCpVv9OXAqxIUNN9%2F8qlchrT4fBDXKeQEoY2C%2Bwcc7MlX%2B6UseUYxo0wwwxJBWr6X%2FVST0QRhpxub92OH7wc7AVpxqQjREFV%2FYvqQVXJeqItZNHuBFfpdx2El1&X-Amz-Signature=e283f5bf0b57966b4add2d1aae439516595530bc477fa48a8f662173ffb831aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

