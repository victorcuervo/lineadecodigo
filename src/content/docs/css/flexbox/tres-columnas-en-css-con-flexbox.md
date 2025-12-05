---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IVVQVSS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T014549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvUXN%2Fqc6T3ebm%2B8MKm7QlW%2FNXgQ4g8cqJpJxPE3%2Bu3AiBqpXB3DQEbJoR5PTtnbP3lyHjjQQZ6vxC1KKGteHz6FCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMrukpEsNg%2BEoz3w0AKtwD6V%2Bkuw1xdxUyDmoF091sRjmMP30XrUpmhq8vVubcyH2yLvzMMRrCKzn5Z0zkQTSanaFImvXYQtO6QkWwC5DIvqW4mlewCyF%2Bvgd3vJzECanfL9tGv3YIZ0mlUgdFJDApyP%2B3V7zGLZhGniYgCtRdCvXXxRnH62nDGV9CuBjFoGNw9t5w88l0gPFSWDGDbdu%2F3bL5upTHisas9uP%2FRDo0z8m4NUbf7gBmx4uHT5qfPR9b9IiRXDfMx1cksMA3Q6VTU6Iz9Kir9hiPCX7QirneeQxFuZbmrlB1odxt4flncylo7%2F32F%2FhbAE8l3mEA2onq7TBUzeM35itVugxeZiu0RJuTjQsXqcJOxNbz%2BQMqjrPjwEFSyQHUpYKhJOZkIDmcDQJmgsV3WakKhJG%2Fssfq7r8WOOic%2Bsjto7Eja9q3ERY5rXiIKEf8HeBLu1bRw96Sh8q4BDXhvHFTFJLsu7ofjvBs7qi5p5D6%2BXLYj0T5E0gZbnPnzGes2T6c45kKXMKWB0TA1loONX7gHsyx2Umax8SeAJIOejJEvjS05MQo48LGwdIneBn9P%2BQEWchlWFAcDk81hYoGWTtMyj%2BvJkDq2EMym%2BMiBSvOuc8eyaqFhpH2ywhQ2P56PoJzaxQwqozIyQY6pgGxPkv2Ns%2BcH2oeuywlwWvnJ5iJjI3iIHHv3XAl%2Fyayx4f87NmGJrM5ZN%2BQw4owfRjq1Fdo98hd6mrS6mK0re1xzn6Z81R1i8U0FTWSD8hmHsuYF%2BXOBn1fPIF7rIAvr6P38ajOB9CJ7OHz%2Bxs9ed2sOyQ3%2BWyhfSOHzjLSTdadfRaGtOdIxgPZarwfpLesSiPUKLufvNabKNdG%2BTdtVxpNQqJ3lE4F&X-Amz-Signature=4bfb9b2947a333a0b1cff9e1a3f78ac277560413a819123b8d915a9ee78dc461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IVVQVSS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T014549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvUXN%2Fqc6T3ebm%2B8MKm7QlW%2FNXgQ4g8cqJpJxPE3%2Bu3AiBqpXB3DQEbJoR5PTtnbP3lyHjjQQZ6vxC1KKGteHz6FCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMrukpEsNg%2BEoz3w0AKtwD6V%2Bkuw1xdxUyDmoF091sRjmMP30XrUpmhq8vVubcyH2yLvzMMRrCKzn5Z0zkQTSanaFImvXYQtO6QkWwC5DIvqW4mlewCyF%2Bvgd3vJzECanfL9tGv3YIZ0mlUgdFJDApyP%2B3V7zGLZhGniYgCtRdCvXXxRnH62nDGV9CuBjFoGNw9t5w88l0gPFSWDGDbdu%2F3bL5upTHisas9uP%2FRDo0z8m4NUbf7gBmx4uHT5qfPR9b9IiRXDfMx1cksMA3Q6VTU6Iz9Kir9hiPCX7QirneeQxFuZbmrlB1odxt4flncylo7%2F32F%2FhbAE8l3mEA2onq7TBUzeM35itVugxeZiu0RJuTjQsXqcJOxNbz%2BQMqjrPjwEFSyQHUpYKhJOZkIDmcDQJmgsV3WakKhJG%2Fssfq7r8WOOic%2Bsjto7Eja9q3ERY5rXiIKEf8HeBLu1bRw96Sh8q4BDXhvHFTFJLsu7ofjvBs7qi5p5D6%2BXLYj0T5E0gZbnPnzGes2T6c45kKXMKWB0TA1loONX7gHsyx2Umax8SeAJIOejJEvjS05MQo48LGwdIneBn9P%2BQEWchlWFAcDk81hYoGWTtMyj%2BvJkDq2EMym%2BMiBSvOuc8eyaqFhpH2ywhQ2P56PoJzaxQwqozIyQY6pgGxPkv2Ns%2BcH2oeuywlwWvnJ5iJjI3iIHHv3XAl%2Fyayx4f87NmGJrM5ZN%2BQw4owfRjq1Fdo98hd6mrS6mK0re1xzn6Z81R1i8U0FTWSD8hmHsuYF%2BXOBn1fPIF7rIAvr6P38ajOB9CJ7OHz%2Bxs9ed2sOyQ3%2BWyhfSOHzjLSTdadfRaGtOdIxgPZarwfpLesSiPUKLufvNabKNdG%2BTdtVxpNQqJ3lE4F&X-Amz-Signature=e420a5e4a123e1065363ba1118897933d7183a3b747eb67d8d0b75a6877300e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

