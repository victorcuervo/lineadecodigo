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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LEFR4Q%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T041422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFotbEVgJZgrliuECFPCv2F49OC6p1pJCpgXnjFoZpxaAiBoUaxyk%2FrUBXh6qdavL%2B0SEW6KVMxeE9hV88%2FRUx%2FByir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMnas0D8rvWqYlHpW8KtwDXLM%2FEuvAr0ugqfHO1G23wCskeHsqXCHP8RqCA6mwU49L4kR%2Fblu8bb%2BZudxJSHx7cpf5vDrwkw2qfs%2BhnBGp4Rr9w7VG0RW3EgZlsJ%2B2YkN%2FMwvSEHvkydmjscfVXh59Mk%2Bj4NY9hbeQ4d4AMbAKwhxuMlLriIdXy%2BhZcDUQhST4ISwNJURR7vERTLsY%2F7cLZ7%2B4utRpuFchfjRdHXm47wanuQtVY4uJF6oV6oTJNAwwqmoeuRqG77CBgU4ycSrQhuQmIyMIIbEGRBripIbhmINTfCboC5INsSvZDvOcV9zVWjLOHeaK6iPwXh9ybwBCzw9BchTE3aY1xBUSJFEgY59jWVUga31MaE%2FW7Cuz%2F0yoEB29a1vbfXFrj%2BA28RpZIK3hxIBT6oiKnV2My8aImktHvrjLCTfdue8PSRmNDi6icpKAvCVXV6lWagisiyhO3jatTzopRm%2BlyNYhh0TipU3F3fzi146mFRf%2BRdT5HmAO0GBLbeNOZHxggM4GqkxHSzk5cxsNuyIODEZA3zIe3AMamM%2Fn4DQXODK5JIW%2Bt414vQ1OPqXoOlzf2aSnHtppuUGnzNDZ%2FiJQIP%2FmVKiS9lwn8JBxA%2BaaERXULthkBOxbNdiIi3tr0auAR%2BIww5S%2ByQY6pgER0aLrmU0fX2xc4m2UWilu8OtxM7gS7ZdeBrrZ5QVwshhJkgKsP9Wc9ZSBgOVezBHXIjf4HZso2Smf0qk1sbpFG2Z8BOC4WFbdUKy8G3gkaC26M%2BIyBNl3LIwBZDhTQuBalRmz1sYE75dqlv3KBnWUkXESlzcOd1nVMIXnLBIeDAmOeM%2F6QK70Zn5OSFWHcI3DDCaMxW7RsVVMpcSCrVwqrLlEhRNV&X-Amz-Signature=cad9dc0bb9cd79d68b48bb84cebc9487ee064cadb33980acc93eb7d3959dbbbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LEFR4Q%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T041422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFotbEVgJZgrliuECFPCv2F49OC6p1pJCpgXnjFoZpxaAiBoUaxyk%2FrUBXh6qdavL%2B0SEW6KVMxeE9hV88%2FRUx%2FByir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMnas0D8rvWqYlHpW8KtwDXLM%2FEuvAr0ugqfHO1G23wCskeHsqXCHP8RqCA6mwU49L4kR%2Fblu8bb%2BZudxJSHx7cpf5vDrwkw2qfs%2BhnBGp4Rr9w7VG0RW3EgZlsJ%2B2YkN%2FMwvSEHvkydmjscfVXh59Mk%2Bj4NY9hbeQ4d4AMbAKwhxuMlLriIdXy%2BhZcDUQhST4ISwNJURR7vERTLsY%2F7cLZ7%2B4utRpuFchfjRdHXm47wanuQtVY4uJF6oV6oTJNAwwqmoeuRqG77CBgU4ycSrQhuQmIyMIIbEGRBripIbhmINTfCboC5INsSvZDvOcV9zVWjLOHeaK6iPwXh9ybwBCzw9BchTE3aY1xBUSJFEgY59jWVUga31MaE%2FW7Cuz%2F0yoEB29a1vbfXFrj%2BA28RpZIK3hxIBT6oiKnV2My8aImktHvrjLCTfdue8PSRmNDi6icpKAvCVXV6lWagisiyhO3jatTzopRm%2BlyNYhh0TipU3F3fzi146mFRf%2BRdT5HmAO0GBLbeNOZHxggM4GqkxHSzk5cxsNuyIODEZA3zIe3AMamM%2Fn4DQXODK5JIW%2Bt414vQ1OPqXoOlzf2aSnHtppuUGnzNDZ%2FiJQIP%2FmVKiS9lwn8JBxA%2BaaERXULthkBOxbNdiIi3tr0auAR%2BIww5S%2ByQY6pgER0aLrmU0fX2xc4m2UWilu8OtxM7gS7ZdeBrrZ5QVwshhJkgKsP9Wc9ZSBgOVezBHXIjf4HZso2Smf0qk1sbpFG2Z8BOC4WFbdUKy8G3gkaC26M%2BIyBNl3LIwBZDhTQuBalRmz1sYE75dqlv3KBnWUkXESlzcOd1nVMIXnLBIeDAmOeM%2F6QK70Zn5OSFWHcI3DDCaMxW7RsVVMpcSCrVwqrLlEhRNV&X-Amz-Signature=ffc61ada70289ae4ae13032fdf0d9829e57e89af4793074507d2f2de1d420bdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

