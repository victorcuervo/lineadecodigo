---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SJ75UR5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGTqwnDNMxI1%2BdhxxPtsdb7S6%2FCNTqi4PcXtqq67y7DiAiEA4gyBZqZ9cc9s2tOiRzbIPfL6bBM7q3dQbb8Om3n7c8gq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDCjG1W3pwbSJAKbogircA%2BeB7mXvocfq%2BnCSG6RHR%2Ft41%2FgvAsUghtlPxu9%2FkL16QU531%2Fz8W5qaGSdTnXKs%2FyUdxLIuTEoWjNZEyQdlq6f5QsarHS95oBfteKUwhXnaC8gJIw8KigjWmkJgbFnq3dkhWbPXzty%2FiPtPRf0lncqhxA9B9MyoHmP5YMO%2BIe7zQeb2V3CFqaG5nAPvC3bcLrHfEmOz1d%2F%2Bxj%2FEi0Dviu1485LiKBBnXSiULuz0kTPtH8eJDJSCtU%2FL%2BxUjdrE8w1hHfh8E0I7i8P0m0g3Mu2cZQlM0kN8u5Ipbe9zQUtACTsVlHNAXe0vy64xiO9Mu32fL9qTd3VQ7f1fSZGcPZQBZzSnDeOIkG6Mqs8Qm8w0wfJvDPmMz4TuD%2B7jSfHhGpcB9oEmKzFjr%2F%2FLZQQCjKo0yy2Xjxp45Ht169xcHO%2Fe12lxmujqfb8rDagx3kZPwvdppQIHJ%2By0HvqkyLHL3UDvFERzxjOC95p%2FKVgR8oblMtRhVUQlKA0dqcgjWCL8HjadiI7VCPYw7KnATvsktcirONzMKQG83ArR%2BzIPE0jwPVIrXLVM3neZQ3CjpujIhdIZiYaozASmU%2Fp%2FY%2FiJ7CLpBu6AnJt%2Bhq4i460tbYwVgDGmrx%2BTxIektWXqRMITJxckGOqUBM05Aj1F8aOcSXFz5MwX6xLD5xLZWjezuBhPZ88Y1Kvu0M1I0nj6YWj9ZqhHLFOjbGYHsV2IrJQC4OiKEUUzRINAK7M4aYXhcQL%2FVON7abxw2y6PQN45q8TFF%2BxI3yr8DSGJ6uoZbiISrSzTwUlOABNTo1ivWgyP7%2BZYCOVqtNsE83W7B1%2FwOuQja1SJAtZBZ4gtBBvY429s09yEeZoO1WUHVLroo&X-Amz-Signature=d3c49f7a1adeb9821ed6082a07976b14da79c5c4fa3559ccf2f4c3d961ef6eb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SJ75UR5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGTqwnDNMxI1%2BdhxxPtsdb7S6%2FCNTqi4PcXtqq67y7DiAiEA4gyBZqZ9cc9s2tOiRzbIPfL6bBM7q3dQbb8Om3n7c8gq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDCjG1W3pwbSJAKbogircA%2BeB7mXvocfq%2BnCSG6RHR%2Ft41%2FgvAsUghtlPxu9%2FkL16QU531%2Fz8W5qaGSdTnXKs%2FyUdxLIuTEoWjNZEyQdlq6f5QsarHS95oBfteKUwhXnaC8gJIw8KigjWmkJgbFnq3dkhWbPXzty%2FiPtPRf0lncqhxA9B9MyoHmP5YMO%2BIe7zQeb2V3CFqaG5nAPvC3bcLrHfEmOz1d%2F%2Bxj%2FEi0Dviu1485LiKBBnXSiULuz0kTPtH8eJDJSCtU%2FL%2BxUjdrE8w1hHfh8E0I7i8P0m0g3Mu2cZQlM0kN8u5Ipbe9zQUtACTsVlHNAXe0vy64xiO9Mu32fL9qTd3VQ7f1fSZGcPZQBZzSnDeOIkG6Mqs8Qm8w0wfJvDPmMz4TuD%2B7jSfHhGpcB9oEmKzFjr%2F%2FLZQQCjKo0yy2Xjxp45Ht169xcHO%2Fe12lxmujqfb8rDagx3kZPwvdppQIHJ%2By0HvqkyLHL3UDvFERzxjOC95p%2FKVgR8oblMtRhVUQlKA0dqcgjWCL8HjadiI7VCPYw7KnATvsktcirONzMKQG83ArR%2BzIPE0jwPVIrXLVM3neZQ3CjpujIhdIZiYaozASmU%2Fp%2FY%2FiJ7CLpBu6AnJt%2Bhq4i460tbYwVgDGmrx%2BTxIektWXqRMITJxckGOqUBM05Aj1F8aOcSXFz5MwX6xLD5xLZWjezuBhPZ88Y1Kvu0M1I0nj6YWj9ZqhHLFOjbGYHsV2IrJQC4OiKEUUzRINAK7M4aYXhcQL%2FVON7abxw2y6PQN45q8TFF%2BxI3yr8DSGJ6uoZbiISrSzTwUlOABNTo1ivWgyP7%2BZYCOVqtNsE83W7B1%2FwOuQja1SJAtZBZ4gtBBvY429s09yEeZoO1WUHVLroo&X-Amz-Signature=6a71ecd6d46dfba181f5d493c923b7bc36238b328b2006089404a68f19995b0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

