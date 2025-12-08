---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXBUFCQP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T115158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4rtRzQsy1eezWv5pLwHoUAm6FhguxkR%2BzjzHP4Ed3nwIgc5TOj7a4WdWLvGlOpBy27dTtYfqp%2BNYjR5ezsXlIOgYqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuoRy8KreN6hKp1ECrcA%2FFtyVfb6KMBfJXlkVXzT6ig2LRaYUqt5U3MPazeux1o%2FUve%2B9T52pUarIWLpwxri73eA36UdEVhDO2NyhGkiwYp%2FTKIdet66z%2F%2BczYC5MZUnSAgHPAH04ghpDZlyMe5kdgb4HOGSeuMkpz6bmvsPMKXVAkoM3TtS%2Faw94cMNr91Ee9a%2FMqJ0Xd8njLm1YBCLqqlO2Ychqn5NT6VAFHGq6TJcG5kQja9Dv0XtrQ5XfBIGXTqjfaBxRzaBjmRFasM%2FNjCPQvtV%2FmuQBiFvcH9x%2BV8NarvvKIahEBXctjVJcPLX%2FEwRK461MTYWgOZoNPW1NGGqfJUUufyxUSRiLD0apwDoOFQTQsguB%2Bar0Fcau%2F0eEHLT5ipb1Z7QrTLLnuBs5OcS21uQbIB5ku5XG2kRcijwx%2B%2FkFuOq2%2FjOsVkRRYaXg6BE9YmkTG%2Bt7FiSJfvc6KdJP%2BCAJUbdYIgvz9eOSGQjgNAQiwOdtVmQgL0huC7uz6i1OJphLmlur7UuoGlzOxLF6xHnnTbXH6nJC2tuSIPTT%2BUh92%2FDe4Q%2BwdRvgskNXuxqi2hnOlMoOrqpqBiX1DyP%2F%2BZ4v5jGfeGeqH0tO7n7TN7Bj0K1js%2FKNQAfkrfoOuBUPz5PhY5yP5OMPv02skGOqUBIafVOY3SFWVYFqoJplFBtKRA85diDYKJMMjJ7kd66vaDNqJQjUX7PJN882Gh5DLBRan8yfBTpOkFI6U%2BUeKZW6V0rDnhUtZQtGQUsXu%2BrJC9jolbYJ8fBaL8xSK3kY55m0uKMVRY9eMqBmZdwyYU47lX%2BxBZU7K2vk182gugcEk4cfhOoUEAhh47a5LlTixSZCm0ywEWcenUYlr38j9Z3ZQv4X%2F4&X-Amz-Signature=8312beb3296c3bec85ab040669c8e9bab30a06da43dd06a2659178eebceeddc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXBUFCQP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T115158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4rtRzQsy1eezWv5pLwHoUAm6FhguxkR%2BzjzHP4Ed3nwIgc5TOj7a4WdWLvGlOpBy27dTtYfqp%2BNYjR5ezsXlIOgYqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuoRy8KreN6hKp1ECrcA%2FFtyVfb6KMBfJXlkVXzT6ig2LRaYUqt5U3MPazeux1o%2FUve%2B9T52pUarIWLpwxri73eA36UdEVhDO2NyhGkiwYp%2FTKIdet66z%2F%2BczYC5MZUnSAgHPAH04ghpDZlyMe5kdgb4HOGSeuMkpz6bmvsPMKXVAkoM3TtS%2Faw94cMNr91Ee9a%2FMqJ0Xd8njLm1YBCLqqlO2Ychqn5NT6VAFHGq6TJcG5kQja9Dv0XtrQ5XfBIGXTqjfaBxRzaBjmRFasM%2FNjCPQvtV%2FmuQBiFvcH9x%2BV8NarvvKIahEBXctjVJcPLX%2FEwRK461MTYWgOZoNPW1NGGqfJUUufyxUSRiLD0apwDoOFQTQsguB%2Bar0Fcau%2F0eEHLT5ipb1Z7QrTLLnuBs5OcS21uQbIB5ku5XG2kRcijwx%2B%2FkFuOq2%2FjOsVkRRYaXg6BE9YmkTG%2Bt7FiSJfvc6KdJP%2BCAJUbdYIgvz9eOSGQjgNAQiwOdtVmQgL0huC7uz6i1OJphLmlur7UuoGlzOxLF6xHnnTbXH6nJC2tuSIPTT%2BUh92%2FDe4Q%2BwdRvgskNXuxqi2hnOlMoOrqpqBiX1DyP%2F%2BZ4v5jGfeGeqH0tO7n7TN7Bj0K1js%2FKNQAfkrfoOuBUPz5PhY5yP5OMPv02skGOqUBIafVOY3SFWVYFqoJplFBtKRA85diDYKJMMjJ7kd66vaDNqJQjUX7PJN882Gh5DLBRan8yfBTpOkFI6U%2BUeKZW6V0rDnhUtZQtGQUsXu%2BrJC9jolbYJ8fBaL8xSK3kY55m0uKMVRY9eMqBmZdwyYU47lX%2BxBZU7K2vk182gugcEk4cfhOoUEAhh47a5LlTixSZCm0ywEWcenUYlr38j9Z3ZQv4X%2F4&X-Amz-Signature=036c973b364fae8a239d0887e8517975b486a8a320208ff01d46db2405f84365&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

