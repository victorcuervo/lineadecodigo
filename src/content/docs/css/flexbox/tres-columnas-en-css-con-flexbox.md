---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVGPVFQ3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T201111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkwjtfJGFpTZB%2BcvWmUDRhdy08Psr9hVtgptO%2FW0%2FvBAiBlT8qKpoGYHo%2FHFUa0svMvhJi0trjePg38bO84%2FokwpCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMTpwEL4uAblXI3DSSKtwDaJBfzl%2ByDfdYXaREyyhhRj%2Fb%2FY61sVNNhXJndyQk8J%2FTeyQEdEiGlZiNnXE59GLVxJT5OwJq%2Fd6BU025shVYGjoE2dCnIsmaaUN9SJJgEpIgMAwEmFgv%2BFYHXkkCeMA%2BUZm2JKHzj6zP2PjRm7beOgbQmZKA42jBE3Tam4j7FkmqcYv7kzkVnf8VPnGcb3LZZdEDuP6L4GhDaj4Vl4tUx0vf6NT0hQ6qn%2B4YZEfXdsaagcimoxPhbLo1Ug0s%2F8yhScJtMhO1PRrrAW%2BpaqcF3Nx%2BD9jlo69d2%2FD4uhvkfxoPxwqPvyNJJcAtUUtQlvHhsOilFEARJDJTKT73E9mf5m%2BjPJO%2BDccWAaRk2ahtcvfo1q1rHUVjmB6oQAr9GpjX8prMB221U93af82BFjTnKIQf%2FqqqYOQ5sWJ4fEZUbxzz7w4rN8sH3ppP1eLA9Ta9N9DOdU5EXZXNJNtKgX8glPnE77SpxCPjmtpOvJCJkvOzHGiBV8v19P9ksdmBQgueRobQjmU5nC34%2B0sLP648ACwHsUtk2w2HFnfbKyGvkMm2dU9upa4eGFGyx6B2PSXkFsK%2BdPZ0O2zH51%2FZ3BHPjljFXNyQ5mtop8Gj1yWu82Phd6eYQcW1Lj645cswsMnRyQY6pgHWuFWZFNJcNNDJeqjFhPVNZgryxpz%2FvgQb5COti%2FgoXDQX6%2BoyP%2FmdP4I58jsA4wyZJX9ewVlZwU%2BSMXbotEg4RLkoz8D8ItsCjALx%2BXcKBaxtQq3Bh2JYowsEkUHUTocRUyGjT7q9rpbTohasi1JiCQ%2BpOSOzZcx63zhB0ZDcQYhymwK4Szm5kg15fHb6AxYE5NAY3y369EqXyCMASMcSLSOBou8P&X-Amz-Signature=76c1f4874520a97c03bc1d092fd25e6cd5a0fa1772425619ed43e5bf99fa9c94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVGPVFQ3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T201111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkwjtfJGFpTZB%2BcvWmUDRhdy08Psr9hVtgptO%2FW0%2FvBAiBlT8qKpoGYHo%2FHFUa0svMvhJi0trjePg38bO84%2FokwpCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMTpwEL4uAblXI3DSSKtwDaJBfzl%2ByDfdYXaREyyhhRj%2Fb%2FY61sVNNhXJndyQk8J%2FTeyQEdEiGlZiNnXE59GLVxJT5OwJq%2Fd6BU025shVYGjoE2dCnIsmaaUN9SJJgEpIgMAwEmFgv%2BFYHXkkCeMA%2BUZm2JKHzj6zP2PjRm7beOgbQmZKA42jBE3Tam4j7FkmqcYv7kzkVnf8VPnGcb3LZZdEDuP6L4GhDaj4Vl4tUx0vf6NT0hQ6qn%2B4YZEfXdsaagcimoxPhbLo1Ug0s%2F8yhScJtMhO1PRrrAW%2BpaqcF3Nx%2BD9jlo69d2%2FD4uhvkfxoPxwqPvyNJJcAtUUtQlvHhsOilFEARJDJTKT73E9mf5m%2BjPJO%2BDccWAaRk2ahtcvfo1q1rHUVjmB6oQAr9GpjX8prMB221U93af82BFjTnKIQf%2FqqqYOQ5sWJ4fEZUbxzz7w4rN8sH3ppP1eLA9Ta9N9DOdU5EXZXNJNtKgX8glPnE77SpxCPjmtpOvJCJkvOzHGiBV8v19P9ksdmBQgueRobQjmU5nC34%2B0sLP648ACwHsUtk2w2HFnfbKyGvkMm2dU9upa4eGFGyx6B2PSXkFsK%2BdPZ0O2zH51%2FZ3BHPjljFXNyQ5mtop8Gj1yWu82Phd6eYQcW1Lj645cswsMnRyQY6pgHWuFWZFNJcNNDJeqjFhPVNZgryxpz%2FvgQb5COti%2FgoXDQX6%2BoyP%2FmdP4I58jsA4wyZJX9ewVlZwU%2BSMXbotEg4RLkoz8D8ItsCjALx%2BXcKBaxtQq3Bh2JYowsEkUHUTocRUyGjT7q9rpbTohasi1JiCQ%2BpOSOzZcx63zhB0ZDcQYhymwK4Szm5kg15fHb6AxYE5NAY3y369EqXyCMASMcSLSOBou8P&X-Amz-Signature=cfb5927fa972e81bb787af20f9dc962e66b9bde0453208fe5df38c9eb651d9c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

