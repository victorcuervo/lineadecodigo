---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4KCQ2ZZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T233131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8Na7mtKHvW9N9RtXqycqObrM6HEgZ1n9sTJI2ZkjqlAIhANwmTV%2FIaT2Gh4szasWToBWWwwnVWshDna9bjJxTQxWfKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyV1ndTLynZEtbVacsq3ANWFb8ebkIwfhBpwssdGSmUk1MsDOjTcd9bamZK85HghR6LVX26E1NPfHhbM2bZVN%2Fa8j6LHvCaIFrJWUTTefB3zcENCNkmF6csjwcovWq2bPE5QFaSxX%2FL06ERLvn9CJcYL80ogLXc41pEdnEmzlCj7gYDivkgizXG2tcsWC%2Bq6ZJFcRftqmnMffPjlsDmFut5QZIobFHL9rKwYwc2xTTAl5MOh42vF0w%2FzxVwV468%2FO%2BvLXUR1ZMM2yqT4CNRNBD6tJCPLjxWOp91RmwthYi%2BRXNaCVt6%2F8WdaPS8Dy%2FJWz3rZYc9D%2BsQaKECDbcmaUJlV996MrpAix40GpOAp6NwW%2FsN5pnWzMctOMtlZ0gsr3EQ1HAvW8FOO6ngImWj0n7edrTiflpaa1lXOMjVDzL905UabLEBfAaugypo0GLYRasj76CDUiKVxZp4xAAIxaEMIV70c4XWz2F9NL61BMwGkTk1d8JSN2qjowL2Wze72k2%2BG9zQX%2FWZZz6psi1FZgMeGwS%2F7tViKQAa926ti0ttmK6ljQg5%2BalrYt%2FFRSqu8uDWbQerBd9YwUnMQfaoMuOecdlxZzKvi71DzvbJN%2Bc5k0oTV2StwUfq2pZEb55NjyYFG9K9bIWPS%2BolQDDthNjJBjqkAYd2qwZmXuSZyz59XhVDesysWByqhFHUSPhKmI04BK26AiIcZWRh5f8rW3m9UQ1vyKD5yJFHk3LGEItCaWRh6W%2Ff1xiGct4eUntWaJtdeh0Hx8pmG1ERRQNBO66nZN6unEGyMmylA2%2FuaQJNYq4uSQsr3req%2BwM0E3z4%2ByWqpzC1aknVcKkYYEWtzcApKkqX1lLrXAMAnkOimDeqXImvnYm1TzoU&X-Amz-Signature=0f6232bf9c9b580c6564ab9e2db4a7d2086f2802b364d90260e33258e157c777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4KCQ2ZZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T233131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8Na7mtKHvW9N9RtXqycqObrM6HEgZ1n9sTJI2ZkjqlAIhANwmTV%2FIaT2Gh4szasWToBWWwwnVWshDna9bjJxTQxWfKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyV1ndTLynZEtbVacsq3ANWFb8ebkIwfhBpwssdGSmUk1MsDOjTcd9bamZK85HghR6LVX26E1NPfHhbM2bZVN%2Fa8j6LHvCaIFrJWUTTefB3zcENCNkmF6csjwcovWq2bPE5QFaSxX%2FL06ERLvn9CJcYL80ogLXc41pEdnEmzlCj7gYDivkgizXG2tcsWC%2Bq6ZJFcRftqmnMffPjlsDmFut5QZIobFHL9rKwYwc2xTTAl5MOh42vF0w%2FzxVwV468%2FO%2BvLXUR1ZMM2yqT4CNRNBD6tJCPLjxWOp91RmwthYi%2BRXNaCVt6%2F8WdaPS8Dy%2FJWz3rZYc9D%2BsQaKECDbcmaUJlV996MrpAix40GpOAp6NwW%2FsN5pnWzMctOMtlZ0gsr3EQ1HAvW8FOO6ngImWj0n7edrTiflpaa1lXOMjVDzL905UabLEBfAaugypo0GLYRasj76CDUiKVxZp4xAAIxaEMIV70c4XWz2F9NL61BMwGkTk1d8JSN2qjowL2Wze72k2%2BG9zQX%2FWZZz6psi1FZgMeGwS%2F7tViKQAa926ti0ttmK6ljQg5%2BalrYt%2FFRSqu8uDWbQerBd9YwUnMQfaoMuOecdlxZzKvi71DzvbJN%2Bc5k0oTV2StwUfq2pZEb55NjyYFG9K9bIWPS%2BolQDDthNjJBjqkAYd2qwZmXuSZyz59XhVDesysWByqhFHUSPhKmI04BK26AiIcZWRh5f8rW3m9UQ1vyKD5yJFHk3LGEItCaWRh6W%2Ff1xiGct4eUntWaJtdeh0Hx8pmG1ERRQNBO66nZN6unEGyMmylA2%2FuaQJNYq4uSQsr3req%2BwM0E3z4%2ByWqpzC1aknVcKkYYEWtzcApKkqX1lLrXAMAnkOimDeqXImvnYm1TzoU&X-Amz-Signature=6ac1598bba2fd4f85ffb58bc6051eac569e06099431b2edafd49109e25809ecd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

