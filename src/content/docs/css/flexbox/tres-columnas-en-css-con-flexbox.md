---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AQCPMJK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T153014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5A4cwAXyeZi3buOXBZdVJgrYxiNWIqUUp%2Bq4wPtHKCAIge70F8kCphBfySh8srFSLAvs%2F8fSLvcUdEroQuRpKyAAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDI1ks%2BBYoHG611i%2BUCrcA%2Fnau%2FKzqi%2BI75MwLpcVYcicTEZbtcTXULVa6XUUJCYX2i%2B2olOW9WJk7FfIxmBDohzS6VjVcLSt0%2BsJ%2F0ti3kd8%2FF4Fivrd0q5Xo4TVaI0VIuaGqJEHaYL3sE%2FLwDH8JRB%2BTKkU%2Bg3X6wIKy7qKeZ9YrFYmBgJn85b21veol1bolthJz9oBaXaXXcPG2erXQOGhOpqbWTxWxeEkAD%2FX4Y5r2BZ67FVhGhzDFtJz3FpJ5bHGK2qRU86nXeIWTcRBySkYb2adxqAhcRJIBA8MMkOH%2FzRjh64zYCqH4%2F7bH%2Fis3AtYNEGe0RLEmLs%2B46GWOBsaN7zTjLkAuOunt5a2yMKU6FJvZQ7dHWnlzeJQOQJWbipg6dgpGDcVjpYsBV%2BI40su05aY7rwYmLnusxvtnrk%2FZPy%2FprNnpN0vUcHJlNbXvo7VA5w7HfCe%2BgatYzp5KoQaMnP%2BLraXuiJqqfFnUNaxU9cexkwak4LGw43vzFpaikZJa93nwxuxHJBlKiT5YtBwcc9xweKcIZM5dNjc7MA7%2BLxQtGTn1OpGV24aCRcdV%2FWl78EuQVGZGmYIa9XjaaUo9lw%2BGKzjmhVKAEVSxXkRC5wP%2F0lFcnBVkJ6lJUTcLjwZNADyWgdTQA8KMMWm0MkGOqUBvV4J%2FXlYh%2FVP1fo416Jc4ViTJ%2FIyE0PlL5MIRZPWb7qCEi2KMNGJxjxrbsauQGN%2B7wArkKf1nNJRgbdEGHGxG3t14pofCL7lyruBZ9Zb5TSbhZQcSseK5TAqRCPbp8FvjsyP%2FBtnj9GfDOy%2FBZAFtLu4Y9Je4Ob148N0nw4D6UCuAoPWhlloFyne%2Bhv3EYPtK19NakFZzjswOduljLs52rLj0X7T&X-Amz-Signature=fefe23026a98f18104822528195e35b52a0872b7a85b34e91e42e4318e777814&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AQCPMJK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T153014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5A4cwAXyeZi3buOXBZdVJgrYxiNWIqUUp%2Bq4wPtHKCAIge70F8kCphBfySh8srFSLAvs%2F8fSLvcUdEroQuRpKyAAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDI1ks%2BBYoHG611i%2BUCrcA%2Fnau%2FKzqi%2BI75MwLpcVYcicTEZbtcTXULVa6XUUJCYX2i%2B2olOW9WJk7FfIxmBDohzS6VjVcLSt0%2BsJ%2F0ti3kd8%2FF4Fivrd0q5Xo4TVaI0VIuaGqJEHaYL3sE%2FLwDH8JRB%2BTKkU%2Bg3X6wIKy7qKeZ9YrFYmBgJn85b21veol1bolthJz9oBaXaXXcPG2erXQOGhOpqbWTxWxeEkAD%2FX4Y5r2BZ67FVhGhzDFtJz3FpJ5bHGK2qRU86nXeIWTcRBySkYb2adxqAhcRJIBA8MMkOH%2FzRjh64zYCqH4%2F7bH%2Fis3AtYNEGe0RLEmLs%2B46GWOBsaN7zTjLkAuOunt5a2yMKU6FJvZQ7dHWnlzeJQOQJWbipg6dgpGDcVjpYsBV%2BI40su05aY7rwYmLnusxvtnrk%2FZPy%2FprNnpN0vUcHJlNbXvo7VA5w7HfCe%2BgatYzp5KoQaMnP%2BLraXuiJqqfFnUNaxU9cexkwak4LGw43vzFpaikZJa93nwxuxHJBlKiT5YtBwcc9xweKcIZM5dNjc7MA7%2BLxQtGTn1OpGV24aCRcdV%2FWl78EuQVGZGmYIa9XjaaUo9lw%2BGKzjmhVKAEVSxXkRC5wP%2F0lFcnBVkJ6lJUTcLjwZNADyWgdTQA8KMMWm0MkGOqUBvV4J%2FXlYh%2FVP1fo416Jc4ViTJ%2FIyE0PlL5MIRZPWb7qCEi2KMNGJxjxrbsauQGN%2B7wArkKf1nNJRgbdEGHGxG3t14pofCL7lyruBZ9Zb5TSbhZQcSseK5TAqRCPbp8FvjsyP%2FBtnj9GfDOy%2FBZAFtLu4Y9Je4Ob148N0nw4D6UCuAoPWhlloFyne%2Bhv3EYPtK19NakFZzjswOduljLs52rLj0X7T&X-Amz-Signature=d9eeabdb487a42a2c9b69434ce17f18be5698c1f758fb45915ab3e640e8f3cde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

