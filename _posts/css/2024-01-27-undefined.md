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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFJ74JF5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T043401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIG77nrOEWkg08g%2B7LhaDuqwKgZJDxgSpt1c6DoQ090mAAiBgHAqMYln12s5vOjd2nFY%2FrGCxhWPCeiCVGj%2Bvjawbnyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMXfGZz5%2BTchmDNGHUKtwDoCLzWPnlpqG3UveSut7MqThcNgm9k5UWPQHaUVuOFZy8XOMKi4nYSFJbNDImpwH5Q9HeNqmMYdJGIStqlOSFke4fI%2BJQ0f6LsqhO%2FPAooEqiC3GLnA6v7bvqLx3ZtGQxB8A%2BrqW7xoOboW7g2Ya0ojl%2BhwAOM0r8CIAjfGiDTpbzPCdp5f%2FHEeAzzY%2BF0csGwyWpeHjdlxgvRJEk%2BdHF5ZpnqWXQq7MPqXFhbdcy5NN3jWpKkDRSsRaweNpSVA%2FYwJyW0DVSFTO4VjmxYcFx6wNz7B3acuYZOSPSWkYFUiU%2F2rq4R4ZAzNxf23GLA9XXm4ugp2RFCHx%2FZgCAOLwHYNZGD5zjQMi%2FnY4Oylw8Sv%2FZkwZCbuxOO7TQ%2Bda1cpN9o9AdyuuOoN3S%2FROXFUPvF3a6AzkOLEXPYpcuigReEK4wrGfH2IRUuew966h8rGvK8OEspThHt64QtMx1QF80thKN0kaOCzEjKe%2BIecMuunhuvHo7KoV0%2F1Q1ZMFo8039XQg5IV8mKACI1xUiwHtxs2b94vzLWuU0kOMMsDahswS1ynlgWNa9BHSoXp%2F45clPtvB3QZmY2Q8hUbZkgw0eVPRRCIU17Jz5bas8eM3xFUCP760ELPAIzPZaq9sw6pa%2ByQY6pgF3ikpH3r17%2BYhelgUieOPdzWXjcCKT2zvNPUtMkp4mPLn2g65FsSuZzvoDsX2lil9hyQbZk5CYNOrdN76MmiyuPus7BjzfvJ1rIs%2FnGXP69vftBRXBNCoN798HcCJVcqJjtt%2FlgH77TJ4IwCAPbTZlVbvc2tpGr4bjWGq%2BRlmf0%2BacAS5lAwCd6pMpxc0isr8r66dZw709jlIyYsFyDsL%2F0xstH0eD&X-Amz-Signature=f25fa1c9b6c65f1f6841c2e692d2bb16087826dd1768a6b6b0ba308ba82ff98d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFJ74JF5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T043401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIG77nrOEWkg08g%2B7LhaDuqwKgZJDxgSpt1c6DoQ090mAAiBgHAqMYln12s5vOjd2nFY%2FrGCxhWPCeiCVGj%2Bvjawbnyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMXfGZz5%2BTchmDNGHUKtwDoCLzWPnlpqG3UveSut7MqThcNgm9k5UWPQHaUVuOFZy8XOMKi4nYSFJbNDImpwH5Q9HeNqmMYdJGIStqlOSFke4fI%2BJQ0f6LsqhO%2FPAooEqiC3GLnA6v7bvqLx3ZtGQxB8A%2BrqW7xoOboW7g2Ya0ojl%2BhwAOM0r8CIAjfGiDTpbzPCdp5f%2FHEeAzzY%2BF0csGwyWpeHjdlxgvRJEk%2BdHF5ZpnqWXQq7MPqXFhbdcy5NN3jWpKkDRSsRaweNpSVA%2FYwJyW0DVSFTO4VjmxYcFx6wNz7B3acuYZOSPSWkYFUiU%2F2rq4R4ZAzNxf23GLA9XXm4ugp2RFCHx%2FZgCAOLwHYNZGD5zjQMi%2FnY4Oylw8Sv%2FZkwZCbuxOO7TQ%2Bda1cpN9o9AdyuuOoN3S%2FROXFUPvF3a6AzkOLEXPYpcuigReEK4wrGfH2IRUuew966h8rGvK8OEspThHt64QtMx1QF80thKN0kaOCzEjKe%2BIecMuunhuvHo7KoV0%2F1Q1ZMFo8039XQg5IV8mKACI1xUiwHtxs2b94vzLWuU0kOMMsDahswS1ynlgWNa9BHSoXp%2F45clPtvB3QZmY2Q8hUbZkgw0eVPRRCIU17Jz5bas8eM3xFUCP760ELPAIzPZaq9sw6pa%2ByQY6pgF3ikpH3r17%2BYhelgUieOPdzWXjcCKT2zvNPUtMkp4mPLn2g65FsSuZzvoDsX2lil9hyQbZk5CYNOrdN76MmiyuPus7BjzfvJ1rIs%2FnGXP69vftBRXBNCoN798HcCJVcqJjtt%2FlgH77TJ4IwCAPbTZlVbvc2tpGr4bjWGq%2BRlmf0%2BacAS5lAwCd6pMpxc0isr8r66dZw709jlIyYsFyDsL%2F0xstH0eD&X-Amz-Signature=196aea6f49cfbd044403f863cb32d70cb07596082f9414c6230452d67b6f7e48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

