---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZOIURL7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T135252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUJou%2FEKnwldtSfePsVlsO6d53hfaT1fpBqEteQukLxQIhAPLgy1ZInhetGoXNk356yp2djnu0h99sN3SMo6oVkG0aKv8DCHUQABoMNjM3NDIzMTgzODA1IgyQpbPzHq4Q9Rxb%2BTwq3AOmPgfER60X1U%2FttwPFIaP2JmpuyJMjqo3w882wkEeFN8z53W8RrcXKGJKorKCblvrxIFpAb2SnPAXlNcnHFwevpfPUASZj%2BANup%2Ba%2B0vcC19rZ9mtcyhQccR1q9eX1T5J4OHuSW4HOPuWfQZN%2B2W0hYJsP7kypxcAWr%2FlmMKzOuZJM%2Bm5EfQKdSh2D6LWLlxSrS4cfDvV9HsmlUOYpt5N1eh3I%2FoAZK%2FL%2BjcZbbejvRdAvZx7gLgEQ6qRlv6fYRzm9cpb3rg5F0A%2FKXqxduKo0yAPyBCDyb7tBB32AO%2B8fpW%2FB19AjqgXnJ9cT%2BpQ8bqzgQRrq2Nz6qO04gt8oopTd9kMcyNUTIuT24ZoKRR77q%2BAQ2nAHWLlNV85AfxvaEy0UC3zElaKzFs0rVF24GxqzSov483zXqCr8XIkiKo1xaAbzSVZA2zBPDEVqazLJigHvNk%2B%2FkFC1aSnL31JBBLqaaaJRyD3JG0Q658wDt5ucn3vfFsuQPR1PMDGnzHO01LfpclEi5uOMDJZynv9cdngjSiTlVQJ2GSlxBNglaekiTlEC2NP8iCewwaobcoOcryyinL0uWDEmRhVsUZTa8%2BNsdViusfZY8OVuxw%2FEQxDjU3l%2FYsw406gqfaDbjTDkptDJBjqkAXZ3pFwc5pFCx%2BDcpjIX2kiwpaf5NLNMDkIJ%2Bt%2Bo976WAYxTfG2KDJVvFa0WBi3R29zM3h5ojWw1iBrGHyJF0YcsYqP%2BqVAfvYXcTftMea7o9Kv4CjE2O7VINsO%2Fsth%2FJZazsNgbiAdaWDll8a%2Bbt8rnarpQb36R06qByf19nAdkqJIJQMFqYWVNI8RijLB7A%2BroCgSp3e2sTVJYDv92q6SjUBIk&X-Amz-Signature=e978c244ef51b60c933a9e44f0952be6d70c4812b9d95bd2097a6f6c75cd9830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZOIURL7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T135252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUJou%2FEKnwldtSfePsVlsO6d53hfaT1fpBqEteQukLxQIhAPLgy1ZInhetGoXNk356yp2djnu0h99sN3SMo6oVkG0aKv8DCHUQABoMNjM3NDIzMTgzODA1IgyQpbPzHq4Q9Rxb%2BTwq3AOmPgfER60X1U%2FttwPFIaP2JmpuyJMjqo3w882wkEeFN8z53W8RrcXKGJKorKCblvrxIFpAb2SnPAXlNcnHFwevpfPUASZj%2BANup%2Ba%2B0vcC19rZ9mtcyhQccR1q9eX1T5J4OHuSW4HOPuWfQZN%2B2W0hYJsP7kypxcAWr%2FlmMKzOuZJM%2Bm5EfQKdSh2D6LWLlxSrS4cfDvV9HsmlUOYpt5N1eh3I%2FoAZK%2FL%2BjcZbbejvRdAvZx7gLgEQ6qRlv6fYRzm9cpb3rg5F0A%2FKXqxduKo0yAPyBCDyb7tBB32AO%2B8fpW%2FB19AjqgXnJ9cT%2BpQ8bqzgQRrq2Nz6qO04gt8oopTd9kMcyNUTIuT24ZoKRR77q%2BAQ2nAHWLlNV85AfxvaEy0UC3zElaKzFs0rVF24GxqzSov483zXqCr8XIkiKo1xaAbzSVZA2zBPDEVqazLJigHvNk%2B%2FkFC1aSnL31JBBLqaaaJRyD3JG0Q658wDt5ucn3vfFsuQPR1PMDGnzHO01LfpclEi5uOMDJZynv9cdngjSiTlVQJ2GSlxBNglaekiTlEC2NP8iCewwaobcoOcryyinL0uWDEmRhVsUZTa8%2BNsdViusfZY8OVuxw%2FEQxDjU3l%2FYsw406gqfaDbjTDkptDJBjqkAXZ3pFwc5pFCx%2BDcpjIX2kiwpaf5NLNMDkIJ%2Bt%2Bo976WAYxTfG2KDJVvFa0WBi3R29zM3h5ojWw1iBrGHyJF0YcsYqP%2BqVAfvYXcTftMea7o9Kv4CjE2O7VINsO%2Fsth%2FJZazsNgbiAdaWDll8a%2Bbt8rnarpQb36R06qByf19nAdkqJIJQMFqYWVNI8RijLB7A%2BroCgSp3e2sTVJYDv92q6SjUBIk&X-Amz-Signature=fc3226e0fe88e0959ce31f8b690b5c801c05c853348ae25ac782a47cd72c4e0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

