---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XEJVNOC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIGXl%2FnIK%2BfpWZNpTV%2BoOPt25CjOm0OQO1HF%2BMUIiJnJQAiEAqOQBLP%2BdHPbjuhnaZ9oHxa3gIdvyvY53jmgHgBt4Zbcq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDB5f%2FkCbPHH0%2B%2FD5aircA3fa8SHxC8qcktYz2r6b3cnnV1zQsmrTHqIQvEiwQrLO8X0w%2F9MnfS64Z7WqRPwkcwSJiPsY788MVvC8iLosbwW69OKCcmNb2Hj5Bg%2BQLAg4KRYvNL1vDGD%2Fm%2FWkEk9AH1Ct27KLZ9KkV0Z%2Ff42GEydlxQDJUVjboqGfuXitgu6t2bZRiP4sP91OuIy48D3VWAPAUZzUDk5MN1JIr1yGJCj2%2B0T0k3PZNuEPFICCNyJw3WaLtKv9OfEHTqRs9fcYYi9m0hr0Cj9DGhUNlUQGKsA0ZEd7EEgIY3S4gsGshZ%2FImjvTDL6yMrc17XCs0nMl5h3iL7NbhVifN4CnglCorCIa67ROJnDHqJbFa%2FrJHlp%2B3E1wVsqdfuKQoRHjb4ShhKaZzMSs6smJPMU6yZ5Rh%2FfONUhRwqjar5XtNYaBlyj%2FR7TZD4xsmcPhP40j%2BNIVACJgHt5tDDkk7kR0%2B28uIZT6ZFy3mZ4FTOknr8JIRHN60ykhzEdtCwCU%2BkWPCO46Z6S4hUHzq42kd4cRrazxjzHMaT2i%2FvHwrrExwVP4CL6wufsbHeL9PMOXEnfpJfKimOU4ligXtuxUJ0ymFUjUjgJ4eHPTEjEU38WGFDcLjEOXBAEBlGsX1LeQPBHsMP%2Bzw8kGOqUBOb9DqkJpwuNyO579E4l7lK5bW9%2FP4h%2FU40dLIIQuU%2FaX8XWT0FML%2B0h7UOMIw3LK%2BqBsmNuUqu1Mo65TVM01S6irX9nMD41c5DwCb7t7GytQMQnMW7D20ZqHemq01rOZF4z1Qyi3I1xZTY7URk%2BH6oHxb%2FubavUrIkCjvUYO6TgQ6OHbQnTPuWHAf4Y8UFtlBVBU%2BPL1GVqDd%2FJVj09OOwQtHPU4&X-Amz-Signature=2d4fbb7c052d38b988e6fa6f4510ca871c3e43555f97a160c2db72a0061edd42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XEJVNOC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIGXl%2FnIK%2BfpWZNpTV%2BoOPt25CjOm0OQO1HF%2BMUIiJnJQAiEAqOQBLP%2BdHPbjuhnaZ9oHxa3gIdvyvY53jmgHgBt4Zbcq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDB5f%2FkCbPHH0%2B%2FD5aircA3fa8SHxC8qcktYz2r6b3cnnV1zQsmrTHqIQvEiwQrLO8X0w%2F9MnfS64Z7WqRPwkcwSJiPsY788MVvC8iLosbwW69OKCcmNb2Hj5Bg%2BQLAg4KRYvNL1vDGD%2Fm%2FWkEk9AH1Ct27KLZ9KkV0Z%2Ff42GEydlxQDJUVjboqGfuXitgu6t2bZRiP4sP91OuIy48D3VWAPAUZzUDk5MN1JIr1yGJCj2%2B0T0k3PZNuEPFICCNyJw3WaLtKv9OfEHTqRs9fcYYi9m0hr0Cj9DGhUNlUQGKsA0ZEd7EEgIY3S4gsGshZ%2FImjvTDL6yMrc17XCs0nMl5h3iL7NbhVifN4CnglCorCIa67ROJnDHqJbFa%2FrJHlp%2B3E1wVsqdfuKQoRHjb4ShhKaZzMSs6smJPMU6yZ5Rh%2FfONUhRwqjar5XtNYaBlyj%2FR7TZD4xsmcPhP40j%2BNIVACJgHt5tDDkk7kR0%2B28uIZT6ZFy3mZ4FTOknr8JIRHN60ykhzEdtCwCU%2BkWPCO46Z6S4hUHzq42kd4cRrazxjzHMaT2i%2FvHwrrExwVP4CL6wufsbHeL9PMOXEnfpJfKimOU4ligXtuxUJ0ymFUjUjgJ4eHPTEjEU38WGFDcLjEOXBAEBlGsX1LeQPBHsMP%2Bzw8kGOqUBOb9DqkJpwuNyO579E4l7lK5bW9%2FP4h%2FU40dLIIQuU%2FaX8XWT0FML%2B0h7UOMIw3LK%2BqBsmNuUqu1Mo65TVM01S6irX9nMD41c5DwCb7t7GytQMQnMW7D20ZqHemq01rOZF4z1Qyi3I1xZTY7URk%2BH6oHxb%2FubavUrIkCjvUYO6TgQ6OHbQnTPuWHAf4Y8UFtlBVBU%2BPL1GVqDd%2FJVj09OOwQtHPU4&X-Amz-Signature=0d2a010a2b62c481539ba811935b73ef8c6b75ae6ea64478dfd64b25c7ebb923&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

