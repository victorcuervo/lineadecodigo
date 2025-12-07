---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKXWBOSC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T181225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ6UXZKXuYE8C4YsTZW6OFoMxjwiKkPDNxOYYHjoZ%2F%2BQIgJnYTHLSUoKLe1gTr6lZOwybymK1sWTwfJRZGb12jjcEqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgCKozEzfKAT0gFpircA%2BO5cg%2BE%2FabZcsdSejqEZEiH2l8FFJMVADRjkQ9KqkIYE7Pl2M9znMmX0X%2FSfrno11YZN5wz7ArTmsABnZh7NkBkyO69D74IpKzV%2FRQQP6yy4KH9YIeXi9M3CBmM9GdgWwNwjDzDePc6ABktAgrc%2FXGpAOGw98Y6QjdbgVwWyei1om58XOiZNEGV0gRG0PCM%2BGeucsyBxEzoGhDM6ccDUfdaDbv9rwBMhB0qNFF6tJfadftVzF7SLTd%2FVVNwxcMCT4JWqnC0nKiIHVuRa%2BIjUf7I%2Ffxe0uYh3tvaCAL8Bq0aD3NK7LZR%2FZ%2FWifpwcDb%2FmwKzKZsbTvUCtKl5YT%2BZWjwxYBHRV7qAR7QITCABmPZyv%2B8KXpv0J3S0XMH21VWwj9THIggqn8w9LG%2FANEIu38E0xYrrVMxxl6FBs9G0Hl48p%2FN7uB8hXqtcknTnVJYEy9b2022Q0QjGiGmCmkIH0EpCrgUtgnkzF%2FJGCovjy3utTHEgwI55MYdCd3ZZUfMaL%2BVWJpynbyAPjs9F0udDY3hCUVWIebX7BuupRwlsf5IjeKz5m5zjfYoz9ri7YSv9n2k1ClsHFvOmD5racfLEUwU5RBoThWcjFSNFfvgg0ns%2FDW0OtTxrX4njs7YNMNHA1skGOqUBM5tjcSflkCzNjm%2FLlDVdv%2B18vphxEkZhfzyLjDlV24wvkmpWjYrTUm7AV8v5w90UWEjHfDOzWHDded3y3ziMrzUo5PJgosECyJpOVVFzq1JjqVSm%2B%2BQFD3EndUE2ICbn9Zw538sR6vZrLmWEEgPDcwr9sgHyEANZbkdFeLOpo95p%2FCb1ES6w3a6Bf57xQo63P163UaP3IGRKF1L%2FrDYmQGbGiNEY&X-Amz-Signature=44ad7319b6495bd430b1c995044095ad6bfbdd67fe350c6c1ff3a9fa22805050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKXWBOSC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T181225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ6UXZKXuYE8C4YsTZW6OFoMxjwiKkPDNxOYYHjoZ%2F%2BQIgJnYTHLSUoKLe1gTr6lZOwybymK1sWTwfJRZGb12jjcEqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgCKozEzfKAT0gFpircA%2BO5cg%2BE%2FabZcsdSejqEZEiH2l8FFJMVADRjkQ9KqkIYE7Pl2M9znMmX0X%2FSfrno11YZN5wz7ArTmsABnZh7NkBkyO69D74IpKzV%2FRQQP6yy4KH9YIeXi9M3CBmM9GdgWwNwjDzDePc6ABktAgrc%2FXGpAOGw98Y6QjdbgVwWyei1om58XOiZNEGV0gRG0PCM%2BGeucsyBxEzoGhDM6ccDUfdaDbv9rwBMhB0qNFF6tJfadftVzF7SLTd%2FVVNwxcMCT4JWqnC0nKiIHVuRa%2BIjUf7I%2Ffxe0uYh3tvaCAL8Bq0aD3NK7LZR%2FZ%2FWifpwcDb%2FmwKzKZsbTvUCtKl5YT%2BZWjwxYBHRV7qAR7QITCABmPZyv%2B8KXpv0J3S0XMH21VWwj9THIggqn8w9LG%2FANEIu38E0xYrrVMxxl6FBs9G0Hl48p%2FN7uB8hXqtcknTnVJYEy9b2022Q0QjGiGmCmkIH0EpCrgUtgnkzF%2FJGCovjy3utTHEgwI55MYdCd3ZZUfMaL%2BVWJpynbyAPjs9F0udDY3hCUVWIebX7BuupRwlsf5IjeKz5m5zjfYoz9ri7YSv9n2k1ClsHFvOmD5racfLEUwU5RBoThWcjFSNFfvgg0ns%2FDW0OtTxrX4njs7YNMNHA1skGOqUBM5tjcSflkCzNjm%2FLlDVdv%2B18vphxEkZhfzyLjDlV24wvkmpWjYrTUm7AV8v5w90UWEjHfDOzWHDded3y3ziMrzUo5PJgosECyJpOVVFzq1JjqVSm%2B%2BQFD3EndUE2ICbn9Zw538sR6vZrLmWEEgPDcwr9sgHyEANZbkdFeLOpo95p%2FCb1ES6w3a6Bf57xQo63P163UaP3IGRKF1L%2FrDYmQGbGiNEY&X-Amz-Signature=799115fceb8dfba7a77ddbcd25986e5a8efde0bd883b9f0ce20882c283f1fb63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

