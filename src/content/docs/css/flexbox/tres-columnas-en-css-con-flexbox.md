---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XSZ65BM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDjXFWzB9UWbLtkCA4QKOqcb7UEWwQ4UpPaND%2BuxrdJ%2BwIhAKEgbURIlizwnFSt7CCqqqhacokzhBvYjNDrwSkSd23PKv8DCEYQABoMNjM3NDIzMTgzODA1IgxVFa4ZUp02X5MurCcq3AP%2BOjLxNnJ81jZhmGP8nmRW1UhH6bNE9Zlc0qR9GJPeMB9GVzZSJEv0F0e3ZZDD7UXYaDpRDZuE3z4PBrRalWxJz4o8rvdsqSuT0LzHhMsRbfA9CzLUoNxqYDVy7bCOhJb%2BK7m288Y543oJEjqiHEGwAyizEa%2BGqRBCqYS09OuczMQZgomms%2BIYSLg6VBR8Ww8vNAXZOwfyvpx%2F8VD6c%2Bp4CXVL5Jl5P8oZOZ3GsiDWdAt5Fd6jnK%2F11PjMV3RSB0BB5RWKf4RgCxhK80yWY1oONU%2FaeECEpmZMeqUf6Si1KTK4UUkw2VW23oXz2rDwOqCHx2JKn9XMg24xFeu2uUkxbDy9euUjY1OcNZzgryYaJKWPGyUvWE28YoApEhnX9eITNu8NqSvzCElJvzU9GFclja0CeIrF8Y%2Fk8UChM9pSUdscHfKjYBbxn2vVvRSiQdBYbW%2BC9YV7eia%2B8gQ488Hhdpm720jxhxRL897wn12t%2Bsu1YCgTvo%2B%2BcydodZWwy0WFfTfw9NWB7LXhKPFK9xZxfj9oPb2JgcZycqxq5dzLLpjwDCqmuW%2FHUQ%2F7C8lETmR%2BFk5znbx5hh415bfv4oGRvpOyZrXTGZ3ZZL0ffCZD%2BD3HTnyhi8agHSHotDCvg8bJBjqkAT5y2E2LcXOishOsrNexk%2Bo8ZHZtfpsLN3g3HtYP1vf1tqQ8YoPcm9TBj%2BNwSAj0lS38dYeERJBKhMM1c431hBr3TnViidFhkDCaq7LLT6uvpPCqPm7N1YjHSo3%2BFaMXgFN5Z7pHDdtCTDZWWnT9TK3YbErZSQ2zBXUp4%2B46AXdKHxRKKD483Wuwuw8a9Rj3qpTahQZEBTESN6arYuvBk7%2BaFOJB&X-Amz-Signature=9121bfd6d2b992aaad7232e929862339a880d3d769f5cdefdd9934a60da53622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XSZ65BM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDjXFWzB9UWbLtkCA4QKOqcb7UEWwQ4UpPaND%2BuxrdJ%2BwIhAKEgbURIlizwnFSt7CCqqqhacokzhBvYjNDrwSkSd23PKv8DCEYQABoMNjM3NDIzMTgzODA1IgxVFa4ZUp02X5MurCcq3AP%2BOjLxNnJ81jZhmGP8nmRW1UhH6bNE9Zlc0qR9GJPeMB9GVzZSJEv0F0e3ZZDD7UXYaDpRDZuE3z4PBrRalWxJz4o8rvdsqSuT0LzHhMsRbfA9CzLUoNxqYDVy7bCOhJb%2BK7m288Y543oJEjqiHEGwAyizEa%2BGqRBCqYS09OuczMQZgomms%2BIYSLg6VBR8Ww8vNAXZOwfyvpx%2F8VD6c%2Bp4CXVL5Jl5P8oZOZ3GsiDWdAt5Fd6jnK%2F11PjMV3RSB0BB5RWKf4RgCxhK80yWY1oONU%2FaeECEpmZMeqUf6Si1KTK4UUkw2VW23oXz2rDwOqCHx2JKn9XMg24xFeu2uUkxbDy9euUjY1OcNZzgryYaJKWPGyUvWE28YoApEhnX9eITNu8NqSvzCElJvzU9GFclja0CeIrF8Y%2Fk8UChM9pSUdscHfKjYBbxn2vVvRSiQdBYbW%2BC9YV7eia%2B8gQ488Hhdpm720jxhxRL897wn12t%2Bsu1YCgTvo%2B%2BcydodZWwy0WFfTfw9NWB7LXhKPFK9xZxfj9oPb2JgcZycqxq5dzLLpjwDCqmuW%2FHUQ%2F7C8lETmR%2BFk5znbx5hh415bfv4oGRvpOyZrXTGZ3ZZL0ffCZD%2BD3HTnyhi8agHSHotDCvg8bJBjqkAT5y2E2LcXOishOsrNexk%2Bo8ZHZtfpsLN3g3HtYP1vf1tqQ8YoPcm9TBj%2BNwSAj0lS38dYeERJBKhMM1c431hBr3TnViidFhkDCaq7LLT6uvpPCqPm7N1YjHSo3%2BFaMXgFN5Z7pHDdtCTDZWWnT9TK3YbErZSQ2zBXUp4%2B46AXdKHxRKKD483Wuwuw8a9Rj3qpTahQZEBTESN6arYuvBk7%2BaFOJB&X-Amz-Signature=55ff4ebb00b1b3329f3fcf62cd541a4a22ddeb1cc61c7043d787f67f37bdf2bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

