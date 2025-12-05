---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BR4Y73X%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T122757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDt%2BKJIoqJDFWLA6JY0oVT%2Fs3IX6fgJNe9zZv5anI5iCAiEApdjJtsQJyonopWFZ6f%2FspcUweilgUKYMHDlTSeXOiN4q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOnItPZw7Cd3wRNtKircAzFpYrhpWGK2lzdyzLQOkfkRs0nSHT3oyytk1iH5gIJqs8oKn447CkVwr5fUXQBz%2BqJoUjpAbGX%2FX4VYvp6KsPMzez41jFDbx7r7pdb9DXDKGmunLR0LOlRPWx6UhqvPinHG4wj86cEH%2BUKLu1CtB2dwMV%2FOZ%2FHeXIQ3BBcsAudU3pylnYGjz4z00o8igZSn8sfOoNEAf%2B6azjqk7fqWtvGmskbyitSUjmjZ9hcwue%2B%2ByQr57xJqyGSho0LLGoXj3%2F8qLlK1Uuru%2FUH%2Fpy8yyvatxwcWNjDKlRXeNbkijOKR9cC2qe%2FYHYgx31Mfgtim6DkR6auNGmfTFj%2FDbqAAZUF9sFnYhrKWXSe90DAV%2FTLpP%2B0xTYWKmkME73q7UspLIS7hXi3LUDaPNkNEE%2B%2Ff9q71Ytf%2FWwZgj4%2FFw1LC4h7h77X4ObfQxOq0RyDDL0O9c7WUcgzlevPkwGX1ZvKUc1uZ%2BkNEUD2lLTr4GRH3s1lLwSHCHBCiChVhVK%2FGhs94HEY%2BAo3JMt7e%2F8K3Wg1mLpZWH0lE2iC63WQKU2TJxAnkT1jL4wrzMGI7bQflYrK3BS4icDCkxY6VWt%2Fz8W6jaUQTHyp6%2B0vYO308M%2BscR%2FQQwaboz8FscEhxuaXmMPPMyskGOqUBGhOW0Nt0ZZ7DJuASuOQCJR8J68QFu2lCm1ikh8OuCItMzpAzGwh9KmjY%2BM7NSi%2B86A0Hslr7wlHa2t5PjjpYOQLEdQLAKlSn0AelXu2h5U6dyHXUVL8pZcX6IZWMSuqYMQ3EW6qNLjY6kLmd85tio12YmmTB5kUcj8VH%2BoHUkVB8h8sxEILtGmWLcUflqwkvg0XfnLNFZ7GSgbPFMZFUWICyf5z2&X-Amz-Signature=a484e677c7b1ee2b84b85b1fca276a72c032e27ffe36c8dde98525167385919b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BR4Y73X%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T122757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDt%2BKJIoqJDFWLA6JY0oVT%2Fs3IX6fgJNe9zZv5anI5iCAiEApdjJtsQJyonopWFZ6f%2FspcUweilgUKYMHDlTSeXOiN4q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOnItPZw7Cd3wRNtKircAzFpYrhpWGK2lzdyzLQOkfkRs0nSHT3oyytk1iH5gIJqs8oKn447CkVwr5fUXQBz%2BqJoUjpAbGX%2FX4VYvp6KsPMzez41jFDbx7r7pdb9DXDKGmunLR0LOlRPWx6UhqvPinHG4wj86cEH%2BUKLu1CtB2dwMV%2FOZ%2FHeXIQ3BBcsAudU3pylnYGjz4z00o8igZSn8sfOoNEAf%2B6azjqk7fqWtvGmskbyitSUjmjZ9hcwue%2B%2ByQr57xJqyGSho0LLGoXj3%2F8qLlK1Uuru%2FUH%2Fpy8yyvatxwcWNjDKlRXeNbkijOKR9cC2qe%2FYHYgx31Mfgtim6DkR6auNGmfTFj%2FDbqAAZUF9sFnYhrKWXSe90DAV%2FTLpP%2B0xTYWKmkME73q7UspLIS7hXi3LUDaPNkNEE%2B%2Ff9q71Ytf%2FWwZgj4%2FFw1LC4h7h77X4ObfQxOq0RyDDL0O9c7WUcgzlevPkwGX1ZvKUc1uZ%2BkNEUD2lLTr4GRH3s1lLwSHCHBCiChVhVK%2FGhs94HEY%2BAo3JMt7e%2F8K3Wg1mLpZWH0lE2iC63WQKU2TJxAnkT1jL4wrzMGI7bQflYrK3BS4icDCkxY6VWt%2Fz8W6jaUQTHyp6%2B0vYO308M%2BscR%2FQQwaboz8FscEhxuaXmMPPMyskGOqUBGhOW0Nt0ZZ7DJuASuOQCJR8J68QFu2lCm1ikh8OuCItMzpAzGwh9KmjY%2BM7NSi%2B86A0Hslr7wlHa2t5PjjpYOQLEdQLAKlSn0AelXu2h5U6dyHXUVL8pZcX6IZWMSuqYMQ3EW6qNLjY6kLmd85tio12YmmTB5kUcj8VH%2BoHUkVB8h8sxEILtGmWLcUflqwkvg0XfnLNFZ7GSgbPFMZFUWICyf5z2&X-Amz-Signature=a966359de56b5257ba3d6115ff537a0c21cab54b9e5d66201fa7e8680cc5c611&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

