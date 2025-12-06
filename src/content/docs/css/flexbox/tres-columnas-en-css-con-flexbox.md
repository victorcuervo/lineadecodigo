---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7MVGWPU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T145502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOg0rqcI6aqpJE%2BAnfh92K81Nv%2BWzO9sDHHSVe%2BUar%2FAiAYEO%2F1waB8aifyXblEomLLaBp6XxoCMbCbovRk0fGKJir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMEZr61%2BSEIiYVLX4EKtwDMN4OXqqDNsM5Y%2B003MSKdIoauZzWd499uqSsTNHbkrd5Rb7upTLXob64u%2FhjeQeJ3CrmpzTGFX896ZSH3SSCx9Fu9ACeoAWQjUngpUpjsZv2bqWj35G4L2qA6QgbKl62dWJy1ieZ7EMKBlyKFt5XwOEU%2BWFlc%2BelySskkWjTZj7anPky4kSOWLiSuHSEHvJUmicppbQOU2E5uOoeKFNlU6cbcEfAJp9mji8OWpV5lDtROJ5doMN51eJytIW4AVu%2BLlxgCHHbDDNqqh2gqz%2BOvdJjQAv3oSX0Xirt1rnYF9qdH3WxpCtV0GY8optwIzdPU6e4Zt%2B5G0ZU89mgd8FvgwhbOX7wdayi0JBvuL%2BSM6ZnOjyJp82YnWNuGG12A2ywMGdxZ2rcjzZh%2BORSz%2FI72kvm0Hw77LznnJPGo52qYJMHjCYWPCDAm2y1LfAa4VxOYEFHzDJWIGa3i%2FKv2q%2Fl3QpBddJjp1SNigGYRYhf2EW2bHQKVp4UtX55PQ%2BPZznG0pcPWATnYIhCqxY5Ars0i2ed7ZbQKoemRT%2FqV70T6pH6zU8H2kSMzhsjrrD%2BR665vUvb8V3ERnUCyBtQJP9j87JTWOZayuu2WF6jVnm%2FHhjydUYDhX4Cfso6BTQw66bQyQY6pgF1ccF35pxVcyJK4UfI4WSGbmGdVQvAgTCFNaAYFehw0vT8xu0biP%2FxUPbjuEr2fGZiySJQyUR%2FHQkWWqXBvyHOXSnek9%2FB9wWRrNYRodnm92RXQNdjgj1ap8Iq0AyJW0VlXdA56RbJpB2TCo5DGo%2FldoFfeWnL3POkucntoAw%2Fnj1qwl8s3Uj5I4FJjQxip1nJgcKCnt4TZnVLmgu4zzKzTJtTPydG&X-Amz-Signature=4876ea5f3534167f56bd373cc6365f82fd295cbd284572a9b973a78f2b8b6386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7MVGWPU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T145502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOg0rqcI6aqpJE%2BAnfh92K81Nv%2BWzO9sDHHSVe%2BUar%2FAiAYEO%2F1waB8aifyXblEomLLaBp6XxoCMbCbovRk0fGKJir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMEZr61%2BSEIiYVLX4EKtwDMN4OXqqDNsM5Y%2B003MSKdIoauZzWd499uqSsTNHbkrd5Rb7upTLXob64u%2FhjeQeJ3CrmpzTGFX896ZSH3SSCx9Fu9ACeoAWQjUngpUpjsZv2bqWj35G4L2qA6QgbKl62dWJy1ieZ7EMKBlyKFt5XwOEU%2BWFlc%2BelySskkWjTZj7anPky4kSOWLiSuHSEHvJUmicppbQOU2E5uOoeKFNlU6cbcEfAJp9mji8OWpV5lDtROJ5doMN51eJytIW4AVu%2BLlxgCHHbDDNqqh2gqz%2BOvdJjQAv3oSX0Xirt1rnYF9qdH3WxpCtV0GY8optwIzdPU6e4Zt%2B5G0ZU89mgd8FvgwhbOX7wdayi0JBvuL%2BSM6ZnOjyJp82YnWNuGG12A2ywMGdxZ2rcjzZh%2BORSz%2FI72kvm0Hw77LznnJPGo52qYJMHjCYWPCDAm2y1LfAa4VxOYEFHzDJWIGa3i%2FKv2q%2Fl3QpBddJjp1SNigGYRYhf2EW2bHQKVp4UtX55PQ%2BPZznG0pcPWATnYIhCqxY5Ars0i2ed7ZbQKoemRT%2FqV70T6pH6zU8H2kSMzhsjrrD%2BR665vUvb8V3ERnUCyBtQJP9j87JTWOZayuu2WF6jVnm%2FHhjydUYDhX4Cfso6BTQw66bQyQY6pgF1ccF35pxVcyJK4UfI4WSGbmGdVQvAgTCFNaAYFehw0vT8xu0biP%2FxUPbjuEr2fGZiySJQyUR%2FHQkWWqXBvyHOXSnek9%2FB9wWRrNYRodnm92RXQNdjgj1ap8Iq0AyJW0VlXdA56RbJpB2TCo5DGo%2FldoFfeWnL3POkucntoAw%2Fnj1qwl8s3Uj5I4FJjQxip1nJgcKCnt4TZnVLmgu4zzKzTJtTPydG&X-Amz-Signature=99224c5c31b4784b5419f9f71d76de07146297d9edc7b60b628376af42864ad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

