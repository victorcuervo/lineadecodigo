---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYS2UPHU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T125428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMi1XmzMLFl6Yg8E4IYPTTcVX6LZzj%2FGkUZyErftfScgIhAPa1CTa7Yn68AyACqm6bgj%2FFcQ8a4%2BfqhtsxB51ApD%2FuKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw66wp4ex53as6NG0gq3AM72m8V7NYQsTERV46CBs5N72SZXngvejcJed8jGMC7WagWvMGcuzn6M7ZBaWop%2F%2Fc4VxvnwXsGqulBzcL4JpF7vKr3LnGx8F8nIeonSLa7DAhZ2mPTrB%2FB9Zl52LbJHgHV%2B5kFJaiMCFGtSTQm9mz4jUaLbBBnTGV6pt4WUQnI%2FDAl15mC%2BjgwWNpa7UGndjk4tRuf0dwOCTtWrsogzNKub3ui8fF4rpiG6tL0LPqqabiH5VUBWePjpPLzobuONNt3PN%2Fn3vZgCf9VWqinSQfePFboWlTGmmMj%2FXjn0MvXKLhEifaKNYSJMIIiJjGBXJ0P3cLSmHMJqV0wuKi%2F0Lh58YSs%2BJe2sZicBsoGBSSm8EuegH%2FIt5lHCBaxzpVsnLAws%2BrE2ldVPIFdJCW6t0BrwkRx2VQkIAiUYKtKtgzy1dPuBFoiUwZ0uxMEiI6sbRAXNeVfwBRUEU%2BwpOk4k5%2FE36Xq3qQhF9qt5%2FO398qdjpGB3bfOXGfKcQE4hWl66XhPwHnnP9J%2FlT2pnT0PZLO3teIz4dfaFnkLuyNHqLpYb5xW31QvlulPkEF%2FMG0jMsekEtzy2c9NnLtVCcN3G1D420zc0JxKZhB2KesJEL8FUJ0nY3dpZ03H7%2BtOZTCskNvJBjqkAQ54jg0X0ZCTaZMctnUypToqAzE5FcLow46bT%2BAg3LWksD68caN7lnkCAWb7bnkf6BwGchuVhrmxaNaVe0k%2BlV4%2FJB%2FFUG6AfprccCSB1SJnaVn8QIpBr86IE%2BJEVdgmn0L7s2t4je%2Be1El848aDpM6%2FcOTLJYuSiU4%2F%2Fzw%2FHwryJZloc7IXR%2Bh5hswHYZFeRN7BBGhJqzyVlrzMTyyuzHAfMqU4&X-Amz-Signature=a857a0599d0747f92a646f0d7994f099372a2e03f484dbbdce80e59c70e9e182&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYS2UPHU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T125428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMi1XmzMLFl6Yg8E4IYPTTcVX6LZzj%2FGkUZyErftfScgIhAPa1CTa7Yn68AyACqm6bgj%2FFcQ8a4%2BfqhtsxB51ApD%2FuKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw66wp4ex53as6NG0gq3AM72m8V7NYQsTERV46CBs5N72SZXngvejcJed8jGMC7WagWvMGcuzn6M7ZBaWop%2F%2Fc4VxvnwXsGqulBzcL4JpF7vKr3LnGx8F8nIeonSLa7DAhZ2mPTrB%2FB9Zl52LbJHgHV%2B5kFJaiMCFGtSTQm9mz4jUaLbBBnTGV6pt4WUQnI%2FDAl15mC%2BjgwWNpa7UGndjk4tRuf0dwOCTtWrsogzNKub3ui8fF4rpiG6tL0LPqqabiH5VUBWePjpPLzobuONNt3PN%2Fn3vZgCf9VWqinSQfePFboWlTGmmMj%2FXjn0MvXKLhEifaKNYSJMIIiJjGBXJ0P3cLSmHMJqV0wuKi%2F0Lh58YSs%2BJe2sZicBsoGBSSm8EuegH%2FIt5lHCBaxzpVsnLAws%2BrE2ldVPIFdJCW6t0BrwkRx2VQkIAiUYKtKtgzy1dPuBFoiUwZ0uxMEiI6sbRAXNeVfwBRUEU%2BwpOk4k5%2FE36Xq3qQhF9qt5%2FO398qdjpGB3bfOXGfKcQE4hWl66XhPwHnnP9J%2FlT2pnT0PZLO3teIz4dfaFnkLuyNHqLpYb5xW31QvlulPkEF%2FMG0jMsekEtzy2c9NnLtVCcN3G1D420zc0JxKZhB2KesJEL8FUJ0nY3dpZ03H7%2BtOZTCskNvJBjqkAQ54jg0X0ZCTaZMctnUypToqAzE5FcLow46bT%2BAg3LWksD68caN7lnkCAWb7bnkf6BwGchuVhrmxaNaVe0k%2BlV4%2FJB%2FFUG6AfprccCSB1SJnaVn8QIpBr86IE%2BJEVdgmn0L7s2t4je%2Be1El848aDpM6%2FcOTLJYuSiU4%2F%2Fzw%2FHwryJZloc7IXR%2Bh5hswHYZFeRN7BBGhJqzyVlrzMTyyuzHAfMqU4&X-Amz-Signature=0b0d7cbb1c08daea8573dfeee18b22da9f19a7c752a33e2ff8ef26dbfcbc9d49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

