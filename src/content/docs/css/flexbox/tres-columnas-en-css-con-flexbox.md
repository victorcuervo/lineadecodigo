---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666III7ENC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZVORunsLcTd7%2F5Ps5HYlAUTEE3szEQndbkKfouqHaZwIhAL1p1E31q3II6wTQ2tKgQDUR%2FW08Wh%2BIqt9sTdO2GKECKv8DCFUQABoMNjM3NDIzMTgzODA1IgyUxXe3iJPJU%2Bx7CeYq3AOlO%2BW0DRe%2B3WNaw0sMD6O69WFofo4WjgpbhU%2B%2FxFsGN%2B7S3yEVKX2m2j3%2BWCXO0AmE7C50nPuCizGNeXtjx4G7gjuzyZbk1qHLh8sjvRgQnIYs2ahGBQZW4Cgf1hUuRD8QVaBi3%2FZpU%2BObZ2F4eXieJqqoXxFf8vSYVwochlXkYfYFTsO9iDdDYpu5EWnGc3icVhYHVj5dQZ5ZqIK%2BPBMTHTmQ761ap%2BF7eP1Y7XwaEuV%2FFS5JU3XN2G7iLH26zRHoeUiFUpv4dklq%2BELzlcXIwa5Ef7kp86JYMVivQkWViH7hXCrP%2BLltVSlCpQa%2BYpLMZ3aTSbvPsrfz04Ss3Cmh9Qv8UkZ%2BJzJgVMoSCxZ%2BvvZNQ3Sjd919vWc6AuRmrhm2%2B1UT5FAT0I2F6ovuiZR3%2FLzxQAZnG2J0yH8NuDOY6So3rdYpqrX3yyDZqFx9xro9FehcC%2FPo%2BvNJ%2F%2F9M6iwDCmsikEbhlFRRB4AnuqVrata%2FT2qbUlh9xu3h1n9CghJrLa6VGXNytxMv2o6iguT79NPAKJ77y0XYn1OJTQ3%2FByCgMR5lHy6nPrhK19NULi04lZ4Ww61p8f91QR3SZLZ1uesRqlg9RzKK8u6SZF%2FzkXi7WfzU%2Fcedz7T41DCxp8nJBjqkAZ78XjQs6EBEjTVk%2BCKhwsnNLmHkOasluKeaty9cQclrwHuO8MDk54A7ldSgJbo19zuSG6yo5EVnld0gFLWeacdLSgPDWktSLxXJaA6NQaOz7x1QU87kjNJlKnl3QjDsubu0H%2B%2Bh10jVmwpY%2BAqGUQFl6pdN%2BWoauLyEU8MCDolS8umH6TRmFa1E1ULs1rsnZSI9KjteYRevDGwAa2mhyTRDVHUt&X-Amz-Signature=65b6440b926901d91f9283117730b7e48023007eab385bfb0b0629cb6939db95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666III7ENC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZVORunsLcTd7%2F5Ps5HYlAUTEE3szEQndbkKfouqHaZwIhAL1p1E31q3II6wTQ2tKgQDUR%2FW08Wh%2BIqt9sTdO2GKECKv8DCFUQABoMNjM3NDIzMTgzODA1IgyUxXe3iJPJU%2Bx7CeYq3AOlO%2BW0DRe%2B3WNaw0sMD6O69WFofo4WjgpbhU%2B%2FxFsGN%2B7S3yEVKX2m2j3%2BWCXO0AmE7C50nPuCizGNeXtjx4G7gjuzyZbk1qHLh8sjvRgQnIYs2ahGBQZW4Cgf1hUuRD8QVaBi3%2FZpU%2BObZ2F4eXieJqqoXxFf8vSYVwochlXkYfYFTsO9iDdDYpu5EWnGc3icVhYHVj5dQZ5ZqIK%2BPBMTHTmQ761ap%2BF7eP1Y7XwaEuV%2FFS5JU3XN2G7iLH26zRHoeUiFUpv4dklq%2BELzlcXIwa5Ef7kp86JYMVivQkWViH7hXCrP%2BLltVSlCpQa%2BYpLMZ3aTSbvPsrfz04Ss3Cmh9Qv8UkZ%2BJzJgVMoSCxZ%2BvvZNQ3Sjd919vWc6AuRmrhm2%2B1UT5FAT0I2F6ovuiZR3%2FLzxQAZnG2J0yH8NuDOY6So3rdYpqrX3yyDZqFx9xro9FehcC%2FPo%2BvNJ%2F%2F9M6iwDCmsikEbhlFRRB4AnuqVrata%2FT2qbUlh9xu3h1n9CghJrLa6VGXNytxMv2o6iguT79NPAKJ77y0XYn1OJTQ3%2FByCgMR5lHy6nPrhK19NULi04lZ4Ww61p8f91QR3SZLZ1uesRqlg9RzKK8u6SZF%2FzkXi7WfzU%2Fcedz7T41DCxp8nJBjqkAZ78XjQs6EBEjTVk%2BCKhwsnNLmHkOasluKeaty9cQclrwHuO8MDk54A7ldSgJbo19zuSG6yo5EVnld0gFLWeacdLSgPDWktSLxXJaA6NQaOz7x1QU87kjNJlKnl3QjDsubu0H%2B%2Bh10jVmwpY%2BAqGUQFl6pdN%2BWoauLyEU8MCDolS8umH6TRmFa1E1ULs1rsnZSI9KjteYRevDGwAa2mhyTRDVHUt&X-Amz-Signature=e1dac2c999175f95646adadacd6013d5a42bd586055e96e1451c4e904c001c10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

