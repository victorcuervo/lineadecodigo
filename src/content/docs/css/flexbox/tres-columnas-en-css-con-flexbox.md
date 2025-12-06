---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBG4AZSK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T125300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIzxJegujwlaWhMWSjmJn9pOHEe5gBYb95OFc2cJOTYQIhAK6oUOSuYIfRxUyRQp3AQG1glKNXvY4SEcpyn9rPTHjIKv8DCHUQABoMNjM3NDIzMTgzODA1Igyz20%2Fcjb10CYUza%2F4q3ANRFbLPA9%2BKG2dpd3S8xbUQdedmPAK8O35o7g%2B1WNlbNFsTGWS7AROpZrtNFspNZ4DXlJJ6E8LEeLh6HcqwMg7zJgmwUYt3Ana%2Bi%2FaUDUAbO5aBYHLiFIEDS0bBlU69PXF%2FQm5xOWNxmFx%2FoilJQzdNI5kCLEEvwxjyAbwkeI99bhPpyDQBPRLhb3UxPwy0LA3QasBsNxqZkkw81U0liEy8fTJE94ToPX1k2gBe9%2FRLZQpUiCzfq5zNJkfig4WLyur057Ak4OQlPb4r6zG2WcKlyde1gcA6RW5DB%2B0S8uFcBEIyhouZfjETyzJ2nq1e7o2GSqnkZWoi7Tcjb6LeubyA89s%2F7GiU%2BKBvi0mhZs3lnZT%2BtoluCOsf4roDgbW9o5Jm8xAyHLDAGgtKtJNzDLAC%2Bo8Muh8rOL3hYyV9mHnmO%2BdDuNOt3WTn2bWKzwKJq13qwiFctVDooBM1%2BFHMFbEnCXl8rXU%2FLrXBAOiSkKLrIYH%2BUZKzWhylbISHcfMfQRrQx%2FHlc9n7eQfhfsRMa4blC2GL4YgCsC1tGdbM6cV0Xhgg9Q04JmAB%2Fl0g9vz2OfYj1JnhAiE%2BfUvp2%2FruojQUfu2l8%2Ff3zvgm%2Bx4Low5v%2FHlLZHbMJ3wyMtrnkDDFptDJBjqkAUkvWqh2RQIO%2BH4zN6T8S7v1ii8tgaxrl8fR%2B20pBjh0Zam3aC8FU%2F5vF8Rz%2B69vfzsMa1CpcA7m655r%2BPQaTnXyzrQcjwl1kKCZ%2FKReyPmfL6rMOG9vIFiu8f%2BKS4wUD6DnYh4SOOO8uF3SFjoDtg%2F9Q80kXRih6IuFQOSwtHr3%2F4OoQ0dPZpyDZlOY5g2OeL2kgq0%2FpYrG4EDWmc2i1YevhDVw&X-Amz-Signature=c248f034ba284feb3b3a4f3fea5b7e0ccca9dd271d09bfba25ba793f268c0bc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBG4AZSK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T125300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIzxJegujwlaWhMWSjmJn9pOHEe5gBYb95OFc2cJOTYQIhAK6oUOSuYIfRxUyRQp3AQG1glKNXvY4SEcpyn9rPTHjIKv8DCHUQABoMNjM3NDIzMTgzODA1Igyz20%2Fcjb10CYUza%2F4q3ANRFbLPA9%2BKG2dpd3S8xbUQdedmPAK8O35o7g%2B1WNlbNFsTGWS7AROpZrtNFspNZ4DXlJJ6E8LEeLh6HcqwMg7zJgmwUYt3Ana%2Bi%2FaUDUAbO5aBYHLiFIEDS0bBlU69PXF%2FQm5xOWNxmFx%2FoilJQzdNI5kCLEEvwxjyAbwkeI99bhPpyDQBPRLhb3UxPwy0LA3QasBsNxqZkkw81U0liEy8fTJE94ToPX1k2gBe9%2FRLZQpUiCzfq5zNJkfig4WLyur057Ak4OQlPb4r6zG2WcKlyde1gcA6RW5DB%2B0S8uFcBEIyhouZfjETyzJ2nq1e7o2GSqnkZWoi7Tcjb6LeubyA89s%2F7GiU%2BKBvi0mhZs3lnZT%2BtoluCOsf4roDgbW9o5Jm8xAyHLDAGgtKtJNzDLAC%2Bo8Muh8rOL3hYyV9mHnmO%2BdDuNOt3WTn2bWKzwKJq13qwiFctVDooBM1%2BFHMFbEnCXl8rXU%2FLrXBAOiSkKLrIYH%2BUZKzWhylbISHcfMfQRrQx%2FHlc9n7eQfhfsRMa4blC2GL4YgCsC1tGdbM6cV0Xhgg9Q04JmAB%2Fl0g9vz2OfYj1JnhAiE%2BfUvp2%2FruojQUfu2l8%2Ff3zvgm%2Bx4Low5v%2FHlLZHbMJ3wyMtrnkDDFptDJBjqkAUkvWqh2RQIO%2BH4zN6T8S7v1ii8tgaxrl8fR%2B20pBjh0Zam3aC8FU%2F5vF8Rz%2B69vfzsMa1CpcA7m655r%2BPQaTnXyzrQcjwl1kKCZ%2FKReyPmfL6rMOG9vIFiu8f%2BKS4wUD6DnYh4SOOO8uF3SFjoDtg%2F9Q80kXRih6IuFQOSwtHr3%2F4OoQ0dPZpyDZlOY5g2OeL2kgq0%2FpYrG4EDWmc2i1YevhDVw&X-Amz-Signature=9e9cc3ee25191498b0803ae18b507d4adab6e91ebf0d39e3d313394085658126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

