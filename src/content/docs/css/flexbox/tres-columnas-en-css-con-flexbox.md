---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FIPY3XL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T193427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOqVhvZUuUhTfuE%2FBcLpxjSSMzkDVH%2BYFToVQjgaSYUAiA%2FXjli7sTcCdMvaEkmj8E17zRJAnflkMXOd4x0bpNzDCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdrd%2FYXtXiGMSoHEjKtwDVouB86SzUO2zig2D1RsGl9CQujYBpsAk8K5Cd4iQFlYc%2FCjS4lliFhXNr4VZ%2FDRUYfHx0hTJq8XQOsDRYSevtx9TM3QuZ2X0b45H2Gwjr42S3NIZ23VG9qL1FeWbc0gTSwASTAHbGfkypz0pcqXfOLgCDDd8ECltT7voReiCUgBFiD5YU1dO2OhGewg1lv6BqZbuWCM3A3KvpSZVKiYfZbE3bIAo1fZlX8qabnw1tg6jI4z5F1Wq0LyqeA0OHz0D%2FpVIcyadiorgHfNAXbGQcLwRSxU5uvNyDYB7IChy289FPJNeXWJtqgP1O4MKoHYbttc6oXKgV76TEue6FA0%2F8tVbXZQG4ZNRUgXivNaBNq4OuS2SQgIEC2SJWrBjY7ZPUiQE5%2BVCy8GDY2DqsS6iOwrNiga7G6Bu%2BdgxKjztrAA1F2l4M6RGw9s%2BFGo%2Fpl%2Fo0pR9I8UWZSBzbUwMEmMfY%2F5GF6yJ0X1xFp4%2F6MQQG89sWAXlZFaCoafWczjdd8SwSbFPrWgbPPIz4NFd4QVJWPPTHLFiHZhFTVA599o1DeVBcNBTJmP5iTjAKKdI2EzFOb4kRA%2Fy83xi8sDTNhhMxJjZNU1avuFNTuegYuwZH5NUVQT%2BDEL3NBtINaswuLPcyQY6pgGLd%2FmqaC7cyh%2F9mhAuAP4I3ldIcusXcA7MAvcDwxXYf28yshuKMDgMU16XeSCxArdxmYxJ%2BiicRn4ZfJR0VscHAZSgSc51okUuHrFjYMtAu4%2F9FqEmh6cdy2SMd8RbkQNhLkBQvrYvFkFHblqb9U8DWsd1MImf4od3W5jUlOcDu9K8t21BDO9h3ubAXQFI8h%2Bf8hxF7NvwIRFLiJPvJjcMpTe2TaRd&X-Amz-Signature=85d651ca5b275bad21ff553902095bbdd9c9e400766e6b6a7999a66566a6447e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FIPY3XL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T193427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOqVhvZUuUhTfuE%2FBcLpxjSSMzkDVH%2BYFToVQjgaSYUAiA%2FXjli7sTcCdMvaEkmj8E17zRJAnflkMXOd4x0bpNzDCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdrd%2FYXtXiGMSoHEjKtwDVouB86SzUO2zig2D1RsGl9CQujYBpsAk8K5Cd4iQFlYc%2FCjS4lliFhXNr4VZ%2FDRUYfHx0hTJq8XQOsDRYSevtx9TM3QuZ2X0b45H2Gwjr42S3NIZ23VG9qL1FeWbc0gTSwASTAHbGfkypz0pcqXfOLgCDDd8ECltT7voReiCUgBFiD5YU1dO2OhGewg1lv6BqZbuWCM3A3KvpSZVKiYfZbE3bIAo1fZlX8qabnw1tg6jI4z5F1Wq0LyqeA0OHz0D%2FpVIcyadiorgHfNAXbGQcLwRSxU5uvNyDYB7IChy289FPJNeXWJtqgP1O4MKoHYbttc6oXKgV76TEue6FA0%2F8tVbXZQG4ZNRUgXivNaBNq4OuS2SQgIEC2SJWrBjY7ZPUiQE5%2BVCy8GDY2DqsS6iOwrNiga7G6Bu%2BdgxKjztrAA1F2l4M6RGw9s%2BFGo%2Fpl%2Fo0pR9I8UWZSBzbUwMEmMfY%2F5GF6yJ0X1xFp4%2F6MQQG89sWAXlZFaCoafWczjdd8SwSbFPrWgbPPIz4NFd4QVJWPPTHLFiHZhFTVA599o1DeVBcNBTJmP5iTjAKKdI2EzFOb4kRA%2Fy83xi8sDTNhhMxJjZNU1avuFNTuegYuwZH5NUVQT%2BDEL3NBtINaswuLPcyQY6pgGLd%2FmqaC7cyh%2F9mhAuAP4I3ldIcusXcA7MAvcDwxXYf28yshuKMDgMU16XeSCxArdxmYxJ%2BiicRn4ZfJR0VscHAZSgSc51okUuHrFjYMtAu4%2F9FqEmh6cdy2SMd8RbkQNhLkBQvrYvFkFHblqb9U8DWsd1MImf4od3W5jUlOcDu9K8t21BDO9h3ubAXQFI8h%2Bf8hxF7NvwIRFLiJPvJjcMpTe2TaRd&X-Amz-Signature=4ea62715b7669b8896a07df4c0b6ddf636a4fbd96c13e554297f32c9f26961c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

