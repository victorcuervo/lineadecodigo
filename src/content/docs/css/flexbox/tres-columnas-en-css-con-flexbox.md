---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SMV4BNV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T075430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDcO%2F1B2YbbJZJJzTwOOUaI5z1AD7q%2FMPnzcJbWXbGGQIgbtLYQ6MasH5EdcKINgGFLWutM5zMJYA4KftWvAwdxYAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDN5Kae1Z1Rl88wdrYSrcAyNcVonVPfqA%2BFOBYlNacKnEClEoNb93%2BH13%2FH8knxRIwNRDXLV5RqNmRsiUxLy%2BiYi0F7A%2Fz8pKK7Z224W2udMmXVvUOBiOqojyWeCs2U7qAg9MTyrJn9KFAj0%2F%2B0vtmA2xrAcEgN0XFTDqMyKC1lOm772427XB9lzVzB73kB15pZpOwfVKErUzoysC19GxTpFyHJNXl2YZBZ%2FCn5KEKpz%2FQYGFSoBARWpFIQUaKJrOk5TfW5t506M7fG%2BjTIj7H76Mz77%2FNT7gOP7zccmUhI4C4JnonQu9xaZn0swETh7rCXyx4NBCdqjHLrBgw40L9q36tu56zBEtTmAqhnuoAJ%2BqQN0o19jX4tfsohCQzqklBDd0DEpwYwGgi8ELLd5yIaVUnFzSg6tEPkz4z9ESRGc%2B%2Fz9SuWkdD04ujcjy0HsfTHQxK%2BMQE2YnlYC%2Fniopp1t5%2FshjEgoSV4QGhDC3nnDf4O89KjjypKmBmL0QKlDqZUENCvPjiYrFWg9fqbb8G1uRbpiWtwqCT%2FQCzXmNPE5LTZo5nJMnUGUa9OlrKme5auF3fgO9D0j6YYUoELinqtIgZj%2FPVRzjlrNjS9fF0kZjSyJs7xyt5gIXPPMjFNIoOTfvIzsuBcSOLJ%2BTMNW8z8kGOqUBRPyWyfvYRO3SC8et3a5MltFyITHy3aFYy7or6H9DbivoB14BMQmY3pWe7ahLmrryboa4Mowyjo2l%2B0fX4v0zpOElHFKCEuIcHxmqP9RcKUUFpnHmnVHh2IfBKvpp6ZQsCLtcYlaCwik0L0kzRoRph8WXra3xmLfAn%2FUbRCDYHw3VlpMg0ojtBPunnCyEuQeRcR2pqxCl4SidAQZhPQsuiDTpPRUb&X-Amz-Signature=a30a2e6cf46bc82d12f2cdc90f5c44161f90b4c5b578ac560aea06960fe1711e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SMV4BNV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T075430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDcO%2F1B2YbbJZJJzTwOOUaI5z1AD7q%2FMPnzcJbWXbGGQIgbtLYQ6MasH5EdcKINgGFLWutM5zMJYA4KftWvAwdxYAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDN5Kae1Z1Rl88wdrYSrcAyNcVonVPfqA%2BFOBYlNacKnEClEoNb93%2BH13%2FH8knxRIwNRDXLV5RqNmRsiUxLy%2BiYi0F7A%2Fz8pKK7Z224W2udMmXVvUOBiOqojyWeCs2U7qAg9MTyrJn9KFAj0%2F%2B0vtmA2xrAcEgN0XFTDqMyKC1lOm772427XB9lzVzB73kB15pZpOwfVKErUzoysC19GxTpFyHJNXl2YZBZ%2FCn5KEKpz%2FQYGFSoBARWpFIQUaKJrOk5TfW5t506M7fG%2BjTIj7H76Mz77%2FNT7gOP7zccmUhI4C4JnonQu9xaZn0swETh7rCXyx4NBCdqjHLrBgw40L9q36tu56zBEtTmAqhnuoAJ%2BqQN0o19jX4tfsohCQzqklBDd0DEpwYwGgi8ELLd5yIaVUnFzSg6tEPkz4z9ESRGc%2B%2Fz9SuWkdD04ujcjy0HsfTHQxK%2BMQE2YnlYC%2Fniopp1t5%2FshjEgoSV4QGhDC3nnDf4O89KjjypKmBmL0QKlDqZUENCvPjiYrFWg9fqbb8G1uRbpiWtwqCT%2FQCzXmNPE5LTZo5nJMnUGUa9OlrKme5auF3fgO9D0j6YYUoELinqtIgZj%2FPVRzjlrNjS9fF0kZjSyJs7xyt5gIXPPMjFNIoOTfvIzsuBcSOLJ%2BTMNW8z8kGOqUBRPyWyfvYRO3SC8et3a5MltFyITHy3aFYy7or6H9DbivoB14BMQmY3pWe7ahLmrryboa4Mowyjo2l%2B0fX4v0zpOElHFKCEuIcHxmqP9RcKUUFpnHmnVHh2IfBKvpp6ZQsCLtcYlaCwik0L0kzRoRph8WXra3xmLfAn%2FUbRCDYHw3VlpMg0ojtBPunnCyEuQeRcR2pqxCl4SidAQZhPQsuiDTpPRUb&X-Amz-Signature=8c984ae313086302ccbffacf1ac9e49c2a70b28aaea722874256c99c484da7af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

