---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UEKLSLF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T002442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3WLcqltinL%2BzCYreVcBnJialvrkji3WeV4xmmMcexlgIhAIhwscby0ZAF516HMk6u1LTOq%2B%2FaXV20Ob%2FvvsD06ZWiKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWHsbXyn2Uctf4Aqgq3AMBo7S%2BoklZqYQcmtLK2a4LWbH6Aa%2BO4Cn8qzSOuqVojn7q87ReT2McOP5U6lY94%2BMuumyG9zyf6%2BYhfKVi28VFFzlGDIZSFCRQD3s%2BRP%2B%2F%2BDSrrDL7LgqnkI3PPPDUgXQ%2FtjgPc5u8QM0Jb1ntQZ8Me%2FJySlpOd1LT%2BVWilPaYmUGMztBafVXgtn4hjxwx9%2FfND34%2BloLVtnVpQeolXLKcge%2FhQEKEde4IriewpwYnJwW%2FOAuVHsdp9xIzI5zWmcOJh2KkuTN%2BM8o%2Bz3RXUhKoQk0pxKcWZZ6JHiq8VkAsj5jXUovurjaChLwPmZJUyRXLoio8xVgIlG5KMbVWLSct20SMMxcJ1AiIRlKgFwNsy%2F5SxZSp%2BLL0Av3izs2YmgDQiPRl0YmTingmuAE6VwQdQ8cFOkatnXaur2TBlRrQ9kVBNPOwi8ojoQeon2mguKpQAiijZNtZG9IsY7sTkEYTxGJTZpqPmpNjzekP8wxt31we%2BllQdyWycceyoXzYwHYyrjjFYnBywmAq8MsqkoR2xhZdjdH%2F9IB6xWgwW%2BTE2I4ssT%2BuajnT7Bb2YCsdHfavjqPGB8IfesBtWoLgUoffiKvo4n7%2B0nQ9MQ38CfRYU%2BQSj0Rm4pxwq9J24jCywt3JBjqkAe%2Bcy%2BDgMIYAkwVr3XXn%2FkhzmU86c6EINZwuRTsAGb8VN4Pmhh4zjCKJu3NaIxANhMPLfQMMOWHuNnmGNgvzk4y8wr37BESIVqn%2Bcm2gmmqkcCkbHMFq2yMwGULYBgbB3XuNt8KRj5dKlOQmOWx37%2BgptS1iwoim97%2FdB36i4FsTZ4e6tt4jmaWevB82esWmxFjFaGNkUMTomHjbu0BuzFM4Gdzl&X-Amz-Signature=a57911619bd4cf4c5d586503b48f68e95ff7f2c54b2b2b5252b843e562cc6e2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UEKLSLF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T002442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3WLcqltinL%2BzCYreVcBnJialvrkji3WeV4xmmMcexlgIhAIhwscby0ZAF516HMk6u1LTOq%2B%2FaXV20Ob%2FvvsD06ZWiKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWHsbXyn2Uctf4Aqgq3AMBo7S%2BoklZqYQcmtLK2a4LWbH6Aa%2BO4Cn8qzSOuqVojn7q87ReT2McOP5U6lY94%2BMuumyG9zyf6%2BYhfKVi28VFFzlGDIZSFCRQD3s%2BRP%2B%2F%2BDSrrDL7LgqnkI3PPPDUgXQ%2FtjgPc5u8QM0Jb1ntQZ8Me%2FJySlpOd1LT%2BVWilPaYmUGMztBafVXgtn4hjxwx9%2FfND34%2BloLVtnVpQeolXLKcge%2FhQEKEde4IriewpwYnJwW%2FOAuVHsdp9xIzI5zWmcOJh2KkuTN%2BM8o%2Bz3RXUhKoQk0pxKcWZZ6JHiq8VkAsj5jXUovurjaChLwPmZJUyRXLoio8xVgIlG5KMbVWLSct20SMMxcJ1AiIRlKgFwNsy%2F5SxZSp%2BLL0Av3izs2YmgDQiPRl0YmTingmuAE6VwQdQ8cFOkatnXaur2TBlRrQ9kVBNPOwi8ojoQeon2mguKpQAiijZNtZG9IsY7sTkEYTxGJTZpqPmpNjzekP8wxt31we%2BllQdyWycceyoXzYwHYyrjjFYnBywmAq8MsqkoR2xhZdjdH%2F9IB6xWgwW%2BTE2I4ssT%2BuajnT7Bb2YCsdHfavjqPGB8IfesBtWoLgUoffiKvo4n7%2B0nQ9MQ38CfRYU%2BQSj0Rm4pxwq9J24jCywt3JBjqkAe%2Bcy%2BDgMIYAkwVr3XXn%2FkhzmU86c6EINZwuRTsAGb8VN4Pmhh4zjCKJu3NaIxANhMPLfQMMOWHuNnmGNgvzk4y8wr37BESIVqn%2Bcm2gmmqkcCkbHMFq2yMwGULYBgbB3XuNt8KRj5dKlOQmOWx37%2BgptS1iwoim97%2FdB36i4FsTZ4e6tt4jmaWevB82esWmxFjFaGNkUMTomHjbu0BuzFM4Gdzl&X-Amz-Signature=141fada11005da6d765da15dcd45e4b35e9ea423183c0c179ecdd8fe958434a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

