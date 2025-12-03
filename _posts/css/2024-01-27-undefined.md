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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW3MCUYV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T040040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIH9e4cnPNTSmrwpUKJb9XuXlGW43dnUmntfuQbTyAKmQAiBM%2FdKBBfHpI7dy6hrN2W%2BC85SRd1uuZvQkdfs2MqS3%2FSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMnifbDV4zjRqlinryKtwD%2Bsn0l5WKXUBan0Ezw709pfPnIRo4DwVlM8L3FGb94Pg5Wk83ooVXkQ1ootQ%2BgU9baNXr%2FIq0t1%2FArj%2FGMA%2BZpAe0L1O0C1PJuDXeXsvgji6zFtlmEutVvmJ6T6yjvzSuTf2Cm5yhpGTik3ydd75lazZ5LlxNRr9xv3Ig9cahMuEbWnkV9C40M%2BXcxYqmAWReXVrFS9MNqmRAWKOGv5Om6Wd3%2FhKTQkBfX27f5ZZBv2j%2FEMiJpWWhsjL2uH%2FVda19a3Q3ZV0%2BKjjZ1eCRIBlhXrRZPZout%2FePZr5g1uhNedUDcai7NVyLwOXSmch%2BrmubmXq8GdihJVTx8WNJf2mZBJQhiX%2FP1AeuIDARbKHhNE9DzIhjfiBsRSy9AaRIfMt2GyNIcUxEgDto4fEoh6LirtbCTGknMPGnw4qqGVeL9xhIrx0Z5dXq%2B78mOLZkojsM1cV3l4%2FP6Rs%2FaA2Nut%2Bjdwqod4piKxjg3oaPe%2FKVqVWoJklNGyCLi5hqPfZ4PDmtvr%2FlIflco9wlQ7YVGIWPvd4Gh0tIWBfhBfWe%2BeQGUG5FF3fSbu%2FNlm0shqxzeUK6HS3Wl35Tl4UqZCdMCwSFHXNiyEhEtPJu1zay3vZUFe8YlAoZZSpMkzsFqOwwzZa%2ByQY6pgFWEA1Xq0o5xRzeuYddfmIFVheleykf%2FWRrlnHxT7CmNvC34EZlU61t6nYe0DJCN%2FY4dGFARk4fUfc7g%2FVgOedwxxJnXwYlEZkPw%2BnmQHw5lK8Di9QPK3%2BWK4JsdBh67SApMzu8wSqu5iybZcbKowhUi3ibcQIXNgXGYfRira12c%2BjI8AwZmVLvoP%2Bglr4QbG6HuyTyX2%2Fq5EZG1aJauvpk4MC6HOxA&X-Amz-Signature=f36b684e5baadf6790caa362b475f16b676fecbb623676dd97d9a917bb7de37a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW3MCUYV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T040040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIH9e4cnPNTSmrwpUKJb9XuXlGW43dnUmntfuQbTyAKmQAiBM%2FdKBBfHpI7dy6hrN2W%2BC85SRd1uuZvQkdfs2MqS3%2FSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMnifbDV4zjRqlinryKtwD%2Bsn0l5WKXUBan0Ezw709pfPnIRo4DwVlM8L3FGb94Pg5Wk83ooVXkQ1ootQ%2BgU9baNXr%2FIq0t1%2FArj%2FGMA%2BZpAe0L1O0C1PJuDXeXsvgji6zFtlmEutVvmJ6T6yjvzSuTf2Cm5yhpGTik3ydd75lazZ5LlxNRr9xv3Ig9cahMuEbWnkV9C40M%2BXcxYqmAWReXVrFS9MNqmRAWKOGv5Om6Wd3%2FhKTQkBfX27f5ZZBv2j%2FEMiJpWWhsjL2uH%2FVda19a3Q3ZV0%2BKjjZ1eCRIBlhXrRZPZout%2FePZr5g1uhNedUDcai7NVyLwOXSmch%2BrmubmXq8GdihJVTx8WNJf2mZBJQhiX%2FP1AeuIDARbKHhNE9DzIhjfiBsRSy9AaRIfMt2GyNIcUxEgDto4fEoh6LirtbCTGknMPGnw4qqGVeL9xhIrx0Z5dXq%2B78mOLZkojsM1cV3l4%2FP6Rs%2FaA2Nut%2Bjdwqod4piKxjg3oaPe%2FKVqVWoJklNGyCLi5hqPfZ4PDmtvr%2FlIflco9wlQ7YVGIWPvd4Gh0tIWBfhBfWe%2BeQGUG5FF3fSbu%2FNlm0shqxzeUK6HS3Wl35Tl4UqZCdMCwSFHXNiyEhEtPJu1zay3vZUFe8YlAoZZSpMkzsFqOwwzZa%2ByQY6pgFWEA1Xq0o5xRzeuYddfmIFVheleykf%2FWRrlnHxT7CmNvC34EZlU61t6nYe0DJCN%2FY4dGFARk4fUfc7g%2FVgOedwxxJnXwYlEZkPw%2BnmQHw5lK8Di9QPK3%2BWK4JsdBh67SApMzu8wSqu5iybZcbKowhUi3ibcQIXNgXGYfRira12c%2BjI8AwZmVLvoP%2Bglr4QbG6HuyTyX2%2Fq5EZG1aJauvpk4MC6HOxA&X-Amz-Signature=58e1044c3b7f458eefb10ae60d7961012503062baca50f4094ea8c1cc001c645&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

