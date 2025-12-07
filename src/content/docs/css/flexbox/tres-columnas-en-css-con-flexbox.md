---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SA6HIQY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T114551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDM5u1mqupTTAjiP%2FP4EaPqpMItbAiSASztSEs9WgrdIQIhAI%2BIWUgkH7ZBH7MnbkdncgxqY7CtwDCddhdDj3%2Bn2ZIlKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwVWH%2BjXJKhZjqWzUq3AN9AwWhIK3DOXYgpRIcUC8tLoEXrIb1Pmqc0Vmxoc6XBPL1hcR8qowQRe3eH5hSSsFgkZjvGQKJvBpqCvYg4OPxc0JWtBEd9HXdXSbtGJylfMGDcTeLlYMMSJld6bqEoeUweYKwEDW%2BWzC%2FmclUbtox%2FWQa2FdIWTc3U3YhxW9v6JqcW4Nvv8miHm0Bi0wbFRsuYViDbo9Xn2faHhKK3PT0NoFA0RJ5Z4dGaU%2BHZsSqjoupwCbI7SRB1C4xpxhWrF5hlaNmAX0NJWPzGpHxxJdN01tTBvBYn8bi4mxDJjit0ziS1f9KprtTmgmyEzLP%2BjH%2FQMuBjbsbUcaMudMLLTNZNNZteLb%2Fb5wdlzlop1a919H8qnCpoRskdOJV06JJhhymh082QTwDNS6ZGkEkRJRPvEjYGVVMdhWjFdjhgktyTgjNJxurNHu47EZPUCh%2Fgfmt6YMpIAt5P0se5gnVRU1mhkI5vcaZuLMdUl2%2BpVH7ZbhDZDWhBQfxiSKZjm8OAUoDrX8mYaTRZRUlDN01lj0hI8wzIksHKjGOrspuyU%2BTjWqj5mQQhSl41mPRBgz9VXDcidyI38N9nftCUsR3xD0scaJ5DXsD7lyIsjw7aj73egICocE9EdFAXiSL9zC2mdXJBjqkAX4RDFq4Qwtp2dyT68E5mrC2112kwfOA6WQ8KK7dlIKJY0X7i4yVjlPmjlGJBP%2FCQ26rEUJxH8DWoyHKIerXeTrdRKZ7s1Mbyo0rkFQW4yJELqaYcgZ2lG6zdD6CN3rg0muZX%2F%2FPuXXlli0veMFWq4LVaaAayf4ojFxCx7zx6GkzrwVeAoIQT7umv8EBNEKyH9%2FFl4b9cbS9AKUhmT2uTIZ9BkdF&X-Amz-Signature=4817512ce9701c05c40404706d89ae68d7c5cefd31130b21d280169ed4720fc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SA6HIQY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T114551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDM5u1mqupTTAjiP%2FP4EaPqpMItbAiSASztSEs9WgrdIQIhAI%2BIWUgkH7ZBH7MnbkdncgxqY7CtwDCddhdDj3%2Bn2ZIlKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwVWH%2BjXJKhZjqWzUq3AN9AwWhIK3DOXYgpRIcUC8tLoEXrIb1Pmqc0Vmxoc6XBPL1hcR8qowQRe3eH5hSSsFgkZjvGQKJvBpqCvYg4OPxc0JWtBEd9HXdXSbtGJylfMGDcTeLlYMMSJld6bqEoeUweYKwEDW%2BWzC%2FmclUbtox%2FWQa2FdIWTc3U3YhxW9v6JqcW4Nvv8miHm0Bi0wbFRsuYViDbo9Xn2faHhKK3PT0NoFA0RJ5Z4dGaU%2BHZsSqjoupwCbI7SRB1C4xpxhWrF5hlaNmAX0NJWPzGpHxxJdN01tTBvBYn8bi4mxDJjit0ziS1f9KprtTmgmyEzLP%2BjH%2FQMuBjbsbUcaMudMLLTNZNNZteLb%2Fb5wdlzlop1a919H8qnCpoRskdOJV06JJhhymh082QTwDNS6ZGkEkRJRPvEjYGVVMdhWjFdjhgktyTgjNJxurNHu47EZPUCh%2Fgfmt6YMpIAt5P0se5gnVRU1mhkI5vcaZuLMdUl2%2BpVH7ZbhDZDWhBQfxiSKZjm8OAUoDrX8mYaTRZRUlDN01lj0hI8wzIksHKjGOrspuyU%2BTjWqj5mQQhSl41mPRBgz9VXDcidyI38N9nftCUsR3xD0scaJ5DXsD7lyIsjw7aj73egICocE9EdFAXiSL9zC2mdXJBjqkAX4RDFq4Qwtp2dyT68E5mrC2112kwfOA6WQ8KK7dlIKJY0X7i4yVjlPmjlGJBP%2FCQ26rEUJxH8DWoyHKIerXeTrdRKZ7s1Mbyo0rkFQW4yJELqaYcgZ2lG6zdD6CN3rg0muZX%2F%2FPuXXlli0veMFWq4LVaaAayf4ojFxCx7zx6GkzrwVeAoIQT7umv8EBNEKyH9%2FFl4b9cbS9AKUhmT2uTIZ9BkdF&X-Amz-Signature=fe2024ba83de97c4580bce33ddb55f5deb587ba8cdda48a9a032078d63c55613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

