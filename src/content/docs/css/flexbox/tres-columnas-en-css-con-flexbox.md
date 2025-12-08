---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTZIZMPS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPypPAdvrhwqmsmdyePxdjL7ONWS85m83oC0tQGFm7bwIhAPUKN3ll3xv1eVLGMmDz%2B1esGsM6otARYYrR5lE1Wj65KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8FI9Fs%2Fb9A%2FbN7qEq3APbcwbTlp0NaLJ%2Bjkq9SwAw1SHqp%2B5Q8Y%2Bz6LEZt36ayOVmDELAO3va83oGGyJOVPGikeCbTVkVZudZzHY7q7NzkKC53iydF1%2ByZtZ56oSG7bmh70XLCS2A3k4KzPTykpXOqsf4aJf2CrCbPI0Oob5XXqTP1QVMQmbcLfzUgCzpArqW%2FwP9B08KagUla7cu%2BcfeiUgKInxhtHkXAmLqFABwT7dRR22ifEt%2FW3gZaLepD0yvTyIfqPXdmpZKFxonHFlYSeNbRuyBKSsfjJO%2FN5I9fBCvxNTvNNpyBcLKh8bQr%2BBDDYVczF5s1b7z1WcFXt1TfD%2FDgJWZPR9T6%2BZi2r6nO%2Flu5wFd1iJPXAYaTt1EeddLJDU0aYqvvzhiTLYB4G6uk0auAYJdiQ5h4VBCdAPPyoSXdLBMPYIhxk9TaR3atGHG1Pdp27NNG3PpZRdlwza4nYYYIHV%2BqC13r%2Fy87lLoJ%2FJrwhDAOmnHF0dchihG4in0v3J%2B%2BywNJWYT2Jc9EPqW8CJ4PPBEeIxstllUxVwcwrYMTMQSzvIZDqkQDiCHjSEZn6JmmRNFfI9Gu3gXn2dj3KQvbmTKisK9XIfixCvqYlrneXlY7CgsuUyE1npT1jeb5l2cUjsiIZlyyTCvtNzJBjqkAbeX4FZgI6irFlSkqhCJIzJRnzpKnVgIJ78I9SK1%2FkRA3RHXqwwfoQKtXovq0lIlPT0oC1md3qyJOBchvqJxnUj7%2Bf1nNj9neFo%2FuyktPVFTVL9Wb6827d%2BMtqGZWxM2xTfqQEwodze%2B3Br2ePkxCH8SxSscM1V%2F0vTYkt01FpJaPut%2FzZOOw6Vb4PTaaOVHbT27u7msz4HCUqQICPDkJSkCS7WA&X-Amz-Signature=f4357b83be2b779060a79e0daec6c40c4a7e35d83114ab2a1cfc8e3b577742f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTZIZMPS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPypPAdvrhwqmsmdyePxdjL7ONWS85m83oC0tQGFm7bwIhAPUKN3ll3xv1eVLGMmDz%2B1esGsM6otARYYrR5lE1Wj65KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8FI9Fs%2Fb9A%2FbN7qEq3APbcwbTlp0NaLJ%2Bjkq9SwAw1SHqp%2B5Q8Y%2Bz6LEZt36ayOVmDELAO3va83oGGyJOVPGikeCbTVkVZudZzHY7q7NzkKC53iydF1%2ByZtZ56oSG7bmh70XLCS2A3k4KzPTykpXOqsf4aJf2CrCbPI0Oob5XXqTP1QVMQmbcLfzUgCzpArqW%2FwP9B08KagUla7cu%2BcfeiUgKInxhtHkXAmLqFABwT7dRR22ifEt%2FW3gZaLepD0yvTyIfqPXdmpZKFxonHFlYSeNbRuyBKSsfjJO%2FN5I9fBCvxNTvNNpyBcLKh8bQr%2BBDDYVczF5s1b7z1WcFXt1TfD%2FDgJWZPR9T6%2BZi2r6nO%2Flu5wFd1iJPXAYaTt1EeddLJDU0aYqvvzhiTLYB4G6uk0auAYJdiQ5h4VBCdAPPyoSXdLBMPYIhxk9TaR3atGHG1Pdp27NNG3PpZRdlwza4nYYYIHV%2BqC13r%2Fy87lLoJ%2FJrwhDAOmnHF0dchihG4in0v3J%2B%2BywNJWYT2Jc9EPqW8CJ4PPBEeIxstllUxVwcwrYMTMQSzvIZDqkQDiCHjSEZn6JmmRNFfI9Gu3gXn2dj3KQvbmTKisK9XIfixCvqYlrneXlY7CgsuUyE1npT1jeb5l2cUjsiIZlyyTCvtNzJBjqkAbeX4FZgI6irFlSkqhCJIzJRnzpKnVgIJ78I9SK1%2FkRA3RHXqwwfoQKtXovq0lIlPT0oC1md3qyJOBchvqJxnUj7%2Bf1nNj9neFo%2FuyktPVFTVL9Wb6827d%2BMtqGZWxM2xTfqQEwodze%2B3Br2ePkxCH8SxSscM1V%2F0vTYkt01FpJaPut%2FzZOOw6Vb4PTaaOVHbT27u7msz4HCUqQICPDkJSkCS7WA&X-Amz-Signature=5080dd53b7c29f7d98f93f28d90f17e183e147d75b2205c832ca2d369d98847c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

