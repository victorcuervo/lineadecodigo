---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THQWU376%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDKUnebvtb8fKXTjHQiGfZf9UL1OWThMNvPJfvQuCA4agIhAJn1s6o4Z6YOwq%2FlRyvF9fxj7WtLTDbYhKsNtl3XAhxWKv8DCEcQABoMNjM3NDIzMTgzODA1IgzyKeMbMJInM5HrIjkq3AO57uPIXDFL3oxHzYnkOwWzcoaNoHvfrqovtIey6Z523kjXPu0j5a0GWesRqM45AJ07r1Gp6xdRwt4pPwlLmDOeJ4ulC%2BApyF473OH5SUmbOrQTD1zE569rjBtrtxJnp1LnoX2saFFAiU6QtoI%2FJbJgY3mcWBODliABcoFBZ%2Fj2B3lQ6GvcFchWbxZaUsMrcHqcxM8OIPsk4W51tHxPe5%2FMjbBRZgYlBKJX2ZiZ4pyU9a2DD4SxeXMCq3G9cBttrj91EtiVQBprarywFNx8Le9lUZUI6wcRzlnYY9kCrtppEHz0Yk6DduuBdQAam7Ts7P7dBsh5v1Cx7wRW%2Fd%2Bbr8UuNMeG6skF2YeOFUR2T%2B3BgjALSOjSnHypmYfA%2F2OEo0YnOByVd3Y2FIbzzwwb0jpA6X7IwmCnC%2BKFkGGNewgEsI4viXQQNHfXVHUQutzgDMdbJ%2FmxobF0PCFzw1xqJkoSurIln9R25I%2BvfZ62VWkA2VIArW4wZf6T81Vg9anDKLpWdjU3bwuBv5yK5kNNded9JnWhu0LFM%2FTcIjKHejeSzT%2FhEk3Hp2p225VjzRjuezii6jkg27VXnEtEnb71oTto%2FvqePG2iKIHqLiL%2FM2GMNaQh%2BYD4bSE04OPWbTDKocbJBjqkAbpCgsGah%2FwFWUGAkFn6zi4Qf9eDaoTG5U%2BLu85skDLk7DMzvI5NxoP2%2B90fqcX3kU%2F%2BzC3G5iSrB24Dt1CLcJLFqkGIf46x8HLmwLdeResJhN3sq4RDDBh0KpAGpRptfrJabTCUfsgZPwiL5vIppZtbPlXcfBldJTxaCwWFO6CPagg3dsutUst68XceglWUJKOsqGNsDmUojPZghFKjF1AYzOJQ&X-Amz-Signature=35c60297cb7050aa8fab1315304e07b161176b0e115b3c3ec51be97f44fe67d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THQWU376%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDKUnebvtb8fKXTjHQiGfZf9UL1OWThMNvPJfvQuCA4agIhAJn1s6o4Z6YOwq%2FlRyvF9fxj7WtLTDbYhKsNtl3XAhxWKv8DCEcQABoMNjM3NDIzMTgzODA1IgzyKeMbMJInM5HrIjkq3AO57uPIXDFL3oxHzYnkOwWzcoaNoHvfrqovtIey6Z523kjXPu0j5a0GWesRqM45AJ07r1Gp6xdRwt4pPwlLmDOeJ4ulC%2BApyF473OH5SUmbOrQTD1zE569rjBtrtxJnp1LnoX2saFFAiU6QtoI%2FJbJgY3mcWBODliABcoFBZ%2Fj2B3lQ6GvcFchWbxZaUsMrcHqcxM8OIPsk4W51tHxPe5%2FMjbBRZgYlBKJX2ZiZ4pyU9a2DD4SxeXMCq3G9cBttrj91EtiVQBprarywFNx8Le9lUZUI6wcRzlnYY9kCrtppEHz0Yk6DduuBdQAam7Ts7P7dBsh5v1Cx7wRW%2Fd%2Bbr8UuNMeG6skF2YeOFUR2T%2B3BgjALSOjSnHypmYfA%2F2OEo0YnOByVd3Y2FIbzzwwb0jpA6X7IwmCnC%2BKFkGGNewgEsI4viXQQNHfXVHUQutzgDMdbJ%2FmxobF0PCFzw1xqJkoSurIln9R25I%2BvfZ62VWkA2VIArW4wZf6T81Vg9anDKLpWdjU3bwuBv5yK5kNNded9JnWhu0LFM%2FTcIjKHejeSzT%2FhEk3Hp2p225VjzRjuezii6jkg27VXnEtEnb71oTto%2FvqePG2iKIHqLiL%2FM2GMNaQh%2BYD4bSE04OPWbTDKocbJBjqkAbpCgsGah%2FwFWUGAkFn6zi4Qf9eDaoTG5U%2BLu85skDLk7DMzvI5NxoP2%2B90fqcX3kU%2F%2BzC3G5iSrB24Dt1CLcJLFqkGIf46x8HLmwLdeResJhN3sq4RDDBh0KpAGpRptfrJabTCUfsgZPwiL5vIppZtbPlXcfBldJTxaCwWFO6CPagg3dsutUst68XceglWUJKOsqGNsDmUojPZghFKjF1AYzOJQ&X-Amz-Signature=7b9c1f09f223a549e2f539f8a20451986bc116474be5594855d4bffbc0590f9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

