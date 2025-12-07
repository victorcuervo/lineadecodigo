---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625TQTQ6E%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T133031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiepeDBZxkTIkgmmPhgAuEFowDPXasqJDc7uV68WXs%2BAiEA8xho463W3Q9MSXfqes9aqQkyusFsjjK%2FcQl6rywYoXkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2Vp5HE4opmc%2B%2FBzircA8z3Bka4XYhpmB%2FcYy5uGoCcNWFRr25k%2Bfo8S%2Fv84YoQ%2F7Z7CKS1NCdcyj8uzsLJMp74K8%2B2JNJjjwBnhc0%2B%2F4yeComStiVQDmm%2FmHNn99UNWNKS8vBiT2bmUvJCR1%2BSahSYTN2O%2B27qkZEooC2DXtb6zLmU2fuOBJqufFk%2FPlR%2BsSUcKw%2BgeLxN4lKg73hjgBLas4iOGUQ977DUkvv04NQ3UsEjTwSgrYxHALjoBEqBkYPyfLNNqmub5tRsc%2F5u0RMwlkmA5f7h%2BgJHD1aSpXxpQ20NJbYptDHK%2Fuig6tQulDdXLmnp3W8iToknhPEkz6OelnqPJC7vXwr0PFl%2FjEBdiV4u8miiRbl4X%2BpcUcpyqA7%2BPAlDmKCR%2FFwXhqiqJzRjg%2FphOj6EL5JeeygUcHT%2Bt3GNBWwsLlwTgzN%2F75qFul5O7SEt5gSe8C9fp5AedIkxqN6SYwH4ZmXFcWDoXauOPFIYuaKq3ts5oihfYR4V9m5lXYMpef5hKGWqnTE9Z3piETaDu0NgsJjeMTzLMT2Zc5DkXcQ9pkM1larlys3I6fNMKOP5nyOOcLnYebwsNz6zkQ77hrc4IuNJfuD1Vmjm6UUUBg%2Fbo2wyJQ3cqLPYDNmHpM0mZ2jAmRRYMMya1ckGOqUBxeYVMe4y7g67mCh%2BGBPr3oVtxpiaofs0NsTqaQwVs0WuQe4LZ%2BPtRD75e2erh7CuJu7RlcHTtfkpWmQh4B7FUDyfviAvMfaICr%2FBUXeCPXgy7cqTgBsV4ff%2Fj13oN0sbuHh%2Fwb1YwZJb6oMTdqSnzYCWm8oQFvf5aVE%2BGFGz3LioeX9fY8sxdsQi2swZFhvCwhcPAdvly36yBIA1sEBcUPkMzMeT&X-Amz-Signature=5e5613991e86c37b5f4a6e87bc3d687ccfc27330f2ef8ea33d3c6acb6e6c29f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625TQTQ6E%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T133031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiepeDBZxkTIkgmmPhgAuEFowDPXasqJDc7uV68WXs%2BAiEA8xho463W3Q9MSXfqes9aqQkyusFsjjK%2FcQl6rywYoXkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2Vp5HE4opmc%2B%2FBzircA8z3Bka4XYhpmB%2FcYy5uGoCcNWFRr25k%2Bfo8S%2Fv84YoQ%2F7Z7CKS1NCdcyj8uzsLJMp74K8%2B2JNJjjwBnhc0%2B%2F4yeComStiVQDmm%2FmHNn99UNWNKS8vBiT2bmUvJCR1%2BSahSYTN2O%2B27qkZEooC2DXtb6zLmU2fuOBJqufFk%2FPlR%2BsSUcKw%2BgeLxN4lKg73hjgBLas4iOGUQ977DUkvv04NQ3UsEjTwSgrYxHALjoBEqBkYPyfLNNqmub5tRsc%2F5u0RMwlkmA5f7h%2BgJHD1aSpXxpQ20NJbYptDHK%2Fuig6tQulDdXLmnp3W8iToknhPEkz6OelnqPJC7vXwr0PFl%2FjEBdiV4u8miiRbl4X%2BpcUcpyqA7%2BPAlDmKCR%2FFwXhqiqJzRjg%2FphOj6EL5JeeygUcHT%2Bt3GNBWwsLlwTgzN%2F75qFul5O7SEt5gSe8C9fp5AedIkxqN6SYwH4ZmXFcWDoXauOPFIYuaKq3ts5oihfYR4V9m5lXYMpef5hKGWqnTE9Z3piETaDu0NgsJjeMTzLMT2Zc5DkXcQ9pkM1larlys3I6fNMKOP5nyOOcLnYebwsNz6zkQ77hrc4IuNJfuD1Vmjm6UUUBg%2Fbo2wyJQ3cqLPYDNmHpM0mZ2jAmRRYMMya1ckGOqUBxeYVMe4y7g67mCh%2BGBPr3oVtxpiaofs0NsTqaQwVs0WuQe4LZ%2BPtRD75e2erh7CuJu7RlcHTtfkpWmQh4B7FUDyfviAvMfaICr%2FBUXeCPXgy7cqTgBsV4ff%2Fj13oN0sbuHh%2Fwb1YwZJb6oMTdqSnzYCWm8oQFvf5aVE%2BGFGz3LioeX9fY8sxdsQi2swZFhvCwhcPAdvly36yBIA1sEBcUPkMzMeT&X-Amz-Signature=cdceef6d4c3f140a7953e1fad5741f3cece5d1138c9496b2f6ed020eebaf5531&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

