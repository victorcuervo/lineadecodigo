---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ITB32P5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T042132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCNQyl1I7OBMj5g65SXV%2BYvYMbwlncDxjW9uRZjl1yXQIhAP3JmxYZUPq08SKP3jz2cNxXB1q%2FKQ%2FtZd1GosM%2Bh2%2BLKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw58HCtEnK1z0JzMi4q3AMgCf6AeFWTSGj0yRyW7qwHRKdaHJmdt7fwHgy%2BUyieLXd9dvvklWkuvelc7e6WKGbo2VTbM%2FycaMlNxqvjWZa%2BvS3Gw%2Flh3FtOY%2BBtevY%2B%2BwiVJOR8xOjsZEd3iV5dfLgFpUSYZWdw7w17Zb6bxdr7Sz0%2FZOzvH8OSPurNgoDf5lmWBeQN6oo%2FxiZ75QvpfEjVQlZSuEixCs%2Fh%2FK8I8WMCLVgM31vv50%2ByyYLrU5Njk2m3hvFbNz1DuLJ2JKgoLShIn9X3xt7TDJNtsjDwfsPtKmW%2BpI%2FLFjA3NKx5j32BaYUWmEMj9yrTQGZ61OXbRz6cSvInwFx3FXqzEtXoGGN5Zw0TaKUL%2FrQO3WWkf321mAp%2BDSKfnT8doLLZCTWtgk8voRBPIl3h%2BnxDm4hF1EX2oAtOvmq3xq6%2F1pfAzDQ210qLTeyi2dZJ9gj4eXsNVrEnDVVGiWOgxV52u%2Bm%2BdFMCQFT5QtO%2FTsuYGhQM0NmUI7hj6eGZsEVqlF%2B6jwC%2FejOC6F2vGQajyGTI8a2N%2BhwprQgxUs0TgM4NSvvKB1ut%2FZ15rJegeUqZ9duMIirpTHZWsSiBEdk0b4wAHr%2FGZZVNTnZdf3GTUvHvOgEWC5dtaQfZ05K230AntOI7bjDklNnJBjqkAWz7K3F35HEZhUkJ6fRxlfHKFRz1iDv7NBNHGdXRIJwzm9g%2FTkoO96XG%2BkfG5hP59lqEhwbWNoBStfAOLtVZAnnjlFy6EsgJcvsPRRXlN1E6soOWjk5aLLq4bEjCLtjmSNoL3TMSvQFyU3elDBOkBRbEr4eFZDmnuvwpj3fNO%2Fzi3PmT9f1jK7M1EZ4N3J3i3ZXaud93hkKz2QiItRaK0GAhsRap&X-Amz-Signature=b34eb9bc9126c76f69ebc7fa1e0161376563cd3b79bf8aab5e6b3672f2101e73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ITB32P5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T042132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCNQyl1I7OBMj5g65SXV%2BYvYMbwlncDxjW9uRZjl1yXQIhAP3JmxYZUPq08SKP3jz2cNxXB1q%2FKQ%2FtZd1GosM%2Bh2%2BLKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw58HCtEnK1z0JzMi4q3AMgCf6AeFWTSGj0yRyW7qwHRKdaHJmdt7fwHgy%2BUyieLXd9dvvklWkuvelc7e6WKGbo2VTbM%2FycaMlNxqvjWZa%2BvS3Gw%2Flh3FtOY%2BBtevY%2B%2BwiVJOR8xOjsZEd3iV5dfLgFpUSYZWdw7w17Zb6bxdr7Sz0%2FZOzvH8OSPurNgoDf5lmWBeQN6oo%2FxiZ75QvpfEjVQlZSuEixCs%2Fh%2FK8I8WMCLVgM31vv50%2ByyYLrU5Njk2m3hvFbNz1DuLJ2JKgoLShIn9X3xt7TDJNtsjDwfsPtKmW%2BpI%2FLFjA3NKx5j32BaYUWmEMj9yrTQGZ61OXbRz6cSvInwFx3FXqzEtXoGGN5Zw0TaKUL%2FrQO3WWkf321mAp%2BDSKfnT8doLLZCTWtgk8voRBPIl3h%2BnxDm4hF1EX2oAtOvmq3xq6%2F1pfAzDQ210qLTeyi2dZJ9gj4eXsNVrEnDVVGiWOgxV52u%2Bm%2BdFMCQFT5QtO%2FTsuYGhQM0NmUI7hj6eGZsEVqlF%2B6jwC%2FejOC6F2vGQajyGTI8a2N%2BhwprQgxUs0TgM4NSvvKB1ut%2FZ15rJegeUqZ9duMIirpTHZWsSiBEdk0b4wAHr%2FGZZVNTnZdf3GTUvHvOgEWC5dtaQfZ05K230AntOI7bjDklNnJBjqkAWz7K3F35HEZhUkJ6fRxlfHKFRz1iDv7NBNHGdXRIJwzm9g%2FTkoO96XG%2BkfG5hP59lqEhwbWNoBStfAOLtVZAnnjlFy6EsgJcvsPRRXlN1E6soOWjk5aLLq4bEjCLtjmSNoL3TMSvQFyU3elDBOkBRbEr4eFZDmnuvwpj3fNO%2Fzi3PmT9f1jK7M1EZ4N3J3i3ZXaud93hkKz2QiItRaK0GAhsRap&X-Amz-Signature=e0750961ec2c95891269d92f59e854de142b9549925c3cad8d9bf9958fbf411e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

