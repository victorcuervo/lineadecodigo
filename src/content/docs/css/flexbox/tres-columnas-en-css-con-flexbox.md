---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQZP2CGB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T214656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJI9Vtr2BkNUfHjWOFCq%2BlW3ei9kkle7DRUmrBNR1vPAIhAMnmaWnUGoh2vuV2v%2FpDIe8LeqW19G%2BLgx9Sr9JSBBYhKv8DCHoQABoMNjM3NDIzMTgzODA1IgyvjZoRwEaPoK3VslEq3AMsp8fMzL0juJqGWNIHX2dMAJEY1YL24IVpI4pYHx4DJ%2B2p3zD8%2FB6%2BeV0Xnt1HM3LP5AQhGPigrgjScdgohwTeyko%2FK1IQA8HkFIlpRy1iEunZ%2BwnfieTsAGjbNW7aZHM88%2FrFDFW%2FaFfgTff1TVAbHzIdtHCBL9VyeWswNpBMTo%2BfZypgB9jwNznYjVx8RbopMctz3WmFGYA5Lvwz7TKEw9YCvS%2FmJ1ih0EFBYV9EF65BWXJ3HJHUGue%2F1StM6FK6g8V3a31ZBqyioMB8zLrw5%2FhFjz93Ygpbpb4dHX9%2FbQeHwzj9um7cx7B%2FgAVvRFuvzLZjAxveZZWBhyThzkAMxi0qlfemRUx2ay%2Bge9JRsSQPNfh5LNHWKP8Jswt6pZN1dvw2uvWZ%2B6pOAhKhJFUQPLtGn0QbcwjD%2FJBaT1d2BDNkniWmK%2FHjAYY7IUVqMx33bF9kArc0J1xCEzBGHRm5kIwzjRL4xPNxxalDbAnkyD6Zaqd%2BS41l5eyWWAUmHPP%2BHLNw9ekfiWkk%2BFVWzxjxOeLGGnT1NBDCcM5S5y9Yvf%2Bmg8gb22PMkD7Hjrbs0IYVqoLwvqNMBBv71mv6nL%2Fx8QDlV3A5t4osfW66M4ZwYWzW4iBjKrgrEeq12jCSy9HJBjqkAe%2Bgl83D9i%2B4e5sPxbqpBHONeacxuaMMxZ2PwouaOaCR3qqTs%2FveeJHYNYgJj59qLjNXpJqQ%2BLD8XVHEo%2Fy3NRctnoerK%2FqoMmY176Y0zh4ql4Nr6Yf3qKwvn50XZMVE%2FJWy95FLaZ23L4oPbqLkgVM9VOI2JWd9A48HGXo%2BZ2JOKXhCnpuZpVJ5WtPsI0%2FYETntPXhnv3Xr%2BsQwBO2U5wP81oi9&X-Amz-Signature=98bd7a8363811d8fb735b5efa66749f70c596ead4d79b5f2ea490814ea0a1971&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQZP2CGB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T214656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJI9Vtr2BkNUfHjWOFCq%2BlW3ei9kkle7DRUmrBNR1vPAIhAMnmaWnUGoh2vuV2v%2FpDIe8LeqW19G%2BLgx9Sr9JSBBYhKv8DCHoQABoMNjM3NDIzMTgzODA1IgyvjZoRwEaPoK3VslEq3AMsp8fMzL0juJqGWNIHX2dMAJEY1YL24IVpI4pYHx4DJ%2B2p3zD8%2FB6%2BeV0Xnt1HM3LP5AQhGPigrgjScdgohwTeyko%2FK1IQA8HkFIlpRy1iEunZ%2BwnfieTsAGjbNW7aZHM88%2FrFDFW%2FaFfgTff1TVAbHzIdtHCBL9VyeWswNpBMTo%2BfZypgB9jwNznYjVx8RbopMctz3WmFGYA5Lvwz7TKEw9YCvS%2FmJ1ih0EFBYV9EF65BWXJ3HJHUGue%2F1StM6FK6g8V3a31ZBqyioMB8zLrw5%2FhFjz93Ygpbpb4dHX9%2FbQeHwzj9um7cx7B%2FgAVvRFuvzLZjAxveZZWBhyThzkAMxi0qlfemRUx2ay%2Bge9JRsSQPNfh5LNHWKP8Jswt6pZN1dvw2uvWZ%2B6pOAhKhJFUQPLtGn0QbcwjD%2FJBaT1d2BDNkniWmK%2FHjAYY7IUVqMx33bF9kArc0J1xCEzBGHRm5kIwzjRL4xPNxxalDbAnkyD6Zaqd%2BS41l5eyWWAUmHPP%2BHLNw9ekfiWkk%2BFVWzxjxOeLGGnT1NBDCcM5S5y9Yvf%2Bmg8gb22PMkD7Hjrbs0IYVqoLwvqNMBBv71mv6nL%2Fx8QDlV3A5t4osfW66M4ZwYWzW4iBjKrgrEeq12jCSy9HJBjqkAe%2Bgl83D9i%2B4e5sPxbqpBHONeacxuaMMxZ2PwouaOaCR3qqTs%2FveeJHYNYgJj59qLjNXpJqQ%2BLD8XVHEo%2Fy3NRctnoerK%2FqoMmY176Y0zh4ql4Nr6Yf3qKwvn50XZMVE%2FJWy95FLaZ23L4oPbqLkgVM9VOI2JWd9A48HGXo%2BZ2JOKXhCnpuZpVJ5WtPsI0%2FYETntPXhnv3Xr%2BsQwBO2U5wP81oi9&X-Amz-Signature=989e4157cefbfbe0a61dbc7299d86ea5089561ef616c8e16076b23b7549d60e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

