---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YTVM5GS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKDR5TbYEggo5eHKSdpvAQNedm%2BXd8XUZrnjczEaFJwQIhALgK8fhe0epsoobyflJmUAHY%2B2LKc9hT8x%2FH1mrgopNLKv8DCH8QABoMNjM3NDIzMTgzODA1IgyDn3nHD6AGz%2F1L6rwq3APk1%2FD%2Bdr%2FfzDf%2F5AjOWr37Mn%2BaBvcyZPJS7gysVdTkUdvdSPG2iYrqtWyg9j9f9JiVSXmsmD9O%2BOtaRb7B63r7ykrrWMy7s6eZOAW%2FghoJGLHP316ylWgHG5hLCuFM%2BuS5oQifuc7W%2BFlOCXGIEJinNWd3qhV8DgM9l2CMiSaA01T1z9ddTNq5mKGtbjUFjhg4F4ZsUrGdDIQFzUVlkLpgmNubKp7lpxQIelSbvF%2BkdbBqQW4%2F3OQNakJDuPF%2Fmu9ZkdmoiBO2ne8d0ooRHHYBe9%2FVtu6gMr7ILYcKdaF0JcJXEQNEpFyKN9ukb7KCAbkRssRk4km9UHQwdZjh59L3Hbk4etqtZiLeKT5f86ESTlNF9XyGsl40%2BgHr29zsQqGSfTj3jNcKBLqqCrVqUhsh5l1xCtZ%2Bvt4OYDPDakOyNC1PVRxHJieh8pOmTViVTDfN4PwW8ZdBANi0KEFUnc6fZo4F8ynN6J0CJK32LZQuXa9sA5A4KKbRgDxFLuFC79qgLTdnFUmg6SaQJ5Y4BvrEh8nwprhqyybU9WOfMUwPaKdKufy8nq7Qg%2B4bNgOmN8qLpD2IGUfsBdL91PgVbyOQdmSGG1VZTQaClsfDM8ZBlcsfhymEivWa2oMG%2BzD%2F0tLJBjqkAYr2e7sNUN%2FJo%2Bqtdnn7A27dC3iSAWk4pMa8PmrOLBskxJ6Ba0EA8TLW0BYfJANM62tdphkG2sL%2FpyhFjdWTFoLjLRP4tVxnVAzlw4qBiUU1lNB48dSXGRTbCiQmNTcLOhZRjyxWeSjNgV75oAr6zqv%2Fua6tU8tBu58uE2N7Y%2FkugA%2B9uTw4EzcmZ8pDn3NsnpPxQM7Sk9%2FIqnbiFFqsl3z3XLQ3&X-Amz-Signature=71e60ca4dc524192c1792a64a647d02f81075dd742fb0179ba95e737ad19241b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YTVM5GS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKDR5TbYEggo5eHKSdpvAQNedm%2BXd8XUZrnjczEaFJwQIhALgK8fhe0epsoobyflJmUAHY%2B2LKc9hT8x%2FH1mrgopNLKv8DCH8QABoMNjM3NDIzMTgzODA1IgyDn3nHD6AGz%2F1L6rwq3APk1%2FD%2Bdr%2FfzDf%2F5AjOWr37Mn%2BaBvcyZPJS7gysVdTkUdvdSPG2iYrqtWyg9j9f9JiVSXmsmD9O%2BOtaRb7B63r7ykrrWMy7s6eZOAW%2FghoJGLHP316ylWgHG5hLCuFM%2BuS5oQifuc7W%2BFlOCXGIEJinNWd3qhV8DgM9l2CMiSaA01T1z9ddTNq5mKGtbjUFjhg4F4ZsUrGdDIQFzUVlkLpgmNubKp7lpxQIelSbvF%2BkdbBqQW4%2F3OQNakJDuPF%2Fmu9ZkdmoiBO2ne8d0ooRHHYBe9%2FVtu6gMr7ILYcKdaF0JcJXEQNEpFyKN9ukb7KCAbkRssRk4km9UHQwdZjh59L3Hbk4etqtZiLeKT5f86ESTlNF9XyGsl40%2BgHr29zsQqGSfTj3jNcKBLqqCrVqUhsh5l1xCtZ%2Bvt4OYDPDakOyNC1PVRxHJieh8pOmTViVTDfN4PwW8ZdBANi0KEFUnc6fZo4F8ynN6J0CJK32LZQuXa9sA5A4KKbRgDxFLuFC79qgLTdnFUmg6SaQJ5Y4BvrEh8nwprhqyybU9WOfMUwPaKdKufy8nq7Qg%2B4bNgOmN8qLpD2IGUfsBdL91PgVbyOQdmSGG1VZTQaClsfDM8ZBlcsfhymEivWa2oMG%2BzD%2F0tLJBjqkAYr2e7sNUN%2FJo%2Bqtdnn7A27dC3iSAWk4pMa8PmrOLBskxJ6Ba0EA8TLW0BYfJANM62tdphkG2sL%2FpyhFjdWTFoLjLRP4tVxnVAzlw4qBiUU1lNB48dSXGRTbCiQmNTcLOhZRjyxWeSjNgV75oAr6zqv%2Fua6tU8tBu58uE2N7Y%2FkugA%2B9uTw4EzcmZ8pDn3NsnpPxQM7Sk9%2FIqnbiFFqsl3z3XLQ3&X-Amz-Signature=cdfe0f3b85f0ea325517b684aba98fc7b8fd0305cc67d38a2d9ba6b74d23fe5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

