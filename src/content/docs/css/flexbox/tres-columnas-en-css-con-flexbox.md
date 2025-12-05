---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G2GCVJD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T073244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOpScvuvAGzO2zo4wntUdbJyvry6M1IjpKparGK%2B5%2FkAiEA0rBO2Twzrc1Rwwu7vvvq9VDAGfTQZKNRble5vLuU4loq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDLgzNci1fXvkt5c%2FqircAy0HvRZANn5VSbiV%2B7FIMOeThKoDIhO6iM%2F6zAn3cs8Hu%2FC%2FUZmL1%2FyvT09lVj0rerzGlt5ZxfHP%2FRrtB9aWm2AR%2BBzTfrkRDJTc7FIynxyWsnE4L%2BSmX5okRCOPIBcJs4gF0wLou4CXWJowMET5sHhy2%2BagQgURsrVCRkQ7LTYJlJJRNHu2bz9ClU00qcwOSwLF0FJeAUCp41Z08W%2FBO%2B3PE6yp5s6ctJm4w1Ta%2B%2F0fkWzDeC7Kt2fJGVceVb4p8%2BPoQM9oGON4Z0zAI5SUzcHuPbUpUnODL2HLWoXZ%2BtRGDI1UfUnpWOoTC5vjTXxIB6Fenm9sG2sG6zf%2BTVqardQ7Z%2B%2FN7%2FMXJOJ%2Bmf4g%2FzP0NTV%2BYbG6UFeQuEawjF1YQa2j5Mkm5F4jsQPBWTffsYRXGDvrNXtVOZRjIkqPk3V2Y2jIpjqTrCypYmDskCIxiWt8NrNneGl9ke2N7ePFrED4CagwaRefTgJQItwOBGA%2FCh9p0dyHgcaDvxKkX37v8ghI%2FENNp%2Fll%2FCGb8k2tkajP1TYfDh54Fk%2FAgtJUq6B5tbH40SnBZ%2BWnA%2Be%2BRMUphTYj2k%2BwYOty%2BxgKdHYBOHHa%2F8eoqpjtX%2BrYb0iOCk%2Bzgoghn%2BlRWGFQMKgJMIuuyckGOqUB%2BKBFDQBJaf65xnGglKBggGCDISL6QZx48GmEy6x6VI2Klbt3Dggz9Xdvjbbx5F0H%2Fn7iMJZxM3cYgYctuN3WZhyyligKZy1e8thif9hLs0IEZtJfn4%2B91XySARaQnMUBoKj0Nk2%2B3tvPHACaBkSZb8kmM%2BZUdatuI%2BkzQ9M6s94WOIKutGswDbpqpgx07qygq1ZM%2Bu8gGTcpc6ugiXtfium51k6k&X-Amz-Signature=4dcfe356108f94e71a081548a1482b03f381951c72f9fb9b315dc3e3d80cc9f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G2GCVJD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T073244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOpScvuvAGzO2zo4wntUdbJyvry6M1IjpKparGK%2B5%2FkAiEA0rBO2Twzrc1Rwwu7vvvq9VDAGfTQZKNRble5vLuU4loq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDLgzNci1fXvkt5c%2FqircAy0HvRZANn5VSbiV%2B7FIMOeThKoDIhO6iM%2F6zAn3cs8Hu%2FC%2FUZmL1%2FyvT09lVj0rerzGlt5ZxfHP%2FRrtB9aWm2AR%2BBzTfrkRDJTc7FIynxyWsnE4L%2BSmX5okRCOPIBcJs4gF0wLou4CXWJowMET5sHhy2%2BagQgURsrVCRkQ7LTYJlJJRNHu2bz9ClU00qcwOSwLF0FJeAUCp41Z08W%2FBO%2B3PE6yp5s6ctJm4w1Ta%2B%2F0fkWzDeC7Kt2fJGVceVb4p8%2BPoQM9oGON4Z0zAI5SUzcHuPbUpUnODL2HLWoXZ%2BtRGDI1UfUnpWOoTC5vjTXxIB6Fenm9sG2sG6zf%2BTVqardQ7Z%2B%2FN7%2FMXJOJ%2Bmf4g%2FzP0NTV%2BYbG6UFeQuEawjF1YQa2j5Mkm5F4jsQPBWTffsYRXGDvrNXtVOZRjIkqPk3V2Y2jIpjqTrCypYmDskCIxiWt8NrNneGl9ke2N7ePFrED4CagwaRefTgJQItwOBGA%2FCh9p0dyHgcaDvxKkX37v8ghI%2FENNp%2Fll%2FCGb8k2tkajP1TYfDh54Fk%2FAgtJUq6B5tbH40SnBZ%2BWnA%2Be%2BRMUphTYj2k%2BwYOty%2BxgKdHYBOHHa%2F8eoqpjtX%2BrYb0iOCk%2Bzgoghn%2BlRWGFQMKgJMIuuyckGOqUB%2BKBFDQBJaf65xnGglKBggGCDISL6QZx48GmEy6x6VI2Klbt3Dggz9Xdvjbbx5F0H%2Fn7iMJZxM3cYgYctuN3WZhyyligKZy1e8thif9hLs0IEZtJfn4%2B91XySARaQnMUBoKj0Nk2%2B3tvPHACaBkSZb8kmM%2BZUdatuI%2BkzQ9M6s94WOIKutGswDbpqpgx07qygq1ZM%2Bu8gGTcpc6ugiXtfium51k6k&X-Amz-Signature=5fc870a87a62dfed42d583cc12950b6631e0b7ad65b7378ba70ddb3618a138b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

