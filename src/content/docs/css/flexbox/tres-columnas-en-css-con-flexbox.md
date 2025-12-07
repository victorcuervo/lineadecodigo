---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653FCKLVE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T154900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgeKVENs1QBAXwEusiUxKJyvJFBSVokWzGK2C%2BqXp0pAIhAKxnsm%2BMFsC92B0jEUvO0Xi0kTo6d5QxdUXNGgEHFpWYKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWGsHV%2ByOLcyxMRy4q3AMQCv9AxIygrlWr6cL3hUzEMbL%2FQPYNQ4kemNXP4jSdhtleNou0VhP7oHA4UMDDXT%2BMZG4LKtfiQojFYOHqAI7%2BlyBIOzt2pIl8olFdPF4Nygb38qQp1Po1NyJY%2By7z3RZQMOoABPYRY1sCa2NXnLt0IVNOzu7jEnauWJoAqD4dZHFJsK2D0N8aFTlrL8pwSq%2F69guSnOaJnSxVt1Du2yklvxlc0N94R%2BuDzahakTZGnbY9jyz6LU7sYR5pb1KDWBQ6WDmLnOQN856XaqU9AxHJawTAJvHFKnp%2FH7jo9S12%2BQcSmyAOq0wG%2B%2FQEDIcEvf1KCVTz4edvMXw9nR%2B0H7h%2By1PKMY6C9%2FybLMTBrt9wD8wYMqG3RmgmZFrVl47B%2Be6LcEwTNbSDCoPlyJKzViARjywwBNCRoDGR23bMOvDApx9bKn9MzGz8CApL7yRHwMbN3km9B8dWkTajfvCK0TMusk%2FqmxoQJgJKXcYHwxgX%2BBdBlZj5PIvRpMPOCcy3xjyB7cIfnSqUStIguhJpNlQS9WuVg5eIfOO7Q6Rua9q16CQHIGs%2BZPHILH0XQBxk5fbpgvH0%2BQwxGp7hhBp5V%2BEMjczYbPSqTSWVNdPWvA0Kpg7JKVfuPpjpHJgJyTC8t9bJBjqkAfMYnpjdhLJRP7O66s2EJnJvOtwlK5LWNpnxKiuU3LXfULiTSyiXBYta1kyMaqTUxnb6e5m6kFdKL1p1opvn%2B41TlxeZrmx%2B%2FqQmpDtSnjFhmAZDpRw6mJU4zJgMQCopEXEI49FCVoph48rcJ%2FsOl2uhoRLx9F4LQz1GAtLqpUHTVRGeXIHkSbn3GeADBy%2B87dgFkESqy4SBBLzZwIxwTuJ%2B%2F0E6&X-Amz-Signature=5a3692ddaa76585560c4de7d32b2b78067eb88ff00baa40eb25f81b210bbc097&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653FCKLVE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T154900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgeKVENs1QBAXwEusiUxKJyvJFBSVokWzGK2C%2BqXp0pAIhAKxnsm%2BMFsC92B0jEUvO0Xi0kTo6d5QxdUXNGgEHFpWYKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWGsHV%2ByOLcyxMRy4q3AMQCv9AxIygrlWr6cL3hUzEMbL%2FQPYNQ4kemNXP4jSdhtleNou0VhP7oHA4UMDDXT%2BMZG4LKtfiQojFYOHqAI7%2BlyBIOzt2pIl8olFdPF4Nygb38qQp1Po1NyJY%2By7z3RZQMOoABPYRY1sCa2NXnLt0IVNOzu7jEnauWJoAqD4dZHFJsK2D0N8aFTlrL8pwSq%2F69guSnOaJnSxVt1Du2yklvxlc0N94R%2BuDzahakTZGnbY9jyz6LU7sYR5pb1KDWBQ6WDmLnOQN856XaqU9AxHJawTAJvHFKnp%2FH7jo9S12%2BQcSmyAOq0wG%2B%2FQEDIcEvf1KCVTz4edvMXw9nR%2B0H7h%2By1PKMY6C9%2FybLMTBrt9wD8wYMqG3RmgmZFrVl47B%2Be6LcEwTNbSDCoPlyJKzViARjywwBNCRoDGR23bMOvDApx9bKn9MzGz8CApL7yRHwMbN3km9B8dWkTajfvCK0TMusk%2FqmxoQJgJKXcYHwxgX%2BBdBlZj5PIvRpMPOCcy3xjyB7cIfnSqUStIguhJpNlQS9WuVg5eIfOO7Q6Rua9q16CQHIGs%2BZPHILH0XQBxk5fbpgvH0%2BQwxGp7hhBp5V%2BEMjczYbPSqTSWVNdPWvA0Kpg7JKVfuPpjpHJgJyTC8t9bJBjqkAfMYnpjdhLJRP7O66s2EJnJvOtwlK5LWNpnxKiuU3LXfULiTSyiXBYta1kyMaqTUxnb6e5m6kFdKL1p1opvn%2B41TlxeZrmx%2B%2FqQmpDtSnjFhmAZDpRw6mJU4zJgMQCopEXEI49FCVoph48rcJ%2FsOl2uhoRLx9F4LQz1GAtLqpUHTVRGeXIHkSbn3GeADBy%2B87dgFkESqy4SBBLzZwIxwTuJ%2B%2F0E6&X-Amz-Signature=1f3ad913a2a40a630044e35d7776b34bd5ef57dbe3ed7b24050b83a8366631b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

