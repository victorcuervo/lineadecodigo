---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z73KHNO7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T022332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9ZbhXEL%2FZejFaOro3CurgOv5DIGM8Yg8jSFILxFSafQIhAN8ds1wua%2FRWx26d5lGxELkB3yO4mooi0JyVcKYul22dKv8DCGoQABoMNjM3NDIzMTgzODA1IgyCvLLFohshnTlzkq4q3AMbM04k8R5qIl6jfFTD00ro8kMObI1vNR%2FogHSqPPm%2BffgQCdVhbixAp2XBAJtnGeh9H7GaTPoTQv1oUSUYBX6HSj2e9h%2FLYTekXTGNUaG7TZyAGREe1zj6zw0cXAw%2BMLgoLV64JOjr4YdVMmjOuEgyCkubaSXO%2FXFZO8FBI2vGwwVxQXqegjcnUQzgIv8r2506ZUSIZjRcuZRV8N6Y6mdem1NVcRy7T5eP7mFy3eP%2Bap6YZ9t97PLoMR9qon56CX6m4QskdoqCfYOmx7Y%2B7GMMYVdQ74TgKN965SSV5FK%2Bg286U5eQv8U3SgtG1rg6URQFmqaUQYOgsjGoj%2FrXRB0nabUeSOXLpzBM%2FBmOuxkvR7BscXJLgK2C%2BzBvDhrHJAcM01jZ19BDnP1WVIpPy5jDw7D2yfDHjQZfZuL9SGNK5OdZAigoJuxBuinlbSdl25F9QWJOaYiJMVHhm30OxJvuL51GGAgarGuHvSMw2iKGd%2FAUc0MCxiOWMb0XAufFnKIRkjBaLQZWCoynPj5AjWmPZ3IrQOCthFYQP%2FKFyFGI%2FOChi2To2F5htkntYCywq5HPZiU16C9YHBvCyzFhwNxqGC8GbbyhVNk6hvtfcRZZjJ4naD4atrPUtrFcLzCOis7JBjqkAUaN6rxuKiyjCfMtHSVoaKi5UcDYprVRfLHPFxcs%2FKWeH2eCrWFZwscMPx26JQYYziK1Pas6GKWKFqQB0gvKGaUnOG4BmJewsrpb5cDo774ylQD03QL9Aqznir%2Bzg8Ko1wMPXEdJ3Fz6LR0TpKs5%2BvqGkUbYv%2F%2FAqIZ873HJtEVB6%2FXH1a%2F63oKGBQ1vC5FNqyg4%2F%2F4xeuBaN4EY0QfKyjSjBQ1u&X-Amz-Signature=34411ba9b7fdbaecc04ee1573b09a2e645aee87eacb020b5c1d20d5fef4391db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z73KHNO7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T022332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9ZbhXEL%2FZejFaOro3CurgOv5DIGM8Yg8jSFILxFSafQIhAN8ds1wua%2FRWx26d5lGxELkB3yO4mooi0JyVcKYul22dKv8DCGoQABoMNjM3NDIzMTgzODA1IgyCvLLFohshnTlzkq4q3AMbM04k8R5qIl6jfFTD00ro8kMObI1vNR%2FogHSqPPm%2BffgQCdVhbixAp2XBAJtnGeh9H7GaTPoTQv1oUSUYBX6HSj2e9h%2FLYTekXTGNUaG7TZyAGREe1zj6zw0cXAw%2BMLgoLV64JOjr4YdVMmjOuEgyCkubaSXO%2FXFZO8FBI2vGwwVxQXqegjcnUQzgIv8r2506ZUSIZjRcuZRV8N6Y6mdem1NVcRy7T5eP7mFy3eP%2Bap6YZ9t97PLoMR9qon56CX6m4QskdoqCfYOmx7Y%2B7GMMYVdQ74TgKN965SSV5FK%2Bg286U5eQv8U3SgtG1rg6URQFmqaUQYOgsjGoj%2FrXRB0nabUeSOXLpzBM%2FBmOuxkvR7BscXJLgK2C%2BzBvDhrHJAcM01jZ19BDnP1WVIpPy5jDw7D2yfDHjQZfZuL9SGNK5OdZAigoJuxBuinlbSdl25F9QWJOaYiJMVHhm30OxJvuL51GGAgarGuHvSMw2iKGd%2FAUc0MCxiOWMb0XAufFnKIRkjBaLQZWCoynPj5AjWmPZ3IrQOCthFYQP%2FKFyFGI%2FOChi2To2F5htkntYCywq5HPZiU16C9YHBvCyzFhwNxqGC8GbbyhVNk6hvtfcRZZjJ4naD4atrPUtrFcLzCOis7JBjqkAUaN6rxuKiyjCfMtHSVoaKi5UcDYprVRfLHPFxcs%2FKWeH2eCrWFZwscMPx26JQYYziK1Pas6GKWKFqQB0gvKGaUnOG4BmJewsrpb5cDo774ylQD03QL9Aqznir%2Bzg8Ko1wMPXEdJ3Fz6LR0TpKs5%2BvqGkUbYv%2F%2FAqIZ873HJtEVB6%2FXH1a%2F63oKGBQ1vC5FNqyg4%2F%2F4xeuBaN4EY0QfKyjSjBQ1u&X-Amz-Signature=f09a7d5c703627c8c4acd3e5bb97dc66da15710f6bb542fdd2768225b06af66a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

