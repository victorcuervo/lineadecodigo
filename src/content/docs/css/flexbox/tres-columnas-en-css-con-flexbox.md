---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKY2XXGE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T235404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdqOhwqx19yvEDDS7BLE8nGOT%2F707TffnShAwPS3iuaAiEAjIiUT4d0aCNh%2FBiQPKCaNg5fbDpLExYCl9IDZny8UacqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BmWSN0ClCyRXN%2BVSrcA8pTDBWFxRUV8imCtyjaDMIWGUdwEwZ%2FYbblk5C4%2FMAagaA1p1cBFt7%2FLbBW%2Bagvrph2nmIEZn3xYN7fYBXdyRxPB8inOh5m5m8IL4XKnZfNTEDKOAIH%2FGiiWo12pQ3%2BpzBz7Ryok4QXGmEwjNz4GQiuC86BLRiCayai27GLePLuORsmxlMDzOfSNpELGRhYfoSswX3KsrveRGFXvKtEGlWn4enZRIi4wkSy%2FBlClxiY1NQsukVrR8DIG184Jl8OpevS4hlvSBGCZbl6ut3tePzL4MOOxmBOdqIbAhH3EL%2Fw9IFtw0t46uZvNs4MUrobbeSidAi11DxF%2BHOCYnZ9M8BCHeDgFZjzM7ZrUa6phUfYMyh9uRXa5KN1JOw5Lbl0IWsJepHkEnOhVY7pGkey9e4jf%2BpTq7tQhmy9LKowW4TufgL2UUFZ%2FoL%2BR0yWTmIYaYtSQLMg1fqhhotzc9d5ISC7EJMwpUu443IjxohkRIwFhPKXpVNKzYAik69BrgzH6%2F6PRwtIz7g5%2B1f61KU%2F30TP4odd7K418xYUOgLKWD0p6a%2BH3nus7w2L8RtvoPXRsoVNf0c2sSObCvivvW8OzQ%2BM9J6QsL6dhcmuKrkiMGzuzUGNyLdQFxPXHhk%2BMMX90skGOqUBeqSGyDnUapUYUZFC5WH0qAXk7WegipvIPtt7xy0H4WMKKviTsBSGmDc%2F01L4OF0ox4SNa9WTrOHq8agf06G4674dEvxCjqv%2FG%2B2EWUf5C5fNpiKqjKGNSfVUdZBLfuHTQJDRNTMX6cOXrb34Zd0kmzfzQRNRpPWTgwPqDTiJt0GmXyQm1uXa2KiNELAmc5%2FgJ8PMsWwkbByaAp8GOHH7z1Y1d9KO&X-Amz-Signature=ec4d6687a030a3e70ccca44305c2b59873c25958e58a9163d56c490ec50b7b03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKY2XXGE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T235404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdqOhwqx19yvEDDS7BLE8nGOT%2F707TffnShAwPS3iuaAiEAjIiUT4d0aCNh%2FBiQPKCaNg5fbDpLExYCl9IDZny8UacqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BmWSN0ClCyRXN%2BVSrcA8pTDBWFxRUV8imCtyjaDMIWGUdwEwZ%2FYbblk5C4%2FMAagaA1p1cBFt7%2FLbBW%2Bagvrph2nmIEZn3xYN7fYBXdyRxPB8inOh5m5m8IL4XKnZfNTEDKOAIH%2FGiiWo12pQ3%2BpzBz7Ryok4QXGmEwjNz4GQiuC86BLRiCayai27GLePLuORsmxlMDzOfSNpELGRhYfoSswX3KsrveRGFXvKtEGlWn4enZRIi4wkSy%2FBlClxiY1NQsukVrR8DIG184Jl8OpevS4hlvSBGCZbl6ut3tePzL4MOOxmBOdqIbAhH3EL%2Fw9IFtw0t46uZvNs4MUrobbeSidAi11DxF%2BHOCYnZ9M8BCHeDgFZjzM7ZrUa6phUfYMyh9uRXa5KN1JOw5Lbl0IWsJepHkEnOhVY7pGkey9e4jf%2BpTq7tQhmy9LKowW4TufgL2UUFZ%2FoL%2BR0yWTmIYaYtSQLMg1fqhhotzc9d5ISC7EJMwpUu443IjxohkRIwFhPKXpVNKzYAik69BrgzH6%2F6PRwtIz7g5%2B1f61KU%2F30TP4odd7K418xYUOgLKWD0p6a%2BH3nus7w2L8RtvoPXRsoVNf0c2sSObCvivvW8OzQ%2BM9J6QsL6dhcmuKrkiMGzuzUGNyLdQFxPXHhk%2BMMX90skGOqUBeqSGyDnUapUYUZFC5WH0qAXk7WegipvIPtt7xy0H4WMKKviTsBSGmDc%2F01L4OF0ox4SNa9WTrOHq8agf06G4674dEvxCjqv%2FG%2B2EWUf5C5fNpiKqjKGNSfVUdZBLfuHTQJDRNTMX6cOXrb34Zd0kmzfzQRNRpPWTgwPqDTiJt0GmXyQm1uXa2KiNELAmc5%2FgJ8PMsWwkbByaAp8GOHH7z1Y1d9KO&X-Amz-Signature=2225506a2c2c628cdf9274d3669135f6362e4b73f793f929e78be31a03ef7ec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

