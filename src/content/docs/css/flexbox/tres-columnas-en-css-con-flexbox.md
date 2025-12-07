---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JSUGPRY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T063348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDA242TVe4nTIgHCDpXF1x%2BO%2FhdtOG45oBorP8ileb7rQIgfMtv0yyQDbIGYm%2ByYcioQdihQp1GPIx5wwf6UN8UuxQqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIUGUaWL2DMDafTxircA9mdpDWzE%2F4e1d7OXxA7zNqlP%2BvfOaUfMB7ax2WlYumU7Ah8JsDGsmyNy%2FwAs5KWqjRuIkbasT2r3NgHXuCaSHvP1YbpKaJTX8QJHqqhCyCpSxbdWTbxJp558HrZaR%2BGy5gsas%2BDeBP4%2FtySFLEcvUAS0VUnk3DAuY%2FIqcGGKj3HBDqVWBQ9%2BpWKOiwVydu%2BUdCh%2FVfqkrYAZbXvg1QlQl%2BCVEPIhvHdlQX4RmrwNOkIH0zXc%2Fq0m7po%2BJR%2BOOp%2B67lPMZc7vnE3luZ3zU825qiAqrQfdKONqQ8KlCx3pjX2c3fO6vQKvrGa1ZuNe1nx8x61YvqerPs0vCoiSipD9%2Br2FVy92SKJ5%2FGl%2F%2BIxDYuc0BLc%2FyWXUeoBxrOIToAVyaBg9bDcYaikTwS6OOOMLHmExlzGByMFoyQz29Ac5ZaFqJIxQowk68PU0udp1LCHMMR3syeqHYa6TElH%2FFC7UbxkzF2EnPiGI9aW%2FujJ26BL42eXDv4E0dkw6LkJJLjqrHxdKExP%2FiqXrSTMENQGIe3mkXnbb3PTyBjViq9mif57%2Fy52on4JKpI7O29b%2BKteVHfvqebd6y%2FrUfdjvU3weOMwgavNU1oSqW2cT3MG3LcS8QuXsCiCUa29MFEwMLui1MkGOqUBBoEFOzLUzc%2Btj%2Biel16eEBTS6EXrVf4sbtCvGp3dVV6noAnwGVEl07LbN2sjlvND8sUlJxumTCx8nPeT0EsUdU%2B6WWzRVs90fMHClYR4xDjzJ%2Bl3s8M0AMpVnj%2FiFzA1Y0KN05yPwfl4YEmJkt5NnjSAg%2ByF%2Fy5yumzYWrNWxqZQpK07wAO7ttZpU3Iy%2FK7VtAH4F9a%2FHkeakQwDF7nvHLL6vBm0&X-Amz-Signature=20293c602d876d3f7067e139bce64ed15e42c1955ab9fe7066dcd6f2b3f438fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JSUGPRY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T063348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDA242TVe4nTIgHCDpXF1x%2BO%2FhdtOG45oBorP8ileb7rQIgfMtv0yyQDbIGYm%2ByYcioQdihQp1GPIx5wwf6UN8UuxQqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIUGUaWL2DMDafTxircA9mdpDWzE%2F4e1d7OXxA7zNqlP%2BvfOaUfMB7ax2WlYumU7Ah8JsDGsmyNy%2FwAs5KWqjRuIkbasT2r3NgHXuCaSHvP1YbpKaJTX8QJHqqhCyCpSxbdWTbxJp558HrZaR%2BGy5gsas%2BDeBP4%2FtySFLEcvUAS0VUnk3DAuY%2FIqcGGKj3HBDqVWBQ9%2BpWKOiwVydu%2BUdCh%2FVfqkrYAZbXvg1QlQl%2BCVEPIhvHdlQX4RmrwNOkIH0zXc%2Fq0m7po%2BJR%2BOOp%2B67lPMZc7vnE3luZ3zU825qiAqrQfdKONqQ8KlCx3pjX2c3fO6vQKvrGa1ZuNe1nx8x61YvqerPs0vCoiSipD9%2Br2FVy92SKJ5%2FGl%2F%2BIxDYuc0BLc%2FyWXUeoBxrOIToAVyaBg9bDcYaikTwS6OOOMLHmExlzGByMFoyQz29Ac5ZaFqJIxQowk68PU0udp1LCHMMR3syeqHYa6TElH%2FFC7UbxkzF2EnPiGI9aW%2FujJ26BL42eXDv4E0dkw6LkJJLjqrHxdKExP%2FiqXrSTMENQGIe3mkXnbb3PTyBjViq9mif57%2Fy52on4JKpI7O29b%2BKteVHfvqebd6y%2FrUfdjvU3weOMwgavNU1oSqW2cT3MG3LcS8QuXsCiCUa29MFEwMLui1MkGOqUBBoEFOzLUzc%2Btj%2Biel16eEBTS6EXrVf4sbtCvGp3dVV6noAnwGVEl07LbN2sjlvND8sUlJxumTCx8nPeT0EsUdU%2B6WWzRVs90fMHClYR4xDjzJ%2Bl3s8M0AMpVnj%2FiFzA1Y0KN05yPwfl4YEmJkt5NnjSAg%2ByF%2Fy5yumzYWrNWxqZQpK07wAO7ttZpU3Iy%2FK7VtAH4F9a%2FHkeakQwDF7nvHLL6vBm0&X-Amz-Signature=1c78a73c2ed10c4731dafacd233cda5a18adee1eb0da2c0d5ad20a2264b1899f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

