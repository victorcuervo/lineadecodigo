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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PNMVJRI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T043558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCNUBqlaj8h%2Bc8z71wAV0s8cVk%2BY%2BRWSiS5IXh7PPhmFwIgbRacMzMVO4K9phQ4YWciA%2FjVAZSnfCxCC4gSlLKfl2wq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBUsTObgoltVqelxzyrcAxkurxZfHJklz1lsrijtr6SM%2FLu70Xd%2BIFUyFXj8bsilIXaL97NAUk%2BaPFqznIuTGfk2hK4ntVlQvbG6RQGTNuk%2BeX%2F9uZmSu8TqPZIvXjOpRAElT02e8ODMAz%2BXG%2BVeIB4BgCekk4reVYrZ2V4ZE7QUMJ%2BQ%2BGoFKrCUysaC0DS%2F0NoxIUBWCrBhqD0tEdEeDjXgxTRMlb6Onr9JfNxl%2FT3zKETxwwtc5L6vntISmUr%2B60KUFdEGhn0S7T0RSs0PNS6v%2BtM17tpogUiDxmJES8%2Bl1qTLe8w0xZqV0xr%2BO8jaHPJsJkjGqdwgN1bB5pU3%2FEXCl8hehvE9sMXA%2BIOZ8oesjRgm3Pu%2B41GzMCI0r0xgAtgjiKr4xfYlHh8%2BDBgVPph5gM841UkshTExY1a5Ph9ZLHnaVt1FNo0I3J%2F2Q4mbNbF1OgB1esSJO0yPPTDJL0MWNqUyC4U9OzGc%2FTrskinhI5GY4W%2B4UYyUYjybwAMxlgDnQwa7nvWjfdCgqR8Cac6eFIH0hmljm51YPB%2BAP2baH0orwEtUuq9fJvPGnASCrytVJNfXQbNZlRmyNxh2571ECISpGWNYpbS126B0r12lp%2B3GGkn95%2FCyVqyzN7jlbrkhtvuhfAJHe7NWMNmVvskGOqUBxEfw6WGQiDqwasO1zeJBOhTFIkXBHmrdyvCKvjBQ0QFYO%2F4QKr2xdjQlDJUKEcxr6eJ5RGEhMxrm1Vn6uFV3WDq%2FzcItjmjALKFSCLF8LC2%2F4K3VzWKavL7MHamoWG%2FkAeqROPdDPBRcjkUXu4vCwpJPPd3q0SdyBWz%2FTNCsHKoGJRGHGd6DrzJ%2FndOkGEKnbjb6fY5kIFx58pFyQMKQtEKShVMu&X-Amz-Signature=36d87bf3cf663ef2bc1b3fd43decb2bd03e932b3bf74e3f6b2e4090acca9beea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PNMVJRI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T043558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCNUBqlaj8h%2Bc8z71wAV0s8cVk%2BY%2BRWSiS5IXh7PPhmFwIgbRacMzMVO4K9phQ4YWciA%2FjVAZSnfCxCC4gSlLKfl2wq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBUsTObgoltVqelxzyrcAxkurxZfHJklz1lsrijtr6SM%2FLu70Xd%2BIFUyFXj8bsilIXaL97NAUk%2BaPFqznIuTGfk2hK4ntVlQvbG6RQGTNuk%2BeX%2F9uZmSu8TqPZIvXjOpRAElT02e8ODMAz%2BXG%2BVeIB4BgCekk4reVYrZ2V4ZE7QUMJ%2BQ%2BGoFKrCUysaC0DS%2F0NoxIUBWCrBhqD0tEdEeDjXgxTRMlb6Onr9JfNxl%2FT3zKETxwwtc5L6vntISmUr%2B60KUFdEGhn0S7T0RSs0PNS6v%2BtM17tpogUiDxmJES8%2Bl1qTLe8w0xZqV0xr%2BO8jaHPJsJkjGqdwgN1bB5pU3%2FEXCl8hehvE9sMXA%2BIOZ8oesjRgm3Pu%2B41GzMCI0r0xgAtgjiKr4xfYlHh8%2BDBgVPph5gM841UkshTExY1a5Ph9ZLHnaVt1FNo0I3J%2F2Q4mbNbF1OgB1esSJO0yPPTDJL0MWNqUyC4U9OzGc%2FTrskinhI5GY4W%2B4UYyUYjybwAMxlgDnQwa7nvWjfdCgqR8Cac6eFIH0hmljm51YPB%2BAP2baH0orwEtUuq9fJvPGnASCrytVJNfXQbNZlRmyNxh2571ECISpGWNYpbS126B0r12lp%2B3GGkn95%2FCyVqyzN7jlbrkhtvuhfAJHe7NWMNmVvskGOqUBxEfw6WGQiDqwasO1zeJBOhTFIkXBHmrdyvCKvjBQ0QFYO%2F4QKr2xdjQlDJUKEcxr6eJ5RGEhMxrm1Vn6uFV3WDq%2FzcItjmjALKFSCLF8LC2%2F4K3VzWKavL7MHamoWG%2FkAeqROPdDPBRcjkUXu4vCwpJPPd3q0SdyBWz%2FTNCsHKoGJRGHGd6DrzJ%2FndOkGEKnbjb6fY5kIFx58pFyQMKQtEKShVMu&X-Amz-Signature=d4af362fa736ae0264e5a968388d4b13ad5fa88e1cf614a3c6556b6248cc79d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

