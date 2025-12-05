---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGA3BHXN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T051608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfrXNVF9goM5AKVJmXScIJzyYVNJzs7jv0OVpCm6%2B3CgIgT2CF1LJeE%2Fz8BoPAceWAU4E%2F2p4Gtq6VnuK25HbdkJMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOCiq8aBy3GBRrTk7ircAyP1Zkm54OV7Kl04UMdZO37Z8P1%2FEe3qksjcU%2BD%2FbI7oSdyNwiYlISu7E9rjiA%2Ffps4AsfEwxHgzTgJLUtRmJSAIQVFcnJ8xxIhYLqW94j3AOR9SzKbHHfmhD1bXEi3Spxe57kftap15oPw2fDtdBvIcKyqn9o77j83sDKvpV7ek1%2FJSEgLYSBffpIJWeYiUQlEB09rtq%2F7LkXKIkPzA%2Fvr4o%2FVgKD8MD7fhSXEyCRbirMxEOBUXmCXMg8cFADNvcfFS6O%2FHxFgM2wXFH0x8CUFt%2B7m6UtDpQRbUua9SjyRPwbYtbix83VGFQ9snbdv3R8H%2FXpcnSBvhPyZjNncQLl%2F4pGdpdZ6n78wqRdqUT0d%2BR%2Bbu2MAfBWIw6U2dU1QwTjN%2B9%2BVA9qoe7kvfooMt00x9dRVcoYZTcHPTrgnaYSC092S9NszsQ28JvGOyYUxzG%2FZZEJhu9EvEAfGZ3Rguie9ntgMhkakFL2UdNmnJMW8eHnFFKXPlRuyko3U1YP%2FZQsrii%2B5MUF3FbQHO6mig3Xx2ra0REdb2sk1FymuCVJize6sssb6K%2FldqRctT7S589OGYUlIYuqnvxXlqE1I6vgxddGUBf9vQzAhrrMcn44yS82CcoMFDk%2F3TofrYMKiryckGOqUBFsL36TlZVGT8AcSG9iJ%2B15Pqse3fanluTT3mM0hZMkor1xff%2B%2BCFoBzF0HYxwZh4%2BTh4l%2FPBGq4t1ciXhkmprtGA6hqoSIEmTo36FlqRa%2F7NeWqcihR1JVEr9VORkjBlxZDnDp0VWSPIeFNNVRxWhevw0euTH2dKJZy%2B%2Fc8x%2BNTGgWWMMlBK8wMAilwU8v0RH8vglxLQYgjqmJIeWrm7CK2UmkJk&X-Amz-Signature=3719c0c4379106f3e5b72543e4be48381a4eac8955a2a199fbaadbb0cd37976b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGA3BHXN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T051608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfrXNVF9goM5AKVJmXScIJzyYVNJzs7jv0OVpCm6%2B3CgIgT2CF1LJeE%2Fz8BoPAceWAU4E%2F2p4Gtq6VnuK25HbdkJMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOCiq8aBy3GBRrTk7ircAyP1Zkm54OV7Kl04UMdZO37Z8P1%2FEe3qksjcU%2BD%2FbI7oSdyNwiYlISu7E9rjiA%2Ffps4AsfEwxHgzTgJLUtRmJSAIQVFcnJ8xxIhYLqW94j3AOR9SzKbHHfmhD1bXEi3Spxe57kftap15oPw2fDtdBvIcKyqn9o77j83sDKvpV7ek1%2FJSEgLYSBffpIJWeYiUQlEB09rtq%2F7LkXKIkPzA%2Fvr4o%2FVgKD8MD7fhSXEyCRbirMxEOBUXmCXMg8cFADNvcfFS6O%2FHxFgM2wXFH0x8CUFt%2B7m6UtDpQRbUua9SjyRPwbYtbix83VGFQ9snbdv3R8H%2FXpcnSBvhPyZjNncQLl%2F4pGdpdZ6n78wqRdqUT0d%2BR%2Bbu2MAfBWIw6U2dU1QwTjN%2B9%2BVA9qoe7kvfooMt00x9dRVcoYZTcHPTrgnaYSC092S9NszsQ28JvGOyYUxzG%2FZZEJhu9EvEAfGZ3Rguie9ntgMhkakFL2UdNmnJMW8eHnFFKXPlRuyko3U1YP%2FZQsrii%2B5MUF3FbQHO6mig3Xx2ra0REdb2sk1FymuCVJize6sssb6K%2FldqRctT7S589OGYUlIYuqnvxXlqE1I6vgxddGUBf9vQzAhrrMcn44yS82CcoMFDk%2F3TofrYMKiryckGOqUBFsL36TlZVGT8AcSG9iJ%2B15Pqse3fanluTT3mM0hZMkor1xff%2B%2BCFoBzF0HYxwZh4%2BTh4l%2FPBGq4t1ciXhkmprtGA6hqoSIEmTo36FlqRa%2F7NeWqcihR1JVEr9VORkjBlxZDnDp0VWSPIeFNNVRxWhevw0euTH2dKJZy%2B%2Fc8x%2BNTGgWWMMlBK8wMAilwU8v0RH8vglxLQYgjqmJIeWrm7CK2UmkJk&X-Amz-Signature=489c576d8e687ee7775d53f3844dc2018849679cae92b517c0a029a8bc170f59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

