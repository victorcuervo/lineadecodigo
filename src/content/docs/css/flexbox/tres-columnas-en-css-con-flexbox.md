---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YRIOGM5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfagk%2BoNTLLagGlL%2FZact5dlu1VR%2BXvN%2BU0IlPUAOlnAIhAJA%2BZcJKX6oHe5F%2FWuPrpzpzn3vgWRzkWCPW5lXLSY2lKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyczIjBXpBGTOrLzSsq3ANt7y67LsCljWtYLM4tSa00SvYP%2FpYb%2FJ8T5S3%2BWXnZOdNiAgFueHlhIy9byVHrc%2FXk9imPdYOWVE%2BmXkPFOi9CaImy4v8M9EZWu8TbYTfegUNbLlZ1uL3emLj2OdAj0ONAbCC5Fzp3%2FPPa5CHLrEn63G%2F7clJmiDqx2QAnKG9g2INlSlkniHQd5VnnH4pEnb1Jf7t0LDgeBTOf%2BYQLkdw5rLRr6Zts1AoONi20ICGxluq0Oa1tuDrdVJ1DDE7k%2B6%2FMsJWXL7g1l8OQyAGlETKxs8110urh75uB4c57u4%2BtLDQ84G6rYTRAErDuCNl3Z3sN0KDuV2E6BnGJ9BCEf7HHpL7T0YUby7xegDzRVwBvWOSrkKNrB692a9Ys%2ByOE8x0XzJUlbhsU89JjbqwdO4xNpkoHloBJnOnKfmWiyDjyDfvDT7MmaU42N14lwmap8r2Dbiudx53DR0By%2BFTtDPMecH09gYrWh3xuiiE6Ful%2B2miyOM6myc3ldJ9N%2FhdeSQtA6t4MB6o7zwuFso7HPRCpVwB0KqJStmVa6sbw7aJIjY3mQMFUZ%2FVe6jmv9lL1P6STiPCBQ5%2F32aoxCnxZ7ThhXnrQxT%2BJhmEAvf9elyZ1aN5kgWwMwb1jls599zDJh9zJBjqkAdvueIcyEKSYDUfEY7jQrZHYXIC54JDU1zBE8JmqcYjbY6sJuvVefjm6CrWHZ9MScGtkQWE8qRGPNKPJft6n1PH%2BsAXLqFblV7IvpJSEP5ggLco7J4hpJB8hpRNPnGuw8zwd6xhtnMaY05%2BIWCnYy1Je8ZGZjyQ1DILF2Z%2B1gf9MiocfExspDNF%2Bz0vANM9V%2FDnHoMGei99i%2FdvmSRyGdtiCxjMt&X-Amz-Signature=7fedec226cb4ee03ab198bdfccd9520c8b0f72686e3ba29c8859205f5034a303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YRIOGM5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfagk%2BoNTLLagGlL%2FZact5dlu1VR%2BXvN%2BU0IlPUAOlnAIhAJA%2BZcJKX6oHe5F%2FWuPrpzpzn3vgWRzkWCPW5lXLSY2lKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyczIjBXpBGTOrLzSsq3ANt7y67LsCljWtYLM4tSa00SvYP%2FpYb%2FJ8T5S3%2BWXnZOdNiAgFueHlhIy9byVHrc%2FXk9imPdYOWVE%2BmXkPFOi9CaImy4v8M9EZWu8TbYTfegUNbLlZ1uL3emLj2OdAj0ONAbCC5Fzp3%2FPPa5CHLrEn63G%2F7clJmiDqx2QAnKG9g2INlSlkniHQd5VnnH4pEnb1Jf7t0LDgeBTOf%2BYQLkdw5rLRr6Zts1AoONi20ICGxluq0Oa1tuDrdVJ1DDE7k%2B6%2FMsJWXL7g1l8OQyAGlETKxs8110urh75uB4c57u4%2BtLDQ84G6rYTRAErDuCNl3Z3sN0KDuV2E6BnGJ9BCEf7HHpL7T0YUby7xegDzRVwBvWOSrkKNrB692a9Ys%2ByOE8x0XzJUlbhsU89JjbqwdO4xNpkoHloBJnOnKfmWiyDjyDfvDT7MmaU42N14lwmap8r2Dbiudx53DR0By%2BFTtDPMecH09gYrWh3xuiiE6Ful%2B2miyOM6myc3ldJ9N%2FhdeSQtA6t4MB6o7zwuFso7HPRCpVwB0KqJStmVa6sbw7aJIjY3mQMFUZ%2FVe6jmv9lL1P6STiPCBQ5%2F32aoxCnxZ7ThhXnrQxT%2BJhmEAvf9elyZ1aN5kgWwMwb1jls599zDJh9zJBjqkAdvueIcyEKSYDUfEY7jQrZHYXIC54JDU1zBE8JmqcYjbY6sJuvVefjm6CrWHZ9MScGtkQWE8qRGPNKPJft6n1PH%2BsAXLqFblV7IvpJSEP5ggLco7J4hpJB8hpRNPnGuw8zwd6xhtnMaY05%2BIWCnYy1Je8ZGZjyQ1DILF2Z%2B1gf9MiocfExspDNF%2Bz0vANM9V%2FDnHoMGei99i%2FdvmSRyGdtiCxjMt&X-Amz-Signature=eb05469787a3a45661b488229b990ae82c13848fdf2afd9e9b2cf7cd81863017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

