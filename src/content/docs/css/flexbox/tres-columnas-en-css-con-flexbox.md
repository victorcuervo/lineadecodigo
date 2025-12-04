---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GNYQEHO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIEgMPDjXY1ZSHoIqy9u7fsRqQUxpcS8qmcTo%2BAemp1S4AiEAxYfEXXdXDkkk8hvbFNP3Gs9uqOn2Xjrz9oJNNX%2FkKkAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDK1GOweK0JIQk4a%2BGSrcAwbRz0%2F5yebz%2BpKHSLIjMNRosgrSLtW%2FcOcjwAajV0j2CSXz5zLt4Wtg2aPqe%2BQZcS0SkTJt0QzZAxcXg8lRKE0Btivq0HSdUA5l8iAF8RwalRFADb3tjf3PfFImrRQ3loJQv8V10WJAwBawqWYFv3Ac%2BkLQPP5qwtCwCbKhTowEhGX7L%2FsabLFoL3RQ0SlFFLz1wxsk7ZoX4I919omoralUckyPzBwMjnnld9HtTDaW1mNVgGGg%2BA4pJ0Jss%2BzqwhlH6XjjDD9izifjF%2BtinKoGXdK819xkdrsC8WnmJgMSUcff7b0Jl46ajzqMo2eUhf7QNZT4oPyh3WtuWgS266y9vetULO0WmwkDhyrrMOSv84jA7ocGdM9K38KNMdMpjMYZ0T9zywMCUkU3OquDJTySoqQMvzbLcwPeuu9s9DaMSh1Fw704df7ErUpF6xKT%2BQtQINHR5c3jkNCeCi90LnzYQ6OdLAmZtFQqxSmLmCDNVIytfGWxJpRZJkFilOWTGdvCA3u7Rak2DOwl6ldQf3nFycpHR88vrAj47zo71PJLO8IRF1l2%2B4XUObOI95K1F6FDSzzBxMutj%2F1ANE%2Fa1Sfz1joyPqWF5HxblWIgdQqWu1ggc5EI7jgPjMdxMNfJxckGOqUBLm%2Fsj%2BnHDfsQEmbTrw6awLHuw9lgClo4ZLNz4GTXC60dVVjVR%2BeO1sbltyTxPA2Noc%2Fg40m8htADgRjlJx9Y5sXkkxjWcqQpwjXK3fMj9wPnxB2FVRGN19k9AnWXwvSl8gXHPQ0jIiL37aNWPARxjGAN5mkIhHwheWt39werjBNNgBPAb4tcN8lMt61wS6ihHjHLfKV457nkPJKGfc1GPq27fqOF&X-Amz-Signature=a4cb30bd40ccccd54b50440b489031bfef655581383f90eb664c80fa2f3b3ea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GNYQEHO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIEgMPDjXY1ZSHoIqy9u7fsRqQUxpcS8qmcTo%2BAemp1S4AiEAxYfEXXdXDkkk8hvbFNP3Gs9uqOn2Xjrz9oJNNX%2FkKkAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDK1GOweK0JIQk4a%2BGSrcAwbRz0%2F5yebz%2BpKHSLIjMNRosgrSLtW%2FcOcjwAajV0j2CSXz5zLt4Wtg2aPqe%2BQZcS0SkTJt0QzZAxcXg8lRKE0Btivq0HSdUA5l8iAF8RwalRFADb3tjf3PfFImrRQ3loJQv8V10WJAwBawqWYFv3Ac%2BkLQPP5qwtCwCbKhTowEhGX7L%2FsabLFoL3RQ0SlFFLz1wxsk7ZoX4I919omoralUckyPzBwMjnnld9HtTDaW1mNVgGGg%2BA4pJ0Jss%2BzqwhlH6XjjDD9izifjF%2BtinKoGXdK819xkdrsC8WnmJgMSUcff7b0Jl46ajzqMo2eUhf7QNZT4oPyh3WtuWgS266y9vetULO0WmwkDhyrrMOSv84jA7ocGdM9K38KNMdMpjMYZ0T9zywMCUkU3OquDJTySoqQMvzbLcwPeuu9s9DaMSh1Fw704df7ErUpF6xKT%2BQtQINHR5c3jkNCeCi90LnzYQ6OdLAmZtFQqxSmLmCDNVIytfGWxJpRZJkFilOWTGdvCA3u7Rak2DOwl6ldQf3nFycpHR88vrAj47zo71PJLO8IRF1l2%2B4XUObOI95K1F6FDSzzBxMutj%2F1ANE%2Fa1Sfz1joyPqWF5HxblWIgdQqWu1ggc5EI7jgPjMdxMNfJxckGOqUBLm%2Fsj%2BnHDfsQEmbTrw6awLHuw9lgClo4ZLNz4GTXC60dVVjVR%2BeO1sbltyTxPA2Noc%2Fg40m8htADgRjlJx9Y5sXkkxjWcqQpwjXK3fMj9wPnxB2FVRGN19k9AnWXwvSl8gXHPQ0jIiL37aNWPARxjGAN5mkIhHwheWt39werjBNNgBPAb4tcN8lMt61wS6ihHjHLfKV457nkPJKGfc1GPq27fqOF&X-Amz-Signature=c3dfe9d6c454d2094a9a41901ffcb6de4929a01c6c5032b4432690538b669ff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

