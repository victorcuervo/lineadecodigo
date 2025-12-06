---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJAG7H62%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T234828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYwa%2B2%2BvH5vFg5MkgfzDvbyJFhhEKhPZAm673Cr48%2BSAiEA164mX%2FcjG6JPCpK5Bd4JY72SEDueEFrS9G5HDdcojMcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLmunpDbnl%2BUUlklCircA4rtDM1RWuiGmtPgV0fGCECu0WjGaWivC%2FPmSibEP7LRZAdnkuudPDAudIe3es10WCIJUAmFm8IVanWgSzZTMV8LeR8cdik4QxdUy%2BOAZYk%2BhmjFiEUSDd9%2BU28Z%2Bc6VJfF1hved6WLITRDWBnrkx%2BJqmfwrzQePKdmTTtmfpbq5rpuxpA56xaiYMH2MJ1m1BqgAB4iQ%2BJzy6fkiBVkxLmGFypujVmMtbY1NeD82nZOf0Isv1AM0hOsbj9ouT47y8uSQsR%2FX9jyZ2CwOvciNbQZzobi0vx5REXRJdZJVwnPMG7nR73gL0f%2FTFs%2FAVDoDGOYkmyHBIqpxTkvAVtGh1N4GgU2zJxknofGjVUNUSrX7qDNH0Mamg6B9TD45M911M%2FwEpeSgiQkau2UmJSA6cozXcWkLmOqZiAWr7Ne1cjZ5jtATCbQvZci5PSwFQlwaM7ux7kYAq7LLraSy0xTknmsHuC4xZDph1H%2F%2FLZkOoXrxggfrhcDHjvVa6Dyaq5WUpCprbou%2BfYVIYDCRttgsdLS7geAxMI7FaqAjsTvOLoI7j6vrF4ISoG1zrzG0UlJkIKIhgU2BzhnLaEdmW13nTYcK%2FQGe60Ct6yDR%2FwxU8cmGlwxY5GXUlb15QKkiMNj90skGOqUB8N0JuN%2FT4Alygb3%2Bko6EIdnReTuLrgFpcepJ8IPqviYnZ%2BNOrMY0DMnoB7wN%2FSy9%2FDVbnv4LEru0tkMQ2WSm8tdgP6d6eNQBygQU3mqX8JuGyG6zhv%2FRP%2Fiq9PV7tWNkwDr2q0K51UNBmKMl5wb%2BsonbRpqJKpD6l0oIajDY73cfJROZA%2BkAbmH5omOaQ9tX%2FzJjn3DCn5gKIRz8LvCYK9qmgr8Q&X-Amz-Signature=c9af09bb93e118050978dd36463ca5403ce2255e4ad105f1a1cbae87521f5398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJAG7H62%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T234828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYwa%2B2%2BvH5vFg5MkgfzDvbyJFhhEKhPZAm673Cr48%2BSAiEA164mX%2FcjG6JPCpK5Bd4JY72SEDueEFrS9G5HDdcojMcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLmunpDbnl%2BUUlklCircA4rtDM1RWuiGmtPgV0fGCECu0WjGaWivC%2FPmSibEP7LRZAdnkuudPDAudIe3es10WCIJUAmFm8IVanWgSzZTMV8LeR8cdik4QxdUy%2BOAZYk%2BhmjFiEUSDd9%2BU28Z%2Bc6VJfF1hved6WLITRDWBnrkx%2BJqmfwrzQePKdmTTtmfpbq5rpuxpA56xaiYMH2MJ1m1BqgAB4iQ%2BJzy6fkiBVkxLmGFypujVmMtbY1NeD82nZOf0Isv1AM0hOsbj9ouT47y8uSQsR%2FX9jyZ2CwOvciNbQZzobi0vx5REXRJdZJVwnPMG7nR73gL0f%2FTFs%2FAVDoDGOYkmyHBIqpxTkvAVtGh1N4GgU2zJxknofGjVUNUSrX7qDNH0Mamg6B9TD45M911M%2FwEpeSgiQkau2UmJSA6cozXcWkLmOqZiAWr7Ne1cjZ5jtATCbQvZci5PSwFQlwaM7ux7kYAq7LLraSy0xTknmsHuC4xZDph1H%2F%2FLZkOoXrxggfrhcDHjvVa6Dyaq5WUpCprbou%2BfYVIYDCRttgsdLS7geAxMI7FaqAjsTvOLoI7j6vrF4ISoG1zrzG0UlJkIKIhgU2BzhnLaEdmW13nTYcK%2FQGe60Ct6yDR%2FwxU8cmGlwxY5GXUlb15QKkiMNj90skGOqUB8N0JuN%2FT4Alygb3%2Bko6EIdnReTuLrgFpcepJ8IPqviYnZ%2BNOrMY0DMnoB7wN%2FSy9%2FDVbnv4LEru0tkMQ2WSm8tdgP6d6eNQBygQU3mqX8JuGyG6zhv%2FRP%2Fiq9PV7tWNkwDr2q0K51UNBmKMl5wb%2BsonbRpqJKpD6l0oIajDY73cfJROZA%2BkAbmH5omOaQ9tX%2FzJjn3DCn5gKIRz8LvCYK9qmgr8Q&X-Amz-Signature=e62f312e77089bdad5089bc5b0534243a6961a256a3dfcc2a481e81ef5b458a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

