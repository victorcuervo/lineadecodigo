---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNUVHRZE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T194355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8sqPnpRpEvvlrA9wX3MsUllY1VBnyqweoK8WacuSBBgIhAKyVBNXqRSCkqeAEoz%2FUN0laSb8BlfdVt60snJZ6hUGxKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYERnKcJifOmxsJdkq3AOVzhQ6nDVWamGwTnPBJdnGjqGfj2Y8OtJlvx8UgIwXsB86O6634PHlaptsSZgH%2FkWehINjyW%2Fyjx7Pl2RlzhO%2BEhIHY%2F%2BiJlRVqGI72A%2BSP%2F%2BhVkzEP%2F5FeuIqhgGgq2ISGYYwnHa0H7h%2ByIJFAfDKKsy0%2Fh2WGHW0j3EI1X7W8uTBUg%2BSiLbCF3%2FPDp%2B%2FdcK2craazgpPr5Ev6zDRbTrwI0bPK1KOwjoPmTMVNjbiyepDfCqRrrD1aLU1%2B2137Kz6VAaNzmMgwIXCbR9AlIBP%2BPmSQMf1JLXf9GbnqYbNrlU3CeldKz7KPfOrE%2FcQtLUku86EPHDUSXGaHecHcpIu0VuAKTQYOE0sT7eRi6Urqe%2FChxx5XfdDGIQdfw62lJatgyCOZeJ2tYvKPa1kuStuM9UQfHgzlK3z0x9xPA8dM1nDkXR8F6b%2B7gziknVCYCZkdgmOJ3OPCSeH1G5KhEPS3guqPnUdWubFNPNNV9sI2zwnSMT%2FlWYEtv2Nb2eF5mK9R4YoB2Ppa4m0l%2FvN%2FQWye3CsNEKNsvgIHHUDv7DIHDwHvZumQrLXsFAtR5GenDS3LjoUgxEdlTSSzff5e91bNKlRrSOnt9U1oqaOYgwZ3pgLdc0g%2FxQ8WxeYmTDaqNfJBjqkAdOVJJCauQUr6uphi9U8lr1UobrjBW3iVgP8vlZF2SIexd9uEJDzWrSxIUyx2Ta2XiRCvSxkWP5Op00j0h1HyBjcbqnpkFvFUz8jAsi4ww1CaXjZNeJQpa2KFJovAIXlD0yz6%2BZWs%2BpvobMzTX6G0Hp4sNMlO9DnUlyuf%2F9Xqo7oa2ISGWsco1%2FI1RX1j50SaKO3cCXPLLlK9zngiXHV9nbalfG6&X-Amz-Signature=c6ea30ac7ff004b4940257f34a41272d15db1fd24748385ff2e1fe1f69c55b81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNUVHRZE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T194355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8sqPnpRpEvvlrA9wX3MsUllY1VBnyqweoK8WacuSBBgIhAKyVBNXqRSCkqeAEoz%2FUN0laSb8BlfdVt60snJZ6hUGxKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYERnKcJifOmxsJdkq3AOVzhQ6nDVWamGwTnPBJdnGjqGfj2Y8OtJlvx8UgIwXsB86O6634PHlaptsSZgH%2FkWehINjyW%2Fyjx7Pl2RlzhO%2BEhIHY%2F%2BiJlRVqGI72A%2BSP%2F%2BhVkzEP%2F5FeuIqhgGgq2ISGYYwnHa0H7h%2ByIJFAfDKKsy0%2Fh2WGHW0j3EI1X7W8uTBUg%2BSiLbCF3%2FPDp%2B%2FdcK2craazgpPr5Ev6zDRbTrwI0bPK1KOwjoPmTMVNjbiyepDfCqRrrD1aLU1%2B2137Kz6VAaNzmMgwIXCbR9AlIBP%2BPmSQMf1JLXf9GbnqYbNrlU3CeldKz7KPfOrE%2FcQtLUku86EPHDUSXGaHecHcpIu0VuAKTQYOE0sT7eRi6Urqe%2FChxx5XfdDGIQdfw62lJatgyCOZeJ2tYvKPa1kuStuM9UQfHgzlK3z0x9xPA8dM1nDkXR8F6b%2B7gziknVCYCZkdgmOJ3OPCSeH1G5KhEPS3guqPnUdWubFNPNNV9sI2zwnSMT%2FlWYEtv2Nb2eF5mK9R4YoB2Ppa4m0l%2FvN%2FQWye3CsNEKNsvgIHHUDv7DIHDwHvZumQrLXsFAtR5GenDS3LjoUgxEdlTSSzff5e91bNKlRrSOnt9U1oqaOYgwZ3pgLdc0g%2FxQ8WxeYmTDaqNfJBjqkAdOVJJCauQUr6uphi9U8lr1UobrjBW3iVgP8vlZF2SIexd9uEJDzWrSxIUyx2Ta2XiRCvSxkWP5Op00j0h1HyBjcbqnpkFvFUz8jAsi4ww1CaXjZNeJQpa2KFJovAIXlD0yz6%2BZWs%2BpvobMzTX6G0Hp4sNMlO9DnUlyuf%2F9Xqo7oa2ISGWsco1%2FI1RX1j50SaKO3cCXPLLlK9zngiXHV9nbalfG6&X-Amz-Signature=415976816b75e9f3a7b52d0618b3d068227ef661c4fa939ed8279f5f667a4741&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

