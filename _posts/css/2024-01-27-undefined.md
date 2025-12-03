---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z6UTOIY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T104438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCuqWXR6VYrNVgcJLVZ4VMkLv6ldw%2F%2F18Saxt0guhgfhwIhAJ925U5LWr2m9%2F7IzshcOWHI7t6soHSDm%2B3Pr0fMs2b9Kv8DCCsQABoMNjM3NDIzMTgzODA1IgzsP2FO%2FVh9Liqxoe4q3AOCc1wWPLaC6SeTVf22cqI1rn1U0%2BtaShorsU9Tn0rcGb3KvXUfr0awNV6Fq3PAmtANCBhAqFKSIm99puV7lqggSG77t8UPXyNqXUP5b2ebG%2F%2BMbzG48B3WYboGJz11yo2dZbwGuMYpxYw3%2BZ1kSKbniiy%2FQZC4ouTw0QEjBwNJTh4%2BMF5kbWRUXHrT5ZB6ip5JmK8Hmka6KVxBjJg1uQY37PP3OgsCoHGCtzsErdsnelSxGep4w7VX5QwLk%2ByKD9c6XMbK4FvQzWz4wb%2Fdsj2XoIYX%2B85pvnzY%2Bga7v7jedOJ9Gzg0ddJISrauDSVT09PWvo%2FF%2B%2BuDuMj6ZZFqdkqI%2BvbU1PZTl%2BfngkLCs82uZXinf%2BkcPmgpekDRT5Hidxlfu%2Bw%2B%2B13yyLzu%2BHZrB7BAW4PKly1386JqgV5VFrMcPX%2FU%2BFQLHvgjVUziGCqBIIMtMhEZOGjCNYmzLYgWZRWu1bL1XhzZ6Zc5ptqREfmTr4P76t0c%2BdIksB8j8fkHLpQGwp4pJQkDmVDbt3Z4iBieZTBofX17d9J9JxacZ4JdXdsA5Tuj5f4S6WNPyKDMTUnJ31iW115DrFj5AIDoPkb%2FR5GAPzpRp75SNoOvN6hSUyLWYg%2FMScOzYknaXjDuksDJBjqkAf0GJVkbcsv3BwKEaj8R92oG6shV4uS1EhYWStvL%2B%2BQlGj5bybCWzqa47%2FXvwTCs7QNa%2Fviqle9Lf0AP%2Fk18eVGZI%2BHg2iNs6GbSrea%2FV3gSebN4E7T1QBHvRbAz24O2Rsuw19I5YorwNSX%2Fxsa%2FjOsbQ9EgOHEd8P%2Fc0Jp8PrPvgLrdilb5b6Cv%2BAVEVTtkbRuySfrxJhwW1PnLPQrszLuA7Ld%2F&X-Amz-Signature=07ab2566b88553accab131bc3df3db37eef529ac085c2c185eb4d21884df553b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z6UTOIY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T104438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCuqWXR6VYrNVgcJLVZ4VMkLv6ldw%2F%2F18Saxt0guhgfhwIhAJ925U5LWr2m9%2F7IzshcOWHI7t6soHSDm%2B3Pr0fMs2b9Kv8DCCsQABoMNjM3NDIzMTgzODA1IgzsP2FO%2FVh9Liqxoe4q3AOCc1wWPLaC6SeTVf22cqI1rn1U0%2BtaShorsU9Tn0rcGb3KvXUfr0awNV6Fq3PAmtANCBhAqFKSIm99puV7lqggSG77t8UPXyNqXUP5b2ebG%2F%2BMbzG48B3WYboGJz11yo2dZbwGuMYpxYw3%2BZ1kSKbniiy%2FQZC4ouTw0QEjBwNJTh4%2BMF5kbWRUXHrT5ZB6ip5JmK8Hmka6KVxBjJg1uQY37PP3OgsCoHGCtzsErdsnelSxGep4w7VX5QwLk%2ByKD9c6XMbK4FvQzWz4wb%2Fdsj2XoIYX%2B85pvnzY%2Bga7v7jedOJ9Gzg0ddJISrauDSVT09PWvo%2FF%2B%2BuDuMj6ZZFqdkqI%2BvbU1PZTl%2BfngkLCs82uZXinf%2BkcPmgpekDRT5Hidxlfu%2Bw%2B%2B13yyLzu%2BHZrB7BAW4PKly1386JqgV5VFrMcPX%2FU%2BFQLHvgjVUziGCqBIIMtMhEZOGjCNYmzLYgWZRWu1bL1XhzZ6Zc5ptqREfmTr4P76t0c%2BdIksB8j8fkHLpQGwp4pJQkDmVDbt3Z4iBieZTBofX17d9J9JxacZ4JdXdsA5Tuj5f4S6WNPyKDMTUnJ31iW115DrFj5AIDoPkb%2FR5GAPzpRp75SNoOvN6hSUyLWYg%2FMScOzYknaXjDuksDJBjqkAf0GJVkbcsv3BwKEaj8R92oG6shV4uS1EhYWStvL%2B%2BQlGj5bybCWzqa47%2FXvwTCs7QNa%2Fviqle9Lf0AP%2Fk18eVGZI%2BHg2iNs6GbSrea%2FV3gSebN4E7T1QBHvRbAz24O2Rsuw19I5YorwNSX%2Fxsa%2FjOsbQ9EgOHEd8P%2Fc0Jp8PrPvgLrdilb5b6Cv%2BAVEVTtkbRuySfrxJhwW1PnLPQrszLuA7Ld%2F&X-Amz-Signature=912f9601fab87738317bdf0e858d3d38e04ea404178cf6c5910854ef33e1ed9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

