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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RLYQKAA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T170426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQC71MLmXfe65hzaaXretJsCb%2F%2BbjWCtIv11uk6W2QtqOwIhAMxeD7LloqEYRkGRHOEMvsFo0AG0tUFjMzQUtymw3op6Kv8DCDEQABoMNjM3NDIzMTgzODA1IgxkW45yQ4Zv1Lfkf2Mq3AM9Y3hLMiWE0Evzv%2BtfM0s39acuVqRziBERKUv9B7WIa7K8YlpDkKFgqeTIfTmrfFc%2BpwBpoHZugB9emK6LbGCnlybxL7JZb94ZFzxhGQ8sXiZPvlRkBSJkIERrDDHtun4dbqANUgce0FvvZbH91d2d1dojhkTcVaDbhxB%2Bf%2FqPDUuD81nURDd6aO8c198AQ4oSjUWZE%2F%2BX5H1udb6d%2FSts3RXE8P%2FV9mXIDvUDNUCEKJwGIuFF9ew%2BO6pvoPi2SH39XnArRq%2BRJa0kePm5FLcIqhMT9UcYmpUUC4Z3ckKdm5X9lNg0arTyPIbZP6nWDYZSYqVJTjtX9az7VgH1ZH9NRA1jxPQsXZeX%2B9nF03hGOQPVor%2F5EC%2BzxoWhEX%2BCnEWxGMaSO0OawjErPIe1lcddEtBEgdOR1rq0pgOlUXCF%2BQVUwWKZM%2FyZYx0Vm%2BiyRMk%2BwwPB4z1o%2F%2F17u8Y8zo3W4XfiXrbY59U%2BJocF2DbMbL9%2Fv4C7HjwhzUPWVQoxLLC0jRDRxIxBOqCra4Q8DoaJ3doeRu505JPUuMDpiwY8zbI5QFkZApFgKcDACS4zaag9g4iAx3usExoA2RMsVms6LAIpU8DUST%2B19MSTSNRuaHyABW6AOxOA1dRp4DC%2BwcHJBjqkAVa0kI6lKKNFVFinTtoPMp1L2mUSqppocAMzHHzLiIxWhOwAQsNF246BTwsHQDN9DZjpI1fanf%2BEjHGjb402qax90VAfTS5DXwfHKvMBX3r2haXCC45%2FnyVQNWRl3Y5lo6D9QvpDLIqwX63aXKvXekDQZ1hw1e3AzPEnBfo69lhNtz8dRYgcQ%2FnhHjzW8HoJ8FBMjJ0NXnVQ8n%2B2lpkQ4VzvnGgd&X-Amz-Signature=8dd33d8c32789ade0254f93be0a6b272f36d01493349dc7954e22e349af5a8ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RLYQKAA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T170426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQC71MLmXfe65hzaaXretJsCb%2F%2BbjWCtIv11uk6W2QtqOwIhAMxeD7LloqEYRkGRHOEMvsFo0AG0tUFjMzQUtymw3op6Kv8DCDEQABoMNjM3NDIzMTgzODA1IgxkW45yQ4Zv1Lfkf2Mq3AM9Y3hLMiWE0Evzv%2BtfM0s39acuVqRziBERKUv9B7WIa7K8YlpDkKFgqeTIfTmrfFc%2BpwBpoHZugB9emK6LbGCnlybxL7JZb94ZFzxhGQ8sXiZPvlRkBSJkIERrDDHtun4dbqANUgce0FvvZbH91d2d1dojhkTcVaDbhxB%2Bf%2FqPDUuD81nURDd6aO8c198AQ4oSjUWZE%2F%2BX5H1udb6d%2FSts3RXE8P%2FV9mXIDvUDNUCEKJwGIuFF9ew%2BO6pvoPi2SH39XnArRq%2BRJa0kePm5FLcIqhMT9UcYmpUUC4Z3ckKdm5X9lNg0arTyPIbZP6nWDYZSYqVJTjtX9az7VgH1ZH9NRA1jxPQsXZeX%2B9nF03hGOQPVor%2F5EC%2BzxoWhEX%2BCnEWxGMaSO0OawjErPIe1lcddEtBEgdOR1rq0pgOlUXCF%2BQVUwWKZM%2FyZYx0Vm%2BiyRMk%2BwwPB4z1o%2F%2F17u8Y8zo3W4XfiXrbY59U%2BJocF2DbMbL9%2Fv4C7HjwhzUPWVQoxLLC0jRDRxIxBOqCra4Q8DoaJ3doeRu505JPUuMDpiwY8zbI5QFkZApFgKcDACS4zaag9g4iAx3usExoA2RMsVms6LAIpU8DUST%2B19MSTSNRuaHyABW6AOxOA1dRp4DC%2BwcHJBjqkAVa0kI6lKKNFVFinTtoPMp1L2mUSqppocAMzHHzLiIxWhOwAQsNF246BTwsHQDN9DZjpI1fanf%2BEjHGjb402qax90VAfTS5DXwfHKvMBX3r2haXCC45%2FnyVQNWRl3Y5lo6D9QvpDLIqwX63aXKvXekDQZ1hw1e3AzPEnBfo69lhNtz8dRYgcQ%2FnhHjzW8HoJ8FBMjJ0NXnVQ8n%2B2lpkQ4VzvnGgd&X-Amz-Signature=cdb8290fc3ad586bed4152f626c5a8065123d7a24d163187551c0eda05859d4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

