---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPNQD3V4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T040220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLDgpl2702rTMvUAtM%2BOB%2BSyHvlZbd4JYLaNIllxEdKQIgUceQaR19FE43P5qprW3GuPjBPDIaglix6TAl91JYgpkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSlFr5K0mEAOK8LqircA2m73mSI%2BVc6GiQeRwPzK234HiRMoh%2BTK92SV5BmVvRB37sJPk1YemRmfDWJUYayTNcAbE8GX8ZKOswn79MQElnqkMwOd1cZ2788nYEqVivF3rJUMeE%2F9ysS2POVqwW1LZNoZNhcrOYaCBweryqnypFK1Nbz%2F38d%2FbE1ih9P%2BHcWyEYCYbuoJhO0DLJM%2BWyQ%2BFQb7nV1HJqgOQ4AXtAQvcGUrFHvwqSxHKE4myDNV1CgsFWzSY8UQjVIptXAH3D%2FZ4pO92tDNy1ReS6U%2FwuwsCIhJx1tmyIx3MEPd8owRl5jakY1OgpFgIB0uW1zF5fjX8zNyGnCFhNsdauCpIl%2BkKIHWCylj9QVmL5oRhR5xuq%2BcckkDavFVrdhQ6Xpgf%2FapazryIYWzcdGn40Bq4jtpvHD2tnwXLaksqpbfSg17w%2BVbA47EvBJOx5BWOpGWxw7AR%2BQ4V6eRJER5cXEPpeV8OIPIGyBtT5QnTydTYZXpg2MXC5QfsxMq3j6bbqo%2BAAoWXJgm4RgxlkFyIBcq0oyRGYUe%2BD%2BRNhjMd6KDEGW8oRHFpGKul1qOCALmedSL3VnnXXNQJ2h%2FrW7ABi1N%2Bl5ztnwVKcJ%2FSeBnXPmILkCGE78MwvjRvkDYchLWdM1MJOU2ckGOqUBh6V9vMNc%2BA8wzehd7BcZInLcb8GlfwbeDFIE%2BCFhY7kECdAYieaqWHqj3090hJqe346pmjuuHDDc%2FBGk2KfC3lB7ATS8%2BdvOlPtiMC1lEqXc58zzB1QF4Sls9KCmBVsJqMM%2BtPTNYbpwOeMhPaG%2FQbY7Xw7yihKZiAUlmKpApCUsZuZ%2BN0Fq1v8Jfx%2F7pdOTqIkBUlbwS8pB1MQpfOLBDROC2yHT&X-Amz-Signature=5db2c94e6f85d143f5fdafe6d1154ce2cc5011c84aff527e9407a2800669d511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPNQD3V4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T040220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLDgpl2702rTMvUAtM%2BOB%2BSyHvlZbd4JYLaNIllxEdKQIgUceQaR19FE43P5qprW3GuPjBPDIaglix6TAl91JYgpkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSlFr5K0mEAOK8LqircA2m73mSI%2BVc6GiQeRwPzK234HiRMoh%2BTK92SV5BmVvRB37sJPk1YemRmfDWJUYayTNcAbE8GX8ZKOswn79MQElnqkMwOd1cZ2788nYEqVivF3rJUMeE%2F9ysS2POVqwW1LZNoZNhcrOYaCBweryqnypFK1Nbz%2F38d%2FbE1ih9P%2BHcWyEYCYbuoJhO0DLJM%2BWyQ%2BFQb7nV1HJqgOQ4AXtAQvcGUrFHvwqSxHKE4myDNV1CgsFWzSY8UQjVIptXAH3D%2FZ4pO92tDNy1ReS6U%2FwuwsCIhJx1tmyIx3MEPd8owRl5jakY1OgpFgIB0uW1zF5fjX8zNyGnCFhNsdauCpIl%2BkKIHWCylj9QVmL5oRhR5xuq%2BcckkDavFVrdhQ6Xpgf%2FapazryIYWzcdGn40Bq4jtpvHD2tnwXLaksqpbfSg17w%2BVbA47EvBJOx5BWOpGWxw7AR%2BQ4V6eRJER5cXEPpeV8OIPIGyBtT5QnTydTYZXpg2MXC5QfsxMq3j6bbqo%2BAAoWXJgm4RgxlkFyIBcq0oyRGYUe%2BD%2BRNhjMd6KDEGW8oRHFpGKul1qOCALmedSL3VnnXXNQJ2h%2FrW7ABi1N%2Bl5ztnwVKcJ%2FSeBnXPmILkCGE78MwvjRvkDYchLWdM1MJOU2ckGOqUBh6V9vMNc%2BA8wzehd7BcZInLcb8GlfwbeDFIE%2BCFhY7kECdAYieaqWHqj3090hJqe346pmjuuHDDc%2FBGk2KfC3lB7ATS8%2BdvOlPtiMC1lEqXc58zzB1QF4Sls9KCmBVsJqMM%2BtPTNYbpwOeMhPaG%2FQbY7Xw7yihKZiAUlmKpApCUsZuZ%2BN0Fq1v8Jfx%2F7pdOTqIkBUlbwS8pB1MQpfOLBDROC2yHT&X-Amz-Signature=9332a04285ced4a3194fbecc5a283edc12f4f2040e9184c9914b93625cf7e60a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

