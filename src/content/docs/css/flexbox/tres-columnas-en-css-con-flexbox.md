---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT5436LR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAu8fO263qI2InTwQVo638DNCS7Tn6BKdnnuXf3vjPr0AiAWIZHmP1w8w%2Fiyj%2Bj2dwIfY0vsQUSG%2FnPkPvzdoVzweCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ4z%2BcDgbO6yMItbqKtwDZJR79qD%2Bf16Bjlgct8TBJzKIjAfK%2BeBDLxbYYXa%2BPioyIDG818pHdF%2FDLkx0lASCwDYos8ZfutzaBdWQHLgOa9%2BhUWC%2FyEuuyD7i9sbzFKf6IkVM1VXKtufFCHXboqqgRZzIGDZe2v%2FYyWvKEM7yg03hK2wh6dLtcM0I5TGBF5YvM5%2FOJUsHshIGyTmsGXm3Ff0%2F0WWziszv93xFkQo%2F91ugd3sz9nwyl4kvp7UjCL3v0rcWy7UZKwWd3ZVqLJ9dam1XLZzNCSF5gDlHmIuuJF95G0jyPeKkVVCy4Kdfm8LgLO2O7wJRHriZnref1%2FulVfddYcXTCO63QrsSCz5vopo7yGcNiqfOPDgh%2B1RVjouwkKAZAbhLYmfKKO8pZhQ%2BHg923cnvcGWVyFVNv3ejfzog0gUWBMqaF2CpZVw3gvrEwaBX2%2FYmza%2FGosw9f%2F6zI85xRykAUoa6iV0y4Nd7IoC5BM1G7GWuHDmNahYQfXaR%2BR2dXOkXyzReWXL6ni2YUQqyx31EMbzuo%2FZbgYUXKnE2VkdVH3Xjv8CMiouvVX00046coCxoNYeyO5XlEFitYdF4TBo0LVLXLHdGA7195EKFmxtfyoGsEUi5OcmAvmGyjnysvLpCyQ5wM0Aw8v3SyQY6pgEu7L5BaDqYTaXXs5ucLfuyZ%2F9Dv5kq8W3noRM8IU5cjDquk%2FswrZoqur2hBVJZZjmaVdkhtOPOjhtFVY0TPvepJcYMrn5p%2FzL1jIBbSvLZM7DGm7Dq7zyXZcwkshrvQPndyU6LySen2lb6QceeDfYhtTs%2FGd9Xeayix2642S%2BR%2F97RE7eNvDZyU%2BhZO1l9y3PK8AKUPa3lMH3CxsfKHnFeFcOGqDVe&X-Amz-Signature=3585bd0203d3a34fc7f4ba54277a72c7586a45be2c421c937833daf287275cda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT5436LR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAu8fO263qI2InTwQVo638DNCS7Tn6BKdnnuXf3vjPr0AiAWIZHmP1w8w%2Fiyj%2Bj2dwIfY0vsQUSG%2FnPkPvzdoVzweCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ4z%2BcDgbO6yMItbqKtwDZJR79qD%2Bf16Bjlgct8TBJzKIjAfK%2BeBDLxbYYXa%2BPioyIDG818pHdF%2FDLkx0lASCwDYos8ZfutzaBdWQHLgOa9%2BhUWC%2FyEuuyD7i9sbzFKf6IkVM1VXKtufFCHXboqqgRZzIGDZe2v%2FYyWvKEM7yg03hK2wh6dLtcM0I5TGBF5YvM5%2FOJUsHshIGyTmsGXm3Ff0%2F0WWziszv93xFkQo%2F91ugd3sz9nwyl4kvp7UjCL3v0rcWy7UZKwWd3ZVqLJ9dam1XLZzNCSF5gDlHmIuuJF95G0jyPeKkVVCy4Kdfm8LgLO2O7wJRHriZnref1%2FulVfddYcXTCO63QrsSCz5vopo7yGcNiqfOPDgh%2B1RVjouwkKAZAbhLYmfKKO8pZhQ%2BHg923cnvcGWVyFVNv3ejfzog0gUWBMqaF2CpZVw3gvrEwaBX2%2FYmza%2FGosw9f%2F6zI85xRykAUoa6iV0y4Nd7IoC5BM1G7GWuHDmNahYQfXaR%2BR2dXOkXyzReWXL6ni2YUQqyx31EMbzuo%2FZbgYUXKnE2VkdVH3Xjv8CMiouvVX00046coCxoNYeyO5XlEFitYdF4TBo0LVLXLHdGA7195EKFmxtfyoGsEUi5OcmAvmGyjnysvLpCyQ5wM0Aw8v3SyQY6pgEu7L5BaDqYTaXXs5ucLfuyZ%2F9Dv5kq8W3noRM8IU5cjDquk%2FswrZoqur2hBVJZZjmaVdkhtOPOjhtFVY0TPvepJcYMrn5p%2FzL1jIBbSvLZM7DGm7Dq7zyXZcwkshrvQPndyU6LySen2lb6QceeDfYhtTs%2FGd9Xeayix2642S%2BR%2F97RE7eNvDZyU%2BhZO1l9y3PK8AKUPa3lMH3CxsfKHnFeFcOGqDVe&X-Amz-Signature=ad0ead8066fb42b7d1f0ce1049d9a28282d8528b4061051c39234f0f931f5074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

