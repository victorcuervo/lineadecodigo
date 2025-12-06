---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQZFH7TL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2B7b51lFyxtLWpKDApi7XatUoikKBQ%2B7lLrdeUwp61qAiEAmISJtj85ha%2Bi1RT9URA5XYlztpdKAVJ0N5tc0SVqCL4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDO7T8uRWG3tApWlJISrcA6Sn1Is5l%2F34gITdSKxB3%2BRzh9XNMz6dnBQkICQAnMFn2pvvHJc8QKzMgLYlBzXgCF5x%2BztjobFG6Uet19zeTvm1nOKCalI5pkGfvAPDwlskHN5ATTnLvG4iswMUYwKDRXyK9L6ntLdSQHO%2FvdgwDlNnfjCXhXgIWGGPF9I8rIH3dKa4ULzbtjD5PcBjQw7eQvVhUnNrWjcYOIj9Yb%2FBZpO9K4PJebQi3kHouBRxpBhtxk6vBx7QSTDg1BwGWJNfVEBVFUu8qVq2J61B%2FUHXDX7MDqWWtSS7d2iAx%2BCv3iOeSQKC%2FkKRO0TiIZU3YY%2FYlJ80PCrh%2B9QVzs6jDkrmNc2%2BjFe7uIQPUpc9M0DzUSAC5cOA0HFcw3ZcgKM%2BaPRoTODEefLz%2BadMvdeTDmKtiRmOvUebsbiXBA62dCCGFWbQBEFgnkeluN0svT3Ioa4xZAsvlsh%2BtzVIiYVy7k8nYO7GDHQudjrhFJPWUOCXQR3aW3sY%2BXBGA4t86F%2BU4Wgfkz5deXoO1rbBhxJeHb6f9CLA9K2i%2FKwgUa4KMoCjw%2FUQvUbrDtfV7YOhlw1jUvVsIuxLklaUL2DBUnVMPXwzB1kQGqzuVpP4QxLLQgeViPv8VbwaRi7%2BpfoYWY4BMM%2B8z8kGOqUB1k0MaPTEvZyGFg2OlkTlGxPWxEqNXQrCRaSjHp1Wwn4aUdDZ56GcR2BNO29UjF9MiEg9zqDmUFZZnM6zLzHUp1O3RwE%2FcUh5q9FpNbyJaaOqtMSwBrErdd7jnIP%2BPtiyCidoUN%2BEWM3WxD%2B%2FSg2lzHIuTzDjIQrlf6eVAM6CAVC14ZWir2K1fd3jiElkTNEfGFo%2BefV4RfJ7lN5LCuWTKhc9%2Bp72&X-Amz-Signature=7b1cf305bab845e3469e87381de426ea51daaf08a7bba546c95dd9e046a4ffb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQZFH7TL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2B7b51lFyxtLWpKDApi7XatUoikKBQ%2B7lLrdeUwp61qAiEAmISJtj85ha%2Bi1RT9URA5XYlztpdKAVJ0N5tc0SVqCL4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDO7T8uRWG3tApWlJISrcA6Sn1Is5l%2F34gITdSKxB3%2BRzh9XNMz6dnBQkICQAnMFn2pvvHJc8QKzMgLYlBzXgCF5x%2BztjobFG6Uet19zeTvm1nOKCalI5pkGfvAPDwlskHN5ATTnLvG4iswMUYwKDRXyK9L6ntLdSQHO%2FvdgwDlNnfjCXhXgIWGGPF9I8rIH3dKa4ULzbtjD5PcBjQw7eQvVhUnNrWjcYOIj9Yb%2FBZpO9K4PJebQi3kHouBRxpBhtxk6vBx7QSTDg1BwGWJNfVEBVFUu8qVq2J61B%2FUHXDX7MDqWWtSS7d2iAx%2BCv3iOeSQKC%2FkKRO0TiIZU3YY%2FYlJ80PCrh%2B9QVzs6jDkrmNc2%2BjFe7uIQPUpc9M0DzUSAC5cOA0HFcw3ZcgKM%2BaPRoTODEefLz%2BadMvdeTDmKtiRmOvUebsbiXBA62dCCGFWbQBEFgnkeluN0svT3Ioa4xZAsvlsh%2BtzVIiYVy7k8nYO7GDHQudjrhFJPWUOCXQR3aW3sY%2BXBGA4t86F%2BU4Wgfkz5deXoO1rbBhxJeHb6f9CLA9K2i%2FKwgUa4KMoCjw%2FUQvUbrDtfV7YOhlw1jUvVsIuxLklaUL2DBUnVMPXwzB1kQGqzuVpP4QxLLQgeViPv8VbwaRi7%2BpfoYWY4BMM%2B8z8kGOqUB1k0MaPTEvZyGFg2OlkTlGxPWxEqNXQrCRaSjHp1Wwn4aUdDZ56GcR2BNO29UjF9MiEg9zqDmUFZZnM6zLzHUp1O3RwE%2FcUh5q9FpNbyJaaOqtMSwBrErdd7jnIP%2BPtiyCidoUN%2BEWM3WxD%2B%2FSg2lzHIuTzDjIQrlf6eVAM6CAVC14ZWir2K1fd3jiElkTNEfGFo%2BefV4RfJ7lN5LCuWTKhc9%2Bp72&X-Amz-Signature=2d3f1374c61b70ff256e9a4a708a8ca9836dd2bdf9ba39efadba9245580841f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

