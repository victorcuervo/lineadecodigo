---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E22VZNZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T004035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFVdk9kQUaz0%2FzUDMY%2FVGMGpOFWsEuUtfSxqOh6oUH%2BAIhAJE%2FO6JUqevSH6Nhq7H8f6XRt9OCD1OEPErB2%2BA65M6vKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQUpBb71WjqXXOpu4q3AP1KJtFnAc%2FPqdommMsg7sTSkiEH1tglhTAS6YkbeAdmvYhyFY4X8N%2FnT9DkiumNW%2BZyVDbo0oJddG54EdZ7XTjVG91Be5B1KwrFw669DvsT1OGICfteoNPqUdKlqj92npvxrKMYq8w4P%2B5d5UXZq8YpcXZh6pMSxU%2FS6lGioPMdSrOYLqOtAGOKUWTAoefO4E9r9ez1WKEyn73%2FKsI9JRnIQQmdoM1bDKYvbQ4YENW3ztkVU0dcjgu5IMWGEfKS5hcZprJeCO29qo0U4sJbZIsjQz%2B5dPSZ8vpqMGkJPVjG7aO0ZY9ur7fPf0lEPv6ePJiJqkkrMwzfJOeWXbv1mYxY3l%2FkTuKn6Ub4D0B9UI608Bv8Qn%2BTpLYjhFWZTSI2RYl8B3Mbpc1yDeOPhzmNY3YU8JzXID6561TCJa4TKtCbG6wPE075Kv8uENz5zBft9dkK4PuiTkshRrlTiFmtiZi6BZdb4Ld7qWTY00gASIj0T2BNR1PzBIsGydJ32q813zn%2BdxyZA2pXvZ7LOxT%2F6r%2BWLfezDCnWIvEP9r6K5Yx5B5ynAs62XHLk7EoDSb00hXGvCGLq%2BDecP7cgiPWGr3zLCkrXDP22SJUNW11C4%2F6ZXdqGsXRxjJFDwkUYTC2odjJBjqkAYAymTwLw%2FZ7XRrwelnqLVqj5om%2BPEMLzvYkppkBjZLucpYOF8WcNn320N5uZQvL%2BJzfmcY66l0wj28bRdmaUh52e0DCqhVXWYxt2cw8gyex1bFZjh8JbwHGbMVoZVNrY%2B4is6o1xWW4e%2FUMnbXbkeKEvwUXOQJCUDaoah8mb5pPGzG69hN6QZazU%2BiCjcxc15IAp75bSaVhxHmDs8POJBH1elBC&X-Amz-Signature=ab03437d05e409eec68dda082d3bad211480e8c1a98f450ba7bf9e46098aee51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E22VZNZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T004035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFVdk9kQUaz0%2FzUDMY%2FVGMGpOFWsEuUtfSxqOh6oUH%2BAIhAJE%2FO6JUqevSH6Nhq7H8f6XRt9OCD1OEPErB2%2BA65M6vKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQUpBb71WjqXXOpu4q3AP1KJtFnAc%2FPqdommMsg7sTSkiEH1tglhTAS6YkbeAdmvYhyFY4X8N%2FnT9DkiumNW%2BZyVDbo0oJddG54EdZ7XTjVG91Be5B1KwrFw669DvsT1OGICfteoNPqUdKlqj92npvxrKMYq8w4P%2B5d5UXZq8YpcXZh6pMSxU%2FS6lGioPMdSrOYLqOtAGOKUWTAoefO4E9r9ez1WKEyn73%2FKsI9JRnIQQmdoM1bDKYvbQ4YENW3ztkVU0dcjgu5IMWGEfKS5hcZprJeCO29qo0U4sJbZIsjQz%2B5dPSZ8vpqMGkJPVjG7aO0ZY9ur7fPf0lEPv6ePJiJqkkrMwzfJOeWXbv1mYxY3l%2FkTuKn6Ub4D0B9UI608Bv8Qn%2BTpLYjhFWZTSI2RYl8B3Mbpc1yDeOPhzmNY3YU8JzXID6561TCJa4TKtCbG6wPE075Kv8uENz5zBft9dkK4PuiTkshRrlTiFmtiZi6BZdb4Ld7qWTY00gASIj0T2BNR1PzBIsGydJ32q813zn%2BdxyZA2pXvZ7LOxT%2F6r%2BWLfezDCnWIvEP9r6K5Yx5B5ynAs62XHLk7EoDSb00hXGvCGLq%2BDecP7cgiPWGr3zLCkrXDP22SJUNW11C4%2F6ZXdqGsXRxjJFDwkUYTC2odjJBjqkAYAymTwLw%2FZ7XRrwelnqLVqj5om%2BPEMLzvYkppkBjZLucpYOF8WcNn320N5uZQvL%2BJzfmcY66l0wj28bRdmaUh52e0DCqhVXWYxt2cw8gyex1bFZjh8JbwHGbMVoZVNrY%2B4is6o1xWW4e%2FUMnbXbkeKEvwUXOQJCUDaoah8mb5pPGzG69hN6QZazU%2BiCjcxc15IAp75bSaVhxHmDs8POJBH1elBC&X-Amz-Signature=2df11a7fa2b2f514acda1b2debe6561eac6992fd410681dc5cd3bcd26b797a23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

