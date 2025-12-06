---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G7FUOXR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA%2BnD3pZdTb1AxCxhmxhzoq1gp%2F4gTbYvOpaMXRNap1wIhAL9i7AAvGhZxP2%2FZYnacD5Hfs0Zib1bziBpcxxWMle7XKv8DCHAQABoMNjM3NDIzMTgzODA1IgyhYhruG0GUzwZcwG4q3AMJkZgUuRZw9WbGQ9OKz9dtjHdlOyfsAWrLPrM4sH464Vw9Ofm0pwkRXxnveETAyRTvTNC9Jt%2Ful1hvRR2z%2FSKvSIlW5JJKZI8Hnaf1Iw98%2BKGz6MIuJTh%2FR2ZGeylVB%2FMY8xCpseVHSAIqBZt%2BYakFDzVQBxc%2BirEsGCfBVZPBXkzeWu9R1B6pHGUG%2BgcEJceBPJx34XPsG3BvkEnO%2B%2Fo5E3Z0xok22NBIU2GIVGvJLcWaM1frvgqw0t23zuuhxSYFGsiVyDMLt7gLRzN25GJTQDr%2FC1RZnjg5xikFj0NSd93q4SxevH84WntINignGOtf87Y6na8eoSfDyWCFwfL8%2B15FsXm930KrmuAuZOcQnGeXAKKXJimNmH50OK7sEU7UzaCc7aEObJHiz%2BHM62UsCGs9DojW9%2FrIcppG0eDbFghKfhSt1ZztQMyxlzzPjLnTE9cZmRg6t4A3Y5b1dBAwld6XSsjS8xXQbpgVgJJw7Owzo7%2FMT5bgX3JMkDADbweJCk3XhQcI1KPGa07I0thsMNvOZ5zogQzs3Gwdj8O80CqtF8gxnZGzlYkGj8lUm35nj0nl5mEjmJ%2FtGIRjIDmt8n6lchAR2%2BDskSbhyjRHeqQnNcAsLpBpj3VmHzCyns%2FJBjqkARChseqqS9upk4juQZoVQovDG%2FV0uqkB1XaxMvm5Eafn0IjQhEAKbtbpIVt%2FeqOkvwV5qzYqKANOYCLe22rksXdFQyf%2FJhAgAmfD0b2jXhFcBOhIqumM3x04xz70fdbBpF119u7c9QSMtQ2Kpsb9Xm8DynuBPDJ%2FgbVo%2FDz68OOSZIAaGYqg2qQz4MrpHS2VIJd6Lr6lh9nnUoH%2F%2Bi%2B0GvjefNgv&X-Amz-Signature=4674df3db31e1d3054b715ce7549a3ec64ac8f164f1d77cc4797e9371e1cca38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G7FUOXR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA%2BnD3pZdTb1AxCxhmxhzoq1gp%2F4gTbYvOpaMXRNap1wIhAL9i7AAvGhZxP2%2FZYnacD5Hfs0Zib1bziBpcxxWMle7XKv8DCHAQABoMNjM3NDIzMTgzODA1IgyhYhruG0GUzwZcwG4q3AMJkZgUuRZw9WbGQ9OKz9dtjHdlOyfsAWrLPrM4sH464Vw9Ofm0pwkRXxnveETAyRTvTNC9Jt%2Ful1hvRR2z%2FSKvSIlW5JJKZI8Hnaf1Iw98%2BKGz6MIuJTh%2FR2ZGeylVB%2FMY8xCpseVHSAIqBZt%2BYakFDzVQBxc%2BirEsGCfBVZPBXkzeWu9R1B6pHGUG%2BgcEJceBPJx34XPsG3BvkEnO%2B%2Fo5E3Z0xok22NBIU2GIVGvJLcWaM1frvgqw0t23zuuhxSYFGsiVyDMLt7gLRzN25GJTQDr%2FC1RZnjg5xikFj0NSd93q4SxevH84WntINignGOtf87Y6na8eoSfDyWCFwfL8%2B15FsXm930KrmuAuZOcQnGeXAKKXJimNmH50OK7sEU7UzaCc7aEObJHiz%2BHM62UsCGs9DojW9%2FrIcppG0eDbFghKfhSt1ZztQMyxlzzPjLnTE9cZmRg6t4A3Y5b1dBAwld6XSsjS8xXQbpgVgJJw7Owzo7%2FMT5bgX3JMkDADbweJCk3XhQcI1KPGa07I0thsMNvOZ5zogQzs3Gwdj8O80CqtF8gxnZGzlYkGj8lUm35nj0nl5mEjmJ%2FtGIRjIDmt8n6lchAR2%2BDskSbhyjRHeqQnNcAsLpBpj3VmHzCyns%2FJBjqkARChseqqS9upk4juQZoVQovDG%2FV0uqkB1XaxMvm5Eafn0IjQhEAKbtbpIVt%2FeqOkvwV5qzYqKANOYCLe22rksXdFQyf%2FJhAgAmfD0b2jXhFcBOhIqumM3x04xz70fdbBpF119u7c9QSMtQ2Kpsb9Xm8DynuBPDJ%2FgbVo%2FDz68OOSZIAaGYqg2qQz4MrpHS2VIJd6Lr6lh9nnUoH%2F%2Bi%2B0GvjefNgv&X-Amz-Signature=81f091fca1f5131dbdac8040738e88ec77ed95537b3edd7aad54e69aeb228aae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

