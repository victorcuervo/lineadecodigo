---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK2ZSLTM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T081822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCA7omqx6wVRD8b91zPOrkrgXorj3jAv0C7T6waMdLI4gIgN%2FR06nGINqUZKzUXGYJatgEWWhCjZddhdr2agwvOvvEq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMCxcn9wl9P7TmQpzCrcAw6e94Xvvfzc70naAHzaPFgxMzHSULDePtDREh6QuDe%2BUMDpEHX3BBZ149ngsJwm2Vh7waCwAK8mRmKZalsWK07CwFzRpdYjZoTqeG7kMLX4iEb526HvUrpaEpd3nqW8nFGGa7o%2Bq7U2MV0rLWVIIKXauTamvSKkkr0P5FLc0KnHHDnB8bqhA6wyPLXr53qgX5PWCFatX03dbPV1MQcZtDzCMU5IOCuoV0GGVN%2Bd8zFT38ZY1l1q3NjUzZnLMvhYdzNJJ%2FV8sl0kE32FQE5QH6oFt%2B4OA9oZvYULTzqA64Oeq1Kgud0t4lvEckr6pMKGkklw1%2BHbkQXMEV1fRi0ZklA9TjlkjUxKLfSO0IzMduoUEsfeDJoawWFvgnUUeBgCJ7RmYMfsu06NBs92JU80476gan4UFgVdMVw4bzvt7WTbGKK%2BUPXaUhLG7E98Bc3OGJjog%2FVZj0cLsXie95Ugh%2Fe4t9rNYrH9lFcqcZ%2Fb1vdvXtcZ5Du01tXDvJBeIdC4Z7UH0zbrLquLw8YgNxDHqWo4qnUVMoriu%2F56GqmEDRp3RS7x%2FvvHkj8hw9aDyz3QeGm5ZuS94mQ8maiIJW3xycMlzroV4mZCr0UYsEA6q0MRRpnwluzUy2ByiVP1MIrVv8kGOqUB6K2n5Culd7r%2FmVfw0Jan6xmb2OfnSz60Ap%2FEKDZafeeiiDYenQosIYAfpMBaT2aEHHRZSkybAuljIz7miB2IBuwkYqYXhRAE1bzpR8iuRe56o72otZilQgh%2BPdGodlPb7yeqpeIONofbpODtNDMkXKwwho82q8I2Q2bgFwXtacZyFd1mBQ5%2Fy6X4eH6ysSrlm156dlFAycU7s7N56OF99f7NcQTc&X-Amz-Signature=45a93703474aae1576b1ed11bc1c4ac6d99b8388b613a866bff65788371a3075&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK2ZSLTM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T081822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCA7omqx6wVRD8b91zPOrkrgXorj3jAv0C7T6waMdLI4gIgN%2FR06nGINqUZKzUXGYJatgEWWhCjZddhdr2agwvOvvEq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMCxcn9wl9P7TmQpzCrcAw6e94Xvvfzc70naAHzaPFgxMzHSULDePtDREh6QuDe%2BUMDpEHX3BBZ149ngsJwm2Vh7waCwAK8mRmKZalsWK07CwFzRpdYjZoTqeG7kMLX4iEb526HvUrpaEpd3nqW8nFGGa7o%2Bq7U2MV0rLWVIIKXauTamvSKkkr0P5FLc0KnHHDnB8bqhA6wyPLXr53qgX5PWCFatX03dbPV1MQcZtDzCMU5IOCuoV0GGVN%2Bd8zFT38ZY1l1q3NjUzZnLMvhYdzNJJ%2FV8sl0kE32FQE5QH6oFt%2B4OA9oZvYULTzqA64Oeq1Kgud0t4lvEckr6pMKGkklw1%2BHbkQXMEV1fRi0ZklA9TjlkjUxKLfSO0IzMduoUEsfeDJoawWFvgnUUeBgCJ7RmYMfsu06NBs92JU80476gan4UFgVdMVw4bzvt7WTbGKK%2BUPXaUhLG7E98Bc3OGJjog%2FVZj0cLsXie95Ugh%2Fe4t9rNYrH9lFcqcZ%2Fb1vdvXtcZ5Du01tXDvJBeIdC4Z7UH0zbrLquLw8YgNxDHqWo4qnUVMoriu%2F56GqmEDRp3RS7x%2FvvHkj8hw9aDyz3QeGm5ZuS94mQ8maiIJW3xycMlzroV4mZCr0UYsEA6q0MRRpnwluzUy2ByiVP1MIrVv8kGOqUB6K2n5Culd7r%2FmVfw0Jan6xmb2OfnSz60Ap%2FEKDZafeeiiDYenQosIYAfpMBaT2aEHHRZSkybAuljIz7miB2IBuwkYqYXhRAE1bzpR8iuRe56o72otZilQgh%2BPdGodlPb7yeqpeIONofbpODtNDMkXKwwho82q8I2Q2bgFwXtacZyFd1mBQ5%2Fy6X4eH6ysSrlm156dlFAycU7s7N56OF99f7NcQTc&X-Amz-Signature=aab3ff05099d147a0b19b7d242388782cde7636df95532eaab2780ec2b6cdc94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

