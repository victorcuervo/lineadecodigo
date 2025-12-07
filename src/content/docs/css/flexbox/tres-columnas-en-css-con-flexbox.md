---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RGI2XGX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T111824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVh%2FiUOWSXbtUQcMcPYVEckGjNzjPOkUAfcYYAuDB8GAIgAnYWD6ARiY7%2F0hQxCpeRv5a6quWVz%2ByK1eZX9RvlQDMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaoYEihrpjj0C44HircAzqDN%2FfMu4%2FhspepdFHXhXm6rRr0Ac0ANwPgz1ltR2Z9srGI2BnZN7h1FTar9%2BRTKOitSCO5UaTN7rcGGSdwQWZqbbHLyMiDGpt1KtUw9PtMuGtl%2B5OISSe4JmQXU9mv1Jy7PldraaGh8QHPSXc54UX4lainEG37HhPWawAqZvppmSVqCiBVguGYlotMV8WDRdUIXs4we4Ek8HFpdfEnTG%2B9J2MULEkiGSCjgME5Noi3ifsw9dz4ihhBqy%2B%2Bcxw2QOiexn6SK2lAMZOuPq5gfXFL7UC380v7qBa%2B%2FocqNSiQvxlMb4fkLIvWM1kG1S16nPd33aZHTRgwBtt4Ur0PIvQImnuVE0vGtqAj1pYOmwycidTaVeaQ71jybLAsQayTbGAj%2BYiuK6u0uVoPVDOc20W7Vc%2FRn%2F4ry4oL0BqVeBlfUcD2CzUN%2FJtXYdbiAfZLDyxHaODE9w3lyauE8kbFnl8qE36WOlMkkGmCwK8FiMbORoOcPxu3Rn8p3ZublMOCDkmvmcC9tSa8de8f9sEknT%2B9ikUQzngT1ERp%2FlY68onAxUFIkkwNSpGFIq5G2kaBLCZ2vBYl8I%2FeTZqkxzHBFsnntIF0JZl8rhZX4PRj93E6zotZzEd2O1%2BuuhA3MM2a1ckGOqUBGQLBwN%2FEko6jxnMzDaMgZMGujTsDBmpNLi5kDJ4X85mQ9fIf0cpoaFsXCvGmnxUoNT04lXRIz%2Flh5s0HDAYQ2Y4K4udsEzyvYvudaCny81DUhrq0dfh85LypIJNFYtnqiqLFyKhhqYlBULI0YejdqLzaUSDBdaAHo0KAgnPYIMgPJAtVDhPWtIXt7%2Be3pyYzgp2u2UYLWviRrBL4ijt70PbUuubv&X-Amz-Signature=da59d531383d5c2b5ae4094417c127caa62b9b36248d077367c9ec48cb40ee69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RGI2XGX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T111824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVh%2FiUOWSXbtUQcMcPYVEckGjNzjPOkUAfcYYAuDB8GAIgAnYWD6ARiY7%2F0hQxCpeRv5a6quWVz%2ByK1eZX9RvlQDMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaoYEihrpjj0C44HircAzqDN%2FfMu4%2FhspepdFHXhXm6rRr0Ac0ANwPgz1ltR2Z9srGI2BnZN7h1FTar9%2BRTKOitSCO5UaTN7rcGGSdwQWZqbbHLyMiDGpt1KtUw9PtMuGtl%2B5OISSe4JmQXU9mv1Jy7PldraaGh8QHPSXc54UX4lainEG37HhPWawAqZvppmSVqCiBVguGYlotMV8WDRdUIXs4we4Ek8HFpdfEnTG%2B9J2MULEkiGSCjgME5Noi3ifsw9dz4ihhBqy%2B%2Bcxw2QOiexn6SK2lAMZOuPq5gfXFL7UC380v7qBa%2B%2FocqNSiQvxlMb4fkLIvWM1kG1S16nPd33aZHTRgwBtt4Ur0PIvQImnuVE0vGtqAj1pYOmwycidTaVeaQ71jybLAsQayTbGAj%2BYiuK6u0uVoPVDOc20W7Vc%2FRn%2F4ry4oL0BqVeBlfUcD2CzUN%2FJtXYdbiAfZLDyxHaODE9w3lyauE8kbFnl8qE36WOlMkkGmCwK8FiMbORoOcPxu3Rn8p3ZublMOCDkmvmcC9tSa8de8f9sEknT%2B9ikUQzngT1ERp%2FlY68onAxUFIkkwNSpGFIq5G2kaBLCZ2vBYl8I%2FeTZqkxzHBFsnntIF0JZl8rhZX4PRj93E6zotZzEd2O1%2BuuhA3MM2a1ckGOqUBGQLBwN%2FEko6jxnMzDaMgZMGujTsDBmpNLi5kDJ4X85mQ9fIf0cpoaFsXCvGmnxUoNT04lXRIz%2Flh5s0HDAYQ2Y4K4udsEzyvYvudaCny81DUhrq0dfh85LypIJNFYtnqiqLFyKhhqYlBULI0YejdqLzaUSDBdaAHo0KAgnPYIMgPJAtVDhPWtIXt7%2Be3pyYzgp2u2UYLWviRrBL4ijt70PbUuubv&X-Amz-Signature=839d0bc1044ceb6b6e31b80acd010bb68d97b60177ffd9408c7bbbc91a29db87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

