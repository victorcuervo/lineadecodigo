---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZNLB4Y3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T022943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLpPPd3PXnuhP2BhviU%2Fz47PJC%2Frkl3ccRU0FG%2FOTIZAiAxOuwkWIIm%2BgVkoK2M2RjJL5V0C2tlAazew9SW9XF4JiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEhrryUsq%2Bcc8LGk0KtwDO7IYRSeJU5mZ4IxZsYs3B3VBCPCxfNUaZ5g3B%2BhaxWIcLW9gEIsD66LW45%2FGIDu6LNEHO8%2FthsR6c%2BjN5xECAYp00aJ4Xf7qISOrf3L%2F8IoZNWAb7we%2BLCygn%2Fq6BJatX8uAD6vNd4tsgVhw7a1TY39QuIoI5lo8gWmkGA9Gjrz0OlptFdRw0kJcpWXceyZv31wxvA2dCYOF43E3vsSbl8ivBykfvyHcKrx8gnds9tCwlQAQRttVmYaecvnYiagEVXqjigeUa0Ns%2FrP7teHUJX%2BK3MsXFBHtXei7%2FhcuztLVNS1DSkTzMMgjC2X6qOqGSwaTWK28039xCBUjD%2Bbvf6wWZNaaM3p9KCpEudSePg0SinagXpvi%2F0KeawuawNn5UpYOzYp1CO8qxeB8k3HpKxX%2F8DI3oOTuO7sWMlDpD%2BUX5W0gUqKLmUS3qpNk4g6wwrQsgw6pjbPVAXepEzPPD3XfR6XV%2FYl7j7WHMGPFKFuX8lmQ6ETMI4Cjv8%2BA9mGvFTK374wiLVUNg2G8DrV%2FApAcH0VEM7bzJCHHM2rNuBtvJ54BkK9RYwBIxChIQx6xHLV8%2FWnFCQqCgMJ5Nsa0EZQiVmSDti5zuVG%2FUDKVse1qZ9o5OCDrEGWu1P0wue7YyQY6pgHtPbUAcNf8nLYPXexaAle9JmARRcE7JnRUR9GHIVFzEQNMsJG37jxCsluc6obIOaRh%2FwCSirvaJvGyXtc%2B07fOVVcIAk1woZ75sP%2Fo%2BXQWP9xSoaDO14f7R5gRp0HopPGCyEt%2F04ot8IHmFKwYJrHAvhb1hIp33iN5%2B%2Ba37ck3MFYjeBBWE%2BN0zEWPwqSFUxmiJF3dnpvUR94MV2WMmwnPCF6kDjR%2B&X-Amz-Signature=8660e666b43f88edaf92751bd4d87c79043726fc9f0592a2a149ce3241b70c98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZNLB4Y3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T022943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLpPPd3PXnuhP2BhviU%2Fz47PJC%2Frkl3ccRU0FG%2FOTIZAiAxOuwkWIIm%2BgVkoK2M2RjJL5V0C2tlAazew9SW9XF4JiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEhrryUsq%2Bcc8LGk0KtwDO7IYRSeJU5mZ4IxZsYs3B3VBCPCxfNUaZ5g3B%2BhaxWIcLW9gEIsD66LW45%2FGIDu6LNEHO8%2FthsR6c%2BjN5xECAYp00aJ4Xf7qISOrf3L%2F8IoZNWAb7we%2BLCygn%2Fq6BJatX8uAD6vNd4tsgVhw7a1TY39QuIoI5lo8gWmkGA9Gjrz0OlptFdRw0kJcpWXceyZv31wxvA2dCYOF43E3vsSbl8ivBykfvyHcKrx8gnds9tCwlQAQRttVmYaecvnYiagEVXqjigeUa0Ns%2FrP7teHUJX%2BK3MsXFBHtXei7%2FhcuztLVNS1DSkTzMMgjC2X6qOqGSwaTWK28039xCBUjD%2Bbvf6wWZNaaM3p9KCpEudSePg0SinagXpvi%2F0KeawuawNn5UpYOzYp1CO8qxeB8k3HpKxX%2F8DI3oOTuO7sWMlDpD%2BUX5W0gUqKLmUS3qpNk4g6wwrQsgw6pjbPVAXepEzPPD3XfR6XV%2FYl7j7WHMGPFKFuX8lmQ6ETMI4Cjv8%2BA9mGvFTK374wiLVUNg2G8DrV%2FApAcH0VEM7bzJCHHM2rNuBtvJ54BkK9RYwBIxChIQx6xHLV8%2FWnFCQqCgMJ5Nsa0EZQiVmSDti5zuVG%2FUDKVse1qZ9o5OCDrEGWu1P0wue7YyQY6pgHtPbUAcNf8nLYPXexaAle9JmARRcE7JnRUR9GHIVFzEQNMsJG37jxCsluc6obIOaRh%2FwCSirvaJvGyXtc%2B07fOVVcIAk1woZ75sP%2Fo%2BXQWP9xSoaDO14f7R5gRp0HopPGCyEt%2F04ot8IHmFKwYJrHAvhb1hIp33iN5%2B%2Ba37ck3MFYjeBBWE%2BN0zEWPwqSFUxmiJF3dnpvUR94MV2WMmwnPCF6kDjR%2B&X-Amz-Signature=4e62ff96eaae6c26ea34d9e1f1064fd4d7a15329cb6b273754352cfff8b271ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

