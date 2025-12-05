---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDYDF7KG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T060128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOrHUcFMNkmKujky08gz3Ny2iW%2Bpmoorqgsq5T6NDe9wIgIC1Z1NRlOeCQZOGK%2FKiriBQ3%2B9bR0lIKsUuLXFcg98Uq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMNSrgVwyAyC%2Bpu24SrcA9%2BUr0Xo7yHsLDWZASeSZBbdVV3rfqDTMP8RYkxslhOFjnEQte3tXzrOAxMYEeC4QrhfhZAUU63d9Vb1oFSdzY4UKLjgHw%2FZqldQXgb2s2GQKYCkLHpfCZE8yDqydD2EEcIb%2FfcnxO5C2oQSH1IMHZxI%2FRmBK773Fmtar%2B7gGRh8stg6iwNWU2rTdWoNxuArPA2qFLu5yI0gbq0ol6CDOzsJ%2BUGx953PVvUy8fd9GbOWVJe3Kh5q0ANW%2B1jQxIKeTyOEOIu%2BMuKa9LdGLMo%2Brqv7Qqb0R6wJOKDynTMpBQQcjtAMcfCPG3AAH59w8dg9H2MKOua9o3DLVo56klCwgBAoEpWSl%2FurMZmNGPY57oYlMmQwHHyTWJDBRD9fHoaET6ebWPT5O0dDPbZfeMNfar3%2FGRgw18SzhfVxsoz%2B0H671wT9ixwGDxXsWP1yKcaZGVstn2KnGaYJi3FUEbMXsStjcgJLnXkAVqN973O%2FybcNyAwNELwIsVcpHHR712yOPnuWA%2BLQOB8FsNoAu9SJKhbwaBcCIqaQD5Z4E0G0rq%2F9EdOJXxr0O5fMNqfweQmrJ6RrCEXYey9HZ0NLqci9hmMPvJoyln5im1l0cHP7NKkCPGAnoVtbZty2%2FTRaMN6qyckGOqUBngQp%2BN3sWgtjAh6%2FISGdGOjiJhAX17aH3QWtIs41LGzSIYYveGyDQmpdN7cQ9RAZsNkMV0hVugEdwH3rNOzaO5r%2B9ElCMZJJN4sricgb1UmSmRmoZWB9MaU%2Fd64hbYbcdRBIgTNhOhndvFaQ0k6Yshh5yvIPL3lPIf%2BLpPTqXk6AH8kfI0OGqJmmnd50fkWkXFi0yJCnqo2r08F7bGgtlqipLyKn&X-Amz-Signature=4aa4184773e2bff9b680872ccc9b6c754ed5e341a5397bbd5239ffe2882d7a92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDYDF7KG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T060128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOrHUcFMNkmKujky08gz3Ny2iW%2Bpmoorqgsq5T6NDe9wIgIC1Z1NRlOeCQZOGK%2FKiriBQ3%2B9bR0lIKsUuLXFcg98Uq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMNSrgVwyAyC%2Bpu24SrcA9%2BUr0Xo7yHsLDWZASeSZBbdVV3rfqDTMP8RYkxslhOFjnEQte3tXzrOAxMYEeC4QrhfhZAUU63d9Vb1oFSdzY4UKLjgHw%2FZqldQXgb2s2GQKYCkLHpfCZE8yDqydD2EEcIb%2FfcnxO5C2oQSH1IMHZxI%2FRmBK773Fmtar%2B7gGRh8stg6iwNWU2rTdWoNxuArPA2qFLu5yI0gbq0ol6CDOzsJ%2BUGx953PVvUy8fd9GbOWVJe3Kh5q0ANW%2B1jQxIKeTyOEOIu%2BMuKa9LdGLMo%2Brqv7Qqb0R6wJOKDynTMpBQQcjtAMcfCPG3AAH59w8dg9H2MKOua9o3DLVo56klCwgBAoEpWSl%2FurMZmNGPY57oYlMmQwHHyTWJDBRD9fHoaET6ebWPT5O0dDPbZfeMNfar3%2FGRgw18SzhfVxsoz%2B0H671wT9ixwGDxXsWP1yKcaZGVstn2KnGaYJi3FUEbMXsStjcgJLnXkAVqN973O%2FybcNyAwNELwIsVcpHHR712yOPnuWA%2BLQOB8FsNoAu9SJKhbwaBcCIqaQD5Z4E0G0rq%2F9EdOJXxr0O5fMNqfweQmrJ6RrCEXYey9HZ0NLqci9hmMPvJoyln5im1l0cHP7NKkCPGAnoVtbZty2%2FTRaMN6qyckGOqUBngQp%2BN3sWgtjAh6%2FISGdGOjiJhAX17aH3QWtIs41LGzSIYYveGyDQmpdN7cQ9RAZsNkMV0hVugEdwH3rNOzaO5r%2B9ElCMZJJN4sricgb1UmSmRmoZWB9MaU%2Fd64hbYbcdRBIgTNhOhndvFaQ0k6Yshh5yvIPL3lPIf%2BLpPTqXk6AH8kfI0OGqJmmnd50fkWkXFi0yJCnqo2r08F7bGgtlqipLyKn&X-Amz-Signature=6a3784bd4fbd4e3017281be67364371f3a9c71a5a64d58c8887184819353a0dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

