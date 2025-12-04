---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ZFO4HE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIG6kLE3ncQ0u%2F9CwMlGKv%2BqmZXSUe8H6Fq2zDk38KTqOAiEAlJ5EeOLskljEufZ1aVChWhyhEPCw2nzWsJNcEdoSAM4q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDCn1IQ%2Bb6tfPdQw1HSrcAwgOsbmehJSNQk7tf8zn8xqs4bKHu5OW03Do5bN4T3ICPuj6%2B%2FdfXjC039aYbtS9WhROKwiiukaq77Fte%2BQtuaRDv3AsR6aaLCSp0IUx8Js%2FDivisE4bGFrtkRmJMwNZ8YOG%2FugK9FzTCLBicx1bvgZh7fhXaqu6UBdD1LfPABxcmo%2BRr2uMEX3roi2%2FjBJRqaUnzXV00B8cmFXtC7vqoxhX8iLq6QB92Z6KjybCel1LgoTWDKYZDDjCQbtEpG44LxaK2X4Uw1uniggePInbVjke6SQNvyDHWYVRdcYL3tZabeSmBDypQPWPqBXaMDRMbliD7Hc9xy7DK0i35V8pO%2BuDnyPyr1p%2BPA9O6RESd6he1e10YHYlVhiJMqgXPgQoAIYbf9%2FVYsMo2qDsbyI8HcUlssk03xvW3uXSs1aI57Pn5jdGyaaii%2BeKZqDlp8EmdFaHKgicSOPFzedQhaXkuqvRSplc5kSLgOGiTuGY8gIw2UthKtFY2DaMJpSIbObg1CKTlc8oApSMJA31tG1TaOfGBOABD3WrND9Bm%2BlZrYnNx4TJM0s1Kb%2B4P0D%2Fl3PC5VwFUpUy3jMUJQSMMiX4yLSlQRgzGXaxMXPXcAX4kWkEzDiAhcuAMR4WanFnMLfoxMkGOqUBxx5EvQnYdIUUFw1%2B3uJwHtVyr%2Bm6zZkz9rc9tlPRij4M%2FTqIZXt%2FapasiunU0CF6UlUk4MyHGXblZaKQHc9MZ%2FYgZhsVgeO2vE%2BKTEIpqdKeFRARU%2BpTXQlZvqPiD157AglXHYhcY03itO5IBFwlMj%2BI%2FX7If78YaF2nLRw0oVj6qTnfJvko1IobWMyBcsp2UZTOupcX1qmSj0gGcLYvZR4dbDlw&X-Amz-Signature=71f7e82bf84ae73d090d1fe46e9dbf51cd33a0a5af4b58c77d48641c3c4f0c02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ZFO4HE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIG6kLE3ncQ0u%2F9CwMlGKv%2BqmZXSUe8H6Fq2zDk38KTqOAiEAlJ5EeOLskljEufZ1aVChWhyhEPCw2nzWsJNcEdoSAM4q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDCn1IQ%2Bb6tfPdQw1HSrcAwgOsbmehJSNQk7tf8zn8xqs4bKHu5OW03Do5bN4T3ICPuj6%2B%2FdfXjC039aYbtS9WhROKwiiukaq77Fte%2BQtuaRDv3AsR6aaLCSp0IUx8Js%2FDivisE4bGFrtkRmJMwNZ8YOG%2FugK9FzTCLBicx1bvgZh7fhXaqu6UBdD1LfPABxcmo%2BRr2uMEX3roi2%2FjBJRqaUnzXV00B8cmFXtC7vqoxhX8iLq6QB92Z6KjybCel1LgoTWDKYZDDjCQbtEpG44LxaK2X4Uw1uniggePInbVjke6SQNvyDHWYVRdcYL3tZabeSmBDypQPWPqBXaMDRMbliD7Hc9xy7DK0i35V8pO%2BuDnyPyr1p%2BPA9O6RESd6he1e10YHYlVhiJMqgXPgQoAIYbf9%2FVYsMo2qDsbyI8HcUlssk03xvW3uXSs1aI57Pn5jdGyaaii%2BeKZqDlp8EmdFaHKgicSOPFzedQhaXkuqvRSplc5kSLgOGiTuGY8gIw2UthKtFY2DaMJpSIbObg1CKTlc8oApSMJA31tG1TaOfGBOABD3WrND9Bm%2BlZrYnNx4TJM0s1Kb%2B4P0D%2Fl3PC5VwFUpUy3jMUJQSMMiX4yLSlQRgzGXaxMXPXcAX4kWkEzDiAhcuAMR4WanFnMLfoxMkGOqUBxx5EvQnYdIUUFw1%2B3uJwHtVyr%2Bm6zZkz9rc9tlPRij4M%2FTqIZXt%2FapasiunU0CF6UlUk4MyHGXblZaKQHc9MZ%2FYgZhsVgeO2vE%2BKTEIpqdKeFRARU%2BpTXQlZvqPiD157AglXHYhcY03itO5IBFwlMj%2BI%2FX7If78YaF2nLRw0oVj6qTnfJvko1IobWMyBcsp2UZTOupcX1qmSj0gGcLYvZR4dbDlw&X-Amz-Signature=88000618fee5d5a2a8c342813e4a04fa4ff2e595ac4fac2284b12519b9eac0bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

