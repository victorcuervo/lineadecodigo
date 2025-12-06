---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7RK23O%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhfHrStAEZgGcALYrp%2BSzpPccAmrhX0xwVy7oeNeaC2gIhALjO7tpXaG9qfbsjBdWMtVooDZVUTgGGTCe5WJr%2BZPqIKv8DCHIQABoMNjM3NDIzMTgzODA1IgwE%2BkTFejGXrsl93vQq3AMXqzgHpfdGG4ejwriCFpQbm1qBEzuCkfjWK5puEaV4NqeISMfUMBNLpdXjMsY6XXOSZgY%2FJCyNtY67UG6XpH2mCINPdxRgyDs9CXQkdvrQFfDORyjf7SSJsQShm%2FEWsFusmlrU5XrAGxo5bhHxe7IBqACBKuL879HxtP519PFLeFX5RnrdiryD7L4Zh55Sl0cUBqdkPvu2aGopdOBsDuwguaOU9SlH6mL%2Fo15KF0%2BbKCcciPjBZoeLBLoaFow6gN6zP%2BtzYpMxx5FZyfJOj6YX3ihJXWGYW5SXlIds0kCLUBM4RmZWwLTSzYqMrGEWXfV%2BzZQtZhxFLNypXIJ3JXxXGMACVUJodXD74op5xVvRsrJ8GMcv5KIUnXMzTOLn%2FDGSPlBwb11fDNxqwYN0sTn%2B2CwkYp%2Fr57wMiJ6jdtPIlmO9%2Bqzhxx8GigRlVuMIPfhbQ509D4xsreXRRe3lKWBE2AzXqlw8Ra6jP3UnSaLmassLUrREWvkiGFagZH5AHrKdIouxOMZL%2B3%2F7U43Gk%2Bw%2BkH2OzaywcRl%2BjUVXkFzcvQaYhVrZXs0EcVUXiBgV73hktJ7hpxK6suoFQFJxn56q%2F59aBtlaFGHoSnzlqXJnOaVkD%2FsmXl1ZgO0WPzDl68%2FJBjqkAV9RPNJ7XOZaw5iEM1e%2Bx4dvsdE5MxJAfM5l%2B0%2Fx9k5d9Df4tuHmKvIQsB2GDEpco19%2Bortzjg8OqAGNnYPN4PhmXsk61RQO%2FvbMv7HOjFcISl7zqt6pGaRZokr97iMW63QPgDxS%2FAzh9CRTbHEzNhll5D%2FCRqbV%2FQ5oYA9SrWBwGXFUU5m11YI3Lz6epMt8lTJQK1jKuDNzIFxoGEyxSBRVL5sI&X-Amz-Signature=8b752e28ac284944c5768a572a2b777cdf39b17a49bdb45bb0032eeff2a9214a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7RK23O%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhfHrStAEZgGcALYrp%2BSzpPccAmrhX0xwVy7oeNeaC2gIhALjO7tpXaG9qfbsjBdWMtVooDZVUTgGGTCe5WJr%2BZPqIKv8DCHIQABoMNjM3NDIzMTgzODA1IgwE%2BkTFejGXrsl93vQq3AMXqzgHpfdGG4ejwriCFpQbm1qBEzuCkfjWK5puEaV4NqeISMfUMBNLpdXjMsY6XXOSZgY%2FJCyNtY67UG6XpH2mCINPdxRgyDs9CXQkdvrQFfDORyjf7SSJsQShm%2FEWsFusmlrU5XrAGxo5bhHxe7IBqACBKuL879HxtP519PFLeFX5RnrdiryD7L4Zh55Sl0cUBqdkPvu2aGopdOBsDuwguaOU9SlH6mL%2Fo15KF0%2BbKCcciPjBZoeLBLoaFow6gN6zP%2BtzYpMxx5FZyfJOj6YX3ihJXWGYW5SXlIds0kCLUBM4RmZWwLTSzYqMrGEWXfV%2BzZQtZhxFLNypXIJ3JXxXGMACVUJodXD74op5xVvRsrJ8GMcv5KIUnXMzTOLn%2FDGSPlBwb11fDNxqwYN0sTn%2B2CwkYp%2Fr57wMiJ6jdtPIlmO9%2Bqzhxx8GigRlVuMIPfhbQ509D4xsreXRRe3lKWBE2AzXqlw8Ra6jP3UnSaLmassLUrREWvkiGFagZH5AHrKdIouxOMZL%2B3%2F7U43Gk%2Bw%2BkH2OzaywcRl%2BjUVXkFzcvQaYhVrZXs0EcVUXiBgV73hktJ7hpxK6suoFQFJxn56q%2F59aBtlaFGHoSnzlqXJnOaVkD%2FsmXl1ZgO0WPzDl68%2FJBjqkAV9RPNJ7XOZaw5iEM1e%2Bx4dvsdE5MxJAfM5l%2B0%2Fx9k5d9Df4tuHmKvIQsB2GDEpco19%2Bortzjg8OqAGNnYPN4PhmXsk61RQO%2FvbMv7HOjFcISl7zqt6pGaRZokr97iMW63QPgDxS%2FAzh9CRTbHEzNhll5D%2FCRqbV%2FQ5oYA9SrWBwGXFUU5m11YI3Lz6epMt8lTJQK1jKuDNzIFxoGEyxSBRVL5sI&X-Amz-Signature=b63bf55ecb1f0f942dc6913c402bafd42c5e586df4e217344f02e9b499a8a9f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

