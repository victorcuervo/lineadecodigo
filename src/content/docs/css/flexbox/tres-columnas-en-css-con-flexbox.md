---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6RGWRDK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBfmUQdHOWXooVB%2F79ZQ9rFCdXvtsIQXoKWc5kcw9%2BeFAiBdJoX5PaD0qqCMvIq%2FFfbwIbVAQcGpkkLK6vRmU83dwCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM07qns8Emvn%2FbnVQOKtwDapar28CdGuTXBLSMWYh6Z%2BmTZJs3NQ68HNod69%2FnLayDPylBW8yNf%2BN4PnCdexoeLvbrXFt7FlUT68M7H8iIz6HN33xydY1GWq7DM1RTJ6zvGz9sLJkvAwf4t5mMGxQ9mhU762Go4RAq0hG68o6oJzEm3xFr43xHtsXp794MkkyzN0FXftIR%2F4rQpEjSY3h%2FEgPW7M%2B0VB8aZbB2jnBVGDlsF2jjwaE%2FiK%2B%2Br6f%2FyR7d9ciS%2BbL0cIdfv78ts6tIotMlJTOuEE1Q5xXguDmWu60lp2L9aVnMNSs86mLXUg09d5agHyl2U1CzhHde%2FAcDFefMWDyugKgd33DctrcCNHjIsCAjPB0Qyg0YEQV%2F7ndnVrxJiN7X8O9FbwIvDOkmxMquYyG3dbwKRWhLDjK5nNmTq7TwYNOmeSXa5kwbGiUa7%2FqNQ6ksYZlE%2B9AaavwmUXXtDJcSQvUZgIFGTvHQbOQ%2BtDTjtITTh0xZVk0T2a1T3hLL6fh5LxG3kda683LO2tZ7QEaRZaak6Ezq%2FHJayrsXrRTdNjjqk9RXrTUqAGXp5Lh%2Fjnb6yf58qqOvsGZdAQqDH7xejO5c5yqDbrGAHFekq6So3Ssz8NW3rZQKA%2FRpJxmv%2B6WAFW2fT0EwkZXZyQY6pgG%2BL%2FtnSPXKSGLiDfj2YARHirpR6NLShNPxALZCTG1cw45OUTjyIg0tFIsimlvdzRcLB%2FU%2FXnZ9AC2HCq5jx4HsB8%2F9N0HEpNGQPu99LGzhGIa7bdNpXUjzwCJAXS90uSMRccYlG9dqW1vgEVjA%2FBHoH%2BReWOfteAqijNRIgj2Jv8GBu95k8dFBA234tqaUKgsHAp3iZivtRzRPy%2Ba%2FQ2jopLgFcJJe&X-Amz-Signature=530bc9653ffc5dbcafe9b9f226b6a387c7d4967e45b96c3444c2ac2bc95fafca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6RGWRDK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBfmUQdHOWXooVB%2F79ZQ9rFCdXvtsIQXoKWc5kcw9%2BeFAiBdJoX5PaD0qqCMvIq%2FFfbwIbVAQcGpkkLK6vRmU83dwCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM07qns8Emvn%2FbnVQOKtwDapar28CdGuTXBLSMWYh6Z%2BmTZJs3NQ68HNod69%2FnLayDPylBW8yNf%2BN4PnCdexoeLvbrXFt7FlUT68M7H8iIz6HN33xydY1GWq7DM1RTJ6zvGz9sLJkvAwf4t5mMGxQ9mhU762Go4RAq0hG68o6oJzEm3xFr43xHtsXp794MkkyzN0FXftIR%2F4rQpEjSY3h%2FEgPW7M%2B0VB8aZbB2jnBVGDlsF2jjwaE%2FiK%2B%2Br6f%2FyR7d9ciS%2BbL0cIdfv78ts6tIotMlJTOuEE1Q5xXguDmWu60lp2L9aVnMNSs86mLXUg09d5agHyl2U1CzhHde%2FAcDFefMWDyugKgd33DctrcCNHjIsCAjPB0Qyg0YEQV%2F7ndnVrxJiN7X8O9FbwIvDOkmxMquYyG3dbwKRWhLDjK5nNmTq7TwYNOmeSXa5kwbGiUa7%2FqNQ6ksYZlE%2B9AaavwmUXXtDJcSQvUZgIFGTvHQbOQ%2BtDTjtITTh0xZVk0T2a1T3hLL6fh5LxG3kda683LO2tZ7QEaRZaak6Ezq%2FHJayrsXrRTdNjjqk9RXrTUqAGXp5Lh%2Fjnb6yf58qqOvsGZdAQqDH7xejO5c5yqDbrGAHFekq6So3Ssz8NW3rZQKA%2FRpJxmv%2B6WAFW2fT0EwkZXZyQY6pgG%2BL%2FtnSPXKSGLiDfj2YARHirpR6NLShNPxALZCTG1cw45OUTjyIg0tFIsimlvdzRcLB%2FU%2FXnZ9AC2HCq5jx4HsB8%2F9N0HEpNGQPu99LGzhGIa7bdNpXUjzwCJAXS90uSMRccYlG9dqW1vgEVjA%2FBHoH%2BReWOfteAqijNRIgj2Jv8GBu95k8dFBA234tqaUKgsHAp3iZivtRzRPy%2Ba%2FQ2jopLgFcJJe&X-Amz-Signature=77c275f5b1688efd7adcbf3f8494c49f4ad7b12ca7ebf33035164677e8d834eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

