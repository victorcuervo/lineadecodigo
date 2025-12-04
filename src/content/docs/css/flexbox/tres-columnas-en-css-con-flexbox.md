---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWW4KYLW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDpmVo9pN%2Fyk8tpaq%2Fvxwx74XZnw6iB%2FmXu3bP0vqV0wwIgPe4L0drc0lIfMosdpJzBchvGj%2BfwsuXMirWtTA%2F4p0Uq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDFzDyw20aRWm7yDzMyrcA0nGosbZ%2FjaxvKIfXLFzfyP0ZB4e0%2FhB6VAW6QXEmKvEHe4SchqjVTLUpnyh5LdpKnrSnvqXbxt5Wo0e8V8qom4dLedoE6IBGw4pLadG0gN%2FMqHqa4B11XwX6uJ34DlqlR1MIsMKgAOm1wFjZimj4FrAD4%2FlP0Tw%2FJZGW0pxZVWhIlUWg%2FeB2yNQz7AvpJBQAEDHLYtagFWlnMr7Mrd308DHCb520ahGDhGtCtNRgFlS2O%2BYQ2UDENvA%2FfpYUdQ3S4We84jBbO6Sw74tBNnww6%2BQuP5W%2BEGmouXkRvFiMuMcS%2BmHZdCwMKqer6PBJlhpB2VeLYwEQ%2FXXQJ9t%2BMeAmYDdnUkeuSNmAMprMEMnZgsG1n2nlYGHWI8wqXbdNPuLLLGu6ILuW9gf28OTfh0EUITSPZdeaKB%2FOFv6sjBV814EPUkCcy0qRRa8WIsnFLLjmvkUsxN9tX9g4i8FDjZMYbxM6ORkeajmJxxFsYgaTM%2B1AvD%2FfyYSj0pizEDIfUxfQHhXkZZKMFkOFZ%2BwrvhXQKA4RXCb704Xevm1TDglNLWpRYyk1ihYdHmMdHSMAd3k76i5nmW9NxrKvdvTktK4Fu4pEDJ0afzR%2BD0aV4nc4QlW%2FatiwG1HOF8BLE12MLHmxckGOqUBlpMrDdF%2F%2BFtoLwNc7kduJBlYf2KxntOuXyLOQqVYgEMiTItEiZAHdmJbCcutaZ%2BfNqS6Js1D4%2FY5ahE6FYiCwWd4AmGLJiqDWRUGO%2F5qqYVMyuCf5w%2F%2BHRpXikp%2FgNml9FobaIGFELw9vFdvIPuu05m1bx8hDE7v1KzXWiv5LQ9I0OlU%2Fe%2BysKzHYhf29wMvpuqAKZeIz2oplkSggi4T6ZYgc2pT&X-Amz-Signature=a2082b3e16cd50be4bbed5b249fa27b39f980e871b915fceb02a82e4379c1f51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWW4KYLW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDpmVo9pN%2Fyk8tpaq%2Fvxwx74XZnw6iB%2FmXu3bP0vqV0wwIgPe4L0drc0lIfMosdpJzBchvGj%2BfwsuXMirWtTA%2F4p0Uq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDFzDyw20aRWm7yDzMyrcA0nGosbZ%2FjaxvKIfXLFzfyP0ZB4e0%2FhB6VAW6QXEmKvEHe4SchqjVTLUpnyh5LdpKnrSnvqXbxt5Wo0e8V8qom4dLedoE6IBGw4pLadG0gN%2FMqHqa4B11XwX6uJ34DlqlR1MIsMKgAOm1wFjZimj4FrAD4%2FlP0Tw%2FJZGW0pxZVWhIlUWg%2FeB2yNQz7AvpJBQAEDHLYtagFWlnMr7Mrd308DHCb520ahGDhGtCtNRgFlS2O%2BYQ2UDENvA%2FfpYUdQ3S4We84jBbO6Sw74tBNnww6%2BQuP5W%2BEGmouXkRvFiMuMcS%2BmHZdCwMKqer6PBJlhpB2VeLYwEQ%2FXXQJ9t%2BMeAmYDdnUkeuSNmAMprMEMnZgsG1n2nlYGHWI8wqXbdNPuLLLGu6ILuW9gf28OTfh0EUITSPZdeaKB%2FOFv6sjBV814EPUkCcy0qRRa8WIsnFLLjmvkUsxN9tX9g4i8FDjZMYbxM6ORkeajmJxxFsYgaTM%2B1AvD%2FfyYSj0pizEDIfUxfQHhXkZZKMFkOFZ%2BwrvhXQKA4RXCb704Xevm1TDglNLWpRYyk1ihYdHmMdHSMAd3k76i5nmW9NxrKvdvTktK4Fu4pEDJ0afzR%2BD0aV4nc4QlW%2FatiwG1HOF8BLE12MLHmxckGOqUBlpMrDdF%2F%2BFtoLwNc7kduJBlYf2KxntOuXyLOQqVYgEMiTItEiZAHdmJbCcutaZ%2BfNqS6Js1D4%2FY5ahE6FYiCwWd4AmGLJiqDWRUGO%2F5qqYVMyuCf5w%2F%2BHRpXikp%2FgNml9FobaIGFELw9vFdvIPuu05m1bx8hDE7v1KzXWiv5LQ9I0OlU%2Fe%2BysKzHYhf29wMvpuqAKZeIz2oplkSggi4T6ZYgc2pT&X-Amz-Signature=2ff418f70f4d1f03a66bca6aa590a4361898c4641cb344ba5ac71fbea8b72235&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

