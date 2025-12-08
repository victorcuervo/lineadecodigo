---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662UT2QSY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T145957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFczLuvE58MZ9FeWy%2FSmfl6EUflAMgNuZAoqh1svmqaQIhAImrPB3w1NfjkqYv2e56alMRqMMqirj0r0%2FEgsYTlEeZKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwW3f3w%2FyluHuPnvLMq3ANTWYv%2F4daIp4DJ%2BGNMAdS2MICsqzS5IYHiZbS1bBaFTmEnkI74BMicbaF0%2FwWdhB%2Fp4du%2BsaP6%2BAC3LeahhYjfiQhV7lN2TGVMJzRq%2BaVr25Ewj%2B5WzE154fpva9o5dIK6ydIZj04%2F9%2FazMIKMjNUpJuWlMLJ7BZxclH2Rw9voZLVG4WZEjHHKFGKtB6F28LTeYmy%2BOCUux9sZXaSRH0NCG3nsz8YeVtldXCArnZtqorYFmyhbX03lRRGcDDJZ3z7ml%2FFEti7XqwuWCWs8eQ9gkiE0kMZikNmgY25e6d7%2BDHln%2B2eUlLk7F%2FjA4z0uN8OOmHBKHKUs0CphQNwJhe8ZxCewnTN7A3sWw%2BPzePKcLHq0gU5g77bK2gWc3BjzfQqqiOksQEbKSEk%2B2TqjD6FcbuoYK8gtV1OdSoae1c5B1MwAfStxY2h3U2s4OMNBNnduU5Hl815ReLg%2F%2B7AsGJB9onEtbB2aVp7%2FOJKMmAeevGthtiSk6BxQADFZlQ%2BM9ehB0TIHQXR6VVbN4K%2BO4yHJvFGmfj2fvybdQeG5cKkrkvdST8WQmsctW41oZcG6IayxhTOGMuLcy8AWB7JCRJJ4REUgg%2BjRPGKZTPZo3R53e6JwsENTBveufp4qMzCMwdvJBjqkAV%2Fo1YwvP3pyY6DuTR%2ByQPIT%2BG8aS160M3coSCqIlBFJbT5ydB%2FEY0TFbc%2FVZg0R5G14g%2F8X6Fk1xQaDvoxd0feUOj84VKQKe5cBPCFH7LVPokS%2BtgbTZfyrbnAsnLGTHAqhgVGHcwVYyhK4nqMnGgIpnGJoK0COXZK0AfDL7hjbyXM0LZriyMdGIMz%2BqSL2SSugRdnEIeV7WwhXCu1XoP9EX9qn&X-Amz-Signature=f418f46647458b7d1619b9bd93103376876eba34909799a63cc92e0f86709845&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662UT2QSY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T145957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFczLuvE58MZ9FeWy%2FSmfl6EUflAMgNuZAoqh1svmqaQIhAImrPB3w1NfjkqYv2e56alMRqMMqirj0r0%2FEgsYTlEeZKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwW3f3w%2FyluHuPnvLMq3ANTWYv%2F4daIp4DJ%2BGNMAdS2MICsqzS5IYHiZbS1bBaFTmEnkI74BMicbaF0%2FwWdhB%2Fp4du%2BsaP6%2BAC3LeahhYjfiQhV7lN2TGVMJzRq%2BaVr25Ewj%2B5WzE154fpva9o5dIK6ydIZj04%2F9%2FazMIKMjNUpJuWlMLJ7BZxclH2Rw9voZLVG4WZEjHHKFGKtB6F28LTeYmy%2BOCUux9sZXaSRH0NCG3nsz8YeVtldXCArnZtqorYFmyhbX03lRRGcDDJZ3z7ml%2FFEti7XqwuWCWs8eQ9gkiE0kMZikNmgY25e6d7%2BDHln%2B2eUlLk7F%2FjA4z0uN8OOmHBKHKUs0CphQNwJhe8ZxCewnTN7A3sWw%2BPzePKcLHq0gU5g77bK2gWc3BjzfQqqiOksQEbKSEk%2B2TqjD6FcbuoYK8gtV1OdSoae1c5B1MwAfStxY2h3U2s4OMNBNnduU5Hl815ReLg%2F%2B7AsGJB9onEtbB2aVp7%2FOJKMmAeevGthtiSk6BxQADFZlQ%2BM9ehB0TIHQXR6VVbN4K%2BO4yHJvFGmfj2fvybdQeG5cKkrkvdST8WQmsctW41oZcG6IayxhTOGMuLcy8AWB7JCRJJ4REUgg%2BjRPGKZTPZo3R53e6JwsENTBveufp4qMzCMwdvJBjqkAV%2Fo1YwvP3pyY6DuTR%2ByQPIT%2BG8aS160M3coSCqIlBFJbT5ydB%2FEY0TFbc%2FVZg0R5G14g%2F8X6Fk1xQaDvoxd0feUOj84VKQKe5cBPCFH7LVPokS%2BtgbTZfyrbnAsnLGTHAqhgVGHcwVYyhK4nqMnGgIpnGJoK0COXZK0AfDL7hjbyXM0LZriyMdGIMz%2BqSL2SSugRdnEIeV7WwhXCu1XoP9EX9qn&X-Amz-Signature=b8872a1a78dcf6eafb133cb0e47489c5a7f0f9856909a218d3420ab9e7ebd549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

