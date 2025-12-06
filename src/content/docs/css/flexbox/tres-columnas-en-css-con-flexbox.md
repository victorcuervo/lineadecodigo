---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMHCSFAA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAILuhZowCasgqJb2QP0djYZTAsqTaakF7CKwp%2BdUn5oAiBd79N70H1f2q3S3TZg9cmsw1NpBLDqSHnNobD88izzjyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMWMXUCskAYA%2FF2i7LKtwDKzXuU%2FiUlXeWdK%2BZ011UoaC94UMO0R1UnWfMS88gEKxCdaLtD0%2BG0S67XbctudYwXp6118oUZpyiyU2huxFJaQCPaAGAj0kJgHAswPnZ83szuOCBvBf4LK6obSatR8Xtm9lzaNFcancVaATGF47tNTiKeYS3P43cH0bGvnpN2ImVaY933ILxgVnOJvJht7QKO2nd6QJM3usdvM7uO80TGBz9QMozL%2BOF8%2FDGQMWpy9FqxtN7bd8U5S7ABT7WxC8vNbmd77aT2fbPNLygjPucvQr%2FoXlCSzt57M0F0oWhZ%2BWtYf3aP4m7e%2FzHhO7dUhWUafYrA%2BCTWWK%2BeHCc0uvPOKFKjZNHEAyLXEcNbkFjKZQETUYRINPFRFUzYii2ShSYRia1xZDUt1Y5OIaB3wgSauRi9hVPYaottSR1a6MCcZ%2BfBuBqWnD9VuCjXNTNHTHdu9M2PTz6aJN35kk55dv0Aj%2Bl3n74UVCwfS26wjrXwWryOJxiE9Ew4U%2BUMq%2BevVun99BRUO7FoNDjfeoN4TVlTq6j%2B9xS5L7mi6Ku9O6hlpgN2E9ts1KfO%2BnntAfeUyEuDPU8feIgl5ItUKR6cxZmIY7ZfC52QZTmWjyTPQadl%2Fkb5tKMnwab5WD9LUAwh6fQyQY6pgHX8w6dihVPABdMpCA0A4slx8zTcIhbsgaOwIVg8HS9bnVApG34fkTT03Ko27Iv683XPcG4TnT6Iavc21JJcZvf0Yfwlqo4v8NPD5fbxM%2FhEKluZQv8lK%2BLw43DlPFy%2FCI%2Bvg5XoLDZJTsBd0TBTs09U1TA3fuVaS25BlxxjPWhevA%2F1aDUnV7rLKHI5ER8aEf%2BnFOY8qh%2F1O8B%2B9GPuBI3FD2EoPC2&X-Amz-Signature=bc5f49202d3070ba0ce92b65a024186d79ae00267d2dcf8a1611310e070ef2ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMHCSFAA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAILuhZowCasgqJb2QP0djYZTAsqTaakF7CKwp%2BdUn5oAiBd79N70H1f2q3S3TZg9cmsw1NpBLDqSHnNobD88izzjyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMWMXUCskAYA%2FF2i7LKtwDKzXuU%2FiUlXeWdK%2BZ011UoaC94UMO0R1UnWfMS88gEKxCdaLtD0%2BG0S67XbctudYwXp6118oUZpyiyU2huxFJaQCPaAGAj0kJgHAswPnZ83szuOCBvBf4LK6obSatR8Xtm9lzaNFcancVaATGF47tNTiKeYS3P43cH0bGvnpN2ImVaY933ILxgVnOJvJht7QKO2nd6QJM3usdvM7uO80TGBz9QMozL%2BOF8%2FDGQMWpy9FqxtN7bd8U5S7ABT7WxC8vNbmd77aT2fbPNLygjPucvQr%2FoXlCSzt57M0F0oWhZ%2BWtYf3aP4m7e%2FzHhO7dUhWUafYrA%2BCTWWK%2BeHCc0uvPOKFKjZNHEAyLXEcNbkFjKZQETUYRINPFRFUzYii2ShSYRia1xZDUt1Y5OIaB3wgSauRi9hVPYaottSR1a6MCcZ%2BfBuBqWnD9VuCjXNTNHTHdu9M2PTz6aJN35kk55dv0Aj%2Bl3n74UVCwfS26wjrXwWryOJxiE9Ew4U%2BUMq%2BevVun99BRUO7FoNDjfeoN4TVlTq6j%2B9xS5L7mi6Ku9O6hlpgN2E9ts1KfO%2BnntAfeUyEuDPU8feIgl5ItUKR6cxZmIY7ZfC52QZTmWjyTPQadl%2Fkb5tKMnwab5WD9LUAwh6fQyQY6pgHX8w6dihVPABdMpCA0A4slx8zTcIhbsgaOwIVg8HS9bnVApG34fkTT03Ko27Iv683XPcG4TnT6Iavc21JJcZvf0Yfwlqo4v8NPD5fbxM%2FhEKluZQv8lK%2BLw43DlPFy%2FCI%2Bvg5XoLDZJTsBd0TBTs09U1TA3fuVaS25BlxxjPWhevA%2F1aDUnV7rLKHI5ER8aEf%2BnFOY8qh%2F1O8B%2B9GPuBI3FD2EoPC2&X-Amz-Signature=206274667090da776dd0f66345c78727d9574fd0c514f3bdbb6d2b67324adcbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

