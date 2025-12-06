---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DYDIVV2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T161203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDROvC0puTGWtG9Xrs3L8r3tFdy%2FHhwDNPntyUjV9JRTgIhAIyl0BOFucYp5%2FymL7aUJLL3oqJJPQfrHQGyM2s9%2FgwrKv8DCHUQABoMNjM3NDIzMTgzODA1IgwcdozmNjrxMxv1CrEq3AOT92uTOiqt2hdwwZ3ZdZcgGQuNJFod6F7EH58xjGAQYuZLCq%2BEm%2FOtQaOQJHGEo6fSnd9fZ%2FiFCgHTllHI52v4qLS8fP0IYrehjIc%2FlvBEQGkqf5V%2BgJnpnHiLyx%2BvhqugHL%2Bnn%2B65qraa8%2BLnBu6tFFfFuSEiIfgsEf9KuRXkR%2FkMAYq%2BxJQdeHqdXxspbspanBkk786AAJpRFUYbEmV8jjqqlzllz7RCosA0hzTXrPuIKIfo3SG%2FN7cXNmsmkTyx95FmVU%2FuBIUyDl9S75ORbR8G87sp%2BEV2aLr6eJrey%2FbkAPuyteS4J4e0IcEs803xlwDohaz4Nn8gINM36202yco%2Fb%2FmVqznf3AYgy0eBQzee7b1EQ%2BKZoMlymRJeZ0w%2FNTu%2FMVLQy%2BuZL%2BIMpEZ5jwVMoYZNAJqUIGjEv3G6wxoSEhkGVbFqOdwIkdgK93KN9Km61H3evqkaGVaNmRw7VVOMCTuDxXrqMB5nhcKIMHISgN8IP9XAUitpv7h6bRUjAfLa0vxd7nKhkUMmCJ9ylS6sPOrhe3YWOZAW5ZEwykuiS2R0LMEvwEDd6RLe1McbUAms4j1vhzN5ZxmtUckNCELDGv5FwFW%2BOzl7KZdMK1DwMs3FmZHS2xJCQTCQp9DJBjqkARgDkxyPy8SQprIqb9IgJcg24LHgr14wE3IU8%2B3UpZ7Y34zfUY%2F66exbc%2BbwrBxeypP8nhtRV5VpP1jpfd0aRv8ajpIbJeoXwdHcOkmyl%2FUWWUpwdfk0u%2FO2vecJNLFWKONFJN40tt%2FnOJclD7%2B7bIRgPM%2Bpbc4vrVC6k0DzNxOmww4ro4V6JvHSdGj1tx%2F%2B2mokznJ%2FbX6fSgpMz7SC%2B4uaxIyB&X-Amz-Signature=01177bdc56f1bcbe99ed8adddee02ed295caf2b2dc5c9e0a73ab6d382c1886f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DYDIVV2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T161204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDROvC0puTGWtG9Xrs3L8r3tFdy%2FHhwDNPntyUjV9JRTgIhAIyl0BOFucYp5%2FymL7aUJLL3oqJJPQfrHQGyM2s9%2FgwrKv8DCHUQABoMNjM3NDIzMTgzODA1IgwcdozmNjrxMxv1CrEq3AOT92uTOiqt2hdwwZ3ZdZcgGQuNJFod6F7EH58xjGAQYuZLCq%2BEm%2FOtQaOQJHGEo6fSnd9fZ%2FiFCgHTllHI52v4qLS8fP0IYrehjIc%2FlvBEQGkqf5V%2BgJnpnHiLyx%2BvhqugHL%2Bnn%2B65qraa8%2BLnBu6tFFfFuSEiIfgsEf9KuRXkR%2FkMAYq%2BxJQdeHqdXxspbspanBkk786AAJpRFUYbEmV8jjqqlzllz7RCosA0hzTXrPuIKIfo3SG%2FN7cXNmsmkTyx95FmVU%2FuBIUyDl9S75ORbR8G87sp%2BEV2aLr6eJrey%2FbkAPuyteS4J4e0IcEs803xlwDohaz4Nn8gINM36202yco%2Fb%2FmVqznf3AYgy0eBQzee7b1EQ%2BKZoMlymRJeZ0w%2FNTu%2FMVLQy%2BuZL%2BIMpEZ5jwVMoYZNAJqUIGjEv3G6wxoSEhkGVbFqOdwIkdgK93KN9Km61H3evqkaGVaNmRw7VVOMCTuDxXrqMB5nhcKIMHISgN8IP9XAUitpv7h6bRUjAfLa0vxd7nKhkUMmCJ9ylS6sPOrhe3YWOZAW5ZEwykuiS2R0LMEvwEDd6RLe1McbUAms4j1vhzN5ZxmtUckNCELDGv5FwFW%2BOzl7KZdMK1DwMs3FmZHS2xJCQTCQp9DJBjqkARgDkxyPy8SQprIqb9IgJcg24LHgr14wE3IU8%2B3UpZ7Y34zfUY%2F66exbc%2BbwrBxeypP8nhtRV5VpP1jpfd0aRv8ajpIbJeoXwdHcOkmyl%2FUWWUpwdfk0u%2FO2vecJNLFWKONFJN40tt%2FnOJclD7%2B7bIRgPM%2Bpbc4vrVC6k0DzNxOmww4ro4V6JvHSdGj1tx%2F%2B2mokznJ%2FbX6fSgpMz7SC%2B4uaxIyB&X-Amz-Signature=1edecdbae355a1a5eb48681dd8a559f15448b809c26c352e8d9408882e70ac52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

