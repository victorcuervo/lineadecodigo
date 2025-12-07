---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PN22BNH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T102543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzGXAh1oeW7kj1NpdCHCWT2rtld1sJFgT26VZBMlaNBwIgS%2BVqbuRRxZqZVtcOMycTQf91BHTl3UiWE03lZ77FBVgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLp2QbHVBsvFJRK5qircA7RmZQp7zXIubHZyXp3Hk09IF6iFTq4eDLXUAIsvlbqf2LlXNgNkFLkL9qmt58w9C2N5xXNKLVWz3mBXtgl3B6yldjpOsg0ueRNlvERi1JSLWQolXLI2rO10zxUeq4ZXWt8cFUs8Ec5S%2FONpA26RB0JVHNFYKQhzvBi8oOAPsRWmEdBzCQgXzxrLZj3tBoWfJVx4GDlow1n%2FvFG0aArtzmRmQtg%2Fn4N%2FiYOfgC9KqtmRmJBZNjfNUt%2FL4xk80%2B2xFI6U%2BFQGfOjzvzjMcOJTueAcxV%2B%2FUZtw64W3VkkC%2F35a%2BFlq4pbhSTfV%2BLVnZkEn68iW0eWR%2BvC5qiPSyN%2FoK7Z02VbKEFrulcxMySnrz29APZZciaWNrCdzxqDRF7X5JriS90ITjxyCWbuKCRkbPf01eQWEfW%2B2f1JofkGK3Wncxx3wEyLiXAC6XjzBUhCNn4mnOsh6iZZQplj3N9Gln%2FXa%2Far%2FXjX0PbpEoYO8pfr09hSrZDL1M1ynRkgdZ9dHzxcswCf5BMCigPxvF2YbSfnVDc%2BPsWQTn00XJjzT1o7KwpE88khnhyg%2B7Tep6%2FkCI49nQX5LUOpkCXOo3PsbM%2FaWsrFjUs%2FULH2MgmQchU5R3wuAX5JGA06BfSQhMMiZ1ckGOqUB0IxksYrDosR2MHCZv6ra%2FWLmeeegRtuhMHxypNMlgvAYp9Nq%2FmSGV7xdwo6JGp503IqrRhqsQSWx0i9p9b8MHrt%2BsGFGlDS5GuVXTOSe7WJbkXIjpN0gcHQUbvUywU%2BHiHdHgoK9u3nJTWfDfwldNhtYxJY1snkQPXZlf6GHMYcXJK3lAPaAX4VpK31stQkGaZdnTOD8RI6qG54q8Uu5WkuHiWNR&X-Amz-Signature=17235ee523fbb4de87e88a08d07d8aaeec900f4dbd3ee2c1fa828ff522136a66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PN22BNH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T102543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzGXAh1oeW7kj1NpdCHCWT2rtld1sJFgT26VZBMlaNBwIgS%2BVqbuRRxZqZVtcOMycTQf91BHTl3UiWE03lZ77FBVgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLp2QbHVBsvFJRK5qircA7RmZQp7zXIubHZyXp3Hk09IF6iFTq4eDLXUAIsvlbqf2LlXNgNkFLkL9qmt58w9C2N5xXNKLVWz3mBXtgl3B6yldjpOsg0ueRNlvERi1JSLWQolXLI2rO10zxUeq4ZXWt8cFUs8Ec5S%2FONpA26RB0JVHNFYKQhzvBi8oOAPsRWmEdBzCQgXzxrLZj3tBoWfJVx4GDlow1n%2FvFG0aArtzmRmQtg%2Fn4N%2FiYOfgC9KqtmRmJBZNjfNUt%2FL4xk80%2B2xFI6U%2BFQGfOjzvzjMcOJTueAcxV%2B%2FUZtw64W3VkkC%2F35a%2BFlq4pbhSTfV%2BLVnZkEn68iW0eWR%2BvC5qiPSyN%2FoK7Z02VbKEFrulcxMySnrz29APZZciaWNrCdzxqDRF7X5JriS90ITjxyCWbuKCRkbPf01eQWEfW%2B2f1JofkGK3Wncxx3wEyLiXAC6XjzBUhCNn4mnOsh6iZZQplj3N9Gln%2FXa%2Far%2FXjX0PbpEoYO8pfr09hSrZDL1M1ynRkgdZ9dHzxcswCf5BMCigPxvF2YbSfnVDc%2BPsWQTn00XJjzT1o7KwpE88khnhyg%2B7Tep6%2FkCI49nQX5LUOpkCXOo3PsbM%2FaWsrFjUs%2FULH2MgmQchU5R3wuAX5JGA06BfSQhMMiZ1ckGOqUB0IxksYrDosR2MHCZv6ra%2FWLmeeegRtuhMHxypNMlgvAYp9Nq%2FmSGV7xdwo6JGp503IqrRhqsQSWx0i9p9b8MHrt%2BsGFGlDS5GuVXTOSe7WJbkXIjpN0gcHQUbvUywU%2BHiHdHgoK9u3nJTWfDfwldNhtYxJY1snkQPXZlf6GHMYcXJK3lAPaAX4VpK31stQkGaZdnTOD8RI6qG54q8Uu5WkuHiWNR&X-Amz-Signature=e6b13ed86bbcd3e802418e3f153ab3146a112709c2f28ca213e3102ec7ee08d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

