---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2TJ6GY5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCcsE8GIX0xSV4vFcxciJ4nM%2B3G1joznQ%2Fu2C%2FVGxH%2BBwIhAMfYtaS7V%2FY6tJKtwrbRBSjtMXWbYahKZDzElye5LAi5Kv8DCD8QABoMNjM3NDIzMTgzODA1IgxJlnmaldObQFc3FXUq3ANgGJVNR6cwL6Fh3rOHT%2FWNy4q15Ise4JTJrNtEG%2BLkHJjjQ4Zk8g%2BvKZFYMfhFZpC22Z%2F4AIMZSimfPtMkVMRKzPPIaU31ci%2FWVYmX8H7VNIWT3Zs5kcMLu4TXY%2FmcvwFmqvq8RyOJq%2F%2Fo9EMRARTfRqBNCiqCY4TuXSnXyvvenb6EjlUOehTU%2FU3XTXRLcSE84ju5FLypKuMVjtkvDhL8z1rIXT2s5HOLHHg%2FbxBcKytrdP1y8mucSCW6O25oGxo5e4UhcOT%2Fyu5hsoH9BmtlK07l2E3Eki0mF6DlAvNxTnIn1XUDUaroBQIpkm%2BDEsgu6PzDxtJCCtPDXbZnl8JotIhE7ko4RdFeKuka7bAnqDHhFv6UYEFOQO49%2BorNWynh0arUoJNSw52Q0Cdxlu2zqc%2BYbll4AOgJj7oglME1ZPwY6UMG8X7CQluEgtVl7mFVxZfIeTrzSYXH8AQvUvgE06Sl%2B6L8lY%2BbONzMW0aF0oYjDavzMFLIyf%2BBtEEKFsRbQaLSvxR5OxZ%2FxngzbFitkZi%2BFpQFZxvZ2YZlgkRovcsi3i9TKHWnaDurxZ6EC7UFv2hDhpxLj3wTVSW9Xc2yJAK%2ByNqM1L79ARto9eOiwMBMPFWhibdi198WPDCLy8TJBjqkAatZDr4K4olgzqZwgTk31PWausNebefBP8srA5MbsNNFKqPEMv22vyCMsGVwZ8FQCuMDW2hb%2B9gF0OIMcn8Q3dRqf%2BmCAGfOc2dge%2BY2hf1ZHhwBP8Z5sq7dAvzZ%2F3hlnkasSxOnb7UkV1b6BnekSJxtK5Spy7hulbRSd2km8E4F8RoCS05e9bitez14q2KolJJNsQM2DUZRfurFIEllRNnCI3lT&X-Amz-Signature=c1af82340f00bb1199c1b18a4c1059feaffe7297be41d2abb6ba232f5a000f24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2TJ6GY5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCcsE8GIX0xSV4vFcxciJ4nM%2B3G1joznQ%2Fu2C%2FVGxH%2BBwIhAMfYtaS7V%2FY6tJKtwrbRBSjtMXWbYahKZDzElye5LAi5Kv8DCD8QABoMNjM3NDIzMTgzODA1IgxJlnmaldObQFc3FXUq3ANgGJVNR6cwL6Fh3rOHT%2FWNy4q15Ise4JTJrNtEG%2BLkHJjjQ4Zk8g%2BvKZFYMfhFZpC22Z%2F4AIMZSimfPtMkVMRKzPPIaU31ci%2FWVYmX8H7VNIWT3Zs5kcMLu4TXY%2FmcvwFmqvq8RyOJq%2F%2Fo9EMRARTfRqBNCiqCY4TuXSnXyvvenb6EjlUOehTU%2FU3XTXRLcSE84ju5FLypKuMVjtkvDhL8z1rIXT2s5HOLHHg%2FbxBcKytrdP1y8mucSCW6O25oGxo5e4UhcOT%2Fyu5hsoH9BmtlK07l2E3Eki0mF6DlAvNxTnIn1XUDUaroBQIpkm%2BDEsgu6PzDxtJCCtPDXbZnl8JotIhE7ko4RdFeKuka7bAnqDHhFv6UYEFOQO49%2BorNWynh0arUoJNSw52Q0Cdxlu2zqc%2BYbll4AOgJj7oglME1ZPwY6UMG8X7CQluEgtVl7mFVxZfIeTrzSYXH8AQvUvgE06Sl%2B6L8lY%2BbONzMW0aF0oYjDavzMFLIyf%2BBtEEKFsRbQaLSvxR5OxZ%2FxngzbFitkZi%2BFpQFZxvZ2YZlgkRovcsi3i9TKHWnaDurxZ6EC7UFv2hDhpxLj3wTVSW9Xc2yJAK%2ByNqM1L79ARto9eOiwMBMPFWhibdi198WPDCLy8TJBjqkAatZDr4K4olgzqZwgTk31PWausNebefBP8srA5MbsNNFKqPEMv22vyCMsGVwZ8FQCuMDW2hb%2B9gF0OIMcn8Q3dRqf%2BmCAGfOc2dge%2BY2hf1ZHhwBP8Z5sq7dAvzZ%2F3hlnkasSxOnb7UkV1b6BnekSJxtK5Spy7hulbRSd2km8E4F8RoCS05e9bitez14q2KolJJNsQM2DUZRfurFIEllRNnCI3lT&X-Amz-Signature=57cf2034b5e6d2f650974b16ea7d9c823431ce8f9d0e53c8222f307374297e2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

