---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656JS62SS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T090042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9vsKavw3e4LgmMOeC0fu4J%2BkFMRUuJSh%2Ff3TiFRPc6AiAPJdDyPaLej%2FhZDgPzBfFw8ySSVaYVgo07QQBxFOfDcSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMY%2BDGod3lOP14NIzyKtwDpK%2BN43%2FWIwC0%2Bo026jyf4K3lCLK5usGsvPbZOLXjdEmAuQJM9Y96I3gWbZMfZ2t3bO73lzl3ordRBAi6TfeJ52WeIwPOvdA06XQukwOzArXqap5jCdlg7RRQfQMKbg4rTKzTQpJO7SO1Vd1FcUbtVWmYza%2F%2FgnscAfMwZyuquf0n6RVN1MZ4pktmB70pgJqvCvDY%2B6HwyQZnhAAT8hs7TdHKK0TyOiCTzzJqCPQewZidDXXHIIpOFi6rbsH94bFOpdyTg%2F73o36L%2BnfR3Kg0z4NK7ibjkvQWtn84NDnbUHHHL8Sa%2Fe5XTdGkxJYMcE2t3li%2BSVCgDa2EMBXFA6i%2F0WsE6rkdYHTPe6yKHJhJQeDM%2FgkfxEEA%2B3gSwR7robEWozeyZ%2FnT99RICOwoMJfUAxo%2B25WheDVUidNJ%2Fh%2B4G7p5SKJVnRJP5j0TJqzeUeR13n1%2FLmsUAFG6plSeDUDKBhw4n6wKZaclxKowcRzboJ%2F3n73qsCkw%2BM%2FIjY27lXT6DrKjuhdkyNVFRDCjtE%2FxSwVK7SoShS8fDkVEadSHpgsVkhnb%2F%2B%2BDRJUSnYcGnKGdsvt7sf4svXClDoTfNwsKCV1f3gYW3qiwqKEbvYTiQpkiTZp%2Bw6czxVVyV24wlr3PyQY6pgG774zhGwPO3lWXHqrdqEUqQn7Y4c71P3X4nOOorn1njevbM0DOMVqBNnGv2B7UT3QQWPbMmIU2Zigk%2F0yxsRKsS9xw%2Ft8PYyEI%2BkK2FbaAqUylzF4W7r1VUWPmgYlMsj4vq78kc4fSERNPXQ%2FR9P86La%2FtG%2Fm0VEJDPpoj7KzfwiguhXylFaeKebqj15jElGLryjfAH9L%2F8no%2BqvEJrjBFGvYVGfjj&X-Amz-Signature=38424be65f3fef83c72a06ee2a51645be55ea3cea9dca123128930ed4faa63f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656JS62SS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T090042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9vsKavw3e4LgmMOeC0fu4J%2BkFMRUuJSh%2Ff3TiFRPc6AiAPJdDyPaLej%2FhZDgPzBfFw8ySSVaYVgo07QQBxFOfDcSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMY%2BDGod3lOP14NIzyKtwDpK%2BN43%2FWIwC0%2Bo026jyf4K3lCLK5usGsvPbZOLXjdEmAuQJM9Y96I3gWbZMfZ2t3bO73lzl3ordRBAi6TfeJ52WeIwPOvdA06XQukwOzArXqap5jCdlg7RRQfQMKbg4rTKzTQpJO7SO1Vd1FcUbtVWmYza%2F%2FgnscAfMwZyuquf0n6RVN1MZ4pktmB70pgJqvCvDY%2B6HwyQZnhAAT8hs7TdHKK0TyOiCTzzJqCPQewZidDXXHIIpOFi6rbsH94bFOpdyTg%2F73o36L%2BnfR3Kg0z4NK7ibjkvQWtn84NDnbUHHHL8Sa%2Fe5XTdGkxJYMcE2t3li%2BSVCgDa2EMBXFA6i%2F0WsE6rkdYHTPe6yKHJhJQeDM%2FgkfxEEA%2B3gSwR7robEWozeyZ%2FnT99RICOwoMJfUAxo%2B25WheDVUidNJ%2Fh%2B4G7p5SKJVnRJP5j0TJqzeUeR13n1%2FLmsUAFG6plSeDUDKBhw4n6wKZaclxKowcRzboJ%2F3n73qsCkw%2BM%2FIjY27lXT6DrKjuhdkyNVFRDCjtE%2FxSwVK7SoShS8fDkVEadSHpgsVkhnb%2F%2B%2BDRJUSnYcGnKGdsvt7sf4svXClDoTfNwsKCV1f3gYW3qiwqKEbvYTiQpkiTZp%2Bw6czxVVyV24wlr3PyQY6pgG774zhGwPO3lWXHqrdqEUqQn7Y4c71P3X4nOOorn1njevbM0DOMVqBNnGv2B7UT3QQWPbMmIU2Zigk%2F0yxsRKsS9xw%2Ft8PYyEI%2BkK2FbaAqUylzF4W7r1VUWPmgYlMsj4vq78kc4fSERNPXQ%2FR9P86La%2FtG%2Fm0VEJDPpoj7KzfwiguhXylFaeKebqj15jElGLryjfAH9L%2F8no%2BqvEJrjBFGvYVGfjj&X-Amz-Signature=030e7b06282494e2ab99eb6fec8fc7cd3aaa38464ba6c617c7d2816833c412ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

