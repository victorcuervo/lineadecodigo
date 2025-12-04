---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZIIVWYM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBqofkG7T%2FwfTG%2FR9iVgoGZqsqs0hzyZHAZbqEJQwVVcAiEA6MxhiVfAbegnJGKC3YJwyeAkmRPmpjWDor%2FAG7fP%2FpIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHjmkynKhGrVCr92XSrcA%2BduB083NYLoIgB4lUgGaRDIrk5hnTiMGe8Jb%2F%2FOF1jY9b75M7pMOH1d5A2YRaCusmsq4VD2kY%2FsentPi1Cp4scVK9Ow8yAdtVMLBOLxfCaEJs7MKJVvaLMQy0bMJ87wI6NjRVclLuy52E%2FGi8EOqgL4npzdhAJnCqbhF6OWtXDJ5G7oys%2B8TfKrYicpxu%2FAA0hiVvB%2BZzyf%2F0lS2V08LZs61HiNd%2BYBZ%2BnHK5%2B2Lrb0Iw%2ByKMdPLyh3%2BO%2F7S5RDOGBFZy8nQdcTL2mVl8hans6i8Xw0GjGrTY5Bp9Of39v5wpUoJ1RRxZSbfRA1Tr5lcAQj886M1bwvjTF9tApsmKz1aEqFpkRpxhxj9DsCUAUnTPU8AwNIE1IuYZi%2FYzd3fzjA68oEHIO4wGpzMqwD%2F9tKoZIcpdvPXGsUwnWLBGrw7QGSvnCvhBdsLrvTXtMKv%2BminVBI0nr3ikTB9cvgke0%2FSVMgCJDSJKVvKB6pvsUtK4zTM0AzZZyLGZ1P6WMcwgcvGtaKwmug1r4fuDY7T7NEL1zff1dyAXpZdA%2BVbhNLXIDaTcZxPeKTgpGj3kQAj2s%2BfV9d%2BFlZmFuI7jgB41bC5iPgDFHwAHlMRfoxlI8qWbLKHBHXou43v%2BpxMJSRxMkGOqUBzWuscGdlV%2F7NThWYVuM94w7s%2FQxPFsfxfBLjzIqTTZJm3BlpgZ%2BtY2ZdzyQamWqSzfGMgcIOSnVJF3LrmvJ6KGeMSGbf2sHmfJ93D5ePhagYY9TOabj9h4YhCyU60158Ndna2qIM1zysSGXpeKQkAuJ2KzS6e%2B118SXd5eEN5PgRW3%2F4Z%2Fb2X7B4325SA5f91bU5jXy7LGJPV4WrSjcXgJNvLnc8&X-Amz-Signature=089070d3b03ddab6af7fa9ac371b9e17118c47c49761834b9c9f1942756ce59f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZIIVWYM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBqofkG7T%2FwfTG%2FR9iVgoGZqsqs0hzyZHAZbqEJQwVVcAiEA6MxhiVfAbegnJGKC3YJwyeAkmRPmpjWDor%2FAG7fP%2FpIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHjmkynKhGrVCr92XSrcA%2BduB083NYLoIgB4lUgGaRDIrk5hnTiMGe8Jb%2F%2FOF1jY9b75M7pMOH1d5A2YRaCusmsq4VD2kY%2FsentPi1Cp4scVK9Ow8yAdtVMLBOLxfCaEJs7MKJVvaLMQy0bMJ87wI6NjRVclLuy52E%2FGi8EOqgL4npzdhAJnCqbhF6OWtXDJ5G7oys%2B8TfKrYicpxu%2FAA0hiVvB%2BZzyf%2F0lS2V08LZs61HiNd%2BYBZ%2BnHK5%2B2Lrb0Iw%2ByKMdPLyh3%2BO%2F7S5RDOGBFZy8nQdcTL2mVl8hans6i8Xw0GjGrTY5Bp9Of39v5wpUoJ1RRxZSbfRA1Tr5lcAQj886M1bwvjTF9tApsmKz1aEqFpkRpxhxj9DsCUAUnTPU8AwNIE1IuYZi%2FYzd3fzjA68oEHIO4wGpzMqwD%2F9tKoZIcpdvPXGsUwnWLBGrw7QGSvnCvhBdsLrvTXtMKv%2BminVBI0nr3ikTB9cvgke0%2FSVMgCJDSJKVvKB6pvsUtK4zTM0AzZZyLGZ1P6WMcwgcvGtaKwmug1r4fuDY7T7NEL1zff1dyAXpZdA%2BVbhNLXIDaTcZxPeKTgpGj3kQAj2s%2BfV9d%2BFlZmFuI7jgB41bC5iPgDFHwAHlMRfoxlI8qWbLKHBHXou43v%2BpxMJSRxMkGOqUBzWuscGdlV%2F7NThWYVuM94w7s%2FQxPFsfxfBLjzIqTTZJm3BlpgZ%2BtY2ZdzyQamWqSzfGMgcIOSnVJF3LrmvJ6KGeMSGbf2sHmfJ93D5ePhagYY9TOabj9h4YhCyU60158Ndna2qIM1zysSGXpeKQkAuJ2KzS6e%2B118SXd5eEN5PgRW3%2F4Z%2Fb2X7B4325SA5f91bU5jXy7LGJPV4WrSjcXgJNvLnc8&X-Amz-Signature=36876cb2adf361abd1f6af977014d3b1b8146c04dbfbd6bb2e58cb1a07d6b561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

