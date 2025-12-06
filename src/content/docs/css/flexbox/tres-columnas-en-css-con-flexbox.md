---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624E5CZRB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T173725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFb82auygzuOV4GmYtuNYILYIf2oqqkqn2Z5xHcPjVacAiAtvkGCP%2BMcDgqcQ2yfYJ0VRQWUlwK9Kxr%2FReuzVqiGAyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMG%2BA3wfv4%2FGYsSWKpKtwDQ2tas8u9K1oNv1k%2F5cSPQwxBTNmnS%2F%2FMga1veOAL8zbA%2FmGTPfWcbrppEBoXRw7S0ECx%2BMNxW27c5K7C7dtDGCSFz4z%2BxPS7to1p%2FsbVIdoNxELIR%2BwhtkI12Di2XCk8xCYXAvhGrrv6rDVvlhaC0o1bER1ReX6l0jiOESDDtz3M3uOTGjFL2ztI0%2F24BeZ0miEbiewcbH8neDmN3i263PAzXQHRbPWCT2gDTgc31P3g90XxU82AABSIUQ98pwUh8QutedkDLtQSl%2FO5QXg4K0RPwmSErxoAybbDj4Xv8MnNlHyX8BUCJaLLoc1cpJmmDhxJdXMF0eBo%2FQWOVGyAouRfv317%2FTxgr3%2Bn2DwotgmujTmeDncZbK0lH4Ak3%2F7jQm0bMl2Ac%2Fx2v7dobwxoSX4e3NsKiLWUS37YlyWi19tjfBh7h%2FTEJ76Zvn3xeAVnLcjD%2FGMArvzh2kxhR36o4q6BnRdR9fyfQ1esainhuq5gUf%2BpQq2Ysud7xkyA%2B4MbpSLcnNqpNWsZv4iJUMIghKy%2Bu%2BAOpFpfw3gWCVWD7W91pWJoOXQmb9yI%2F81wSeePHa73lvXK9IKAcJXb7OePK89JRxyUmLzhog3KO8aHhUUu9ZNfg0U6CFclcgkw8czRyQY6pgEvsGeDswmo09q0mNC2XWMB4OfWlUiGy19xUqsoNMCzAqJE21mUsgbUVaBrKP8pfU6vjA7qa1KElg80HM5q5uDoyuR1UZ8Hq%2FHHYAJ2IQq7FZmCGl5FHfyDU%2Fol7iNd6srzExhGsjqOyHIB3csxAzvfI5qHUY%2BU5duEhhb4YVCSjc%2FaBf3Ss6pjCewmQ0BON%2FtbrRPgmVBHEB7Lcr9Z0TXFj%2FmSCRxQ&X-Amz-Signature=4cebff40c08a0a089db5d373cd548374861bb734ce089d86c5e5ebe6a4cff983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624E5CZRB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T173725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFb82auygzuOV4GmYtuNYILYIf2oqqkqn2Z5xHcPjVacAiAtvkGCP%2BMcDgqcQ2yfYJ0VRQWUlwK9Kxr%2FReuzVqiGAyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMG%2BA3wfv4%2FGYsSWKpKtwDQ2tas8u9K1oNv1k%2F5cSPQwxBTNmnS%2F%2FMga1veOAL8zbA%2FmGTPfWcbrppEBoXRw7S0ECx%2BMNxW27c5K7C7dtDGCSFz4z%2BxPS7to1p%2FsbVIdoNxELIR%2BwhtkI12Di2XCk8xCYXAvhGrrv6rDVvlhaC0o1bER1ReX6l0jiOESDDtz3M3uOTGjFL2ztI0%2F24BeZ0miEbiewcbH8neDmN3i263PAzXQHRbPWCT2gDTgc31P3g90XxU82AABSIUQ98pwUh8QutedkDLtQSl%2FO5QXg4K0RPwmSErxoAybbDj4Xv8MnNlHyX8BUCJaLLoc1cpJmmDhxJdXMF0eBo%2FQWOVGyAouRfv317%2FTxgr3%2Bn2DwotgmujTmeDncZbK0lH4Ak3%2F7jQm0bMl2Ac%2Fx2v7dobwxoSX4e3NsKiLWUS37YlyWi19tjfBh7h%2FTEJ76Zvn3xeAVnLcjD%2FGMArvzh2kxhR36o4q6BnRdR9fyfQ1esainhuq5gUf%2BpQq2Ysud7xkyA%2B4MbpSLcnNqpNWsZv4iJUMIghKy%2Bu%2BAOpFpfw3gWCVWD7W91pWJoOXQmb9yI%2F81wSeePHa73lvXK9IKAcJXb7OePK89JRxyUmLzhog3KO8aHhUUu9ZNfg0U6CFclcgkw8czRyQY6pgEvsGeDswmo09q0mNC2XWMB4OfWlUiGy19xUqsoNMCzAqJE21mUsgbUVaBrKP8pfU6vjA7qa1KElg80HM5q5uDoyuR1UZ8Hq%2FHHYAJ2IQq7FZmCGl5FHfyDU%2Fol7iNd6srzExhGsjqOyHIB3csxAzvfI5qHUY%2BU5duEhhb4YVCSjc%2FaBf3Ss6pjCewmQ0BON%2FtbrRPgmVBHEB7Lcr9Z0TXFj%2FmSCRxQ&X-Amz-Signature=b943780177bd9390fe76314713e8e46fc49d7b15245961a611561cb02c4593df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

