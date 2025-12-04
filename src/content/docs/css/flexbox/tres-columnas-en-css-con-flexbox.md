---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6OQVHK5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQC9iz7FA7j2rJxqTYdthgIl681%2F1k5WamhsueQlGprWIAIhAN82Ymv3hUZyO5UAusaQKZqgAi%2FK4QSIS6yWVmBjzodFKv8DCEYQABoMNjM3NDIzMTgzODA1IgwAgrHL%2Fbm5tTHwnWAq3APunFCDDXIwIUMnOKJji%2BntDN7w%2FFE0U26%2FJEI86dJMxeSNqHojXWIx9T7sm4c73xcBZ%2FANhHiuLKb%2BZT9nw7iZBaR6ygJ%2FudD%2B%2FiZk5iZx3JQ%2FfDrR0qSk8gYtxaexK7U1RWy1YhcaqOFMMhv%2BHUNArIG04X9QA5Jc0GwsI2enfus1ob9avU7QRPGH5f%2B2mSnTm9HE46d9CE3n3002wIgr2udi3%2F9wNliTKJWdHfbnBooLdrUOHCRziwnPpF3F7GlVC1FnUvDkZ2i8zTaKq39n%2BUmkwBhlynw8ka%2BPk33i1phTP7up8eo0PJMykq9s2IWe69kxnTKUBufNs0PaSmpIUgdIjaL7YTB7XSWQnwOyPyzeB68orzxZRvUtTK9JWEJJmAfMqk%2BfjP4S2x9zcYguoqlakb2%2Fieb7phMzCrktORml46%2Fs5fbMBAPEntbvXq1LKLaelp4luG5CPEphDToS6Ox6usBhPSkI%2Bbb6SQm2zGyUicXUHleHeuSrC7d7Ufncwoq5y%2BBnVQqhs9JttE91jPcl3fAYiJrKm%2BbLgftYvlC7qILIzhjDAXlML07mInFrULbb9457XAl6up3kGYXvZAi7FH5B0ywxkY8kALSURuMC0MX0AsQJL2H4azC3g8bJBjqkAaNfjIx3oBbzdDJz8ySnFCFWxQBw2cIyWffLkoulKIUkRmqlXa4dp6MBztMeeCHtVWBH%2B%2FXGnD5kwMjvALPL7%2B%2BMcVQoYMyjBgJCo%2F9ajWkbQgqiwssMALoPwQv9IdSBzVDm2BcW4n868CMdLFBnhL30Y9QkartMmryCJg%2Fmvx7TZrQ5S%2FnybQcM1sRVvcRW%2BBBHO4jFtAYVRJYJfMRKgdOBNaK4&X-Amz-Signature=91abee2dc53be8d8bb8a6f8fdf540e56ae9124c5b47838fc779b5f9a29d62428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6OQVHK5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQC9iz7FA7j2rJxqTYdthgIl681%2F1k5WamhsueQlGprWIAIhAN82Ymv3hUZyO5UAusaQKZqgAi%2FK4QSIS6yWVmBjzodFKv8DCEYQABoMNjM3NDIzMTgzODA1IgwAgrHL%2Fbm5tTHwnWAq3APunFCDDXIwIUMnOKJji%2BntDN7w%2FFE0U26%2FJEI86dJMxeSNqHojXWIx9T7sm4c73xcBZ%2FANhHiuLKb%2BZT9nw7iZBaR6ygJ%2FudD%2B%2FiZk5iZx3JQ%2FfDrR0qSk8gYtxaexK7U1RWy1YhcaqOFMMhv%2BHUNArIG04X9QA5Jc0GwsI2enfus1ob9avU7QRPGH5f%2B2mSnTm9HE46d9CE3n3002wIgr2udi3%2F9wNliTKJWdHfbnBooLdrUOHCRziwnPpF3F7GlVC1FnUvDkZ2i8zTaKq39n%2BUmkwBhlynw8ka%2BPk33i1phTP7up8eo0PJMykq9s2IWe69kxnTKUBufNs0PaSmpIUgdIjaL7YTB7XSWQnwOyPyzeB68orzxZRvUtTK9JWEJJmAfMqk%2BfjP4S2x9zcYguoqlakb2%2Fieb7phMzCrktORml46%2Fs5fbMBAPEntbvXq1LKLaelp4luG5CPEphDToS6Ox6usBhPSkI%2Bbb6SQm2zGyUicXUHleHeuSrC7d7Ufncwoq5y%2BBnVQqhs9JttE91jPcl3fAYiJrKm%2BbLgftYvlC7qILIzhjDAXlML07mInFrULbb9457XAl6up3kGYXvZAi7FH5B0ywxkY8kALSURuMC0MX0AsQJL2H4azC3g8bJBjqkAaNfjIx3oBbzdDJz8ySnFCFWxQBw2cIyWffLkoulKIUkRmqlXa4dp6MBztMeeCHtVWBH%2B%2FXGnD5kwMjvALPL7%2B%2BMcVQoYMyjBgJCo%2F9ajWkbQgqiwssMALoPwQv9IdSBzVDm2BcW4n868CMdLFBnhL30Y9QkartMmryCJg%2Fmvx7TZrQ5S%2FnybQcM1sRVvcRW%2BBBHO4jFtAYVRJYJfMRKgdOBNaK4&X-Amz-Signature=a3ddf7d10b5e8a8d418ca06214acd4714d1ce088c9aa095e0bab3da4bc1fce1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

