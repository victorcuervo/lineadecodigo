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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGOTATRO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T062740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCmzdOhcdG4P08PiXoPELgF5vB4iEBQZK4UMVyRpX5gyAIgBQm54JtPSrGaN%2B8o71WpagFtXtuM18yJ%2BUavTCjjcdcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDGEYyh7jfQOR%2BeyD9ircA1M7HKKKtlnsHf7rRi2qeTl8KFQBLXHnxzOkJkSjIKPEjpcTOSj6%2B2sNeQpjif6eMhKm2ydxfIdLqCbRJh6Do8G5VDLhyQ8wH%2FtbsvUTi6uwo29IGiQmlNtw6q0u1IvtBF0I88WIMuHS%2FJTndVQC3c9HJ70f4rMPWVpxnWjy9uD%2FKJy%2FZW8EVnUl8oT2KGuFj5m%2FOqS2JGUvn70FiO4LMT1r5P91Kq%2B0QXthRekpBqn0beb13MtMCphQrmhrodYZCfPpB%2Br8%2BLqeR4DpZv4ISb5%2Bc1yQ1qlTk3U357GXndQnssaeoVO7DPWBLKBKnWznX9otPSopE6trubvKK4NMdydCExmwwMQhAvsdBH%2FwpCNzfnSYXB%2BAf%2FYRD44KCeaEsRES3zW4LDdJvY0v%2FDyy2qRqwT1SQhFDyuomDv8oQN0AKuLvvrtY4G4fGZUXVYsJeNWfHgQM6qiAS3F%2FB54AFfgi1d%2Ff29WhaD8Pl9SDFuxCtvyT87z2RcjmgMjwj7GykFjvgoaDIJWLbxP9n5l3w7vFTkpXMljcQwi1sZde%2F3mnnluvs9y2Y1Wy44ZgJcBSOVPb2AgU5B%2BFRGzKe5dVkAg%2BRlxsum6dUva1vJQqTQiEGIfmjU%2F4gigCJZohMIyav8kGOqUBLIXg1oNVwnZCDNevLauwjfhHHrhl%2BkGSuU7EvTkk3Hfx62g2YJ0WQvBEU%2FWngAjEzincXZvOt51DtSI5OcdooADvsZH1NOcwNdQIiUiHfz9n%2FR4yWVXGJMZyPGQX7Mmmi9BKcFHGIxJEsTAHxJhjVXjPW9AOQ%2FeXqCdCFcY6xkiE4K2dTzDop3SLSQxIvyKEWNhKhAEOAxstXDbhhO%2Bw6ktqUUi8&X-Amz-Signature=a9b4e71736ab21c9cbbe63ad54e3efab459892f3150296e99f1cad5bd4775bbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGOTATRO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T062740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCmzdOhcdG4P08PiXoPELgF5vB4iEBQZK4UMVyRpX5gyAIgBQm54JtPSrGaN%2B8o71WpagFtXtuM18yJ%2BUavTCjjcdcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDGEYyh7jfQOR%2BeyD9ircA1M7HKKKtlnsHf7rRi2qeTl8KFQBLXHnxzOkJkSjIKPEjpcTOSj6%2B2sNeQpjif6eMhKm2ydxfIdLqCbRJh6Do8G5VDLhyQ8wH%2FtbsvUTi6uwo29IGiQmlNtw6q0u1IvtBF0I88WIMuHS%2FJTndVQC3c9HJ70f4rMPWVpxnWjy9uD%2FKJy%2FZW8EVnUl8oT2KGuFj5m%2FOqS2JGUvn70FiO4LMT1r5P91Kq%2B0QXthRekpBqn0beb13MtMCphQrmhrodYZCfPpB%2Br8%2BLqeR4DpZv4ISb5%2Bc1yQ1qlTk3U357GXndQnssaeoVO7DPWBLKBKnWznX9otPSopE6trubvKK4NMdydCExmwwMQhAvsdBH%2FwpCNzfnSYXB%2BAf%2FYRD44KCeaEsRES3zW4LDdJvY0v%2FDyy2qRqwT1SQhFDyuomDv8oQN0AKuLvvrtY4G4fGZUXVYsJeNWfHgQM6qiAS3F%2FB54AFfgi1d%2Ff29WhaD8Pl9SDFuxCtvyT87z2RcjmgMjwj7GykFjvgoaDIJWLbxP9n5l3w7vFTkpXMljcQwi1sZde%2F3mnnluvs9y2Y1Wy44ZgJcBSOVPb2AgU5B%2BFRGzKe5dVkAg%2BRlxsum6dUva1vJQqTQiEGIfmjU%2F4gigCJZohMIyav8kGOqUBLIXg1oNVwnZCDNevLauwjfhHHrhl%2BkGSuU7EvTkk3Hfx62g2YJ0WQvBEU%2FWngAjEzincXZvOt51DtSI5OcdooADvsZH1NOcwNdQIiUiHfz9n%2FR4yWVXGJMZyPGQX7Mmmi9BKcFHGIxJEsTAHxJhjVXjPW9AOQ%2FeXqCdCFcY6xkiE4K2dTzDop3SLSQxIvyKEWNhKhAEOAxstXDbhhO%2Bw6ktqUUi8&X-Amz-Signature=15c46f819a3dda6464c2f9aa1a98656d124e1265d285617cb235d7239f4020bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

