---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XNUYHIW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T013532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1VOBvYlpEYsvj2SFPCz5utSAzp%2BlRRx3y6H9YwJVWOAiA%2FvDpFsuQYXzxv3%2BXFmAm3ag0LyckJPhAiAcD64pxfcyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMqx2OKqR7eEMpcFdpKtwDSbdAxgoPVFKCXvyTjaC1UoohLpu%2B1HDN9Bonu%2F3r2xP7OKtBfLBghxgD4GHV1Yq7j3FCiQ4%2B46hnbuYBAZK1scZU3F8IOCppXhJN2Bly%2FnHNhrUxr3YqZTUArxwGHxXItDXzHJzWQ8Aa21G1SKinfdOfk8ZXtzZdyqrv8253W4ivs6ihoJgc9PRzjxHjQKnEGebtpIk%2B9QuGQlzCKL6JOSnSDtS%2FG%2Bra%2BNpGiGzGaVYky4shE0evHb94Je%2FWDB4nEKi4qN1nKMFr9dwt1gXgG6BSmTFin3Dr7U2cfdKiWeHvp%2FxhuFbd4X7aYHGNHWapnyYldKP9yQswbchIt3GDOKTtTkeaEEcVmIlpcV2Cqgq01lT2%2BO8724mKECR0%2F0kQksx8iw2p4ZHGvKPc0O%2BPDUS7GTf6JBDHIbc7LdKwrIRdwSUekcreMNwkRgxXJCrBfKgEo6FoB3LfDr30EzoWo0riHCWBP9PwWiYDMpnACWh6ADxpY4y3CbjSf%2FH%2FZyqoUJjRrTqgRfUoCNT6RDqZYhxdH%2FiG0GOLfoBTM7FincLTNhcj1KdwIgLCA8J1NUs4jl%2F1FIsv9LXfla6yox4gKrJMga285wu8ebkmrEO4LKWkoJfDKy65GqtosH8w7ozIyQY6pgGVrzQ1uwIwAfPxAo%2B0ox%2B%2BBtPYwqJ9qc8xnNNclp8yjhFHvFyrqoa0SF3wK0Q1HQRzrWK4w8SRb7IqM778T0lg%2FCS4OiqPqOW2QCzeAWRU0M2w5HGs3eRpxfP2juNzKzydd8IJtFvnckewCy8Kd3TuMxOt%2F3PCa%2FRGCSsttAPRqSZCf7ILI7o4d7j2ZqHQ7RtfFCMZTm2O3s4sFylRy%2BLJUwMjO9gq&X-Amz-Signature=a18327c2ce5363dc64450be5c71592de5ec0118090d1f22c8327961c8052d112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XNUYHIW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T013532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1VOBvYlpEYsvj2SFPCz5utSAzp%2BlRRx3y6H9YwJVWOAiA%2FvDpFsuQYXzxv3%2BXFmAm3ag0LyckJPhAiAcD64pxfcyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMqx2OKqR7eEMpcFdpKtwDSbdAxgoPVFKCXvyTjaC1UoohLpu%2B1HDN9Bonu%2F3r2xP7OKtBfLBghxgD4GHV1Yq7j3FCiQ4%2B46hnbuYBAZK1scZU3F8IOCppXhJN2Bly%2FnHNhrUxr3YqZTUArxwGHxXItDXzHJzWQ8Aa21G1SKinfdOfk8ZXtzZdyqrv8253W4ivs6ihoJgc9PRzjxHjQKnEGebtpIk%2B9QuGQlzCKL6JOSnSDtS%2FG%2Bra%2BNpGiGzGaVYky4shE0evHb94Je%2FWDB4nEKi4qN1nKMFr9dwt1gXgG6BSmTFin3Dr7U2cfdKiWeHvp%2FxhuFbd4X7aYHGNHWapnyYldKP9yQswbchIt3GDOKTtTkeaEEcVmIlpcV2Cqgq01lT2%2BO8724mKECR0%2F0kQksx8iw2p4ZHGvKPc0O%2BPDUS7GTf6JBDHIbc7LdKwrIRdwSUekcreMNwkRgxXJCrBfKgEo6FoB3LfDr30EzoWo0riHCWBP9PwWiYDMpnACWh6ADxpY4y3CbjSf%2FH%2FZyqoUJjRrTqgRfUoCNT6RDqZYhxdH%2FiG0GOLfoBTM7FincLTNhcj1KdwIgLCA8J1NUs4jl%2F1FIsv9LXfla6yox4gKrJMga285wu8ebkmrEO4LKWkoJfDKy65GqtosH8w7ozIyQY6pgGVrzQ1uwIwAfPxAo%2B0ox%2B%2BBtPYwqJ9qc8xnNNclp8yjhFHvFyrqoa0SF3wK0Q1HQRzrWK4w8SRb7IqM778T0lg%2FCS4OiqPqOW2QCzeAWRU0M2w5HGs3eRpxfP2juNzKzydd8IJtFvnckewCy8Kd3TuMxOt%2F3PCa%2FRGCSsttAPRqSZCf7ILI7o4d7j2ZqHQ7RtfFCMZTm2O3s4sFylRy%2BLJUwMjO9gq&X-Amz-Signature=3be5cc84d222db9e0bfbae6f908b9e3887b18a166145a2c08f81d962c3fe8440&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

