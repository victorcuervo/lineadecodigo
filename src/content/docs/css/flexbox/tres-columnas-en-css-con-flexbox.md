---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDXOMIF4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T171349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5t12r7M9rS%2B%2Fctn%2FeVTURkPASy38S%2B6npYFAtla6CrAiEAu8PcxlWEnjQAaYYFIh%2BA63MJvuLig6Zlq5uzi4M%2B8oYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJv5woRF052eidHUSrcA7Om9jifv4LbpzVJV%2F8RYRsvhLbGE1fD2uPTTaolOwagynOzWeu%2Bi9i3EmFLP97LuFyr1VGFoW9zHs8BXiXiKL8MCBwYV4%2Ft3CDohlarhgYTpJziNmt7Loqb97oh21JNY6gEMNtLSxHoib03fMmh%2Bkng%2FiKmKUACuRWXBuZI%2B73TYZsY0y2%2FpmZo7k1Pzxqibuj6C%2Ba0dw05eju84pJlX9MV0XdggyfSn33K2cVlIt31UBesRjq2iw1%2B1qGlMEdYuhjjRLfVb8CbYK3G7%2BvOMiJIDrlVzSJm2DknNA3pfuhzCDoo0154zIdxeaU3Jeybc0ICkrIC6fP6cAAte%2BBhwKQHPKv05V7Evk%2BTXUufQATZgH%2Fgr8L%2FqNwBr%2FYUFY2qa5k0VUHc0eKRBZFgXAKV7chlEvKNN13P4OP8GDvl%2BVJPw09X7Bl5kYnvUZ2dv5DPXmlhBPsY1qF8spGJtd6htu2pOLo7talRr6A%2BESMD%2BoOgn1iY02qW7peCwxNEUZJVvuPwQDNxkVxkYz5c8fr4w2i4XAIeWI8zUKseH%2Bqi2ZTbebjda8a%2BGmJ10hzgNUNp1CAiCNhIyY6c8q25ncobvt6JwP2ZBoxyIlxC9HBku5xzvPKtAThYk0ffYdDkMLWH3MkGOqUBElhKtrElkYdM%2FDPfUn8pyPSqkt4%2FJiQ54srnG2tZ2XMKBokrVgCcOoUDqAlOedQ8pX3jfq2yFcUJ7RSylaWpz8LQ9p3cG%2BgWlDlodIBFF3XIklVBw0qUUMs5eGq%2FIIi7xlE7zYTb%2FaXQ6ffPE882l0sZvNmyTtQBqVWLGGyR23FH0%2F2SOuHVQknDSLrQa5ZUSHv9t4TNnKe6QzUiJ1PLPLLbHngX&X-Amz-Signature=d780a0bc181b20fe005be7a64bf6bf021255691755fe1e06ce289bdce488e0a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDXOMIF4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T171349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5t12r7M9rS%2B%2Fctn%2FeVTURkPASy38S%2B6npYFAtla6CrAiEAu8PcxlWEnjQAaYYFIh%2BA63MJvuLig6Zlq5uzi4M%2B8oYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJv5woRF052eidHUSrcA7Om9jifv4LbpzVJV%2F8RYRsvhLbGE1fD2uPTTaolOwagynOzWeu%2Bi9i3EmFLP97LuFyr1VGFoW9zHs8BXiXiKL8MCBwYV4%2Ft3CDohlarhgYTpJziNmt7Loqb97oh21JNY6gEMNtLSxHoib03fMmh%2Bkng%2FiKmKUACuRWXBuZI%2B73TYZsY0y2%2FpmZo7k1Pzxqibuj6C%2Ba0dw05eju84pJlX9MV0XdggyfSn33K2cVlIt31UBesRjq2iw1%2B1qGlMEdYuhjjRLfVb8CbYK3G7%2BvOMiJIDrlVzSJm2DknNA3pfuhzCDoo0154zIdxeaU3Jeybc0ICkrIC6fP6cAAte%2BBhwKQHPKv05V7Evk%2BTXUufQATZgH%2Fgr8L%2FqNwBr%2FYUFY2qa5k0VUHc0eKRBZFgXAKV7chlEvKNN13P4OP8GDvl%2BVJPw09X7Bl5kYnvUZ2dv5DPXmlhBPsY1qF8spGJtd6htu2pOLo7talRr6A%2BESMD%2BoOgn1iY02qW7peCwxNEUZJVvuPwQDNxkVxkYz5c8fr4w2i4XAIeWI8zUKseH%2Bqi2ZTbebjda8a%2BGmJ10hzgNUNp1CAiCNhIyY6c8q25ncobvt6JwP2ZBoxyIlxC9HBku5xzvPKtAThYk0ffYdDkMLWH3MkGOqUBElhKtrElkYdM%2FDPfUn8pyPSqkt4%2FJiQ54srnG2tZ2XMKBokrVgCcOoUDqAlOedQ8pX3jfq2yFcUJ7RSylaWpz8LQ9p3cG%2BgWlDlodIBFF3XIklVBw0qUUMs5eGq%2FIIi7xlE7zYTb%2FaXQ6ffPE882l0sZvNmyTtQBqVWLGGyR23FH0%2F2SOuHVQknDSLrQa5ZUSHv9t4TNnKe6QzUiJ1PLPLLbHngX&X-Amz-Signature=2be3632ce59770335a79b8001c42d27b4512a3e3d3008f24c878ece58bd48925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

