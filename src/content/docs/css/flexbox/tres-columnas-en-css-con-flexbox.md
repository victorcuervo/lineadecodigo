---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZSK76VY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoR%2FEm2NwlMSi5jZxNaHdebsKV7OUw6TlUFtUZzBywYAIhAL9tQBpiMSnvyA6i2FeisOeTuqEG9wNhj2Ecl0aS60OSKv8DCGwQABoMNjM3NDIzMTgzODA1IgyhcN7gL6nLH9oXoBIq3AMARjKKXqnEQuxvSZfs3nfPT9HS9a%2BYwDQDSeDhYeDrJRVg43TrYy1nkGV1f6qDiQNCWcAN7qhGCcH5oFSpTFJgZjxJjkjE6b3FjRTI8hQonTFpCxBm9OG4uXvaW1A3J5oy0Vn1BP9FSuhdV4m27kii4JADJdXFYYSF8IDTnF2oRHWEGDIb9ExZqQ%2B9T8w3NS4myQqf048jkQtI6nekJKmYHyRSdbw2Jo1p07pSBc8hW9FC9yxuLxfzUDK5iApap%2FOTc3feLmFur8WPGpjiUxCEhGE71J%2B3VpvnXRKhHqfNu7Q7%2BLEfrhZ6htJCVvv7oIzIO9cHkn%2BSHrZ1uAqsOcmvYga7AJWbF02cVgF1%2Bpd8JI3huti27l5OuFW%2Ba9B98voUmTjVHhG%2FeypilIwxRNL9SKoWA4qRISh%2FfLbs4fR2jwRqq8tVp%2BWKHt4WcEniEQIPWFLR3qw6DuCYrJ4hNBjB6lqWiyq4CHjGtDr6YXAPajLiBBEwe%2BRMoD0PEzeX%2F%2Bf4eFiQ%2BrQX7cH0Zc%2B7thbk1N5zKgxEQkGVq9tkKLIeIVOhVL45GmeErmb6W2TO%2Bgb7hiiXTYYEyW4DQkJxAvMdxGufidLeCNN5eaaweKK59zt6QM3x0M%2Bv714KtjCyp87JBjqkAfaKHj1ByWcSB9Y54Nx4cqv2I24RGQj6bIzdZKb8S5FXWeEj%2BXYNI7eGIEhwtpm5Gh7UR1KAM4vXUUe%2F2tYS2N95%2FX%2BL7HwW6ORznLpke6UtDF5PB9lzQzzjd3cNF19qhpOoXqjHTmMa168RK8%2FLoSmYFjK8B2El6Brdm4ZgN5ge1BdA5lg9YhA%2B3c%2BD1brjoQ1MiIIPechvJ5EY9XHCaBRgAmPM&X-Amz-Signature=93e0b50ab9e63d6bfbcc3694024f8656c46cca3c1f81cf910ce88780d2d6a55e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZSK76VY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoR%2FEm2NwlMSi5jZxNaHdebsKV7OUw6TlUFtUZzBywYAIhAL9tQBpiMSnvyA6i2FeisOeTuqEG9wNhj2Ecl0aS60OSKv8DCGwQABoMNjM3NDIzMTgzODA1IgyhcN7gL6nLH9oXoBIq3AMARjKKXqnEQuxvSZfs3nfPT9HS9a%2BYwDQDSeDhYeDrJRVg43TrYy1nkGV1f6qDiQNCWcAN7qhGCcH5oFSpTFJgZjxJjkjE6b3FjRTI8hQonTFpCxBm9OG4uXvaW1A3J5oy0Vn1BP9FSuhdV4m27kii4JADJdXFYYSF8IDTnF2oRHWEGDIb9ExZqQ%2B9T8w3NS4myQqf048jkQtI6nekJKmYHyRSdbw2Jo1p07pSBc8hW9FC9yxuLxfzUDK5iApap%2FOTc3feLmFur8WPGpjiUxCEhGE71J%2B3VpvnXRKhHqfNu7Q7%2BLEfrhZ6htJCVvv7oIzIO9cHkn%2BSHrZ1uAqsOcmvYga7AJWbF02cVgF1%2Bpd8JI3huti27l5OuFW%2Ba9B98voUmTjVHhG%2FeypilIwxRNL9SKoWA4qRISh%2FfLbs4fR2jwRqq8tVp%2BWKHt4WcEniEQIPWFLR3qw6DuCYrJ4hNBjB6lqWiyq4CHjGtDr6YXAPajLiBBEwe%2BRMoD0PEzeX%2F%2Bf4eFiQ%2BrQX7cH0Zc%2B7thbk1N5zKgxEQkGVq9tkKLIeIVOhVL45GmeErmb6W2TO%2Bgb7hiiXTYYEyW4DQkJxAvMdxGufidLeCNN5eaaweKK59zt6QM3x0M%2Bv714KtjCyp87JBjqkAfaKHj1ByWcSB9Y54Nx4cqv2I24RGQj6bIzdZKb8S5FXWeEj%2BXYNI7eGIEhwtpm5Gh7UR1KAM4vXUUe%2F2tYS2N95%2FX%2BL7HwW6ORznLpke6UtDF5PB9lzQzzjd3cNF19qhpOoXqjHTmMa168RK8%2FLoSmYFjK8B2El6Brdm4ZgN5ge1BdA5lg9YhA%2B3c%2BD1brjoQ1MiIIPechvJ5EY9XHCaBRgAmPM&X-Amz-Signature=08cc083d70e0a84caf3118ad83167b51b5520f7f860f52d99605615868ade30f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

