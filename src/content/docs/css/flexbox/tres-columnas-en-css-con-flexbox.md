---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X34ZSP4O%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwf%2F1gSK0aau5prggt%2F6ypyzkSFzHPCUXxDegVu7%2BS1AiEA%2BhnTWYFNUbPby8V6RzY%2Fl0rkDmz5kK9tiHR%2BjnzFshAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDTZ2iBAhD4R%2BRbxLyrcAycZJ3%2FpRECrYeMYnxOIsTOctqqJqFikaOUq0Z88ivCHQdyx3AlZWO1an3YPrOkSfAgIzRyMR45OeEJq36vBPu42zjUTgNeZgcMVnHN6hkDIcw%2FkVV96vOVT%2FFL1HLmGlGxx8W3wdLGDXnotNg%2FleXkh1sTGSxwnbMn6pQXAmIdmRHlxYSCUw6WtY6rjaaH%2FQlmHQ6Bkyb5jE0x8N2nYZemGf6izOOztwTxY42uOfJUS4Sp4DIBKJgnl2LEX4HcxptgsX0YNAZhZBnWDATbgsT%2F%2FBQqy%2F61lETG8yUi9YnYpuzf14wJjZbR4dtvVTrmXeYbzZABw7QaFmy9s2slmmn8ojZScg8H5QjQijI4x4wPa86ZAskA2q9SMQJlPkWFEBRKew9W5V5lMIeTuUZ7EnMb1bgLYvXnqeqUAl6tMaO3rNCUfX6t5YuUPv5npT5nOPmF8nSka2l3UnWi1SuKgHgylO4BOlLqaAeVFMBqy6FQs7tjPTGXSsbW4HdtgHX4rqF3qaLWdmSxRm%2BbVWylCwIYAXf6mmQeuZ5U%2BaPCaiGRTmd%2F7UFrnaT4OTJIq2KBr9Bkvv7SOtEMJkmVPLOxBxrjZmFODKeTwen%2FGK32a8b2Is837xdk%2BG5mUAxUHMJ%2B8z8kGOqUB85DHFfLHFAA0uGhdN0GUv%2BpcX26q7b558%2Bhu%2FOt7EcIEKVV8CQdTC2a0aGG1M09r%2BRFC9FxV6L788Gey3BqAHKOXzq1oigV69HmKZZ%2BbwWFYfsm933TLQ5%2BiUew15nJrgRIuWB0utDL79XA4BGckUPNZBzNVhcOj%2F4HOXpBUDZn1qx28JE8vxYd%2BvMqDF7WfVQzPbUs%2B0qnMAl5%2BnBHDYPWJ%2FU9H&X-Amz-Signature=b86a7f6ee246adcc67217f9e46ecee08cabd5df5cea3e39278d91b01375a0d35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X34ZSP4O%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwf%2F1gSK0aau5prggt%2F6ypyzkSFzHPCUXxDegVu7%2BS1AiEA%2BhnTWYFNUbPby8V6RzY%2Fl0rkDmz5kK9tiHR%2BjnzFshAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDTZ2iBAhD4R%2BRbxLyrcAycZJ3%2FpRECrYeMYnxOIsTOctqqJqFikaOUq0Z88ivCHQdyx3AlZWO1an3YPrOkSfAgIzRyMR45OeEJq36vBPu42zjUTgNeZgcMVnHN6hkDIcw%2FkVV96vOVT%2FFL1HLmGlGxx8W3wdLGDXnotNg%2FleXkh1sTGSxwnbMn6pQXAmIdmRHlxYSCUw6WtY6rjaaH%2FQlmHQ6Bkyb5jE0x8N2nYZemGf6izOOztwTxY42uOfJUS4Sp4DIBKJgnl2LEX4HcxptgsX0YNAZhZBnWDATbgsT%2F%2FBQqy%2F61lETG8yUi9YnYpuzf14wJjZbR4dtvVTrmXeYbzZABw7QaFmy9s2slmmn8ojZScg8H5QjQijI4x4wPa86ZAskA2q9SMQJlPkWFEBRKew9W5V5lMIeTuUZ7EnMb1bgLYvXnqeqUAl6tMaO3rNCUfX6t5YuUPv5npT5nOPmF8nSka2l3UnWi1SuKgHgylO4BOlLqaAeVFMBqy6FQs7tjPTGXSsbW4HdtgHX4rqF3qaLWdmSxRm%2BbVWylCwIYAXf6mmQeuZ5U%2BaPCaiGRTmd%2F7UFrnaT4OTJIq2KBr9Bkvv7SOtEMJkmVPLOxBxrjZmFODKeTwen%2FGK32a8b2Is837xdk%2BG5mUAxUHMJ%2B8z8kGOqUB85DHFfLHFAA0uGhdN0GUv%2BpcX26q7b558%2Bhu%2FOt7EcIEKVV8CQdTC2a0aGG1M09r%2BRFC9FxV6L788Gey3BqAHKOXzq1oigV69HmKZZ%2BbwWFYfsm933TLQ5%2BiUew15nJrgRIuWB0utDL79XA4BGckUPNZBzNVhcOj%2F4HOXpBUDZn1qx28JE8vxYd%2BvMqDF7WfVQzPbUs%2B0qnMAl5%2BnBHDYPWJ%2FU9H&X-Amz-Signature=3a51d4442b07748c3ae786c4b254aa29c542af376a0ada667ec6d254fd22ab86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

