---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJNK6Y7L%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T053936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx1j%2F6hLpZkotzBTlHk0N%2FSPZIoE8B%2BGKAs3rl5wzaVgIgZkxo9AWYnNUd4IrzSTDtZFLqk6JmGxlHjWv%2F252oTzQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADHVfz2jJP7g0pgrSrcA5qeMRkZnqsDcKmhF97DCiA%2FevJYMGIsh6BjLE6fY6XwUbVyFR0CvsMEO7shwVccq%2F6ziE191bSaj7biqP2FanYmGLV54Ni2RKgcTnrPAg5o81BQLICbkDywwH9zXn0znqUyrLJgyyCwFtH4RUtF2BLJidXnM3byrJr7dYd3hlZGd0cmNee5KjmmIQ1mPVnjj85kYfE4J7CumPGXkop1A4rluJtIRA2mnxtFke%2Bnz0nIZ2C161fE%2FbQyPnV61OkkMzoZGqGcb2zn0EjSOVAcFWUIz1t%2BKOlR1SywtiZ%2BkyBipTKv8wZ4exF1OgYBkWfyd98RaOKPQQth86Z18Q%2FkmuU%2FZRvdvjWvvsJt1Dcm%2FD0shTr6XZgA%2FR19A1JZOpgwkOJXG9sPg0f8kVweFnl8ydlgZThhmKVaUDfEvhVoGWfXRU9wrERoyibUXTLqgJL36q1yPUp%2BukgGTkorAuDsxjblCfX83DwKXAK0INQO%2B3hg5w5pcWmChRAtFRZ10PG4nLNhXhrlsIpaklJLQk0PRyGUmsXDyz7jyg3Z2QHPVjvjWsXAFZBqKv9ZVxtdMvtAKQgVsnfR7Fc4fFbWmaW7RsUtlDtU3sF%2FGf3ah4yYg2chdLGuPLX6CT%2FDIPGPMPGz2ckGOqUBpozmG6GXp2tMfKJ0irgPneA58IcXzGWCTbRfLelBNj4edp%2FmpNDAMH1x9THdD0Y3WxXWdkrCmrluAI%2BhDtsGYM7txVkSyAt42LWVIoq783O0NAAwFsp5toydFdF2vYluhiJElVdtiIOwR9xlcg2AHP6Atr7%2BIG1qrN7kfwdLha%2FJCJucsuPPJamPQH%2B11pBqamAcIkqOcR65nNqQq0KSt77ZJBUE&X-Amz-Signature=e47759cce34f0e0f2d7428598e763bea583217f30da3d6159fb527a0ea1d47b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJNK6Y7L%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T053936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx1j%2F6hLpZkotzBTlHk0N%2FSPZIoE8B%2BGKAs3rl5wzaVgIgZkxo9AWYnNUd4IrzSTDtZFLqk6JmGxlHjWv%2F252oTzQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADHVfz2jJP7g0pgrSrcA5qeMRkZnqsDcKmhF97DCiA%2FevJYMGIsh6BjLE6fY6XwUbVyFR0CvsMEO7shwVccq%2F6ziE191bSaj7biqP2FanYmGLV54Ni2RKgcTnrPAg5o81BQLICbkDywwH9zXn0znqUyrLJgyyCwFtH4RUtF2BLJidXnM3byrJr7dYd3hlZGd0cmNee5KjmmIQ1mPVnjj85kYfE4J7CumPGXkop1A4rluJtIRA2mnxtFke%2Bnz0nIZ2C161fE%2FbQyPnV61OkkMzoZGqGcb2zn0EjSOVAcFWUIz1t%2BKOlR1SywtiZ%2BkyBipTKv8wZ4exF1OgYBkWfyd98RaOKPQQth86Z18Q%2FkmuU%2FZRvdvjWvvsJt1Dcm%2FD0shTr6XZgA%2FR19A1JZOpgwkOJXG9sPg0f8kVweFnl8ydlgZThhmKVaUDfEvhVoGWfXRU9wrERoyibUXTLqgJL36q1yPUp%2BukgGTkorAuDsxjblCfX83DwKXAK0INQO%2B3hg5w5pcWmChRAtFRZ10PG4nLNhXhrlsIpaklJLQk0PRyGUmsXDyz7jyg3Z2QHPVjvjWsXAFZBqKv9ZVxtdMvtAKQgVsnfR7Fc4fFbWmaW7RsUtlDtU3sF%2FGf3ah4yYg2chdLGuPLX6CT%2FDIPGPMPGz2ckGOqUBpozmG6GXp2tMfKJ0irgPneA58IcXzGWCTbRfLelBNj4edp%2FmpNDAMH1x9THdD0Y3WxXWdkrCmrluAI%2BhDtsGYM7txVkSyAt42LWVIoq783O0NAAwFsp5toydFdF2vYluhiJElVdtiIOwR9xlcg2AHP6Atr7%2BIG1qrN7kfwdLha%2FJCJucsuPPJamPQH%2B11pBqamAcIkqOcR65nNqQq0KSt77ZJBUE&X-Amz-Signature=6e4b72198ce287dc2eb615b7149a2aad376897b72bb02888fcbf32b36d4bbef0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

