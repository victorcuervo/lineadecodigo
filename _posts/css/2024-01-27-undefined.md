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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B7XL4E5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDuWIExzO1onEM5heP%2FapSAJZUl5hBhNnYZkCf2FEks%2FgIgNFFvb81lkCh27aGNmgrckOa%2BrHuyvXMQ5VFPLZnedcMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMKMv9fbyudENXrTzyrcA0Nsk6MHtm6LtPGUmhUeYnU7OJ3r%2BTab%2Fzwfr0bkZArwthJ3hcRQsuYQBza%2FztfuSiJNJRO2C1tjES7RdzjZlsv51WFsqpbtK9%2B128x9w1fqEzsUDJmwz8k8%2BeBbrXH%2FqJHBr8V5BKr0vBAktyavrsg1tS5WSI%2ByCmiEggL24mImEHXao0fL8EbEoAAOsJdTknoH0OsCFgOLjcZy7LY4arQXE73j%2BjIIfpfs%2F63t77guLLbFmzk%2B7WSsqcoY0wLrVu4YLuNjVJI9AdSliz%2BOFEay08gWzkABRiKX3PVOWWSFygxbwhkTff4T8Gc9XLd0RkeRBL2Y0obSs%2FZLefVDBmImxw7anu83saRpjvezVgfyOqhER%2BS3kOxhOW8l7xNKU8feUZIWUm0aB54bAyDGv86H70lPndjmNYPpkJy8%2BPvFpWx523KUIfdxg5tUfJEH3guSAq40eDPmPkr7QqfrhenQC5dnw7l38eI5%2FVCN3jMlcPF%2BQmHsruC09q5dIpX2brEs7AY9HehwV3eb8Dln5owchybQtBrealAAdgk%2FE36iJ2cNlp6s%2FwzfWTeCw2KZpdS4GKpJjSNnNtGNL9txaezOU3b1tfQTXra%2FWe0bfbCbJia2BuArcAf3M2qrMLOUvskGOqUBzkWZ%2B8t%2BTcFH%2F5CzJfbDUG%2BUrwJO6W%2Bbh41Q1kLdTyyBDxGY7eLnCt26F327MLN1K9ZrxSEFjnx020%2FtLBBGOXpoclZBLXPAcMwyr6ad5D2LX1qTnLsOzvw1xEPAO%2FJYmuQk3yQ1k8vIOXIAeJ6vz8phkHVuQyJ0obFZUAQd0aJthIG%2F5ZGBUUtAARzX9Hb6QZvn6MG9rsBH5s0DH1AcUvPifgH0&X-Amz-Signature=8eb51dde99238c296bcbd68620614913a6cfc5a1b3dc780f3965ba37fbb2c8f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B7XL4E5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDuWIExzO1onEM5heP%2FapSAJZUl5hBhNnYZkCf2FEks%2FgIgNFFvb81lkCh27aGNmgrckOa%2BrHuyvXMQ5VFPLZnedcMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMKMv9fbyudENXrTzyrcA0Nsk6MHtm6LtPGUmhUeYnU7OJ3r%2BTab%2Fzwfr0bkZArwthJ3hcRQsuYQBza%2FztfuSiJNJRO2C1tjES7RdzjZlsv51WFsqpbtK9%2B128x9w1fqEzsUDJmwz8k8%2BeBbrXH%2FqJHBr8V5BKr0vBAktyavrsg1tS5WSI%2ByCmiEggL24mImEHXao0fL8EbEoAAOsJdTknoH0OsCFgOLjcZy7LY4arQXE73j%2BjIIfpfs%2F63t77guLLbFmzk%2B7WSsqcoY0wLrVu4YLuNjVJI9AdSliz%2BOFEay08gWzkABRiKX3PVOWWSFygxbwhkTff4T8Gc9XLd0RkeRBL2Y0obSs%2FZLefVDBmImxw7anu83saRpjvezVgfyOqhER%2BS3kOxhOW8l7xNKU8feUZIWUm0aB54bAyDGv86H70lPndjmNYPpkJy8%2BPvFpWx523KUIfdxg5tUfJEH3guSAq40eDPmPkr7QqfrhenQC5dnw7l38eI5%2FVCN3jMlcPF%2BQmHsruC09q5dIpX2brEs7AY9HehwV3eb8Dln5owchybQtBrealAAdgk%2FE36iJ2cNlp6s%2FwzfWTeCw2KZpdS4GKpJjSNnNtGNL9txaezOU3b1tfQTXra%2FWe0bfbCbJia2BuArcAf3M2qrMLOUvskGOqUBzkWZ%2B8t%2BTcFH%2F5CzJfbDUG%2BUrwJO6W%2Bbh41Q1kLdTyyBDxGY7eLnCt26F327MLN1K9ZrxSEFjnx020%2FtLBBGOXpoclZBLXPAcMwyr6ad5D2LX1qTnLsOzvw1xEPAO%2FJYmuQk3yQ1k8vIOXIAeJ6vz8phkHVuQyJ0obFZUAQd0aJthIG%2F5ZGBUUtAARzX9Hb6QZvn6MG9rsBH5s0DH1AcUvPifgH0&X-Amz-Signature=c60eba81de286b3d9c2314d75ed6dfd5f71556735e05460be264ab6ca9dedada&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

