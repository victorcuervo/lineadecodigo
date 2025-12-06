---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SED22E4U%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T175637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhwMOHlYGzzwSWQMCxrzCopZVZtA4yUPWZhmBhl43NfAIhAJKla%2BY7lhKFgX%2BQo8%2FBK9YjS2sJGTM472Xe4U1bjrs%2FKv8DCHoQABoMNjM3NDIzMTgzODA1IgxeCeLeCrGAcGdANPkq3AOxYppev2DJDSOsMbRQ1RaEjI1Pa2Qw4ZfK5t%2FnOM2cNWC6qyOLNwio7X8IFAJgbsvuxc7MGmqnMZRKzGVN0yhzHu7wPoiS4Z%2FShT8ikFzG221ulneKczUQwIVAVNIjJfoJX4RNdXYGC8veifrfqmoV6e3Jr5objbltDsBdt1ncAoR7Dn%2Flp7kxxQQAsB5d2kLsscW%2FlgU4ghJa%2BxRVa33eKQraJmNPCmLxrYMSYZzs9l6yN8DIjnwbm7CTOyWTFj1VzPK0Erx%2FvAvrGb9lUUeToYXXRyfm01YA%2FaWftp%2FO9WnWl3ySCys8QMdJJ%2FNkf3znaDCGgqYtJ1RJjdfZG9N9%2B35Wgon8yiAcCVzcjJb2wSohwCjGYF3xXzHybOqXok56wt6H%2Fq8CyGqEfCRYkc5yFD40qPIC9RJkGgNIA3XREdiXu56Uxo2ExAT0ggAJaI2SkGjReK1PB8I5XcaYR0mbG2pUWQLDPU1wCsg72YBbBgrZ6DfzPk6FcTT8w5yh4Pj%2Bj3rF%2FAibRnxFxVwfFwQYrKA0zYNb%2FKUam2C1t1mWNW8AahINO1IcjZAYgoTsQ0uFhBWFKQO6kg4tNqGFRiE7a6TCVwwSkCFQLyXGv84iqCgGoI43%2BXndk1w8OTC3y9HJBjqkAehp9rGkEviww5upQQR%2BnoZqt3GtKIa6APGotYgqcAJjQk7re2C%2BNeeziNK1KVDBKZL5O%2F4Z9G65vW5BhmtUP4yxXLuZX9tm%2B2uJTv87ABYDcUe9QXKcDSEQqQr%2BgT7ONv9ffDWrzpGSOIQd7uUhDg5sprZ1F7tc0gaKJ6zJQAWlNkOmdGE7KJBy0qy6e49Ota0Kz%2FPVKy%2BZqYykHyMk3nFdunq%2F&X-Amz-Signature=b23d6befaa87735e2beb6eb080ecf9f39652c83afd245f8a99f3cca792fbb642&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SED22E4U%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T175637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhwMOHlYGzzwSWQMCxrzCopZVZtA4yUPWZhmBhl43NfAIhAJKla%2BY7lhKFgX%2BQo8%2FBK9YjS2sJGTM472Xe4U1bjrs%2FKv8DCHoQABoMNjM3NDIzMTgzODA1IgxeCeLeCrGAcGdANPkq3AOxYppev2DJDSOsMbRQ1RaEjI1Pa2Qw4ZfK5t%2FnOM2cNWC6qyOLNwio7X8IFAJgbsvuxc7MGmqnMZRKzGVN0yhzHu7wPoiS4Z%2FShT8ikFzG221ulneKczUQwIVAVNIjJfoJX4RNdXYGC8veifrfqmoV6e3Jr5objbltDsBdt1ncAoR7Dn%2Flp7kxxQQAsB5d2kLsscW%2FlgU4ghJa%2BxRVa33eKQraJmNPCmLxrYMSYZzs9l6yN8DIjnwbm7CTOyWTFj1VzPK0Erx%2FvAvrGb9lUUeToYXXRyfm01YA%2FaWftp%2FO9WnWl3ySCys8QMdJJ%2FNkf3znaDCGgqYtJ1RJjdfZG9N9%2B35Wgon8yiAcCVzcjJb2wSohwCjGYF3xXzHybOqXok56wt6H%2Fq8CyGqEfCRYkc5yFD40qPIC9RJkGgNIA3XREdiXu56Uxo2ExAT0ggAJaI2SkGjReK1PB8I5XcaYR0mbG2pUWQLDPU1wCsg72YBbBgrZ6DfzPk6FcTT8w5yh4Pj%2Bj3rF%2FAibRnxFxVwfFwQYrKA0zYNb%2FKUam2C1t1mWNW8AahINO1IcjZAYgoTsQ0uFhBWFKQO6kg4tNqGFRiE7a6TCVwwSkCFQLyXGv84iqCgGoI43%2BXndk1w8OTC3y9HJBjqkAehp9rGkEviww5upQQR%2BnoZqt3GtKIa6APGotYgqcAJjQk7re2C%2BNeeziNK1KVDBKZL5O%2F4Z9G65vW5BhmtUP4yxXLuZX9tm%2B2uJTv87ABYDcUe9QXKcDSEQqQr%2BgT7ONv9ffDWrzpGSOIQd7uUhDg5sprZ1F7tc0gaKJ6zJQAWlNkOmdGE7KJBy0qy6e49Ota0Kz%2FPVKy%2BZqYykHyMk3nFdunq%2F&X-Amz-Signature=140a34c8a8a1daa60294f660c1a583ca41ad155c034975e8f2e5850e98d58613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

