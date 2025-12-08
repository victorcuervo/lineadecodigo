---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK7YJNM7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T003624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3iOrC3ptvuBU%2FOVy4c6oWYdmBMM%2FQn%2Fcv1qBd6UF3sgIhAPbxPmyNYLQKzWJGjbfSXSn1RuokFP%2FckEEjOUyIPoLgKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrEPmD0iDg32QZv30q3AP7uiZq5gVCMkIOBXBG3VZm0uYOPlMVjUOqLkbh9%2FaVDZaXJ520joK43DF0pvwTq8FXEoPbcFHET%2BAtRIOeeXqVoo8b4nDw4Lu4A67BrWL75J%2FIZ1WDiOSQJj66shYdrqtkEhkfZ4mMobDqnt7dpNmETXB6FCNEit%2FFNZLLVfcorC418vf9r7%2FuxUYV1WyON6KbnhDhawlOMzdgIKzO9eUE38c1KRTj6Q5qCSshUpl0bpDQdwsb8CoRbDeciCQC0wsQkGJraQvuIweHTO0MfD%2FRrETemHMAnQwL9I78ukBNz%2F5dPoWj9f8VEVFJqAH5hbrlzORw53ZsDKIOQgyENEqAj3%2F9tJl5aq9KDBWtK8Wrwyjqk1cbASpQyDFMIZvBS5Iavh8j9W8Z4xHoQrayW1RMgge0WDMq%2Fx%2BXyXPtrwbyaynZ7TuI2CH4aesXL%2B82S1a8xWMUaEkng7MJujxeLb8GCSDPKPMaq330v%2FnxbJepb9%2Fc1aqtn9I5XwcOjhHxqHUloTFaLfwh26Rh1%2F8DIhBOUtfiSpPUpbaDUGPAX5itIWYe1VIuwgIVHgvjk0YDfpVNHPspvLObBsOCXSpviJBTtXtsQ7LkPfTfAHAlbZK8glP9sChCHH%2BL2S0YRzCAotjJBjqkARH9awSRDedj2QN3AZ%2Bjsn5CRKBjcfqDqX76H2NmrIKS8n7Y1TEjeudJ67RdNvAPzpAqOQTtbkvZJuFEGnETZOn3vZnZKGXTjsDZo3uyShXV9QCyS35mcs9TOPy56VVLhtq2lz%2FVkpUrRBulBRjYJ9RfYsUDH1k5Lo8V1cUAln3kIJlynkAE8lfN8Nrd%2BwkKq5pRpZBnizn2yIvP%2BC1t%2BhqvlLeS&X-Amz-Signature=15497b6f0ff15fd80bc18ebecc78e0ab3785bf58b471894290abe575af062190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK7YJNM7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T003624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3iOrC3ptvuBU%2FOVy4c6oWYdmBMM%2FQn%2Fcv1qBd6UF3sgIhAPbxPmyNYLQKzWJGjbfSXSn1RuokFP%2FckEEjOUyIPoLgKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrEPmD0iDg32QZv30q3AP7uiZq5gVCMkIOBXBG3VZm0uYOPlMVjUOqLkbh9%2FaVDZaXJ520joK43DF0pvwTq8FXEoPbcFHET%2BAtRIOeeXqVoo8b4nDw4Lu4A67BrWL75J%2FIZ1WDiOSQJj66shYdrqtkEhkfZ4mMobDqnt7dpNmETXB6FCNEit%2FFNZLLVfcorC418vf9r7%2FuxUYV1WyON6KbnhDhawlOMzdgIKzO9eUE38c1KRTj6Q5qCSshUpl0bpDQdwsb8CoRbDeciCQC0wsQkGJraQvuIweHTO0MfD%2FRrETemHMAnQwL9I78ukBNz%2F5dPoWj9f8VEVFJqAH5hbrlzORw53ZsDKIOQgyENEqAj3%2F9tJl5aq9KDBWtK8Wrwyjqk1cbASpQyDFMIZvBS5Iavh8j9W8Z4xHoQrayW1RMgge0WDMq%2Fx%2BXyXPtrwbyaynZ7TuI2CH4aesXL%2B82S1a8xWMUaEkng7MJujxeLb8GCSDPKPMaq330v%2FnxbJepb9%2Fc1aqtn9I5XwcOjhHxqHUloTFaLfwh26Rh1%2F8DIhBOUtfiSpPUpbaDUGPAX5itIWYe1VIuwgIVHgvjk0YDfpVNHPspvLObBsOCXSpviJBTtXtsQ7LkPfTfAHAlbZK8glP9sChCHH%2BL2S0YRzCAotjJBjqkARH9awSRDedj2QN3AZ%2Bjsn5CRKBjcfqDqX76H2NmrIKS8n7Y1TEjeudJ67RdNvAPzpAqOQTtbkvZJuFEGnETZOn3vZnZKGXTjsDZo3uyShXV9QCyS35mcs9TOPy56VVLhtq2lz%2FVkpUrRBulBRjYJ9RfYsUDH1k5Lo8V1cUAln3kIJlynkAE8lfN8Nrd%2BwkKq5pRpZBnizn2yIvP%2BC1t%2BhqvlLeS&X-Amz-Signature=3480d53c167ef35157eaa153f4f699b29b6a3711a4372671a2c965e490319a6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

