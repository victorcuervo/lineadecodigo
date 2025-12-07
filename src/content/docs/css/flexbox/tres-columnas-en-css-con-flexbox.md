---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP4N64GE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T191607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFvxajMrT73uW4SGVFk50Ovb4MZGKBTc1ZCVGBzXf%2FnOAiEA%2BuH8UtRSxFWbbUF8VgP%2Bfb40JkhxLYVh5RnhSNgO8FAqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPikHZIvjmSJf%2BqlvyrcA6kDVWP1Arh%2FnM1PJbDp%2BnwNiXgrS7uSSCvsliAlipXF05QUtJSNnQXD7uE%2BMP9y3jZXoT3MXgavQSwhTy5h2PUn7rLIGPau%2F3qD3QSnVFXVPempszgPLBzUsCQOgOkKHiGj3KaQdW0b61FpZ82IM2vOZl0JSzs2lK7P88J%2FcQrY6ISX8WunoFLSuBZH6Js0TW8DIbm0YAVa92MAAPzWDzxnlhvq1NSInZ1BwCR0xuphuAok%2FwiVbT%2BC4tAYj7gTaKsTloDqIQroDX0dnYfVsqTOoaqSrLkVxJEOkuqMXSBfZsb388CX6xv0dWFtAEC5Tpem54VdrFCJx7p2zXeSVn1lVsObTXNYamcLbPHpbGGwFwNktqcx%2F0i3RQYyhbhT2%2BBVfzsWpEBaDDIiN80FYIVZcWTXAHm9dv0lggyVkP84n%2FKyWNhHPd6b8OvRPjPXTyg7JsdY50yotYlj3GF3p%2BHU%2BiYMvVwa3isoN2A7UI%2BepfOXEnCbJvGxhlje3oUWQs%2B81x1QchJdT92c4czQdi980fIAS6zW3lrEWQWOl7L9Q7pImz%2BBay9NUAnM7xYntdarXxAHEV0UHHAnY2mn9YFIz%2F%2F3X5i4RMwN7HtETsgQAZzBu4a661vdlqLmMI281skGOqUBaOjuBRcd7Yom6CC7Y9LrZzTpE3btqW6rhBMnUONb8F%2BwBQBcna5bCFo1kQI9EnHKNRFPPlpTPV3KcdU%2Fe%2FZ%2BhsZeE1w%2FtCIcsPrRRFlIi%2BX2boFtYX9pIDs4FYeg0TWCIEgVTcy2sFqBHfO4b1DaJ%2FNjVTIEzvOhwXpxqvnZnCzD6WArY%2FkGMntIE6%2B7ChsGVYD0z8yJPfoUlihuK28R73K50Tj0&X-Amz-Signature=3492f32a8bfa9fd12e8cac4b490d2f44e616ddef0a185717ff3c74e9376026db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP4N64GE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T191607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFvxajMrT73uW4SGVFk50Ovb4MZGKBTc1ZCVGBzXf%2FnOAiEA%2BuH8UtRSxFWbbUF8VgP%2Bfb40JkhxLYVh5RnhSNgO8FAqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPikHZIvjmSJf%2BqlvyrcA6kDVWP1Arh%2FnM1PJbDp%2BnwNiXgrS7uSSCvsliAlipXF05QUtJSNnQXD7uE%2BMP9y3jZXoT3MXgavQSwhTy5h2PUn7rLIGPau%2F3qD3QSnVFXVPempszgPLBzUsCQOgOkKHiGj3KaQdW0b61FpZ82IM2vOZl0JSzs2lK7P88J%2FcQrY6ISX8WunoFLSuBZH6Js0TW8DIbm0YAVa92MAAPzWDzxnlhvq1NSInZ1BwCR0xuphuAok%2FwiVbT%2BC4tAYj7gTaKsTloDqIQroDX0dnYfVsqTOoaqSrLkVxJEOkuqMXSBfZsb388CX6xv0dWFtAEC5Tpem54VdrFCJx7p2zXeSVn1lVsObTXNYamcLbPHpbGGwFwNktqcx%2F0i3RQYyhbhT2%2BBVfzsWpEBaDDIiN80FYIVZcWTXAHm9dv0lggyVkP84n%2FKyWNhHPd6b8OvRPjPXTyg7JsdY50yotYlj3GF3p%2BHU%2BiYMvVwa3isoN2A7UI%2BepfOXEnCbJvGxhlje3oUWQs%2B81x1QchJdT92c4czQdi980fIAS6zW3lrEWQWOl7L9Q7pImz%2BBay9NUAnM7xYntdarXxAHEV0UHHAnY2mn9YFIz%2F%2F3X5i4RMwN7HtETsgQAZzBu4a661vdlqLmMI281skGOqUBaOjuBRcd7Yom6CC7Y9LrZzTpE3btqW6rhBMnUONb8F%2BwBQBcna5bCFo1kQI9EnHKNRFPPlpTPV3KcdU%2Fe%2FZ%2BhsZeE1w%2FtCIcsPrRRFlIi%2BX2boFtYX9pIDs4FYeg0TWCIEgVTcy2sFqBHfO4b1DaJ%2FNjVTIEzvOhwXpxqvnZnCzD6WArY%2FkGMntIE6%2B7ChsGVYD0z8yJPfoUlihuK28R73K50Tj0&X-Amz-Signature=598fb65f6a3da788ff08993aecba82e9b048148336f304879b12be948ad9fc34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

