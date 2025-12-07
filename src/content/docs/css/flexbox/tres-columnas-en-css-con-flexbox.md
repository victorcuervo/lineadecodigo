---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FPIGH7M%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T090736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFj4YGgaZp7jvBpGSgbuPS8I%2FCoAfwo3xzP%2BBhg%2FjrwKAiAZRmAGbDwM9c%2BkyB%2Bl9c77%2B3mN0TXn11bn%2FYWeMW1%2FpCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJDejQAdbRACs7G3YKtwD%2B6zI42wbxyQ4PFf255zkTQ9WPRCnhILfGUOtIaEMl6ZVS4XXPA%2FY1Qj1BuJDTteLXs9Oq2n7SF1HYGCtgGwt9kvJtdvE3SPAWXzN8r2hw0WEhXf7gtEkHxqOWDgr4vPN6eZ32THQ2p4kee3UNpAwFYVlhHCANgZ0R7sETWzDcg7vI5gDASdoAaHo5aIkJsbCXzLnbs93%2BP8vco%2BK7ZjvYBTltsQP7V0TxZBE0NKYMFU72D%2FMQILkD89mkZg4HlLuqBt%2BwrPscKN1J8gdDVCXs5%2BQvap31ksnDuSbXiQZXPSYxY9YmOC5qRZAnmcri9Tk%2B9YoeUexR7D6nX%2BDP3qpw%2F5tQ4KtXw2ae41tZf4mR%2B%2B3JhqOG1ZaxVl4D4URoFtGRlB3tHZoP6JO60dMBZkMN9UlCRioJIYUL5G%2BsBSsxAruiyyCQmGJRO2RPSPU9dyzUTGt6zLLQ%2FA%2B3qYpBktA6EAyFXyCKaDMStcnBgGEvuMPyYuH7p4KhVgrbsQ2ae9OhGF0kxiZOY73HgUyKfNYcqoaRdI4lbJxHwgr07XLIxpyZjhtMFSKJcgdSfc%2FRTEEmlzUkR0I2PQEZfsCdRHAyONPz3WiFRdqqNL8b8GslLjGiRLhfuguOTNQqJQwpaLUyQY6pgGkdDe2eBG%2Bx7BB9Dj2KYZpGtbOzGhvZULqXrCsZtI7sPmoClFB%2F8X5yBWxOnpD4VAqBiK97DhucdCaGYty7rrO8G6I4eWdBOIExdQHjdjD5kRYAfys0QlWTmj1%2Bxy7cNjUNtKQsKR6CyTyA72m1Ypfp1Zy1av3BY6Ua5SybW3jOpEykoiVIvg5CcKj2n27onvjSPcXzpV1JrLjWmtRMW7FKWlzd9eB&X-Amz-Signature=20ea9115c7e097e80025427c030ce99a9c8403b5e6054fffcc72cdbc825a8306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FPIGH7M%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T090736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFj4YGgaZp7jvBpGSgbuPS8I%2FCoAfwo3xzP%2BBhg%2FjrwKAiAZRmAGbDwM9c%2BkyB%2Bl9c77%2B3mN0TXn11bn%2FYWeMW1%2FpCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJDejQAdbRACs7G3YKtwD%2B6zI42wbxyQ4PFf255zkTQ9WPRCnhILfGUOtIaEMl6ZVS4XXPA%2FY1Qj1BuJDTteLXs9Oq2n7SF1HYGCtgGwt9kvJtdvE3SPAWXzN8r2hw0WEhXf7gtEkHxqOWDgr4vPN6eZ32THQ2p4kee3UNpAwFYVlhHCANgZ0R7sETWzDcg7vI5gDASdoAaHo5aIkJsbCXzLnbs93%2BP8vco%2BK7ZjvYBTltsQP7V0TxZBE0NKYMFU72D%2FMQILkD89mkZg4HlLuqBt%2BwrPscKN1J8gdDVCXs5%2BQvap31ksnDuSbXiQZXPSYxY9YmOC5qRZAnmcri9Tk%2B9YoeUexR7D6nX%2BDP3qpw%2F5tQ4KtXw2ae41tZf4mR%2B%2B3JhqOG1ZaxVl4D4URoFtGRlB3tHZoP6JO60dMBZkMN9UlCRioJIYUL5G%2BsBSsxAruiyyCQmGJRO2RPSPU9dyzUTGt6zLLQ%2FA%2B3qYpBktA6EAyFXyCKaDMStcnBgGEvuMPyYuH7p4KhVgrbsQ2ae9OhGF0kxiZOY73HgUyKfNYcqoaRdI4lbJxHwgr07XLIxpyZjhtMFSKJcgdSfc%2FRTEEmlzUkR0I2PQEZfsCdRHAyONPz3WiFRdqqNL8b8GslLjGiRLhfuguOTNQqJQwpaLUyQY6pgGkdDe2eBG%2Bx7BB9Dj2KYZpGtbOzGhvZULqXrCsZtI7sPmoClFB%2F8X5yBWxOnpD4VAqBiK97DhucdCaGYty7rrO8G6I4eWdBOIExdQHjdjD5kRYAfys0QlWTmj1%2Bxy7cNjUNtKQsKR6CyTyA72m1Ypfp1Zy1av3BY6Ua5SybW3jOpEykoiVIvg5CcKj2n27onvjSPcXzpV1JrLjWmtRMW7FKWlzd9eB&X-Amz-Signature=ccb291a63501122b048bd13e0e9bee324943ff33e2c88ae7d1b18acd3c07c610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

