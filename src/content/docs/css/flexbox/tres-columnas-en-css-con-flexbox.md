---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632RZR7IM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIA0mWDwdll7q23PbWnqKS8a4zEXm0KFuUhDStNTrpx%2BhAiBAFLR4dyLDeUt4GuOooRIdpO4aUWfFQqcNWyIy3uIblir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMAF0kdEM2POcSsP40KtwDeq%2BlUL0R9KFeQuNYQSJ1JjvhNqr%2BIc8iWh76fy9oLSdoSdIxXELnVx7m1WFNEoWCzJBJmRJyciIlNRkfU42nZNX3%2ByPUzfEKCZ2JzEm52MaG80pfWOgF0EuQdkthzmHLpRG%2B0j7I20cLU7huL%2BhuWJ45jmhDTiipqhmygV%2BkhZviRxhKrAgRKkH%2B33cDLAxDy79i5yu%2BA7Akb%2FHn%2FQQDa5PrZve%2FilR%2FD4S7zidkSsFR%2BcLyyUf6XApJPZrNM4P%2Bcu9ZrtaLIj9XnnmMM5H00IB4ilISeRFbCDCYsb4Ba3GhhK0gJH96pc262dLgxG4BGMpWRQ3P0P3FO8LL18hBNKcRj3ftzsI9e7QdT72uukM%2FRRjiYq6tAzcoixgkzBnCEun1cuOwhuHrqTrfDGdumCiRaPO6KZETvysyqAy0uraK%2Bh01QR0TLly1psKKsPOUIlvn6RYKgZsAtQMvtE%2FzA9knXnpp0hPIN2OEKd1RzWNZpqWINPv3NN6YNDgGZWKA2bAz5n3vfI4xqnbTsRlqp5unmfWwwIAWqu6CocUlhDmAfBjSyg6sjgLJ0FiPxZmV%2Fb00KmvN0Dz%2Fq%2B8SyNHygGfmzD8xvYh6aJuN0M1p3nxf3Cu7YyC1hhj0wBQw99TDyQY6pgHYdsHlfrem4SC%2FW9D%2FPkgrNpxc3RAYf%2BcINVRCmybegrVSA58xQXNr1ysRVQEdYJ5Xq4iS7fR8VQWjSqa%2BWHK7%2BB8SyTTMaEE7MioHMmXewLBOWGpvUVWPWBIj8v7cQhjf6lX51uVXx63p7yvLYxGsy7ZQL8lqBzq5Df0Yf9YTbaVgvVFNi7bNwYVtxxYjmnOwHUNQCCYEF3lsUn3g%2BnGO7LtWZRk1&X-Amz-Signature=a40c3401838cb3c49a30cf5da128120fdb397d55a363a35c9a9f4af6bf9373d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632RZR7IM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIA0mWDwdll7q23PbWnqKS8a4zEXm0KFuUhDStNTrpx%2BhAiBAFLR4dyLDeUt4GuOooRIdpO4aUWfFQqcNWyIy3uIblir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMAF0kdEM2POcSsP40KtwDeq%2BlUL0R9KFeQuNYQSJ1JjvhNqr%2BIc8iWh76fy9oLSdoSdIxXELnVx7m1WFNEoWCzJBJmRJyciIlNRkfU42nZNX3%2ByPUzfEKCZ2JzEm52MaG80pfWOgF0EuQdkthzmHLpRG%2B0j7I20cLU7huL%2BhuWJ45jmhDTiipqhmygV%2BkhZviRxhKrAgRKkH%2B33cDLAxDy79i5yu%2BA7Akb%2FHn%2FQQDa5PrZve%2FilR%2FD4S7zidkSsFR%2BcLyyUf6XApJPZrNM4P%2Bcu9ZrtaLIj9XnnmMM5H00IB4ilISeRFbCDCYsb4Ba3GhhK0gJH96pc262dLgxG4BGMpWRQ3P0P3FO8LL18hBNKcRj3ftzsI9e7QdT72uukM%2FRRjiYq6tAzcoixgkzBnCEun1cuOwhuHrqTrfDGdumCiRaPO6KZETvysyqAy0uraK%2Bh01QR0TLly1psKKsPOUIlvn6RYKgZsAtQMvtE%2FzA9knXnpp0hPIN2OEKd1RzWNZpqWINPv3NN6YNDgGZWKA2bAz5n3vfI4xqnbTsRlqp5unmfWwwIAWqu6CocUlhDmAfBjSyg6sjgLJ0FiPxZmV%2Fb00KmvN0Dz%2Fq%2B8SyNHygGfmzD8xvYh6aJuN0M1p3nxf3Cu7YyC1hhj0wBQw99TDyQY6pgHYdsHlfrem4SC%2FW9D%2FPkgrNpxc3RAYf%2BcINVRCmybegrVSA58xQXNr1ysRVQEdYJ5Xq4iS7fR8VQWjSqa%2BWHK7%2BB8SyTTMaEE7MioHMmXewLBOWGpvUVWPWBIj8v7cQhjf6lX51uVXx63p7yvLYxGsy7ZQL8lqBzq5Df0Yf9YTbaVgvVFNi7bNwYVtxxYjmnOwHUNQCCYEF3lsUn3g%2BnGO7LtWZRk1&X-Amz-Signature=3777320ee74d441797d0445a758f4256bd65e0ae93c9da4e609b94992027c90a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

