---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC33GVW7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T214559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOqnlG26LSEqMwD6aeCnGgjLdMWMEPovBkifmh7qsSOAiEA52Dxu5dKW3%2BoI%2BznIxb5YmuIJZDNy8O0D4dSjfP4SzwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRmUOiW3gXJ1CdWKCrcA09AkDZe9Ct5I0ERLd0QU4zVdPEJNfQqRZic9wx0PGbTQNI4hYZAnsoC2SjsZu%2FvUiIh1N45dLyLR0khWjfGgFy6LEZlq%2BGHbq4Ec9bHTTcvIDUoMGO1yQgppfSSk1aB5gamhJXvmlDamSE6%2FpRVCOZ7nUg%2B7G8JEJGZ8asLB0zg%2FnihyI7Ko6gg%2BlDK3zDk2fC8I1qlr98k7RLmYM3hZeTUlfW7KDs%2FNcSsCFs7jz2kER%2BT2N31beYNQe20WaA5KDppeitPDU7yJmHwvmxVMR%2Bqbxbl%2BMAQfwEbL8U6PiI0Py6KjjKt%2BOMu0LD1PTcqMFe6km69X9gei%2FtDHoT83EynJYLK5YwaK7%2FwsSGYq0hZf6SiRdHlTsecLt4d7F%2FFFhzJuyOX6CdeSmsqIrSIXzigycLvy4f3o3loRQH9r8CyzjjpOAqlqX6Myd9l%2FKlFqRR%2BSOTzngsR1%2FTMPEz2NN0fRjz%2FaXg7HnfqSFC8DSzvtAPbE9DLPfd0s12hxDE4Ie3q2pshiP3DhHa1eXgyNzu6plA0qKyIEX1I8ORuD7%2Bo6h%2FNoizZ2VbY0eDSPesUB%2BYtStxRN1RWCe6mW5l9N8oC1Xsx8nipUW3b%2Bx9s%2FgzBUjqh%2B%2BbcUEdyf3DpMOnH18kGOqUBEC31VHFo%2BE1t6eWzuN161KFqIHBHaUb5bJ%2BFd4IIdlVAFMO0UFAvLkwRx2RwR6C6x8u3gNNvezaVdwLAvgdeziR%2Bi9yWopJ0RysjjeX0QFNObLG%2FKvK725FKIzfeZtjaByFO3XQq2VP%2BEwXrEhLBvddj5dtrQXY2uBzrDKNPMR3yAwcxQ5dx8TsmmDuHJjRff%2FrG5ud7rhTocdz5vky0WNc76d81&X-Amz-Signature=0da09a042913a4d45d13ca44947117540d5a62b13dad0ec9c84fabbaaf98402d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC33GVW7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T214559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOqnlG26LSEqMwD6aeCnGgjLdMWMEPovBkifmh7qsSOAiEA52Dxu5dKW3%2BoI%2BznIxb5YmuIJZDNy8O0D4dSjfP4SzwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRmUOiW3gXJ1CdWKCrcA09AkDZe9Ct5I0ERLd0QU4zVdPEJNfQqRZic9wx0PGbTQNI4hYZAnsoC2SjsZu%2FvUiIh1N45dLyLR0khWjfGgFy6LEZlq%2BGHbq4Ec9bHTTcvIDUoMGO1yQgppfSSk1aB5gamhJXvmlDamSE6%2FpRVCOZ7nUg%2B7G8JEJGZ8asLB0zg%2FnihyI7Ko6gg%2BlDK3zDk2fC8I1qlr98k7RLmYM3hZeTUlfW7KDs%2FNcSsCFs7jz2kER%2BT2N31beYNQe20WaA5KDppeitPDU7yJmHwvmxVMR%2Bqbxbl%2BMAQfwEbL8U6PiI0Py6KjjKt%2BOMu0LD1PTcqMFe6km69X9gei%2FtDHoT83EynJYLK5YwaK7%2FwsSGYq0hZf6SiRdHlTsecLt4d7F%2FFFhzJuyOX6CdeSmsqIrSIXzigycLvy4f3o3loRQH9r8CyzjjpOAqlqX6Myd9l%2FKlFqRR%2BSOTzngsR1%2FTMPEz2NN0fRjz%2FaXg7HnfqSFC8DSzvtAPbE9DLPfd0s12hxDE4Ie3q2pshiP3DhHa1eXgyNzu6plA0qKyIEX1I8ORuD7%2Bo6h%2FNoizZ2VbY0eDSPesUB%2BYtStxRN1RWCe6mW5l9N8oC1Xsx8nipUW3b%2Bx9s%2FgzBUjqh%2B%2BbcUEdyf3DpMOnH18kGOqUBEC31VHFo%2BE1t6eWzuN161KFqIHBHaUb5bJ%2BFd4IIdlVAFMO0UFAvLkwRx2RwR6C6x8u3gNNvezaVdwLAvgdeziR%2Bi9yWopJ0RysjjeX0QFNObLG%2FKvK725FKIzfeZtjaByFO3XQq2VP%2BEwXrEhLBvddj5dtrQXY2uBzrDKNPMR3yAwcxQ5dx8TsmmDuHJjRff%2FrG5ud7rhTocdz5vky0WNc76d81&X-Amz-Signature=4df8e1438a8ee1143ba33371d1375a5a51fdaafae1dbd51b4577dbdc92b5c2dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

