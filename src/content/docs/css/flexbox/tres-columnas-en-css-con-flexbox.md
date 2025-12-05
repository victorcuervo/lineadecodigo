---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQW6FMAA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2%2F9iN3f4T%2FNiTg6wcWuW6nMmS9ddJpvylbfCogGGvuAiEAtF01SBn68ZrWKBdsezNssbyOXYKFJ4DDe8r6ZkKLhhwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDFLGmS6LeGeuRwzA%2BircAzHj7NlxUo2s4QvzlH0muXl9nkAdPe6uy4388epp4Zw5criqn7ggLcM9EcacKn3gZWP9a1sj%2FLzcfEuGupfyWttx1Txu8BvUQV4HbAomyN6W2F661e9WrijbCzvdnmq6%2F7k%2Fu71GONaPhuSc641RyUYTF6lWB03FNz6HIpNMv%2FNG55zSvDE5uRY5%2FPEN9Mjzja%2BvMf69MInb%2FmmcPJOKlDjGOR24QO8FU8uKw9k1BaOrkFH882A7t6pzI4u%2F%2Fzb%2BtLzEgIsfM%2BJjwq%2BvHr7giOZG3dVPLMRL2JCOG%2Fb7eX1kH9WEqXUG%2FECIoSg7YEmWWcyVCj5uTlyN6G0pGA7ZhWNeMWWv7GHd7LDxX1MXVpMuzmxxLHY%2BJBrUqG10BQbCqeA8P7ikf5nQwQZdQaSalv0On3Vatqrai9MndhQo0wblLT5wc4GD04TOZ7fbE3o8voyfCL8Y13ffgxyaTYBp9ZWY4qtINtpdO6oxti2%2BC6ov6G7kROZbtrX1B0l9BlTb9n%2FzxznxnkyS%2B%2BH%2BwzQP9AG%2BrkmrXi4nxnOFOAIlAW4PEIZbr7oQFqNbUOZDhaTXkaYnR6h98kzNuVpqV2QT9cFNqQkp03ictnbj8th3mmjFvZujUZnvz%2F9S2fRuMJPGzckGOqUBVAG4FehQkjkkjAw1lUvjq3%2FiqOqNOBDRnAUrJV5XzRV9nCNWVOaA0i80OE%2Berrsq5vSlTa4WDpTb3qx9RskWYf0CEu4owoXACi23BQY5PN%2BY9znZwaOcmq57z1D%2Fs0Lv8DLjYeQeUkj20vawpPjdpNJyy0Ch7soljTFXumdQGPzFGziwfW8aZGSCs%2FWRvUn19nc0NbcQY6%2Bi8LDxPYPYnR93lzEC&X-Amz-Signature=d615976974830736642a0ab04e6f0e0f23c9b8690a0cf9dd89ec61f00055b97e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQW6FMAA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2%2F9iN3f4T%2FNiTg6wcWuW6nMmS9ddJpvylbfCogGGvuAiEAtF01SBn68ZrWKBdsezNssbyOXYKFJ4DDe8r6ZkKLhhwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDFLGmS6LeGeuRwzA%2BircAzHj7NlxUo2s4QvzlH0muXl9nkAdPe6uy4388epp4Zw5criqn7ggLcM9EcacKn3gZWP9a1sj%2FLzcfEuGupfyWttx1Txu8BvUQV4HbAomyN6W2F661e9WrijbCzvdnmq6%2F7k%2Fu71GONaPhuSc641RyUYTF6lWB03FNz6HIpNMv%2FNG55zSvDE5uRY5%2FPEN9Mjzja%2BvMf69MInb%2FmmcPJOKlDjGOR24QO8FU8uKw9k1BaOrkFH882A7t6pzI4u%2F%2Fzb%2BtLzEgIsfM%2BJjwq%2BvHr7giOZG3dVPLMRL2JCOG%2Fb7eX1kH9WEqXUG%2FECIoSg7YEmWWcyVCj5uTlyN6G0pGA7ZhWNeMWWv7GHd7LDxX1MXVpMuzmxxLHY%2BJBrUqG10BQbCqeA8P7ikf5nQwQZdQaSalv0On3Vatqrai9MndhQo0wblLT5wc4GD04TOZ7fbE3o8voyfCL8Y13ffgxyaTYBp9ZWY4qtINtpdO6oxti2%2BC6ov6G7kROZbtrX1B0l9BlTb9n%2FzxznxnkyS%2B%2BH%2BwzQP9AG%2BrkmrXi4nxnOFOAIlAW4PEIZbr7oQFqNbUOZDhaTXkaYnR6h98kzNuVpqV2QT9cFNqQkp03ictnbj8th3mmjFvZujUZnvz%2F9S2fRuMJPGzckGOqUBVAG4FehQkjkkjAw1lUvjq3%2FiqOqNOBDRnAUrJV5XzRV9nCNWVOaA0i80OE%2Berrsq5vSlTa4WDpTb3qx9RskWYf0CEu4owoXACi23BQY5PN%2BY9znZwaOcmq57z1D%2Fs0Lv8DLjYeQeUkj20vawpPjdpNJyy0Ch7soljTFXumdQGPzFGziwfW8aZGSCs%2FWRvUn19nc0NbcQY6%2Bi8LDxPYPYnR93lzEC&X-Amz-Signature=9c776e0f9354536370782ca6648a868295e37f5f209874d65f0475acb2b3ec40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

