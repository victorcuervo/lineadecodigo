---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DJMN2YP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T011546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvqgxRnz%2F8tHwv6sVMWlAwT%2F%2Bu34vCJ8AF%2BUNOYKfUpAiAa5HkvFhjkv%2BdVOFlJtoArxRWAZ6d1TtJ1BpT2woSzTSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4tCblny3pjqHxXYaKtwDfgvH7kehRKXJuHTWLaFzpetz2qSJDuiSi6IYEcc7B2%2BvNGhjlMPirkLXftHkWOjdnoSsSB66W8H1ThWkzGRurM8clZjjF4%2B3%2FZDWIh8arhj5BG9XiF2bqEixOQbIGjXhEi8uh5gEzHmktX0GNo4JYqv9AYa6nMy2rln%2BqAJ6dw7%2FuH5n2TBnEHJiSLElf5yqNAZUZHmrgvRtP%2FgnMknYdB4TokwSUVO7F9d3J5rX8gnpD4wjkQ2i%2Fy5gj4uQm4E11zbyi2US%2FEyyPzbCa2ZTcamxJI2dETYf5mzijXjmYyqLM4O%2FY4uO2NSyGOgaEEA4NyWNrXUSnrUHSkXs0Ohkl6Iy6gBJxBjgIncRk9F%2FhGm3Q0SYvvflKX5jNxi96oSmRok1wjErhbWTnrk9Z4Y26gvoguOTrqJTg%2BDB08p6rTWAsuztTui19wfVtHv1vYSY7%2FjwbHOnKoT7on5wnU8s23K%2BamiyY5b4kVrlBsqEmomUlqR44KUlowVyoh6HfeIH8au%2BACB0an75JrFIbgxrStbXIoyFZCu8i9ZItZ7A17mxVtTvpJWnq4TNl%2Fh3O4S8kXkNF5YxDCSIPM67LSDhNxZvqDeeC8NJ7ikC7gPnnyhdFf0W6msTiB0rGoEwoqHYyQY6pgGza8%2F91nxZg4q%2F5VdtXVfA1VNB%2F%2BODkzyHnCSp1PhDU8mOF5wsG2lGTMr4CwcG%2FrPDvnE1LwXlxo9pW5LC7mPUXf2VwxylETP5PdOSmwB80v8z0FyKNB0uS4UtFT45zbYirbavFvDTrldmo4VnUiIcockjd%2BF4G7tpwiYn5jDZuCfPaVkyMP%2F0QaclMz98TSm00uRAjGWIPd6Am4dFnaJ8ltGjzvpA&X-Amz-Signature=b9768c408a1a840a4f4296096e3f42f6dd25d14f586d47fa79fa85ba5c5d9a37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DJMN2YP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T011546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvqgxRnz%2F8tHwv6sVMWlAwT%2F%2Bu34vCJ8AF%2BUNOYKfUpAiAa5HkvFhjkv%2BdVOFlJtoArxRWAZ6d1TtJ1BpT2woSzTSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4tCblny3pjqHxXYaKtwDfgvH7kehRKXJuHTWLaFzpetz2qSJDuiSi6IYEcc7B2%2BvNGhjlMPirkLXftHkWOjdnoSsSB66W8H1ThWkzGRurM8clZjjF4%2B3%2FZDWIh8arhj5BG9XiF2bqEixOQbIGjXhEi8uh5gEzHmktX0GNo4JYqv9AYa6nMy2rln%2BqAJ6dw7%2FuH5n2TBnEHJiSLElf5yqNAZUZHmrgvRtP%2FgnMknYdB4TokwSUVO7F9d3J5rX8gnpD4wjkQ2i%2Fy5gj4uQm4E11zbyi2US%2FEyyPzbCa2ZTcamxJI2dETYf5mzijXjmYyqLM4O%2FY4uO2NSyGOgaEEA4NyWNrXUSnrUHSkXs0Ohkl6Iy6gBJxBjgIncRk9F%2FhGm3Q0SYvvflKX5jNxi96oSmRok1wjErhbWTnrk9Z4Y26gvoguOTrqJTg%2BDB08p6rTWAsuztTui19wfVtHv1vYSY7%2FjwbHOnKoT7on5wnU8s23K%2BamiyY5b4kVrlBsqEmomUlqR44KUlowVyoh6HfeIH8au%2BACB0an75JrFIbgxrStbXIoyFZCu8i9ZItZ7A17mxVtTvpJWnq4TNl%2Fh3O4S8kXkNF5YxDCSIPM67LSDhNxZvqDeeC8NJ7ikC7gPnnyhdFf0W6msTiB0rGoEwoqHYyQY6pgGza8%2F91nxZg4q%2F5VdtXVfA1VNB%2F%2BODkzyHnCSp1PhDU8mOF5wsG2lGTMr4CwcG%2FrPDvnE1LwXlxo9pW5LC7mPUXf2VwxylETP5PdOSmwB80v8z0FyKNB0uS4UtFT45zbYirbavFvDTrldmo4VnUiIcockjd%2BF4G7tpwiYn5jDZuCfPaVkyMP%2F0QaclMz98TSm00uRAjGWIPd6Am4dFnaJ8ltGjzvpA&X-Amz-Signature=2c6482be840028d5971c49a91bc5dc8f3bbba80bcde09ac1d1d583ba6a16bb60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

