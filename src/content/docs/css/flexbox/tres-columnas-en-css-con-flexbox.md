---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662JRGU67%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T192328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHl1SbOyz7nJXy2rnevwdcHQVheKwFKHp0DQyY%2FJ%2Bf%2FJAiA%2FgKQK0FpJd3%2FO4datHH%2B4MPKhQ2KZYf9caKgUwpqepir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMKRWG3QN%2FlPk1g%2F4zKtwDXQXU0679dWEs19kv2xVwF0W8gDlhUKtg908ouyxRkwP3tVvzd35mixacx5g%2FABTM%2BZCa0K88IE%2BMTuA7x0uS5r49LTSApK%2FpYp0dbb6TMWcK0Mob7%2FzHxpDGXrMa2wwvwkZJGaoq%2B45UnCtBCPfoFdvMcLscYZgi2DkQVsHxkL%2B8fBCx7q3g3mj%2BCqaxfgndMJG7QGLL%2B1NTzP10C4HsKX8%2BzHoaZRklZ1D7rIN1tKJhWBt3g3TUgGNuDEvad6zLAxjEkV2slV%2Bv0t0dYk8F3LhoN8SWL2OEmvBAQTHIjrDqSah4%2F7LE8NC2EbMHSp8yD83IfXqf3pR4dmJwwG6LkBozQoIvs1ezYryDssWP0yEo7wQA4nXd25z8%2BKYcPyoeC68sk%2B1sW6mZuUQUGiMY6iPKfxWjV8FzceTvkwgETVXbyq9I%2BO0%2Bad7u8qW759hi%2BgfpAlmQwxUoWgJ%2FHyNM4g2uZ7M0%2BwgnWFtZZy1dzYHytKQeVurPaHaoDH1kxGJvW%2Bacnn%2BQauzGXJZL4kkCL83alFUIEymXEgTKl3PlwNTMu9iv7SUTuNe%2BAiLTUmSbM1LvjJb1Dgk6sgEv877kQ7OZ8alwbD2lsdpQOUdJGA3bgqUXwIev0VM1bBUwxMzRyQY6pgFb0VqzxSZUBbBQpE8y6559kBer%2BP%2FtSCwqpx5bmXfxLcHKWUYtIi6J9El%2B1G90ifkVsMsvWpGopqu0dEd%2Bow2BP2DZCPlHT8a2q6ESjDjRJEDkVeoKuHFhrVqdzvoREZLZxQ2gLEd40mcIQcR%2FbvKcQ8752R%2BWaAudaneiJ5ADdFe%2FfvPkKiKvrJpgIxmiTgqNS4b0bQiic%2Bq6Xt4QZwkB0osx03e9&X-Amz-Signature=78127b80695cfd21ca47e91b5eca02b89a58dab258bb849a5112cdec20c59e72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662JRGU67%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T192328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHl1SbOyz7nJXy2rnevwdcHQVheKwFKHp0DQyY%2FJ%2Bf%2FJAiA%2FgKQK0FpJd3%2FO4datHH%2B4MPKhQ2KZYf9caKgUwpqepir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMKRWG3QN%2FlPk1g%2F4zKtwDXQXU0679dWEs19kv2xVwF0W8gDlhUKtg908ouyxRkwP3tVvzd35mixacx5g%2FABTM%2BZCa0K88IE%2BMTuA7x0uS5r49LTSApK%2FpYp0dbb6TMWcK0Mob7%2FzHxpDGXrMa2wwvwkZJGaoq%2B45UnCtBCPfoFdvMcLscYZgi2DkQVsHxkL%2B8fBCx7q3g3mj%2BCqaxfgndMJG7QGLL%2B1NTzP10C4HsKX8%2BzHoaZRklZ1D7rIN1tKJhWBt3g3TUgGNuDEvad6zLAxjEkV2slV%2Bv0t0dYk8F3LhoN8SWL2OEmvBAQTHIjrDqSah4%2F7LE8NC2EbMHSp8yD83IfXqf3pR4dmJwwG6LkBozQoIvs1ezYryDssWP0yEo7wQA4nXd25z8%2BKYcPyoeC68sk%2B1sW6mZuUQUGiMY6iPKfxWjV8FzceTvkwgETVXbyq9I%2BO0%2Bad7u8qW759hi%2BgfpAlmQwxUoWgJ%2FHyNM4g2uZ7M0%2BwgnWFtZZy1dzYHytKQeVurPaHaoDH1kxGJvW%2Bacnn%2BQauzGXJZL4kkCL83alFUIEymXEgTKl3PlwNTMu9iv7SUTuNe%2BAiLTUmSbM1LvjJb1Dgk6sgEv877kQ7OZ8alwbD2lsdpQOUdJGA3bgqUXwIev0VM1bBUwxMzRyQY6pgFb0VqzxSZUBbBQpE8y6559kBer%2BP%2FtSCwqpx5bmXfxLcHKWUYtIi6J9El%2B1G90ifkVsMsvWpGopqu0dEd%2Bow2BP2DZCPlHT8a2q6ESjDjRJEDkVeoKuHFhrVqdzvoREZLZxQ2gLEd40mcIQcR%2FbvKcQ8752R%2BWaAudaneiJ5ADdFe%2FfvPkKiKvrJpgIxmiTgqNS4b0bQiic%2Bq6Xt4QZwkB0osx03e9&X-Amz-Signature=87201b1041fdbb75e1809b835a6dd83a553640f4dde857e0b25051777460d67d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

