---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPQGR55E%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnre3RMMjH9L0FNIaxbr7%2BuPauTUK5UXEZj7qV3LjNYAiBXl4kEm4Zw14FrY3TCcjJxVOQjCppRk%2FrjzMMAXcikQiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FS6XrI32X3Ie82jbKtwDiH37E4gX5by92casTJ91aWDHLxB5AnpXC3xP1DODGEP5aRM0A5bhRCHp9Lr2u1tHRinP2IgSiTCpXU76ZNfxKMHxTrJklB2OcI8JI%2FQYMsXaIQsiHJUyIZOC43bwqMIDOn%2F8iELWGnpDwCNgwKnEqj3mEonTj5j38y6Qw4t%2BjkB%2BsGsIAf1KyvkKdIqb5IMYTkwCZ4ikf0K444wlr8YHDnmSCccHD29qnbaDGMeQa8VJUKZrC8LoXvlpPJUFCdqFu5dTPRKzs%2Fm8w%2BaHK7Au9E75PjkzhjdbTlQ6u%2FOQ4o2NnkwkjIdi6D15ut4umy1CLX%2FvTFgE0X98OY8tpiLtC8%2B1r8PsZa7rUyQcxUBUoOZW3dCpF5HEwTLMe%2BNljhccGJIXWsL2Usx2quWC8j59wrqWcPrfspQaHXq2uLfZBLdm6vcJmU3nql8nu3X6sDtbepIzZd6aXeG8%2FOGLQiid0geExFZhZRQ5NvUoT05YxmwQTRvh3nezmzB%2FOfJ2DaTFsVWuA%2Bzfz5BOotBkTVEABWcFiuRP6fqLcyGjgX%2BkGE2z6d4XPquSEJ4mN7v66SQCb%2BATiA4rnn2cM2aXB%2BHq28y%2BLMIhI7oO6JWmBAWmcS%2F9UIO2ZH9vA5uoW28wlu7YyQY6pgHlGDzZtVkCAd7vbLUCWc9P0numxoplsEnuUfoPtN2ILjRTnSILUJBoKSwC7%2Bc9nQxCf4UOfPa9ShaxTHIEuasHT3pZJtsLyvL2kyBNqK%2F1ha3BEPI1EaO%2BGyd59E3NE%2F0PLtSm7A2ZSESfrdn6akJDwu8tUQuFbuIgdrR6rLPgDSZbJn%2BNbvmHEemRIp%2BbQpaIl%2BUUaVdDg20ZVqXk7GCf4AsmzTqA&X-Amz-Signature=bac5f4a8b781d3e53b35f110444a6685bb3bbb2f57db71f50a1f7f8e5c927eda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPQGR55E%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnre3RMMjH9L0FNIaxbr7%2BuPauTUK5UXEZj7qV3LjNYAiBXl4kEm4Zw14FrY3TCcjJxVOQjCppRk%2FrjzMMAXcikQiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FS6XrI32X3Ie82jbKtwDiH37E4gX5by92casTJ91aWDHLxB5AnpXC3xP1DODGEP5aRM0A5bhRCHp9Lr2u1tHRinP2IgSiTCpXU76ZNfxKMHxTrJklB2OcI8JI%2FQYMsXaIQsiHJUyIZOC43bwqMIDOn%2F8iELWGnpDwCNgwKnEqj3mEonTj5j38y6Qw4t%2BjkB%2BsGsIAf1KyvkKdIqb5IMYTkwCZ4ikf0K444wlr8YHDnmSCccHD29qnbaDGMeQa8VJUKZrC8LoXvlpPJUFCdqFu5dTPRKzs%2Fm8w%2BaHK7Au9E75PjkzhjdbTlQ6u%2FOQ4o2NnkwkjIdi6D15ut4umy1CLX%2FvTFgE0X98OY8tpiLtC8%2B1r8PsZa7rUyQcxUBUoOZW3dCpF5HEwTLMe%2BNljhccGJIXWsL2Usx2quWC8j59wrqWcPrfspQaHXq2uLfZBLdm6vcJmU3nql8nu3X6sDtbepIzZd6aXeG8%2FOGLQiid0geExFZhZRQ5NvUoT05YxmwQTRvh3nezmzB%2FOfJ2DaTFsVWuA%2Bzfz5BOotBkTVEABWcFiuRP6fqLcyGjgX%2BkGE2z6d4XPquSEJ4mN7v66SQCb%2BATiA4rnn2cM2aXB%2BHq28y%2BLMIhI7oO6JWmBAWmcS%2F9UIO2ZH9vA5uoW28wlu7YyQY6pgHlGDzZtVkCAd7vbLUCWc9P0numxoplsEnuUfoPtN2ILjRTnSILUJBoKSwC7%2Bc9nQxCf4UOfPa9ShaxTHIEuasHT3pZJtsLyvL2kyBNqK%2F1ha3BEPI1EaO%2BGyd59E3NE%2F0PLtSm7A2ZSESfrdn6akJDwu8tUQuFbuIgdrR6rLPgDSZbJn%2BNbvmHEemRIp%2BbQpaIl%2BUUaVdDg20ZVqXk7GCf4AsmzTqA&X-Amz-Signature=8bd97e16d16f8c5cd21ba2a60a93db267967b36c7f6d13440612fd9d49ffe24a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

