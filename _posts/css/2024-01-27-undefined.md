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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOYOREPT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T094555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCWKMs0Dvem1RUjj16KdNidnV2yRlgAgvDH%2FPuRpirBkwIgGEvXUO8%2FBfxlEhKWzDY0GB84n%2FdJeP5k0SJPQoWJCU8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOoeMHlGta9pXO7tjircAx%2FWolQ5cYRENyjyyFNB%2FamhPOEZMrpTGPS1MA%2FZNPn8%2FEDd0h0sbo0ETP4cLTp4J7N31YszlgTLSAYOz1%2B9syUk9bciVm%2FzOUAx%2FX3jN7alvpxZTo8cF9zBODJwfJh1yqIDHLuZYoxkx3xmNWmjeUFjwJ3aHeGeghF8aAGPbhQ63mX%2B5bQpg8TROY6ocZv1kI8%2Bkx1O%2FuuQWzXoXAJ0Sjtxs6%2BlctgN%2BHOIUopuvMC0PkNS%2Fh5ycMsho8njRtpWA0pGZgs2yqe4qVSwksyPwry1Pto9lxGD07Bhl8W5UQi9VEhZOl5WZHYG3jxPerzBN44Clm%2FVQzJ5CAhwGOkcF19bu3UkswxbEcT8F2H3GQb7HIvZpq7p2rvvACrs5nCfk1Qin67DS5ToKdyeENByBMKLUuOGtwQjMRt7zoVuByfYYPkKekgdu7WscHrq5PfJGdJG%2FOSZJ7FTuO4EaM6T%2FCfga98rAJzJtXx5QYMTJuzbXdwwAMlMl3EVlWlw7BPQw%2FcPYFyToOeHHmCgatoavcMT1YvtdYh4zIX5i6OER7ddbOasoYM%2FxRId1VG3MjDv8WWA%2BKgabq7QcNha0mWduPluLLkSDQ25w6c%2BWwqK1SKH%2FLeQyUn40BjdBGdWMKn1v8kGOqUBg8boXFzke%2BdAaznIrMSukaeJU9BQIGXb3ENYkpGW%2FnQsUWROtO14wFxCsYpQFiaYegqzvPeZumP4E41%2F5OeB2C%2FQCcn9P3nIRYd1JruG%2Bx%2F%2BHH3gjGLfzBfjjQtlDQgGEgRUGjXeIWZRRxP4JendxZSt1gtdIW70YuPO8bPrTMbGaNMsJ4tvTiD8TpMdPGu769AhAFIxmM57OgIjiMhhBEA8VfuD&X-Amz-Signature=baeebbe539008e4cb87805e6980cc75a3e448e661b69c34a3fbab65252d617b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOYOREPT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T094555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCWKMs0Dvem1RUjj16KdNidnV2yRlgAgvDH%2FPuRpirBkwIgGEvXUO8%2FBfxlEhKWzDY0GB84n%2FdJeP5k0SJPQoWJCU8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOoeMHlGta9pXO7tjircAx%2FWolQ5cYRENyjyyFNB%2FamhPOEZMrpTGPS1MA%2FZNPn8%2FEDd0h0sbo0ETP4cLTp4J7N31YszlgTLSAYOz1%2B9syUk9bciVm%2FzOUAx%2FX3jN7alvpxZTo8cF9zBODJwfJh1yqIDHLuZYoxkx3xmNWmjeUFjwJ3aHeGeghF8aAGPbhQ63mX%2B5bQpg8TROY6ocZv1kI8%2Bkx1O%2FuuQWzXoXAJ0Sjtxs6%2BlctgN%2BHOIUopuvMC0PkNS%2Fh5ycMsho8njRtpWA0pGZgs2yqe4qVSwksyPwry1Pto9lxGD07Bhl8W5UQi9VEhZOl5WZHYG3jxPerzBN44Clm%2FVQzJ5CAhwGOkcF19bu3UkswxbEcT8F2H3GQb7HIvZpq7p2rvvACrs5nCfk1Qin67DS5ToKdyeENByBMKLUuOGtwQjMRt7zoVuByfYYPkKekgdu7WscHrq5PfJGdJG%2FOSZJ7FTuO4EaM6T%2FCfga98rAJzJtXx5QYMTJuzbXdwwAMlMl3EVlWlw7BPQw%2FcPYFyToOeHHmCgatoavcMT1YvtdYh4zIX5i6OER7ddbOasoYM%2FxRId1VG3MjDv8WWA%2BKgabq7QcNha0mWduPluLLkSDQ25w6c%2BWwqK1SKH%2FLeQyUn40BjdBGdWMKn1v8kGOqUBg8boXFzke%2BdAaznIrMSukaeJU9BQIGXb3ENYkpGW%2FnQsUWROtO14wFxCsYpQFiaYegqzvPeZumP4E41%2F5OeB2C%2FQCcn9P3nIRYd1JruG%2Bx%2F%2BHH3gjGLfzBfjjQtlDQgGEgRUGjXeIWZRRxP4JendxZSt1gtdIW70YuPO8bPrTMbGaNMsJ4tvTiD8TpMdPGu769AhAFIxmM57OgIjiMhhBEA8VfuD&X-Amz-Signature=466f6f6ea405b83d81f45f0ca19b3de74bbcf36b6152ac5f4ca1223161eba016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

