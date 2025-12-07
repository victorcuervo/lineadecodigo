---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGGXJWFK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T211717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEyNtyUml2yd8GsK8zUmndJyDVpaWVCHoe1llIHMHqJAiAuOwx7%2FD2SP%2FaKgphW%2FvegUQU9EKcBkTSrCYew6NkO8yqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlrDNmjbS8456%2BEMuKtwDJD7dNF%2BeL9h4y67jdHIMNzvDEAJBnzEk2hsAwCk5q3mKjdaT8BJtrBZEnXnXHQz5WktYN7FyveZTdCa8mEM5f4GRaUwemdZaVqYU4qdoXDklgg6vr68apiYeSgoLOfm3MGk0dhWoUdaZef9n%2FpIJX8YH4dLTN9LeuAS9Pi5WJV2qbjopLyqZdPtym7F6hnW8gszoENtg4tysuCD72%2FzoAo%2BuTf1JgcN4gaWm%2FHwCGfupFJLV%2FhTpUgIHbw%2BfXG8V6HDbadJnDvmyF%2Bdkly5A3vKno4T1Hg112RC9%2FwtHbrW2bvmrL%2BcNbYZEJ79dDf1b7ciIehY83PFxRNzNeSRsT%2FJ8ZJb1zm8CYYlnY%2FytadtTgLmDOYlGM5bB10ySZrRN%2BOKuPM30aHHCxrSWNsceeBbPiQ%2B6N012jWS9fAAcMRBpY%2BcebEouEV%2FCU6Fq2RxoqX05TKKCs1yDQchTCXzO%2B1Q9%2BUBwE5oREBcjsZTweLwSFi3YbviGKUcOred0GJAAxHGzONQLuCF5tyM4Px2gppO%2BPoXhEdytth2MNWpt4TvfMIavCp8cDg0AwabXB3nZbLtkqFq55poqmtkp3Fz59dUZt0AcZ0DiKbrNH3kZ58jbhOKSYdIa8%2FBXWWUwvMfXyQY6pgFRdvC5nH10uTHRnFEMbs0h63HXS1vvkNNVVdF29qdwHw%2F2jYvgXVaeZb2D5J9U72ts73qTe%2FaOQSmIh4Kxz36Me7xTaSK0LSbJUURIQ9VY13wqeVDFRQhYt%2FRuhHD%2FZ23o7vr24JHQgoCtUoTpOd5hXhbkafIEuZ9ySmMSSX%2FHI00jZYDng5Pf%2FEDj4JL00iQnWdzvtnC490s8tcVJCK6a3J9Xh%2BbY&X-Amz-Signature=dea8222ee5c3cc83fb99eb02894c916d4e3eda4ca95b04bf928c6c55ddf3b67b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGGXJWFK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T211717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEyNtyUml2yd8GsK8zUmndJyDVpaWVCHoe1llIHMHqJAiAuOwx7%2FD2SP%2FaKgphW%2FvegUQU9EKcBkTSrCYew6NkO8yqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlrDNmjbS8456%2BEMuKtwDJD7dNF%2BeL9h4y67jdHIMNzvDEAJBnzEk2hsAwCk5q3mKjdaT8BJtrBZEnXnXHQz5WktYN7FyveZTdCa8mEM5f4GRaUwemdZaVqYU4qdoXDklgg6vr68apiYeSgoLOfm3MGk0dhWoUdaZef9n%2FpIJX8YH4dLTN9LeuAS9Pi5WJV2qbjopLyqZdPtym7F6hnW8gszoENtg4tysuCD72%2FzoAo%2BuTf1JgcN4gaWm%2FHwCGfupFJLV%2FhTpUgIHbw%2BfXG8V6HDbadJnDvmyF%2Bdkly5A3vKno4T1Hg112RC9%2FwtHbrW2bvmrL%2BcNbYZEJ79dDf1b7ciIehY83PFxRNzNeSRsT%2FJ8ZJb1zm8CYYlnY%2FytadtTgLmDOYlGM5bB10ySZrRN%2BOKuPM30aHHCxrSWNsceeBbPiQ%2B6N012jWS9fAAcMRBpY%2BcebEouEV%2FCU6Fq2RxoqX05TKKCs1yDQchTCXzO%2B1Q9%2BUBwE5oREBcjsZTweLwSFi3YbviGKUcOred0GJAAxHGzONQLuCF5tyM4Px2gppO%2BPoXhEdytth2MNWpt4TvfMIavCp8cDg0AwabXB3nZbLtkqFq55poqmtkp3Fz59dUZt0AcZ0DiKbrNH3kZ58jbhOKSYdIa8%2FBXWWUwvMfXyQY6pgFRdvC5nH10uTHRnFEMbs0h63HXS1vvkNNVVdF29qdwHw%2F2jYvgXVaeZb2D5J9U72ts73qTe%2FaOQSmIh4Kxz36Me7xTaSK0LSbJUURIQ9VY13wqeVDFRQhYt%2FRuhHD%2FZ23o7vr24JHQgoCtUoTpOd5hXhbkafIEuZ9ySmMSSX%2FHI00jZYDng5Pf%2FEDj4JL00iQnWdzvtnC490s8tcVJCK6a3J9Xh%2BbY&X-Amz-Signature=3590a50fdb6c7daa7686d2471beb611a5554ee20f5cc98ed5b079ed480d730f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

