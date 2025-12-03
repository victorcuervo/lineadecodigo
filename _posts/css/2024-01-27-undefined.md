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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDX3UU4S%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T133958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIET%2FeO8O29OamkFTwCLQmAbInXwiAIlJfdbGZ3LYaFQCAiEAiecp04ulWv%2FEIyq9GoionrnPlPzEYR7mRPzXj4fCTC8q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDFNGRGLvEFCZouHjpCrcA4mmFUK00DHNptfTH%2BGIwoPTYbjuSc1qRJPYw7UleFDVvA5rXuMp8Lbtx4NR9r0XQxc%2BeYr%2BTaxNK4kSbM8TUvr0W2A3FCyeIl21iYTbPioV8M%2Ft3XLaviU%2BtIHlrAAXrl%2FxOD4JBDHafW2COFrUD5NAcJ6gv5J0jHBq58JU5jkgx%2FnMuQQoQd%2Bd4MiOoIxtwe6h5W4CdUcreViKVaVM1NN2Wc0%2F68miPB8%2Blr9aiEv9j6drCni8jhQULzOfiNsVZLcbNpVcw%2FQ3e4Mubx9I633F6cYpuOfNBYYZyVpvfsMw7ofABjdUKs1h71zIqKvH9G5DTaRtd%2FRLPY1vnfw1BbLQVaOL6tKJmz62bWnfNLGkU0aKW%2B49%2Fxbcyc62fJWhMH3tF%2FZ8cPlvdq4jbcatwmYcth44j2zifZrYUgSMbLPNv5PL07XZYT6urREd%2B%2FmuSwlqOZX33lPIa0Mto0ndlN08mox0re5gIxzaHrJy5PsoZiyg1dLHiH7Rl5BFkWWhY36JVbmg7HQapLSyr1LUEhV21oK7vvrUZEreGW8F9wSnPgizW4AdC7gNVURDBgFc9Y3Jss4IVAZVFr9Ar%2F7umX6lUHYbbhSKor7fwo9JhD0rxpFPjz70Ys2cAhVnMKLpwMkGOqUBGRXBp8LjoqPpMpsV%2FHLls05ltvVWw%2BjT%2BEANu4x40CuobV0%2B7Y%2FLrNTkkBkoFdTWCum4qFJCy6K%2FlhXBVlxV6U%2BaXjBzw1U8NOkgqWA9J%2FOG%2BKECpuAFygtFf4OM72ZKr3P%2BiDfALI7rNiZLYtfWwEjyuosCPvkeDi1WIUqOZjPsWzMvvh7v8pF7xAbgfr26d4R1CnRhc4MTwCaoUh44FrmPqQKw&X-Amz-Signature=8c83ad207e9621f02ee409454a4053bce9dba173869e779060ae92d81573ae74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDX3UU4S%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T133958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIET%2FeO8O29OamkFTwCLQmAbInXwiAIlJfdbGZ3LYaFQCAiEAiecp04ulWv%2FEIyq9GoionrnPlPzEYR7mRPzXj4fCTC8q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDFNGRGLvEFCZouHjpCrcA4mmFUK00DHNptfTH%2BGIwoPTYbjuSc1qRJPYw7UleFDVvA5rXuMp8Lbtx4NR9r0XQxc%2BeYr%2BTaxNK4kSbM8TUvr0W2A3FCyeIl21iYTbPioV8M%2Ft3XLaviU%2BtIHlrAAXrl%2FxOD4JBDHafW2COFrUD5NAcJ6gv5J0jHBq58JU5jkgx%2FnMuQQoQd%2Bd4MiOoIxtwe6h5W4CdUcreViKVaVM1NN2Wc0%2F68miPB8%2Blr9aiEv9j6drCni8jhQULzOfiNsVZLcbNpVcw%2FQ3e4Mubx9I633F6cYpuOfNBYYZyVpvfsMw7ofABjdUKs1h71zIqKvH9G5DTaRtd%2FRLPY1vnfw1BbLQVaOL6tKJmz62bWnfNLGkU0aKW%2B49%2Fxbcyc62fJWhMH3tF%2FZ8cPlvdq4jbcatwmYcth44j2zifZrYUgSMbLPNv5PL07XZYT6urREd%2B%2FmuSwlqOZX33lPIa0Mto0ndlN08mox0re5gIxzaHrJy5PsoZiyg1dLHiH7Rl5BFkWWhY36JVbmg7HQapLSyr1LUEhV21oK7vvrUZEreGW8F9wSnPgizW4AdC7gNVURDBgFc9Y3Jss4IVAZVFr9Ar%2F7umX6lUHYbbhSKor7fwo9JhD0rxpFPjz70Ys2cAhVnMKLpwMkGOqUBGRXBp8LjoqPpMpsV%2FHLls05ltvVWw%2BjT%2BEANu4x40CuobV0%2B7Y%2FLrNTkkBkoFdTWCum4qFJCy6K%2FlhXBVlxV6U%2BaXjBzw1U8NOkgqWA9J%2FOG%2BKECpuAFygtFf4OM72ZKr3P%2BiDfALI7rNiZLYtfWwEjyuosCPvkeDi1WIUqOZjPsWzMvvh7v8pF7xAbgfr26d4R1CnRhc4MTwCaoUh44FrmPqQKw&X-Amz-Signature=64006247527379775f27538ab34c6f160054397760cea9069d0a0db436cd6d58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

