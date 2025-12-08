---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRNODYNU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T153942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQwhbu%2BkuXQ5ZlXZWRLtXutXIoia5cMq89lddJEMtW%2BAiEA6rMa6171eqAkwA3epJzIiOsEVpKBfBviUP4KfjSlj34qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSP%2FDW5J1tTrPgs3yrcA8eKa2SlRTCEM1Qn%2B5sPKblpTEiNRLpyhhl1N1eLaMa9mz7FkYk9xSYv9sDKXXirEI3J%2Fg5P2NoJs6za0o%2FAOn%2Bl0ew668eYlWsNm0%2B9e75svKaQpahOdpwRM%2FOLqKkDK1FcFKz0RiyZGUtv2JrYVScfd0gaNvlEHj17iR%2B4CxPL2ySVMbcNgT1Ly3gdXRLZePSJPbStra3Atk8lbDrnnJWf%2FkSyp8U5Y16qUOplUczZ0OP1W1JYlQhArtayaR8EoauJRywYR6F4%2Bf%2BcifKHC6xQPNwrX3Mhi%2BEUgso18Q1k%2BKCANNDtRcsLtbVJEacVrjFg1%2BVn5vooKPixgHCneXMSin67zfqKcOEK2%2FC2Y5x1a3D12ixlLUIjzidg6xw92q4yxYngE7f%2F%2FkEx7iw2CnF%2FzC9Q26jzcP6wYPMlPm9i4taA5MjfaUReMfeQ8XCD5OR98A2vAETBw2AfcC5D7YVG8bftTKAHfIh9XCoGqXA%2BF7mGkykJI2EGYUr4wH0Snt%2BMVV3qEWF0WZD9o1wjlhM161oBB81PmoomGzJXFPEHsfka8JaOADC%2FNJj8TmiwMy%2FofiF5jahi9cQM4lgMoAUqZMtVqsspZkSu3bRUgvp3TJCLlHQOI2E%2BGlmHMIzC28kGOqUBHQ0VXYeCHphFwGdHEIhk%2FqYhg4fZbZ%2Bbg0QTPHaYhjoqNSGcQ6Q0eNzbSzUsot4%2FkZ4xoHk52IPrgMwe1uRzhrutA4e0Md%2FsfSit1QpRNw%2BGtYFpdXLAybW8hvSl%2B6uf4ZhGC0jb%2BHvvMHDPWHN546g9ZSTCqKx%2BaAdyh%2B2nP%2BmRvIOHF1YkY06rt5DAaW10U6MyQfv6oArmedCROam4I%2FhDofHR&X-Amz-Signature=4f1bfa489b87002cb77b1e7d32cb53159c23902f8a4817d626a5dc9ae881cb01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRNODYNU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T153942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQwhbu%2BkuXQ5ZlXZWRLtXutXIoia5cMq89lddJEMtW%2BAiEA6rMa6171eqAkwA3epJzIiOsEVpKBfBviUP4KfjSlj34qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSP%2FDW5J1tTrPgs3yrcA8eKa2SlRTCEM1Qn%2B5sPKblpTEiNRLpyhhl1N1eLaMa9mz7FkYk9xSYv9sDKXXirEI3J%2Fg5P2NoJs6za0o%2FAOn%2Bl0ew668eYlWsNm0%2B9e75svKaQpahOdpwRM%2FOLqKkDK1FcFKz0RiyZGUtv2JrYVScfd0gaNvlEHj17iR%2B4CxPL2ySVMbcNgT1Ly3gdXRLZePSJPbStra3Atk8lbDrnnJWf%2FkSyp8U5Y16qUOplUczZ0OP1W1JYlQhArtayaR8EoauJRywYR6F4%2Bf%2BcifKHC6xQPNwrX3Mhi%2BEUgso18Q1k%2BKCANNDtRcsLtbVJEacVrjFg1%2BVn5vooKPixgHCneXMSin67zfqKcOEK2%2FC2Y5x1a3D12ixlLUIjzidg6xw92q4yxYngE7f%2F%2FkEx7iw2CnF%2FzC9Q26jzcP6wYPMlPm9i4taA5MjfaUReMfeQ8XCD5OR98A2vAETBw2AfcC5D7YVG8bftTKAHfIh9XCoGqXA%2BF7mGkykJI2EGYUr4wH0Snt%2BMVV3qEWF0WZD9o1wjlhM161oBB81PmoomGzJXFPEHsfka8JaOADC%2FNJj8TmiwMy%2FofiF5jahi9cQM4lgMoAUqZMtVqsspZkSu3bRUgvp3TJCLlHQOI2E%2BGlmHMIzC28kGOqUBHQ0VXYeCHphFwGdHEIhk%2FqYhg4fZbZ%2Bbg0QTPHaYhjoqNSGcQ6Q0eNzbSzUsot4%2FkZ4xoHk52IPrgMwe1uRzhrutA4e0Md%2FsfSit1QpRNw%2BGtYFpdXLAybW8hvSl%2B6uf4ZhGC0jb%2BHvvMHDPWHN546g9ZSTCqKx%2BaAdyh%2B2nP%2BmRvIOHF1YkY06rt5DAaW10U6MyQfv6oArmedCROam4I%2FhDofHR&X-Amz-Signature=c90bb8695c9589e5bc42cddfd2aa79e854294cd71191a076643fcf4d8f040841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

