---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ASA4L44%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T060041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGuvHoqbfJCF54sTFTlmR4QZvVX9FIq1UkaJD3sSHV9AiEAhh35W6L8oLMFRBYXzo9k%2BVpI6XlKZV5KUr32jO33fWYqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDwQLKTsELSgL0WdircA2twha%2FJSlnkAQ0kZoeFDyE8palhj1wzrs3vwQ5WckgxWlfTH9PKrorbftSKusUOK4QkEN35OCrjAH4L7qR%2B61QtB4s4c%2BRIvJphm5wqljAf3yE31bIWo5gTT6DqzsdHaVsvz1zAdAwCUM9MR18cWi1XZhWlaaMX4fIGJHii%2F1OKDKoJk1FNhY198T%2FxPkJIFPnnACyzeO7Ntr1I1PSR1fUuE%2BYrBer%2FzryiKX%2BTvmYvHFvV9sTSgmZEvamr9XCFYlp%2B%2B76QmBVIYQsOJ%2ByuJZnGpiixFEzXY8ZP3I6EaFqiRYFz37PSm43yYbbvGiw18VWtzbNJS8Omd6GWxkxswxl3Z7g1B6T14OO%2Fkye9J6FpgwJaCOYPukxmXkq63qxlIiPg1B7vbSgChS9sVn8JHEsTY3nLaEx4codxQzIiqMdDDN8PBakud0dgdYZomGnL2Xl1uwuxJIyBdd6nsQSTwrC5KDH4SMHLx%2Bfb2STuU3ORqSlNuP%2BWlP%2BWRcan%2FKtaMbs4MTPEY7UcXqohsDQoVa%2BsMrNCHG230ZW4xMHcC4gck82SjQcjRc6ODx94w4erPtTbUqRHhfhWrUbQGjZG7zjYhJlfRf%2BZuiQOmIMBz094yTyitk0oUShjQQ%2B3MJzl3skGOqUBh0%2Bb7Ui1WQqRLkKuC0bHg1W9kp5zVogVXwmWGgf22W2BRqw%2FbIiiN27N5J8QsXQJEsDKjCWA41PGzUKGMTanAFE9%2F9D4EqZ%2BB%2BhHM98H0onutDFbe35G19uO3oa%2B9AZPHAOre8%2BGU3v2vcb78lNXaxpHUE44BIGI%2FJm55i7XWjUmVquMxnFlD1%2FF1YV8A5BoMxh4afKf%2BkHPD5Gxm3e0Q5FZX1D8&X-Amz-Signature=1d580e99a30af0301a71a75fd067c1a99cff06fbbfdf756d0639ae90969a91ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ASA4L44%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T060041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGuvHoqbfJCF54sTFTlmR4QZvVX9FIq1UkaJD3sSHV9AiEAhh35W6L8oLMFRBYXzo9k%2BVpI6XlKZV5KUr32jO33fWYqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDwQLKTsELSgL0WdircA2twha%2FJSlnkAQ0kZoeFDyE8palhj1wzrs3vwQ5WckgxWlfTH9PKrorbftSKusUOK4QkEN35OCrjAH4L7qR%2B61QtB4s4c%2BRIvJphm5wqljAf3yE31bIWo5gTT6DqzsdHaVsvz1zAdAwCUM9MR18cWi1XZhWlaaMX4fIGJHii%2F1OKDKoJk1FNhY198T%2FxPkJIFPnnACyzeO7Ntr1I1PSR1fUuE%2BYrBer%2FzryiKX%2BTvmYvHFvV9sTSgmZEvamr9XCFYlp%2B%2B76QmBVIYQsOJ%2ByuJZnGpiixFEzXY8ZP3I6EaFqiRYFz37PSm43yYbbvGiw18VWtzbNJS8Omd6GWxkxswxl3Z7g1B6T14OO%2Fkye9J6FpgwJaCOYPukxmXkq63qxlIiPg1B7vbSgChS9sVn8JHEsTY3nLaEx4codxQzIiqMdDDN8PBakud0dgdYZomGnL2Xl1uwuxJIyBdd6nsQSTwrC5KDH4SMHLx%2Bfb2STuU3ORqSlNuP%2BWlP%2BWRcan%2FKtaMbs4MTPEY7UcXqohsDQoVa%2BsMrNCHG230ZW4xMHcC4gck82SjQcjRc6ODx94w4erPtTbUqRHhfhWrUbQGjZG7zjYhJlfRf%2BZuiQOmIMBz094yTyitk0oUShjQQ%2B3MJzl3skGOqUBh0%2Bb7Ui1WQqRLkKuC0bHg1W9kp5zVogVXwmWGgf22W2BRqw%2FbIiiN27N5J8QsXQJEsDKjCWA41PGzUKGMTanAFE9%2F9D4EqZ%2BB%2BhHM98H0onutDFbe35G19uO3oa%2B9AZPHAOre8%2BGU3v2vcb78lNXaxpHUE44BIGI%2FJm55i7XWjUmVquMxnFlD1%2FF1YV8A5BoMxh4afKf%2BkHPD5Gxm3e0Q5FZX1D8&X-Amz-Signature=d5bfea5ae276b7ec3ab3d738c6250e86d77f2e3287bc414b5bd4b51b0f60716c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

