---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645BA35AG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T005548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAIqY9JXcbLU2P2VcgkWFIAiNSSyEN1RSFG1t7vzFverAiEArF0kp9M7xVsh4fZ7CCO6zLvcKkIa4i0rsteTx9GZ1QoqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8WIQ1EmMsaadnNwircA7JxvB3Vz0cUZziI7J%2BOIaWsiVqM0qgOOHhged9LAOi8IFYGro25E2tEmc9EsRK2hwbkzfim4jim2ctCE2YjIjMFhFiNeRRJ%2BYdctx4CH%2FYP6yX%2FaVA3u8dMTZbsn9MaJ6Cg%2Bq4rZNZKvEJb5ADgzUnq0IaRR6DJDI1wkYV5u6Z0AK%2FlvWi%2B0cFYvQzTXcWCskHg%2F1HN6JjYNgCesI6FO%2FgZatbbwl3Gkg3g6mM1cWW0rdzxxJISqlWku5pzQ8CNeDLQT20Ip%2BMoL%2FYmiLupAnNp0cpSCqlh9wKIjJFElPSuO3ewJSGk9Mcmy%2FdqBLAj2v6GWJeqLrFwsd%2BI9fOBdjtxIe5wgS7qn4u6hqEiImMdydcwZpdVfHs5P9TMlqG%2BX9Sm4ALZjQxXZAvzi751AjDOHjSsN0%2FlVt9452km9M1sLV0F8OdbrenIpZbj1KrMz1CPGutWWdL2X6DCD9jNCmGEySZgZaOtbZN%2F2qLyeAxs0hUFMrFHAMBUm5N4Hf5meXT1N5NVwuzxQflAZE3eYPwjf6Dx%2FVSX6MQ%2BXAAi7l%2FKH2cWGS3RQl4NWGrPmg3ZfLZJeVq8RpkZ0PwJ9DLl7pLXj%2BVWVQklmzuso365IbngkrsxHXUJg6kqnfY%2FMM3C3ckGOqUBz9UfBFGeNFaINZoxFMBq83qNGsfqW41Wygta6JbJqDUiHujLUZkBuASjl4F%2Bk49gq0JeW4nA8b8oiHVREgypasmgrUxqABk9yvqWJzn7SdNUPjgTQRXmHHlksZTJT82xpWDNphF2BngPgp4tx1GY7NAmbZZjBkUxhL4cA21O0D1gMyIQRIbFcH4HaQKPzQzdMmHVv0nJgKUhg8wl56mw5hb2DZ76&X-Amz-Signature=55e10f710ee8a43bcbe59b7a8504a24d139e29424799aa3d74c2881e2fc7f171&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645BA35AG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T005548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAIqY9JXcbLU2P2VcgkWFIAiNSSyEN1RSFG1t7vzFverAiEArF0kp9M7xVsh4fZ7CCO6zLvcKkIa4i0rsteTx9GZ1QoqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8WIQ1EmMsaadnNwircA7JxvB3Vz0cUZziI7J%2BOIaWsiVqM0qgOOHhged9LAOi8IFYGro25E2tEmc9EsRK2hwbkzfim4jim2ctCE2YjIjMFhFiNeRRJ%2BYdctx4CH%2FYP6yX%2FaVA3u8dMTZbsn9MaJ6Cg%2Bq4rZNZKvEJb5ADgzUnq0IaRR6DJDI1wkYV5u6Z0AK%2FlvWi%2B0cFYvQzTXcWCskHg%2F1HN6JjYNgCesI6FO%2FgZatbbwl3Gkg3g6mM1cWW0rdzxxJISqlWku5pzQ8CNeDLQT20Ip%2BMoL%2FYmiLupAnNp0cpSCqlh9wKIjJFElPSuO3ewJSGk9Mcmy%2FdqBLAj2v6GWJeqLrFwsd%2BI9fOBdjtxIe5wgS7qn4u6hqEiImMdydcwZpdVfHs5P9TMlqG%2BX9Sm4ALZjQxXZAvzi751AjDOHjSsN0%2FlVt9452km9M1sLV0F8OdbrenIpZbj1KrMz1CPGutWWdL2X6DCD9jNCmGEySZgZaOtbZN%2F2qLyeAxs0hUFMrFHAMBUm5N4Hf5meXT1N5NVwuzxQflAZE3eYPwjf6Dx%2FVSX6MQ%2BXAAi7l%2FKH2cWGS3RQl4NWGrPmg3ZfLZJeVq8RpkZ0PwJ9DLl7pLXj%2BVWVQklmzuso365IbngkrsxHXUJg6kqnfY%2FMM3C3ckGOqUBz9UfBFGeNFaINZoxFMBq83qNGsfqW41Wygta6JbJqDUiHujLUZkBuASjl4F%2Bk49gq0JeW4nA8b8oiHVREgypasmgrUxqABk9yvqWJzn7SdNUPjgTQRXmHHlksZTJT82xpWDNphF2BngPgp4tx1GY7NAmbZZjBkUxhL4cA21O0D1gMyIQRIbFcH4HaQKPzQzdMmHVv0nJgKUhg8wl56mw5hb2DZ76&X-Amz-Signature=2bcea9bddc7f993f11c1848be51e865a60ac9e32989d66458f012ba3172f13f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

