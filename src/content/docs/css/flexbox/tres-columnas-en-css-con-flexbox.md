---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGGM3MYQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T162549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyFNrB74jYFtJGxtDJbxiUqwgK7fgiCSWyXfADmoQ%2BdAiBL%2Bghy2RuB%2FkU6granA2AvZL%2Bys%2FJyUqLg2a1BfYeJ5Cr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM%2Fq40tzUvBupHeYyqKtwDR%2BV%2F9HGWAbliFhx9Dcu5ga1ogRyTWrV5izhC%2FcL5yzO4kd3%2FvSAEUUulzM%2FBefSnUetJVMYb2UBvZyhArmPD7b7vfULkKs3MOjmqkp8dcej4%2F9uaHCN8QHvmoxe6N8yDWd23keE87XB19o090KOB04%2FBQxU5IMUHDJnAHDWK90Pwk1hrStOOgbAUM4t6kEOMsYeENbH8hn05gIJjRPORCp70zrQvzXkW%2FWYl3mlfWqD85hE%2BjqKf3JnKyIH1QkK2qDCHfhokex8NxDCsQpFfXd71j2xRdDpj9Axq9OmXy%2F6vOh3RoegHTfBgEktBBShTsKBejKFAkuQqP45fEmqdDjSLZMqEud5cp1pEWCySGlHp1ZK%2BpUQVtrXpxxvUp%2BWmqlXgs3XCW6fpo90vMX9JkPjn0kbSkT1vRQKTyxlh%2F38SkbSm1p3%2BzS3hSQ2KV9UTWgA4v1xjnuYMXEzm%2FYmNcp4PiCphhlo5lzo8%2BihUyoO7Twaksy%2Fgn7yN1u4abikADS4yGs4%2BxNFwN0wqU8wBkkzsX6V83vO917vzHn7coDvJ%2BDvdXkGvLgJ%2Fbz04XmEcrnW2dQbq6H%2FitUE33caMchHbc6tHxto4WE7Lh0JqSOurBWRHTkpCuIlX1yww%2BfTLyQY6pgECf3WGYk7QZ4yGrOVlkqrEZ16M9R0MLlVhdZzOW%2B7B0KhXGfVFyCQQUuqijcvSeT%2B1awM5L9rKC0fxRtfzOj6KKAf8ddIWASjnJjIUPTp3CucePnpbwDIYRyiNWxugmnvFD%2BQsj%2FnwSjvWkuyLFKwb7d7jGtQIpCH3lvp%2Bt%2BQ10ZrT%2BC6n21FctdmPxxCFplEjJHAeaZP2q%2BMtwNSNKIGIgabUDXSV&X-Amz-Signature=39585a64f4142ff493df3f007e275073bed24c04f346f48a5c73b26eec0a1c74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGGM3MYQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T162549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyFNrB74jYFtJGxtDJbxiUqwgK7fgiCSWyXfADmoQ%2BdAiBL%2Bghy2RuB%2FkU6granA2AvZL%2Bys%2FJyUqLg2a1BfYeJ5Cr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM%2Fq40tzUvBupHeYyqKtwDR%2BV%2F9HGWAbliFhx9Dcu5ga1ogRyTWrV5izhC%2FcL5yzO4kd3%2FvSAEUUulzM%2FBefSnUetJVMYb2UBvZyhArmPD7b7vfULkKs3MOjmqkp8dcej4%2F9uaHCN8QHvmoxe6N8yDWd23keE87XB19o090KOB04%2FBQxU5IMUHDJnAHDWK90Pwk1hrStOOgbAUM4t6kEOMsYeENbH8hn05gIJjRPORCp70zrQvzXkW%2FWYl3mlfWqD85hE%2BjqKf3JnKyIH1QkK2qDCHfhokex8NxDCsQpFfXd71j2xRdDpj9Axq9OmXy%2F6vOh3RoegHTfBgEktBBShTsKBejKFAkuQqP45fEmqdDjSLZMqEud5cp1pEWCySGlHp1ZK%2BpUQVtrXpxxvUp%2BWmqlXgs3XCW6fpo90vMX9JkPjn0kbSkT1vRQKTyxlh%2F38SkbSm1p3%2BzS3hSQ2KV9UTWgA4v1xjnuYMXEzm%2FYmNcp4PiCphhlo5lzo8%2BihUyoO7Twaksy%2Fgn7yN1u4abikADS4yGs4%2BxNFwN0wqU8wBkkzsX6V83vO917vzHn7coDvJ%2BDvdXkGvLgJ%2Fbz04XmEcrnW2dQbq6H%2FitUE33caMchHbc6tHxto4WE7Lh0JqSOurBWRHTkpCuIlX1yww%2BfTLyQY6pgECf3WGYk7QZ4yGrOVlkqrEZ16M9R0MLlVhdZzOW%2B7B0KhXGfVFyCQQUuqijcvSeT%2B1awM5L9rKC0fxRtfzOj6KKAf8ddIWASjnJjIUPTp3CucePnpbwDIYRyiNWxugmnvFD%2BQsj%2FnwSjvWkuyLFKwb7d7jGtQIpCH3lvp%2Bt%2BQ10ZrT%2BC6n21FctdmPxxCFplEjJHAeaZP2q%2BMtwNSNKIGIgabUDXSV&X-Amz-Signature=d5573a4c2f42f06a89525155c233efbeb4e8fdcafd9efba02e24db554ec17258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

