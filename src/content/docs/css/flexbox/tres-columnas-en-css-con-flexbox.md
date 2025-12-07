---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5KXPPJD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T043626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjb4YpHnmw5V%2F0KwlAdbnjTePRbpVkNxmRrGlXY3wkNAIgI70WsB%2FV%2B0CVZQzlUh2YlTgV0D0bMM3VVle7bdS5qbEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMRNbudPiVQvAB0FUircAyY%2FMru%2BaRGYjg68dU2FZnO6mGWffpggjOVoU3y%2BMZJk2qLzlvLfJr4%2B4%2BoK26dULq6c2an7E1f63Gbs48ya4KlhhrX98mOVcVGXlAOqw56EKaFtG6ZdVL7%2FvohPbH71LI%2B2zNf082fe9%2Bb8fy1vDExConrD5UJWXwOS5N2RJ7B2nzgXSxNcvPvzDO8KjgBYszkBDimRA3k5CclAu7gxuHQuMdz2Vnt1Vth%2Bmf%2FHpu6e3hORaIgb3tbgqwB0KCZM2pCmqq78V6IXGRaY3RIpGKRIKK%2BItfccfgKeSrvbVeog7GMSjQn8Q%2BahePElOsO%2FoMLCL6eSFtKDDdSoEKJOXqpivJfqh6H31CfA2IgvrQtLcvmMUuyiCTmEI6ikyV6feMFdB0I%2BlAtuwRWjh18UCjsdIPQClq%2FwkW8aoMBOMiPwjaIi6IcgkCgnS6O4R5ubmfO3aDglHSOyMe3vWpT75OPzOHc%2BSjcrZ5vUi4TEO0nUlyEc%2BRM%2Fi7xJlrs8fe66IXJMn85kZOU3dhjRwI7La89peDm6QT37o7gwRlQ6T1k8hlWpN21LhFu8cKeskDFXMzPKldz6O0fmMxbVCExctJygTfBefoRpYm3yh3w9ja50d78MmwjQGpPIBE6QMMv90skGOqUB9kzM3tfdFxzu5bo6QnktJfvAPHxSFdIOKt%2BVo27NerJUbjmpO%2FO%2FU8Vvby%2FYAb9MHc4wgVNfdPpEoCh6cQPu%2BtzNMKrs4lvb2JcitaXx5uHcPJuoB9suUYgU0jTDipVux%2B22Y92H67HYnyrlx4FlaTnPlwYM0aui3%2BQt4T%2BaHWYIUFnH855ilYjux1Podxdc%2F%2FVBvYLvaQU00Z%2FujLNmz0sYvP4T&X-Amz-Signature=52f47b5be48a6de5f3405de55ba004e06489308795f526a4f912d3bba3765fea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5KXPPJD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T043626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjb4YpHnmw5V%2F0KwlAdbnjTePRbpVkNxmRrGlXY3wkNAIgI70WsB%2FV%2B0CVZQzlUh2YlTgV0D0bMM3VVle7bdS5qbEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMRNbudPiVQvAB0FUircAyY%2FMru%2BaRGYjg68dU2FZnO6mGWffpggjOVoU3y%2BMZJk2qLzlvLfJr4%2B4%2BoK26dULq6c2an7E1f63Gbs48ya4KlhhrX98mOVcVGXlAOqw56EKaFtG6ZdVL7%2FvohPbH71LI%2B2zNf082fe9%2Bb8fy1vDExConrD5UJWXwOS5N2RJ7B2nzgXSxNcvPvzDO8KjgBYszkBDimRA3k5CclAu7gxuHQuMdz2Vnt1Vth%2Bmf%2FHpu6e3hORaIgb3tbgqwB0KCZM2pCmqq78V6IXGRaY3RIpGKRIKK%2BItfccfgKeSrvbVeog7GMSjQn8Q%2BahePElOsO%2FoMLCL6eSFtKDDdSoEKJOXqpivJfqh6H31CfA2IgvrQtLcvmMUuyiCTmEI6ikyV6feMFdB0I%2BlAtuwRWjh18UCjsdIPQClq%2FwkW8aoMBOMiPwjaIi6IcgkCgnS6O4R5ubmfO3aDglHSOyMe3vWpT75OPzOHc%2BSjcrZ5vUi4TEO0nUlyEc%2BRM%2Fi7xJlrs8fe66IXJMn85kZOU3dhjRwI7La89peDm6QT37o7gwRlQ6T1k8hlWpN21LhFu8cKeskDFXMzPKldz6O0fmMxbVCExctJygTfBefoRpYm3yh3w9ja50d78MmwjQGpPIBE6QMMv90skGOqUB9kzM3tfdFxzu5bo6QnktJfvAPHxSFdIOKt%2BVo27NerJUbjmpO%2FO%2FU8Vvby%2FYAb9MHc4wgVNfdPpEoCh6cQPu%2BtzNMKrs4lvb2JcitaXx5uHcPJuoB9suUYgU0jTDipVux%2B22Y92H67HYnyrlx4FlaTnPlwYM0aui3%2BQt4T%2BaHWYIUFnH855ilYjux1Podxdc%2F%2FVBvYLvaQU00Z%2FujLNmz0sYvP4T&X-Amz-Signature=6401b09af28a74e2fd62afff12c28ac01637528a5b07a97a2730f0926e8527d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

