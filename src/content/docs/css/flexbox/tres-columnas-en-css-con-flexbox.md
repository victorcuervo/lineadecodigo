---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGVYRJZB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5ZcSQQXoM08XvVDIG6t%2BGz5alSL3Oa9Fiz8Kq5E21XwIgLgKpe8xT7uPAicn1QhC9gNJzTeVryOOYIhuyjfHrpUQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBrZ%2Fx3ZnVgZGy8mqCrcA6aPtnCKKu7luroUcEiMec5ruj%2Fcrlk5gNkK8DqnIKabxzJgwu233MJcHDmzALs%2B9kqCZOGASXFCt0Hp0NwvDDMqDt%2FjDWVleGYrSPBOSOpN%2FnsBBS1Lb%2Fn4HVj1vDV4lIuB1%2BE1xhEAV35W3LBS0ScMq81vZFDZO5ZgxqSBBazE%2B8S%2FMjKoQ9dfzMZvBdkZ%2FD39H235PexGOX6iGmUyOx5%2FachwCXBXRhAV5Q9mNK4waRuhGKQ7%2F5O8vme2Ey7wUeTarESHjbcIrRwei0LoLk5eys7TBH9%2BwQbOE79jhBt6CjmsiFnc5UCcGgD%2FOF05y16XIZeCMCMaf1ZniLUt%2FnBNVP1hyeIPczwda0D4%2BB1pwKRIrMW7ZhrHpFcOwVpNBIJmciz1eplrS35cXYLFHCv9eMQt%2BukROJgDWOuNhlHQqZY325o%2FAGYeZkgq2R7V%2Fq42ODLK6qDKa6VsG2JEx2KhnMK2aKFgCxKOqWl0vN4RvkSuXxRC5hqGJQBpBixbfGZWQiycoDIKUDjdDfahO%2FAQOe4CDgciGV5S%2Bkr%2BGppmMbbkOkUEZIUmeZe%2Fk8ICeV6KqGZ1Mog%2Buxbn%2F9FDKvY3ncN%2Bi8Mn%2BxIrYro3Xs33RWy0WhokhwJYDlvyMMrM0ckGOqUBQFNeNLb%2FBqW5gtFYx1vW2ZBmjbHYt1SIydU5OYTLIqAR49Xf7iwQanBfl%2BbURqlg%2FaoatvQm%2FBvs0MGMD421re%2Fj361BLE4r%2BAX5AJQaGcwW6EK5kuOd9hbG3JS4gTfGTGFv6JwnXfn65lQj3JboeVdY9umG8JKdqcxjVYL7CGwln4VQYwkxOk4x1jH96625xa6mPPWINzflFJ3ZHSDms4mykeOl&X-Amz-Signature=50e09aecc2376098c89979dfa95e4149a6ea35a1378b05ca681fd7c3cd4c8542&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGVYRJZB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5ZcSQQXoM08XvVDIG6t%2BGz5alSL3Oa9Fiz8Kq5E21XwIgLgKpe8xT7uPAicn1QhC9gNJzTeVryOOYIhuyjfHrpUQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBrZ%2Fx3ZnVgZGy8mqCrcA6aPtnCKKu7luroUcEiMec5ruj%2Fcrlk5gNkK8DqnIKabxzJgwu233MJcHDmzALs%2B9kqCZOGASXFCt0Hp0NwvDDMqDt%2FjDWVleGYrSPBOSOpN%2FnsBBS1Lb%2Fn4HVj1vDV4lIuB1%2BE1xhEAV35W3LBS0ScMq81vZFDZO5ZgxqSBBazE%2B8S%2FMjKoQ9dfzMZvBdkZ%2FD39H235PexGOX6iGmUyOx5%2FachwCXBXRhAV5Q9mNK4waRuhGKQ7%2F5O8vme2Ey7wUeTarESHjbcIrRwei0LoLk5eys7TBH9%2BwQbOE79jhBt6CjmsiFnc5UCcGgD%2FOF05y16XIZeCMCMaf1ZniLUt%2FnBNVP1hyeIPczwda0D4%2BB1pwKRIrMW7ZhrHpFcOwVpNBIJmciz1eplrS35cXYLFHCv9eMQt%2BukROJgDWOuNhlHQqZY325o%2FAGYeZkgq2R7V%2Fq42ODLK6qDKa6VsG2JEx2KhnMK2aKFgCxKOqWl0vN4RvkSuXxRC5hqGJQBpBixbfGZWQiycoDIKUDjdDfahO%2FAQOe4CDgciGV5S%2Bkr%2BGppmMbbkOkUEZIUmeZe%2Fk8ICeV6KqGZ1Mog%2Buxbn%2F9FDKvY3ncN%2Bi8Mn%2BxIrYro3Xs33RWy0WhokhwJYDlvyMMrM0ckGOqUBQFNeNLb%2FBqW5gtFYx1vW2ZBmjbHYt1SIydU5OYTLIqAR49Xf7iwQanBfl%2BbURqlg%2FaoatvQm%2FBvs0MGMD421re%2Fj361BLE4r%2BAX5AJQaGcwW6EK5kuOd9hbG3JS4gTfGTGFv6JwnXfn65lQj3JboeVdY9umG8JKdqcxjVYL7CGwln4VQYwkxOk4x1jH96625xa6mPPWINzflFJ3ZHSDms4mykeOl&X-Amz-Signature=d712087df3b6c2e23362734882f263f2f32ab7b7c18cd399f6557da7c5c862fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

