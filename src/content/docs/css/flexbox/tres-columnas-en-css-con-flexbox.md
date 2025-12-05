---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O4AM6EQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T042901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FXoqHSt%2B9MTRGFrvCZzfHCyJyBvzgcWp%2BxwcIi6YZ3AiBnfGdTAg3WPoMqF9ScxDWzE7BljdozCB4HHzO4zVZalyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM8O0FiKh9R22b8av%2BKtwDPhSnUpgwA4bmoVzfK72UIpIRDZR87I%2Bdn6BPBxm%2BRoLfqnYBS3xAV36i1%2FLT2303AAxjobEtgGh%2BDyeywSRWjh5L0t2EuxCiaYT1cX7f1nmiEM3uORBmQJ8e%2BbNneBZOfpV7%2Fi47z1ZQJz2lHBpfZCHFcYnAR5%2BqgrlNMcCpOM7YDG4YdfgO3gNJkGWFlx7SfgKXZ5SU009pLyetKTmUgsL5NbFU3iIPnV%2BT3WTjsy7kaurFPxWnm6uwWz00yX6q3MMyD8cA3vWl0mbPHdwurn1Ej4byS7d2y6yzcIxftPHeIGxPLRIFO6jbLWp%2F%2F0%2BJY66J1C2upCUVPF%2BNlLdvFDAF2ANYTHZSYsGYNymJ2N8zBDib3DqcbyYAqz9S%2B4M8No586JZArvxjVf2u%2BYKV3g6LpWmFWzr6KW9gs%2F8Orm1cYi%2FNcQctyxg5dMvYih2a0UwJC7A73FFzSfy8G8HfVohBI8iq0ldiuLvOf0Z56wyygcIol%2B3ifHuecOins0SfVpLuPpPGKFV7y4ldRiIQkfd5zZ4LJ8gfUBOLOcwdPxcuRzHGq9Ric717Pso8VQS4dQXTomBl2Lp4VCWe76P9g5z%2Bg3J4lfuCBsIqz6dI1EOAKKx%2BO1a3q4ZpJPgwma3JyQY6pgE0Mw7D%2FDVj%2FzQZTpoCpxrYw%2BB0Jh%2FZAazcf3y4sxeW3buooiCKGH0nQr7UiKnvzHLRVeQPKQzq%2Fji4%2BW2woDZQhw29qv3tgQS%2Fadea1IcbJ3zYp1v60jrQ95Ei5DKQqEJKkqn%2B5PGdGC%2Bhmkei2fQMoqN3KEsoPJXF2dGG%2BlSnr0%2B2DINAfvI6FGbjym50uPRAz%2FgkGA2mRJxWOaZz8Fc56mdBz%2Fya&X-Amz-Signature=5f94785958a534db39f1562dcc67d29715bae83ac7c5e62502db0e588a4208b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O4AM6EQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T042901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FXoqHSt%2B9MTRGFrvCZzfHCyJyBvzgcWp%2BxwcIi6YZ3AiBnfGdTAg3WPoMqF9ScxDWzE7BljdozCB4HHzO4zVZalyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM8O0FiKh9R22b8av%2BKtwDPhSnUpgwA4bmoVzfK72UIpIRDZR87I%2Bdn6BPBxm%2BRoLfqnYBS3xAV36i1%2FLT2303AAxjobEtgGh%2BDyeywSRWjh5L0t2EuxCiaYT1cX7f1nmiEM3uORBmQJ8e%2BbNneBZOfpV7%2Fi47z1ZQJz2lHBpfZCHFcYnAR5%2BqgrlNMcCpOM7YDG4YdfgO3gNJkGWFlx7SfgKXZ5SU009pLyetKTmUgsL5NbFU3iIPnV%2BT3WTjsy7kaurFPxWnm6uwWz00yX6q3MMyD8cA3vWl0mbPHdwurn1Ej4byS7d2y6yzcIxftPHeIGxPLRIFO6jbLWp%2F%2F0%2BJY66J1C2upCUVPF%2BNlLdvFDAF2ANYTHZSYsGYNymJ2N8zBDib3DqcbyYAqz9S%2B4M8No586JZArvxjVf2u%2BYKV3g6LpWmFWzr6KW9gs%2F8Orm1cYi%2FNcQctyxg5dMvYih2a0UwJC7A73FFzSfy8G8HfVohBI8iq0ldiuLvOf0Z56wyygcIol%2B3ifHuecOins0SfVpLuPpPGKFV7y4ldRiIQkfd5zZ4LJ8gfUBOLOcwdPxcuRzHGq9Ric717Pso8VQS4dQXTomBl2Lp4VCWe76P9g5z%2Bg3J4lfuCBsIqz6dI1EOAKKx%2BO1a3q4ZpJPgwma3JyQY6pgE0Mw7D%2FDVj%2FzQZTpoCpxrYw%2BB0Jh%2FZAazcf3y4sxeW3buooiCKGH0nQr7UiKnvzHLRVeQPKQzq%2Fji4%2BW2woDZQhw29qv3tgQS%2Fadea1IcbJ3zYp1v60jrQ95Ei5DKQqEJKkqn%2B5PGdGC%2Bhmkei2fQMoqN3KEsoPJXF2dGG%2BlSnr0%2B2DINAfvI6FGbjym50uPRAz%2FgkGA2mRJxWOaZz8Fc56mdBz%2Fya&X-Amz-Signature=20b7f135771fa40e0f23d918ac019f437a0cf5f26225d5ca799c6d18afd6f1a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

