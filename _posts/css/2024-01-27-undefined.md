---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLU6WOTJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T155043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIGJGvH4ug7bvpvhFxvaEcQ1U4rXgo5Aj7TdSUqdZvRuQAiA9J%2BdnVKYXVhWCAMfiDx6luYfK%2FKvuz%2FoAN9AxGgIngSr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMJzJRyUaYOewYQdflKtwDR9mfMklolmcQI9uIlnEzs6O%2B4wLndMigKNQE5l55TiZdCU55PhcjwuuEqdiYqbhxkuZUCKphTG8I8JmawFLOUP3Sn3WZzijJCdaAL1JFHrHLXRiUWrWCHGIk5y75FEiQKk49rlxiBYSx506tR1geEmyFv9RiTiz0bTPj%2FS6BCbB9VV8oR98SjfB5VBgf65qB1esBrJxkg1huZmKeGoXOqlEIPjjwohfFhSgEPTkY4vXDdBcdMe41IzS8kUJgcum8%2BSEcb49W1UJvr3DCpKc12%2FDa%2FXT4b2P8ywUoZWlDMmFXrkCdyPnyIdYGKD90ZHRHcPSUyU6JzWpuwIJcnlQPQKHRNcHUR8DgV4SAhyx1cQZbrW8c18ImyBcev9BiSh28XwxzTcgTIq2rhMlaAtxDsx1SoqBcuRLldtNgwTe82ylbcz5soZiM%2Bs53X9grEntIB16T0Hmktyav0FRraYyZuQqq1U3sEHrSAq3lwvkM9UKNUBGpVbQc5setlO%2BEo6fWpyKz1aElXLdgHafnsUA78rN9m9vFRWXUXRIP4FASI948oTO4tKF0dJx3lLPxTYHmHtFIWrAhWAg1rw7gDwzYaanpViFIAGg1aibv3%2BGdLb2xZiwGZFVZWFAEsy0wtabByQY6pgGoSGF0lQJloVyhSSphSgGTFEbqZy6uHXAqN%2FJAuS7bgpcbd%2BLGG6KRdbr7f4EymIJG16DzSOODqmp0aiXw0CAjQDgIs5vlt3f5%2BdUp6unifajFLDF8eiXXQ7wltKlfcdSSIQcG1zhh7tcu2etsA%2FCNVO1tJ8VSGUkikNk0oN049L%2FmI7Y%2FeREjlTPJKK4TAdY4ftcFvcA8ggeWGYUtXApJPZl8fpog&X-Amz-Signature=97d3140cdaea8b0eba214b14e0a423968ff69bd40f95f70509d702be82e25ac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLU6WOTJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T155043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIGJGvH4ug7bvpvhFxvaEcQ1U4rXgo5Aj7TdSUqdZvRuQAiA9J%2BdnVKYXVhWCAMfiDx6luYfK%2FKvuz%2FoAN9AxGgIngSr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMJzJRyUaYOewYQdflKtwDR9mfMklolmcQI9uIlnEzs6O%2B4wLndMigKNQE5l55TiZdCU55PhcjwuuEqdiYqbhxkuZUCKphTG8I8JmawFLOUP3Sn3WZzijJCdaAL1JFHrHLXRiUWrWCHGIk5y75FEiQKk49rlxiBYSx506tR1geEmyFv9RiTiz0bTPj%2FS6BCbB9VV8oR98SjfB5VBgf65qB1esBrJxkg1huZmKeGoXOqlEIPjjwohfFhSgEPTkY4vXDdBcdMe41IzS8kUJgcum8%2BSEcb49W1UJvr3DCpKc12%2FDa%2FXT4b2P8ywUoZWlDMmFXrkCdyPnyIdYGKD90ZHRHcPSUyU6JzWpuwIJcnlQPQKHRNcHUR8DgV4SAhyx1cQZbrW8c18ImyBcev9BiSh28XwxzTcgTIq2rhMlaAtxDsx1SoqBcuRLldtNgwTe82ylbcz5soZiM%2Bs53X9grEntIB16T0Hmktyav0FRraYyZuQqq1U3sEHrSAq3lwvkM9UKNUBGpVbQc5setlO%2BEo6fWpyKz1aElXLdgHafnsUA78rN9m9vFRWXUXRIP4FASI948oTO4tKF0dJx3lLPxTYHmHtFIWrAhWAg1rw7gDwzYaanpViFIAGg1aibv3%2BGdLb2xZiwGZFVZWFAEsy0wtabByQY6pgGoSGF0lQJloVyhSSphSgGTFEbqZy6uHXAqN%2FJAuS7bgpcbd%2BLGG6KRdbr7f4EymIJG16DzSOODqmp0aiXw0CAjQDgIs5vlt3f5%2BdUp6unifajFLDF8eiXXQ7wltKlfcdSSIQcG1zhh7tcu2etsA%2FCNVO1tJ8VSGUkikNk0oN049L%2FmI7Y%2FeREjlTPJKK4TAdY4ftcFvcA8ggeWGYUtXApJPZl8fpog&X-Amz-Signature=00ff94d4fab28d9085f09210e4178e63a1b8cad1bec56204f171130f5dcfec9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

