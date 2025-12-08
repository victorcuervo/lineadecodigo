---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NYA32AK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T233853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdOJsw67KdzlradkKcIvtqG0NJZaHPxqDFRdNn8rPeVAiAx8hfywZuYfOyUQfGqQJ%2FGRGOzGobJbQXaEzkD8NLu7yqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd02V7hsaY%2FhdyvzmKtwDp5VIXyykeYFqymUulx7pF2nKtkGMyJmRvGXRyjnqKsLX5Txoe5Wa8R2rWX3s2nurFOPlMbagazjXg0%2FK9qRv57nzrnQ%2BNKKjp0WWBdRI0BWQHYhFYs4K4XaKPBTKvQLd8Cr65L1RdCn06U7GDy6aTrVkVznmYhoqp0kkFMboVtlW9Os9PbtXgj1Ap9Oh0MAvGU6COrfVJjbRxhjkPFM3vF%2BGmkJ1xltofIwRcRi2qWxxKdRSqmmmUx6rBGhqpsNDRRhhZsFAydn8KmS29Zz%2FjywO%2FIe13OOMsM75rhVv1zGlWAj5XDPprrX5UkijlA8Lh9SL6jxY0jFrDl0Sj0dCNQkCAtZbYdSwDM%2FfJmvVQGviGgPTtnS8ZiWZZN%2Fa3ZNWUcEbohlsEcxkMXVbHgIXeK%2F9ZuN2NLwsT4vFaivNm5ciR3XHcx1Dmzh1Bu5FQmb%2B%2Fy145rFujSfP3R86dqjwZbsazxKJS47zgr51YSPH9%2FhjOvi8NSCZlBxx7oPXdIciQZ75399hiKvtnzl73Q9YP96isLaqERW4c9v2mLfawvU%2FUvaMT%2B%2FK2IPvsXZJbXC1ONoxvFBgSlEBTdA7Xvk%2B%2FZMP4Bu4OcS1e0VmfNm43mlzdeyuZRG0q2Jbz6ww7aHdyQY6pgGSAKW00tfCjcn1qjNMBb96gfSHD50sXUIYIi677YFS%2B%2BdPiJz4DM%2FHIx6LLMEwRf0%2BpEfAmKl%2FXYw3Tl6DP1vcp77%2FiGZixAY9oGFMZZv8EkF9I6JEiU%2BB16RsBeYLScfnhh7Bwj9WgH4LsO3I05Tz8Z7qFPviVf8qDXVXfTc%2F0nQJ6Ki%2BW2z3Yf%2B3PVq9YXFU0mI0sTxVkQRvEf%2BbQWcXvu7X3AWs&X-Amz-Signature=0127ef370ee9870136c058dd4821cbc6654e0a6c919afdc33a1b1ee9ee2c4dd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NYA32AK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T233853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdOJsw67KdzlradkKcIvtqG0NJZaHPxqDFRdNn8rPeVAiAx8hfywZuYfOyUQfGqQJ%2FGRGOzGobJbQXaEzkD8NLu7yqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd02V7hsaY%2FhdyvzmKtwDp5VIXyykeYFqymUulx7pF2nKtkGMyJmRvGXRyjnqKsLX5Txoe5Wa8R2rWX3s2nurFOPlMbagazjXg0%2FK9qRv57nzrnQ%2BNKKjp0WWBdRI0BWQHYhFYs4K4XaKPBTKvQLd8Cr65L1RdCn06U7GDy6aTrVkVznmYhoqp0kkFMboVtlW9Os9PbtXgj1Ap9Oh0MAvGU6COrfVJjbRxhjkPFM3vF%2BGmkJ1xltofIwRcRi2qWxxKdRSqmmmUx6rBGhqpsNDRRhhZsFAydn8KmS29Zz%2FjywO%2FIe13OOMsM75rhVv1zGlWAj5XDPprrX5UkijlA8Lh9SL6jxY0jFrDl0Sj0dCNQkCAtZbYdSwDM%2FfJmvVQGviGgPTtnS8ZiWZZN%2Fa3ZNWUcEbohlsEcxkMXVbHgIXeK%2F9ZuN2NLwsT4vFaivNm5ciR3XHcx1Dmzh1Bu5FQmb%2B%2Fy145rFujSfP3R86dqjwZbsazxKJS47zgr51YSPH9%2FhjOvi8NSCZlBxx7oPXdIciQZ75399hiKvtnzl73Q9YP96isLaqERW4c9v2mLfawvU%2FUvaMT%2B%2FK2IPvsXZJbXC1ONoxvFBgSlEBTdA7Xvk%2B%2FZMP4Bu4OcS1e0VmfNm43mlzdeyuZRG0q2Jbz6ww7aHdyQY6pgGSAKW00tfCjcn1qjNMBb96gfSHD50sXUIYIi677YFS%2B%2BdPiJz4DM%2FHIx6LLMEwRf0%2BpEfAmKl%2FXYw3Tl6DP1vcp77%2FiGZixAY9oGFMZZv8EkF9I6JEiU%2BB16RsBeYLScfnhh7Bwj9WgH4LsO3I05Tz8Z7qFPviVf8qDXVXfTc%2F0nQJ6Ki%2BW2z3Yf%2B3PVq9YXFU0mI0sTxVkQRvEf%2BbQWcXvu7X3AWs&X-Amz-Signature=542c40fd39ccf3170e2368c0ccd182429379e9cc39b9f749554bb8cf481c68c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

