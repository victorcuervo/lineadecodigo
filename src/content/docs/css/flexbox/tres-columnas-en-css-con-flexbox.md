---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2N2LOTQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCadFQYOlBN8MHTqJccn2q6rnNMhBvwwvz5OYMFtcg4QIgNt3yFtq3mKk2e2D6%2F085QAn5Z%2FbKKlPYmjRxsasL4JYqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2F%2FTpdfnlAJ21tLBircA8KBSpYOWmcuzSUhXk%2BbzGa8l4FS5n%2BDLIHen77WGC3ScrwFy2fbfjlMc7PhgLMxWZLBrv5Ykh4gawK%2BwTWlfT3UJXQwODKb6j8%2Bnb7XJyVxAttfwg58bKvlkypEuRRl750JhVlNcEmmdt3lPjxQ7soc7iig1Aswx7wS6Ln8sXl%2Frcj6LhqaMDoUC0hNdlkx4NYaPN0cXk8JzN8Cm4RK%2BAyHwdLb2myQ%2FEk1aNI6wg0zTRqkPUxzUwxsT5wOXdij2LbZYvmGUerbDAnbHro9bOSoz2vzVsFO6DXLrf8tYHnLF7FmG4ZL%2B5tYxBkwvCve3vcANi8p8QkyuMWmK6hT%2FJNMJVvuQNMniMqRcouGwyjPfbuL05QkuyQ4vG2Ejtww67Y3gUREIqCvfNc543p62s8cRnLVEBWIFS7ASd6vyX8IdltzmXYP4Ss6SUVapQxJlTphB0rUJiP4DytKucwv2eOu9pftckTaU7ZAkWVPWZ%2BIdoKlYgqW8NMDiWK7SbzybkIlt5o1X8sbA4F8UjqOfHhSWOZxZIDLYMFGAlZeOurIahZ6LMouaZ%2BXLSvKFMEXpd0Z269vz%2BAWVgIqurN0FOjrvJOHE9lkx7CLQOqXF4lSdvIqOQ42gL4dCYv9MM6U2ckGOqUBVmSaEVMrLvWw7mN8PPmDYFtfsT%2BtFnxydyXhPgJlAVOdnP21zIEaF5dOPbPRvpdTodXtcN3LesMLLz9kg2uBa%2BGDLlSpejkLpVdOqwCgT5heu5UBFp9SE3IHK6EckX%2FeabLCfZYO1BVxvylCTEz3lT9%2FltEmeQ%2B8jSYdXHpn%2FNIzrN948IM5aAOd3Cw75YULLMlYn7m8mcmFypvdXCntrOPADAep&X-Amz-Signature=6e2458ebe5079dbca4f909f742d6bf4b3d6db571c122c2bcae2021cea14f58af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2N2LOTQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCadFQYOlBN8MHTqJccn2q6rnNMhBvwwvz5OYMFtcg4QIgNt3yFtq3mKk2e2D6%2F085QAn5Z%2FbKKlPYmjRxsasL4JYqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2F%2FTpdfnlAJ21tLBircA8KBSpYOWmcuzSUhXk%2BbzGa8l4FS5n%2BDLIHen77WGC3ScrwFy2fbfjlMc7PhgLMxWZLBrv5Ykh4gawK%2BwTWlfT3UJXQwODKb6j8%2Bnb7XJyVxAttfwg58bKvlkypEuRRl750JhVlNcEmmdt3lPjxQ7soc7iig1Aswx7wS6Ln8sXl%2Frcj6LhqaMDoUC0hNdlkx4NYaPN0cXk8JzN8Cm4RK%2BAyHwdLb2myQ%2FEk1aNI6wg0zTRqkPUxzUwxsT5wOXdij2LbZYvmGUerbDAnbHro9bOSoz2vzVsFO6DXLrf8tYHnLF7FmG4ZL%2B5tYxBkwvCve3vcANi8p8QkyuMWmK6hT%2FJNMJVvuQNMniMqRcouGwyjPfbuL05QkuyQ4vG2Ejtww67Y3gUREIqCvfNc543p62s8cRnLVEBWIFS7ASd6vyX8IdltzmXYP4Ss6SUVapQxJlTphB0rUJiP4DytKucwv2eOu9pftckTaU7ZAkWVPWZ%2BIdoKlYgqW8NMDiWK7SbzybkIlt5o1X8sbA4F8UjqOfHhSWOZxZIDLYMFGAlZeOurIahZ6LMouaZ%2BXLSvKFMEXpd0Z269vz%2BAWVgIqurN0FOjrvJOHE9lkx7CLQOqXF4lSdvIqOQ42gL4dCYv9MM6U2ckGOqUBVmSaEVMrLvWw7mN8PPmDYFtfsT%2BtFnxydyXhPgJlAVOdnP21zIEaF5dOPbPRvpdTodXtcN3LesMLLz9kg2uBa%2BGDLlSpejkLpVdOqwCgT5heu5UBFp9SE3IHK6EckX%2FeabLCfZYO1BVxvylCTEz3lT9%2FltEmeQ%2B8jSYdXHpn%2FNIzrN948IM5aAOd3Cw75YULLMlYn7m8mcmFypvdXCntrOPADAep&X-Amz-Signature=2230ef4c254342c588280a58332b9e2a0e5a97e40d7103def39f203b887907d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

