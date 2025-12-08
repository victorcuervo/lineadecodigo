---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIMAQUSR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T082255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb%2FjoDmJI7ojpu2nvA%2FacXrb95jKtZTa5FVMxeRfmxuAIhAIo9oETND%2F5tI1I5OUajNUudUUXw8Z%2Bjd%2FElAL3sXXd1KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP84KthxQv9iFFZsQq3APG7%2FON8XdQpG9TuJtqPnf4wSGDM6dRNpZu8Mz9sAuVZ6AZt8Ard1XXxOXR5XXk2VyFcu3Bj%2BmGpo0jMb3ayYTtxI82g%2BiBWPW038y9vstIXPKcdqwcvsWnjgCkwvX67%2FwUBh9RStJobTqiNik9Tf9VKCj9RqFiIJa%2BkTdRQkWM7y%2BaplUSpBIOmwepXyVqRIHvNUjSP3hZnXEVpQvVYTdjkjc3yFC0IIZJcICM7lh8grQPCPEa6PcjfWtchWnhd1WVy%2Ft0uT3iB49j3B76TcAvoY%2F3E53Q9gAGEevsSlRlwxch5iQNzoEacHcySIFqVcFyr58%2FANyRIgcgIptdWR%2FvvLVvqyoUIsiHFGX%2FEbGHNjsKvdn2eb5l8ZIJXBLuKWFsQybkW5f9yClTwILy3FG8GVTMe8VZCEvV1DmAs66rhGUY80xDjm9UE3uasOdOv4qKBMnpye5a%2B3aLlROZI%2BAldLr9IUSAHPcxXVx2pLb6hovPW1sCtUDxOiFL%2FY3rqqa%2FpYs2q4JAN6j8q36mpoxO4E3iXjvjlF%2B6UUj67eYaNZe4zggyvX90jWDLKhto%2FYSsW4QhZVs5LxRNNlCOLKiE8guN%2B5TNjD32HG1ELdJJp3uDf%2BN7e2LY6QtcZTCT7tnJBjqkATGKjETKSUxPgJw0jwIniAo7MUxBu%2B1sW8X6Vrgx8NxlYXuyZcgm3lAwppucZWjm7rlCkp5zs46YBANcmt8OwBjeZI0R%2B%2FtJaUgAPpO3emRf%2FbJZscGFCzXfYdI%2BdeHaIVflOs%2FDmoXwgQ47vhrfgY25eujexaKIkl3KdgQ%2FGHSe5eBVlNcX0icmGJQ0jBkQYsnhpf0yjSzdC5D1jcvluxp7xVDl&X-Amz-Signature=9a3d94fec6ebf15c71649c634fc7be4b0446cb043e78cff5b6afc157350e7dc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIMAQUSR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T082255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb%2FjoDmJI7ojpu2nvA%2FacXrb95jKtZTa5FVMxeRfmxuAIhAIo9oETND%2F5tI1I5OUajNUudUUXw8Z%2Bjd%2FElAL3sXXd1KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP84KthxQv9iFFZsQq3APG7%2FON8XdQpG9TuJtqPnf4wSGDM6dRNpZu8Mz9sAuVZ6AZt8Ard1XXxOXR5XXk2VyFcu3Bj%2BmGpo0jMb3ayYTtxI82g%2BiBWPW038y9vstIXPKcdqwcvsWnjgCkwvX67%2FwUBh9RStJobTqiNik9Tf9VKCj9RqFiIJa%2BkTdRQkWM7y%2BaplUSpBIOmwepXyVqRIHvNUjSP3hZnXEVpQvVYTdjkjc3yFC0IIZJcICM7lh8grQPCPEa6PcjfWtchWnhd1WVy%2Ft0uT3iB49j3B76TcAvoY%2F3E53Q9gAGEevsSlRlwxch5iQNzoEacHcySIFqVcFyr58%2FANyRIgcgIptdWR%2FvvLVvqyoUIsiHFGX%2FEbGHNjsKvdn2eb5l8ZIJXBLuKWFsQybkW5f9yClTwILy3FG8GVTMe8VZCEvV1DmAs66rhGUY80xDjm9UE3uasOdOv4qKBMnpye5a%2B3aLlROZI%2BAldLr9IUSAHPcxXVx2pLb6hovPW1sCtUDxOiFL%2FY3rqqa%2FpYs2q4JAN6j8q36mpoxO4E3iXjvjlF%2B6UUj67eYaNZe4zggyvX90jWDLKhto%2FYSsW4QhZVs5LxRNNlCOLKiE8guN%2B5TNjD32HG1ELdJJp3uDf%2BN7e2LY6QtcZTCT7tnJBjqkATGKjETKSUxPgJw0jwIniAo7MUxBu%2B1sW8X6Vrgx8NxlYXuyZcgm3lAwppucZWjm7rlCkp5zs46YBANcmt8OwBjeZI0R%2B%2FtJaUgAPpO3emRf%2FbJZscGFCzXfYdI%2BdeHaIVflOs%2FDmoXwgQ47vhrfgY25eujexaKIkl3KdgQ%2FGHSe5eBVlNcX0icmGJQ0jBkQYsnhpf0yjSzdC5D1jcvluxp7xVDl&X-Amz-Signature=b91bdad822cf96ef4793b69a6197f95e169abacde0f421f093af291953128b97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

